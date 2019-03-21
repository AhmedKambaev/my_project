import React, { Component } from 'react';
import BookListItem from '../book_list_item';
import './book_list.css';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksError,
    bookDelete, bookLikeAdded, buyBook,
    addToCart } from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../eror-indicator";

class BookList extends Component {

    componentDidMount() {
        const { bookstoreService, booksLoaded, booksError } = this.props;
        bookstoreService.getBooks()
            .then((data) => {
                booksLoaded(data);
            })
            .catch((err) => {
                booksError(err);
            });


       this.props.callAdd(this.addBook);
    };

    deleteBook = (id) => {
        this.props.bookDelete(id);
    };

    likeBook = (id) => {
        this.props.bookLikeAdded(id);
    };

    addBook = (newBook) => {
        if(newBook) {
           const { books } = this.props;
           const result = books.find((book) => book.id === newBook.id);
            if(result) {
                console.log('книга есть')
            } else {
                this.props.addToCart(newBook);
            }
        }
    };

    render() {
       const { books, shopping } = this.props;
       this.props.getBookToCartPage(shopping);
       if(this.props.loading) {
           return <Spinner/>;
       }
       if(this.props.error) {
           return <ErrorIndicator/>
       }
       return (
           <ul className='list-books'>
               {
                   books.map((book) => {
                       return (
                           <li key={book.id} className='book-cart'>
                               <BookListItem buyBook={this.props.buyBook} book={book} delete={this.deleteBook} addLike={this.likeBook} />
                           </li>
                       )
                   })
               }
           </ul>
       );
    }
};


const mapStateToProps = (state) => {
    return {
        books: state.books,
        error: state.error,
        shopping: state.shopping,
        loading: state.loading
    }
};

const mapDispatchToProps = {
    booksLoaded,
    booksError,
    bookDelete,
    buyBook,
    bookLikeAdded,
    addToCart,
    booksRequested
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
import React from 'react';
import BookList from '../book_list';
import FormAdded from '../form_added_book';
import { Link } from 'react-router-dom';
import './pages.css';

class HomePage extends React.Component {
    state = {
        displayForm: false,
        book: null,
        add: function(){}
    };

    displayFunc = (e) => {
        if(e) e.preventDefault();
        const display = !this.state.displayForm;
        this.setState({displayForm: display});
    };

    addBook = (book) => {
        this.setState({book: book});
    };

    add = (call) => {
        this.setState({add: call});
    }

    getBookToCartPage = (books) => {
        this.props.getBooks(books);
    };

    render() {
        if(this.state.displayForm) {
            return (
                <div>
                    <div className="menu">
                        <div className="logo-block">
                            <Link className="cart-link" to="/">Библиотека</Link>
                            <Link className="cart-link" to="/cart">Склад</Link>
                        </div>
                    </div>
                    <div className="library">
                        <div className="button-block">
                            <button onClick={this.displayFunc} className="ui secondary button">Добавить книгу</button>
                        </div>
                        <BookList callAdd={this.add} newBook={this.state.book} getBookToCartPage={this.getBookToCartPage} />
                    </div>
                    <FormAdded add={this.state.add} display={this.displayFunc} addBook={this.addBook} />
                </div>
            );
        };
        return (
            <div>
                <div className="menu">
                    <div className="logo-block">
                        <Link className="cart-link" to="/">Библиотека</Link>
                        <Link className="cart-link" to="/cart">Склад</Link>
                    </div>
                </div>
                <div className="library">
                    <div className="button-block">
                        <button onClick={this.displayFunc} className="ui secondary button">Добавить книгу</button>
                    </div>
                    <BookList callAdd={this.add} idDel={this.props.idDel}  newBook={this.state.book} getBookToCartPage={this.getBookToCartPage} />
                </div>
            </div>
        )
    }
};
export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

class CartPage extends React.Component {

    state = {
        displayRead: false,
        id: null
    };

    getDisplay = (id) => {
        this.setState(() => {
            return {
                displayRead: true,
                id: id
            };
        });
    };

    notDisplay = () => {
        this.setState(() => {
            return {
                displayRead: false,
                id: null
            };
        });
    };

    cartBooks = () => {
        const { books } = this.props;
        if(books) {
            const rend = books.map((book) => {
                return (
                    <div key={book.id} className="item block-shop">
                        <div className="image">
                            <img src={book.image} alt="картинка" />
                        </div>
                        <div className="content">
                            <Link to="/cart" className="header">{book.title}</Link>
                            <div className="meta meta-header">
                                <span className="cinema">Автор: {book.author}</span>
                                <span className="time">{book.time}</span>
                            </div>
                            <div className="description">
                                <p>
                                    {book.text}
                                </p>
                            </div>
                            <div className="extra control-block">
                                <div className="block-likes">Лайков: {book.likes}</div>
                                <div className="block-buttons">
                                    <button onClick={() => this.getDisplay(book.id)} className="ui button blue read-book">Читать</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
            return rend;
        }
    };

    blockReadBook = (id) => {
          const { books } = this.props;
          const book = books.find((book) => book.id === id);
          let style = {display: 'none'};
          if(this.state.displayRead) {
              style = {display: 'flex'}
          }
          return (
              <div className="pop-up-reading" style={style}>
                  <div className="block-reading">
                      <h1 className="title-book">
                          {book.title}
                      </h1>
                      <p className="text-book">
                          {book.text}
                      </p>
                      <div className="info-block">
                          <span className="block-author">
                              <span className="author">{book.author}</span>
                              <span className="time">{book.time}</span>
                          </span>
                      </div>
                      <div className="block-regular">
                          <span className="likes-book">Лайков: {book.likes}</span>
                          <span className="block-close">
                              <button onClick={this.notDisplay} className="close-button ui red button">Закрыть</button>
                          </span>
                      </div>
                  </div>
              </div>
          );
    };

    render() {
        if(this.state.displayRead) {
            return (
                <div>
                    <div className="menu">
                        <div className="logo-block">
                            <Link className="cart-link" to="/">Библиотека</Link>
                            <Link className="cart-link" to="/cart">Склад</Link>
                        </div>
                    </div>
                    <div className="library-shop">
                        <div className="ui divided items block-shopping">
                            {this.cartBooks()}
                        </div>
                    </div>
                    {this.blockReadBook(this.state.id)}
                </div>
            );
        }
        return (
            <div>
                <div className="menu">
                    <div className="logo-block">
                        <Link className="cart-link" to="/">Библиотека</Link>
                        <Link className="cart-link" to="/cart">Склад</Link>
                    </div>
                </div>
                <div className="library-shop">
                    <div className="ui divided items block-shopping">
                        {this.cartBooks()}
                    </div>
                </div>
            </div>
        );
    }
};
export default CartPage;
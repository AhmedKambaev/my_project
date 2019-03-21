import React, { Fragment } from 'react';
import './book_list_item.css';
import img from './images/book.jpg';
import { Link } from 'react-router-dom';

class BookListItem extends React.Component {
    state = {
        displayInfo: false,
        display: false
    }

    move = () => {
        this.setState(({displayInfo}) => {
            const dis = true;
            return {
                displayInfo: dis
            }
        });
    };

    leave = () => {
        this.setState(({displayInfo}) => {
            const dis = false;
            return {
                displayInfo: dis
            }
        });
    };

    popUp = (title) => {
        if(this.state.display) {
            setTimeout(() => {
                this.setState({display: false});
            }, 1000);
            return (
                <div className="block-up-buy">
                    <div className="block-message">
                        <p>Добавлено!</p>
                    </div>
                </div>
            );
        }
    };

    buyBook = (book) => {
        this.props.buyBook(book.id);
        this.setState({display: true});
        this.popUp(book.title);
    };

    render() {
        const {id, title, author, price, likes, image, time} = this.props.book;
        let styleBg;
        let styleDimmer = 'hidden';
        if(this.state.displayInfo) {
            styleBg = 'dimmed';
            styleDimmer = 'visible active';
        }
        return (
            <Fragment>
                <div className="ui special cards">
                    <div className="card" onPointerEnter={this.move} onPointerLeave={this.leave}>
                        <div className={`blurring dimmable image overflow ${styleBg}`}>
                            <div className={`ui dimmer ${styleDimmer}`}>
                            <div className="price-block">{price}$</div>
                                <div className="content">
                                    <div className="center">
                                        <button onClick={() => this.buyBook(this.props.book)} className="ui inverted button">Купить</button>
                                    </div>
                                </div>
                            </div>
                            <img src={image} alt="картинка" />
                        </div>
                        <div className="content">
                            <Link to="/" className="header title-center">{title}</Link>
                            <div className="meta d-flex">
                                <span className="date">{author}</span>
                                <span className='time-cart'>{time}</span>
                            </div>
                        </div>
                        <div className="extra content block-buttons">
                            <div onClick={() => this.props.addLike(id)} className="ui labeled button" tabIndex="0">
                                <div data-tooltip="Поставить лайк" data-position="bottom right" className="ui red button"><i className="heart icon"></i> Like</div>
                                <button className="ui basic red left pointing label">
                                    {likes}
                                </button>
                            </div>
                            <button onClick={() => this.props.delete(id)}
                                    className="ui button right-float" data-tooltip="Удалить с библиотеки" data-position="bottom left">
                                <i className="trash alternate icon"></i>Удалить
                            </button>
                        </div>
                    </div>
                </div>
                {
                    this.popUp()
                }
            </Fragment>
        );
    }
};


export default BookListItem;
import React, { Component } from 'react';
import './form_added_book.css';

export default class FormAdded extends Component{
    state = {
        title: null,
        author: null,
        price: 0,
        image: null,
        text: null
    };

    addedForm = (e) => {
        const body = e.target;
        const name = body.dataset.name;
        switch(name) {
            case 'title':
                this.setState({title: body.value});
                break;
            case 'author':
                this.setState({author: body.value});
                break;
            case 'price':
                this.setState({price: body.value});
                break;
            case 'image':
                this.setState({image: body.value});
                break;
            case 'text':
                this.setState({text: body.value});
                break;
            default:
                return;
        };
    };

    addBook = (e) => {
        e.preventDefault();
        const { title, author, image, text } = this.state;
        const { add } = this.props;
        if(title && author && image && text) {
            add(this.state);
            this.props.display();
        }
    };

    render() {
        const { display } = this.props;
        return (
            <div className="block-form">
                <form className="ui form">
                    <h4 className="ui dividing header">Информация о книге</h4>
                    <div className="field">
                        <label>Наименование и автор</label>
                        <div className="two fields">
                            <div className="field">
                                <input onChange={this.addedForm} data-name="title" type="text" name="shipping[first-name]" placeholder="Название" required />
                            </div>
                            <div className="field">
                                <input onChange={this.addedForm} data-name="author" type="text" name="shipping[last-name]" placeholder="Автор" required />
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label>Данные</label>
                        <div className="two fields">
                            <div className="field">
                                <input onChange={this.addedForm} data-name="price" type="number"
                                       name="shipping[first-name]" placeholder="Цена" max="10000" min="0" required />
                            </div>
                            <div className="field">
                                <input onChange={this.addedForm} data-name="image" type="text"
                                       name="shipping[last-name]" placeholder="URL картинки" required />
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label>Текст книги</label>
                        <textarea onChange={this.addedForm} data-name="text" placeholder="text" required ></textarea>
                    </div>
                    <div className="field">
                        <button onClick={this.addBook} className="ui primary button" style={{float: 'right'}}>Добавить</button>
                        <button onClick={display} className="ui red button" style={{float: 'right', marginRight: 10 + 'px'}}>Закрыть</button>
                    </div>
                </form>
            </div>
        );
    };
};
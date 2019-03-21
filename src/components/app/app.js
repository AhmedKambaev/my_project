import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';

class App extends React.Component {
    books = null;
    state = {
        idDelStore: null
    }

    getBooks = (books) => {
        this.books = books;
    };

    render() {
        return (
            <Switch>
                <Route
                    path="/"
                    component={() => <HomePage idDel={this.state.idDelStore} getBooks={this.getBooks} />}
                    exact/>
                <Route
                    path="/cart"
                    component={() => <CartPage books={this.books} />}
                    exact/>
            </Switch>
        );
    }
};

export default App;
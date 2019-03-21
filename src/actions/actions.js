const addToCart = (book) => {
    return {
        type: 'BOOK_ADDED',
        payload: book
    }
};

const buyBook = (id) => {
    return {
        type: 'BUY_BOOK',
        payload: id
    }
};

const booksRequested = () => {
    return {
        type: 'BOOKS_REQUESTED'
    }
};

const bookDelete = (id) => {
    return {
        type: 'BOOK_DELETE',
        payload: id
    }
};

const booksError = (error) => {
    return {
        type: 'BOOKS_ERROR',
        payload: error
    }
};

const bookLikeAdded = (id) => {
    return {
        type: 'LIKE_ADDED_BOOK',
        payload: id
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    }
};

export {
    addToCart,
    bookDelete,
    buyBook,
    booksRequested,
    booksError,
    bookLikeAdded,
    booksLoaded
};
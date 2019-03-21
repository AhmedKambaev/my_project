
const initialState = {
    books: [],
    error: null,
    shopping: [],
    loading: true
};
const reducer = (state = initialState, action) => {
    let idBook = 20;

    switch(action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload,
                error: null,
                shopping: state.shopping,
                loading: false
            };
        case 'BOOKS_REQUESTED':
            return {
                books: [],
                error: null,
                shopping: state.shopping,
                loading: true
            };
        case 'BOOKS_ERROR':
            return {
                books: [],
                loading: false,
                shopping: state.shopping,
                error: action.payload
            };
        case 'BOOK_DELETE':
            const ident = action.payload;
            const idx = state.books.findIndex((el) => el.id === ident);
            const newArray = [
                ...state.books.slice(0, idx),
                ...state.books.slice(idx + 1)
            ];
            return {
                ...state,
                books: newArray
            };
        case 'LIKE_ADDED_BOOK':
            const idLike = action.payload;
            const bookLike = state.books.find((el) => el.id === idLike);
            const bookLikeId = state.books.findIndex((el) => el.id === idLike);
            const newLikes = bookLike.likes + 1;
            bookLike.likes = newLikes;
            return {
                ...state,
                books: [
                    ...state.books.slice(0, bookLikeId),
                    bookLike,
                    ...state.books.slice(bookLikeId + 1)
                ]
            };
        case 'BOOK_ADDED':
            const book = action.payload;
            const newItem = {
                id: idBook++,
                title: book.title,
                author: book.author,
                likes: 0,
                price: book.price,
                text: book.text,
                image: book.image,
                time: new Date().getHours() + ':' + new Date().getMinutes()
            };
            return {
                ...state,
                books: [
                    ...state.books,
                    newItem
                ]
            };
        case 'BUY_BOOK':
            const idBuy = action.payload;
            const bookShop = state.books.find((el) => el.id === idBuy);
            const searchBook = state.shopping.find((el) => el.id === idBuy);
            if(!searchBook) {
                return {
                    ...state,
                    shopping: [...state.shopping, bookShop]
                };
            }
            return state;
        default:
            return state;
    }
};

export default reducer;
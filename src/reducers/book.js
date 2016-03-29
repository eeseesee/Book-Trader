import { SIGN_OUT, FETCH_BOOKS, FETCH_USER_BOOKS, ADD_BOOK, DELETE_BOOK, DELETE_USER_BOOKS } from '../actions/types';

export default function(books = [], action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return action.payload.data
    case FETCH_USER_BOOKS:
      return action.payload.data
    case ADD_BOOK:
      return [action.payload.data, ...books]
    case DELETE_BOOK:
      return books.filter((book) => {
        return book._id !== action.payload.data._id
      })
    case DELETE_USER_BOOKS:
      return books.filter((book) => {
        return book.addedBy !== action.payload.data._id
      })
    case SIGN_OUT:
      return []
    default:
      return books;
  }
}

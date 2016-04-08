import { FETCH_BOOKS, ADD_BOOK, DELETE_BOOK, DELETE_USER, REQUEST_BOOK, APPROVE_REQUEST, REMOVE_REQUEST } from '../actions/types';

export default function(books = [], action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return action.payload.data
    case ADD_BOOK:
      return [ ...books, action.payload.data]
    case DELETE_BOOK:
      return books.filter((book) => {
        return book._id !== action.payload.data._id
      })
    case DELETE_USER:
      return books
      .filter((book) => {
        return book.addedBy !== action.payload.data._id
      })
      .map((book) => {
        if (book.userRequest) {
          if (book.userRequest.user === action.payload.data._id) {
            book.userRequest = undefined
            return book
          }
        }
        return book
      })
    case REQUEST_BOOK:
      return books.map((book) => {
        if (book._id === action.payload.data._id) {
          return action.payload.data
        }
        return book
      })
    case APPROVE_REQUEST:
      return books.map((book) => {
        if (book._id === action.payload.data._id) {
          return action.payload.data
        }
        return book
      })
    case REMOVE_REQUEST:
      return books.map((book) => {
        if (book._id === action.payload.data._id) {
          return action.payload.data
        }
        return book
      })
    default:
      return books
  }
}

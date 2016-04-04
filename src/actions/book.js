import axios from 'axios';

import {
  FETCH_BOOKS,
  ADD_BOOK,
  DELETE_BOOK
} from './types';

// BOOK ACTIONS
export function fetchBooks() {
  const request = axios({
    method: 'get',
    url: '/books'
  });

  return {
    type: FETCH_BOOKS,
    payload: request
  };
}

export function addBook(googleBook, token) {
  const book = {};
  book.title = googleBook.title;
  book.authors = googleBook.authors;
  book.description = googleBook.description;
  book.thumbnail = googleBook.imageLinks.smallThumbnail;
  book.google_id = googleBook.id;

  const bookRequest = axios({
    method: 'post',
    url: '/books',
    headers: {'Authorization': 'JWT '.concat(token)},
    data: book
  });

  return {
    type: ADD_BOOK,
    payload: bookRequest
  };
}

export function deleteBook(bookID, token) {
    const deleteRequest = axios({
    method: 'delete',
    url: '/books',
    headers: {'Authorization': 'JWT '.concat(token)},
    data: {
      _id: bookID
    }
  });

  return {
    type: DELETE_BOOK,
    payload: deleteRequest
  };
}

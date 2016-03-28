import axios from 'axios';

import {
  SIGN_UP,
  SIGN_OUT,
  SIGN_IN,
  SET_MESSAGE,
  FETCH_USER,
  UPDATE_USER,
  DELETE_USER,
  FETCH_BOOKS,
  FETCH_USER_BOOKS,
  ADD_BOOK,
  DELETE_BOOK,
  DELETE_USER_BOOKS
} from './types';

// AUTH ACTIONS
export function signUpUser(name, email, password) {
  const signupRequest = axios({
    method: 'post',
    url: '/signup',
    data: {
      dispName: name,
      email: email,
      password: password
    }
  });

  return {
    type: SIGN_UP,
    payload: signupRequest
  };
}

export function signOutUser() {
  return {
    type: SIGN_OUT
  }
}

export function signInUser(email, password) {
  const signinRequest = axios({
    method: 'post',
    url: '/signin',
    data: {
      email: email,
      password: password
    }
  });

  return {
    type: SIGN_IN,
    payload: signinRequest
  };
}

// MESSAGE ACTIONS
export function setMessage(message) {
  return {
    type: SET_MESSAGE,
    payload: message
  }
}

// USER ACTIONS
export function fetchUser(token) {
  const userRequest = axios({
    method: 'get',
    url: '/user',
    headers: {'Authorization': 'JWT '.concat(token)}
  });

  return {
    type: FETCH_USER,
    payload: userRequest
  };
}

export function updateUser(user, token) {
  const updateRequest = axios({
    method: 'put',
    url: '/user',
    headers: {'Authorization': 'JWT '.concat(token)},
    data: {
      user: user
    }
  });

  return {
    type: UPDATE_USER,
    payload: updateRequest
  };
}

export function deleteUser(token) {
  const updateRequest = axios({
    method: 'delete',
    url: '/user',
    headers: {'Authorization': 'JWT '.concat(token)}
  });

  return {
    type: DELETE_USER,
    payload: updateRequest
  };
}

// BOOK ACTIONS
export function fetchBooks(token) {
  const userRequest = axios({
    method: 'get',
    url: '/books',
    headers: {'Authorization': 'JWT '.concat(token)}
  });

  return {
    type: FETCH_BOOKS,
    payload: userRequest
  };
}

export function fetchUserBooks(token) {
  const userRequest = axios({
    method: 'get',
    url: '/books/user',
    headers: {'Authorization': 'JWT '.concat(token)}
  });

  return {
    type: FETCH_USER_BOOKS,
    payload: userRequest
  };
}

export function addBook(book, token) {
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

export function deleteUserBooks(token) {
    const deleteRequest = axios({
    method: 'delete',
    url: '/books/user',
    headers: {'Authorization': 'JWT '.concat(token)}
  });

  return {
    type: DELETE_USER_BOOKS,
    payload: deleteRequest
  };
}

// REQUEST ACTIONS

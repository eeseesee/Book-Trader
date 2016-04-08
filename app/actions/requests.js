import axios from 'axios';

import {
  REQUEST_BOOK,
  APPROVE_REQUEST,
  REMOVE_REQUEST
} from './types'

// REQUEST ACTIONS
export function requestBook(bookID, token) {
  const requestRequest = axios({
    method: 'post',
    url: '/books/request',
    headers: {'Authorization': 'JWT '.concat(token)},
    data: {
      _id: bookID
    }
  })

  return {
    type: REQUEST_BOOK,
    payload: requestRequest
  }
}

export function approveRequest(bookID, token) {
    const approveRequest = axios({
    method: 'put',
    url: '/books/request',
    headers: {'Authorization': 'JWT '.concat(token)},
    data: {
      _id: bookID
    }
  })

  return {
    type: APPROVE_REQUEST,
    payload: approveRequest
  };
}

export function removeRequest(bookID, token) {
    const removeRequest = axios({
    method: 'delete',
    url: '/books/request',
    headers: {'Authorization': 'JWT '.concat(token)},
    data: {
      _id: bookID
    }
  })

  return {
    type: REMOVE_REQUEST,
    payload: removeRequest
  }
}

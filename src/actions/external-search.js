import axios from 'axios';
import config from '../../config';

import {
  EXTERNAL_SEARCH,
  CLEAR_SEARCH
} from './types';

// SEARCH ACTIONS
export function externalSearch(search) {
  const query = encodeURIComponent(search);
  const googleBooksAPI = 'https://www.googleapis.com/books/v1/volumes?q=' + query + '&key=' + config.GOOGLE_BOOKS_KEY;


  const externalRequest = axios({
    method: 'get',
    url: googleBooksAPI,
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  });

  return {
    type: EXTERNAL_SEARCH,
    payload: externalRequest
  };
}

export function clearSearch() {
  return {
    type: CLEAR_SEARCH
  };
}

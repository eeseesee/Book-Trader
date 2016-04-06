import axios from 'axios'

import {
  EXTERNAL_SEARCH,
  CLEAR_SEARCH
} from './types'

// SEARCH ACTIONS
export function externalSearch(search, token) {

  const externalRequest = axios({
    method: 'post',
    url: '/external',
    headers: {'Authorization': 'JWT '.concat(token)},
    data: {
      search: search
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

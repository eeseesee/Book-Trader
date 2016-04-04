import axios from 'axios';
import { signOutUser } from '../actions/auth'

import {
  FETCH_USER,
  UPDATE_USER,
  DELETE_USER
} from './types';

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

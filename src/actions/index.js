import axios from 'axios';

import { SIGN_UP, SIGN_OUT, SIGN_IN, SET_MESSAGE, FETCH_USER } from './types';

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

export function setMessage(message) {
  return {
    type: SET_MESSAGE,
    payload: message
  }
}

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

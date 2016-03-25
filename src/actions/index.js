import axios from 'axios';

import ActionTypes from './types';

export function signUpUser(email, password) {
  const signupRequest = axios({
    method: 'post',
    url: '/signup',
    data: {
      email: email,
      password: password
    }
  });

  return {
    type: ActionTypes.SIGN_UP,
    payload: signupRequest
  };
}

export function signOutUser() {
  return {
    type: ActionTypes.SIGN_OUT
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
    type: ActionTypes.SIGN_IN,
    payload: signinRequest
  };
}

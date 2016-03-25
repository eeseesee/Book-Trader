import axios from 'axios';

import ActionTypes from './types';

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

export function setMessage(message) {
  return {
    type: ActionTypes.SET_MESSAGE,
    payload: message
  }
}

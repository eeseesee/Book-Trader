import { SIGN_UP, SIGN_OUT, SIGN_IN } from '../actions/types';

export default function(state = { authenticated: false, token: '' }, action) {
  switch (action.type) {
    case SIGN_UP:
      return Object.assign({}, state, {
        authenticated: true,
        token: action.payload.data.token
      })
    case SIGN_OUT:
      return Object.assign({}, state, {
        authenticated: false,
        token: ''
      })
    case SIGN_IN:
      return Object.assign({}, state, {
        authenticated: true,
        token: action.payload.data.token
      })
  }

  return state;
}

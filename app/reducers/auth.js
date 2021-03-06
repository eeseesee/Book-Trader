import { SIGN_UP, SIGN_OUT, SIGN_IN, DELETE_USER } from '../actions/types';

export default function(auth = { authenticated: false, token: '' }, action) {
  switch (action.type) {
    case SIGN_UP:
      return Object.assign({}, auth, {
        authenticated: true,
        token: action.payload.data.token
      })
    case SIGN_OUT:
      return Object.assign({}, auth, {
        authenticated: false,
        token: ''
      })
    case SIGN_IN:
      return Object.assign({}, auth, {
        authenticated: true,
        token: action.payload.data.token
      })
    case DELETE_USER:
      return Object.assign({}, auth, {
        authenticated: false,
        token: ''
      })
    default:
      return auth
  }

}

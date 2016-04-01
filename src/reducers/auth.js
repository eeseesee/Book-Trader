import { SIGN_UP, SIGN_OUT, SIGN_IN } from '../actions/types';

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
    default:
      return auth
  }

}

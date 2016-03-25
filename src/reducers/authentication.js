import ActionTypes from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case ActionTypes.SIGN_UP:
      return {
        authenticated: true,
        token: action.payload.data.token
      }
    case ActionTypes.SIGN_OUT:
      return {
        authenticated: false,
        token: ''
      }
    case ActionTypes.SIGN_IN:
      return {
        authenticated: true,
        token: action.payload.data.token
      }
  }

  return state;
}

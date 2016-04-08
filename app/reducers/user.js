import { SIGN_OUT, FETCH_USER, UPDATE_USER, DELETE_USER } from '../actions/types';

export default function(user = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return Object.assign({}, user,
        action.payload.data
      )
    case UPDATE_USER:
      return Object.assign({}, user,
        action.payload.data
      )
    case DELETE_USER:
      return {}
    case SIGN_OUT:
      return {}  
    default:
      return user;
  }
}

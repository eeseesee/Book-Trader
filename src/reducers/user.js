import { FETCH_USER, UPDATE_USER } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return Object.assign({}, state,
        action.payload.data
      )
    case UPDATE_USER:
      return Object.assign({}, state,
        action.payload.data
      )
  }

  return state;
}

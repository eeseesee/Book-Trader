import { SET_MESSAGE } from '../actions/types';

export default function(state = '', action) {
  switch (action.type) {
    case SET_MESSAGE:
      return Object.assign({}, state, {
        message: action.payload
      })
  }

  return state;
}

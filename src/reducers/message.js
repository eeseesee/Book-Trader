import ActionTypes from '../actions/types';

export default function(state = '', action) {
  switch (action.type) {
    case ActionTypes.SET_MESSAGE:
      return {
        message: action.payload
      }
  }

  return state;
}

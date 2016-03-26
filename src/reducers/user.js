import { FETCH_USER } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return Object.assign({}, state, {
        _id: action.payload.data._id,
        dispName: action.payload.data.dispName,
        email: action.payload.data.email
      })
  }

  return state;
}

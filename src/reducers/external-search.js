import { EXTERNAL_SEARCH, CLEAR_SEARCH } from '../actions/types';

export default function(searchResults = [], action) {
  switch (action.type) {
    case EXTERNAL_SEARCH:
      return action.payload.data.items
    case CLEAR_SEARCH:
      return []
    default:
      return searchResults
  }
}

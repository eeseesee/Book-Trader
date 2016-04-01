import { combineReducers } from 'redux';
import authReducer from './auth';
import messageReducer from './message';
import userReducer from './user';
import bookReducer from './book';
import externalSearchReducer from './external-search';

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  user: userReducer,
  books: bookReducer,
  searchResults: externalSearchReducer
});

export default rootReducer;

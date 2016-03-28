import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import messageReducer from './message';
import userReducer from './user';
import bookReducer from './book';

const rootReducer = combineReducers({
  auth: authenticationReducer,
  message: messageReducer,
  user: userReducer,
  books: bookReducer
});

export default rootReducer;

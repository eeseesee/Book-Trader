import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import messageReducer from './message';
import userReducer from './user';

const rootReducer = combineReducers({
  auth: authenticationReducer,
  message: messageReducer,
  user: userReducer
});

export default rootReducer;

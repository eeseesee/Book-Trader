import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import messageReducer from './message';

const rootReducer = combineReducers({
  auth: authenticationReducer,
  message: messageReducer
});

export default rootReducer;

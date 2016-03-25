import { combineReducers } from 'redux';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  auth: authenticationReducer
});

export default rootReducer;

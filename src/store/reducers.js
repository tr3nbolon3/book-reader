import { combineReducers } from 'redux';
import app from './ducks/app/appReducer';
import session from './ducks/session/sessionReducer';

export default combineReducers({
  app,
  session,
});

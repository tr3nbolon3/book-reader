import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as sessionActions from './sessionActions';

const isLoggedIn = handleActions(
  {
    [sessionActions.firstAction]() {
      return true;
    },
  },
  false,
);

export default combineReducers({
  isLoggedIn,
});

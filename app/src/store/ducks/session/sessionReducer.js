import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';
import * as sessionActions from './sessionActions';

const isLoading = handleActions(
  {
    [combineActions(sessionActions.signInRequest, sessionActions.signUpRequest)]() {
      return true;
    },
    [combineActions(
      sessionActions.signInSuccess,
      sessionActions.signUpSuccess,
      sessionActions.signInFailure,
      sessionActions.signUpFailure,
    )]() {
      return false;
    },
  },
  false,
);

export default combineReducers({
  isLoading,
});

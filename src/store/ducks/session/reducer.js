import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';
import * as userActions from './actions';

const isSignedIn = handleActions(
  {
    [combineActions(userActions.signInSuccess, userActions.signUpSuccess)]() {
      return true;
    },
    [combineActions(userActions.validateTokenFailure, userActions.signOutSuccess)]() {
      return false;
    },
  },
  false,
);

const signingInState = handleActions(
  {
    [userActions.signInRequest]() {
      return 'requested';
    },
    [userActions.signInSuccess]() {
      return 'success';
    },
    [userActions.signInFailure]() {
      return 'failed';
    },
  },
  'none',
);

const signingUpState = handleActions(
  {
    [userActions.signUpRequest]() {
      return 'requested';
    },
    [userActions.signUpSuccess]() {
      return 'success';
    },
    [userActions.signUpFailure]() {
      return 'failed';
    },
  },
  'none',
);

const validationTokenState = handleActions(
  {
    [userActions.validateTokenRequest]() {
      return 'requested';
    },
    [userActions.validateTokenSuccess]() {
      return 'success';
    },
    [userActions.validateTokenFailure]() {
      return 'failed';
    },
  },
  'none',
);

const userData = handleActions(
  {
    [combineActions(userActions.signInSuccess, userActions.signUpSuccess, userActions.validateTokenSuccess)](
      _,
      { payload: newUserData },
    ) {
      return newUserData;
    },
    [userActions.signOutSuccess]() {
      return {};
    },
  },
  {},
);

export default combineReducers({
  isSignedIn,
  signingInState,
  signingUpState,
  validationTokenState,
  userData,
});

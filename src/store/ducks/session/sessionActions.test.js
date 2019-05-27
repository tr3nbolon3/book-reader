import * as sessionActions from './sessionActions';
import * as sessionTypes from './sessionTypes';

describe('sessionActions', () => {
  [
    [sessionActions.signInRequest, sessionTypes.SIGN_IN_REQUEST],
    [sessionActions.signInSuccess, sessionTypes.SIGN_IN_SUCCESS],
    [sessionActions.signInFailure, sessionTypes.SIGN_IN_FAILURE],
    [sessionActions.signUpRequest, sessionTypes.SIGN_UP_REQUEST],
    [sessionActions.signUpSuccess, sessionTypes.SIGN_UP_SUCCESS],
    [sessionActions.signUpFailure, sessionTypes.SIGN_UP_FAILURE],
    [sessionActions.signOutRequest, sessionTypes.SIGN_OUT_REQUEST],
    [sessionActions.signOutSuccess, sessionTypes.SIGN_OUT_SUCCESS],
    [sessionActions.signOutFailure, sessionTypes.SIGN_OUT_FAILURE],
  ].forEach(([func, type]) => {
    it(type, () => {
      expect(func()).toEqual({ type });
    });
  });
});

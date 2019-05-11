import { createAction } from 'redux-actions';
// import AuthService from '../../services/AuthService';

export const signInRequest = createAction('SIGN_IN_REQUEST');
export const signInSuccess = createAction('SIGN_IN_SUCCESS');
export const signInFailure = createAction('SIGN_IN_FAILURE');

export const signUpRequest = createAction('SIGN_UP_REQUEST');
export const signUpSuccess = createAction('SIGN_UP_SUCCESS');
export const signUpFailure = createAction('SIGN_UP_FAILURE');

export const validateTokenRequest = createAction('VALIDATE_TOKEN_REQUEST');
export const validateTokenSuccess = createAction('VALIDATE_TOKEN_SUCCESS');
export const validateTokenFailure = createAction('VALIDATE_TOKEN_FAILURE');

export const signOutSuccess = createAction('SIGN_OUT_SUCCESS');

// export const signIn = values => async dispatch => {
//   dispatch(signInRequest());
//   try {
//     const { data: userData } = await AuthService.signIn(values);
//     dispatch(signInSuccess(userData));
//   } catch (e) {
//     dispatch(signInFailure());
//   }
// };

// export const signUp = values => async dispatch => {
//   dispatch(signUpRequest());
//   try {
//     const { data: userData } = await AuthService.signUp(values);
//     dispatch(signUpSuccess(userData));
//   } catch (e) {
//     dispatch(signUpFailure());
//   }
// };

// export const validateToken = () => async dispatch => {
//   dispatch(validateTokenRequest());
//   try {
//     const userData = await AuthService.validateToken();
//     dispatch(validateTokenSuccess(userData));
//   } catch (e) {
//     dispatch(validateTokenFailure());
//   }
// };

// export const signOut = () => dispatch => {
//   AuthService.signOut();
//   localStorage.clear();
//   dispatch(signOutSuccess());
// };

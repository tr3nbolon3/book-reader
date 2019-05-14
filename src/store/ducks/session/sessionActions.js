import { createAction } from 'redux-actions';
import { showNotification, closeSignUpDialog, closeSignInDialog } from '@ducks/app/appActions';
import history from '@utils/history';
import * as paths from '@routes/paths';

import * as sessionTypes from './sessionTypes';
import handleSignInError from './handleSignInError';
import handleSignUpError from './handleSignUpError';

// SIGN IN FLOW
export const signInRequest = createAction(sessionTypes.SIGN_IN_REQUEST);
export const signInSuccess = createAction(sessionTypes.SIGN_IN_SUCCESS);
export const signInFailure = createAction(sessionTypes.SIGN_IN_FAILURE);

export const signIn = ({ email, password }) => async (dispatch, getState, { getFirebase }) => {
  dispatch(signInRequest());
  try {
    const firebase = getFirebase();
    await firebase.auth().signInWithEmailAndPassword(email, password);

    history.push(paths.LIBRARY);
    dispatch(closeSignInDialog());
    dispatch(showNotification({ type: 'success', message: 'Вход успешно осуществлен!' }));
    dispatch(signInSuccess());
  } catch (error) {
    handleSignInError({ error, dispatch, showNotification });
    dispatch(signInFailure());
  }
};

// SIGN UP FLOW
export const signUpRequest = createAction(sessionTypes.SIGN_UP_REQUEST);
export const signUpSuccess = createAction(sessionTypes.SIGN_UP_SUCCESS);
export const signUpFailure = createAction(sessionTypes.SIGN_UP_FAILURE);

export const signUp = ({ firstName, lastName, email, password }) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore },
) => {
  dispatch(signUpRequest());
  try {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firestore
      .collection('users')
      .doc(user.uid)
      .set({ firstName, lastName, initials: `${lastName[0]}.${firstName[0]}.` });

    history.push(paths.LIBRARY);
    dispatch(closeSignUpDialog());
    dispatch(showNotification({ type: 'success', message: 'Регистрация прошла успешно!' }));
    dispatch(signUpSuccess());
  } catch (error) {
    handleSignUpError({ error, dispatch, showNotification });
    dispatch(signUpFailure());
  }
};

// SIGN OUT FLOW
export const signOutRequest = createAction(sessionTypes.SIGN_OUT_REQUEST);
export const signOutSuccess = createAction(sessionTypes.SIGN_OUT_SUCCESS);
export const signOutFailure = createAction(sessionTypes.SIGN_OUT_FAILURE);

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  dispatch(signOutRequest());
  try {
    const firebase = getFirebase();
    await firebase.auth().signOut();

    history.push(paths.HOME);
    dispatch(signOutSuccess());
  } catch (error) {
    dispatch(showNotification({ type: 'error', message: 'Во время выхода произошла ошибка ' }));
    dispatch(signOutFailure());
  }
};

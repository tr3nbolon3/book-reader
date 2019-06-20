import { createAction } from 'redux-actions';
import { showNotification } from '@ducks/app/appActions';
import { getUser } from '@ducks/firebase/firebaseSelectors';
import * as firestoreTypes from '../firestoreTypes';

export const updateUserRequest = createAction(firestoreTypes.UPDATE_USER_REQUEST);
export const updateUserSuccess = createAction(firestoreTypes.UPDATE_USER_SUCCESS);
export const updateUserFailure = createAction(firestoreTypes.UPDATE_USER_FAILURE);

export const updateUser = formValues => async (dispatch, getState, { getFirestore }) => {
  dispatch(updateUserRequest());
  try {
    const { firstName, lastName } = formValues;
    const { uid: userId } = getUser(getState());

    const firestore = getFirestore();
    await firestore.doc(`users/${userId}`).update({ ...formValues, fullName: `${firstName} ${lastName}` });

    dispatch(updateUserSuccess());
    dispatch(showNotification({ type: 'success', message: 'Данные обновлены' }));
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
    dispatch(showNotification({ type: 'error', message: 'Что-то пошло нетак. Попробуйте снова' }));
    dispatch(updateUserFailure());
  }
};

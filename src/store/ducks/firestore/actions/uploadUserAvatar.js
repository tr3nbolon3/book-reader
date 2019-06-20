import { createAction } from 'redux-actions';
import { getUser } from '@ducks/firebase/firebaseSelectors';
import { showNotification } from '@ducks/app/appActions';
import * as firestoreTypes from '../firestoreTypes';

export const uploadUserAvatarRequest = createAction(firestoreTypes.UPLOAD_USER_AVATAR_REQUEST);
export const uploadUserAvatarSuccess = createAction(firestoreTypes.UPLOAD_USER_AVATAR_SUCCESS);
export const uploadUserAvatarFailure = createAction(firestoreTypes.UPLOAD_USER_AVATAR_FAILURE);

export const uploadUserAvatar = base64Avatar => async (dispatch, getState, { getFirestore }) => {
  dispatch(uploadUserAvatarRequest());
  try {
    const firestore = getFirestore();
    const state = getState();

    const user = getUser(state);

    await firestore.doc(`users/${user.uid}`).update({
      avatarUrl: base64Avatar,
    });

    dispatch(uploadUserAvatarSuccess());
    dispatch(showNotification({ type: 'success', message: 'Аватар обновлен' }));
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
    dispatch(showNotification({ type: 'error', message: 'Что-то пошло нетак. Попробуйте снова' }));
    dispatch(uploadUserAvatarFailure());
  }
};

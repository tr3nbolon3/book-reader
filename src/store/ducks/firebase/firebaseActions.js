// import { createAction } from 'redux-actions';
// import { showNotification } from '@ducks/app/appActions';
// import * as firebaseTypes from './firebaseTypes';

// export const uploadUserAvatarRequest = createAction(firebaseTypes.UPLOAD_USER_AVATAR_REQUEST);
// export const uploadUserAvatarSuccess = createAction(firebaseTypes.UPLOAD_USER_AVATAR_SUCCESS);
// export const uploadUserAvatarFailure = createAction(firebaseTypes.UPLOAD_USER_AVATAR_FAILURE);

// export const uploadUserAvatar = newAvatarPath => async (dispatch, getState, { getFirebase }) => {
//   console.log('newAvatarPath', newAvatarPath);

//   dispatch(uploadUserAvatarRequest());
//   try {
//     // const { storage } = await getFirebase();

//     // const storageRef = storage().ref();
//     // const fileRef = storageRef.child('test.txt');

//     // const snap = await fileRef.putString('Some File Contents');

//     // console.log('upload successful', snap);
//     dispatch(uploadUserAvatarSuccess());
//     dispatch(showNotification({ type: 'success', message: 'Книга удалена с вашей полки' }));
//   } catch (e) {
//     // eslint-disable-next-line
//     console.log(e);
//     dispatch(showNotification({ type: 'error', message: 'Что-то пошло нетак. Попробуйте снова' }));
//     dispatch(uploadUserAvatarFailure());
//   }
// };

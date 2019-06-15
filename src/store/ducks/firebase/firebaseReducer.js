import { firebaseReducer } from 'react-redux-firebase';
// import { combineReducers } from 'redux';
// import { handleActions, combineActions } from 'redux-actions';

// import * as firebaseActions from './firebaseActions';

// const isUploadingUserAvatar = handleActions(
//   {
//     [firebaseActions.uploadUserAvatarRequest]() {
//       return true;
//     },
//     [combineActions(firebaseActions.uploadUserAvatarFailure, firebaseActions.uploadUserAvatarSuccess)]() {
//       return false;
//     },
//   },
//   false,
// );

// export const firebaseCustom = combineReducers({
//   isUploadingUserAvatar,
// });

export default firebaseReducer;

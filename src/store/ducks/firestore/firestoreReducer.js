import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { handleActions, combineActions } from 'redux-actions';

import * as firestoreActions from './firestoreActions';

const isAddingComment = handleActions(
  {
    [firestoreActions.addCommentRequest]() {
      return true;
    },
    [combineActions(firestoreActions.addCommentFailure, firestoreActions.addCommentSuccess)]() {
      return false;
    },
  },
  false,
);

const isUserUpdating = handleActions(
  {
    [firestoreActions.updateUserRequest]() {
      return true;
    },
    [combineActions(firestoreActions.updateUserSuccess, firestoreActions.updateUserFailure)]() {
      return false;
    },
  },
  false,
);

const isUploadingUserAvatar = handleActions(
  {
    [firestoreActions.uploadUserAvatarRequest]() {
      return true;
    },
    [combineActions(firestoreActions.uploadUserAvatarFailure, firestoreActions.uploadUserAvatarSuccess)]() {
      return false;
    },
  },
  false,
);

export default combineReducers({
  isUserUpdating,
  isAddingComment,
  isUploadingUserAvatar,
  firestore: firestoreReducer,
});

import { createAction } from 'redux-actions';
import { showNotification } from '@ducks/app/appActions';
import * as firestoreTypes from '../firestoreTypes';

export const deleteCommentRequest = createAction(firestoreTypes.DELETE_COMMENT_REQUEST);
export const deleteCommentSuccess = createAction(firestoreTypes.DELETE_COMMENT_SUCCESS);
export const deleteCommentFailure = createAction(firestoreTypes.DELETE_COMMENT_FAILURE);

export const deleteComment = commentId => async (dispatch, getState, { getFirestore }) => {
  dispatch(deleteCommentRequest());
  try {
    const firestore = getFirestore();
    await firestore.doc(`comments/${commentId}`).delete();

    dispatch(deleteCommentSuccess());
    dispatch(showNotification({ type: 'success', message: 'Комментарий удален' }));
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
    dispatch(showNotification({ type: 'error', message: 'Что-то пошло нетак. Попробуйте снова' }));
    dispatch(deleteCommentFailure());
  }
};

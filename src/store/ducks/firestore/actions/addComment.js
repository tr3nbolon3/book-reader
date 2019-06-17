import { createAction } from 'redux-actions';
import { getUser } from '@ducks/firebase/firebaseSelectors';
import { showNotification } from '@ducks/app/appActions';
import * as firestoreTypes from '../firestoreTypes';

export const addCommentRequest = createAction(firestoreTypes.ADD_COMMENT_REQUEST);
export const addCommentSuccess = createAction(firestoreTypes.ADD_COMMENT_SUCCESS);
export const addCommentFailure = createAction(firestoreTypes.ADD_COMMENT_FAILURE);

export const addComment = ({ bookId, text }) => async (dispatch, getState, { getFirestore }) => {
  dispatch(addCommentRequest());
  try {
    const { uid: userId } = getUser(getState());

    const firestore = getFirestore();
    await firestore.collection('comments').add({ userId, bookId, text, createdAt: Date.now() });

    dispatch(addCommentSuccess());
    dispatch(showNotification({ type: 'success', message: 'Комментарий добавлен' }));
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
    dispatch(showNotification({ type: 'error', message: 'Что-то пошло нетак. Попробуйте снова' }));
    dispatch(addCommentFailure());
  }
};

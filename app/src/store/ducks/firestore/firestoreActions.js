import { createAction } from 'redux-actions';
import { getUser } from '@ducks/firebase/firebaseSelectors';
import { showNotification } from '@ducks/app/appActions';
import * as firestoreTypes from './firestoreTypes';

export const fetchBooksRequest = createAction(firestoreTypes.FETCH_BOOKS_REQUEST);
export const fetchBooksSuccess = createAction(firestoreTypes.FETCH_BOOKS_SUCCESS);
export const fetchBooksFailure = createAction(firestoreTypes.FETCH_BOOKS_FAILURE);

export const fetchBooks = () => async (dispatch, getState, { getFirestore }) => {
  dispatch(fetchBooksRequest());
  try {
    const firestore = getFirestore();
    const books = await firestore.get('books');

    dispatch(fetchBooksSuccess(books));
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
    dispatch(fetchBooksFailure());
  }
};

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

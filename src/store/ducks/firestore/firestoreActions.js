import { createAction } from 'redux-actions';
import { getUser } from '@ducks/firebase/firebaseSelectors';
import { showNotification } from '@ducks/app/appActions';
import * as firestoreTypes from './firestoreTypes';
import getOrderedBooksMeta from './selectors/getOrderedBooksMeta';

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

export const addBookToMyBooksRequest = createAction(firestoreTypes.ADD_BOOK_TO_MY_BOOKS_REQUEST);
export const addBookToMyBooksSuccess = createAction(firestoreTypes.ADD_BOOK_TO_MY_BOOKS_SUCCESS);
export const addBookToMyBooksFailure = createAction(firestoreTypes.ADD_BOOK_TO_MY_BOOKS_FAILURE);

export const addBookToMyBooks = bookId => async (dispatch, getState, { getFirestore }) => {
  dispatch(addBookToMyBooksRequest());
  try {
    const firestore = getFirestore();
    const state = getState();

    const user = getUser(state);
    const booksMeta = getOrderedBooksMeta(state);

    const existedBookMeta = booksMeta.find(bm => {
      const isThisUser = bm.userId === user.id;
      const isThisBook = bm.bookId === bookId;
      return isThisUser && isThisBook;
    });

    const isAlreadyExistThisBookMeta = Boolean(existedBookMeta);

    if (isAlreadyExistThisBookMeta) {
      firestore.doc(`booksMeta/${existedBookMeta.id}`).update({
        isInLibrary: true,
      });
    } else {
      firestore.collection('booksMeta').add({
        bookId,
        userId: user.id,
        isInLibrary: true,
      });
    }

    dispatch(addBookToMyBooksSuccess());
    dispatch(showNotification({ type: 'success', message: 'Книга добавлена на вашу полку' }));
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
    dispatch(showNotification({ type: 'error', message: 'Что-то пошло нетак. Попробуйте снова' }));
    dispatch(addBookToMyBooksFailure());
  }
};

export const deleteBookFromMyBooksRequest = createAction(firestoreTypes.DELETE_BOOK_FROM_MY_BOOKS_REQUEST);
export const deleteBookFromMyBooksSuccess = createAction(firestoreTypes.DELETE_BOOK_FROM_MY_BOOKS_SUCCESS);
export const deleteBookFromMyBooksFailure = createAction(firestoreTypes.DELETE_BOOK_FROM_MY_BOOKS_FAILURE);

export const deleteBookFromMyBooks = bookId => async (dispatch, getState, { getFirestore }) => {
  dispatch(deleteBookFromMyBooksRequest());
  try {
    const firestore = getFirestore();
    const state = getState();

    const user = getUser(state);
    const booksMeta = getOrderedBooksMeta(state);

    const existedBookMeta = booksMeta.find(bm => {
      const isThisUser = bm.userId === user.id;
      const isThisBook = bm.bookId === bookId;
      return isThisUser && isThisBook;
    });

    firestore.doc(`booksMeta/${existedBookMeta.id}`).update({
      isInLibrary: false,
    });

    dispatch(deleteBookFromMyBooksSuccess());
    dispatch(showNotification({ type: 'success', message: 'Книга удалена с вашей полки' }));
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
    dispatch(showNotification({ type: 'error', message: 'Что-то пошло нетак. Попробуйте снова' }));
    dispatch(deleteBookFromMyBooksFailure());
  }
};

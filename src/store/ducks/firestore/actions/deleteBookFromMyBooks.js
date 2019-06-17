import { createAction } from 'redux-actions';
import { showNotification } from '@ducks/app/appActions';
import * as firestoreTypes from '../firestoreTypes';
import { setBookMeta } from '../utils';

export const deleteBookFromMyBooksRequest = createAction(firestoreTypes.DELETE_BOOK_FROM_MY_BOOKS_REQUEST);
export const deleteBookFromMyBooksSuccess = createAction(firestoreTypes.DELETE_BOOK_FROM_MY_BOOKS_SUCCESS);
export const deleteBookFromMyBooksFailure = createAction(firestoreTypes.DELETE_BOOK_FROM_MY_BOOKS_FAILURE);

export const deleteBookFromMyBooks = bookId => async (dispatch, getState, { getFirestore }) => {
  dispatch(deleteBookFromMyBooksRequest());
  try {
    await setBookMeta({
      bookId,
      getState,
      getFirestore,
      data: { isInLibrary: false },
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

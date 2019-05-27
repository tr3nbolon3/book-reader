import { createAction } from 'redux-actions';
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

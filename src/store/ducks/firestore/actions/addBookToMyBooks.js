import React from 'react';
import { Button } from '@material-ui/core';
import { createAction } from 'redux-actions';
import { showNotification } from '@ducks/app/appActions';
import * as paths from '@routes/paths';
import * as firestoreTypes from '../firestoreTypes';
import { history } from '@utils/';
import { setBookMeta } from '../utils';

export const addBookToMyBooksRequest = createAction(firestoreTypes.ADD_BOOK_TO_MY_BOOKS_REQUEST);
export const addBookToMyBooksSuccess = createAction(firestoreTypes.ADD_BOOK_TO_MY_BOOKS_SUCCESS);
export const addBookToMyBooksFailure = createAction(firestoreTypes.ADD_BOOK_TO_MY_BOOKS_FAILURE);

export const addBookToMyBooks = bookId => async (dispatch, getState, { getFirestore }) => {
  dispatch(addBookToMyBooksRequest());
  try {
    await setBookMeta({
      bookId,
      getFirestore,
      getState,
      data: { isInLibrary: true },
    });

    const notificationAction = () => (
      <Button size="small" color="inherit" onClick={() => history.push(paths.MY_BOOKS)}>
        Посмотреть
      </Button>
    );

    dispatch(addBookToMyBooksSuccess());
    dispatch(
      showNotification({
        type: 'success',
        message: 'Книга добавлена на вашу полку',
        action: notificationAction,
      }),
    );
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
    dispatch(showNotification({ type: 'error', message: 'Что-то пошло нетак. Попробуйте снова' }));
    dispatch(addBookToMyBooksFailure());
  }
};

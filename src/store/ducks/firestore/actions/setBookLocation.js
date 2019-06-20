import { createAction } from 'redux-actions';
// import { showNotification } from '@ducks/app/appActions';
import * as firestoreTypes from '../firestoreTypes';
import { setBookMeta } from '../utils';

export const setBookLocationRequest = createAction(firestoreTypes.SET_BOOK_LOCATION_REQUEST);
export const setBookLocationSuccess = createAction(firestoreTypes.SET_BOOK_LOCATION_SUCCESS);
export const setBookLocationFailure = createAction(firestoreTypes.SET_BOOK_LOCATION_FAILURE);

export const setBookLocation = ({ bookId, location }) => async (dispatch, getState, { getFirestore }) => {
  dispatch(setBookLocationRequest());
  try {
    await setBookMeta({
      bookId,
      getFirestore,
      getState,
      data: { location },
    });

    dispatch(setBookLocationSuccess());
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
    dispatch(setBookLocationFailure());
  }
};

import { createAction } from 'redux-actions';
import { showNotification } from '@ducks/app/appActions';
import * as firestoreTypes from '../firestoreTypes';
import { setBookMeta } from '../utils';
import getBook from '../selectors/getBook';

export const setBookRatingRequest = createAction(firestoreTypes.SET_BOOK_RATING_REQUEST);
export const setBookRatingSuccess = createAction(firestoreTypes.SET_BOOK_RATING_SUCCESS);
export const setBookRatingFailure = createAction(firestoreTypes.SET_BOOK_RATING_FAILURE);

export const setBookRating = ({ bookId, rating }) => async (dispatch, getState, { getFirestore }) => {
  dispatch(setBookRatingRequest());
  try {
    const firestore = getFirestore();
    const state = getState();

    const book = getBook(state, { id: bookId });
    const isAlreadyVoted = Boolean(book.meta.rating);

    if (isAlreadyVoted) {
      const crnUserPrevScore = book.meta.rating;
      const crnUserScoreDiff = Math.abs(crnUserPrevScore - rating);

      let newScore = book.rating.score;
      if (crnUserPrevScore > rating) {
        newScore -= crnUserScoreDiff;
      } else if (crnUserPrevScore < rating) {
        newScore += crnUserScoreDiff;
      }

      await firestore.doc(`books/${bookId}`).update({
        rating: {
          ...book.rating,
          score: newScore,
        },
      });
    } else {
      await firestore.doc(`books/${bookId}`).update({
        rating: {
          score: book.rating.score + rating,
          votes: book.rating.votes + 1,
        },
      });
    }

    await setBookMeta({
      bookId,
      getState,
      getFirestore,
      data: {
        rating,
      },
    });

    dispatch(setBookRatingSuccess());
    dispatch(showNotification({ type: 'success', message: `Вы оценили книгу на ${rating}` }));
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
    dispatch(showNotification({ type: 'error', message: 'Что-то пошло нетак. Попробуйте снова' }));
    dispatch(setBookRatingFailure());
  }
};

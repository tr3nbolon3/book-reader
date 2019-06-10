import { createSelector } from 'reselect';
import { getUser } from '@ducks/firebase/firebaseSelectors';
import { getOrderedBooksMeta } from '../firestoreSelectors';
import getDataBooksWithMeta from './getDataBooksWithMeta';

const getMyBooks = createSelector(
  [getOrderedBooksMeta, getUser, getDataBooksWithMeta],
  (booksMeta, user, books) => {
    const userBooksMeta = booksMeta.filter(({ userId }) => userId === user.id);
    const userBooksMetaIsInLibrary = userBooksMeta.filter(({ isInLibrary }) => isInLibrary);
    const userBooks = userBooksMetaIsInLibrary.map(({ bookId }) => books[bookId]);

    return userBooks;
  },
);

export default getMyBooks;

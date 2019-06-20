import { createSelector } from 'reselect';
import { getUser } from '@ducks/firebase/firebaseSelectors';
import getOrderedBooks from './getOrderedBooks';
import getOrderedBooksMeta from './getOrderedBooksMeta';

const getOrderedBooksWithMeta = createSelector(
  [getOrderedBooks, getOrderedBooksMeta, getUser],
  (books, booksMeta, user) =>
    books.map(book => {
      const isThisUser = userId => userId === user.uid;
      const isThisBook = bookId => bookId === book.id;

      const findCb = ({ userId, bookId }) => isThisUser(userId) && isThisBook(bookId);
      const bookMeta = booksMeta.find(findCb);

      return {
        ...book,
        meta: bookMeta || {},
      };
    }),
);

export default getOrderedBooksWithMeta;

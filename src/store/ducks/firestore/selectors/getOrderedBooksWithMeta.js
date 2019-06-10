import { createSelector } from 'reselect';
import getOrderedBooks from './getOrderedBooks';
import getOrderedBooksMeta from './getOrderedBooksMeta';

const getOrderedBooksWithMeta = createSelector(
  [getOrderedBooks, getOrderedBooksMeta],
  (books, booksMeta) =>
    books.map(book => {
      const bookMeta = booksMeta.find(({ bookId }) => bookId === book.id);

      return {
        ...book,
        meta: bookMeta || {},
      };
    }),
);

export default getOrderedBooksWithMeta;

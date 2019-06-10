import { createSelector } from 'reselect';
import { sortDesc } from '@utils/';
import getPureOrderedBooks from './getPureOrderedBooks';
import getDataAuthors from './getDataAuthors';
import getDataGenres from './getDataGenres';
import getOrderedComments from './getOrderedComments';

const getOrderedBooks = createSelector(
  [getPureOrderedBooks, getDataAuthors, getDataGenres, getOrderedComments],
  (books, bookAuthors, bookGenres, allComments) =>
    books.map(({ authorIds, genreIds, ...book }) => ({
      genres: genreIds.map(id => ({ id, ...bookGenres[id] })),
      authors: authorIds.map(id => ({ id, ...bookAuthors[id] })),
      comments: allComments
        .filter(({ bookId }) => bookId === book.id)
        .sort((a, b) => sortDesc(a.createdAt, b.createdAt)),
      ...book,
    })),
);

export default getOrderedBooks;

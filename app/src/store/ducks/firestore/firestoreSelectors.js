import _ from 'lodash';
import { createSelector } from 'reselect';
import { sortDesc } from '@utils/';

const propsSelector = (state, props) => props;

export const getIsAddingComment = state => state.firestore.isAddingComment;

// STATUS SELECTORS
export const getIsListenersRequested = state => {
  const { requested } = state.firestore.firestore.status;
  const requestedValues = Object.values(requested);

  if (!requestedValues.length) return false;

  return !requestedValues.includes(false);
};

// USERS SELECTORS
export const getDataUsers = state => state.firestore.firestore.data.users;
export const getOrderedUsers = state => state.firestore.firestore.ordered.users;

// BOOK AUTHORS SELECTORS
export const getDataAuthors = state => state.firestore.firestore.data.authors;
export const getOrderedAuthors = state => state.firestore.firestore.ordered.authors;

// BOOK COMMENTS SELECTORS
export const getPureDataComments = state => state.firestore.firestore.data.comments;
export const getPureOrderedComments = state => state.firestore.firestore.ordered.comments;

export const getOrderedComments = createSelector(
  [getPureOrderedComments, getDataUsers],
  (comments, users) =>
    comments
      .map(({ userId, ...comment }) => ({ user: { id: userId, ...users[userId] }, ...comment }))
      .sort((a, b) => sortDesc(a.createdAt, b.createdAt)),
);

// export const getDataComments = createSelector([]);
export const getDataComments = state => getPureDataComments(state);

// BOOK GENRES SELECTORS
export const getDataGenres = state => state.firestore.firestore.data.genres;
// export const getOrderedGenres = state => state.firestore.firestore.ordered.genres;

// BOOKS SELECTORS
export const getPureOrderedBooks = state => state.firestore.firestore.ordered.books;
export const getPureDataBooks = state => state.firestore.firestore.data.books;

export const getOrderedBooks = createSelector(
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

export const getDataBooks = createSelector(
  [getOrderedBooks],
  books => _.keyBy(books, 'id'),
);

export const getBook = createSelector(
  [getDataBooks, propsSelector],
  (books, { id }) => books[id],
);

// SUBSCRIBES SELECTORS
export const getOrderedSubscribes = state => state.firestore.firestore.ordered.subscribes;
export const getDataSubscribes = state => state.firestore.firestore.data.subscribes;

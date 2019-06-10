import _ from 'lodash';
import { createSelector } from 'reselect';
import getOrderedBooks from './getOrderedBooks';

const getDataBooks = createSelector(
  [getOrderedBooks],
  books => _.keyBy(books, 'id'),
);

export default getDataBooks;

import _ from 'lodash';
import { createSelector } from 'reselect';
import getOrderedBooksWithMeta from './getOrderedBooksWithMeta';

const getDataBooks = createSelector(
  [getOrderedBooksWithMeta],
  books => _.keyBy(books, 'id'),
);

export default getDataBooks;

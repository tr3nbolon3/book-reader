import { createSelector } from 'reselect';
import getDataBooksWithMeta from './getDataBooksWithMeta';
import propsSelector from './propsSelector';

const getBook = createSelector(
  [getDataBooksWithMeta, propsSelector],
  (books, { id }) => books[id],
);

export default getBook;

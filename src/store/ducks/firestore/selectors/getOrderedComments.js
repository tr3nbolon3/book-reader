import { createSelector } from 'reselect';
import { sortDesc } from '@utils/';
import getDataUsers from './getDataUsers';
import getPureOrderedComments from './getPureOrderedComments';

const getOrderedComments = createSelector(
  [getPureOrderedComments, getDataUsers],
  (comments, users) =>
    comments
      .map(({ userId, ...comment }) => ({ user: { id: userId, ...users[userId] }, ...comment }))
      .sort((a, b) => sortDesc(a.createdAt, b.createdAt)),
);

export default getOrderedComments;

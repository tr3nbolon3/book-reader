import { createSelector } from 'reselect';
import accessRestrictions from '@src/constants/accessRestrictions';
import subscribes from '@src/constants/subscribes';
import { getIsSignedIn, getUser } from '@ducks/firebase/firebaseSelectors';
import getBookId from './propsSelector';
import getDataBooks from './getDataBooks';

const canReadBook = createSelector(
  [getUser, getIsSignedIn, getDataBooks, getBookId],
  (user, isSignedIn, books, bookId) => {
    const book = books[bookId];
    const { accessRestrictionId } = book;
    const isBookFree = accessRestrictionId === accessRestrictions.FREE;

    if (!isSignedIn && isBookFree) return true;
    if (!isSignedIn && !isBookFree) return false;

    const hasUserSubscribe = user.currentSubscribeId !== subscribes.STANDARD;
    return isBookFree || hasUserSubscribe;
  },
);

export default canReadBook;

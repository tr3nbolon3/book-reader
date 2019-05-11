import { createSelector } from 'reselect';

export const getIsLoggedIn = state => state.session.isLoggedIn;

export const getSessionPartFiltered = createSelector(
  getIsLoggedIn,
  isLoggedIn => isLoggedIn,
);

import { createSelector } from 'reselect';

export const getAppPart = state => state.app.appPart;

export const getAppPartFiltered = createSelector(
  getAppPart,
  appPart => appPart.filter(Boolean),
);

import { createSelector } from 'reselect';

export const getAppNotification = state => state.app.notification;

export const someSelector = createSelector(
  getAppNotification,
  appNotification => appNotification,
);

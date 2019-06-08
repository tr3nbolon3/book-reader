import { createSelector } from 'reselect';

export const getSubscribePart = state => state.subscribe.subscribePart;

export const getSubscribePartFiltered = createSelector(
  getSubscribePart,
  subscribePart => subscribePart.filter(Boolean),
);

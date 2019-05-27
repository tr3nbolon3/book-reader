import { createSelector } from 'reselect';

export const getFirestorePart = state => state.firestore.firestorePart;

export const getFirestorePartFiltered = createSelector(
  getFirestorePart,
  firestorePart => firestorePart.filter(Boolean),
);

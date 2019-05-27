import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { handleActions, combineActions } from 'redux-actions';

import * as firestoreActions from './firestoreActions';

const isBookLoading = handleActions(
  {
    [firestoreActions.fetchBooksRequest]() {
      return true;
    },
    [combineActions(firestoreActions.fetchBooksSuccess, firestoreActions.fetchBooksFailure)]() {
      return false;
    },
  },
  false,
);

export default combineReducers({
  isBookLoading,
  firestore: firestoreReducer,
});

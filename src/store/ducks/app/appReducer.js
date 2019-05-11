import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as appActions from './appActions';

const notification = handleActions(
  {
    [appActions.showNotification](state, { payload }) {
      return payload;
    },
  },
  {},
);

const isOpenSignUpDialog = handleActions(
  {
    [appActions.openSignUpDialog]() {
      return true;
    },
    [appActions.closeSignUpDialog]() {
      return false;
    },
  },
  false,
);

const isOpenSignInDialog = handleActions(
  {
    [appActions.openSignInDialog]() {
      return true;
    },
    [appActions.closeSignInDialog]() {
      return false;
    },
  },
  false,
);

export default combineReducers({
  notification,
  isOpenSignUpDialog,
  isOpenSignInDialog,
});

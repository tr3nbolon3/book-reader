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

const initialConfirmDialog = {
  title: '',
  text: '',
  confirmText: 'Подтвердить',
  cancelText: 'Отменить',
  isOpen: false,
  onConfirm: () => {},
};

const confirmDialog = handleActions(
  {
    [appActions.openConfirmDialog](state, { payload }) {
      return { ...state, ...payload, isOpen: true };
    },
    [appActions.closeConfirmDialog]() {
      return initialConfirmDialog;
    },
  },
  initialConfirmDialog,
);

export default combineReducers({
  notification,
  isOpenSignUpDialog,
  isOpenSignInDialog,
  confirmDialog,
});

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

export default combineReducers({
  notification,
});

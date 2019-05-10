import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as appActions from './appActions';

const appPart = handleActions(
  {
    [appActions.firstAction](state, { payload }) {
      return [...state, payload];
    },
    [appActions.secondAction](state, { payload }) {
      return [...state, payload];
    },
  },
  [],
);

export default combineReducers({
  appPart,
});

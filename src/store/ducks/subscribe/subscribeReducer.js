import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as subscribeActions from './subscribeActions';

const subscribePart = handleActions(
  {
    [subscribeActions.firstAction](state, { payload }) {
      return [...state, payload];
    },
    [subscribeActions.secondAction](state, { payload }) {
      return [...state, payload];
    },
  },
  [],
);

export default combineReducers({
  subscribePart,
});

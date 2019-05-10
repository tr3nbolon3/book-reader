import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/* eslint-disable-next-line */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

export default function configureState(preloadState = {}) {
  return createStore(rootReducer, preloadState, enhancers);
}

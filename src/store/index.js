import firebase from 'firebase/app';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import rootReducer from './reducers';

import firebaseConfig from '../configs/firebase';

/* eslint-disable-next-line */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })];

const enhancers = composeEnhancers(
  applyMiddleware(...middleware),
  reduxFirestore(firebaseConfig),
  reactReduxFirebase(firebase, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true }),
);

export default function configureStore(preloadState = {}) {
  return createStore(rootReducer, preloadState, enhancers);
}

import { combineReducers } from 'redux';
import app from './ducks/app/appReducer';
import session from './ducks/session/sessionReducer';
import firebase from './ducks/firebase/firebaseReducer';
import firestore from './ducks/firestore/firestoreReducer';
import subscribe from './ducks/subscribe/subscribeReducer';

export default combineReducers({
  firestore,
  firebase,
  session,
  app,
  subscribe,
});

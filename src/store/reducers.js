import { combineReducers } from 'redux';
import app from './ducks/app/appReducer';
import session from './ducks/session/sessionReducer';
import firebase from './ducks/firebase/firebaseReducer';
// import firebase, { firebaseCustom } from './ducks/firebase/firebaseReducer';
import firestore from './ducks/firestore/firestoreReducer';
import subscribe from './ducks/subscribe/subscribeReducer';

export default combineReducers({
  firebase,
  // firebaseCustom,
  firestore,
  session,
  app,
  subscribe,
});

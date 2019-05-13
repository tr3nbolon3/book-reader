import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import app from './ducks/app/appReducer';
import session from './ducks/session/sessionReducer';
import firebase from './ducks/firebase/firebaseReducer';

export default combineReducers({
  firestore: firestoreReducer,
  firebase,
  session,
  app,
});

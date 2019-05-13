import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import app from './ducks/app/appReducer';
import session from './ducks/session/sessionReducer';

export default combineReducers({
  app,
  session,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

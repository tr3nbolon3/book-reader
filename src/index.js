import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';

import history from '@utils/history';

import ErrorBoundary from '@components/ErrorBoundary';
import AbsoluteSpinner from '@UI/AbsoluteSpinner';

import configureStore from '@src/store';
import App from './App';
import './index.css';

import firebaseConfig from './configs/firebase';

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.firestore();

const store = configureStore();

ReactDOM.render(<AbsoluteSpinner />, document.getElementById('root'));

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundary>
        <Router history={history}>
          <App />
        </Router>
      </ErrorBoundary>
    </Provider>,
    document.getElementById('root'),
  );
});

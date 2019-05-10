import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // TODO: remove from this file
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// import ErrorBoundary from "./components/ErrorBoundary";
import App from './App';
import './index.css';

// import configStore from "./store/configStore";

const store = createStore(state => state); // TODO: replace createStore to configStore

ReactDOM.render(
  <Provider store={store}>
    {/* <ErrorBoundary> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ErrorBoundary> */}
  </Provider>,
  document.getElementById('root'),
);

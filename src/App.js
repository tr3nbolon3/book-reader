import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import routes from '@routes';

import Header from '@components/Header';
import SignInDialog from '@components/SignInDialog';
import SignUpDialog from '@components/SignUpDialog';
import NotificationSystem from '@components/NotificationSystem';

import { connect } from 'react-redux';
import { getIsUserLoaded } from '@ducks/firebase/firebaseSelectors';
// import AbsoluteSpinner from '@UI/AbsoluteSpinner';

function App() {
  // function App({ isAuthLoaded }) {
  // if (!isAuthLoaded) {
  //   return <AbsoluteSpinner />;
  // }

  return (
    <Fragment>
      <Header />
      <Switch>
        {routes.map(({ name, ...rest }) => (
          <Route key={name} {...rest} />
        ))}
      </Switch>
      <SignInDialog />
      <SignUpDialog />
      <NotificationSystem />
    </Fragment>
  );
}

App.propTypes = {
  isAuthLoaded: PropTypes.bool.isRequired,
};

export default connect(state => ({ isAuthLoaded: getIsUserLoaded(state) }))(App);

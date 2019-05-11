import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import routes from '@routes';

import Header from '@components/Header';
import SignInDialog from '@components/SignInDialog';
import SignUpDialog from '@components/SignUpDialog';
import NotificationSystem from '@components/NotificationSystem';

function App() {
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
  showNotification: PropTypes.func,
};

export default App;

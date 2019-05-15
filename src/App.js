import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '@routes';

import SignInDialog from '@components/SignInDialog';
import SignUpDialog from '@components/SignUpDialog';
import NotificationSystem from '@components/NotificationSystem';

function App() {
  return (
    <Fragment>
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

export default App;

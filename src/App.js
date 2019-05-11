import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showNotification } from '@ducks/app/appActions';
// import { Switch, Route } from 'react-router-dom';

// import routes from "./routes";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
import NotificationSystem from '@components/NotificationSystem';
// import history from '@utils/history';
import Reader from '@pages/Reader';
import { Button } from '@material-ui/core';

function App(props) {
  return (
    <Fragment>
      <Reader />
      <Button onClick={() => props.showNotification({ type: 'success' })}>SHow success notification</Button>
      <Button onClick={() => props.showNotification({ type: 'error' })}>SHow error notification</Button>
      <Button onClick={() => props.showNotification({ type: 'warn' })}>SHow warn notification</Button>
      <Button onClick={() => props.showNotification({ type: 'info' })}>SHow info notification</Button>
      <Button onClick={() => props.showNotification({ type: 'default' })}>SHow default notification</Button>
      {/* <Header /> */}
      {/* <main className="wrapper"> */}
      {/* Hello */}
      {/* <Switch>
          {routes.map(route => (
            <Route key={route.name} {...route} />
          ))}
        </Switch> */}
      {/* </main> */}
      {/* <Footer /> */}
      <NotificationSystem />
    </Fragment>
  );
}

App.propTypes = {
  showNotification: PropTypes.func,
};

export default connect(
  null,
  { showNotification },
)(App);

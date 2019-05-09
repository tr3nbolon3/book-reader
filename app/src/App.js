import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// import routes from "./routes";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import NotificationSystem from "./components/NotificationSystem";
import history from './utils/history';
import Reader from './views/pages/Reader';

export default function App() {
  return (
    <Fragment>
      <Reader />
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
      {/* <NotificationSystem /> */}
    </Fragment>
  );
}

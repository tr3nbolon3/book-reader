import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NotificationSystem from "./components/NotificationSystem";

export default function App() {
  return (
    <Fragment>
      <Header />
      <main className="wrapper">
        <Switch>
          {routes.map(route => (
            <Route key={route.name} {...route} />
          ))}
        </Switch>
      </main>
      <Footer />
      <NotificationSystem />
    </Fragment>
  );
}

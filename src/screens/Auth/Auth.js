import React, { Component } from "react";
import PropTypes from "prop-types";
import { SignUp, SignIn } from "./components";
import { Link, Route } from "react-router-dom";
import * as paths from "../../routes/paths";

class Auth extends Component {
  render() {
    return (
      <div>
        Auth
        <br />
        <Link to={paths.signin}>SignIN</Link>
        <Link to={paths.signup}>SignUP</Link>
      </div>
    );
  }
}

Auth.propTypes = {};

export default Auth;

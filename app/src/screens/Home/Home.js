import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as paths from "../../routes/paths";

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <br />
        <Link to={paths.auth}>Auth</Link>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;

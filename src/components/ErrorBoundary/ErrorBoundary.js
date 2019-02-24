import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  // TODO: implement error catching
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any
};

export default ErrorBoundary;

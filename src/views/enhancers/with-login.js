import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import history from '@utils/history';
import { getIsLoggedIn } from '@ducks/session/sessionSelectors';

export default function withLogin(WrappedComponent) {
  const WithLogin = props => {
    if (!props.isLoggedIn) {
      history.goBack();
      return null;
      // return <Redirect to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };

  const { bool } = PropTypes;
  WithLogin.propTypes = {
    isLoggedIn: bool.isRequired,
  };

  const mapStateToProps = state => ({
    isLoggedIn: getIsLoggedIn(state),
  });

  return connect(mapStateToProps)(WithLogin);
}

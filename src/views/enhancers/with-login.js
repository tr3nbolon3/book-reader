import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import history from '@utils/history';
import { getIsSignedIn } from '@ducks/firebase/firebaseSelectors';

export default function withLogin(WrappedComponent) {
  const WithLogin = props => {
    if (!props.isSignedIn) {
      history.goBack();
      return null;
      // return <Redirect to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };

  const { bool } = PropTypes;
  WithLogin.propTypes = {
    isSignedIn: bool.isRequired,
  };

  const mapStateToProps = state => ({
    isSignedIn: getIsSignedIn(state),
  });

  return connect(mapStateToProps)(WithLogin);
}

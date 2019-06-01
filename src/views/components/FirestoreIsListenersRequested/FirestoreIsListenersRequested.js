import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AbsoluteSpinner from '@UI/AbsoluteSpinner';

import { getIsListenersRequested } from '@ducks/firestore/firestoreSelectors';

function FirestoreIsListenersRequested({ isListenersRequested, children }) {
  if (!isListenersRequested) {
    return <AbsoluteSpinner />;
  }

  return children;
}

FirestoreIsListenersRequested.propTypes = {
  children: PropTypes.node,
  isListenersRequested: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isListenersRequested: getIsListenersRequested(state),
});

export default connect(mapStateToProps)(FirestoreIsListenersRequested);

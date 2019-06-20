import React from 'react';
import PropTypes from 'prop-types';
// import cn from 'classnames';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { ReactReader } from 'react-reader';
// import ePub from 'epubjs';
// import { CircularProgress } from '@material-ui/core';

import * as firestoreActions from '@ducks/firestore/firestoreActions';
import { getBook, canReadBook } from '@ducks/firestore/firestoreSelectors';
// import AbsoluteSpinner from '@UI/AbsoluteSpinner';

// import Header from '@components/Header';
import { getIsSignedIn } from '@ducks/firebase/firebaseSelectors';
// import styles from './Reader.module.scss';

import Signed from './Signed';
import Unsigned from './Unsigned';

class Reader extends React.Component {
  render() {
    const { canRead, book } = this.props;

    if (!canRead) {
      return <Redirect to={`/books/${book.id}`} />;
    }

    const { isSignedIn } = this.props;

    if (isSignedIn) {
      return <Signed {...this.props} />;
    }

    return <Unsigned {...this.props} />;
  }
}

Reader.defaultProps = {
  location: null,
};

Reader.propTypes = {
  children: PropTypes.any,
  book: PropTypes.object.isRequired,
  canRead: PropTypes.bool.isRequired,
  setBookLocation: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return {
    book: getBook(state, { id }),
    canRead: canReadBook(state, id),
    isSignedIn: getIsSignedIn(state),
  };
};

// const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  firestoreActions,
)(Reader);

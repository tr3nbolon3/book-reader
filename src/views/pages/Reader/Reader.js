import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ePub from 'epubjs';
// import { CircularProgress } from '@material-ui/core';
import MainLayout from '@layouts/MainLayout';
import { getBook } from '@ducks/firestore/firestoreSelectors';
import AbsoluteSpinner from '@UI/AbsoluteSpinner';

class Reader extends Component {
  state = {
    hasDelay: true, // for loading imitation
    isBookReady: false,
  };

  bookRendition = null; // set when component did mount

  componentDidMount() {
    // const { book: {  } } = this.props;
    this.book = ePub(`${window.location.origin}/books/flatland.epub`);
    this.bookRendition = this.book.renderTo('bookViewer', {
      width: '100%',
      flex: 1,
      height: 'calc(100vh - 152px - 84px)',
      minHeight: '600px',
      spread: 'always',
    });
    this.bookRendition.display();

    this.book.ready.then(() => this.setState({ isBookReady: true }));
    setTimeout(() => {
      this.setState({ hasDelay: false });
    }, 1000);
  }

  handleNext = () => this.bookRendition.next();

  handlePrev = () => this.bookRendition.prev();

  render() {
    const { isBookReady, hasDelay } = this.state;
    const { handleNext, handlePrev } = this;

    const isShowProgress = !isBookReady || hasDelay;

    return (
      <MainLayout mainProps={{ style: { display: 'flex', flexDirection: 'column' } }}>
        {/* BOOK VIEWER CONTAINER */}
        <div style={isShowProgress ? { visibility: 'hidden', opacity: 0 } : { flex: 1 }}>
          <div id="bookViewer" />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <button onClick={handlePrev} disabled={!isBookReady}>
              ⇦
            </button>
            <button onClick={handleNext} disabled={!isBookReady}>
              ⇨
            </button>
          </div>
        </div>
        {isShowProgress && <AbsoluteSpinner />}
      </MainLayout>
    );
  }
}

Reader.propTypes = {
  children: PropTypes.any,
  book: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return {
    book: getBook(state, { id }),
  };
};

// const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Reader);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ePub from 'epubjs';
import { CircularProgress } from '@material-ui/core';

class Reader extends Component {
  state = {
    hasDelay: true, // for loading imitation
    isBookReady: false,
  };

  bookRendition = null; // set when component did mount

  book = ePub('http://localhost:3000/books/flatland.epub');

  componentDidMount() {
    this.bookRendition = this.book.renderTo('bookViewer', { width: '100%', height: 400, spread: 'always' });
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
      <div>
        {/* BOOK VIEWER CONTAINER */}
        <div style={isShowProgress ? { visibility: 'hidden', opacity: 0 } : {}}>
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
        {isShowProgress && <CircularProgress />}
      </div>
    );
  }
}

Reader.propTypes = {
  children: PropTypes.any,
};

export default Reader;

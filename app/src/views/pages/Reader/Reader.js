import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ePub from 'epubjs';

class Reader extends Component {
  state = {
    isBookReady: false,
  };

  bookRendition = null; // set when component did mount

  book = ePub('http://localhost:3000/books/flatland.epub');

  componentDidMount() {
    this.bookRendition = this.book.renderTo('bookViewer', { width: '100%', height: 400, spread: 'always' });
    this.bookRendition.display();

    this.book.ready.then(() => this.setState({ isBookReady: true }));
  }

  handleNext = () => this.bookRendition.next();

  handlePrev = () => this.bookRendition.prev();

  render() {
    const { isBookReady } = this.state;
    const { handleNext, handlePrev } = this;

    return (
      <div>
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
    );
  }
}

Reader.propTypes = {
  children: PropTypes.any,
};

export default Reader;

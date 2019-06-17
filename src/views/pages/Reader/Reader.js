import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ePub from 'epubjs';
// import { CircularProgress } from '@material-ui/core';
import MainLayout from '@layouts/MainLayout';
import { getBook, canReadBook } from '@ducks/firestore/firestoreSelectors';
import AbsoluteSpinner from '@UI/AbsoluteSpinner';

import './reader/css/normalize.css';
import './reader/css/main.css';
import './reader/css/popup.css';

class Reader extends Component {
  state = {
    hasDelay: true, // for loading imitation
    isBookReady: false,
  };

  bookRendition = null; // set when component did mount

  componentDidMount() {
    const { book } = this.props;
    this.book = ePub(book.url);
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
    // const { handleNext, handlePrev } = this;
    const { isBookReady, hasDelay } = this.state;
    const { canRead, book } = this.props;

    const isShowProgress = !isBookReady || hasDelay;

    if (!canRead) {
      return <Redirect to={`/books/${book.id}`} />;
    }

    return (
      <MainLayout mainProps={{ style: { display: 'flex', flexDirection: 'column' } }}>
        {/* BOOK VIEWER CONTAINER */}
        <div id="sidebar">
          <div id="panels">
            {/* <!-- <input id="searchBox" placeholder="search" type="search"> --> */}

            {/* <!-- <a id="show-Search" class="show_view icon-search" data-view="Search">Search</a> --> */}
            <a id="show-Toc" className="show_view icon-list-1 active" data-view="Toc">
              TOC
            </a>
            <a id="show-Bookmarks" className="show_view icon-bookmark" data-view="Bookmarks">
              Bookmarks
            </a>
            {/* <!-- <a id="show-Notes" class="show_view icon-edit" data-view="Notes">Notes</!--> --> */}
          </div>
          <div id="tocView" className="view" />
          <div id="searchView" className="view">
            <ul id="searchResults" />
          </div>
          <div id="bookmarksView" className="view">
            <ul id="bookmarks" />
          </div>
          <div id="notesView" className="view">
            <div id="new-note">
              <textarea id="note-text" />
              <button id="note-anchor">Anchor</button>
            </div>
            <ol id="notes" />
          </div>
        </div>
        <div id="main">
          <div id="titlebar">
            <div id="opener">
              <a id="slider" className="icon-menu">
                Menu
              </a>
            </div>
            <div id="metainfo">
              <span id="book-title" />
              <span id="title-seperator">&nbsp;&nbsp;–&nbsp;&nbsp;</span>
              <span id="chapter-title" />
            </div>
            <div id="title-controls">
              <a id="bookmark" className="icon-bookmark-empty">
                Bookmark
              </a>
              <a id="setting" className="icon-cog">
                Settings
              </a>
              <a id="fullscreen" className="icon-resize-full">
                Fullscreen
              </a>
            </div>
          </div>

          <div id="divider" />
          <div id="prev" className="arrow">
            ‹
          </div>
          <div id="viewer" />
          <div id="next" className="arrow">
            ›
          </div>

          <div id="loader">
            <img src="img/loader.gif" />
          </div>
        </div>
        <div className="modal md-effect-1" id="settings-modal">
          <div className="md-content">
            <h3>Settings</h3>
            <div>
              <p>
                <input type="checkbox" id="sidebarReflow" name="sidebarReflow" />
                Reflow text when sidebars are open.
              </p>
            </div>
            <div className="closer icon-cancel-circled" />
          </div>
        </div>
        <div className="overlay" />
        {/* <div style={isShowProgress ? { visibility: 'hidden', opacity: 0 } : {}}>
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
        </div> */}
        {isShowProgress && <AbsoluteSpinner />}
      </MainLayout>
    );
  }
}

Reader.propTypes = {
  children: PropTypes.any,
  book: PropTypes.object.isRequired,
  canRead: PropTypes.bool.isRequired,
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
  };
};

// const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Reader);

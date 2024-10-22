import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Redirect } from 'react-router-dom';
import { ReactReader } from 'react-reader';
// import ePub from 'epubjs';
// import { CircularProgress } from '@material-ui/core';

import AbsoluteSpinner from '@UI/AbsoluteSpinner';

import Header from '@components/Header';
import styles from './Reader.module.scss';

class Reader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisibleHeader: false,
    };
  }

  hoverTimerId = null;

  componentDidMount() {
    const { book } = this.props;
    if (!book.meta.location) {
      this.setLocation('0');
    }
  }

  handleMouseEnter = () => {
    clearInterval(this.hoverTimerId);
    this.hoverTimerId = setTimeout(() => {
      this.setState({ isVisibleHeader: true });
    }, 500);
  };

  handleMouseLeave = () => {
    clearInterval(this.hoverTimerId);
    this.setState({ isVisibleHeader: false });
  };

  setLocation = location => {
    const { book } = this.props;

    if (typeof location === 'string' || typeof location === 'number') {
      this.props.setBookLocation({ bookId: book.id, location });
    }
  };

  render() {
    const { handleMouseLeave, handleMouseEnter, setLocation } = this;
    const { isVisibleHeader } = this.state;
    const { canRead, book } = this.props;

    if (!canRead) {
      return <Redirect to={`/books/${book.id}`} />;
    }

    return (
      <div className={styles.root}>
        <div className={styles.hover} onMouseEnter={handleMouseEnter} />
        <div
          className={cn(styles.headerWrapper, isVisibleHeader && styles.headerWrapperVisible)}
          onMouseLeave={handleMouseLeave}
        >
          <Header withBackBtn />
        </div>
        <div style={{ position: 'relative', height: '100%' }}>
          {book.meta.location && (
            <ReactReader
              loadingView={<AbsoluteSpinner />}
              url={book.url}
              title={book.name}
              location={book.meta.location}
              locationChanged={setLocation}
              tocChanged={setLocation}
            />
          )}
        </div>
      </div>
    );
  }
}

Reader.propTypes = {
  children: PropTypes.any,
  book: PropTypes.object.isRequired,
  canRead: PropTypes.bool.isRequired,
  setBookLocation: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
};

// const mapDispatchToProps = { ...appActions };

export default Reader;

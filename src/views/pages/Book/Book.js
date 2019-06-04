import React from 'react';
import PropTypes from 'prop-types';
import $propTypes from '@prop-types';
import cn from 'classnames';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';

import MainLayout from '@layouts/MainLayout';
import Container from '@UI/Container';

import { Typography, Button, Chip } from '@material-ui/core';

import { getBook } from '@ducks/firestore/firestoreSelectors';
import { getIsSignedIn } from '@ducks/firebase/firebaseSelectors';
import AddBookCommentForm from '@components/AddBookCommentForm';

import BookComments from '@components/BookComments';
// import * as paths from '@routes/paths';
import styles from './Book.module.scss';
import Description from './Description';
import { history } from '@utils/';

function Book({ book, isSignedIn }) {
  const { id, cover, author, name, description, comments, genres } = book;
  // const backgroundImage = `url(${cover})`;

  const renderLeft = (
    <div className={styles.left}>
      <img className={styles.image} src={cover} alt={name} />
      <div className={styles.buttons}>
        <Button
          className={styles.readBtn}
          size="large"
          color="primary"
          variant="contained"
          onClick={() => history.push(`/reader/${id}`)}
        >
          Читать
        </Button>
        {isSignedIn && (
          <Button className={styles.addBtn} size="large" color="primary" variant="contained">
            На полку
            <div className={styles.addBtnPlus}>+</div>
          </Button>
        )}
      </div>
    </div>
  );

  const renderRight = (
    <div className={styles.right}>
      <div className={styles.header}>
        <Typography className={cn(styles.author, styles.headerText)} variant="subheading">
          {author}
        </Typography>
        <Typography className={cn(styles.name, styles.headerText)} variant="headline" paragraph>
          {name}
        </Typography>
        <div className={styles.genres}>
          {genres.map(({ id: genreId, name: genreName }) => (
            <Chip key={genreId} variant="default" label={genreName} classes={{ root: styles.genresGenre }} />
          ))}
        </div>
      </div>
      <Description description={description} />
      <div style={{ marginTop: 24 }}>
        {isSignedIn && <AddBookCommentForm bookId={book.id} />}
        <BookComments comments={comments} />
      </div>
    </div>
  );

  return (
    <MainLayout>
      <div className={styles.root}>
        <Container className={styles.inner}>
          {renderLeft}
          {renderRight}
        </Container>
      </div>
    </MainLayout>
  );
}

Book.propTypes = {
  book: PropTypes.shape($propTypes.book),
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
    isSignedIn: getIsSignedIn(state),
  };
};

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Book);

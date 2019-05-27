import React from 'react';
import PropTypes from 'prop-types';
import $propTypes from '@prop-types';
import BookCard from '@components/BookCard';
import history from '@utils/history';
import * as paths from '@routes/paths';

import { Typography } from '@material-ui/core';
import styles from './BooksSection.module.scss';

function BooksSection({ title, books }) {
  return (
    <div className={styles.root}>
      {title && (
        <Typography className={styles.title} variant="display1" component="h2" paragraph>
          {title}
        </Typography>
      )}
      <div className={styles.books}>
        {books.map(book => (
          <BookCard key={book.id} {...book} onClick={() => history.push(`${paths.BOOKS}/${book.id}`)} />
        ))}
      </div>
    </div>
  );
}

BooksSection.defaultProps = {
  books: [],
};

BooksSection.propTypes = {
  title: PropTypes.string,
  books: PropTypes.arrayOf(PropTypes.shape($propTypes.book)),
};

export default BooksSection;

import React from 'react';
import PropTypes from 'prop-types';
import * as $propTypes from '@prop-types';
import styles from './BookRating.module.scss';
import { percent as p } from '@utils/';

const maxRate = 5;

function BookRating({ rating, isFull }) {
  const { score, votes } = rating;
  const currentRate = votes === 0 ? 0 : score / votes;
  const innerWidth = votes === 0 ? 0 : (currentRate * 100) / maxRate;

  return (
    <div className={styles.root}>
      <div className={styles.stars}>
        <div className={styles.starsInner} style={{ width: p(innerWidth) }} />
      </div>
      {isFull && (
        <React.Fragment>
          <span className={styles.rate}>{currentRate.toFixed(1)}</span>
          <span className={styles.readerCount}>{votes} человек(а) оценили</span>
        </React.Fragment>
      )}
    </div>
  );
}

BookRating.defaultProps = {
  isFull: true,
};

BookRating.propTypes = {
  rating: PropTypes.shape($propTypes.rating),
  isFull: PropTypes.bool,
};

export default BookRating;

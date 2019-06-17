import React from 'react';
import PropTypes from 'prop-types';

import AbsoluteSpinner from '@UI/AbsoluteSpinner';
import styles from './Rating.module.scss';

import filledStar from './filled-star.svg';
import emptyStar from './empty-star.svg';

const stars = [1, 2, 3, 4, 5];

function Rating({ isVotingBook, rating, setRating }) {
  return (
    <div className={styles.root}>
      {isVotingBook && <AbsoluteSpinner />}
      <div className={styles.stars}>
        {stars.map((starRate, idx) => (
          <button
            type="button"
            key={starRate}
            className="btn-reset"
            onClick={() => setRating(starRate)}
            style={{ outline: 'none' }}
          >
            <img src={idx + 1 <= rating ? filledStar : emptyStar} alt="star" />
          </button>
        ))}
      </div>
      <span className={styles.text}>Оцените книгу</span>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number,
  setRating: PropTypes.func.isRequired,
  isVotingBook: PropTypes.bool.isRequired,
};

export default Rating;

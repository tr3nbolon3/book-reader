import React from 'react';
// import PropTypes from 'prop-types';
import cn from 'classnames';
import * as $propTypes from '@prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { Tooltip } from '@material-ui/core';
import accessRestrictions from '@src/constants/accessRestrictions';
import BookRating from '@UI/BookRating';
import styles from './BookCard.module.scss';
import { getBookAuthorNames } from '@utils';

function BookCard({ accessRestrictionId, className, cover, name, authors, rating, onClick }) {
  const isFree = accessRestrictionId === accessRestrictions.FREE;
  const authorNames = getBookAuthorNames(authors);
  return (
    <div className={cn(styles.root, className)} onClick={onClick}>
      <Card className={styles.card}>
        <div className={styles.rating}>
          <BookRating rating={rating} isFull={false} />
        </div>
        <Tooltip title={`${name} - ${authorNames}`} placement="top">
          <CardActionArea className={styles.inner}>
            {!isFree && <div className={styles.bySubscribe}>По подписке</div>}
            <CardMedia component="img" alt={name} className={styles.image} height="140" image={cover} title={name} />
            <div className={styles.info}>
              <Typography className={styles.name} component="span">
                {name}
              </Typography>
              <Typography className={styles.author} component="span">
                {authorNames}
              </Typography>
            </div>
          </CardActionArea>
        </Tooltip>
      </Card>
    </div>
  );
}

BookCard.propTypes = $propTypes.book;

export default BookCard;

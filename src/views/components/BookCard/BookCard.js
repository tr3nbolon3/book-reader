import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import styles from './BookCard.module.scss';

function BookCard({ image, name, author, onClick }) {
  return (
    <Card className={styles.root} onClick={onClick}>
      <CardActionArea className={styles.inner}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={styles.image}
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <div className={styles.info}>
          <Typography className={styles.name} component="span">
            {name}
          </Typography>
          <Typography className={styles.author} component="span">
            {author}
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
}

BookCard.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string,
  onClick: PropTypes.func,
  // styles: PropTypes.object.isRequired,
};

export default BookCard;

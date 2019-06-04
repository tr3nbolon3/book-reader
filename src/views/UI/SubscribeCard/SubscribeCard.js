import React from 'react';
import PropTypes from 'prop-types';
import * as $propTypes from '@prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import subscribeColors from '@constants/subscribeColors';
import styles from './SubscribeCard.module.scss';

const durationTypes = {
  month: 'месяц',
};

function SubscribeCard({ subscribe }) {
  const { id, name, duration, durationType, cost } = subscribe;

  return (
    <div className={styles.root} style={{ backgroundColor: subscribeColors[id] }}>
      <div className={styles.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" style={{ marginLeft: 16 }}>
              {cost} Pуб.
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="display3">
          {duration} {durationTypes[durationType]}
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={styles.section2}>
        <Button color="primary">Оформить подписку</Button>
      </div>
    </div>
  );
}

SubscribeCard.propTypes = {
  subscribe: PropTypes.shape($propTypes.subscribe),
};

export default SubscribeCard;

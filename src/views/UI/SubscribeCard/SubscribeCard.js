import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as $propTypes from '@prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import subscribes from '@constants/subscribes';
import subscribeColors from '@constants/subscribeColors';
import * as appActions from '@ducks/app/appActions';
import * as firestoreActions from '@ducks/firestore/firestoreActions';
import { getIsSignedIn } from '@ducks/firebase/firebaseSelectors';
import { Chip } from '@material-ui/core';
import styles from './SubscribeCard.module.scss';

const subscribePeriods = {
  [subscribes.BRONZE]: '1 месяц',
  [subscribes.GOLD]: '6 месяцев',
  [subscribes.SILVER]: '3 месяца',
};

const subscribeTexts = {
  [subscribes.BRONZE]: props => `Подписка ${props.name} за ${props.cost} рублей (на 1 месяц)`,
  [subscribes.GOLD]: props => `Подписка ${props.name} за ${props.cost} рублей (на  6 месяцев)`,
  [subscribes.SILVER]: props => `Подписка ${props.name} за ${props.cost} рублей (на  3 месяца)`,
};

function SubscribeCard({ subscribe, isSignedIn, openSignUpDialog, updateUser }) {
  const { id, name, cost } = subscribe;

  const renderSection1 = (
    <div className={styles.section1}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Chip
            label={name}
            classes={{
              root: styles.name,
              label: styles.nameLabel,
            }}
            style={{ backgroundColor: subscribeColors[id] }}
          />
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="h6" style={{ fontWeight: 'bold', fontStyle: 'italic', marginLeft: 16 }}>
            {cost}&nbsp;₽
          </Typography>
        </Grid>
      </Grid>
      <div className={styles.section1Center}>
        <Divider variant="middle" />
        <div className={styles.section1CenterContent}>
          <Typography color="textSecondary" variant="body1">
            Доступ ко всем книгам
          </Typography>
          <Typography color="textSecondary" variant="body2" style={{ fontSize: 24 }}>
            на {subscribePeriods[id]}
          </Typography>
        </div>
        <Divider variant="middle" />
      </div>
    </div>
  );

  const renderSection2 = (
    <div className={styles.section2}>
      {isSignedIn && (
        <Button
          variant="contained"
          type="submit"
          color="primary"
          onClick={() => updateUser({ currentSubscribeId: id })}
        >
          Оформить подписку
        </Button>
      )}
      {!isSignedIn && (
        <Button onClick={openSignUpDialog} variant="contained" type="button" color="primary">
          Оформить подписку
        </Button>
      )}
    </div>
  );

  return (
    <form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml" className={styles.root}>
      <input type="hidden" name="receiver" value="410017674053368" />
      <input type="hidden" name="quickpay-form" value="donate" />
      <input type="hidden" name="targets" value={subscribeTexts[id](subscribe)} />
      <input type="hidden" name="sum" value={cost} data-type="number" />
      <input type="hidden" name="label" value="blablabla" />
      <input type="hidden" defaultChecked name="paymentType" value="AC" />
      {/* <div className={styles.overlay} style={{ backgroundColor: subscribeColors[id] }} /> */}
      <div className={styles.content}>
        {renderSection1}
        {renderSection2}
      </div>
    </form>
  );
}

SubscribeCard.propTypes = {
  subscribe: PropTypes.shape($propTypes.subscribe),
  isSignedIn: PropTypes.bool.isRequired,
  openSignUpDialog: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    isSignedIn: getIsSignedIn(state),
  }),
  { ...appActions, ...firestoreActions },
)(SubscribeCard);

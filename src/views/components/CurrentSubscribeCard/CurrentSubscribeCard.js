import React from 'react';
import PropTypes from 'prop-types';
import * as $propTypes from '@prop-types';
import { connect } from 'react-redux';

// import * as appSelectors from '@ducks/app/appSelectors';
// import * as appActions from '@ducks/app/appActions';
import { getUser } from '@ducks/firebase/firebaseSelectors';
import { getOrderedSubscribes } from '@ducks/firestore/firestoreSelectors';

import Link from '@UI/Link';
import * as paths from '@routes/paths';
import $subscribes from '@constants/subscribes';

import styles from './CurrentSubscribeCard.module.scss';

const colors = {
  [$subscribes.BRONZE]: '#A77044',
  [$subscribes.GOLD]: '#FEE101',
  [$subscribes.SILVER]: '#D7D7D7',
  [$subscribes.STANDARD]: '#9ED9DF',
};

function CurrentSubscribeCard({ user, subscribes }) {
  const { currentSubscribeId } = user;
  const currentSubscribe = subscribes.find(({ id }) => currentSubscribeId === id);

  const color = colors[currentSubscribeId];
  const backgroundImage = `linear-gradient(135deg, ${color} 60%, white)`;

  return (
    <Link to={paths.SUBSCRIBE} className={styles.root}>
      <div className={styles.title}>
        Текущий тариф
        <div className={styles.change}>Сменить</div>
      </div>
      <div className={styles.inner} style={{ backgroundImage }}>
        <div className={styles.name}>{currentSubscribe.name}</div>
        <div className={styles.period}>до 09.06.2019</div>
      </div>
    </Link>
  );
}

CurrentSubscribeCard.propTypes = {
  user: PropTypes.shape($propTypes.user),
  subscribes: PropTypes.arrayOf(PropTypes.shape($propTypes.subscribe)),
};

const mapStateToProps = state => ({
  user: getUser(state),
  subscribes: getOrderedSubscribes(state),
});

// const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(CurrentSubscribeCard);

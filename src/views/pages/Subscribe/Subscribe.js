import React from 'react';
import PropTypes from 'prop-types';
import * as $propTypes from '@prop-types';
import { connect } from 'react-redux';
import $subscribes from '@constants/subscribes';

// import * as appSelectors from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';

import MainLayout from '@layouts/MainLayout';
import { getOrderedSubscribes } from '@ducks/firestore/firestoreSelectors';
import Container from '@UI/Container';
import SubscribeCard from '@UI/SubscribeCard';

import { Typography } from '@material-ui/core';
import styles from './Subscribe.module.scss';

function Subscribe({ subscribes }) {
  const normalizedSubscribes = subscribes.filter(({ id }) => id !== $subscribes.STANDARD);

  return (
    <MainLayout>
      <Container className={styles.container}>
        <Typography variant="display1" component="h2" paragraph align="center">
          Подписка
        </Typography>
        <div className={styles.subscribes}>
          {normalizedSubscribes.map(subscribe => (
            <SubscribeCard key={subscribe.id} subscribe={subscribe} />
          ))}
        </div>
      </Container>
    </MainLayout>
  );
}

Subscribe.propTypes = {
  subscribes: PropTypes.arrayOf(PropTypes.shape($propTypes.subscribe)),
};

const mapStateToProps = state => ({
  subscribes: getOrderedSubscribes(state),
});

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Subscribe);

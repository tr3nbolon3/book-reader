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

import styles from './Subscribe.module.scss';

function Subscribe({ subscribes }) {
  const normalizedSubscribes = subscribes.filter(({ id }) => id !== $subscribes.STANDARD);

  return (
    <MainLayout>
      <Container className={styles.container}>
        {normalizedSubscribes.map(subscribe => (
          <SubscribeCard key={subscribe.id} subscribe={subscribe} />
        ))}
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

import React from 'react';
import PropTypes from 'prop-types';
import $propTypes from '@prop-types';
import { connect } from 'react-redux';
import { getUser } from '@ducks/firebase/firebaseSelectors';
import UserAvatar from '@UI/UserAvatar';

function CurrentUserAvatar({ user }) {
  return <UserAvatar user={user} />;
}

CurrentUserAvatar.propTypes = {
  user: PropTypes.shape($propTypes.user),
};

const mapStateToProps = state => ({
  user: getUser(state),
});

export default connect(mapStateToProps)(CurrentUserAvatar);

import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from '@material-ui/core';

function UserAvatar({ user }) {
  return <div>{user.avatarUrl ? <Avatar src={user.avatarUrl} /> : <Avatar>{user.initials}</Avatar>}</div>;
}

UserAvatar.defaultProps = {
  user: {
    initials: 'An',
  },
};

UserAvatar.propTypes = {
  user: PropTypes.shape({
    initials: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
};

export default UserAvatar;

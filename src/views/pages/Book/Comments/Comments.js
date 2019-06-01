import React from 'react';
import PropTypes from 'prop-types';
// import $propTypes from '@prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import UserAvatar from '@UI/UserAvatar';

import { Typography } from '@material-ui/core';
import styles from './Comments.module.scss';

function Comments({ comments }) {
  const isEmpty = comments.length === 0;

  return (
    <div>
      {isEmpty && <Typography align="center">Комментариев нет.</Typography>}
      <List className={styles.list}>
        {comments.map(({ id, author, text }, idx) => (
          <React.Fragment key={id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <UserAvatar user={author} />
              </ListItemAvatar>
              <ListItemText primary={author.fullName} secondary={text} />
            </ListItem>
            {idx !== comments.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

Comments.defaultProps = {
  comments: [],
};

Comments.propTypes = {
  comments: PropTypes.array,
};

export default Comments;

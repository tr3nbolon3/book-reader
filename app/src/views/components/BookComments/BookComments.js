import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';
import * as firestoreActions from '@ducks/firestore/firestoreActions';

import * as $propTypes from '@prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import UserAvatar from '@UI/UserAvatar';

import { Typography, ListItemSecondaryAction, IconButton, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { getUser } from '@ducks/firebase/firebaseSelectors';
import styles from './BookComments.module.scss';

function BookComments({ user, comments, openConfirmDialog, deleteComment }) {
  const isEmpty = comments.length === 0;

  return (
    <div>
      {isEmpty && (
        <div style={{ margin: 24 }}>
          <Typography align="center">Комментариев нет.</Typography>
        </div>
      )}
      <List className={styles.list}>
        {comments.map(({ id, user: userComment, text }, idx) => {
          const isCommentFromCurrentUser = userComment.id === user.uid;

          return (
            <React.Fragment key={id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <UserAvatar user={userComment} />
                </ListItemAvatar>
                <ListItemText primary={userComment.fullName} secondary={text} />
                {isCommentFromCurrentUser && (
                  <ListItemSecondaryAction>
                    <Tooltip title="Удалить комментарий" aria-label="Удалить комментарий">
                      <IconButton
                        edge="end"
                        aria-label="Удалить комментарий"
                        onClick={() =>
                          openConfirmDialog({
                            title: 'Вы действительно хотите удалить комментарий?',
                            text: 'После удаления комментарий нельзя будет восстановить',
                            cancelText: 'Отменить',
                            confirmText: 'Удалить',
                            onConfirm: () => deleteComment(id),
                          })
                        }
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </ListItemSecondaryAction>
                )}
              </ListItem>
              {idx !== comments.length - 1 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
}

BookComments.defaultProps = {
  user: {},
  comments: [],
};

BookComments.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
  comments: PropTypes.arrayOf(PropTypes.shape($propTypes.comment)),
  deleteComment: PropTypes.func.isRequired,
  openConfirmDialog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = { ...firestoreActions, ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookComments);

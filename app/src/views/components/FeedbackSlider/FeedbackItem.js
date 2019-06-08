import React from 'react';
import PropTypes from 'prop-types';
import $propTypes from '@prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import UserAvatar from '@UI/UserAvatar';

function FeedbackItem({ author, text }) {
  return (
    <Card style={{ width: '80%' }}>
      <CardHeader
        titleTypographyProps={{ align: 'left' }}
        avatar={<UserAvatar user={author} />}
        title={author.fullName}
      />
      <CardContent>
        <Typography align="left" component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

FeedbackItem.propTypes = {
  author: PropTypes.shape($propTypes.user),
  text: PropTypes.string.isRequired,
};

export default FeedbackItem;

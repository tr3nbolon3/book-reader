import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import { getAppNotification } from '@ducks/app/appSelectors';
import { IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { noop } from '@utils/';

class NotificationSystem extends Component {
  componentDidUpdate = () => {
    const {
      notification: { type: variant, message, action = noop },
      enqueueSnackbar,
    } = this.props;

    enqueueSnackbar(message, {
      variant,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      action: this.renderActions(action),
    });
  };

  renderActions = action => key => (
    <React.Fragment>
      {action(key)}
      <IconButton
        onClick={() => {
          this.props.closeSnackbar(key);
        }}
      >
        <CloseIcon style={{ color: 'white' }} />
      </IconButton>
    </React.Fragment>
  );

  // eslint-disable-next-line
  render() {
    return null;
  }
}

NotificationSystem.propTypes = {
  notification: PropTypes.shape({
    type: PropTypes.oneOf(['success', 'error', 'warning', 'info', 'default']),
    message: PropTypes.string,
  }),
  closeSnackbar: PropTypes.func.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
};

export default connect(state => ({ notification: getAppNotification(state) }))(withSnackbar(NotificationSystem));

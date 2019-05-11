import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { getAppNotification } from '@ducks/app/appSelectors';

const textsMap = {
  success: 'Success!',
  error: 'Error!',
  warn: 'Warning!',
  info: 'Info!',
  default: 'Default',
};

class NotificationSystem extends Component {
  componentDidUpdate = () => {
    const {
      notification: { type, message },
    } = this.props;

    const text = message || textsMap[type];
    if (type === 'default') {
      toast(text);
    } else {
      toast[type](text);
    }
  };

  // eslint-disable-next-line
  render() {
    return <ToastContainer />;
  }
}

NotificationSystem.propTypes = {
  notification: PropTypes.shape({
    type: PropTypes.oneOf(['success', 'error', 'warn', 'info', 'default']),
    message: PropTypes.string,
  }),
};

export default connect(state => ({ notification: getAppNotification(state) }))(NotificationSystem);

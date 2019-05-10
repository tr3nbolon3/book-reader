import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import RefreshIcon from '@UI/Icons/RefreshIcon';
// import Link from '@UI/Link';

class ErrorBoundary extends Component {
  state = {
    hasError: true,
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // eslint-disable-next-line
    console.log(info);
  }

  handleReloadApp = () => {};

  renderErrorDialog = () => (
    <Dialog open aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no
          apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={this.handleReloadApp} color="primary" autoFocus>
          Презагрузить приложение
          <RefreshIcon />
        </Button>
      </DialogActions>
    </Dialog>
  );

  // TODO: implement error catching
  render() {
    if (this.state.hasError) {
      return this.renderErrorDialog();
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any,
};

export default ErrorBoundary;

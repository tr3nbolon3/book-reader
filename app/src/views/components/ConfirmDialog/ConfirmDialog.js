import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { getConfirmDialog } from '@ducks/app/appSelectors';

class ConfirmDialog extends React.Component {
  // componentDidUpdate(prevProps) {
  //   if (prevProps.isOpen && !this.props.isOpen) {

  //   }
  // }

  render() {
    const { confirmDialog, closeConfirmDialog } = this.props;
    const { isOpen, title, text, cancelText, confirmText, onConfirm } = confirmDialog;

    return (
      <Dialog
        open={isOpen}
        onClose={closeConfirmDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        transitionDuration={0}
      >
        {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
        {text && (
          <DialogContent>
            <DialogContentText id="alert-dialog-description">{text}</DialogContentText>
          </DialogContent>
        )}
        {(cancelText || confirmText) && (
          <DialogActions>
            {cancelText && (
              <Button onClick={closeConfirmDialog} color="primary">
                {cancelText}
              </Button>
            )}
            {confirmText && (
              <Button
                onClick={() => {
                  onConfirm();
                  closeConfirmDialog();
                }}
                color="primary"
                autoFocus
              >
                {confirmText}
              </Button>
            )}
          </DialogActions>
        )}
      </Dialog>
    );
  }
}

ConfirmDialog.propTypes = {
  confirmDialog: PropTypes.object.isRequired,
  openConfirmDialog: PropTypes.func.isRequired,
  closeConfirmDialog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  confirmDialog: getConfirmDialog(state),
});

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmDialog);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIsOpenSignUpDialog } from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';
import { Dialog } from '@material-ui/core';
// import SignUp from '@components/Auth/SignUp';

function SignUpDialog({ isOpen, closeSignUpDialog }) {
  return (
    <Dialog open={isOpen} onClose={closeSignUpDialog}>
      {/* <SignUp /> */}
      <div>hel</div>
    </Dialog>
  );
}

SignUpDialog.propTypes = {
  name: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeSignUpDialog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isOpen: getIsOpenSignUpDialog(state),
});

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpDialog);

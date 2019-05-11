import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIsOpenSignInDialog } from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';
import { Dialog } from '@material-ui/core';

// class SignInDialog extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: 'SignInDialog',
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

function SignInDialog({ name, isOpen, closeSignInDialog }) {
  return (
    <Dialog open={isOpen} onClose={closeSignInDialog}>
      <div>
        <p>{name}</p>
      </div>
    </Dialog>
  );
}

SignInDialog.defaultProps = {
  name: 'SignInDialog',
};

SignInDialog.propTypes = {
  name: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeSignInDialog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isOpen: getIsOpenSignInDialog(state),
});

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInDialog);

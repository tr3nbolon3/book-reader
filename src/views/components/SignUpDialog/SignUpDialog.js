import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIsOpenSignUpDialog } from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';
import { Dialog } from '@material-ui/core';

// class SignUpDialog extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: 'SignUpDialog',
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

function SignUpDialog({ name, isOpen, closeSignUpDialog }) {
  return (
    <Dialog open={isOpen} onClose={closeSignUpDialog}>
      <div>
        <p>{name}</p>
      </div>
    </Dialog>
  );
}

SignUpDialog.defaultProps = {
  name: 'SignUpDialog',
};

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

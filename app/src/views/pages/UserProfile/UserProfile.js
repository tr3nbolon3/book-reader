import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';

import MainLayout from '@layouts/MainLayout';

// class UserProfile extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: 'UserProfile',
//   };

//   render() {
//     return (
//       <MainLayout>
//         <p>{this.props.name}</p>
//       </MainLayout>
//     );
//   }
// }

function UserProfile(props) {
  return (
    <MainLayout>
      <p>{props.name}</p>
    </MainLayout>
  );
}

UserProfile.defaultProps = {
  name: 'UserProfile',
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);

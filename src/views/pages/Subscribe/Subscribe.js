import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';

import MainLayout from '@layouts/MainLayout';

// class Subscribe extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: 'Subscribe',
//   };

//   render() {
//     return (
//       <MainLayout>
//         <p>{this.props.name}</p>
//       </MainLayout>
//     );
//   }
// }

function Subscribe(props) {
  return (
    <MainLayout>
      <p>{props.name}</p>
    </MainLayout>
  );
}

Subscribe.defaultProps = {
  name: 'Subscribe',
};

Subscribe.propTypes = {
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Subscribe);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';

// class Library extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: 'Library',
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

function Library(props) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
}

Library.defaultProps = {
  name: 'Library',
};

Library.propTypes = {
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Library);

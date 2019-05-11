import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';

// class Home extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: 'Home',
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

function Home(props) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
}

Home.defaultProps = {
  name: 'Home',
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

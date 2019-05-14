import React from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';
import { getIsSignedIn } from '@ducks/firebase/firebaseSelectors';
// import * as paths from '@routes/paths';

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

function Home({ name }) {
  // function Home({ name, isSignedIn }) {
  // if (isSignedIn) {
  //   return <Redirect to={paths.LIBRARY} />;
  // }

  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

Home.defaultProps = {
  name: 'Home',
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  ...state,
  isSignedIn: getIsSignedIn(state),
});

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as appActions from '@ducks/app/appActions';

import routes from '@routes';
import * as paths from '@routes/paths';
import { Button } from '@material-ui/core';
import * as sessionActions from '@ducks/session/sessionActions';
import { getUser } from '@ducks/firebase/firebaseSelectors';

// class Header extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: 'Header',
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

function Header({ user, openSignInDialog, openSignUpDialog, signOut }) {
  return (
    <div>
      {routes.map(({ name, path }) => (
        <Button key={name}>
          {path === paths.BOOK ? <Link to="/books/1">{name}</Link> : <Link to={path}>{name}</Link>}
        </Button>
      ))}
      <Button onClick={openSignInDialog}>Open sign in dialog</Button>
      <Button onClick={openSignUpDialog}>Open sign up dialog</Button>
      <Button onClick={signOut}>Sign out</Button>
      <div>{JSON.stringify(user, null, '  ')}</div>
    </div>
  );
}

Header.defaultProps = {
  name: 'Header',
};

Header.propTypes = {
  name: PropTypes.string,
  openSignInDialog: PropTypes.func,
  openSignUpDialog: PropTypes.func,
  signOut: PropTypes.func,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = { ...appActions, ...sessionActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

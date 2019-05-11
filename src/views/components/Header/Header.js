import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as appActions from '@ducks/app/appActions';

import routes from '@routes';
import * as paths from '@routes/paths';
import { Button } from '@material-ui/core';

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

function Header({ openSignInDialog, openSignUpDialog }) {
  return (
    <div>
      {routes.map(({ name, path }) => (
        <Button key={name}>
          {path === paths.BOOK ? <Link to="/books/1">{name}</Link> : <Link to={path}>{name}</Link>}
        </Button>
      ))}
      <Button onClick={openSignInDialog}>Open sign in dialog</Button>
      <Button onClick={openSignUpDialog}>Open sign up dialog</Button>
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
};

const mapDispatchToProps = { ...appActions };

export default connect(
  null,
  mapDispatchToProps,
)(Header);

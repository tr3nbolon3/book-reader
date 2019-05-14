import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import * as appActions from '@ducks/app/appActions';
import * as sessionActions from '@ducks/session/sessionActions';

import { getUser } from '@ducks/firebase/firebaseSelectors';

// import routes from '@routes';
// import * as paths from '@routes/paths';

import Logo from '@UI/Logo';
import styles from './Header.module.scss';

// function Header({ user, openSignInDialog, openSignUpDialog, signOut }) {
function Header({ openSignInDialog, openSignUpDialog }) {
  // return (
  //   <div>
  //     {routes.map(({ name, path }) => (
  //       <Button key={name}>
  //         {path === paths.BOOK ? <Link to="/books/1">{name}</Link> : <Link to={path}>{name}</Link>}
  //       </Button>
  //     ))}
  //     <Button onClick={openSignInDialog}>Open sign in dialog</Button>
  //     <Button onClick={openSignUpDialog}>Open sign up dialog</Button>
  //     <Button onClick={signOut}>Sign out</Button>
  //     <div>{JSON.stringify(user, null, '  ')}</div>
  //   </div>
  // );
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Logo className={styles.grow} />
          {/* <Typography variant="h6" color="inherit" className={styles.grow}>
            News
          </Typography> */}
          <Button onClick={openSignUpDialog} color="inherit">
            Зарегистрироваться
          </Button>
          <Button onClick={openSignInDialog} color="inherit">
            Войти
          </Button>
        </Toolbar>
      </AppBar>
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
)(withStyles(styles)(Header));

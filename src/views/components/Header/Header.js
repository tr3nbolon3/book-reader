import React from 'react';
import PropTypes from 'prop-types';
import * as $propTypes from '@prop-types';
import { connect } from 'react-redux';

import { MenuItem, AppBar, Toolbar, Button, IconButton, Typography, Popover } from '@material-ui/core';
// import { Search as SearchIcon } from '@material-ui/icons';

import * as appActions from '@ducks/app/appActions';
import * as sessionActions from '@ducks/session/sessionActions';

import { getUser, getIsSignedIn } from '@ducks/firebase/firebaseSelectors';

import * as paths from '@routes/paths';
import history from '@utils/history';

import Logo from '@UI/Logo';
import Link from '@UI/Link';

import CurrentSubscribeCard from '@components/CurrentSubscribeCard';
import CurrentUserAvatar from '@components/CurrentUserAvatar';
import styles from './Header.module.scss';
// import styles from './styles';

class Header extends React.Component {
  state = {
    anchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClickMenuItem = action => () => {
    action();
    this.handleMenuClose();
  };

  renderMenu = () => {
    const { anchorEl } = this.state;
    const { user } = this.props;
    const isMenuOpen = Boolean(anchorEl);

    return (
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
        classes={{ paper: styles.menu }}
      >
        <div className={styles.menuUser}>{user.fullName}</div>
        <MenuItem
          onClick={this.handleClickMenuItem(() => {
            history.push(paths.USER_PROFILE);
          })}
        >
          Профиль
        </MenuItem>
        <MenuItem
          onClick={this.handleClickMenuItem(() => {
            history.push(paths.MY_BOOKS);
          })}
        >
          Моя библиотека
        </MenuItem>
        <CurrentSubscribeCard />
        <MenuItem onClick={this.handleClickMenuItem(this.props.signOut)}>Выйти</MenuItem>
      </Popover>
    );
  };

  renderSignedInControls = () => {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    return (
      <>
        <IconButton
          className={styles.profileIconButton}
          aria-owns={isMenuOpen ? 'material-appbar' : undefined}
          aria-haspopup="true"
          onClick={this.handleProfileMenuOpen}
          color="inherit"
        >
          <CurrentUserAvatar />
        </IconButton>
        {this.renderMenu()}
      </>
    );
  };

  renderSignedOutControls = () => (
    <>
      <Button onClick={this.props.openSignUpDialog} color="inherit">
        Зарегистрироваться
      </Button>
      <Button onClick={this.props.openSignInDialog} color="inherit">
        Войти
      </Button>
    </>
  );

  render() {
    const { renderSignedInControls, renderSignedOutControls } = this;
    const { isSignedIn } = this.props;

    return (
      <AppBar position="static" color="inherit" classes={{ root: styles.root }}>
        <Toolbar className={styles.toolbar} color="inherit">
          <Link to={paths.HOME}>
            <Logo />
          </Link>
          <div className={styles.toolbarLeft}>
            {/* <div className={styles.search}>
              <div className={styles.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Поиск..."
                classes={{
                  root: styles.inputRoot,
                  input: styles.inputInput,
                }}
              />
            </div> */}
            {/* <div className={styles.grow}> */}
            <Link to={paths.BOOKS}>
              <Typography color="inherit" noWrap>
                Каталог книг
              </Typography>
            </Link>
          </div>
          <div className={styles.toolbarRight}>{isSignedIn ? renderSignedInControls() : renderSignedOutControls()}</div>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape($propTypes.user),
  openSignUpDialog: PropTypes.func.isRequired,
  openSignInDialog: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  user: getUser(state),
  isSignedIn: getIsSignedIn(state),
});

const mapDispatchToProps = { ...appActions, ...sessionActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dialog, DialogTitle, DialogActions, Button, DialogContent } from '@material-ui/core';

import * as appActions from '@ducks/app/appActions';
import * as sessionActions from '@ducks/session/sessionActions';

import { getIsOpenSignInDialog } from '@ducks/app/appSelectors';
import { getIsLoading } from '@ducks/session/sessionSelectors';

import Form from '@components/Form';
import Input from '@components/Input';

import { required } from '@utils/validate';

import TextDivider from '@UI/TextDivider';
import FbButton from '@UI/FbButton';
import GoogleButton from '@UI/GoogleButton';
import VkButton from '@UI/VkButton';
import AbsoluteSpinner from '@UI/AbsoluteSpinner';
import styles from './SignInDialog.module.scss';

function SignInDialog({ isLoading, signIn, isOpen, closeSignInDialog }) {
  return (
    <Dialog open={isOpen} onClose={closeSignInDialog} scroll="body" maxWidth="xs">
      {isLoading && <AbsoluteSpinner />}
      <Form onSubmit={signIn}>
        {() => (
          <div className={styles.container}>
            <DialogTitle>Вход</DialogTitle>
            <DialogContent className={styles.content}>
              <div>
                <Input name="email" label="Почта" validate={required()} />
                <Input type="password" name="password" label="Пароль" validate={required()} />
              </div>
              <TextDivider text="либо войти через соц.сети" />
              <div className={styles.socialButtons}>
                <FbButton />
                <GoogleButton />
                <VkButton />
              </div>
            </DialogContent>
            <DialogActions>
              <Button>Восстановить пароль</Button>
              <Button type="submit">Войти</Button>
            </DialogActions>
          </div>
        )}
      </Form>
    </Dialog>
  );
}

SignInDialog.propTypes = {
  name: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  signIn: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  closeSignInDialog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isOpen: getIsOpenSignInDialog(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = { ...appActions, ...sessionActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInDialog);

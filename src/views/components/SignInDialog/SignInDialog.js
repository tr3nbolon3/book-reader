import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIsOpenSignInDialog } from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';
import { Dialog, DialogTitle, DialogActions, Button, DialogContent } from '@material-ui/core';

import Form from '@components/Form';
import Input from '@components/Input';

import { composeValidators, required, password, email } from '@utils/validate';

import TextDivider from '@UI/TextDivider';
import FbButton from '@UI/FbButton';
import GoogleButton from '@UI/GoogleButton';
import VkButton from '@UI/VkButton';
import styles from './SignInDialog.module.scss';

function SignInDialog({ isOpen, closeSignInDialog }) {
  return (
    <Dialog open={isOpen} onClose={closeSignInDialog} scroll="body" maxWidth="xs">
      <Form
        onSubmit={values => {
          console.log('SignInDialog values', values);
        }}
      >
        {() => (
          <div className={styles.container}>
            <DialogTitle>Вход</DialogTitle>
            <DialogContent className={styles.content}>
              <div>
                <Input name="email" label="Почта" validate={composeValidators(required(), email())} />
                <Input
                  type="password"
                  name="password"
                  label="Пароль"
                  validate={composeValidators(required(), password())}
                />
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
  closeSignInDialog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isOpen: getIsOpenSignInDialog(state),
});

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInDialog);

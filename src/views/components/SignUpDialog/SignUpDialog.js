import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dialog, DialogTitle, DialogActions, Button, DialogContent } from '@material-ui/core';

import * as appActions from '@ducks/app/appActions';
import * as sessionActions from '@ducks/session/sessionActions';

import { getIsOpenSignUpDialog } from '@ducks/app/appSelectors';
import { getIsLoading } from '@ducks/session/sessionSelectors';

import Form from '@components/Form';
import Input from '@components/Input';

import { composeValidators, required, password, email, isEqual } from '@utils/validate';

import LabeledCheckbox from '@components/LabeledCheckbox';
import AbsoluteSpinner from '@UI/AbsoluteSpinner';
import styles from './SignUpDialog.module.scss';

function SignUpDialog({ isLoading, signUp, isOpen, closeSignUpDialog }) {
  return (
    <Dialog open={isOpen} onClose={closeSignUpDialog} scroll="body" maxWidth="sm">
      {isLoading && <AbsoluteSpinner />}
      <Form onSubmit={signUp}>
        {({ values }) => (
          <div className={styles.container}>
            <DialogTitle>Регистрация</DialogTitle>
            <DialogContent className={styles.content}>
              <div>
                <Input name="firstName" label="Имя" validate={composeValidators(required())} />
                <Input name="lastName" label="Фамилия" validate={composeValidators(required())} />
                <Input name="email" label="Почта" validate={composeValidators(required(), email())} />
                <Input
                  type="password"
                  name="password"
                  label="Пароль"
                  validate={composeValidators(required(), password())}
                />
                <Input
                  type="password"
                  name="passwordConfirm"
                  label="Подтверждение пароля"
                  validate={composeValidators(required(), isEqual(values.password, 'Пароли не совпадают'))}
                />
                <LabeledCheckbox
                  name="checkbox"
                  validate={required('Этот флажок должен быть отмечен')}
                  label="Я согласен с условиями предоставления услуг и политикой конфиденциальности."
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button type="submit">Зарегистрироваться</Button>
            </DialogActions>
          </div>
        )}
      </Form>
    </Dialog>
  );
}

SignUpDialog.propTypes = {
  name: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  signUp: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  closeSignUpDialog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isOpen: getIsOpenSignUpDialog(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = { ...appActions, ...sessionActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpDialog);

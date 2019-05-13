import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIsOpenSignUpDialog } from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';
import { Dialog, DialogTitle, DialogActions, Button, DialogContent } from '@material-ui/core';

import Form from '@components/Form';
import Input from '@components/Input';

import { composeValidators, required, password, email, isEqual } from '@utils/validate';

import LabeledCheckbox from '@components/LabeledCheckbox';
import styles from './SignUpDialog.module.scss';

function SignUpDialog({ isOpen, closeSignUpDialog }) {
  return (
    <Dialog open={isOpen} onClose={closeSignUpDialog} scroll="body" maxWidth="sm">
      <Form
        onSubmit={values => {
          console.log('SignInDialog values', values);
        }}
      >
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
  closeSignUpDialog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isOpen: getIsOpenSignUpDialog(state),
});

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpDialog);

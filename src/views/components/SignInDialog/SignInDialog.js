import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIsOpenSignInDialog } from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';
import { Dialog, DialogTitle, DialogActions, Button, DialogContent } from '@material-ui/core';
import Form from '@components/Form';
import Input from '@components/Input';
import { composeValidators, required, password, email } from '@utils/validate';
import styles from './SignInDialog.module.scss';

function SignInDialog({ isOpen, closeSignInDialog }) {
  return (
    <Dialog open={isOpen} onClose={closeSignInDialog}>
      <Form
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'hjh';
          }
          return errors;
        }}
        onSubmit={() => {
          console.log('hello');
        }}
      >
        {() => (
          <React.Fragment>
            <DialogTitle>Вход</DialogTitle>
            <DialogContent className={styles.content}>
              {/* <Field name="email" placeholder="Почта" component={Input} /> */}
              <Input name="email" label="Почта" validate={composeValidators(required(), email())} />
              <Input
                type="password"
                name="password"
                label="Пароль"
                validate={composeValidators(required(), password())}
              />
            </DialogContent>
            <DialogActions>
              <Button>Восстановить пароль</Button>
              <Button type="submit">Войти</Button>
            </DialogActions>
          </React.Fragment>
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

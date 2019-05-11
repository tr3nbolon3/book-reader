import React from 'react';
import cn from 'classnames';
import { TextField } from '@material-ui/core';
import { Field as FinalFormField } from 'react-final-form';
import styles from './Input.module.scss';

function Input(props) {
  return (
    <FinalFormField
      {...props}
      render={({ input, meta, ...rest }) => {
        const hasError = Boolean(meta.touched && meta.error);
        return (
          <div className={cn(styles.container, rest.className && rest.className)}>
            <TextField
              {...input}
              {...rest}
              className={styles.textField}
              onChange={({ target }) => input.onChange(target.value)}
              error={hasError}
              helperText={hasError ? meta.error : ''}
            />
          </div>
        );
      }}
    />
  );
}

Input.propTypes = {
  ...FinalFormField.propTypes,
  ...TextField.propTypes,
};

export default Input;

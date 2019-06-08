import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel, FormHelperText } from '@material-ui/core';

import { Field as FinalFormField } from 'react-final-form';
// import styles from './LabeledCheckbox.module.scss';

function LabeledCheckbox(props) {
  return (
    <FinalFormField
      type="checkbox"
      {...props}
      render={({ input: { value, ...inputRest }, meta, label, ...rest }) => {
        const hasError = Boolean(meta.touched && meta.error);
        return (
          <div>
            <FormControlLabel
              label={label}
              control={<Checkbox checked={value} color="primary" {...inputRest} {...rest} />}
            />
            {hasError && <FormHelperText error>{meta.error}</FormHelperText>}
          </div>
        );
      }}
    />
  );
}

LabeledCheckbox.propTypes = {
  ...FinalFormField.propTypes,
  ...Checkbox.propTypes,
  label: PropTypes.string,
  labelProps: PropTypes.shape(FormHelperText.propTypes),
};

export default LabeledCheckbox;

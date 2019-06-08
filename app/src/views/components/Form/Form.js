import React from 'react';
import PropTypes from 'prop-types';
import { Form as FinalForm } from 'react-final-form';

function Form({ children, ...rest }) {
  return (
    <FinalForm {...rest}>
      {props => (
        <form style={{ width: '100%' }} onSubmit={props.handleSubmit}>
          {children(props)}
        </form>
      )}
    </FinalForm>
  );
}

Form.propTypes = {
  ...FinalForm.propTypes,
  children: PropTypes.func.isRequired,
};

export default Form;

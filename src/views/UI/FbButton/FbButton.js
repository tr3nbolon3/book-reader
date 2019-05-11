import React from 'react';
import PropTypes from 'prop-types';
import { Facebook } from 'mdi-material-ui';
import { Button } from '@material-ui/core';

function FbButton({ iconProps, ...rest }) {
  return (
    <Button style={{ background: '#3a5a98' }} variant="contained" color="inherit" {...rest}>
      <Facebook style={{ color: 'white' }} {...iconProps} />
    </Button>
  );
}

FbButton.propTypes = {
  ...Button.propTypes,
  iconProps: PropTypes.shape(Facebook.propTypes),
};

export default FbButton;

import React from 'react';
import PropTypes from 'prop-types';
import { Google } from 'mdi-material-ui';
import { Button } from '@material-ui/core';

function GoogleButton({ iconProps, ...rest }) {
  return (
    <Button style={{ background: '#ea4335' }} variant="contained" {...rest}>
      <Google style={{ color: 'white' }} {...iconProps} />
    </Button>
  );
}

GoogleButton.propTypes = {
  ...Button.propTypes,
  iconProps: PropTypes.shape(Google.propTypes),
};

export default GoogleButton;

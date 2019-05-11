import React from 'react';
import PropTypes from 'prop-types';
import { Vk } from 'mdi-material-ui';
import { Button } from '@material-ui/core';

function VkButton({ iconProps, ...rest }) {
  return (
    <Button style={{ background: '#4a76a8' }} variant="contained" {...rest}>
      <Vk style={{ color: 'white' }} {...iconProps} />
    </Button>
  );
}

VkButton.propTypes = {
  ...Button.propTypes,
  iconProps: PropTypes.shape(Vk.propTypes),
};

export default VkButton;

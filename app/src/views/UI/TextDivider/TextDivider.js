import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Divider, Typography } from '@material-ui/core';
import styles from './TextDivider.module.scss';

function TextDivider({ className, text }) {
  return (
    <div className={cn(className && className)}>
      <Typography classes={{ overline: styles.text }} align="center" variant="overline">
        {text}
      </Typography>
      <Divider variant="fullWidth" />
    </div>
  );
}

TextDivider.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default TextDivider;

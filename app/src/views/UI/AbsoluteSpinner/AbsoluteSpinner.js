import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CircularProgress } from '@material-ui/core';
import styles from './AbsoluteSpinner.module.scss';

function AbsoluteSpinner({ containerProps, underlayProps, withUnderlay, ...rest }) {
  return (
    <div {...containerProps} className={cn(styles.container, containerProps.className && containerProps.className)}>
      <CircularProgress className={styles.progress} {...rest} />
      {withUnderlay && (
        <div {...underlayProps} className={cn(styles.underlay, underlayProps.className && underlayProps.className)} />
      )}
    </div>
  );
}

AbsoluteSpinner.defaultProps = {
  withUnderlay: true,
  containerProps: {},
  underlayProps: {},
};

AbsoluteSpinner.propTypes = {
  ...CircularProgress.propTypes,
  containerProps: PropTypes.object,
  underlayProps: PropTypes.object,
  withUnderlay: PropTypes.bool,
};

export default AbsoluteSpinner;

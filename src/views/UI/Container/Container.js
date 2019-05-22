import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Container.module.scss';

function Container({ className, children }) {
  return <div className={cn(styles.root, className && className)}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Container;

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Logo.module.scss';

import './font/comfortaa.css';

function Logo({ className, ...rest }) {
  return (
    <p className={cn(styles.root, className && className)} {...rest}>
      bambook
    </p>
  );
}

// Logo.defaultProps = {
//   name: 'Logo',
// };

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;

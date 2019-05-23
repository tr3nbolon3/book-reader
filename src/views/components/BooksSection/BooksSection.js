import React from 'react';
import PropTypes from 'prop-types';
import styles from './BooksSection.module.scss';

function BooksSection({ children }) {
  return <div className={styles.root}>{children}</div>;
}

BooksSection.propTypes = {
  children: PropTypes.any,
};

export default BooksSection;

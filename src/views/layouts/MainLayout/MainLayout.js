import React from 'react';
import PropTypes from 'prop-types';

import Header from '@components/Header';
import Footer from '@components/Footer';

import styles from './MainLayout.module.scss';

function MainLayout({ children, headerProps, mainProps, footerProps }) {
  return (
    <div className={styles.root}>
      <Header {...headerProps} />
      <div className={styles.main} {...mainProps}>
        {children}
      </div>
      <Footer {...footerProps} />
    </div>
  );
}

MainLayout.defaultProps = {
  children: null,
  headerProps: {},
  footerProps: {},
};

MainLayout.propTypes = {
  children: PropTypes.any,
  mainProps: PropTypes.object,
  headerProps: PropTypes.shape(Header.propTypes),
  footerProps: PropTypes.shape(Footer.propTypes),
};

export default MainLayout;

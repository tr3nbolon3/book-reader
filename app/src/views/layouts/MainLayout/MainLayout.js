import React from 'react';
import PropTypes from 'prop-types';

function MainLayout({ children }) {
  return (
    <React.Fragment>
      <div>Header</div>
      <main>{children}</main>
      <div>Footer</div>
    </React.Fragment>
  );
}

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;

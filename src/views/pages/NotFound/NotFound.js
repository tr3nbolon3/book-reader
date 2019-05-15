import React from 'react';
// import PropTypes from 'prop-types';

import MainLayout from '@layouts/MainLayout';
import { Typography } from '@material-ui/core';

import * as paths from '@routes/paths';
import Link from '@UI/Link';

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  '404': {
    fontWeight: 'bold',
    fontSize: 105,
  },
  text: {},
  link: {
    textDecoration: 'underline',
  },
};

function NotFound() {
  return (
    <MainLayout>
      <div style={styles.root}>
        <Typography style={styles['404']} color="primary">
          404
        </Typography>
        <Typography style={styles.text}>
          Страница не найдена. Перейти к{' '}
          <Link style={styles.link} to={paths.LIBRARY}>
            каталогу книг
          </Link>
        </Typography>
      </div>
    </MainLayout>
  );
}

export default NotFound;

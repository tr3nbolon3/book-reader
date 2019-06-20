import React from 'react';
import { Typography } from '@material-ui/core';

import Logo from '@UI/Logo';
// import Link from '@UI/Link';

// import * as paths from '@routes/paths';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.root}>
      <Logo className={styles.logo} />
      {/* <div className={styles.links}>
        <Link className={styles.link} to={paths.USER_AGREEMENT}>
          Пользовательское соглашение
        </Link>
        <Link className={styles.link} to={paths.PRIVACY_POLICY}>
          Политика конфиденциальности
        </Link>
        <Link className={styles.link} to={paths.PUBLIC_OFFER}>
          Публичная оферта
        </Link>
        <Link className={styles.link} to={paths.CONTACTS}>
          Контакты
        </Link>
      </div> */}
      <Typography color="inherit">© bambook 2019</Typography>
    </div>
  );
}

export default Footer;

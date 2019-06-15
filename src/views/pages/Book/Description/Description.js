import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import styles from './Description.module.scss';
import { cutText } from '@utils';

function Description({ description }) {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!isOpen);

  const maxLen = 400;
  const isLong = description.length > maxLen;

  return (
    <div className={styles.root}>
      <Typography className={styles.text}>{isOpen ? description : cutText(description, maxLen)}</Typography>
      <button className={styles.button} onClick={toggle}>
        {isLong && (isOpen ? 'Показать меньше' : 'Показать все')}
      </button>
    </div>
  );
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;

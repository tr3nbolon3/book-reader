import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import styles from './Description.module.scss';
import { cutText } from '@utils';

class Description extends React.Component {
  state = {
    isOpen: false,
  };

  handleToggleOpen = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  render() {
    const { isOpen } = this.state;
    const { description } = this.props;

    const maxLen = 400;
    const isLong = description.length > maxLen;

    return (
      <div className={styles.root}>
        <Typography className={styles.text}>{isOpen ? description : cutText(description, maxLen)}</Typography>
        <button className={styles.button} onClick={this.handleToggleOpen}>
          {isLong && (isOpen ? 'Показать меньше' : 'Показать все')}
        </button>
      </div>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;

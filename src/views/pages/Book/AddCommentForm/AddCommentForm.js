import React from 'react';
import PropTypes from 'prop-types';
// import cn from 'classnames';
import Form from '@components/Form';
import { Grid, TextField, Button } from '@material-ui/core';
import CurrentUserAvatar from '@components/CurrentUserAvatar';

import styles from './AddCommentForm.module.scss';

class AddCommentForm extends React.Component {
  handleSubmit = values => {
    // eslint-disable-next-line
    console.log('values', values);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {() => (
          <div className={styles.root}>
            <Grid alignItems="flex-start" className={styles.grid} container spacing={8}>
              <Grid className={styles.gridAvatar} item>
                <CurrentUserAvatar />
              </Grid>
              <Grid className={styles.gridTextField} item>
                <TextField multiline id="input-with-icon-grid" style={{ width: '100%' }} label="Ваш комментарий" />
              </Grid>
            </Grid>
            <Button className={styles.button}>Добавить</Button>
          </div>
        )}
      </Form>
    );
  }
}

AddCommentForm.propTypes = {
  classes: PropTypes.string,
};

export default AddCommentForm;

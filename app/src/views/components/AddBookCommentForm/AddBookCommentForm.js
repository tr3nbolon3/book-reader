import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';

import Form from '@components/Form';
import { Grid, Button } from '@material-ui/core';
import CurrentUserAvatar from '@components/CurrentUserAvatar';

import * as firestoreActions from '@ducks/firestore/firestoreActions';

import Input from '@components/Input';
import { getIsAddingComment } from '@ducks/firestore/firestoreSelectors';
import AbsoluteSpinner from '@UI/AbsoluteSpinner';
import { required } from '@utils/validate';
import styles from './AddBookCommentForm.module.scss';

class AddBookCommentForm extends React.Component {
  handleSubmit = (values, { reset }) => {
    const { addComment, bookId } = this.props;
    addComment({ bookId, ...values });
    reset();
  };

  render() {
    const { isAddingComment } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        {() => (
          <div className={styles.root}>
            {isAddingComment && (
              <AbsoluteSpinner containerProps={{ style: { backgroundColor: '#f3ebeb', borderRadius: 3 } }} />
            )}
            <Grid alignItems="flex-start" className={styles.grid} container spacing={8}>
              <Grid className={styles.gridAvatar} item>
                <CurrentUserAvatar />
              </Grid>
              <Grid className={styles.gridTextField} item>
                <Input
                  name="text"
                  id="input-with-icon-grid"
                  style={{ width: '100%' }}
                  label="Ваш комментарий"
                  margin="none"
                  validate={required()}
                />
              </Grid>
            </Grid>
            <Button type="submit" className={styles.button}>
              Добавить
            </Button>
          </div>
        )}
      </Form>
    );
  }
}

AddBookCommentForm.propTypes = {
  bookId: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
  isAddingComment: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAddingComment: getIsAddingComment(state),
});

const mapDispatchToProps = { ...firestoreActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddBookCommentForm);

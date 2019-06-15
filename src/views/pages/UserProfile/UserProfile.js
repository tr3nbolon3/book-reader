import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';
import * as firestoreActions from '@ducks/firestore/firestoreActions';

import MainLayout from '@layouts/MainLayout';
import Container from '@UI/Container';
import Form from '@components/Form';
import { Button } from '@material-ui/core';
import Input from '@components/Input';
import { required } from '@utils/validate';
import { getUser } from '@ducks/firebase/firebaseSelectors';
import AvatarEditor from '@components/AvatarEditor';

import styles from './UserProfile.module.scss';

function UserProfile({ initialValues, updateUser }) {
  return (
    <MainLayout>
      <Container style={{ paddingTop: 40, paddingBottom: 40 }}>
        <Form onSubmit={updateUser} initialValues={initialValues}>
          {() => (
            <div className={styles.root}>
              <div className={styles.avatarEditorContainer}>
                <AvatarEditor />
              </div>
              <div className={styles.fields}>
                <div>
                  <Input type="text" name="firstName" label="Имя" validate={required()} />
                  <Input type="text" name="lastName" label="Фамилия" validate={required()} />
                </div>
                <Button style={{ marginTop: 24 }} variant="outlined" type="submit">
                  Cохранить
                </Button>
              </div>
            </div>
          )}
        </Form>
      </Container>
    </MainLayout>
  );
}

UserProfile.propTypes = {
  updateUser: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const initialValues = getUser(state);

  return { initialValues };
};

const mapDispatchToProps = { ...firestoreActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);

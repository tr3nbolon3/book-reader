import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
// import cn from 'classnames';
// import AvatarEdit from 'react-avatar-edit';

import { Camera } from 'mdi-material-ui';
import { getUser } from '@ducks/firebase/firebaseSelectors';
import { getIsUploadingUserAvatar } from '@ducks/firestore/firestoreSelectors';
import * as firebaseActions from '@ducks/firestore/firestoreActions';
import AbsoluteSpinner from '@UI/AbsoluteSpinner';
import styles from './AvatarEditor.module.scss';
import Dialog from './Dialog';

function AvatarEditor({ src, uploadUserAvatar, isUploadingUserAvatar }) {
  const [isOpen, setState] = React.useState(false);

  const onClose = () => setState(false);

  const onOpen = () => setState(true);

  const onUploadUserAvatar = newAvatarPath => {
    onClose();
    uploadUserAvatar(newAvatarPath);
  };

  return (
    <div className={styles.root}>
      <div className={styles.avatar} onClick={onOpen}>
        {isUploadingUserAvatar && <AbsoluteSpinner />}
        <img className={styles.avatarImg} src={src} alt="Avatar" />
        <Camera className={styles.avatarCamera} />
      </div>
      <Dialog isOpen={isOpen} onClose={onClose} onUploadUserAvatar={onUploadUserAvatar} />
    </div>
  );
}

AvatarEditor.propTypes = {
  src: PropTypes.string.isRequired,
  uploadUserAvatar: PropTypes.func.isRequired,
  isUploadingUserAvatar: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isUploadingUserAvatar: getIsUploadingUserAvatar(state),
  src: getUser(state).avatarUrl,
});

export default connect(
  mapStateToProps,
  firebaseActions,
)(AvatarEditor);

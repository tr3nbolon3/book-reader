import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import cn from 'classnames';
import AvatarEdit from 'react-avatar-edit';

import { Dialog as MaterialDialog, DialogContent, DialogActions, Button } from '@material-ui/core';
import styles from './Dialog.module.scss';
import defaultUserPic from './default-userpic.png';

function Dialog(props) {
  const { isOpen, onClose, onUploadUserAvatar } = props;

  const [preview, setPreview] = useState(null);

  // onBeforeFileLoad = elem => {
  // if (elem.target.files[0].size > 71680) {
  //   alert('File is too big!');
  //   elem.target.value = '';
  // }
  // };

  return (
    <MaterialDialog maxWidth="sm" open={isOpen} onClose={onClose}>
      <DialogContent>
        <div className={styles.content}>
          <AvatarEdit
            width={200}
            height={200}
            onCrop={setPreview}
            onClose={() => setPreview(null)}
            // onBeforeFileLoad={this.onBeforeFileLoad}
          />
          <img className={styles.avatar} src={preview || defaultUserPic} alt="Превью аватара" />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            if (preview) {
              onUploadUserAvatar(preview);
            }
          }}
        >
          Загрузить
        </Button>
      </DialogActions>
    </MaterialDialog>
  );
}

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onUploadUserAvatar: PropTypes.func.isRequired,
};

export default Dialog;

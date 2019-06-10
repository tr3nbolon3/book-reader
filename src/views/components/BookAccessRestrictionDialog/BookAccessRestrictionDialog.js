import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as appActions from '@ducks/app/appActions';
import { Dialog, DialogTitle, DialogActions, Button, DialogContent } from '@material-ui/core';
import { getIsOpenBookAccessRestrictionDialog } from '@ducks/app/appSelectors';
import { history } from '@utils/';
import * as paths from '@routes/paths';

function BookAccessRestrictionDialog({ isOpen, close }) {
  const handleClick = () => {
    close();
    setTimeout(() => {
      history.push(paths.SUBSCRIBE);
    }, 0);
  };

  return (
    <Dialog open={isOpen} onClose={close} maxWidth="xs">
      <DialogTitle>Нужна подписка</DialogTitle>
      <DialogContent>
        Данная книга доступна только по подписке. Пожалуйста, оформите подписку в приложении, чтобы получить доступ к
        данной книге.
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick}>Оформить подписку</Button>
      </DialogActions>
    </Dialog>
  );
}

BookAccessRestrictionDialog.propTypes = {
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isOpen: getIsOpenBookAccessRestrictionDialog(state),
});

const mapDispatchToProps = {
  close: appActions.closeBookAccessRestrictionDialog,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookAccessRestrictionDialog);

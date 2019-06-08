import { createAction } from 'redux-actions';
import * as appTypes from './appTypes';

// payload - {Object} - { type, message }
export const showNotification = createAction(appTypes.SHOW_NOTIFICATION);

export const openSignInDialog = createAction(appTypes.OPEN_SIGN_IN_DIALOG);
export const closeSignInDialog = createAction(appTypes.CLOSE_SIGN_IN_DIALOG);

export const openSignUpDialog = createAction(appTypes.OPEN_SIGN_UP_DIALOG);
export const closeSignUpDialog = createAction(appTypes.CLOSE_SIGN_UP_DIALOG);

export const openConfirmDialog = createAction(appTypes.OPEN_CONFIRM_DIALOG);

export const cleanConfirmDialog = createAction(appTypes.CLEAN_CONFIRM_DIALOG);
export const closeConfirmDialog = createAction(appTypes.CLOSE_CONFIRM_DIALOG);

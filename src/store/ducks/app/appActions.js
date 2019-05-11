import { createAction } from 'redux-actions';
import * as appTypes from './appTypes';

// payload - {Object} - { type, message }
export const showNotification = createAction(appTypes.SHOW_NOTIFICATION);

export const openSignInDialog = createAction(appTypes.OPEN_SIGN_IN_DIALOG);
export const closeSignInDialog = createAction(appTypes.CLOSE_SIGN_IN_DIALOG);

export const openSignUpDialog = createAction(appTypes.OPEN_SIGN_UP_DIALOG);
export const closeSignUpDialog = createAction(appTypes.CLOSE_SIGN_UP_DIALOG);

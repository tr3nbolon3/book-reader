import { createAction } from 'redux-actions';
import * as appTypes from './appTypes';

// payload - {Object} - { type, message }
export const showNotification = createAction(appTypes.SHOW_NOTIFICATION);

export const secondAction = createAction(appTypes.SECOND_ACTION);

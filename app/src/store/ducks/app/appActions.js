import { createAction } from 'redux-actions';
import * as appTypes from './appTypes';

export const firstAction = createAction(appTypes.FIRST_ACTION);
export const secondAction = createAction(appTypes.SECOND_ACTION);

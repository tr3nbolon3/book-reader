import { createAction } from 'redux-actions';
import * as sessionTypes from './sessionTypes';

export const firstAction = createAction(sessionTypes.FIRST_ACTION);
export const secondAction = createAction(sessionTypes.SECOND_ACTION);

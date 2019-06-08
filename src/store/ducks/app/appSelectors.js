// import { createSelector } from 'reselect';

export const getAppNotification = state => state.app.notification;

export const getIsOpenSignUpDialog = state => state.app.isOpenSignUpDialog;
export const getIsOpenSignInDialog = state => state.app.isOpenSignInDialog;

export const getIsOpenBookAccessRestrictionDialog = state => state.app.isOpenBookAccessRestrictionDialog;

export const getConfirmDialog = state => state.app.confirmDialog;

import { createSelector } from 'reselect';

export const getUserData = state => state.user.userData;

export const getUsername = createSelector(
  getUserData,
  userData => `${userData.first_name} ${userData.last_name}`,
);

export const getUserAvatar = state => (state.user.userData.image || { url: '' }).url;

export const isSignedIn = state => state.user.isSignedIn;
export const isSigningIn = state => state.user.signingInState === 'requested';
export const isSigningUp = state => state.user.signingUpState === 'requested';
export const isValidationToken = state => state.user.validationTokenState === 'requested';

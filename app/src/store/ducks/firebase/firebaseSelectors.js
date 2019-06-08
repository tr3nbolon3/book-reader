// import { createSelector } from 'reselect';

export const getIsAuthLoaded = state => state.firebase.auth.isLoaded;
export const getIsProfileLoaded = state => state.firebase.profile.isLoaded;

export const getIsUserLoaded = state => getIsAuthLoaded(state) && getIsProfileLoaded(state);

// export const getIsUserLoaded = createSelector(
//   [getIsAuthLoaded, getIsProfileLoaded],
//   (isAuthLoaded, isProfileLoaded) => isAuthLoaded && isProfileLoaded,
// );

export const getIsSignedIn = state => !state.firebase.auth.isEmpty;

export const getUser = state => {
  const {
    auth,
    profile: { isEmpty, isLoaded, ...profileData },
  } = state.firebase;

  return {
    uid: auth.uid,
    email: auth.email,
    ...profileData,
  };
};

// export const getFirebasePartFiltered = createSelector(
//   getIsSignedIn,
//   firebasePart => firebasePart.filter(Boolean),
// );

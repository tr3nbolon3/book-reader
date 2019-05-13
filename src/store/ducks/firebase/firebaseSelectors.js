// import { createSelector } from 'reselect';

// eslint-disable-next-line
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

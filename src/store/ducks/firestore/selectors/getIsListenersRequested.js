const getIsListenersRequested = state => {
  const { requested } = state.firestore.firestore.status;
  const requestedValues = Object.values(requested);

  if (!requestedValues.length) return false;

  return !requestedValues.includes(false);
};

export default getIsListenersRequested;

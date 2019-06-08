const cleanObject = object =>
  Object.keys(object)
    .filter(key => !!object[key])
    .reduce((acc, key) => ({ ...acc, [key]: object[key] }), {});

export default cleanObject;

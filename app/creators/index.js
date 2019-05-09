const componentCreator = require('./componentCreator');
const containerCreator = require('./containerCreator');
const uiCreator = require('./uiCreator');
const pageCreator = require('./pageCreator');

const creators = {
  '--component': componentCreator,
  '--container': containerCreator,
  '--page': pageCreator,
  '--ui': uiCreator,
  '-u': uiCreator,
  '-p': componentCreator,
  '-c': componentCreator,
  '-C': containerCreator,
};

module.exports = type => {
  const creator = creators[type];
  if (!creator) {
    const message = `\nТип ${type} не определен.`;
    throw new Error(message);
  }
  return creator;
};

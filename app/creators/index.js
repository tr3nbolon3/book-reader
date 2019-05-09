const componentCreator = require('./componentCreator');
const containerCreator = require('./containerCreator');
const uiCreator = require('./uiCreator');
const pageCreator = require('./pageCreator');
const duckCreator = require('./duckCreator');

const creators = {
  '--component': componentCreator,
  '--container': containerCreator,
  '--duck': duckCreator,
  '--page': pageCreator,
  '--ui': uiCreator,
};

module.exports = type => {
  const creator = creators[type];
  if (!creator) {
    const message = `\nТип ${type} не определен.`;
    throw new Error(message);
  }
  return creator;
};

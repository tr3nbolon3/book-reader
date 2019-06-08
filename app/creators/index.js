const componentCreator = require('./componentCreator');
const containerCreator = require('./containerCreator');
const uiCreator = require('./uiCreator');
const pageCreator = require('./pageCreator');
const duckCreator = require('./duckCreator');
const iconCreator = require('./iconCreator');
const layoutCreator = require('./layoutCreator');
const connectedComponentCreator = require('./connectedComponentCreator');

const creators = {
  '--component': componentCreator,
  '--connected-component': connectedComponentCreator,
  '--CC': connectedComponentCreator,
  '--container': containerCreator,
  '--layout': layoutCreator,
  '--icon': iconCreator,
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

const path = require('path');
const aliases = require('./aliases');

const createJestAliases = jAliases =>
  jAliases.reduce((acc, [name, aliasPath]) => ({ ...acc, [`^${name}(.*)$`]: `<rootDir>/${aliasPath}$1` }), {});

const createWebpackAliases = wAliases =>
  wAliases.reduce((acc, [name, aliasPath]) => ({ ...acc, [name]: path.resolve(__dirname, aliasPath) }), {});

module.exports = {
  webpack: function webpack(config) {
    const newConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...createWebpackAliases(aliases),
        },
      },
    };

    return newConfig;
  },

  jest: function jest(config) {
    const newConfig = {
      ...config,
      moduleNameMapper: {
        ...config.moduleNameMapper,
        ...createJestAliases(aliases),
      },
    };

    return newConfig;
  },
};

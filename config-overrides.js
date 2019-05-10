const path = require('path');

module.exports = function override(config) {
  // eslint-disable-next-line
  config.resolve.alias = {
    ...config.resolve.alias,
    '@src': path.resolve(__dirname, 'src/'),
    '@components': path.resolve(__dirname, 'src/views/components/'),
    '@ducks': path.resolve(__dirname, 'src/store/ducks/'),
    '@utils': path.resolve(__dirname, 'src/utils/'),
    '@enhancers': path.resolve(__dirname, 'src/views/enhancers/'),
    '@layouts': path.resolve(__dirname, 'src/views/layouts/'),
    '@pages': path.resolve(__dirname, 'src/views/pages/'),
    '@prop-types': path.resolve(__dirname, 'src/views/prop-types/'),
    '@UI': path.resolve(__dirname, 'src/views/UI/'),
  };

  return config;
};

module.exports = {
  extends: [
    'eslint-config-purrweb-react',
    'plugin:react/recommended'
  ],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ["@src", "./src"],
          ["@ducks", "./src/store/ducks"],
          ["@utils", "./src/utils"],
          ["@components", "./src/views/components"],
          ["@enhancers", "./src/views/components"],
          ["@layouts", "./src/views/layouts"],
          ["@pages", "./src/views/pages"],
          ["@prop-types", "./src/views/prop-types"],
          ["@UI", "./src/views/UI"]
        ],
      },
    },
  },
};
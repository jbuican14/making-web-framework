/* eslint-disable no-undef */
// https://eslint.org/docs/latest/use/configure/migration-guide
const eslintPluginsJs = require('@eslint/js');

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', 
      globals: {
        window: 'readonly',
        navigator: 'readonly',
        document: 'readonly',
        console: 'readonly'
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      js: eslintPluginsJs,
    },
    rules: {
      ...eslintPluginsJs.configs.recommended.rules,
    },
  },
];

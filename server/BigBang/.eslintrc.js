'use strict';

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    // Stop ESLint from looking for a configuration file in parent folders
    root: true,
    env: {
        es6: true,
        node: true,
        jest: true
    },
    extends: ['eslint:recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        indent: 0,
        'linebreak-style': OFF,
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        "no-console": ["warn"]
    },

};
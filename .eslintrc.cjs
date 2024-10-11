/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    indent: [0, 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "vue/padding-line-between-blocks": [1, "always"],
    "vue/multi-word-component-names": [0, "always"]
  }
};

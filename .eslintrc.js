module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest"],
  extends: ["airbnb-typescript", "plugin:jest/recommended", "prettier"],
};

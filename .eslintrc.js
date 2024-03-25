module.exports = {
  root: true,
  extends: ["@react-native-community", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    quotes: "off",
    "comma-dangle": "off",
    "no-var": "error",
    "no-alert": "error",
    "no-console": "error",
    "no-debugger": "error",
    "new-cap": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react/no-unstable-nested-components": ["warn", { allowAsProps: true }]
  }
};

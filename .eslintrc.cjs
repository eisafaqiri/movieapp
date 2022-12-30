module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
  ],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    quotes: ["error", "double"],
    "react/jsx-boolean-value": "off",
    "linebreak-style": ["off", "unix"],
    "no-param-reassign": ["error", { props: false }],
    "import/prefer-default-export": "off",
  },
};

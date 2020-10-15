module.exports = {
  extends: ["standard", "standard-react", "plugin:import/errors", "plugin:import/warnings"],
  rules: {
    "react/prop-types": 0,
    quotes: ["error", "double", "single"],
    semi: [2, "always"],
    "space-before-function-paren": ["error", "never"]
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.8.4"
    }
  }
};

module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  settings: {
    react: {
      version: "detect"
    }
  },
  globals: {
    JSX: true,
  }
}

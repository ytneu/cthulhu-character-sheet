module.exports = {
  "extends": [
    "airbnb",
    "plugin:prettier",
    "prettier/react",
  ],
  "parser": "babel-eslint",
  "rules": {
    "indent": ["error", 2],
    "prettier/prettier": "error"
  },
  "prettier/prettier": [
    "error",
    {
      "semi": true,
      "singleQuote": true,
      "tabWidth": 2,
      "useTabs": false,
      "printWidth": 120,
    }
  ],
  "plugins": [
    "prettier"
  ]
}
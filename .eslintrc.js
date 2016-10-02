module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'import/no-unresolved': 0,
    "indent": [2, "tab"],
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
    "no-console": 0,
    "prefer-arrow-callback": 0,
    "consistent-return": 0,
    "max-len": ["error", 150],
    "strict": ["off", "global"],
    "no-underscore-dangle": ["off", { "allow": ["._id"] }],
    // allow debugger during development,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}

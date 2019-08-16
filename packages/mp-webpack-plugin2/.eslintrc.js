const path = require('path')

module.exports = {
  'extends': [
    path.resolve(__dirname, '../../.eslintrc.js'),
  ],
  'rules': {
    'import/no-unresolved': 'off',
  },
  'globals': {
    'init': true,
  },
}

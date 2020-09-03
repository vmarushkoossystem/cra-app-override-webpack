const path = require('path');
const conf = require('./node_modules/react-scripts/config/webpack.config')('production');

module.exports = {
  ...conf,
  output: {
    ...conf.output,
    path: path.resolve(__dirname, 'trololo'),
  },
};

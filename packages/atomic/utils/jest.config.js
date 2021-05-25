const base = require('../../../configs/jest.config.base');
const pkg = require('./package');

module.exports = {
  ...base,
  testEnvironment: 'jsdom',
  name: pkg.name,
  displayName: pkg.name,
};

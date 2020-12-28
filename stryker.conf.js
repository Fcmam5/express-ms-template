// eslint-disable-next-line func-names
module.exports = {
  packageManager: 'npm',
  mutate: ['src/**/*.js'],
  reporters: ['clear-text', 'progress', 'dashboard'],
  testRunner: 'jest',
  coverageAnalysis: 'off',
};

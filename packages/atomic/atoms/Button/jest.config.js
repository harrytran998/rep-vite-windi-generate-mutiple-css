/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  preset: '../../../../config/jest/jest.base.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'UI.Atoms.Button',
};

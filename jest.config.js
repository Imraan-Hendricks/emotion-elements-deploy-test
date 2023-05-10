module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',

  testMatch: ['<rootDir>/src/**/*.(spec|test|snapshot).tsx'],
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
  },

  clearMocks: true,
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,

  silent: false,
  verbose: true,
};

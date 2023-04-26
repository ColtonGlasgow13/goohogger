module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['./tests/setupTests.js'],
    testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/'],
  };
  
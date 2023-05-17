module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      "^src/(.*)$": "<rootDir>/src/$1",
    },
    setupFilesAfterEnv: ['./tests/setupTests.js'],
    testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/'],
  };
  
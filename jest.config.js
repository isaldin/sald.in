module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/build/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  rootDir: '.',
  moduleNameMapper: {
    '@app/(.*)$': '<rootDir>/src/$1',
  },
};

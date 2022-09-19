
module.exports = {
    roots: ['<rootDir>/src', '<rootDir>/test'],
    collectCoverageFrom: [
      '<rootDir>/src/**/*.ts',
      '!<rootDir>/src/main/**',
      '!<rootDir>/src/**/*-ports.ts',
      '!**/ports/**',
      '!**/test/**',
      '!**/config/**'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
      '.+\\.ts$': 'ts-jest'
    }
  }
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^.+\\.svg$": 'jest-svg-transformer',
    "^.+\\.(css|less|scss)$": 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.ts',
  },
  "setupFilesAfterEnv": [
    "<rootDir>/tests/setupTests.ts"
  ],

  collectCoverage: true,
}
import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsConfig: {
        // allow js in typescript
        allowJs: true,
      },
    },
  },
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
    '\\.(css|scss)$': '<rootDir>/jest/__mocks__/styleMock.js',
  },
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
    "^.+\\.(js|jsx)$": "babel-jest",
  }
};

export default config;
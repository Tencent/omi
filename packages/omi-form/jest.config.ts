export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.css\\?raw$': '<rootDir>/test/theme.ts',

  },
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
}
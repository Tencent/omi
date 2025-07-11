export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  setupFiles: ["jest-canvas-mock"],
  testPathIgnorePatterns: [
    "src/polyfills",
  ],
  coveragePathIgnorePatterns: [
    "src/polyfills",
  ]
} 
module.exports = {
  preset: 'ts-jest',
  rootDir: 'tests',
  testEnvironment: 'node',
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: ['Capstone/node_modules/'],
};


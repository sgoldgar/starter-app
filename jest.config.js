module.exports = {
  displayName: "CLIENT",
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testPathIgnorePatterns: ["<rootDir>/app", "<rootDir>/storybook/preview.js"],
  setupFiles: ["<rootDir>/.jest/register-context.js"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "\\.less$": "identity-obj-proxy",
    "^lodash-es$": "lodash",
  },
};

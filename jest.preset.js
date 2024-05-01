const path = require("path");
const nxPreset = require("@nx/jest/preset").default;

module.exports = {
  ...nxPreset,
  setupFilesAfterEnv: [path.resolve(__dirname, "setupTests.ts")],
};

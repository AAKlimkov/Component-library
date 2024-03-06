module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  modulePaths: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.less$": "<rootDir>/jest-less-transformer.js", // Create this file
  },
  moduleNameMapper: {
    "\\.less$": "identity-obj-proxy",
  },
};

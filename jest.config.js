import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jsdom",
};

export default createJestConfig(customJestConfig);
export const preset = "ts-jest";
export const testEnvironment = "jsdom";
export const moduleNameMapper = {
  "^@/(.*)$": "<rootDir>/src/$1",
};
export const setupFilesAfterEnv = ["<rootDir>/jest.setup.js"];

/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  transformIgnorePatterns: [
    "/node_modules/(?!@your-esm-package)/",
  ],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};

export default config;
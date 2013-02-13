var config = module.exports;

config["browser test"] = {
  env: "browser",
  rootPath: "./",
  libs: [
  ],
  sources: [
    "calculator.js"
  ],
  tests: [
    "test/calculator_test.js"
  ]
};
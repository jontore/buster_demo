var config = module.exports;

config["browser test"] = {
  env: "browser",
  rootPath: "./",
  libs: [
  ],
  sources: [
    "calculator.js",
    "input.js"
  ],
  tests: [
    "test/*.js"
  ]
};
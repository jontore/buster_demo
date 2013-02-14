var config = module.exports;

config["browser test"] = {
  env: "browser",
  rootPath: "./",
  libs: [
    'lib/jquery.js'
  ],
  sources: [
    "calculator.js",
    "input.js"
  ],
  tests: [
    "test/*.js"
  ]
};
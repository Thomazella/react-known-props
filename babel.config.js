module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: {
          browsers: "defaults"
        }
      }
    ]
  ],
  ignore: ["src/build/*"],
  plugins: [
    // Stage 2
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions"

    // Stage 3
    // "@babel/plugin-syntax-dynamic-import",
    // "@babel/plugin-syntax-import-meta",
    // ["@babel/plugin-proposal-class-properties", { loose: false }],
    // "@babel/plugin-proposal-json-strings"
  ]
};

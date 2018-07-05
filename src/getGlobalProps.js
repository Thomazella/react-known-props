const { reactGlobalProps } = require("./generated/reactGlobalProps");
const { ariaProps } = require("./props/aria");
const { svgGlobalProps } = require("./props/svg");
const { parseOptionsObject } = require("./utils/parseOptionsObject");

const arrayToMap = arr =>
  arr.reduce((acc, p) => Object.assign(acc, { [p]: p }), {});

const globals = Object.keys(
  Object.assign(arrayToMap(reactGlobalProps), arrayToMap(svgGlobalProps))
);

module.exports.getGlobalProps = options =>
  parseOptionsObject(options, [...ariaProps, ...globals]);

const { propsEvents } = require("./lists/react");
const { propsAria } = require("./lists/aria");
const { parseOptionsObject } = require("./utils/parseOptionsObject");
const { getReactGlobalProps } = require("./utils/getReactGlobalProps");
const { propsGlobalSvg } = require("./lists/svg");
const { propsSvgAndReact } = require("./utils/propsSvgAndReact");
const {
  getMapReactAndHtmlPropsToElements
} = require("./utils/getMapReactAndHtmlPropsToElements");

module.exports.getAllProps = options =>
  parseOptionsObject(options, () => [
    ...getReactGlobalProps(),
    ...propsSvgAndReact,
    ...propsGlobalSvg,
    ...propsEvents,
    ...propsAria,
    ...Object.keys(getMapReactAndHtmlPropsToElements)
  ]);

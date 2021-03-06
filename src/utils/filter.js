const { existy, truthy, isObj } = require("./baseFunctions");
const fastReduce = require("./fastReduce");
const { htmlPropToReactPropMap } = require("../props/react");
const { svgPropToReactPropMap } = require("../generated/svgPropToReactPropMap");
const {
  htmlElementsToLegacyPropsMap,
  htmlSvgLegacyProps,
} = require("../props/html");

const removeNonReactProps = (arr) =>
  fastReduce(
    (acc, prop) =>
      existy(htmlPropToReactPropMap[prop]) ||
      existy(svgPropToReactPropMap[prop])
        ? acc
        : [...acc, prop],
    [],
    arr
  );

const addLegacyProps = (propsArr, element) =>
  existy(htmlElementsToLegacyPropsMap[element])
    ? [...htmlElementsToLegacyPropsMap[element], ...propsArr]
    : [...htmlSvgLegacyProps, ...propsArr];

const option = (obj, option) => {
  if (existy(obj) && !isObj(obj))
    throw new Error(
      `[react-known-props] Expected an object with options but got: '${typeof obj}' ${obj.toString()}`
    );

  return obj && obj[option];
};

module.exports.filter = (options, inputProps, element) => {
  const result = {
    props: inputProps,
    filterBy: function (condition, fn, name) {
      if (truthy(condition)) this.props = fn(this.props, name);
      return this;
    },
  };

  // prettier-ignore
  return result
    .filterBy(option(options, "legacy"), addLegacyProps, element)
    .filterBy(option(options, "onlyReact"), removeNonReactProps)
    .filterBy(option(options, "sort"), props => props.sort())
    .props;
};

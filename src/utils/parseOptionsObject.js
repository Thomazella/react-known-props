const { htmlPropToReactPropMap } = require("../lists/react");
const { svgPropToReactPropMap } = require("../lists/svgPropToReactPropMap");
const {
  htmlElementsToLegacyPropsMap,
  htmlSvgLegacyProps
} = require("../lists/html");

const removeNonReactProps = arr =>
  arr.reduce(
    (acc, prop) =>
      htmlPropToReactPropMap[prop] || svgPropToReactPropMap[prop]
        ? acc
        : [...acc, prop],
    []
  );

module.exports.parseOptionsObject = (input, func, element) => {
  let out = undefined;

  // catch invalid arguments
  if (input !== undefined && typeof input !== "object") {
    //eslint-disable-next-line no-console
    console.error(
      `[react-known-props] Invalid options object: ${input.toString()}`
    );
    return out;
  }

  // default, no options action
  if (
    input === undefined ||
    Object.keys(input).length === 0 ||
    (input.legacy === false && input.onlyReact === false)
  ) {
    return func();
  }

  if (input.legacy === true) {
    if (Object.keys(htmlElementsToLegacyPropsMap).indexOf(element) !== -1) {
      out = [...htmlElementsToLegacyPropsMap[element], ...func()];
    } else {
      out = [...htmlSvgLegacyProps, ...func()];
    }
  }

  if (input.legacy === false) out = func();

  if (input.onlyReact === true)
    out = out ? removeNonReactProps(out) : removeNonReactProps(func());
  if (input.onlyReact === false) out = out ? out : func();

  return out;
};

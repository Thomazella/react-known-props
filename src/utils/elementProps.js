const { reactGlobalProps } = require("../lists/reactGlobalProps");
const { propsGlobalSvg } = require("../lists/svg");
const { elements } = require("../lists/html");
const { mapReactHtmlProps } = require("./mapReactHtmlProps");
const { mapSvgReactProps } = require("./mapSvgToReact");

// html and svg share these elements
const commonElements = [
  "a",
  "audio",
  "canvas",
  "font",
  "iframe",
  "image",
  "script",
  "style",
  "title",
  "video"
];

const getElementPropsFromMap = (map, element) =>
  Object.keys(map).reduce(
    (acc, prop) => (map[prop].indexOf(element) >= 0 ? [...acc, prop] : acc),
    []
  );

const isSvg = tag => elements.indexOf(tag) === -1;

const dedupeFilter = (prop, index, array) => prop !== array[index + 1];

module.exports.elementProps = element => {
  if (commonElements.indexOf(element) > -1) {
    return [
      ...propsGlobalSvg,
      ...reactGlobalProps,
      ...getElementPropsFromMap(mapReactHtmlProps, element),
      ...getElementPropsFromMap(mapSvgReactProps, element)
    ]
      .sort()
      .filter(dedupeFilter);
  }

  return isSvg(element)
    ? [...getElementPropsFromMap(mapSvgReactProps, element), ...propsGlobalSvg]
    : [
        ...getElementPropsFromMap(mapReactHtmlProps, element),
        ...reactGlobalProps
      ];
};

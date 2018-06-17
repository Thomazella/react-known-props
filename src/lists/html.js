//https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
module.exports.propsGlobal = [
  "accesskey",
  "autocapitalize",
  "class",
  "contenteditable",
  "contextmenu",
  // "data-*",
  "dir",
  "draggable",
  "dropzone",
  "hidden",
  "id",
  "is",
  "itemid",
  "itemprop",
  "itemref",
  "itemscope",
  "itemtype",
  "lang",
  "slot",
  "spellcheck",
  "style",
  "tabindex",
  "title",
  "translate"
];

module.exports.mapPropsToElements = {
  accept: ["form", "input"],
  "accept-charset": ["form"],
  action: ["form"],
  align: [
    "applet",
    "caption",
    "col",
    "colgroup",
    "hr",
    "iframe",
    "img",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr"
  ],
  alt: ["applet", "area", "img", "input"],
  async: ["script"],
  autocomplete: ["form", "input", "textarea"],
  autofocus: ["button", "input", "keygen", "select", "textarea"],
  autoplay: ["audio", "video"],
  buffered: ["audio", "video"],
  challenge: ["keygen"],
  charset: ["meta", "script"],
  checked: ["command", "input"],
  cite: ["blockquote", "del", "ins", "q"],
  code: ["applet"],
  codebase: ["applet"],
  cols: ["textarea"],
  colspan: ["td", "th"],
  content: ["meta"],
  controls: ["audio", "video"],
  coords: ["area"],
  crossorigin: ["audio", "img", "link", "script", "video"],
  data: ["object"],
  datetime: ["del", "ins", "time"],
  default: ["track"],
  defer: ["script"],
  dirname: ["input", "textarea"],
  disabled: [
    "button",
    "command",
    "fieldset",
    "input",
    "keygen",
    "optgroup",
    "option",
    "select",
    "textarea"
  ],
  download: ["a", "area"],
  enctype: ["form"],
  for: ["label", "output"],
  form: [
    "button",
    "fieldset",
    "input",
    "keygen",
    "label",
    "meter",
    "object",
    "output",
    "progress",
    "select",
    "textarea"
  ],
  formaction: ["input", "button"],
  headers: ["td", "th"],
  height: ["canvas", "embed", "iframe", "img", "input", "object", "video"],
  high: ["meter"],
  href: ["a", "area", "base", "link"],
  hreflang: ["a", "area", "link"],
  "http-equiv": ["meta"],
  icon: ["command"],
  integrity: ["link", "script"],
  ismap: ["img"],
  keytype: ["keygen"],
  kind: ["track"],
  label: ["track"],
  language: ["script"],
  list: ["input"],
  loop: ["audio", "bgsound", "marquee", "video"],
  low: ["meter"],
  manifest: ["html"],
  max: ["input", "meter", "progress"],
  maxlength: ["input", "textarea"],
  minlength: ["input", "textarea"],
  media: ["a", "area", "link", "source", "style"],
  method: ["form"],
  min: ["input", "meter"],
  multiple: ["input", "select"],
  muted: ["audio", "video"],
  name: [
    "button",
    "form",
    "fieldset",
    "iframe",
    "input",
    "keygen",
    "object",
    "output",
    "select",
    "textarea",
    "map",
    "meta",
    "param"
  ],
  novalidate: ["form"],
  open: ["details"],
  optimum: ["meter"],
  pattern: ["input"],
  ping: ["a", "area"],
  placeholder: ["input", "textarea"],
  poster: ["video"],
  preload: ["audio", "video"],
  radiogroup: ["command"],
  readonly: ["input", "textarea"],
  rel: ["a", "area", "link"],
  required: ["input", "select", "textarea"],
  reversed: ["ol"],
  rows: ["textarea"],
  rowspan: ["td", "th"],
  sandbox: ["iframe"],
  scope: ["th"],
  scoped: ["style"],
  selected: ["option"],
  shape: ["a", "area"],
  size: ["input", "select"],
  sizes: ["link", "img", "source"],
  span: ["col", "colgroup"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ],
  srcdoc: ["iframe"],
  srclang: ["track"],
  srcset: ["img"],
  start: ["ol"],
  step: ["input"],
  summary: ["table"],
  target: ["a", "area", "base", "form"],
  type: [
    "button",
    "input",
    "command",
    "embed",
    "object",
    "script",
    "source",
    "style",
    "menu"
  ],
  usemap: ["img", "input", "object"],
  value: ["button", "option", "input", "li", "meter", "progress", "param"],
  width: ["canvas", "embed", "iframe", "img", "input", "object", "video"],
  wrap: ["textarea"]
};

module.exports.mapPropsToElementsLegacy = {
  bgcolor: [
    "body",
    "col",
    "colgroup",
    "marquee",
    "table",
    "tbody",
    "tfoot",
    "td",
    "th",
    "tr"
  ],
  border: ["img", "object", "table"],
  color: ["basefont", "font", "hr"]
};

module.exports.mapElementsToPropsLegacy = {
  body: ["bgcolor"],
  col: ["bgcolor"],
  colgroup: ["bgcolor"],
  marquee: ["bgcolor"],
  table: ["bgcolor", "border"],
  tbody: ["bgcolor"],
  tfoot: ["bgcolor"],
  td: ["bgcolor"],
  th: ["bgcolor"],
  tr: ["bgcolor"],
  img: ["border"],
  object: ["border"],
  border: ["img", "object", "table"],
  basefont: ["color"],
  font: ["color"],
  hr: ["color"]
};

module.exports.propsLegacyHtml = ["bgcolor", "border", "color"];

module.exports.propsLegacyHtmlSvg = ["bgcolor", "border"];

module.exports.elements = [
  "a",
  "abbr",
  "acronym",
  "address",
  "applet",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "basefont",
  "bdi",
  "bdo",
  "bgsound",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "command",
  "content",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "image",
  "img",
  "input",
  "ins",
  "isindex",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "listing",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "multicol",
  "nav",
  "nextid",
  "nobr",
  "noembed",
  "noframes",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "plaintext",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "xmp"
];

module.exports.elementsObsolete = [
  "acronym",
  "applet",
  "basefont",
  "bgsound",
  "big",
  "blink",
  "center",
  "command",
  "dir",
  "element",
  "font",
  "image",
  "listing",
  "marquee",
  "multicol",
  "nextid",
  "nobr",
  "noembed",
  "noframes",
  "plaintext",
  "spacer",
  "strike",
  "tt",
  "xmp"
];

module.exports.elementsDeprecated = [
  "content",
  "frame",
  "frameset",
  "isindex",
  "keygen",
  "menuitem",
  "shadow"
];

module.exports.elementsNonStandard = [
  "bgsound",
  "image",
  "multicol",
  "nobr",
  "noembed"
];

module.exports.elementsExperimental = ["dialog", "hgroup"];

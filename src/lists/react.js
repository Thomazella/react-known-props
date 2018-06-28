module.exports.htmlPropToReactPropMap = {
  allowtransparency: "allowTransparency",
  charset: "charSet",
  class: "className",
  for: "htmlFor",
  ismap: "isMap",
  itemid: "itemID",
  typemustmatch: "typeMustMatch",
  autocapitalize: "autoCapitalize",
  itemprop: "itemProp",
  itemref: "itemRef",
  itemscope: "itemScope",
  itemtype: "itemType",
  accesskey: "accessKey",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  spellcheck: "spellCheck",
  tabindex: "tabIndex",
  autocomplete: "autoComplete",
  autofocus: "autoFocus",
  autoplay: "autoPlay",
  colspan: "colSpan",
  crossorigin: "crossOrigin",
  datetime: "dateTime",
  formaction: "formAction",
  hreflang: "hrefLang",
  keytype: "keyType",
  maxlength: "maxLength",
  minlength: "minLength",
  radiogroup: "radioGroup",
  readonly: "readOnly",
  rowspan: "rowSpan",
  srcdoc: "srcDoc",
  srclang: "srcLang",
  srcset: "srcSet",
  usemap: "useMap",
  enctype: "formEncType",
  method: "formMethod",
  novalidate: "formNoValidate",
  target: "formTarget",
  "accept-charset": "acceptCharset",
  "http-equiv": "httpEquiv"
};

module.exports.reactEventprops = [
  "onBlur",
  "onChange",
  "onClick",
  "onContextMenu",
  "onCopy",
  "onCut",
  "onDoubleClick",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onFocus",
  "onInput",
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onPaste",
  "onScroll",
  "onSubmit",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onWheel",
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate",
  "onInvalid",
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut",
  "onSelect",
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting",
  "onLoad",
  "onError",
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration",
  "onTransitionEnd",
  "onToggle"
];

module.exports.propsGlobalReact = [
  "dangerouslySetInnerHTML",
  "suppressContentEditableWarning",
  "suppressHydrationWarning",
  "classID",
  "keyParams",
  "autoSave"
];

module.exports.mapPropsToElementsReactExtras = {
  defaultChecked: ["input"],
  autoCorrect: ["input"],
  defaultValue: ["input", "textarea"],
  value: ["textarea", "input"],
  allowFullScreen: ["frame"],
  cellPadding: ["table"],
  cellSpacing: ["table"],
  controlsList: ["audio", "video"],
  frameBorder: ["frame"],
  inputMode: ["input"],
  marginHeight: ["iframe"],
  marginWidth: ["iframe"],
  mediaGroup: ["audio", "video"]
};

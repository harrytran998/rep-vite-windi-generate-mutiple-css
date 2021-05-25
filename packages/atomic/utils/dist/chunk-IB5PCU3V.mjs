// src/dom.ts
var onEvent = (element, event, handler, useCapture = false) => {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture);
  }
};
var offEvent = (element, event, handler, useCapture = false) => {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture);
  }
};
var cssVar = (name, value) => {
  if (name.slice(0, 2) !== "--")
    name = `--${name}`;
  if (value)
    document.documentElement.style.setProperty(name, value);
  return getComputedStyle(document.documentElement).getPropertyValue(name);
};

export {
  onEvent,
  offEvent,
  cssVar
};

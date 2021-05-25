export const onEvent = (
  element: HTMLElement | Document | Window,
  event: keyof HTMLElementEventMap,
  handler: EventListenerOrEventListenerObject,
  useCapture = false,
): void => {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture);
  }
};

export const offEvent = (
  element: HTMLElement | Document | Window,
  event: keyof HTMLElementEventMap,
  handler: EventListenerOrEventListenerObject,
  useCapture = false,
): void => {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture);
  }
};

/**
 * @description Attention when use to change variable global
 * @param name Variable name
 * @param value The new value pass to variable
 * @returns
 */
export const cssVar = (name: string, value: string) => {
  if (name.slice(0, 2) !== '--') name = `--${name}`;
  if (value) document.documentElement.style.setProperty(name, value);

  return getComputedStyle(document.documentElement).getPropertyValue(name);
};

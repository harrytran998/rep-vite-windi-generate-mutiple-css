declare const onEvent: (element: HTMLElement | Document | Window, event: keyof HTMLElementEventMap, handler: EventListenerOrEventListenerObject, useCapture?: boolean) => void;
declare const offEvent: (element: HTMLElement | Document | Window, event: keyof HTMLElementEventMap, handler: EventListenerOrEventListenerObject, useCapture?: boolean) => void;
/**
 * @description Attention when use to change variable global
 * @param name Variable name
 * @param value The new value pass to variable
 * @returns
 */
declare const cssVar: (name: string, value: string) => string;

export { cssVar, offEvent, onEvent };

export { cloneElement, createElement, createElement as h } from './vdom'
export {
  Component,
  Component as WeElement,
  FormAssociatedComponent,
} from './component'
export { render } from './render'
export { define, define as defineElement, tag, webcomponent } from './define'
export { classNames, extractClass } from './class'
export { createRef, bind } from './utils'
export {
  signal,
  computed,
  effect,
  batch,
  setActiveComponent,
  clearActiveComponent,
  getActiveComponent,
  signalObject,
} from 'reactive-signal'
export type { Signal, SignalObject, Signal as SignalValue } from 'reactive-signal'
export { css } from './css-tag'
export { mixin, globalCSS } from './options'
export { registerDirective } from './directive'
export const version = '7.7.11'

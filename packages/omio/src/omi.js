import { h, h as createElement } from './h'
import { cloneElement } from './clone-element'
import Component from './component'
import { render } from './render'
import { rerender } from './render-queue'
import options from './options'
import { define } from './define'
import { rpx } from './rpx'
import ModelView from './model-view'
import { classNames, extractClass } from './class'

const WeElement = Component
const defineElement = define

options.root.Omi = {
  h,
  createElement,
  cloneElement,
  Component,
  render,
  rerender,
  options,
  WeElement,
  define,
  rpx,
  ModelView,
  defineElement,
  classNames,
  extractClass
}
options.root.omi = Omi
options.root.Omi.version = 'omio-1.2.4'

export default {
  h,
  createElement,
  cloneElement,
  Component,
  render,
  rerender,
  options,
  WeElement,
  define,
  rpx,
  ModelView,
  defineElement,
  classNames,
  extractClass
}

export {
  h,
  createElement,
  cloneElement,
  Component,
  render,
  rerender,
  options,
  WeElement,
  define,
  rpx,
  ModelView,
  defineElement,
  classNames,
  extractClass
}

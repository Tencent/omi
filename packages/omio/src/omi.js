import { h, h as createElement } from './h'
import { cloneElement } from './clone-element'
import Component from './component'
import { render } from './render'
import { rerender } from './render-queue'
import options from './options'
import { define } from './define'
import { rpx } from './rpx'
import ModelView from './model-view'

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
  defineElement
}

options.root.Omi.version = 'omio-1.1.1'

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
  defineElement
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
  defineElement
}

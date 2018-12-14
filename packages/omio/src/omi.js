import { h, h as createElement } from './h'
import { cloneElement } from './clone-element'
import { Component } from './component'
import { render } from './render'
import { rerender } from './render-queue'
import options from './options'
import { define } from './define'
import { rpx } from './rpx'

const instances = []
const WeElement = Component

options.root.Omi = {
  h,
  createElement,
  cloneElement,
  Component,
  render,
  rerender,
  options,
  instances,
  WeElement,
  define,
  rpx
}

options.root.Omi.version = 'omio-0.0.3'

export default {
  h,
  createElement,
  cloneElement,
  Component,
  render,
  rerender,
  options,
  instances,
  WeElement,
  define,
  rpx
}

export {
  h,
  createElement,
  cloneElement,
  Component,
  render,
  rerender,
  options,
  instances,
  WeElement,
  define,
  rpx
}

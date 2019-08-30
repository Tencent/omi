import { h, h as createElement } from './h'
import { cloneElement } from './clone-element'
import Component from './component'
import { render, merge } from './render'
import { rerender } from './render-queue'
import options from './options'
import { define } from './define'
import { rpx } from './rpx'
import { tag } from './tag'
import ModelView from './model-view'
import { classNames, extractClass } from './class'
import { getHost } from './get-host'
import { renderToString } from './render-to-string'
import htm from 'htm'
import obaa from './obaa'

const html = htm.bind(h)

const WeElement = Component
const defineElement = define
function createRef() {
  return {}
}

options.root.Omi = {
  h,
  createElement,
  cloneElement,
  createRef,
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
  extractClass,
  getHost,
  renderToString,
  tag,
  merge,
  html,
  htm,
  obaa
}
options.root.omi = options.root.Omi
options.root.Omi.version = 'omio-2.4.0'

export default {
  h,
  createElement,
  cloneElement,
  createRef,
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
  extractClass,
  getHost,
  renderToString,
  tag,
  merge,
  html,
  htm,
  obaa
}

export {
  h,
  createElement,
  cloneElement,
  createRef,
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
  extractClass,
  getHost,
  renderToString,
  tag,
  merge,
  html,
  htm,
  obaa
}

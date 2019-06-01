import { h, h as createElement } from './h'
import options from './options'
import WeElement from './we-element'
import { render } from './render'
import { define } from './define'
import { tag } from './tag'
import { observe } from './observe'
import { cloneElement } from './clone-element'
import { getHost } from './get-host'
import { rpx } from './rpx'
import { tick, nextTick } from './tick'
import ModelView from './model-view'
import { classNames, extractClass } from './class'
import { o } from './o'
import htm from 'htm'

const html = htm.bind(h)

function createRef() {
  return {}
}

const Component = WeElement
const defineElement = define
const elements = options.mapping

const omi = {
  tag,
  WeElement,
  Component,
  render,
  h,
  createElement,
  options,
  define,
  observe,
  cloneElement,
  getHost,
  rpx,
  tick,
  nextTick,
  ModelView,
  defineElement,
  classNames,
  extractClass,
  createRef,
  html,
  htm,
  o,
  elements
}

options.root.Omi = omi
options.root.omi = omi
options.root.Omi.version = '6.4.0'

export default omi

export {
  tag,
  WeElement,
  Component,
  render,
  h,
  createElement,
  options,
  define,
  observe,
  cloneElement,
  getHost,
  rpx,
  tick,
  nextTick,
  ModelView,
  defineElement,
  classNames,
  extractClass,
  createRef,
  html,
  htm,
  o,
  elements
}

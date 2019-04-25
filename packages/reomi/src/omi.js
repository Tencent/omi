
import options from './options'
import WeElement from './we-element'
import { render } from './render'
import { define } from './define'
import { tag } from './tag'
import { observe } from './observe'
import { getHost } from './get-host'
import { rpx } from './rpx'
import { tick, nextTick } from './tick'
import ModelView from './model-view'
import { classNames, extractClass } from './class'
import htm from 'htm'
import React from 'react'

const html = htm.bind(h)
const h = React.createElement
const createElement = React.createElement
const cloneElement = React.cloneElement

function createRef() {
  return {}
}

const Component = WeElement
const defineElement = define

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
  htm
}

options.root.Omi = omi
options.root.omi = omi
options.root.Omi.version = '6.1.1'

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
  htm
}

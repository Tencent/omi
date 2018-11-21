import {
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
  nextTick } from 'omi'
import htm from 'htm'

const html = htm.bind(h)


export default {
  tag: tag,
  WeElement: WeElement,
  Component: Component,
  render: render,
  h: h,
  createElement: h,
  options: options,
  define: define,
  observe: observe,
  cloneElement: cloneElement,
  getHost: getHost,
  rpx: rpx,
  tick: tick,
  nextTick: nextTick,
  html: html
}

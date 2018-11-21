import {
  tag,
  WeElement,
  Component,
  render,
  h,
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

const Omi = {
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

if(typeof window != 'undefined'){
  window.Omi = Omi
}

export default Omi

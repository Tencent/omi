import { h } from './h'
import Component from './component'
import { render } from './render'
import { tag } from './tag'
import { define } from './define'
import options from './options'

const WeElement = Component
const root = getGlobal()
const omiax = {
  h,
  tag,
	define,
	Component,
	render,
	WeElement,
	options
}

root.Omi = omiax
root.omi = omiax
root.omiax = omiax
root.omiax.version = '0.0.0'

export default {
  h,
  tag,
	define,
	Component,
	render,
	WeElement,
	options
}

export {
  h,
  tag,
	define,
	Component,
	render,
	WeElement,
	options
}

function getGlobal() {
  if (
    typeof global !== 'object' ||
    !global ||
    global.Math !== Math ||
    global.Array !== Array
  ) {
    if (typeof self !== 'undefined') {
      return self
    } else if (typeof window !== 'undefined') {
      return window
    } else if (typeof global !== 'undefined') {
      return global
    }
    return (function() {
      return this
    })()
  }
  return global
}

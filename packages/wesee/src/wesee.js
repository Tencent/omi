import { h } from './h'
import Component from './component'
import { render } from './render'
import { define } from './define'

const WeElement = Component
const root = getGlobal()
const wesee = {
	h,
	define,
	Component,
	render,
	WeElement
}

root.Omi = wesee
root.omi = wesee
root.wesee = wesee
root.wesee.version = '0.0.0'

export default {
	h,
	define,
	Component,
	render,
	WeElement
}

export {
	h,
	define,
	Component,
	render,
	WeElement
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

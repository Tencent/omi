import { draw } from './render'
import { h } from './omis/h'
//import { h } from './h'

const root = getGlobal()


root.Omi = { h, version: '0.0.0' }

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
    return (function () {
      return this
    })()
  }
  return global
}

export {
  draw,
  h
}

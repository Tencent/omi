import { h } from './h'

const root = getGlobal()
root.wesee = {
  h
}
root.wesee = wesee
root.wesee.version = '0.0.0'

export default {
  h
}

export {
  h
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

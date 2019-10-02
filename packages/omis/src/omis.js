import { $ } from './react'
import { $v } from './vue'

const root = getGlobal()

const omis = {
  $,
  $v
}

root.Omis = omis
root.omis = omis
root.Omis.version = '2.0.1'

export default omis

export { $, $v }

function getGlobal() {
  if (
    typeof global !== 'object' ||
    !global ||
    global.Math !== Math ||
    global.Array !== Array
  ) {
    return (
      self ||
      window ||
      global ||
      (function() {
        return this
      })()
    )
  }
  return global
}

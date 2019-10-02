import { $r } from './react'

const root = getGlobal()

const omis = {
  $r
}

root.Omis = omis
root.omis = omis
root.Omis.version = '2.0.0'

export default omis

export { $r }

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

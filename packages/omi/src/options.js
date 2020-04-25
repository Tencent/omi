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
      (function () {
        return this
      })()
    )
  }
  return global
}

/** Global options
 *  @public
 *  @namespace options {Object}
 */
export default {
  store: null,
  root: getGlobal(),
  mapping: {},
  isMultiStore: false,
  //when set true, using props of hypescript, don't use getAttribute
  //if you render all the node tree by omi self, set it
  ignoreAttrs: false
}

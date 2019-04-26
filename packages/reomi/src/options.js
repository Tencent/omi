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

/** Global options
 *	@public
 *	@namespace options {Object}
 */
export default {
  scopedStyle: true,
  mapping: {},
  isWeb: true,
  staticStyleMapping: {},
  doc: typeof document === 'object' ? document : null,
  root: getGlobal(),
  //styleCache :[{ctor:ctor,ctorName:ctorName,style:style}]
  styleCache: []
  //componentChange(component, element) { },
  /** If `true`, `prop` changes trigger synchronous component updates.
   *	@name syncComponentUpdates
   *	@type Boolean
   *	@default true
   */
  //syncComponentUpdates: true,

  /** Processes all created VNodes.
   *	@param {VNode} vnode	A newly-created VNode to normalize/process
   */
  //vnode(vnode) { }

  /** Hook invoked after a component is mounted. */
  //afterMount(component) { },

  /** Hook invoked after the DOM is updated with a component's latest render. */
  //afterUpdate(component) { }

  /** Hook invoked immediately before a component is unmounted. */
  // beforeUnmount(component) { }
}

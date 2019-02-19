import { diff } from './vdom/diff'

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {object} [store]
 *	@public
 */
export function render(vnode, parent, store, empty, merge) {
  parent = typeof parent === 'string' ? document.querySelector(parent) : parent

  if (empty) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  if (merge) {
    merge =
      typeof merge === 'string'
        ? document.querySelector(merge)
        : merge
  }

  return diff(merge, vnode, store, false, parent, false, true)
}

import { diff } from './vdom/diff'
import options from './options'

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {object} [store]
 *	@public
 */
export function render(vnode, parent, store) {
  parent = typeof parent === 'string' ? document.querySelector(parent) : parent

  if (store && store.merge) {
    store.merge =
      typeof store.merge === 'string'
        ? document.querySelector(store.merge)
        : store.merge
  }

  return diff(store && store.merge, vnode, store, false, parent, false)
}

import { diff } from './vdom/diff'

export function render(vnode, parent, store) {
  parent = typeof parent === 'string' ? document.querySelector(parent) : parent
  if (store) {
    parent.store = store
  }
  return diff(null, vnode, parent, false)
}

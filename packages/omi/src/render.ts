import { diff } from './diff'
import { ExtendedElement } from './dom'
import { VNode } from './vdom'

export function render(vnode: VNode, parent: Element | null, store?: unknown) {
  parent = typeof parent === 'string' ? document.querySelector(parent) : parent
  if (store && parent) {
    (parent as ExtendedElement).store = store
  }
  return diff(null, vnode, parent as ExtendedElement, null, false)
}

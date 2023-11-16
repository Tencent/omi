import { diff } from './diff'
import { ExtendedElement } from './dom'
import { VNode } from './vdom'

export function render(
  vnode: unknown,
  parent: Element | null | string,
  store?: unknown,
) {
  parent = typeof parent === 'string' ? document.querySelector(parent) : parent
  if (store && parent) {
    ;(parent as ExtendedElement).store = store
  }
  return diff(null, vnode as VNode, parent as ExtendedElement, null, false)
}

import options from './options'
import { Fragment } from './util'

const stack = []

export function h(nodeName, attributes) {
  let children = [],
    lastSimple,
    child,
    simple,
    i

  // jsx 嵌套的元素自动忽略  attrs
  if(attributes) {
    attributes.ignoreAttrs = true
  } else {
    attributes = { ignoreAttrs: true }
  }
  for (i = arguments.length; i-- > 2; ) {
    stack.push(arguments[i])
  }
  if (attributes.children != null) {
    if (!stack.length) stack.push(attributes.children)
    delete attributes.children
  }
  while (stack.length) {
    if ((child = stack.pop()) && child.pop !== undefined) {
      for (i = child.length; i--; ) stack.push(child[i])
    } else {
      if (typeof child === 'boolean') child = null

      if ((simple = typeof nodeName !== 'function')) {
        if (child == null) child = ''
        else if (typeof child === 'number') child = String(child)
        else if (typeof child !== 'string') simple = false
      }

      if (simple && lastSimple) {
        children[children.length - 1] += child
      } else if (children.length === 0) {
        children = [child]
      } else {
        children.push(child)
      }

      lastSimple = simple
    }
  }

  if (nodeName === Fragment) {
    return children
  }

  const p = {
    nodeName,
    children,
    attributes,
    key: attributes.key
  }

  // if a "vnode hook" is defined, pass every created VNode to it
  if (options.vnode !== undefined) options.vnode(p)

  return p
}

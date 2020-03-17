import { mapping } from './mapping'

function VNode() { }

const stack = []
const EMPTY_CHILDREN = []

export function h(nodeName, attributes) {
  let children = EMPTY_CHILDREN,
    lastSimple,
    child,
    simple,
    i
  for (i = arguments.length; i-- > 2;) {
    stack.push(arguments[i])
  }
  if (attributes && attributes.children != null) {
    if (!stack.length) stack.push(attributes.children)
    delete attributes.children
  }
  while (stack.length) {
    if ((child = stack.pop()) && child.pop !== undefined) {
      for (i = child.length; i--;) stack.push(child[i])
    } else {
      if (typeof child === 'boolean') child = null

      if ((simple = typeof nodeName !== 'function')) {
        if (child == null) child = ''
        else if (typeof child === 'number') child = String(child)
        else if (typeof child !== 'string') simple = false
      }

      if (simple && lastSimple) {
        children[children.length - 1] += child
      } else if (children === EMPTY_CHILDREN) {
        children = [child]
      } else {
        children.push(child)
      }

      lastSimple = simple
    }
  }

  let p = new VNode()
  p.nodeName = mapping[nodeName]
  p.children = children
  p.attributes = attributes == null ? undefined : attributes
  p.key = attributes == null ? undefined : attributes.key

  return p
}

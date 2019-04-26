import { extend } from '../util'
import options from '../options'
/**
 * Check if two nodes are equivalent.
 *
 * @param {Node} node			DOM Node to compare
 * @param {VNode} vnode			Virtual DOM node to compare
 * @param {boolean} [hydrating=false]	If true, ignores component constructors when comparing.
 * @private
 */
export function isSameNodeType(node, vnode, hydrating) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return node.splitText !== undefined
  }
  if (typeof vnode.type === 'string') {
    return !node._componentConstructor && isNamedNode(node, vnode.type)
  } else if  (typeof vnode.type === 'function'){
    return options.mapping[node.nodeName.toLowerCase()] === vnode.type
  }
  return hydrating || node._componentConstructor === vnode.type
}

/**
 * Check if an Element has a given type, case-insensitively.
 *
 * @param {Element} node	A DOM Element to inspect the name of.
 * @param {String} type	Unnormalized name to compare against.
 */
export function isNamedNode(node, type) {
  return (
    node.normalizedNodeName === type ||
    node.nodeName.toLowerCase() === type.toLowerCase()
  )
}

/**
 * Reconstruct Component-style `props` from a VNode.
 * Ensures default/fallback values from `defaultProps`:
 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
 *
 * @param {VNode} vnode
 * @returns {Object} props
 */
export function getNodeProps(vnode) {
  let props = extend({}, vnode.attributes)
  props.children = vnode.children

  let defaultProps = vnode.type.defaultProps
  if (defaultProps !== undefined) {
    for (let i in defaultProps) {
      if (props[i] === undefined) {
        props[i] = defaultProps[i]
      }
    }
  }

  return props
}

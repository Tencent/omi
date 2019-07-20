const stack = []

/**
 * JSX/hyperscript reviver.
 * @see http://jasonformat.com/wtf-is-jsx
 * Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *
 * Note: this is exported as both `h()` and `createElement()` for compatibility reasons.
 *
 * Creates a VNode (virtual DOM element). A tree of VNodes can be used as a lightweight representation
 * of the structure of a DOM tree. This structure can be realized by recursively comparing it against
 * the current _actual_ DOM structure, and applying only the differences.
 *
 * `h()`/`createElement()` accepts an element name, a list of attributes/props,
 * and optionally children to append to the element.
 *
 * @example The following DOM tree
 *
 * `<div id="foo" name="bar">Hello!</div>`
 *
 * can be constructed using this function as:
 *
 * `h('div', { id: 'foo', name : 'bar' }, 'Hello!');`
 *
 * @param {string} nodeName	An element name. Ex: `div`, `a`, `span`, etc.
 * @param {Object} attributes	Any attributes/props to set on the created element.
 * @param rest			Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
 *
 * @public
 */
export function h(type, attributes) {
  let children = [],
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

  let p = {}
  if (type !== 'text') {
    while (stack.length) {
      if ((child = stack.pop()) && child.pop !== undefined) {
        for (i = child.length; i--;) stack.push(child[i])
      } else {
        if (typeof child === 'boolean') child = null

        if ((simple = typeof type !== 'function')) {
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
  } else {
    p.value = stack.pop()
  }



  p.type = type
  p.frame = {
    "x": 0,
    "y": 0,
    "width": 0,
    "height": 0
  }
  p.children = children
  p.attributes = attributes == null ? undefined : attributes
  p.key = attributes == null ? undefined : attributes.key


  return p
}

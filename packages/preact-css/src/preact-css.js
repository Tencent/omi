import { options } from 'preact'
import { getStyleId, appendStyle } from './style'

let componentNode

// store a reference to the "current component" vnode
let oldDiff = options._diff || options.__b
options._diff = options.__b = vnode => {
  componentNode = vnode
  if (oldDiff) oldDiff(vnode)
}

// reset component reference at end of diffing:
let oldDiffed = options.diffed
options.diffed = vnode => {
  if (componentNode === vnode) componentNode = null
  if (oldDiffed) oldDiffed(vnode)
}

// our vnode hook looks up the associated component
let old = options.vnode
options.vnode = vnode => {
  const component = componentNode && (componentNode._component || componentNode.__c)
  if (component) {

    const styleId = getStyleId(component.constructor)
    appendStyle(component.constructor.css, styleId);
    (vnode.props || (vnode.props = {}))[styleId] = ''
  }
  if (old) old(vnode)
}
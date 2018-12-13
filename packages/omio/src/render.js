import { diff } from './vdom/diff'
import { Component } from './component'
import options from './options'
import { addScopedAttr, addScopedAttrStatic, getCtorName } from './style'

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {Element} [merge]	Attempt to re-use an existing DOM tree rooted at `merge`
 *	@public
 *
 *	@example
 *	// render a div into <body>:
 *	render(<div id="hello">hello!</div>, document.body);
 *
 *	@example
 *	// render a "Thing" component into #foo:
 *	const Thing = ({ name }) => <span>{ name }</span>;
 *	render(<Thing name="one" />, document.querySelector('#foo'));
 */
export function render(vnode, parent, merge) {
  merge = Object.assign(
    {
      store: {}
    },
    merge
  )
  if (typeof window === 'undefined') {
    if (vnode instanceof Component && merge) {
      vnode.$store = merge.store
    }
    return
  }

  parent = typeof parent === 'string' ? document.querySelector(parent) : parent

  if (merge.merge) {
    merge.merge =
      typeof merge.merge === 'string'
        ? document.querySelector(merge.merge)
        : merge.merge
  }
  if (merge.empty) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }
  merge.store.ssrData = options.root.__omiSsrData
  options.$store = merge.store

  if (vnode instanceof Component) {
    if (window && window.Omi) {
      window.Omi.instances.push(vnode)
    }

    vnode.$store = merge.store

    if (vnode.componentWillMount) vnode.componentWillMount()
    if (vnode.install) vnode.install()
    const rendered = vnode.render(vnode.props, vnode.state, vnode.context)

    //don't rerender
    if (vnode.staticStyle) {
      addScopedAttrStatic(
        rendered,
        vnode.staticStyle(),
        '_style_' + getCtorName(vnode.constructor)
      )
    }

    if (vnode.style) {
      addScopedAttr(rendered, vnode.style(), '_style_' + vnode._id, vnode)
    }

    vnode.base = diff(merge.merge, rendered, {}, false, parent, false)

    if (vnode.componentDidMount) vnode.componentDidMount()
    if (vnode.installed) vnode.installed()

    return vnode.base
  }

  let result = diff(merge.merge, vnode, {}, false, parent, false)

  return result
}

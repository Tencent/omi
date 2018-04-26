
import {VNode} from './vnode'

var stack = []

var EMPTY_CHILDREN = []

/** JSX/hyperscript reviver
    Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
    @see http://jasonformat.com/wtf-is-jsx
    @public
 */
function h(tagName, props) {
    let children = EMPTY_CHILDREN, lastSimple, child, simple, i
    for (i = arguments.length; i-- > 2;) {
        stack.push(arguments[i])
    }
    if (props && props.children != null) {
        if (!stack.length) stack.push(props.children)
        delete props.children
    }
    while (stack.length) {
        if ((child = stack.pop()) && child.pop !== undefined) {
            for (i = child.length; i--;) stack.push(child[i])
        } else {
            if (typeof child === 'boolean') child = null

            if ((simple = typeof tagName !== 'function')) {
                if (typeof child === 'number') child = String(child)
                else if (typeof child !== 'string') simple = false
            }

            if (simple && lastSimple) {
                children[children.length - 1] += child
            } else if (child != null) {
                if (children === EMPTY_CHILDREN) {
                    children = [child]
                } else {
                    children.push(child)
                }
            }

            lastSimple = simple
        }
    }

    let p = new VNode()
    p.tagName = tagName
    p.children = children
    p.props = props == null ? {} : props
    p.key = props == null ? undefined : props.key

    // if a "vnode hook" is defined, pass every created VNode to it
    // if (options.vnode!==undefined) options.vnode(p);

    p.count = children.length

    p.children.forEach(function(nChild) {
        if (nChild && nChild.count) {
            p.count += nChild.count
        }
    })
    return p
}

export default h

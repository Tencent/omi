import { isSameNodeType, isNamedNode, camelCase, isArray } from './utils'
import { createNode, setAccessor, removeNode } from './dom'
import { ObjectVNode, VNode } from './vdom'
import { Component } from './component'
import { ExtendedElement } from './dom'

/** Diff recursion count, used to track the end of the diff cycle. */
export let diffLevel = 0

/** Global flag indicating if the diff is currently within an SVG */
let isSvgMode = false
let isForeignObject = false
/** Global flag indicating if the diff is performing hydration */
let hydrating = false

/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *  @param {Element} [dom=null]    A DOM node to mutate into the shape of the `vnode`
 *  @param {VNode} vnode      A VNode (with descendants forming a tree) representing the desired DOM structure
 *  @returns {Element} dom      The created/mutated element
 *  @private
 */
export function diff(
  dom: ExtendedElement | ExtendedElement[] | null,
  vnode: VNode | VNode[],
  parent: ExtendedElement | null,
  component: Component | null,
  updateSelf: boolean,
): ExtendedElement | ExtendedElement[] | null {
  // first render return undefined
  if (!dom && !vnode) return null
  // diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
  let ret
  if (!diffLevel++) {
    // when first starting the diff, check if we're diffing an SVG or within an SVG
    isSvgMode =
      parent != null &&
      (parent as Element as SVGElement).ownerSVGElement !== undefined

    // hydration is indicated by the existing element to be diffed not having a prop cache
    // hydrating = dom != null && !('prevProps' in dom)

    // SSR is currently not supported
    hydrating = false
  }

  if (isArray(vnode)) {
    if (parent) {
      // don't use props.css when using h.f? can we use now?
      // diff node list and vnode list
      innerDiffNode(
        parent,
        vnode as VNode[],
        hydrating,
        component as Component,
        updateSelf,
      )
      ret = parent.childNodes
    } else {
      // connectedCallback 的时候 parent 为 null
      ret = []
      ;(vnode as unknown as VNode[]).forEach((item, index) => {
        let ele = idiff(
          index === 0 ? dom : null,
          item,
          component as Component,
          updateSelf,
        )
        // 返回数组的情况下，在 Component 中进行了 shadowRoot.appendChild
        // 所有不会出现 vnode index 大于 0 丢失的情况
        ret.push(ele)
      })
    }
  } else {
    if (isArray(dom) || dom instanceof NodeList) {
      ;(dom as ExtendedElement[]).forEach((child, index) => {
        if (index === 0) {
          ret = idiff(child, vnode as VNode, component as Component, updateSelf)
        } else {
          recollectNodeTree(child, false)
        }
      })
    } else {
      ret = idiff(dom, vnode as VNode, component as Component, updateSelf)
    }
    // append the element if its a new parent
    if (parent && (ret as Node)?.parentNode !== parent)
      parent.appendChild(ret as Node)
  }

  // diffLevel being reduced to 0 means we're exiting the diff
  if (!--diffLevel) {
    hydrating = false
    // invoke queued componentDidMount lifecycle methods
  }

  return ret as ExtendedElement | ExtendedElement[] | null
}

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(
  dom: ExtendedElement | ExtendedElement[] | null | Text | HTMLElement,
  vnode: VNode,
  component: Component,
  updateSelf: boolean,
) {
  if (dom && vnode && (dom as ExtendedElement).props) {
    ;(dom as ExtendedElement).props.children = (vnode as ObjectVNode).children
  }
  let out = dom,
    prevSvgMode = isSvgMode,
    prevForeignObject = isForeignObject

  // empty values (null, undefined, booleans) render as empty Text nodes
  if (vnode == null || typeof vnode === 'boolean') vnode = ''

  // Fast case: Strings & Numbers create/update Text nodes.
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    // update if it's already a Text node:
    if (
      dom &&
      (dom as ExtendedElement).splitText !== undefined &&
      (dom as ExtendedElement).parentNode &&
      (!(dom as ExtendedElement)._component || component)
    ) {
      /* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
      if ((dom as ExtendedElement).nodeValue != vnode) {
        ;(dom as ExtendedElement).nodeValue = String(vnode)
      }
    } else {
      // it wasn't a Text node: replace it with one and recycle the old Element
      out = document.createTextNode(String(vnode))
      if (dom) {
        if ((dom as Text).parentNode)
          (dom as Text).parentNode?.replaceChild(out, dom as Text)
        recollectNodeTree(dom as ExtendedElement, true)
      }
    }

    if (out) {
      ;(out as ExtendedElement).prevProps = {}
    }

    return out
  }

  let vnodeName = vnode.nodeName
  // if (typeof vnodeName !== 'string') {
  //   vnodeName = (vnodeName as Component).tagName
  // }

  // Tracks entering and exiting SVG namespace when descending through the tree.
  isForeignObject = vnodeName === 'foreignObject'
  isSvgMode = vnodeName === 'svg' ? true : isForeignObject ? false : isSvgMode

  // If there's no existing element or it's the wrong type, create a new one:
  vnodeName = String(vnodeName)
  if (!dom || !isNamedNode(dom as ExtendedElement, vnodeName)) {
    // foreignObject 自身 isSvgMode 设置成 true，内部设置成 false
    // 创建 component 时，会执行构造函数
    out = createNode(vnodeName, isForeignObject || isSvgMode)
    // 如果是组件，需要把 props 传递给组件，不然 install 里拿不到 props
    if ((out.constructor as typeof Component)?.is === 'Component') {
      Object.assign((out as ExtendedElement).props, vnode.attributes)
    }
    if (dom) {
      // move children into the replacement node
      while ((dom as ExtendedElement).firstChild)
        (out as HTMLElement).appendChild(
          (dom as ExtendedElement).firstChild as Node,
        )

      // if the previous Element was mounted into the DOM, replace it inline
      if ((dom as ExtendedElement).parentNode)
        (dom as ExtendedElement).parentNode?.replaceChild(
          out as HTMLElement,
          dom as ExtendedElement,
        )

      // recycle the old element (skips non-Element node types)
      recollectNodeTree(dom as ExtendedElement, true)
    }
  }

  let fc = (out as ExtendedElement).firstChild,
    props = (out as ExtendedElement).prevProps,
    vchildren = vnode.children

  if (props == null) {
    props = (out as ExtendedElement).prevProps = {}
    for (let a = (out as ExtendedElement).attributes, i = a.length; i--; )
      props[a[i].name] = a[i].value
  }

  // Optimization: fast-path for elements containing a single TextNode:
  if (
    !hydrating &&
    vchildren &&
    vchildren.length === 1 &&
    typeof vchildren[0] === 'string' &&
    fc != null &&
    (fc as Text).splitText !== undefined &&
    fc.nextSibling == null
  ) {
    if (fc.nodeValue != vchildren[0]) {
      fc.nodeValue = vchildren[0]
    }
  }
  // otherwise, if there are existing or new children, diff them:
  else if ((vchildren && vchildren.length) || fc != null) {
    if (
      !(
        ((out as ExtendedElement).constructor as typeof Component).is ==
          'Component' &&
        ((out as ExtendedElement).constructor as typeof Component).noSlot
      )
    ) {
      innerDiffNode(
        out as ExtendedElement,
        vchildren,
        hydrating || props.unsafeHTML != null,
        component,
        updateSelf,
      )
    }
  }

  // Apply attributes/props from VNode to the DOM Element:
  diffAttributes(
    out as ExtendedElement,
    vnode.attributes,
    props,
    component,
    updateSelf,
  )
  if ((out as ExtendedElement).props) {
    ;(out as ExtendedElement).props.children = vnode.children
  }
  // restore previous SVG mode: (in case we're exiting an SVG namespace)
  isSvgMode = prevSvgMode
  isForeignObject = prevForeignObject
  return out
}

/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *  @param {Element} dom      Element whose children should be compared & mutated
 *  @param {Array} vchildren    Array of VNodes to compare to `dom.childNodes`
 *  @param {Boolean} isHydrating  If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(
  dom: ExtendedElement,
  vchildren: VNode[],
  isHydrating: boolean,
  component: Component,
  updateSelf: boolean,
) {
  let originalChildren = dom.childNodes,
    children = [],
    keyed: Record<string, Element | undefined> = {},
    keyedLen = 0,
    min = 0,
    len = originalChildren.length,
    childrenLen = 0,
    vlen = vchildren ? vchildren.length : 0,
    j,
    c,
    f,
    vchild,
    child

  // Build up a map of keyed children and an Array of unkeyed children:
  if (len !== 0) {
    for (let i = 0; i < len; i++) {
      let child = originalChildren[i],
        prevProps = (child as ExtendedElement).prevProps,
        key = vlen && prevProps ? prevProps.key : null

      if (key != null) {
        keyedLen++
        keyed[key as string] = child as Element
      } else if (
        prevProps || // 拥有 prevProps 的进入 children，进入 children 后面才会被回收
        ((child as ExtendedElement).splitText !== undefined
          ? isHydrating
            ? (child as Text).nodeValue?.trim()
            : true
          : isHydrating)
      ) {
        children[childrenLen++] = child
      }
    }
  }

  if (vlen !== 0) {
    for (let i = 0; i < vlen; i++) {
      vchild = vchildren[i]
      child = null

      if (vchild) {
        // attempt to find a node based on key matching
        let key = (vchild as ObjectVNode).key
        if (key != null) {
          if (keyedLen && keyed[key] !== undefined) {
            child = keyed[key]
            keyed[key] = undefined
            keyedLen--
          }
        }
        // attempt to pluck a node of the same type from the existing children
        else if (min < childrenLen) {
          for (j = min; j < childrenLen; j++) {
            if (
              children[j] !== undefined &&
              isSameNodeType((c = children[j] as ExtendedElement), vchild)
            ) {
              child = c
              children[j] = undefined
              if (j === childrenLen - 1) childrenLen--
              if (j === min) min++
              break
            }
          }
        }
      }

      // morph the matched/found/created DOM child to match vchild (deep)
      child = idiff(child as ExtendedElement, vchild, component, updateSelf)

      f = originalChildren[i]
      if (child && child !== dom && child !== f) {
        if (f == null) {
          dom.appendChild(child as Element)
        } else if (child === f.nextSibling) {
          removeNode(f as Element)
        } else {
          dom.insertBefore(child as Element, f)
        }
      }
    }
  }

  // remove unused keyed children:
  if (keyedLen) {
    for (let i in keyed)
      if (keyed[i] !== undefined)
        recollectNodeTree(keyed[i] as ExtendedElement, false)
  }

  // remove orphaned unkeyed children:
  while (min <= childrenLen) {
    if ((child = children[childrenLen--]) !== undefined)
      recollectNodeTree(child as ExtendedElement, false)
  }
}

/** Recursively recycle (or just unmount) a node and its descendants.
 *  @param {Node} node            DOM node to start unmount/removal from
 *  @param {Boolean} [unmountOnly=false]  If `true`, only triggers unmount lifecycle, skips removal
 */
export function recollectNodeTree(node: ExtendedElement, unmountOnly: boolean) {
  // If the node's VNode had a ref function, invoke it with null here.
  // (this is part of the React spec, and smart for unsetting references)
  if (node.prevProps != null && node.prevProps.ref) {
    if (typeof node.prevProps.ref === 'function') {
      node.prevProps.ref(null)
    } else if (node.prevProps.ref.current) {
      node.prevProps.ref.current = null
    }
  }

  if (unmountOnly === false || node.prevProps == null) {
    removeNode(node)
  }

  removeChildren(node)
}

/** Recollect/unmount all children.
 *  - we use .lastChild here because it causes less reflow than .firstChild
 *  - it's also cheaper than accessing the .childNodes Live NodeList
 */
export function removeChildren(node: ChildNode | null | undefined) {
  node = node?.lastChild
  while (node) {
    let next = node.previousSibling
    recollectNodeTree(node as ExtendedElement, true)
    node = next
  }
}

/** Apply differences in attributes from a VNode to the given DOM Element.
 *  @param {Element} dom    Element with attributes to diff `attrs` against
 *  @param {Object} attrs    The desired end-state key-value attribute pairs
 *  @param {Object} old      Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(
  dom: ExtendedElement,
  attrs: Record<string, unknown>,
  old: Record<string, unknown>,
  component: Component,
  updateSelf: boolean,
) {
  let name
  // let update = false
  let isComponent = dom.update
  let oldClone
  if (dom.receiveProps) {
    oldClone = Object.assign({}, old)
  }
  // remove attributes no longer present on the vnode by setting them to undefined
  for (name in old) {
    if (!(attrs && attrs[name] != null) && old[name] != null) {
      setAccessor(
        dom,
        name,
        old[name],
        (old[name] = undefined),
        isForeignObject || isSvgMode,
      )
      if (isComponent) {
        delete dom.props[name]
        // update = true
      }
    }
  }

  // add new & update changed attributes
  for (name in attrs) {
    if (isComponent && typeof attrs[name] === 'object' && name !== 'ref') {
      if (name === 'style' || (name[0] === 'o' && name[1] === '-')) {
        setAccessor(
          dom,
          name,
          old[name],
          (old[name] = attrs[name]),
          isForeignObject || isSvgMode,
        )
      }
      let ccName = camelCase(name)
      dom.props[ccName] = old[ccName] = attrs[name]
      //update = true
    } else if (
      name !== 'children' &&
      (!(name in old) ||
        attrs[name] !==
          (name === 'value' || name === 'checked' ? dom[name] : old[name]))
    ) {
      setAccessor(
        dom,
        name,
        old[name],
        attrs[name],
        isForeignObject || isSvgMode,
      )
      // fix lazy load props missing
      if (dom.nodeName.indexOf('-') !== -1) {
        dom.props = dom.props || {}
        let ccName = camelCase(name)
        dom.props[ccName] = old[ccName] = attrs[name]
        // update = true
      } else {
        old[name] = attrs[name]
      }
    }
  }

  if (isComponent && !updateSelf && dom.parentNode) {
    // __hasChildren is not accuracy when it was empty at first, so add dom.children.length > 0 condition
    // if (update || dom.__hasChildren || dom.children.length > 0 || (dom.store && !dom.store.data)) {
    if (dom.receiveProps(dom.props, oldClone) !== false) {
      dom.queuedUpdate()
    }
    // }
  }
}

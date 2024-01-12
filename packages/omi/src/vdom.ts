import { Component } from './component'
import { Fragment } from './utils'

export type Attributes = {
  key?: string | number
  ignoreAttrs?: boolean
  children?: VNode[] | null
  [prop: string]: unknown
}

export type ObjectVNode = {
  nodeName: string | Function | Component
  attributes: Attributes
  children: VNode[]
  key?: string | number | undefined
}

export type VNode = ObjectVNode | string | number | boolean | null | undefined

const stack: VNode[] = []

export function createElement(
  nodeName: string | Function,
  attributes: Attributes,
  restChildren: VNode[],
): VNode | VNode[] {
  let children: VNode[] = [],
    lastSimple: boolean = false,
    child: VNode,
    simple: boolean,
    i: number

  // jsx 嵌套的元素自动忽略  attrs
  if (attributes) {
    attributes.ignoreAttrs = true
  } else {
    attributes = { ignoreAttrs: true }
  }
  for (i = arguments.length; i-- > 2; ) {
    stack.push(arguments[i])
  }
  if (attributes.children != null) {
    if (!stack.length) stack.push(...attributes.children)
    delete attributes.children
  }
  while (stack.length) {
    if (
      (child = stack.pop() as VNode) &&
      (child as unknown as VNode[]).pop !== undefined
    ) {
      for (i = (child as unknown as VNode[]).length; i--; )
        stack.push((child as unknown as VNode[])[i])
    } else {
      if (typeof child === 'boolean') child = null

      if ((simple = typeof nodeName !== 'function')) {
        if (child == null) child = ''
        else if (typeof child === 'number') child = String(child)
        else if (typeof child !== 'string') simple = false
      }

      if (simple && lastSimple) {
        children[children.length - 1] += child as string
      } else if (children.length === 0) {
        children = [child]
      } else {
        children.push(child)
      }

      lastSimple = simple
    }
  }

  // fragment component
  if (nodeName === Fragment) {
    return children
  } else if (typeof nodeName === 'function') {
    if ((nodeName as unknown as Component).tagName) {
      // class component
      nodeName = (nodeName as unknown as Component).tagName
    } else {
      // function component
      attributes.children = children
      return nodeName(attributes)
    }
  }

  const p: VNode = {
    nodeName,
    children,
    attributes,
    key: attributes.key,
  }

  return p
}

// h.f or <></>
createElement.f = Fragment

/**
 * Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @param vnode The virtual DOM element to clone
 * @param props Attributes/props to add when cloning
 * @param rest Any additional arguments will be used as replacement children.
 */

export function cloneElement(
  vnode: ObjectVNode,
  props: Attributes,
  ...rest: VNode[]
): VNode | VNode[] {
  return createElement(
    vnode.nodeName as string,
    { ...vnode.attributes, ...props },
    rest.length > 0 ? rest : vnode.children,
  )
}

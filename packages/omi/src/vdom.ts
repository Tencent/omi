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

if (!Array.prototype.flat) {
  Array.prototype.flat = function (depth: number = 1): any[] {
    const result: any[] = []

    const flatten = (arr: any[], level: number) => {
      for (const item of arr) {
        if (Array.isArray(item) && level < depth) {
          flatten(item, level + 1)
        } else {
          result.push(item)
        }
      }
    }

    // @ts-ignore
    flatten(this, 0)
    return result
  }
}

export type VNode = ObjectVNode | string | number | boolean | null | undefined

export function createElement(
  nodeName: string | Function,
  attributes: Attributes,
  ...restChildren: VNode[] | unknown[]
): VNode | VNode[] {
  let children: VNode[] | undefined

  // jsx 嵌套的元素自动忽略  attrs
  if (attributes) {
    if (typeof attributes.ignoreAttrs !== 'boolean') {
      attributes.ignoreAttrs = true
    }
  } else {
    attributes = { ignoreAttrs: true }
  }

  if (arguments.length > 2) {
    children = restChildren.flat() as VNode[]
  } else if (attributes.children != null) {
    children = attributes.children as VNode[]
    delete attributes.children
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
      children && (attributes.children = children)
      return nodeName(attributes)
    }
  }

  const p: VNode = {
    nodeName,
    // @ts-ignore
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
  ...restChildren: VNode[] | unknown[]
): VNode | VNode[] {
  return createElement(
    vnode.nodeName as string,
    { ...vnode.attributes, ...props },
    restChildren.length > 0 ? restChildren.flat() : vnode.children,
  )
}

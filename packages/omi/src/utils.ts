import { ExtendedElement } from './dom'
import { ObjectVNode, VNode } from './vdom'
import './construct-style-sheets-polyfill'

/**
 * Check if the environment has native custom elements support
 * and apply a shim for the HTMLElement constructor if needed.
 */
(function () {
  const w = typeof window !== 'undefined' ? window : global as any
  if (
    w.Reflect === undefined ||
    w.customElements === undefined ||
    w.customElements.hasOwnProperty('polyfillWrapFlushCallback')
  ) {
    return
  }
  const BuiltInHTMLElement = w.HTMLElement
  w.HTMLElement = function HTMLElement() {
    return Reflect.construct(BuiltInHTMLElement, [], this.constructor)
  }
  HTMLElement.prototype = BuiltInHTMLElement.prototype
  HTMLElement.prototype.constructor = HTMLElement
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement)
})()

/**
 * Convert a kebab-case string to camelCase.
 * @param str - The kebab-case string to convert.
 * @returns The camelCase version of the input string.
 */
export function camelCase(str: string): string {
  return str.replace(/-(\w)/g, (_, $1) => $1.toUpperCase())
}

/**
 * A functional component that renders its children.
 * @param props - The component's props.
 * @returns The component's children.
 */
export function Fragment(props: { children: any }): any {
  return props.children
}

/**
 * Invoke or update a ref, depending on whether it is a function or object ref.
 * @param ref - The ref to apply.
 * @param value - The value to set or pass to the ref.
 */
export function applyRef(ref: ((value: any) => void) | { current: any } | null, value: any): void {
  if (ref != null) {
    if (typeof ref == 'function') ref(value)
    else ref.current = value
  }
}

/**
 * Check if the given object is an array.
 * @param obj - The object to check.
 * @returns True if the object is an array, false otherwise.
 */
export function isArray(obj: unknown): boolean {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

const hyphenateRE = /\B([A-Z])/g

/**
 * Convert a camelCase string to kebab-case.
 * @param str - The camelCase string to convert.
 * @returns The kebab-case version of the input string.
 */
export function hyphenate(str: string): string {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}

/**
 * Capitalize the first letter of each word in a kebab-case string.
 * @param name - The kebab-case string to capitalize.
 * @returns The capitalized version of the input string.
 */
export function capitalize(name: string): string {
  return name
    .replace(/\-(\w)/g, (_, letter) => letter.toUpperCase())
    .replace(/^\S/, (s) => s.toUpperCase())
}

/**
 * Create a new CSSStyleSheet with the given style.
 * @param style - The CSS style to apply to the new stylesheet.
 * @returns The created CSSStyleSheet.
 */
export function createStyleSheet(style: string): CSSStyleSheet {
  const styleSheet = new CSSStyleSheet()
  styleSheet.replaceSync(style)
  return styleSheet
}

/**
 * Check if two nodes are equivalent.
 * @param node - The DOM Node to compare.
 * @param vnode - The virtual DOM node to compare.
 * @param hydrating - If true, ignores component constructors when comparing.
 * @returns True if the nodes are equivalent, false otherwise.
 */
export function isSameNodeType(node: ExtendedElement, vnode: VNode): boolean {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return node.splitText !== undefined
  }
  return isNamedNode(node, (vnode as ObjectVNode).nodeName as string)
}

/**
 * Check if an Element has a given nodeName, case-insensitively.
 * @param node - The DOM Element to inspect the name of.
 * @param nodeName - The unnormalized name to compare against.
 * @returns True if the element has the given nodeName, false otherwise.
 */
export function isNamedNode(node: ExtendedElement, nodeName: string): boolean {
  return (
    node.normalizedNodeName === nodeName ||
    node.nodeName.toLowerCase() === nodeName.toLowerCase()
  )
}

export function createRef() {
  return {}
}

export function isPrimitive(value: unknown) {
  return (
    typeof value === 'undefined' ||
    typeof value === 'boolean' ||
    typeof value === 'number' ||
    typeof value === 'string' ||
    typeof value === 'symbol'
  )
}

export function bind(target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
  return {
    configurable: true,
    get() {
      const bound = descriptor.value.bind(this)
      Object.defineProperty(this, propertyKey, {
        value: bound,
        configurable: true,
        writable: true,
      })
      return bound
    },
  }
}
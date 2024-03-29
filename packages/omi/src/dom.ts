import { Component } from './component'
import { IS_NON_DIMENSIONAL, DOM_EVENT_MAP, EventTypes } from './constants'
import { applyRef } from './utils'
import { directives } from './directive'

export type ExtendedElement = (HTMLElement | SVGAElement | HTMLInputElement) & {
  receiveProps: Function
  update: Function
  queuedUpdate: Function
  store?: unknown
  className?: string
  props: Record<string, unknown>
  splitText?: Function
  prevProps?: Record<string, unknown> & {
    ref?:
      | {
          current?: unknown
        }
      | Function
  }
  attributes: NamedNodeMap
  _component?: Component
  _listeners: Record<string, Function>
} & Record<string, unknown>

/**
 * Create an element with the given nodeName.
 * @param {string} nodeName The DOM node to create
 * @param {boolean} [isSvg=false] If `true`, creates an element within the SVG
 *  namespace.
 * @returns {Element} The created DOM node
 */
export function createNode(nodeName: string, isSvg: boolean) {
  /** @type {Element} */
  let node = isSvg
    ? document.createElementNS('http://www.w3.org/2000/svg', nodeName)
    : document.createElement(nodeName)
  // @ts-ignore
  node.normalizedNodeName = nodeName
  return node as ExtendedElement
}

/**
 * Remove a child node from its parent if attached.
 * @param {Node} node The node to remove
 */
export function removeNode(node: Element) {
  let parentNode = node.parentNode
  if (parentNode) parentNode.removeChild(node)
}

/**
 * Set a named attribute on the given Node, with special behavior for some names
 * and event handlers. If `value` is `null`, the attribute/handler will be
 * removed.
 * @param {Element} node An element to mutate
 * @param {string} name The name/key to set, such as an event or attribute name
 * @param {*} old The last value that was set for this name/node pair
 * @param {*} value An attribute value, such as a function to be used as an
 *  event handler
 * @param {boolean} isSvg Are we currently diffing inside an svg?
 * @private
 */
export function setAccessor(
  node: ExtendedElement,
  name: string,
  old: any,
  value: any,
  isSvg: boolean,
) {
  if (name === 'className') name = 'class'

  if (name[0] == 'o' && name[1] == '-') {
    // 因为需要访问 node 上的属性，所以这里用 Promise.resolve().then
    Promise.resolve().then(() => {
      directives[name]?.(node, value)
    })
  }
  if (name === 'key' || name === 'ignoreAttrs') {
    // ignore
  } else if (name === 'ref') {
    applyRef(old, null)
    applyRef(value, node)
  } else if (name === 'class' && !isSvg) {
    node.className = value || ''
  } else if (name === 'style') {
    if (typeof value == 'string') {
      node.style.cssText = value
    } else {
      if (typeof old == 'string') {
        node.style.cssText = old = ''
      }

      if (old) {
        for (name in old) {
          if (!(value && name in value)) {
            setStyle(node.style, name, '')
          }
        }
      }

      if (value) {
        for (name in value) {
          if (!old || value[name] !== old[name]) {
            setStyle(node.style, name, value[name])
          }
        }
      }
    }
  } else if (name === 'unsafeHTML') {
    if (value) node.innerHTML = value.html || value || ''
  } else if (name[0] == 'o' && name[1] == 'n') {
    bindEvent(node, name, value, old)
  } else if (node.nodeName === 'INPUT' && name === 'value') {
    ;(node as HTMLInputElement).value = value == null ? '' : value
  } else if (
    name !== 'list' &&
    name !== 'type' &&
    name !== 'css' &&
    !isSvg &&
    name in node
  ) {
    //value !== '' fix for selected, disabled, checked with pure element
    // Attempt to set a DOM property to the given value.
    // IE & FF throw for certain property-value combinations.
    try {
      node[name] = value == null ? '' : value
    } catch (e) {}
    if ((value == null || value === false) && name != 'spellcheck')
      node.removeAttribute(name)
  } else {
    let ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''))
    // spellcheck is treated differently than all other boolean values and
    // should not be removed when the value is `false`. See:
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-spellcheck
    if (value == null || value === false) {
      if (ns)
        node.removeAttributeNS(
          'http://www.w3.org/1999/xlink',
          name.toLowerCase(),
        )
      else node.removeAttribute(name)
    } else if (typeof value !== 'function') {
      if (ns) {
        node.setAttributeNS(
          'http://www.w3.org/1999/xlink',
          name.toLowerCase(),
          value,
        )
      } else {
        if ((node.constructor as typeof Component).is === 'Component') {
          const reflect = (node.constructor as typeof Component).reflectProps?.[
            name
          ]
          if (reflect) {
            node.setAttribute(
              name,
              typeof reflect === 'function' ? reflect(value) : value,
            )
          }
        } else {
          node.setAttribute(name, value)
        }
      }
    }
  }
}

/**
 * Proxy an event to hooked event handlers
 * @param {Event} e The event object from the browser
 * @private
 */
function eventProxy(e: Event) {
  // @ts-ignore
  return this._listeners[e.type](e)
}

function bindEvent(node: ExtendedElement, name: string, value: any, old: any) {
  let useCapture = name !== (name = name.replace(/Capture$/, ''))
  let nameLower = name.toLowerCase()
  name = (
    DOM_EVENT_MAP[nameLower as EventTypes] || nameLower in node
      ? nameLower
      : name
  ).slice(2)
  if (value) {
    if (!old) {
      node.addEventListener(name, eventProxy, useCapture)
    }
  } else {
    node.removeEventListener(name, eventProxy, useCapture)
  }
  ;(node._listeners || (node._listeners = {}))[name] = value
}

function setStyle(
  style: CSSStyleDeclaration,
  key: string,
  value: string | number | null,
) {
  if (key[0] === '-') {
    style.setProperty(key, value == null ? '' : value.toString())
  } else if (value == null) {
    ;(style as any)[key] = ''
  } else if (typeof value != 'number' || IS_NON_DIMENSIONAL.test(key)) {
    ;(style as any)[key] = value.toString()
  } else {
    ;(style as any)[key] = value + 'px'
  }
}

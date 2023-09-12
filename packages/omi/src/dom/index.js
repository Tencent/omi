import { IS_NON_DIMENSIONAL, DOM_EVENT_MAP } from '../constants'
import { applyRef } from '../util'
import options from '../options'
import { extension } from '../extend'

/**
 * Create an element with the given nodeName.
 * @param {string} nodeName The DOM node to create
 * @param {boolean} [isSvg=false] If `true`, creates an element within the SVG
 *  namespace.
 * @returns {Element} The created DOM node
 */
export function createNode(nodeName, isSvg, options) {
  /** @type {Element} */
  let node = isSvg
    ? document.createElementNS('http://www.w3.org/2000/svg', nodeName)
    : document.createElement(nodeName, options)
  node.normalizedNodeName = nodeName
  return node
}

/**
 * Remove a child node from its parent if attached.
 * @param {Node} node The node to remove
 */
export function removeNode(node) {
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
export function setAccessor(node, name, old, value, isSvg, component) {
  if (name === 'className') name = 'class'

  if (name[0] == 'o' && name[1] == '-') {
    if (extension[name]) {
      extension[name](node, value, component)
    }
  } else if (name === 'key' || name === 'ignoreAttrs') {
    // ignore
  } else if (name === 'ref') {
    applyRef(old, null)
    applyRef(value, node)
  } else if (name === 'class' && !isSvg) {
    node.className = value || ''
  } else if (name === 'style') {
    if (!value || typeof value === 'string' || typeof old === 'string') {
      node.style.cssText = value || ''
    }
    if (value && typeof value === 'object') {
      if (typeof old !== 'string') {
        for (let i in old) if (!(i in value)) node.style[i] = ''
      }
      for (let i in value) {
        node.style[i] =
          typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false
            ? value[i] + 'px'
            : value[i]
      }
    }
  } else if (name === 'unsafeHTML') {
    if (value) node.innerHTML = value.html || value || ''
  } else if (name === 'dangerouslySetInnerHTML') {
    if (value) node.innerHTML = value.__html || ''
  } else if (name[0] == 'o' && name[1] == 'n') {
    bindEvent(node, name, value, old)
  } else if (node.nodeName === 'INPUT' && name === 'value') {
    node[name] = value == null ? '' : value
  } else if (
    name !== 'list' &&
    name !== 'type' &&
    name !== 'css' &&
    !isSvg &&
    name in node &&
    value !== ''
  ) {
    //value !== '' fix for selected, disabled, checked with pure element
    // Attempt to set a DOM property to the given value.
    // IE & FF throw for certain property-value combinations.
    try {
      node[name] = value == null ? '' : value
    } catch (e) {}
    if ((value == null || value === false) && name != 'spellcheck')
      node.pureRemoveAttribute
        ? node.pureRemoveAttribute(name)
        : node.removeAttribute(name)
  } else {
    let ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''))
    // spellcheck is treated differently than all other boolean values and
    // should not be removed when the value is `false`. See:
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-spellcheck
    if (value == null || value === false) {
      if (ns)
        node.removeAttributeNS(
          'http://www.w3.org/1999/xlink',
          name.toLowerCase()
        )
      else
        node.pureRemoveAttribute
          ? node.pureRemoveAttribute(name)
          : node.removeAttribute(name)
    } else if (typeof value !== 'function') {
      if (ns) {
        node.setAttributeNS(
          'http://www.w3.org/1999/xlink',
          name.toLowerCase(),
          value
        )
      } else {
        node.pureSetAttribute
          ? node.pureSetAttribute(name, value)
          : node.setAttribute(name, value)
      }
    }
  }
}

/**
 * Proxy an event to hooked event handlers
 * @param {Event} e The event object from the browser
 * @private
 */
function eventProxy(e) {
  return this._listeners[e.type]((options.event && options.event(e)) || e)
}

function bindEvent(node, name, value, old) {
  let useCapture = name !== (name = name.replace(/Capture$/, ''))
  let nameLower = name.toLowerCase()
  name = ((DOM_EVENT_MAP[nameLower] || nameLower in node) ? nameLower : name).slice(2)
  if (value) {
    if (!old) {
      node.addEventListener(name, eventProxy, useCapture)
    }
  } else {
    node.removeEventListener(name, eventProxy, useCapture)
  }
  ;(node._listeners || (node._listeners = {}))[name] = value
}

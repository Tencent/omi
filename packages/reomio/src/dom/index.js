import { IS_NON_DIMENSIONAL } from '../constants'
import { applyRef } from '../util'
import options from '../options'

/** Create an element with the given nodeName.
 *	@param {String} nodeName
 *	@param {Boolean} [isSvg=false]	If `true`, creates an element within the SVG namespace.
 *	@returns {Element} node
 */
export function createNode(nodeName, isSvg) {
  let node = isSvg
    ? options.doc.createElementNS('http://www.w3.org/2000/svg', nodeName)
    : options.doc.createElement(nodeName)
  node.normalizedNodeName = nodeName
  return node
}

function parseCSSText(cssText) {
  let cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, ' ').replace(/\s+/g, ' ')
  let style = {},
    [a, b, rule] = cssTxt.match(/ ?(.*?) ?{([^}]*)}/) || [a, b, cssTxt]
  let cssToJs = s => s.replace(/\W+\w/g, match => match.slice(-1).toUpperCase())
  let properties = rule
    .split(';')
    .map(o => o.split(':').map(x => x && x.trim()))
  for (let [property, value] of properties) style[cssToJs(property)] = value
  return style
}

/** Remove a child node from its parent if attached.
 *	@param {Element} node		The node to remove
 */
export function removeNode(node) {
  let parentNode = node.parentNode
  if (parentNode) parentNode.removeChild(node)
}

/** Set a named attribute on the given Node, with special behavior for some names and event handlers.
 *	If `value` is `null`, the attribute/handler will be removed.
 *	@param {Element} node	An element to mutate
 *	@param {string} name	The name/key to set, such as an event or attribute name
 *	@param {any} old	The last value that was set for this name/node pair
 *	@param {any} value	An attribute value, such as a function to be used as an event handler
 *	@param {Boolean} isSvg	Are we currently diffing inside an svg?
 *	@private
 */
export function setAccessor(node, name, old, value, isSvg) {
  if (name === 'className') name = 'class'

  if (name === 'key') {
    // ignore
  } else if (name === 'ref') {
    applyRef(old, null)
    applyRef(value, node)
  } else if (name === 'class' && !isSvg) {
    node.className = value || ''
  } else if (name === 'style') {
    if (options.isWeb) {
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
    } else {
      let oldJson = old,
        currentJson = value
      if (typeof old === 'string') {
        oldJson = parseCSSText(old)
      }
      if (typeof value == 'string') {
        currentJson = parseCSSText(value)
      }

      let result = {},
        changed = false

      if (oldJson) {
        for (let key in oldJson) {
          if (typeof currentJson == 'object' && !(key in currentJson)) {
            result[key] = ''
            changed = true
          }
        }

        for (let ckey in currentJson) {
          if (currentJson[ckey] !== oldJson[ckey]) {
            result[ckey] = currentJson[ckey]
            changed = true
          }
        }

        if (changed) {
          node.setStyles(result)
        }
      } else {
        node.setStyles(currentJson)
      }
    }
  } else if (name === 'dangerouslySetInnerHTML') {
    if (value) node.innerHTML = value.__html || ''
  } else if (name[0] == 'o' && name[1] == 'n') {
    let useCapture = name !== (name = name.replace(/Capture$/, ''))
    name = name.toLowerCase().substring(2)
    if (value) {
      if (!old) {
        node.addEventListener(name, eventProxy, useCapture)
        if (name == 'tap') {
          node.addEventListener('touchstart', touchStart, useCapture)
          node.addEventListener('touchend', touchEnd, useCapture)
        }
      }
    } else {
      node.removeEventListener(name, eventProxy, useCapture)
      if (name == 'tap') {
        node.removeEventListener('touchstart', touchStart, useCapture)
        node.removeEventListener('touchend', touchEnd, useCapture)
      }
    }
    ;(node._listeners || (node._listeners = {}))[name] = value
  } else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
    // Attempt to set a DOM property to the given value.
    // IE & FF throw for certain property-value combinations.
    try {
      node[name] = value == null ? '' : value
    } catch (e) {}
    if ((value == null || value === false) && name != 'spellcheck')
      node.removeAttribute(name)
  } else {
    let ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''))
    if (value == null || value === false) {
      if (ns)
        node.removeAttributeNS(
          'http://www.w3.org/1999/xlink',
          name.toLowerCase()
        )
      else node.removeAttribute(name)
    } else if (typeof value !== 'function') {
      if (ns)
        node.setAttributeNS(
          'http://www.w3.org/1999/xlink',
          name.toLowerCase(),
          value
        )
      else node.setAttribute(name, value)
    }
  }
}

/** Proxy an event to hooked event handlers
 *	@private
 */
function eventProxy(e) {
  return this._listeners[e.type]((options.event && options.event(e)) || e)
}

function touchStart(e) {
  this.___touchX = e.touches[0].pageX
  this.___touchY = e.touches[0].pageY
  this.___scrollTop = document.body.scrollTop
}

function touchEnd(e) {
  if (
    Math.abs(e.changedTouches[0].pageX - this.___touchX) < 30 &&
    Math.abs(e.changedTouches[0].pageY - this.___touchY) < 30 &&
    Math.abs(document.body.scrollTop - this.___scrollTop) < 30
  ) {
    this.dispatchEvent(new CustomEvent('tap', { detail: e }))
  }
}

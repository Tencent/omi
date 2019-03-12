/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/**
 * This shim allows elements written in, or compiled to, ES5 to work on native
 * implementations of Custom Elements v1. It sets new.target to the value of
 * this.constructor so that the native HTMLElement constructor can access the
 * current under-construction element's definition.
 */
;(function() {
  if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
    window.customElements === undefined ||
    // The webcomponentsjs custom elements polyfill doesn't require
    // ES2015-compatible construction (`super()` or `Reflect.construct`).
    window.customElements.hasOwnProperty('polyfillWrapFlushCallback')
  ) {
    return
  }
  const BuiltInHTMLElement = HTMLElement
  window.HTMLElement = function HTMLElement() {
    return Reflect.construct(BuiltInHTMLElement, [], this.constructor)
  }
  HTMLElement.prototype = BuiltInHTMLElement.prototype
  HTMLElement.prototype.constructor = HTMLElement
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement)
})()

export function cssToDom(css) {
  const node = document.createElement('style')
  node.textContent = css
  return node
}

export function npn(str) {
  return str.replace(/-(\w)/g, ($, $1) => {
    return $1.toUpperCase()
  })
}

export function extend(obj, props) {
  for (let i in props) obj[i] = props[i]
  return obj
}

/** Invoke or update a ref, depending on whether it is a function or object ref.
 *  @param {object|function} [ref=null]
 *  @param {any} [value]
 */
export function applyRef(ref, value) {
  if (ref != null) {
    if (typeof ref == 'function') ref(value)
    else ref.current = value
  }
}

/**
 * Call a function asynchronously, as soon as possible. Makes
 * use of HTML Promise to schedule the callback if available,
 * otherwise falling back to `setTimeout` (mainly for IE<11).
 * @type {(callback: function) => void}
 */
export const defer =
  typeof Promise == 'function'
    ? Promise.resolve().then.bind(Promise.resolve())
    : setTimeout

export function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

export function nProps(props) {
  if (!props || isArray(props)) return {}
  const result = {}
  Object.keys(props).forEach(key => {
    result[key] = props[key].value
  })
  return result
}

export function getUsing(data, paths){
  const obj = {}
  paths.forEach((path,index)=>{
    obj[index] = getTargetByPath(data, path)
  })
  return obj
}

export function getTargetByPath(origin, path) {
  const arr = path.replace(/]/g, '').replace(/\[/g, '.').split('.')
  let current = origin
  for (let i = 0, len = arr.length; i < len; i++) {
      current = current[arr[i]]
  }
  return current
}
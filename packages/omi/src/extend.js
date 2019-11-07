import { pathToArr } from './util'

export const extension = {}

export function extend(name, handler) {
  extension['o-' + name] = handler
}

export function set(origin, path, value) {
  const arr = pathToArr(path)
  let current = origin
  for (let i = 0, len = arr.length; i < len; i++) {
    if (i === len - 1) {
      current[arr[i]] = value
    } else {
      current = current[arr[i]]
    }
  }
}

export function get(origin, path) {
  const arr = pathToArr(path)
  let current = origin
  for (let i = 0, len = arr.length; i < len; i++) {
    current = current[arr[i]]
  }

  return current
}

function eventProxy(e) {
  return this._listeners[e.type](e)
}

export function bind(el, type, handler) {
  el._listeners = el._listeners || {}
  el._listeners[type] = handler
  el.addEventListener(type, eventProxy)
}

export function unbind(el, type) {
  el.removeEventListener(type, eventProxy)
}

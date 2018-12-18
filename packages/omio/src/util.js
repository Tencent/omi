'use strict'
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols
var hasOwnProperty = Object.prototype.hasOwnProperty
var propIsEnumerable = Object.prototype.propertyIsEnumerable

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined')
  }

  return Object(val)
}

export function assign(target, source) {
  var from
  var to = toObject(target)
  var symbols

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s])

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key]
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from)
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]]
        }
      }
    }
  }

  return to
}

!window.addEventListener &&
  (function(
    WindowPrototype,
    DocumentPrototype,
    ElementPrototype,
    addEventListener,
    removeEventListener,
    dispatchEvent,
    registry
  ) {
    WindowPrototype[addEventListener] = DocumentPrototype[addEventListener] = ElementPrototype[addEventListener] = function (type, listener) {
      var target = this

      registry.unshift([target, type, listener, function (event) {
          event.currentTarget = target
        event.preventDefault = function () { event.returnValue = false }
        event.stopPropagation = function () { event.cancelBubble = true }
          event.target = event.srcElement || target

          listener.call(target, event)
      }])

      this.attachEvent("on" + type, registry[0][3])
    };

    WindowPrototype[removeEventListener] = DocumentPrototype[removeEventListener] = ElementPrototype[removeEventListener] = function (type, listener) {
      for (var index = 0, register; register = registry[index]; ++index) {
        if (register[0] == this && register[1] == type && register[2] == listener) {
          return this.detachEvent("on" + type, registry.splice(index, 1)[0][3])
        }
      }
    };

    WindowPrototype[dispatchEvent] = DocumentPrototype[dispatchEvent] = ElementPrototype[dispatchEvent] = function (eventObject) {
      return this.fireEvent("on" + eventObject.type, eventObject)
    };
  })(
    Window.prototype,
    HTMLDocument.prototype,
    Element.prototype,
    'addEventListener',
    'removeEventListener',
    'dispatchEvent',
    []
  )

if (typeof Object.create !== 'function') {
  Object.create = function(proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
      throw new TypeError('Object prototype may only be an Object: ' + proto)
    } else if (proto === null) {
      throw new Error(
        "This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument."
      )
    }

    // if (typeof propertiesObject != 'undefined') {
    //     throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
    // }

    function F() {}
    F.prototype = proto

    return new F()
  }
}

/**
 *  Copy all properties from `props` onto `obj`.
 *  @param {Object} obj		Object onto which properties should be copied.
 *  @param {Object} props	Object from which to copy properties.
 *  @returns obj
 *  @private
 */
export function extend(obj, props) {
  for (let i in props) obj[i] = props[i]
  return obj
}

/**
 * Call a function asynchronously, as soon as possible. Makes
 * use of HTML Promise to schedule the callback if available,
 * otherwise falling back to `setTimeout` (mainly for IE<11).
 *
 * @param {Function} callback
 */

let usePromise = typeof Promise == 'function'

// for native
if (
  typeof document !== 'object' &&
  typeof global !== 'undefined' &&
  global.__config__
) {
  if (global.__config__.platform === 'android') {
    usePromise = true
  } else {
    let systemVersion =
      (global.__config__.systemVersion &&
        global.__config__.systemVersion.split('.')[0]) ||
      0
    if (systemVersion > 8) {
      usePromise = true
    }
  }
}

export const defer = usePromise
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

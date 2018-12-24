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

if (!Element.prototype.addEventListener) {
  var oListeners = {};
  function runListeners(oEvent) {
    if (!oEvent) { oEvent = window.event; }
    for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) {
        for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) { oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent); }
        break;
      }
    }
  }
  Element.prototype.addEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (oListeners.hasOwnProperty(sEventType)) {
      var oEvtListeners = oListeners[sEventType];
      for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
      }
      if (nElIdx === -1) {
        oEvtListeners.aEls.push(this);
        oEvtListeners.aEvts.push([fListener]);
        this["on" + sEventType] = runListeners;
      } else {
        var aElListeners = oEvtListeners.aEvts[nElIdx];
        if (this["on" + sEventType] !== runListeners) {
          aElListeners.splice(0);
          this["on" + sEventType] = runListeners;
        }
        for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {
          if (aElListeners[iLstId] === fListener) { return; }
        }
        aElListeners.push(fListener);
      }
    } else {
      oListeners[sEventType] = { aEls: [this], aEvts: [[fListener]] };
      this["on" + sEventType] = runListeners;
    }
  };
  Element.prototype.removeEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (!oListeners.hasOwnProperty(sEventType)) { return; }
    var oEvtListeners = oListeners[sEventType];
    for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
    }
    if (nElIdx === -1) { return; }
    for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId < aElListeners.length; iLstId++) {
      if (aElListeners[iLstId] === fListener) { aElListeners.splice(iLstId, 1); }
    }
  };
}


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

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
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

export function flat(array) {
  var ret = []
  array.forEach(function(item){
    if(isArray(item)){
      ret = ret.concat(flat(item))
    } else {
      ret = ret.concat([item])
    }
  })
  return ret
}
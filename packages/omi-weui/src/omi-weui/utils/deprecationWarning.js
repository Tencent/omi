/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
let __DEV__ = process.env.NODE_ENV !== 'production'

let warning = function() {}

if (__DEV__) {
  warning = function(condition, format, args) {
    let len = arguments.length
    args = new Array(len > 2 ? len - 2 : 0)
    for (let key = 2; key < len; key++) {
      args[key - 2] = arguments[key]
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      )
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
          'warning. Please, use a more descriptive format than: ' +
          format
      )
    }

    if (!condition) {
      let argIndex = 0
      let message =
        'Warning: ' +
        format.replace(/%s/g, () => {
          return args[argIndex++]
        })
      if (typeof console !== 'undefined') {
        console.error(message)
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message)
      } catch (x) {}
    }
  }
}

const warned = {}

export default function deprecationWarning(oldname, newname, link) {
  //avoid test warnings
  if (typeof global.it === 'function') {
    return
  }

  const warnKey = `${oldname}\n${newname}`
  if (warned[warnKey]) {
    return
  }

  let message = `[React-WeUI] ${oldname} is deprecated. Use ${newname} instead. ${oldname} will be remove in the next major version.`

  if (link) {
    message += `\nYou can read more about it at \n${link}`
  }

  warning(false, message)
  warned[warnKey] = true
}

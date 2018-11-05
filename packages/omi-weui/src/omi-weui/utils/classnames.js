/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames

  with fix with es6 export default
*/

let hasOwn = {}.hasOwnProperty

function classNames() {
  let classes = []

  for (let i = 0; i < arguments.length; i++) {
    let arg = arguments[i]
    if (!arg) continue

    let argType = typeof arg

    if (argType === 'string' || argType === 'number') {
      classes.push(arg)
    } else if (Array.isArray(arg)) {
      classes.push(classNames(...arg))
    } else if (argType === 'object') {
      for (let key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key)
        }
      }
    }
  }

  return classes.join(' ')
}

export default classNames

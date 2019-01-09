/**
 * classNames based on https://github.com/JedWatson/classnames
 * by Jed Watson
 * Licensed under the MIT License
 * https://github.com/JedWatson/classnames/blob/master/LICENSE
 * modified by dntzhang
 */

var hasOwn = {}.hasOwnProperty

export function classNames() {
  var classes = []

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i]
    if (!arg) continue

    var argType = typeof arg

    if (argType === 'string' || argType === 'number') {
      classes.push(arg)
    } else if (Array.isArray(arg) && arg.length) {
      var inner = classNames.apply(null, arg)
      if (inner) {
        classes.push(inner)
      }
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key)
        }
      }
    }
  }

  return classes.join(' ')
}

export function extractClass() {
  const [props, ...args] = Array.prototype.slice.call(arguments, 0)
  if (props) {
    if (props.class) {
      args.unshift(props.class)
      delete props.class
    } else if (props.className) {
      args.unshift(props.className)
      delete props.className
    }
  }
  if (args.length > 0) {
    return { class: classNames.apply(null, args) }
  }
}

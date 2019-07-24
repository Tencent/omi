/* 
 * obaa 2.0.3
 * By dntzhang
 * Github: https://github.com/Tencent/omi/tree/master/packages/obaa
 * MIT Licensed.
 */


// $_r: root
// $_c: prop change callback
// $_p: path

export function obaa(target, arr, callback) {

  var eventPropArr = []
  if (isArray(target)) {
    if (target.length === 0) {
      target.$_o = {
        $_r: target,
        $_p: '#'
      }
    }
    mock(target, target)
  }
  for (var prop in target) {
    if (target.hasOwnProperty(prop)) {
      if (callback) {
        if (isArray(arr) && isInArray(arr, prop)) {
          eventPropArr.push(prop)
          watch(target, prop, null, target)
        } else if (isString(arr) && prop == arr) {
          eventPropArr.push(prop)
          watch(target, prop, null, target)
        }
      } else {
        eventPropArr.push(prop)
        watch(target, prop, null, target)
      }
    }
  }
  if (!target.$_c) {
    target.$_c = []
  }
  var propChanged = callback ? callback : arr
  target.$_c.push({
    all: !callback,
    propChanged: propChanged,
    eventPropArr: eventPropArr
  })
}

var triggerStr = [
  'concat',
  'copyWithin',
  'fill',
  'pop',
  'push',
  'reverse',
  'shift',
  'sort',
  'splice',
  'unshift',
  'size'
].join(',')

var methods = [
  'concat',
  'copyWithin',
  'entries',
  'every',
  'fill',
  'filter',
  'find',
  'findIndex',
  'forEach',
  'includes',
  'indexOf',
  'join',
  'keys',
  'lastIndexOf',
  'map',
  'pop',
  'push',
  'reduce',
  'reduceRight',
  'reverse',
  'shift',
  'slice',
  'some',
  'sort',
  'splice',
  'toLocaleString',
  'toString',
  'unshift',
  'values',
  'size'
]

function mock(target, root) {
  methods.forEach(function (item) {
    target[item] = function () {
      var old = Array.prototype.slice.call(this, 0)
      var result = Array.prototype[item].apply(
        this,
        Array.prototype.slice.call(arguments)
      )
      if (new RegExp('\\b' + item + '\\b').test(triggerStr)) {
        for (var cprop in this) {
          if (
            this.hasOwnProperty(cprop) &&
            !isFunction(this[cprop])
          ) {
            watch(this, cprop, this.$_o.$_p, root)
          }
        }
        //todo
        onPropertyChanged(
          'Array-' + item,
          this,
          old,
          this,
          this.$_o.$_p,
          root
        )
      }
      return result
    }
    target[
      'pure' + item.substring(0, 1).toUpperCase() + item.substring(1)
    ] = function () {
      return Array.prototype[item].apply(
        this,
        Array.prototype.slice.call(arguments)
      )
    }
  })
}

function watch(target, prop, path, root) {
  if (prop === '$_o') return
  if (isFunction(target[prop])) return
  if (!target.$_o) target.$_o = {
    $_r: root
  }
  if (path !== undefined && path !== null) {
    target.$_o.$_p = path
  } else {
    target.$_o.$_p = '#'
  }

  var currentValue = (target.$_o[prop] = target[prop])
  Object.defineProperty(target, prop, {
    get: function () {
      return this.$_o[prop]
    },
    set: function (value) {
      var old = this.$_o[prop]
      this.$_o[prop] = value
      onPropertyChanged(
        prop,
        value,
        old,
        this,
        target.$_o.$_p,
        root
      )
    },
    configurable: true,
    enumerable: true
  })
  if (typeof currentValue == 'object') {
    if (isArray(currentValue)) {
      mock(currentValue, root)
      if (currentValue.length === 0) {
        if (!currentValue.$_o) currentValue.$_o = {}
        if (path !== undefined && path !== null) {
          currentValue.$_o.$_p = path + '-' + prop
        } else {
          currentValue.$_o.$_p = '#' + '-' + prop
        }
      }
    }
    for (var cprop in currentValue) {
      if (currentValue.hasOwnProperty(cprop)) {
        watch(
          currentValue,
          cprop,
          target.$_o.$_p + '-' + prop,
          root
        )
      }
    }
  }
}


function onPropertyChanged(prop, value, oldValue, target, path, root) {
  if (value !== oldValue && root.$_c) {
    var rootName = getRootName(prop, path)
    for (
      var i = 0, len = root.$_c.length;
      i < len;
      i++
    ) {
      var handler = root.$_c[i]
      if (
        handler.all ||
        isInArray(handler.eventPropArr, rootName) ||
        rootName.indexOf('Array-') === 0
      ) {
        handler.propChanged.call(target, prop, value, oldValue, path)
      }
    }
  }

  if (prop.indexOf('Array-') !== 0 && typeof value === 'object') {
    watch(target, prop, target.$_o.$_p, root)
  }
}

function isFunction(obj) {
  return Object.prototype.toString.call(obj) == '[object Function]'
}



function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

function isString(obj) {
  return typeof obj === 'string'
}

function isInArray(arr, item) {
  for (var i = arr.length; --i > -1;) {
    if (item === arr[i]) return true
  }
  return false
}


function getRootName(prop, path) {
  if (path === '#') {
    return prop
  }
  return path.split('-')[1]
}

obaa.add = function (obj, prop) {
  watch(obj, prop, obj.$_o.$_p, obj.$_o.$_r)
}

obaa.set = function (obj, prop, value) {
  watch(obj, prop, obj.$_o.$_p, obj.$_o.$_r)
  obj[prop] = value
}

Array.prototype.size = function (length) {
  this.length = length
}


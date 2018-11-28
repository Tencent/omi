/**
 * mappingjs v1.0.0 by dntzhang
 * Objects mapping for javascript. Omi MVVM's best partner.
 * @method mapping
 * @param {Object} options {from: .., to: .., rule: .. }
 * @return {Object} To Object
 */

var ARRAYTYPE = '[object Array]'
var OBJECTTYPE = '[object Object]'

var mapping = function (options) {
  var from = options.from
  var to = options.to
  var rules = options.rule

  var res = to || {}

  Object.keys(from).forEach(function (key) {
    res[key] = from[key]
  })

  rules &&
    Object.keys(rules).forEach(function (key) {
      var rule = rules[key]
      var isPath = key.match(/\.|\[/)
      if (typeof rule === 'function') {
        if (isPath) {
          setPathValue(res, key, rule.call(from))
        } else {
          res[key] = rule.call(from)
        }
      } else {
        if (isPath) {
          setPathValue(res, key, rule)
        } else {
          res[key] = rule
        }
      }
    })
  return res
}

function setPathValue(obj, path, value) {
  var arr = path
    .replace(/]/g, '')
    .replace(/\[/g, '.')
    .split('.')

  var current = obj
  for (var i = 0, len = arr.length; i < len; i++) {
    var key = arr[i]
    var temp = current[key]
    if (i === len - 1) {
      current[arr[len - 1]] = value
    } else {
      if (temp === undefined) {
        if (isNaN(Number(arr[i + 1]))) {
          current[key] = {}
        } else {
          current[key] = []
        }

        temp = current[key]
      }
    }

    current = temp
  }
}

mapping.auto = function (from, to) {
  return objMapping(from, to)
}

function arrayMapping(from, to) {
  from.forEach(function (item, index) {
    if (isArray(item)) {
      to[index] = to[index] || []
      arrayMapping(item, to[index])
    } else if (isObject(item)) {
      to[index] = objMapping(item, to[index])
    } else {
      to[index] = item
    }
  })
}

function objMapping(from, to) {
  var res = to || {}
  Object.keys(from).forEach(key => {
    var obj = from[key]
    if (isArray(obj)) {
      res[key] = res[key] || []
      arrayMapping(obj, res[key])
    } else if (isObject(obj)) {
      res[key] = res[key] || {}
      objMapping(obj, res[key])
    } else {
      res[key] = obj
    }
  })
  return res
}

function isArray(obj) {
  return Object.prototype.toString.call(obj) === ARRAYTYPE
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === OBJECTTYPE
}

if (typeof exports == "object") {
  module.exports = mapping
} else if (typeof define == "function" && define.amd) {
  define([], function () { return mapping })
} else {
  window.mapping = mapping
}

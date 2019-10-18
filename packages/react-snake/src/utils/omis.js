/**
 * omis v2.0.0  https://tencent.github.io/omi/
 * Observable store system for JavaScript apps.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import React from 'react';

function obaa(target, arr, callback) {
  var eventPropArr = [];
  if (isArray(target)) {
    if (target.length === 0) {
      target.__o_ = {
        __r_: target,
        __p_: '#'
      };
    }
    mock(target, target);
  }
  for (var prop in target) {
    if (target.hasOwnProperty(prop)) {
      if (callback) {
        if (isArray(arr) && isInArray(arr, prop)) {
          eventPropArr.push(prop);
          watch(target, prop, null, target);
        } else if (isString(arr) && prop === arr) {
          eventPropArr.push(prop);
          watch(target, prop, null, target);
        }
      } else {
        eventPropArr.push(prop);
        watch(target, prop, null, target);
      }
    }
  }
  if (!target.__c_) {
    target.__c_ = [];
  }
  var propChanged = callback ? callback : arr;
  target.__c_.push({
    all: !callback,
    propChanged: propChanged,
    eventPropArr: eventPropArr
  });
}

var triggerStr = ['concat', 'copyWithin', 'fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'size'].join(',');

var methods = ['concat', 'copyWithin', 'entries', 'every', 'fill', 'filter', 'find', 'findIndex', 'forEach', 'includes', 'indexOf', 'join', 'keys', 'lastIndexOf', 'map', 'pop', 'push', 'reduce', 'reduceRight', 'reverse', 'shift', 'slice', 'some', 'sort', 'splice', 'toLocaleString', 'toString', 'unshift', 'values', 'size'];

function mock(target, root) {
  methods.forEach(function (item) {
    target[item] = function () {
      var old = Array.prototype.slice.call(this, 0);
      var result = Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
      if (new RegExp('\\b' + item + '\\b').test(triggerStr)) {
        for (var cprop in this) {
          if (this.hasOwnProperty(cprop) && !isFunction(this[cprop])) {
            watch(this, cprop, this.__o_.__p_, root);
          }
        }
        //todo
        onPropertyChanged('Array-' + item, this, old, this, this.__o_.__p_, root);
      }
      return result;
    };
    target['pure' + item.substring(0, 1).toUpperCase() + item.substring(1)] = function () {
      return Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
    };
  });
}

function watch(target, prop, path, root) {
  if (prop === '__o_') return;
  if (isFunction(target[prop])) return;
  if (!target.__o_) target.__o_ = {
    __r_: root
  };
  if (path !== undefined && path !== null) {
    target.__o_.__p_ = path;
  } else {
    target.__o_.__p_ = '#';
  }

  var currentValue = target.__o_[prop] = target[prop];
  Object.defineProperty(target, prop, {
    get: function get() {
      return this.__o_[prop];
    },
    set: function set(value) {
      var old = this.__o_[prop];
      this.__o_[prop] = value;
      onPropertyChanged(prop, value, old, this, target.__o_.__p_, root);
    },

    configurable: true,
    enumerable: true
  });
  if (typeof currentValue === 'object') {
    if (isArray(currentValue)) {
      mock(currentValue, root);
      if (currentValue.length === 0) {
        if (!currentValue.__o_) currentValue.__o_ = {};
        if (path !== undefined && path !== null) {
          currentValue.__o_.__p_ = path + '-' + prop;
        } else {
          currentValue.__o_.__p_ = '#-' + prop;
        }
      }
    }
    for (var cprop in currentValue) {
      if (currentValue.hasOwnProperty(cprop)) {
        watch(currentValue, cprop, target.__o_.__p_ + '-' + prop, root);
      }
    }
  }
}

function onPropertyChanged(prop, value, oldValue, target, path, root) {
  if (value !== oldValue && !(nan(value) && nan(oldValue)) && root.__c_) {
    var rootName = getRootName(prop, path);
    for (var i = 0, len = root.__c_.length; i < len; i++) {
      var handler = root.__c_[i];
      if (handler.all || isInArray(handler.eventPropArr, rootName) || rootName.indexOf('Array-') === 0) {
        handler.propChanged.call(target, prop, value, oldValue, path);
      }
    }
  }

  if (prop.indexOf('Array-') !== 0 && typeof value === 'object') {
    watch(target, prop, target.__o_.__p_, root);
  }
}

function isFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]';
}

function nan(value) {
  return typeof value === 'number' && isNaN(value);
}

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function isString(obj) {
  return typeof obj === 'string';
}

function isInArray(arr, item) {
  for (var i = arr.length; --i > -1;) {
    if (item === arr[i]) return true;
  }
  return false;
}

function getRootName(prop, path) {
  if (path === '#') {
    return prop;
  }
  return path.split('-')[1];
}

obaa.add = function (obj, prop) {
  watch(obj, prop, obj.__o_.__p_, obj.__o_.__r_);
};

obaa.set = function (obj, prop, value) {
  watch(obj, prop, obj.__o_.__p_, obj.__o_.__r_);
  obj[prop] = value;
};

//@ts-ignore
/* eslint-disable */
Array.prototype.size = function (length) {
  this.length = length;
};

function getPath(obj) {
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    var result = {};
    obj.forEach(function (item) {
      if (typeof item === 'string') {
        result[item] = true;
      } else {
        var tempPath = item[Object.keys(item)[0]];
        if (typeof tempPath === 'string') {
          result[tempPath] = true;
        } else if (typeof tempPath[0] === 'string') {
          result[tempPath[0]] = true;
        } else {
          tempPath[0].forEach(function (path) {
            return result[path] = true;
          });
        }
      }
    });
    return result;
  }
  return getUpdatePath(obj);
}

function getUpdatePath(data) {
  var result = {};
  dataToPath(data, result);
  return result;
}

function dataToPath(data, result) {
  Object.keys(data).forEach(function (key) {
    result[key] = true;
    var type = Object.prototype.toString.call(data[key]);
    if (type === '[object Object]') {
      _objToPath(data[key], key, result);
    } else if (type === '[object Array]') {
      _arrayToPath(data[key], key, result);
    }
  });
}

function _objToPath(data, path, result) {
  Object.keys(data).forEach(function (key) {
    result[path + '.' + key] = true;
    delete result[path];
    var type = Object.prototype.toString.call(data[key]);
    if (type === '[object Object]') {
      _objToPath(data[key], path + '.' + key, result);
    } else if (type === '[object Array]') {
      _arrayToPath(data[key], path + '.' + key, result);
    }
  });
}

function _arrayToPath(data, path, result) {
  data.forEach(function (item, index) {
    result[path + '[' + index + ']'] = true;
    delete result[path];
    var type = Object.prototype.toString.call(item);
    if (type === '[object Object]') {
      _objToPath(item, path + '[' + index + ']', result);
    } else if (type === '[object Array]') {
      _arrayToPath(item, path + '[' + index + ']', result);
    }
  });
}

function needUpdate(diffResult, updatePath) {
  for (var keyA in diffResult) {
    if (updatePath[keyA]) {
      return true;
    }
    for (var keyB in updatePath) {
      if (includePath(keyA, keyB)) {
        return true;
      }
    }
  }
  return false;
}

function includePath(pathA, pathB) {
  if (pathA.indexOf(pathB) === 0) {
    var next = pathA.substr(pathB.length, 1);
    if (next === '[' || next === '.') {
      return true;
    }
  }
  return false;
}

function fixPath(path) {
  var mpPath = '';
  var arr = path.replace('#-', '').split('-');
  arr.forEach(function (item, index) {
    if (index) {
      if (isNaN(Number(item))) {
        mpPath += '.' + item;
      } else {
        mpPath += '[' + item + ']';
      }
    } else {
      mpPath += item;
    }
  });
  return mpPath;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var components = [];
var updateSelfComponents = [];

var isSelf = false;
var currentComponent = null;

function $(options) {
  if (options.store) {
    $.store = options.store;
    obaa($.store.data, function (prop, val, old, path) {
      var patch = {};

      patch[fixPath(path + '-' + prop)] = true;
      components.forEach(function (component) {
        if (component.__$updatePath_ && needUpdate(patch, component.__$updatePath_)) {
          component.setState({ __$id_: component.state.__$id_++ });

          isSelf = false;
        }
      });

      updateSelfComponents.forEach(function (component) {
        if (component.__$updateSelfPath_ && needUpdate(patch, component.__$updateSelfPath_)) {
          component.setState({ __$id_: component.state.__$id_++ });
          isSelf = true;
          currentComponent = component;
        }
      });
    });
  }

  var updatePath = options.use && getPath(options.use);
  var updateSelfPath = options.useSelf && getPath(options.useSelf);

  return function (_React$Component) {
    _inherits(_class2, _React$Component);

    function _class2(props) {
      _classCallCheck(this, _class2);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.state = {
        __$id_: 0
      };

      if (updatePath) {
        components.push(_this);
        _this.__$updatePath_ = updatePath;
      }
      if (updateSelfPath) {
        updateSelfComponents.push(_this);
        _this.__$updateSelfPath_ = updateSelfPath;
      }
      return _this;
    }

    _class2.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
      if (currentComponent === this) return true;
      return !isSelf;
    };

    _class2.prototype.render = function render() {
      return options.render.apply(this, arguments);
    };

    return _class2;
  }(React.Component);
}

function $v(options) {}

var root = getGlobal();

var omis = {
  $: $,
  $v: $v
};

root.Omis = omis;
root.omis = omis;
root.Omis.version = '2.0.0';

function getGlobal() {
  if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
    return self || window || global || function () {
      return this;
    }();
  }
  return global;
}

export default omis;
export { $, $v };
//# sourceMappingURL=omis.esm.js.map

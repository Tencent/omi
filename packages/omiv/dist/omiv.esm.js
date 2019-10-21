/**
 * omiv v0.3.1  https://tencent.github.io/omi/
 * 1kb store system for Vue apps.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import Vue from 'vue';

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

function getPath(obj, out, name) {
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
  out && (out[name] = result);
  return result;
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

var store;
var isMultiStore = false;

function $(options) {
  var beforeCreate = options.beforeCreate;
  var destroyed = options.destroyed;
  var use = options.use;
  var useSelf = options.useSelf;
  options.computed = options.computed || {};

  options.beforeCreate = function () {
    this.$store = store;
    if (isMultiStore) {
      if (use) {
        var updatePath = {};
        for (var storeName in use) {
          getPath(use[storeName], updatePath, storeName);
          store[storeName].components.push(this);
        }
        this.__$updatePath_ = updatePath;
      }

      if (useSelf) {
        var updateSelfPath = {};
        for (var _storeName in useSelf) {
          getPath(useSelf[_storeName], updateSelfPath, _storeName);
          store[_storeName].updateSelfComponents.push(this);
        }
        this.__$updateSelfPath_ = updateSelfPath;
      }
    } else {
      if (use) {
        this.__$updatePath_ = getPath(use);
        store.components.push(this);
      }
      if (useSelf) {
        this.__$updateSelfPath_ = getPath(useSelf);
        store.updateSelfComponents.push(this);
      }
    }
    beforeCreate && beforeCreate.apply(this, arguments);
  };

  options.destroyed = function () {
    if (isMultiStore) {
      for (var key in store) {
        removeItem(this, store[key].components);
        removeItem(this, store[key].updateSelfComponents);
      }
    } else {
      removeItem(this, store.updateSelfComponents);
      removeItem(this, store.components);
    }

    destroyed && destroyed.apply(this, arguments);
  };

  options.computed.state = function () {
    if (isMultiStore) {
      var state = {};
      Object.keys(store).forEach(function (k) {
        state[k] = store[k].data;
      });
      return state;
    }
    return store.data;
  };

  options.computed.store = function () {
    return store;
  };

  return options;
}

function recUpdate(root) {
  root.$forceUpdate();
  root.$children.forEach(function (child) {
    recUpdate(child);
  });
}

function observe(store, storeName) {
  store.components = [];
  store.updateSelfComponents = [];

  obaa(store.data, function (prop, val, old, path) {
    var patch = {};

    patch[fixPath(path + '-' + prop)] = true;
    store.components.forEach(function (component) {
      var p = component.__$updatePath_;
      if (storeName) {
        if (p && p[storeName] && needUpdate(patch, p[storeName])) {
          recUpdate(component);
        }
      } else if (p && needUpdate(patch, p)) {
        recUpdate(component);
      }
    });

    store.updateSelfComponents.forEach(function (component) {
      var sp = component.__$updateSelfPath_;
      if (storeName) {
        if (sp && sp[storeName] && needUpdate(patch, sp[storeName])) {
          component.$forceUpdate();
        }
      } else if (sp && needUpdate(patch, sp)) {
        component.$forceUpdate();
      }
    });
  });
}

function removeItem(item, arr) {
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      break;
    }
  }
}

function render(app, renderTo, store, options) {
  reset(store);
  new Vue(Object.assign({
    render: function render(h) {
      return h(app);
    }
  }, options)).$mount(renderTo);
}

function reset(s) {
  if (s) {
    store = s;
    if (store.data) {
      isMultiStore = false;
      observe(store);
    } else {
      isMultiStore = true;
      for (var key in store) {
        if (store[key].data) {
          observe(store[key], key);
        }
      }
    }
  }
}

var omiv = { $: $, render: render, reset: reset };

export default omiv;
export { $, render, reset };
//# sourceMappingURL=omiv.esm.js.map

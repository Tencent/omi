/**
 * omiv v1.0.6  https://tencent.github.io/omi/
 * 1kb store system for Vue apps.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

(function () {
  'use strict';

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

  function repeat(str, times) {
    return new Array(times + 1).join(str);
  }

  function pad(num, maxLength) {
    return repeat('0', maxLength - num.toString().length) + num;
  }

  function find(list, f) {
    return list.filter(f)[0];
  }

  function deepCopy(obj) {
    var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    // if obj is hit, it is in circular structure
    var hit = find(cache, function (c) {
      return c.original === obj;
    });
    if (hit) {
      return hit.copy;
    }

    var copy = Array.isArray(obj) ? [] : {};
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
      original: obj,
      copy: copy
    });

    Object.keys(obj).forEach(function (key) {
      // filter internal attrs
      if (key.startsWith('__')) return;
      copy[key] = deepCopy(obj[key], cache);
    });

    return copy;
  }

  function createLogger() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$collapsed = _ref.collapsed,
        collapsed = _ref$collapsed === undefined ? true : _ref$collapsed,
        _ref$logger = _ref.logger,
        logger = _ref$logger === undefined ? console : _ref$logger;

    return function (store) {
      var prevState = deepCopy(store.data);

      if (!store._subscribers) {
        store._subscribers = [];
      }

      store._subscribers.push(function (mutation, state) {
        if (typeof logger === 'undefined') {
          return;
        }
        var nextState = deepCopy(state);

        var time = new Date();
        var formattedTime = ' @ ' + pad(time.getHours(), 2) + ':' + pad(time.getMinutes(), 2) + ':' + pad(time.getSeconds(), 2) + '.' + pad(time.getMilliseconds(), 3);
        var message = 'mutation ' + mutation.type + formattedTime;
        var startMessage = collapsed ? logger.groupCollapsed : logger.group;

        // render
        try {
          startMessage.call(logger, message);
        } catch (e) {
          // eslint-disable-next-line
          console.log(message);
        }

        logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', prevState);
        logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', mutation.type, mutation.value);
        logger.log('%c next state', 'color: #4CAF50; font-weight: bold', nextState);

        try {
          logger.groupEnd();
        } catch (e) {
          logger.log('—— log end ——');
        }

        prevState = nextState;
      });
    };
  }

  var Vue;
  var store;
  var isMultiStore = false;

  function $(options) {
    var beforeCreate = options.beforeCreate;
    var destroyed = options.destroyed;
    var use = options.use;
    var useSelf = options.useSelf;
    options.computed = options.computed || {};

    if (options.store) {
      reset(options.store);
    }

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
          if (key !== 'replaceState') {
            removeItem(this, store[key].components);
            removeItem(this, store[key].updateSelfComponents);
          }
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
    store._subscribers = [];

    if (store.logPlugin) {
      store.plugins = store.plugins ? [].concat(store.plugins, [createLogger()]) : [createLogger()];
    }

    // 启动插件
    var _store$plugins = store.plugins,
        plugins = _store$plugins === undefined ? [] : _store$plugins;

    if (plugins.length) {
      plugins.forEach(function (plugin) {
        return plugin(store);
      });
    }

    // 非 window 环境下不需要观察数据
    if (typeof window === 'undefined') return;

    obaa(store.data, function (prop, val, old, path) {
      var patch = {};

      patch[fixPath(path + '-' + prop)] = true;

      store._subscribers.forEach(function (sub) {
        return sub({ type: path + '-' + prop, value: val }, store.data);
      });

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

  function render(app, renderTo, initStore, options) {
    if (!Vue) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line
        console.error('[Omiv] has not been installed yet. Vue.use(Omiv) should be called first.');
      }
      return;
    }
    // fix: 如果是在子节点通过 $ 注入的 store， 在 根实例中拿不到 $store
    initStore = initStore || store;
    reset(initStore);

    return new Vue(Object.assign({
      render: function render(h) {
        return h(app);
      }
    }, options, initStore ? { store: initStore } : {})).$mount(renderTo);
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
    } else {
      // 为了测试用例正确执行的特殊处理，测试用例中多次执行 Omiv.render
      // 导致 store 变量存储的是上一个用例的 store，使得再次调用 Omiv.render(Component, '#app')
      // 不传 store 的时候，会被污染，导致用例执行异常。正常项目中应该不会走到这里的逻辑。
      store = undefined;
    }
  }

  // Vue.use 会判断是否重复安装
  function install(_Vue) {
    Vue = _Vue;
    applyMixin(Vue);
  }

  function applyMixin(Vue) {
    var omivComputed = {
      $state: function $state() {
        if (isMultiStore) {
          var state = {};
          Object.keys(this.$store).forEach(function (k) {
            state[k] = store[k].data;
          });
          return state;
        }
        return this.$store.data;
      }
    };

    function omivInit() {
      var _this = this;

      var options = this.$options;
      var use = options.use;
      var useSelf = options.useSelf;

      // TODO: 可能要处理一下在不同地方注入多个 store ？

      if (options.store) {
        this.$store = typeof options.store === 'function' ? options.store() : options.store;
      } else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store;
      }

      // 在 ssr 中用于替换 store
      if (this.$store && !this.$store.replaceState) {
        this.$store.replaceState = function () {
          var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          Object.keys(store).forEach(function (key) {
            // 过滤观察字段
            if (!key.startsWith('_')) {
              _this.$store.data[key] = store[key];
            }
          });
        };
      }

      // 修复不是在 main.js 中注入 store 的问题
      if (this.$store && !store) {
        reset(this.$store);
      }

      if (isMultiStore) {
        if (use) {
          var updatePath = {};
          for (var storeName in use) {
            getPath(use[storeName], updatePath, storeName);
            this.$store[storeName].components.push(this);
          }
          this.__$updatePath_ = updatePath;
        }

        if (useSelf) {
          var updateSelfPath = {};
          for (var _storeName2 in useSelf) {
            getPath(useSelf[_storeName2], updateSelfPath, _storeName2);
            this.$store[_storeName2].updateSelfComponents.push(this);
          }
          this.__$updateSelfPath_ = updateSelfPath;
        }
      } else {
        if (use) {
          // { count: true }
          this.__$updatePath_ = getPath(use);
          // 依赖 store 的组件，压入了一个 vm 实例
          this.$store.components.push(this);
        }
        if (useSelf) {
          this.__$updateSelfPath_ = getPath(useSelf);
          this.$store.updateSelfComponents.push(this);
        }
      }
    }

    function omivDestroyed() {
      if (this.$store) {
        //防止其他组件库 this.$store undefined 进入 omivDestroyed 报错
        if (isMultiStore) {
          for (var key in this.$store) {
            if (key !== 'replaceState') {
              removeItem(this, this.$store[key].components);
              removeItem(this, this.$store[key].updateSelfComponents);
            }
          }
        } else {
          removeItem(this, this.$store.updateSelfComponents);
          removeItem(this, this.$store.components);
        }
      }
    }

    Vue.mixin({
      beforeCreate: omivInit,
      computed: omivComputed,
      destroyed: omivDestroyed
    });
  }

  var Omiv = { $: $, render: render, reset: reset, install: install };

  if (typeof module != 'undefined') module.exports = Omiv;else self.Omiv = Omiv;

}());
//# sourceMappingURL=omiv.dev.js.map

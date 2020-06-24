!function() {
    'use strict';
    function obaa(target, arr, callback) {
        var eventPropArr = [];
        if (isArray(target)) {
            if (0 === target.length) target.__o_ = {
                __r_: target,
                __p_: '#'
            };
            mock(target, target);
        }
        for (var prop in target) if (target.hasOwnProperty(prop)) if (callback) {
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
        if (!target.__c_) target.__c_ = [];
        var propChanged = callback ? callback : arr;
        target.__c_.push({
            all: !callback,
            propChanged: propChanged,
            eventPropArr: eventPropArr
        });
    }
    function mock(target, root) {
        methods.forEach(function(item) {
            target[item] = function() {
                var old = Array.prototype.slice.call(this, 0);
                var result = Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
                if (new RegExp('\\b' + item + '\\b').test(triggerStr)) {
                    for (var cprop in this) if (this.hasOwnProperty(cprop) && !isFunction(this[cprop])) watch(this, cprop, this.__o_.__p_, root);
                    onPropertyChanged('Array-' + item, this, old, this, this.__o_.__p_, root);
                }
                return result;
            };
            target['pure' + item.substring(0, 1).toUpperCase() + item.substring(1)] = function() {
                return Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
            };
        });
    }
    function watch(target, prop, path, root) {
        if ('__o_' !== prop) if (!isFunction(target[prop])) {
            if (!target.__o_) target.__o_ = {
                __r_: root
            };
            if (void 0 !== path && null !== path) target.__o_.__p_ = path; else target.__o_.__p_ = '#';
            var currentValue = target.__o_[prop] = target[prop];
            Object.defineProperty(target, prop, {
                get: function() {
                    return this.__o_[prop];
                },
                set: function(value) {
                    var old = this.__o_[prop];
                    this.__o_[prop] = value;
                    onPropertyChanged(prop, value, old, this, target.__o_.__p_, root);
                },
                configurable: !0,
                enumerable: !0
            });
            if ('object' == typeof currentValue) {
                if (isArray(currentValue)) {
                    mock(currentValue, root);
                    if (0 === currentValue.length) {
                        if (!currentValue.__o_) currentValue.__o_ = {};
                        if (void 0 !== path && null !== path) currentValue.__o_.__p_ = path + '-' + prop; else currentValue.__o_.__p_ = '#-' + prop;
                    }
                }
                for (var cprop in currentValue) if (currentValue.hasOwnProperty(cprop)) watch(currentValue, cprop, target.__o_.__p_ + '-' + prop, root);
            }
        }
    }
    function onPropertyChanged(prop, value, oldValue, target, path, root) {
        if (value !== oldValue && (!nan(value) || !nan(oldValue)) && root.__c_) {
            var rootName = getRootName(prop, path);
            for (var i = 0, len = root.__c_.length; i < len; i++) {
                var handler = root.__c_[i];
                if (handler.all || isInArray(handler.eventPropArr, rootName) || 0 === rootName.indexOf('Array-')) handler.propChanged.call(target, prop, value, oldValue, path);
            }
        }
        if (0 !== prop.indexOf('Array-') && 'object' == typeof value) watch(target, prop, target.__o_.__p_, root);
    }
    function isFunction(obj) {
        return '[object Function]' === Object.prototype.toString.call(obj);
    }
    function nan(value) {
        return 'number' == typeof value && isNaN(value);
    }
    function isArray(obj) {
        return '[object Array]' === Object.prototype.toString.call(obj);
    }
    function isString(obj) {
        return 'string' == typeof obj;
    }
    function isInArray(arr, item) {
        for (var i = arr.length; --i > -1; ) if (item === arr[i]) return !0;
        return !1;
    }
    function getRootName(prop, path) {
        if ('#' === path) return prop; else return path.split('-')[1];
    }
    function getPath(obj, out, name) {
        var result = {};
        obj.forEach(function(item) {
            if ('string' == typeof item) result[item] = !0; else {
                var tempPath = item[Object.keys(item)[0]];
                if ('string' == typeof tempPath) result[tempPath] = !0; else if ('string' == typeof tempPath[0]) result[tempPath[0]] = !0; else tempPath[0].forEach(function(path) {
                    return result[path] = !0;
                });
            }
        });
        out && (out[name] = result);
        return result;
    }
    function needUpdate(diffResult, updatePath) {
        for (var keyA in diffResult) {
            if (updatePath[keyA]) return !0;
            for (var keyB in updatePath) if (includePath(keyA, keyB)) return !0;
        }
        return !1;
    }
    function includePath(pathA, pathB) {
        if (0 === pathA.indexOf(pathB)) {
            var next = pathA.substr(pathB.length, 1);
            if ('[' === next || '.' === next) return !0;
        }
        return !1;
    }
    function fixPath(path) {
        var mpPath = '';
        var arr = path.replace('#-', '').split('-');
        arr.forEach(function(item, index) {
            if (index) if (isNaN(Number(item))) mpPath += '.' + item; else mpPath += '[' + item + ']'; else mpPath += item;
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
        var cache = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (null === obj || 'object' != typeof obj) return obj;
        var hit = find(cache, function(c) {
            return c.original === obj;
        });
        if (hit) return hit.copy;
        var copy = Array.isArray(obj) ? [] : {};
        cache.push({
            original: obj,
            copy: copy
        });
        Object.keys(obj).forEach(function(key) {
            if (!key.startsWith('__')) copy[key] = deepCopy(obj[key], cache);
        });
        return copy;
    }
    function createLogger() {
        var _ref = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, _ref$collapsed = _ref.collapsed, collapsed = void 0 === _ref$collapsed ? !0 : _ref$collapsed, _ref$logger = _ref.logger, logger = void 0 === _ref$logger ? console : _ref$logger;
        return function(store) {
            var prevState = deepCopy(store.data);
            if (!store._subscribers) store._subscribers = [];
            store._subscribers.push(function(mutation, state) {
                if (void 0 !== logger) {
                    var nextState = deepCopy(state);
                    var time = new Date();
                    var formattedTime = ' @ ' + pad(time.getHours(), 2) + ':' + pad(time.getMinutes(), 2) + ':' + pad(time.getSeconds(), 2) + '.' + pad(time.getMilliseconds(), 3);
                    var message = 'mutation ' + mutation.type + formattedTime;
                    var startMessage = collapsed ? logger.groupCollapsed : logger.group;
                    try {
                        startMessage.call(logger, message);
                    } catch (e) {
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
                }
            });
        };
    }
    function $(options) {
        var beforeCreate = options.beforeCreate;
        var destroyed = options.destroyed;
        var use = options.use;
        var useSelf = options.useSelf;
        options.computed = options.computed || {};
        if (options.store) reset(options.store);
        options.beforeCreate = function() {
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
        options.destroyed = function() {
            if (isMultiStore) {
                for (var key in store) if ('replaceState' !== key) {
                    removeItem(this, store[key].components);
                    removeItem(this, store[key].updateSelfComponents);
                }
            } else {
                removeItem(this, store.updateSelfComponents);
                removeItem(this, store.components);
            }
            destroyed && destroyed.apply(this, arguments);
        };
        options.computed.state = function() {
            if (isMultiStore) {
                var state = {};
                Object.keys(store).forEach(function(k) {
                    state[k] = store[k].data;
                });
                return state;
            }
            return store.data;
        };
        options.computed.store = function() {
            return store;
        };
        return options;
    }
    function recUpdate(root) {
        root.$forceUpdate();
        root.$children.forEach(function(child) {
            recUpdate(child);
        });
    }
    function observe(store, storeName) {
        store.components = [];
        store.updateSelfComponents = [];
        store._subscribers = [];
        if (store.logPlugin) store.plugins = store.plugins ? [].concat(store.plugins, [ createLogger() ]) : [ createLogger() ];
        var _store$plugins = store.plugins, plugins = void 0 === _store$plugins ? [] : _store$plugins;
        if (plugins.length) plugins.forEach(function(plugin) {
            return plugin(store);
        });
        if ('undefined' != typeof window) obaa(store.data, function(prop, val, old, path) {
            var patch = {};
            patch[fixPath(path + '-' + prop)] = !0;
            store._subscribers.forEach(function(sub) {
                return sub({
                    type: path + '-' + prop,
                    value: val
                }, store.data);
            });
            store.components.forEach(function(component) {
                var p = component.__$updatePath_;
                if (storeName) {
                    if (p && p[storeName] && needUpdate(patch, p[storeName])) recUpdate(component);
                } else if (p && needUpdate(patch, p)) recUpdate(component);
            });
            store.updateSelfComponents.forEach(function(component) {
                var sp = component.__$updateSelfPath_;
                if (storeName) {
                    if (sp && sp[storeName] && needUpdate(patch, sp[storeName])) component.$forceUpdate();
                } else if (sp && needUpdate(patch, sp)) component.$forceUpdate();
            });
        });
    }
    function removeItem(item, arr) {
        for (var i = 0, len = arr.length; i < len; i++) if (arr[i] === item) {
            arr.splice(i, 1);
            break;
        }
    }
    function render(app, renderTo, initStore, options) {
        if (Vue) {
            initStore = initStore || store;
            reset(initStore);
            return new Vue(Object.assign({
                render: function(h) {
                    return h(app);
                }
            }, options, initStore ? {
                store: initStore
            } : {})).$mount(renderTo);
        } else if ('production' !== process.env.NODE_ENV) console.error('[Omiv] has not been installed yet. Vue.use(Omiv) should be called first.');
    }
    function reset(s) {
        if (s) {
            store = s;
            if (store.data) {
                isMultiStore = !1;
                observe(store);
            } else {
                isMultiStore = !0;
                for (var key in store) if (store[key].data) observe(store[key], key);
            }
        } else store = void 0;
    }
    function install(_Vue) {
        Vue = _Vue;
        applyMixin(Vue);
    }
    function applyMixin(Vue) {
        function omivInit() {
            var _this = this;
            var options = this.$options;
            var use = options.use;
            var useSelf = options.useSelf;
            if (options.store) this.$store = 'function' == typeof options.store ? options.store() : options.store; else if (options.parent && options.parent.$store) this.$store = options.parent.$store;
            if (this.$store && !this.$store.replaceState) this.$store.replaceState = function() {
                var store = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Object.keys(store).forEach(function(key) {
                    if (!key.startsWith('_')) _this.$store.data[key] = store[key];
                });
            };
            if (this.$store && !store) reset(this.$store);
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
                    this.__$updatePath_ = getPath(use);
                    this.$store.components.push(this);
                }
                if (useSelf) {
                    this.__$updateSelfPath_ = getPath(useSelf);
                    this.$store.updateSelfComponents.push(this);
                }
            }
        }
        function omivDestroyed() {
            if (this.$store) if (isMultiStore) {
                for (var key in this.$store) if ('replaceState' !== key) {
                    removeItem(this, this.$store[key].components);
                    removeItem(this, this.$store[key].updateSelfComponents);
                }
            } else {
                removeItem(this, this.$store.updateSelfComponents);
                removeItem(this, this.$store.components);
            }
        }
        var omivComputed = {
            $state: function() {
                if (isMultiStore) {
                    var state = {};
                    Object.keys(this.$store).forEach(function(k) {
                        state[k] = store[k].data;
                    });
                    return state;
                }
                return this.$store.data;
            }
        };
        Vue.mixin({
            beforeCreate: omivInit,
            computed: omivComputed,
            destroyed: omivDestroyed
        });
    }
    var triggerStr = [ 'concat', 'copyWithin', 'fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'size' ].join(',');
    var methods = [ 'concat', 'copyWithin', 'entries', 'every', 'fill', 'filter', 'find', 'findIndex', 'forEach', 'includes', 'indexOf', 'join', 'keys', 'lastIndexOf', 'map', 'pop', 'push', 'reduce', 'reduceRight', 'reverse', 'shift', 'slice', 'some', 'sort', 'splice', 'toLocaleString', 'toString', 'unshift', 'values', 'size' ];
    obaa.add = function(obj, prop) {
        watch(obj, prop, obj.__o_.__p_, obj.__o_.__r_);
    };
    obaa.set = function(obj, prop, value) {
        watch(obj, prop, obj.__o_.__p_, obj.__o_.__r_);
        obj[prop] = value;
    };
    Array.prototype.size = function(length) {
        this.length = length;
    };
    var Vue;
    var store;
    var isMultiStore = !1;
    var Omiv = {
        $: $,
        render: render,
        reset: reset,
        install: install
    };
    if ('undefined' != typeof module) module.exports = Omiv; else self.Omiv = Omiv;
}();
//# sourceMappingURL=omiv.js.map
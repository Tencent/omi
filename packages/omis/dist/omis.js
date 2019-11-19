!function(React) {
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
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return call && ("object" == typeof call || "function" == typeof call) ? call : self;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    function $(options) {
        var _class, _temp;
        if (options.store) {
            $.store = options.store;
            if ($.store.data) observe($.store); else {
                isMultiStore = !0;
                for (var key in $.store) if ($.store[key].data) observe($.store[key], key);
            }
        }
        return _temp = _class = function(_React$Component) {
            function _class(props) {
                _classCallCheck(this, _class);
                var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
                _this.state = {
                    __$id_: 0
                };
                if (isMultiStore) {
                    if (options.use) {
                        var updatePath = {};
                        for (var storeName in options.use) {
                            getPath(options.use[storeName], updatePath, storeName);
                            $.store[storeName].components.push(_this);
                        }
                        _this.__$updatePath_ = updatePath;
                    }
                    if (options.useSelf) {
                        var updateSelfPath = {};
                        for (var _storeName in options.useSelf) {
                            getPath(options.useSelf[_storeName], updateSelfPath, _storeName);
                            $.store[_storeName].updateSelfComponents.push(_this);
                        }
                        _this.__$updateSelfPath_ = updateSelfPath;
                    }
                } else {
                    if (options.use) {
                        $.store.components.push(_this);
                        _this.__$updatePath_ = getPath(options.use);
                    }
                    if (options.useSelf) {
                        $.store.updateSelfComponents.push(_this);
                        _this.__$updateSelfPath_ = getPath(options.useSelf);
                    }
                }
                return _this;
            }
            _inherits(_class, _React$Component);
            _class.prototype.shouldComponentUpdate = function() {
                if (currentComponent === this) return !0; else return !isSelf;
            };
            _class.prototype.componentWillUnmount = function() {
                removeItem(this, $.store.components);
                removeItem(this, $.store.updateSelfComponents);
            };
            _class.prototype.render = function() {
                return options.render.apply(this, arguments);
            };
            return _class;
        }(React.Component), _class.css = options.css, _temp;
    }
    function removeItem(item, arr) {
        for (var i = 0, len = arr.length; i < len; i++) if (arr[i] === item) {
            arr.splice(i, 1);
            break;
        }
    }
    function observe(store, storeName) {
        store.components = [];
        store.updateSelfComponents = [];
        obaa(store.data, function(prop, val, old, path) {
            var patch = {};
            patch[fixPath(path + '-' + prop)] = !0;
            store.components.forEach(function(component) {
                var p = component.__$updatePath_;
                if (storeName) {
                    if (p && p[storeName] && needUpdate(patch, p[storeName])) {
                        update(component);
                        isSelf = !1;
                    }
                } else if (p && needUpdate(patch, p)) {
                    update(component);
                    isSelf = !1;
                }
            });
            store.updateSelfComponents.forEach(function(component) {
                var sp = component.__$updateSelfPath_;
                if (storeName) {
                    if (sp && sp[storeName] && needUpdate(patch, sp[storeName])) {
                        update(component);
                        isSelf = !0;
                        currentComponent = component;
                    }
                } else if (sp && needUpdate(patch, sp)) {
                    update(component);
                    isSelf = !0;
                    currentComponent = component;
                }
            });
        });
    }
    function update(component) {
        component.setState({
            __$id_: component.state.__$id_++
        });
    }
    function render(renderer, app, renderTo, store) {
        reset(store);
        renderer(app, 'string' == typeof renderTo ? document.querySelector(renderTo) : renderTo);
    }
    function reset(s) {
        if (s) {
            $.store = s;
            if ($.store.data) {
                isMultiStore = !1;
                observe($.store);
            } else {
                isMultiStore = !0;
                for (var key in $.store) if ($.store[key].data) observe($.store[key], key);
            }
        }
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
    var isSelf = !1;
    var currentComponent = null;
    var isMultiStore = !1;
    var Omis = {
        $: $,
        render: render,
        reset: reset
    };
    if ('undefined' != typeof module) module.exports = Omis; else self.Omis = Omis;
}(React);
//# sourceMappingURL=omis.js.map
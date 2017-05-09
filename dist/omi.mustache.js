/*!
 *  Omi v1.6.1 By dntzhang 
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Omi"] = factory();
	else
		root["Omi"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _omi = __webpack_require__(1);

	var _omi2 = _interopRequireDefault(_omi);

	var _mustache = __webpack_require__(10);

	var _mustache2 = _interopRequireDefault(_mustache);

	var _component = __webpack_require__(4);

	var _component2 = _interopRequireDefault(_component);

	var _store = __webpack_require__(9);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	_omi2['default'].template = _mustache2['default'].render;

	_omi2['default'].Store = _store2['default'];
	_omi2['default'].Component = _component2['default'];
	if (window.Omi) {
	    module.exports = window.Omi;
	} else {
	    window.Omi = _omi2['default'];
	    module.exports = _omi2['default'];
	}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var Omi = {};
	Omi.instances = {};
	Omi._instanceId = 0;
	Omi.getInstanceId = function () {
	    return Omi._instanceId++;
	};
	Omi.customTags = [];
	Omi.mapping = {};

	Omi.STYLEPREFIX = "omi_style_";
	Omi.STYLESCOPEDPREFIX = "omi_scoped_";

	Omi.style = {};

	Omi.componentConstructor = {};

	//fix ie bug
	if (typeof Object.assign != 'function') {
	    Object.assign = function (target) {
	        'use strict';

	        if (target == null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }

	        target = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source != null) {
	                for (var key in source) {
	                    if (Object.prototype.hasOwnProperty.call(source, key)) {
	                        target[key] = source[key];
	                    }
	                }
	            }
	        }
	        return target;
	    };
	}

	/**
	 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
	 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
	 * (technically, since host objects have been implementation-dependent,
	 * at least before ES6, IE hasn't needed to work this way).
	 * Also works on strings, fixes IE < 9 to allow an explicit undefined
	 * for the 2nd argument (as in Firefox), and prevents errors when
	 * called on other DOM objects.
	 */
	(function () {
	    'use strict';

	    var _slice = Array.prototype.slice;

	    try {
	        // Can't be used with DOM elements in IE < 9
	        _slice.call(document.documentElement);
	    } catch (e) {
	        // Fails in IE < 9
	        // This will work for genuine arrays, array-like objects,
	        // NamedNodeMap (attributes, entities, notations),
	        // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
	        // and will not fail on other DOM objects (as do DOM elements in IE < 9)
	        Array.prototype.slice = function (begin, end) {
	            // IE < 9 gets unhappy with an undefined end argument
	            end = typeof end !== 'undefined' ? end : this.length;

	            // For native Array objects, we use the native slice function
	            if (Object.prototype.toString.call(this) === '[object Array]') {
	                return _slice.call(this, begin, end);
	            }

	            // For array like object we handle it ourselves.
	            var i,
	                cloned = [],
	                size,
	                len = this.length;

	            // Handle negative value for "begin"
	            var start = begin || 0;
	            start = start >= 0 ? start : len + start;

	            // Handle negative value for "end"
	            var upTo = end ? end : len;
	            if (end < 0) {
	                upTo = len + end;
	            }

	            // Actual expected size of the slice
	            size = upTo - start;

	            if (size > 0) {
	                cloned = new Array(size);
	                if (this.charAt) {
	                    for (i = 0; i < size; i++) {
	                        cloned[i] = this.charAt(start + i);
	                    }
	                } else {
	                    for (i = 0; i < size; i++) {
	                        cloned[i] = this[start + i];
	                    }
	                }
	            }

	            return cloned;
	        };
	    }
	})();

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	function toArr(obj) {
	    var arr = [];
	    for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	            arr.push({ key: key, value: obj[key] });
	        }
	    }
	    return arr;
	}

	Omi.create = function (tagName, parent, setting) {
	    var u_setting = parent,
	        u_parent = Omi.Component;
	    if (arguments.length > 2) {
	        u_setting = setting;
	        u_parent = parent;
	    }
	    Omi.componentConstructor[tagName] = function (parent) {
	        _inherits(Obj, parent);

	        function Obj(data, server) {
	            _classCallCheck(this, Obj);
	            this.___omi_constructor_name = tagName;
	            return _possibleConstructorReturn(this, (Obj.__proto__ || Object.getPrototypeOf(Obj)).call(this, data, server));
	        }

	        _createClass(Obj, toArr(u_setting));

	        return Obj;
	    }(u_parent);

	    Omi.customTags.push(tagName);

	    return Omi.componentConstructor[tagName];
	};

	Omi.createStore = function (option) {

	    var Store = function (parent) {
	        _inherits(Obj, parent);

	        function Obj(data, isReady) {
	            _classCallCheck(this, Obj);
	            this.data = data;
	            option.methods.install && option.methods.install.call(this);
	            return _possibleConstructorReturn(this, (Obj.__proto__ || Object.getPrototypeOf(Obj)).call(this, data, isReady));
	        }

	        _createClass(Obj, toArr(option.methods));

	        return Obj;
	    }(Omi.Store);

	    return new Store(option.data, true);
	};

	Omi.mixIndex = function (array, key) {
	    var len = array.length,
	        indexName = key || "index";
	    for (var i = 0; i < len; i++) {
	        var item = array[i];
	        if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object") {
	            item[indexName] = i;
	        } else {
	            array[i] = { value: item };
	            array[i][indexName] = i;
	        }
	    }
	    return array;
	};

	Omi.$ = function (selector, context) {
	    if (context) {
	        return context.querySelector(selector);
	    } else {
	        return document.querySelector(selector);
	    }
	};

	Omi.$$ = function (selector, context) {
	    if (context) {
	        return Array.prototype.slice.call(context.querySelectorAll(selector));
	    } else {
	        return Array.prototype.slice.call(document.querySelectorAll(selector));
	    }
	};

	Omi.getClassFromString = function (str) {
	    if (str.indexOf('.') !== -1) {
	        //root is window
	        var arr = str.split('.');
	        var len = arr.length;
	        var current = window[arr[0]];
	        for (var i = 1; i < len; i++) {
	            current = current[arr[i]];
	        }
	        return current;
	    } else {
	        return Omi.componentConstructor[str];
	    }
	};

	//以前是Component的静态方法，移到omi下来，不然makehtml 在ie下child访问不到父亲的静态方法
	Omi.makeHTML = function (name, ctor) {
	    Omi.componentConstructor[name] = ctor;
	    Omi.componentConstructor[name.toLowerCase()] = ctor;
	    Omi.customTags.push(name, name.toLowerCase());
	    if (document.documentMode < 9) {
	        document.createElement(name.toLowerCase());
	    }
	};

	Omi.tag = Omi.makeHTML;

	Omi.render = function (component, renderTo, incrementOrOption) {
	    component.renderTo = typeof renderTo === "string" ? document.querySelector(renderTo) : renderTo;
	    if (typeof incrementOrOption === 'boolean') {
	        component._omi_increment = incrementOrOption;
	    } else if (incrementOrOption) {
	        component._omi_increment = incrementOrOption.increment;
	        if (incrementOrOption.store) {
	            if (incrementOrOption.store instanceof Omi.Store) {
	                component.$store = incrementOrOption.store;
	            } else {
	                component.$store = Omi.createStore(incrementOrOption.store);
	            }
	        }
	        component._omi_autoStoreToData = incrementOrOption.autoStoreToData;
	    }
	    component.install();
	    component._render(true);
	    component._childrenInstalled(component);
	    component.installed();
	    component._execInstalledHandlers();
	    return component;
	};

	Omi.get = function (name) {
	    return Omi.mapping[name];
	};

	Omi.plugins = {};

	Omi.extendPlugin = function (name, handler) {
	    Omi.plugins[name] = handler;
	};

	Omi.getParameters = function (dom, instance, types) {
	    var data = {};
	    var noop = function noop() {};
	    var methodMapping = {
	        stringType: function stringType(value) {
	            return value;
	        },
	        numberType: function numberType(value) {
	            return Number(value);
	        },
	        booleanType: function booleanType(value) {
	            if (value === 'true') {
	                return true;
	            } else if (value === 'false') {
	                return false;
	            } else {
	                return Boolean(value);
	            }
	        },
	        functionType: function functionType(value) {
	            if (value) {
	                var handler = instance[value.replace(/Omi.instances\[\d\]./, '')];
	                if (handler) {
	                    return handler.bind(instance);
	                } else {
	                    console.warn('You do not define [ ' + value + ' ] method in following component');
	                    console.warn(instance);
	                }
	            } else {
	                return noop;
	            }
	        }
	    };
	    Object.keys(types).forEach(function (type) {
	        types[type].forEach(function (name) {
	            var attr = dom.getAttribute(name);
	            if (attr !== null) {
	                data[name] = methodMapping[type](attr);
	            }
	        });
	    });

	    return data;
	};

	Omi.mixIndexToArray = function (arr, indexName) {
	    arr.forEach(function (item, index) {
	        item[indexName || 'index'] = index;
	    });
	};

	Omi.deletePlugin = function (name) {
	    delete Omi.plugins[name];
	};

	module.exports = Omi;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _omi = __webpack_require__(1);

	var _omi2 = _interopRequireDefault(_omi);

	var _style = __webpack_require__(5);

	var _style2 = _interopRequireDefault(_style);

	var _event = __webpack_require__(6);

	var _event2 = _interopRequireDefault(_event);

	var _morphdom = __webpack_require__(7);

	var _morphdom2 = _interopRequireDefault(_morphdom);

	var _html2json = __webpack_require__(8);

	var _html2json2 = _interopRequireDefault(_html2json);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Component = function () {
	    function Component(data, option) {
	        _classCallCheck(this, Component);

	        var componentOption = Object.assign({
	            server: false,
	            ignoreStoreData: false,
	            preventSelfUpdate: false,
	            selfDataFirst: false,
	            domDiffDisabled: false,
	            scopedSelfCSS: false
	        }, option);
	        this._omi_scopedSelfCSS = componentOption.scopedSelfCSS;
	        this._omi_preventSelfUpdate = componentOption.preventSelfUpdate;
	        this._omi_domDiffDisabled = componentOption.domDiffDisabled;
	        this._omi_ignoreStoreData = componentOption.ignoreStoreData;
	        //re render the server-side rendering html on the client-side
	        var type = Object.prototype.toString.call(data);
	        var isReRendering = type !== '[object Object]' && type !== '[object Undefined]';
	        if (isReRendering) {
	            this.renderTo = typeof data === "string" ? document.querySelector(data) : data;
	            this._hidden = this.renderTo.querySelector('.omi_scoped__hidden_data');
	            this.id = this._hidden.dataset.omiId;
	            this.data = JSON.parse(this._hidden.value);
	        } else {
	            this.data = data || {};
	            this._omi_server_rendering = componentOption.server;
	            this.id = this._omi_server_rendering ? 1000000 + _omi2['default'].getInstanceId() : _omi2['default'].getInstanceId();
	        }
	        this.refs = {};
	        this.children = [];

	        this.HTML = null;

	        _omi2['default'].instances[this.id] = this;
	        this.selfDataFirst = componentOption.selfDataFirst;

	        this._omi_scoped_attr = _omi2['default'].STYLESCOPEDPREFIX + this.id;
	        //this.BODY_ELEMENT = document.createElement('body')
	        this._preCSS = null;
	        this._omiGroupDataCounter = {};
	        this._omi_installedHandlers = null;
	        if (this._omi_server_rendering || isReRendering) {
	            this.install();
	            this._render(true);
	            this._childrenInstalled(this);
	            this.installed();
	            this._execInstalledHandlers();
	        }
	    }

	    _createClass(Component, [{
	        key: 'install',
	        value: function install() {}
	    }, {
	        key: 'installed',
	        value: function installed() {}
	    }, {
	        key: 'onInstalled',
	        value: function onInstalled(handler) {
	            if (!this._omi_installedHandlers) {
	                this._omi_installedHandlers = [];
	            }
	            this._omi_installedHandlers.push(handler);
	        }
	    }, {
	        key: '_execInstalledHandlers',
	        value: function _execInstalledHandlers() {
	            this._omi_installedHandlers && this._omi_installedHandlers.forEach(function (handler) {
	                handler();
	            });
	        }
	    }, {
	        key: 'uninstall',
	        value: function uninstall() {}
	    }, {
	        key: 'afterUpdate',
	        value: function afterUpdate() {}
	    }, {
	        key: 'beforeUpdate',
	        value: function beforeUpdate() {}
	    }, {
	        key: 'render',
	        value: function render() {}
	    }, {
	        key: 'style',
	        value: function style() {}
	    }, {
	        key: 'beforeRender',
	        value: function beforeRender() {}
	    }, {
	        key: 'useStore',
	        value: function useStore(store) {
	            var _this = this;

	            this.$$store = store;
	            var isInclude = false;
	            store.instances.forEach(function (instance) {
	                if (instance.id === _this.id) {
	                    isInclude = true;
	                }
	            });
	            if (!isInclude) {
	                store.instances.push(this);
	            }
	        }
	    }, {
	        key: 'updateSelf',
	        value: function updateSelf() {
	            this.beforeUpdate();
	            if (this.renderTo) {
	                this._render(false, true);
	            } else {
	                if (this._omi_preventSelfUpdate) return;
	                // update child node
	                if (this._omi_removed) {
	                    var hdNode = this._createHiddenNode();
	                    this.node.parentNode.replaceChild(hdNode, this.node);
	                    this.node = hdNode;
	                } else {
	                    (0, _morphdom2['default'])(this.node, (0, _event2['default'])(this._childRender(this._omiChildStr, true), this.id), {
	                        ignoreAttr: this._getIgnoreAttr()
	                    });

	                    this.node = document.querySelector("[" + this._omi_scoped_attr + "]");
	                    this._queryElements(this);
	                    this._fixForm();
	                }
	            }
	            this.afterUpdate();
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            this.beforeUpdate();
	            this._childrenBeforeUpdate(this);
	            this._omiGroupDataCounter = {};
	            if (this.renderTo) {
	                this._render();
	            } else {
	                if (this._omi_preventSelfUpdate) return;
	                // update child node
	                if (this._omi_removed) {
	                    var hdNode = this._createHiddenNode();
	                    this.node.parentNode.replaceChild(hdNode, this.node);
	                    this.node = hdNode;
	                } else {
	                    if (this._omi_domDiffDisabled) {
	                        this.node.parentNode.replaceChild(_morphdom2['default'].toElement((0, _event2['default'])(this._childRender(this._omiChildStr), this.id)), this.node);
	                    } else {
	                        (0, _morphdom2['default'])(this.node, (0, _event2['default'])(this._childRender(this._omiChildStr), this.id));
	                    }
	                    this.node = document.querySelector("[" + this._omi_scoped_attr + "]");
	                    this._queryElements(this);
	                    this._fixForm();
	                }
	            }

	            this._childrenAfterUpdate(this);
	            this.afterUpdate();
	        }
	    }, {
	        key: '_childrenBeforeUpdate',
	        value: function _childrenBeforeUpdate(root) {
	            var _this2 = this;

	            root.children.forEach(function (child) {
	                child.beforeUpdate();
	                child._omiGroupDataCounter = {};
	                _this2._childrenBeforeUpdate(child);
	            });
	        }
	    }, {
	        key: '_childrenAfterUpdate',
	        value: function _childrenAfterUpdate(root) {
	            var _this3 = this;

	            root.children.forEach(function (child) {
	                _this3._childrenAfterUpdate(child);
	                child.afterUpdate();
	            });
	        }
	    }, {
	        key: 'setData',
	        value: function setData(data, update) {
	            this.data = data;
	            if (update) {
	                this.update();
	            }
	        }
	    }, {
	        key: 'removeChild',
	        value: function removeChild(indexOrChild) {
	            var child = indexOrChild;
	            if (typeof indexOrChild === 'number') {
	                child = this.children[indexOrChild];
	            }

	            child.remove();
	        }
	    }, {
	        key: 'restoreChild',
	        value: function restoreChild(indexOrChild) {
	            var child = indexOrChild;
	            if (typeof indexOrChild === 'number') {
	                child = this.children[indexOrChild];
	            }

	            child.restore();
	        }
	    }, {
	        key: 'remove',
	        value: function remove() {
	            this._omi_removed = true;
	            this.update();
	            this.uninstall();
	        }
	    }, {
	        key: 'restore',
	        value: function restore() {
	            this._omi_removed = false;
	            this.update();
	            this.installed();
	            this._execInstalledHandlers();
	        }
	    }, {
	        key: '_render',
	        value: function _render(isFirst, isSelf) {
	            var _this4 = this;

	            if (this._omi_removed) {
	                var node = this._createHiddenNode();
	                if (!isFirst) {
	                    this.node.parentNode.replaceChild(node, this.node);
	                    this.node = node;
	                } else if (this.renderTo) {
	                    this.renderTo.appendChild(node);
	                }
	                return;
	            }
	            if (this._omi_autoStoreToData) {
	                if (!this._omi_ignoreStoreData) {
	                    this.data = this.$store.data;
	                }
	            }
	            this.beforeRender();
	            this._generateHTMLCSS();
	            if (!isSelf) {
	                this._extractChildren(this);
	            } else {
	                this._extractChildrenString(this);
	            }

	            this.children.forEach(function (item) {
	                _this4.HTML = _this4.HTML.replace(item._omiChildStr, isSelf ? item.node.outerHTML : item.HTML);
	            });

	            this.HTML = (0, _event2['default'])(this.HTML, this.id);
	            if (isFirst) {
	                if (this.renderTo) {
	                    if (this._omi_increment) {
	                        this.renderTo.insertAdjacentHTML('beforeend', this.HTML);
	                    } else {
	                        this.renderTo.innerHTML = this.HTML;
	                    }
	                }
	            } else {
	                if (this.HTML !== "") {
	                    if (this._omi_domDiffDisabled) {
	                        this.renderTo.innerHTML = this.HTML;
	                    } else {
	                        (0, _morphdom2['default'])(this.node, this.HTML, isSelf ? {
	                            ignoreAttr: this._getIgnoreAttr()
	                        } : null);
	                    }
	                } else {
	                    (0, _morphdom2['default'])(this.node, this._createHiddenNode());
	                }
	            }
	            //get node prop from parent node
	            if (this.renderTo) {
	                this.node = document.querySelector("[" + this._omi_scoped_attr + "]");
	                this._queryElements(this);
	                this._fixForm();
	            }
	        }
	    }, {
	        key: '_getIgnoreAttr',
	        value: function _getIgnoreAttr() {
	            var arr = [];
	            this.children.forEach(function (child) {
	                arr.push(child._omi_scoped_attr);
	            });
	            return arr;
	        }
	    }, {
	        key: '_childRender',
	        value: function _childRender(childStr, isSelf) {
	            var _this5 = this;

	            if (this._omi_removed) {
	                this.HTML = '<input type="hidden" omi_scoped_' + this.id + ' >';
	                return this.HTML;
	            }
	            //childStr = childStr.replace("<child", "<div").replace("/>", "></div>")
	            this._mergeData(childStr);
	            if (this.parent._omi_autoStoreToData) {
	                this._omi_autoStoreToData = true;
	                if (!this._omi_ignoreStoreData) {
	                    this.data = this.$store.data;
	                }
	            }
	            this.beforeRender();
	            this._fixSlot(this._generateHTMLCSS());
	            if (!isSelf) {
	                this._extractChildren(this);
	            } else {
	                this._extractChildrenString(this);
	            }

	            this.children.forEach(function (item) {
	                _this5.HTML = _this5.HTML.replace(item._omiChildStr, isSelf ? item.node.outerHTML : item.HTML);
	            });
	            this.HTML = (0, _event2['default'])(this.HTML, this.id);
	            return this.HTML;
	        }
	    }, {
	        key: '_fixSlot',
	        value: function _fixSlot(shareAttr) {
	            var _this6 = this;

	            if (!this._omi_slotContent) return;
	            this._omi_slotContent = this._scopedAttr(this._omi_slotContent, this._omi_scoped_attr, shareAttr);
	            var nodes = _morphdom2['default'].toElements(this._omi_slotContent);
	            var slotMatch = this.HTML.match(/<slot[\s\S]*?<\/slot>/g);
	            if (nodes.length === 1 && slotMatch && slotMatch.length === 1) {
	                this.HTML = this.HTML.replace(/<slot[\s\S]*?<\/slot>/, this._omi_slotContent);
	            } else {
	                nodes.sort(function (a, b) {
	                    return parseInt(a.getAttribute('slot-index')) - parseInt(b.getAttribute('slot-index'));
	                });
	                nodes.forEach(function (node) {
	                    _this6.HTML = _this6.HTML.replace(/<slot[\s\S]*?<\/slot>/, node.outerHTML);
	                });
	            }
	        }
	    }, {
	        key: '_queryElements',
	        value: function _queryElements(current) {
	            current._mixRefs();
	            current._execPlugins();
	            current.children.forEach(function (item) {
	                item.node = current.node.querySelector("[" + _omi2['default'].STYLESCOPEDPREFIX + item.id + "]");
	                //recursion get node prop from parent node
	                item.node && current._queryElements(item);
	            });
	        }
	    }, {
	        key: '_mixRefs',
	        value: function _mixRefs() {
	            var _this7 = this;

	            var nodes = _omi2['default'].$$('*[ref]', this.node);
	            nodes.forEach(function (node) {
	                if (node.hasAttribute(_this7._omi_scoped_attr)) {
	                    _this7.refs[node.getAttribute('ref')] = node;
	                }
	            });
	            var attr = this.node.getAttribute('ref');
	            if (attr) {
	                this.refs[attr] = this.node;
	            }
	        }
	    }, {
	        key: '_execPlugins',
	        value: function _execPlugins() {
	            var _this8 = this;

	            Object.keys(_omi2['default'].plugins).forEach(function (item) {
	                var nodes = _omi2['default'].$$('*[' + item + ']', _this8.node);
	                nodes.forEach(function (node) {
	                    if (node.hasAttribute(_this8._omi_scoped_attr)) {
	                        _omi2['default'].plugins[item](node, _this8);
	                    }
	                });
	                if (_this8.node.hasAttribute(item)) {
	                    _omi2['default'].plugins[item](_this8.node, _this8);
	                }
	            });
	        }
	    }, {
	        key: '_childrenInstalled',
	        value: function _childrenInstalled(root) {
	            var _this9 = this;

	            root.children.forEach(function (child) {
	                _this9._childrenInstalled(child);
	                child.installed();
	                child._execInstalledHandlers();
	            });
	        }
	    }, {
	        key: '_fixForm',
	        value: function _fixForm() {

	            _omi2['default'].$$('input', this.node).forEach(function (element) {
	                var type = element.type.toLowerCase();
	                if (element.getAttribute('value') === '') {
	                    element.value = '';
	                }
	                if (type === 'checked' || type === 'radio') {
	                    if (element.hasAttribute('checked')) {
	                        element.checked = 'checked';
	                    } else {
	                        element.checked = false;
	                    }
	                }
	            });

	            _omi2['default'].$$('textarea', this.node).forEach(function (textarea) {
	                textarea.value = textarea.getAttribute('value');
	            });

	            _omi2['default'].$$('select', this.node).forEach(function (select) {
	                var value = select.getAttribute('value');
	                if (value) {
	                    _omi2['default'].$$('option', select).forEach(function (option) {
	                        if (value === option.getAttribute('value')) {
	                            option.setAttribute('selected', 'selected');
	                        }
	                    });
	                } else {
	                    var firstOption = _omi2['default'].$$('option', select)[0];
	                    firstOption && firstOption.setAttribute('selected', 'selected');
	                }
	            });
	        }
	    }, {
	        key: '_replaceTags',
	        value: function _replaceTags(array, html, updateSelf) {
	            var _this10 = this;

	            if (_omi2['default'].customTags.length === 0) return;
	            var str = array.join("|");
	            var reg = new RegExp('<(' + str + '+)((?:\\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\\s*=\\s*(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>\\s]+))?)*)\\s*((\\/>)|>(([\\s\\S]*?)<\\/\\1>))', 'g');
	            var index = 0;
	            return html.replace(reg, function (m, a, b, c, d, e, f) {
	                if (updateSelf) {
	                    var cmi = _this10.children[index];
	                    if (cmi && cmi.___omi_constructor_name === a) {
	                        cmi._omiChildStr = m;
	                    }
	                } else {
	                    _this10._initComponentByString(a, m, f, index++, _this10);
	                }
	            });
	        }
	    }, {
	        key: '_createHiddenNode',
	        value: function _createHiddenNode() {
	            var hdNode = document.createElement("input");
	            hdNode.setAttribute("type", "hidden");
	            hdNode.setAttribute(this._omi_scoped_attr, '');
	            return hdNode;
	        }
	    }, {
	        key: '_mergeData',
	        value: function _mergeData(childStr) {
	            if (this.selfDataFirst) {
	                this.data = Object.assign({}, this._getDataset(childStr), this.data);
	            } else {
	                this.data = Object.assign({}, this.data, this._getDataset(childStr));
	            }
	        }
	    }, {
	        key: '_generateHTMLCSS',
	        value: function _generateHTMLCSS() {
	            this.CSS = (this.style() || '').replace(/<\/?style>/g, '');
	            var shareAttr = this.___omi_constructor_name ? _omi2['default'].STYLESCOPEDPREFIX + this.___omi_constructor_name.toLowerCase() : this._omi_scoped_attr;
	            if (this.CSS) {
	                if (this._omi_scopedSelfCSS || !_omi2['default'].style[shareAttr]) {
	                    this.CSS = _style2['default'].scoper(this.CSS, this._omi_scopedSelfCSS ? "[" + this._omi_scoped_attr + "]" : "[" + shareAttr + "]");
	                    _omi2['default'].style[shareAttr] = this.CSS;
	                    if (this.CSS !== this._preCSS && !this._omi_server_rendering) {
	                        _style2['default'].addStyle(this.CSS, this.id);
	                        this._preCSS = this.CSS;
	                    }
	                }
	            }
	            var tpl = this.render();
	            this.HTML = this._scopedAttr(_omi2['default'].template(tpl ? tpl : "", this.data), this._omi_scoped_attr, shareAttr).trim();
	            if (this._omi_server_rendering) {
	                this.HTML = '\r\n<style id="' + _omi2['default'].STYLEPREFIX + this.id + '">\r\n' + this.CSS + '\r\n</style>\r\n' + this.HTML;
	                this.HTML += '\r\n<input type="hidden" data-omi-id="' + this.id + '" class="' + _omi2['default'].STYLESCOPEDPREFIX + '_hidden_data" value=\'' + JSON.stringify(this.data) + '\'  />\r\n';
	            }

	            return shareAttr;
	        }
	    }, {
	        key: '_scopedAttr',
	        value: function _scopedAttr(html, id, shareAtrr) {
	            var _this11 = this;

	            return html.replace(/<[^/]([A-Za-z]*)[^>]*>/g, function (m) {
	                var str = m.split(" ")[0].replace(">", "");
	                if (_this11._omi_scopedSelfCSS || !_this11.___omi_constructor_name) {
	                    return m.replace(str, str + " " + id);
	                } else {
	                    return m.replace(str, str + " " + id + " " + shareAtrr);
	                }
	            });
	        }
	    }, {
	        key: '_getDataset',
	        value: function _getDataset(childStr) {
	            var _this12 = this;

	            var json = (0, _html2json2['default'])(childStr);
	            var attr = json.child[0].attr;
	            var baseData = {};
	            Object.keys(attr).forEach(function (key) {
	                var value = attr[key];
	                if (key.indexOf('on') === 0) {
	                    var handler = _this12.parent[value];
	                    if (handler) {
	                        baseData[_this12._capitalize(key)] = handler.bind(_this12.parent);
	                    }
	                } else if (key.indexOf('data-') === 0) {
	                    _this12._dataset[_this12._capitalize(key.replace('data-', ''))] = value;
	                } else if (key.indexOf(':data-') === 0) {
	                    _this12._dataset[_this12._capitalize(key.replace(':data-', ''))] = eval('(' + value + ')');
	                } else if (key.indexOf('::data-') === 0) {
	                    _this12._dataset[_this12._capitalize(key.replace('::data-', ''))] = _this12._extractPropertyFromString(value, _this12.parent);
	                } else if (key === 'data') {
	                    _this12._dataset = _this12._extractPropertyFromString(value, _this12.parent);
	                } else if (key === ':data') {
	                    _this12._dataset = eval('(' + value + ')');
	                } else if (key === 'group-data') {
	                    _this12._dataset = _this12._extractPropertyFromString(value, _this12.parent)[_this12._omi_groupDataIndex];
	                }
	            });

	            return Object.assign(baseData, this._dataset);
	        }
	    }, {
	        key: '_capitalize',
	        value: function _capitalize(str) {
	            str = str.toLowerCase();
	            str = str.replace(/\b\w+\b/g, function (word) {
	                return word.substring(0, 1).toUpperCase() + word.substring(1);
	            }).replace(/-/g, '');
	            return str.substring(0, 1).toLowerCase() + str.substring(1);
	        }
	    }, {
	        key: '_extractPropertyFromString',
	        value: function _extractPropertyFromString(str, instance) {
	            var arr = str.replace(/['|"|\]]/g, '').replace(/\[/g, '.').split('.');
	            var current = instance;
	            arr.forEach(function (prop) {
	                current = current[prop];
	            });
	            arr = null;
	            return current;
	        }
	    }, {
	        key: '_extractChildrenString',
	        value: function _extractChildrenString(child) {
	            this._replaceTags(_omi2['default'].customTags, child.HTML, true);
	        }
	    }, {
	        key: '_extractChildren',
	        value: function _extractChildren(child) {
	            this._replaceTags(_omi2['default'].customTags, child.HTML);
	        }
	    }, {
	        key: '_initComponentByString',
	        value: function _initComponentByString(name, childStr, slotContent, i, child) {
	            var _this13 = this;

	            var json = (0, _html2json2['default'])(childStr);
	            var attr = json.child[0].attr;
	            var cmi = this.children[i];
	            //if not first time to invoke _extractChildren method
	            if (cmi && cmi.___omi_constructor_name === name) {
	                cmi._omiChildStr = childStr;
	                cmi._omi_slotContent = slotContent;
	                Object.keys(attr).forEach(function (key) {
	                    var value = attr[key];
	                    if (key === 'group-data') {
	                        if (child._omiGroupDataCounter.hasOwnProperty(value)) {
	                            child._omiGroupDataCounter[value]++;
	                        } else {
	                            child._omiGroupDataCounter[value] = 0;
	                        }
	                        cmi._omi_groupDataIndex = child._omiGroupDataCounter[value];
	                    }
	                });

	                cmi._childRender(childStr);
	            } else {
	                var baseData = {};
	                var dataset = {};

	                var groupDataIndex = null;
	                var omiID = null;
	                var instanceName = null;
	                var _omi_option = {};

	                Object.keys(attr).forEach(function (key) {
	                    var value = attr[key];
	                    if (key.indexOf('on') === 0) {
	                        var handler = child[value];
	                        if (handler) {
	                            baseData[_this13._capitalize(key)] = handler.bind(child);
	                        }
	                    } else if (key === 'omi-id') {
	                        omiID = value;
	                    } else if (key === 'name') {
	                        instanceName = value;
	                    } else if (key === 'group-data') {
	                        if (child._omiGroupDataCounter.hasOwnProperty(value)) {
	                            child._omiGroupDataCounter[value]++;
	                        } else {
	                            child._omiGroupDataCounter[value] = 0;
	                        }
	                        groupDataIndex = child._omiGroupDataCounter[value];
	                        dataset = _this13._extractPropertyFromString(value, child)[groupDataIndex];
	                    } else if (key.indexOf('data-') === 0) {
	                        dataset[_this13._capitalize(key.replace('data-', ''))] = value;
	                    } else if (key.indexOf(':data-') === 0) {
	                        dataset[_this13._capitalize(key.replace(':data-', ''))] = eval('(' + value + ')');
	                    } else if (key.indexOf('::data-') === 0) {
	                        dataset[_this13._capitalize(key.replace('::data-', ''))] = _this13._extractPropertyFromString(value, child);
	                    } else if (key === 'data') {
	                        dataset = _this13._extractPropertyFromString(value, child);
	                    } else if (key === ':data') {
	                        dataset = eval('(' + value + ')');
	                    } else if (key === 'preventSelfUpdate' || key === 'psu') {
	                        _omi_option.preventSelfUpdate = true;
	                    } else if (key === 'selfDataFirst' || key === 'sdf') {
	                        _omi_option.selfDataFirst = true;
	                    } else if (key === 'domDiffDisabled' || key === 'ddd') {
	                        _omi_option.domDiffDisabled = true;
	                    } else if (key === 'ignoreStoreData' || key === 'isd') {
	                        _omi_option.ignoreStoreData = true;
	                    } else if (key === 'scopedSelfCSS' || key === 'ssc') {
	                        _omi_option.scopedSelfCSS = true;
	                    }
	                });

	                var ChildClass = _omi2['default'].getClassFromString(name);
	                if (!ChildClass) throw "Can't find Class called [" + name + "]";
	                var sub_child = new ChildClass(Object.assign(baseData, dataset), _omi_option);
	                sub_child._omi_groupDataIndex = groupDataIndex;
	                sub_child._omiChildStr = childStr;
	                sub_child._omi_slotContent = slotContent;
	                sub_child.parent = child;
	                sub_child.$store = child.$store;
	                sub_child.___omi_constructor_name = name;
	                sub_child._dataset = {};
	                sub_child.install();

	                omiID && (_omi2['default'].mapping[omiID] = sub_child);
	                instanceName && (child[instanceName] = sub_child);

	                if (!cmi) {
	                    child.children.push(sub_child);
	                } else {
	                    child.children[i] = sub_child;
	                }

	                sub_child._childRender(childStr);
	            }
	        }
	    }]);

	    return Component;
	}();

	exports['default'] = Component;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _omi = __webpack_require__(1);

	var _omi2 = _interopRequireDefault(_omi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	//many thanks to https://github.com/thomaspark/scoper/
	function scoper(css, prefix) {
	    //https://www.w3.org/TR/css-syntax-3/#lexical
	    css = css.replace(/\/\*[^*]*\*+([^/][^*]*\*+)*\//g, '');

	    var re = new RegExp("([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{}]*{)|\s*{)", "g");
	    /**
	     * Example:
	     *
	     * .classname::pesudo { color:red }
	     *
	     * g1 is normal selector `.classname`
	     * g2 is pesudo class or pesudo element
	     * g3 is the suffix
	     */
	    css = css.replace(re, function (g0, g1, g2, g3) {
	        if (typeof g2 === "undefined") {
	            g2 = "";
	        }

	        if (g1.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
	            return g1 + g2 + g3;
	        }

	        var appendClass = g1.replace(/(\s*)$/, "") + prefix + g2;
	        var prependClass = prefix + " " + g1.trim() + g2;
	        return appendClass + "," + prependClass + g3;
	    });

	    return css;
	}

	function addStyle(cssText, id) {
	    var ele = document.getElementById(_omi2['default'].STYLEPREFIX + id),
	        head = document.getElementsByTagName('head')[0];
	    if (ele && ele.parentNode === head) {
	        head.removeChild(ele);
	    }

	    var someThingStyles = document.createElement('style');
	    head.appendChild(someThingStyles);
	    someThingStyles.setAttribute('type', 'text/css');
	    someThingStyles.setAttribute('id', _omi2['default'].STYLEPREFIX + id);
	    if (!!window.ActiveXObject) {
	        someThingStyles.styleSheet.cssText = cssText;
	    } else {
	        someThingStyles.textContent = cssText;
	    }
	}

	exports['default'] = {
	    scoper: scoper,
	    addStyle: addStyle
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function scopedEvent(tpl, id) {
	    return tpl.replace(/<[\s\S]*?>/g, function (item) {
	        return item.replace(/on(abort|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|pause|play|playing|progress|ratechange|reset|resize|scroll|seeked|seeking|select|show|stalled|submit|suspend|timeupdate|toggle|volumechange|waiting|autocomplete|autocompleteerror|beforecopy|beforecut|beforepaste|copy|cut|paste|search|selectstart|wheel|webkitfullscreenchange|webkitfullscreenerror|touchstart|touchmove|touchend|touchcancel|pointerdown|pointerup|pointercancel|pointermove|pointerover|pointerout|pointerenter|pointerleave|Abort|Blur|Cancel|CanPlay|CanPlayThrough|Change|Click|Close|ContextMenu|CueChange|DblClick|Drag|DragEnd|DragEnter|DragLeave|DragOver|DragStart|Drop|DurationChange|Emptied|Ended|Error|Focus|Input|Invalid|KeyDown|KeyPress|KeyUp|Load|LoadedData|LoadedMetadata|LoadStart|MouseDown|MouseEnter|MouseLeave|MouseMove|MouseOut|MouseOver|MouseUp|MouseWheel|Pause|Play|Playing|Progress|RateChange|Reset|Resize|Scroll|Seeked|Seeking|Select|Show|Stalled|Submit|Suspend|TimeUpdate|Toggle|VolumeChange|Waiting|AutoComplete|AutoCompleteError|BeforeCopy|BeforeCut|BeforePaste|Copy|Cut|Paste|Search|SelectStart|Wheel|WebkitFullScreenChange|WebkitFullScreenError|TouchStart|TouchMove|TouchEnd|TouchCancel|PointerDown|PointerUp|PointerCancel|PointerMove|PointerOver|PointerOut|PointerEnter|PointerLeave)=(('([\s\S]*?)')|("([\s\S]*?)"))/g, function (eventStr, b, c) {
	            if (c.indexOf('Omi.instances[') === 1) {
	                return eventStr;
	            } else if (c.lastIndexOf(')') === c.length - 2) {
	                return eventStr.replace(/=(['|"])/, '=$1Omi.instances[' + id + '].');
	            } else {
	                var str = eventStr.replace(/=(['|"])/, '=$1Omi.instances[' + id + '].');
	                return str.substr(0, str.length - 1) + "(event)" + str.substr(str.length - 1, 1);
	            }
	        });
	    });
	}

	exports['default'] = scopedEvent;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (global, factory) {
	    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.morphdom = factory();
	})(undefined, function () {
	    'use strict';

	    var range; // Create a range object for efficently rendering strings to elements.
	    var NS_XHTML = 'http://www.w3.org/1999/xhtml';

	    var doc = typeof document === 'undefined' ? undefined : document;

	    var testEl = doc ? doc.body || doc.createElement('div') : {};

	    // Fixes <https://github.com/patrick-steele-idem/morphdom/issues/32>
	    // (IE7+ support) <=IE7 does not support el.hasAttribute(name)
	    var actualHasAttributeNS;

	    if (testEl.hasAttributeNS) {
	        actualHasAttributeNS = function actualHasAttributeNS(el, namespaceURI, name) {
	            return el.hasAttributeNS(namespaceURI, name);
	        };
	    } else if (testEl.hasAttribute) {
	        actualHasAttributeNS = function actualHasAttributeNS(el, namespaceURI, name) {
	            return el.hasAttribute(name);
	        };
	    } else {
	        actualHasAttributeNS = function actualHasAttributeNS(el, namespaceURI, name) {
	            return el.getAttributeNode(namespaceURI, name) != null;
	        };
	    }

	    var hasAttributeNS = actualHasAttributeNS;

	    function toElement(str) {
	        if (!range && doc.createRange) {
	            range = doc.createRange();
	            range.selectNode(doc.body);
	        }

	        var fragment;
	        if (range && range.createContextualFragment) {
	            fragment = range.createContextualFragment(str);
	        } else {
	            fragment = doc.createElement('body');
	            fragment.innerHTML = str;
	        }
	        return fragment.childNodes[0];
	    }

	    function toElements(str) {
	        if (!range && doc.createRange) {
	            range = doc.createRange();
	            range.selectNode(doc.body);
	        }

	        var fragment;
	        if (range && range.createContextualFragment) {
	            fragment = range.createContextualFragment(str);
	        } else {
	            fragment = doc.createElement('body');
	            fragment.innerHTML = str;
	        }

	        var arr = [],
	            i = 0,
	            len = fragment.childNodes.length;
	        for (; i < len; i++) {
	            var item = fragment.childNodes[i];
	            if (item.nodeType === 1) {
	                arr.push(item);
	            }
	        }
	        return arr;
	    }

	    /**
	     * Returns true if two node's names are the same.
	     *
	     * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
	     *       nodeName and different namespace URIs.
	     *
	     * @param {Element} a
	     * @param {Element} b The target element
	     * @return {boolean}
	     */
	    function compareNodeNames(fromEl, toEl) {
	        var fromNodeName = fromEl.nodeName;
	        var toNodeName = toEl.nodeName;

	        if (fromNodeName === toNodeName) {
	            return true;
	        }

	        if (toEl.actualize && fromNodeName.charCodeAt(0) < 91 && /* from tag name is upper case */
	        toNodeName.charCodeAt(0) > 90 /* target tag name is lower case */) {
	                // If the target element is a virtual DOM node then we may need to normalize the tag name
	                // before comparing. Normal HTML elements that are in the "http://www.w3.org/1999/xhtml"
	                // are converted to upper case
	                return fromNodeName === toNodeName.toUpperCase();
	            } else {
	            return false;
	        }
	    }

	    /**
	     * Create an element, optionally with a known namespace URI.
	     *
	     * @param {string} name the element name, e.g. 'div' or 'svg'
	     * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
	     * its `xmlns` attribute or its inferred namespace.
	     *
	     * @return {Element}
	     */
	    function createElementNS(name, namespaceURI) {
	        return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
	    }

	    /**
	     * Copies the children of one DOM element to another DOM element
	     */
	    function moveChildren(fromEl, toEl) {
	        var curChild = fromEl.firstChild;
	        while (curChild) {
	            var nextChild = curChild.nextSibling;
	            toEl.appendChild(curChild);
	            curChild = nextChild;
	        }
	        return toEl;
	    }

	    function morphAttrs(fromNode, toNode) {
	        var attrs = toNode.attributes;
	        var i;
	        var attr;
	        var attrName;
	        var attrNamespaceURI;
	        var attrValue;
	        var fromValue;

	        for (i = attrs.length - 1; i >= 0; --i) {
	            attr = attrs[i];
	            attrName = attr.name;
	            attrNamespaceURI = attr.namespaceURI;
	            attrValue = attr.value;

	            if (attrNamespaceURI) {
	                attrName = attr.localName || attrName;
	                fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);

	                if (fromValue !== attrValue) {
	                    fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
	                }
	            } else {
	                fromValue = fromNode.getAttribute(attrName);

	                if (fromValue !== attrValue) {
	                    fromNode.setAttribute(attrName, attrValue);
	                }
	            }
	        }

	        // Remove any extra attributes found on the original DOM element that
	        // weren't found on the target element.
	        attrs = fromNode.attributes;

	        for (i = attrs.length - 1; i >= 0; --i) {
	            attr = attrs[i];
	            if (attr.specified !== false) {
	                attrName = attr.name;
	                attrNamespaceURI = attr.namespaceURI;

	                if (attrNamespaceURI) {
	                    attrName = attr.localName || attrName;

	                    if (!hasAttributeNS(toNode, attrNamespaceURI, attrName)) {
	                        fromNode.removeAttributeNS(attrNamespaceURI, attrName);
	                    }
	                } else {
	                    if (!hasAttributeNS(toNode, null, attrName)) {
	                        fromNode.removeAttribute(attrName);
	                    }
	                }
	            }
	        }
	    }

	    function syncBooleanAttrProp(fromEl, toEl, name) {
	        if (fromEl[name] !== toEl[name]) {
	            fromEl[name] = toEl[name];
	            if (fromEl[name]) {
	                fromEl.setAttribute(name, '');
	            } else {
	                fromEl.removeAttribute(name, '');
	            }
	        }
	    }

	    var specialElHandlers = {
	        /**
	         * Needed for IE. Apparently IE doesn't think that "selected" is an
	         * attribute when reading over the attributes using selectEl.attributes
	         */
	        OPTION: function OPTION(fromEl, toEl) {
	            syncBooleanAttrProp(fromEl, toEl, 'selected');
	        },
	        /**
	         * The "value" attribute is special for the <input> element since it sets
	         * the initial value. Changing the "value" attribute without changing the
	         * "value" property will have no effect since it is only used to the set the
	         * initial value.  Similar for the "checked" attribute, and "disabled".
	         */
	        INPUT: function INPUT(fromEl, toEl) {
	            syncBooleanAttrProp(fromEl, toEl, 'checked');
	            syncBooleanAttrProp(fromEl, toEl, 'disabled');

	            if (fromEl.value !== toEl.value) {
	                fromEl.value = toEl.value;
	            }

	            if (!hasAttributeNS(toEl, null, 'value')) {
	                fromEl.removeAttribute('value');
	            }
	        },

	        TEXTAREA: function TEXTAREA(fromEl, toEl) {
	            var newValue = toEl.value;
	            if (fromEl.value !== newValue) {
	                fromEl.value = newValue;
	            }

	            if (fromEl.firstChild) {
	                // Needed for IE. Apparently IE sets the placeholder as the
	                // node value and vise versa. This ignores an empty update.
	                if (newValue === '' && fromEl.firstChild.nodeValue === fromEl.placeholder) {
	                    return;
	                }

	                fromEl.firstChild.nodeValue = newValue;
	            }
	        },
	        SELECT: function SELECT(fromEl, toEl) {
	            if (!hasAttributeNS(toEl, null, 'multiple')) {
	                var selectedIndex = -1;
	                var i = 0;
	                var curChild = toEl.firstChild;
	                while (curChild) {
	                    var nodeName = curChild.nodeName;
	                    if (nodeName && nodeName.toUpperCase() === 'OPTION') {
	                        if (hasAttributeNS(curChild, null, 'selected')) {
	                            selectedIndex = i;
	                            break;
	                        }
	                        i++;
	                    }
	                    curChild = curChild.nextSibling;
	                }

	                fromEl.selectedIndex = i;
	            }
	        }
	    };

	    var ELEMENT_NODE = 1;
	    var TEXT_NODE = 3;
	    var COMMENT_NODE = 8;

	    function noop() {}

	    function defaultGetNodeKey(node) {
	        return node.id;
	    }

	    function morphdomFactory(morphAttrs) {

	        return function morphdom(fromNode, toNode, options) {
	            if (!options) {
	                options = {};
	            }

	            if (typeof toNode === 'string') {
	                if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML') {
	                    var toNodeHtml = toNode;
	                    toNode = doc.createElement('html');
	                    toNode.innerHTML = toNodeHtml;
	                } else {
	                    toNode = toElement(toNode);
	                }
	            }

	            var getNodeKey = options.getNodeKey || defaultGetNodeKey;
	            var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
	            var onNodeAdded = options.onNodeAdded || noop;
	            var onBeforeElUpdated = options.onBeforeElUpdated || noop;
	            var onElUpdated = options.onElUpdated || noop;
	            var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
	            var onNodeDiscarded = options.onNodeDiscarded || noop;
	            var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
	            var childrenOnly = options.childrenOnly === true;
	            var ignoreAttr = options.ignoreAttr;
	            // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
	            var fromNodesLookup = {};
	            var keyedRemovalList;

	            function addKeyedRemoval(key) {
	                if (keyedRemovalList) {
	                    keyedRemovalList.push(key);
	                } else {
	                    keyedRemovalList = [key];
	                }
	            }

	            function walkDiscardedChildNodes(node, skipKeyedNodes) {
	                if (node.nodeType === ELEMENT_NODE) {
	                    var curChild = node.firstChild;
	                    while (curChild) {

	                        var key = undefined;

	                        if (skipKeyedNodes && (key = getNodeKey(curChild))) {
	                            // If we are skipping keyed nodes then we add the key
	                            // to a list so that it can be handled at the very end.
	                            addKeyedRemoval(key);
	                        } else {
	                            // Only report the node as discarded if it is not keyed. We do this because
	                            // at the end we loop through all keyed elements that were unmatched
	                            // and then discard them in one final pass.
	                            onNodeDiscarded(curChild);
	                            if (curChild.firstChild) {
	                                walkDiscardedChildNodes(curChild, skipKeyedNodes);
	                            }
	                        }

	                        curChild = curChild.nextSibling;
	                    }
	                }
	            }

	            /**
	             * Removes a DOM node out of the original DOM
	             *
	             * @param  {Node} node The node to remove
	             * @param  {Node} parentNode The nodes parent
	             * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
	             * @return {undefined}
	             */
	            function removeNode(node, parentNode, skipKeyedNodes) {
	                if (onBeforeNodeDiscarded(node) === false) {
	                    return;
	                }

	                if (parentNode) {
	                    parentNode.removeChild(node);
	                }

	                onNodeDiscarded(node);
	                walkDiscardedChildNodes(node, skipKeyedNodes);
	            }

	            // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
	            // function indexTree(root) {
	            //     var treeWalker = document.createTreeWalker(
	            //         root,
	            //         NodeFilter.SHOW_ELEMENT);
	            //
	            //     var el;
	            //     while((el = treeWalker.nextNode())) {
	            //         var key = getNodeKey(el);
	            //         if (key) {
	            //             fromNodesLookup[key] = el;
	            //         }
	            //     }
	            // }

	            // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
	            //
	            // function indexTree(node) {
	            //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
	            //     var el;
	            //     while((el = nodeIterator.nextNode())) {
	            //         var key = getNodeKey(el);
	            //         if (key) {
	            //             fromNodesLookup[key] = el;
	            //         }
	            //     }
	            // }

	            function indexTree(node) {
	                if (node.nodeType === ELEMENT_NODE) {
	                    var curChild = node.firstChild;
	                    while (curChild) {
	                        var key = getNodeKey(curChild);
	                        if (key) {
	                            fromNodesLookup[key] = curChild;
	                        }

	                        // Walk recursively
	                        indexTree(curChild);

	                        curChild = curChild.nextSibling;
	                    }
	                }
	            }

	            indexTree(fromNode);

	            function handleNodeAdded(el) {
	                onNodeAdded(el);

	                var curChild = el.firstChild;
	                while (curChild) {
	                    var nextSibling = curChild.nextSibling;

	                    var key = getNodeKey(curChild);
	                    if (key) {
	                        var unmatchedFromEl = fromNodesLookup[key];
	                        if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
	                            curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
	                            morphEl(unmatchedFromEl, curChild);
	                        }
	                    }

	                    handleNodeAdded(curChild);
	                    curChild = nextSibling;
	                }
	            }

	            function morphEl(fromEl, toEl, childrenOnly) {
	                if (ignoreAttr) {
	                    var ignoreF = false,
	                        ignoreT = false,
	                        attrF = null,
	                        attrT = null;
	                    for (var _i = 0, _len = ignoreAttr.length; _i < _len; _i++) {
	                        var selector = ignoreAttr[_i];
	                        if (!ignoreF && fromEl.getAttribute(selector) !== null) {
	                            ignoreF = true;
	                            attrF = selector;
	                        }
	                        if (!ignoreT && toEl.getAttribute(selector) !== null) {
	                            ignoreT = true;
	                            attrT = selector;
	                        }
	                        if (ignoreF && ignoreT) break;
	                    }
	                    if (ignoreF && ignoreT && attrF === attrT) {
	                        return;
	                    }
	                }
	                var toElKey = getNodeKey(toEl);
	                var curFromNodeKey;

	                if (toElKey) {
	                    // If an element with an ID is being morphed then it is will be in the final
	                    // DOM so clear it out of the saved elements collection
	                    delete fromNodesLookup[toElKey];
	                }

	                if (toNode.isSameNode && toNode.isSameNode(fromNode)) {
	                    return;
	                }

	                if (!childrenOnly) {
	                    if (onBeforeElUpdated(fromEl, toEl) === false) {
	                        return;
	                    }

	                    morphAttrs(fromEl, toEl);
	                    onElUpdated(fromEl);

	                    if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
	                        return;
	                    }
	                }

	                if (fromEl.nodeName !== 'TEXTAREA') {
	                    var curToNodeChild = toEl.firstChild;
	                    var curFromNodeChild = fromEl.firstChild;
	                    var curToNodeKey;

	                    var fromNextSibling;
	                    var toNextSibling;
	                    var matchingFromEl;

	                    outer: while (curToNodeChild) {
	                        toNextSibling = curToNodeChild.nextSibling;
	                        curToNodeKey = getNodeKey(curToNodeChild);

	                        while (curFromNodeChild) {
	                            fromNextSibling = curFromNodeChild.nextSibling;

	                            if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
	                                curToNodeChild = toNextSibling;
	                                curFromNodeChild = fromNextSibling;
	                                continue outer;
	                            }

	                            curFromNodeKey = getNodeKey(curFromNodeChild);

	                            var curFromNodeType = curFromNodeChild.nodeType;

	                            var isCompatible = undefined;

	                            if (curFromNodeType === curToNodeChild.nodeType) {
	                                if (curFromNodeType === ELEMENT_NODE) {
	                                    // Both nodes being compared are Element nodes

	                                    if (curToNodeKey) {
	                                        // The target node has a key so we want to match it up with the correct element
	                                        // in the original DOM tree
	                                        if (curToNodeKey !== curFromNodeKey) {
	                                            // The current element in the original DOM tree does not have a matching key so
	                                            // let's check our lookup to see if there is a matching element in the original
	                                            // DOM tree
	                                            if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
	                                                if (curFromNodeChild.nextSibling === matchingFromEl) {
	                                                    // Special case for single element removals. To avoid removing the original
	                                                    // DOM node out of the tree (since that can break CSS transitions, etc.),
	                                                    // we will instead discard the current node and wait until the next
	                                                    // iteration to properly match up the keyed target element with its matching
	                                                    // element in the original tree
	                                                    isCompatible = false;
	                                                } else {
	                                                    // We found a matching keyed element somewhere in the original DOM tree.
	                                                    // Let's moving the original DOM node into the current position and morph
	                                                    // it.

	                                                    // NOTE: We use insertBefore instead of replaceChild because we want to go through
	                                                    // the `removeNode()` function for the node that is being discarded so that
	                                                    // all lifecycle hooks are correctly invoked
	                                                    fromEl.insertBefore(matchingFromEl, curFromNodeChild);

	                                                    fromNextSibling = curFromNodeChild.nextSibling;

	                                                    if (curFromNodeKey) {
	                                                        // Since the node is keyed it might be matched up later so we defer
	                                                        // the actual removal to later
	                                                        addKeyedRemoval(curFromNodeKey);
	                                                    } else {
	                                                        // NOTE: we skip nested keyed nodes from being removed since there is
	                                                        //       still a chance they will be matched up later
	                                                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
	                                                    }

	                                                    curFromNodeChild = matchingFromEl;
	                                                }
	                                            } else {
	                                                // The nodes are not compatible since the "to" node has a key and there
	                                                // is no matching keyed node in the source tree
	                                                isCompatible = false;
	                                            }
	                                        }
	                                    } else if (curFromNodeKey) {
	                                        // The original has a key
	                                        isCompatible = false;
	                                    }

	                                    isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
	                                    if (isCompatible) {
	                                        // We found compatible DOM elements so transform
	                                        // the current "from" node to match the current
	                                        // target DOM node.
	                                        morphEl(curFromNodeChild, curToNodeChild);
	                                    }
	                                } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
	                                    // Both nodes being compared are Text or Comment nodes
	                                    isCompatible = true;
	                                    // Simply update nodeValue on the original node to
	                                    // change the text value
	                                    curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
	                                }
	                            }

	                            if (isCompatible) {
	                                // Advance both the "to" child and the "from" child since we found a match
	                                curToNodeChild = toNextSibling;
	                                curFromNodeChild = fromNextSibling;
	                                continue outer;
	                            }

	                            // No compatible match so remove the old node from the DOM and continue trying to find a
	                            // match in the original DOM. However, we only do this if the from node is not keyed
	                            // since it is possible that a keyed node might match up with a node somewhere else in the
	                            // target tree and we don't want to discard it just yet since it still might find a
	                            // home in the final DOM tree. After everything is done we will remove any keyed nodes
	                            // that didn't find a home
	                            if (curFromNodeKey) {
	                                // Since the node is keyed it might be matched up later so we defer
	                                // the actual removal to later
	                                addKeyedRemoval(curFromNodeKey);
	                            } else {
	                                // NOTE: we skip nested keyed nodes from being removed since there is
	                                //       still a chance they will be matched up later
	                                removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
	                            }

	                            curFromNodeChild = fromNextSibling;
	                        }

	                        // If we got this far then we did not find a candidate match for
	                        // our "to node" and we exhausted all of the children "from"
	                        // nodes. Therefore, we will just append the current "to" node
	                        // to the end
	                        if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
	                            fromEl.appendChild(matchingFromEl);
	                            morphEl(matchingFromEl, curToNodeChild);
	                        } else {
	                            var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
	                            if (onBeforeNodeAddedResult !== false) {
	                                if (onBeforeNodeAddedResult) {
	                                    curToNodeChild = onBeforeNodeAddedResult;
	                                }

	                                if (curToNodeChild.actualize) {
	                                    curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
	                                }
	                                fromEl.appendChild(curToNodeChild);
	                                handleNodeAdded(curToNodeChild);
	                            }
	                        }

	                        curToNodeChild = toNextSibling;
	                        curFromNodeChild = fromNextSibling;
	                    }

	                    // We have processed all of the "to nodes". If curFromNodeChild is
	                    // non-null then we still have some from nodes left over that need
	                    // to be removed
	                    while (curFromNodeChild) {
	                        fromNextSibling = curFromNodeChild.nextSibling;
	                        if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
	                            // Since the node is keyed it might be matched up later so we defer
	                            // the actual removal to later
	                            addKeyedRemoval(curFromNodeKey);
	                        } else {
	                            // NOTE: we skip nested keyed nodes from being removed since there is
	                            //       still a chance they will be matched up later
	                            removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
	                        }
	                        curFromNodeChild = fromNextSibling;
	                    }
	                }

	                var specialElHandler = specialElHandlers[fromEl.nodeName];
	                if (specialElHandler) {
	                    specialElHandler(fromEl, toEl);
	                }
	            } // END: morphEl(...)

	            var morphedNode = fromNode;
	            var morphedNodeType = morphedNode.nodeType;
	            var toNodeType = toNode.nodeType;

	            if (!childrenOnly) {
	                // Handle the case where we are given two DOM nodes that are not
	                // compatible (e.g. <div> --> <span> or <div> --> TEXT)
	                if (morphedNodeType === ELEMENT_NODE) {
	                    if (toNodeType === ELEMENT_NODE) {
	                        if (!compareNodeNames(fromNode, toNode)) {
	                            onNodeDiscarded(fromNode);
	                            morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
	                        }
	                    } else {
	                        // Going from an element node to a text node
	                        morphedNode = toNode;
	                    }
	                } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
	                    // Text or comment node
	                    if (toNodeType === morphedNodeType) {
	                        morphedNode.nodeValue = toNode.nodeValue;
	                        return morphedNode;
	                    } else {
	                        // Text node to something else
	                        morphedNode = toNode;
	                    }
	                }
	            }

	            if (morphedNode === toNode) {
	                // The "to node" was not compatible with the "from node" so we had to
	                // toss out the "from node" and use the "to node"
	                onNodeDiscarded(fromNode);
	            } else {
	                morphEl(morphedNode, toNode, childrenOnly);

	                // We now need to loop over any keyed nodes that might need to be
	                // removed. We only do the removal if we know that the keyed node
	                // never found a match. When a keyed node is matched up we remove
	                // it out of fromNodesLookup and we use fromNodesLookup to determine
	                // if a keyed node has been matched up or not
	                if (keyedRemovalList) {
	                    for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
	                        var elToRemove = fromNodesLookup[keyedRemovalList[i]];
	                        if (elToRemove) {
	                            removeNode(elToRemove, elToRemove.parentNode, false);
	                        }
	                    }
	                }
	            }

	            if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
	                if (morphedNode.actualize) {
	                    morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
	                }
	                // If we had to swap out the from node with a new node because the old
	                // node was not compatible with the target node then we need to
	                // replace the old DOM node in the original DOM tree. This is only
	                // possible if the original DOM node was part of a DOM tree which
	                // we know is the case if it has a parent node.
	                fromNode.parentNode.replaceChild(morphedNode, fromNode);
	            }

	            return morphedNode;
	        };
	    }

	    var morphdom = morphdomFactory(morphAttrs);
	    morphdom.toElement = toElement;
	    morphdom.toElements = toElements;
	    return morphdom;
	});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	 *  html2json for omi
	 *  https://github.com/AlloyTeam/omi
	 *
	 *  Original code by John Resig (ejohn.org)
	 *  http://ejohn.org/blog/pure-javascript-html-parser/
	 *  Original code by Erik Arvidsson, Mozilla Public License
	 *  http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 *  Original code by Jxck
	 *  https://github.com/Jxck/html2json
	 */

	// Regular Expressions for parsing tags and attributes
	var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
	    endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
	    attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

	var HTMLParser = function HTMLParser(html, handler) {
	    var index,
	        chars,
	        match,
	        stack = [],
	        last = html;
	    stack.last = function () {
	        return this[this.length - 1];
	    };

	    while (html) {
	        chars = true;

	        // Make sure we're not in a script or style element
	        if (!stack.last()) {

	            if (html.indexOf("</") == 0) {
	                match = html.match(endTag);

	                if (match) {
	                    html = html.substring(match[0].length);
	                    match[0].replace(endTag, parseEndTag);
	                    chars = false;
	                }

	                // start tag
	            } else if (html.indexOf("<") == 0) {
	                match = html.match(startTag);

	                if (match) {
	                    html = html.substring(match[0].length);
	                    match[0].replace(startTag, parseStartTag);
	                    chars = false;
	                }
	            }

	            if (chars) {
	                index = html.indexOf("<");

	                var text = index < 0 ? html : html.substring(0, index);
	                html = index < 0 ? "" : html.substring(index);

	                if (handler.chars) handler.chars(text);
	            }
	        } else {
	            html = html.replace(new RegExp("([\\s\\S]*?)<\/" + stack.last() + "[^>]*>"), function (all, text) {

	                if (handler.chars) handler.chars(text);

	                return "";
	            });

	            parseEndTag("", stack.last());
	        }

	        if (html == last) throw "Parse Error: " + html;
	        last = html;
	    }

	    // Clean up any remaining tags
	    parseEndTag();

	    function parseStartTag(tag, tagName, rest, unary) {
	        //tagName = tagName.toLowerCase();

	        unary = !!unary;

	        if (!unary) stack.push(tagName);

	        if (handler.start) {
	            var attrs = [];

	            rest.replace(attr, function (match, name) {
	                var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : "";

	                attrs.push({
	                    name: name,
	                    value: value,
	                    escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
	                });
	            });

	            if (handler.start) handler.start(tagName, attrs, unary);
	        }
	    }

	    function parseEndTag(tag, tagName) {
	        // If no tag name is provided, clean shop
	        if (!tagName) var pos = 0;

	        // Find the closest opened tag of the same type
	        else for (var pos = stack.length - 1; pos >= 0; pos--) {
	                if (stack[pos] == tagName) break;
	            }if (pos >= 0) {
	            // Close all the open elements, up the stack
	            for (var i = stack.length - 1; i >= pos; i--) {
	                if (handler.end) handler.end(stack[i]);
	            } // Remove the open elements from the stack
	            stack.length = pos;
	        }
	    }
	};

	var DEBUG = false;
	var debug = DEBUG ? console.log.bind(console) : function () {};

	// Production steps of ECMA-262, Edition 5, 15.4.4.21
	// Reference: http://es5.github.io/#x15.4.4.21
	if (!Array.prototype.reduce) {
	    Array.prototype.reduce = function (callback /*, initialValue*/) {
	        'use strict';

	        if (this == null) {
	            throw new TypeError('Array.prototype.reduce called on null or undefined');
	        }
	        if (typeof callback !== 'function') {
	            throw new TypeError(callback + ' is not a function');
	        }
	        var t = Object(this),
	            len = t.length >>> 0,
	            k = 0,
	            value;
	        if (arguments.length == 2) {
	            value = arguments[1];
	        } else {
	            while (k < len && !(k in t)) {
	                k++;
	            }
	            if (k >= len) {
	                throw new TypeError('Reduce of empty array with no initial value');
	            }
	            value = t[k++];
	        }
	        for (; k < len; k++) {
	            if (k in t) {
	                value = callback(value, t[k], k, t);
	            }
	        }
	        return value;
	    };
	}

	var html2json = function html2json(html) {

	    var bufArray = [];
	    var results = {
	        node: 'root',
	        child: []
	    };
	    HTMLParser(html, {
	        start: function start(tag, attrs, unary) {
	            debug(tag, attrs, unary);
	            // node for this element
	            var node = {
	                node: 'element',
	                tag: tag
	            };
	            if (attrs.length !== 0) {
	                node.attr = attrs.reduce(function (pre, attr) {
	                    var name = attr.name;
	                    var value = attr.value;

	                    pre[name] = value;
	                    return pre;
	                }, {});
	            }
	            if (unary) {
	                // if this tag dosen't have end tag
	                // like <img src="hoge.png"/>
	                // add to parents
	                var parent = bufArray[0] || results;
	                if (parent.child === undefined) {
	                    parent.child = [];
	                }
	                parent.child.push(node);
	            } else {
	                bufArray.unshift(node);
	            }
	        },
	        end: function end(tag) {
	            debug(tag);
	            // merge into parent tag
	            var node = bufArray.shift();
	            if (node.tag !== tag) console.error('invalid state: mismatch end tag');

	            if (bufArray.length === 0) {
	                results.child.push(node);
	            } else {
	                var parent = bufArray[0];
	                if (parent.child === undefined) {
	                    parent.child = [];
	                }
	                parent.child.push(node);
	            }
	        },
	        chars: function chars(text) {
	            debug(text);
	            var node = {
	                node: 'text',
	                text: text
	            };
	            if (bufArray.length === 0) {
	                results.child.push(node);
	            } else {
	                var parent = bufArray[0];
	                if (parent.child === undefined) {
	                    parent.child = [];
	                }
	                parent.child.push(node);
	            }
	        }
	    });
	    return results;
	};

	exports["default"] = html2json;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Store = function () {
	    function Store(isReady) {
	        _classCallCheck(this, Store);

	        this.readyHandlers = [];
	        this.isReady = isReady;
	        this.instances = [];
	        this.updateSelfInstances = [];
	    }

	    _createClass(Store, [{
	        key: "ready",
	        value: function ready(readyHandler) {
	            if (this.isReady) {
	                readyHandler();
	                return;
	            }
	            this.readyHandlers.push(readyHandler);
	        }
	    }, {
	        key: "addSelfView",
	        value: function addSelfView(view) {
	            var added = false;

	            for (var i = 0, len = this.updateSelfInstances.length; i < len; i++) {
	                if (this.updateSelfInstances[i].id === view.id) {
	                    added = true;
	                    break;
	                }
	            }
	            if (!added) {
	                this.updateSelfInstances.push(view);
	            }
	        }
	    }, {
	        key: "addView",
	        value: function addView(view) {
	            var added = false;

	            for (var i = 0, len = this.instances.length; i < len; i++) {
	                if (this.instances[i].id === view.id) {
	                    added = true;
	                    break;
	                }
	            }
	            if (!added) {
	                this.instances.push(view);
	            }
	        }
	    }, {
	        key: "beReady",
	        value: function beReady() {
	            this.isReady = true;
	            this.readyHandlers.forEach(function (handler) {
	                return handler();
	            });
	        }
	    }, {
	        key: "update",
	        value: function update() {
	            this._mergeInstances();
	            this._mergeSelfInstances();
	            this.instances.forEach(function (instance) {
	                return instance.update();
	            });
	            this.updateSelfInstances.forEach(function (instance) {
	                return instance.updateSelf();
	            });
	        }
	    }, {
	        key: "_mergeSelfInstances",
	        value: function _mergeSelfInstances() {
	            var _this = this;

	            var arr = [];
	            this.updateSelfInstances.forEach(function (instance) {
	                if (!_this._checkSelfUpdateInstance(instance)) {
	                    arr.push(instance);
	                }
	            });
	            this.updateSelfInstances = arr;
	        }
	    }, {
	        key: "_mergeInstances",
	        value: function _mergeInstances() {
	            var _this2 = this;

	            var arr = [];
	            this.idArr = [];
	            this.instances.forEach(function (instance) {
	                _this2.idArr.push(instance.id);
	            });

	            this.instances.forEach(function (instance) {
	                if (!instance.parent) {
	                    arr.push(instance);
	                } else {
	                    if (!_this2._isSubInstance(instance)) {
	                        arr.push(instance);
	                    }
	                }
	            });

	            this.instances = arr;
	        }
	    }, {
	        key: "_checkSelfUpdateInstance",
	        value: function _checkSelfUpdateInstance(instance) {
	            if (this.idArr.indexOf(instance.id) !== -1) {
	                return true;
	            } else if (instance.parent) {
	                return this._checkSelfUpdateInstance(instance.parent);
	            }
	        }
	    }, {
	        key: "_isSubInstance",
	        value: function _isSubInstance(instance) {
	            if (this.idArr.indexOf(instance.parent.id) !== -1) {
	                return true;
	            } else if (instance.parent.parent) {
	                return this._isSubInstance(instance.parent);
	            }
	        }
	    }]);

	    return Store;
	}();

	exports["default"] = Store;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */

	/*global define: false Mustache: true*/

	(function defineMustache(global, factory) {
	    if (( false ? 'undefined' : _typeof(exports)) === 'object' && exports && typeof exports.nodeName !== 'string') {
	        factory(exports); // CommonJS
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else {
	        global.Mustache = {};
	        factory(global.Mustache); // script, wsh, asp
	    }
	})(undefined, function mustacheFactory(mustache) {

	    var objectToString = Object.prototype.toString;
	    var isArray = Array.isArray || function isArrayPolyfill(object) {
	        return objectToString.call(object) === '[object Array]';
	    };

	    function isFunction(object) {
	        return typeof object === 'function';
	    }

	    /**
	     * More correct typeof string handling array
	     * which normally returns typeof 'object'
	     */
	    function typeStr(obj) {
	        return isArray(obj) ? 'array' : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	    }

	    function escapeRegExp(string) {
	        return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
	    }

	    /**
	     * Null safe way of checking whether or not an object,
	     * including its prototype, has a given property
	     */
	    function hasProperty(obj, propName) {
	        return obj != null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && propName in obj;
	    }

	    // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
	    // See https://github.com/janl/mustache.js/issues/189
	    var regExpTest = RegExp.prototype.test;
	    function testRegExp(re, string) {
	        return regExpTest.call(re, string);
	    }

	    var nonSpaceRe = /\S/;
	    function isWhitespace(string) {
	        return !testRegExp(nonSpaceRe, string);
	    }

	    var entityMap = {
	        '&': '&amp;',
	        '<': '&lt;',
	        '>': '&gt;',
	        '"': '&quot;',
	        "'": '&#39;',
	        '/': '&#x2F;',
	        '`': '&#x60;',
	        '=': '&#x3D;'
	    };

	    function escapeHtml(string) {
	        return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
	            return entityMap[s];
	        });
	    }

	    var whiteRe = /\s*/;
	    var spaceRe = /\s+/;
	    var equalsRe = /\s*=/;
	    var curlyRe = /\s*\}/;
	    var tagRe = /#|\^|\/|>|\{|&|=|!/;

	    /**
	     * Breaks up the given `template` string into a tree of tokens. If the `tags`
	     * argument is given here it must be an array with two string values: the
	     * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
	     * course, the default is to use mustaches (i.e. mustache.tags).
	     *
	     * A token is an array with at least 4 elements. The first element is the
	     * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
	     * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
	     * all text that appears outside a symbol this element is "text".
	     *
	     * The second element of a token is its "value". For mustache tags this is
	     * whatever else was inside the tag besides the opening symbol. For text tokens
	     * this is the text itself.
	     *
	     * The third and fourth elements of the token are the start and end indices,
	     * respectively, of the token in the original template.
	     *
	     * Tokens that are the root node of a subtree contain two more elements: 1) an
	     * array of tokens in the subtree and 2) the index in the original template at
	     * which the closing tag for that section begins.
	     */
	    function parseTemplate(template, tags) {
	        if (!template) return [];

	        var sections = []; // Stack to hold section tokens
	        var tokens = []; // Buffer to hold the tokens
	        var spaces = []; // Indices of whitespace tokens on the current line
	        var hasTag = false; // Is there a {{tag}} on the current line?
	        var nonSpace = false; // Is there a non-space char on the current line?

	        // Strips all whitespace tokens array for the current line
	        // if there was a {{#tag}} on it and otherwise only space.
	        function stripSpace() {
	            if (hasTag && !nonSpace) {
	                while (spaces.length) {
	                    delete tokens[spaces.pop()];
	                }
	            } else {
	                spaces = [];
	            }

	            hasTag = false;
	            nonSpace = false;
	        }

	        var openingTagRe, closingTagRe, closingCurlyRe;
	        function compileTags(tagsToCompile) {
	            if (typeof tagsToCompile === 'string') tagsToCompile = tagsToCompile.split(spaceRe, 2);

	            if (!isArray(tagsToCompile) || tagsToCompile.length !== 2) throw new Error('Invalid tags: ' + tagsToCompile);

	            openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
	            closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
	            closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
	        }

	        compileTags(tags || mustache.tags);

	        var scanner = new Scanner(template);

	        var start, type, value, chr, token, openSection;
	        while (!scanner.eos()) {
	            start = scanner.pos;

	            // Match any text between tags.
	            value = scanner.scanUntil(openingTagRe);

	            if (value) {
	                for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
	                    chr = value.charAt(i);

	                    if (isWhitespace(chr)) {
	                        spaces.push(tokens.length);
	                    } else {
	                        nonSpace = true;
	                    }

	                    tokens.push(['text', chr, start, start + 1]);
	                    start += 1;

	                    // Check for whitespace on the current line.
	                    if (chr === '\n') stripSpace();
	                }
	            }

	            // Match the opening tag.
	            if (!scanner.scan(openingTagRe)) break;

	            hasTag = true;

	            // Get the tag type.
	            type = scanner.scan(tagRe) || 'name';
	            scanner.scan(whiteRe);

	            // Get the tag value.
	            if (type === '=') {
	                value = scanner.scanUntil(equalsRe);
	                scanner.scan(equalsRe);
	                scanner.scanUntil(closingTagRe);
	            } else if (type === '{') {
	                value = scanner.scanUntil(closingCurlyRe);
	                scanner.scan(curlyRe);
	                scanner.scanUntil(closingTagRe);
	                type = '&';
	            } else {
	                value = scanner.scanUntil(closingTagRe);
	            }

	            // Match the closing tag.
	            if (!scanner.scan(closingTagRe)) throw new Error('Unclosed tag at ' + scanner.pos);

	            token = [type, value, start, scanner.pos];
	            tokens.push(token);

	            if (type === '#' || type === '^') {
	                sections.push(token);
	            } else if (type === '/') {
	                // Check section nesting.
	                openSection = sections.pop();

	                if (!openSection) throw new Error('Unopened section "' + value + '" at ' + start);

	                if (openSection[1] !== value) throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
	            } else if (type === 'name' || type === '{' || type === '&') {
	                nonSpace = true;
	            } else if (type === '=') {
	                // Set the tags for the next time around.
	                compileTags(value);
	            }
	        }

	        // Make sure there are no open sections when we're done.
	        openSection = sections.pop();

	        if (openSection) throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

	        return nestTokens(squashTokens(tokens));
	    }

	    /**
	     * Combines the values of consecutive text tokens in the given `tokens` array
	     * to a single token.
	     */
	    function squashTokens(tokens) {
	        var squashedTokens = [];

	        var token, lastToken;
	        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	            token = tokens[i];

	            if (token) {
	                if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
	                    lastToken[1] += token[1];
	                    lastToken[3] = token[3];
	                } else {
	                    squashedTokens.push(token);
	                    lastToken = token;
	                }
	            }
	        }

	        return squashedTokens;
	    }

	    /**
	     * Forms the given array of `tokens` into a nested tree structure where
	     * tokens that represent a section have two additional items: 1) an array of
	     * all tokens that appear in that section and 2) the index in the original
	     * template that represents the end of that section.
	     */
	    function nestTokens(tokens) {
	        var nestedTokens = [];
	        var collector = nestedTokens;
	        var sections = [];

	        var token, section;
	        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	            token = tokens[i];

	            switch (token[0]) {
	                case '#':
	                case '^':
	                    collector.push(token);
	                    sections.push(token);
	                    collector = token[4] = [];
	                    break;
	                case '/':
	                    section = sections.pop();
	                    section[5] = token[2];
	                    collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
	                    break;
	                default:
	                    collector.push(token);
	            }
	        }

	        return nestedTokens;
	    }

	    /**
	     * A simple string scanner that is used by the template parser to find
	     * tokens in template strings.
	     */
	    function Scanner(string) {
	        this.string = string;
	        this.tail = string;
	        this.pos = 0;
	    }

	    /**
	     * Returns `true` if the tail is empty (end of string).
	     */
	    Scanner.prototype.eos = function eos() {
	        return this.tail === '';
	    };

	    /**
	     * Tries to match the given regular expression at the current position.
	     * Returns the matched text if it can match, the empty string otherwise.
	     */
	    Scanner.prototype.scan = function scan(re) {
	        var match = this.tail.match(re);

	        if (!match || match.index !== 0) return '';

	        var string = match[0];

	        this.tail = this.tail.substring(string.length);
	        this.pos += string.length;

	        return string;
	    };

	    /**
	     * Skips all text until the given regular expression can be matched. Returns
	     * the skipped string, which is the entire tail if no match can be made.
	     */
	    Scanner.prototype.scanUntil = function scanUntil(re) {
	        var index = this.tail.search(re),
	            match;

	        switch (index) {
	            case -1:
	                match = this.tail;
	                this.tail = '';
	                break;
	            case 0:
	                match = '';
	                break;
	            default:
	                match = this.tail.substring(0, index);
	                this.tail = this.tail.substring(index);
	        }

	        this.pos += match.length;

	        return match;
	    };

	    /**
	     * Represents a rendering context by wrapping a view object and
	     * maintaining a reference to the parent context.
	     */
	    function Context(view, parentContext) {
	        this.view = view;
	        this.cache = { '.': this.view };
	        this.parent = parentContext;
	    }

	    /**
	     * Creates a new context using the given view with this context
	     * as the parent.
	     */
	    Context.prototype.push = function push(view) {
	        return new Context(view, this);
	    };

	    /**
	     * Returns the value of the given name in this context, traversing
	     * up the context hierarchy if the value is absent in this context's view.
	     */
	    Context.prototype.lookup = function lookup(name) {
	        var cache = this.cache;

	        var value;
	        if (cache.hasOwnProperty(name)) {
	            value = cache[name];
	        } else {
	            var context = this,
	                names,
	                index,
	                lookupHit = false;

	            while (context) {
	                if (name.indexOf('.') > 0) {
	                    value = context.view;
	                    names = name.split('.');
	                    index = 0;

	                    /**
	                     * Using the dot notion path in `name`, we descend through the
	                     * nested objects.
	                     *
	                     * To be certain that the lookup has been successful, we have to
	                     * check if the last object in the path actually has the property
	                     * we are looking for. We store the result in `lookupHit`.
	                     *
	                     * This is specially necessary for when the value has been set to
	                     * `undefined` and we want to avoid looking up parent contexts.
	                     **/
	                    while (value != null && index < names.length) {
	                        if (index === names.length - 1) lookupHit = hasProperty(value, names[index]);

	                        value = value[names[index++]];
	                    }
	                } else {
	                    value = context.view[name];
	                    lookupHit = hasProperty(context.view, name);
	                }

	                if (lookupHit) break;

	                context = context.parent;
	            }

	            cache[name] = value;
	        }

	        if (isFunction(value)) value = value.call(this.view);

	        return value;
	    };

	    /**
	     * A Writer knows how to take a stream of tokens and render them to a
	     * string, given a context. It also maintains a cache of templates to
	     * avoid the need to parse the same template twice.
	     */
	    function Writer() {
	        this.cache = {};
	    }

	    /**
	     * Clears all cached templates in this writer.
	     */
	    Writer.prototype.clearCache = function clearCache() {
	        this.cache = {};
	    };

	    /**
	     * Parses and caches the given `template` and returns the array of tokens
	     * that is generated from the parse.
	     */
	    Writer.prototype.parse = function parse(template, tags) {
	        var cache = this.cache;
	        var tokens = cache[template];

	        if (tokens == null) tokens = cache[template] = parseTemplate(template, tags);

	        return tokens;
	    };

	    /**
	     * High-level method that is used to render the given `template` with
	     * the given `view`.
	     *
	     * The optional `partials` argument may be an object that contains the
	     * names and templates of partials that are used in the template. It may
	     * also be a function that is used to load partial templates on the fly
	     * that takes a single argument: the name of the partial.
	     */
	    Writer.prototype.render = function render(template, view, partials) {
	        var tokens = this.parse(template);
	        var context = view instanceof Context ? view : new Context(view);
	        return this.renderTokens(tokens, context, partials, template);
	    };

	    /**
	     * Low-level method that renders the given array of `tokens` using
	     * the given `context` and `partials`.
	     *
	     * Note: The `originalTemplate` is only ever used to extract the portion
	     * of the original template that was contained in a higher-order section.
	     * If the template doesn't use higher-order sections, this argument may
	     * be omitted.
	     */
	    Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate) {
	        var buffer = '';

	        var token, symbol, value;
	        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	            value = undefined;
	            token = tokens[i];
	            symbol = token[0];

	            if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);else if (symbol === '&') value = this.unescapedValue(token, context);else if (symbol === 'name') value = this.escapedValue(token, context);else if (symbol === 'text') value = this.rawValue(token);

	            if (value !== undefined) buffer += value;
	        }

	        return buffer;
	    };

	    Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate) {
	        var self = this;
	        var buffer = '';
	        var value = context.lookup(token[1]);

	        // This function is used to render an arbitrary template
	        // in the current context by higher-order sections.
	        function subRender(template) {
	            return self.render(template, context, partials);
	        }

	        if (!value) return;

	        if (isArray(value)) {
	            for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
	                buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
	            }
	        } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'string' || typeof value === 'number') {
	            buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
	        } else if (isFunction(value)) {
	            if (typeof originalTemplate !== 'string') throw new Error('Cannot use higher-order sections without the original template');

	            // Extract the portion of the original template that the section contains.
	            value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

	            if (value != null) buffer += value;
	        } else {
	            buffer += this.renderTokens(token[4], context, partials, originalTemplate);
	        }
	        return buffer;
	    };

	    Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate) {
	        var value = context.lookup(token[1]);

	        // Use JavaScript's definition of falsy. Include empty arrays.
	        // See https://github.com/janl/mustache.js/issues/186
	        if (!value || isArray(value) && value.length === 0) return this.renderTokens(token[4], context, partials, originalTemplate);
	    };

	    Writer.prototype.renderPartial = function renderPartial(token, context, partials) {
	        if (!partials) return;

	        var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
	        if (value != null) return this.renderTokens(this.parse(value), context, partials, value);
	    };

	    Writer.prototype.unescapedValue = function unescapedValue(token, context) {
	        var value = context.lookup(token[1]);
	        if (value != null) return value;
	    };

	    Writer.prototype.escapedValue = function escapedValue(token, context) {
	        var value = context.lookup(token[1]);
	        if (value != null) return mustache.escape(value);
	    };

	    Writer.prototype.rawValue = function rawValue(token) {
	        return token[1];
	    };

	    mustache.name = 'mustache.js';
	    mustache.version = '2.3.0';
	    mustache.tags = ['{{', '}}'];

	    // All high-level mustache.* functions use this writer.
	    var defaultWriter = new Writer();

	    /**
	     * Clears all cached templates in the default writer.
	     */
	    mustache.clearCache = function clearCache() {
	        return defaultWriter.clearCache();
	    };

	    /**
	     * Parses and caches the given template in the default writer and returns the
	     * array of tokens it contains. Doing this ahead of time avoids the need to
	     * parse templates on the fly as they are rendered.
	     */
	    mustache.parse = function parse(template, tags) {
	        return defaultWriter.parse(template, tags);
	    };

	    /**
	     * Renders the `template` with the given `view` and `partials` using the
	     * default writer.
	     */
	    mustache.render = function render(template, view, partials) {
	        if (typeof template !== 'string') {
	            throw new TypeError('Invalid template! Template should be a "string" ' + 'but "' + typeStr(template) + '" was given as the first ' + 'argument for mustache#render(template, view, partials)');
	        }

	        return defaultWriter.render(template, view, partials);
	    };

	    // This is here for backwards compatibility with 0.4.x.,
	    /*eslint-disable */ // eslint wants camel cased function name
	    mustache.to_html = function to_html(template, view, partials, send) {
	        /*eslint-enable*/

	        var result = mustache.render(template, view, partials);

	        if (isFunction(send)) {
	            send(result);
	        } else {
	            return result;
	        }
	    };

	    // Export the escaping function so that the user may override it.
	    // See https://github.com/janl/mustache.js/issues/244
	    mustache.escape = escapeHtml;

	    // Export these mainly for testing, but also for advanced usage.
	    mustache.Scanner = Scanner;
	    mustache.Context = Context;
	    mustache.Writer = Writer;

	    return mustache;
	});

/***/ })
/******/ ])
});
;
/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _omix = __webpack_require__(1);

	var _omix2 = _interopRequireDefault(_omix);

	__webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Omi$Component) {
	    _inherits(App, _Omi$Component);

	    function App(data) {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, data));
	    }

	    _createClass(App, [{
	        key: 'style',
	        value: function style() {
	            return '\n        *{\n            box-sizing: border-box;\n        }\n\n        .main{\n            width: 160px;\n            overflow: hidden;\n            border: 1px solid rgb(204, 204, 204);\n            text-indent: 10px;\n            margin: 0 auto;\n        }\n\n\n        .main ul {\n            list-style: none;\n            padding: 0;\n            margin: 0;\n            width: 100%;\n            text-align: left;\n            font-size: 14px;\n            transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n        }\n\n        .main li {\n            padding: 0 10px;\n            height: 40px;\n            line-height: 40px;\n            border-bottom: 1px solid #ccc;\n            border-top: 1px solid #fff;\n            background-color: #fafafa;\n            font-size: 14px;\n        }\n\n        .touchArea{\n            height: 250px;\n            overflow: hidden;\n        }';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _omix2.default.x(
	                'div',
	                { 'class': 'main' },
	                _omix2.default.x(
	                    'div',
	                    { 'omi-touch': true, 'class': 'touchArea', motionRef: 'scroller', min: '-1750', max: '0' },
	                    _omix2.default.x(
	                        'ul',
	                        { ref: 'scroller' },
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'Hello, Omi-Touch!'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'AlloyTouch'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'Omix'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'AlloyFinger'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'Omi'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'AlloyGameEngine'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'css3transform'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'AlloyRender'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'AlloyStick'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'CodeStar'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'AlloyDesigner'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'JX'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'TEditor'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'JXAnimate'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'Spirit'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'AlloyImage'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'ModJS'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'Pretty row 16'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'stepify'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'AlloyTimer'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'Alloy Desktop'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'JX UI'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'CodeTank'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'iSpriter'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'Rythem'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'Go!Png '
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 1'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 2'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 3'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            'row 5'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 5'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 7'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 8'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 9'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 11'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 11'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 12'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 13'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 14'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 15'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 16'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 17'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 18'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 19'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 20'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 21'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 22'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 23'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            null,
	                            ' row 24'
	                        ),
	                        _omix2.default.x(
	                            'li',
	                            { style: 'border-bottom: none;' },
	                            ' row 25'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return App;
	}(_omix2.default.Component);

	_omix2.default.render(new App(), "#container");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 *  omix v1.1.11 By dntzhang 
	 *  Github: https://github.com/AlloyTeam/omix
	 *  MIT Licensed.
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
	    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["Omix"] = factory();else root["Omix"] = factory();
	})(undefined, function () {
	    return (/******/function (modules) {
	            // webpackBootstrap
	            /******/ // The module cache
	            /******/var installedModules = {};
	            /******/
	            /******/ // The require function
	            /******/function __webpack_require__(moduleId) {
	                /******/
	                /******/ // Check if module is in cache
	                /******/if (installedModules[moduleId]) {
	                    /******/return installedModules[moduleId].exports;
	                    /******/
	                }
	                /******/ // Create a new module (and put it into the cache)
	                /******/var module = installedModules[moduleId] = {
	                    /******/i: moduleId,
	                    /******/l: false,
	                    /******/exports: {}
	                    /******/ };
	                /******/
	                /******/ // Execute the module function
	                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	                /******/
	                /******/ // Flag the module as loaded
	                /******/module.l = true;
	                /******/
	                /******/ // Return the exports of the module
	                /******/return module.exports;
	                /******/
	            }
	            /******/
	            /******/
	            /******/ // expose the modules object (__webpack_modules__)
	            /******/__webpack_require__.m = modules;
	            /******/
	            /******/ // expose the module cache
	            /******/__webpack_require__.c = installedModules;
	            /******/
	            /******/ // define getter function for harmony exports
	            /******/__webpack_require__.d = function (exports, name, getter) {
	                /******/if (!__webpack_require__.o(exports, name)) {
	                    /******/Object.defineProperty(exports, name, {
	                        /******/configurable: false,
	                        /******/enumerable: true,
	                        /******/get: getter
	                        /******/ });
	                    /******/
	                }
	                /******/
	            };
	            /******/
	            /******/ // getDefaultExport function for compatibility with non-harmony modules
	            /******/__webpack_require__.n = function (module) {
	                /******/var getter = module && module.__esModule ?
	                /******/function getDefault() {
	                    return module['default'];
	                } :
	                /******/function getModuleExports() {
	                    return module;
	                };
	                /******/__webpack_require__.d(getter, 'a', getter);
	                /******/return getter;
	                /******/
	            };
	            /******/
	            /******/ // Object.prototype.hasOwnProperty.call
	            /******/__webpack_require__.o = function (object, property) {
	                return Object.prototype.hasOwnProperty.call(object, property);
	            };
	            /******/
	            /******/ // __webpack_public_path__
	            /******/__webpack_require__.p = "";
	            /******/
	            /******/ // Load entry module and return exports
	            /******/return __webpack_require__(__webpack_require__.s = 15);
	            /******/
	        }(
	        /************************************************************************/
	        /******/[
	        /* 0 */
	        /***/function (module, exports) {

	            module.exports = isWidget;

	            function isWidget(w) {
	                return w && w.type === "Widget";
	            }

	            /***/
	        },
	        /* 1 */
	        /***/function (module, exports) {

	            module.exports = "2";

	            /***/
	        },
	        /* 2 */
	        /***/function (module, exports, __webpack_require__) {

	            var version = __webpack_require__(1);

	            module.exports = isVirtualNode;

	            function isVirtualNode(x) {
	                return x && x.type === "VirtualNode" && x.version === version;
	            }

	            /***/
	        },
	        /* 3 */
	        /***/function (module, exports) {

	            module.exports = isThunk;

	            function isThunk(t) {
	                return t && t.type === "Thunk";
	            }

	            /***/
	        },
	        /* 4 */
	        /***/function (module, exports) {

	            module.exports = isHook;

	            function isHook(hook) {
	                return hook && (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") || typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"));
	            }

	            /***/
	        },
	        /* 5 */
	        /***/function (module, exports, __webpack_require__) {

	            var version = __webpack_require__(1);

	            module.exports = isVirtualText;

	            function isVirtualText(x) {
	                return x && x.type === "VirtualText" && x.version === version;
	            }

	            /***/
	        },
	        /* 6 */
	        /***/function (module, exports, __webpack_require__) {

	            "use strict";

	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });

	            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	            } : function (obj) {
	                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	            };

	            var _h = __webpack_require__(16);

	            var _h2 = _interopRequireDefault(_h);

	            var _hyperscriptHelpers = __webpack_require__(27);

	            var _hyperscriptHelpers2 = _interopRequireDefault(_hyperscriptHelpers);

	            function _interopRequireDefault(obj) {
	                return obj && obj.__esModule ? obj : { 'default': obj };
	            }

	            var Omi = {
	                x: _h2['default'],
	                tags: (0, _hyperscriptHelpers2['default'])(_h2['default']),
	                instances: {},
	                _instanceId: 0,
	                PREFIX: '__s_',
	                getInstanceId: function getInstanceId() {
	                    return Omi._instanceId++;
	                },
	                plugins: {},
	                scopedStyle: true,
	                mapping: {},
	                style: {},
	                componentConstructor: {}
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

	            Omi._capitalize = function (str) {
	                str = str.toLowerCase();
	                str = str.replace(/\b\w+\b/g, function (word) {
	                    return word.substring(0, 1).toUpperCase() + word.substring(1);
	                }).replace(/-/g, '');
	                return str;
	            };

	            Omi.tag = function (name, ctor) {
	                var cname = name.replace(/-/g, '').toLowerCase();
	                Omi.componentConstructor[cname] = ctor;
	                ctor.is = name;

	                var uname = Omi._capitalize(name);
	                Omi.tags[uname] = Omi.tags.createTag(uname);
	            };

	            Omi.getConstructor = function (name) {
	                for (var key in Omi.componentConstructor) {
	                    if (key === name.toLowerCase() || key === name.replace(/-/g, '').toLowerCase()) {
	                        return Omi.componentConstructor[key];
	                    }
	                }
	            };

	            function isServer() {
	                return !(typeof window !== 'undefined' && window.document);
	            }

	            Omi.render = function (component, renderTo, option) {
	                if (isServer()) return;
	                component.renderTo = typeof renderTo === 'string' ? document.querySelector(renderTo) : renderTo;
	                if (typeof option === 'boolean') {
	                    component._omi_increment = option;
	                } else if (option) {
	                    component._omi_increment = option.increment;
	                    if (option.ssr) {
	                        component.data = Object.assign({}, window.__omiSsrData, component.data);
	                    }
	                }
	                component.install();
	                component.beforeRender();
	                component._render(true);
	                component._childrenInstalled(component);
	                component.installed();
	                component._execInstalledHandlers();
	                return component;
	            };

	            Omi.get = function (name) {
	                return Omi.mapping[name];
	            };

	            Omi.extendPlugin = function (name, handler) {
	                Omi.plugins[name] = handler;
	            };

	            Omi.deletePlugin = function (name) {
	                delete Omi.plugins[name];
	            };

	            function spread(vd) {
	                var str = '';
	                var type = vd.type;
	                switch (type) {
	                    case 'VirtualNode':
	                        str += '<' + vd.tagName + ' ' + props2str(vd.properties) + '>' + vd.children.map(function (child) {
	                            return spread(child);
	                        }).join('') + '</' + vd.tagName + '>';
	                        break;
	                    case 'VirtualText':
	                        return vd.text;
	                }

	                return str;
	            }

	            function props2str(props) {
	                var result = '';
	                for (var key in props) {
	                    var val = props[key];
	                    var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
	                    if (type !== 'function' && type !== 'object') {
	                        result += key + '="' + val + '" ';
	                    }
	                }
	                return result;
	            }

	            function spreadStyle() {
	                var css = '';
	                for (var key in Omi.style) {
	                    css += '\n' + Omi.style[key] + '\n';
	                }
	                return css;
	            }

	            function stringifyData(component) {
	                return '<script>window.__omiSsrData=' + JSON.stringify(component.data) + '</script>';
	            }

	            Omi.renderToString = function (component) {
	                Omi.ssr = true;
	                component.install();
	                component.beforeRender();
	                component._render(true);
	                Omi.ssr = false;
	                var result = '<style>' + spreadStyle() + '</style>\n' + spread(component._virtualDom) + stringifyData(component);
	                Omi.style = {};
	                Omi._instanceId = 0;
	                return result;
	            };

	            exports['default'] = Omi;

	            /***/
	        },
	        /* 7 */
	        /***/function (module, exports) {

	            var nativeIsArray = Array.isArray;
	            var toString = Object.prototype.toString;

	            module.exports = nativeIsArray || isArray;

	            function isArray(obj) {
	                return toString.call(obj) === "[object Array]";
	            }

	            /***/
	        },
	        /* 8 */
	        /***/function (module, exports) {

	            var g;

	            // This works in non-strict mode
	            g = function () {
	                return this;
	            }();

	            try {
	                // This works if eval is allowed (see CSP)
	                g = g || Function("return this")() || (1, eval)("this");
	            } catch (e) {
	                // This works if the window reference is available
	                if ((typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === "object") g = window;
	            }

	            // g can still be undefined, but nothing to do about it...
	            // We return undefined, instead of nothing here, so it's
	            // easier to handle this case. if(!global) { ...}

	            module.exports = g;

	            /***/
	        },
	        /* 9 */
	        /***/function (module, exports, __webpack_require__) {

	            var version = __webpack_require__(1);

	            VirtualPatch.NONE = 0;
	            VirtualPatch.VTEXT = 1;
	            VirtualPatch.VNODE = 2;
	            VirtualPatch.WIDGET = 3;
	            VirtualPatch.PROPS = 4;
	            VirtualPatch.ORDER = 5;
	            VirtualPatch.INSERT = 6;
	            VirtualPatch.REMOVE = 7;
	            VirtualPatch.THUNK = 8;

	            module.exports = VirtualPatch;

	            function VirtualPatch(type, vNode, patch) {
	                this.type = Number(type);
	                this.vNode = vNode;
	                this.patch = patch;
	            }

	            VirtualPatch.prototype.version = version;
	            VirtualPatch.prototype.type = "VirtualPatch";

	            /***/
	        },
	        /* 10 */
	        /***/function (module, exports, __webpack_require__) {

	            var isVNode = __webpack_require__(2);
	            var isVText = __webpack_require__(5);
	            var isWidget = __webpack_require__(0);
	            var isThunk = __webpack_require__(3);

	            module.exports = handleThunk;

	            function handleThunk(a, b) {
	                var renderedA = a;
	                var renderedB = b;

	                if (isThunk(b)) {
	                    renderedB = renderThunk(b, a);
	                }

	                if (isThunk(a)) {
	                    renderedA = renderThunk(a, null);
	                }

	                return {
	                    a: renderedA,
	                    b: renderedB
	                };
	            }

	            function renderThunk(thunk, previous) {
	                var renderedThunk = thunk.vnode;

	                if (!renderedThunk) {
	                    renderedThunk = thunk.vnode = thunk.render(previous);
	                }

	                if (!(isVNode(renderedThunk) || isVText(renderedThunk) || isWidget(renderedThunk))) {
	                    throw new Error("thunk did not return a valid node");
	                }

	                return renderedThunk;
	            }

	            /***/
	        },
	        /* 11 */
	        /***/function (module, exports, __webpack_require__) {

	            "use strict";

	            module.exports = function isObject(x) {
	                return (typeof x === 'undefined' ? 'undefined' : _typeof2(x)) === "object" && x !== null;
	            };

	            /***/
	        },
	        /* 12 */
	        /***/function (module, exports, __webpack_require__) {

	            /* WEBPACK VAR INJECTION */(function (global) {
	                var topLevel = typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : {};
	                var minDoc = __webpack_require__(35);

	                var doccy;

	                if (typeof document !== 'undefined') {
	                    doccy = document;
	                } else {
	                    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	                    if (!doccy) {
	                        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	                    }
	                }

	                module.exports = doccy;

	                /* WEBPACK VAR INJECTION */
	            }).call(exports, __webpack_require__(8));

	            /***/
	        },
	        /* 13 */
	        /***/function (module, exports, __webpack_require__) {

	            var document = __webpack_require__(12);

	            var applyProperties = __webpack_require__(14);

	            var isVNode = __webpack_require__(2);
	            var isVText = __webpack_require__(5);
	            var isWidget = __webpack_require__(0);
	            var handleThunk = __webpack_require__(10);

	            module.exports = createElement;

	            function createElement(vnode, opts) {
	                var doc = opts ? opts.document || document : document;
	                var warn = opts ? opts.warn : null;

	                vnode = handleThunk(vnode).a;

	                if (isWidget(vnode)) {
	                    return vnode.init();
	                } else if (isVText(vnode)) {
	                    return doc.createTextNode(vnode.text);
	                } else if (!isVNode(vnode)) {
	                    if (warn) {
	                        warn("Item is not a valid virtual dom node", vnode);
	                    }
	                    return null;
	                }

	                var node = vnode.namespace === null ? doc.createElement(vnode.tagName) : doc.createElementNS(vnode.namespace, vnode.tagName);

	                var props = vnode.properties;
	                applyProperties(node, props);

	                var children = vnode.children;

	                for (var i = 0; i < children.length; i++) {
	                    var childNode = createElement(children[i], opts);
	                    if (childNode) {
	                        node.appendChild(childNode);
	                    }
	                }

	                return node;
	            }

	            /***/
	        },
	        /* 14 */
	        /***/function (module, exports, __webpack_require__) {

	            var isObject = __webpack_require__(11);
	            var isHook = __webpack_require__(4);

	            module.exports = applyProperties;

	            function applyProperties(node, props, previous) {
	                for (var propName in props) {
	                    var propValue = props[propName];

	                    if (propValue === undefined) {
	                        removeProperty(node, propName, propValue, previous);
	                    } else if (isHook(propValue)) {
	                        removeProperty(node, propName, propValue, previous);
	                        if (propValue.hook) {
	                            propValue.hook(node, propName, previous ? previous[propName] : undefined);
	                        }
	                    } else {
	                        if (isObject(propValue)) {
	                            patchObject(node, props, previous, propName, propValue);
	                        } else {
	                            //https://stackoverflow.com/questions/12718186/element-setattributeprop-value-vs-element-prop-value
	                            //node.setAttribute(propName,propValue)
	                            //if(propName.indexOf('omi-') === 0 ||propName.indexOf('__s_') === 0 || propName === 'ref'){
	                            //    node.setAttribute(propName, propValue)
	                            //}else {
	                            //    node[propName] = propValue
	                            //}
	                            if (typeof propValue === 'function') {
	                                node[propName.toLowerCase()] = propValue;
	                            } else {
	                                node.setAttribute(propName, propValue);
	                            }
	                            node[propName] = propValue;
	                        }
	                    }
	                }
	            }

	            function removeProperty(node, propName, propValue, previous) {
	                if (previous) {
	                    var previousValue = previous[propName];

	                    if (!isHook(previousValue)) {
	                        if (propName === "attributes") {
	                            for (var attrName in previousValue) {
	                                node.removeAttribute(attrName);
	                            }
	                        } else if (propName === "style") {
	                            for (var i in previousValue) {
	                                node.style[i] = "";
	                            }
	                        } else if (typeof previousValue === "string") {
	                            node[propName] = "";
	                        } else {
	                            node[propName] = null;
	                        }
	                    } else if (previousValue.unhook) {
	                        previousValue.unhook(node, propName, propValue);
	                    }
	                }
	            }

	            function patchObject(node, props, previous, propName, propValue) {
	                var previousValue = previous ? previous[propName] : undefined;

	                // Set attributes
	                if (propName === "attributes") {
	                    for (var attrName in propValue) {
	                        var attrValue = propValue[attrName];

	                        if (attrValue === undefined) {
	                            node.removeAttribute(attrName);
	                        } else {
	                            node.setAttribute(attrName, attrValue);
	                        }
	                    }

	                    return;
	                }

	                if (previousValue && isObject(previousValue) && getPrototype(previousValue) !== getPrototype(propValue)) {
	                    node[propName] = propValue;
	                    return;
	                }

	                if (!isObject(node[propName])) {
	                    node[propName] = {};
	                }

	                var replacer = propName === "style" ? "" : undefined;

	                for (var k in propValue) {
	                    var value = propValue[k];
	                    node[propName][k] = value === undefined ? replacer : value;
	                }
	            }

	            function getPrototype(value) {
	                if (Object.getPrototypeOf) {
	                    return Object.getPrototypeOf(value);
	                } else if (value.__proto__) {
	                    return value.__proto__;
	                } else if (value.constructor) {
	                    return value.constructor.prototype;
	                }
	            }

	            /***/
	        },
	        /* 15 */
	        /***/function (module, exports, __webpack_require__) {

	            "use strict";

	            var _omi = __webpack_require__(6);

	            var _omi2 = _interopRequireDefault(_omi);

	            var _component = __webpack_require__(28);

	            var _component2 = _interopRequireDefault(_component);

	            function _interopRequireDefault(obj) {
	                return obj && obj.__esModule ? obj : { 'default': obj };
	            }

	            _omi2['default'].Component = _component2['default'];

	            if (typeof window !== 'undefined' && window.Omi) {
	                module.exports = window.Omi;
	            } else {
	                typeof window !== 'undefined' && (window.Omi = _omi2['default']);
	                module.exports = _omi2['default'];
	            }

	            /***/
	        },
	        /* 16 */
	        /***/function (module, exports, __webpack_require__) {

	            var h = __webpack_require__(17);

	            module.exports = h;

	            /***/
	        },
	        /* 17 */
	        /***/function (module, exports, __webpack_require__) {

	            "use strict";

	            var isArray = __webpack_require__(7);

	            var VNode = __webpack_require__(18);
	            var VText = __webpack_require__(19);
	            var isVNode = __webpack_require__(2);
	            var isVText = __webpack_require__(5);
	            var isWidget = __webpack_require__(0);
	            var isHook = __webpack_require__(4);
	            var isVThunk = __webpack_require__(3);

	            var parseTag = __webpack_require__(20);
	            var softSetHook = __webpack_require__(22);
	            var evHook = __webpack_require__(23);

	            module.exports = h;

	            function h(tagName, properties, children) {
	                var _len = arguments.length;
	                if (_len > 3) {
	                    var index = 2,
	                        arr = [];
	                    for (; index < _len; index++) {
	                        arr.push(arguments[index]);
	                    }
	                    return h.call(undefined, tagName, properties, arr);
	                }
	                var childNodes = [];
	                var tag, props, key, namespace;

	                if (!children && isChildren(properties)) {
	                    children = properties;
	                    props = {};
	                }

	                props = props || properties || {};
	                tag = parseTag(tagName, props);

	                // support keys
	                if (props.hasOwnProperty('key')) {
	                    key = props.key;
	                    props.key = undefined;
	                }

	                // support namespace
	                if (props.hasOwnProperty('namespace')) {
	                    namespace = props.namespace;
	                    props.namespace = undefined;
	                }

	                // fix cursor bug
	                if (tag === 'INPUT' && !namespace && props.hasOwnProperty('value') && props.value !== undefined && !isHook(props.value)) {
	                    props.value = softSetHook(props.value);
	                }

	                transformProperties(props);

	                if (children !== undefined && children !== null) {
	                    addChild(children, childNodes, tag, props);
	                }

	                return new VNode(tag, props, childNodes, key, namespace);
	            }

	            function addChild(c, childNodes, tag, props) {
	                if (typeof c === 'string') {
	                    childNodes.push(new VText(c));
	                } else if (typeof c === 'number') {
	                    childNodes.push(new VText(String(c)));
	                } else if (isChild(c)) {
	                    childNodes.push(c);
	                } else if (isArray(c)) {
	                    for (var i = 0; i < c.length; i++) {
	                        addChild(c[i], childNodes, tag, props);
	                    }
	                } else if (c === null || c === undefined || c === false) {
	                    return;
	                } else {
	                    throw UnexpectedVirtualElement({
	                        foreignObject: c,
	                        parentVnode: {
	                            tagName: tag,
	                            properties: props
	                        }
	                    });
	                }
	            }

	            function transformProperties(props) {
	                for (var propName in props) {
	                    if (props.hasOwnProperty(propName)) {
	                        var value = props[propName];

	                        if (isHook(value)) {
	                            continue;
	                        }

	                        if (propName.substr(0, 3) === 'ev-') {
	                            // add ev-foo support
	                            props[propName] = evHook(value);
	                        }
	                    }
	                }
	            }

	            function isChild(x) {
	                return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
	            }

	            function isChildren(x) {
	                return typeof x === 'string' || isArray(x) || isChild(x);
	            }

	            function UnexpectedVirtualElement(data) {
	                var err = new Error();

	                err.type = 'virtual-hyperscript.unexpected.virtual-element';
	                err.message = 'Unexpected virtual child passed to h().\n' + 'Expected a VNode / Vthunk / VWidget / string but:\n' + 'got:\n' + errorString(data.foreignObject) + '.\n' + 'The parent vnode is:\n' + errorString(data.parentVnode);
	                '\n' + 'Suggested fix: change your `h(..., [ ... ])` callsite.';
	                err.foreignObject = data.foreignObject;
	                err.parentVnode = data.parentVnode;

	                return err;
	            }

	            function errorString(obj) {
	                try {
	                    return JSON.stringify(obj, null, '    ');
	                } catch (e) {
	                    return String(obj);
	                }
	            }

	            /***/
	        },
	        /* 18 */
	        /***/function (module, exports, __webpack_require__) {

	            var version = __webpack_require__(1);
	            var isVNode = __webpack_require__(2);
	            var isWidget = __webpack_require__(0);
	            var isThunk = __webpack_require__(3);
	            var isVHook = __webpack_require__(4);

	            module.exports = VirtualNode;

	            var noProperties = {};
	            var noChildren = [];

	            function VirtualNode(tagName, properties, children, key, namespace) {
	                this.tagName = tagName;
	                this.properties = properties || noProperties;
	                this.children = children || noChildren;
	                this.key = key != null ? String(key) : undefined;
	                this.namespace = typeof namespace === "string" ? namespace : null;

	                var count = children && children.length || 0;
	                var descendants = 0;
	                var hasWidgets = false;
	                var hasThunks = false;
	                var descendantHooks = false;
	                var hooks;

	                for (var propName in properties) {
	                    if (properties.hasOwnProperty(propName)) {
	                        var property = properties[propName];
	                        if (isVHook(property) && property.unhook) {
	                            if (!hooks) {
	                                hooks = {};
	                            }

	                            hooks[propName] = property;
	                        }
	                    }
	                }

	                for (var i = 0; i < count; i++) {
	                    var child = children[i];
	                    if (isVNode(child)) {
	                        descendants += child.count || 0;

	                        if (!hasWidgets && child.hasWidgets) {
	                            hasWidgets = true;
	                        }

	                        if (!hasThunks && child.hasThunks) {
	                            hasThunks = true;
	                        }

	                        if (!descendantHooks && (child.hooks || child.descendantHooks)) {
	                            descendantHooks = true;
	                        }
	                    } else if (!hasWidgets && isWidget(child)) {
	                        if (typeof child.destroy === "function") {
	                            hasWidgets = true;
	                        }
	                    } else if (!hasThunks && isThunk(child)) {
	                        hasThunks = true;
	                    }
	                }

	                this.count = count + descendants;
	                this.hasWidgets = hasWidgets;
	                this.hasThunks = hasThunks;
	                this.hooks = hooks;
	                this.descendantHooks = descendantHooks;
	            }

	            VirtualNode.prototype.version = version;
	            VirtualNode.prototype.type = "VirtualNode";

	            /***/
	        },
	        /* 19 */
	        /***/function (module, exports, __webpack_require__) {

	            var version = __webpack_require__(1);

	            module.exports = VirtualText;

	            function VirtualText(text) {
	                this.text = String(text);
	            }

	            VirtualText.prototype.version = version;
	            VirtualText.prototype.type = "VirtualText";

	            /***/
	        },
	        /* 20 */
	        /***/function (module, exports, __webpack_require__) {

	            "use strict";

	            var split = __webpack_require__(21);

	            var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
	            var notClassId = /^\.|#/;

	            module.exports = parseTag;

	            function parseTag(tag, props) {
	                if (!tag) {
	                    return 'div';
	                }

	                var noId = !props.hasOwnProperty('id');

	                var tagParts = split(tag, classIdSplit);
	                var tagName = null;

	                if (notClassId.test(tagParts[1])) {
	                    tagName = 'div';
	                }

	                var classes, part, type, i;

	                for (i = 0; i < tagParts.length; i++) {
	                    part = tagParts[i];

	                    if (!part) {
	                        continue;
	                    }

	                    type = part.charAt(0);

	                    if (!tagName) {
	                        tagName = part;
	                    } else if (type === '.') {
	                        classes = classes || [];
	                        classes.push(part.substring(1, part.length));
	                    } else if (type === '#' && noId) {
	                        props.id = part.substring(1, part.length);
	                    }
	                }

	                if (classes) {
	                    if (props.className) {
	                        classes.push(props.className);
	                    }

	                    props.className = classes.join(' ');
	                }

	                //return props.namespace ? tagName : tagName.toUpperCase();
	                return tagName;
	            }

	            /***/
	        },
	        /* 21 */
	        /***/function (module, exports) {

	            /*!
	             * Cross-Browser Split 1.1.1
	             * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
	             * Available under the MIT License
	             * ECMAScript compliant, uniform cross-browser split method
	             */

	            /**
	             * Splits a string into an array of strings using a regex or string separator. Matches of the
	             * separator are not included in the result array. However, if `separator` is a regex that contains
	             * capturing groups, backreferences are spliced into the result each time `separator` is matched.
	             * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
	             * cross-browser.
	             * @param {String} str String to split.
	             * @param {RegExp|String} separator Regex or string to use for separating the string.
	             * @param {Number} [limit] Maximum number of items to include in the result array.
	             * @returns {Array} Array of substrings.
	             * @example
	             *
	             * // Basic use
	             * split('a b c d', ' ');
	             * // -> ['a', 'b', 'c', 'd']
	             *
	             * // With limit
	             * split('a b c d', ' ', 2);
	             * // -> ['a', 'b']
	             *
	             * // Backreferences in result array
	             * split('..word1 word2..', /([a-z]+)(\d+)/i);
	             * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
	             */
	            module.exports = function split(undef) {

	                var nativeSplit = String.prototype.split,
	                    compliantExecNpcg = /()??/.exec("")[1] === undef,

	                // NPCG: nonparticipating capturing group
	                self;

	                self = function self(str, separator, limit) {
	                    // If `separator` is not a regex, use `nativeSplit`
	                    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
	                        return nativeSplit.call(str, separator, limit);
	                    }
	                    var output = [],
	                        flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + ( // Proposed for ES6
	                    separator.sticky ? "y" : ""),

	                    // Firefox 3+
	                    lastLastIndex = 0,

	                    // Make `global` and avoid `lastIndex` issues by working with a copy
	                    separator = new RegExp(separator.source, flags + "g"),
	                        separator2,
	                        match,
	                        lastIndex,
	                        lastLength;
	                    str += ""; // Type-convert
	                    if (!compliantExecNpcg) {
	                        // Doesn't need flags gy, but they don't hurt
	                        separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
	                    }
	                    /* Values for `limit`, per the spec:
	                     * If undefined: 4294967295 // Math.pow(2, 32) - 1
	                     * If 0, Infinity, or NaN: 0
	                     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
	                     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
	                     * If other: Type-convert, then use the above rules
	                     */
	                    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
	                    limit >>> 0; // ToUint32(limit)
	                    while (match = separator.exec(str)) {
	                        // `separator.lastIndex` is not reliable cross-browser
	                        lastIndex = match.index + match[0].length;
	                        if (lastIndex > lastLastIndex) {
	                            output.push(str.slice(lastLastIndex, match.index));
	                            // Fix browsers whose `exec` methods don't consistently return `undefined` for
	                            // nonparticipating capturing groups
	                            if (!compliantExecNpcg && match.length > 1) {
	                                match[0].replace(separator2, function () {
	                                    for (var i = 1; i < arguments.length - 2; i++) {
	                                        if (arguments[i] === undef) {
	                                            match[i] = undef;
	                                        }
	                                    }
	                                });
	                            }
	                            if (match.length > 1 && match.index < str.length) {
	                                Array.prototype.push.apply(output, match.slice(1));
	                            }
	                            lastLength = match[0].length;
	                            lastLastIndex = lastIndex;
	                            if (output.length >= limit) {
	                                break;
	                            }
	                        }
	                        if (separator.lastIndex === match.index) {
	                            separator.lastIndex++; // Avoid an infinite loop
	                        }
	                    }
	                    if (lastLastIndex === str.length) {
	                        if (lastLength || !separator.test("")) {
	                            output.push("");
	                        }
	                    } else {
	                        output.push(str.slice(lastLastIndex));
	                    }
	                    return output.length > limit ? output.slice(0, limit) : output;
	                };

	                return self;
	            }();

	            /***/
	        },
	        /* 22 */
	        /***/function (module, exports, __webpack_require__) {

	            "use strict";

	            module.exports = SoftSetHook;

	            function SoftSetHook(value) {
	                if (!(this instanceof SoftSetHook)) {
	                    return new SoftSetHook(value);
	                }

	                this.value = value;
	            }

	            SoftSetHook.prototype.hook = function (node, propertyName) {
	                if (node[propertyName] !== this.value) {
	                    node[propertyName] = this.value;
	                }
	            };

	            /***/
	        },
	        /* 23 */
	        /***/function (module, exports, __webpack_require__) {

	            "use strict";

	            var EvStore = __webpack_require__(24);

	            module.exports = EvHook;

	            function EvHook(value) {
	                if (!(this instanceof EvHook)) {
	                    return new EvHook(value);
	                }

	                this.value = value;
	            }

	            EvHook.prototype.hook = function (node, propertyName) {
	                var es = EvStore(node);
	                var propName = propertyName.substr(3);

	                es[propName] = this.value;
	            };

	            EvHook.prototype.unhook = function (node, propertyName) {
	                var es = EvStore(node);
	                var propName = propertyName.substr(3);

	                es[propName] = undefined;
	            };

	            /***/
	        },
	        /* 24 */
	        /***/function (module, exports, __webpack_require__) {

	            "use strict";

	            var OneVersionConstraint = __webpack_require__(25);

	            var MY_VERSION = '7';
	            OneVersionConstraint('ev-store', MY_VERSION);

	            var hashKey = '__EV_STORE_KEY@' + MY_VERSION;

	            module.exports = EvStore;

	            function EvStore(elem) {
	                var hash = elem[hashKey];

	                if (!hash) {
	                    hash = elem[hashKey] = {};
	                }

	                return hash;
	            }

	            /***/
	        },
	        /* 25 */
	        /***/function (module, exports, __webpack_require__) {

	            "use strict";

	            var Individual = __webpack_require__(26);

	            module.exports = OneVersion;

	            function OneVersion(moduleName, version, defaultValue) {
	                var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
	                var enforceKey = key + '_ENFORCE_SINGLETON';

	                var versionValue = Individual(enforceKey, version);

	                if (versionValue !== version) {
	                    throw new Error('Can only have one copy of ' + moduleName + '.\n' + 'You already have version ' + versionValue + ' installed.\n' + 'This means you cannot install version ' + version);
	                }

	                return Individual(key, defaultValue);
	            }

	            /***/
	        },
	        /* 26 */
	        /***/function (module, exports, __webpack_require__) {

	            "use strict";
	            /* WEBPACK VAR INJECTION */
	            (function (global) {

	                /*global window, global*/

	                var root = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

	                module.exports = Individual;

	                function Individual(key, value) {
	                    if (key in root) {
	                        return root[key];
	                    }

	                    root[key] = value;

	                    return value;
	                }

	                /* WEBPACK VAR INJECTION */
	            }).call(exports, __webpack_require__(8));

	            /***/
	        },
	        /* 27 */
	        /***/function (module, exports, __webpack_require__) {

	            "use strict";

	            Object.defineProperty(exports, '__esModule', {
	                value: true
	            });
	            var isValidString = function isValidString(param) {
	                return typeof param === 'string' && param.length > 0;
	            };

	            var startsWith = function startsWith(string, start) {
	                return string[0] === start;
	            };

	            var isSelector = function isSelector(param) {
	                return isValidString(param) && (startsWith(param, '.') || startsWith(param, '#'));
	            };

	            var node = function node(h) {
	                return function (tagName) {
	                    return function (first) {
	                        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                            rest[_key - 1] = arguments[_key];
	                        }

	                        if (isSelector(first)) {
	                            return h.apply(undefined, [tagName + first].concat(rest));
	                        } else if (typeof first === 'undefined') {
	                            return h(tagName);
	                        } else {
	                            return h.apply(undefined, [tagName, first].concat(rest));
	                        }
	                    };
	                };
	            };

	            var TAG_NAMES = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'content', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'image', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark', 'marquee', 'math', 'menu', 'menuitem', 'meta', 'meter', 'multicol', 'nav', 'nextid', 'nobr', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'plaintext', 'pre', 'progress', 'q', 'rb', 'rbc', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'slot', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp'];

	            exports['default'] = function (h) {
	                var createTag = node(h);
	                var exported = { TAG_NAMES: TAG_NAMES, isSelector: isSelector, createTag: createTag };
	                TAG_NAMES.forEach(function (n) {
	                    exported[n] = createTag(n);
	                });
	                return exported;
	            };

	            module.exports = exports['default'];

	            /***/
	        },
	        /* 28 */
	        /***/function (module, exports, __webpack_require__) {

	            "use strict";

	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });

	            var _createClass = function () {
	                function defineProperties(target, props) {
	                    for (var i = 0; i < props.length; i++) {
	                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	                    }
	                }return function (Constructor, protoProps, staticProps) {
	                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	                };
	            }();

	            var _omi = __webpack_require__(6);

	            var _omi2 = _interopRequireDefault(_omi);

	            var _style = __webpack_require__(29);

	            var _style2 = _interopRequireDefault(_style);

	            var _diff = __webpack_require__(30);

	            var _diff2 = _interopRequireDefault(_diff);

	            var _patch = __webpack_require__(33);

	            var _patch2 = _interopRequireDefault(_patch);

	            var _createElement = __webpack_require__(39);

	            var _createElement2 = _interopRequireDefault(_createElement);

	            function _interopRequireDefault(obj) {
	                return obj && obj.__esModule ? obj : { 'default': obj };
	            }

	            function _classCallCheck(instance, Constructor) {
	                if (!(instance instanceof Constructor)) {
	                    throw new TypeError("Cannot call a class as a function");
	                }
	            }

	            var Component = function () {
	                function Component(data) {
	                    _classCallCheck(this, Component);

	                    this.data = data || {};
	                    this.id = _omi2['default'].getInstanceId();
	                    this.children = [];
	                    this._omi_scopedAttr = _omi2['default'].PREFIX + this.id;
	                    _omi2['default'].instances[this.id] = this;
	                    this.refs = {};
	                }

	                _createClass(Component, [{
	                    key: 'render',
	                    value: function render() {}
	                }, {
	                    key: 'install',
	                    value: function install() {}
	                }, {
	                    key: 'beforeUpdate',
	                    value: function beforeUpdate() {}
	                }, {
	                    key: 'update',
	                    value: function update() {
	                        this._resetUsing(this);
	                        this.beforeUpdate();
	                        // this._childrenBeforeUpdate(this)
	                        this.beforeRender();
	                        this._preVirtualDom = this._virtualDom;
	                        this._virtualDom = this.render();
	                        this._normalize(this._virtualDom);

	                        this._fixVirtualDomCount(this._virtualDomCount(this._preVirtualDom, [[this._preVirtualDom]]));
	                        this._fixVirtualDomCount(this._virtualDomCount(this._virtualDom, [[this._virtualDom]]));

	                        (0, _patch2['default'])(this.node, (0, _diff2['default'])(this._preVirtualDom, this._virtualDom));

	                        this._mixAttr(this);

	                        this._childrenAfterUpdate(this);
	                        this.afterUpdate();

	                        this._childrenInstalled(this);
	                        if (!this.renderTo) {
	                            // 子节点自己更新之后同步至父节点的虚拟
	                            this.parent._virtualDom.children[this._omi_instanceIndex] = this._virtualDom;
	                        }

	                        this._fixForm();
	                    }
	                }, {
	                    key: '_virtualDomCount',
	                    value: function _virtualDomCount(root, arr) {
	                        var _this = this;

	                        root.count = root.children.length;
	                        var list = [];
	                        root.children.forEach(function (child) {
	                            list.push(child);
	                            if (child.children) {
	                                child.count = child.children.length;
	                                child._pp = root;
	                            }
	                        });

	                        arr.push(list);

	                        root.children.forEach(function (child) {
	                            if (child.children) {
	                                _this._virtualDomCount(child, arr);
	                            }
	                        });
	                        return arr;
	                    }
	                }, {
	                    key: '_fixVirtualDomCount',
	                    value: function _fixVirtualDomCount(list) {
	                        for (var i = list.length - 1; i >= 0; i--) {
	                            var children = list[i];
	                            children.forEach(function (child) {
	                                if (child._pp) {
	                                    child._pp.count += child.count || 0;
	                                }
	                            });
	                        }
	                    }

	                    // _childrenBeforeUpdate(root) {
	                    //    root.children.forEach((child) => {
	                    //        child.beforeUpdate()
	                    //        this._childrenBeforeUpdate(child)
	                    //    })
	                    // }

	                }, {
	                    key: '_childrenAfterUpdate',
	                    value: function _childrenAfterUpdate(root) {
	                        var _this2 = this;

	                        root.children.forEach(function (child) {
	                            _this2._childrenAfterUpdate(child);
	                            child.afterUpdate();
	                        });
	                    }
	                }, {
	                    key: 'afterUpdate',
	                    value: function afterUpdate() {}
	                }, {
	                    key: 'beforeRender',
	                    value: function beforeRender() {}
	                }, {
	                    key: 'installed',
	                    value: function installed() {}
	                }, {
	                    key: 'style',
	                    value: function style() {}
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
	                    key: '_render',
	                    value: function _render(first) {
	                        this._generateCss();
	                        this._virtualDom = this.render();
	                        this._normalize(this._virtualDom, first);
	                        if (this.renderTo) {
	                            this.node = (0, _createElement2['default'])(this._virtualDom);
	                            while (this.renderTo.firstChild) {
	                                this.renderTo.removeChild(this.renderTo.firstChild);
	                            }
	                            this.renderTo.appendChild(this.node);
	                            this._mixAttr(this);
	                            this._fixForm();
	                        }
	                    }
	                }, {
	                    key: '_generateCss',
	                    value: function _generateCss() {
	                        var name = this.constructor.is;
	                        this.css = (this.style() || '').replace(/<\/?style>/g, '');
	                        var shareAttr = name ? this.data.scopedSelfCss ? this._omi_scopedAttr : _omi2['default'].PREFIX + name.toLowerCase() : this._omi_scopedAttr;

	                        if (this.css) {
	                            if (this.data.closeScopedStyle) {
	                                _omi2['default'].style[shareAttr + '_g'] = this.css;
	                                if (!_omi2['default'].ssr) {
	                                    if (this.css !== this._preCss) {
	                                        _style2['default'].addStyle(this.css, this.id);
	                                        this._preCss = this.css;
	                                    }
	                                }
	                            } else if (this.data.scopedSelfCss || !_omi2['default'].style[shareAttr]) {
	                                if (_omi2['default'].scopedStyle) {
	                                    this.css = _style2['default'].scoper(this.css, this.data.scopedSelfCss ? '[' + this._omi_scopedAttr + ']' : '[' + shareAttr + ']');
	                                }
	                                _omi2['default'].style[shareAttr] = this.css;
	                                if (!_omi2['default'].ssr) {
	                                    if (this.css !== this._preCss) {
	                                        _style2['default'].addStyle(this.css, this.id);
	                                        this._preCss = this.css;
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }, {
	                    key: '_normalize',
	                    value: function _normalize(root, first, parent, index, parentInstance) {
	                        var _this3 = this;

	                        var ps = root.properties;
	                        // for scoped css
	                        if (ps) {
	                            if (_omi2['default'].scopedStyle && this.constructor.is) {
	                                ps[_omi2['default'].PREFIX + this.constructor.is.toLowerCase()] = '';
	                            }
	                            ps[this._omi_scopedAttr] = '';
	                        }

	                        if (root.tagName) {
	                            var Ctor = _omi2['default'].getConstructor(root.tagName);
	                            if (Ctor) {
	                                var cmi = this._getNextChild(root.tagName, parentInstance);
	                                // not using pre instance the first time
	                                if (cmi && !first) {
	                                    if (cmi.data.selfDataFirst) {
	                                        cmi.data = Object.assign({}, root.properties, cmi.data);
	                                    } else {
	                                        cmi.data = Object.assign({}, cmi.data, root.properties);
	                                    }
	                                    cmi.beforeUpdate();
	                                    cmi.beforeRender();
	                                    cmi._render();
	                                    parent[index] = cmi._virtualDom;
	                                } else {
	                                    if (Ctor) {
	                                        var instance = new Ctor(root.properties);
	                                        if (instance.data.children !== undefined) {
	                                            instance.data._children = instance.data.children;
	                                            console.warn('The children property will be covered.access it by _children');
	                                        }
	                                        instance.data.children = root.children;
	                                        instance.install();
	                                        instance.beforeRender();
	                                        instance._render(first);
	                                        instance.parent = parentInstance;
	                                        instance._omi_needInstalled = true;
	                                        if (parentInstance) {
	                                            instance.parent = parentInstance;
	                                            instance._omi_instanceIndex = parentInstance.children.length;
	                                            parentInstance.children.push(instance);
	                                            parent[index] = instance._virtualDom;
	                                            if (root.properties['omi-name']) {
	                                                parentInstance[root.properties['omi-name']] = instance;
	                                            }
	                                        } else {
	                                            this._virtualDom = instance._virtualDom;
	                                            if (root.properties['omi-name']) {
	                                                this[root.properties['omi-name']] = instance;
	                                            }
	                                        }

	                                        if (root.properties['omi-id']) {
	                                            _omi2['default'].mapping[root.properties['omi-id']] = instance;
	                                        }
	                                    }
	                                }
	                            }
	                        }

	                        root.children && root.children.forEach(function (child, index) {
	                            _this3._normalize(child, first, root.children, index, _this3);
	                        });
	                    }
	                }, {
	                    key: '_resetUsing',
	                    value: function _resetUsing(root) {
	                        var _this4 = this;

	                        root.children.forEach(function (child) {
	                            _this4._resetUsing(child);
	                            child._using = false;
	                        });
	                    }
	                }, {
	                    key: '_getNextChild',
	                    value: function _getNextChild(cn, parentInstance) {
	                        if (parentInstance) {
	                            for (var i = 0, len = parentInstance.children.length; i < len; i++) {
	                                var child = parentInstance.children[i];
	                                if (cn.replace(/-/g, '').toLowerCase() === child.constructor.is.replace(/-/g, '').toLowerCase() && !child._using) {
	                                    child._using = true;
	                                    return child;
	                                }
	                            }
	                        }
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
	                                        option.selected = true;
	                                    }
	                                });
	                            } else {
	                                var firstOption = _omi2['default'].$$('option', select)[0];
	                                firstOption && (firstOption.selected = true);
	                            }
	                        });
	                    }
	                }, {
	                    key: '_childrenInstalled',
	                    value: function _childrenInstalled(root) {
	                        var _this5 = this;

	                        root.children.forEach(function (child) {
	                            _this5._childrenInstalled(child);
	                            child._omi_needInstalled && child.installed();
	                            child._omi_needInstalled = false;
	                            child._execInstalledHandlers();
	                        });
	                    }
	                }, {
	                    key: '_mixPlugins',
	                    value: function _mixPlugins() {
	                        var _this6 = this;

	                        Object.keys(_omi2['default'].plugins).forEach(function (item) {
	                            var nodes = _omi2['default'].$$('*[' + item + ']', _this6.node);
	                            nodes.forEach(function (node) {
	                                if (node.hasAttribute(_this6._omi_scopedAttr)) {
	                                    _omi2['default'].plugins[item](node, _this6);
	                                }
	                            });
	                            if (_this6.node.hasAttribute(item)) {
	                                _omi2['default'].plugins[item](_this6.node, _this6);
	                            }
	                        });
	                    }
	                }, {
	                    key: '_mixRefs',
	                    value: function _mixRefs() {
	                        var _this7 = this;

	                        this.refs = {};
	                        var nodes = _omi2['default'].$$('*[ref]', this.node);
	                        nodes.forEach(function (node) {
	                            if (node.hasAttribute(_this7._omi_scopedAttr)) {
	                                _this7.refs[node.getAttribute('ref')] = node;
	                            }
	                        });
	                        var attr = this.node.getAttribute('ref');
	                        if (attr) {
	                            this.refs[attr] = this.node;
	                        }
	                    }
	                }, {
	                    key: '_mixAttr',
	                    value: function _mixAttr(current) {
	                        current._mixRefs();
	                        current._mixPlugins();
	                        for (var i = 0, len = current.children.length; i < len; i++) {
	                            var child = current.children[i];
	                            child.node = _omi2['default'].$('[' + child._omi_scopedAttr + ']', current.node);
	                            if (!child.node) {
	                                child._virtualDom = null;
	                                current.children.splice(i, 1);
	                                i--;
	                                len--;
	                            } else {
	                                child._omi_instanceIndex = i;
	                                current._mixAttr(child);
	                            }
	                        }
	                    }
	                }]);

	                return Component;
	            }();

	            exports['default'] = Component;

	            /***/
	        },
	        /* 29 */
	        /***/function (module, exports, __webpack_require__) {

	            "use strict";

	            Object.defineProperty(exports, "__esModule", {
	                value: true
	            });

	            var _omi = __webpack_require__(6);

	            var _omi2 = _interopRequireDefault(_omi);

	            function _interopRequireDefault(obj) {
	                return obj && obj.__esModule ? obj : { 'default': obj };
	            }

	            // many thanks to https://github.com/thomaspark/scoper/
	            function scoper(css, prefix) {
	                // https://www.w3.org/TR/css-syntax-3/#lexical
	                css = css.replace(/\/\*[^*]*\*+([^/][^*]*\*+)*\//g, '');
	                // eslint-disable-next-line
	                var re = new RegExp('([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{}]*{)|\s*{)', 'g');
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
	                    if (typeof g2 === 'undefined') {
	                        g2 = '';
	                    }

	                    /* eslint-ignore-next-line */
	                    if (g1.match(/^\s*(@media|\d+%?|@-webkit-keyframes|@keyframes|to|from|@font-face)/)) {
	                        return g1 + g2 + g3;
	                    }

	                    var appendClass = g1.replace(/(\s*)$/, '') + prefix + g2;
	                    var prependClass = prefix + ' ' + g1.trim() + g2;
	                    return appendClass + ',' + prependClass + g3;
	                });

	                return css;
	            }

	            function addStyle(cssText, id) {
	                var ele = document.getElementById(_omi2['default'].PREFIX + id);
	                var head = document.getElementsByTagName('head')[0];
	                if (ele && ele.parentNode === head) {
	                    head.removeChild(ele);
	                }

	                var someThingStyles = document.createElement('style');
	                head.appendChild(someThingStyles);
	                someThingStyles.setAttribute('type', 'text/css');
	                someThingStyles.setAttribute('id', _omi2['default'].PREFIX + id);
	                if (window.ActiveXObject) {
	                    someThingStyles.styleSheet.cssText = cssText;
	                } else {
	                    someThingStyles.textContent = cssText;
	                }
	            }

	            exports['default'] = {
	                scoper: scoper,
	                addStyle: addStyle
	            };

	            /***/
	        },
	        /* 30 */
	        /***/function (module, exports, __webpack_require__) {

	            var diff = __webpack_require__(31);

	            module.exports = diff;

	            /***/
	        },
	        /* 31 */
	        /***/function (module, exports, __webpack_require__) {

	            var isArray = __webpack_require__(7);

	            var VPatch = __webpack_require__(9);
	            var isVNode = __webpack_require__(2);
	            var isVText = __webpack_require__(5);
	            var isWidget = __webpack_require__(0);
	            var isThunk = __webpack_require__(3);
	            var handleThunk = __webpack_require__(10);

	            var diffProps = __webpack_require__(32);

	            module.exports = diff;

	            function diff(a, b) {
	                var patch = { a: a };
	                walk(a, b, patch, 0);
	                return patch;
	            }

	            function walk(a, b, patch, index) {
	                if (a === b) {
	                    return;
	                }

	                var apply = patch[index];
	                var applyClear = false;

	                if (isThunk(a) || isThunk(b)) {
	                    thunks(a, b, patch, index);
	                } else if (b == null) {

	                    // If a is a widget we will add a remove patch for it
	                    // Otherwise any child widgets/hooks must be destroyed.
	                    // This prevents adding two remove patches for a widget.
	                    if (!isWidget(a)) {
	                        clearState(a, patch, index);
	                        apply = patch[index];
	                    }

	                    apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b));
	                } else if (isVNode(b)) {
	                    if (isVNode(a)) {
	                        if (a.tagName === b.tagName && a.namespace === b.namespace && a.key === b.key) {
	                            var propsPatch = diffProps(a.properties, b.properties);
	                            if (propsPatch) {
	                                apply = appendPatch(apply, new VPatch(VPatch.PROPS, a, propsPatch));
	                            }
	                            apply = diffChildren(a, b, patch, apply, index);
	                        } else {
	                            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b));
	                            applyClear = true;
	                        }
	                    } else {
	                        apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b));
	                        applyClear = true;
	                    }
	                } else if (isVText(b)) {
	                    if (!isVText(a)) {
	                        apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b));
	                        applyClear = true;
	                    } else if (a.text !== b.text) {
	                        apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b));
	                    }
	                } else if (isWidget(b)) {
	                    if (!isWidget(a)) {
	                        applyClear = true;
	                    }

	                    apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b));
	                }

	                if (apply) {
	                    patch[index] = apply;
	                }

	                if (applyClear) {
	                    clearState(a, patch, index);
	                }
	            }

	            function diffChildren(a, b, patch, apply, index) {
	                var aChildren = a.children;
	                var orderedSet = reorder(aChildren, b.children);
	                var bChildren = orderedSet.children;

	                var aLen = aChildren.length;
	                var bLen = bChildren.length;
	                var len = aLen > bLen ? aLen : bLen;

	                for (var i = 0; i < len; i++) {
	                    var leftNode = aChildren[i];
	                    var rightNode = bChildren[i];
	                    index += 1;

	                    if (!leftNode) {
	                        if (rightNode) {
	                            // Excess nodes in b need to be added
	                            apply = appendPatch(apply, new VPatch(VPatch.INSERT, null, rightNode));
	                        }
	                    } else {
	                        walk(leftNode, rightNode, patch, index);
	                    }

	                    if (isVNode(leftNode) && leftNode.count) {
	                        index += leftNode.count;
	                    }
	                }

	                if (orderedSet.moves) {
	                    // Reorder nodes last
	                    apply = appendPatch(apply, new VPatch(VPatch.ORDER, a, orderedSet.moves));
	                }

	                return apply;
	            }

	            function clearState(vNode, patch, index) {
	                // TODO: Make this a single walk, not two
	                unhook(vNode, patch, index);
	                destroyWidgets(vNode, patch, index);
	            }

	            // Patch records for all destroyed widgets must be added because we need
	            // a DOM node reference for the destroy function
	            function destroyWidgets(vNode, patch, index) {
	                if (isWidget(vNode)) {
	                    if (typeof vNode.destroy === "function") {
	                        patch[index] = appendPatch(patch[index], new VPatch(VPatch.REMOVE, vNode, null));
	                    }
	                } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
	                    var children = vNode.children;
	                    var len = children.length;
	                    for (var i = 0; i < len; i++) {
	                        var child = children[i];
	                        index += 1;

	                        destroyWidgets(child, patch, index);

	                        if (isVNode(child) && child.count) {
	                            index += child.count;
	                        }
	                    }
	                } else if (isThunk(vNode)) {
	                    thunks(vNode, null, patch, index);
	                }
	            }

	            // Create a sub-patch for thunks
	            function thunks(a, b, patch, index) {
	                var nodes = handleThunk(a, b);
	                var thunkPatch = diff(nodes.a, nodes.b);
	                if (hasPatches(thunkPatch)) {
	                    patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch);
	                }
	            }

	            function hasPatches(patch) {
	                for (var index in patch) {
	                    if (index !== "a") {
	                        return true;
	                    }
	                }

	                return false;
	            }

	            // Execute hooks when two nodes are identical
	            function unhook(vNode, patch, index) {
	                if (isVNode(vNode)) {
	                    if (vNode.hooks) {
	                        patch[index] = appendPatch(patch[index], new VPatch(VPatch.PROPS, vNode, undefinedKeys(vNode.hooks)));
	                    }

	                    if (vNode.descendantHooks || vNode.hasThunks) {
	                        var children = vNode.children;
	                        var len = children.length;
	                        for (var i = 0; i < len; i++) {
	                            var child = children[i];
	                            index += 1;

	                            unhook(child, patch, index);

	                            if (isVNode(child) && child.count) {
	                                index += child.count;
	                            }
	                        }
	                    }
	                } else if (isThunk(vNode)) {
	                    thunks(vNode, null, patch, index);
	                }
	            }

	            function undefinedKeys(obj) {
	                var result = {};

	                for (var key in obj) {
	                    result[key] = undefined;
	                }

	                return result;
	            }

	            // List diff, naive left to right reordering
	            function reorder(aChildren, bChildren) {
	                // O(M) time, O(M) memory
	                var bChildIndex = keyIndex(bChildren);
	                var bKeys = bChildIndex.keys;
	                var bFree = bChildIndex.free;

	                if (bFree.length === bChildren.length) {
	                    return {
	                        children: bChildren,
	                        moves: null
	                    };
	                }

	                // O(N) time, O(N) memory
	                var aChildIndex = keyIndex(aChildren);
	                var aKeys = aChildIndex.keys;
	                var aFree = aChildIndex.free;

	                if (aFree.length === aChildren.length) {
	                    return {
	                        children: bChildren,
	                        moves: null
	                    };
	                }

	                // O(MAX(N, M)) memory
	                var newChildren = [];

	                var freeIndex = 0;
	                var freeCount = bFree.length;
	                var deletedItems = 0;

	                // Iterate through a and match a node in b
	                // O(N) time,
	                for (var i = 0; i < aChildren.length; i++) {
	                    var aItem = aChildren[i];
	                    var itemIndex;

	                    if (aItem.key) {
	                        if (bKeys.hasOwnProperty(aItem.key)) {
	                            // Match up the old keys
	                            itemIndex = bKeys[aItem.key];
	                            newChildren.push(bChildren[itemIndex]);
	                        } else {
	                            // Remove old keyed items
	                            itemIndex = i - deletedItems++;
	                            newChildren.push(null);
	                        }
	                    } else {
	                        // Match the item in a with the next free item in b
	                        if (freeIndex < freeCount) {
	                            itemIndex = bFree[freeIndex++];
	                            newChildren.push(bChildren[itemIndex]);
	                        } else {
	                            // There are no free items in b to match with
	                            // the free items in a, so the extra free nodes
	                            // are deleted.
	                            itemIndex = i - deletedItems++;
	                            newChildren.push(null);
	                        }
	                    }
	                }

	                var lastFreeIndex = freeIndex >= bFree.length ? bChildren.length : bFree[freeIndex];

	                // Iterate through b and append any new keys
	                // O(M) time
	                for (var j = 0; j < bChildren.length; j++) {
	                    var newItem = bChildren[j];

	                    if (newItem.key) {
	                        if (!aKeys.hasOwnProperty(newItem.key)) {
	                            // Add any new keyed items
	                            // We are adding new items to the end and then sorting them
	                            // in place. In future we should insert new items in place.
	                            newChildren.push(newItem);
	                        }
	                    } else if (j >= lastFreeIndex) {
	                        // Add any leftover non-keyed items
	                        newChildren.push(newItem);
	                    }
	                }

	                var simulate = newChildren.slice();
	                var simulateIndex = 0;
	                var removes = [];
	                var inserts = [];
	                var simulateItem;

	                for (var k = 0; k < bChildren.length;) {
	                    var wantedItem = bChildren[k];
	                    simulateItem = simulate[simulateIndex];

	                    // remove items
	                    while (simulateItem === null && simulate.length) {
	                        removes.push(remove(simulate, simulateIndex, null));
	                        simulateItem = simulate[simulateIndex];
	                    }

	                    if (!simulateItem || simulateItem.key !== wantedItem.key) {
	                        // if we need a key in this position...
	                        if (wantedItem.key) {
	                            if (simulateItem && simulateItem.key) {
	                                // if an insert doesn't put this key in place, it needs to move
	                                if (bKeys[simulateItem.key] !== k + 1) {
	                                    removes.push(remove(simulate, simulateIndex, simulateItem.key));
	                                    simulateItem = simulate[simulateIndex];
	                                    // if the remove didn't put the wanted item in place, we need to insert it
	                                    if (!simulateItem || simulateItem.key !== wantedItem.key) {
	                                        inserts.push({ key: wantedItem.key, to: k });
	                                    }
	                                    // items are matching, so skip ahead
	                                    else {
	                                            simulateIndex++;
	                                        }
	                                } else {
	                                    inserts.push({ key: wantedItem.key, to: k });
	                                }
	                            } else {
	                                inserts.push({ key: wantedItem.key, to: k });
	                            }
	                            k++;
	                        }
	                        // a key in simulate has no matching wanted key, remove it
	                        else if (simulateItem && simulateItem.key) {
	                                removes.push(remove(simulate, simulateIndex, simulateItem.key));
	                            }
	                    } else {
	                        simulateIndex++;
	                        k++;
	                    }
	                }

	                // remove all the remaining nodes from simulate
	                while (simulateIndex < simulate.length) {
	                    simulateItem = simulate[simulateIndex];
	                    removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key));
	                }

	                // If the only moves we have are deletes then we can just
	                // let the delete patch remove these items.
	                if (removes.length === deletedItems && !inserts.length) {
	                    return {
	                        children: newChildren,
	                        moves: null
	                    };
	                }

	                return {
	                    children: newChildren,
	                    moves: {
	                        removes: removes,
	                        inserts: inserts
	                    }
	                };
	            }

	            function remove(arr, index, key) {
	                arr.splice(index, 1);

	                return {
	                    from: index,
	                    key: key
	                };
	            }

	            function keyIndex(children) {
	                var keys = {};
	                var free = [];
	                var length = children.length;

	                for (var i = 0; i < length; i++) {
	                    var child = children[i];

	                    if (child.key) {
	                        keys[child.key] = i;
	                    } else {
	                        free.push(i);
	                    }
	                }

	                return {
	                    keys: keys, // A hash of key name to index
	                    free: free // An array of unkeyed item indices
	                };
	            }

	            function appendPatch(apply, patch) {
	                if (apply) {
	                    if (isArray(apply)) {
	                        apply.push(patch);
	                    } else {
	                        apply = [apply, patch];
	                    }

	                    return apply;
	                } else {
	                    return patch;
	                }
	            }

	            /***/
	        },
	        /* 32 */
	        /***/function (module, exports, __webpack_require__) {

	            var isObject = __webpack_require__(11);
	            var isHook = __webpack_require__(4);

	            module.exports = diffProps;

	            function diffProps(a, b) {
	                var diff;

	                for (var aKey in a) {
	                    if (!(aKey in b)) {
	                        diff = diff || {};
	                        diff[aKey] = undefined;
	                    }

	                    var aValue = a[aKey];
	                    var bValue = b[aKey];

	                    if (aValue === bValue) {
	                        continue;
	                    } else if (isObject(aValue) && isObject(bValue)) {
	                        if (getPrototype(bValue) !== getPrototype(aValue)) {
	                            diff = diff || {};
	                            diff[aKey] = bValue;
	                        } else if (isHook(bValue)) {
	                            diff = diff || {};
	                            diff[aKey] = bValue;
	                        } else {
	                            var objectDiff = diffProps(aValue, bValue);
	                            if (objectDiff) {
	                                diff = diff || {};
	                                diff[aKey] = objectDiff;
	                            }
	                        }
	                    } else {
	                        diff = diff || {};
	                        diff[aKey] = bValue;
	                    }
	                }

	                for (var bKey in b) {
	                    if (!(bKey in a)) {
	                        diff = diff || {};
	                        diff[bKey] = b[bKey];
	                    }
	                }

	                return diff;
	            }

	            function getPrototype(value) {
	                if (Object.getPrototypeOf) {
	                    return Object.getPrototypeOf(value);
	                } else if (value.__proto__) {
	                    return value.__proto__;
	                } else if (value.constructor) {
	                    return value.constructor.prototype;
	                }
	            }

	            /***/
	        },
	        /* 33 */
	        /***/function (module, exports, __webpack_require__) {

	            var patch = __webpack_require__(34);

	            module.exports = patch;

	            /***/
	        },
	        /* 34 */
	        /***/function (module, exports, __webpack_require__) {

	            var document = __webpack_require__(12);
	            var isArray = __webpack_require__(7);

	            var render = __webpack_require__(13);
	            var domIndex = __webpack_require__(36);
	            var patchOp = __webpack_require__(37);
	            module.exports = patch;

	            function patch(rootNode, patches, renderOptions) {
	                renderOptions = renderOptions || {};
	                renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch ? renderOptions.patch : patchRecursive;
	                renderOptions.render = renderOptions.render || render;

	                return renderOptions.patch(rootNode, patches, renderOptions);
	            }

	            function patchRecursive(rootNode, patches, renderOptions) {
	                var indices = patchIndices(patches);

	                if (indices.length === 0) {
	                    return rootNode;
	                }

	                var index = domIndex(rootNode, patches.a, indices);
	                var ownerDocument = rootNode.ownerDocument;

	                if (!renderOptions.document && ownerDocument !== document) {
	                    renderOptions.document = ownerDocument;
	                }

	                for (var i = 0; i < indices.length; i++) {
	                    var nodeIndex = indices[i];
	                    rootNode = applyPatch(rootNode, index[nodeIndex], patches[nodeIndex], renderOptions);
	                }

	                return rootNode;
	            }

	            function applyPatch(rootNode, domNode, patchList, renderOptions) {
	                if (!domNode) {
	                    return rootNode;
	                }

	                var newNode;

	                if (isArray(patchList)) {
	                    for (var i = 0; i < patchList.length; i++) {
	                        newNode = patchOp(patchList[i], domNode, renderOptions);

	                        if (domNode === rootNode) {
	                            rootNode = newNode;
	                        }
	                    }
	                } else {
	                    newNode = patchOp(patchList, domNode, renderOptions);

	                    if (domNode === rootNode) {
	                        rootNode = newNode;
	                    }
	                }

	                return rootNode;
	            }

	            function patchIndices(patches) {
	                var indices = [];

	                for (var key in patches) {
	                    if (key !== "a") {
	                        indices.push(Number(key));
	                    }
	                }

	                return indices;
	            }

	            /***/
	        },
	        /* 35 */
	        /***/function (module, exports) {

	            /* (ignored) */

	            /***/},
	        /* 36 */
	        /***/function (module, exports) {

	            // Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
	            // We don't want to read all of the DOM nodes in the tree so we use
	            // the in-order tree indexing to eliminate recursion down certain branches.
	            // We only recurse into a DOM node if we know that it contains a child of
	            // interest.

	            var noChild = {};

	            module.exports = domIndex;

	            function domIndex(rootNode, tree, indices, nodes) {
	                if (!indices || indices.length === 0) {
	                    return {};
	                } else {
	                    indices.sort(ascending);
	                    return recurse(rootNode, tree, indices, nodes, 0);
	                }
	            }

	            function recurse(rootNode, tree, indices, nodes, rootIndex) {
	                nodes = nodes || {};

	                if (rootNode) {
	                    if (indexInRange(indices, rootIndex, rootIndex)) {
	                        nodes[rootIndex] = rootNode;
	                    }

	                    var vChildren = tree.children;

	                    if (vChildren) {

	                        var childNodes = rootNode.childNodes;

	                        for (var i = 0; i < tree.children.length; i++) {
	                            rootIndex += 1;

	                            var vChild = vChildren[i] || noChild;
	                            var nextIndex = rootIndex + (vChild.count || 0);

	                            // skip recursion down the tree if there are no nodes down here
	                            if (indexInRange(indices, rootIndex, nextIndex)) {
	                                recurse(childNodes[i], vChild, indices, nodes, rootIndex);
	                            }

	                            rootIndex = nextIndex;
	                        }
	                    }
	                }

	                return nodes;
	            }

	            // Binary search for an index in the interval [left, right]
	            function indexInRange(indices, left, right) {
	                if (indices.length === 0) {
	                    return false;
	                }

	                var minIndex = 0;
	                var maxIndex = indices.length - 1;
	                var currentIndex;
	                var currentItem;

	                while (minIndex <= maxIndex) {
	                    currentIndex = (maxIndex + minIndex) / 2 >> 0;
	                    currentItem = indices[currentIndex];

	                    if (minIndex === maxIndex) {
	                        return currentItem >= left && currentItem <= right;
	                    } else if (currentItem < left) {
	                        minIndex = currentIndex + 1;
	                    } else if (currentItem > right) {
	                        maxIndex = currentIndex - 1;
	                    } else {
	                        return true;
	                    }
	                }

	                return false;
	            }

	            function ascending(a, b) {
	                return a > b ? 1 : -1;
	            }

	            /***/
	        },
	        /* 37 */
	        /***/function (module, exports, __webpack_require__) {

	            var applyProperties = __webpack_require__(14);

	            var isWidget = __webpack_require__(0);
	            var VPatch = __webpack_require__(9);

	            var updateWidget = __webpack_require__(38);

	            module.exports = applyPatch;

	            function applyPatch(vpatch, domNode, renderOptions) {
	                var type = vpatch.type;
	                var vNode = vpatch.vNode;
	                var patch = vpatch.patch;

	                switch (type) {
	                    case VPatch.REMOVE:
	                        return removeNode(domNode, vNode);
	                    case VPatch.INSERT:
	                        return insertNode(domNode, patch, renderOptions);
	                    case VPatch.VTEXT:
	                        return stringPatch(domNode, vNode, patch, renderOptions);
	                    case VPatch.WIDGET:
	                        return widgetPatch(domNode, vNode, patch, renderOptions);
	                    case VPatch.VNODE:
	                        return vNodePatch(domNode, vNode, patch, renderOptions);
	                    case VPatch.ORDER:
	                        reorderChildren(domNode, patch);
	                        return domNode;
	                    case VPatch.PROPS:
	                        applyProperties(domNode, patch, vNode.properties);
	                        return domNode;
	                    case VPatch.THUNK:
	                        return replaceRoot(domNode, renderOptions.patch(domNode, patch, renderOptions));
	                    default:
	                        return domNode;
	                }
	            }

	            function removeNode(domNode, vNode) {
	                var parentNode = domNode.parentNode;

	                if (parentNode) {
	                    parentNode.removeChild(domNode);
	                }

	                destroyWidget(domNode, vNode);

	                return null;
	            }

	            function insertNode(parentNode, vNode, renderOptions) {
	                var newNode = renderOptions.render(vNode, renderOptions);

	                if (parentNode) {
	                    parentNode.appendChild(newNode);
	                }

	                return parentNode;
	            }

	            function stringPatch(domNode, leftVNode, vText, renderOptions) {
	                var newNode;

	                if (domNode.nodeType === 3) {
	                    domNode.replaceData(0, domNode.length, vText.text);
	                    newNode = domNode;
	                } else {
	                    var parentNode = domNode.parentNode;
	                    newNode = renderOptions.render(vText, renderOptions);

	                    if (parentNode && newNode !== domNode) {
	                        parentNode.replaceChild(newNode, domNode);
	                    }
	                }

	                return newNode;
	            }

	            function widgetPatch(domNode, leftVNode, widget, renderOptions) {
	                var updating = updateWidget(leftVNode, widget);
	                var newNode;

	                if (updating) {
	                    newNode = widget.update(leftVNode, domNode) || domNode;
	                } else {
	                    newNode = renderOptions.render(widget, renderOptions);
	                }

	                var parentNode = domNode.parentNode;

	                if (parentNode && newNode !== domNode) {
	                    parentNode.replaceChild(newNode, domNode);
	                }

	                if (!updating) {
	                    destroyWidget(domNode, leftVNode);
	                }

	                return newNode;
	            }

	            function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
	                var parentNode = domNode.parentNode;
	                var newNode = renderOptions.render(vNode, renderOptions);

	                if (parentNode && newNode !== domNode) {
	                    parentNode.replaceChild(newNode, domNode);
	                }

	                return newNode;
	            }

	            function destroyWidget(domNode, w) {
	                if (typeof w.destroy === "function" && isWidget(w)) {
	                    w.destroy(domNode);
	                }
	            }

	            function reorderChildren(domNode, moves) {
	                var childNodes = domNode.childNodes;
	                var keyMap = {};
	                var node;
	                var remove;
	                var insert;

	                for (var i = 0; i < moves.removes.length; i++) {
	                    remove = moves.removes[i];
	                    node = childNodes[remove.from];
	                    if (remove.key) {
	                        keyMap[remove.key] = node;
	                    }
	                    domNode.removeChild(node);
	                }

	                var length = childNodes.length;
	                for (var j = 0; j < moves.inserts.length; j++) {
	                    insert = moves.inserts[j];
	                    node = keyMap[insert.key];
	                    // this is the weirdest bug i've ever seen in webkit
	                    domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to]);
	                }
	            }

	            function replaceRoot(oldRoot, newRoot) {
	                if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
	                    oldRoot.parentNode.replaceChild(newRoot, oldRoot);
	                }

	                return newRoot;
	            }

	            /***/
	        },
	        /* 38 */
	        /***/function (module, exports, __webpack_require__) {

	            var isWidget = __webpack_require__(0);

	            module.exports = updateWidget;

	            function updateWidget(a, b) {
	                if (isWidget(a) && isWidget(b)) {
	                    if ("name" in a && "name" in b) {
	                        return a.id === b.id;
	                    } else {
	                        return a.init === b.init;
	                    }
	                }

	                return false;
	            }

	            /***/
	        },
	        /* 39 */
	        /***/function (module, exports, __webpack_require__) {

	            var createElement = __webpack_require__(13);

	            module.exports = createElement;

	            /***/
	        }])
	    );
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 *  omi-touch v0.2.1 by dntzhang
	 *  AlloyTouch / Omi integration. Smooth scrolling, rotation, pull to refresh, page transition and any motion for your Omi project.
	 *  Github: https://github.com/AlloyTeam/omi
	 *  MIT Licensed.
	 */

	;(function () {
	    if (typeof Omi === 'undefined') return;

	    var OmiTouch = {};
	    var AlloyTouch =  true ? __webpack_require__(4) : window.AlloyTouch;
	    var Transform =  true ? __webpack_require__(5) : window.Transform;

	    var noop = function noop() {};

	    var getHandler = function getHandler(name, dom, instance) {
	        var value = dom.getAttribute(name);
	        if (value === null) {
	            return noop;
	        } else {
	            return instance[value].bind(instance);
	        }
	    };

	    var getNum = function getNum(name, dom) {
	        var value = dom.getAttribute(name);
	        if (value) {
	            return parseFloat(value);
	        }
	    };

	    Omi.extendPlugin('omi-touch', function (dom, instance) {
	        if (dom.alloyTouch) return;
	        var target = instance.refs[dom.getAttribute('motionRef')];
	        Transform(target);
	        var initialValue = dom.getAttribute('initialValue');
	        if (initialValue) {
	            target[dom.getAttribute('property') || "translateY"] = parseInt(initialValue);
	        }

	        var alloyTouch = new AlloyTouch({
	            touch: dom, //����������dom
	            vertical: dom.getAttribute('vertical') === 'false' ? false : true, //�����裬Ĭ����true���������ֱ����touch
	            target: target, //�˶��Ķ���
	            property: dom.getAttribute('property') || "translateY", //���˶�������
	            min: getNum('min', dom), //������,�˶����Ե���Сֵ
	            max: getNum('max', dom), //������,�������Ե����ֵ
	            sensitivity: getNum('sensitivity', dom), //������,�������������ȣ�Ĭ��ֵΪ1������Ϊ����
	            factor: getNum('factor', dom), //������,��ʾ����λ���뱻�˶�����ӳ���ϵ��Ĭ��ֵ��1
	            step: getNum('step', dom), //����У����step��������
	            bindSelf: dom.getAttribute('bindSelf') === 'true' ? true : false,
	            change: getHandler('change', dom, instance),
	            touchStart: getHandler('touchStart', dom, instance),
	            touchMove: getHandler('touchMove', dom, instance),
	            touchEnd: getHandler('touchEnd', dom, instance),
	            tap: getHandler('tap', dom, instance),
	            pressMove: getHandler('pressMove', dom, instance),
	            animationEnd: getHandler('animationEnd', dom, instance),
	            preventDefault: dom.getAttribute('preventDefault') === 'false' ? false : true
	        });

	        dom.alloyTouch = alloyTouch;
	    });

	    if (( false ? 'undefined' : _typeof(exports)) == "object") {
	        module.exports = OmiTouch;
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return OmiTouch;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        window.OmiTouch = OmiTouch;
	    }
	})();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/* AlloyTouch CSS v0.2.5
	 * By AlloyTeam http://www.alloyteam.com/
	 * Github: https://github.com/AlloyTeam/AlloyTouch
	 * MIT Licensed.
	 */
	;(function () {
	    'use strict';

	    if (!Date.now) Date.now = function () {
	        return new Date().getTime();
	    };

	    var vendors = ['webkit', 'moz'];
	    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
	        var vp = vendors[i];
	        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
	        window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
	    }
	    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
	    || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
	        var lastTime = 0;
	        window.requestAnimationFrame = function (callback) {
	            var now = Date.now();
	            var nextTime = Math.max(lastTime + 16, now);
	            return setTimeout(function () {
	                callback(lastTime = nextTime);
	            }, nextTime - now);
	        };
	        window.cancelAnimationFrame = clearTimeout;
	    }
	})();

	;(function () {

	    var _elementStyle = document.createElement('div').style,
	        endTransitionEventName,
	        transitionDuration,
	        transitionTimingFunction,
	        transform;

	    if ('transform' in _elementStyle) {
	        transform = 'transform';
	        endTransitionEventName = 'transitionend';
	        transitionDuration = 'transitionDuration';
	        transitionTimingFunction = 'transitionTimingFunction';
	    } else if ('webkitTransform' in _elementStyle) {
	        transform = 'webkitTransform';
	        endTransitionEventName = 'webkitTransitionEnd';
	        transitionDuration = 'webkitTransitionDuration';
	        transitionTimingFunction = 'webkitTransitionTimingFunction';
	    } else {
	        throw 'please use a modern browser';
	    }

	    var ease = 'cubic-bezier(0.1, 0.57, 0.1, 1)';

	    function reverseEase(y) {
	        return 1 - Math.sqrt(1 - y * y);
	    }

	    function bind(element, type, callback) {
	        element.addEventListener(type, callback, false);
	    }

	    function unbind(element, type, callback) {
	        element.removeEventListener(type, callback);
	    }

	    function preventDefaultTest(el, exceptions) {
	        for (var i in exceptions) {
	            if (exceptions[i].test(el[i])) {
	                return true;
	            }
	        }
	        return false;
	    }

	    var AlloyTouch = function AlloyTouch(option) {
	        this.scroller = option.target;
	        this.element = typeof option.touch === "string" ? document.querySelector(option.touch) : option.touch;
	        this.vertical = this._getValue(option.vertical, true);
	        this.property = option.property;
	        this.preventDefault = this._getValue(option.preventDefault, true);
	        this.sensitivity = this._getValue(option.sensitivity, 1);
	        this.lockDirection = this._getValue(option.lockDirection, true);

	        this.initialValue = this._getValue(option.initialValue, this.scroller[this.property]);
	        this.scroller[this.property] = this.initialValue;

	        this.moveFactor = this._getValue(option.moveFactor, 1);
	        this.factor = this._getValue(option.factor, 1);
	        this.outFactor = this._getValue(option.outFactor, 0.3);

	        this.min = option.min;
	        this.max = option.max;

	        this.maxRegion = this._getValue(option.maxRegion, 60);

	        this.deceleration = 0.0006;
	        this.maxRegion = this._getValue(option.maxRegion, 600);
	        this.springMaxRegion = this._getValue(option.springMaxRegion, 60);

	        this.change = option.change || function () {};
	        this.touchEnd = option.touchEnd || function () {};
	        this.touchStart = option.touchStart || function () {};
	        this.touchMove = option.touchMove || function () {};
	        this.touchCancel = option.touchMove || function () {};
	        this.animationEnd = option.animationEnd || function () {};

	        this.preventDefaultException = { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ };
	        this.hasMin = !(this.min === void 0);
	        this.hasMax = !(this.max === void 0);
	        this.isTouchStart = false;
	        this.step = option.step;
	        this.inertia = this._getValue(option.inertia, true);
	        this.maxSpeed = option.maxSpeed;
	        this.hasMaxSpeed = !(this.maxSpeed === void 0);

	        if (this.hasMax && this.hasMin) {
	            if (this.min > this.max) throw "min value can't be greater than max value";
	            this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
	        }

	        this._startHandler = this._start.bind(this);
	        this._moveHandler = this._move.bind(this);
	        this._transitionEndHandler = this._transitionEnd.bind(this);
	        this._endHandler = this._end.bind(this);
	        this._cancelHandler = this._cancel.bind(this);
	        bind(this.element, "touchstart", this._startHandler);
	        bind(this.scroller, endTransitionEventName, this._transitionEndHandler);
	        bind(window, "touchmove", this._moveHandler);
	        bind(window, "touchend", this._endHandler);
	        bind(window, "touchcancel", this._cancelHandler);
	        //当有step设置的时候防止执行两次end
	        this._endCallbackTag = true;

	        this._endTimeout = null;
	    };

	    AlloyTouch.prototype = {
	        _getValue: function _getValue(obj, defaultValue) {
	            return obj === void 0 ? defaultValue : obj;
	        },
	        _transitionEnd: function _transitionEnd() {
	            if (!this._triggerTransitionEnd) return;
	            var current = this.scroller[this.property];
	            if (current < this.min) {
	                this.to(this.min, 600, ease);
	                return;
	            } else if (current > this.max) {
	                this.to(this.max, 600, ease);
	                return;
	            }

	            if (this.step) {
	                this.correction();
	                if (this._endCallbackTag) {
	                    this._endTimeout = setTimeout(function () {
	                        this.animationEnd.call(this, current);
	                        cancelAnimationFrame(this.tickID);
	                    }.bind(this), 400);
	                    this._endCallbackTag = false;
	                }
	            } else {
	                this.animationEnd.call(this, current);
	                cancelAnimationFrame(this.tickID);
	            }
	        },
	        _cancelAnimation: function _cancelAnimation() {
	            this.scroller.style[transitionDuration] = '0ms';
	            this.scroller[this.property] = this.getComputedPosition();
	        },
	        getComputedPosition: function getComputedPosition() {
	            var matrix = window.getComputedStyle(this.scroller, null);
	            matrix = matrix[transform].split(')')[0].split(', ');
	            return this.vertical ? +(matrix[13] || matrix[5]) : +(matrix[12] || matrix[4]);
	        },
	        _tick: function _tick() {
	            this.change.call(this, this.getComputedPosition());
	            this.tickID = requestAnimationFrame(this._tick.bind(this));
	        },
	        stop: function stop() {
	            cancelAnimationFrame(this.tickID);
	            this._cancelAnimation();
	            clearTimeout(this._endTimeout);
	            if (this.hasMax && this.hasMin) {
	                this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
	            }
	        },
	        _start: function _start(evt) {
	            cancelAnimationFrame(this.tickID);
	            this._tick();

	            this._endCallbackTag = true;
	            this.isTouchStart = true;
	            this._firstTouchMove = true;
	            this._preventMove = false;
	            this.touchStart.call(this, evt, this.scroller[this.property]);
	            this._cancelAnimation();
	            clearTimeout(this._endTimeout);
	            if (this.hasMax && this.hasMin) {
	                this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
	            }
	            this.startTime = new Date().getTime();
	            this._startX = this.preX = evt.touches[0].pageX;
	            this._startY = this.preY = evt.touches[0].pageY;
	            this.start = this.vertical ? this.preY : this.preX;
	        },
	        _move: function _move(evt) {
	            if (this.isTouchStart) {
	                var dx = Math.abs(evt.touches[0].pageX - this._startX),
	                    dy = Math.abs(evt.touches[0].pageY - this._startY);
	                if (this._firstTouchMove && this.lockDirection) {
	                    var dDis = dx - dy;
	                    if (dDis > 0 && this.vertical) {
	                        this._preventMove = true;
	                    } else if (dDis < 0 && !this.vertical) {
	                        this._preventMove = true;
	                    }
	                    this._firstTouchMove = false;
	                }
	                if (dx < 10 && dy < 10) return;

	                if (!this._preventMove) {
	                    var f = this.moveFactor;
	                    var d = (this.vertical ? evt.touches[0].pageY - this.preY : evt.touches[0].pageX - this.preX) * this.sensitivity;
	                    if (this.hasMax && this.scroller[this.property] > this.max && d > 0) {
	                        f = this.outFactor;
	                    } else if (this.hasMin && this.scroller[this.property] < this.min && d < 0) {
	                        f = this.outFactor;
	                    }
	                    d *= f;
	                    this.preX = evt.touches[0].pageX;
	                    this.preY = evt.touches[0].pageY;
	                    this.scroller[this.property] += d;

	                    var timestamp = new Date().getTime();
	                    if (timestamp - this.startTime > 300) {
	                        this.startTime = timestamp;
	                        this.start = this.vertical ? this.preY : this.preX;
	                    }
	                    this.touchMove.call(this, evt, this.scroller[this.property]);
	                }

	                if (this.preventDefault && !preventDefaultTest(evt.target, this.preventDefaultException)) {
	                    evt.preventDefault();
	                }
	            }
	        },
	        _end: function _end(evt) {
	            if (this.isTouchStart) {
	                var self = this,
	                    current = this.scroller[this.property];
	                if (this.touchEnd.call(this, evt, current) === false) {
	                    this._triggerTransitionEnd = false;
	                    cancelAnimationFrame(this.tickID);
	                    return;
	                } else {
	                    this._triggerTransitionEnd = true;
	                }
	                if (this.hasMax && current > this.max) {
	                    this.to(this.max, 600, ease);
	                } else if (this.hasMin && current < this.min) {
	                    this.to(this.min, 600, ease);
	                } else if (this.inertia && !this._preventMove) {
	                    var dt = new Date().getTime() - this.startTime;
	                    if (dt < 300) {

	                        var distance = ((this.vertical ? evt.changedTouches[0].pageY : evt.changedTouches[0].pageX) - this.start) * this.sensitivity,
	                            speed = Math.abs(distance) / dt,
	                            speed2 = this.factor * speed;
	                        if (this.hasMaxSpeed && speed2 > this.maxSpeed) {
	                            speed2 = this.maxSpeed;
	                        }
	                        var destination = current + speed2 * speed2 / (2 * this.deceleration) * (distance < 0 ? -1 : 1);

	                        var tRatio = 1;
	                        if (destination < this.min) {
	                            if (destination < this.min - this.maxRegion) {
	                                tRatio = reverseEase((current - this.min + this.springMaxRegion) / (current - destination));
	                                destination = this.min - this.springMaxRegion;
	                            } else {
	                                tRatio = reverseEase((current - this.min + this.springMaxRegion * (this.min - destination) / this.maxRegion) / (current - destination));
	                                destination = this.min - this.springMaxRegion * (this.min - destination) / this.maxRegion;
	                            }
	                        } else if (destination > this.max) {
	                            if (destination > this.max + this.maxRegion) {
	                                tRatio = reverseEase((this.max + this.springMaxRegion - current) / (destination - current));
	                                destination = this.max + this.springMaxRegion;
	                            } else {
	                                tRatio = reverseEase((this.max + this.springMaxRegion * (destination - this.max) / this.maxRegion - current) / (destination - current));
	                                destination = this.max + this.springMaxRegion * (destination - this.max) / this.maxRegion;
	                            }
	                        }
	                        var duration = Math.round(speed / self.deceleration) * tRatio;

	                        self.to(Math.round(destination), duration, ease);
	                    } else {
	                        if (self.step) {
	                            self.correction();
	                        }
	                    }
	                } else {
	                    if (self.step) {
	                        self.correction();
	                    }
	                }
	                // if (this.preventDefault && !preventDefaultTest(evt.target, this.preventDefaultException)) {
	                //     evt.preventDefault();
	                // }
	                this.isTouchStart = false;
	            }
	        },
	        _cancel: function _cancel(evt) {
	            cancelAnimationFrame(this.tickID);
	            if (this.step) {
	                this.correction();
	            }
	            this.touchCancel.call(this, evt);
	        },
	        to: function to(value, time, u_ease) {
	            var el = this.scroller,
	                property = this.property;

	            el.style[transitionDuration] = this._getValue(time, 600) + 'ms';
	            el.style[transitionTimingFunction] = u_ease || ease;
	            el[property] = value;
	        },
	        correction: function correction() {
	            var m_str = window.getComputedStyle(this.scroller)[transform];
	            var value = this.vertical ? parseInt(m_str.split(',')[13]) : parseInt(m_str.split(',')[12]);
	            var rpt = Math.floor(Math.abs(value / this.step));
	            var dy = value % this.step;
	            var result;
	            if (Math.abs(dy) > this.step / 2) {
	                result = (value < 0 ? -1 : 1) * (rpt + 1) * this.step;
	                if (result > this.max) result = this.max;
	                if (result < this.min) result = this.min;
	                this.to(result, 400, ease);
	            } else {
	                result = (value < 0 ? -1 : 1) * rpt * this.step;
	                if (result > this.max) result = this.max;
	                if (result < this.min) result = this.min;
	                this.to(result, 400, ease);
	            }
	        },
	        destroy: function destroy() {
	            unbind(this.element, "touchstart", this._startHandler);
	            unbind(this.scroller, endTransitionEventName, this._transitionEndHandler);
	            unbind(window, "touchmove", this._moveHandler);
	            unbind(window, "touchend", this._endHandler);
	            unbind(window, "touchcancel", this._cancelHandler);
	        }
	    };

	    if (typeof module !== 'undefined' && ( false ? 'undefined' : _typeof(exports)) === 'object') {
	        module.exports = AlloyTouch;
	    } else {
	        window.AlloyTouch = AlloyTouch;
	    }
	})();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/* transformjs 1.1.3
	 * By dntzhang
	 * Github: https://github.com/AlloyTeam/AlloyTouch/tree/master/transformjs
	 */
	;(function () {

	    var DEG_TO_RAD = 0.017453292519943295;

	    var Matrix3D = function Matrix3D(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
	        this.elements = window.Float32Array ? new Float32Array(16) : [];
	        var te = this.elements;
	        te[0] = n11 !== undefined ? n11 : 1;te[4] = n12 || 0;te[8] = n13 || 0;te[12] = n14 || 0;
	        te[1] = n21 || 0;te[5] = n22 !== undefined ? n22 : 1;te[9] = n23 || 0;te[13] = n24 || 0;
	        te[2] = n31 || 0;te[6] = n32 || 0;te[10] = n33 !== undefined ? n33 : 1;te[14] = n34 || 0;
	        te[3] = n41 || 0;te[7] = n42 || 0;te[11] = n43 || 0;te[15] = n44 !== undefined ? n44 : 1;
	    };

	    Matrix3D.prototype = {
	        set: function set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
	            var te = this.elements;
	            te[0] = n11;te[4] = n12;te[8] = n13;te[12] = n14;
	            te[1] = n21;te[5] = n22;te[9] = n23;te[13] = n24;
	            te[2] = n31;te[6] = n32;te[10] = n33;te[14] = n34;
	            te[3] = n41;te[7] = n42;te[11] = n43;te[15] = n44;
	            return this;
	        },
	        identity: function identity() {
	            this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	            return this;
	        },
	        multiplyMatrices: function multiplyMatrices(a, be) {

	            var ae = a.elements;
	            var te = this.elements;
	            var a11 = ae[0],
	                a12 = ae[4],
	                a13 = ae[8],
	                a14 = ae[12];
	            var a21 = ae[1],
	                a22 = ae[5],
	                a23 = ae[9],
	                a24 = ae[13];
	            var a31 = ae[2],
	                a32 = ae[6],
	                a33 = ae[10],
	                a34 = ae[14];
	            var a41 = ae[3],
	                a42 = ae[7],
	                a43 = ae[11],
	                a44 = ae[15];

	            var b11 = be[0],
	                b12 = be[1],
	                b13 = be[2],
	                b14 = be[3];
	            var b21 = be[4],
	                b22 = be[5],
	                b23 = be[6],
	                b24 = be[7];
	            var b31 = be[8],
	                b32 = be[9],
	                b33 = be[10],
	                b34 = be[11];
	            var b41 = be[12],
	                b42 = be[13],
	                b43 = be[14],
	                b44 = be[15];

	            te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
	            te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
	            te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
	            te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

	            te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
	            te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
	            te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
	            te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

	            te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
	            te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
	            te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
	            te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

	            te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
	            te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
	            te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
	            te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

	            return this;
	        },
	        // 解决角度为90的整数倍导致Math.cos得到极小的数，其实是0。导致不渲染
	        _rounded: function _rounded(value, i) {
	            i = Math.pow(10, i || 15);
	            // default
	            return Math.round(value * i) / i;
	        },
	        _arrayWrap: function _arrayWrap(arr) {
	            return window.Float32Array ? new Float32Array(arr) : arr;
	        },
	        appendTransform: function appendTransform(x, y, z, scaleX, scaleY, scaleZ, rotateX, rotateY, rotateZ, skewX, skewY, originX, originY, originZ) {

	            var rx = rotateX * DEG_TO_RAD;
	            var cosx = this._rounded(Math.cos(rx));
	            var sinx = this._rounded(Math.sin(rx));
	            var ry = rotateY * DEG_TO_RAD;
	            var cosy = this._rounded(Math.cos(ry));
	            var siny = this._rounded(Math.sin(ry));
	            var rz = rotateZ * DEG_TO_RAD;
	            var cosz = this._rounded(Math.cos(rz * -1));
	            var sinz = this._rounded(Math.sin(rz * -1));

	            this.multiplyMatrices(this, this._arrayWrap([1, 0, 0, x, 0, cosx, sinx, y, 0, -sinx, cosx, z, 0, 0, 0, 1]));

	            this.multiplyMatrices(this, this._arrayWrap([cosy, 0, siny, 0, 0, 1, 0, 0, -siny, 0, cosy, 0, 0, 0, 0, 1]));

	            this.multiplyMatrices(this, this._arrayWrap([cosz * scaleX, sinz * scaleY, 0, 0, -sinz * scaleX, cosz * scaleY, 0, 0, 0, 0, 1 * scaleZ, 0, 0, 0, 0, 1]));

	            if (skewX || skewY) {
	                this.multiplyMatrices(this, this._arrayWrap([this._rounded(Math.cos(skewX * DEG_TO_RAD)), this._rounded(Math.sin(skewX * DEG_TO_RAD)), 0, 0, -1 * this._rounded(Math.sin(skewY * DEG_TO_RAD)), this._rounded(Math.cos(skewY * DEG_TO_RAD)), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
	            }

	            if (originX || originY || originZ) {
	                this.elements[12] -= originX * this.elements[0] + originY * this.elements[4] + originZ * this.elements[8];
	                this.elements[13] -= originX * this.elements[1] + originY * this.elements[5] + originZ * this.elements[9];
	                this.elements[14] -= originX * this.elements[2] + originY * this.elements[6] + originZ * this.elements[10];
	            }
	            return this;
	        }
	    };

	    var Matrix2D = function Matrix2D(a, b, c, d, tx, ty) {
	        this.a = a == null ? 1 : a;
	        this.b = b || 0;
	        this.c = c || 0;
	        this.d = d == null ? 1 : d;
	        this.tx = tx || 0;
	        this.ty = ty || 0;
	        return this;
	    };

	    Matrix2D.prototype = {
	        identity: function identity() {
	            this.a = this.d = 1;
	            this.b = this.c = this.tx = this.ty = 0;
	            return this;
	        },
	        appendTransform: function appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, originX, originY) {
	            if (rotation % 360) {
	                var r = rotation * DEG_TO_RAD;
	                var cos = Math.cos(r);
	                var sin = Math.sin(r);
	            } else {
	                cos = 1;
	                sin = 0;
	            }
	            if (skewX || skewY) {
	                skewX *= DEG_TO_RAD;
	                skewY *= DEG_TO_RAD;
	                this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
	                this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
	            } else {
	                this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
	            }
	            if (originX || originY) {
	                this.tx -= originX * this.a + originY * this.c;
	                this.ty -= originX * this.b + originY * this.d;
	            }
	            return this;
	        },
	        append: function append(a, b, c, d, tx, ty) {
	            var a1 = this.a;
	            var b1 = this.b;
	            var c1 = this.c;
	            var d1 = this.d;
	            this.a = a * a1 + b * c1;
	            this.b = a * b1 + b * d1;
	            this.c = c * a1 + d * c1;
	            this.d = c * b1 + d * d1;
	            this.tx = tx * a1 + ty * c1 + this.tx;
	            this.ty = tx * b1 + ty * d1 + this.ty;
	            return this;
	        },
	        initialize: function initialize(a, b, c, d, tx, ty) {
	            this.a = a;
	            this.b = b;
	            this.c = c;
	            this.d = d;
	            this.tx = tx;
	            this.ty = ty;
	            return this;
	        },
	        setValues: function setValues(a, b, c, d, tx, ty) {
	            this.a = a == null ? 1 : a;
	            this.b = b || 0;
	            this.c = c || 0;
	            this.d = d == null ? 1 : d;
	            this.tx = tx || 0;
	            this.ty = ty || 0;
	            return this;
	        },
	        copy: function copy(matrix) {
	            return this.setValues(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
	        }
	    };

	    function observe(target, props, callback) {
	        for (var i = 0, len = props.length; i < len; i++) {
	            var prop = props[i];
	            watch(target, prop, callback);
	        }
	    }

	    function watch(target, prop, callback) {
	        Object.defineProperty(target, prop, {
	            get: function get() {
	                return this["_" + prop];
	            },
	            set: function set(value) {
	                if (value !== this["_" + prop]) {
	                    this["_" + prop] = value;
	                    callback();
	                }
	            }
	        });
	    }

	    function isElement(o) {
	        return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object" ? o instanceof HTMLElement : //DOM2
	        o && (typeof o === "undefined" ? "undefined" : _typeof(o)) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
	    }

	    function Transform(obj, notPerspective) {
	        if (obj.hasOwnProperty("translateX")) return;
	        var observeProps = ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"],
	            objIsElement = isElement(obj);
	        if (!notPerspective) {
	            observeProps.push("perspective");
	        }

	        observe(obj, observeProps, function () {
	            var mtx = obj.matrix3d.identity().appendTransform(obj.translateX, obj.translateY, obj.translateZ, obj.scaleX, obj.scaleY, obj.scaleZ, obj.rotateX, obj.rotateY, obj.rotateZ, obj.skewX, obj.skewY, obj.originX, obj.originY, obj.originZ);
	            var transform = (notPerspective ? "" : "perspective(" + obj.perspective + "px) ") + "matrix3d(" + Array.prototype.slice.call(mtx.elements).join(",") + ")";
	            if (objIsElement) {
	                obj.style.transform = obj.style.msTransform = obj.style.OTransform = obj.style.MozTransform = obj.style.webkitTransform = transform;
	            } else {
	                obj.transform = transform;
	            }
	        });

	        obj.matrix3d = new Matrix3D();
	        if (!notPerspective) {
	            obj.perspective = 500;
	        }
	        obj.scaleX = obj.scaleY = obj.scaleZ = 1;
	        //由于image自带了x\y\z，所有加上translate前缀
	        obj.translateX = obj.translateY = obj.translateZ = obj.rotateX = obj.rotateY = obj.rotateZ = obj.skewX = obj.skewY = obj.originX = obj.originY = obj.originZ = 0;
	    }

	    Transform.getMatrix3D = function (option) {
	        var defaultOption = {
	            translateX: 0,
	            translateY: 0,
	            translateZ: 0,
	            rotateX: 0,
	            rotateY: 0,
	            rotateZ: 0,
	            skewX: 0,
	            skewY: 0,
	            originX: 0,
	            originY: 0,
	            originZ: 0,
	            scaleX: 1,
	            scaleY: 1,
	            scaleZ: 1
	        };
	        for (var key in option) {
	            if (option.hasOwnProperty(key)) {
	                defaultOption[key] = option[key];
	            }
	        }
	        return new Matrix3D().identity().appendTransform(defaultOption.translateX, defaultOption.translateY, defaultOption.translateZ, defaultOption.scaleX, defaultOption.scaleY, defaultOption.scaleZ, defaultOption.rotateX, defaultOption.rotateY, defaultOption.rotateZ, defaultOption.skewX, defaultOption.skewY, defaultOption.originX, defaultOption.originY, defaultOption.originZ).elements;
	    };

	    Transform.getMatrix2D = function (option) {
	        var defaultOption = {
	            translateX: 0,
	            translateY: 0,
	            rotation: 0,
	            skewX: 0,
	            skewY: 0,
	            originX: 0,
	            originY: 0,
	            scaleX: 1,
	            scaleY: 1
	        };
	        for (var key in option) {
	            if (option.hasOwnProperty(key)) {
	                defaultOption[key] = option[key];
	            }
	        }
	        return new Matrix2D().identity().appendTransform(defaultOption.translateX, defaultOption.translateY, defaultOption.scaleX, defaultOption.scaleY, defaultOption.rotation, defaultOption.skewX, defaultOption.skewY, defaultOption.originX, defaultOption.originY);
	    };

	    if (typeof module !== 'undefined' && ( false ? "undefined" : _typeof(exports)) === 'object') {
	        module.exports = Transform;
	    } else {
	        window.Transform = Transform;
	    }
	})();

/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".bundler.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 *  Omi v1.7.5 By dntzhang 
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["Omi"] = factory();else root["Omi"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};

			/******/ // The require function
			/******/function __webpack_require__(moduleId) {

				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;

				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };

				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

				/******/ // Flag the module as loaded
				/******/module.loaded = true;

				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}

			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;

			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;

			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";

			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _omi = __webpack_require__(1);

			var _omi2 = _interopRequireDefault(_omi);

			var _soda = __webpack_require__(2);

			var _soda2 = _interopRequireDefault(_soda);

			var _component = __webpack_require__(4);

			var _component2 = _interopRequireDefault(_component);

			var _store = __webpack_require__(9);

			var _store2 = _interopRequireDefault(_store);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { 'default': obj };
			}

			_soda2['default'].prefix('o');

			_omi2['default'].template = _soda2['default'];

			_omi2['default'].Store = _store2['default'];
			_omi2['default'].Component = _component2['default'];
			if (window.Omi) {
				module.exports = window.Omi;
			} else {
				window.Omi = _omi2['default'];
				module.exports = _omi2['default'];
			}

			/***/
		},
		/* 1 */
		/***/function (module, exports) {

			"use strict";

			var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			};

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

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /* WEBPACK VAR INJECTION */(function (module) {
				'use strict';

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};

				/**
     * sodajs v0.4.4 by dorsywang
     * Light weight but powerful template engine for JavaScript
     * Github: https://github.com/AlloyTeam/sodajs
     * MIT License
     */

				;(function () {
					if (!Array.prototype.map) {
						Array.prototype.map = function (func) {
							var arr = [];
							for (var i = 0; i < this.length; i++) {
								var item = this[i];

								[].push(func && func.call(item, item, i));
							}

							return arr;
						};
					}

					if (!String.prototype.trim) {
						String.prototype.trim = function () {
							return this.replace(/^\s*|\s*$/g, '');
						};
					}

					var nodes2Arr = function nodes2Arr(nodes) {
						var arr = [];

						for (var i = 0; i < nodes.length; i++) {
							arr.push(nodes[i]);
						}

						return arr;
					};

					var valueoutReg = /\{\{([^\}]*)\}\}/g;

					var prefix = 'soda';
					var prefixReg = new RegExp('^' + prefix + '-');

					var classNameRegExp = function classNameRegExp(className) {
						return new RegExp('(^|\\s+)' + className + '(\\s+|$)', 'g');
					};

					var addClass = function addClass(el, className) {
						if (!el.className) {
							el.className = className;

							return;
						}

						if (el.className.match(classNameRegExp(className))) {} else {
							el.className += " " + className;
						}
					};

					var exist = function exist(value) {
						return value !== null && value !== undefined && value !== "" && typeof value !== 'undefined';
					};

					var removeClass = function removeClass(el, className) {
						el.className = el.className.replace(classNameRegExp(className), "");
					};

					var getValue = function getValue(_data, _attrStr) {
						CONST_REGG.lastIndex = 0;
						var realAttrStr = _attrStr.replace(CONST_REGG, function (r) {
							if (typeof _data[r] === "undefined") {
								return r;
							} else {
								return _data[r];
							}
						});

						if (_attrStr === 'true') {
							return true;
						}

						if (_attrStr === 'false') {
							return false;
						}

						var _getValue = function _getValue(data, attrStr) {
							var dotIndex = attrStr.indexOf(".");

							if (dotIndex > -1) {
								var attr = attrStr.substr(0, dotIndex);
								attrStr = attrStr.substr(dotIndex + 1);

								// �?查attrStr是否属�?�变量并转换
								if (typeof _data[attr] !== "undefined" && CONST_REG.test(attr)) {
									attr = _data[attr];
								}

								if (typeof data[attr] !== "undefined") {
									return _getValue(data[attr], attrStr);
								} else {
									var eventData = {
										name: realAttrStr,
										data: _data
									};

									triggerEvent("nullvalue", {
										type: "nullattr",
										data: eventData
									}, eventData);

									// 如果还有
									return "";
								}
							} else {

								// �?查attrStr是否属�?�变量并转换
								if (typeof _data[attrStr] !== "undefined" && CONST_REG.test(attrStr)) {
									attrStr = _data[attrStr];
								}

								var rValue;
								if (typeof data[attrStr] !== "undefined") {
									rValue = data[attrStr];
								} else {
									var eventData = {
										name: realAttrStr,
										data: _data
									};

									triggerEvent("nullvalue", {
										type: "nullvalue",
										data: eventData
									}, eventData);

									rValue = '';
								}

								return rValue;
							}
						};

						return _getValue(_data, _attrStr);
					};

					// 注释node
					var commentNode = function commentNode(node) {};

					// 标识�?
					var IDENTOR_REG = /[a-zA-Z_\$]+[\w\$]*/g;
					var STRING_REG = /"([^"]*)"|'([^']*)'/g;
					var NUMBER_REG = /\d+|\d*\.\d+/g;

					var OBJECT_REG = /[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/g;
					// 非global 做test用
					var OBJECT_REG_NG = /[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/;

					var ATTR_REG = /\[([^\[\]]*)\]/g;
					var ATTR_REG_NG = /\[([^\[\]]*)\]/;
					var ATTR_REG_DOT = /\.([a-zA-Z_\$]+[\w\$]*)/g;

					var NOT_ATTR_REG = /[^\.|]([a-zA-Z_\$]+[\w\$]*)/g;

					var OR_REG = /\|\|/g;

					var OR_REPLACE = "OR_OPERATOR\x1E";

					var getRandom = function getRandom() {
						return "$$" + ~~(Math.random() * 1E6);
					};

					var CONST_PRIFIX = "_$C$_";
					var CONST_REG = /^_\$C\$_/;
					var CONST_REGG = /_\$C\$_[^\.]+/g;

					var getAttrVarKey = function getAttrVarKey() {
						return CONST_PRIFIX + ~~(Math.random() * 1E6);
					};

					var parseSodaExpression = function parseSodaExpression(str, scope) {
						// 对filter进行处理
						str = str.replace(OR_REG, OR_REPLACE).split("|");

						for (var i = 0; i < str.length; i++) {
							str[i] = (str[i].replace(new RegExp(OR_REPLACE, 'g'), "||") || '').trim();
						}

						var expr = str[0] || "";
						var filters = str.slice(1);

						// 将字符常量保存下�?
						expr = expr.replace(STRING_REG, function (r, $1, $2) {
							var key = getRandom();
							scope[key] = $1 || $2;
							return key;
						});

						while (ATTR_REG_NG.test(expr)) {
							ATTR_REG.lastIndex = 0;

							//对expr预处�?
							expr = expr.replace(ATTR_REG, function (r, $1) {
								var key = getAttrVarKey();
								// 属�?�名�? 为字符常�?
								var attrName = parseSodaExpression($1, scope);

								// 给一个特殊的前缀 表示是属性变�?

								scope[key] = attrName;

								return "." + key;
							});
						}

						expr = expr.replace(OBJECT_REG, function (value) {
							return "getValue(scope,'" + value.trim() + "')";
						});

						var parseFilter = function parseFilter() {
							var filterExpr = filters.shift();

							if (!filterExpr) {
								return;
							}

							var filterExpr = filterExpr.split(":");
							var args = filterExpr.slice(1) || [];
							var name = filterExpr[0] || "";

							var stringReg = /^'.*'$|^".*"$/;
							for (var i = 0; i < args.length; i++) {
								//这里根据类型进行判断
								if (OBJECT_REG_NG.test(args[i])) {
									args[i] = "getValue(scope,'" + args[i] + "')";
								} else {}
							}

							if (sodaFilterMap[name]) {
								args.unshift(expr);

								args = args.join(",");

								expr = "sodaFilterMap['" + name + "'](" + args + ")";
							}

							parseFilter();
						};

						parseFilter();

						var evalFunc = new Function("getValue", "sodaFilterMap", "return function sodaExp(scope){ return " + expr + "}")(getValue, sodaFilterMap);

						return evalFunc(scope);
					};

					var hashTable = {
						id2Expression: {},

						expression2id: {},

						getRandId: function getRandId() {
							return 'soda' + ~~(Math.random() * 1E5);
						}
					};

					// 解析指令
					// 解析attr
					var compileNode = function compileNode(node, scope) {
						// 如果只是文本
						if (node.nodeType === 3) {
							node.nodeValue = node.nodeValue.replace(valueoutReg, function (item, $1) {
								/*
         var id = hashTable.getRandId();
          hashTable.id2Expression[id] = {
         expression: $1,
         el: child
         };
          hashTable.expression2id[$1] = {
         id: id,
         el: child
         };
         */

								return parseSodaExpression($1, scope);
							});
						}

						if (node.attributes) {
							// 指令处理
							sodaDirectiveArr.map(function (item) {
								var name = item.name;

								var opt = item.opt;

								if (node.getAttribute(name) && node.parentNode) {
									opt.link(scope, node, node.attributes);
								}
							});

							// 处理输出 包含 prefix-*
							[].map.call(node.attributes, function (attr) {
								// 如果dirctiveMap有的就跳过不再处�?
								if (!sodaDirectiveMap[attr.name]) {
									if (prefixReg.test(attr.name)) {
										var attrName = attr.name.replace(prefixReg, '');

										if (attrName) {
											if (attr.value) {
												var attrValue = attr.value.replace(valueoutReg, function (item, $1) {
													return parseSodaExpression($1, scope);
												});

												if (exist(attrValue)) {
													node.setAttribute(attrName, attrValue);
												}
											}
										}

										// 对其他属性里含expr 处理
									} else {
										if (attr.value) {
											attr.value = attr.value.replace(valueoutReg, function (item, $1) {
												return parseSodaExpression($1, scope);
											});
										}
									}
								}
							});
						}

						nodes2Arr(node.childNodes).map(function (child) {
							compileNode(child, scope);
						});
					};

					var sodaDirectiveMap = {};

					var sodaFilterMap = {};

					var sodaDirectiveArr = [];

					var sodaDirective = function sodaDirective(name, func) {
						var name = prefix + '-' + name;
						sodaDirectiveMap[name] = func();

						sodaDirectiveArr.push({
							name: name,
							opt: sodaDirectiveMap[name]
						});
					};

					var sodaFilter = function sodaFilter(name, func) {
						sodaFilterMap[name] = func;
					};

					sodaFilter.get = function (name) {
						return sodaFilterMap[name];
					};

					sodaFilter("date", function (input, lenth) {
						return lenth;
					});

					sodaDirective('repeat', function () {
						return {
							priority: 10,
							compile: function compile(scope, el, attrs) {},
							link: function link(scope, el, attrs) {
								var opt = el.getAttribute(prefix + '-repeat');
								var itemName;
								var valueName;

								var trackReg = /\s+by\s+([^\s]+)$/;

								var trackName;
								opt = opt.replace(trackReg, function (item, $1) {
									if ($1) {
										trackName = ($1 || '').trim();
									}

									return '';
								});

								var inReg = /([^\s]+)\s+in\s+([^\s]+)|\(([^,]+)\s*,\s*([^)]+)\)\s+in\s+([^\s]+)/;

								var r = inReg.exec(opt);
								if (r) {
									if (r[1] && r[2]) {
										itemName = (r[1] || '').trim();
										valueName = (r[2] || '').trim();

										if (!(itemName && valueName)) {
											return;
										}
									} else if (r[3] && r[4] && r[5]) {
										trackName = (r[3] || '').trim();
										itemName = (r[4] || '').trim();
										valueName = (r[5] || '').trim();
									}
								} else {
									return;
								}

								trackName = trackName || '$index';

								// 这里要处理一�?
								var repeatObj = getValue(scope, valueName) || [];

								var repeatFunc = function repeatFunc(i) {
									var itemNode = el.cloneNode(true);

									// 这里创建�?个新的scope
									var itemScope = {};
									itemScope[trackName] = i;

									itemScope[itemName] = repeatObj[i];

									itemScope.__proto__ = scope;

									itemNode.removeAttribute(prefix + '-repeat');

									el.parentNode.insertBefore(itemNode, el);

									// 这里是新加的dom, 要单独编�?
									compileNode(itemNode, itemScope);
								};

								if ('length' in repeatObj) {
									for (var i = 0; i < repeatObj.length; i++) {
										repeatFunc(i);
									}
								} else {
									for (var i in repeatObj) {
										if (repeatObj.hasOwnProperty(i)) {
											repeatFunc(i);
										}
									}
								}

								el.parentNode.removeChild(el);
							}
						};
					});

					sodaDirective('if', function () {
						return {
							priority: 9,
							link: function link(scope, el, attrs) {
								var opt = el.getAttribute(prefix + '-if');

								var expressFunc = parseSodaExpression(opt, scope);

								if (expressFunc) {} else {
									// el.setAttribute("removed", "removed");
									el.parentNode && el.parentNode.removeChild(el);
								}
							}
						};
					});

					sodaDirective('class', function () {
						return {
							link: function link(scope, el, attrs) {
								var opt = el.getAttribute(prefix + "-class");

								var expressFunc = parseSodaExpression(opt, scope);

								if (expressFunc) {
									addClass(el, expressFunc);
								} else {}
							}
						};
					});

					sodaDirective('src', function () {
						return {
							link: function link(scope, el, attrs) {
								var opt = el.getAttribute(prefix + "-src");

								var expressFunc = opt.replace(valueoutReg, function (item, $1) {
									return parseSodaExpression($1, scope);
								});

								if (expressFunc) {
									el.setAttribute("src", expressFunc);
								} else {}
							}
						};
					});

					sodaDirective('bind-html', function () {
						return {
							link: function link(scope, el, attrs) {
								var opt = el.getAttribute(prefix + "-bind-html");
								var expressFunc = parseSodaExpression(opt, scope);

								if (expressFunc) {
									el.innerHTML = expressFunc;

									return {
										command: "childDone"
									};
								}
							}
						};
					});

					sodaDirective('html', function () {
						return {
							link: function link(scope, el, attrs) {
								var opt = el.getAttribute(prefix + "-html");
								var expressFunc = parseSodaExpression(opt, scope);

								if (expressFunc) {
									el.innerHTML = expressFunc;

									return {
										command: "childDone"
									};
								}
							}
						};
					});

					sodaDirective('replace', function () {
						return {
							link: function link(scope, el, attrs) {
								var opt = el.getAttribute(prefix + "-replace");
								var expressFunc = parseSodaExpression(opt, scope);

								if (expressFunc) {
									var div = document.createElement('div');
									div.innerHTML = expressFunc;

									if (el.parentNode) {
										while (div.childNodes[0]) {
											el.parentNode.insertBefore(div.childNodes[0], el);
										}
									}
								}

								el.parentNode.removeChild(el);
							}
						};
					});

					sodaDirective("style", function () {
						return {
							link: function link(scope, el, attrs) {
								var opt = el.getAttribute(prefix + "-style");
								var expressFunc = parseSodaExpression(opt, scope);

								var getCssValue = function getCssValue(name, value) {
									var numberWithoutpx = /opacity|z-index/;
									if (numberWithoutpx.test(name)) {
										return parseFloat(value);
									}

									if (isNaN(value)) {
										return value;
									} else {
										return value + "px";
									}
								};

								if (expressFunc) {
									var stylelist = [];

									for (var i in expressFunc) {
										if (expressFunc.hasOwnProperty(i)) {
											var provalue = getCssValue(i, expressFunc[i]);

											stylelist.push([i, provalue].join(":"));
										}
									}

									var style = el.style;
									for (var i = 0; i < style.length; i++) {
										var name = style[i];
										if (expressFunc[name]) {} else {
											stylelist.push([name, style[name]].join(":"));
										}
									}

									var styleStr = stylelist.join(";");

									el.setAttribute("style", styleStr);
								}
							}
						};
					});

					var sodaRender = function sodaRender(str, data) {
						// 对directive进行排序
						sodaDirectiveArr.sort(function (b, a) {
							return Number(a.opt.priority || 0) - Number(b.opt.priority || 0);
						});

						//console.log(sodaDirectiveArr);

						// 解析模板DOM
						var div = document.createElement("div");

						// 必须加入到body中去，不然自定义标签不生效
						if (document.documentMode < 9) {
							div.style.display = 'none';
							document.body.appendChild(div);
						}

						div.innerHTML = str;

						nodes2Arr(div.childNodes).map(function (child) {
							compileNode(child, data);
						});

						var innerHTML = div.innerHTML;

						if (document.documentMode < 9) {
							document.body.removeChild(div);
						}

						return innerHTML;

						//  var frament = document.createDocumentFragment();
						//  frament.innerHTML = div.innerHTML;

						/*
       frament.update = function(newData){
       //checkingDirtyData(data, d);
       var diff = DeepDiff.noConflict();
        var diffResult = diff(data, newData);
        console.log(diffResult);
        var dirtyData = ['a'];
        for(var i = 0; i < dirtyData.length; i ++){
       var item = dirtyData[i];
        var id = hashTable.expression2id[item];
        var nowValue = parseSodaExpression(item, newData);
       //console.log(nowValue);
        if(id.el){
       id.el.nodeValue = nowValue;
       }
       }
        console.log(hashTable);
         };
       */

						var child;
						while (child = div.childNodes[0]) {
							frament.appendChild(child);
						}

						return frament;
					};

					var eventPool = {};
					sodaRender.addEventListener = function (type, func) {
						if (eventPool[type]) {} else {
							eventPool[type] = [];
						}

						eventPool[type].push(func);
					};

					var triggerEvent = function triggerEvent(type, e, data) {
						var events = eventPool[type] || [];

						for (var i = 0; i < events.length; i++) {
							var eventFunc = events[i];
							eventFunc && eventFunc(e, data);
						}
					};

					sodaRender.filter = sodaFilter;

					sodaRender.prefix = function (newPrefix) {

						for (var key in sodaDirectiveMap) {
							if (sodaDirectiveMap.hasOwnProperty(key)) {
								sodaDirectiveMap[key.replace(prefix, newPrefix)] = sodaDirectiveMap[key];
								delete sodaDirectiveMap[key];
							}
						}

						var i = 0,
						    len = sodaDirectiveArr.length;
						for (; i < len; i++) {
							sodaDirectiveArr[i].name = sodaDirectiveArr[i].name.replace(prefix, newPrefix);
						}

						prefix = newPrefix;
						prefixReg = new RegExp('^' + prefix + '-');
					};

					if ((false ? 'undefined' : _typeof(exports)) === 'object' && (false ? 'undefined' : _typeof(module)) === 'object') module.exports = sodaRender;else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
						return sodaRender;
					}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["soda"] = sodaRender;else window.soda = sodaRender;

					// 监听数据异常情况
				})();
				/* WEBPACK VAR INJECTION */
			}).call(exports, __webpack_require__(3)(module));

			/***/
		},
		/* 3 */
		/***/function (module, exports) {

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

			/***/
		},
		/* 4 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

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

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { 'default': obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

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

					this.data = data || {};
					this._omi_server_rendering = componentOption.server;
					this.id = this._omi_server_rendering ? 1000000 + _omi2['default'].getInstanceId() : _omi2['default'].getInstanceId();

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
							this._render(false, false, true);
						} else {
							if (this._omi_preventSelfUpdate) return;
							// update child node
							if (this._omi_removed) {
								var hdNode = this._createHiddenNode();
								this.node.parentNode.replaceChild(hdNode, this.node);
								this.node = hdNode;
							} else {
								if (this._omi_domDiffDisabled) {
									this.node.parentNode.replaceChild(_morphdom2['default'].toElement((0, _event2['default'])(this._childRender(this._omiChildStr, false, true), this.id)), this.node);
								} else {
									(0, _morphdom2['default'])(this.node, (0, _event2['default'])(this._childRender(this._omiChildStr, false, true), this.id));
								}
								this.node = document.querySelector("[" + this._omi_scoped_attr + "]");
								this._queryElements(this);
								this._fixForm();
							}
						}

						//exec new element installed
						this._childrenInstalledAfterUpdate(this);

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
					value: function _render(isFirst, isSelf, fromUpdate) {
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
							this._extractChildren(this, fromUpdate);
						} else {
							this._extractChildrenString(this, fromUpdate);
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
					value: function _childRender(childStr, isSelf, fromUpdate) {
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
							this._extractChildren(this, fromUpdate);
						} else {
							this._extractChildrenString(this, fromUpdate);
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
					key: '_childrenInstalledAfterUpdate',
					value: function _childrenInstalledAfterUpdate(root) {
						var _this10 = this;

						root.children.forEach(function (child) {
							if (child._omi_needInstalled) {
								child._omi_needInstalled = false;
								_this10._childrenInstalled(child);
								child.installed();
								child._execInstalledHandlers();
							}
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
					key: '_replaceTags',
					value: function _replaceTags(array, html, updateSelf, fromUpdate) {
						var _this11 = this;

						if (_omi2['default'].customTags.length === 0) return;
						var str = array.join("|");
						var reg = new RegExp('<(' + str + '+)((?:\\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\\s*=\\s*(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>\\s]+))?)*)\\s*((\\/>)|>(([\\s\\S]*?)<\\/\\1>))', 'g');
						var index = 0;
						return html.replace(reg, function (m, a, b, c, d, e, f) {
							if (updateSelf) {
								var cmi = _this11.children[index];
								if (cmi && cmi.___omi_constructor_name === a) {
									cmi._omiChildStr = m;
								}
							} else {
								_this11._initComponentByString(a, m, f, index++, _this11, fromUpdate);
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
						var _this12 = this;

						return html.replace(/<[^/]([A-Za-z]*)[^>]*>/g, function (m) {
							var str = m.split(" ")[0].replace(">", "");
							if (_this12._omi_scopedSelfCSS || !_this12.___omi_constructor_name) {
								return m.replace(str, str + " " + id);
							} else {
								return m.replace(str, str + " " + id + " " + shareAtrr);
							}
						});
					}
				}, {
					key: '_getDataset',
					value: function _getDataset(childStr) {
						var _this13 = this;

						var json = (0, _html2json2['default'])(childStr);
						var attr = json.child[0].attr;
						var baseData = {};
						Object.keys(attr).forEach(function (key) {
							var value = attr[key];
							if (key.indexOf('on') === 0) {
								var handler = _this13.parent[value];
								if (handler) {
									baseData[_this13._capitalize(key)] = handler.bind(_this13.parent);
								}
							} else if (key.indexOf('data-') === 0) {
								_this13._dataset[_this13._capitalize(key.replace('data-', ''))] = value;
							} else if (key.indexOf(':data-') === 0) {
								_this13._dataset[_this13._capitalize(key.replace(':data-', ''))] = eval('(' + value + ')');
							} else if (key.indexOf('::data-') === 0) {
								_this13._dataset[_this13._capitalize(key.replace('::data-', ''))] = _this13._extractPropertyFromString(value, _this13.parent);
							} else if (key === 'data') {
								_this13._dataset = _this13._extractPropertyFromString(value, _this13.parent);
							} else if (key === ':data') {
								_this13._dataset = eval('(' + value + ')');
							} else if (key === 'group-data') {
								_this13._dataset = _this13._extractPropertyFromString(value, _this13.parent)[_this13._omi_groupDataIndex];
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
					value: function _extractChildrenString(child, fromUpdate) {
						this._replaceTags(_omi2['default'].customTags, child.HTML, true, fromUpdate);
					}
				}, {
					key: '_extractChildren',
					value: function _extractChildren(child, fromUpdate) {
						this._replaceTags(_omi2['default'].customTags, child.HTML, false, fromUpdate);
					}
				}, {
					key: '_initComponentByString',
					value: function _initComponentByString(name, childStr, slotContent, i, child, fromUpdate) {
						var _this14 = this;

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
										baseData[_this14._capitalize(key)] = handler.bind(child);
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
									dataset = _this14._extractPropertyFromString(value, child)[groupDataIndex];
								} else if (key.indexOf('data-') === 0) {
									dataset[_this14._capitalize(key.replace('data-', ''))] = value;
								} else if (key.indexOf(':data-') === 0) {
									dataset[_this14._capitalize(key.replace(':data-', ''))] = eval('(' + value + ')');
								} else if (key.indexOf('::data-') === 0) {
									dataset[_this14._capitalize(key.replace('::data-', ''))] = _this14._extractPropertyFromString(value, child);
								} else if (key === 'data') {
									dataset = _this14._extractPropertyFromString(value, child);
								} else if (key === ':data') {
									dataset = eval('(' + value + ')');
								} else if (key === 'preventSelfUpdate' || key === 'psu' || key === 'preventselfupdate') {
									_omi_option.preventSelfUpdate = true;
								} else if (key === 'selfDataFirst' || key === 'sdf' || key === 'selfdatafirst') {
									_omi_option.selfDataFirst = true;
								} else if (key === 'domDiffDisabled' || key === 'ddd' || key === 'domdiffdisabled') {
									_omi_option.domDiffDisabled = true;
								} else if (key === 'ignoreStoreData' || key === 'isd' || key === 'ignorestoredata') {
									_omi_option.ignoreStoreData = true;
								} else if (key === 'scopedSelfCSS' || key === 'ssc' || key === 'scopedselfcss') {
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

							if (fromUpdate) {
								sub_child._omi_needInstalled = true;
							}
						}
					}
				}]);

				return Component;
			}();

			exports['default'] = Component;

			/***/
		},
		/* 5 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _omi = __webpack_require__(1);

			var _omi2 = _interopRequireDefault(_omi);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { 'default': obj };
			}

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

					if (g1.match(/^\s*(@media|\d+%?|@-webkit-keyframes|@keyframes|to|from|@font-face)/)) {
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

			/***/
		},
		/* 6 */
		/***/function (module, exports) {

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

			/***/
		},
		/* 7 */
		/***/function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

			var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			};

			(function (global, factory) {
				(false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.morphdom = factory();
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

			/***/
		},
		/* 8 */
		/***/function (module, exports) {

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

			/***/
		},
		/* 9 */
		/***/function (module, exports) {

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

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

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

			/***/
		}]
		/******/)
	);
});
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omix = __webpack_require__(3);

var _omix2 = _interopRequireDefault(_omix);

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

var _home = __webpack_require__(7);

var _home2 = _interopRequireDefault(_home);

var _about = __webpack_require__(8);

var _about2 = _interopRequireDefault(_about);

var _userList = __webpack_require__(9);

var _userList2 = _interopRequireDefault(_userList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Omi$Component) {
    _inherits(App, _Omi$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'install',
        value: function install() {
            _index2['default'].init({
                routes: [{ path: '/', component: _home2['default'] }, { path: '/about', component: _about2['default'] }, { path: '/user-list', component: _userList2['default'] }, { path: '/user/:name/category/:category', component: function component() {
                        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 10));
                    } }],
                renderTo: "#view",
                defaultRoute: '/',
                root: this
            });
        }
    }, {
        key: 'style',
        value: function style() {
            return '\n        ul{\n            border-bottom: 1px solid #ccc;\n            padding-bottom:5px;\n        }\n        li{\n            display:inline-block;\n            margin-left:4px;\n        }\n        #view li{\n            display:block;\n        }\n        #view ul{\n            border-width: 0px;\n        }\n        ';
        }
    }, {
        key: 'render',
        value: function render() {
            return _omix2['default'].x(
                'div',
                null,
                _omix2['default'].x(
                    'ul',
                    null,
                    _omix2['default'].x(
                        'li',
                        null,
                        _omix2['default'].x(
                            'a',
                            { 'omi-router': true, to: '/' },
                            'Home'
                        )
                    ),
                    _omix2['default'].x(
                        'li',
                        null,
                        _omix2['default'].x(
                            'a',
                            { 'omi-router': true, to: '/about' },
                            'About'
                        )
                    ),
                    _omix2['default'].x(
                        'li',
                        null,
                        _omix2['default'].x(
                            'a',
                            { 'omi-router': true, to: '/user-list' },
                            'UserList'
                        )
                    )
                ),
                _omix2['default'].x('div', { id: 'view' })
            );
        }
    }]);

    return App;
}(_omix2['default'].Component);

_omix2['default'].render(new App(), "#container");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 *  omix v1.1.8 By dntzhang 
 *  Github: https://github.com/AlloyTeam/omix
 *  MIT Licensed.
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["Omix"] = factory();else root["Omix"] = factory();
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

            Omi.render = function (component, renderTo, option) {
                component.renderTo = typeof renderTo === 'string' ? document.querySelector(renderTo) : renderTo;
                if (typeof option === 'boolean') {
                    component._omi_increment = option;
                } else if (option) {
                    component._omi_increment = option.increment;
                    if (option.ssr) {
                        component.data = Object.assign({}, JSON.parse(document.getElementById('__omix-ssr-data').value), component.data);
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
                return '<input type="hidden" id="__omix-ssr-data" value=\'' + JSON.stringify(component.data) + '\' />';
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

                    this.data = Object.assign({
                        scopedSelfCss: false,
                        selfDataFirst: false
                    }, data);
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
                            if (this.data.scopedSelfCss || !_omi2['default'].style[shareAttr]) {
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
        }]
        /******/)
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 *  omi-router v0.3.0 by dntzhang
 *  Router for Omi.
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */

;(function () {

    var OmiRouter = {};

    var parser = __webpack_require__(5),
        renderTo = null,
        params = {},
        Component = null,
        store = null,
        routerOption = {},
        preRenderTo = null,
        preInstance = null,
        currentRoute = null,
        preRoute = null,
        instanceList = [],
        $route = {};

    OmiRouter.init = function (option) {
        routerOption = option;
        option.routes.forEach(function (route) {
            route.reg = parser(route.path);
        });

        Omi.extendPlugin('omi-router', function (dom, instance) {
            dom.setAttribute('href', '#' + dom.getAttribute('to'));
        });

        var hash = window.location.hash.replace('#', '');
        hashMapping(hash ? hash : routerOption.defaultRoute, renderTo);
        if (hash) {
            option.root.onInstalled(function () {
                render();
            });
        }
    };

    function getParams(toArr, pathArr) {
        var params = {};
        toArr.forEach(function (item, index) {
            if (index > 0) {
                params[pathArr[index].replace(':', '')] = item;
            }
        });
        return params;
    }

    function hashMapping(to) {
        routerOption.routes.every(function (route) {
            var toArr = to.match(route.reg);
            if (toArr) {
                var pathArr = route.path.match(route.reg);
                params = getParams(toArr, pathArr);
                renderTo = route.renderTo || routerOption.renderTo;
                store = route.store || routerOption.store;
                Component = route.component;
                currentRoute = route;
                pushState(to);
                return false;
            }
            return true;
        });
    }

    function pushState(route) {
        window.location.hash = route;
    }

    window.addEventListener('hashchange', function () {
        hashMapping(window.location.hash.replace('#', ''), renderTo);
        render();
    }, false);

    function render() {
        $route.params = params;

        if (preRenderTo === renderTo && preInstance && !routerOption.increment) {
            deleteInstance(preInstance);
        }

        var instance;

        if (routerOption.increment) {
            var i = 0,
                len = instanceList.length;
            for (; i < len; i++) {
                if (instanceList[i] instanceof Component) {
                    instance = instanceList[i];
                    break;
                }
            }
        }

        var doRouter = true;

        if (routerOption.beforeRoute) {
            doRouter = routerOption.beforeRoute({
                preRoute: preRoute,
                route: currentRoute,
                preComponent: preInstance
            });
        }

        if (doRouter === false) return;

        if (!instance) {
            if (currentRoute.component.prototype.render) {
                initComponent(instance, Component);
            } else {
                currentRoute.component().then(function (Component) {
                    initComponent(instance, Component['default']);
                    change(instance);
                });
                return;
            }
        } else {
            instance.$route = $route;
        }
        change(instance);
    }

    function initComponent(instance, Component) {
        instance = new Component();
        if (routerOption.increment) {
            instanceList.push(instance);
        }
        instance.$route = $route;
        Omi.render(instance, renderTo, {
            store: store,
            increment: routerOption.increment
        });
        if (routerOption.init) {
            routerOption.init({
                component: instance,
                preComponent: preInstance,
                preRoute: preRoute,
                route: currentRoute
            });
        }
    }

    function deleteInstance(instance) {
        for (var key in Omi.instances) {
            if (Omi.instances.hasOwnProperty(key)) {
                if (Omi.instances[key].id === instance.id) {
                    delete Omi.instances[key];
                    instance = null;
                    break;
                }
            }
        }
    }

    function change(instance) {
        if (routerOption.change) {
            routerOption.change({
                component: instance,
                preComponent: preInstance,
                preRoute: preRoute,
                route: currentRoute
            });
        }

        preRoute = currentRoute;
        preInstance = instance;
        preRenderTo = renderTo;
    }

    if (( false ? 'undefined' : _typeof(exports)) == "object") {
        module.exports = OmiRouter;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return OmiRouter;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        window.OmiRouter = OmiRouter;
    }
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isarray = __webpack_require__(6);

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp;
module.exports.parse = parse;
module.exports.compile = compile;
module.exports.tokensToFunction = tokensToFunction;
module.exports.tokensToRegExp = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (_typeof(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }

  if (isarray(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }

  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _omi2 = _interopRequireDefault(_omi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Omi$Component) {
    _inherits(Home, _Omi$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {

            return _omi2['default'].x(
                'div',
                null,
                'Home'
            );
        }
    }]);

    return Home;
}(_omi2['default'].Component);

_omi2['default'].tag('home', Home);

exports['default'] = Home;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _omi2 = _interopRequireDefault(_omi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Omi$Component) {
    _inherits(About, _Omi$Component);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: 'render',
        value: function render() {
            return _omi2['default'].x(
                'div',
                null,
                'About'
            );
        }
    }]);

    return About;
}(_omi2['default'].Component);

_omi2['default'].tag('about', About);

exports['default'] = About;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _omi2 = _interopRequireDefault(_omi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserList = function (_Omi$Component) {
    _inherits(UserList, _Omi$Component);

    function UserList() {
        _classCallCheck(this, UserList);

        return _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).apply(this, arguments));
    }

    _createClass(UserList, [{
        key: "render",
        value: function render() {
            return _omi2["default"].x(
                "ul",
                null,
                _omi2["default"].x(
                    "li",
                    null,
                    _omi2["default"].x(
                        "a",
                        { "omi-router": true, to: "/user/yanagao/category/js" },
                        "yanagao"
                    )
                ),
                _omi2["default"].x(
                    "li",
                    null,
                    _omi2["default"].x(
                        "a",
                        { "omi-router": true, to: "/user/vorshen/category/html" },
                        "vorshen"
                    )
                ),
                _omi2["default"].x(
                    "li",
                    null,
                    _omi2["default"].x(
                        "a",
                        { "omi-router": true, to: "/user/dntzhang/category/css" },
                        "dntzhang"
                    )
                )
            );
        }
    }]);

    return UserList;
}(_omi2["default"].Component);

_omi2["default"].tag('user-list', UserList);

exports["default"] = UserList;

/***/ })
/******/ ]);
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["MPicker"] = factory(require("omi"));
	else
		root["MPicker"] = factory(root["Omi"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_omi__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/picker/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!./src/picker/index.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--4-3!./src/picker/index.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./src/picker/index.scss":
/*!*******************************!*\
  !*** ./src/picker/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../node_modules/_css-loader@1.0.1@css-loader!../../node_modules/_resolve-url-loader@3.1.0@resolve-url-loader!../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--4-3!./index.scss */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!./src/picker/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/picker/index.tsx":
/*!******************************!*\
  !*** ./src/picker/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var css = __webpack_require__(/*! ./index.scss */ "./src/picker/index.scss");
__webpack_require__(/*! ../text-field */ "./src/text-field/index.js");
//@ts-ignore
__webpack_require__(/*! ../theme.ts */ "./src/theme.ts");
var Picker = /** @class */ (function (_super) {
    __extends(Picker, _super);
    function Picker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Picker.prototype.render = function (props) {
        return (omi_1.h("m-text-field", __assign({}, props, { css: "input{min-width:56px;}" })));
    };
    Picker.css = css;
    Picker.defaultProps = {};
    Picker.propTypes = {
        type: String,
        label: String
    };
    Picker = __decorate([
        omi_1.tag('m-picker')
    ], Picker);
    return Picker;
}(omi_1.WeElement));
exports.default = Picker;


/***/ }),

/***/ "./src/text-field/index.js":
/*!*********************************!*\
  !*** ./src/text-field/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
    if (true)
        module.exports = factory(__webpack_require__(/*! omi */ "omi"));
    else {}
})(window, function (__WEBPACK_EXTERNAL_MODULE_omi__) {
    return /******/ (function (modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) {
                /******/ return installedModules[moduleId].exports;
                /******/ }
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
                /******/ 
            };
            /******/
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/ module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/ return module.exports;
            /******/ 
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function (exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) {
                /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
                /******/ }
            /******/ 
        };
        /******/
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function (exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/ }
            /******/ Object.defineProperty(exports, '__esModule', { value: true });
            /******/ 
        };
        /******/
        /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function (value, mode) {
            /******/ if (mode & 1)
                value = __webpack_require__(value);
            /******/ if (mode & 8)
                return value;
            /******/ if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
                return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
            /******/ if (mode & 2 && typeof value != 'string')
                for (var key in value)
                    __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
            /******/ return ns;
            /******/ 
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function (module) {
            /******/ var getter = module && module.__esModule ?
                /******/ function getDefault() { return module['default']; } :
                /******/ function getModuleExports() { return module; };
            /******/ __webpack_require__.d(getter, 'a', getter);
            /******/ return getter;
            /******/ 
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        /******/
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/
        /******/
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = "./src/text-field/index.tsx");
        /******/ 
    })({
        /***/ "./node_modules/_@material_base@1.0.0@@material/base/component.js": 
        /*!************************************************************************!*\
          !*** ./node_modules/_@material_base@1.0.0@@material/base/component.js ***!
          \************************************************************************/
        /*! exports provided: MDCComponent, default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCComponent", function () { return MDCComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_base@1.0.0@@material/base/foundation.js");
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCComponent = /** @class */ (function () {
                function MDCComponent(root, foundation) {
                    var args = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        args[_i - 2] = arguments[_i];
                    }
                    this.root_ = root;
                    this.initialize.apply(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args));
                    // Note that we initialize foundation here and not within the constructor's default param so that
                    // this.root_ is defined and can be used within the foundation class.
                    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
                    this.foundation_.init();
                    this.initialSyncWithDOM();
                }
                MDCComponent.attachTo = function (root) {
                    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
                    // returns an instantiated component with its root set to that element. Also note that in the cases of
                    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
                    // from getDefaultFoundation().
                    return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]({}));
                };
                /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
                MDCComponent.prototype.initialize = function () {
                    var _args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _args[_i] = arguments[_i];
                    }
                    // Subclasses can override this to do any additional setup work that would be considered part of a
                    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
                    // initialized. Any additional arguments besides root and foundation will be passed in here.
                };
                MDCComponent.prototype.getDefaultFoundation = function () {
                    // Subclasses must override this method to return a properly configured foundation class for the
                    // component.
                    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
                        'foundation class');
                };
                MDCComponent.prototype.initialSyncWithDOM = function () {
                    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
                    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
                    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
                    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
                };
                MDCComponent.prototype.destroy = function () {
                    // Subclasses may implement this method to release any resources / deregister any listeners they have
                    // attached. An example of this might be deregistering a resize event from the window object.
                    this.foundation_.destroy();
                };
                MDCComponent.prototype.listen = function (evtType, handler) {
                    this.root_.addEventListener(evtType, handler);
                };
                MDCComponent.prototype.unlisten = function (evtType, handler) {
                    this.root_.removeEventListener(evtType, handler);
                };
                /**
                 * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
                 */
                MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
                    if (shouldBubble === void 0) {
                        shouldBubble = false;
                    }
                    var evt;
                    if (typeof CustomEvent === 'function') {
                        evt = new CustomEvent(evtType, {
                            bubbles: shouldBubble,
                            detail: evtData,
                        });
                    }
                    else {
                        evt = document.createEvent('CustomEvent');
                        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
                    }
                    this.root_.dispatchEvent(evt);
                };
                return MDCComponent;
            }());
            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */ __webpack_exports__["default"] = (MDCComponent);
            //# sourceMappingURL=component.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_base@1.0.0@@material/base/foundation.js": 
        /*!*************************************************************************!*\
          !*** ./node_modules/_@material_base@1.0.0@@material/base/foundation.js ***!
          \*************************************************************************/
        /*! exports provided: MDCFoundation, default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function () { return MDCFoundation; });
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCFoundation = /** @class */ (function () {
                function MDCFoundation(adapter) {
                    if (adapter === void 0) {
                        adapter = {};
                    }
                    this.adapter_ = adapter;
                }
                Object.defineProperty(MDCFoundation, "cssClasses", {
                    get: function () {
                        // Classes extending MDCFoundation should implement this method to return an object which exports every
                        // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "strings", {
                    get: function () {
                        // Classes extending MDCFoundation should implement this method to return an object which exports all
                        // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "numbers", {
                    get: function () {
                        // Classes extending MDCFoundation should implement this method to return an object which exports all
                        // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "defaultAdapter", {
                    get: function () {
                        // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
                        // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
                        // validation.
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCFoundation.prototype.init = function () {
                    // Subclasses should override this method to perform initialization routines (registering events, etc.)
                };
                MDCFoundation.prototype.destroy = function () {
                    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
                };
                return MDCFoundation;
            }());
            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);
            //# sourceMappingURL=foundation.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_dom@1.1.0@@material/dom/index.js": 
        /*!******************************************************************!*\
          !*** ./node_modules/_@material_dom@1.1.0@@material/dom/index.js ***!
          \******************************************************************/
        /*! exports provided: ponyfill */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _ponyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill */ "./node_modules/_@material_dom@1.1.0@@material/dom/ponyfill.js");
            /* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ponyfill", function () { return _ponyfill__WEBPACK_IMPORTED_MODULE_0__; });
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            //# sourceMappingURL=index.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_dom@1.1.0@@material/dom/ponyfill.js": 
        /*!*********************************************************************!*\
          !*** ./node_modules/_@material_dom@1.1.0@@material/dom/ponyfill.js ***!
          \*********************************************************************/
        /*! exports provided: closest, matches */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function () { return closest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function () { return matches; });
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            /**
             * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
             * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
             */
            function closest(element, selector) {
                if (element.closest) {
                    return element.closest(selector);
                }
                var el = element;
                while (el) {
                    if (matches(el, selector)) {
                        return el;
                    }
                    el = el.parentElement;
                }
                return null;
            }
            function matches(element, selector) {
                var nativeMatches = element.matches
                    || element.webkitMatchesSelector
                    || element.msMatchesSelector;
                return nativeMatches.call(element, selector);
            }
            //# sourceMappingURL=ponyfill.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_floating-label@1.1.0@@material/floating-label/component.js": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/_@material_floating-label@1.1.0@@material/floating-label/component.js ***!
          \********************************************************************************************/
        /*! exports provided: MDCFloatingLabel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabel", function () { return MDCFloatingLabel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/_@material_base@1.0.0@@material/base/component.js");
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_floating-label@1.1.0@@material/floating-label/foundation.js");
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCFloatingLabel = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCFloatingLabel, _super);
                function MDCFloatingLabel() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCFloatingLabel.attachTo = function (root) {
                    return new MDCFloatingLabel(root);
                };
                /**
                 * Styles the label to produce the label shake for errors.
                 * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
                 */
                MDCFloatingLabel.prototype.shake = function (shouldShake) {
                    this.foundation_.shake(shouldShake);
                };
                /**
                 * Styles the label to float/dock.
                 * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
                 */
                MDCFloatingLabel.prototype.float = function (shouldFloat) {
                    this.foundation_.float(shouldFloat);
                };
                MDCFloatingLabel.prototype.getWidth = function () {
                    return this.foundation_.getWidth();
                };
                MDCFloatingLabel.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = {
                        addClass: function (className) { return _this.root_.classList.add(className); },
                        removeClass: function (className) { return _this.root_.classList.remove(className); },
                        getWidth: function () { return _this.root_.scrollWidth; },
                        registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
                        deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
                    };
                    // tslint:enable:object-literal-sort-keys
                    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCFloatingLabelFoundation"](adapter);
                };
                return MDCFloatingLabel;
            }(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));
            //# sourceMappingURL=component.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_floating-label@1.1.0@@material/floating-label/constants.js": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/_@material_floating-label@1.1.0@@material/floating-label/constants.js ***!
          \********************************************************************************************/
        /*! exports provided: cssClasses */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function () { return cssClasses; });
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses = {
                LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
                LABEL_SHAKE: 'mdc-floating-label--shake',
                ROOT: 'mdc-floating-label',
            };
            //# sourceMappingURL=constants.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_floating-label@1.1.0@@material/floating-label/foundation.js": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/_@material_floating-label@1.1.0@@material/floating-label/foundation.js ***!
          \*********************************************************************************************/
        /*! exports provided: MDCFloatingLabelFoundation, default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabelFoundation", function () { return MDCFloatingLabelFoundation; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/_@material_base@1.0.0@@material/base/foundation.js");
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/_@material_floating-label@1.1.0@@material/floating-label/constants.js");
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCFloatingLabelFoundation, _super);
                function MDCFloatingLabelFoundation(adapter) {
                    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;
                    _this.shakeAnimationEndHandler_ = function () { return _this.handleShakeAnimationEnd_(); };
                    return _this;
                }
                Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            getWidth: function () { return 0; },
                            registerInteractionHandler: function () { return undefined; },
                            deregisterInteractionHandler: function () { return undefined; },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCFloatingLabelFoundation.prototype.init = function () {
                    this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
                };
                MDCFloatingLabelFoundation.prototype.destroy = function () {
                    this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
                };
                /**
                 * Returns the width of the label element.
                 */
                MDCFloatingLabelFoundation.prototype.getWidth = function () {
                    return this.adapter_.getWidth();
                };
                /**
                 * Styles the label to produce a shake animation to indicate an error.
                 * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
                 */
                MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
                    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
                    if (shouldShake) {
                        this.adapter_.addClass(LABEL_SHAKE);
                    }
                    else {
                        this.adapter_.removeClass(LABEL_SHAKE);
                    }
                };
                /**
                 * Styles the label to float or dock.
                 * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
                 */
                MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
                    var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
                    if (shouldFloat) {
                        this.adapter_.addClass(LABEL_FLOAT_ABOVE);
                    }
                    else {
                        this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
                        this.adapter_.removeClass(LABEL_SHAKE);
                    }
                };
                MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
                    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
                    this.adapter_.removeClass(LABEL_SHAKE);
                };
                return MDCFloatingLabelFoundation;
            }(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));
            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */ __webpack_exports__["default"] = (MDCFloatingLabelFoundation);
            //# sourceMappingURL=foundation.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_floating-label@1.1.0@@material/floating-label/index.js": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/_@material_floating-label@1.1.0@@material/floating-label/index.js ***!
          \****************************************************************************************/
        /*! exports provided: MDCFloatingLabel, MDCFloatingLabelFoundation */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/_@material_floating-label@1.1.0@@material/floating-label/component.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabel", function () { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCFloatingLabel"]; });
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_floating-label@1.1.0@@material/floating-label/foundation.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabelFoundation", function () { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFloatingLabelFoundation"]; });
            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            //# sourceMappingURL=index.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_line-ripple@1.1.0@@material/line-ripple/component.js": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/_@material_line-ripple@1.1.0@@material/line-ripple/component.js ***!
          \**************************************************************************************/
        /*! exports provided: MDCLineRipple */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCLineRipple", function () { return MDCLineRipple; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/_@material_base@1.0.0@@material/base/component.js");
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_line-ripple@1.1.0@@material/line-ripple/foundation.js");
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCLineRipple = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCLineRipple, _super);
                function MDCLineRipple() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCLineRipple.attachTo = function (root) {
                    return new MDCLineRipple(root);
                };
                /**
                 * Activates the line ripple
                 */
                MDCLineRipple.prototype.activate = function () {
                    this.foundation_.activate();
                };
                /**
                 * Deactivates the line ripple
                 */
                MDCLineRipple.prototype.deactivate = function () {
                    this.foundation_.deactivate();
                };
                /**
                 * Sets the transform origin given a user's click location.
                 * The `rippleCenter` is the x-coordinate of the middle of the ripple.
                 */
                MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
                    this.foundation_.setRippleCenter(xCoordinate);
                };
                MDCLineRipple.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = {
                        addClass: function (className) { return _this.root_.classList.add(className); },
                        removeClass: function (className) { return _this.root_.classList.remove(className); },
                        hasClass: function (className) { return _this.root_.classList.contains(className); },
                        setStyle: function (propertyName, value) { return _this.root_.style.setProperty(propertyName, value); },
                        registerEventHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
                        deregisterEventHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
                    };
                    // tslint:enable:object-literal-sort-keys
                    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCLineRippleFoundation"](adapter);
                };
                return MDCLineRipple;
            }(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));
            //# sourceMappingURL=component.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_line-ripple@1.1.0@@material/line-ripple/constants.js": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/_@material_line-ripple@1.1.0@@material/line-ripple/constants.js ***!
          \**************************************************************************************/
        /*! exports provided: cssClasses */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function () { return cssClasses; });
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses = {
                LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
                LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
            };
            //# sourceMappingURL=constants.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_line-ripple@1.1.0@@material/line-ripple/foundation.js": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/_@material_line-ripple@1.1.0@@material/line-ripple/foundation.js ***!
          \***************************************************************************************/
        /*! exports provided: MDCLineRippleFoundation, default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCLineRippleFoundation", function () { return MDCLineRippleFoundation; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/_@material_base@1.0.0@@material/base/foundation.js");
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/_@material_line-ripple@1.1.0@@material/line-ripple/constants.js");
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCLineRippleFoundation = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCLineRippleFoundation, _super);
                function MDCLineRippleFoundation(adapter) {
                    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;
                    _this.transitionEndHandler_ = function (evt) { return _this.handleTransitionEnd(evt); };
                    return _this;
                }
                Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            hasClass: function () { return false; },
                            setStyle: function () { return undefined; },
                            registerEventHandler: function () { return undefined; },
                            deregisterEventHandler: function () { return undefined; },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCLineRippleFoundation.prototype.init = function () {
                    this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
                };
                MDCLineRippleFoundation.prototype.destroy = function () {
                    this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
                };
                MDCLineRippleFoundation.prototype.activate = function () {
                    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
                    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_ACTIVE);
                };
                MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
                    this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
                };
                MDCLineRippleFoundation.prototype.deactivate = function () {
                    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
                };
                MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
                    // Wait for the line ripple to be either transparent or opaque
                    // before emitting the animation end event
                    var isDeactivating = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
                    if (evt.propertyName === 'opacity') {
                        if (isDeactivating) {
                            this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_ACTIVE);
                            this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
                        }
                    }
                };
                return MDCLineRippleFoundation;
            }(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));
            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */ __webpack_exports__["default"] = (MDCLineRippleFoundation);
            //# sourceMappingURL=foundation.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_line-ripple@1.1.0@@material/line-ripple/index.js": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/_@material_line-ripple@1.1.0@@material/line-ripple/index.js ***!
          \**********************************************************************************/
        /*! exports provided: MDCLineRipple, MDCLineRippleFoundation */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/_@material_line-ripple@1.1.0@@material/line-ripple/component.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCLineRipple", function () { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCLineRipple"]; });
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_line-ripple@1.1.0@@material/line-ripple/foundation.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCLineRippleFoundation", function () { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCLineRippleFoundation"]; });
            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            //# sourceMappingURL=index.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_notched-outline@1.1.1@@material/notched-outline/component.js": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/_@material_notched-outline@1.1.1@@material/notched-outline/component.js ***!
          \**********************************************************************************************/
        /*! exports provided: MDCNotchedOutline */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCNotchedOutline", function () { return MDCNotchedOutline; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/_@material_base@1.0.0@@material/base/component.js");
            /* harmony import */ var _material_floating_label_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/floating-label/foundation */ "./node_modules/_@material_floating-label@1.1.0@@material/floating-label/foundation.js");
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/_@material_notched-outline@1.1.1@@material/notched-outline/constants.js");
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_notched-outline@1.1.1@@material/notched-outline/foundation.js");
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCNotchedOutline = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCNotchedOutline, _super);
                function MDCNotchedOutline() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCNotchedOutline.attachTo = function (root) {
                    return new MDCNotchedOutline(root);
                };
                MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
                    this.notchElement_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].NOTCH_ELEMENT_SELECTOR);
                    var label = this.root_.querySelector('.' + _material_floating_label_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCFloatingLabelFoundation"].cssClasses.ROOT);
                    if (label) {
                        label.style.transitionDuration = '0s';
                        this.root_.classList.add(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].OUTLINE_UPGRADED);
                        requestAnimationFrame(function () {
                            label.style.transitionDuration = '';
                        });
                    }
                    else {
                        this.root_.classList.add(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].NO_LABEL);
                    }
                };
                /**
                 * Updates classes and styles to open the notch to the specified width.
                 * @param notchWidth The notch width in the outline.
                 */
                MDCNotchedOutline.prototype.notch = function (notchWidth) {
                    this.foundation_.notch(notchWidth);
                };
                /**
                 * Updates classes and styles to close the notch.
                 */
                MDCNotchedOutline.prototype.closeNotch = function () {
                    this.foundation_.closeNotch();
                };
                MDCNotchedOutline.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = {
                        addClass: function (className) { return _this.root_.classList.add(className); },
                        removeClass: function (className) { return _this.root_.classList.remove(className); },
                        setNotchWidthProperty: function (width) { return _this.notchElement_.style.setProperty('width', width + 'px'); },
                        removeNotchWidthProperty: function () { return _this.notchElement_.style.removeProperty('width'); },
                    };
                    // tslint:enable:object-literal-sort-keys
                    return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCNotchedOutlineFoundation"](adapter);
                };
                return MDCNotchedOutline;
            }(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));
            //# sourceMappingURL=component.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_notched-outline@1.1.1@@material/notched-outline/constants.js": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/_@material_notched-outline@1.1.1@@material/notched-outline/constants.js ***!
          \**********************************************************************************************/
        /*! exports provided: cssClasses, numbers, strings */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function () { return cssClasses; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function () { return numbers; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function () { return strings; });
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var strings = {
                NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
            };
            var numbers = {
                // This should stay in sync with $mdc-notched-outline-padding * 2.
                NOTCH_ELEMENT_PADDING: 8,
            };
            var cssClasses = {
                NO_LABEL: 'mdc-notched-outline--no-label',
                OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
                OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
            };
            //# sourceMappingURL=constants.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_notched-outline@1.1.1@@material/notched-outline/foundation.js": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/_@material_notched-outline@1.1.1@@material/notched-outline/foundation.js ***!
          \***********************************************************************************************/
        /*! exports provided: MDCNotchedOutlineFoundation, default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCNotchedOutlineFoundation", function () { return MDCNotchedOutlineFoundation; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/_@material_base@1.0.0@@material/base/foundation.js");
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/_@material_notched-outline@1.1.1@@material/notched-outline/constants.js");
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCNotchedOutlineFoundation, _super);
                function MDCNotchedOutlineFoundation(adapter) {
                    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
                }
                Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            setNotchWidthProperty: function () { return undefined; },
                            removeNotchWidthProperty: function () { return undefined; },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
                 */
                MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
                    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
                    if (notchWidth > 0) {
                        notchWidth += _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].NOTCH_ELEMENT_PADDING; // Add padding from left/right.
                    }
                    this.adapter_.setNotchWidthProperty(notchWidth);
                    this.adapter_.addClass(OUTLINE_NOTCHED);
                };
                /**
                 * Removes notched outline selector to close the notch in the outline.
                 */
                MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
                    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
                    this.adapter_.removeClass(OUTLINE_NOTCHED);
                    this.adapter_.removeNotchWidthProperty();
                };
                return MDCNotchedOutlineFoundation;
            }(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));
            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */ __webpack_exports__["default"] = (MDCNotchedOutlineFoundation);
            //# sourceMappingURL=foundation.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_notched-outline@1.1.1@@material/notched-outline/index.js": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/_@material_notched-outline@1.1.1@@material/notched-outline/index.js ***!
          \******************************************************************************************/
        /*! exports provided: MDCNotchedOutline, MDCNotchedOutlineFoundation */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/_@material_notched-outline@1.1.1@@material/notched-outline/component.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCNotchedOutline", function () { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCNotchedOutline"]; });
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_notched-outline@1.1.1@@material/notched-outline/foundation.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCNotchedOutlineFoundation", function () { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCNotchedOutlineFoundation"]; });
            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            //# sourceMappingURL=index.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_ripple@1.1.0@@material/ripple/component.js": 
        /*!****************************************************************************!*\
          !*** ./node_modules/_@material_ripple@1.1.0@@material/ripple/component.js ***!
          \****************************************************************************/
        /*! exports provided: MDCRipple */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function () { return MDCRipple; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/_@material_base@1.0.0@@material/base/component.js");
            /* harmony import */ var _material_dom_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/index */ "./node_modules/_@material_dom@1.1.0@@material/dom/index.js");
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_ripple@1.1.0@@material/ripple/foundation.js");
            /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/_@material_ripple@1.1.0@@material/ripple/util.js");
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCRipple = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRipple, _super);
                function MDCRipple() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.disabled = false;
                    return _this;
                }
                MDCRipple.attachTo = function (root, opts) {
                    if (opts === void 0) {
                        opts = { isUnbounded: undefined };
                    }
                    var ripple = new MDCRipple(root);
                    // Only override unbounded behavior if option is explicitly specified
                    if (opts.isUnbounded !== undefined) {
                        ripple.unbounded = opts.isUnbounded;
                    }
                    return ripple;
                };
                MDCRipple.createAdapter = function (instance) {
                    return {
                        addClass: function (className) { return instance.root_.classList.add(className); },
                        browserSupportsCssVars: function () { return _util__WEBPACK_IMPORTED_MODULE_4__["supportsCssVariables"](window); },
                        computeBoundingRect: function () { return instance.root_.getBoundingClientRect(); },
                        containsEventTarget: function (target) { return instance.root_.contains(target); },
                        deregisterDocumentInteractionHandler: function (evtType, handler) {
                            return document.documentElement.removeEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
                        },
                        deregisterInteractionHandler: function (evtType, handler) {
                            return instance.root_.removeEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
                        },
                        deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
                        getWindowPageOffset: function () { return ({ x: window.pageXOffset, y: window.pageYOffset }); },
                        isSurfaceActive: function () { return _material_dom_index__WEBPACK_IMPORTED_MODULE_2__["ponyfill"].matches(instance.root_, ':active'); },
                        isSurfaceDisabled: function () { return Boolean(instance.disabled); },
                        isUnbounded: function () { return Boolean(instance.unbounded); },
                        registerDocumentInteractionHandler: function (evtType, handler) {
                            return document.documentElement.addEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
                        },
                        registerInteractionHandler: function (evtType, handler) {
                            return instance.root_.addEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
                        },
                        registerResizeHandler: function (handler) { return window.addEventListener('resize', handler); },
                        removeClass: function (className) { return instance.root_.classList.remove(className); },
                        updateCssVariable: function (varName, value) { return instance.root_.style.setProperty(varName, value); },
                    };
                };
                Object.defineProperty(MDCRipple.prototype, "unbounded", {
                    get: function () {
                        return Boolean(this.unbounded_);
                    },
                    set: function (unbounded) {
                        this.unbounded_ = Boolean(unbounded);
                        this.setUnbounded_();
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRipple.prototype.activate = function () {
                    this.foundation_.activate();
                };
                MDCRipple.prototype.deactivate = function () {
                    this.foundation_.deactivate();
                };
                MDCRipple.prototype.layout = function () {
                    this.foundation_.layout();
                };
                MDCRipple.prototype.getDefaultFoundation = function () {
                    return new _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCRippleFoundation"](MDCRipple.createAdapter(this));
                };
                MDCRipple.prototype.initialSyncWithDOM = function () {
                    var root = this.root_;
                    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
                };
                /**
                 * Closure Compiler throws an access control error when directly accessing a
                 * protected or private property inside a getter/setter, like unbounded above.
                 * By accessing the protected property inside a method, we solve that problem.
                 * That's why this function exists.
                 */
                MDCRipple.prototype.setUnbounded_ = function () {
                    this.foundation_.setUnbounded(Boolean(this.unbounded_));
                };
                return MDCRipple;
            }(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));
            //# sourceMappingURL=component.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_ripple@1.1.0@@material/ripple/constants.js": 
        /*!****************************************************************************!*\
          !*** ./node_modules/_@material_ripple@1.1.0@@material/ripple/constants.js ***!
          \****************************************************************************/
        /*! exports provided: cssClasses, strings, numbers */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function () { return cssClasses; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function () { return strings; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function () { return numbers; });
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses = {
                // Ripple is a special case where the "root" component is really a "mixin" of sorts,
                // given that it's an 'upgrade' to an existing component. That being said it is the root
                // CSS class that all other CSS classes derive from.
                BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
                FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
                FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
                ROOT: 'mdc-ripple-upgraded',
                UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
            };
            var strings = {
                VAR_FG_SCALE: '--mdc-ripple-fg-scale',
                VAR_FG_SIZE: '--mdc-ripple-fg-size',
                VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
                VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
                VAR_LEFT: '--mdc-ripple-left',
                VAR_TOP: '--mdc-ripple-top',
            };
            var numbers = {
                DEACTIVATION_TIMEOUT_MS: 225,
                FG_DEACTIVATION_MS: 150,
                INITIAL_ORIGIN_SCALE: 0.6,
                PADDING: 10,
                TAP_DELAY_MS: 300,
            };
            //# sourceMappingURL=constants.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_ripple@1.1.0@@material/ripple/foundation.js": 
        /*!*****************************************************************************!*\
          !*** ./node_modules/_@material_ripple@1.1.0@@material/ripple/foundation.js ***!
          \*****************************************************************************/
        /*! exports provided: MDCRippleFoundation, default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function () { return MDCRippleFoundation; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/_@material_base@1.0.0@@material/base/foundation.js");
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/_@material_ripple@1.1.0@@material/ripple/constants.js");
            /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/_@material_ripple@1.1.0@@material/ripple/util.js");
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            // Activation events registered on the root element of each instance for activation
            var ACTIVATION_EVENT_TYPES = [
                'touchstart', 'pointerdown', 'mousedown', 'keydown',
            ];
            // Deactivation events registered on documentElement when a pointer-related down event occurs
            var POINTER_DEACTIVATION_EVENT_TYPES = [
                'touchend', 'pointerup', 'mouseup', 'contextmenu',
            ];
            // simultaneous nested activations
            var activatedTargets = [];
            var MDCRippleFoundation = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRippleFoundation, _super);
                function MDCRippleFoundation(adapter) {
                    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
                    _this.activationAnimationHasEnded_ = false;
                    _this.activationTimer_ = 0;
                    _this.fgDeactivationRemovalTimer_ = 0;
                    _this.fgScale_ = '0';
                    _this.frame_ = { width: 0, height: 0 };
                    _this.initialSize_ = 0;
                    _this.layoutFrame_ = 0;
                    _this.maxRadius_ = 0;
                    _this.unboundedCoords_ = { left: 0, top: 0 };
                    _this.activationState_ = _this.defaultActivationState_();
                    _this.activationTimerCallback_ = function () {
                        _this.activationAnimationHasEnded_ = true;
                        _this.runDeactivationUXLogicIfReady_();
                    };
                    _this.activateHandler_ = function (e) { return _this.activate_(e); };
                    _this.deactivateHandler_ = function () { return _this.deactivate_(); };
                    _this.focusHandler_ = function () { return _this.handleFocus(); };
                    _this.blurHandler_ = function () { return _this.handleBlur(); };
                    _this.resizeHandler_ = function () { return _this.layout(); };
                    return _this;
                }
                Object.defineProperty(MDCRippleFoundation, "cssClasses", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "strings", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "numbers", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
                    get: function () {
                        return {
                            addClass: function () { return undefined; },
                            browserSupportsCssVars: function () { return true; },
                            computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                            containsEventTarget: function () { return true; },
                            deregisterDocumentInteractionHandler: function () { return undefined; },
                            deregisterInteractionHandler: function () { return undefined; },
                            deregisterResizeHandler: function () { return undefined; },
                            getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                            isSurfaceActive: function () { return true; },
                            isSurfaceDisabled: function () { return true; },
                            isUnbounded: function () { return true; },
                            registerDocumentInteractionHandler: function () { return undefined; },
                            registerInteractionHandler: function () { return undefined; },
                            registerResizeHandler: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            updateCssVariable: function () { return undefined; },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRippleFoundation.prototype.init = function () {
                    var _this = this;
                    var supportsPressRipple = this.supportsPressRipple_();
                    this.registerRootHandlers_(supportsPressRipple);
                    if (supportsPressRipple) {
                        var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
                        requestAnimationFrame(function () {
                            _this.adapter_.addClass(ROOT_1);
                            if (_this.adapter_.isUnbounded()) {
                                _this.adapter_.addClass(UNBOUNDED_1);
                                // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                                _this.layoutInternal_();
                            }
                        });
                    }
                };
                MDCRippleFoundation.prototype.destroy = function () {
                    var _this = this;
                    if (this.supportsPressRipple_()) {
                        if (this.activationTimer_) {
                            clearTimeout(this.activationTimer_);
                            this.activationTimer_ = 0;
                            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
                        }
                        if (this.fgDeactivationRemovalTimer_) {
                            clearTimeout(this.fgDeactivationRemovalTimer_);
                            this.fgDeactivationRemovalTimer_ = 0;
                            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
                        }
                        var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
                        requestAnimationFrame(function () {
                            _this.adapter_.removeClass(ROOT_2);
                            _this.adapter_.removeClass(UNBOUNDED_2);
                            _this.removeCssVars_();
                        });
                    }
                    this.deregisterRootHandlers_();
                    this.deregisterDeactivationHandlers_();
                };
                /**
                 * @param evt Optional event containing position information.
                 */
                MDCRippleFoundation.prototype.activate = function (evt) {
                    this.activate_(evt);
                };
                MDCRippleFoundation.prototype.deactivate = function () {
                    this.deactivate_();
                };
                MDCRippleFoundation.prototype.layout = function () {
                    var _this = this;
                    if (this.layoutFrame_) {
                        cancelAnimationFrame(this.layoutFrame_);
                    }
                    this.layoutFrame_ = requestAnimationFrame(function () {
                        _this.layoutInternal_();
                        _this.layoutFrame_ = 0;
                    });
                };
                MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
                    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
                    if (unbounded) {
                        this.adapter_.addClass(UNBOUNDED);
                    }
                    else {
                        this.adapter_.removeClass(UNBOUNDED);
                    }
                };
                MDCRippleFoundation.prototype.handleFocus = function () {
                    var _this = this;
                    requestAnimationFrame(function () {
                        return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                    });
                };
                MDCRippleFoundation.prototype.handleBlur = function () {
                    var _this = this;
                    requestAnimationFrame(function () {
                        return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                    });
                };
                /**
                 * We compute this property so that we are not querying information about the client
                 * until the point in time where the foundation requests it. This prevents scenarios where
                 * client-side feature-detection may happen too early, such as when components are rendered on the server
                 * and then initialized at mount time on the client.
                 */
                MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
                    return this.adapter_.browserSupportsCssVars();
                };
                MDCRippleFoundation.prototype.defaultActivationState_ = function () {
                    return {
                        activationEvent: undefined,
                        hasDeactivationUXRun: false,
                        isActivated: false,
                        isProgrammatic: false,
                        wasActivatedByPointer: false,
                        wasElementMadeActive: false,
                    };
                };
                /**
                 * supportsPressRipple Passed from init to save a redundant function call
                 */
                MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
                    var _this = this;
                    if (supportsPressRipple) {
                        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                            _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
                        });
                        if (this.adapter_.isUnbounded()) {
                            this.adapter_.registerResizeHandler(this.resizeHandler_);
                        }
                    }
                    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
                    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
                };
                MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
                    var _this = this;
                    if (evt.type === 'keydown') {
                        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
                    }
                    else {
                        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                            _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                        });
                    }
                };
                MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
                    var _this = this;
                    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                        _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
                    });
                    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
                    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
                    if (this.adapter_.isUnbounded()) {
                        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
                    }
                };
                MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
                    var _this = this;
                    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
                    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                        _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                    });
                };
                MDCRippleFoundation.prototype.removeCssVars_ = function () {
                    var _this = this;
                    var rippleStrings = MDCRippleFoundation.strings;
                    var keys = Object.keys(rippleStrings);
                    keys.forEach(function (key) {
                        if (key.indexOf('VAR_') === 0) {
                            _this.adapter_.updateCssVariable(rippleStrings[key], null);
                        }
                    });
                };
                MDCRippleFoundation.prototype.activate_ = function (evt) {
                    var _this = this;
                    if (this.adapter_.isSurfaceDisabled()) {
                        return;
                    }
                    var activationState = this.activationState_;
                    if (activationState.isActivated) {
                        return;
                    }
                    // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
                    var previousActivationEvent = this.previousActivationEvent_;
                    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
                    if (isSameInteraction) {
                        return;
                    }
                    activationState.isActivated = true;
                    activationState.isProgrammatic = evt === undefined;
                    activationState.activationEvent = evt;
                    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
                    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) { return _this.adapter_.containsEventTarget(target); });
                    if (hasActivatedChild) {
                        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
                        this.resetActivationState_();
                        return;
                    }
                    if (evt !== undefined) {
                        activatedTargets.push(evt.target);
                        this.registerDeactivationHandlers_(evt);
                    }
                    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
                    if (activationState.wasElementMadeActive) {
                        this.animateActivation_();
                    }
                    requestAnimationFrame(function () {
                        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
                        activatedTargets = [];
                        if (!activationState.wasElementMadeActive
                            && evt !== undefined
                            && (evt.key === ' ' || evt.keyCode === 32)) {
                            // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                            // active states inconsistently when they're called within event handling code:
                            // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                            // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                            // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                            // variable is set within a rAF callback for a submit button interaction (#2241).
                            activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                            if (activationState.wasElementMadeActive) {
                                _this.animateActivation_();
                            }
                        }
                        if (!activationState.wasElementMadeActive) {
                            // Reset activation state immediately if element was not made active.
                            _this.activationState_ = _this.defaultActivationState_();
                        }
                    });
                };
                MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
                    return (evt !== undefined && evt.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
                };
                MDCRippleFoundation.prototype.animateActivation_ = function () {
                    var _this = this;
                    var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
                    var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
                    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
                    this.layoutInternal_();
                    var translateStart = '';
                    var translateEnd = '';
                    if (!this.adapter_.isUnbounded()) {
                        var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
                        translateStart = startPoint.x + "px, " + startPoint.y + "px";
                        translateEnd = endPoint.x + "px, " + endPoint.y + "px";
                    }
                    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
                    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
                    // Cancel any ongoing activation/deactivation animations
                    clearTimeout(this.activationTimer_);
                    clearTimeout(this.fgDeactivationRemovalTimer_);
                    this.rmBoundedActivationClasses_();
                    this.adapter_.removeClass(FG_DEACTIVATION);
                    // Force layout in order to re-trigger the animation.
                    this.adapter_.computeBoundingRect();
                    this.adapter_.addClass(FG_ACTIVATION);
                    this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
                };
                MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
                    var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
                    var startPoint;
                    if (wasActivatedByPointer) {
                        startPoint = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getNormalizedEventCoords"])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
                    }
                    else {
                        startPoint = {
                            x: this.frame_.width / 2,
                            y: this.frame_.height / 2,
                        };
                    }
                    // Center the element around the start point.
                    startPoint = {
                        x: startPoint.x - (this.initialSize_ / 2),
                        y: startPoint.y - (this.initialSize_ / 2),
                    };
                    var endPoint = {
                        x: (this.frame_.width / 2) - (this.initialSize_ / 2),
                        y: (this.frame_.height / 2) - (this.initialSize_ / 2),
                    };
                    return { startPoint: startPoint, endPoint: endPoint };
                };
                MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
                    var _this = this;
                    // This method is called both when a pointing device is released, and when the activation animation ends.
                    // The deactivation animation should only run after both of those occur.
                    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
                    var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
                    var activationHasEnded = hasDeactivationUXRun || !isActivated;
                    if (activationHasEnded && this.activationAnimationHasEnded_) {
                        this.rmBoundedActivationClasses_();
                        this.adapter_.addClass(FG_DEACTIVATION);
                        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                            _this.adapter_.removeClass(FG_DEACTIVATION);
                        }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].FG_DEACTIVATION_MS);
                    }
                };
                MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
                    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
                    this.adapter_.removeClass(FG_ACTIVATION);
                    this.activationAnimationHasEnded_ = false;
                    this.adapter_.computeBoundingRect();
                };
                MDCRippleFoundation.prototype.resetActivationState_ = function () {
                    var _this = this;
                    this.previousActivationEvent_ = this.activationState_.activationEvent;
                    this.activationState_ = this.defaultActivationState_();
                    // Touch devices may fire additional events for the same interaction within a short time.
                    // Store the previous event until it's safe to assume that subsequent events are for new interactions.
                    setTimeout(function () { return _this.previousActivationEvent_ = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
                };
                MDCRippleFoundation.prototype.deactivate_ = function () {
                    var _this = this;
                    var activationState = this.activationState_;
                    // This can happen in scenarios such as when you have a keyup event that blurs the element.
                    if (!activationState.isActivated) {
                        return;
                    }
                    var state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, activationState);
                    if (activationState.isProgrammatic) {
                        requestAnimationFrame(function () { return _this.animateDeactivation_(state); });
                        this.resetActivationState_();
                    }
                    else {
                        this.deregisterDeactivationHandlers_();
                        requestAnimationFrame(function () {
                            _this.activationState_.hasDeactivationUXRun = true;
                            _this.animateDeactivation_(state);
                            _this.resetActivationState_();
                        });
                    }
                };
                MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
                    var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
                    if (wasActivatedByPointer || wasElementMadeActive) {
                        this.runDeactivationUXLogicIfReady_();
                    }
                };
                MDCRippleFoundation.prototype.layoutInternal_ = function () {
                    var _this = this;
                    this.frame_ = this.adapter_.computeBoundingRect();
                    var maxDim = Math.max(this.frame_.height, this.frame_.width);
                    // Surface diameter is treated differently for unbounded vs. bounded ripples.
                    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
                    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
                    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
                    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
                    // `overflow: hidden`.
                    var getBoundedRadius = function () {
                        var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
                        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
                    };
                    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
                    // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
                    this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
                    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
                    this.updateLayoutCssVars_();
                };
                MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
                    var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
                    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
                    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
                    if (this.adapter_.isUnbounded()) {
                        this.unboundedCoords_ = {
                            left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                            top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
                        };
                        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
                        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
                    }
                };
                return MDCRippleFoundation;
            }(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));
            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */ __webpack_exports__["default"] = (MDCRippleFoundation);
            //# sourceMappingURL=foundation.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_ripple@1.1.0@@material/ripple/util.js": 
        /*!***********************************************************************!*\
          !*** ./node_modules/_@material_ripple@1.1.0@@material/ripple/util.js ***!
          \***********************************************************************/
        /*! exports provided: supportsCssVariables, applyPassive, getNormalizedEventCoords */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function () { return supportsCssVariables; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function () { return applyPassive; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function () { return getNormalizedEventCoords; });
            /**
             * Stores result from supportsCssVariables to avoid redundant processing to
             * detect CSS custom variable support.
             */
            var supportsCssVariables_;
            /**
             * Stores result from applyPassive to avoid redundant processing to detect
             * passive event listener support.
             */
            var supportsPassive_;
            function detectEdgePseudoVarBug(windowObj) {
                // Detect versions of Edge with buggy var() support
                // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
                var document = windowObj.document;
                var node = document.createElement('div');
                node.className = 'mdc-ripple-surface--test-edge-var-bug';
                document.body.appendChild(node);
                // The bug exists if ::before style ends up propagating to the parent element.
                // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
                // but Firefox is known to support CSS custom properties correctly.
                // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
                var computedStyle = windowObj.getComputedStyle(node);
                var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
                node.remove();
                return hasPseudoVarBug;
            }
            function supportsCssVariables(windowObj, forceRefresh) {
                if (forceRefresh === void 0) {
                    forceRefresh = false;
                }
                var CSS = windowObj.CSS;
                var supportsCssVars = supportsCssVariables_;
                if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
                    return supportsCssVariables_;
                }
                var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
                if (!supportsFunctionPresent) {
                    return false;
                }
                var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
                // See: https://bugs.webkit.org/show_bug.cgi?id=154669
                // See: README section on Safari
                var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
                    CSS.supports('color', '#00000000'));
                if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
                    supportsCssVars = !detectEdgePseudoVarBug(windowObj);
                }
                else {
                    supportsCssVars = false;
                }
                if (!forceRefresh) {
                    supportsCssVariables_ = supportsCssVars;
                }
                return supportsCssVars;
            }
            /**
             * Determine whether the current browser supports passive event listeners, and
             * if so, use them.
             */
            function applyPassive(globalObj, forceRefresh) {
                if (globalObj === void 0) {
                    globalObj = window;
                }
                if (forceRefresh === void 0) {
                    forceRefresh = false;
                }
                if (supportsPassive_ === undefined || forceRefresh) {
                    var isSupported_1 = false;
                    try {
                        globalObj.document.addEventListener('test', function () { return undefined; }, {
                            get passive() {
                                isSupported_1 = true;
                                return isSupported_1;
                            },
                        });
                    }
                    catch (e) {
                    } // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
                    supportsPassive_ = isSupported_1;
                }
                return supportsPassive_ ? { passive: true } : false;
            }
            function getNormalizedEventCoords(evt, pageOffset, clientRect) {
                if (!evt) {
                    return { x: 0, y: 0 };
                }
                var x = pageOffset.x, y = pageOffset.y;
                var documentX = x + clientRect.left;
                var documentY = y + clientRect.top;
                var normalizedX;
                var normalizedY;
                // Determine touch point relative to the ripple container.
                if (evt.type === 'touchstart') {
                    var touchEvent = evt;
                    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
                    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
                }
                else {
                    var mouseEvent = evt;
                    normalizedX = mouseEvent.pageX - documentX;
                    normalizedY = mouseEvent.pageY - documentY;
                }
                return { x: normalizedX, y: normalizedY };
            }
            //# sourceMappingURL=util.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/character-counter/component.js": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/character-counter/component.js ***!
          \****************************************************************************************************/
        /*! exports provided: MDCTextFieldCharacterCounter */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function () { return MDCTextFieldCharacterCounter; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/_@material_base@1.0.0@@material/base/component.js");
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/character-counter/foundation.js");
            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCTextFieldCharacterCounter = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldCharacterCounter, _super);
                function MDCTextFieldCharacterCounter() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTextFieldCharacterCounter.attachTo = function (root) {
                    return new MDCTextFieldCharacterCounter(root);
                };
                Object.defineProperty(MDCTextFieldCharacterCounter.prototype, "foundation", {
                    get: function () {
                        return this.foundation_;
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTextFieldCharacterCounter.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    var adapter = {
                        setContent: function (content) {
                            _this.root_.textContent = content;
                        },
                    };
                    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldCharacterCounterFoundation"](adapter);
                };
                return MDCTextFieldCharacterCounter;
            }(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));
            //# sourceMappingURL=component.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/character-counter/constants.js": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/character-counter/constants.js ***!
          \****************************************************************************************************/
        /*! exports provided: strings, cssClasses */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function () { return strings; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function () { return cssClasses; });
            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses = {
                ROOT: 'mdc-text-field-character-counter',
            };
            var strings = {
                ROOT_SELECTOR: "." + cssClasses.ROOT,
            };
            //# sourceMappingURL=constants.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/character-counter/foundation.js": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/character-counter/foundation.js ***!
          \*****************************************************************************************************/
        /*! exports provided: MDCTextFieldCharacterCounterFoundation, default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function () { return MDCTextFieldCharacterCounterFoundation; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/_@material_base@1.0.0@@material/base/foundation.js");
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/character-counter/constants.js");
            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCTextFieldCharacterCounterFoundation = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldCharacterCounterFoundation, _super);
                function MDCTextFieldCharacterCounterFoundation(adapter) {
                    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter, adapter)) || this;
                }
                Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        return {
                            setContent: function () { return undefined; },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
                    currentLength = Math.min(currentLength, maxLength);
                    this.adapter_.setContent(currentLength + " / " + maxLength);
                };
                return MDCTextFieldCharacterCounterFoundation;
            }(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));
            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldCharacterCounterFoundation);
            //# sourceMappingURL=foundation.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/character-counter/index.js": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/character-counter/index.js ***!
          \************************************************************************************************/
        /*! exports provided: MDCTextFieldCharacterCounter, MDCTextFieldCharacterCounterFoundation */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/character-counter/component.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function () { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextFieldCharacterCounter"]; });
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/character-counter/foundation.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function () { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldCharacterCounterFoundation"]; });
            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            //# sourceMappingURL=index.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/component.js": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/component.js ***!
          \**********************************************************************************/
        /*! exports provided: MDCTextField */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextField", function () { return MDCTextField; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/_@material_base@1.0.0@@material/base/component.js");
            /* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/_@material_dom@1.1.0@@material/dom/ponyfill.js");
            /* harmony import */ var _material_floating_label_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/floating-label/index */ "./node_modules/_@material_floating-label@1.1.0@@material/floating-label/index.js");
            /* harmony import */ var _material_line_ripple_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/line-ripple/index */ "./node_modules/_@material_line-ripple@1.1.0@@material/line-ripple/index.js");
            /* harmony import */ var _material_notched_outline_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/notched-outline/index */ "./node_modules/_@material_notched-outline@1.1.1@@material/notched-outline/index.js");
            /* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/_@material_ripple@1.1.0@@material/ripple/component.js");
            /* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/_@material_ripple@1.1.0@@material/ripple/foundation.js");
            /* harmony import */ var _character_counter_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./character-counter/index */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/character-counter/index.js");
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/constants.js");
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/foundation.js");
            /* harmony import */ var _helper_text_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helper-text/index */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/helper-text/index.js");
            /* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icon/index */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/icon/index.js");
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCTextField = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextField, _super);
                function MDCTextField() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTextField.attachTo = function (root) {
                    return new MDCTextField(root);
                };
                MDCTextField.prototype.initialize = function (rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
                    if (rippleFactory === void 0) {
                        rippleFactory = function (el, foundation) { return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_6__["MDCRipple"](el, foundation); };
                    }
                    if (lineRippleFactory === void 0) {
                        lineRippleFactory = function (el) { return new _material_line_ripple_index__WEBPACK_IMPORTED_MODULE_4__["MDCLineRipple"](el); };
                    }
                    if (helperTextFactory === void 0) {
                        helperTextFactory = function (el) { return new _helper_text_index__WEBPACK_IMPORTED_MODULE_11__["MDCTextFieldHelperText"](el); };
                    }
                    if (characterCounterFactory === void 0) {
                        characterCounterFactory = function (el) { return new _character_counter_index__WEBPACK_IMPORTED_MODULE_8__["MDCTextFieldCharacterCounter"](el); };
                    }
                    if (iconFactory === void 0) {
                        iconFactory = function (el) { return new _icon_index__WEBPACK_IMPORTED_MODULE_12__["MDCTextFieldIcon"](el); };
                    }
                    if (labelFactory === void 0) {
                        labelFactory = function (el) { return new _material_floating_label_index__WEBPACK_IMPORTED_MODULE_3__["MDCFloatingLabel"](el); };
                    }
                    if (outlineFactory === void 0) {
                        outlineFactory = function (el) { return new _material_notched_outline_index__WEBPACK_IMPORTED_MODULE_5__["MDCNotchedOutline"](el); };
                    }
                    this.input_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_9__["strings"].INPUT_SELECTOR);
                    var labelElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_9__["strings"].LABEL_SELECTOR);
                    this.label_ = labelElement ? labelFactory(labelElement) : null;
                    var lineRippleElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_9__["strings"].LINE_RIPPLE_SELECTOR);
                    this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
                    var outlineElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_9__["strings"].OUTLINE_SELECTOR);
                    this.outline_ = outlineElement ? outlineFactory(outlineElement) : null;
                    // Helper text
                    var helperTextStrings = _helper_text_index__WEBPACK_IMPORTED_MODULE_11__["MDCTextFieldHelperTextFoundation"].strings;
                    var nextElementSibling = this.root_.nextElementSibling;
                    var hasHelperLine = (nextElementSibling && nextElementSibling.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_9__["cssClasses"].HELPER_LINE));
                    var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
                    this.helperText_ = helperTextEl ? helperTextFactory(helperTextEl) : null;
                    // Character counter
                    var characterCounterStrings = _character_counter_index__WEBPACK_IMPORTED_MODULE_8__["MDCTextFieldCharacterCounterFoundation"].strings;
                    var characterCounterEl = this.root_.querySelector(characterCounterStrings.ROOT_SELECTOR);
                    // If character counter is not found in root element search in sibling element.
                    if (!characterCounterEl && hasHelperLine && nextElementSibling) {
                        characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
                    }
                    this.characterCounter_ = characterCounterEl ? characterCounterFactory(characterCounterEl) : null;
                    this.leadingIcon_ = null;
                    this.trailingIcon_ = null;
                    var iconElements = this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_9__["strings"].ICON_SELECTOR);
                    if (iconElements.length > 0) {
                        if (iconElements.length > 1) { // Has both icons.
                            this.leadingIcon_ = iconFactory(iconElements[0]);
                            this.trailingIcon_ = iconFactory(iconElements[1]);
                        }
                        else {
                            if (this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_9__["cssClasses"].WITH_LEADING_ICON)) {
                                this.leadingIcon_ = iconFactory(iconElements[0]);
                            }
                            else {
                                this.trailingIcon_ = iconFactory(iconElements[0]);
                            }
                        }
                    }
                    this.ripple = this.createRipple_(rippleFactory);
                };
                MDCTextField.prototype.destroy = function () {
                    if (this.ripple) {
                        this.ripple.destroy();
                    }
                    if (this.lineRipple_) {
                        this.lineRipple_.destroy();
                    }
                    if (this.helperText_) {
                        this.helperText_.destroy();
                    }
                    if (this.characterCounter_) {
                        this.characterCounter_.destroy();
                    }
                    if (this.leadingIcon_) {
                        this.leadingIcon_.destroy();
                    }
                    if (this.trailingIcon_) {
                        this.trailingIcon_.destroy();
                    }
                    if (this.label_) {
                        this.label_.destroy();
                    }
                    if (this.outline_) {
                        this.outline_.destroy();
                    }
                    _super.prototype.destroy.call(this);
                };
                /**
                 * Initializes the Text Field's internal state based on the environment's
                 * state.
                 */
                MDCTextField.prototype.initialSyncWithDOM = function () {
                    this.disabled = this.input_.disabled;
                };
                Object.defineProperty(MDCTextField.prototype, "value", {
                    get: function () {
                        return this.foundation_.getValue();
                    },
                    /**
                     * @param value The value to set on the input.
                     */
                    set: function (value) {
                        this.foundation_.setValue(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "disabled", {
                    get: function () {
                        return this.foundation_.isDisabled();
                    },
                    /**
                     * @param disabled Sets the Text Field disabled or enabled.
                     */
                    set: function (disabled) {
                        this.foundation_.setDisabled(disabled);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "valid", {
                    get: function () {
                        return this.foundation_.isValid();
                    },
                    /**
                     * @param valid Sets the Text Field valid or invalid.
                     */
                    set: function (valid) {
                        this.foundation_.setValid(valid);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "required", {
                    get: function () {
                        return this.input_.required;
                    },
                    /**
                     * @param required Sets the Text Field to required.
                     */
                    set: function (required) {
                        this.input_.required = required;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "pattern", {
                    get: function () {
                        return this.input_.pattern;
                    },
                    /**
                     * @param pattern Sets the input element's validation pattern.
                     */
                    set: function (pattern) {
                        this.input_.pattern = pattern;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "minLength", {
                    get: function () {
                        return this.input_.minLength;
                    },
                    /**
                     * @param minLength Sets the input element's minLength.
                     */
                    set: function (minLength) {
                        this.input_.minLength = minLength;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "maxLength", {
                    get: function () {
                        return this.input_.maxLength;
                    },
                    /**
                     * @param maxLength Sets the input element's maxLength.
                     */
                    set: function (maxLength) {
                        // Chrome throws exception if maxLength is set to a value less than zero
                        if (maxLength < 0) {
                            this.input_.removeAttribute('maxLength');
                        }
                        else {
                            this.input_.maxLength = maxLength;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "min", {
                    get: function () {
                        return this.input_.min;
                    },
                    /**
                     * @param min Sets the input element's min.
                     */
                    set: function (min) {
                        this.input_.min = min;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "max", {
                    get: function () {
                        return this.input_.max;
                    },
                    /**
                     * @param max Sets the input element's max.
                     */
                    set: function (max) {
                        this.input_.max = max;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "step", {
                    get: function () {
                        return this.input_.step;
                    },
                    /**
                     * @param step Sets the input element's step.
                     */
                    set: function (step) {
                        this.input_.step = step;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "helperTextContent", {
                    /**
                     * Sets the helper text element content.
                     */
                    set: function (content) {
                        this.foundation_.setHelperTextContent(content);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "leadingIconAriaLabel", {
                    /**
                     * Sets the aria label of the leading icon.
                     */
                    set: function (label) {
                        this.foundation_.setLeadingIconAriaLabel(label);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "leadingIconContent", {
                    /**
                     * Sets the text content of the leading icon.
                     */
                    set: function (content) {
                        this.foundation_.setLeadingIconContent(content);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "trailingIconAriaLabel", {
                    /**
                     * Sets the aria label of the trailing icon.
                     */
                    set: function (label) {
                        this.foundation_.setTrailingIconAriaLabel(label);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "trailingIconContent", {
                    /**
                     * Sets the text content of the trailing icon.
                     */
                    set: function (content) {
                        this.foundation_.setTrailingIconContent(content);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "useNativeValidation", {
                    /**
                     * Enables or disables the use of native validation. Use this for custom validation.
                     * @param useNativeValidation Set this to false to ignore native input validation.
                     */
                    set: function (useNativeValidation) {
                        this.foundation_.setUseNativeValidation(useNativeValidation);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Focuses the input element.
                 */
                MDCTextField.prototype.focus = function () {
                    this.input_.focus();
                };
                /**
                 * Recomputes the outline SVG path for the outline element.
                 */
                MDCTextField.prototype.layout = function () {
                    var openNotch = this.foundation_.shouldFloat;
                    this.foundation_.notchOutline(openNotch);
                };
                MDCTextField.prototype.getDefaultFoundation = function () {
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.getRootAdapterMethods_(), this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_());
                    // tslint:enable:object-literal-sort-keys
                    return new _foundation__WEBPACK_IMPORTED_MODULE_10__["MDCTextFieldFoundation"](adapter, this.getFoundationMap_());
                };
                MDCTextField.prototype.getRootAdapterMethods_ = function () {
                    var _this = this;
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    return {
                        addClass: function (className) { return _this.root_.classList.add(className); },
                        removeClass: function (className) { return _this.root_.classList.remove(className); },
                        hasClass: function (className) { return _this.root_.classList.contains(className); },
                        registerTextFieldInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
                        deregisterTextFieldInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
                        registerValidationAttributeChangeHandler: function (handler) {
                            var getAttributesList = function (mutationsList) {
                                return mutationsList
                                    .map(function (mutation) { return mutation.attributeName; })
                                    .filter(function (attributeName) { return attributeName; });
                            };
                            var observer = new MutationObserver(function (mutationsList) { return handler(getAttributesList(mutationsList)); });
                            var config = { attributes: true };
                            observer.observe(_this.input_, config);
                            return observer;
                        },
                        deregisterValidationAttributeChangeHandler: function (observer) { return observer.disconnect(); },
                    };
                    // tslint:enable:object-literal-sort-keys
                };
                MDCTextField.prototype.getInputAdapterMethods_ = function () {
                    var _this = this;
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    return {
                        getNativeInput: function () { return _this.input_; },
                        isFocused: function () { return document.activeElement === _this.input_; },
                        registerInputInteractionHandler: function (evtType, handler) { return _this.input_.addEventListener(evtType, handler); },
                        deregisterInputInteractionHandler: function (evtType, handler) { return _this.input_.removeEventListener(evtType, handler); },
                    };
                    // tslint:enable:object-literal-sort-keys
                };
                MDCTextField.prototype.getLabelAdapterMethods_ = function () {
                    var _this = this;
                    return {
                        floatLabel: function (shouldFloat) { return _this.label_ && _this.label_.float(shouldFloat); },
                        getLabelWidth: function () { return _this.label_ ? _this.label_.getWidth() : 0; },
                        hasLabel: function () { return Boolean(_this.label_); },
                        shakeLabel: function (shouldShake) { return _this.label_ && _this.label_.shake(shouldShake); },
                    };
                };
                MDCTextField.prototype.getLineRippleAdapterMethods_ = function () {
                    var _this = this;
                    return {
                        activateLineRipple: function () {
                            if (_this.lineRipple_) {
                                _this.lineRipple_.activate();
                            }
                        },
                        deactivateLineRipple: function () {
                            if (_this.lineRipple_) {
                                _this.lineRipple_.deactivate();
                            }
                        },
                        setLineRippleTransformOrigin: function (normalizedX) {
                            if (_this.lineRipple_) {
                                _this.lineRipple_.setRippleCenter(normalizedX);
                            }
                        },
                    };
                };
                MDCTextField.prototype.getOutlineAdapterMethods_ = function () {
                    var _this = this;
                    return {
                        closeOutline: function () { return _this.outline_ && _this.outline_.closeNotch(); },
                        hasOutline: function () { return Boolean(_this.outline_); },
                        notchOutline: function (labelWidth) { return _this.outline_ && _this.outline_.notch(labelWidth); },
                    };
                };
                /**
                 * @return A map of all subcomponents to subfoundations.
                 */
                MDCTextField.prototype.getFoundationMap_ = function () {
                    return {
                        characterCounter: this.characterCounter_ ? this.characterCounter_.foundation : undefined,
                        helperText: this.helperText_ ? this.helperText_.foundation : undefined,
                        leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined,
                        trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundation : undefined,
                    };
                };
                MDCTextField.prototype.createRipple_ = function (rippleFactory) {
                    var _this = this;
                    var isTextArea = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_9__["cssClasses"].TEXTAREA);
                    var isOutlined = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_9__["cssClasses"].OUTLINED);
                    if (isTextArea || isOutlined) {
                        return null;
                    }
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_6__["MDCRipple"].createAdapter(this), { isSurfaceActive: function () { return _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["matches"](_this.input_, ':active'); }, registerInteractionHandler: function (evtType, handler) { return _this.input_.addEventListener(evtType, handler); }, deregisterInteractionHandler: function (evtType, handler) { return _this.input_.removeEventListener(evtType, handler); } });
                    // tslint:enable:object-literal-sort-keys
                    return rippleFactory(this.root_, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_7__["MDCRippleFoundation"](adapter));
                };
                return MDCTextField;
            }(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));
            //# sourceMappingURL=component.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/constants.js": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/constants.js ***!
          \**********************************************************************************/
        /*! exports provided: cssClasses, strings, numbers, VALIDATION_ATTR_WHITELIST, ALWAYS_FLOAT_TYPES */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function () { return cssClasses; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function () { return strings; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function () { return numbers; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_ATTR_WHITELIST", function () { return VALIDATION_ATTR_WHITELIST; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALWAYS_FLOAT_TYPES", function () { return ALWAYS_FLOAT_TYPES; });
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var strings = {
                ARIA_CONTROLS: 'aria-controls',
                ICON_SELECTOR: '.mdc-text-field__icon',
                INPUT_SELECTOR: '.mdc-text-field__input',
                LABEL_SELECTOR: '.mdc-floating-label',
                LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
                OUTLINE_SELECTOR: '.mdc-notched-outline',
            };
            var cssClasses = {
                DENSE: 'mdc-text-field--dense',
                DISABLED: 'mdc-text-field--disabled',
                FOCUSED: 'mdc-text-field--focused',
                HELPER_LINE: 'mdc-text-field-helper-line',
                INVALID: 'mdc-text-field--invalid',
                OUTLINED: 'mdc-text-field--outlined',
                ROOT: 'mdc-text-field',
                TEXTAREA: 'mdc-text-field--textarea',
                WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
            };
            var numbers = {
                DENSE_LABEL_SCALE: 0.923,
                LABEL_SCALE: 0.75,
            };
            /**
             * Whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
             * under the "Validation-related attributes" section.
             */
            var VALIDATION_ATTR_WHITELIST = [
                'pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength',
            ];
            /**
             * Label should always float for these types as they show some UI even if value is empty.
             */
            var ALWAYS_FLOAT_TYPES = [
                'color', 'date', 'datetime-local', 'month', 'range', 'time', 'week',
            ];
            //# sourceMappingURL=constants.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/foundation.js": 
        /*!***********************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/foundation.js ***!
          \***********************************************************************************/
        /*! exports provided: MDCTextFieldFoundation, default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function () { return MDCTextFieldFoundation; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/_@material_base@1.0.0@@material/base/foundation.js");
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/constants.js");
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
            var INTERACTION_EVENTS = ['click', 'keydown'];
            var MDCTextFieldFoundation = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldFoundation, _super);
                /**
                 * @param adapter
                 * @param foundationMap Map from subcomponent names to their subfoundations.
                 */
                function MDCTextFieldFoundation(adapter, foundationMap) {
                    if (foundationMap === void 0) {
                        foundationMap = {};
                    }
                    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldFoundation.defaultAdapter, adapter)) || this;
                    _this.isFocused_ = false;
                    _this.receivedUserInput_ = false;
                    _this.isValid_ = true;
                    _this.useNativeValidation_ = true;
                    _this.helperText_ = foundationMap.helperText;
                    _this.characterCounter_ = foundationMap.characterCounter;
                    _this.leadingIcon_ = foundationMap.leadingIcon;
                    _this.trailingIcon_ = foundationMap.trailingIcon;
                    _this.inputFocusHandler_ = function () { return _this.activateFocus(); };
                    _this.inputBlurHandler_ = function () { return _this.deactivateFocus(); };
                    _this.inputInputHandler_ = function () { return _this.handleInput(); };
                    _this.setPointerXOffset_ = function (evt) { return _this.setTransformOrigin(evt); };
                    _this.textFieldInteractionHandler_ = function () { return _this.handleTextFieldInteraction(); };
                    _this.validationAttributeChangeHandler_ = function (attributesList) { return _this.handleValidationAttributeChange(attributesList); };
                    return _this;
                }
                Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation, "strings", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation, "numbers", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat_", {
                    get: function () {
                        var type = this.getNativeInput_().type;
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["ALWAYS_FLOAT_TYPES"].indexOf(type) >= 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
                    get: function () {
                        return this.shouldAlwaysFloat_ || this.isFocused_ || Boolean(this.getValue()) || this.isBadInput_();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
                    get: function () {
                        return !this.isFocused_ && !this.isValid() && Boolean(this.getValue());
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCTextFieldAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            hasClass: function () { return true; },
                            registerTextFieldInteractionHandler: function () { return undefined; },
                            deregisterTextFieldInteractionHandler: function () { return undefined; },
                            registerInputInteractionHandler: function () { return undefined; },
                            deregisterInputInteractionHandler: function () { return undefined; },
                            registerValidationAttributeChangeHandler: function () { return new MutationObserver(function () { return undefined; }); },
                            deregisterValidationAttributeChangeHandler: function () { return undefined; },
                            getNativeInput: function () { return null; },
                            isFocused: function () { return false; },
                            activateLineRipple: function () { return undefined; },
                            deactivateLineRipple: function () { return undefined; },
                            setLineRippleTransformOrigin: function () { return undefined; },
                            shakeLabel: function () { return undefined; },
                            floatLabel: function () { return undefined; },
                            hasLabel: function () { return false; },
                            getLabelWidth: function () { return 0; },
                            hasOutline: function () { return false; },
                            notchOutline: function () { return undefined; },
                            closeOutline: function () { return undefined; },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTextFieldFoundation.prototype.init = function () {
                    var _this = this;
                    if (this.adapter_.isFocused()) {
                        this.inputFocusHandler_();
                    }
                    else if (this.adapter_.hasLabel() && this.shouldFloat) {
                        this.notchOutline(true);
                        this.adapter_.floatLabel(true);
                    }
                    this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
                    this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
                    this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
                    POINTERDOWN_EVENTS.forEach(function (evtType) {
                        _this.adapter_.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);
                    });
                    INTERACTION_EVENTS.forEach(function (evtType) {
                        _this.adapter_.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
                    });
                    this.validationObserver_ =
                        this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
                    this.setCharacterCounter_(this.getValue().length);
                };
                MDCTextFieldFoundation.prototype.destroy = function () {
                    var _this = this;
                    this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
                    this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
                    this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
                    POINTERDOWN_EVENTS.forEach(function (evtType) {
                        _this.adapter_.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);
                    });
                    INTERACTION_EVENTS.forEach(function (evtType) {
                        _this.adapter_.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
                    });
                    this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
                };
                /**
                 * Handles user interactions with the Text Field.
                 */
                MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
                    var nativeInput = this.adapter_.getNativeInput();
                    if (nativeInput && nativeInput.disabled) {
                        return;
                    }
                    this.receivedUserInput_ = true;
                };
                /**
                 * Handles validation attribute changes
                 */
                MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
                    var _this = this;
                    attributesList.some(function (attributeName) {
                        if (_constants__WEBPACK_IMPORTED_MODULE_2__["VALIDATION_ATTR_WHITELIST"].indexOf(attributeName) > -1) {
                            _this.styleValidity_(true);
                            return true;
                        }
                        return false;
                    });
                    if (attributesList.indexOf('maxlength') > -1) {
                        this.setCharacterCounter_(this.getValue().length);
                    }
                };
                /**
                 * Opens/closes the notched outline.
                 */
                MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
                    if (!this.adapter_.hasOutline()) {
                        return;
                    }
                    if (openNotch) {
                        var isDense = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DENSE);
                        var labelScale = isDense ? _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DENSE_LABEL_SCALE : _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].LABEL_SCALE;
                        var labelWidth = this.adapter_.getLabelWidth() * labelScale;
                        this.adapter_.notchOutline(labelWidth);
                    }
                    else {
                        this.adapter_.closeOutline();
                    }
                };
                /**
                 * Activates the text field focus state.
                 */
                MDCTextFieldFoundation.prototype.activateFocus = function () {
                    this.isFocused_ = true;
                    this.styleFocused_(this.isFocused_);
                    this.adapter_.activateLineRipple();
                    if (this.adapter_.hasLabel()) {
                        this.notchOutline(this.shouldFloat);
                        this.adapter_.floatLabel(this.shouldFloat);
                        this.adapter_.shakeLabel(this.shouldShake);
                    }
                    if (this.helperText_) {
                        this.helperText_.showToScreenReader();
                    }
                };
                /**
                 * Sets the line ripple's transform origin, so that the line ripple activate
                 * animation will animate out from the user's click location.
                 */
                MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
                    var touches = evt.touches;
                    var targetEvent = touches ? touches[0] : evt;
                    var targetClientRect = targetEvent.target.getBoundingClientRect();
                    var normalizedX = targetEvent.clientX - targetClientRect.left;
                    this.adapter_.setLineRippleTransformOrigin(normalizedX);
                };
                /**
                 * Handles input change of text input and text area.
                 */
                MDCTextFieldFoundation.prototype.handleInput = function () {
                    this.autoCompleteFocus();
                    this.setCharacterCounter_(this.getValue().length);
                };
                /**
                 * Activates the Text Field's focus state in cases when the input value
                 * changes without user input (e.g. programmatically).
                 */
                MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
                    if (!this.receivedUserInput_) {
                        this.activateFocus();
                    }
                };
                /**
                 * Deactivates the Text Field's focus state.
                 */
                MDCTextFieldFoundation.prototype.deactivateFocus = function () {
                    this.isFocused_ = false;
                    this.adapter_.deactivateLineRipple();
                    var isValid = this.isValid();
                    this.styleValidity_(isValid);
                    this.styleFocused_(this.isFocused_);
                    if (this.adapter_.hasLabel()) {
                        this.notchOutline(this.shouldFloat);
                        this.adapter_.floatLabel(this.shouldFloat);
                        this.adapter_.shakeLabel(this.shouldShake);
                    }
                    if (!this.shouldFloat) {
                        this.receivedUserInput_ = false;
                    }
                };
                MDCTextFieldFoundation.prototype.getValue = function () {
                    return this.getNativeInput_().value;
                };
                /**
                 * @param value The value to set on the input Element.
                 */
                MDCTextFieldFoundation.prototype.setValue = function (value) {
                    // Prevent Safari from moving the caret to the end of the input when the value has not changed.
                    if (this.getValue() !== value) {
                        this.getNativeInput_().value = value;
                        this.setCharacterCounter_(value.length);
                    }
                    var isValid = this.isValid();
                    this.styleValidity_(isValid);
                    if (this.adapter_.hasLabel()) {
                        this.notchOutline(this.shouldFloat);
                        this.adapter_.floatLabel(this.shouldFloat);
                        this.adapter_.shakeLabel(this.shouldShake);
                    }
                };
                /**
                 * @return The custom validity state, if set; otherwise, the result of a native validity check.
                 */
                MDCTextFieldFoundation.prototype.isValid = function () {
                    return this.useNativeValidation_
                        ? this.isNativeInputValid_() : this.isValid_;
                };
                /**
                 * @param isValid Sets the custom validity state of the Text Field.
                 */
                MDCTextFieldFoundation.prototype.setValid = function (isValid) {
                    this.isValid_ = isValid;
                    this.styleValidity_(isValid);
                    var shouldShake = !isValid && !this.isFocused_;
                    if (this.adapter_.hasLabel()) {
                        this.adapter_.shakeLabel(shouldShake);
                    }
                };
                /**
                 * Enables or disables the use of native validation. Use this for custom validation.
                 * @param useNativeValidation Set this to false to ignore native input validation.
                 */
                MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
                    this.useNativeValidation_ = useNativeValidation;
                };
                MDCTextFieldFoundation.prototype.isDisabled = function () {
                    return this.getNativeInput_().disabled;
                };
                /**
                 * @param disabled Sets the text-field disabled or enabled.
                 */
                MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
                    this.getNativeInput_().disabled = disabled;
                    this.styleDisabled_(disabled);
                };
                /**
                 * @param content Sets the content of the helper text.
                 */
                MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
                    if (this.helperText_) {
                        this.helperText_.setContent(content);
                    }
                };
                /**
                 * Sets the aria label of the leading icon.
                 */
                MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
                    if (this.leadingIcon_) {
                        this.leadingIcon_.setAriaLabel(label);
                    }
                };
                /**
                 * Sets the text content of the leading icon.
                 */
                MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
                    if (this.leadingIcon_) {
                        this.leadingIcon_.setContent(content);
                    }
                };
                /**
                 * Sets the aria label of the trailing icon.
                 */
                MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
                    if (this.trailingIcon_) {
                        this.trailingIcon_.setAriaLabel(label);
                    }
                };
                /**
                 * Sets the text content of the trailing icon.
                 */
                MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
                    if (this.trailingIcon_) {
                        this.trailingIcon_.setContent(content);
                    }
                };
                /**
                 * Sets character counter values that shows characters used and the total character limit.
                 */
                MDCTextFieldFoundation.prototype.setCharacterCounter_ = function (currentLength) {
                    if (!this.characterCounter_) {
                        return;
                    }
                    var maxLength = this.getNativeInput_().maxLength;
                    if (maxLength === -1) {
                        throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
                    }
                    this.characterCounter_.setCounterValue(currentLength, maxLength);
                };
                /**
                 * @return True if the Text Field input fails in converting the user-supplied value.
                 */
                MDCTextFieldFoundation.prototype.isBadInput_ = function () {
                    // The badInput property is not supported in IE 11 💩.
                    return this.getNativeInput_().validity.badInput || false;
                };
                /**
                 * @return The result of native validity checking (ValidityState.valid).
                 */
                MDCTextFieldFoundation.prototype.isNativeInputValid_ = function () {
                    return this.getNativeInput_().validity.valid;
                };
                /**
                 * Styles the component based on the validity state.
                 */
                MDCTextFieldFoundation.prototype.styleValidity_ = function (isValid) {
                    var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
                    if (isValid) {
                        this.adapter_.removeClass(INVALID);
                    }
                    else {
                        this.adapter_.addClass(INVALID);
                    }
                    if (this.helperText_) {
                        this.helperText_.setValidity(isValid);
                    }
                };
                /**
                 * Styles the component based on the focused state.
                 */
                MDCTextFieldFoundation.prototype.styleFocused_ = function (isFocused) {
                    var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
                    if (isFocused) {
                        this.adapter_.addClass(FOCUSED);
                    }
                    else {
                        this.adapter_.removeClass(FOCUSED);
                    }
                };
                /**
                 * Styles the component based on the disabled state.
                 */
                MDCTextFieldFoundation.prototype.styleDisabled_ = function (isDisabled) {
                    var _a = MDCTextFieldFoundation.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
                    if (isDisabled) {
                        this.adapter_.addClass(DISABLED);
                        this.adapter_.removeClass(INVALID);
                    }
                    else {
                        this.adapter_.removeClass(DISABLED);
                    }
                    if (this.leadingIcon_) {
                        this.leadingIcon_.setDisabled(isDisabled);
                    }
                    if (this.trailingIcon_) {
                        this.trailingIcon_.setDisabled(isDisabled);
                    }
                };
                /**
                 * @return The native text input element from the host environment, or an object with the same shape for unit tests.
                 */
                MDCTextFieldFoundation.prototype.getNativeInput_ = function () {
                    // this.adapter_ may be undefined in foundation unit tests. This happens when testdouble is creating a mock object
                    // and invokes the shouldShake/shouldFloat getters (which in turn call getValue(), which calls this method) before
                    // init() has been called from the MDCTextField constructor. To work around that issue, we return a dummy object.
                    var nativeInput = this.adapter_ ? this.adapter_.getNativeInput() : null;
                    return nativeInput || {
                        disabled: false,
                        maxLength: -1,
                        type: 'input',
                        validity: {
                            badInput: false,
                            valid: true,
                        },
                        value: '',
                    };
                };
                return MDCTextFieldFoundation;
            }(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));
            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldFoundation);
            //# sourceMappingURL=foundation.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/helper-text/component.js": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/helper-text/component.js ***!
          \**********************************************************************************************/
        /*! exports provided: MDCTextFieldHelperText */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function () { return MDCTextFieldHelperText; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/_@material_base@1.0.0@@material/base/component.js");
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/helper-text/foundation.js");
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCTextFieldHelperText = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldHelperText, _super);
                function MDCTextFieldHelperText() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTextFieldHelperText.attachTo = function (root) {
                    return new MDCTextFieldHelperText(root);
                };
                Object.defineProperty(MDCTextFieldHelperText.prototype, "foundation", {
                    get: function () {
                        return this.foundation_;
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTextFieldHelperText.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = {
                        addClass: function (className) { return _this.root_.classList.add(className); },
                        removeClass: function (className) { return _this.root_.classList.remove(className); },
                        hasClass: function (className) { return _this.root_.classList.contains(className); },
                        setAttr: function (attr, value) { return _this.root_.setAttribute(attr, value); },
                        removeAttr: function (attr) { return _this.root_.removeAttribute(attr); },
                        setContent: function (content) {
                            _this.root_.textContent = content;
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldHelperTextFoundation"](adapter);
                };
                return MDCTextFieldHelperText;
            }(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));
            //# sourceMappingURL=component.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/helper-text/constants.js": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/helper-text/constants.js ***!
          \**********************************************************************************************/
        /*! exports provided: strings, cssClasses */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function () { return strings; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function () { return cssClasses; });
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses = {
                HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
                HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
                ROOT: 'mdc-text-field-helper-text',
            };
            var strings = {
                ARIA_HIDDEN: 'aria-hidden',
                ROLE: 'role',
                ROOT_SELECTOR: "." + cssClasses.ROOT,
            };
            //# sourceMappingURL=constants.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/helper-text/foundation.js": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/helper-text/foundation.js ***!
          \***********************************************************************************************/
        /*! exports provided: MDCTextFieldHelperTextFoundation, default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function () { return MDCTextFieldHelperTextFoundation; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/_@material_base@1.0.0@@material/base/foundation.js");
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/helper-text/constants.js");
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCTextFieldHelperTextFoundation = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldHelperTextFoundation, _super);
                function MDCTextFieldHelperTextFoundation(adapter) {
                    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)) || this;
                }
                Object.defineProperty(MDCTextFieldHelperTextFoundation, "cssClasses", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldHelperTextFoundation, "strings", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldHelperTextFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            hasClass: function () { return false; },
                            setAttr: function () { return undefined; },
                            removeAttr: function () { return undefined; },
                            setContent: function () { return undefined; },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the content of the helper text field.
                 */
                MDCTextFieldHelperTextFoundation.prototype.setContent = function (content) {
                    this.adapter_.setContent(content);
                };
                /**
                 * @param isPersistent Sets the persistency of the helper text.
                 */
                MDCTextFieldHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
                    if (isPersistent) {
                        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
                    }
                    else {
                        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
                    }
                };
                /**
                 * @param isValidation True to make the helper text act as an error validation message.
                 */
                MDCTextFieldHelperTextFoundation.prototype.setValidation = function (isValidation) {
                    if (isValidation) {
                        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
                    }
                    else {
                        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
                    }
                };
                /**
                 * Makes the helper text visible to the screen reader.
                 */
                MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function () {
                    this.adapter_.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_HIDDEN);
                };
                /**
                 * Sets the validity of the helper text based on the input validity.
                 */
                MDCTextFieldHelperTextFoundation.prototype.setValidity = function (inputIsValid) {
                    var helperTextIsPersistent = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
                    var helperTextIsValidationMsg = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
                    var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;
                    if (validationMsgNeedsDisplay) {
                        this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ROLE, 'alert');
                    }
                    else {
                        this.adapter_.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ROLE);
                    }
                    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
                        this.hide_();
                    }
                };
                /**
                 * Hides the help text from screen readers.
                 */
                MDCTextFieldHelperTextFoundation.prototype.hide_ = function () {
                    this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_HIDDEN, 'true');
                };
                return MDCTextFieldHelperTextFoundation;
            }(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));
            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldHelperTextFoundation);
            //# sourceMappingURL=foundation.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/helper-text/index.js": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/helper-text/index.js ***!
          \******************************************************************************************/
        /*! exports provided: MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/helper-text/component.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function () { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextFieldHelperText"]; });
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/helper-text/foundation.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function () { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldHelperTextFoundation"]; });
            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            //# sourceMappingURL=index.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/icon/component.js": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/icon/component.js ***!
          \***************************************************************************************/
        /*! exports provided: MDCTextFieldIcon */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function () { return MDCTextFieldIcon; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/_@material_base@1.0.0@@material/base/component.js");
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/icon/foundation.js");
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCTextFieldIcon = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldIcon, _super);
                function MDCTextFieldIcon() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTextFieldIcon.attachTo = function (root) {
                    return new MDCTextFieldIcon(root);
                };
                Object.defineProperty(MDCTextFieldIcon.prototype, "foundation", {
                    get: function () {
                        return this.foundation_;
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTextFieldIcon.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = {
                        getAttr: function (attr) { return _this.root_.getAttribute(attr); },
                        setAttr: function (attr, value) { return _this.root_.setAttribute(attr, value); },
                        removeAttr: function (attr) { return _this.root_.removeAttribute(attr); },
                        setContent: function (content) {
                            _this.root_.textContent = content;
                        },
                        registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
                        deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
                        notifyIconAction: function () { return _this.emit(_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldIconFoundation"].strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */); },
                    };
                    // tslint:enable:object-literal-sort-keys
                    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldIconFoundation"](adapter);
                };
                return MDCTextFieldIcon;
            }(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));
            //# sourceMappingURL=component.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/icon/constants.js": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/icon/constants.js ***!
          \***************************************************************************************/
        /*! exports provided: strings */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function () { return strings; });
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var strings = {
                ICON_EVENT: 'MDCTextField:icon',
                ICON_ROLE: 'button',
            };
            //# sourceMappingURL=constants.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/icon/foundation.js": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/icon/foundation.js ***!
          \****************************************************************************************/
        /*! exports provided: MDCTextFieldIconFoundation, default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function () { return MDCTextFieldIconFoundation; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
            /* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/_@material_base@1.0.0@@material/base/foundation.js");
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/icon/constants.js");
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var INTERACTION_EVENTS = ['click', 'keydown'];
            var MDCTextFieldIconFoundation = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldIconFoundation, _super);
                function MDCTextFieldIconFoundation(adapter) {
                    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldIconFoundation.defaultAdapter, adapter)) || this;
                    _this.savedTabIndex_ = null;
                    _this.interactionHandler_ = function (evt) { return _this.handleInteraction(evt); };
                    return _this;
                }
                Object.defineProperty(MDCTextFieldIconFoundation, "strings", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldIconFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            getAttr: function () { return null; },
                            setAttr: function () { return undefined; },
                            removeAttr: function () { return undefined; },
                            setContent: function () { return undefined; },
                            registerInteractionHandler: function () { return undefined; },
                            deregisterInteractionHandler: function () { return undefined; },
                            notifyIconAction: function () { return undefined; },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTextFieldIconFoundation.prototype.init = function () {
                    var _this = this;
                    this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
                    INTERACTION_EVENTS.forEach(function (evtType) {
                        _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
                    });
                };
                MDCTextFieldIconFoundation.prototype.destroy = function () {
                    var _this = this;
                    INTERACTION_EVENTS.forEach(function (evtType) {
                        _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
                    });
                };
                MDCTextFieldIconFoundation.prototype.setDisabled = function (disabled) {
                    if (!this.savedTabIndex_) {
                        return;
                    }
                    if (disabled) {
                        this.adapter_.setAttr('tabindex', '-1');
                        this.adapter_.removeAttr('role');
                    }
                    else {
                        this.adapter_.setAttr('tabindex', this.savedTabIndex_);
                        this.adapter_.setAttr('role', _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ICON_ROLE);
                    }
                };
                MDCTextFieldIconFoundation.prototype.setAriaLabel = function (label) {
                    this.adapter_.setAttr('aria-label', label);
                };
                MDCTextFieldIconFoundation.prototype.setContent = function (content) {
                    this.adapter_.setContent(content);
                };
                MDCTextFieldIconFoundation.prototype.handleInteraction = function (evt) {
                    var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
                    if (evt.type === 'click' || isEnterKey) {
                        this.adapter_.notifyIconAction();
                    }
                };
                return MDCTextFieldIconFoundation;
            }(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));
            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldIconFoundation);
            //# sourceMappingURL=foundation.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/icon/index.js": 
        /*!***********************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/icon/index.js ***!
          \***********************************************************************************/
        /*! exports provided: MDCTextFieldIcon, MDCTextFieldIconFoundation */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/icon/component.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function () { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextFieldIcon"]; });
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/icon/foundation.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function () { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldIconFoundation"]; });
            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            //# sourceMappingURL=index.js.map
            /***/ 
        }),
        /***/ "./node_modules/_@material_textfield@1.1.1@@material/textfield/index.js": 
        /*!******************************************************************************!*\
          !*** ./node_modules/_@material_textfield@1.1.1@@material/textfield/index.js ***!
          \******************************************************************************/
        /*! exports provided: MDCTextField, MDCTextFieldFoundation, MDCTextFieldCharacterCounter, MDCTextFieldCharacterCounterFoundation, MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation, MDCTextFieldIcon, MDCTextFieldIconFoundation */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/component.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextField", function () { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextField"]; });
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/foundation.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function () { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldFoundation"]; });
            /* harmony import */ var _character_counter_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character-counter/index */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/character-counter/index.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function () { return _character_counter_index__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldCharacterCounter"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function () { return _character_counter_index__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldCharacterCounterFoundation"]; });
            /* harmony import */ var _helper_text_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper-text/index */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/helper-text/index.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function () { return _helper_text_index__WEBPACK_IMPORTED_MODULE_3__["MDCTextFieldHelperText"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function () { return _helper_text_index__WEBPACK_IMPORTED_MODULE_3__["MDCTextFieldHelperTextFoundation"]; });
            /* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon/index */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/icon/index.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function () { return _icon_index__WEBPACK_IMPORTED_MODULE_4__["MDCTextFieldIcon"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function () { return _icon_index__WEBPACK_IMPORTED_MODULE_4__["MDCTextFieldIconFoundation"]; });
            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            //# sourceMappingURL=index.js.map
            /***/ 
        }),
        /***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!./src/text-field/index.scss": 
        /*!*****************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--4-3!./src/text-field/index.scss ***!
          \*****************************************************************************************************************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
            // imports
            // module
            exports.push([module.i, ".mdc-floating-label {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  line-height: 1.75rem;\n  font-weight: 400;\n  letter-spacing: 0.00937em;\n  text-decoration: inherit;\n  text-transform: inherit;\n  position: absolute;\n  /* @noflip */\n  left: 0;\n  /* @noflip */\n  transform-origin: left top;\n  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  /* @alternate */\n  line-height: 1.15rem;\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: text;\n  overflow: hidden;\n  will-change: transform; }\n  [dir=\"rtl\"] .mdc-floating-label, .mdc-floating-label[dir=\"rtl\"] {\n    /* @noflip */\n    right: 0;\n    /* @noflip */\n    left: auto;\n    /* @noflip */\n    transform-origin: right top;\n    /* @noflip */\n    text-align: right; }\n\n.mdc-floating-label--float-above {\n  cursor: auto; }\n\n.mdc-floating-label--float-above {\n  transform: translateY(-50%) scale(0.75); }\n\n.mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-standard 250ms 1; }\n\n@keyframes mdc-floating-label-shake-float-above-standard {\n  0% {\n    transform: translateX(calc(0 - 0%)) translateY(-50%) scale(0.75); }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    transform: translateX(calc(4% - 0%)) translateY(-50%) scale(0.75); }\n  66% {\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    transform: translateX(calc(-4% - 0%)) translateY(-50%) scale(0.75); }\n  100% {\n    transform: translateX(calc(0 - 0%)) translateY(-50%) scale(0.75); } }\n\n.mdc-line-ripple {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  transform: scaleX(0);\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  z-index: 2; }\n\n.mdc-line-ripple--active {\n  transform: scaleX(1);\n  opacity: 1; }\n\n.mdc-line-ripple--deactivating {\n  opacity: 0; }\n\n.mdc-notched-outline {\n  display: flex;\n  position: absolute;\n  right: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  /* @noflip */\n  text-align: left;\n  pointer-events: none; }\n  [dir=\"rtl\"] .mdc-notched-outline, .mdc-notched-outline[dir=\"rtl\"] {\n    /* @noflip */\n    text-align: right; }\n  .mdc-notched-outline__leading, .mdc-notched-outline__notch, .mdc-notched-outline__trailing {\n    box-sizing: border-box;\n    height: 100%;\n    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);\n    border-top: 1px solid;\n    border-bottom: 1px solid;\n    pointer-events: none; }\n  .mdc-notched-outline__leading {\n    /* @noflip */\n    border-left: 1px solid;\n    /* @noflip */\n    border-right: none;\n    width: 12px; }\n    [dir=\"rtl\"] .mdc-notched-outline__leading, .mdc-notched-outline__leading[dir=\"rtl\"] {\n      /* @noflip */\n      border-left: none;\n      /* @noflip */\n      border-right: 1px solid; }\n  .mdc-notched-outline__trailing {\n    /* @noflip */\n    border-left: none;\n    /* @noflip */\n    border-right: 1px solid;\n    flex-grow: 1; }\n    [dir=\"rtl\"] .mdc-notched-outline__trailing, .mdc-notched-outline__trailing[dir=\"rtl\"] {\n      /* @noflip */\n      border-left: 1px solid;\n      /* @noflip */\n      border-right: none; }\n  .mdc-notched-outline__notch {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: calc(100% - 12px * 2); }\n  .mdc-notched-outline .mdc-floating-label {\n    display: inline-block;\n    position: relative;\n    top: 17px;\n    bottom: auto;\n    max-width: 100%; }\n  .mdc-notched-outline .mdc-floating-label--float-above {\n    text-overflow: clip; }\n  .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n    max-width: calc(100% / .75); }\n\n.mdc-notched-outline--notched .mdc-notched-outline__notch {\n  /* @noflip */\n  padding-left: 0;\n  /* @noflip */\n  padding-right: 8px;\n  border-top: none; }\n  [dir=\"rtl\"] .mdc-notched-outline--notched .mdc-notched-outline__notch, .mdc-notched-outline--notched .mdc-notched-outline__notch[dir=\"rtl\"] {\n    /* @noflip */\n    padding-left: 8px;\n    /* @noflip */\n    padding-right: 0; }\n\n.mdc-notched-outline--no-label .mdc-notched-outline__notch {\n  padding: 0; }\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1); }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0; }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0); } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0); }\n  to {\n    opacity: 0; } }\n\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden; }\n  .mdc-ripple-surface--test-edge-var-bug::before {\n    border: var(--mdc-ripple-surface-test-edge-var); }\n\n.mdc-text-field-helper-text {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.75rem;\n  line-height: 1.25rem;\n  font-weight: 400;\n  letter-spacing: 0.03333em;\n  text-decoration: inherit;\n  text-transform: inherit;\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  margin: 0;\n  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  will-change: opacity; }\n  .mdc-text-field-helper-text::before {\n    display: inline-block;\n    width: 0;\n    height: 16px;\n    content: \"\";\n    vertical-align: 0; }\n\n.mdc-text-field-helper-text--persistent {\n  transition: none;\n  opacity: 1;\n  will-change: initial; }\n\n.mdc-text-field-character-counter {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.75rem;\n  line-height: 1.25rem;\n  font-weight: 400;\n  letter-spacing: 0.03333em;\n  text-decoration: inherit;\n  text-transform: inherit;\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  /* @noflip */\n  margin-left: auto;\n  /* @noflip */\n  margin-right: 0;\n  /* @noflip */\n  padding-left: 16px;\n  /* @noflip */\n  padding-right: 0;\n  white-space: nowrap; }\n  .mdc-text-field-character-counter::before {\n    display: inline-block;\n    width: 0;\n    height: 16px;\n    content: \"\";\n    vertical-align: 0; }\n  [dir=\"rtl\"] .mdc-text-field-character-counter, .mdc-text-field-character-counter[dir=\"rtl\"] {\n    /* @noflip */\n    margin-left: 0;\n    /* @noflip */\n    margin-right: auto; }\n  [dir=\"rtl\"] .mdc-text-field-character-counter, .mdc-text-field-character-counter[dir=\"rtl\"] {\n    /* @noflip */\n    padding-left: 0;\n    /* @noflip */\n    padding-right: 16px; }\n\n.mdc-text-field--with-leading-icon .mdc-text-field__icon,\n.mdc-text-field--with-trailing-icon .mdc-text-field__icon {\n  position: absolute;\n  bottom: 16px;\n  cursor: pointer; }\n\n.mdc-text-field__icon:not([tabindex]),\n.mdc-text-field__icon[tabindex=\"-1\"] {\n  cursor: default;\n  pointer-events: none; }\n\n.mdc-text-field {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  border-radius: 4px 4px 0 0;\n  display: inline-flex;\n  position: relative;\n  box-sizing: border-box;\n  height: 56px;\n  overflow: hidden;\n  /* @alternate */\n  will-change: opacity, transform, color; }\n  .mdc-text-field::before, .mdc-text-field::after {\n    position: absolute;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-text-field::before {\n    transition: opacity 15ms linear, background-color 15ms linear;\n    z-index: 1; }\n  .mdc-text-field.mdc-ripple-upgraded::before {\n    transform: scale(var(--mdc-ripple-fg-scale, 1)); }\n  .mdc-text-field.mdc-ripple-upgraded::after {\n    top: 0;\n    /* @noflip */\n    left: 0;\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-text-field.mdc-ripple-upgraded--unbounded::after {\n    top: var(--mdc-ripple-top, 0);\n    /* @noflip */\n    left: var(--mdc-ripple-left, 0); }\n  .mdc-text-field.mdc-ripple-upgraded--foreground-activation::after {\n    animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards; }\n  .mdc-text-field.mdc-ripple-upgraded--foreground-deactivation::after {\n    animation: mdc-ripple-fg-opacity-out 150ms;\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); }\n  .mdc-text-field::before, .mdc-text-field::after {\n    background-color: rgba(0, 0, 0, 0.87); }\n  .mdc-text-field:hover::before {\n    opacity: 0.04; }\n  .mdc-text-field:not(.mdc-ripple-upgraded):focus::before, .mdc-text-field.mdc-ripple-upgraded--background-focused::before {\n    transition-duration: 75ms;\n    opacity: 0.12; }\n  .mdc-text-field::before, .mdc-text-field::after {\n    top: calc(50% - 100%);\n    /* @noflip */\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%; }\n  .mdc-text-field.mdc-ripple-upgraded::after {\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: var(--mdc-ripple-fg-size, 100%); }\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {\n    color: rgba(0, 0, 0, 0.6); }\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {\n    color: rgba(0, 0, 0, 0.87); }\n  .mdc-text-field .mdc-text-field__input {\n    caret-color: #0072d9;\n    /* @alternate */\n    caret-color: var(--mdc-theme-primary, #0072d9); }\n  .mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input {\n    border-bottom-color: rgba(0, 0, 0, 0.42); }\n  .mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover {\n    border-bottom-color: rgba(0, 0, 0, 0.87); }\n  .mdc-text-field .mdc-line-ripple {\n    background-color: #0072d9;\n    /* @alternate */\n    background-color: var(--mdc-theme-primary, #0072d9); }\n  .mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) {\n    border-bottom-color: rgba(0, 0, 0, 0.12); }\n  .mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-helper-text {\n    color: rgba(0, 0, 0, 0.6); }\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,\n  .mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-character-counter {\n    color: rgba(0, 0, 0, 0.6); }\n  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon {\n    color: rgba(0, 0, 0, 0.54); }\n  .mdc-text-field:not(.mdc-text-field--disabled) {\n    background-color: whitesmoke; }\n  .mdc-text-field .mdc-floating-label {\n    /* @noflip */\n    left: 16px;\n    /* @noflip */\n    right: initial;\n    top: 18px;\n    pointer-events: none; }\n    [dir=\"rtl\"] .mdc-text-field .mdc-floating-label, .mdc-text-field .mdc-floating-label[dir=\"rtl\"] {\n      /* @noflip */\n      left: initial;\n      /* @noflip */\n      right: 16px; }\n  .mdc-text-field--textarea .mdc-floating-label {\n    /* @noflip */\n    left: 4px;\n    /* @noflip */\n    right: initial; }\n    [dir=\"rtl\"] .mdc-text-field--textarea .mdc-floating-label, .mdc-text-field--textarea .mdc-floating-label[dir=\"rtl\"] {\n      /* @noflip */\n      left: initial;\n      /* @noflip */\n      right: 4px; }\n  .mdc-text-field--outlined .mdc-floating-label {\n    /* @noflip */\n    left: 4px;\n    /* @noflip */\n    right: initial;\n    top: 17px; }\n    [dir=\"rtl\"] .mdc-text-field--outlined .mdc-floating-label, .mdc-text-field--outlined .mdc-floating-label[dir=\"rtl\"] {\n      /* @noflip */\n      left: initial;\n      /* @noflip */\n      right: 4px; }\n  .mdc-text-field--outlined--with-leading-icon .mdc-floating-label {\n    /* @noflip */\n    left: 36px;\n    /* @noflip */\n    right: initial; }\n    [dir=\"rtl\"] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label, .mdc-text-field--outlined--with-leading-icon .mdc-floating-label[dir=\"rtl\"] {\n      /* @noflip */\n      left: initial;\n      /* @noflip */\n      right: 36px; }\n    .mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above {\n      /* @noflip */\n      left: 40px;\n      /* @noflip */\n      right: initial; }\n      [dir=\"rtl\"] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above, .mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above[dir=\"rtl\"] {\n        /* @noflip */\n        left: initial;\n        /* @noflip */\n        right: 40px; }\n\n.mdc-text-field__input {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  line-height: 1.75rem;\n  font-weight: 400;\n  letter-spacing: 0.00937em;\n  text-decoration: inherit;\n  text-transform: inherit;\n  align-self: flex-end;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  padding: 20px 16px 6px;\n  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  border-bottom: 1px solid;\n  border-radius: 0;\n  background: none;\n  appearance: none; }\n  .mdc-text-field__input::placeholder {\n    transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n    opacity: 0;\n    color: rgba(0, 0, 0, 0.54); }\n  .mdc-text-field__input:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.54) !important; }\n  .mdc-text-field--fullwidth .mdc-text-field__input::placeholder,\n  .mdc-text-field--no-label .mdc-text-field__input::placeholder,\n  .mdc-text-field--focused .mdc-text-field__input::placeholder {\n    transition-delay: 40ms;\n    transition-duration: 110ms;\n    opacity: 1; }\n  .mdc-text-field__input:focus {\n    outline: none; }\n  .mdc-text-field__input:invalid {\n    box-shadow: none; }\n  .mdc-text-field__input:-webkit-autofill {\n    z-index: auto !important; }\n  .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input {\n    padding: 16px; }\n\n.mdc-text-field__input:-webkit-autofill + .mdc-floating-label {\n  transform: translateY(-50%) scale(0.75);\n  cursor: auto; }\n\n.mdc-text-field--outlined {\n  border: none;\n  overflow: visible; }\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n    border-color: rgba(0, 0, 0, 0.24); }\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: rgba(0, 0, 0, 0.87); }\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {\n    border-color: #0072d9;\n    /* @alternate */\n    border-color: var(--mdc-theme-primary, #0072d9); }\n  .mdc-text-field--outlined .mdc-floating-label--shake {\n    animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1; }\n  .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {\n    /* @noflip */\n    border-radius: 4px 0 0 4px; }\n    [dir=\"rtl\"] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=\"rtl\"] {\n      /* @noflip */\n      border-radius: 0 4px 4px 0; }\n  .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing {\n    /* @noflip */\n    border-radius: 0 4px 4px 0; }\n    [dir=\"rtl\"] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=\"rtl\"] {\n      /* @noflip */\n      border-radius: 4px 0 0 4px; }\n  .mdc-text-field--outlined .mdc-floating-label--float-above {\n    transform: translateY(-144%) scale(1); }\n  .mdc-text-field--outlined .mdc-floating-label--float-above {\n    font-size: 0.75rem; }\n  .mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n  .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n    transform: translateY(-130%) scale(0.75); }\n  .mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n  .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n    font-size: 1rem; }\n  .mdc-text-field--outlined::before, .mdc-text-field--outlined::after {\n    content: none; }\n  .mdc-text-field--outlined:not(.mdc-text-field--disabled) {\n    background-color: transparent; }\n  .mdc-text-field--outlined .mdc-text-field__input {\n    display: flex;\n    padding: 12px 16px 14px;\n    border: none !important;\n    background-color: transparent;\n    z-index: 1; }\n  .mdc-text-field--outlined .mdc-text-field__icon {\n    z-index: 2; }\n\n.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__leading,\n.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__notch,\n.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__trailing {\n  border-width: 2px; }\n\n.mdc-text-field--outlined.mdc-text-field--disabled {\n  background-color: transparent; }\n  .mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,\n  .mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,\n  .mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing {\n    border-color: rgba(0, 0, 0, 0.06); }\n  .mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {\n    border-bottom: none; }\n\n.mdc-text-field--outlined.mdc-text-field--dense {\n  height: 48px; }\n  .mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {\n    transform: translateY(-134%) scale(1); }\n  .mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {\n    font-size: 0.8rem; }\n  .mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n  .mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n    transform: translateY(-120%) scale(0.8); }\n  .mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n  .mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n    font-size: 1rem; }\n  .mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake {\n    animation: mdc-floating-label-shake-float-above-text-field-outlined-dense 250ms 1; }\n  .mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__input {\n    padding: 12px 12px 7px; }\n  .mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label {\n    top: 14px; }\n  .mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__icon {\n    top: 12px; }\n\n.mdc-text-field--with-leading-icon .mdc-text-field__icon {\n  /* @noflip */\n  left: 16px;\n  /* @noflip */\n  right: initial; }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon .mdc-text-field__icon, .mdc-text-field--with-leading-icon .mdc-text-field__icon[dir=\"rtl\"] {\n    /* @noflip */\n    left: initial;\n    /* @noflip */\n    right: 16px; }\n\n.mdc-text-field--with-leading-icon .mdc-text-field__input {\n  /* @noflip */\n  padding-left: 48px;\n  /* @noflip */\n  padding-right: 16px; }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon .mdc-text-field__input, .mdc-text-field--with-leading-icon .mdc-text-field__input[dir=\"rtl\"] {\n    /* @noflip */\n    padding-left: 16px;\n    /* @noflip */\n    padding-right: 48px; }\n\n.mdc-text-field--with-leading-icon .mdc-floating-label {\n  /* @noflip */\n  left: 48px;\n  /* @noflip */\n  right: initial; }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon .mdc-floating-label, .mdc-text-field--with-leading-icon .mdc-floating-label[dir=\"rtl\"] {\n    /* @noflip */\n    left: initial;\n    /* @noflip */\n    right: 48px; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon {\n  /* @noflip */\n  left: 16px;\n  /* @noflip */\n  right: initial; }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=\"rtl\"] {\n    /* @noflip */\n    left: initial;\n    /* @noflip */\n    right: 16px; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input {\n  /* @noflip */\n  padding-left: 48px;\n  /* @noflip */\n  padding-right: 16px; }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input[dir=\"rtl\"] {\n    /* @noflip */\n    padding-left: 16px;\n    /* @noflip */\n    padding-right: 48px; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {\n  transform: translateY(-144%) translateX(-32px) scale(1); }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=\"rtl\"] {\n    transform: translateY(-144%) translateX(32px) scale(1); }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {\n  font-size: 0.75rem; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  transform: translateY(-130%) translateX(-32px) scale(0.75); }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=\"rtl\"], [dir=\"rtl\"]\n  .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n  .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=\"rtl\"] {\n    transform: translateY(-130%) translateX(32px) scale(0.75); }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: 1rem; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1; }\n\n[dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake, .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=\"rtl\"] .mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl 250ms 1; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label {\n  /* @noflip */\n  left: 36px;\n  /* @noflip */\n  right: initial; }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=\"rtl\"] {\n    /* @noflip */\n    left: initial;\n    /* @noflip */\n    right: 36px; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {\n  transform: translateY(-134%) translateX(-21px) scale(1); }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above[dir=\"rtl\"] {\n    transform: translateY(-134%) translateX(21px) scale(1); }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {\n  font-size: 0.8rem; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  transform: translateY(-120%) translateX(-21px) scale(0.8); }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=\"rtl\"], [dir=\"rtl\"]\n  .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n  .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=\"rtl\"] {\n    transform: translateY(-120%) translateX(21px) scale(0.8); }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: 1rem; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense 250ms 1; }\n\n[dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense[dir=\"rtl\"] .mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl 250ms 1; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label {\n  /* @noflip */\n  left: 32px;\n  /* @noflip */\n  right: initial; }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label[dir=\"rtl\"] {\n    /* @noflip */\n    left: initial;\n    /* @noflip */\n    right: 32px; }\n\n.mdc-text-field--with-trailing-icon .mdc-text-field__icon {\n  /* @noflip */\n  left: initial;\n  /* @noflip */\n  right: 12px; }\n  [dir=\"rtl\"] .mdc-text-field--with-trailing-icon .mdc-text-field__icon, .mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=\"rtl\"] {\n    /* @noflip */\n    left: 12px;\n    /* @noflip */\n    right: initial; }\n\n.mdc-text-field--with-trailing-icon .mdc-text-field__input {\n  /* @noflip */\n  padding-left: 16px;\n  /* @noflip */\n  padding-right: 48px; }\n  [dir=\"rtl\"] .mdc-text-field--with-trailing-icon .mdc-text-field__input, .mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=\"rtl\"] {\n    /* @noflip */\n    padding-left: 48px;\n    /* @noflip */\n    padding-right: 16px; }\n\n.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon {\n  /* @noflip */\n  left: initial;\n  /* @noflip */\n  right: 16px; }\n  [dir=\"rtl\"] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon, .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=\"rtl\"] {\n    /* @noflip */\n    left: 16px;\n    /* @noflip */\n    right: initial; }\n\n.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input {\n  /* @noflip */\n  padding-left: 16px;\n  /* @noflip */\n  padding-right: 48px; }\n  [dir=\"rtl\"] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input[dir=\"rtl\"] {\n    /* @noflip */\n    padding-left: 48px;\n    /* @noflip */\n    padding-right: 16px; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon {\n  /* @noflip */\n  left: 16px;\n  /* @noflip */\n  right: auto; }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=\"rtl\"] {\n    /* @noflip */\n    left: auto;\n    /* @noflip */\n    right: 16px; }\n  .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon ~ .mdc-text-field__icon {\n    /* @noflip */\n    right: 12px;\n    /* @noflip */\n    left: auto; }\n    [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon ~ .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon ~ .mdc-text-field__icon[dir=\"rtl\"] {\n      /* @noflip */\n      right: auto;\n      /* @noflip */\n      left: 12px; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input {\n  /* @noflip */\n  padding-left: 48px;\n  /* @noflip */\n  padding-right: 48px; }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=\"rtl\"] {\n    /* @noflip */\n    padding-left: 48px;\n    /* @noflip */\n    padding-right: 48px; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,\n.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon {\n  bottom: 16px;\n  transform: scale(0.8); }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon {\n  /* @noflip */\n  left: 12px;\n  /* @noflip */\n  right: initial; }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon[dir=\"rtl\"] {\n    /* @noflip */\n    left: initial;\n    /* @noflip */\n    right: 12px; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input {\n  /* @noflip */\n  padding-left: 44px;\n  /* @noflip */\n  padding-right: 16px; }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input[dir=\"rtl\"] {\n    /* @noflip */\n    padding-left: 16px;\n    /* @noflip */\n    padding-right: 44px; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label {\n  /* @noflip */\n  left: 44px;\n  /* @noflip */\n  right: initial; }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label[dir=\"rtl\"] {\n    /* @noflip */\n    left: initial;\n    /* @noflip */\n    right: 44px; }\n\n.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon {\n  /* @noflip */\n  left: initial;\n  /* @noflip */\n  right: 12px; }\n  [dir=\"rtl\"] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon, .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=\"rtl\"] {\n    /* @noflip */\n    left: 12px;\n    /* @noflip */\n    right: initial; }\n\n.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input {\n  /* @noflip */\n  padding-left: 16px;\n  /* @noflip */\n  padding-right: 44px; }\n  [dir=\"rtl\"] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=\"rtl\"] {\n    /* @noflip */\n    padding-left: 44px;\n    /* @noflip */\n    padding-right: 16px; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon {\n  /* @noflip */\n  left: 12px;\n  /* @noflip */\n  right: auto; }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=\"rtl\"] {\n    /* @noflip */\n    left: auto;\n    /* @noflip */\n    right: 12px; }\n  .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon ~ .mdc-text-field__icon {\n    /* @noflip */\n    right: 12px;\n    /* @noflip */\n    left: auto; }\n    [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon ~ .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon ~ .mdc-text-field__icon[dir=\"rtl\"] {\n      /* @noflip */\n      right: auto;\n      /* @noflip */\n      left: 12px; }\n\n.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input {\n  /* @noflip */\n  padding-left: 44px;\n  /* @noflip */\n  padding-right: 44px; }\n  [dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=\"rtl\"] {\n    /* @noflip */\n    padding-left: 44px;\n    /* @noflip */\n    padding-right: 44px; }\n\n.mdc-text-field--dense .mdc-floating-label--float-above {\n  transform: translateY(-70%) scale(0.8); }\n\n.mdc-text-field--dense .mdc-floating-label--shake {\n  animation: mdc-floating-label-shake-float-above-text-field-dense 250ms 1; }\n\n.mdc-text-field--dense .mdc-text-field__input {\n  padding: 12px 12px 0; }\n\n.mdc-text-field--dense .mdc-floating-label {\n  font-size: .813rem; }\n  .mdc-text-field--dense .mdc-floating-label--float-above {\n    font-size: .813rem; }\n\n.mdc-text-field__input:required ~ .mdc-floating-label::after,\n.mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after {\n  margin-left: 1px;\n  content: \"*\"; }\n\n.mdc-text-field--textarea {\n  display: inline-flex;\n  width: auto;\n  height: auto;\n  transition: none;\n  overflow: visible; }\n  .mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n  .mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n  .mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n    border-color: rgba(0, 0, 0, 0.24); }\n  .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,\n  .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,\n  .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,\n  .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,\n  .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,\n  .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {\n    border-color: rgba(0, 0, 0, 0.87); }\n  .mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,\n  .mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,\n  .mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {\n    border-color: #0072d9;\n    /* @alternate */\n    border-color: var(--mdc-theme-primary, #0072d9); }\n  .mdc-text-field--textarea .mdc-floating-label--shake {\n    animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1; }\n  .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading {\n    /* @noflip */\n    border-radius: 4px 0 0 4px; }\n    [dir=\"rtl\"] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading[dir=\"rtl\"] {\n      /* @noflip */\n      border-radius: 0 4px 4px 0; }\n  .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing {\n    /* @noflip */\n    border-radius: 0 4px 4px 0; }\n    [dir=\"rtl\"] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing[dir=\"rtl\"] {\n      /* @noflip */\n      border-radius: 4px 0 0 4px; }\n  .mdc-text-field--textarea::before, .mdc-text-field--textarea::after {\n    content: none; }\n  .mdc-text-field--textarea:not(.mdc-text-field--disabled) {\n    background-color: transparent; }\n  .mdc-text-field--textarea .mdc-floating-label--float-above {\n    transform: translateY(-144%) scale(1); }\n  .mdc-text-field--textarea .mdc-floating-label--float-above {\n    font-size: 0.75rem; }\n  .mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n  .mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n    transform: translateY(-130%) scale(0.75); }\n  .mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,\n  .mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n    font-size: 1rem; }\n  .mdc-text-field--textarea .mdc-text-field-character-counter {\n    /* @noflip */\n    left: initial;\n    /* @noflip */\n    right: 16px;\n    position: absolute;\n    bottom: 13px; }\n    [dir=\"rtl\"] .mdc-text-field--textarea .mdc-text-field-character-counter, .mdc-text-field--textarea .mdc-text-field-character-counter[dir=\"rtl\"] {\n      /* @noflip */\n      left: 16px;\n      /* @noflip */\n      right: initial; }\n  .mdc-text-field--textarea .mdc-text-field__input {\n    align-self: auto;\n    box-sizing: border-box;\n    height: auto;\n    margin: 8px 1px 1px 0;\n    padding: 0 16px 16px;\n    border: none; }\n  .mdc-text-field--textarea .mdc-text-field-character-counter + .mdc-text-field__input {\n    margin-bottom: 28px;\n    padding-bottom: 0; }\n  .mdc-text-field--textarea .mdc-floating-label {\n    top: 17px;\n    bottom: auto;\n    width: auto;\n    pointer-events: none; }\n  .mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__leading,\n  .mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__notch,\n  .mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__trailing {\n    border-width: 2px; }\n\n.mdc-text-field--fullwidth {\n  width: 100%; }\n  .mdc-text-field--fullwidth:not(.mdc-text-field--textarea) {\n    display: block; }\n    .mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::before, .mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::after {\n      content: none; }\n    .mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--disabled) {\n      background-color: transparent; }\n    .mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input {\n      padding: 0; }\n  .mdc-text-field--fullwidth.mdc-text-field--textarea .mdc-text-field__input {\n    resize: vertical; }\n\n.mdc-text-field--fullwidth.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) {\n  border-bottom-color: #f5222d;\n  /* @alternate */\n  border-bottom-color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field-helper-line {\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box; }\n  .mdc-text-field--dense + .mdc-text-field-helper-line {\n    margin-bottom: 4px; }\n  .mdc-text-field + .mdc-text-field-helper-line {\n    padding-right: 16px;\n    padding-left: 16px; }\n\n.mdc-form-field > .mdc-text-field + label {\n  align-self: flex-start; }\n\n.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: rgba(0, 114, 217, 0.87); }\n\n.mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-floating-label::after,\n.mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after {\n  color: #f5222d;\n  /* @alternate */\n  color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field--focused + .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg) {\n  opacity: 1; }\n\n.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n  border-color: #0072d9;\n  /* @alternate */\n  border-color: var(--mdc-theme-primary, #0072d9); }\n\n.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input {\n  border-bottom-color: #f5222d;\n  /* @alternate */\n  border-bottom-color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover {\n  border-bottom-color: #f5222d;\n  /* @alternate */\n  border-bottom-color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple {\n  background-color: #f5222d;\n  /* @alternate */\n  background-color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: #f5222d;\n  /* @alternate */\n  color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {\n  color: #f5222d;\n  /* @alternate */\n  color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field--invalid .mdc-text-field__input {\n  caret-color: #f5222d;\n  /* @alternate */\n  caret-color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field--invalid.mdc-text-field--with-trailing-icon:not(.mdc-text-field--with-leading-icon):not(.mdc-text-field--disabled) .mdc-text-field__icon {\n  color: #f5222d;\n  /* @alternate */\n  color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field--invalid.mdc-text-field--with-trailing-icon.mdc-text-field--with-leading-icon:not(.mdc-text-field--disabled) .mdc-text-field__icon ~ .mdc-text-field__icon {\n  color: #f5222d;\n  /* @alternate */\n  color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {\n  opacity: 1; }\n\n.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n  border-color: #f5222d;\n  /* @alternate */\n  border-color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,\n.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: #f5222d;\n  /* @alternate */\n  border-color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,\n.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,\n.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {\n  border-color: #f5222d;\n  /* @alternate */\n  border-color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,\n.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,\n.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {\n  border-color: #f5222d;\n  /* @alternate */\n  border-color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,\n.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,\n.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,\n.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: #f5222d;\n  /* @alternate */\n  border-color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,\n.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,\n.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {\n  border-color: #f5222d;\n  /* @alternate */\n  border-color: var(--mdc-theme-error, #f5222d); }\n\n.mdc-text-field--disabled {\n  background-color: #fafafa;\n  border-bottom: none;\n  pointer-events: none; }\n  .mdc-text-field--disabled .mdc-text-field__input {\n    border-bottom-color: rgba(0, 0, 0, 0.06); }\n  .mdc-text-field--disabled .mdc-text-field__input {\n    color: rgba(0, 0, 0, 0.37); }\n  .mdc-text-field--disabled .mdc-floating-label {\n    color: rgba(0, 0, 0, 0.37); }\n  .mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-helper-text {\n    color: rgba(0, 0, 0, 0.37); }\n  .mdc-text-field--disabled .mdc-text-field-character-counter,\n  .mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-character-counter {\n    color: rgba(0, 0, 0, 0.37); }\n  .mdc-text-field--disabled .mdc-text-field__icon {\n    color: rgba(0, 0, 0, 0.3); }\n  .mdc-text-field--disabled:not(.mdc-text-field--textarea) {\n    border-bottom-color: rgba(0, 0, 0, 0.12); }\n  .mdc-text-field--disabled .mdc-floating-label {\n    cursor: default; }\n\n.mdc-text-field--textarea.mdc-text-field--disabled {\n  background-color: transparent;\n  /* @alternate */\n  background-color: #f9f9f9; }\n  .mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__leading,\n  .mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__notch,\n  .mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__trailing {\n    border-color: rgba(0, 0, 0, 0.06); }\n  .mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input {\n    border-bottom: none; }\n\n@keyframes mdc-floating-label-shake-float-above-text-field-dense {\n  0% {\n    transform: translateX(calc(0 - 0%)) translateY(-70%) scale(0.8); }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    transform: translateX(calc(4% - 0%)) translateY(-70%) scale(0.8); }\n  66% {\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    transform: translateX(calc(-4% - 0%)) translateY(-70%) scale(0.8); }\n  100% {\n    transform: translateX(calc(0 - 0%)) translateY(-70%) scale(0.8); } }\n\n@keyframes mdc-floating-label-shake-float-above-text-field-outlined {\n  0% {\n    transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75); }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75); }\n  66% {\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75); }\n  100% {\n    transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75); } }\n\n@keyframes mdc-floating-label-shake-float-above-text-field-outlined-dense {\n  0% {\n    transform: translateX(calc(0 - 0%)) translateY(-120%) scale(0.8); }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    transform: translateX(calc(4% - 0%)) translateY(-120%) scale(0.8); }\n  66% {\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    transform: translateX(calc(-4% - 0%)) translateY(-120%) scale(0.8); }\n  100% {\n    transform: translateX(calc(0 - 0%)) translateY(-120%) scale(0.8); } }\n\n@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon {\n  0% {\n    transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75); }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    transform: translateX(calc(4% - 0)) translateY(-130%) scale(0.75); }\n  66% {\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    transform: translateX(calc(-4% - 0)) translateY(-130%) scale(0.75); }\n  100% {\n    transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75); } }\n\n@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense {\n  0% {\n    transform: translateX(calc(0 - 21px)) translateY(-120%) scale(0.8); }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    transform: translateX(calc(4% - 21px)) translateY(-120%) scale(0.8); }\n  66% {\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    transform: translateX(calc(-4% - 21px)) translateY(-120%) scale(0.8); }\n  100% {\n    transform: translateX(calc(0 - 21px)) translateY(-120%) scale(0.8); } }\n\n@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl {\n  0% {\n    transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75); }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    transform: translateX(calc(4% - 0)) translateY(-130%) scale(0.75); }\n  66% {\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    transform: translateX(calc(-4% - 0)) translateY(-130%) scale(0.75); }\n  100% {\n    transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75); } }\n\n@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl {\n  0% {\n    transform: translateX(calc(0 - -21px)) translateY(-120%) scale(0.8); }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    transform: translateX(calc(4% - -21px)) translateY(-120%) scale(0.8); }\n  66% {\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    transform: translateX(calc(-4% - -21px)) translateY(-120%) scale(0.8); }\n  100% {\n    transform: translateX(calc(0 - -21px)) translateY(-120%) scale(0.8); } }\n\n@keyframes mdc-floating-label-shake-float-above-textarea {\n  0% {\n    transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75); }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75); }\n  66% {\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75); }\n  100% {\n    transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75); } }\n\n.icon {\n  cursor: default;\n  pointer-events: none; }\n\n.mdc-text-field--with-leading-icon .icon {\n  position: absolute;\n  top: 12px;\n  left: 10px; }\n\n.mdc-text-field--with-trailing-icon .icon {\n  position: absolute;\n  top: 12px;\n  right: 12px; }\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n", ""]);
            // exports
            /***/ 
        }),
        /***/ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js": 
        /*!*******************************************************************!*\
          !*** ./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js ***!
          \*******************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /*
                MIT License http://www.opensource.org/licenses/mit-license.php
                Author Tobias Koppers @sokra
            */
            // css base code, injected by the css-loader
            module.exports = function (useSourceMap) {
                var list = [];
                // return the list of modules as css string
                list.toString = function toString() {
                    return this.map(function (item) {
                        var content = cssWithMappingToString(item, useSourceMap);
                        if (item[2]) {
                            return "@media " + item[2] + "{" + content + "}";
                        }
                        else {
                            return content;
                        }
                    }).join("");
                };
                // import a list of modules into the list
                list.i = function (modules, mediaQuery) {
                    if (typeof modules === "string")
                        modules = [[null, modules, ""]];
                    var alreadyImportedModules = {};
                    for (var i = 0; i < this.length; i++) {
                        var id = this[i][0];
                        if (typeof id === "number")
                            alreadyImportedModules[id] = true;
                    }
                    for (i = 0; i < modules.length; i++) {
                        var item = modules[i];
                        // skip already imported module
                        // this implementation is not 100% perfect for weird media query combinations
                        //  when a module is imported multiple times with different media queries.
                        //  I hope this will never occur (Hey this way we have smaller bundles)
                        if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                            if (mediaQuery && !item[2]) {
                                item[2] = mediaQuery;
                            }
                            else if (mediaQuery) {
                                item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                            }
                            list.push(item);
                        }
                    }
                };
                return list;
            };
            function cssWithMappingToString(item, useSourceMap) {
                var content = item[1] || '';
                var cssMapping = item[3];
                if (!cssMapping) {
                    return content;
                }
                if (useSourceMap && typeof btoa === 'function') {
                    var sourceMapping = toComment(cssMapping);
                    var sourceURLs = cssMapping.sources.map(function (source) {
                        return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
                    });
                    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
                }
                return [content].join('\n');
            }
            // Adapted from convert-source-map (MIT)
            function toComment(sourceMap) {
                // eslint-disable-next-line no-undef
                var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
                var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
                return '/*# ' + data + ' */';
            }
            /***/ 
        }),
        /***/ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js": 
        /*!******************************************************!*\
          !*** ./node_modules/_tslib@1.9.3@tslib/tslib.es6.js ***!
          \******************************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
                        if (e.indexOf(p[i]) < 0)
                            t[p[i]] = s[p[i]];
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/icon/index.js": 
        /*!***************************!*\
          !*** ./src/icon/index.js ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            (function webpackUniversalModuleDefinition(root, factory) {
                if (true)
                    module.exports = factory(__webpack_require__(/*! omi */ "omi"));
                else {}
            })(window, function (__WEBPACK_EXTERNAL_MODULE_omi__) {
                return /******/ (function (modules) {
                    /******/ // The module cache
                    /******/ var installedModules = {};
                    /******/
                    /******/ // The require function
                    /******/ function __webpack_require__(moduleId) {
                        /******/
                        /******/ // Check if module is in cache
                        /******/ if (installedModules[moduleId]) {
                            /******/ return installedModules[moduleId].exports;
                            /******/ }
                        /******/ // Create a new module (and put it into the cache)
                        /******/ var module = installedModules[moduleId] = {
                            /******/ i: moduleId,
                            /******/ l: false,
                            /******/ exports: {}
                            /******/
                        };
                        /******/
                        /******/ // Execute the module function
                        /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                        /******/
                        /******/ // Flag the module as loaded
                        /******/ module.l = true;
                        /******/
                        /******/ // Return the exports of the module
                        /******/ return module.exports;
                        /******/
                    }
                    /******/
                    /******/
                    /******/ // expose the modules object (__webpack_modules__)
                    /******/ __webpack_require__.m = modules;
                    /******/
                    /******/ // expose the module cache
                    /******/ __webpack_require__.c = installedModules;
                    /******/
                    /******/ // define getter function for harmony exports
                    /******/ __webpack_require__.d = function (exports, name, getter) {
                        /******/ if (!__webpack_require__.o(exports, name)) {
                            /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
                            /******/ }
                        /******/
                    };
                    /******/
                    /******/ // define __esModule on exports
                    /******/ __webpack_require__.r = function (exports) {
                        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                            /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                            /******/ }
                        /******/ Object.defineProperty(exports, '__esModule', { value: true });
                        /******/
                    };
                    /******/
                    /******/ // create a fake namespace object
                    /******/ // mode & 1: value is a module id, require it
                    /******/ // mode & 2: merge all properties of value into the ns
                    /******/ // mode & 4: return value when already ns object
                    /******/ // mode & 8|1: behave like require
                    /******/ __webpack_require__.t = function (value, mode) {
                        /******/ if (mode & 1)
                            value = __webpack_require__(value);
                        /******/ if (mode & 8)
                            return value;
                        /******/ if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
                            return value;
                        /******/ var ns = Object.create(null);
                        /******/ __webpack_require__.r(ns);
                        /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                        /******/ if (mode & 2 && typeof value != 'string')
                            for (var key in value)
                                __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
                        /******/ return ns;
                        /******/
                    };
                    /******/
                    /******/ // getDefaultExport function for compatibility with non-harmony modules
                    /******/ __webpack_require__.n = function (module) {
                        /******/ var getter = module && module.__esModule ?
                            /******/ function getDefault() { return module['default']; } :
                            /******/ function getModuleExports() { return module; };
                        /******/ __webpack_require__.d(getter, 'a', getter);
                        /******/ return getter;
                        /******/
                    };
                    /******/
                    /******/ // Object.prototype.hasOwnProperty.call
                    /******/ __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
                    /******/
                    /******/ // __webpack_public_path__
                    /******/ __webpack_require__.p = "";
                    /******/
                    /******/
                    /******/ // Load entry module and return exports
                    /******/ return __webpack_require__(__webpack_require__.s = "./src/icon/index.tsx");
                    /******/
                })({
                    /***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!./src/icon/index.scss": 
                    /*!***********************************************************************************************************************************************************************************************************!*\
                      !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--4-3!./src/icon/index.scss ***!
                      \***********************************************************************************************************************************************************************************************************/
                    /*! no static exports found */
                    /***/ (function (module, exports, __webpack_require__) {
                        exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
                        // imports
                        // module
                        exports.push([module.i, ".m-icon {\n  text-align: center;\n  display: inline-block; }\n\n.m-icon svg {\n  display: inline-block;\n  vertical-align: top; }\n\n.rotate {\n  display: inline-block;\n  -webkit-animation: rotate 1s infinite linear;\n  animation: rotate 1s infinite linear; }\n\ni div {\n  font-style: normal; }\n\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n", ""]);
                        // exports
                        /***/
                    }),
                    /***/ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js": 
                    /*!*******************************************************************!*\
                      !*** ./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js ***!
                      \*******************************************************************/
                    /*! no static exports found */
                    /***/ (function (module, exports) {
                        /*
                            MIT License http://www.opensource.org/licenses/mit-license.php
                            Author Tobias Koppers @sokra
                        */
                        // css base code, injected by the css-loader
                        module.exports = function (useSourceMap) {
                            var list = [];
                            // return the list of modules as css string
                            list.toString = function toString() {
                                return this.map(function (item) {
                                    var content = cssWithMappingToString(item, useSourceMap);
                                    if (item[2]) {
                                        return "@media " + item[2] + "{" + content + "}";
                                    }
                                    else {
                                        return content;
                                    }
                                }).join("");
                            };
                            // import a list of modules into the list
                            list.i = function (modules, mediaQuery) {
                                if (typeof modules === "string")
                                    modules = [[null, modules, ""]];
                                var alreadyImportedModules = {};
                                for (var i = 0; i < this.length; i++) {
                                    var id = this[i][0];
                                    if (typeof id === "number")
                                        alreadyImportedModules[id] = true;
                                }
                                for (i = 0; i < modules.length; i++) {
                                    var item = modules[i];
                                    // skip already imported module
                                    // this implementation is not 100% perfect for weird media query combinations
                                    //  when a module is imported multiple times with different media queries.
                                    //  I hope this will never occur (Hey this way we have smaller bundles)
                                    if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                                        if (mediaQuery && !item[2]) {
                                            item[2] = mediaQuery;
                                        }
                                        else if (mediaQuery) {
                                            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                                        }
                                        list.push(item);
                                    }
                                }
                            };
                            return list;
                        };
                        function cssWithMappingToString(item, useSourceMap) {
                            var content = item[1] || '';
                            var cssMapping = item[3];
                            if (!cssMapping) {
                                return content;
                            }
                            if (useSourceMap && typeof btoa === 'function') {
                                var sourceMapping = toComment(cssMapping);
                                var sourceURLs = cssMapping.sources.map(function (source) {
                                    return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
                                });
                                return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
                            }
                            return [content].join('\n');
                        }
                        // Adapted from convert-source-map (MIT)
                        function toComment(sourceMap) {
                            // eslint-disable-next-line no-undef
                            var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
                            var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
                            return '/*# ' + data + ' */';
                        }
                        /***/
                    }),
                    /***/ "./src/icon/index.scss": 
                    /*!*****************************!*\
                      !*** ./src/icon/index.scss ***!
                      \*****************************/
                    /*! no static exports found */
                    /***/ (function (module, exports, __webpack_require__) {
                        var result = __webpack_require__(/*! !../../node_modules/_css-loader@1.0.1@css-loader!../../node_modules/_resolve-url-loader@3.1.0@resolve-url-loader!../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--4-3!./index.scss */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!./src/icon/index.scss");
                        if (typeof result === "string") {
                            module.exports = result;
                        }
                        else {
                            module.exports = result.toString();
                        }
                        /***/
                    }),
                    /***/ "./src/icon/index.tsx": 
                    /*!****************************!*\
                      !*** ./src/icon/index.tsx ***!
                      \****************************/
                    /*! no static exports found */
                    /***/ (function (module, exports, __webpack_require__) {
                        "use strict";
                        var __extends = (this && this.__extends) || (function () {
                            var extendStatics = function (d, b) {
                                extendStatics = Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                                    function (d, b) {
                                        for (var p in b)
                                            if (b.hasOwnProperty(p))
                                                d[p] = b[p];
                                    };
                                return extendStatics(d, b);
                            };
                            return function (d, b) {
                                extendStatics(d, b);
                                function __() { this.constructor = d; }
                                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                        })();
                        var __assign = (this && this.__assign) || function () {
                            __assign = Object.assign || function (t) {
                                for (var s, i = 1, n = arguments.length; i < n; i++) {
                                    s = arguments[i];
                                    for (var p in s)
                                        if (Object.prototype.hasOwnProperty.call(s, p))
                                            t[p] = s[p];
                                }
                                return t;
                            };
                            return __assign.apply(this, arguments);
                        };
                        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                            var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                                r = Reflect.decorate(decorators, target, key, desc);
                            else
                                for (var i = decorators.length - 1; i >= 0; i--)
                                    if (d = decorators[i])
                                        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                            return c > 3 && r && Object.defineProperty(target, key, r), r;
                        };
                        Object.defineProperty(exports, "__esModule", { value: true });
                        var omi_1 = __webpack_require__(/*! omi */ "omi");
                        var css = __webpack_require__(/*! ./index.scss */ "./src/icon/index.scss");
                        //@ts-ignore
                        __webpack_require__(/*! ../theme.ts */ "./src/theme.ts");
                        var Icon = /** @class */ (function (_super) {
                            __extends(Icon, _super);
                            function Icon() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            Icon.prototype.render = function (props) {
                                return (omi_1.h("i", __assign({}, omi_1.extractClass(props, 'm-icon')), omi_1.h("svg", { viewBox: '0 0 ' + props.view + ' ' + props.view, class: omi_1.classNames({ rotate: props.rotate }), width: props.scale + 'em', height: props.scale + 'em', fill: props.color, "aria-hidden": "true" }, props.paths ? (props.paths.map(function (item) {
                                    var attrs = { d: item.path, fill: props.color || 'black' };
                                    if (item.color)
                                        attrs.fill = item.color;
                                    return omi_1.h("path", __assign({}, attrs));
                                })) : omi_1.h("path", { d: props.path })), props.children && (omi_1.h("div", { style: "color:" + (props.color || 'black') + ";" }, props.children[0]))));
                            };
                            Icon.css = css;
                            Icon.defaultProps = {
                                view: 1024,
                                scale: 2
                            };
                            Icon.propTypes = {
                                path: String,
                                paths: Object,
                                view: Number,
                                scale: Number,
                                color: String,
                                rotate: Boolean
                            };
                            Icon = __decorate([
                                omi_1.tag('m-icon')
                            ], Icon);
                            return Icon;
                        }(omi_1.WeElement));
                        exports.default = Icon;
                        /***/
                    }),
                    /***/ "./src/theme.ts": 
                    /*!**********************!*\
                      !*** ./src/theme.ts ***!
                      \**********************/
                    /*! no static exports found */
                    /***/ (function (module, exports) {
                        if (!document.querySelector('#__omim-theme-style')) {
                            var style = document.createElement('style');
                            style.id = '__omim-theme-style';
                            style.textContent = "--mdc-theme-primary: #0052d9;\n  --mdc-theme-secondary: #1890ff;\n  --mdc-theme-error: #f5222d;\n  --mdc-theme-surface: #ffffff;\n  --mdc-theme-on-primary: #ffffff;\n  --mdc-theme-on-secondary: #ffffff;\n  --mdc-theme-on-error: #ffffff;\n  --mdc-theme-on-surface: #000000;\n  --mdc-theme-background: #ffffff;\n  --mdc-shape-small-component-radius: 4px;\n  --mdc-shape-medium-component-radius: 4px;\n  --mdc-shape-large-component-radius: 0px;\n  --mdc-typography--font-family: Roboto, sans-serif;\n  ";
                            document.querySelector('head').append(style);
                        }
                        /***/
                    }),
                    /***/ "omi": 
                    /*!******************************************************************************!*\
                      !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
                      \******************************************************************************/
                    /*! no static exports found */
                    /***/ (function (module, exports) {
                        module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;
                        /***/
                    })
                    /******/
                })["default"];
            });
            //# sourceMappingURL=index.js.map
            /***/ 
        }),
        /***/ "./src/text-field/index.scss": 
        /*!***********************************!*\
          !*** ./src/text-field/index.scss ***!
          \***********************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var result = __webpack_require__(/*! !../../node_modules/_css-loader@1.0.1@css-loader!../../node_modules/_resolve-url-loader@3.1.0@resolve-url-loader!../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--4-3!./index.scss */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!./src/text-field/index.scss");
            if (typeof result === "string") {
                module.exports = result;
            }
            else {
                module.exports = result.toString();
            }
            /***/ 
        }),
        /***/ "./src/text-field/index.tsx": 
        /*!**********************************!*\
          !*** ./src/text-field/index.tsx ***!
          \**********************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var __extends = (this && this.__extends) || (function () {
                var extendStatics = function (d, b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                        function (d, b) { for (var p in b)
                            if (b.hasOwnProperty(p))
                                d[p] = b[p]; };
                    return extendStatics(d, b);
                };
                return function (d, b) {
                    extendStatics(d, b);
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            })();
            var __assign = (this && this.__assign) || function () {
                __assign = Object.assign || function (t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            Object.defineProperty(exports, "__esModule", { value: true });
            var css = __webpack_require__(/*! ./index.scss */ "./src/text-field/index.scss");
            var omi_1 = __webpack_require__(/*! omi */ "omi");
            var index_1 = __webpack_require__(/*! @material/textfield/index */ "./node_modules/_@material_textfield@1.1.1@@material/textfield/index.js");
            __webpack_require__(/*! ../icon */ "./src/icon/index.js");
            //import { MDCRipple } from '@material/ripple/index'
            //@ts-ignore
            __webpack_require__(/*! ../theme.ts */ "./src/theme.ts");
            function extract(from, props) {
                var to = {};
                props.forEach(function (prop) {
                    if (from[prop] !== undefined) {
                        to[prop] = from[prop];
                    }
                });
                return to;
            }
            var TextField = /** @class */ (function (_super) {
                __extends(TextField, _super);
                function TextField() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.focus = function () {
                        _this.mdc.focus();
                    };
                    _this.layout = function () {
                        _this.mdc.layout();
                    };
                    _this.refIt = function (e) { _this.root = e; };
                    return _this;
                }
                TextField.prototype.installed = function () {
                    this.mdc = new index_1.MDCTextField(this.root);
                };
                TextField.prototype.uninstall = function () {
                    this.mdc.destroy();
                };
                TextField.prototype.render = function (props) {
                    var cls = omi_1.extractClass(props, 'mdc-text-field', {
                        'mdc-text-field--outlined': props.outlined,
                        'mdc-text-field--fullwidth': props.fullWidth,
                        'mdc-text-field--textarea': props.textarea,
                        'mdc-text-field--disabled': props.disabled,
                        'mdc-text-field--with-leading-icon': props.leftIcon || ((props.path || props.paths) && !props.iconRight),
                        'mdc-text-field--with-trailing-icon': props.rightIcon || ((props.path || props.paths) && props.iconRight)
                    });
                    var inputProps = extract(props, ['disabled', 'required', 'pattern', 'value', 'minLength', 'maxLength', 'min', 'max', 'step']);
                    if (props.fullWidth && !props.outlined) {
                        inputProps.placeholder = props.label;
                        props.label = null;
                    }
                    var vd = [
                        omi_1.h("div", __assign({ ref: this.refIt }, cls), (props.path || props.paths) && !props.iconRight && omi_1.h("m-icon", __assign({ class: 'icon' }, extract(props, ['path', 'paths']))), props.leftIcon && omi_1.h("i", { class: "material-icons mdc-text-field__icon" }, props.leftIcon), props.counter && props.textarea && omi_1.h("div", { class: "mdc-text-field-character-counter" }), props.textarea ?
                            omi_1.h("textarea", __assign({ id: "my-text-field", class: "mdc-text-field__input", rows: props.rows, cols: props.cols }, inputProps)) :
                            omi_1.h("input", __assign({ type: props.type, id: "my-text-field", class: "mdc-text-field__input" }, inputProps)), props.outlined ?
                            omi_1.h("div", { class: "mdc-notched-outline" }, omi_1.h("div", { class: "mdc-notched-outline__leading" }), omi_1.h("div", { class: "mdc-notched-outline__notch" }, props.label === undefined || !props.noLabel && omi_1.h("label", { for: "tf-outlined", class: "mdc-floating-label" }, props.label)), omi_1.h("div", { class: "mdc-notched-outline__trailing" })) :
                            (props.label === undefined || !props.noLabel && omi_1.h("label", { class: "mdc-floating-label", for: "my-text-field" }, props.label)), (props.path || props.paths) && props.iconRight && omi_1.h("m-icon", __assign({ class: 'icon' }, extract(props, ['path', 'paths']))), props.rightIcon && omi_1.h("i", { class: "material-icons mdc-text-field__icon" }, props.rightIcon), !props.outlined && omi_1.h("div", { class: "mdc-line-ripple" }))
                    ];
                    if (props.helperText || (props.counter && !props.textarea)) {
                        vd.push(omi_1.h("div", { class: "mdc-text-field-helper-line" }, props.helperText && omi_1.h("div", { class: "mdc-text-field-helper-text" + (props.showHelper ? ' mdc-text-field-helper-text--persistent' : '') }, props.helperText), props.counter && !props.textarea && omi_1.h("div", { class: "mdc-text-field-helper-line" }, omi_1.h("div", { class: "mdc-text-field-character-counter" }))));
                    }
                    return vd;
                };
                TextField.css = css;
                TextField.defaultProps = {
                    showHelper: true,
                    type: 'text'
                };
                TextField.propTypes = {
                    fullWidth: Boolean,
                    textarea: Boolean,
                    outlined: Boolean,
                    noLabel: Boolean,
                    showHelper: Boolean,
                    helperText: String,
                    iconRight: Boolean,
                    counter: Boolean,
                    path: String,
                    paths: String,
                    //Multi-line Text Field (Textarea) with Character Counter  (textarea+counter)
                    label: String,
                    required: Boolean,
                    pattern: String,
                    minLength: Number,
                    maxLength: Number,
                    min: Number,
                    max: Number,
                    step: Number,
                    rows: Number,
                    cols: Number,
                    value: String,
                    disabled: Boolean,
                    useNativeValidation: Boolean,
                    valid: Boolean,
                    helperTextContent: String,
                    //ripple: MDCRipple,
                    leadingIconAriaLabel: String,
                    trailingIconAriaLabel: String,
                    leadingIconContent: String,
                    trailingIconContent: String,
                    leftIcon: String,
                    rightIcon: String
                };
                TextField = __decorate([
                    omi_1.tag('m-text-field')
                ], TextField);
                return TextField;
            }(omi_1.WeElement));
            exports.default = TextField;
            /***/ 
        }),
        /***/ "./src/theme.ts": 
        /*!**********************!*\
          !*** ./src/theme.ts ***!
          \**********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            if (!document.querySelector('#__omim-theme-style')) {
                var style = document.createElement('style');
                style.id = '__omim-theme-style';
                style.textContent = "--mdc-theme-primary: #0052d9;\n  --mdc-theme-secondary: #1890ff;\n  --mdc-theme-error: #f5222d;\n  --mdc-theme-surface: #ffffff;\n  --mdc-theme-on-primary: #ffffff;\n  --mdc-theme-on-secondary: #ffffff;\n  --mdc-theme-on-error: #ffffff;\n  --mdc-theme-on-surface: #000000;\n  --mdc-theme-background: #ffffff;\n  --mdc-shape-small-component-radius: 4px;\n  --mdc-shape-medium-component-radius: 4px;\n  --mdc-shape-large-component-radius: 0px;\n  --mdc-typography--font-family: Roboto, sans-serif;\n  ";
                document.querySelector('head').append(style);
            }
            /***/ 
        }),
        /***/ "omi": 
        /*!******************************************************************************!*\
          !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
          \******************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;
            /***/ 
        })
        /******/ 
    })["default"];
});
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!document.querySelector('#__omim-theme-style')) {
    var style = document.createElement('style');
    style.id = '__omim-theme-style';
    style.textContent = "--mdc-theme-primary: #0052d9;\n  --mdc-theme-secondary: #1890ff;\n  --mdc-theme-error: #f5222d;\n  --mdc-theme-surface: #ffffff;\n  --mdc-theme-on-primary: #ffffff;\n  --mdc-theme-on-secondary: #ffffff;\n  --mdc-theme-on-error: #ffffff;\n  --mdc-theme-on-surface: #000000;\n  --mdc-theme-background: #ffffff;\n  --mdc-shape-small-component-radius: 4px;\n  --mdc-shape-medium-component-radius: 4px;\n  --mdc-shape-large-component-radius: 0px;\n  --mdc-typography--font-family: Roboto, sans-serif;\n  ";
    document.querySelector('head').append(style);
}


/***/ }),

/***/ "omi":
/*!******************************************************************************!*\
  !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=index.js.map
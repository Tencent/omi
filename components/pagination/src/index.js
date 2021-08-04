(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["OPagination"] = factory(require("omi"));
	else
		root["OPagination"] = factory(root["Omi"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_omi__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./src/index.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  color: rgba(0, 0, 0, 0.87); }\n\n* {\n  box-sizing: border-box; }\n\nul,\nli {\n  padding: 0;\n  margin: 0; }\n\nli {\n  display: inline-block;\n  min-width: 32px;\n  height: 32px;\n  vertical-align: middle;\n  line-height: 32px;\n  text-align: center;\n  margin: 0 3px 0 3px;\n  border-radius: 3px;\n  font-size: 12px;\n  margin-right: 2px; }\n\n.o-pager {\n  display: inline-block; }\n\nbutton {\n  width: 32px;\n  height: 32px;\n  appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  background: none;\n  border-radius: 3px;\n  cursor: pointer;\n  outline: none;\n  border-radius: 50%; }\n\nbutton:hover {\n  background-color: rgba(7, 193, 96, 0.1);\n  background-color: var(--o-primary-fade-lot, rgba(7, 193, 96, 0.1)); }\n\nbutton:not(disabled):active {\n  color: white;\n  background-color: #059048;\n  background-color: var(--o-primary-active, #059048); }\n\nbutton:disabled {\n  pointer-events: none;\n  border-color: #eee; }\n\n.active button:hover {\n  background-color: rgba(7, 193, 96, 0.618);\n  background-color: var(--o-primary-fade-little, rgba(7, 193, 96, 0.618)); }\n\n.active button {\n  color: white;\n  background-color: #07c160;\n  background-color: var(--o-primary, #07c160); }\n\n.more:after {\n  content: '...'; }\n\n.more {\n  border: none;\n  cursor: default; }\n\nsvg {\n  position: relative;\n  top: 2px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
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

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js??ref--4-3!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
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
var css = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.beforeRender = function () {
        this.pageNum = Math.ceil(this.props.total / this.props.pageSize);
    };
    Pagination.prototype.goto = function (index) {
        this.updateProps({
            currentPage: index
        });
        this.fire('change', index);
    };
    Pagination.prototype.render = function (props) {
        var arr = [], interval = this.getInterval();
        if (interval[0] > 0 && props.numEdge > 0) {
            var end = Math.min(props.numEdge, interval[0]);
            for (var i = 0; i < end; i++) {
                arr.push(this.getItem(i, i + 1));
            }
            if (props.numEdge < interval[0] && props.ellipseText) {
                arr.push(omi_1.h("li", { class: "o-icon more btn-quicknext o-icon-more" }));
            }
        }
        for (var i = interval[0]; i < interval[1]; i++) {
            arr.push(this.getItem(i, i + 1));
        }
        if (interval[1] < this.pageNum && props.numEdge > 0) {
            if (this.pageNum - props.numEdge > interval[1] && props.ellipseText) {
                arr.push(omi_1.h("li", { class: "o-icon more btn-quicknext o-icon-more" }));
            }
            var begin = Math.max(this.pageNum - props.numEdge, interval[1]);
            for (var i = begin; i < this.pageNum; i++) {
                arr.push(this.getItem(i, i + 1));
            }
        }
        return (omi_1.h("div", __assign({}, omi_1.extractClass(props, 'o-pagination is-background')),
            omi_1.h("ul", { class: "o-pager" },
                omi_1.h("li", { key: "prev" },
                    " ",
                    props.prevShow && this.getPrev(),
                    ' '),
                arr.map(function (p) {
                    return p;
                }),
                omi_1.h("li", { key: "next" },
                    " ",
                    props.nextShow && this.getNext())),
            ' '));
    };
    Pagination.prototype.getInterval = function () {
        var ne_half = Math.ceil(this.props.numDisplay / 2);
        var upper_limit = this.pageNum - this.props.numDisplay;
        var start = this.props.currentPage > ne_half
            ? Math.max(Math.min(this.props.currentPage - ne_half, upper_limit), 0)
            : 0;
        var end = this.props.currentPage > ne_half
            ? Math.min(this.props.currentPage + ne_half, this.pageNum)
            : Math.min(this.props.numDisplay, this.pageNum);
        return [start, end];
    };
    Pagination.prototype.getPrev = function () {
        var _this = this;
        if (this.props.currentPage === 0) {
            return (omi_1.h("button", { type: "button", class: "btn-prev", disabled: true },
                omi_1.h("svg", { viewBox: "64 64 896 896", class: "", "data-icon": "left", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" },
                    omi_1.h("path", { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" }))));
        }
        return (omi_1.h("button", { type: "button", class: "btn-prev", onclick: function (e) {
                _this.goto(_this.props.currentPage - 1);
            } },
            omi_1.h("svg", { viewBox: "64 64 896 896", class: "", "data-icon": "left", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" },
                omi_1.h("path", { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" }))));
    };
    Pagination.prototype.getNext = function () {
        var _this = this;
        if (this.props.currentPage === this.pageNum - 1) {
            return (omi_1.h("button", { type: "button", class: "btn-next", disabled: true },
                omi_1.h("svg", { viewBox: "64 64 896 896", class: "", "data-icon": "right", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" },
                    omi_1.h("path", { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" }))));
        }
        return (omi_1.h("button", { type: "button", class: "btn-next", onclick: function (e) {
                _this.goto(_this.props.currentPage + 1);
            } },
            omi_1.h("svg", { viewBox: "64 64 896 896", class: "", "data-icon": "right", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" },
                omi_1.h("path", { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" }))));
    };
    Pagination.prototype.getItem = function (pageIndex, text) {
        var _this = this;
        if (this.props.currentPage === pageIndex) {
            return omi_1.h("li", { class: "number active" },
                omi_1.h("button", null, text));
        }
        return (omi_1.h("li", { class: "number", onclick: function (e) {
                _this.goto(pageIndex);
            } },
            omi_1.h("button", null, text)));
    };
    Pagination.css = css;
    Pagination.defaultProps = {
        total: 0,
        pageSize: 10,
        numDisplay: 5,
        currentPage: 0,
        numEdge: 3,
        linkTo: '#',
        prevText: 'Prev',
        nextText: 'Next',
        ellipseText: '...',
        prevShow: true,
        nextShow: true
    };
    Pagination.propTypes = {
        total: Number,
        pageSize: Number,
        numDisplay: Number,
        currentPage: Number,
        numEdge: Number,
        linkTo: String,
        prevText: String,
        nextText: String,
        ellipseText: String,
        prevShow: Boolean,
        nextShow: Boolean
    };
    Pagination = __decorate([
        omi_1.tag('o-pagination')
    ], Pagination);
    return Pagination;
}(omi_1.WeElement));
exports.default = Pagination;


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
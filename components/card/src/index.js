(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["OCard"] = factory(require("omi"));
	else
		root["OCard"] = factory(root["Omi"]);
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
exports.push([module.i, ":host {\n  display: inline-block; }\n\n:host([block]) {\n  display: block; }\n\n.o-card {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #EFEFEF; }\n\n.o-card-medium {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #EFEFEF; }\n\n.o-card-small {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #EFEFEF; }\n\n.o-card-header {\n  min-height: 48px;\n  padding: 0 24px;\n  border-bottom: 1px solid #EFEFEF;\n  border-radius: 2px 2px 0 0; }\n\n.o-card-header-medium {\n  min-height: 42px;\n  padding: 0 18px;\n  border-bottom: 1px solid #EFEFEF;\n  border-radius: 2px 2px 0 0; }\n\n.o-card-header-small {\n  min-height: 36px;\n  padding: 0 12px;\n  border-bottom: 1px solid #EFEFEF;\n  border-radius: 2px 2px 0 0; }\n\n.o-card-title {\n  float: left;\n  padding: 16px 0;\n  font-weight: 500;\n  font-size: 18px; }\n\n.o-card-extra {\n  float: right;\n  margin-left: auto;\n  padding: 16px 0;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer; }\n\n.o-card-title-medium {\n  float: left;\n  padding: 10px 0;\n  font-weight: 500;\n  font-size: 17px; }\n\n.o-card-extra-medium {\n  float: right;\n  margin-left: auto;\n  padding: 10px 0;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer; }\n\n.o-card-title-small {\n  float: left;\n  padding: 10px 0;\n  font-weight: 500;\n  font-size: 16px; }\n\n.o-card-extra-small {\n  float: right;\n  margin-left: auto;\n  padding: 10px 0;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer; }\n\n.o-card-body {\n  margin: 12px 24px;\n  font-weight: 200;\n  font-size: 14px;\n  line-height: 1.6; }\n\n.o-card-body-medium {\n  margin: 11px 22px;\n  font-weight: 200;\n  font-size: 13px;\n  line-height: 1.4; }\n\n.o-card-body-small {\n  margin: 10px 20px;\n  font-weight: 200;\n  font-size: 12px;\n  line-height: 1.2; }\n\n.o-card-footer {\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  background-color: #fff; }\n\n.item.selected {\n  color: #07c160; }\n\n.item {\n  flex: 1;\n  color: rgba(0, 0, 0, 0.54);\n  padding: 6px 12px 8px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, padding-top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n\nbutton {\n  appearance: none;\n  -webkit-appearance: none;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  border-top: 1px solid #EFEFEF;\n  border-right: 1px solid #EFEFEF;\n  border-left: none;\n  border-bottom: none;\n  background-color: #fff; }\n\nbutton:hover {\n  appearance: none;\n  -webkit-appearance: none;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  border-top: 1px solid #EFEFEF;\n  border-right: 1px solid #EFEFEF;\n  border-left: none;\n  border-bottom: none;\n  background-color: #EFEFEF; }\n\n.icon {\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: block;\n  margin: 0 auto;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n\n.icon:hover {\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: block;\n  margin: 0 auto;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  color: #07C160;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n", ""]);

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
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.css = css;
        _this.clickHandler = function (item) {
            _this.fire('change', item);
            _this.update(true);
        };
        _this.handleMousemove = function (item) {
            if (item === "always") {
                (_this.css = css + ".o-card {\n        display: flex;\n        flex-direction: column;\n     \n        box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;\n        transition: all .3s;\n        z-index: 1;\n      }");
                return;
            }
            var hovercss = function () {
                switch (_this.props.size) {
                    case 'large':
                        (_this.css = css + ".o-card:hover {\n            display: flex;\n            flex-direction: column;\n           \n            box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;\n            transition: all .3s;\n            z-index: 1;\n          }");
                        break;
                    case 'medium':
                        (_this.css = css + ".o-card-medium:hover {\n            display: flex;\n            flex-direction: column;\n        \n            box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;\n            transition: all .3s;\n            z-index: 1;\n          }");
                        break;
                    case 'small':
                        (_this.css = css + ".o-card-small:hover {\n            display: flex;\n            flex-direction: column;\n        \n            box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;\n            transition: all .3s;\n            z-index: 1;\n          }");
                        break;
                    default:
                        (_this.css = css + ".o-card:hover {\n            display: flex;\n            flex-direction: column;\n          \n            box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;\n            transition: all .3s;\n            z-index: 1;\n          }");
                }
            };
            item && hovercss();
        };
        return _this;
    }
    Card.prototype.render = function (props) {
        var _a, _b, _c, _d, _e;
        var _this = this;
        return (omi_1.h("div", __assign({}, omi_1.extractClass(props, 'o-card', (_a = {},
            _a['o-card-' + props.size] = props.size,
            _a)), { onMousemove: this.handleMousemove(props.hoverable) }),
            omi_1.h("slot", { name: "cover" },
                omi_1.h("div", __assign({}, omi_1.extractClass(props, 'o-card-header', (_b = {},
                    _b['o-card-header-' + props.size] = props.size,
                    _b))),
                    omi_1.h("div", __assign({}, omi_1.extractClass(props, 'o-card-title', (_c = {},
                        _c['o-card-title-' + props.size] = props.size,
                        _c))), props.title),
                    omi_1.h("div", __assign({}, omi_1.extractClass(props, 'o-card-extra', (_d = {},
                        _d['o-card-extra-' + props.size] = props.size,
                        _d))),
                        omi_1.h("slot", { name: "extra" })))),
            omi_1.h("div", __assign({}, omi_1.extractClass(props, 'o-card-body', (_e = {},
                _e['o-card-body-' + props.size] = props.size,
                _e))),
                omi_1.h("slot", null)),
            props.actions ? (omi_1.h("div", { class: "o-card-footer" }, props.actions.map(function (item, index) {
                _this._iconTag = 'o-icon-' + item.icon;
                return omi_1.h("button", { onClick: function (_) { _this.clickHandler(item); }, className: "item" },
                    omi_1.h(_this._iconTag, { class: "icon" }));
            }))) : null));
    };
    Card.defaultProps = {
        title: '',
        hoverable: '',
        extra: ''
    };
    Card.propTypes = {
        title: String,
        hoverable: String,
        extra: String,
        actions: Array,
        size: String
    };
    Card = __decorate([
        omi_1.tag('o-card')
    ], Card);
    return Card;
}(omi_1.WeElement));
exports.default = Card;


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
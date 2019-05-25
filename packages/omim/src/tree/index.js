(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["MTree"] = factory(require("omi"));
	else
		root["MTree"] = factory(root["Omi"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tree/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/tree/index.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js??ref--4-2!./src/tree/index.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n  vertical-align: top;\n  margin-right: 3px;\n  display: inline-block;\n  line-height: 24px;\n  height: 24px;\n  max-width: 24px;\n  overflow: hidden; }\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\nli {\n  list-style: none;\n  margin: 0;\n  padding: 4px 0px;\n  white-space: nowrap; }\n\nul {\n  margin: 0;\n  padding: 0 0 0 18px; }\n\n.children {\n  transition: all .4s ease;\n  overflow: hidden; }\n\n.tree-item {\n  vertical-align: top; }\n\n.tree-item li {\n  margin-left: 10px; }\n\n.arrow {\n  vertical-align: top;\n  cursor: pointer;\n  height: 24px;\n  line-height: 24px;\n  display: inline-block; }\n\n.close > .arrow {\n  transform: rotate(-90deg); }\n\n.mdc-tree-title {\n  padding: 0 10px;\n  border-radius: 3px;\n  cursor: pointer;\n  height: 24px;\n  line-height: 24px;\n  display: inline-block;\n  vertical-align: top; }\n\n.text {\n  display: inline-block;\n  line-height: 24px;\n  height: 24px; }\n\n.mdc-tree-title:hover {\n  background-color: #cbebfc; }\n\n.mdc-tree-title.selected {\n  background-color: #bae7ff; }\n\n.tree-item,\n.arrow {\n  transition: all .4s ease; }\n\n.mdc-tree-checkbox-checked .mdc-tree-checkbox-inner::after {\n  position: absolute;\n  display: table;\n  border: 2px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  -webkit-transform: rotate(45deg) scale(1) translate(-50%, -50%);\n  -ms-transform: rotate(45deg) scale(1) translate(-50%, -50%);\n  transform: rotate(45deg) scale(1) translate(-50%, -50%);\n  opacity: 1;\n  -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;\n  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;\n  content: ' '; }\n\n.mdc-tree-checkbox-inner::after {\n  position: absolute;\n  top: 50%;\n  left: 21%;\n  display: table;\n  width: 5.71428571px;\n  height: 9.14285714px;\n  border: 2px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  -webkit-transform: rotate(45deg) scale(0) translate(-50%, -50%);\n  -ms-transform: rotate(45deg) scale(0) translate(-50%, -50%);\n  transform: rotate(45deg) scale(0) translate(-50%, -50%);\n  opacity: 0;\n  -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;\n  transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;\n  content: ' '; }\n\n.mdc-tree-checkbox-checked .mdc-tree-checkbox-inner {\n  background-color: #1890ff;\n  border-color: #1890ff; }\n\n.mdc-tree-checkbox-inner {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 16px;\n  height: 16px;\n  background-color: #fff;\n  border: 1px solid #d9d9d9;\n  border-radius: 2px;\n  border-collapse: separate;\n  -webkit-transition: all .3s;\n  transition: all .3s; }\n\n.mdc-tree-checkbox {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  -webkit-font-feature-settings: 'tnum';\n  font-feature-settings: 'tnum';\n  position: relative;\n  top: -0.09em;\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  vertical-align: middle;\n  outline: none;\n  cursor: pointer;\n  margin: 0 4px; }\n\n.mdc-tree-checkbox-disabled .mdc-tree-checkbox-inner {\n  background-color: #f5f5f5;\n  border-color: #d9d9d9 !important;\n  cursor: not-allowed; }\n\n.mdc-tree-checkbox-disabled.mdc-tree-checkbox-checked .mdc-tree-checkbox-inner::after {\n  border-color: rgba(0, 0, 0, 0.25);\n  -webkit-animation-name: none;\n  animation-name: none; }\n\n.mdc-tree-checkbox-indeterminate .mdc-tree-checkbox-inner::after {\n  top: 50%;\n  left: 50%;\n  width: 8px;\n  height: 8px;\n  background-color: #1890ff;\n  border: 0;\n  -webkit-transform: translate(-50%, -50%) scale(1);\n  -ms-transform: translate(-50%, -50%) scale(1);\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n  content: ' '; }\n", ""]);

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

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
if (typeof window === 'object') {
    window.OmimThemePrimary = window.OmimThemePrimary || '#0052d9';
    window.OmimThemeSecondary = window.OmimThemeSecondary || '#1890ff';
    window.OmimThemeError = window.OmimThemeError || '#f5222d';
    window.OmimThemeSurface = window.OmimThemeSurface || '#ffffff';
    window.OmimThemeOnPrimary = window.OmimThemeOnPrimary || '#ffffff';
    window.OmimThemeOnSecondary = window.OmimThemeOnSecondary || '#ffffff';
    window.OmimThemeOnError = window.OmimThemeOnError || '#ffffff';
    window.OmimThemeOnSurface = window.OmimThemeOnSurface || '#000000';
    window.OmimThemeBackground = window.OmimThemeBackground || '#ffffff';
    window.OmimShapeSmallComponentRadius = window.OmimShapeSmallComponentRadius || '4px';
    window.OmimShapeMediumComponentRadius = window.OmimShapeMediumComponentRadius || '4px';
    window.OmimShapeLargeComponentRadius = window.OmimShapeLargeComponentRadius || '0px';
    window.OmimTypographyFontFamily = window.OmimTypographyFontFamily || 'Roboto, sans-serif;';
}
function theme() {
    if (typeof window === 'object') {
        return "* {\n  --mdc-theme-primary: " + window.OmimThemePrimary + ";\n  --mdc-theme-secondary: " + window.OmimThemeSecondary + ";\n  --mdc-theme-error: " + window.OmimThemeError + ";\n  --mdc-theme-surface: " + window.OmimThemeSurface + ";\n\n  --mdc-theme-on-primary: " + window.OmimThemeOnPrimary + ";\n  --mdc-theme-on-secondary: " + window.OmimThemeOnSecondary + ";\n  --mdc-theme-on-error: " + window.OmimThemeOnError + ";\n  --mdc-theme-on-surface: " + window.OmimThemeOnSurface + ";\n  --mdc-theme-background: " + window.OmimThemeBackground + ";\n\n  --mdc-shape-small-component-radius: " + window.OmimShapeSmallComponentRadius + ";\n  --mdc-shape-medium-component-radius: " + window.OmimShapeMediumComponentRadius + ";\n  --mdc-shape-large-component-radius: " + window.OmimShapeLargeComponentRadius + ";\n  --mdc-typography--font-family: " + window.OmimTypographyFontFamily + ";\n}";
    }
}
exports.theme = theme;


/***/ }),

/***/ "./src/tree/index.scss":
/*!*****************************!*\
  !*** ./src/tree/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js??ref--4-2!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/tree/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/tree/index.tsx":
/*!****************************!*\
  !*** ./src/tree/index.tsx ***!
  \****************************/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var css = __webpack_require__(/*! ./index.scss */ "./src/tree/index.scss");
//@ts-ignore
var theme_ts_1 = __webpack_require__(/*! ../theme.ts */ "./src/theme.ts");
var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._preSelected = null;
        _this.toggle = function (id, open) {
            _this.fire('toggle', { id: id, open: open });
        };
        _this._check = function (node, state) {
            if (node.disabled)
                return;
            _this.fire('check', { id: node.id, checked: !node.checked, state: state });
        };
        _this.onNodeClick = function (id) {
            _this.fire('nodeClick', { id: id, pre: _this._preSelected });
        };
        return _this;
    }
    Tree.prototype.renderNode = function (node) {
        var _this = this;
        if (node.selected) {
            this._preSelected = node.id;
        }
        var state;
        if (this.props.checkbox && node.children && node.children.length > 0) {
            state = this._isChecked(node, { checked: 0, unchecked: 0 }, true);
        }
        return omi_1.h("ul", null,
            omi_1.h("li", { class: omi_1.classNames('tree-item', {
                    'close': node.close
                }) },
                node.children && node.children.length > 0 && omi_1.h("svg", { onClick: function (_) { return _this.toggle(node.id, !node.close); }, viewBox: "0 0 1024 1024", class: "arrow", "data-icon": "caret-down", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false" },
                    omi_1.h("path", { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" })),
                this.props.checkbox && omi_1.h("span", { onClick: function (_) { return _this._check(node, state); }, class: omi_1.classNames('mdc-tree-checkbox', {
                        'mdc-tree-checkbox-disabled': node.disabled,
                        'mdc-tree-checkbox-checked': (node.children && node.children.length > 0) ? state === 'checked' : node.checked,
                        'mdc-tree-checkbox-indeterminate': (node.children && node.children.length > 0) ? state === 'indeterminate' : false
                    }) },
                    omi_1.h("span", { class: "mdc-tree-checkbox-inner" })),
                omi_1.h("span", { onClick: function (_) { return _this.onNodeClick(node.id); }, class: omi_1.classNames('mdc-tree-title', {
                        'selected': node.selected
                    }) },
                    node.icon && omi_1.h("i", { class: 'material-icons' }, node.icon),
                    omi_1.h("span", { class: 'text' }, node.title)),
                omi_1.h("div", { class: 'children', style: "height: " + (node.close ? 0 : (node.children ? (this._getChildCount(node)) * 32 : 0)) + "px;" },
                    " ",
                    node.children && node.children.length > 0 && node.children.map(function (_) { return _this.renderNode(_); }))));
    };
    Tree.prototype._isChecked = function (node, obj, tag) {
        if (!node.children)
            return;
        for (var i = 0, len = node.children.length; i < len; i++) {
            var child = node.children[i];
            if (child.children && child.children.length === 0 || !child.children) {
                if (!child.disabled) {
                    if (child.checked) {
                        obj.checked++;
                    }
                    else {
                        obj.unchecked++;
                    }
                }
            }
            if (obj.unchecked && obj.checked) {
                break;
            }
            this._isChecked(child, obj, false);
        }
        if (tag) {
            if (obj.unchecked && obj.checked) {
                return 'indeterminate';
            }
            if (obj.unchecked === 0)
                return 'checked';
            return 'unchecked';
        }
    };
    Tree.prototype._getChildCount = function (node) {
        var _this = this;
        var count = 0;
        if (node.children && !node.close) {
            count += node.children.length;
            node.children.forEach(function (child) {
                count += _this._getChildCount(child);
            });
        }
        return count;
    };
    Tree.prototype.render = function (props) {
        return this.renderNode(props.node);
    };
    Tree.css = theme_ts_1.theme() + css;
    Tree.propTypes = {
        checkbox: Boolean,
        node: Object
    };
    Tree = __decorate([
        omi_1.tag('m-tree')
    ], Tree);
    return Tree;
}(omi_1.WeElement));
exports.default = Tree;


/***/ }),

/***/ "omi":
/*!******************************************************************************!*\
  !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map
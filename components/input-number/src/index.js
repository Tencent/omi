(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["OInputNumber"] = factory(require("omi"));
	else
		root["OInputNumber"] = factory(root["Omi"]);
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
exports.push([module.i, ".o-input-number {\n  position: relative;\n  display: inline-block; }\n\n.o-input-number-medium {\n  height: 40px;\n  width: 172px; }\n\n.o-input-number-small {\n  height: 34px;\n  width: 146px; }\n\n.o-input-number-mini {\n  height: 30px;\n  width: 130px; }\n\n.o-button,\n.o-input {\n  position: absolute;\n  height: 100%;\n  line-height: 100%;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid #dcdfe6;\n  color: #606266;\n  -webkit-appearance: none;\n  text-align: center;\n  box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  font-weight: 500;\n  transition: .1s;\n  vertical-align: top; }\n\n.o-button {\n  width: 25%;\n  line-height: 15%;\n  background-color: #f3faf1; }\n\n.o-input {\n  left: 25%;\n  width: 50%; }\n\n.o-button-add {\n  right: 0;\n  border-bottom-right-radius: 0.3em;\n  border-top-right-radius: 0.3em;\n  border-left: none; }\n\n.o-button-sub {\n  left: 0;\n  border-bottom-left-radius: 0.3em;\n  border-top-left-radius: 0.3em;\n  border-right: none; }\n\n.o-input-number.is-disabled .o-input,\n.o-input-number.is-disabled:hover .o-input,\n.o-input-number.is-disabled .o-button,\n.o-input-number.is-disabled:hover .o-button {\n  background-color: #F5F7FA;\n  border-color: #E4E7ED;\n  color: #E4E7ED;\n  pointer-events: none; }\n\n.o-input-number.is-disabled {\n  cursor: not-allowed; }\n\n.o-input-number:hover .o-input {\n  color: #07c160;\n  color: var(--o-primary, #07c160);\n  border-top-color: #07c160;\n  border-top-color: var(--o-primary, #07c160);\n  border-bottom-color: #07c160;\n  border-bottom-color: var(--o-primary, #07c160); }\n\n.o-input-number:hover .o-button {\n  background-color: rgba(7, 193, 96, 0.1);\n  background-color: var(--o-primary-fade-lot, rgba(7, 193, 96, 0.1));\n  color: #07c160;\n  color: var(--o-primary, #07c160);\n  border-color: #07c160;\n  border-color: var(--o-primary, #07c160); }\n\n.o-input-medium,\n.o-button-medium {\n  font-size: 20px; }\n\n.o-input-small,\n.o-button-small {\n  font-size: 18px; }\n\n.o-input-mini,\n.o-button-mini {\n  font-size: 16px; }\n\n.o-input-right {\n  left: 0;\n  width: 75%;\n  border-radius: 0.3em 0 0 0.3em; }\n\n.o-button-add-right {\n  right: 0;\n  top: 0;\n  height: 50%;\n  border-radius: 0 0.3em 0 0; }\n\n.o-button-sub-right {\n  margin-left: 75%;\n  bottom: 0;\n  height: 50%;\n  border-width: 0 1px 1px 0;\n  border-right: 1px solid #dcdfe6;\n  border-radius: 0 0 0.3em 0; }\n\n.o-input-number:hover .o-input-right {\n  border-left-color: #07c160;\n  border-left-color: var(--o-primary, #07c160); }\n\n.o-input-number:hover .o-button-sub-right {\n  border-right-color: #07c160;\n  border-right-color: var(--o-primary, #07c160);\n  border-top-color: #dcdfe6; }\n\n.o-input-number:hover .o-button-add-right {\n  border-bottom-color: #dcdfe6; }\n\n.o-input-left {\n  right: 0;\n  width: 75%;\n  border-radius: 0 0.3em 0.3em 0; }\n\n.o-button-add-left {\n  left: 0;\n  top: 0;\n  height: 50%;\n  border-left: 1px solid #dcdfe6;\n  border-radius: 0.3em 0 0 0;\n  border-width: 1px 0 1px 1px; }\n\n.o-button-sub-left {\n  margin-right: 75%;\n  bottom: 0;\n  height: 50%;\n  border-width: 0 1px 1px 1px;\n  border-radius: 0 0 0 0.3em; }\n\n.o-input-number:hover .o-input-left {\n  border-right-color: #07c160;\n  border-right-color: var(--o-primary, #07c160); }\n\n.o-input-number:hover .o-button-sub-left {\n  border-left-color: #07c160;\n  border-left-color: var(--o-primary, #07c160);\n  border-top-color: #dcdfe6; }\n\n.o-input-number:hover .o-button-sub-disabled,\n.o-button-sub-disabled,\n.o-input-number:hover .o-button-add-disabled,\n.o-button-add-disabled {\n  color: #E4E7ED;\n  cursor: not-allowed; }\n", ""]);

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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var css = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
var InputNumber = /** @class */ (function (_super) {
    __extends(InputNumber, _super);
    function InputNumber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onGetValue = function () {
            return _this.props.value;
        };
        _this._onSetValue = function (value) {
            // console.log('pre',this.preValue)
            // console.log(this.__$value)
            if (_this.props.strictly == true && ((Math.abs(_this.preValue - _this.__$value) % _this.props.step != 0))) { // program should correct the number when input is not right under the mode of strict.
                _this.inputErro = true;
                _this.valueAdd = _this.preValue + _this.props.step * 2;
                _this.valueSub = _this.preValue - _this.props.step;
            }
            _this.__$value = value;
            _this.props.value = value;
            _this.setAttribute('value', value);
            //precision
            if (_this.props.precision != 0) {
                var s = value.toString();
                var rs = s.indexOf('.');
                if (rs < 0) {
                    rs = s.length;
                    s += '.';
                }
                while (s.length <= rs + _this.props.precision) {
                    s += '0';
                }
                _this.setAttribute('value', Number.parseFloat(s).toFixed(_this.props.precision));
            }
            else {
                _this.setAttribute('value', Number.parseFloat(value).toFixed(_this.props.precision));
            }
        };
        _this.handleInput = function (evt) {
            evt.stopPropagation();
            _this.__$value = evt.target.value;
            if (parseFloat(evt.target.value) >= _this.props.min && parseFloat(evt.target.value) <= _this.props.max) {
                _this._onSetValue(evt.target.value);
                _this.fire('input', _this.props.value);
            }
        };
        _this.handleChange = function (evt) {
            _this.__$value = evt.target.value;
            _this.props.value = evt.target.value;
            _this.fire('change', _this.props.value);
        };
        _this.add = function () {
            var value = Number(_this._onGetValue());
            _this.preValue = value;
            if (value + _this.props.step <= _this.props.max) {
                value += _this.props.step;
                _this._onSetValue(value);
            }
            if (_this.inputErro == true) {
                _this._onSetValue(_this.valueAdd);
                _this.inputErro = false;
            }
        };
        _this.subtraction = function () {
            var value = Number(_this._onGetValue());
            _this.preValue = value;
            if (value - _this.props.step >= _this.props.min) {
                value -= _this.props.step;
                _this._onSetValue(value);
            }
            if (_this.inputErro == true) {
                _this._onSetValue(_this.valueSub);
                _this.inputErro = false;
            }
        };
        return _this;
    }
    InputNumber.prototype.install = function () {
        this.__$value = Number(this.props.value);
        this.preValue = Number(this.props.value);
        Object.defineProperty(this, 'value', {
            get: this._onGetValue,
            set: this._onSetValue
        });
    };
    InputNumber.prototype.render = function (props) {
        var _a, _b, _c, _d;
        var value = props.value, style = props.style, size = props.size, disabled = props.disabled, step = props.step, max = props.max, min = props.min, strictly = props.strictly, precision = props.precision, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, otherProps = __rest(props, ["value", "style", "size", "disabled", "step", "max", "min", "strictly", "precision", "onMouseEnter", "onMouseLeave"]);
        return (omi_1.h("div", __assign({}, omi_1.extractClass(props, 'o-input-number', (_a = {
                'is-disabled': this.props.disabled
            },
            _a['o-input-number-' + props.size] = props.size,
            _a)), { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }),
            omi_1.h("button", __assign({}, omi_1.extractClass(props, 'o-button', 'o-button-sub', (_b = {
                    'is-disabled': this.props.disabled
                },
                _b['o-button-' + props.size] = props.size,
                _b['o-button-sub-' + props.style] = props.style,
                _b['o-button-sub-disabled'] = parseFloat(this.props.value) - this.props.step < this.props.min,
                _b)), { onClick: this.subtraction }), "-"),
            omi_1.h("input", __assign({}, omi_1.extractClass(props, 'o-input', (_c = {},
                _c['o-input-' + props.size] = props.size,
                _c['o-input-' + props.style] = props.style,
                _c)), { value: Number.parseFloat(props.value).toFixed(this.props.precision), size: props.size, onInput: this.handleInput, onChange: this.handleChange })),
            omi_1.h("button", __assign({}, omi_1.extractClass(props, 'o-button', 'o-button-add', (_d = {
                    'is-disabled': this.props.disabled
                },
                _d['o-button-' + props.size] = props.size,
                _d['o-button-add-' + props.style] = props.style,
                _d['o-button-add-disabled'] = parseFloat(this.props.value) + this.props.step > this.props.max,
                _d)), { onClick: this.add }), "+")));
    };
    InputNumber.css = css;
    InputNumber.defaultProps = {
        value: '1',
        size: 'medium',
        style: 'justify',
        step: 1,
        strictly: false,
        disabled: false,
        max: Number.MAX_VALUE,
        min: 1,
        precision: 0
    };
    InputNumber.propTypes = {
        value: String,
        size: String,
        style: String,
        step: Number,
        strictly: Boolean,
        disabled: Boolean,
        max: Number,
        min: Number,
        precision: Number
    };
    InputNumber = __decorate([
        omi_1.tag('o-input-number')
    ], InputNumber);
    return InputNumber;
}(omi_1.WeElement));
exports.default = InputNumber;


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
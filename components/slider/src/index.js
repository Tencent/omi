(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["OSlider"] = factory(require("omi"));
	else
		root["OSlider"] = factory(root["Omi"]);
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
exports.push([module.i, "@use 'sass:math';\n:host {\n  display: -ms-grid;\n  display: grid; }\n\n.slider-container {\n  position: relative;\n  width: 100%;\n  height: 50px; }\n\n.slider-container .slider-track {\n  width: 100%;\n  position: relative;\n  margin: 5px;\n  height: 12.5px;\n  background-color: #ffffff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  border: 2px solid #07c160;\n  transition: background-color 200ms;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  outline: none;\n  margin: auto;\n  z-index: -1; }\n\n.slider-container .o-slider {\n  width: 100%;\n  height: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background: transparent;\n  z-index: 1;\n  pointer-events: none; }\n  .slider-container .o-slider:focus {\n    outline: none; }\n  .slider-container .o-slider::-webkit-slider-runnable-track {\n    -webkit-appearance: none;\n    height: 12.5px; }\n  .slider-container .o-slider::-moz-range-track {\n    -moz-appearance: none;\n    height: 12.5px; }\n  .slider-container .o-slider::-ms-track {\n    appearance: none;\n    height: 12.5px; }\n  .slider-container .o-slider::-webkit-slider-thumb {\n    position: relative;\n    height: 31.25px;\n    width: 31.25px;\n    background-color: #07c160;\n    transition: background-color 150ms;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    top: 50%;\n    margin-top: -17.625px;\n    pointer-events: auto;\n    z-index: 2;\n    -webkit-appearance: none; }\n    .slider-container .o-slider::-webkit-slider-thumb:hover, .slider-container .o-slider::-webkit-slider-thumb:focus {\n      background-color: #059048; }\n  .slider-container .o-slider::-moz-range-thumb {\n    position: relative;\n    height: 31.25px;\n    width: 31.25px;\n    background-color: #07c160;\n    transition: background-color 150ms;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    top: 50%;\n    margin-top: -17.625px;\n    pointer-events: auto;\n    z-index: 2;\n    -webkit-appearance: none; }\n    .slider-container .o-slider::-moz-range-thumb:hover, .slider-container .o-slider::-moz-range-thumb:focus {\n      background-color: #059048; }\n  .slider-container .o-slider::-ms-thumb {\n    position: relative;\n    height: 31.25px;\n    width: 31.25px;\n    background-color: #07c160;\n    transition: background-color 150ms;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    top: 50%;\n    margin-top: -17.625px;\n    pointer-events: auto;\n    z-index: 2;\n    appearance: none; }\n    .slider-container .o-slider::-ms-thumb:hover, .slider-container .o-slider::-ms-thumb:focus {\n      background-color: #059048; }\n\n.is-round .slider-track {\n  border-radius: 8px; }\n\n.is-round .o-slider::-webkit-slider-thumb {\n  outline-offset: -10px;\n  border-radius: 50%;\n  -webkit-appearance: none; }\n  .is-round .o-slider::-webkit-slider-thumb:hover, .is-round .o-slider::-webkit-slider-thumb:focus {\n    outline-offset: -12px; }\n\n.is-round .o-slider::-moz-range-thumb {\n  outline-offset: -10px;\n  border-radius: 50%;\n  -webkit-appearance: none; }\n  .is-round .o-slider::-moz-range-thumb:hover, .is-round .o-slider::-moz-range-thumb:focus {\n    outline-offset: -12px; }\n\n.is-round .o-slider::-ms-thumb {\n  outline-offset: -10px;\n  border-radius: 50%;\n  appearance: none; }\n  .is-round .o-slider::-ms-thumb:hover, .is-round .o-slider::-ms-thumb:focus {\n    outline-offset: -12px; }\n\n.is-disabled .slider-track {\n  border-color: #c0c4cc; }\n\n.is-disabled .o-slider::-webkit-slider-thumb {\n  position: relative;\n  height: 31.25px;\n  width: 31.25px;\n  background-color: #07c160;\n  transition: background-color 150ms;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  top: 50%;\n  margin-top: -17.625px;\n  pointer-events: auto;\n  z-index: 2;\n  pointer-events: none;\n  cursor: none;\n  background-color: #c0c4cc;\n  -webkit-appearance: none; }\n  .is-disabled .o-slider::-webkit-slider-thumb:hover, .is-disabled .o-slider::-webkit-slider-thumb:focus {\n    background-color: #059048; }\n\n.is-disabled .o-slider::-moz-range-thumb {\n  position: relative;\n  height: 31.25px;\n  width: 31.25px;\n  background-color: #07c160;\n  transition: background-color 150ms;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  top: 50%;\n  margin-top: -17.625px;\n  pointer-events: auto;\n  z-index: 2;\n  pointer-events: none;\n  cursor: none;\n  background-color: #c0c4cc;\n  -webkit-appearance: none; }\n  .is-disabled .o-slider::-moz-range-thumb:hover, .is-disabled .o-slider::-moz-range-thumb:focus {\n    background-color: #059048; }\n\n.is-disabled .o-slider::-ms-thumb {\n  position: relative;\n  height: 31.25px;\n  width: 31.25px;\n  background-color: #07c160;\n  transition: background-color 150ms;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  top: 50%;\n  margin-top: -17.625px;\n  pointer-events: auto;\n  z-index: 2;\n  pointer-events: none;\n  cursor: none;\n  background-color: #c0c4cc;\n  appearance: none; }\n  .is-disabled .o-slider::-ms-thumb:hover, .is-disabled .o-slider::-ms-thumb:focus {\n    background-color: #059048; }\n\n.is-vertical {\n  transform: rotate(-90deg); }\n", ""]);

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
var OSlider = /** @class */ (function (_super) {
    __extends(OSlider, _super);
    function OSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sliderMax = _this.props.max;
        _this.handleSliderOne = function (evt) {
            var first_value = parseInt(_this.rootNode.children[0].value);
            if (first_value <= _this.__$second_value || _this.__$second_value === null) {
                //  if the slider 1 has not exceeded slider2 or it is a single range slider
                //  assign value straight away
                _this.__$value = first_value;
            }
            if (_this.__$second_value === null) {
                _this.fire('change', _this.__$value);
            }
            else {
                _this.fire('change', [_this.__$value, _this.__$second_value]);
            }
            _this.fillColor();
            _this.update();
        };
        _this.handleSliderTwo = function (evt) {
            var second_value = parseInt(_this.rootNode.children[1].value);
            //we only have one case if slider two exists
            if (second_value >= _this.__$value) {
                _this.__$second_value = second_value;
            }
            _this.fire('change', [_this.__$value, _this.__$second_value]);
            _this.fillColor();
            _this.update();
        };
        _this.fillColor = function () {
            var percent1 = _this.__$second_value !== null ? (_this.__$value / _this.props.max) * 100 : 0;
            var percent2 = _this.__$second_value !== null
                ? (_this.__$second_value / _this.props.max) * 100
                : (_this.__$value / _this.props.max) * 100;
            var lowerColor = '#07c160';
            var upperColor = '#ffffff';
            if (_this.props.disabled) {
                lowerColor = '#c0c4cc';
            }
            _this.__$second_value !== null
                ? (_this.sliderTrack.style.background = "linear-gradient(to right, " + upperColor + " " + percent1 + "% , " + lowerColor + " " + percent1 + "% , " + lowerColor + " " + percent2 + "%, " + upperColor + " " + percent2 + "%)")
                : (_this.sliderTrack.style.background = "linear-gradient(to right, " + lowerColor + " " + percent1 + "% , " + lowerColor + " " + percent1 + "% , " + lowerColor + " " + percent2 + "%, " + upperColor + " " + percent2 + "%)");
        };
        return _this;
    }
    OSlider.prototype.install = function () {
        this.__$value = this.props.value;
        this.props.range === 'double'
            ? (this.__$second_value = this.props.second_value)
            : (this.__$second_value = null);
    };
    OSlider.prototype.installed = function () {
        this.fillColor();
        this.update();
    };
    OSlider.prototype.render = function (props) {
        var _this = this;
        var cls = omi_1.extractClass(props, 'slider-container', {
            'is-vertical': props.orient === 'vertical',
            'is-round': props.shape === 'round',
            'is-disabled': props.disabled,
        });
        return (omi_1.h("div", __assign({}, cls, { ref: function (e) {
                _this.rootNode = e;
            } }),
            omi_1.h("input", { class: "o-slider", type: "range", min: props.min, max: props.max, value: this.__$value, onInput: this.handleSliderOne, id: "slider-1", ref: function (e) {
                    _this.sliderOne = e;
                } }),
            this.__$second_value !== null && (omi_1.h("input", { class: "o-slider", type: "range", min: props.min, max: props.max, value: this.__$second_value, onInput: this.handleSliderTwo, id: "slider-2", ref: function (e) {
                    _this.sliderTwo = e;
                } })),
            omi_1.h("div", { class: "slider-track", ref: function (e) {
                    _this.sliderTrack = e;
                } })));
    };
    OSlider.css = css;
    OSlider.defaultProps = {
        //default a single square range slider
        min: 0,
        max: 100,
        step: 1,
        value: 0,
        second_value: 100,
        range: 'single',
        orient: 'horizontal',
        shape: 'square',
        disabled: false,
    };
    OSlider.propTypes = {
        min: Number,
        max: Number,
        step: Number,
        value: Number,
        second_value: Number,
        range: String,
        orient: String,
        shape: String,
        disabled: Boolean,
    };
    OSlider = __decorate([
        omi_1.tag('o-slider')
    ], OSlider);
    return OSlider;
}(omi_1.WeElement));
exports.default = OSlider;


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
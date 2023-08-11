(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["OColorPicker"] = factory(require("omi"));
	else
		root["OColorPicker"] = factory(root["Omi"]);
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

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.4@resolve-url-loader/index.js!./node_modules/_sass-loader@10.3.1@sass-loader/dist/cjs.js?!./src/index.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_resolve-url-loader@3.1.4@resolve-url-loader!./node_modules/_sass-loader@10.3.1@sass-loader/dist/cjs.js??ref--4-3!./src/index.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/_sass-loader@10.3.1@sass-loader/dist/cjs.js):\nValidationError: Invalid options object. Sass Loader has been initialized using an options object that does not match the API schema.\n - options has an unknown property 'includePaths'. These properties are valid:\n   object { implementation?, sassOptions?, additionalData?, sourceMap?, webpackImporter? }\n    at validate (/Users/dntzhang/Documents/github/omi/components/color-picker/node_modules/_schema-utils@3.1.1@schema-utils/dist/validate.js:105:11)\n    at Object.loader (/Users/dntzhang/Documents/github/omi/components/color-picker/node_modules/_sass-loader@10.3.1@sass-loader/dist/index.js:30:29)");

/***/ }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.4@resolve-url-loader/index.js!./node_modules/_sass-loader@10.3.1@sass-loader/dist/cjs.js?!./src/scss/pickr.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_resolve-url-loader@3.1.4@resolve-url-loader!./node_modules/_sass-loader@10.3.1@sass-loader/dist/cjs.js??ref--4-3!./src/scss/pickr.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/_sass-loader@10.3.1@sass-loader/dist/cjs.js):\nValidationError: Invalid options object. Sass Loader has been initialized using an options object that does not match the API schema.\n - options has an unknown property 'includePaths'. These properties are valid:\n   object { implementation?, sassOptions?, additionalData?, sourceMap?, webpackImporter? }\n    at validate (/Users/dntzhang/Documents/github/omi/components/color-picker/node_modules/_schema-utils@3.1.1@schema-utils/dist/validate.js:105:11)\n    at Object.loader (/Users/dntzhang/Documents/github/omi/components/color-picker/node_modules/_sass-loader@10.3.1@sass-loader/dist/index.js:30:29)");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../node_modules/_css-loader@1.0.1@css-loader!../node_modules/_resolve-url-loader@3.1.4@resolve-url-loader!../node_modules/_sass-loader@10.3.1@sass-loader/dist/cjs.js??ref--4-3!./index.scss */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.4@resolve-url-loader/index.js!./node_modules/_sass-loader@10.3.1@sass-loader/dist/cjs.js?!./src/index.scss");

        if (result && result.__esModule) {
            result = result.default;
        }

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
var pickr_js_1 = __webpack_require__(/*! ./js/pickr.js */ "./src/js/pickr.js");
var ColorPicker = /** @class */ (function (_super) {
    __extends(ColorPicker, _super);
    function ColorPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorPicker.prototype.installed = function () {
        var _this = this;
        var picker = pickr_js_1.default.create({
            el: this.shadowRoot.querySelector('.picker'),
            inline: this.props.inline,
            default: this.props.default,
            useAsButton: !this.props.button,
            swatches: this.props.swatches,
            width: this.props.width,
            components: {
                // Main components
                preview: this.props.preview,
                opacity: this.props.opacity,
                hue: this.props.hue,
                // Input / output Options
                interaction: {
                    hex: this.props.hex,
                    rgba: this.props.rgba,
                    hsla: this.props.hsla,
                    hsva: this.props.hsva,
                    cmyk: this.props.cmyk,
                    input: this.props.input,
                    clear: this.props.clear,
                    save: this.props.save
                }
            },
            strings: this.props.strings
        });
        picker.on('init', function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            //this.picker.show()
            _this.fire('init', args[0]);
        }).on('save', function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.fire('save', {
                color: args[0].toHEXA().toString(),
                colorObject: args[0]
            });
        }).on('change', function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.fire('change', {
                color: args[0].toHEXA().toString(),
                colorObject: args[0]
            });
        }).on('swatchselect', function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.fire('swatch-select', {
                color: args[0].toHEXA().toString(),
                colorObject: args[0]
            });
        });
        this.picker = picker;
    };
    ColorPicker.prototype.setColor = function (color) {
        return this.picker.setColor(color);
    };
    ColorPicker.prototype.render = function (props) {
        return (omi_1.h("div", __assign({}, omi_1.extractClass(props, 'o-color-picker')),
            omi_1.h("div", { class: 'picker' })));
    };
    ColorPicker.css = css;
    ColorPicker.defaultProps = {
        button: true,
        preview: true,
        opacity: true,
        hue: true,
        hex: true,
        rgba: true,
        hsla: true,
        hsva: false,
        input: true,
        clear: true,
        save: true,
        cmyk: false,
        default: '#07c160',
        swatches: [],
        inline: true,
        strings: {
            save: 'Save',
            clear: 'Clear' // Default for clear button
        }
    };
    ColorPicker.propTypes = {
        button: Boolean,
        preview: Boolean,
        opacity: Boolean,
        hue: Boolean,
        hex: Boolean,
        rgba: Boolean,
        hsla: Boolean,
        hsva: Boolean,
        input: Boolean,
        clear: Boolean,
        save: Boolean,
        cmyk: Boolean,
        default: String,
        swatches: Array,
        inline: Boolean,
        strings: Object,
        width: String
    };
    ColorPicker = __decorate([
        omi_1.tag('o-color-picker')
    ], ColorPicker);
    return ColorPicker;
}(omi_1.WeElement));
exports.default = ColorPicker;


/***/ }),

/***/ "./src/js/libs/moveable.js":
/*!*********************************!*\
  !*** ./src/js/libs/moveable.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(/*! ../utils/utils */ "./src/js/utils/utils.js");
function Moveable(opt) {
    var that = {
        // Assign default values
        options: Object.assign({
            lockX: false,
            lockY: false,
            onchange: function () { return 0; }
        }, opt),
        _tapstart: function (evt) {
            _.on(document, ['mouseup', 'touchend', 'touchcancel'], that._tapstop);
            _.on(document, ['mousemove', 'touchmove'], that._tapmove);
            // Prevent default touch event
            evt.preventDefault();
            // Trigger
            that._tapmove(evt);
        },
        _tapmove: function (evt) {
            var options = that.options, cache = that.cache;
            var element = options.element;
            var b = that.options.wrapper.getBoundingClientRect();
            var x = 0, y = 0;
            if (evt) {
                var touch = evt && evt.touches && evt.touches[0];
                x = evt ? (touch || evt).clientX : 0;
                y = evt ? (touch || evt).clientY : 0;
                // Reset to bounds
                if (x < b.left)
                    x = b.left;
                else if (x > b.left + b.width)
                    x = b.left + b.width;
                if (y < b.top)
                    y = b.top;
                else if (y > b.top + b.height)
                    y = b.top + b.height;
                // Normalize
                x -= b.left;
                y -= b.top;
            }
            else if (cache) {
                x = cache.x * b.width;
                y = cache.y * b.height;
            }
            if (!options.lockX) {
                element.style.left = "calc(" + x / b.width * 100 + "% - " + element.offsetWidth / 2 + "px)";
            }
            if (!options.lockY) {
                element.style.top = "calc(" + y / b.height * 100 + "% - " + element.offsetWidth / 2 + "px)";
            }
            that.cache = { x: x / b.width, y: y / b.height };
            options.onchange(x, y);
        },
        _tapstop: function () {
            _.off(document, ['mouseup', 'touchend', 'touchcancel'], that._tapstop);
            _.off(document, ['mousemove', 'touchmove'], that._tapmove);
        },
        trigger: function () {
            that._tapmove();
        },
        update: function (x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var wrapperRect = that.options.wrapper.getBoundingClientRect();
            that._tapmove({
                clientX: wrapperRect.left + x,
                clientY: wrapperRect.top + y
            });
        },
        destroy: function () {
            var options = that.options, _tapstart = that._tapstart;
            _.off([options.wrapper, options.element], 'mousedown', _tapstart);
            _.off([options.wrapper, options.element], 'touchstart', _tapstart, {
                passive: false
            });
        }
    };
    // Initilize
    var options = that.options, _tapstart = that._tapstart;
    _.on([options.wrapper, options.element], 'mousedown', _tapstart);
    _.on([options.wrapper, options.element], 'touchstart', _tapstart, {
        passive: false
    });
    return that;
}
exports.default = Moveable;


/***/ }),

/***/ "./src/js/libs/nanopop.js":
/*!********************************!*\
  !*** ./src/js/libs/nanopop.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Micro positioning-engine
 * @param el
 * @param reference
 * @param pos
 * @param padding
 * @returns {{update(): void}}
 * @constructor
 */
function Nanopop(_a) {
    var el = _a.el, reference = _a.reference, pos = _a.pos, _b = _a.padding, padding = _b === void 0 ? 8 : _b;
    var vBehaviour = { start: 'sme', middle: 'mse', end: 'ems' };
    var hBehaviour = { top: 'tb', right: 'rl', bottom: 'bt', left: 'lr' };
    var _c = pos.split('-'), position = _c[0], _d = _c[1], variant = _d === void 0 ? 'middle' : _d;
    var isVertical = (position === 'top' || position === 'bottom');
    return {
        update: function () {
            var rb = reference.getBoundingClientRect();
            var eb = el.getBoundingClientRect();
            var positions = isVertical ? {
                t: rb.top - eb.height - padding,
                b: rb.bottom + padding
            } : {
                r: rb.right + padding,
                l: rb.left - eb.width - padding
            };
            var variants = isVertical ? {
                s: rb.left + rb.width - eb.width,
                m: (-eb.width / 2) + (rb.left + rb.width / 2),
                e: rb.left
            } : {
                s: rb.bottom - eb.height,
                m: rb.bottom - rb.height / 2 - eb.height / 2,
                e: rb.bottom - rb.height
            };
            function apply(bevs, vars, styleprop) {
                var vertical = styleprop === 'top';
                var adder = vertical ? eb.height : eb.width;
                var win = window[vertical ? 'innerHeight' : 'innerWidth'];
                for (var _i = 0, bevs_1 = bevs; _i < bevs_1.length; _i++) {
                    var ch = bevs_1[_i];
                    var v = vars[ch];
                    if (v > 0 && (v + adder) < win) {
                        el.style[styleprop] = v + "px";
                        break;
                    }
                }
            }
            apply(vBehaviour[variant], variants, isVertical ? 'left' : 'top');
            apply(hBehaviour[position], positions, isVertical ? 'top' : 'left');
        }
    };
}
exports.default = Nanopop;


/***/ }),

/***/ "./src/js/libs/selectable.js":
/*!***********************************!*\
  !*** ./src/js/libs/selectable.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(/*! ../utils/utils */ "./src/js/utils/utils.js");
function Selectable(opt) {
    if (opt === void 0) { opt = {}; }
    opt = Object.assign({
        onchange: function () { return 0; },
        className: '',
        elements: []
    }, opt);
    var onTap = _.on(opt.elements, 'click', function (evt) {
        opt.elements.forEach(function (e) {
            return e.classList[evt.target === e ? 'add' : 'remove'](opt.className);
        });
        opt.onchange(evt);
    });
    return {
        destroy: function () { return _.off.apply(_, onTap); }
    };
}
exports.default = Selectable;


/***/ }),

/***/ "./src/js/pickr.js":
/*!*************************!*\
  !*** ./src/js/pickr.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import styles
__webpack_require__(/*! ../scss/pickr.scss */ "./src/scss/pickr.scss");
// Import utils
var _ = __webpack_require__(/*! ./utils/utils */ "./src/js/utils/utils.js");
var Color = __webpack_require__(/*! ./utils/color */ "./src/js/utils/color.js");
// Import classes
var hsvacolor_1 = __webpack_require__(/*! ./utils/hsvacolor */ "./src/js/utils/hsvacolor.js");
var moveable_1 = __webpack_require__(/*! ./libs/moveable */ "./src/js/libs/moveable.js");
var selectable_1 = __webpack_require__(/*! ./libs/selectable */ "./src/js/libs/selectable.js");
var nanopop_1 = __webpack_require__(/*! ./libs/nanopop */ "./src/js/libs/nanopop.js");
var template_1 = __webpack_require__(/*! ./template */ "./src/js/template.js");
var Pickr = /** @class */ (function () {
    function Pickr(opt) {
        var _this = this;
        // Will be used to prevent specific actions during initilization
        this._initializingActive = true;
        // Replace element with color picker
        this._recalc = true;
        // Current and last color for comparison
        this._color = hsvacolor_1.HSVaColor();
        this._lastColor = hsvacolor_1.HSVaColor();
        this._swatchColors = [];
        // Evenlistener name: [callbacks]
        this._eventListener = {
            'swatchselect': [],
            'change': [],
            'save': [],
            'init': []
        };
        // Assign default values
        this.options = opt = Object.assign({
            appClass: null,
            useAsButton: false,
            disabled: false,
            comparison: true,
            components: {
                interaction: {}
            },
            strings: {},
            swatches: null,
            inline: false,
            default: '#42445A',
            defaultRepresentation: null,
            position: 'bottom-middle',
            adjustableNumbers: true,
            showAlways: false,
            closeWithKey: 'Escape'
        }, opt);
        var swatches = opt.swatches, inline = opt.inline, components = opt.components, position = opt.position;
        // Check interaction section
        if (!components.interaction) {
            components.interaction = {};
        }
        // Overwrite palette if preview, opacity or hue are true
        var preview = components.preview, opacity = components.opacity, hue = components.hue, palette = components.palette;
        components.palette = palette || preview || opacity || hue;
        // Per default enabled if inline
        if (inline) {
            opt.showAlways = true;
        }
        // Initialize picker
        this._preBuild();
        this._buildComponents();
        this._bindEvents();
        // Finalize build
        this._finalBuild();
        // Append pre-defined swatch colors
        if (swatches && swatches.length) {
            swatches.forEach(function (color) { return _this.addSwatch(color); });
        }
        // Initialize positioning engine
        this._nanopop = nanopop_1.default({
            reference: this._root.button,
            el: this._root.app,
            pos: position
        });
        // Initilization is finish, pickr is visible and ready for usage
        var button = this._root.button;
        var that = this;
        requestAnimationFrame((function cb() {
            // offsetParent of body is always 0. So check if it is the body
            if (button.offsetParent === null && button !== document.body) {
                return requestAnimationFrame(cb);
            }
            // Apply default color
            that.setColor(opt.default);
            that._rePositioningPicker();
            // Initialize color representation
            if (opt.defaultRepresentation) {
                that._representation = opt.defaultRepresentation;
                that.setColorRepresentation(that._representation);
            }
            // Show pickr if locked
            if (opt.showAlways) {
                that.show();
            }
            // Initialization is done - pickr is usable, fire init event
            that._initializingActive = false;
            that._emit('init');
        }));
    }
    // Does only the absolutly basic thing to initialize the components
    Pickr.prototype._preBuild = function () {
        var opt = this.options;
        // Check if element is selector
        if (typeof opt.el === 'string') {
            // Resolve possible shadow dom access
            opt.el = opt.el.split(/>>/g).reduce(function (pv, cv, ci, a) {
                pv = pv.querySelector(cv);
                return ci < a.length - 1 ? pv.shadowRoot : pv;
            }, document);
        }
        // Create element and append it to body to
        // prevent initialization errors
        this._root = template_1.default(opt);
        // Check if a custom button is used
        if (opt.useAsButton) {
            this._root.button = opt.el; // Replace button with customized button
        }
        document.body.appendChild(this._root.root);
    };
    Pickr.prototype._finalBuild = function () {
        var opt = this.options;
        var root = this._root;
        // Remove from body
        document.body.removeChild(root.root);
        //if (opt.inline) {
        var parentElement = opt.el.parentElement;
        if (parentElement.lastChild === opt.el) {
            parentElement.appendChild(root.app);
        }
        else {
            parentElement.insertBefore(root.app, opt.el.nextSibling);
        }
        // } else {
        //     document.body.appendChild(root.app);
        // }
        // Don't replace the the element if a custom button is used
        if (!opt.useAsButton) {
            // Replace element with actual color-picker
            opt.el.parentNode.replaceChild(root.root, opt.el);
        }
        // Call disable to also add the disabled class
        if (opt.disabled) {
            this.disable();
        }
        // Check if color comparison is disabled, if yes - remove transitions so everything keeps smoothly
        if (!opt.comparison) {
            root.button.style.transition = 'none';
            if (!opt.useAsButton) {
                root.preview.lastColor.style.transition = 'none';
            }
        }
        this.hide();
    };
    Pickr.prototype._buildComponents = function () {
        // Instance reference
        var inst = this;
        var comp = this.options.components;
        var components = {
            palette: moveable_1.default({
                element: inst._root.palette.picker,
                wrapper: inst._root.palette.palette,
                onchange: function (x, y) {
                    if (!comp.palette)
                        return;
                    var _color = inst._color, _root = inst._root, options = inst.options;
                    // Calculate saturation based on the position
                    _color.s = (x / this.wrapper.offsetWidth) * 100;
                    // Calculate the value
                    _color.v = 100 - (y / this.wrapper.offsetHeight) * 100;
                    // Prevent falling under zero
                    _color.v < 0 ? _color.v = 0 : 0;
                    // Set picker and gradient color
                    var cssRGBaString = _color.toRGBA().toString();
                    this.element.style.background = cssRGBaString;
                    this.wrapper.style.background = "\n                        linear-gradient(to top, rgba(0, 0, 0, " + _color.a + "), transparent),\n                        linear-gradient(to left, hsla(" + _color.h + ", 100%, 50%, " + _color.a + "), rgba(255, 255, 255, " + _color.a + "))\n                    ";
                    // Check if color is locked
                    if (!options.comparison) {
                        _root.button.style.color = cssRGBaString;
                        if (!options.useAsButton) {
                            _root.preview.lastColor.style.color = cssRGBaString;
                        }
                    }
                    // Change current color
                    _root.preview.currentColor.style.color = cssRGBaString;
                    // Update the input field only if the user is currently not typing
                    if (inst._recalc) {
                        inst._updateOutput();
                    }
                    // If the user changes the color, remove the cleared icon
                    _root.button.classList.remove('clear');
                }
            }),
            hue: moveable_1.default({
                lockX: true,
                element: inst._root.hue.picker,
                wrapper: inst._root.hue.slider,
                onchange: function (x, y) {
                    if (!comp.hue || !comp.palette)
                        return;
                    // Calculate hue
                    inst._color.h = (y / this.wrapper.offsetHeight) * 360;
                    // Update color
                    this.element.style.backgroundColor = "hsl(" + inst._color.h + ", 100%, 50%)";
                    components.palette.trigger();
                }
            }),
            opacity: moveable_1.default({
                lockX: true,
                element: inst._root.opacity.picker,
                wrapper: inst._root.opacity.slider,
                onchange: function (x, y) {
                    if (!comp.opacity || !comp.palette)
                        return;
                    // Calculate opacity
                    inst._color.a = Math.round(((y / this.wrapper.offsetHeight)) * 1e2) / 100;
                    // Update color
                    this.element.style.background = "rgba(0, 0, 0, " + inst._color.a + ")";
                    inst.components.palette.trigger();
                }
            }),
            selectable: selectable_1.default({
                elements: inst._root.interaction.options,
                className: 'active',
                onchange: function (e) {
                    inst._representation = e.target.getAttribute('data-type').toUpperCase();
                    inst._updateOutput();
                }
            })
        };
        this.components = components;
    };
    Pickr.prototype._bindEvents = function () {
        var _this = this;
        var _a = this, _root = _a._root, options = _a.options;
        var eventBindings = [
            // Clear color
            _.on(_root.interaction.clear, 'click', function () { return _this._clearColor(); }),
            // Select last color on click
            _.on(_root.preview.lastColor, 'click', function () { return _this.setHSVA.apply(_this, _this._lastColor.toHSVA()); }),
            // Save color
            _.on(_root.interaction.save, 'click', function () {
                !_this.applyColor() && !options.showAlways && _this.hide();
            }),
            // Detect user input and disable auto-recalculation
            _.on(_root.interaction.result, ['keyup', 'input'], function (e) {
                _this._recalc = false;
                // Fire listener if initialization is finish and changed color was valid
                if (_this.setColor(e.target.value, true) && !_this._initializingActive) {
                    _this._emit('change', _this._color);
                }
                e.stopImmediatePropagation();
            }),
            // Cancel input detection on color change
            _.on([
                _root.palette.palette,
                _root.palette.picker,
                _root.hue.slider,
                _root.hue.picker,
                _root.opacity.slider,
                _root.opacity.picker
            ], ['mousedown', 'touchstart'], function () { return _this._recalc = true; })
        ];
        // Provide hiding / showing abilities only if showAlways is false
        if (!options.showAlways) {
            var ck_1 = options.closeWithKey;
            eventBindings.push(
            // Save and hide / show picker
            _.on(_root.button, 'click', function () { return _this.isOpen() ? _this.hide() : _this.show(); }), 
            // Close with escape key
            _.on(document, 'keyup', function (e) { return _this.isOpen() && (e.key === ck_1 || e.code === ck_1) && _this.hide(); }), 
            // Cancel selecting if the user taps behind the color picker
            _.on(document, ['touchstart', 'mousedown'], function (e) {
                if (_this.isOpen() && !_.eventPath(e).some(function (el) { return el === _root.app || el === _root.button; })) {
                    _this.hide();
                }
            }, { capture: true }));
        }
        // Make input adjustable if enabled
        if (options.adjustableNumbers) {
            _.adjustableInputNumbers(_root.interaction.result, false);
        }
        if (!options.inline) {
            var timeout_1 = null;
            var that_1 = this;
            // Re-calc position on window resize, scroll and wheel
            eventBindings.push(_.on(window, ['scroll', 'resize'], function () {
                if (that_1.isOpen()) {
                    if (timeout_1 === null) {
                        timeout_1 = setTimeout(function () { return timeout_1 = null; }, 100);
                        // Update position on every frame
                        requestAnimationFrame(function rs() {
                            that_1._rePositioningPicker();
                            (timeout_1 !== null) && requestAnimationFrame(rs);
                        });
                    }
                    else {
                        clearTimeout(timeout_1);
                        timeout_1 = setTimeout(function () { return timeout_1 = null; }, 100);
                    }
                }
            }));
        }
        // Save bindings
        this._eventBindings = eventBindings;
    };
    Pickr.prototype._rePositioningPicker = function () {
        // No repositioning needed if inline
        if (!this.options.inline) {
            this._nanopop.update();
        }
    };
    Pickr.prototype._updateOutput = function () {
        // Check if component is present
        if (this._root.interaction.type()) {
            // Construct function name and call if present
            var method = "to" + this._root.interaction.type().getAttribute('data-type');
            this._root.interaction.result.value = typeof this._color[method] === 'function' ? this._color[method]().toString() : '';
        }
        // Fire listener if initialization is finish
        if (!this._initializingActive) {
            this._emit('change', this._color);
        }
    };
    Pickr.prototype._clearColor = function () {
        var _a = this, _root = _a._root, options = _a.options;
        // Change only the button color if it isn't customized
        if (!options.useAsButton) {
            _root.button.style.color = 'rgba(0, 0, 0, 0.15)';
        }
        _root.button.classList.add('clear');
        if (!options.showAlways) {
            this.hide();
        }
        if (!this._initializingActive) {
            // Fire listener
            this._emit('save', null);
        }
    };
    Pickr.prototype._emit = function (event) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this._eventListener[event].forEach(function (cb) { return cb.apply(void 0, __spreadArrays(args, [_this])); });
    };
    Pickr.prototype.on = function (event, cb) {
        // Validate
        if (typeof cb === 'function' && typeof event === 'string' && event in this._eventListener) {
            this._eventListener[event].push(cb);
        }
        return this;
    };
    Pickr.prototype.off = function (event, cb) {
        var callBacks = this._eventListener[event];
        if (callBacks) {
            var index = callBacks.indexOf(cb);
            if (~index) {
                callBacks.splice(index, 1);
            }
        }
        return this;
    };
    /**
     * Appends a color to the swatch palette
     * @param color
     * @returns {boolean}
     */
    Pickr.prototype.addSwatch = function (color) {
        var _this = this;
        var values = Color.parseToHSV(color).values;
        if (values) {
            var _a = this, _swatchColors = _a._swatchColors, _root = _a._root;
            var hsvaColorObject_1 = hsvacolor_1.HSVaColor.apply(void 0, values);
            // Create new swatch HTMLElement
            var element = _.createElementFromString("<button type=\"button\" style=\"color: " + hsvaColorObject_1.toRGBA() + "\"></button>");
            // Append element and save swatch data
            _root.swatches.appendChild(element);
            _swatchColors.push({ element: element, hsvaColorObject: hsvaColorObject_1 });
            // Bind event
            this._eventBindings.push(_.on(element, 'click', function () {
                _this.setHSVA.apply(_this, __spreadArrays(hsvaColorObject_1.toHSVA(), [true]));
                _this._emit('swatchselect', hsvaColorObject_1);
            }));
            return true;
        }
        return false;
    };
    /**
     * Removes a swatch color by it's index
     * @param index
     * @returns {boolean}
     */
    Pickr.prototype.removeSwatch = function (index) {
        // Validate index
        if (typeof index === 'number') {
            var swatchColor = this._swatchColors[index];
            // Check swatch data
            if (swatchColor) {
                var element = swatchColor.element;
                // Remove HTML child and swatch data
                this._root.swatches.removeChild(element);
                this._swatchColors.splice(index, 1);
                return true;
            }
        }
        return false;
    };
    Pickr.prototype.applyColor = function (silent) {
        if (silent === void 0) { silent = false; }
        var _a = this._root, preview = _a.preview, button = _a.button;
        // Change preview and current color
        var cssRGBaString = this._color.toRGBA().toString();
        preview.lastColor.style.color = cssRGBaString;
        // Change only the button color if it isn't customized
        if (!this.options.useAsButton) {
            button.style.color = cssRGBaString;
        }
        // User changed the color so remove the clear clas
        button.classList.remove('clear');
        // Save last color
        this._lastColor = this._color.clone();
        // Fire listener
        if (!this._initializingActive && !silent) {
            this._emit('save', this._color);
        }
    };
    /**
     * Destroy's all functionalitys
     */
    Pickr.prototype.destroy = function () {
        var _this = this;
        this._eventBindings.forEach(function (args) { return _.off.apply(_, args); });
        Object.keys(this.components).forEach(function (key) { return _this.components[key].destroy(); });
    };
    /**
     * Destroy's all functionalitys and removes
     * the pickr element.
     */
    Pickr.prototype.destroyAndRemove = function () {
        this.destroy();
        // Remove element
        var root = this._root.root;
        root.parentElement.removeChild(root);
        // remove .pcr-app
        var app = this._root.app;
        app.parentElement.removeChild(app);
        // There are references to various DOM elements stored in the pickr instance
        // This cleans all of them to avoid detached DOMs
        var pickr = this;
        Object.keys(pickr).forEach(function (key) { return pickr[key] = null; });
    };
    /**
     * Hides the color-picker ui.
     */
    Pickr.prototype.hide = function () {
        this._root.app.classList.remove('visible');
        return this;
    };
    /**
     * Shows the color-picker ui.
     */
    Pickr.prototype.show = function () {
        if (this.options.disabled)
            return;
        this._root.app.classList.add('visible');
        this._rePositioningPicker();
        return this;
    };
    /**
     * @return {boolean} If the color picker is currently open
     */
    Pickr.prototype.isOpen = function () {
        return this._root.app.classList.contains('visible');
    };
    /**
     * Set a specific color.
     * @param h Hue
     * @param s Saturation
     * @param v Value
     * @param a Alpha channel (0 - 1)
     * @param silent If the button should not change the color
     * @return boolean if the color has been accepted
     */
    Pickr.prototype.setHSVA = function (h, s, v, a, silent) {
        if (h === void 0) { h = 360; }
        if (s === void 0) { s = 0; }
        if (v === void 0) { v = 0; }
        if (a === void 0) { a = 1; }
        if (silent === void 0) { silent = false; }
        // Deactivate color calculation
        var recalc = this._recalc; // Save state
        this._recalc = false;
        // Validate input
        if (h < 0 || h > 360 || s < 0 || s > 100 || v < 0 || v > 100 || a < 0 || a > 1) {
            return false;
        }
        // Override current color and re-active color calculation
        this._color = hsvacolor_1.HSVaColor(h, s, v, a);
        // Short names
        var _a = this.components, hue = _a.hue, opacity = _a.opacity, palette = _a.palette;
        // Calculate y position of hue slider
        var hueWrapper = hue.options.wrapper;
        var hueY = hueWrapper.offsetHeight * (h / 360);
        hue.update(0, hueY);
        // Calculate y position of opacity slider
        var opacityWrapper = opacity.options.wrapper;
        var opacityY = opacityWrapper.offsetHeight * a;
        opacity.update(0, opacityY);
        // Calculate y and x position of color palette
        var pickerWrapper = palette.options.wrapper;
        var pickerX = pickerWrapper.offsetWidth * (s / 100);
        var pickerY = pickerWrapper.offsetHeight * (1 - (v / 100));
        palette.update(pickerX, pickerY);
        // Restore old state
        this._recalc = recalc;
        // Update output if recalculation is enabled
        if (this._recalc) {
            this._updateOutput();
        }
        // Check if call is silent
        if (!silent) {
            this.applyColor();
        }
        return true;
    };
    /**
     * Tries to parse a string which represents a color.
     * Examples: #fff
     *           rgb 10 10 200
     *           hsva 10 20 5 0.5
     * @param string
     * @param silent
     */
    Pickr.prototype.setColor = function (string, silent) {
        if (silent === void 0) { silent = false; }
        // Check if null
        if (string === null) {
            this._clearColor();
            return true;
        }
        var _a = Color.parseToHSV(string), values = _a.values, type = _a.type;
        // Check if color is ok
        if (values) {
            // Change selected color format
            var utype_1 = type.toUpperCase();
            var options = this._root.interaction.options;
            var target = options.find(function (el) { return el.getAttribute('data-type').startsWith(utype_1); });
            // Auto select only if not hidden
            if (target && !target.hidden) {
                for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                    var el = options_1[_i];
                    el.classList[el === target ? 'add' : 'remove']('active');
                }
            }
            return this.setHSVA.apply(this, __spreadArrays(values, [silent]));
        }
    };
    /**
     * Changes the color _representation.
     * Allowed values are HEX, RGB, HSV, HSL and CMYK
     * @param type
     * @returns {boolean} if the selected type was valid.
     */
    Pickr.prototype.setColorRepresentation = function (type) {
        // Force uppercase to allow a case-sensitiv comparison
        type = type.toUpperCase();
        // Find button with given type and trigger click event
        return !!this._root.interaction.options.find(function (v) { return v.getAttribute('data-type').startsWith(type) && !v.click(); });
    };
    /**
     * Returns the current color representaion. See setColorRepresentation
     * @returns {*}
     */
    Pickr.prototype.getColorRepresentation = function () {
        return this._representation;
    };
    /**
     * @returns HSVaColor Current HSVaColor object.
     */
    Pickr.prototype.getColor = function () {
        return this._color;
    };
    /**
     * @returns The root HTMLElement with all his components.
     */
    Pickr.prototype.getRoot = function () {
        return this._root;
    };
    /**
     * Disable pickr
     */
    Pickr.prototype.disable = function () {
        this.hide();
        this.options.disabled = true;
        this._root.button.classList.add('disabled');
        return this;
    };
    /**
     * Enable pickr
     */
    Pickr.prototype.enable = function () {
        this.options.disabled = false;
        this._root.button.classList.remove('disabled');
        return this;
    };
    return Pickr;
}());
// Expose pickr utils
Pickr.utils = _;
// Create instance via method
Pickr.create = function (options) { return new Pickr(options); };
// Assign version and export
Pickr.version = '0.6.2';
exports.default = Pickr;


/***/ }),

/***/ "./src/js/template.js":
/*!****************************!*\
  !*** ./src/js/template.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(/*! ./utils/utils */ "./src/js/utils/utils.js");
exports.default = (function (_a) {
    var c = _a.components, s = _a.strings, useAsButton = _a.useAsButton, inline = _a.inline, appClass = _a.appClass, width = _a.width;
    var hidden = function (con) { return con ? '' : 'style="display:none" hidden'; };
    var root = _.createFromTemplate("\n      <div data-key=\"root\" class=\"pickr\">\n\n        " + (useAsButton ? '' : '<button type="button" data-key="button" class="pcr-button"></button>') + "\n\n        <div data-key=\"app\" class=\"pcr-app " + (appClass || '') + "\" " + ("style=\"" + (inline ? 'position: unset;' : '') + (width ? "width:" + width + ";" : '') + "\"") + ">\n          <div class=\"pcr-selection\" " + hidden(c.palette) + ">\n            <div data-con=\"preview\" class=\"pcr-color-preview\" " + hidden(c.preview) + ">\n              <button type=\"button\" data-key=\"lastColor\" class=\"pcr-last-color\"></button>\n              <div data-key=\"currentColor\" class=\"pcr-current-color\"></div>\n            </div>\n\n            <div data-con=\"palette\" class=\"pcr-color-palette\">\n              <div data-key=\"picker\" class=\"pcr-picker\"></div>\n              <div data-key=\"palette\" class=\"pcr-palette\"></div>\n            </div>\n\n            <div data-con=\"hue\" class=\"pcr-color-chooser\" " + hidden(c.hue) + ">\n              <div data-key=\"picker\" class=\"pcr-picker\"></div>\n              <div data-key=\"slider\" class=\"pcr-hue pcr-slider\"></div>\n            </div>\n\n            <div data-con=\"opacity\" class=\"pcr-color-opacity\" " + hidden(c.opacity) + ">\n              <div data-key=\"picker\" class=\"pcr-picker\"></div>\n              <div data-key=\"slider\" class=\"pcr-opacity pcr-slider\"></div>\n            </div>\n          </div>\n\n          <div class=\"pcr-swatches " + (c.palette ? '' : ' pcr-last') + "\" data-key=\"swatches\"></div> \n\n          <div data-con=\"interaction\" class=\"pcr-interaction\" " + hidden(Object.keys(c.interaction).length) + ">\n            <input data-key=\"result\" class=\"pcr-result\" type=\"text\" spellcheck=\"false\" " + hidden(c.interaction.input) + ">\n\n            <input data-arr=\"options\" class=\"pcr-type\" data-type=\"HEXA\" value=\"HEXA\" type=\"button\" " + hidden(c.interaction.hex) + ">\n            <input data-arr=\"options\" class=\"pcr-type\" data-type=\"RGBA\" value=\"RGBA\" type=\"button\" " + hidden(c.interaction.rgba) + ">\n            <input data-arr=\"options\" class=\"pcr-type\" data-type=\"HSLA\" value=\"HSLA\" type=\"button\" " + hidden(c.interaction.hsla) + ">\n            <input data-arr=\"options\" class=\"pcr-type\" data-type=\"HSVA\" value=\"HSVA\" type=\"button\" " + hidden(c.interaction.hsva) + ">\n            <input data-arr=\"options\" class=\"pcr-type\" data-type=\"CMYK\" value=\"CMYK\" type=\"button\" " + hidden(c.interaction.cmyk) + ">\n\n            <input data-key=\"save\" class=\"pcr-save\" value=\"" + (s.save || 'Save') + "\" type=\"button\" " + hidden(c.interaction.save) + ">\n            <input data-key=\"clear\" class=\"pcr-clear\" value=\"" + (s.clear || 'Clear') + "\" type=\"button\" " + hidden(c.interaction.clear) + ">\n          </div>\n        </div>\n      </div>\n    ");
    var int = root.interaction;
    // Select option which is not hidden
    int.options.find(function (o) { return !o.hidden && !o.classList.add('active'); });
    // Create method to find currenlty active option
    int.type = function () { return int.options.find(function (e) { return e.classList.contains('active'); }); };
    return root;
});


/***/ }),

/***/ "./src/js/utils/color.js":
/*!*******************************!*\
  !*** ./src/js/utils/color.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseToHSV = exports.hsvToHsl = exports.hsvToCmyk = exports.hsvToHex = exports.hsvToRgb = void 0;
// Shorthands
var min = Math.min, max = Math.max, floor = Math.floor, round = Math.round;
/**
 * Tries to convert a color name to rgb/a hex representation
 * @param name
 * @returns {string | CanvasGradient | CanvasPattern}
 */
function standardizeColor(name) {
    var ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = name;
    return ctx.fillStyle;
}
/**
 * Convert HSV spectrum to RGB.
 * @param h Hue
 * @param s Saturation
 * @param v Value
 * @returns {number[]} Array with rgb values.
 */
function hsvToRgb(h, s, v) {
    h = (h / 360) * 6;
    s /= 100;
    v /= 100;
    var i = floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return [
        r * 255,
        g * 255,
        b * 255
    ];
}
exports.hsvToRgb = hsvToRgb;
/**
 * Convert HSV spectrum to Hex.
 * @param h Hue
 * @param s Saturation
 * @param v Value
 * @returns {string[]} Hex values
 */
function hsvToHex(h, s, v) {
    return hsvToRgb(h, s, v).map(function (v) {
        return round(v).toString(16).padStart(2, '0');
    });
}
exports.hsvToHex = hsvToHex;
/**
 * Convert HSV spectrum to CMYK.
 * @param h Hue
 * @param s Saturation
 * @param v Value
 * @returns {number[]} CMYK values
 */
function hsvToCmyk(h, s, v) {
    var rgb = hsvToRgb(h, s, v);
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var k, c, m, y;
    k = min(1 - r, 1 - g, 1 - b);
    c = k === 1 ? 0 : (1 - r - k) / (1 - k);
    m = k === 1 ? 0 : (1 - g - k) / (1 - k);
    y = k === 1 ? 0 : (1 - b - k) / (1 - k);
    return [
        c * 100,
        m * 100,
        y * 100,
        k * 100
    ];
}
exports.hsvToCmyk = hsvToCmyk;
/**
 * Convert HSV spectrum to HSL.
 * @param h Hue
 * @param s Saturation
 * @param v Value
 * @returns {number[]} HSL values
 */
function hsvToHsl(h, s, v) {
    s /= 100, v /= 100;
    var l = (2 - s) * v / 2;
    if (l !== 0) {
        if (l === 1) {
            s = 0;
        }
        else if (l < 0.5) {
            s = s * v / (l * 2);
        }
        else {
            s = s * v / (2 - l * 2);
        }
    }
    return [
        h,
        s * 100,
        l * 100
    ];
}
exports.hsvToHsl = hsvToHsl;
/**
 * Convert RGB to HSV.
 * @param r Red
 * @param g Green
 * @param b Blue
 * @return {number[]} HSV values.
 */
function rgbToHsv(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var h, s, v;
    var minVal = min(r, g, b);
    var maxVal = max(r, g, b);
    var delta = maxVal - minVal;
    v = maxVal;
    if (delta === 0) {
        h = s = 0;
    }
    else {
        s = delta / maxVal;
        var dr = (((maxVal - r) / 6) + (delta / 2)) / delta;
        var dg = (((maxVal - g) / 6) + (delta / 2)) / delta;
        var db = (((maxVal - b) / 6) + (delta / 2)) / delta;
        if (r === maxVal) {
            h = db - dg;
        }
        else if (g === maxVal) {
            h = (1 / 3) + dr - db;
        }
        else if (b === maxVal) {
            h = (2 / 3) + dg - dr;
        }
        if (h < 0) {
            h += 1;
        }
        else if (h > 1) {
            h -= 1;
        }
    }
    return [
        h * 360,
        s * 100,
        v * 100
    ];
}
/**
 * Convert CMYK to HSV.
 * @param c Cyan
 * @param m Magenta
 * @param y Yellow
 * @param k Key (Black)
 * @return {number[]} HSV values.
 */
function cmykToHsv(c, m, y, k) {
    c /= 100, m /= 100, y /= 100, k /= 100;
    var r = (1 - min(1, c * (1 - k) + k)) * 255;
    var g = (1 - min(1, m * (1 - k) + k)) * 255;
    var b = (1 - min(1, y * (1 - k) + k)) * 255;
    return __spreadArrays(rgbToHsv(r, g, b));
}
/**
 * Convert HSL to HSV.
 * @param h Hue
 * @param s Saturation
 * @param l Lightness
 * @return {number[]} HSV values.
 */
function hslToHsv(h, s, l) {
    s /= 100, l /= 100;
    s *= l < 0.5 ? l : 1 - l;
    var ns = (2 * s / (l + s)) * 100;
    var v = (l + s) * 100;
    return [h, ns, v];
}
/**
 * Convert HEX to HSV.
 * @param hex Hexadecimal string of rgb colors, can have length 3 or 6.
 * @return {number[]} HSV values.
 */
function hexToHsv(hex) {
    return rgbToHsv.apply(void 0, hex.match(/.{2}/g).map(function (v) { return parseInt(v, 16); }));
}
/**
 * Try's to parse a string which represents a color to a HSV array.
 * Current supported types are cmyk, rgba, hsla and hexadecimal.
 * @param str
 * @return {*}
 */
function parseToHSV(str) {
    var _a, _b;
    // Check if string is a color-name
    str = str.match(/^[a-zA-Z]+$/) ? standardizeColor(str) : str;
    // Regular expressions to match different types of color represention
    var regex = {
        cmyk: /^cmyk[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)/i,
        rgba: /^(rgb|rgba)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,
        hsla: /^(hsl|hsla)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,
        hsva: /^(hsv|hsva)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,
        hex: /^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i
    };
    /**
     * Takes an Array of any type, convert strings which represents
     * a number to a number an anything else to undefined.
     * @param array
     * @return {*}
     */
    var numarize = function (array) { return array.map(function (v) { return /^(|\d+)\.\d+|\d+$/.test(v) ? Number(v) : undefined; }); };
    var match;
    for (var type in regex) {
        // Check if current scheme passed
        if (!(match = regex[type].exec(str)))
            continue;
        // Try to convert
        switch (type) {
            case 'cmyk': {
                var _c = numarize(match), c = _c[1], m = _c[2], y = _c[3], k = _c[4];
                if (c > 100 || m > 100 || y > 100 || k > 100)
                    break;
                return { values: __spreadArrays(cmykToHsv(c, m, y, k), [1]), type: type };
            }
            case 'rgba': {
                var _d = numarize(match), r = _d[2], g = _d[3], b = _d[4], _e = _d[5], a = _e === void 0 ? 1 : _e;
                if (r > 255 || g > 255 || b > 255 || a < 0 || a > 1)
                    break;
                return { values: __spreadArrays(rgbToHsv(r, g, b), [a]), type: type };
            }
            case 'hex': {
                var splitAt = function (s, i) { return [s.substring(0, i), s.substring(i, s.length)]; };
                var hex = match[1];
                // Fill up opacity if not declared
                if (hex.length === 3) {
                    hex += 'F';
                }
                else if (hex.length === 6) {
                    hex += 'FF';
                }
                var alpha = void 0;
                if (hex.length === 4) {
                    _a = splitAt(hex, 3).map(function (v) { return v + v; }), hex = _a[0], alpha = _a[1];
                }
                else if (hex.length === 8) {
                    _b = splitAt(hex, 6), hex = _b[0], alpha = _b[1];
                }
                // Convert 0 - 255 to 0 - 1 for opacity
                alpha = parseInt(alpha, 16) / 255;
                return { values: __spreadArrays(hexToHsv(hex), [alpha]), type: type };
            }
            case 'hsla': {
                var _f = numarize(match), h = _f[2], s = _f[3], l = _f[4], _g = _f[5], a = _g === void 0 ? 1 : _g;
                if (h > 360 || s > 100 || l > 100 || a < 0 || a > 1)
                    break;
                return { values: __spreadArrays(hslToHsv(h, s, l), [a]), type: type };
            }
            case 'hsva': {
                var _h = numarize(match), h = _h[2], s = _h[3], v = _h[4], _j = _h[5], a = _j === void 0 ? 1 : _j;
                if (h > 360 || s > 100 || v > 100 || a < 0 || a > 1)
                    break;
                return { values: [h, s, v, a], type: type };
            }
        }
    }
    return { values: null, type: null };
}
exports.parseToHSV = parseToHSV;


/***/ }),

/***/ "./src/js/utils/hsvacolor.js":
/*!***********************************!*\
  !*** ./src/js/utils/hsvacolor.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HSVaColor = void 0;
var color_1 = __webpack_require__(/*! ./color */ "./src/js/utils/color.js");
/**
 * Simple class which holds the properties
 * of the color represention model hsla (hue saturation lightness alpha)
 */
function HSVaColor(h, s, v, a) {
    if (h === void 0) { h = 0; }
    if (s === void 0) { s = 0; }
    if (v === void 0) { v = 0; }
    if (a === void 0) { a = 1; }
    var ceil = Math.ceil;
    var that = {
        h: h, s: s, v: v, a: a,
        toHSVA: function () {
            var hsva = [that.h, that.s, that.v];
            var rhsva = hsva.map(ceil);
            hsva.push(that.a);
            hsva.toString = function () { return "hsva(" + rhsva[0] + ", " + rhsva[1] + "%, " + rhsva[2] + "%, " + that.a.toFixed(1) + ")"; };
            return hsva;
        },
        toHSLA: function () {
            var hsla = color_1.hsvToHsl(that.h, that.s, that.v);
            var rhsla = hsla.map(ceil);
            hsla.push(that.a);
            hsla.toString = function () { return "hsla(" + rhsla[0] + ", " + rhsla[1] + "%, " + rhsla[2] + "%, " + that.a.toFixed(1) + ")"; };
            return hsla;
        },
        toRGBA: function () {
            var rgba = color_1.hsvToRgb(that.h, that.s, that.v);
            var rrgba = rgba.map(ceil);
            rgba.push(that.a);
            rgba.toString = function () { return "rgba(" + rrgba[0] + ", " + rrgba[1] + ", " + rrgba[2] + ", " + that.a.toFixed(1) + ")"; };
            return rgba;
        },
        toCMYK: function () {
            var cmyk = color_1.hsvToCmyk(that.h, that.s, that.v);
            var rcmyk = cmyk.map(ceil);
            cmyk.toString = function () { return "cmyk(" + rcmyk[0] + "%, " + rcmyk[1] + "%, " + rcmyk[2] + "%, " + rcmyk[3] + "%)"; };
            return cmyk;
        },
        toHEXA: function () {
            var hex = color_1.hsvToHex(that.h, that.s, that.v);
            hex.toString = function () {
                // Check if alpha channel make sense, convert it to 255 number space, convert
                // to hex and pad it with zeros if needet.
                var alpha = that.a >= 1 ? '' : Number((that.a * 255).toFixed(0))
                    .toString(16)
                    .toUpperCase().padStart(2, '0');
                return "#" + (hex.join('').toUpperCase() + alpha);
            };
            return hex;
        },
        clone: function () {
            return HSVaColor(that.h, that.s, that.v, that.a);
        }
    };
    return that;
}
exports.HSVaColor = HSVaColor;


/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustableInputNumbers = exports.eventPath = exports.createFromTemplate = exports.removeAttribute = exports.createElementFromString = exports.off = exports.on = void 0;
/**
 * Add event(s) to element(s).
 * @param elements DOM-Elements
 * @param events Event names
 * @param fn Callback
 * @param options Optional options
 * @return Array passed arguments
 */
exports.on = eventListener.bind(null, 'addEventListener');
/**
 * Remove event(s) from element(s).
 * @param elements DOM-Elements
 * @param events Event names
 * @param fn Callback
 * @param options Optional options
 * @return Array passed arguments
 */
exports.off = eventListener.bind(null, 'removeEventListener');
function eventListener(method, elements, events, fn, options) {
    if (options === void 0) { options = {}; }
    // Normalize array
    if (elements instanceof HTMLCollection || elements instanceof NodeList) {
        elements = Array.from(elements);
    }
    else if (!Array.isArray(elements)) {
        elements = [elements];
    }
    if (!Array.isArray(events)) {
        events = [events];
    }
    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
        var el = elements_1[_i];
        for (var _a = 0, events_1 = events; _a < events_1.length; _a++) {
            var ev = events_1[_a];
            el[method](ev, fn, __assign({ capture: false }, options));
        }
    }
    return Array.prototype.slice.call(arguments, 1);
}
/**
 * Creates an DOM-Element out of a string (Single element).
 * @param html HTML representing a single element
 * @returns {Element | null} The element.
 */
function createElementFromString(html) {
    var div = document.createElement('div');
    div.innerHTML = html.trim();
    return div.firstElementChild;
}
exports.createElementFromString = createElementFromString;
/**
 * Removes an attribute from a HTMLElement and returns the value.
 * @param el
 * @param name
 * @return {string}
 */
function removeAttribute(el, name) {
    var value = el.getAttribute(name);
    el.removeAttribute(name);
    return value;
}
exports.removeAttribute = removeAttribute;
/**
 * Creates a new html element, every element which has
 * a 'data-key' attribute will be saved in a object (which will be returned)
 * where the value of 'data-key' ist the object-key and the value the HTMLElement.
 *
 * It's possible to create a hierarchy if you add a 'data-con' attribute. Every
 * sibling will be added to the object which will get the name from the 'data-con' attribute.
 *
 * If you want to create an Array out of multiple elements, you can use the 'data-arr' attribute,
 * the value defines the key and all elements, which has the same parent and the same 'data-arr' attribute,
 * would be added to it.
 *
 * @param str - The HTML String.
 */
function createFromTemplate(str) {
    // Recursive function to resolve template
    function resolve(element, base) {
        if (base === void 0) { base = {}; }
        // Check key and container attribute
        var con = removeAttribute(element, 'data-con');
        var key = removeAttribute(element, 'data-key');
        // Check and save element
        if (key) {
            base[key] = element;
        }
        // Check all children
        var subtree = con ? (base[con] = {}) : base;
        for (var _i = 0, _a = Array.from(element.children); _i < _a.length; _i++) {
            var child = _a[_i];
            // Check if element should be saved as array
            var arr = removeAttribute(child, 'data-arr');
            if (arr) {
                // Check if there is already an array and add element
                (subtree[arr] || (subtree[arr] = [])).push(child);
            }
            else {
                resolve(child, subtree);
            }
        }
        return base;
    }
    return resolve(createElementFromString(str));
}
exports.createFromTemplate = createFromTemplate;
/**
 * Polyfill for safari & firefox for the eventPath event property.
 * @param evt The event object.
 * @return [String] event path.
 */
function eventPath(evt) {
    var path = evt.path || (evt.composedPath && evt.composedPath());
    if (path)
        return path;
    var el = evt.target.parentElement;
    path = [evt.target, el];
    while (el = el.parentElement)
        path.push(el);
    path.push(document, window);
    return path;
}
exports.eventPath = eventPath;
/**
 * Creates the ability to change numbers in an input field with the scroll-wheel.
 * @param el
 * @param negative
 */
function adjustableInputNumbers(el, negative) {
    if (negative === void 0) { negative = true; }
    // Check if a char represents a number
    var isNumChar = function (c) { return (c >= '0' && c <= '9') || c === '-' || c === '.'; };
    function handleScroll(e) {
        var val = el.value;
        var off = el.selectionStart;
        var numStart = off;
        var num = ''; // Will be the number as string
        // Look back
        for (var i = off - 1; i > 0 && isNumChar(val[i]); i--) {
            num = val[i] + num;
            numStart--; // Find start of number
        }
        // Look forward
        for (var i = off, n = val.length; i < n && isNumChar(val[i]); i++) {
            num += val[i];
        }
        // Check if number is valid
        if (num.length > 0 && !isNaN(num) && isFinite(num)) {
            var mul = e.deltaY < 0 ? 1 : -1;
            var inc = ([1, 10, 100])[Number(e.shiftKey || e.ctrlKey * 2)] * mul;
            var newNum = Number(num) + inc;
            if (!negative && newNum < 0) {
                newNum = 0;
            }
            var newStr = val.substr(0, numStart) + newNum + val.substring(numStart + num.length, val.length);
            var curPos = numStart + String(newNum).length;
            // Update value and set cursor
            el.value = newStr;
            el.focus();
            el.setSelectionRange(curPos, curPos);
        }
        // Prevent default
        e.preventDefault();
        // Trigger input event
        el.dispatchEvent(new Event('input'));
    }
    // Bind events
    exports.on(el, 'focus', function () { return exports.on(window, 'wheel', handleScroll, { passive: false }); });
    exports.on(el, 'blur', function () { return exports.off(window, 'wheel', handleScroll); });
}
exports.adjustableInputNumbers = adjustableInputNumbers;


/***/ }),

/***/ "./src/scss/pickr.scss":
/*!*****************************!*\
  !*** ./src/scss/pickr.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../node_modules/_css-loader@1.0.1@css-loader!../../node_modules/_resolve-url-loader@3.1.4@resolve-url-loader!../../node_modules/_sass-loader@10.3.1@sass-loader/dist/cjs.js??ref--4-3!./pickr.scss */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.4@resolve-url-loader/index.js!./node_modules/_sass-loader@10.3.1@sass-loader/dist/cjs.js?!./src/scss/pickr.scss");

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
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
/*!
 *  omiu v0.0.11 By dntzhang 
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["Omiu"] = factory(require("omi"));
	else
		root["Omiu"] = factory(root["omi"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _omi = __webpack_require__(0);

var _index = __webpack_require__(24);

var _index2 = _interopRequireDefault(_index);

var _path = __webpack_require__(26);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-icon', (_temp2 = _class = function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      _this.props.onClick && _this.props.onClick(e);
      //e.stopPropagation()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var style = { style: props.style };
      return Omi.h(
        'i',
        _extends({}, (0, _omi.extractClass)(props, 'o-icon'), style, { onClick: this.onClick }),
        Omi.h(
          'svg',
          {
            viewBox: '0 0 1024 1024',
            'class': (0, _omi.classNames)({ rotate: props.rotate }),
            width: props.scale + 'em',
            height: props.scale + 'em',
            fill: props.color,
            'aria-hidden': 'true'
          },
          Omi.h('path', {
            d: props.path ? props.path : _path2['default'][props.type][props.isFill ? 1 : 0] || _path2['default'][props.type][0]
          })
        ),
        props.children && Omi.h(
          'div',
          { style: 'color:' + (props.color || 'black') + ';' },
          props.children[0]
        )
      );
    }
  }]);

  return _class;
}(_omi.WeElement), _class.defaultProps = {
  scale: 2
}, _temp2));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// Utility functions

var PREFIXES = 'Webkit Moz O ms'.split(' ');
var FLOAT_COMPARISON_EPSILON = 0.001;

// Copy all attributes from source object to destination object.
// destination object is mutated.
function extend(destination, source, recursive) {
    destination = destination || {};
    source = source || {};
    recursive = recursive || false;

    for (var attrName in source) {
        if (source.hasOwnProperty(attrName)) {
            var destVal = destination[attrName];
            var sourceVal = source[attrName];
            if (recursive && isObject(destVal) && isObject(sourceVal)) {
                destination[attrName] = extend(destVal, sourceVal, recursive);
            } else {
                destination[attrName] = sourceVal;
            }
        }
    }

    return destination;
}

// Renders templates with given variables. Variables must be surrounded with
// braces without any spaces, e.g. {variable}
// All instances of variable placeholders will be replaced with given content
// Example:
// render('Hello, {message}!', {message: 'world'})
function render(template, vars) {
    var rendered = template;

    for (var key in vars) {
        if (vars.hasOwnProperty(key)) {
            var val = vars[key];
            var regExpString = '\\{' + key + '\\}';
            var regExp = new RegExp(regExpString, 'g');

            rendered = rendered.replace(regExp, val);
        }
    }

    return rendered;
}

function setStyle(element, style, value) {
    var elStyle = element.style;  // cache for performance

    for (var i = 0; i < PREFIXES.length; ++i) {
        var prefix = PREFIXES[i];
        elStyle[prefix + capitalize(style)] = value;
    }

    elStyle[style] = value;
}

function setStyles(element, styles) {
    forEachObject(styles, function(styleValue, styleName) {
        // Allow disabling some individual styles by setting them
        // to null or undefined
        if (styleValue === null || styleValue === undefined) {
            return;
        }

        // If style's value is {prefix: true, value: '50%'},
        // Set also browser prefixed styles
        if (isObject(styleValue) && styleValue.prefix === true) {
            setStyle(element, styleName, styleValue.value);
        } else {
            element.style[styleName] = styleValue;
        }
    });
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function isString(obj) {
    return typeof obj === 'string' || obj instanceof String;
}

function isFunction(obj) {
    return typeof obj === 'function';
}

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

// Returns true if `obj` is object as in {a: 1, b: 2}, not if it's function or
// array
function isObject(obj) {
    if (isArray(obj)) {
        return false;
    }

    var type = typeof obj;
    return type === 'object' && !!obj;
}

function forEachObject(object, callback) {
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            var val = object[key];
            callback(val, key);
        }
    }
}

function floatEquals(a, b) {
    return Math.abs(a - b) < FLOAT_COMPARISON_EPSILON;
}

// https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
function removeChildren(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

module.exports = {
    extend: extend,
    render: render,
    setStyle: setStyle,
    setStyles: setStyles,
    capitalize: capitalize,
    isString: isString,
    isFunction: isFunction,
    isObject: isObject,
    forEachObject: forEachObject,
    floatEquals: floatEquals,
    removeChildren: removeChildren
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _omi = __webpack_require__(0);

var _index = __webpack_require__(16);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-button', (_temp = _class = function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var cls = (0, _omi.extractClass)(props) || {};

      var _props = this.props,
          component = _props.component,
          type = _props.type,
          size = _props.size,
          plain = _props.plain,
          children = _props.children,
          others = _objectWithoutProperties(_props, ['component', 'type', 'size', 'plain', 'children']);

      var Component = component ? component : this.props.href || type === 'vcode' ? 'a' : 'button';
      cls = type === 'vcode' ? (0, _omi.extractClass)(cls, 'weui-vcode-btn') : (0, _omi.extractClass)(cls, {
        'weui-btn': true,
        'weui-btn_mini': size === 'small',
        'weui-btn_primary': type === 'primary' && !plain,
        'weui-btn_default': type === 'default' && !plain,
        'weui-btn_warn': type === 'warn',
        'weui-btn_plain-primary': type === 'primary' && plain,
        'weui-btn_plain-default': type === 'default' && plain,
        'weui-btn_disabled': this.props.disabled && !plain,
        'weui-btn_plain-disabled': this.props.disabled && plain
      });

      return Omi.h(
        Component,
        _extends({}, others, cls),
        children
      );
    }
  }]);

  return _class;
}(_omi.WeElement), _class.defaultProps = {
  disabled: false,
  type: 'primary',
  size: 'normal'
}, _temp));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Base object for different progress bar shapes

var Path = __webpack_require__(7);
var utils = __webpack_require__(3);

var DESTROYED_ERROR = 'Object is destroyed';

var Shape = function Shape(container, opts) {
    // Throw a better error if progress bars are not initialized with `new`
    // keyword
    if (!(this instanceof Shape)) {
        throw new Error('Constructor was called without new keyword');
    }

    // Prevent calling constructor without parameters so inheritance
    // works correctly. To understand, this is how Shape is inherited:
    //
    //   Line.prototype = new Shape();
    //
    // We just want to set the prototype for Line.
    if (arguments.length === 0) {
        return;
    }

    // Default parameters for progress bar creation
    this._opts = utils.extend({
        color: '#555',
        strokeWidth: 1.0,
        trailColor: null,
        trailWidth: null,
        fill: null,
        text: {
            style: {
                color: null,
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: 0,
                margin: 0,
                transform: {
                    prefix: true,
                    value: 'translate(-50%, -50%)'
                }
            },
            autoStyleContainer: true,
            alignToBottom: true,
            value: null,
            className: 'progressbar-text'
        },
        svgStyle: {
            display: 'block',
            width: '100%'
        },
        warnings: false
    }, opts, true);  // Use recursive extend

    // If user specifies e.g. svgStyle or text style, the whole object
    // should replace the defaults to make working with styles easier
    if (utils.isObject(opts) && opts.svgStyle !== undefined) {
        this._opts.svgStyle = opts.svgStyle;
    }
    if (utils.isObject(opts) && utils.isObject(opts.text) && opts.text.style !== undefined) {
        this._opts.text.style = opts.text.style;
    }

    var svgView = this._createSvgView(this._opts);

    var element;
    if (utils.isString(container)) {
        element = document.querySelector(container);
    } else {
        element = container;
    }

    if (!element) {
        throw new Error('Container does not exist: ' + container);
    }

    this._container = element;
    this._container.appendChild(svgView.svg);
    if (this._opts.warnings) {
        this._warnContainerAspectRatio(this._container);
    }

    if (this._opts.svgStyle) {
        utils.setStyles(svgView.svg, this._opts.svgStyle);
    }

    // Expose public attributes before Path initialization
    this.svg = svgView.svg;
    this.path = svgView.path;
    this.trail = svgView.trail;
    this.text = null;

    var newOpts = utils.extend({
        attachment: undefined,
        shape: this
    }, this._opts);
    this._progressPath = new Path(svgView.path, newOpts);

    if (utils.isObject(this._opts.text) && this._opts.text.value !== null) {
        this.setText(this._opts.text.value);
    }
};

Shape.prototype.animate = function animate(progress, opts, cb) {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    this._progressPath.animate(progress, opts, cb);
};

Shape.prototype.stop = function stop() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    // Don't crash if stop is called inside step function
    if (this._progressPath === undefined) {
        return;
    }

    this._progressPath.stop();
};

Shape.prototype.destroy = function destroy() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    this.stop();
    this.svg.parentNode.removeChild(this.svg);
    this.svg = null;
    this.path = null;
    this.trail = null;
    this._progressPath = null;

    if (this.text !== null) {
        this.text.parentNode.removeChild(this.text);
        this.text = null;
    }
};

Shape.prototype.set = function set(progress) {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    this._progressPath.set(progress);
};

Shape.prototype.value = function value() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    if (this._progressPath === undefined) {
        return 0;
    }

    return this._progressPath.value();
};

Shape.prototype.setText = function setText(newText) {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    if (this.text === null) {
        // Create new text node
        this.text = this._createTextContainer(this._opts, this._container);
        this._container.appendChild(this.text);
    }

    // Remove previous text and add new
    if (utils.isObject(newText)) {
        utils.removeChildren(this.text);
        this.text.appendChild(newText);
    } else {
        this.text.innerHTML = newText;
    }
};

Shape.prototype._createSvgView = function _createSvgView(opts) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this._initializeSvg(svg, opts);

    var trailPath = null;
    // Each option listed in the if condition are 'triggers' for creating
    // the trail path
    if (opts.trailColor || opts.trailWidth) {
        trailPath = this._createTrail(opts);
        svg.appendChild(trailPath);
    }

    var path = this._createPath(opts);
    svg.appendChild(path);

    return {
        svg: svg,
        path: path,
        trail: trailPath
    };
};

Shape.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute('viewBox', '0 0 100 100');
};

Shape.prototype._createPath = function _createPath(opts) {
    var pathString = this._pathString(opts);
    return this._createPathElement(pathString, opts);
};

Shape.prototype._createTrail = function _createTrail(opts) {
    // Create path string with original passed options
    var pathString = this._trailString(opts);

    // Prevent modifying original
    var newOpts = utils.extend({}, opts);

    // Defaults for parameters which modify trail path
    if (!newOpts.trailColor) {
        newOpts.trailColor = '#eee';
    }
    if (!newOpts.trailWidth) {
        newOpts.trailWidth = newOpts.strokeWidth;
    }

    newOpts.color = newOpts.trailColor;
    newOpts.strokeWidth = newOpts.trailWidth;

    // When trail path is set, fill must be set for it instead of the
    // actual path to prevent trail stroke from clipping
    newOpts.fill = null;

    return this._createPathElement(pathString, newOpts);
};

Shape.prototype._createPathElement = function _createPathElement(pathString, opts) {
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathString);
    path.setAttribute('stroke', opts.color);
    path.setAttribute('stroke-width', opts.strokeWidth);

    if (opts.fill) {
        path.setAttribute('fill', opts.fill);
    } else {
        path.setAttribute('fill-opacity', '0');
    }

    return path;
};

Shape.prototype._createTextContainer = function _createTextContainer(opts, container) {
    var textContainer = document.createElement('div');
    textContainer.className = opts.text.className;

    var textStyle = opts.text.style;
    if (textStyle) {
        if (opts.text.autoStyleContainer) {
            container.style.position = 'relative';
        }

        utils.setStyles(textContainer, textStyle);
        // Default text color to progress bar's color
        if (!textStyle.color) {
            textContainer.style.color = opts.color;
        }
    }

    this._initializeTextContainer(opts, container, textContainer);
    return textContainer;
};

// Give custom shapes possibility to modify text element
Shape.prototype._initializeTextContainer = function(opts, container, element) {
    // By default, no-op
    // Custom shapes should respect API options, such as text.style
};

Shape.prototype._pathString = function _pathString(opts) {
    throw new Error('Override this function for each progress bar');
};

Shape.prototype._trailString = function _trailString(opts) {
    throw new Error('Override this function for each progress bar');
};

Shape.prototype._warnContainerAspectRatio = function _warnContainerAspectRatio(container) {
    if (!this.containerAspectRatio) {
        return;
    }

    var computedStyle = window.getComputedStyle(container, null);
    var width = parseFloat(computedStyle.getPropertyValue('width'), 10);
    var height = parseFloat(computedStyle.getPropertyValue('height'), 10);
    if (!utils.floatEquals(this.containerAspectRatio, width / height)) {
        console.warn(
            'Incorrect aspect ratio of container',
            '#' + container.id,
            'detected:',
            computedStyle.getPropertyValue('width') + '(width)',
            '/',
            computedStyle.getPropertyValue('height') + '(height)',
            '=',
            width / height
        );

        console.warn(
            'Aspect ratio of should be',
            this.containerAspectRatio
        );
    }
};

module.exports = Shape;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-input', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.css = __webpack_require__(27), _this.value = '', _this.ref = (0, _omi.createRef)(), _this.onInput = function () {
      _this.value = _this.ref.current.value;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'render',
    value: function render(props) {
      return Omi.h('input', _extends({ ref: this.ref }, (0, _omi.extractClass)(props, 'o-input'), { onInput: this.onInput }, props, { placeholder: props.placeholder }));
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Lower level API to animate any kind of svg path

var Tweenable = __webpack_require__(121);
var utils = __webpack_require__(3);

var EASING_ALIASES = {
    easeIn: 'easeInCubic',
    easeOut: 'easeOutCubic',
    easeInOut: 'easeInOutCubic'
};

var Path = function Path(path, opts) {
    // Throw a better error if not initialized with `new` keyword
    if (!(this instanceof Path)) {
        throw new Error('Constructor was called without new keyword');
    }

    // Default parameters for animation
    opts = utils.extend({
        duration: 800,
        easing: 'linear',
        from: {},
        to: {},
        step: function() {}
    }, opts);

    var element;
    if (utils.isString(path)) {
        element = document.querySelector(path);
    } else {
        element = path;
    }

    // Reveal .path as public attribute
    this.path = element;
    this._opts = opts;
    this._tweenable = null;

    // Set up the starting positions
    var length = this.path.getTotalLength();
    this.path.style.strokeDasharray = length + ' ' + length;
    this.set(0);
};

Path.prototype.value = function value() {
    var offset = this._getComputedDashOffset();
    var length = this.path.getTotalLength();

    var progress = 1 - offset / length;
    // Round number to prevent returning very small number like 1e-30, which
    // is practically 0
    return parseFloat(progress.toFixed(6), 10);
};

Path.prototype.set = function set(progress) {
    this.stop();

    this.path.style.strokeDashoffset = this._progressToOffset(progress);

    var step = this._opts.step;
    if (utils.isFunction(step)) {
        var easing = this._easing(this._opts.easing);
        var values = this._calculateTo(progress, easing);
        var reference = this._opts.shape || this;
        step(values, reference, this._opts.attachment);
    }
};

Path.prototype.stop = function stop() {
    this._stopTween();
    this.path.style.strokeDashoffset = this._getComputedDashOffset();
};

// Method introduced here:
// http://jakearchibald.com/2013/animated-line-drawing-svg/
Path.prototype.animate = function animate(progress, opts, cb) {
    opts = opts || {};

    if (utils.isFunction(opts)) {
        cb = opts;
        opts = {};
    }

    var passedOpts = utils.extend({}, opts);

    // Copy default opts to new object so defaults are not modified
    var defaultOpts = utils.extend({}, this._opts);
    opts = utils.extend(defaultOpts, opts);

    var shiftyEasing = this._easing(opts.easing);
    var values = this._resolveFromAndTo(progress, shiftyEasing, passedOpts);

    this.stop();

    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    this.path.getBoundingClientRect();

    var offset = this._getComputedDashOffset();
    var newOffset = this._progressToOffset(progress);

    var self = this;
    this._tweenable = new Tweenable();
    this._tweenable.tween({
        from: utils.extend({ offset: offset }, values.from),
        to: utils.extend({ offset: newOffset }, values.to),
        duration: opts.duration,
        easing: shiftyEasing,
        step: function(state) {
            self.path.style.strokeDashoffset = state.offset;
            var reference = opts.shape || self;
            opts.step(state, reference, opts.attachment);
        },
        finish: function(state) {
            if (utils.isFunction(cb)) {
                cb();
            }
        }
    });
};

Path.prototype._getComputedDashOffset = function _getComputedDashOffset() {
    var computedStyle = window.getComputedStyle(this.path, null);
    return parseFloat(computedStyle.getPropertyValue('stroke-dashoffset'), 10);
};

Path.prototype._progressToOffset = function _progressToOffset(progress) {
    var length = this.path.getTotalLength();
    return length - progress * length;
};

// Resolves from and to values for animation.
Path.prototype._resolveFromAndTo = function _resolveFromAndTo(progress, easing, opts) {
    if (opts.from && opts.to) {
        return {
            from: opts.from,
            to: opts.to
        };
    }

    return {
        from: this._calculateFrom(easing),
        to: this._calculateTo(progress, easing)
    };
};

// Calculate `from` values from options passed at initialization
Path.prototype._calculateFrom = function _calculateFrom(easing) {
    return Tweenable.interpolate(this._opts.from, this._opts.to, this.value(), easing);
};

// Calculate `to` values from options passed at initialization
Path.prototype._calculateTo = function _calculateTo(progress, easing) {
    return Tweenable.interpolate(this._opts.from, this._opts.to, progress, easing);
};

Path.prototype._stopTween = function _stopTween() {
    if (this._tweenable !== null) {
        this._tweenable.stop();
        this._tweenable = null;
    }
};

Path.prototype._easing = function _easing(easing) {
    if (EASING_ALIASES.hasOwnProperty(easing)) {
        return EASING_ALIASES[easing];
    }

    return easing;
};

module.exports = Path;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Circle shaped progress bar

var Shape = __webpack_require__(5);
var utils = __webpack_require__(3);

var Circle = function Circle(container, options) {
    // Use two arcs to form a circle
    // See this answer http://stackoverflow.com/a/10477334/1446092
    this._pathTemplate =
        'M 50,50 m 0,-{radius}' +
        ' a {radius},{radius} 0 1 1 0,{2radius}' +
        ' a {radius},{radius} 0 1 1 0,-{2radius}';

    this.containerAspectRatio = 1;

    Shape.apply(this, arguments);
};

Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;

Circle.prototype._pathString = function _pathString(opts) {
    var widthOfWider = opts.strokeWidth;
    if (opts.trailWidth && opts.trailWidth > opts.strokeWidth) {
        widthOfWider = opts.trailWidth;
    }

    var r = 50 - widthOfWider / 2;

    return utils.render(this._pathTemplate, {
        radius: r,
        '2radius': r * 2
    });
};

Circle.prototype._trailString = function _trailString(opts) {
    return this._pathString(opts);
};

module.exports = Circle;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

__webpack_require__(13);

__webpack_require__(4);

__webpack_require__(18);

__webpack_require__(21);

__webpack_require__(2);

__webpack_require__(6);

__webpack_require__(29);

__webpack_require__(35);

__webpack_require__(40);

__webpack_require__(43);

__webpack_require__(46);

__webpack_require__(49);

__webpack_require__(52);

__webpack_require__(55);

__webpack_require__(58);

__webpack_require__(61);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(70);

__webpack_require__(73);

__webpack_require__(76);

__webpack_require__(79);

__webpack_require__(82);

__webpack_require__(85);

__webpack_require__(88);

__webpack_require__(91);

__webpack_require__(94);

__webpack_require__(97);

__webpack_require__(100);

__webpack_require__(103);

__webpack_require__(106);

__webpack_require__(109);

__webpack_require__(112);

__webpack_require__(115);

__webpack_require__(118);

__webpack_require__(123);

__webpack_require__(126);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-input-number', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.minus = function () {
      if (_this.data.mDisabled) return;
      _this.data.value -= _this.props.step;
      _this.data.mDisabled = _this.data.value <= _this.props.min;
      if (_this.data.mDisabled) {
        _this.data.value = _this.props.min;
      }

      _this.data.pDisabled = _this.data.value >= _this.props.max;
      _this.update();
      _this.props.onChange(_this.data.value);
    }, _this.plus = function () {
      if (_this.data.pDisabled) return;
      _this.data.value += _this.props.step;
      _this.data.pDisabled = _this.data.value >= _this.props.max;

      if (_this.data.pDisabled) {
        _this.data.value = _this.props.max;
      }
      _this.data.mDisabled = _this.data.value <= _this.props.min;

      _this.update();
      _this.props.onChange(_this.data.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'install',
    value: function install() {
      this.data.value = this.props.value;
    }
  }, {
    key: 'render',
    value: function render(props, data) {
      return Omi.h(
        'div',
        (0, _omi.extractClass)(props, 'o-input-number'),
        Omi.h(
          'span',
          {
            role: 'button',
            'class': 'decrease' + (data.mDisabled ? ' is-disabled' : ''),
            onClick: this.minus
          },
          '-'
        ),
        Omi.h(
          'span',
          {
            role: 'button',
            'class': 'increase' + (data.pDisabled ? ' is-disabled' : ''),
            onClick: this.plus
          },
          '+'
        ),
        Omi.h(
          'div',
          { 'class': 'input' },
          Omi.h('input', {
            type: 'text',
            autocomplete: 'off',
            'aria-label': '\u63CF\u8FF0\u6587\u5B57',
            max: '10',
            min: '1',
            'class': 'o-input__inner',
            role: 'spinbutton',
            'aria-valuemax': '10',
            'aria-valuemin': '1',
            'aria-valuenow': '1',
            name: props.name,
            value: data.value,
            'aria-disabled': 'undefined'
          })
        )
      );
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(12);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-input-number {\n  position: relative;\n  width: 150px;\n  display: inline-block;\n}\n\nspan {\n  position: absolute;\n  border: 1px solid #ccc;\n  width: 32px;\n  height: 32px;\n  background-color: white;\n  cursor: pointer;\n  text-align: center;\n  line-height: 29px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.decrease {\n  left: 1px;\n  border-radius: 3px 0px 0px 3px;\n  user-select: none;\n}\n\n.increase {\n  right: 1px;\n  border-radius: 0px 3px 3px 0px;\n  user-select: none;\n}\n\n.input {\n  width: 100%;\n}\n\ninput {\n  width: 100px;\n  height: 32px;\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n  border: 1px solid #ccc;\n}", ""]);



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-badge', function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      if (props.content !== undefined) {
        return Omi.h(
          'div',
          (0, _omi.extractClass)(props, 'o-badge'),
          props.children[0],
          Omi.h(
            'span',
            { 'class': 'badge', style: 'top: -.7em;right: -1em;' },
            props.content
          )
        );
      }
      if (props.dot) {
        return Omi.h(
          'div',
          { 'class': 'o-badge' },
          props.children[0],
          Omi.h('span', { 'class': 'circle', style: 'position: absolute;top: -.2em;right: -.2em;' })
        );
      }
      return Omi.h(
        'div',
        { 'class': 'o-badge' },
        props.children[0]
      );
    }
  }]);

  return _class;
}(_omi.WeElement));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(15);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-badge {\n  position: relative;\n  display: inline-block;\n}\n\n.badge {\n  position: absolute;\n  padding: .15em .4em;\n  min-width: 8px;\n  border-radius: 18px;\n  background-color: #F95050;\n  color: #FFFFFF;\n  line-height: 1.2;\n  text-align: center;\n  font-size: 12px;\n  vertical-align: middle;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 35px;\n}\n\n.circle {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #F95050;\n}", ""]);



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(17);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".weui-btn {\n  background-color: #9CE6BF;\n  color: #D7F5E5;\n}\n\n.weui-btn_disabled.weui-btn {\n  cursor: default;\n}\n\n.weui-btn_plain-disabled.weui-btn {\n  cursor: default;\n}\n\nbutton.weui-btn,\ninput.weui-btn {\n  cursor: pointer;\n  width: 100%;\n  border-width: 0;\n  outline: 0;\n  -webkit-appearance: none;\n}\n\nbutton.weui-btn:focus,\ninput.weui-btn:focus {\n  outline: 0;\n}\n\nbutton.weui-btn_inline,\ninput.weui-btn_inline,\nbutton.weui-btn_mini,\ninput.weui-btn_mini {\n  width: auto;\n}\n\nbutton.weui-btn_plain-primary,\ninput.weui-btn_plain-primary,\nbutton.weui-btn_plain-default,\ninput.weui-btn_plain-default {\n  border-width: 1px;\n  background-color: transparent;\n}\n\n.weui-btn {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  color: #FFFFFF;\n  line-height: 2.55555556;\n  border-radius: 3px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  overflow: hidden;\n}\n\n.weui-btn:after {\n  content: \" \";\n  width: 200%;\n  height: 200%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  /* border:1px solid rgba(0, 0, 0, 0.2); */\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  box-sizing: border-box;\n  border-radius: 10px;\n}\n\n.weui-btn_inline {\n  display: inline-block;\n}\n\n.weui-btn_default {\n  background-color: #F8F7F8;\n  color: black;\n}\n\n.weui-btn_default:not(.weui-btn_disabled):visited {\n  color: #000000;\n}\n\n.weui-btn_default:not(.weui-btn_disabled):active {\n  background-color: rgb(243, 239, 239);\n}\n\n.weui-btn_primary {\n  background-color: #07C160;\n}\n\n.weui-btn_primary:not(.weui-btn_disabled):visited {\n  color: #FFFFFF;\n}\n\n.weui-btn_primary:not(.weui-btn_disabled):active {\n  background-color: rgb(5, 202, 100);\n  ;\n}\n\n.weui-btn_warn {\n  background-color: #F95050;\n}\n\n.weui-btn_warn:not(.weui-btn_disabled):visited {\n  color: #FFFFFF;\n}\n\n.weui-btn_warn:not(.weui-btn_disabled):active {\n  color: rgba(255, 255, 255, 0.6);\n  background-color: #F95050;\n}\n\n.weui-btn_disabled {\n  background-color: #9CE6BF;\n  color: #D7F5E5;\n}\n\n.weui-btn_disabled.weui-btn_default {\n  color: rgba(0, 0, 0, 0.3);\n  background-color: #F7F7F7;\n}\n\n.weui-btn_disabled.weui-btn_primary {\n  background-color: #9CE6BF;\n  color: #D7F5E5;\n}\n\n.weui-btn_disabled.weui-btn_warn {\n  background-color: rgb(240, 158, 157);\n}\n\n.weui-btn_loading .weui-loading {\n  margin: -0.2em 0.34em 0 0;\n}\n\n.weui-btn_loading.weui-btn_primary,\n.weui-btn_loading.weui-btn_warn {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.weui-btn_loading.weui-btn_warn {\n  background-color: #F95050;\n}\n\n.weui-btn_plain-primary {\n  color: #07C160;\n  border: 1px solid #07C160;\n}\n\n.weui-btn_plain-primary:not(.weui-btn_plain-disabled):active {\n  color: #9ED99D;\n  border-color: #9ED99D;\n}\n\n.weui-btn_plain-primary:after {\n  border-width: 0;\n}\n\n.weui-btn_plain-default {\n  color: #353535;\n  border: 1px solid #353535;\n}\n\n.weui-btn_plain-default:not(.weui-btn_plain-disabled):active {\n  color: rgba(53, 53, 53, 0.6);\n  border-color: rgba(53, 53, 53, 0.6);\n}\n\n.weui-btn_plain-default:after {\n  border-width: 0;\n}\n\n.weui-btn_plain-disabled {\n  color: rgba(0, 0, 0, 0.2);\n  border-color: rgba(0, 0, 0, 0.2);\n}\n\nbutton.weui-btn {\n  width: 100%;\n  border-width: 0;\n  outline: 0;\n  -webkit-appearance: none;\n}\n\nbutton.weui-btn:focus {\n  outline: 0;\n}\n\nbutton.weui-btn_inline,\ninput.weui-btn_inline,\nbutton.weui-btn_mini,\ninput.weui-btn_mini {\n  width: auto;\n}\n\nbutton.weui-btn_plain-primary,\ninput.weui-btn_plain-primary,\nbutton.weui-btn_plain-default,\ninput.weui-btn_plain-default {\n  border-width: 1px;\n  background-color: transparent;\n}\n\n.weui-btn_mini {\n  display: inline-block;\n  padding: 0 1.32em;\n  line-height: 2.3;\n  font-size: 13px;\n}\n\n.weui-btn+.weui-btn {\n  margin-top: 15px;\n}\n\n.weui-btn.weui-btn_inline+.weui-btn.weui-btn_inline {\n  margin-top: auto;\n  margin-left: 15px;\n}\n\n.weui-btn-area {\n  margin: 1.17647059em 15px 0.3em;\n}\n\n.weui-btn-area_inline {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n\n.weui-btn-area_inline .weui-btn {\n  margin-top: auto;\n  margin-right: 15px;\n  width: 100%;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n}\n\n.weui-btn-area_inline .weui-btn:last-child {\n  margin-right: 0;\n}", ""]);



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(19);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-dialog', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.close = function () {
      _this.props.onClose && _this.props.onClose();
    }, _this.confirm = function () {
      _this.props.onConfirm && _this.props.onConfirm();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var display = props.show ? 'block' : 'none';
      return Omi.h(
        'div',
        { 'class': 'o-dialog', style: { display: display } },
        Omi.h(
          'div',
          { 'class': 'content' },
          Omi.h(
            'h1',
            null,
            props.title
          ),
          Omi.h(
            'p',
            null,
            props.msg
          ),
          props.type === 'confirm' ? Omi.h(
            'div',
            null,
            Omi.h(
              'a',
              { 'class': 'close', onClick: this.close },
              props.cancelText
            ),
            Omi.h(
              'a',
              { 'class': 'ok', onClick: this.confirm },
              props.confirmText
            )
          ) : Omi.h(
            'a',
            { 'class': 'ok', onClick: this.confirm },
            props.confirmText
          )
        )
      );
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(20);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-dialog {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.4);\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  z-index: 100;\n}\n\n.content {\n  width: 80%;\n  height: auto;\n  background-color: white;\n  position: fixed;\n  left: 10%;\n  top: 20%;\n  border-radius: 4px;\n  text-align: center;\n}\n\nh1 {\n  font-size: 18px;\n  font-weight: normal;\n  padding: 20px;\n  margin: 0px;\n}\n\np {\n  font-size: 16px;\n  color: #666;\n  padding-bottom: 20px;\n  margin: 0px;\n  border-bottom: 1px solid #eee;\n}\n\na {\n  padding: 15px;\n  text-align: center;\n  font-size: 16px;\n  display: inline-block;\n  width: 50%;\n  box-sizing: border-box;\n}\n\n.ok {\n  color: #07C160;\n}\n\n.close {\n  border-right: 1px solid #eee;\n  color: black;\n}", ""]);



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(22);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-equal-space', function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var itemProps = null;
      if (props.itemMargin) {
        itemProps = { style: 'margin:' + props.itemMargin + ';' };
        delete props.itemMargin;
      }

      return Omi.h(
        'ul',
        _extends({}, (0, _omi.extractClass)(props, 'o-equal-space'), props),
        props.children.map(function (child) {
          return Omi.h(
            'li',
            _extends({ 'class': '_item' }, itemProps),
            child
          );
        })
      );
    }
  }]);

  return _class;
}(_omi.WeElement));

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(23);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "/*ul*/\n\n.o-equal-space {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  text-align: center;\n  border-top: 1px solid #ddd;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  width: 100%;\n  background-color: #F9F9F9;\n}\n\nul,\nli {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n._item {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n}", ""]);



/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(25);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-icon {\n  text-align: center;\n  display: inline-block;\n}\n\n.rotate {\n  display: inline-block;\n  -webkit-animation: rotate 1s infinite linear;\n  animation: rotate 1s infinite linear;\n}\n\ni div {\n  font-style: normal;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg)\n  }\n}\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg)\n  }\n}", ""]);



/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = {
  loading: ['M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z'],
  close: ['M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z'],
  pay: ['M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm159.6-585h-59.5c-3 0-5.8 1.7-7.1 4.4l-90.6 180H511l-90.6-180a8 8 0 0 0-7.1-4.4h-60.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9L457 515.7h-61.4c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V603h-81.7c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V717c0 4.4 3.6 8 8 8h54.3c4.4 0 8-3.6 8-8v-68.1h82c4.4 0 8-3.6 8-8V611c0-4.4-3.6-8-8-8h-82v-41.5h82c4.4 0 8-3.6 8-8v-29.9c0-4.4-3.6-8-8-8h-62l111.1-204.8c.6-1.2 1-2.5 1-3.8-.1-4.4-3.7-8-8.1-8z', 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm166.6 246.8L567.5 515.6h62c4.4 0 8 3.6 8 8v29.9c0 4.4-3.6 8-8 8h-82V603h82c4.4 0 8 3.6 8 8v29.9c0 4.4-3.6 8-8 8h-82V717c0 4.4-3.6 8-8 8h-54.3c-4.4 0-8-3.6-8-8v-68.1h-81.7c-4.4 0-8-3.6-8-8V611c0-4.4 3.6-8 8-8h81.7v-41.5h-81.7c-4.4 0-8-3.6-8-8v-29.9c0-4.4 3.6-8 8-8h61.4L345.4 310.8a8.07 8.07 0 0 1 7-11.9h60.7c3 0 5.8 1.7 7.1 4.4l90.6 180h3.4l90.6-180a8 8 0 0 1 7.1-4.4h59.5c4.4 0 8 3.6 8 8 .2 1.4-.2 2.7-.8 3.9z'],
  chat: ['M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z', 'M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3 443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5 445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142 23.5-55.2 35.5-113.9 35.8-174.5.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z'],
  'add-friend': ['M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z'],
  scan: ['M136 384h56c4.4 0 8-3.6 8-8V200h176c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-37.6 0-68 30.4-68 68v180c0 4.4 3.6 8 8 8zm512-184h176v176c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V196c0-37.6-30.4-68-68-68H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM376 824H200V648c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v180c0 37.6 30.4 68 68 68h180c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm512-184h-56c-4.4 0-8 3.6-8 8v176H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h180c37.6 0 68-30.4 68-68V648c0-4.4-3.6-8-8-8zm16-164H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z'],
  success: ['M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z', 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z'],
  warn: ['M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z', 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z'],
  check: ['M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'],
  'check-square': ['M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z'],
  rect: ['M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z'],
  github: ['M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z']
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(28);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-input {\n  position: relative;\n  display: inline-block;\n}\n\ninput:hover {\n  border: 1px solid #07C160;\n}\n\ninput:focus {\n  border: 1px solid #07C160;\n}\n\ninput:focus:hover {\n  border: 1px solid #07C160;\n}\n\ninput {\n  -webkit-appearance: none;\n  display: inline-block;\n  width: 100%;\n  height: 22px;\n  line-height: 1.5;\n  padding: 4px 7px;\n  font-size: 14px;\n  outline: none;\n  border: 1px solid #DADADA;\n  border-radius: 4px;\n  color: #515a6e;\n  background-color: #fff;\n  background-image: none;\n  position: relative;\n  cursor: text;\n  transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;\n  /* caret-color:#07C160; */\n  text-indent: 5px;\n}", ""]);



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(30);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-list', function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      props.children.forEach(function (child) {
        child.attributes.__inList = true;
      });
      return Omi.h(
        'div',
        (0, _omi.extractClass)(props, 'o-list'),
        Omi.h(
          'h2',
          { 'class': 'title' },
          props.title
        ),
        Omi.h(
          'div',
          null,
          props.children
        )
      );
    }
  }]);

  return _class;
}(_omi.WeElement));

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(31);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "h2.title {\n  font-size: 14px;\n  font-weight: normal;\n  color: #999;\n  text-align: left;\n  padding: 10px 15px;\n  margin: 0\n}", ""]);



/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(33);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-list-item', function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var border = props.__inList ? 'border-bottom-1px' : 'border-1px';
      return Omi.h(
        'li',
        { 'class': border },
        props.icon ? Omi.h('img', { src: props.icon }) : null,
        Omi.h(
          'span',
          { 'class': 'title' },
          props.title
        ),
        Omi.h(
          'span',
          { 'class': 'content' },
          props.content
        ),
        props.access ? Omi.h('i', null) : null
      );
    }
  }]);

  return _class;
}(_omi.WeElement));

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(34);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "li {\n  background: #fff;\n  position: relative;\n  display: inline-block;\n  display: flex;\n  padding: 10px;\n  align-items: center;\n  font-size: 16px;\n}\n\nli:active {\n  background: #f3f3f3;\n}\n\nli img {\n  height: 20px;\n  width: 20px;\n  margin: 5px;\n}\n\nli .title {\n  flex: 1;\n  text-align: left;\n}\n\nli .content {\n  padding: 0 5px;\n  color: #999;\n}\n\nli i {\n  content: ' ';\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #c8c8cd;\n  border-style: solid;\n  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  margin: 5px;\n}\n\n.border-bottom-1px::after {\n  content: ' ';\n  width: 100%;\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #d9d9d9;\n}\n\n@media (min-device-pixel-ratio: 1.5),\n(-webkit-min-device-pixel-ratio: 1.5) {\n  .border-bottom-1px::after {\n    transform: scaleY(0.7);\n    -webkit-transform: scaleY(0.7);\n  }\n}\n\n@media (min-device-pixel-ratio: 2),\n(-webkit-min-device-pixel-ratio: 1.5) {\n  .border-bottom-1px::after {\n    transform: scaleY(0.5);\n    -webkit-transform: scaleY(0.5);\n  }\n}\n\n.border-1px::after {\n  content: ' ';\n  width: 100%;\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #d9d9d9;\n}\n\n.border-1px::before {\n  content: ' ';\n  width: 100%;\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-top: 1px solid #d9d9d9;\n}\n\n@media (min-device-pixel-ratio: 1.5),\n(-webkit-min-device-pixel-ratio: 1.5) {\n  .border-1px::after,\n  .border-1px::before {\n    transform: scaleY(0.7);\n    -webkit-transform: scaleY(0.7);\n  }\n}\n\n@media (min-device-pixel-ratio: 2),\n(-webkit-min-device-pixel-ratio: 1.5) {\n  .border-1px::after,\n  .border-1px::before {\n    transform: scaleY(0.5);\n    -webkit-transform: scaleY(0.5);\n  }\n}", ""]);



/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(36);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-loading', function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      return Omi.h('div', _extends({}, (0, _omi.extractClass)(props, 'o-loading'), {
        style: { width: props.size, height: props.size }
      }));
    }
  }]);

  return _class;
}(_omi.WeElement));

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(37);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Imports
var urlEscape = __webpack_require__(38);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(39));

// Module
exports.push([module.i, ".o-loading {\n  display: inline-block;\n  -webkit-animation: e 1s steps(12) infinite;\n  animation: e 1s steps(12) infinite;\n  background: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-size: 100%;\n}\n\n@keyframes e {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(1turn);\n    transform: rotate(1turn);\n  }\n}", ""]);



/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Omi.h(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "120", height: "120", viewBox: "0 0 100 100" },
  Omi.h("path", { fill: "none", d: "M0 0h100v100H0z" }),
  Omi.h("rect", { width: "7", height: "20", x: "46.5", y: "40", fill: "#E9E9E9", rx: "5", ry: "5", transform: "translate(0 -30)" }),
  Omi.h("rect", { width: "7", height: "20", x: "46.5", y: "40", fill: "#989697", rx: "5", ry: "5", transform: "rotate(30 105.98 65)" }),
  Omi.h("rect", { width: "7", height: "20", x: "46.5", y: "40", fill: "#9B999A", rx: "5", ry: "5", transform: "rotate(60 75.98 65)" }),
  Omi.h("rect", { width: "7", height: "20", x: "46.5", y: "40", fill: "#A3A1A2", rx: "5", ry: "5", transform: "rotate(90 65 65)" }),
  Omi.h("rect", { width: "7", height: "20", x: "46.5", y: "40", fill: "#ABA9AA", rx: "5", ry: "5", transform: "rotate(120 58.66 65)" }),
  Omi.h("rect", { width: "7", height: "20", x: "46.5", y: "40", fill: "#B2B2B2", rx: "5", ry: "5", transform: "rotate(150 54.02 65)" }),
  Omi.h("rect", { width: "7", height: "20", x: "46.5", y: "40", fill: "#BAB8B9", rx: "5", ry: "5", transform: "rotate(180 50 65)" }),
  Omi.h("rect", { width: "7", height: "20", x: "46.5", y: "40", fill: "#C2C0C1", rx: "5", ry: "5", transform: "rotate(-150 45.98 65)" }),
  Omi.h("rect", { width: "7", height: "20", x: "46.5", y: "40", fill: "#CBCBCB", rx: "5", ry: "5", transform: "rotate(-120 41.34 65)" }),
  Omi.h("rect", { width: "7", height: "20", x: "46.5", y: "40", fill: "#D2D2D2", rx: "5", ry: "5", transform: "rotate(-90 35 65)" }),
  Omi.h("rect", { width: "7", height: "20", x: "46.5", y: "40", fill: "#DADADA", rx: "5", ry: "5", transform: "rotate(-60 24.02 65)" }),
  Omi.h("rect", { width: "7", height: "20", x: "46.5", y: "40", fill: "#E2E2E2", rx: "5", ry: "5", transform: "rotate(-30 -5.98 65)" })
);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(41);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-dropdown-menu', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (index) {
      _this.props.onChange(index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      return Omi.h(
        'div',
        (0, _omi.extractClass)(props, 'o-dropdown-menu'),
        Omi.h('span', { 'class': 'arrow' }),
        Omi.h(
          'div',
          { 'class': 'ctn' },
          props.children.map(function (item, index) {
            return Omi.h(
              'a',
              null,
              Omi.h('o-icon', { 'class': 'icon', color: item.attributes.icon.color, path: item.attributes.icon.path }),
              Omi.h(
                'div',
                { 'class': 'wd' },
                item.attributes.text
              )
            );
          })
        )
      );
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(42);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-dropdown-menu {\n  max-width: 160px;\n  position: relative;\n}\n\n.ctn {\n  border-radius: 5px;\n  background-color: #4C4B4C;\n  color: #F2F2F2;\n  overflow: hidden;\n}\n\n.ctn>a {\n  text-align: center;\n  display: block;\n  position: relative;\n  line-height: 35px;\n  cursor: pointer;\n  white-space: nowrap;\n  text-align: left;\n  height: 60px;\n  color: #F2F2F2;\n}\n\na:active {\n  background-color: rgb(63, 63, 63);\n}\n\n.icon {\n  position: absolute;\n  left: 20px;\n  top: 13px;\n}\n\n.wd {\n  margin-left: 60px;\n  line-height: 60px;\n  border-bottom: 1px solid #555555;\n}\n\n.arrow {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background-color: #4C4B4C;\n  transform: rotate(45deg);\n  border-radius: 2px;\n  top: -4px;\n  right: 15px;\n  ;\n}", ""]);



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(44);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(2);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-msg', function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'close',
    value: function close() {
      this.props.close();
    }
  }, {
    key: 'confirm',
    value: function confirm() {
      this.props.confirm();
    }
  }, {
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var button = props.type === 'warn' ? 'warn' : 'primary';
      return Omi.h(
        'div',
        (0, _omi.extractClass)(props, 'o-msg'),
        Omi.h('o-icon', {
          type: props.type,
          scale: 4,
          isFill: true,
          color: props.type === 'warn' ? '#F95050' : '#07C160'
        }),
        Omi.h(
          'h2',
          { 'class': 'title' },
          props.title
        ),
        Omi.h(
          'p',
          null,
          props.content
        ),
        Omi.h(
          'o-button',
          { type: button },
          'Ok'
        ),
        Omi.h(
          'o-button',
          { type: 'default' },
          'Cancel'
        )
      );
    }
  }]);

  return _class;
}(_omi.WeElement));

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(45);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "h2 {\n  font-size: 20px;\n}\n\np {\n  font-size: 16px;\n  color: #999\n}\n\ndiv {\n  text-align: center;\n}", ""]);



/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(47);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-nav', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (index) {
      _this.props.onChange(index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      return Omi.h(
        'ul',
        (0, _omi.extractClass)(props, 'o-nav'),
        props.children.map(function (item, index) {
          var props = {};
          var isActive = item.attributes && item.attributes.active;

          if (isActive) {
            props['class'] = 'active';
          } else {
            props.onClick = function () {
              return _this2.onClick(index);
            };
          }

          return Omi.h(
            'li',
            props,
            item.children[0]
          );
        })
      );
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(48);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "ul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  color: #1A1A1A;\n}\n\nli {\n  display: inline-block;\n  margin-right: 35px;\n  line-height: 35px;\n  cursor: pointer;\n}\n\nli.active {\n  color: #07C160;\n  border-bottom: 2px solid rgb(3, 196, 96);\n  cursor: default;\n}", ""]);



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _omi = __webpack_require__(0);

var _index = __webpack_require__(50);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-pagination', (_temp = _class = function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'install',
    value: function install() {
      this.data = Object.assign({
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
      }, this.props);
      this.pageNum = Math.ceil(this.data.total / this.data.pageSize);
    }
  }, {
    key: 'receiveProps',
    value: function receiveProps(props, data) {
      data = Object.assign(data, props);
    }
  }, {
    key: 'beforeUpdate',
    value: function beforeUpdate() {
      this.pageNum = Math.ceil(this.data.total / this.data.pageSize);
    }
  }, {
    key: 'beforeRender',
    value: function beforeRender() {
      this.pageNum = Math.ceil(this.data.total / this.data.pageSize);
    }
  }, {
    key: 'goto',
    value: function goto(index) {
      this.data.currentPage = index;
      this.props.onChange(index);
      this.update();
    }
  }, {
    key: 'render',
    value: function render(props) {
      var arr = [];
      var opt = this.data,
          interval = this.getInterval();

      if (interval[0] > 0 && opt.numEdge > 0) {
        var end = Math.min(opt.numEdge, interval[0]);
        for (var i = 0; i < end; i++) {
          arr.push(this.getItem(i, i + 1));
        }

        if (opt.numEdge < interval[0] && opt.ellipseText) {
          arr.push(Omi.h('li', { 'class': 'o-icon more btn-quicknext o-icon-more' }));
        }
      }

      for (var i = interval[0]; i < interval[1]; i++) {
        arr.push(this.getItem(i, i + 1));
      }

      if (interval[1] < this.pageNum && opt.numEdge > 0) {
        if (this.pageNum - opt.numEdge > interval[1] && opt.ellipseText) {
          arr.push(Omi.h('li', { 'class': 'o-icon more btn-quicknext o-icon-more' }));
        }
        var begin = Math.max(this.pageNum - opt.numEdge, interval[1]);
        for (var i = begin; i < this.pageNum; i++) {
          arr.push(this.getItem(i, i + 1));
        }
      }

      return Omi.h(
        'div',
        (0, _omi.extractClass)(props, 'o-pagination is-background'),
        opt.prevShow && this.getPrev(),
        ' ',
        Omi.h(
          'ul',
          { 'class': 'o-pager' },
          arr.map(function (p) {
            return p;
          })
        ),
        ' ',
        opt.nextShow && this.getNext()
      );
    }
  }, {
    key: 'getInterval',
    value: function getInterval() {
      var ne_half = Math.ceil(this.data.numDisplay / 2);
      var upper_limit = this.pageNum - this.data.numDisplay;
      var start = this.data.currentPage > ne_half ? Math.max(Math.min(this.data.currentPage - ne_half, upper_limit), 0) : 0;
      var end = this.data.currentPage > ne_half ? Math.min(this.data.currentPage + ne_half, this.pageNum) : Math.min(this.data.numDisplay, this.pageNum);
      return [start, end];
    }
  }, {
    key: 'getPrev',
    value: function getPrev() {
      var _this2 = this;

      if (this.data.currentPage === 0) {
        return Omi.h(
          'button',
          { type: 'button', 'class': 'btn-prev', disabled: 'disabled' },
          Omi.h(
            'svg',
            {
              viewBox: '64 64 896 896',
              'class': '',
              'data-icon': 'left',
              width: '1em',
              height: '1em',
              fill: 'currentColor',
              'aria-hidden': 'true'
            },
            Omi.h('path', { d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z' })
          )
        );
      }

      return Omi.h(
        'button',
        {
          type: 'button',
          'class': 'btn-prev',
          onclick: function onclick(e) {
            _this2.goto(_this2.data.currentPage - 1);
          }
        },
        Omi.h(
          'svg',
          {
            viewBox: '64 64 896 896',
            'class': '',
            'data-icon': 'left',
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true'
          },
          Omi.h('path', { d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z' })
        )
      );
    }
  }, {
    key: 'getNext',
    value: function getNext() {
      var _this3 = this;

      if (this.data.currentPage === this.pageNum - 1) {
        return Omi.h(
          'button',
          { type: 'button', 'class': 'btn-next', disabled: 'disabled' },
          Omi.h(
            'svg',
            {
              viewBox: '64 64 896 896',
              'class': '',
              'data-icon': 'right',
              width: '1em',
              height: '1em',
              fill: 'currentColor',
              'aria-hidden': 'true'
            },
            Omi.h('path', { d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z' })
          )
        );
      }

      return Omi.h(
        'button',
        {
          type: 'button',
          'class': 'btn-next',
          onclick: function onclick(e) {
            _this3.goto(_this3.data.currentPage + 1);
          }
        },
        Omi.h(
          'svg',
          {
            viewBox: '64 64 896 896',
            'class': '',
            'data-icon': 'right',
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true'
          },
          Omi.h('path', { d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z' })
        )
      );
    }
  }, {
    key: 'getItem',
    value: function getItem(pageIndex, text) {
      var _this4 = this;

      if (this.data.currentPage === pageIndex) {
        return Omi.h(
          'li',
          { 'class': 'number active' },
          text
        );
      }
      return Omi.h(
        'li',
        {
          'class': 'number',
          onclick: function onclick(e) {
            _this4.goto(pageIndex);
          }
        },
        text
      );
    }
  }]);

  return _class;
}(_omi.WeElement), _class.observe = true, _temp));

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(51);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "div {\n  color: rgba(0, 0, 0, .65);\n}\n\n* {\n  box-sizing: border-box;\n}\n\nul,\nli {\n  padding: 0;\n  margin: 0;\n}\n\nli {\n  display: inline-block;\n  min-width: 32px;\n  height: 32px;\n  border: 1px solid #ccc;\n  vertical-align: middle;\n  line-height: 32px;\n  text-align: center;\n  margin: 0 3px 0 3px;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\n.o-pager {\n  display: inline-block;\n}\n\nbutton {\n  width: 32px;\n  height: 32px;\n  appearance: none;\n  -webkit-appearance: none;\n  position: relative;\n  border: 1px solid #ccc;\n  background: none;\n  top: 1px;\n  border-radius: 3px;\n  cursor: pointer;\n  outline: none;\n}\n\nbutton.btn-next:not(disabled):active,\nbutton.btn-prev:not(disabled):active {\n  background-color: #eee;\n}\n\nbutton:disabled {\n  pointer-events: none;\n  border-color: #eee;\n  cursor: default;\n}\n\n.more:after {\n  content: '...';\n}\n\n.more {\n  border: none;\n  cursor: default;\n}\n\n.active {\n  border-color: #07C160;\n  color: rgb(4, 161, 80);\n}\n\nsvg {\n  position: relative;\n  top: 2px;\n}", ""]);



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(53);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(4);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-popup', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.close = function () {
      _this.props.onClose && _this.props.onClose();
    }, _this.confirm = function () {
      _this.props.onConfirm && _this.props.onConfirm();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      if (!props.show) return;
      return Omi.h(
        'div',
        { 'class': 'o-popup' },
        Omi.h(
          'div',
          { 'class': '_content', style: 'width:' + props.width + 'px;margin-left:' + props.width / -2 + 'px' },
          Omi.h(
            'div',
            { 'class': '_header' },
            Omi.h(
              'span',
              { 'class': '_title' },
              props.title
            ),
            Omi.h('o-icon', { 'class': '_close', scale: 1, type: 'close', onClick: this.close })
          ),
          Omi.h(
            'div',
            { 'class': '_main' },
            props.children,
            Omi.h(
              'div',
              { 'class': '_footer' },
              Omi.h(
                'o-button',
                { size: 'small', type: 'default', onClick: this.close },
                props.cancelText
              ),
              Omi.h(
                'o-button',
                {
                  size: 'small',
                  'class': '_okBtn',
                  onClick: this.confirm,
                  type: 'primary'
                },
                props.confirmText
              )
            )
          )
        )
      );
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(54);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-popup {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.4);\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  z-index: 100;\n}\n\n._content {\n  width: 80%;\n  height: auto;\n  min-height: 200px;\n  background-color: white;\n  position: fixed;\n  left: 50%;\n  margin-left: -40%;\n  top: 20%;\n  border-radius: 4px;\n}\n\n._header {\n  height: 40px;\n  border-bottom: 1px solid #ccc;\n  margin: 15px 10px;\n}\n\n._close {\n  position: absolute;\n  right: 10px;\n  top: 20px;\n  cursor: pointer;\n}\n\n._title {\n  position: absolute;\n  left: 10px;\n  top: 20px;\n}\n\n._main {\n  margin: 0 auto;\n  margin-bottom: 20px;\n  width: 70%;\n}\n\n._footer {\n  text-align: right;\n  margin-top: 10px;\n}\n\n._okBtn {\n  margin-left: 10px;\n}", ""]);



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _omi = __webpack_require__(0);

var _index = __webpack_require__(56);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-progress', (_temp = _class = function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      return Omi.h(
        'div',
        _extends({}, (0, _omi.extractClass)(props, 'o-progress'), { style: 'background-color: ' + props.bgColor + ';' }),
        Omi.h('div', {
          'class': 'inner',
          style: 'width:' + props.value + '%;background-color: ' + props.innerColor + ';'
        })
      );
    }
  }]);

  return _class;
}(_omi.WeElement), _class.observe = true, _temp));

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(57);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-progress {\n  width: 100%;\n  height: 12px;\n  background-color: #ccc;\n  border-radius: 6px;\n}\n\n.inner {\n  height: 12px;\n  width: 60%;\n  background-color: #07C160;\n  border-radius: 6px;\n}", ""]);



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(59);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import cellStyle from '../cells/_index.css'
// import '../icon/font-face.css'
// import fontStyle from '../icon/_font.scss'

(0, _omi.define)('o-selection', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.onTapMore = function () {
      _this.fire('tapmore');
    }, _this.onSelectSingle = function (index) {
      _this.fire('select', { index: index });
    }, _this.onSelect = function (index) {
      var cloneIdxs = _this.props.selectedIndexs.slice(0);
      var position = _this.props.selectedIndexs.indexOf(index);
      if (position === -1) {
        cloneIdxs.push(index);
      } else {
        cloneIdxs.splice(position, 1);
      }
      //Prevent repeated tap width setTimeout
      setTimeout(function () {
        _this.fire('select', { indexs: cloneIdxs });
      }, 500);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      if (props.single) {
        return Omi.h(
          'div',
          (0, _omi.extractClass)(props, 'weui-cells weui-cells_radio'),
          props.items.map(function (item, index) {
            return Omi.h(
              'label',
              {
                'class': 'weui-cell weui-check__label',
                'for': 'x_' + _this2.elementId + '_' + index,
                onClick: function onClick() {
                  _this2.onSelectSingle(index);
                }
              },
              Omi.h(
                'div',
                { 'class': 'weui-cell__bd' },
                Omi.h(
                  'p',
                  null,
                  item.text
                )
              ),
              Omi.h(
                'div',
                { 'class': 'weui-cell__ft' },
                Omi.h('input', {
                  type: 'radio',
                  'class': 'weui-check',
                  checked: props.selectedIndex === index,
                  name: 'radio1',
                  id: 'x_' + _this2.elementId + '_' + index
                }),
                props.selectedIndex === index && Omi.h('o-icon', { 'class': 'icon', type: 'check', scale: '1', color: '#07C160' })
              )
            );
          }),
          props.onTapMore && Omi.h(
            'a',
            {
              href: 'javascript:void(0);',
              ontap: this.onTapMore,
              'class': 'weui-cell weui-cell_link'
            },
            Omi.h(
              'div',
              { 'class': 'weui-cell__bd' },
              '\u6DFB\u52A0\u66F4\u591A'
            )
          )
        );
      } else {
        return Omi.h(
          'div',
          (0, _omi.extractClass)(props, 'weui-cells weui-cells_checkbox'),
          props.items.map(function (item, index) {
            return Omi.h(
              'label',
              {
                'class': 'weui-cell weui-check__label',
                'for': 'x_' + _this2.elementId + '_' + index,
                onClick: function onClick() {
                  _this2.onSelect(index);
                }
              },
              Omi.h(
                'div',
                { 'class': 'weui-cell__hd' },
                Omi.h('input', {
                  type: 'checkbox',
                  'class': 'weui-check',
                  name: 'checkbox1',
                  id: 'x_' + _this2.elementId + '_' + index,
                  checked: props.selectedIndexs.indexOf(index) !== -1
                }),
                Omi.h('o-icon', {
                  'class': 'icon',
                  type: props.selectedIndexs.indexOf(index) !== -1 ? 'check-square' : 'rect',
                  scale: '1.3',
                  color: props.selectedIndexs.indexOf(index) !== -1 ? '#07C160' : '#ccc'
                })
              ),
              Omi.h(
                'div',
                { 'class': 'weui-cell__bd' },
                Omi.h(
                  'p',
                  null,
                  item.text
                )
              )
            );
          }),
          props.more && Omi.h(
            'a',
            { href: 'javascript:void(0);', 'class': 'weui-cell weui-cell_link' },
            Omi.h(
              'div',
              { 'class': 'weui-cell__bd' },
              '\u6DFB\u52A0\u66F4\u591A'
            )
          )
        );
      }
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(60);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".weui-check__label {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.weui-check__label:active {\n  background-color: #ECECEC;\n}\n\n.weui-check {\n  position: absolute;\n  left: -9999em;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n}\n\n.weui-cells {\n  background-color: #FFFFFF;\n  line-height: 1.47058824;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n\n.weui-cells__title+.weui-cells {\n  margin-top: 0;\n}\n\n.weui-cells__tips {\n  margin-top: .3em;\n  color: #808080;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n}\n\n.weui-cell {\n  padding: 10px 15px;\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n}\n\n.weui-cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #e5e5e5;\n  color: #e5e5e5;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n  left: 15px;\n  z-index: 2;\n}\n\n.weui-cell:first-child:before {\n  display: none;\n}\n\n.weui-cell_primary {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  align-items: flex-start;\n}\n\n.weui-cell__bd {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n}\n\n.weui-cell__ft {\n  text-align: right;\n  color: #808080;\n}\n\n.weui-cell_swiped {\n  display: block;\n  padding: 0;\n}\n\n.weui-cell_swiped>.weui-cell__bd {\n  position: relative;\n  z-index: 1;\n  background-color: #FFFFFF;\n}\n\n.weui-cell_swiped>.weui-cell__ft {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  color: #FFFFFF;\n}\n\n.weui-cells_radio .weui-cell__ft {\n  padding-left: 0.35em;\n}\n\n.weui-cells_radio .weui-check:checked+.weui-icon-checked:before {\n  display: block;\n  content: '\\EA08';\n  color: #07C160;\n  font-size: 16px;\n}\n\n.weui-cells_checkbox .weui-cell__hd {\n  padding-right: 0.35em;\n}\n\n.weui-cells_checkbox .weui-icon-checked:before {\n  content: '\\EA01';\n  color: #C9C9C9;\n  font-size: 23px;\n  display: block;\n}\n\n.weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before {\n  content: '\\EA06';\n  color: #07C160;\n}\n\n.weui-cells_form .weui-cell__ft {\n  font-size: 0;\n}\n\n.weui-cells_form .weui-icon-warn {\n  display: none;\n}\n\n.weui-cells_form input,\n.weui-cells_form textarea,\n.weui-cells_form label[for] {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.weui-cell_warn {\n  color: #E64340;\n}\n\n.weui-cell_warn .weui-icon-warn {\n  display: inline-block;\n}\n\n.weui-media-box_small-appmsg .weui-cells {\n  margin-top: 0;\n}\n\n.weui-media-box_small-appmsg .weui-cells:before {\n  display: none;\n}\n\n.weui-cell_select-before {\n  padding-right: 15px;\n}\n\n.weui-cell_select-before .weui-select {\n  width: 105px;\n  box-sizing: border-box;\n}\n\n.weui-cell_select-before .weui-cell__hd {\n  position: relative;\n}\n\n.weui-cell_select-before .weui-cell__hd:after {\n  content: \" \";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #e5e5e5;\n  color: #e5e5e5;\n  -webkit-transform-origin: 100% 0;\n  transform-origin: 100% 0;\n  -webkit-transform: scaleX(0.5);\n  transform: scaleX(0.5);\n}\n\n.weui-cell_select-before .weui-cell__hd:before {\n  content: \" \";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  margin-top: -4px;\n}\n\n.weui-cell_select-before .weui-cell__bd {\n  padding-left: 15px;\n}\n\n.weui-cell_select-before .weui-cell__bd:after {\n  display: none;\n}\n\n.weui-cell_select-after {\n  padding-left: 15px;\n}\n\n.weui-cell_select-after .weui-select {\n  padding-left: 0;\n}\n\n.weui-cell_vcode {\n  padding-top: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n}\n\n.weui-cell_switch {\n  padding-top: 6.5px;\n  padding-bottom: 6.5px;\n}\n\n.icon {\n  position: relative;\n  top: 3px;\n}\n\n.weui-cell_select {\n  padding: 0;\n}\n\n.weui-cell_select .weui-select {\n  padding-right: 30px;\n}\n\n.weui-cell_select .weui-cell__bd:after {\n  content: \" \";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  margin-top: -4px;\n}\n\n.weui-cell_access {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  color: inherit;\n}\n\n.weui-cell_access:active {\n  background-color: #ECECEC;\n}\n\n.weui-cell_access .weui-cell__ft {\n  padding-right: 13px;\n  position: relative;\n}\n\n.weui-cell_access .weui-cell__ft:after {\n  content: \" \";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  margin-top: -4px;\n  right: 2px;\n}\n\n.weui-cell_link {\n  color: #586C94;\n  font-size: 14px;\n}\n\n.weui-cell_link:first-child:before {\n  display: block;\n}\n\n.weui-cell_warn .weui-textarea-counter {\n  color: #E64340;\n}", ""]);



/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(62);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-slider', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.start = function (evt) {
      _this._x = evt.touches[0].pageX;
      document.addEventListener('touchmove', _this.move);
      document.addEventListener('touchend', _this.end);
    }, _this.move = function (evt) {
      _this.percentage += (evt.touches[0].pageX - _this._x) / _this._width * 100;
      _this.percentage < 0 && (_this.percentage = 0);
      _this.percentage > 100 && (_this.percentage = 100);
      _this._x = evt.touches[0].pageX;
      //Update immediately!For Smoother interaction！
      //omi v5.0.10 fix this
      //this.update()
      _this.fire('change', _this.percentage);
    }, _this.end = function () {
      document.removeEventListener('touchmove', _this.move);
      document.removeEventListener('touchend', _this.end);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'install',
    value: function install() {
      this.percentage = this.props.percentage;
    }
  }, {
    key: 'installed',
    value: function installed() {
      this._width = this._ele.getBoundingClientRect().width;
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      if (props.disabled) {
        return Omi.h(
          'div',
          (0, _omi.extractClass)(props, 'weui-slider'),
          Omi.h(
            'div',
            {
              ref: function ref(e) {
                _this2._ele = e;
              },
              'class': 'weui-slider__inner'
            },
            Omi.h('div', { style: 'width: 0;', 'class': 'weui-slider__track' }),
            Omi.h('div', { style: 'left: 0;', 'class': 'weui-slider__handler' })
          )
        );
      }

      return Omi.h(
        'div',
        _extends({}, (0, _omi.extractClass)(props, 'weui-slider-box'), { onTouchStart: this.start }),
        Omi.h(
          'div',
          { 'class': 'weui-slider' },
          Omi.h(
            'div',
            {
              ref: function ref(e) {
                _this2._ele = e;
              },
              'class': 'weui-slider__inner'
            },
            Omi.h('div', {
              id: 'sliderTrack',
              style: 'width: ' + this.percentage + '%;',
              'class': 'weui-slider__track'
            }),
            Omi.h('div', {
              id: 'sliderHandler',
              ref: function ref(e) {
                _this2._handler = e;
              },
              style: 'left: ' + this.percentage + '%;',
              'class': 'weui-slider__handler'
            })
          )
        ),
        Omi.h(
          'div',
          { id: 'sliderValue', 'class': 'weui-slider-box__value' },
          Math.round(this.percentage)
        )
      );
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(63);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".weui-slider {\n  padding: 15px 18px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.weui-slider__inner {\n  position: relative;\n  height: 2px;\n  background-color: #E9E9E9;\n}\n\n.weui-slider__track {\n  height: 2px;\n  background-color: #07C160;\n  width: 0;\n}\n\n.weui-slider__handler {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 28px;\n  height: 28px;\n  margin-left: -14px;\n  margin-top: -14px;\n  border-radius: 50%;\n  background-color: #FFFFFF;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);\n}\n\n.weui-slider-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n}\n\n.weui-slider-box .weui-slider {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n}\n\n.weui-slider-box__value {\n  margin-left: .5em;\n  min-width: 24px;\n  color: #808080;\n  text-align: center;\n  font-size: 14px;\n}", ""]);



/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(65);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-switch', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function () {
      _this.fire('change', _this._ele.checked);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      if (props.checked) {
        return Omi.h(
          'label',
          _extends({ 'for': 'x_' + this.elementId }, (0, _omi.extractClass)(props, 'weui-switch-cp')),
          Omi.h('input', {
            id: 'x_' + this.elementId,
            ref: function ref(e) {
              _this2._ele = e;
            },
            'class': 'weui-switch-cp__input',
            type: 'checkbox',
            onChange: this.onChange,
            checked: 'checked'
          }),
          Omi.h('div', { 'class': 'weui-switch-cp__box' })
        );
      }

      return Omi.h('input', _extends({}, (0, _omi.extractClass)(props, 'weui-switch'), {
        type: 'checkbox',
        ref: function ref(e) {
          _this2._ele = e;
        },
        onChange: this.onChange
      }));
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(66);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.weui-switch {\n  -webkit-appearance: none;\n  appearance: none;\n  display: inline-block;\n}\n\n.weui-switch-cp {\n  display: inline-block;\n}\n\n.weui-switch,\n.weui-switch-cp__box {\n  position: relative;\n  width: 52px;\n  height: 32px;\n  border: 1px solid #DFDFDF;\n  outline: 0;\n  border-radius: 16px;\n  box-sizing: border-box;\n  background-color: #DFDFDF;\n  -webkit-transition: background-color 0.1s, border 0.1s;\n  transition: background-color 0.1s, border 0.1s;\n}\n\n.weui-switch:before,\n.weui-switch-cp__box:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FDFDFD;\n  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n  transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n}\n\n.weui-switch:after,\n.weui-switch-cp__box:after {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FFFFFF;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n  transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n}\n\n.weui-switch:checked,\n.weui-switch-cp__input:checked~.weui-switch-cp__box {\n  border-color: #07C160;\n  background-color: #07C160;\n}\n\n.weui-switch:checked:before,\n.weui-switch-cp__input:checked~.weui-switch-cp__box:before {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n\n.weui-switch:checked:after,\n.weui-switch-cp__input:checked~.weui-switch-cp__box:after {\n  -webkit-transform: translateX(20px);\n  transform: translateX(20px);\n}\n\n.weui-switch-cp__input {\n  position: absolute;\n  left: -9999px;\n}\n\n.weui-switch-cp__box {\n  display: block;\n}", ""]);



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(68);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-tab', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (index) {
      _this.props.onChange(index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      return Omi.h(
        'ul',
        (0, _omi.extractClass)(props, 'o-tab'),
        props.children.map(function (item, index) {
          var props = {};
          var isActive = item.attributes && item.attributes.active;

          if (isActive) {
            props['class'] = 'active';
          } else {
            props.onClick = function () {
              return _this2.onClick(index);
            };
          }

          return Omi.h(
            'li',
            props,
            item.children[0]
          );
        })
      );
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(69);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-tab {\n  border: 1px solid #171717;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  color: #1A1A1A;\n}\n\nli {\n  display: inline-block;\n  text-align: center;\n  line-height: 35px;\n  cursor: pointer;\n  white-space: nowrap;\n  width: 50%;\n  color: #171717;\n  background-color: #F2F2F2;\n}\n\nli.active {\n  color: white;\n  background-color: #171717;\n  cursor: default;\n}", ""]);



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(71);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-tab-bar', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (index) {
      _this.props.onChange(index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      return Omi.h(
        'ul',
        (0, _omi.extractClass)(props, 'o-tab-bar'),
        props.children.map(function (child, index) {
          var props = {};

          if (index !== props.index) {
            props.onClick = function () {
              return _this2.onClick(index);
            };
          }

          return Omi.h(
            'li',
            _extends({ 'class': 'item' }, props),
            child
          );
        })
      );
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(72);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "/*ul*/\n\n.o-tab-bar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  text-align: center;\n  border-top: 1px solid #ddd;\n  padding-top: 13px;\n  padding-bottom: 5px;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #F9F9F9;\n}\n\nul,\nli {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.item {\n  cursor: pointer;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n}", ""]);



/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(74);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-timeline', function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      return Omi.h(
        'div',
        (0, _omi.extractClass)(props, 'o-timeline'),
        props.data.map(function (item) {
          return Omi.h(
            'div',
            { 'class': 'item' },
            Omi.h('div', { 'class': 'circle' }),
            Omi.h(
              'div',
              { 'class': 'msgs' },
              Omi.h(
                'div',
                { 'class': 'one' },
                ' ',
                Omi.h(
                  'div',
                  { 'class': 'msg left' },
                  item.msgA
                ),
                ' ',
                Omi.h(
                  'div',
                  { 'class': 'msg' },
                  item.msgB
                )
              ),
              Omi.h(
                'div',
                { 'class': 'two' },
                '  ',
                Omi.h(
                  'div',
                  { 'class': 'msg left' },
                  item.msgC
                ),
                ' ',
                Omi.h(
                  'div',
                  { 'class': 'msg' },
                  item.msgD
                )
              )
            )
          );
        })
      );
    }
  }]);

  return _class;
}(_omi.WeElement));

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(75);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-timeline {\n  font-size: 12px;\n  padding-top: 30px;\n  text-align: left;\n}\n\n.item {\n  border-left: 1px solid #D9D9D9;\n  position: relative;\n  height: 50px;\n}\n\n.item:last-child {\n  height: 35px;\n}\n\n.circle {\n  border-radius: 50%;\n  background-color: #D9D9D9;\n  width: 6px;\n  height: 6px;\n  position: absolute;\n  top: -3px;\n  left: -3px;\n}\n\n.msgs {\n  position: relative;\n  top: -5px;\n  left: 10px;\n}\n\n.left {\n  width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.two {\n  color: #7C7C7C;\n}\n\n.msg {\n  height: 15px;\n  line-height: 15px;\n  vertical-align: top;\n  display: inline-block;\n}", ""]);



/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(77);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-toptip', function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'hide',
    value: function hide() {
      clearTimeout(this.timer);
      this.props.hide && this.props.hide();
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      var top = props.show ? '0' : '-42px';
      this.timer = setTimeout(function () {
        _this2.hide();
      }, 4000);
      var type = props.type ? 'weui-toptip-' + props.type : 'weui-toptip-primary';
      return Omi.h(
        'div',
        { className: 'ow-toptip ' + type, style: { top: top } },
        props.msg
      );
    }
  }]);

  return _class;
}(_omi.WeElement));

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(78);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".ow-toptip {\n  position: fixed;\n  text-align: center;\n  width: 100%;\n  top: 0;\n  z-index: 1;\n  color: #fff;\n  padding: 10px 0;\n  transition: 0.5s ease;\n}\n\n.weui-toptip-primary {\n  background: #1aad19;\n}\n\n.weui-toptip-warn {\n  background: #e64340;\n}", ""]);



/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _omi = __webpack_require__(0);

var _index = __webpack_require__(80);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-action-sheet', (_temp2 = _class = function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.handleMaskClick = function (e) {
      if (_this.props.onClose) _this.props.onClose(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'renderMenuItem',
    value: function renderMenuItem() {
      return this.props.menus.map(function (menu, idx) {
        var label = menu.label,
            className = menu.className,
            others = _objectWithoutProperties(menu, ['label', 'className']);

        var cls = (0, _omi.classNames)(_defineProperty({
          'weui-actionsheet__cell': true
        }, className, className));

        return Omi.h(
          'div',
          _extends({ key: idx }, others, { className: cls }),
          label
        );
      });
    }
  }, {
    key: 'renderActions',
    value: function renderActions() {
      return this.props.actions.map(function (action, idx) {
        var label = action.label,
            className = action.className,
            others = _objectWithoutProperties(action, ['label', 'className']);

        var cls = (0, _omi.classNames)(_defineProperty({
          'weui-actionsheet__cell': true
        }, className, className));

        return Omi.h(
          'div',
          _extends({ key: idx }, others, { className: cls }),
          label
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          show = _props.show,
          type = _props.type,
          onClose = _props.onClose,
          menus = _props.menus,
          actions = _props.actions,
          others = _objectWithoutProperties(_props, ['show', 'type', 'onClose', 'menus', 'actions']);

      var cls = (0, _omi.classNames)({
        'weui-actionsheet': true,
        'weui-actionsheet_toggle': show
      });

      var styleType = type ? type : 'ios';

      return Omi.h(
        'div',
        { className: styleType === 'android' ? 'weui-skin_android' : '' },
        Omi.h('div', {
          'class': 'mask',
          style: { display: show ? 'block' : 'none' },
          onClick: this.handleMaskClick
        }),
        Omi.h(
          'div',
          _extends({ className: cls }, others),
          Omi.h(
            'div',
            { className: 'weui-actionsheet__menu' },
            this.renderMenuItem()
          ),
          Omi.h(
            'div',
            { className: 'weui-actionsheet__action' },
            this.renderActions()
          )
        )
      );
    }
  }]);

  return _class;
}(_omi.WeElement), _class.defaultProps = {
  type: '',
  menus: [],
  actions: [],
  show: false
}, _temp2));

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(81);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".weui-actionsheet {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  -webkit-transform: translate(0, 100%);\n  transform: translate(0, 100%);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 5000;\n  width: 100%;\n  background-color: #EFEFF4;\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n}\n\n.weui-actionsheet__title {\n  position: relative;\n  height: 65px;\n  padding: 0 20px;\n  line-height: 1.4;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  text-align: center;\n  font-size: 14px;\n  color: #808080;\n  background: #FCFCFD;\n}\n\n.weui-actionsheet__title:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #e5e5e5;\n  color: #e5e5e5;\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n\n.weui-actionsheet__title .weui-actionsheet__title-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\n.weui-actionsheet__menu {\n  background-color: #FCFCFD;\n}\n\n.weui-actionsheet__action {\n  margin-top: 6px;\n  background-color: #FCFCFD;\n}\n\n.weui-actionsheet__cell {\n  position: relative;\n  padding: 10px 0;\n  text-align: center;\n  font-size: 18px;\n}\n\n.weui-actionsheet__cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #e5e5e5;\n  color: #e5e5e5;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n\n.weui-actionsheet__cell:active {\n  background-color: #ECECEC;\n}\n\n.weui-actionsheet__cell:first-child:before {\n  display: none;\n}\n\n.weui-skin_android .weui-actionsheet {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  bottom: auto;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 274px;\n  box-sizing: border-box;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  background: transparent;\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n}\n\n.weui-skin_android .weui-actionsheet__action {\n  display: none;\n}\n\n.weui-skin_android .weui-actionsheet__menu {\n  border-radius: 2px;\n  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1);\n}\n\n.weui-skin_android .weui-actionsheet__cell {\n  padding: 13px 24px;\n  font-size: 16px;\n  line-height: 1.4;\n  text-align: left;\n}\n\n.weui-skin_android .weui-actionsheet__cell:first-child {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n}\n\n.weui-skin_android .weui-actionsheet__cell:last-child {\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n}\n\n.weui-actionsheet_toggle {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n\n.mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.4;\n  z-index: 100;\n  left: 0;\n  top: 0;\n}\n\n.weui-skin_android .weui-actionsheet_toggle {\n  opacity: 1 !important;\n  top: 50% !important;\n  bottom: auto !important;\n}\n\n.weui-skin_android .weui-actionsheet {\n  opacity: 0;\n  transition: opacity .3s;\n  top: 150%;\n  bottom: 0;\n}", ""]);



/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _omi = __webpack_require__(0);

var _index = __webpack_require__(83);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-toast', (_temp = _class = function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var cls = (0, _omi.extractClass)(props, 'weui-toast');

      var type = props.type,
          show = props.show,
          children = props.children,
          iconSize = props.iconSize,
          others = _objectWithoutProperties(props, ['type', 'show', 'children', 'iconSize']);

      return Omi.h(
        'div',
        { style: { display: show ? 'block' : 'none' } },
        Omi.h(
          'div',
          _extends({}, cls, others),
          type === 'success' ? Omi.h('o-icon', _defineProperty({ type: 'check', color: 'white', 'class': 'icon', scale: 4 }, 'class', 'weui-icon_toast')) : Omi.h('o-icon', _defineProperty({ type: 'loading', rotate: true, color: 'white', 'class': 'icon-l', scale: 3 }, 'class', 'weui-icon_toast')),
          Omi.h(
            'p',
            { 'class': 'weui-toast_content' },
            children
          )
        )
      );
    }
  }]);

  return _class;
}(_omi.WeElement), _class.defaultProps = {
  type: 'success',
  show: false
}, _temp));

var toast = {},
    dom = void 0;

toast.showLoading = function (wording) {
  dom = (0, _omi.render)(Omi.h(
    'o-toast',
    {
      type: 'loading',
      show: true },
    wording || '加载中'
  ), 'body');
};

toast.hideLoading = function () {
  document.body.removeChild(dom);
};

exports['default'] = toast;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(84);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".weui-toast {\n  position: fixed;\n  z-index: 5000;\n  width: 7.6em;\n  min-height: 7.6em;\n  top: 50%;\n  left: 50%;\n  margin-top: -3.8em;\n  margin-left: -3.8em;\n  background: rgba(17, 17, 17, 0.7);\n  text-align: center;\n  border-radius: 5px;\n  color: #FFFFFF;\n}\n\n.weui-icon_toast {\n  margin: 22px 0 0;\n  display: block;\n}\n\n.weui-icon_toast.weui-icon-success-no-circle:before {\n  color: #FFFFFF;\n  font-size: 55px;\n}\n\n.weui-icon_toast.weui-loading {\n  margin: 30px 0 0;\n  width: 38px;\n  height: 38px;\n  vertical-align: baseline;\n}\n\n.weui-toast__content {\n  margin: 0 0 15px;\n}\n\np {\n  margin: 0;\n  padding-bottom: 10px;\n}\n\n.icon {\n  margin-top: 5px;\n  position: relative;\n  top: 10px;\n}\n\n.icon-l {\n  margin-top: 15px;\n  position: relative;\n  top: 10px;\n  margin-bottom: 13px;\n}", ""]);



/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(86);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-checkbox', function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var checked = props.checked ? { checked: true } : null;
      delete props.checked;

      return Omi.h(
        'label',
        _extends({}, (0, _omi.extractClass)(props, "o-checkbox"), props),
        props.label,
        Omi.h('input', _extends({ type: 'checkbox' }, checked, { name: props.name, value: props.value })),
        Omi.h('span', { 'class': 'checkmark' })
      );
    }
  }]);

  return _class;
}(_omi.WeElement));

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(87);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "/* The o-checkbox */\n\n.o-checkbox {\n  display: block;\n  position: relative;\n  padding-left: 24px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 14px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n/* Hide the browser's default checkbox */\n\n.o-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n\n.checkmark {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 16px;\n  width: 16px;\n  background-color: #ccc;\n  border-radius: 10%;\n}\n\n/* On mouse-over, add a grey background color */\n\n.o-checkbox:hover input~.checkmark {\n  background-color: rgb(170, 169, 169);\n}\n\n/* When the checkbox is checked, add a blue background */\n\n.o-checkbox input:checked~.checkmark {\n  background-color: #07C160;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n\n.o-checkbox input:checked~.checkmark:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n\n.o-checkbox .checkmark:after {\n  left: 5px;\n  top: 1px;\n  width: 4px;\n  height: 8px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}", ""]);



/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(89);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-radio', function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var checked = props.checked ? { checked: true } : null;
      delete props.checked;
      var name = props.name;
      delete props.name;

      return Omi.h(
        'label',
        _extends({}, (0, _omi.extractClass)(props, "o-radio"), props),
        props.label,
        Omi.h('input', _extends({ type: 'radio' }, checked, { name: name, value: props.value })),
        Omi.h('span', { 'class': 'checkmark' })
      );
    }
  }]);

  return _class;
}(_omi.WeElement));

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(90);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-radio {\n  display: block;\n  position: relative;\n  padding-left: 24px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 14px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n/* Hide the browser's default radio button */\n\n.o-radio input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n\n/* Create a custom radio button */\n\n.checkmark {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 16px;\n  width: 16px;\n  background-color: #ccc;\n  border-radius: 50%;\n}\n\n/* On mouse-over, add a grey background color */\n\n.o-radio:hover input~.checkmark {\n  background-color: rgb(170, 169, 169);\n}\n\n/* When the radio button is checked, add a blue background */\n\n.o-radio input:checked~.checkmark {\n  background-color: #07C160;\n}\n\n/* Create the indicator (the dot/circle - hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the indicator (dot/circle) when checked */\n\n.o-radio input:checked~.checkmark:after {\n  display: block;\n}\n\n/* Style the indicator (dot/circle) */\n\n.o-radio .checkmark:after {\n  top: 5px;\n  left: 5px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: white;\n}", ""]);



/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(92);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-dropdown', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.onSelect = function (index) {
      _this.props.onSelect && _this.props.onSelect(index);
    }, _this.onToggle = function (index) {
      _this.props.onToggle && _this.props.onToggle(index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      return Omi.h(
        'div',
        _extends({}, (0, _omi.extractClass)(props, "o-dropdown"), props),
        Omi.h('input', { type: 'hidden', name: props.name, value: props.children[props.selectedIndex].attributes.value }),
        Omi.h(
          'div',
          { 'class': 'select-selected' + (props.show ? ' select-arrow-active' : ''), onClick: this.onToggle },
          props.children[props.selectedIndex].children[0]
        ),
        props.show && Omi.h(
          'div',
          { 'class': 'select-items' },
          props.children.map(function (child, index) {
            if (index === props.selectedIndex) {
              return Omi.h(
                'div',
                { onClick: function onClick(e) {
                    _this2.onSelect(index);
                  }, 'class': 'same-as-selected' },
                child.children[0]
              );
            }
            return Omi.h(
              'div',
              { onClick: function onClick(e) {
                  _this2.onSelect(index);
                } },
              child.children[0]
            );
          })
        )
      );
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(93);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "/*the container must be positioned relative:*/\n\n.o-dropdown {\n  position: relative;\n  color: black;\n  font-size: 14px;\n}\n\n.select-selected {\n  background-color: white;\n  border-radius: 4px;\n  color: black;\n}\n\n/*style the arrow inside the select element:*/\n\n.select-selected:after {\n  position: absolute;\n  content: \"\";\n  top: 11px;\n  right: 10px;\n  width: 0;\n  height: 0;\n  border: 6px solid transparent;\n  border-color: black transparent transparent transparent;\n}\n\n/*point the arrow upwards when the select box is open (active):*/\n\n.select-selected.select-arrow-active:after {\n  border-color: transparent transparent black transparent;\n  top: 5px;\n}\n\n/*style the items (options), including the selected item:*/\n\n.select-items div {\n  color: black;\n  padding: 4px 8px;\n  border-bottom: 1px solid #ddd;\n  cursor: pointer;\n  user-select: none;\n}\n\n.select-selected {\n  color: black;\n  padding: 4px 8px;\n  background-color: #eee;\n  border-bottom: 1px solid #ddd;\n  cursor: pointer;\n  user-select: none;\n}\n\n/*style items (options):*/\n\n.select-items {\n  position: absolute;\n  background-color: #eee;\n  top: 100%;\n  left: 0;\n  right: 0;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  overflow: hidden;\n  z-index: 99;\n}\n\n/*hide the items when the select box is closed:*/\n\n.select-hide {\n  display: none;\n}\n\n.select-items div:hover,\n.same-as-selected {\n  background-color: rgb(181, 247, 212);\n}", ""]);



/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(95);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-table', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.removeItem = function (item) {
      _this.dataSource.splice(_this.dataSource.indexOf(item), 1);
      _this.update();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'install',
    value: function install() {
      this.dataSource = this.props.dataSource;
    }
  }, {
    key: 'render',
    value: function render(props) {

      return Omi.h(
        'table',
        { 'class': 'table-fill' },
        Omi.h(
          'thead',
          null,
          Omi.h(
            'tr',
            null,
            props.columns.map(function (item) {
              var obj = {};
              var width = item.width;

              if (width !== undefined) {
                obj.style = { width: typeof width === 'number' ? width + 'px' : width };
              }
              return Omi.h(
                'th',
                _extends({}, obj, { 'class': 'text-left' }),
                item.title
              );
            })
          )
        ),
        Omi.h(
          'tbody',
          { 'class': 'table-hover' },
          props.dataSource.map(function (item) {
            return Omi.h(
              'tr',
              null,
              props.columns.map(function (subItem) {
                var obj = {};
                var width = subItem.width;

                if (width !== undefined) {
                  obj.style = { width: typeof width === 'number' ? width + 'px' : width };
                }
                return Omi.h(
                  'td',
                  _extends({}, obj, { 'class': 'text-left' }),
                  subItem.render ? subItem.render(item) : item[subItem.key]
                );
              })
            );
          })
        )
      );
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(96);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".table-fill {\n  background: white;\n  border-radius: 3px;\n  border-collapse: collapse;\n  margin: auto;\n  padding: 5px;\n  width: 100%;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);\n  animation: float 5s infinite;\n}\n\nth {\n  color: white;\n  background: #1b1e24;\n  border-right: 1px solid #343a45;\n  font-size: 15px;\n  font-weight: 100;\n  padding: 5px;\n  text-align: left;\n  vertical-align: middle;\n}\n\nth:first-child {\n  border-top-left-radius: 3px;\n}\n\nth:last-child {\n  border-top-right-radius: 3px;\n  border-right: none;\n}\n\ntr {\n  border-top: 1px solid #C1C3D1;\n  color: #666B85;\n  font-size: 16px;\n  font-weight: normal;\n}\n\ntr:hover td {\n  background: rgb(12, 201, 103, .1);\n}\n\ntr:first-child {\n  border-top: none;\n}\n\ntr:last-child {\n  border-bottom: none;\n}\n\ntr:nth-child(odd) td {\n  background: rgb(245, 245, 245);\n}\n\ntr:nth-child(odd):hover td {\n  background: rgb(12, 201, 103, .1);\n}\n\ntr:last-child td:first-child {\n  border-bottom-left-radius: 3px;\n}\n\ntr:last-child td:last-child {\n  border-bottom-right-radius: 3px;\n}\n\ntd {\n  background: #FFFFFF;\n  padding: 5px;\n  text-align: left;\n  vertical-align: middle;\n  font-weight: 300;\n  font-size: 14px;\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\n  border-right: 1px solid #C1C3D1;\n}\n\ntd:last-child {\n  border-right: 0px;\n}\n\nth.text-left {\n  text-align: left;\n}\n\nth.text-center {\n  text-align: center;\n}\n\nth.text-right {\n  text-align: right;\n}\n\ntd.text-left {\n  text-align: left;\n}\n\ntd.text-center {\n  text-align: center;\n}\n\ntd.text-right {\n  text-align: right;\n}\n\na {\n  text-decoration: none;\n  color: #07C160;\n}", ""]);



/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(98);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(6);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-input-table', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (index) {
      _this.props.onChange(index);
    }, _this.removeItem = function (item) {
      _this.dataSource.splice(_this.dataSource.indexOf(item), 1);
      _this.update();
    }, _this.addItem = function () {
      var item = JSON.parse(JSON.stringify(_this.dataSource[0]));
      Object.keys(item).forEach(function (key) {
        item[key] = null;
      });
      _this.dataSource.push(item);
      _this.update();
    }, _this.itemInput = function (e, key, item) {
      item[key] = e.target.value;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'install',
    value: function install() {
      this.dataSource = this.props.dataSource;
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      var len = props.columns.length;
      var dataLen = props.dataSource.length;
      return Omi.h(
        'div',
        null,
        props.dataSource.map(function (item, index) {
          return Omi.h(
            'div',
            { 'class': 'row' },
            Omi.h(
              'div',
              { 'class': 'item' },
              props.columns.map(function (columu, colIndex) {

                return Omi.h(
                  'span',
                  null,
                  Omi.h(
                    'span',
                    { 'class': colIndex === 0 ? 'span-left' : 'span-center' },
                    columu.title
                  ),
                  Omi.h('o-input', { oninput: function oninput(e) {
                      _this2.itemInput(e, columu.key, item);
                    }, 'class': 'ipt ' + (colIndex === len - 1 ? 'ipt2' : 'ipt1'), value: item[columu.key] })
                );
              }),
              index === dataLen - 1 ? Omi.h(
                'o-button',
                { 'class': 'btn', size: 'small', onClick: _this2.addItem, type: 'default' },
                '+'
              ) : Omi.h(
                'o-button',
                { 'class': 'btn', onClick: function onClick(e) {
                    _this2.removeItem(item);
                  }, size: 'small', type: 'default' },
                '-'
              )
            )
          );
        })
      );
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(99);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".ipt {\n  display: inline-block;\n  width: 150px;\n  height: 30px;\n  line-height: 30px;\n  font-size: 14px;\n  vertical-align: top;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.row {\n  margin-top: 10px;\n}\n\n.item {\n  width: auto;\n  height: 30px;\n  border-radius: 4px;\n  display: inline-block;\n  margin-right: 4px;\n  vertical-align: top;\n}\n\n.span-left,\n.span-center {\n  vertical-align: top;\n  display: inline-block;\n  padding: 2px 10px;\n  height: 30px;\n  background-color: #EEEEEF;\n  font-size: 12px;\n  line-height: 25px;\n}\n\n.span-center {\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n}\n\n.ipt1 {\n  border-radius: 0px;\n}\n\n.ipt2 {\n  border-radius: 0px 4px 4px 0px;\n}\n\n.span-left {\n  border: 1px solid #ccc;\n  border-right: none;\n  border-radius: 4px 0px 0px 4px;\n}\n\n.btn {\n  height: 30px;\n  background-color: #EEEEEF;\n  vertical-align: top;\n  margin-left: 10px !important;\n}", ""]);



/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(101);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-row', function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return (0, _omi.getHost)(this).css() + _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      return Omi.h(
        'div',
        _extends({}, (0, _omi.extractClass)(props, "o-row"), props),
        props.children.map(function (child) {

          return Omi.h(
            'div',
            (0, _omi.extractClass)(child.attributes, 'col' + child.attributes.span),
            child.children
          );
        })
      );
    }
  }]);

  return _class;
}(_omi.WeElement));

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(102);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-row {\n  *zoom: 1;\n  width: 100%;\n}\n\n.o-row:before,\n.o-row:after {\n  display: table;\n  line-height: 0;\n  content: \"\";\n}\n\n.o-row:after {\n  clear: both;\n}\n\n.col1,\n.col2,\n.col3,\n.col4,\n.col5,\n.col6,\n.col7,\n.col8,\n.col9,\n.col10,\n.col11,\n.col12,\n.col13,\n.col14,\n.col15,\n.col16,\n.col17,\n.col18,\n.col19,\n.col20,\n.col21,\n.col22,\n.col23,\n.col24,\n  {\n  float: left;\n}\n\n.col1 {\n  width: 4.16666667%;\n  *width: 4.16666667%;\n}\n\n.col2 {\n  width: 8.33333333%;\n  *width: 8.33333333%;\n}\n\n.col3 {\n  width: 12.5%;\n  *width: 12.5%;\n}\n\n.col4 {\n  width: 16.66666667%;\n  *width: 16.66666667%;\n}\n\n.col5 {\n  width: 20.83333333%;\n  *width: 20.83333333%;\n}\n\n.col6 {\n  width: 25%;\n  *width: 25%;\n}\n\n.col7 {\n  width: 29.16666667%;\n  *width: 29.16666667%;\n}\n\n.col8 {\n  width: 33.33333333%;\n  *width: 33.33333333%;\n}\n\n.col9 {\n  width: 37.5%;\n  *width: 37.5%;\n}\n\n.col10 {\n  width: 41.66666667%;\n  *width: 41.66666667%;\n}\n\n.col11 {\n  width: 45.83333333%;\n  *width: 45.83333333%;\n}\n\n.col12 {\n  width: 50%;\n  *width: 50%;\n}\n\n.col13 {\n  width: 54.16666667%;\n  *width: 54.16666667%;\n}\n\n.col14 {\n  width: 58.33333333%;\n  *width: 58.33333333%;\n}\n\n.col15 {\n  width: 62.5%;\n  *width: 62.5%;\n}\n\n.col16 {\n  width: 66.66666667%;\n  *width: 66.66666667%;\n}\n\n.col17 {\n  width: 70.83333333%;\n  *width: 70.83333333%;\n}\n\n.col18 {\n  width: 75%;\n  *width: 75%;\n}\n\n.col19 {\n  width: 79.16666667%;\n  *width: 79.16666667%;\n}\n\n.col20 {\n  width: 83.33333333%;\n  *width: 83.33333333%;\n}\n\n.col21 {\n  width: 87.5%;\n  *width: 87.5%;\n}\n\n.col22 {\n  width: 91.66666667%;\n  *width: 91.66666667%;\n}\n\n.col23 {\n  width: 95.83333333%;\n  *width: 95.83333333%;\n}\n\n.col24 {\n  width: 100%;\n  *width: 100%;\n}", ""]);



/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _index = __webpack_require__(104);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(2);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-date-picker', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.gotoNextMonth = function () {
      _this.currentDate = getNextMonth(_this.currentDate);
      _this.initDate();
      _this.update();
    }, _this.gotoPreMonth = function () {
      _this.currentDate = getPreMonth(_this.currentDate);
      _this.initDate();
      _this.update();
    }, _this.gotoNextYear = function () {
      _this.currentDate = nextYear(_this.currentDate);
      _this.initDate();
      _this.update();
    }, _this.gotoPreYear = function () {
      _this.currentDate = preYear(_this.currentDate);
      _this.initDate();
      _this.update();
    }, _this.onSelectDate = function (evt) {
      _this.selectedDate = evt.target.getAttribute('data-date');
      _this.noSelected = false;
      _this.props.onSelect && _this.props.onSelect(_this.selectedDate);
    }, _this.toggle = function () {
      _this.initCurrentDate();
      _this.initDate();
      _this.props.onToggle && _this.props.onToggle();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'install',
    value: function install() {
      this.now = new Date();
      this.nowYear = this.now.getFullYear();
      this.nowMonth = this.now.getMonth();
      this.nowDay = this.now.getDate();
      this.selectedDate = this.props.selectedDate;

      this.initCurrentDate();

      this.initDate();
    }
  }, {
    key: 'initCurrentDate',
    value: function initCurrentDate() {
      if (this.selectedDate) {
        this.dateArr = this.selectedDate.split('-');
        this.currentDate = new Date(Number(this.dateArr[0]), Number(this.dateArr[1]) - 1, Number(this.dateArr[2]));
      } else {
        // this.selectedDate = this.nowYear + '-' + (this.nowMonth + 1) + '-' + this.nowDay
        // this.noSelected = true
        this.currentDate = this.now;
      }
    }
  }, {
    key: 'initDate',
    value: function initDate() {
      this.year = this.currentDate.getFullYear();
      this.month = this.currentDate.getMonth();
      this.day = this.currentDate.getDate();
      this.begin = getFirstDayWeek(this.year, this.month);
      this.count = getMonthDayCount(this.year, this.month);

      this.preMonthDate = getPreMonth(this.currentDate);
      this.preYear = this.preMonthDate.getFullYear();
      this.preMonth = this.preMonthDate.getMonth();
      this.preCount = getMonthDayCount(this.preYear, this.preMonth);

      this.nextMonthDate = getNextMonth(this.currentDate);
      this.nextYear = this.nextMonthDate.getFullYear();
      this.nextMonth = this.nextMonthDate.getMonth();
    }
  }, {
    key: 'getDay',
    value: function getDay(y, x) {
      var dateStr = void 0;
      if (y === 0) {
        if (x < this.begin) {
          dateStr = this.preYear + '-' + (this.preMonth + 1) + '-' + (this.preCount - this.begin + x + 1);
          return Omi.h(
            'td',
            { 'data-date': dateStr, 'class': '_out-date' + (dateStr === this.selectedDate && !this.noSelected ? ' selected' : '') },
            this.preCount - this.begin + x + 1
          );
        } else {
          var d = x - this.begin + 1;
          dateStr = this.year + '-' + (this.month + 1) + '-' + d;

          if (d === this.nowDay && this.year === this.nowYear && this.month === this.nowMonth) {
            return Omi.h(
              'td',
              { 'data-date': dateStr, 'class': '_now' + (dateStr === this.selectedDate && !this.noSelected ? ' selected' : '') },
              d
            );
          } else {
            var cls = dateStr === this.selectedDate && !this.noSelected ? { 'class': 'selected' } : null;
            return Omi.h(
              'td',
              _extends({ 'data-date': dateStr }, cls),
              d
            );
          }
        }
      } else {
        var temp = y * 7 + x - this.begin + 1;
        if (temp <= this.count) {
          dateStr = this.year + '-' + (this.month + 1) + '-' + temp;
          if (temp === this.nowDay && this.year === this.nowYear && this.month === this.nowMonth) {
            return Omi.h(
              'td',
              { 'data-date': dateStr, 'class': '_now' + (dateStr === this.selectedDate && !this.noSelected ? ' selected' : '') },
              temp
            );
          } else {
            var _cls = dateStr === this.selectedDate && !this.noSelected ? { 'class': 'selected' } : null;
            return Omi.h(
              'td',
              _extends({ 'data-date': dateStr }, _cls),
              temp
            );
          }
        } else {
          dateStr = this.nextYear + '-' + (this.nextMonth + 1) + '-' + (temp - this.count);
          return Omi.h(
            'td',
            { 'data-date': dateStr, 'class': '_out-date' + (dateStr === this.selectedDate && !this.noSelected ? ' selected' : '') },
            temp - this.count
          );
        }
      }
    }
  }, {
    key: 'render',
    value: function render(props) {
      var arr = [];
      for (var i = 0; i < 6; i++) {
        arr.push(Omi.h(
          'tr',
          null,
          this.getDay(i, 0),
          this.getDay(i, 1),
          this.getDay(i, 2),
          this.getDay(i, 3),
          this.getDay(i, 4),
          this.getDay(i, 5),
          this.getDay(i, 6)
        ));
      }

      return Omi.h(
        'div',
        { 'class': 'o-date-picker' },
        Omi.h('o-input', { 'class': 'input', value: !this.noSelected ? this.selectedDate : '', onClick: this.toggle, placeholder: '\u9009\u62E9\u65E5\u671F' }),
        Omi.h('o-icon', { 'class': 'icon', onClick: this.toggle, path: 'M482.513,83.942c-7.225-7.233-15.797-10.85-25.694-10.85h-36.541v-27.41c0-12.56-4.477-23.315-13.422-32.261   C397.906,4.475,387.157,0,374.591,0h-18.268c-12.565,0-23.318,4.475-32.264,13.422c-8.949,8.945-13.422,19.701-13.422,32.261v27.41   h-109.63v-27.41c0-12.56-4.475-23.315-13.422-32.261C178.64,4.475,167.886,0,155.321,0H137.05   c-12.562,0-23.317,4.475-32.264,13.422c-8.945,8.945-13.421,19.701-13.421,32.261v27.41H54.823c-9.9,0-18.464,3.617-25.697,10.85   c-7.233,7.232-10.85,15.8-10.85,25.697v365.453c0,9.89,3.617,18.456,10.85,25.693c7.232,7.231,15.796,10.849,25.697,10.849h401.989   c9.897,0,18.47-3.617,25.694-10.849c7.234-7.234,10.852-15.804,10.852-25.693V109.639   C493.357,99.739,489.743,91.175,482.513,83.942z M137.047,475.088H54.823v-82.23h82.224V475.088z M137.047,374.59H54.823v-91.358   h82.224V374.59z M137.047,264.951H54.823v-82.223h82.224V264.951z M130.627,134.333c-1.809-1.809-2.712-3.946-2.712-6.423V45.686   c0-2.474,0.903-4.617,2.712-6.423c1.809-1.809,3.946-2.712,6.423-2.712h18.271c2.474,0,4.617,0.903,6.423,2.712   c1.809,1.807,2.714,3.949,2.714,6.423v82.224c0,2.478-0.909,4.615-2.714,6.423c-1.807,1.809-3.946,2.712-6.423,2.712H137.05   C134.576,137.046,132.436,136.142,130.627,134.333z M246.683,475.088h-91.365v-82.23h91.365V475.088z M246.683,374.59h-91.365   v-91.358h91.365V374.59z M246.683,264.951h-91.365v-82.223h91.365V264.951z M356.323,475.088h-91.364v-82.23h91.364V475.088z    M356.323,374.59h-91.364v-91.358h91.364V374.59z M356.323,264.951h-91.364v-82.223h91.364V264.951z M349.896,134.333   c-1.807-1.809-2.707-3.946-2.707-6.423V45.686c0-2.474,0.9-4.617,2.707-6.423c1.808-1.809,3.949-2.712,6.427-2.712h18.268   c2.478,0,4.617,0.903,6.427,2.712c1.808,1.807,2.707,3.949,2.707,6.423v82.224c0,2.478-0.903,4.615-2.707,6.423   c-1.807,1.809-3.949,2.712-6.427,2.712h-18.268C353.846,137.046,351.697,136.142,349.896,134.333z M456.812,475.088h-82.228v-82.23   h82.228V475.088z M456.812,374.59h-82.228v-91.358h82.228V374.59z M456.812,264.951h-82.228v-82.223h82.228V264.951z', color: '#A9A9A9' }),
        props.show && Omi.h(
          'div',
          { 'class': '_ctn' },
          Omi.h(
            'div',
            { 'class': '_header' },
            Omi.h(
              'div',
              { style: 'position: relative;' },
              Omi.h('a', { 'class': 'prev-year-btn', role: 'button', title: '\u4E0A\u4E00\u5E74', onClick: this.gotoPreYear }),
              Omi.h('a', { 'class': 'prev-month-btn', role: 'button', title: '\u4E0A\u4E2A\u6708', onClick: this.gotoPreMonth }),
              Omi.h(
                'span',
                { 'class': 'ym-select' },
                Omi.h(
                  'a',
                  { 'class': 'year-select', role: 'button', title: '\u9009\u62E9\u5E74\u4EFD' },
                  this.year,
                  '\u5E74'
                ),
                Omi.h(
                  'a',
                  { 'class': 'month-select', role: 'button', title: '\u9009\u62E9\u6708\u4EFD' },
                  this.month + 1,
                  '\u6708'
                )
              ),
              Omi.h('a', { 'class': 'next-month-btn', title: '\u4E0B\u4E2A\u6708', onClick: this.gotoNextMonth }),
              Omi.h('a', { 'class': 'next-year-btn', title: '\u4E0B\u4E00\u5E74', onClick: this.gotoNextYear })
            )
          ),
          Omi.h(
            'table',
            null,
            Omi.h(
              'thead',
              null,
              Omi.h(
                'tr',
                null,
                Omi.h(
                  'th',
                  null,
                  '\u65E5'
                ),
                Omi.h(
                  'th',
                  null,
                  '\u4E00'
                ),
                Omi.h(
                  'th',
                  null,
                  '\u4E8C'
                ),
                Omi.h(
                  'th',
                  null,
                  '\u4E09'
                ),
                Omi.h(
                  'th',
                  null,
                  '\u56DB'
                ),
                Omi.h(
                  'th',
                  null,
                  '\u4E94'
                ),
                Omi.h(
                  'th',
                  null,
                  '\u516D'
                )
              )
            ),
            Omi.h(
              'tbody',
              { onClick: this.onSelectDate },
              arr
            )
          )
        )
      );
    }
  }]);

  return _class2;
}(_omi.WeElement));

//星期日是0
function getFirstDayWeek(e, t) {
  var n = new Date(e, t, 1);
  return n.getDay();
}

function getMonthDayCount(e, t) {
  var arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  arr[1] = isLeapYear(e) ? 29 : 28;
  return arr[t];
}

function isLeapYear(e) {
  return e % 400 == 0 || e % 100 != 0 && e % 4 == 0;
}

function getNextMonth(e) {
  var t = e.getMonth();
  return t === 11 ? new Date(e.getFullYear() + 1, 0) : new Date(e.getFullYear(), e.getMonth() + 1);
}

function getPreMonth(e) {
  var t = e.getMonth();
  return t === 0 ? new Date(e.getFullYear() - 1, 11) : new Date(e.getFullYear(), e.getMonth() - 1);
}

function nextYear(d) {
  return new Date(d.getFullYear() + 1, d.getMonth(), d.getDate());
}

function preYear(d) {
  return new Date(d.getFullYear() - 1, d.getMonth(), d.getDate());
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(105);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-date-picker {\n  color: #1C1B1C;\n  position: relative;\n  width: 300px;\n}\n\n._ctn{\n  transition: all 4s;\n  \n  overflow: hidden;\n}\n\n.show{\n  height: 300px;\n}\n\n.hide{\n  height: 0px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n._out-date {\n  color: #9C9C9C;\n}\n\n._today {\n  color: #07C160;\n}\n\n.input {\n  height: 40px;\n}\n\n.icon {\n  position: absolute;\n  right: -2px;\n  top: 12px;\n  cursor: pointer;\n}\n\ntable {\n  width: 100%;\n}\n\ntd,\nth {\n  width: 14.285714285714285%;\n  height: 35px;\n}\n\ntd {\n  cursor: pointer;\n}\n\ntable {\n  border: 1px solid #DADADA;\n  border-top: none;\n  position: relative;\n  top: -2px;\n  text-align: center;\n  border-radius: 0px 0px 4px 4px;\n  font-size: 12px;\n}\n\n._header {\n  position: relative;\n  top: -2px;\n \n  position: relative;\n  text-align: center;\n  border: 1px solid #DADADA;\n  border-top: none;\n  height: 30px;\n  line-height: 30px;\n}\n\n.prev-year-btn:after {\n  content: '\\AB';\n}\n\n.prev-month-btn:after {\n  content: '\\2039';\n}\n\n._now{\n  color: #07C160;\n}\n\n.selected{\n  display: block;\n  background-color: #07C160;\n  color: white;\n  border-radius: 50%; \n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  position: relative;\n  top: 2px;\n  right: -5px;\n}\n\n.prev-year-btn {\n  position: absolute;\n  left: 0;\n  cursor: pointer;\n}\n\n.prev-month-btn {\n  position: absolute;\n  left: 25px;\n  cursor: pointer;\n}\n\n.next-year-btn:after {\n  content: '\\BB';\n}\n\n.next-month-btn:after {\n  content: '\\203A';\n}\n\n.next-year-btn {\n  position: absolute;\n  right: 0;\n  cursor: pointer;\n}\n\n.next-month-btn {\n  position: absolute;\n  right: 25px;\n  cursor: pointer;\n}\n\ntd:hover{\n  color:rgb(37, 124, 79);\n}\n\n.next-month-btn,.next-year-btn,.prev-year-btn,.prev-month-btn{\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n}", ""]);



/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _omi = __webpack_require__(0);

var _index = __webpack_require__(107);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(4);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-popover', (_temp2 = _class = function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.close = function () {
      _this.props.onClose && _this.props.onClose();
    }, _this.confirm = function () {
      _this.props.onConfirm && _this.props.onConfirm();
    }, _this.left = 0, _this.top = 0, _this.bodyClickHandler = function () {
      _this.props.onClose && _this.props.onClose();
    }, _this.mouseDownHandler = function (evt) {
      evt.stopPropagation();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'uninstall',
    value: function uninstall() {
      document.body.removeEventListener('mousedown', this.bodyClickHandler);
    }
  }, {
    key: 'updated',
    value: function updated() {
      this._setPosition();
    }
  }, {
    key: 'installed',
    value: function installed() {
      document.body.addEventListener('mousedown', this.bodyClickHandler);
      this._setPosition();
    }
  }, {
    key: '_setPosition',
    value: function _setPosition() {
      if (this.props.show) {
        var rectA = this.base.getBoundingClientRect();
        var rectB = this.props.target.getBoundingClientRect();

        var tempLeft = void 0,
            tempTop = void 0;
        var st = document.documentElement.scrollTop || document.body.scrollTop;

        switch (this.props.direction) {
          case 'top-left':
            tempLeft = rectB.left;
            tempTop = rectB.top - rectA.height - 10;
            break;
          case 'top':
            tempLeft = rectB.left + (rectB.width / 2 - rectA.width / 2);
            tempTop = rectB.top - rectA.height - 10;
            break;
          case 'top-right':
            tempLeft = rectB.left + rectB.width - rectA.width;
            tempTop = rectB.top - rectA.height - 10;
            break;

          case 'left':
            tempLeft = rectB.left - rectA.width - 10;
            tempTop = rectB.top + (rectB.height - rectA.height) / 2;
            break;
          case 'left-top':
            tempLeft = rectB.left - rectA.width - 10;
            tempTop = rectB.top;
            break;

          case 'left-bottom':
            tempLeft = rectB.left - rectA.width - 10;
            tempTop = rectB.top + (rectB.height - rectA.height);
            break;

          case 'bottom-left':
            tempLeft = rectB.left;
            tempTop = rectB.top + rectB.height + 10;
            break;
          case 'bottom':
            tempLeft = rectB.left + (rectB.width / 2 - rectA.width / 2);
            tempTop = rectB.top + rectB.height + 10;
            break;
          case 'bottom-right':
            tempLeft = rectB.left + rectB.width - rectA.width;
            tempTop = rectB.top + rectB.height + 10;
            break;

          case 'right':
            tempLeft = rectB.left + rectB.width + 10;
            tempTop = rectB.top + (rectB.height - rectA.height) / 2;
            break;
          case 'right-top':
            tempLeft = rectB.left + rectB.width + 10;
            tempTop = rectB.top;
            break;

          case 'right-bottom':
            tempLeft = rectB.left + rectB.width + 10;
            tempTop = rectB.top + (rectB.height - rectA.height);
            break;
        }

        tempLeft = tempLeft + this.props.x + 'px';
        tempTop = tempTop + this.props.y + st + 'px';

        if (this.left !== tempLeft || this.top !== tempTop) {
          this.left = tempLeft;
          this.top = tempTop;
          this.update();
        }
      }
    }
  }, {
    key: 'render',
    value: function render(props) {
      if (!props.show) return;

      var cls = (0, _omi.classNames)('_arrow', '_' + props.direction);

      var style = props.style,
          other = _objectWithoutProperties(props, ['style']);

      return Omi.h(
        'div',
        _extends({ 'class': 'o-popover', onMouseDown: this.mouseDownHandler, style: _extends({ left: this.left, top: this.top }, style) }, other),
        Omi.h('div', { 'class': cls }),
        Omi.h(
          'div',
          { 'class': 'o-inner' },
          props.children
        )
      );
    }
  }]);

  return _class;
}(_omi.WeElement), _class.defaultProps = {
  x: 0,
  y: 0
}, _temp2));

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(108);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-popover {\n  width: auto;\n  height: auto;\n  position: absolute;\n  padding: 10px;\n  box-sizing: border-box;\n  z-index: 100;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n\n.o-inner {\n  width: auto;\n  height: auto;\n  box-sizing: border-box;\n  z-index: 100;\n}\n\n._arrow {\n  box-sizing: border-box;\n  background: transparent;\n  width: 8.48528137px;\n  height: 8.48528137px;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n  position: absolute;\n  display: block;\n  border-width: 4.24264069px;\n  border-style: solid;\n  -webkit-box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.1);\n  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.1);\n  border-top-color: transparent;\n  border-right-color: #fff;\n  border-bottom-color: #fff;\n  border-left-color: transparent;\n  z-index: 10;\n}\n\n._top {\n  left: 50%;\n  top: 100%;\n  -webkit-transform: translateX(-50%) rotate(45deg);\n  -ms-transform: translateX(-50%) rotate(45deg);\n  transform: translateX(-50%) rotate(45deg);\n  margin-top: -4px;\n}\n\n._top-left {\n  left: 15%;\n  -webkit-transform: translateX(-50%) rotate(45deg);\n  -ms-transform: translateX(-50%) rotate(45deg);\n  transform: translateX(-50%) rotate(45deg);\n  top: 100%;\n  margin-top: -4px;\n}\n\n._top-right {\n  left: 85%;\n  -webkit-transform: translateX(-50%) rotate(45deg);\n  -ms-transform: translateX(-50%) rotate(45deg);\n  transform: translateX(-50%) rotate(45deg);\n  top: 100%;\n  margin-top: -4px;\n}\n\n._left {\n  left: 100%;\n  -webkit-transform: translateY(-50%) rotate(-45deg);\n  -ms-transform: translateY(-50%) rotate(-45deg);\n  transform: translateY(-50%) rotate(-45deg);\n  top: 50%;\n  margin-left: -4px;\n}\n\n._left-top {\n  left: 100%;\n  -webkit-transform: translateY(-50%) rotate(-45deg);\n  -ms-transform: translateY(-50%) rotate(-45deg);\n  transform: translateY(-50%) rotate(-45deg);\n  top: 15%;\n  margin-left: -4px;\n}\n\n._left-bottom {\n  left: 100%;\n  -webkit-transform: translateY(-50%) rotate(-45deg);\n  -ms-transform: translateY(-50%) rotate(-45deg);\n  transform: translateY(-50%) rotate(-45deg);\n  top: 85%;\n  margin-left: -4px;\n}\n\n._bottom {\n  left: 50%;\n  -webkit-transform: translateX(-50%) rotate(225deg);\n  -ms-transform: translateX(-50%) rotate(225deg);\n  transform: translateX(-50%) rotate(225deg);\n  margin-top: -13px;\n}\n\n._bottom-left {\n  left: 15%;\n  -webkit-transform: translateX(-50%) rotate(225deg);\n  -ms-transform: translateX(-50%) rotate(225deg);\n  transform: translateX(-50%) rotate(225deg);\n  margin-top: -13px;\n}\n\n._bottom-right {\n  left: 85%;\n  -webkit-transform: translateX(-50%) rotate(225deg);\n  -ms-transform: translateX(-50%) rotate(225deg);\n  transform: translateX(-50%) rotate(225deg);\n  margin-top: -13px;\n}\n\n._right {\n  -webkit-transform: translateY(-50%) rotate(-225deg);\n  -ms-transform: translateY(-50%) rotate(-225deg);\n  transform: translateY(-50%) rotate(-225deg);\n  top: 50%;\n  margin-left: -13px;\n}\n\n._right-top {\n  -webkit-transform: translateY(-50%) rotate(-225deg);\n  -ms-transform: translateY(-50%) rotate(-225deg);\n  transform: translateY(-50%) rotate(-225deg);\n  top: 15%;\n  margin-left: -13px;\n}\n\n._right-bottom {\n  -webkit-transform: translateY(-50%) rotate(-225deg);\n  -ms-transform: translateY(-50%) rotate(-225deg);\n  transform: translateY(-50%) rotate(-225deg);\n  top: 85%;\n  margin-left: -13px;\n}", ""]);



/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _omi = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-rate', (_temp2 = _class = function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.css = __webpack_require__(110), _this._current = 0, _this._rect = null, _this._hover = false, _this.onSelect = function (evt) {
      _this._rect = _this.base.getBoundingClientRect();
      var dx = evt.pageX - _this._rect.left;
      var value = dx / _this._rect.width * _this.props.total;
      var intValue = Math.floor(value);
      _this.props.onSelect && _this.props.onSelect(intValue + (value - intValue > 0.5 ? 1 : 0.5));
    }, _this.onMouseMove = function (evt) {
      _this._rect = _this.base.getBoundingClientRect();
      var dx = evt.pageX - _this._rect.left;
      _this._current = dx / _this._rect.width * _this.props.total;
      _this.update();
    }, _this.onMouseEnter = function () {
      _this._hover = true;
    }, _this.onMouseLeave = function () {
      _this._hover = false;
      _this.update();
    }, _this._getClass = function (i, current) {
      if (i < current) {
        if (current - i <= 0.5) {
          return '_star _star-half ';
        }
        return '_star';
      } else {
        return '_star _star-empty ';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      return Omi.h(
        'ul',
        _extends({ onMouseMove: this.onMouseMove, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onClick: this.onSelect }, (0, _omi.extractClass)(props, "o-rate"), props),
        Array.apply(0, Array(props.total)).map(function (x, i) {
          return Omi.h(
            'li',
            { 'class': _this2._getClass(i, _this2._hover ? _this2._current : props.value) },
            Omi.h(
              'div',
              null,
              Omi.h(
                'div',
                { 'class': '_star-first' },
                Omi.h(
                  'i',
                  { 'class': 'anticon anticon-star' },
                  Omi.h(
                    'svg',
                    { viewBox: '64 64 896 896', 'class': '', 'data-icon': 'star', width: '1em', height: '1em', fill: props.color || "#F95050", 'aria-hidden': 'true' },
                    Omi.h('path', { d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z' })
                  )
                )
              ),
              Omi.h(
                'div',
                { 'class': '_star-second' },
                Omi.h(
                  'i',
                  { 'class': 'anticon anticon-star' },
                  Omi.h(
                    'svg',
                    { viewBox: '64 64 896 896', 'class': '', 'data-icon': 'star', width: '1em', height: '1em', fill: '#E8E8E8', 'aria-hidden': 'true' },
                    Omi.h('path', { d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z' })
                  )
                )
              )
            )
          );
        })
      );
    }
  }]);

  return _class;
}(_omi.WeElement), _class.defaultProps = {
  value: 0
}, _temp2));

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(111);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-rate {\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n._star {\n  position: relative;\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  padding: 3px;\n}\n\n._star-first {\n  position: absolute;\n  z-index: 10;\n  overflow: hidden;\n}\n\n._star-second {\n  position: absolute;\n}\n\n._star-half ._star-first {\n  width: 0.5em;\n}\n\n._star-empty ._star-first {\n  width: 0;\n}", ""]);



/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-input-label', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.css = __webpack_require__(113), _this.value = '', _this.ref = (0, _omi.createRef)(), _this.onInput = function () {
      _this.value = _this.ref.current.value;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'render',
    value: function render(props) {
      return Omi.h(
        'div',
        _extends({}, (0, _omi.extractClass)(props, 'o-input-label'), props),
        Omi.h(
          'label',
          null,
          props.label
        ),
        Omi.h('input', { ref: this.ref, onInput: this.onInput, placeholder: props.placeholder })
      );
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(114);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-input-label {\n  display: inline-block;\n  width: 100%;\n  height: 32px;\n  line-height: 32px;\n  line-height: 1.5;\n  \n  \n  font-size: 14px;\n  border: 1px solid #DADADA;\n  border-radius: 4px;\n  color: #515a6e;\n  background-color: #fff;\n  background-image: none;\n  position: relative;\n  transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;\n  overflow: hidden;\n  /* caret-color:#07C160; */\n  white-space: nowrap;\n  \n}\n\n.o-input-label:hover {\n  border: 1px solid #07C160;\n}\n\n.o-input-label:focus {\n  border: 1px solid #07C160;\n}\n\n.o-input-label:focus:hover {\n  border: 1px solid #07C160;\n}\n\ninput {\n  -webkit-appearance: none;\n  outline: none;\n  cursor: text;\n  border: none;\n  font-size: 14px;\n  line-height: 32px;\n  height: 32px;\n  box-sizing: border-box;\n  width: 100%;\n  padding-left: 130px;\n}\n\nlabel {\n  font-size: 14px;\n  line-height: 32px;\n  height: 32px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n  background-color: #ECECEC;\n  width: 120px;\n  text-align: center;\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  top: 0;\n  /* text-indent: 5px; */\n}\n", ""]);



/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-input-button', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.css = __webpack_require__(116), _this.value = '', _this.ref = (0, _omi.createRef)(), _this.onInput = function () {
      _this.value = _this.ref.current.value;
    }, _this.onClick = function (e) {
      _this.props.onClick && _this.props.onClick(e, _this.value);
      e.stopPropagation();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'render',
    value: function render(props) {
      var onClick = props.onClick,
          other = _objectWithoutProperties(props, ['onClick']);

      return Omi.h(
        'div',
        _extends({}, (0, _omi.extractClass)(props, 'o-input-button'), other),
        Omi.h('input', { ref: this.ref, onInput: this.onInput, placeholder: props.placeholder }),
        Omi.h(
          'button',
          { onClick: this.onClick },
          props.buttonText
        )
      );
    }
  }]);

  return _class2;
}(_omi.WeElement));

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(117);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-input-button {\n  display: inline-block;\n  width: 100%;\n  height: 32px;\n  line-height: 32px;\n  line-height: 1.5;\n  \n  \n  font-size: 14px;\n  border: 1px solid #DADADA;\n  border-radius: 4px;\n  color: #515a6e;\n  background-color: #fff;\n  background-image: none;\n  position: relative;\n  transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;\n  overflow: hidden;\n  /* caret-color:#07C160; */\n\n  white-space: nowrap;\n  \n}\n\n.o-input-button:hover {\n  border: 1px solid #07C160;\n}\n\n.o-input-button:focus {\n  border: 1px solid #07C160;\n}\n\n.o-input-button:focus:hover {\n  border: 1px solid #07C160;\n}\n\ninput {\n  -webkit-appearance: none;\n  outline: none;\n  cursor: text;\n  border: none;\n  font-size: 14px;\n  line-height: 32px;\n  height: 32px;\n  box-sizing: border-box;\n  text-indent: 5px;\n  width: 100%;\n  padding-right: 130px;\n}\n\nbutton {\n  -webkit-appearance: none;\n  outline: none;\n  cursor: pointer;\n  border: none;\n  font-size: 14px;\n  line-height: 32px;\n  height: 32px;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background-color: #07C160;\n  width: 120px;\n  color: white;\n  text-align: center;\n  box-sizing: border-box;\n  /* text-indent: 5px; */\n}\n", ""]);



/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _progressbar = __webpack_require__(119);

var _progressbar2 = _interopRequireDefault(_progressbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-path-progress', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.defaultProps = {
      options: {},
      progress: 0,
      text: null,
      initialAnimate: false,
      containerStyle: {},
      containerClassName: '.o-path-progress'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'install',
    value: function install() {

      this.data = {
        shape: null
      };
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      var containerStyle = this.props.containerStyle;

      return Omi.h('div', _extends({}, (0, _omi.extractClass)(props), { style: containerStyle, ref: function ref(e) {
          _this2.progressBar = e;
        } }));
    }

    // receiveProps(nextProps) {
    //   if (!isEqual(this.props.options, nextProps.options)) {
    //     this._destroy();
    //     this._create(nextProps, this.props);

    //     return;
    //   }

    //   this._animateProgress(nextProps.progress);
    //   this._setText(nextProps.text);
    // }

  }, {
    key: 'installed',
    value: function installed() {
      this._create(this.props);
    }
  }, {
    key: 'uninstall',
    value: function uninstall() {
      this._destroy();
    }
  }, {
    key: '_create',
    value: function _create(props, oldProps) {
      if (this.data.shape !== null) {
        throw new Error('Progressbar is already created');
      }

      // setdata function is not used to prevent a new render cycle
      // This handling happens outside of React component's lifecycle
      var container = this.progressBar;

      this.data.shape = new _progressbar2['default'][props.type](container, props.options);

      if (props.initialAnimate) {
        if (oldProps) {
          this._setProgress(oldProps.progress);
        }

        this._animateProgress(props.progress);
      } else {
        this._setProgress(props.progress);
      }

      this._setText(props.text);
    }
  }, {
    key: '_destroy',
    value: function _destroy() {
      if (this.data.shape) {
        this.data.shape.destroy();
        this.data.shape = null;
      }
    }
  }, {
    key: '_animateProgress',
    value: function _animateProgress(progress) {
      this.data.shape.animate(progress);
    }
  }, {
    key: '_setProgress',
    value: function _setProgress(progress) {
      this.data.shape.set(progress);
    }
  }, {
    key: '_setText',
    value: function _setText(text) {
      if (text) {
        this.data.shape.setText(text);
      }
    }
  }]);

  return _class2;
}(_omi.WeElement));

// class Path extends WeElement {
//   render() {
//     return <Shape {...this.props} ShapeClass={ProgressBar.Path} />;
//   }
// }

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    // Higher level API, different shaped progress bars
    Line: __webpack_require__(120),
    Circle: __webpack_require__(8),
    SemiCircle: __webpack_require__(122),

    // Lower level API to use any SVG path
    Path: __webpack_require__(7),

    // Base-class for creating new custom shapes
    // to be in line with the API of built-in shapes
    // Undocumented.
    Shape: __webpack_require__(5),

    // Internal utils, undocumented.
    utils: __webpack_require__(3)
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// Line shaped progress bar

var Shape = __webpack_require__(5);
var utils = __webpack_require__(3);

var Line = function Line(container, options) {
    this._pathTemplate = 'M 0,{center} L 100,{center}';
    Shape.apply(this, arguments);
};

Line.prototype = new Shape();
Line.prototype.constructor = Line;

Line.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute('viewBox', '0 0 100 ' + opts.strokeWidth);
    svg.setAttribute('preserveAspectRatio', 'none');
};

Line.prototype._pathString = function _pathString(opts) {
    return utils.render(this._pathTemplate, {
        center: opts.strokeWidth / 2
    });
};

Line.prototype._trailString = function _trailString(opts) {
    return this._pathString(opts);
};

module.exports = Line;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

/* shifty - v1.5.3 - 2016-11-29 - http://jeremyckahn.github.io/shifty */
;(function () {
  var root = this || Function('return this')();

/**
 * Shifty Core
 * By Jeremy Kahn - jeremyckahn@gmail.com
 */

var Tweenable = (function () {

  'use strict';

  // Aliases that get defined later in this function
  var formula;

  // CONSTANTS
  var DEFAULT_SCHEDULE_FUNCTION;
  var DEFAULT_EASING = 'linear';
  var DEFAULT_DURATION = 500;
  var UPDATE_TIME = 1000 / 60;

  var _now = Date.now
       ? Date.now
       : function () {return +new Date();};

  var now = typeof SHIFTY_DEBUG_NOW !== 'undefined' ? SHIFTY_DEBUG_NOW : _now;

  if (typeof window !== 'undefined') {
    // requestAnimationFrame() shim by Paul Irish (modified for Shifty)
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    DEFAULT_SCHEDULE_FUNCTION = window.requestAnimationFrame
       || window.webkitRequestAnimationFrame
       || window.oRequestAnimationFrame
       || window.msRequestAnimationFrame
       || (window.mozCancelRequestAnimationFrame
       && window.mozRequestAnimationFrame)
       || setTimeout;
  } else {
    DEFAULT_SCHEDULE_FUNCTION = setTimeout;
  }

  function noop () {
    // NOOP!
  }

  /**
   * Handy shortcut for doing a for-in loop. This is not a "normal" each
   * function, it is optimized for Shifty.  The iterator function only receives
   * the property name, not the value.
   * @param {Object} obj
   * @param {Function(string)} fn
   * @private
   */
  function each (obj, fn) {
    var key;
    for (key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        fn(key);
      }
    }
  }

  /**
   * Perform a shallow copy of Object properties.
   * @param {Object} targetObject The object to copy into
   * @param {Object} srcObject The object to copy from
   * @return {Object} A reference to the augmented `targetObj` Object
   * @private
   */
  function shallowCopy (targetObj, srcObj) {
    each(srcObj, function (prop) {
      targetObj[prop] = srcObj[prop];
    });

    return targetObj;
  }

  /**
   * Copies each property from src onto target, but only if the property to
   * copy to target is undefined.
   * @param {Object} target Missing properties in this Object are filled in
   * @param {Object} src
   * @private
   */
  function defaults (target, src) {
    each(src, function (prop) {
      if (typeof target[prop] === 'undefined') {
        target[prop] = src[prop];
      }
    });
  }

  /**
   * Calculates the interpolated tween values of an Object for a given
   * timestamp.
   * @param {Number} forPosition The position to compute the state for.
   * @param {Object} currentState Current state properties.
   * @param {Object} originalState: The original state properties the Object is
   * tweening from.
   * @param {Object} targetState: The destination state properties the Object
   * is tweening to.
   * @param {number} duration: The length of the tween in milliseconds.
   * @param {number} timestamp: The UNIX epoch time at which the tween began.
   * @param {Object} easing: This Object's keys must correspond to the keys in
   * targetState.
   * @private
   */
  function tweenProps (forPosition, currentState, originalState, targetState,
    duration, timestamp, easing) {
    var normalizedPosition =
        forPosition < timestamp ? 0 : (forPosition - timestamp) / duration;


    var prop;
    var easingObjectProp;
    var easingFn;
    for (prop in currentState) {
      if (currentState.hasOwnProperty(prop)) {
        easingObjectProp = easing[prop];
        easingFn = typeof easingObjectProp === 'function'
          ? easingObjectProp
          : formula[easingObjectProp];

        currentState[prop] = tweenProp(
          originalState[prop],
          targetState[prop],
          easingFn,
          normalizedPosition
        );
      }
    }

    return currentState;
  }

  /**
   * Tweens a single property.
   * @param {number} start The value that the tween started from.
   * @param {number} end The value that the tween should end at.
   * @param {Function} easingFunc The easing curve to apply to the tween.
   * @param {number} position The normalized position (between 0.0 and 1.0) to
   * calculate the midpoint of 'start' and 'end' against.
   * @return {number} The tweened value.
   * @private
   */
  function tweenProp (start, end, easingFunc, position) {
    return start + (end - start) * easingFunc(position);
  }

  /**
   * Applies a filter to Tweenable instance.
   * @param {Tweenable} tweenable The `Tweenable` instance to call the filter
   * upon.
   * @param {String} filterName The name of the filter to apply.
   * @private
   */
  function applyFilter (tweenable, filterName) {
    var filters = Tweenable.prototype.filter;
    var args = tweenable._filterArgs;

    each(filters, function (name) {
      if (typeof filters[name][filterName] !== 'undefined') {
        filters[name][filterName].apply(tweenable, args);
      }
    });
  }

  var timeoutHandler_endTime;
  var timeoutHandler_currentTime;
  var timeoutHandler_isEnded;
  var timeoutHandler_offset;
  /**
   * Handles the update logic for one step of a tween.
   * @param {Tweenable} tweenable
   * @param {number} timestamp
   * @param {number} delay
   * @param {number} duration
   * @param {Object} currentState
   * @param {Object} originalState
   * @param {Object} targetState
   * @param {Object} easing
   * @param {Function(Object, *, number)} step
   * @param {Function(Function,number)}} schedule
   * @param {number=} opt_currentTimeOverride Needed for accurate timestamp in
   * Tweenable#seek.
   * @private
   */
  function timeoutHandler (tweenable, timestamp, delay, duration, currentState,
    originalState, targetState, easing, step, schedule,
    opt_currentTimeOverride) {

    timeoutHandler_endTime = timestamp + delay + duration;

    timeoutHandler_currentTime =
    Math.min(opt_currentTimeOverride || now(), timeoutHandler_endTime);

    timeoutHandler_isEnded =
      timeoutHandler_currentTime >= timeoutHandler_endTime;

    timeoutHandler_offset = duration - (
      timeoutHandler_endTime - timeoutHandler_currentTime);

    if (tweenable.isPlaying()) {
      if (timeoutHandler_isEnded) {
        step(targetState, tweenable._attachment, timeoutHandler_offset);
        tweenable.stop(true);
      } else {
        tweenable._scheduleId =
          schedule(tweenable._timeoutHandler, UPDATE_TIME);

        applyFilter(tweenable, 'beforeTween');

        // If the animation has not yet reached the start point (e.g., there was
        // delay that has not yet completed), just interpolate the starting
        // position of the tween.
        if (timeoutHandler_currentTime < (timestamp + delay)) {
          tweenProps(1, currentState, originalState, targetState, 1, 1, easing);
        } else {
          tweenProps(timeoutHandler_currentTime, currentState, originalState,
            targetState, duration, timestamp + delay, easing);
        }

        applyFilter(tweenable, 'afterTween');

        step(currentState, tweenable._attachment, timeoutHandler_offset);
      }
    }
  }


  /**
   * Creates a usable easing Object from a string, a function or another easing
   * Object.  If `easing` is an Object, then this function clones it and fills
   * in the missing properties with `"linear"`.
   * @param {Object.<string|Function>} fromTweenParams
   * @param {Object|string|Function} easing
   * @return {Object.<string|Function>}
   * @private
   */
  function composeEasingObject (fromTweenParams, easing) {
    var composedEasing = {};
    var typeofEasing = typeof easing;

    if (typeofEasing === 'string' || typeofEasing === 'function') {
      each(fromTweenParams, function (prop) {
        composedEasing[prop] = easing;
      });
    } else {
      each(fromTweenParams, function (prop) {
        if (!composedEasing[prop]) {
          composedEasing[prop] = easing[prop] || DEFAULT_EASING;
        }
      });
    }

    return composedEasing;
  }

  /**
   * Tweenable constructor.
   * @class Tweenable
   * @param {Object=} opt_initialState The values that the initial tween should
   * start at if a `from` object is not provided to `{{#crossLink
   * "Tweenable/tween:method"}}{{/crossLink}}` or `{{#crossLink
   * "Tweenable/setConfig:method"}}{{/crossLink}}`.
   * @param {Object=} opt_config Configuration object to be passed to
   * `{{#crossLink "Tweenable/setConfig:method"}}{{/crossLink}}`.
   * @module Tweenable
   * @constructor
   */
  function Tweenable (opt_initialState, opt_config) {
    this._currentState = opt_initialState || {};
    this._configured = false;
    this._scheduleFunction = DEFAULT_SCHEDULE_FUNCTION;

    // To prevent unnecessary calls to setConfig do not set default
    // configuration here.  Only set default configuration immediately before
    // tweening if none has been set.
    if (typeof opt_config !== 'undefined') {
      this.setConfig(opt_config);
    }
  }

  /**
   * Configure and start a tween.
   * @method tween
   * @param {Object=} opt_config Configuration object to be passed to
   * `{{#crossLink "Tweenable/setConfig:method"}}{{/crossLink}}`.
   * @chainable
   */
  Tweenable.prototype.tween = function (opt_config) {
    if (this._isTweening) {
      return this;
    }

    // Only set default config if no configuration has been set previously and
    // none is provided now.
    if (opt_config !== undefined || !this._configured) {
      this.setConfig(opt_config);
    }

    this._timestamp = now();
    this._start(this.get(), this._attachment);
    return this.resume();
  };

  /**
   * Configure a tween that will start at some point in the future.
   *
   * @method setConfig
   * @param {Object} config The following values are valid:
   * - __from__ (_Object=_): Starting position.  If omitted, `{{#crossLink
   *   "Tweenable/get:method"}}get(){{/crossLink}}` is used.
   * - __to__ (_Object=_): Ending position.
   * - __duration__ (_number=_): How many milliseconds to animate for.
   * - __delay__ (_delay=_): How many milliseconds to wait before starting the
   *   tween.
   * - __start__ (_Function(Object, *)_): Function to execute when the tween
   *   begins.  Receives the state of the tween as the first parameter and
   *   `attachment` as the second parameter.
   * - __step__ (_Function(Object, *, number)_): Function to execute on every
   *   tick.  Receives `{{#crossLink
   *   "Tweenable/get:method"}}get(){{/crossLink}}` as the first parameter,
   *   `attachment` as the second parameter, and the time elapsed since the
   *   start of the tween as the third. This function is not called on the
   *   final step of the animation, but `finish` is.
   * - __finish__ (_Function(Object, *)_): Function to execute upon tween
   *   completion.  Receives the state of the tween as the first parameter and
   *   `attachment` as the second parameter.
   * - __easing__ (_Object.<string|Function>|string|Function=_): Easing curve
   *   name(s) or function(s) to use for the tween.
   * - __attachment__ (_*_): Cached value that is passed to the
   *   `step`/`start`/`finish` methods.
   * @chainable
   */
  Tweenable.prototype.setConfig = function (config) {
    config = config || {};
    this._configured = true;

    // Attach something to this Tweenable instance (e.g.: a DOM element, an
    // object, a string, etc.);
    this._attachment = config.attachment;

    // Init the internal state
    this._pausedAtTime = null;
    this._scheduleId = null;
    this._delay = config.delay || 0;
    this._start = config.start || noop;
    this._step = config.step || noop;
    this._finish = config.finish || noop;
    this._duration = config.duration || DEFAULT_DURATION;
    this._currentState = shallowCopy({}, config.from || this.get());
    this._originalState = this.get();
    this._targetState = shallowCopy({}, config.to || this.get());

    var self = this;
    this._timeoutHandler = function () {
      timeoutHandler(self,
        self._timestamp,
        self._delay,
        self._duration,
        self._currentState,
        self._originalState,
        self._targetState,
        self._easing,
        self._step,
        self._scheduleFunction
      );
    };

    // Aliases used below
    var currentState = this._currentState;
    var targetState = this._targetState;

    // Ensure that there is always something to tween to.
    defaults(targetState, currentState);

    this._easing = composeEasingObject(
      currentState, config.easing || DEFAULT_EASING);

    this._filterArgs =
      [currentState, this._originalState, targetState, this._easing];

    applyFilter(this, 'tweenCreated');
    return this;
  };

  /**
   * @method get
   * @return {Object} The current state.
   */
  Tweenable.prototype.get = function () {
    return shallowCopy({}, this._currentState);
  };

  /**
   * @method set
   * @param {Object} state The current state.
   */
  Tweenable.prototype.set = function (state) {
    this._currentState = state;
  };

  /**
   * Pause a tween.  Paused tweens can be resumed from the point at which they
   * were paused.  This is different from `{{#crossLink
   * "Tweenable/stop:method"}}{{/crossLink}}`, as that method
   * causes a tween to start over when it is resumed.
   * @method pause
   * @chainable
   */
  Tweenable.prototype.pause = function () {
    this._pausedAtTime = now();
    this._isPaused = true;
    return this;
  };

  /**
   * Resume a paused tween.
   * @method resume
   * @chainable
   */
  Tweenable.prototype.resume = function () {
    if (this._isPaused) {
      this._timestamp += now() - this._pausedAtTime;
    }

    this._isPaused = false;
    this._isTweening = true;

    this._timeoutHandler();

    return this;
  };

  /**
   * Move the state of the animation to a specific point in the tween's
   * timeline.  If the animation is not running, this will cause the `step`
   * handlers to be called.
   * @method seek
   * @param {millisecond} millisecond The millisecond of the animation to seek
   * to.  This must not be less than `0`.
   * @chainable
   */
  Tweenable.prototype.seek = function (millisecond) {
    millisecond = Math.max(millisecond, 0);
    var currentTime = now();

    if ((this._timestamp + millisecond) === 0) {
      return this;
    }

    this._timestamp = currentTime - millisecond;

    if (!this.isPlaying()) {
      this._isTweening = true;
      this._isPaused = false;

      // If the animation is not running, call timeoutHandler to make sure that
      // any step handlers are run.
      timeoutHandler(this,
        this._timestamp,
        this._delay,
        this._duration,
        this._currentState,
        this._originalState,
        this._targetState,
        this._easing,
        this._step,
        this._scheduleFunction,
        currentTime
      );

      this.pause();
    }

    return this;
  };

  /**
   * Stops and cancels a tween.
   * @param {boolean=} gotoEnd If `false` or omitted, the tween just stops at
   * its current state, and the `finish` handler is not invoked.  If `true`,
   * the tweened object's values are instantly set to the target values, and
   * `finish` is invoked.
   * @method stop
   * @chainable
   */
  Tweenable.prototype.stop = function (gotoEnd) {
    this._isTweening = false;
    this._isPaused = false;
    this._timeoutHandler = noop;

    (root.cancelAnimationFrame            ||
    root.webkitCancelAnimationFrame     ||
    root.oCancelAnimationFrame          ||
    root.msCancelAnimationFrame         ||
    root.mozCancelRequestAnimationFrame ||
    root.clearTimeout)(this._scheduleId);

    if (gotoEnd) {
      applyFilter(this, 'beforeTween');
      tweenProps(
        1,
        this._currentState,
        this._originalState,
        this._targetState,
        1,
        0,
        this._easing
      );
      applyFilter(this, 'afterTween');
      applyFilter(this, 'afterTweenEnd');
      this._finish.call(this, this._currentState, this._attachment);
    }

    return this;
  };

  /**
   * @method isPlaying
   * @return {boolean} Whether or not a tween is running.
   */
  Tweenable.prototype.isPlaying = function () {
    return this._isTweening && !this._isPaused;
  };

  /**
   * Set a custom schedule function.
   *
   * If a custom function is not set,
   * [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame)
   * is used if available, otherwise
   * [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/Window.setTimeout)
   * is used.
   * @method setScheduleFunction
   * @param {Function(Function,number)} scheduleFunction The function to be
   * used to schedule the next frame to be rendered.
   */
  Tweenable.prototype.setScheduleFunction = function (scheduleFunction) {
    this._scheduleFunction = scheduleFunction;
  };

  /**
   * `delete` all "own" properties.  Call this when the `Tweenable` instance
   * is no longer needed to free memory.
   * @method dispose
   */
  Tweenable.prototype.dispose = function () {
    var prop;
    for (prop in this) {
      if (this.hasOwnProperty(prop)) {
        delete this[prop];
      }
    }
  };

  /**
   * Filters are used for transforming the properties of a tween at various
   * points in a Tweenable's life cycle.  See the README for more info on this.
   * @private
   */
  Tweenable.prototype.filter = {};

  /**
   * This object contains all of the tweens available to Shifty.  It is
   * extensible - simply attach properties to the `Tweenable.prototype.formula`
   * Object following the same format as `linear`.
   *
   * `pos` should be a normalized `number` (between 0 and 1).
   * @property formula
   * @type {Object(function)}
   */
  Tweenable.prototype.formula = {
    linear: function (pos) {
      return pos;
    }
  };

  formula = Tweenable.prototype.formula;

  shallowCopy(Tweenable, {
    'now': now
    ,'each': each
    ,'tweenProps': tweenProps
    ,'tweenProp': tweenProp
    ,'applyFilter': applyFilter
    ,'shallowCopy': shallowCopy
    ,'defaults': defaults
    ,'composeEasingObject': composeEasingObject
  });

  // `root` is provided in the intro/outro files.

  // A hook used for unit testing.
  if (typeof SHIFTY_DEBUG_NOW === 'function') {
    root.timeoutHandler = timeoutHandler;
  }

  // Bootstrap Tweenable appropriately for the environment.
  if (true) {
    // CommonJS
    module.exports = Tweenable;
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(function () {return Tweenable;});
  } else if (typeof root.Tweenable === 'undefined') {
    // Browser: Make `Tweenable` globally accessible.
    root.Tweenable = Tweenable;
  }

  return Tweenable;

} ());

/*!
 * All equations are adapted from Thomas Fuchs'
 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
 *
 * Based on Easing Equations (c) 2003 [Robert
 * Penner](http://www.robertpenner.com/), all rights reserved. This work is
 * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
 */

/*!
 *  TERMS OF USE - EASING EQUATIONS
 *  Open source under the BSD License.
 *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
 */

;(function () {

  Tweenable.shallowCopy(Tweenable.prototype.formula, {
    easeInQuad: function (pos) {
      return Math.pow(pos, 2);
    },

    easeOutQuad: function (pos) {
      return -(Math.pow((pos - 1), 2) - 1);
    },

    easeInOutQuad: function (pos) {
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,2);}
      return -0.5 * ((pos -= 2) * pos - 2);
    },

    easeInCubic: function (pos) {
      return Math.pow(pos, 3);
    },

    easeOutCubic: function (pos) {
      return (Math.pow((pos - 1), 3) + 1);
    },

    easeInOutCubic: function (pos) {
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,3);}
      return 0.5 * (Math.pow((pos - 2),3) + 2);
    },

    easeInQuart: function (pos) {
      return Math.pow(pos, 4);
    },

    easeOutQuart: function (pos) {
      return -(Math.pow((pos - 1), 4) - 1);
    },

    easeInOutQuart: function (pos) {
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,4);}
      return -0.5 * ((pos -= 2) * Math.pow(pos,3) - 2);
    },

    easeInQuint: function (pos) {
      return Math.pow(pos, 5);
    },

    easeOutQuint: function (pos) {
      return (Math.pow((pos - 1), 5) + 1);
    },

    easeInOutQuint: function (pos) {
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,5);}
      return 0.5 * (Math.pow((pos - 2),5) + 2);
    },

    easeInSine: function (pos) {
      return -Math.cos(pos * (Math.PI / 2)) + 1;
    },

    easeOutSine: function (pos) {
      return Math.sin(pos * (Math.PI / 2));
    },

    easeInOutSine: function (pos) {
      return (-0.5 * (Math.cos(Math.PI * pos) - 1));
    },

    easeInExpo: function (pos) {
      return (pos === 0) ? 0 : Math.pow(2, 10 * (pos - 1));
    },

    easeOutExpo: function (pos) {
      return (pos === 1) ? 1 : -Math.pow(2, -10 * pos) + 1;
    },

    easeInOutExpo: function (pos) {
      if (pos === 0) {return 0;}
      if (pos === 1) {return 1;}
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(2,10 * (pos - 1));}
      return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
    },

    easeInCirc: function (pos) {
      return -(Math.sqrt(1 - (pos * pos)) - 1);
    },

    easeOutCirc: function (pos) {
      return Math.sqrt(1 - Math.pow((pos - 1), 2));
    },

    easeInOutCirc: function (pos) {
      if ((pos /= 0.5) < 1) {return -0.5 * (Math.sqrt(1 - pos * pos) - 1);}
      return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
    },

    easeOutBounce: function (pos) {
      if ((pos) < (1 / 2.75)) {
        return (7.5625 * pos * pos);
      } else if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
      } else if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
      } else {
        return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
      }
    },

    easeInBack: function (pos) {
      var s = 1.70158;
      return (pos) * pos * ((s + 1) * pos - s);
    },

    easeOutBack: function (pos) {
      var s = 1.70158;
      return (pos = pos - 1) * pos * ((s + 1) * pos + s) + 1;
    },

    easeInOutBack: function (pos) {
      var s = 1.70158;
      if ((pos /= 0.5) < 1) {
        return 0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s));
      }
      return 0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
    },

    elastic: function (pos) {
      // jshint maxlen:90
      return -1 * Math.pow(4,-8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
    },

    swingFromTo: function (pos) {
      var s = 1.70158;
      return ((pos /= 0.5) < 1) ?
          0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s)) :
          0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
    },

    swingFrom: function (pos) {
      var s = 1.70158;
      return pos * pos * ((s + 1) * pos - s);
    },

    swingTo: function (pos) {
      var s = 1.70158;
      return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
    },

    bounce: function (pos) {
      if (pos < (1 / 2.75)) {
        return (7.5625 * pos * pos);
      } else if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
      } else if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
      } else {
        return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
      }
    },

    bouncePast: function (pos) {
      if (pos < (1 / 2.75)) {
        return (7.5625 * pos * pos);
      } else if (pos < (2 / 2.75)) {
        return 2 - (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
      } else if (pos < (2.5 / 2.75)) {
        return 2 - (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
      } else {
        return 2 - (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
      }
    },

    easeFromTo: function (pos) {
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,4);}
      return -0.5 * ((pos -= 2) * Math.pow(pos,3) - 2);
    },

    easeFrom: function (pos) {
      return Math.pow(pos,4);
    },

    easeTo: function (pos) {
      return Math.pow(pos,0.25);
    }
  });

}());

// jshint maxlen:100
/**
 * The Bezier magic in this file is adapted/copied almost wholesale from
 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/cubic-bezier.js),
 * which was adapted from Apple code (which probably came from
 * [here](http://opensource.apple.com/source/WebCore/WebCore-955.66/platform/graphics/UnitBezier.h)).
 * Special thanks to Apple and Thomas Fuchs for much of this code.
 */

/**
 *  Copyright (c) 2006 Apple Computer, Inc. All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *
 *  1. Redistributions of source code must retain the above copyright notice,
 *  this list of conditions and the following disclaimer.
 *
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation
 *  and/or other materials provided with the distribution.
 *
 *  3. Neither the name of the copyright holder(s) nor the names of any
 *  contributors may be used to endorse or promote products derived from
 *  this software without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 *  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 *  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 *  ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 *  LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 *  CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 *  SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 *  INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 *  CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
;(function () {
  // port of webkit cubic bezier handling by http://www.netzgesta.de/dev/
  function cubicBezierAtTime(t,p1x,p1y,p2x,p2y,duration) {
    var ax = 0,bx = 0,cx = 0,ay = 0,by = 0,cy = 0;
    function sampleCurveX(t) {
      return ((ax * t + bx) * t + cx) * t;
    }
    function sampleCurveY(t) {
      return ((ay * t + by) * t + cy) * t;
    }
    function sampleCurveDerivativeX(t) {
      return (3.0 * ax * t + 2.0 * bx) * t + cx;
    }
    function solveEpsilon(duration) {
      return 1.0 / (200.0 * duration);
    }
    function solve(x,epsilon) {
      return sampleCurveY(solveCurveX(x, epsilon));
    }
    function fabs(n) {
      if (n >= 0) {
        return n;
      } else {
        return 0 - n;
      }
    }
    function solveCurveX(x, epsilon) {
      var t0,t1,t2,x2,d2,i;
      for (t2 = x, i = 0; i < 8; i++) {
        x2 = sampleCurveX(t2) - x;
        if (fabs(x2) < epsilon) {
          return t2;
        }
        d2 = sampleCurveDerivativeX(t2);
        if (fabs(d2) < 1e-6) {
          break;
        }
        t2 = t2 - x2 / d2;
      }
      t0 = 0.0;
      t1 = 1.0;
      t2 = x;
      if (t2 < t0) {
        return t0;
      }
      if (t2 > t1) {
        return t1;
      }
      while (t0 < t1) {
        x2 = sampleCurveX(t2);
        if (fabs(x2 - x) < epsilon) {
          return t2;
        }
        if (x > x2) {
          t0 = t2;
        }else {
          t1 = t2;
        }
        t2 = (t1 - t0) * 0.5 + t0;
      }
      return t2; // Failure.
    }
    cx = 3.0 * p1x;
    bx = 3.0 * (p2x - p1x) - cx;
    ax = 1.0 - cx - bx;
    cy = 3.0 * p1y;
    by = 3.0 * (p2y - p1y) - cy;
    ay = 1.0 - cy - by;
    return solve(t, solveEpsilon(duration));
  }
  /**
   *  getCubicBezierTransition(x1, y1, x2, y2) -> Function
   *
   *  Generates a transition easing function that is compatible
   *  with WebKit's CSS transitions `-webkit-transition-timing-function`
   *  CSS property.
   *
   *  The W3C has more information about CSS3 transition timing functions:
   *  http://www.w3.org/TR/css3-transitions/#transition-timing-function_tag
   *
   *  @param {number} x1
   *  @param {number} y1
   *  @param {number} x2
   *  @param {number} y2
   *  @return {function}
   *  @private
   */
  function getCubicBezierTransition (x1, y1, x2, y2) {
    return function (pos) {
      return cubicBezierAtTime(pos,x1,y1,x2,y2,1);
    };
  }
  // End ported code

  /**
   * Create a Bezier easing function and attach it to `{{#crossLink
   * "Tweenable/formula:property"}}Tweenable#formula{{/crossLink}}`.  This
   * function gives you total control over the easing curve.  Matthew Lein's
   * [Ceaser](http://matthewlein.com/ceaser/) is a useful tool for visualizing
   * the curves you can make with this function.
   * @method setBezierFunction
   * @param {string} name The name of the easing curve.  Overwrites the old
   * easing function on `{{#crossLink
   * "Tweenable/formula:property"}}Tweenable#formula{{/crossLink}}` if it
   * exists.
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @return {function} The easing function that was attached to
   * Tweenable.prototype.formula.
   */
  Tweenable.setBezierFunction = function (name, x1, y1, x2, y2) {
    var cubicBezierTransition = getCubicBezierTransition(x1, y1, x2, y2);
    cubicBezierTransition.displayName = name;
    cubicBezierTransition.x1 = x1;
    cubicBezierTransition.y1 = y1;
    cubicBezierTransition.x2 = x2;
    cubicBezierTransition.y2 = y2;

    return Tweenable.prototype.formula[name] = cubicBezierTransition;
  };


  /**
   * `delete` an easing function from `{{#crossLink
   * "Tweenable/formula:property"}}Tweenable#formula{{/crossLink}}`.  Be
   * careful with this method, as it `delete`s whatever easing formula matches
   * `name` (which means you can delete standard Shifty easing functions).
   * @method unsetBezierFunction
   * @param {string} name The name of the easing function to delete.
   * @return {function}
   */
  Tweenable.unsetBezierFunction = function (name) {
    delete Tweenable.prototype.formula[name];
  };

})();

;(function () {

  function getInterpolatedValues (
    from, current, targetState, position, easing, delay) {
    return Tweenable.tweenProps(
      position, current, from, targetState, 1, delay, easing);
  }

  // Fake a Tweenable and patch some internals.  This approach allows us to
  // skip uneccessary processing and object recreation, cutting down on garbage
  // collection pauses.
  var mockTweenable = new Tweenable();
  mockTweenable._filterArgs = [];

  /**
   * Compute the midpoint of two Objects.  This method effectively calculates a
   * specific frame of animation that `{{#crossLink
   * "Tweenable/tween:method"}}{{/crossLink}}` does many times over the course
   * of a full tween.
   *
   *     var interpolatedValues = Tweenable.interpolate({
   *       width: '100px',
   *       opacity: 0,
   *       color: '#fff'
   *     }, {
   *       width: '200px',
   *       opacity: 1,
   *       color: '#000'
   *     }, 0.5);
   *
   *     console.log(interpolatedValues);
   *     // {opacity: 0.5, width: "150px", color: "rgb(127,127,127)"}
   *
   * @static
   * @method interpolate
   * @param {Object} from The starting values to tween from.
   * @param {Object} targetState The ending values to tween to.
   * @param {number} position The normalized position value (between `0.0` and
   * `1.0`) to interpolate the values between `from` and `to` for.  `from`
   * represents `0` and `to` represents `1`.
   * @param {Object.<string|Function>|string|Function} easing The easing
   * curve(s) to calculate the midpoint against.  You can reference any easing
   * function attached to `Tweenable.prototype.formula`, or provide the easing
   * function(s) directly.  If omitted, this defaults to "linear".
   * @param {number=} opt_delay Optional delay to pad the beginning of the
   * interpolated tween with.  This increases the range of `position` from (`0`
   * through `1`) to (`0` through `1 + opt_delay`).  So, a delay of `0.5` would
   * increase all valid values of `position` to numbers between `0` and `1.5`.
   * @return {Object}
   */
  Tweenable.interpolate = function (
    from, targetState, position, easing, opt_delay) {

    var current = Tweenable.shallowCopy({}, from);
    var delay = opt_delay || 0;
    var easingObject = Tweenable.composeEasingObject(
      from, easing || 'linear');

    mockTweenable.set({});

    // Alias and reuse the _filterArgs array instead of recreating it.
    var filterArgs = mockTweenable._filterArgs;
    filterArgs.length = 0;
    filterArgs[0] = current;
    filterArgs[1] = from;
    filterArgs[2] = targetState;
    filterArgs[3] = easingObject;

    // Any defined value transformation must be applied
    Tweenable.applyFilter(mockTweenable, 'tweenCreated');
    Tweenable.applyFilter(mockTweenable, 'beforeTween');

    var interpolatedValues = getInterpolatedValues(
      from, current, targetState, position, easingObject, delay);

    // Transform values back into their original format
    Tweenable.applyFilter(mockTweenable, 'afterTween');

    return interpolatedValues;
  };

}());

/**
 * This module adds string interpolation support to Shifty.
 *
 * The Token extension allows Shifty to tween numbers inside of strings.  Among
 * other things, this allows you to animate CSS properties.  For example, you
 * can do this:
 *
 *     var tweenable = new Tweenable();
 *     tweenable.tween({
 *       from: { transform: 'translateX(45px)' },
 *       to: { transform: 'translateX(90xp)' }
 *     });
 *
 * `translateX(45)` will be tweened to `translateX(90)`.  To demonstrate:
 *
 *     var tweenable = new Tweenable();
 *     tweenable.tween({
 *       from: { transform: 'translateX(45px)' },
 *       to: { transform: 'translateX(90px)' },
 *       step: function (state) {
 *         console.log(state.transform);
 *       }
 *     });
 *
 * The above snippet will log something like this in the console:
 *
 *     translateX(60.3px)
 *     ...
 *     translateX(76.05px)
 *     ...
 *     translateX(90px)
 *
 * Another use for this is animating colors:
 *
 *     var tweenable = new Tweenable();
 *     tweenable.tween({
 *       from: { color: 'rgb(0,255,0)' },
 *       to: { color: 'rgb(255,0,255)' },
 *       step: function (state) {
 *         console.log(state.color);
 *       }
 *     });
 *
 * The above snippet will log something like this:
 *
 *     rgb(84,170,84)
 *     ...
 *     rgb(170,84,170)
 *     ...
 *     rgb(255,0,255)
 *
 * This extension also supports hexadecimal colors, in both long (`#ff00ff`)
 * and short (`#f0f`) forms.  Be aware that hexadecimal input values will be
 * converted into the equivalent RGB output values.  This is done to optimize
 * for performance.
 *
 *     var tweenable = new Tweenable();
 *     tweenable.tween({
 *       from: { color: '#0f0' },
 *       to: { color: '#f0f' },
 *       step: function (state) {
 *         console.log(state.color);
 *       }
 *     });
 *
 * This snippet will generate the same output as the one before it because
 * equivalent values were supplied (just in hexadecimal form rather than RGB):
 *
 *     rgb(84,170,84)
 *     ...
 *     rgb(170,84,170)
 *     ...
 *     rgb(255,0,255)
 *
 * ## Easing support
 *
 * Easing works somewhat differently in the Token extension.  This is because
 * some CSS properties have multiple values in them, and you might need to
 * tween each value along its own easing curve.  A basic example:
 *
 *     var tweenable = new Tweenable();
 *     tweenable.tween({
 *       from: { transform: 'translateX(0px) translateY(0px)' },
 *       to: { transform:   'translateX(100px) translateY(100px)' },
 *       easing: { transform: 'easeInQuad' },
 *       step: function (state) {
 *         console.log(state.transform);
 *       }
 *     });
 *
 * The above snippet will create values like this:
 *
 *     translateX(11.56px) translateY(11.56px)
 *     ...
 *     translateX(46.24px) translateY(46.24px)
 *     ...
 *     translateX(100px) translateY(100px)
 *
 * In this case, the values for `translateX` and `translateY` are always the
 * same for each step of the tween, because they have the same start and end
 * points and both use the same easing curve.  We can also tween `translateX`
 * and `translateY` along independent curves:
 *
 *     var tweenable = new Tweenable();
 *     tweenable.tween({
 *       from: { transform: 'translateX(0px) translateY(0px)' },
 *       to: { transform:   'translateX(100px) translateY(100px)' },
 *       easing: { transform: 'easeInQuad bounce' },
 *       step: function (state) {
 *         console.log(state.transform);
 *       }
 *     });
 *
 * The above snippet will create values like this:
 *
 *     translateX(10.89px) translateY(82.35px)
 *     ...
 *     translateX(44.89px) translateY(86.73px)
 *     ...
 *     translateX(100px) translateY(100px)
 *
 * `translateX` and `translateY` are not in sync anymore, because `easeInQuad`
 * was specified for `translateX` and `bounce` for `translateY`.  Mixing and
 * matching easing curves can make for some interesting motion in your
 * animations.
 *
 * The order of the space-separated easing curves correspond the token values
 * they apply to.  If there are more token values than easing curves listed,
 * the last easing curve listed is used.
 * @submodule Tweenable.token
 */

// token function is defined above only so that dox-foundation sees it as
// documentation and renders it.  It is never used, and is optimized away at
// build time.

;(function (Tweenable) {

  /**
   * @typedef {{
   *   formatString: string
   *   chunkNames: Array.<string>
   * }}
   * @private
   */
  var formatManifest;

  // CONSTANTS

  var R_NUMBER_COMPONENT = /(\d|\-|\.)/;
  var R_FORMAT_CHUNKS = /([^\-0-9\.]+)/g;
  var R_UNFORMATTED_VALUES = /[0-9.\-]+/g;
  var R_RGB = new RegExp(
    'rgb\\(' + R_UNFORMATTED_VALUES.source +
    (/,\s*/.source) + R_UNFORMATTED_VALUES.source +
    (/,\s*/.source) + R_UNFORMATTED_VALUES.source + '\\)', 'g');
  var R_RGB_PREFIX = /^.*\(/;
  var R_HEX = /#([0-9]|[a-f]){3,6}/gi;
  var VALUE_PLACEHOLDER = 'VAL';

  // HELPERS

  /**
   * @param {Array.number} rawValues
   * @param {string} prefix
   *
   * @return {Array.<string>}
   * @private
   */
  function getFormatChunksFrom (rawValues, prefix) {
    var accumulator = [];

    var rawValuesLength = rawValues.length;
    var i;

    for (i = 0; i < rawValuesLength; i++) {
      accumulator.push('_' + prefix + '_' + i);
    }

    return accumulator;
  }

  /**
   * @param {string} formattedString
   *
   * @return {string}
   * @private
   */
  function getFormatStringFrom (formattedString) {
    var chunks = formattedString.match(R_FORMAT_CHUNKS);

    if (!chunks) {
      // chunks will be null if there were no tokens to parse in
      // formattedString (for example, if formattedString is '2').  Coerce
      // chunks to be useful here.
      chunks = ['', ''];

      // If there is only one chunk, assume that the string is a number
      // followed by a token...
      // NOTE: This may be an unwise assumption.
    } else if (chunks.length === 1 ||
      // ...or if the string starts with a number component (".", "-", or a
      // digit)...
    formattedString.charAt(0).match(R_NUMBER_COMPONENT)) {
      // ...prepend an empty string here to make sure that the formatted number
      // is properly replaced by VALUE_PLACEHOLDER
      chunks.unshift('');
    }

    return chunks.join(VALUE_PLACEHOLDER);
  }

  /**
   * Convert all hex color values within a string to an rgb string.
   *
   * @param {Object} stateObject
   *
   * @return {Object} The modified obj
   * @private
   */
  function sanitizeObjectForHexProps (stateObject) {
    Tweenable.each(stateObject, function (prop) {
      var currentProp = stateObject[prop];

      if (typeof currentProp === 'string' && currentProp.match(R_HEX)) {
        stateObject[prop] = sanitizeHexChunksToRGB(currentProp);
      }
    });
  }

  /**
   * @param {string} str
   *
   * @return {string}
   * @private
   */
  function  sanitizeHexChunksToRGB (str) {
    return filterStringChunks(R_HEX, str, convertHexToRGB);
  }

  /**
   * @param {string} hexString
   *
   * @return {string}
   * @private
   */
  function convertHexToRGB (hexString) {
    var rgbArr = hexToRGBArray(hexString);
    return 'rgb(' + rgbArr[0] + ',' + rgbArr[1] + ',' + rgbArr[2] + ')';
  }

  var hexToRGBArray_returnArray = [];
  /**
   * Convert a hexadecimal string to an array with three items, one each for
   * the red, blue, and green decimal values.
   *
   * @param {string} hex A hexadecimal string.
   *
   * @returns {Array.<number>} The converted Array of RGB values if `hex` is a
   * valid string, or an Array of three 0's.
   * @private
   */
  function hexToRGBArray (hex) {

    hex = hex.replace(/#/, '');

    // If the string is a shorthand three digit hex notation, normalize it to
    // the standard six digit notation
    if (hex.length === 3) {
      hex = hex.split('');
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    hexToRGBArray_returnArray[0] = hexToDec(hex.substr(0, 2));
    hexToRGBArray_returnArray[1] = hexToDec(hex.substr(2, 2));
    hexToRGBArray_returnArray[2] = hexToDec(hex.substr(4, 2));

    return hexToRGBArray_returnArray;
  }

  /**
   * Convert a base-16 number to base-10.
   *
   * @param {Number|String} hex The value to convert
   *
   * @returns {Number} The base-10 equivalent of `hex`.
   * @private
   */
  function hexToDec (hex) {
    return parseInt(hex, 16);
  }

  /**
   * Runs a filter operation on all chunks of a string that match a RegExp
   *
   * @param {RegExp} pattern
   * @param {string} unfilteredString
   * @param {function(string)} filter
   *
   * @return {string}
   * @private
   */
  function filterStringChunks (pattern, unfilteredString, filter) {
    var pattenMatches = unfilteredString.match(pattern);
    var filteredString = unfilteredString.replace(pattern, VALUE_PLACEHOLDER);

    if (pattenMatches) {
      var pattenMatchesLength = pattenMatches.length;
      var currentChunk;

      for (var i = 0; i < pattenMatchesLength; i++) {
        currentChunk = pattenMatches.shift();
        filteredString = filteredString.replace(
          VALUE_PLACEHOLDER, filter(currentChunk));
      }
    }

    return filteredString;
  }

  /**
   * Check for floating point values within rgb strings and rounds them.
   *
   * @param {string} formattedString
   *
   * @return {string}
   * @private
   */
  function sanitizeRGBChunks (formattedString) {
    return filterStringChunks(R_RGB, formattedString, sanitizeRGBChunk);
  }

  /**
   * @param {string} rgbChunk
   *
   * @return {string}
   * @private
   */
  function sanitizeRGBChunk (rgbChunk) {
    var numbers = rgbChunk.match(R_UNFORMATTED_VALUES);
    var numbersLength = numbers.length;
    var sanitizedString = rgbChunk.match(R_RGB_PREFIX)[0];

    for (var i = 0; i < numbersLength; i++) {
      sanitizedString += parseInt(numbers[i], 10) + ',';
    }

    sanitizedString = sanitizedString.slice(0, -1) + ')';

    return sanitizedString;
  }

  /**
   * @param {Object} stateObject
   *
   * @return {Object} An Object of formatManifests that correspond to
   * the string properties of stateObject
   * @private
   */
  function getFormatManifests (stateObject) {
    var manifestAccumulator = {};

    Tweenable.each(stateObject, function (prop) {
      var currentProp = stateObject[prop];

      if (typeof currentProp === 'string') {
        var rawValues = getValuesFrom(currentProp);

        manifestAccumulator[prop] = {
          'formatString': getFormatStringFrom(currentProp)
          ,'chunkNames': getFormatChunksFrom(rawValues, prop)
        };
      }
    });

    return manifestAccumulator;
  }

  /**
   * @param {Object} stateObject
   * @param {Object} formatManifests
   * @private
   */
  function expandFormattedProperties (stateObject, formatManifests) {
    Tweenable.each(formatManifests, function (prop) {
      var currentProp = stateObject[prop];
      var rawValues = getValuesFrom(currentProp);
      var rawValuesLength = rawValues.length;

      for (var i = 0; i < rawValuesLength; i++) {
        stateObject[formatManifests[prop].chunkNames[i]] = +rawValues[i];
      }

      delete stateObject[prop];
    });
  }

  /**
   * @param {Object} stateObject
   * @param {Object} formatManifests
   * @private
   */
  function collapseFormattedProperties (stateObject, formatManifests) {
    Tweenable.each(formatManifests, function (prop) {
      var currentProp = stateObject[prop];
      var formatChunks = extractPropertyChunks(
        stateObject, formatManifests[prop].chunkNames);
      var valuesList = getValuesList(
        formatChunks, formatManifests[prop].chunkNames);
      currentProp = getFormattedValues(
        formatManifests[prop].formatString, valuesList);
      stateObject[prop] = sanitizeRGBChunks(currentProp);
    });
  }

  /**
   * @param {Object} stateObject
   * @param {Array.<string>} chunkNames
   *
   * @return {Object} The extracted value chunks.
   * @private
   */
  function extractPropertyChunks (stateObject, chunkNames) {
    var extractedValues = {};
    var currentChunkName, chunkNamesLength = chunkNames.length;

    for (var i = 0; i < chunkNamesLength; i++) {
      currentChunkName = chunkNames[i];
      extractedValues[currentChunkName] = stateObject[currentChunkName];
      delete stateObject[currentChunkName];
    }

    return extractedValues;
  }

  var getValuesList_accumulator = [];
  /**
   * @param {Object} stateObject
   * @param {Array.<string>} chunkNames
   *
   * @return {Array.<number>}
   * @private
   */
  function getValuesList (stateObject, chunkNames) {
    getValuesList_accumulator.length = 0;
    var chunkNamesLength = chunkNames.length;

    for (var i = 0; i < chunkNamesLength; i++) {
      getValuesList_accumulator.push(stateObject[chunkNames[i]]);
    }

    return getValuesList_accumulator;
  }

  /**
   * @param {string} formatString
   * @param {Array.<number>} rawValues
   *
   * @return {string}
   * @private
   */
  function getFormattedValues (formatString, rawValues) {
    var formattedValueString = formatString;
    var rawValuesLength = rawValues.length;

    for (var i = 0; i < rawValuesLength; i++) {
      formattedValueString = formattedValueString.replace(
        VALUE_PLACEHOLDER, +rawValues[i].toFixed(4));
    }

    return formattedValueString;
  }

  /**
   * Note: It's the duty of the caller to convert the Array elements of the
   * return value into numbers.  This is a performance optimization.
   *
   * @param {string} formattedString
   *
   * @return {Array.<string>|null}
   * @private
   */
  function getValuesFrom (formattedString) {
    return formattedString.match(R_UNFORMATTED_VALUES);
  }

  /**
   * @param {Object} easingObject
   * @param {Object} tokenData
   * @private
   */
  function expandEasingObject (easingObject, tokenData) {
    Tweenable.each(tokenData, function (prop) {
      var currentProp = tokenData[prop];
      var chunkNames = currentProp.chunkNames;
      var chunkLength = chunkNames.length;

      var easing = easingObject[prop];
      var i;

      if (typeof easing === 'string') {
        var easingChunks = easing.split(' ');
        var lastEasingChunk = easingChunks[easingChunks.length - 1];

        for (i = 0; i < chunkLength; i++) {
          easingObject[chunkNames[i]] = easingChunks[i] || lastEasingChunk;
        }

      } else {
        for (i = 0; i < chunkLength; i++) {
          easingObject[chunkNames[i]] = easing;
        }
      }

      delete easingObject[prop];
    });
  }

  /**
   * @param {Object} easingObject
   * @param {Object} tokenData
   * @private
   */
  function collapseEasingObject (easingObject, tokenData) {
    Tweenable.each(tokenData, function (prop) {
      var currentProp = tokenData[prop];
      var chunkNames = currentProp.chunkNames;
      var chunkLength = chunkNames.length;

      var firstEasing = easingObject[chunkNames[0]];
      var typeofEasings = typeof firstEasing;

      if (typeofEasings === 'string') {
        var composedEasingString = '';

        for (var i = 0; i < chunkLength; i++) {
          composedEasingString += ' ' + easingObject[chunkNames[i]];
          delete easingObject[chunkNames[i]];
        }

        easingObject[prop] = composedEasingString.substr(1);
      } else {
        easingObject[prop] = firstEasing;
      }
    });
  }

  Tweenable.prototype.filter.token = {
    'tweenCreated': function (currentState, fromState, toState, easingObject) {
      sanitizeObjectForHexProps(currentState);
      sanitizeObjectForHexProps(fromState);
      sanitizeObjectForHexProps(toState);
      this._tokenData = getFormatManifests(currentState);
    },

    'beforeTween': function (currentState, fromState, toState, easingObject) {
      expandEasingObject(easingObject, this._tokenData);
      expandFormattedProperties(currentState, this._tokenData);
      expandFormattedProperties(fromState, this._tokenData);
      expandFormattedProperties(toState, this._tokenData);
    },

    'afterTween': function (currentState, fromState, toState, easingObject) {
      collapseFormattedProperties(currentState, this._tokenData);
      collapseFormattedProperties(fromState, this._tokenData);
      collapseFormattedProperties(toState, this._tokenData);
      collapseEasingObject(easingObject, this._tokenData);
    }
  };

} (Tweenable));

}).call(null);


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// Semi-SemiCircle shaped progress bar

var Shape = __webpack_require__(5);
var Circle = __webpack_require__(8);
var utils = __webpack_require__(3);

var SemiCircle = function SemiCircle(container, options) {
    // Use one arc to form a SemiCircle
    // See this answer http://stackoverflow.com/a/10477334/1446092
    this._pathTemplate =
        'M 50,50 m -{radius},0' +
        ' a {radius},{radius} 0 1 1 {2radius},0';

    this.containerAspectRatio = 2;

    Shape.apply(this, arguments);
};

SemiCircle.prototype = new Shape();
SemiCircle.prototype.constructor = SemiCircle;

SemiCircle.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute('viewBox', '0 0 100 50');
};

SemiCircle.prototype._initializeTextContainer = function _initializeTextContainer(
    opts,
    container,
    textContainer
) {
    if (opts.text.style) {
        // Reset top style
        textContainer.style.top = 'auto';
        textContainer.style.bottom = '0';

        if (opts.text.alignToBottom) {
            utils.setStyle(textContainer, 'transform', 'translate(-50%, 0)');
        } else {
            utils.setStyle(textContainer, 'transform', 'translate(-50%, 50%)');
        }
    }
};

// Share functionality with Circle, just have different path
SemiCircle.prototype._pathString = Circle.prototype._pathString;
SemiCircle.prototype._trailString = Circle.prototype._trailString;

module.exports = SemiCircle;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _omi = __webpack_require__(0);

var _index = __webpack_require__(124);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('o-select-list', (_temp2 = _class = function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.onSelect = function (item, index) {
      _this.props.onSelect && _this.props.onSelect(item, index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'css',
    value: function css() {
      return _index2['default'];
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      var selectedIndex = props.selectedIndex,
          list = props.list,
          onSelect = props.onSelect,
          other = _objectWithoutProperties(props, ['selectedIndex', 'list', 'onSelect']);

      return Omi.h(
        'ul',
        _extends({}, (0, _omi.extractClass)(other, 'o-select-list'), other),
        list.map(function (item, index) {
          return Omi.h(
            'li',
            {
              'class': index === selectedIndex ? '_slt' : '',
              onClick: function onClick() {
                return _this2.onSelect(item, index);
              } },
            item.text
          );
        })
      );
    }
  }]);

  return _class;
}(_omi.WeElement), _class.defaultProps = {
  selectedIndex: 0,
  list: []
}, _temp2));

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(125);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\n.o-select-list{\n  height: 150px;\n  width: 240px;\n  padding: 13px;\n  border: 1px solid #ccc;\n  margin-top: 20px;\n  border-radius: 4px;\n  padding: 0px 0px; \n  text-indent: 10px; \n  font-size: 12px;\n  overflow-y: auto;  \n}\n\nul,li{\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.o-select-list li{\n  cursor: pointer;\n  height: 30px;\n  line-height: 30px;\n}\n\n.o-select-list li:last-child{\n  margin-bottom: 10px; \n} \n\n.o-select-list li:hover{\n  background-color: rgb(209, 226, 217);\n} \n\n._slt{\n  background-color:#07C160; \n  color: white;\n}", ""]);



/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var state = {
  DONE: 0,
  ERROR: 1,
  DOING: 2,
  TODO: 3
};

(0, _omi.define)('o-step', function (_WeElement) {
  _inherits(_class2, _WeElement);

  function _class2() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.css = __webpack_require__(127), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class2, [{
    key: 'render',
    value: function render(props) {
      return Omi.h(
        'div',
        (0, _omi.extractClass)(props, 'o-step _horizontal'),
        props.items.map(function (item, index) {
          return Omi.h(
            'div',
            { 'class': (0, _omi.classNames)('_item', {
                '_item-finish': item.state === state.DONE,
                '_item-block': item.state === state.ERROR,
                '_item-process': item.state === state.DOING,
                '_item-wait': item.state === state.TODO,
                'next-error': props.items[index + 1] && props.items[index + 1].state === state.ERROR
              }) },
            Omi.h('div', { 'class': '_item-tail' }),
            Omi.h(
              'div',
              { 'class': '_item-icon' },
              Omi.h(
                'span',
                { 'class': 'icon' },
                item.state === state.DONE && Omi.h(
                  'i',
                  { 'class': 'anticon anticon-check finish-icon' },
                  Omi.h(
                    'svg',
                    { viewBox: '64 64 896 896', 'class': '', 'data-icon': 'check', width: '1em', height: '1em', fill: '#07C160', 'aria-hidden': 'true' },
                    Omi.h('path', { d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z' })
                  )
                ),
                item.state === state.ERROR && Omi.h(
                  'i',
                  { 'class': 'anticon anticon-close error-icon' },
                  Omi.h(
                    'svg',
                    { viewBox: '64 64 896 896', 'class': '', 'data-icon': 'close', width: '1em', height: '1em', fill: '#F95050', 'aria-hidden': 'true' },
                    Omi.h('path', { d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z' })
                  )
                ),
                (item.state === state.DOING || item.state === state.TODO) && Omi.h(
                  'span',
                  { 'class': 'icon' },
                  index + 1
                )
              )
            ),
            Omi.h(
              'div',
              { 'class': '_item-content' },
              Omi.h(
                'div',
                { 'class': '_item-title' },
                item.name
              ),
              Omi.h(
                'div',
                { 'class': '_item-description' },
                item.description
              )
            )
          );
        })
      );
    }
  }]);

  return _class2;
}(_omi.WeElement));

exports['default'] = state;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var result = __webpack_require__(128);

if (typeof result === "string") {
    module.exports = result;
} else {
    module.exports = result.toString();
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".o-step {}\n\n._item-icon {\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  border-radius: 32px;\n  font-size: 16px;\n  margin-right: 8px;\n  display: inline-block;\n}\n\n._item-content {\n  display: inline-block;\n  position: relative;\n  top: 20px;\n}\n\n._item-finish ._item-icon {\n  border-color: #07C160;\n  background-color: #fff;\n}\n\n\n._item-process ._item-icon {\n  color: white;\n  border-color: #07C160;\n  background-color: #07C160;\n}\n\n\n._item-wait  {\n  color:rgba(0, 0, 0, 0.45);\n}\n\n\n._item-block ._item-icon {\n  border-color: #F95050;\n  background-color: #fff;\n}\n\n\n._item-block  {\n  color: #F95050;\n}\n\n._item-block ._item-description {\n  color: #F95050;\n}\n\n._item-description {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 13px;\n}\n\n.finish-icon {\n  position: relative;\n  top: 2px;\n}\n\n\n.error-icon {\n  position: relative;\n  top: 2px;\n}\n\n._item-finish>._item-content>._item-title:after {\n  background-color: #07C160;\n}\n\n._item.next-error ._item-title:after {\n  background: #F95050;\n}\n\n._item-title:after {\n  content: '';\n  height: 1px;\n  width: 9999px;\n  background: #e8e8e8;\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 100%;\n}\n\n._item {\n  position: relative;\n  display: inline-block;\n  /* background-color: white; */\n  overflow: hidden;\n  height: 60px;\n  margin-right: 16px;\n  white-space: nowrap;\n}\n\n._item:last-child ._item-title:after {\n  display: none;\n}\n\n._item-title {\n  position: relative;\n  display: inline-block;\n  padding-right: 16px;\n}\n", ""]);



/***/ })
/******/ ]);
});
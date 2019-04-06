(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TransformationMatrix"] = factory();
	else
		root["TransformationMatrix"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/applyToPoint.js
/**
 * Calculate a point transformed with an affine matrix
 * @param matrix Affine matrix
 * @param point Point
 * @returns {{x: number, y: number} | Array} Point
 */
function applyToPoint(matrix, point) {
  return Array.isArray(point) ? [matrix.a * point[0] + matrix.c * point[1] + matrix.e, matrix.b * point[0] + matrix.d * point[1] + matrix.f] : {
    x: matrix.a * point.x + matrix.c * point.y + matrix.e,
    y: matrix.b * point.x + matrix.d * point.y + matrix.f
  };
}

/**
 * Calculate an array of points transformed with an affine matrix
 * @param matrix Affine matrix
 * @param points Array of points
 * @returns {array} Array of points
 */
function applyToPoints(matrix, points) {
  return points.map(function (point) {
    return applyToPoint(matrix, point);
  });
}
// CONCATENATED MODULE: ./src/fromObject.js
/**
 * Extract an affine matrix from an object that contains a,b,c,d,e,f keys
 * Each value could be a float or a string that contains a float
 * @param object
 * @return {{a: *, b: *, c: *, e: *, d: *, f: *}}}
 */
function fromObject(object) {
  return {
    a: parseFloat(object.a),
    b: parseFloat(object.b),
    c: parseFloat(object.c),
    d: parseFloat(object.d),
    e: parseFloat(object.e),
    f: parseFloat(object.f)
  };
}
// CONCATENATED MODULE: ./src/fromString.js
/**
 * @ignore
 * @type {RegExp}
 */
var matrixRegex = /^matrix\(\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*\)$/i;

/**
 * Parse a string matrix formatted as matrix(a,b,c,d,e,f)
 * @param string String with a matrix
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function fromString(string) {
  var parsed = string.match(matrixRegex);
  if (parsed === null || parsed.length < 7) throw new Error("'" + string + "' is not a matrix");
  return {
    a: parseFloat(parsed[1]),
    b: parseFloat(parsed[2]),
    c: parseFloat(parsed[3]),
    d: parseFloat(parsed[4]),
    e: parseFloat(parsed[5]),
    f: parseFloat(parsed[6])
  };
}
// CONCATENATED MODULE: ./src/identity.js
/**
 * Identity matrix
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function identity() {
  return {
    a: 1,
    c: 0,
    e: 0,
    b: 0,
    d: 1,
    f: 0
  };
}
// CONCATENATED MODULE: ./src/inverse.js
/**
 * Calculate a matrix that is the inverse of the provided matrix
 * @param matrix Affine matrix
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function inverse(matrix) {
  // http://www.wolframalpha.com/input/?i=Inverse+%5B%7B%7Ba,c,e%7D,%7Bb,d,f%7D,%7B0,0,1%7D%7D%5D

  var a = matrix.a,
      b = matrix.b,
      c = matrix.c,
      d = matrix.d,
      e = matrix.e,
      f = matrix.f;


  var denom = a * d - b * c;

  return {
    a: d / denom,
    b: b / -denom,
    c: c / -denom,
    d: a / denom,
    e: (d * e - c * f) / -denom,
    f: (b * e - a * f) / denom
  };
}
// CONCATENATED MODULE: ./src/isAffineMatrix.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isNumeric = function isNumeric(n) {
  return typeof n === 'number' && !isNaN(n) && isFinite(n);
};
var isObject = function isObject(obj) {
  return obj != null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};

/**
 * Check if the object contain an affine matrix
 * @param object
 * @return {boolean}
 */
function isAffineMatrix(object) {
  return isObject(object) && object.hasOwnProperty('a') && isNumeric(object.a) && object.hasOwnProperty('b') && isNumeric(object.b) && object.hasOwnProperty('c') && isNumeric(object.c) && object.hasOwnProperty('d') && isNumeric(object.d) && object.hasOwnProperty('e') && isNumeric(object.e) && object.hasOwnProperty('f') && isNumeric(object.f);
}
// CONCATENATED MODULE: ./src/utils.js
function isUndefined(val) {
  return typeof val === 'undefined';
}
// CONCATENATED MODULE: ./src/translate.js
/**
 * Calculate a translate matrix
 * @param tx Translation on axis x
 * @param [ty = 0] Translation on axis y
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function translate(tx) {
  var ty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return {
    a: 1,
    c: 0,
    e: tx,
    b: 0,
    d: 1,
    f: ty
  };
}
// CONCATENATED MODULE: ./src/transform.js
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

/**
 * Merge multiple matrices into one
 * @param matrices {...object} list of matrices
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function transform() {
  for (var _len = arguments.length, matrices = Array(_len), _key = 0; _key < _len; _key++) {
    matrices[_key] = arguments[_key];
  }

  matrices = Array.isArray(matrices[0]) ? matrices[0] : matrices;

  var multiply = function multiply(m1, m2) {
    return {
      a: m1.a * m2.a + m1.c * m2.b,
      c: m1.a * m2.c + m1.c * m2.d,
      e: m1.a * m2.e + m1.c * m2.f + m1.e,
      b: m1.b * m2.a + m1.d * m2.b,
      d: m1.b * m2.c + m1.d * m2.d,
      f: m1.b * m2.e + m1.d * m2.f + m1.f
    };
  };

  switch (matrices.length) {
    case 0:
      throw new Error('no matrices provided');

    case 1:
      return matrices[0];

    case 2:
      return multiply(matrices[0], matrices[1]);

    default:
      var _matrices = matrices,
          _matrices2 = _toArray(_matrices),
          m1 = _matrices2[0],
          m2 = _matrices2[1],
          rest = _matrices2.slice(2);

      var m = multiply(m1, m2);
      return transform.apply(undefined, [m].concat(_toConsumableArray(rest)));
  }
}

/**
 * Merge multiple matrices into one (alias of `transform`)
 * @param matrices {...object} list of matrices
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function compose() {
  return transform.apply(undefined, arguments);
}
// CONCATENATED MODULE: ./src/rotate.js




var cos = Math.cos,
    sin = Math.sin,
    PI = Math.PI;
/**
 * Calculate a rotation matrix
 * @param angle Angle in radians
 * @param [cx] If (cx,cy) are supplied the rotate is about this point
 * @param [cy] If (cx,cy) are supplied the rotate is about this point
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix *
 */

function rotate(angle, cx, cy) {
  var cosAngle = cos(angle);
  var sinAngle = sin(angle);
  var rotationMatrix = {
    a: cosAngle,
    c: -sinAngle,
    e: 0,
    b: sinAngle,
    d: cosAngle,
    f: 0
  };
  if (isUndefined(cx) || isUndefined(cy)) {
    return rotationMatrix;
  }

  return transform([translate(cx, cy), rotationMatrix, translate(-cx, -cy)]);
}

/**
 * Calculate a rotation matrix with a DEG angle
 * @param angle Angle in degree
 * @param [cx] If (cx,cy) are supplied the rotate is about this point
 * @param [cy] If (cx,cy) are supplied the rotate is about this point
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function rotateDEG(angle) {
  var cx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var cy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  return rotate(angle * PI / 180, cx, cy);
}
// CONCATENATED MODULE: ./src/scale.js


/**
 * Calculate a scaling matrix
 * @param sx Scaling on axis x
 * @param [sy = sx] Scaling on axis y (default sx)
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function scale(sx) {
  var sy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  if (isUndefined(sy)) sy = sx;
  return {
    a: sx,
    c: 0,
    e: 0,
    b: 0,
    d: sy,
    f: 0
  };
}
// CONCATENATED MODULE: ./src/shear.js
/**
 * Calculate a shear matrix
 * @param shx Shear on axis x
 * @param shy Shear on axis y
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function shear(shx, shy) {
  return {
    a: 1,
    c: shx,
    e: 0,
    b: shy,
    d: 1,
    f: 0
  };
}
// CONCATENATED MODULE: ./src/skew.js
// https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew
var tan = Math.tan;

/**
 * Calculate a skew matrix
 * @param ax Skew on axis x
 * @param ay Skew on axis y
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */

function skew(ax, ay) {
  return {
    a: 1,
    c: tan(ax),
    e: 0,
    b: tan(ay),
    d: 1,
    f: 0
  };
}

/**
 * Calculate a skew matrix using DEG angles
 * @param ax Skew on axis x
 * @param ay Skew on axis y
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function skewDEG(ax, ay) {
  return skew(ax * Math.PI / 180, ay * Math.PI / 180);
}
// CONCATENATED MODULE: ./src/toString.js
/**
 * Serialize the matrix to a string that can be used with CSS or SVG
 * @param matrix Affine matrix
 * @returns {string} String that contains a matrix formatted as matrix(a,b,c,d,e,f)
 */
function toCSS(matrix) {
  return toString_toString(matrix);
}

/**
 * Serialize the matrix to a string that can be used with CSS or SVG
 * @param matrix Affine matrix
 * @returns {string} String that contains a matrix formatted as matrix(a,b,c,d,e,f)
 */
function toSVG(matrix) {
  return toString_toString(matrix);
}

/**
 * Serialize the matrix to a string that can be used with CSS or SVG
 * @param matrix Affine matrix
 * @returns {string} String that contains a matrix formatted as matrix(a,b,c,d,e,f)
 */
function toString_toString(matrix) {
  return "matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.e + "," + matrix.f + ")";
}
// CONCATENATED MODULE: ./src/smoothMatrix.js
/**
 * Rounds all elements of the given matrix using the given precision
 * @param m  {{a: number, b: number, c: number, d: number, e: number, f: number}} a matrix to round
 * @param [precision] a precision to use for Math.round. Defaults to 10000000000 (meaning which rounds to the 10th digit after the comma).
 * @returns {{a: number, b: number, c: number, d: number, e: number, f: number}} the rounded matrix
 */
function smoothMatrix(m) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10000000000;

  return {
    a: Math.round(m.a * precision) / precision,
    b: Math.round(m.b * precision) / precision,
    c: Math.round(m.c * precision) / precision,
    d: Math.round(m.d * precision) / precision,
    e: Math.round(m.e * precision) / precision,
    f: Math.round(m.f * precision) / precision
  };
}
// CONCATENATED MODULE: ./src/fromTriangles.js




/**
 * Returns a matrix that transforms a triangle t1 into another triangle t2, or throws an exception if it is impossible.
 * @param t1 {Array.<{x: number, y: number}> | Array.<Array<number>>} an array of points containing the three points for the first triangle
 * @param t2 {Array.<{x: number, y: number}> | Array.<Array<number>>} an array of points containing the three points for the second triangle
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix which transforms t1 to t2
 * @throws Exception if the matrix becomes not invertible
 */
function fromTriangles(t1, t2) {
  // point p = first point of the triangle
  var px1 = t1[0].x != null ? t1[0].x : t1[0][0];
  var py1 = t1[0].y != null ? t1[0].y : t1[0][1];
  var px2 = t2[0].x != null ? t2[0].x : t2[0][0];
  var py2 = t2[0].y != null ? t2[0].y : t2[0][1];

  // point q = second point of the triangle
  var qx1 = t1[1].x != null ? t1[1].x : t1[1][0];
  var qy1 = t1[1].y != null ? t1[1].y : t1[1][1];
  var qx2 = t2[1].x != null ? t2[1].x : t2[1][0];
  var qy2 = t2[1].y != null ? t2[1].y : t2[1][1];

  // point r = third point of the triangle
  var rx1 = t1[2].x != null ? t1[2].x : t1[2][0];
  var ry1 = t1[2].y != null ? t1[2].y : t1[2][1];
  var rx2 = t2[2].x != null ? t2[2].x : t2[2][0];
  var ry2 = t2[2].y != null ? t2[2].y : t2[2][1];

  var r1 = {
    a: px1 - rx1,
    b: py1 - ry1,
    c: qx1 - rx1,
    d: qy1 - ry1,
    e: rx1,
    f: ry1
  };
  var r2 = {
    a: px2 - rx2,
    b: py2 - ry2,
    c: qx2 - rx2,
    d: qy2 - ry2,
    e: rx2,
    f: ry2
  };

  var inverseR1 = inverse(r1);
  var affineMatrix = transform([r2, inverseR1]);

  // round the matrix elements to smooth the finite inversion
  return smoothMatrix(affineMatrix);
}
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport applyToPoint */__webpack_require__.d(__webpack_exports__, "applyToPoint", function() { return applyToPoint; });
/* concated harmony reexport applyToPoints */__webpack_require__.d(__webpack_exports__, "applyToPoints", function() { return applyToPoints; });
/* concated harmony reexport fromObject */__webpack_require__.d(__webpack_exports__, "fromObject", function() { return fromObject; });
/* concated harmony reexport fromString */__webpack_require__.d(__webpack_exports__, "fromString", function() { return fromString; });
/* concated harmony reexport identity */__webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* concated harmony reexport inverse */__webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* concated harmony reexport isAffineMatrix */__webpack_require__.d(__webpack_exports__, "isAffineMatrix", function() { return isAffineMatrix; });
/* concated harmony reexport rotate */__webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* concated harmony reexport rotateDEG */__webpack_require__.d(__webpack_exports__, "rotateDEG", function() { return rotateDEG; });
/* concated harmony reexport scale */__webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* concated harmony reexport shear */__webpack_require__.d(__webpack_exports__, "shear", function() { return shear; });
/* concated harmony reexport skew */__webpack_require__.d(__webpack_exports__, "skew", function() { return skew; });
/* concated harmony reexport skewDEG */__webpack_require__.d(__webpack_exports__, "skewDEG", function() { return skewDEG; });
/* concated harmony reexport toCSS */__webpack_require__.d(__webpack_exports__, "toCSS", function() { return toCSS; });
/* concated harmony reexport toSVG */__webpack_require__.d(__webpack_exports__, "toSVG", function() { return toSVG; });
/* concated harmony reexport toString */__webpack_require__.d(__webpack_exports__, "toString", function() { return toString_toString; });
/* concated harmony reexport transform */__webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* concated harmony reexport compose */__webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* concated harmony reexport translate */__webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* concated harmony reexport fromTriangles */__webpack_require__.d(__webpack_exports__, "fromTriangles", function() { return fromTriangles; });
/* concated harmony reexport smoothMatrix */__webpack_require__.d(__webpack_exports__, "smoothMatrix", function() { return smoothMatrix; });
















/***/ })
/******/ ]);
});
//# sourceMappingURL=transformation-matrix.js.map
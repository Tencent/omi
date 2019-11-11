/*!
 *  omi-three v0.0.0 By dntzhang 
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("three"), require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["three", "omi"], factory);
	else if(typeof exports === 'object')
		exports["OmiThree"] = factory(require("three"), require("omi"));
	else
		root["OmiThree"] = factory(root["three"], root["omi"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(2);

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

var _objectPool = __webpack_require__(3);

var _objectPool2 = _interopRequireDefault(_objectPool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _omi.define)('omi-three', function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'installed',
    value: function installed() {

      this.scene = new THREE.Scene();
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.pool = new _objectPool2['default']();
      this.threeRender();
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      return Omi.h('canvas', {
        style: props.css,
        ref: function ref(e) {
          _this2.canvas = e;
        },
        width: props.width,
        height: props.height });
    }
  }, {
    key: 'threeRender',
    value: function threeRender() {
      var _this3 = this;

      this.props.children.forEach(function (child) {
        var obj = _this3.pool.getObj(child.nodeName, child, _this3.scene);
        obj && _this3.scene.add(obj);
      });

      this.renderer.render(this.scene, this.scene.camera);
    }
  }, {
    key: 'update',
    value: function update() {
      //this.scene.empty()
      this.pool.reset();
      this.threeRender(this.props.children, this.scene, this.pool);
    }
  }]);

  return _class;
}(_omi.WeElement));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var caxProps = ['rotation'];

var ObjectPool = function () {
  function ObjectPool() {
    _classCallCheck(this, ObjectPool);

    this.textList = [];
    this.usingMesh = [];
    this.testListUsing = [];
    this.bitmapListUsing = [];

    this.groupList = [];
    this.groupListUsing = [];
  }

  _createClass(ObjectPool, [{
    key: 'reset',
    value: function reset() {
      var _this = this;

      this.testListUsing.forEach(function (item) {
        _this.textList.push(item);
      });
      this.bitmapListUsing.forEach(function (item) {
        _this.bitmapList.push(item);
      });
      this.groupListUsing.forEach(function (item) {
        _this.groupList.push(item);
      });
    }
  }, {
    key: 'getObj',
    value: function getObj(type, vnode, scene) {
      var _this2 = this;

      var attr = vnode.attributes;
      switch (type) {
        case 'text':
          if (this.textList.length > 0) {
            var obj = this.textList[0];
            reset(obj);
            mix(attr, obj);
            return obj;
          } else {
            //https://github.com/dntzhang/cax/blob/master/packages/cax/src/render/display/text.js
            var text = new cax.Text(attr.text, {
              font: attr.font,
              color: attr.color,
              baseline: attr.baseline
            });
            mix(attr, text);
            this.testListUsing.push(text);
            return text;
          }
        case 'group':
          if (this.groupList.length > 0) {
            var _obj = this.groupList[0];
            reset(_obj);
            mix(attr, _obj);

            _obj.children.forEach(function (child) {
              _obj.remove(child);
            });

            vnode.children.forEach(function (child) {
              _obj.add(_this2.getObj(child.nodeName, child, scene));
            });

            return _obj;
          } else {
            var group = new THREE.Group();
            mix(attr, group);
            this.groupListUsing.push(group);
            vnode.children.forEach(function (child) {
              group.add(_this2.getObj(child.nodeName, child, scene));
            });
            return group;
          }

        case 'mesh':

          var geometry = new THREE.BoxGeometry(1, 1, 1);
          var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
          var mesh = new THREE.Mesh(geometry, material);
          Object.assign(mesh.rotation, attr.rotation);
          this.usingMesh.push(mesh);

          return mesh;
        case 'perspective-camera':
          scene.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          scene.camera.position.z = 5;
          return null;
      }
    }
  }, {
    key: 'add',
    value: function add(type) {
      switch (type) {
        case 'text':
          break;
        case 'bitmap':
          break;
      }
    }
  }]);

  return ObjectPool;
}();

exports['default'] = ObjectPool;


function reset(obj) {
  // obj.x = 0
  // obj.y = 0
  // obj.scale = 1
  obj.rotation.x = 0;
  obj.rotation.y = 0;
  obj.rotation.z = 0;
  // obj.skewX = 0
  // obj.skewY = 0
  // obj.originX = 0
  // obj.originY = 0
  // obj.alpha = 1
  // obj.compositeOperation = null
  // obj.cursor = 'default'
  // obj.fixed = false
  // obj.shadow = null
}

function mix(attr, obj) {
  if (!attr) return;
  caxProps.forEach(function (prop) {
    if (attr.hasOwnProperty(prop)) {
      obj[prop] = attr[prop];
    }
  });

  //bindEvent
  // Object.keys(attr).forEach(key => {
  //   if (key[0] == 'o' && key[1] == 'n') {
  //     const type = key.toLowerCase().substring(2)
  //     obj.on(type, attr[key])
  //   }
  // })
}

// getImageInfo(attr.src, (w, h, img) => {
//   obj.rect[0] = 0
//   obj.rect[1] = 0
//   obj.rect[2] = w
//   obj.rect[3] = h
//   obj.width = w
//   obj.height = h
//   obj.img = img


// })
// const img = new Image()
// function getImageInfo(src, callback) {

//   img.onload = () => {
//     callback(img.width, img.height, img)
//   }
//   img.src = src
// }

/***/ })
/******/ ]);
});
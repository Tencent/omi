/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
      /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
      /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
}
    /******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
    /******/
};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
    /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
    /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demos/simple/main.js");
  /******/
})
/************************************************************************/
/******/({

/***/ "./demos/simple/about.js":
/*!*******************************!*\
  !*** ./demos/simple/about.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

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
      Object.defineProperty(exports, "__esModule", { value: true });
      var omi_1 = __webpack_require__(/*! omi */ "./node_modules/_omi@6.21.3@omi/dist/omi.esm.js");
      omi_1.define('my-about', /** @class */(function (_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.render = function () {
          return omi_1.h("div", null, "About");
        };
        return class_1;
      }(omi_1.WeElement)));


      /***/
}),

/***/ "./demos/simple/home.js":
/*!******************************!*\
  !*** ./demos/simple/home.js ***!
  \******************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

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
      Object.defineProperty(exports, "__esModule", { value: true });
      var omi_1 = __webpack_require__(/*! omi */ "./node_modules/_omi@6.21.3@omi/dist/omi.esm.js");
      omi_1.define('my-home', /** @class */(function (_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.render = function () {
          return omi_1.h("div", null, "Home");
        };
        return class_1;
      }(omi_1.WeElement)));


      /***/
}),

/***/ "./demos/simple/main.js":
/*!******************************!*\
  !*** ./demos/simple/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

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
      Object.defineProperty(exports, "__esModule", { value: true });
      var index_esm_js_1 = __webpack_require__(/*! ../../src/index.esm.js */ "./src/index.esm.js");
      var omi_1 = __webpack_require__(/*! omi */ "./node_modules/_omi@6.21.3@omi/dist/omi.esm.js");
      __webpack_require__(/*! ./about */ "./demos/simple/about.js");
      __webpack_require__(/*! ./home */ "./demos/simple/home.js");
      __webpack_require__(/*! ./user */ "./demos/simple/user.js");
      __webpack_require__(/*! ./user-list */ "./demos/simple/user-list.js");
      omi_1.define('my-app', /** @class */(function (_super) {
        __extends(class_1, _super);
        function class_1() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.data = { tag: 'my-home' };
          _this.onClick = function () {
            index_esm_js_1.route.to('/user/vorshen/category/html');
          };
          return _this;
        }
        class_1.prototype.install = function () {
          var _this = this;
          index_esm_js_1.route('/', function () {
            _this.data.tag = 'my-home';
            _this.update();
          });
          index_esm_js_1.route('/about', function (evt) {
            console.log(evt.query);
            _this.data.tag = 'my-about';
            _this.update();
          });
          index_esm_js_1.route('/user-list', function () {
            _this.data.tag = 'user-list';
            _this.update();
          });
          index_esm_js_1.route('/user/:name/category/:category', function (evt) {
            _this.data.tag = 'my-user';
            _this.data.params = evt.params;
            _this.update();
          });
          index_esm_js_1.route('*', function () {
            console.log('not found');
          });
          index_esm_js_1.route.before = function (evt) {
            console.log('before');
            //prevent route when return false
            //return false
          };
          index_esm_js_1.route.after = function (evt) {
            console.log('after');
          };
        };
        class_1.prototype.css = function () {
          return "\n      ul{\n          border-bottom: 1px solid #ccc;\n          padding-bottom:5px;\n      }\n      li{\n          display:inline-block;\n          margin-left:4px;\n      }\n      #view li{\n          display:block;\n      }\n      #view ul{\n          border-width: 0px;\n      }\n      ";
        };
        class_1.prototype.render = function () {
          var data = this.data;
          return (omi_1.h("div", null,
            omi_1.h("ul", null,
              omi_1.h("li", null,
                omi_1.h("a", { href: "#/" }, "Home")),
              omi_1.h("li", null,
                omi_1.h("a", { href: "#/about" }, "About")),
              omi_1.h("li", null,
                omi_1.h("a", { href: "#/user-list" }, "UserList")),
              omi_1.h("li", null,
                omi_1.h("a", { href: "#/about?name=dntzhang&age=18" }, "About Dntzhang"))),
            omi_1.h("div", { id: "view" },
              omi_1.h(data.tag, { params: data.params })),
            omi_1.h("div", null,
              omi_1.h("button", { onClick: this.onClick }, "Test route.to"))));
        };
        return class_1;
      }(omi_1.WeElement)));
      omi_1.render(omi_1.h("my-app", null), "#container");


      /***/
}),

/***/ "./demos/simple/user-list.js":
/*!***********************************!*\
  !*** ./demos/simple/user-list.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

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
      Object.defineProperty(exports, "__esModule", { value: true });
      var omi_1 = __webpack_require__(/*! omi */ "./node_modules/_omi@6.21.3@omi/dist/omi.esm.js");
      omi_1.define('user-list', /** @class */(function (_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.render = function () {
          return (omi_1.h("ul", null,
            omi_1.h("li", null,
              omi_1.h("a", { href: "#/user/yanagao/category/js" }, "yanagao")),
            omi_1.h("li", null,
              omi_1.h("a", { href: "#/user/vorshen/category/html" }, "vorshen")),
            omi_1.h("li", null,
              omi_1.h("a", { href: "#/user/dntzhang/category/css" }, "dntzhang"))));
        };
        return class_1;
      }(omi_1.WeElement)));


      /***/
}),

/***/ "./demos/simple/user.js":
/*!******************************!*\
  !*** ./demos/simple/user.js ***!
  \******************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

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
      Object.defineProperty(exports, "__esModule", { value: true });
      var omi_1 = __webpack_require__(/*! omi */ "./node_modules/_omi@6.21.3@omi/dist/omi.esm.js");
      omi_1.define('my-user', /** @class */(function (_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.beforeRender = function () {
          var params = this.props.params;
          this.name = params.name;
          this.category = params.category;
          this.info = this.queryInfo(this.name);
          this.age = this.info.age;
          this.sex = this.info.sex;
        };
        class_1.prototype.queryInfo = function (name) {
          this.mockData = {
            'yanagao': { age: 18, sex: 'female' },
            'vorshen': { age: 20, sex: 'male' },
            'dntzhang': { age: 22, sex: 'male' }
          };
          return this.mockData[name];
        };
        class_1.prototype.render = function () {
          return (omi_1.h("div", null,
            omi_1.h("button", { onclick: function () { history.back(); } }, "back"),
            omi_1.h("ul", null,
              omi_1.h("li", null,
                "name:",
                this.name),
              omi_1.h("li", null,
                "age:",
                this.age),
              omi_1.h("li", null,
                "sex:",
                this.sex),
              omi_1.h("li", null,
                "category:",
                this.category))));
        };
        return class_1;
      }(omi_1.WeElement)));


      /***/
}),

/***/ "./node_modules/_omi@6.21.3@omi/dist/omi.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/_omi@6.21.3@omi/dist/omi.esm.js ***!
  \******************************************************/
/*! exports provided: default, tag, WeElement, Component, render, h, createElement, options, define, cloneElement, getHost, rpx, defineElement, classNames, extractClass, createRef, o, elements, $, extend, get, set, bind, unbind */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function (global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tag", function () { return tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeElement", function () { return WeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function () { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function () { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function () { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function () { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function () { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "define", function () { return define; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function () { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHost", function () { return getHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rpx", function () { return rpx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineElement", function () { return defineElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNames", function () { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractClass", function () { return extractClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function () { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function () { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elements", function () { return elements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function () { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function () { return extend$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function () { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function () { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function () { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbind", function () { return unbind; });
        /**
         * Omi v6.21.3  http://omijs.org
         * Front End Cross-Frameworks Framework.
         * By dntzhang https://github.com/dntzhang
         * Github: https://github.com/Tencent/omi
         * MIT Licensed.
         */

        function getGlobal() {
          if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
            return self || window || global || function () {
              return this;
            }();
          }
          return global;
        }

        /** Global options
         *  @public
         *  @namespace options {Object}
         */
        var options = {
          store: null,
          root: getGlobal(),
          mapping: {}
        };

        /**
         * @license
         * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
         * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
         * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
         * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
         * Code distributed by Google as part of the polymer project is also
         * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
         */
        (function () {
          if (
            // No Reflect, no classes, no need for shim because native custom elements
            // require ES2015 classes or Reflect.
            window.Reflect === undefined || window.customElements === undefined ||
            // The webcomponentsjs custom elements polyfill doesn't require
            // ES2015-compatible construction (`super()` or `Reflect.construct`).
            window.customElements.hasOwnProperty('polyfillWrapFlushCallback')) {
            return;
          }
          var BuiltInHTMLElement = HTMLElement;
          window.HTMLElement = function HTMLElement() {
            return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
          };
          HTMLElement.prototype = BuiltInHTMLElement.prototype;
          HTMLElement.prototype.constructor = HTMLElement;
          Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
        })();

        function cssToDom(css) {
          var node = document.createElement('style');
          node.textContent = css;
          return node;
        }

        function camelCase(str) {
          return str.replace(/-(\w)/g, function ($, $1) {
            return $1.toUpperCase();
          });
        }

        function Fragment(props) {
          return props.children;
        }

        function extend(obj, props) {
          for (var i in props) {
            obj[i] = props[i];
          } return obj;
        }

        /** Invoke or update a ref, depending on whether it is a function or object ref.
         *  @param {object|function} [ref=null]
         *  @param {any} [value]
         */
        function applyRef(ref, value) {
          if (ref != null) {
            if (typeof ref == 'function') ref(value); else ref.current = value;
          }
        }

        /**
         * Call a function asynchronously, as soon as possible. Makes
         * use of HTML Promise to schedule the callback if available,
         * otherwise falling back to `setTimeout` (mainly for IE<11).
         * @type {(callback: function) => void}
         */
        var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

        function isArray(obj) {
          return Object.prototype.toString.call(obj) === '[object Array]';
        }

        function pathToArr(path) {
          if (typeof path !== 'string' || !path) return [];
          // return path.split(/\.|\[|\]/).filter(name => !!name)
          return path.replace(/]/g, '').replace(/\[/g, '.').split('.');
        }

        var hyphenateRE = /\B([A-Z])/g;
        function hyphenate(str) {
          return str.replace(hyphenateRE, '-$1').toLowerCase();
        }

        function getValByPath(path, current) {
          var arr = pathToArr(path);
          arr.forEach(function (prop) {
            current = current[prop];
          });
          return current;
        }

        var stack = [];

        function h(nodeName, attributes) {
          var children = [],
            lastSimple,
            child,
            simple,
            i;
          for (i = arguments.length; i-- > 2;) {
            stack.push(arguments[i]);
          }
          if (attributes && attributes.children != null) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
          }
          while (stack.length) {
            if ((child = stack.pop()) && child.pop !== undefined) {
              for (i = child.length; i--;) {
                stack.push(child[i]);
              }
            } else {
              if (typeof child === 'boolean') child = null;

              if (simple = typeof nodeName !== 'function') {
                if (child == null) child = ''; else if (typeof child === 'number') child = String(child); else if (typeof child !== 'string') simple = false;
              }

              if (simple && lastSimple) {
                children[children.length - 1] += child;
              } else if (children.length === 0) {
                children = [child];
              } else {
                children.push(child);
              }

              lastSimple = simple;
            }
          }

          if (nodeName === Fragment) {
            return children;
          }

          var p = {
            nodeName: nodeName,
            children: children,
            attributes: attributes == null ? undefined : attributes,
            key: attributes == null ? undefined : attributes.key

            // if a "vnode hook" is defined, pass every created VNode to it
          }; if (options.vnode !== undefined) options.vnode(p);

          return p;
        }

        // DOM properties that should NOT have "px" added when numeric
        var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

        /**
         * Check if two nodes are equivalent.
         *
         * @param {Node} node      DOM Node to compare
         * @param {VNode} vnode      Virtual DOM node to compare
         * @param {boolean} [hydrating=false]  If true, ignores component constructors when comparing.
         * @private
         */
        function isSameNodeType(node, vnode, hydrating) {
          if (typeof vnode === 'string' || typeof vnode === 'number') {
            return node.splitText !== undefined;
          }
          if (typeof vnode.nodeName === 'string') {
            return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
          } else if (typeof vnode.nodeName === 'function') {
            return options.mapping[node.nodeName.toLowerCase()] === vnode.nodeName;
          }
          return hydrating || node._componentConstructor === vnode.nodeName;
        }

        /**
         * Check if an Element has a given nodeName, case-insensitively.
         *
         * @param {Element} node  A DOM Element to inspect the name of.
         * @param {String} nodeName  Unnormalized name to compare against.
         */
        function isNamedNode(node, nodeName) {
          return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
        }

        var extension = {};

        function extend$1(name, handler) {
          extension['o-' + name] = handler;
        }

        function set(origin, path, value) {
          var arr = pathToArr(path);
          var current = origin;
          for (var i = 0, len = arr.length; i < len; i++) {
            if (i === len - 1) {
              current[arr[i]] = value;
            } else {
              current = current[arr[i]];
            }
          }
        }

        function get(origin, path) {
          var arr = pathToArr(path);
          var current = origin;
          for (var i = 0, len = arr.length; i < len; i++) {
            current = current[arr[i]];
          }

          return current;
        }

        function eventProxy(e) {
          return this._listeners[e.type](e);
        }

        function bind(el, type, handler) {
          el._listeners = el._listeners || {};
          el._listeners[type] = handler;
          el.addEventListener(type, eventProxy);
        }

        function unbind(el, type) {
          el.removeEventListener(type, eventProxy);
        }

        /**
         * Create an element with the given nodeName.
         * @param {string} nodeName The DOM node to create
         * @param {boolean} [isSvg=false] If `true`, creates an element within the SVG
         *  namespace.
         * @returns {Element} The created DOM node
         */
        function createNode(nodeName, isSvg) {
          /** @type {Element} */
          var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
          node.normalizedNodeName = nodeName;
          return node;
        }

        /**
         * Remove a child node from its parent if attached.
         * @param {Node} node The node to remove
         */
        function removeNode(node) {
          var parentNode = node.parentNode;
          if (parentNode) parentNode.removeChild(node);
        }

        /**
         * Set a named attribute on the given Node, with special behavior for some names
         * and event handlers. If `value` is `null`, the attribute/handler will be
         * removed.
         * @param {Element} node An element to mutate
         * @param {string} name The name/key to set, such as an event or attribute name
         * @param {*} old The last value that was set for this name/node pair
         * @param {*} value An attribute value, such as a function to be used as an
         *  event handler
         * @param {boolean} isSvg Are we currently diffing inside an svg?
         * @private
         */
        function setAccessor(node, name, old, value, isSvg, component) {
          if (name === 'className') name = 'class';

          if (name[0] == 'o' && name[1] == '-') {
            if (extension[name]) {
              extension[name](node, value, component);
            }
          } else if (name === 'key') {
            // ignore
          } else if (name === 'ref') {
            applyRef(old, null);
            applyRef(value, node);
          } else if (name === 'class' && !isSvg) {
            node.className = value || '';
          } else if (name === 'style') {
            if (!value || typeof value === 'string' || typeof old === 'string') {
              node.style.cssText = value || '';
            }
            if (value && typeof value === 'object') {
              if (typeof old !== 'string') {
                for (var i in old) {
                  if (!(i in value)) node.style[i] = '';
                }
              }
              for (var i in value) {
                node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
              }
            }
          } else if (name === 'dangerouslySetInnerHTML') {
            if (value) node.innerHTML = value.__html || '';
          } else if (name[0] == '_' && name[1] == 'o' && name[2] == 'n' && node.constructor.is === 'WeElement') {
            bindEvent(node, name.replace('_', ''), value, old);
          } else if (name[0] == 'o' && name[1] == 'n') {
            bindEvent(node, name, value, old);
          } else if (node.nodeName === 'INPUT' && name === 'value') {
            node[name] = value == null ? '' : value;
          } else if (name !== 'list' && name !== 'type' && name !== 'css' && !isSvg && name in node && value !== '') {
            //value !== '' fix for selected, disabled, checked with pure element
            // Attempt to set a DOM property to the given value.
            // IE & FF throw for certain property-value combinations.
            try {
              node[name] = value == null ? '' : value;
            } catch (e) { }
            if ((value == null || value === false) && name != 'spellcheck') node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name);
          } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
            // spellcheck is treated differently than all other boolean values and
            // should not be removed when the value is `false`. See:
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-spellcheck
            if (value == null || value === false) {
              if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name);
            } else if (typeof value !== 'function') {
              if (ns) {
                node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);
              } else {
                node.pureSetAttribute ? node.pureSetAttribute(name, value) : node.setAttribute(name, value);
              }
            }
          }
        }

        /**
         * Proxy an event to hooked event handlers
         * @param {Event} e The event object from the browser
         * @private
         */
        function eventProxy$1(e) {
          return this._listeners[e.type](options.event && options.event(e) || e);
        }

        function bindEvent(node, name, value, old) {
          var useCapture = name !== (name = name.replace(/Capture$/, ''));
          var nameLower = name.toLowerCase();
          name = (nameLower in node ? nameLower : name).slice(2);
          if (value) {
            if (!old) {
              node.addEventListener(name, eventProxy$1, useCapture);
            }
          } else {
            node.removeEventListener(name, eventProxy$1, useCapture);
          }
          (node._listeners || (node._listeners = {}))[name] = value;
        }

        /** Diff recursion count, used to track the end of the diff cycle. */
        var diffLevel = 0;

        /** Global flag indicating if the diff is currently within an SVG */
        var isSvgMode = false;

        /** Global flag indicating if the diff is performing hydration */
        var hydrating = false;

        /** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
         *  @param {Element} [dom=null]    A DOM node to mutate into the shape of the `vnode`
         *  @param {VNode} vnode      A VNode (with descendants forming a tree) representing the desired DOM structure
         *  @returns {Element} dom      The created/mutated element
         *  @private
         */
        function diff(dom, vnode, parent, component, updateSelf) {
          //first render return undefined
          if (!dom && !vnode) return;
          // diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
          var ret;
          if (!diffLevel++) {
            // when first starting the diff, check if we're diffing an SVG or within an SVG
            isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

            // hydration is indicated by the existing element to be diffed not having a prop cache
            hydrating = dom != null && !('prevProps' in dom);
          }
          if (vnode && vnode.nodeName === Fragment) {
            vnode = vnode.children;
          }
          if (isArray(vnode)) {
            if (parent) {
              //don't use css and props.css when using h.f
              innerDiffNode(parent, vnode, hydrating, component, updateSelf);
            } else {
              ret = [];
              vnode.forEach(function (item, index) {
                var ele = idiff(index === 0 ? dom : null, item, component, updateSelf);
                ret.push(ele);
              });
            }
          } else {
            if (isArray(dom)) {
              dom.forEach(function (one, index) {
                if (index === 0) {
                  ret = idiff(one, vnode, component, updateSelf);
                } else {
                  recollectNodeTree(one, false);
                }
              });
            } else {
              ret = idiff(dom, vnode, component, updateSelf);
            }
            // append the element if its a new parent
            if (parent && ret.parentNode !== parent) parent.appendChild(ret);
          }

          // diffLevel being reduced to 0 means we're exiting the diff
          if (! --diffLevel) {
            hydrating = false;
            // invoke queued componentDidMount lifecycle methods
          }

          return ret;
        }

        /** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
        function idiff(dom, vnode, component, updateSelf) {
          if (dom && vnode && dom.props) {
            dom.props.children = vnode.children;
          }
          var out = dom,
            prevSvgMode = isSvgMode;

          // empty values (null, undefined, booleans) render as empty Text nodes
          if (vnode == null || typeof vnode === 'boolean') vnode = '';

          // Fast case: Strings & Numbers create/update Text nodes.
          if (typeof vnode === 'string' || typeof vnode === 'number') {
            // update if it's already a Text node:
            if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || component)) {
              /* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
              if (dom.nodeValue != vnode) {
                dom.nodeValue = vnode;
              }
            } else {
              // it wasn't a Text node: replace it with one and recycle the old Element
              out = document.createTextNode(vnode);
              if (dom) {
                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                recollectNodeTree(dom, true);
              }
            }

            out['prevProps'] = true;

            return out;
          }

          // If the VNode represents a Component, perform a component diff:
          var vnodeName = vnode.nodeName;
          if (typeof vnodeName === 'function') {
            for (var key in options.mapping) {
              if (options.mapping[key] === vnodeName) {
                vnodeName = key;
                vnode.nodeName = key;
                break;
              }
            }
          }
          // Tracks entering and exiting SVG namespace when descending through the tree.
          isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

          // If there's no existing element or it's the wrong type, create a new one:
          vnodeName = String(vnodeName);
          if (!dom || !isNamedNode(dom, vnodeName)) {
            out = createNode(vnodeName, isSvgMode);

            if (dom) {
              // move children into the replacement node
              while (dom.firstChild) {
                out.appendChild(dom.firstChild);
              } // if the previous Element was mounted into the DOM, replace it inline
              if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

              // recycle the old element (skips non-Element node types)
              recollectNodeTree(dom, true);
            }
          }

          var fc = out.firstChild,
            props = out['prevProps'],
            vchildren = vnode.children;

          if (props == null) {
            props = out['prevProps'] = {};
            for (var a = out.attributes, i = a.length; i--;) {
              props[a[i].name] = a[i].value;
            }
          }

          // Optimization: fast-path for elements containing a single TextNode:
          if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
            if (fc.nodeValue != vchildren[0]) {
              fc.nodeValue = vchildren[0];
            }
          }
          // otherwise, if there are existing or new children, diff them:
          else if (vchildren && vchildren.length || fc != null) {
            if (!(out.constructor.is == 'WeElement' && out.constructor.noSlot)) {
              innerDiffNode(out, vchildren, hydrating || props.dangerouslySetInnerHTML != null, component, updateSelf);
            }
          }

          // Apply attributes/props from VNode to the DOM Element:
          diffAttributes(out, vnode.attributes, props, component, updateSelf);
          if (out.props) {
            out.props.children = vnode.children;
          }
          // restore previous SVG mode: (in case we're exiting an SVG namespace)
          isSvgMode = prevSvgMode;

          return out;
        }

        /** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
         *  @param {Element} dom      Element whose children should be compared & mutated
         *  @param {Array} vchildren    Array of VNodes to compare to `dom.childNodes`
         *  @param {Boolean} isHydrating  If `true`, consumes externally created elements similar to hydration
         */
        function innerDiffNode(dom, vchildren, isHydrating, component, updateSelf) {
          var originalChildren = dom.childNodes,
            children = [],
            keyed = {},
            keyedLen = 0,
            min = 0,
            len = originalChildren.length,
            childrenLen = 0,
            vlen = vchildren ? vchildren.length : 0,
            j,
            c,
            f,
            vchild,
            child;

          // Build up a map of keyed children and an Array of unkeyed children:
          if (len !== 0) {
            for (var i = 0; i < len; i++) {
              var _child = originalChildren[i],
                props = _child['prevProps'],
                key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
              if (key != null) {
                keyedLen++;
                keyed[key] = _child;
              } else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
                children[childrenLen++] = _child;
              }
            }
          }

          if (vlen !== 0) {
            for (var i = 0; i < vlen; i++) {
              vchild = vchildren[i];
              child = null;

              if (vchild) {
                // attempt to find a node based on key matching
                var key = vchild.key;
                if (key != null) {
                  if (keyedLen && keyed[key] !== undefined) {
                    child = keyed[key];
                    keyed[key] = undefined;
                    keyedLen--;
                  }
                }
                // attempt to pluck a node of the same type from the existing children
                else if (!child && min < childrenLen) {
                  for (j = min; j < childrenLen; j++) {
                    if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
                      child = c;
                      children[j] = undefined;
                      if (j === childrenLen - 1) childrenLen--;
                      if (j === min) min++;
                      break;
                    }
                  }
                }
              }

              // morph the matched/found/created DOM child to match vchild (deep)
              child = idiff(child, vchild, component, updateSelf);

              f = originalChildren[i];
              if (child && child !== dom && child !== f) {
                if (f == null) {
                  dom.appendChild(child);
                } else if (child === f.nextSibling) {
                  removeNode(f);
                } else {
                  dom.insertBefore(child, f);
                }
              }
            }
          }

          // remove unused keyed children:
          if (keyedLen) {
            for (var i in keyed) {
              if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
            }
          }

          // remove orphaned unkeyed children:
          while (min <= childrenLen) {
            if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
          }
        }

        /** Recursively recycle (or just unmount) a node and its descendants.
         *  @param {Node} node            DOM node to start unmount/removal from
         *  @param {Boolean} [unmountOnly=false]  If `true`, only triggers unmount lifecycle, skips removal
         */
        function recollectNodeTree(node, unmountOnly) {
          // If the node's VNode had a ref function, invoke it with null here.
          // (this is part of the React spec, and smart for unsetting references)
          if (node['prevProps'] != null && node['prevProps'].ref) {
            if (typeof node['prevProps'].ref === 'function') {
              node['prevProps'].ref(null);
            } else if (node['prevProps'].ref.current) {
              node['prevProps'].ref.current = null;
            }
          }

          if (unmountOnly === false || node['prevProps'] == null) {
            removeNode(node);
          }

          removeChildren(node);
        }

        /** Recollect/unmount all children.
         *  - we use .lastChild here because it causes less reflow than .firstChild
         *  - it's also cheaper than accessing the .childNodes Live NodeList
         */
        function removeChildren(node) {
          node = node.lastChild;
          while (node) {
            var next = node.previousSibling;
            recollectNodeTree(node, true);
            node = next;
          }
        }

        /** Apply differences in attributes from a VNode to the given DOM Element.
         *  @param {Element} dom    Element with attributes to diff `attrs` against
         *  @param {Object} attrs    The desired end-state key-value attribute pairs
         *  @param {Object} old      Current/previous attributes (from previous VNode or element's prop cache)
         */
        function diffAttributes(dom, attrs, old, component, updateSelf) {
          var name;
          //let update = false
          var isWeElement = dom.update;
          var oldClone;
          if (dom.receiveProps) {
            oldClone = Object.assign({}, old);
          }
          // remove attributes no longer present on the vnode by setting them to undefined
          for (name in old) {
            if (!(attrs && attrs[name] != null) && old[name] != null) {
              setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode, component);
              if (isWeElement) {
                delete dom.props[name];
                //update = true
              }
            }
          }

          // add new & update changed attributes
          for (name in attrs) {
            if (isWeElement && typeof attrs[name] === 'object' && name !== 'ref') {
              if (name === 'style') {
                setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode, component);
              }
              var ccName = camelCase(name);
              dom.props[ccName] = old[ccName] = attrs[name];
              //update = true
            } else if (name !== 'children' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
              setAccessor(dom, name, old[name], attrs[name], isSvgMode, component);
              //fix lazy load props missing
              if (dom.nodeName.indexOf('-') !== -1) {
                dom.props = dom.props || {};
                var _ccName = camelCase(name);
                dom.props[_ccName] = old[_ccName] = attrs[name];
                //update = true
              } else {
                old[name] = attrs[name];
              }
            }
          }

          if (isWeElement && !updateSelf && dom.parentNode) {
            //__hasChildren is not accuracy when it was empty at first, so add dom.children.length > 0 condition
            //if (update || dom.__hasChildren || dom.children.length > 0 || (dom.store && !dom.store.data)) {
            if (dom.receiveProps(dom.props, oldClone) !== false) {
              dom.update();
            }
            //}
          }
        }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var id = 0;

        var WeElement = function (_HTMLElement) {
          _inherits(WeElement, _HTMLElement);

          function WeElement() {
            _classCallCheck(this, WeElement);

            // fix lazy load props missing
            var _this = _possibleConstructorReturn(this, _HTMLElement.call(this));

            _this.props = Object.assign({}, _this.constructor.defaultProps, _this.props);
            _this.elementId = id++;
            _this.computed = {};
            _this.isInstalled = false;
            return _this;
          }

          WeElement.prototype.connectedCallback = function connectedCallback() {
            var _this2 = this;

            var p = this.parentNode;
            while (p && !this.store) {
              this.store = p.store;
              p = p.parentNode || p.host;
            }

            if (this.inject) {
              this.injection = {};
              p = this.parentNode;
              var provide;
              while (p && !provide) {
                provide = p.provide;
                p = p.parentNode || p.host;
              }
              if (provide) {
                this.inject.forEach(function (injectKey) {
                  _this2.injection[injectKey] = provide[injectKey];
                });
              } else {
                throw 'The provide prop was not found on the parent node or the provide type is incorrect.';
              }
            }

            this.attrsToProps();

            this.beforeInstall();
            this.install();
            this.afterInstall();

            var shadowRoot;
            if (this.constructor.isLightDOM) {
              shadowRoot = this;
            } else {
              if (!this.shadowRoot) {
                shadowRoot = this.attachShadow({
                  mode: 'open'
                });
              } else {
                shadowRoot = this.shadowRoot;
                var fc;
                while (fc = shadowRoot.firstChild) {
                  shadowRoot.removeChild(fc);
                }
              }
            }

            var css = this.constructor.css;
            if (css) {
              if (typeof css === 'string') {
                var styleSheet = new CSSStyleSheet();
                styleSheet.replaceSync(css);
                shadowRoot.adoptedStyleSheets = [styleSheet];
              } else if (Object.prototype.toString.call(css) === '[object Array]') {
                var styleSheets = [];
                css.forEach(function (styleSheet) {
                  if (typeof styleSheet === 'string') {
                    var adoptedStyleSheet = new CSSStyleSheet();
                    adoptedStyleSheet.replaceSync(styleSheet);
                    styleSheets.push(adoptedStyleSheet);
                  } else {
                    styleSheets.push(styleSheet);
                  }
                  shadowRoot.adoptedStyleSheets = styleSheets;
                });
              } else {
                shadowRoot.adoptedStyleSheets = [css];
              }
            }

            this.beforeRender();
            options.afterInstall && options.afterInstall(this);

            var rendered = this.render(this.props, this.store);

            this.rootNode = diff(null, rendered, null, this);
            this.rendered();

            if (this.css) {
              shadowRoot.appendChild(cssToDom(typeof this.css === 'function' ? this.css() : this.css));
            }

            if (this.props.css) {
              this._customStyleElement = cssToDom(this.props.css);
              this._customStyleContent = this.props.css;
              shadowRoot.appendChild(this._customStyleElement);
            }

            if (isArray(this.rootNode)) {
              this.rootNode.forEach(function (item) {
                shadowRoot.appendChild(item);
              });
            } else {
              this.rootNode && shadowRoot.appendChild(this.rootNode);
            }
            this.installed();
            this.isInstalled = true;
          };

          WeElement.prototype.disconnectedCallback = function disconnectedCallback() {
            this.uninstall();
            this.isInstalled = false;
          };

          WeElement.prototype.update = function update(ignoreAttrs, updateSelf) {
            this._willUpdate = true;
            this.beforeUpdate();
            this.beforeRender();
            //fix null !== undefined
            if (this._customStyleContent != this.props.css) {
              this._customStyleContent = this.props.css;
              this._customStyleElement.textContent = this._customStyleContent;
            }
            this.attrsToProps(ignoreAttrs);

            var rendered = this.render(this.props, this.store);
            this.rendered();

            this.rootNode = diff(this.rootNode, rendered, this.constructor.isLightDOM ? this : this.shadowRoot, this, updateSelf);
            this._willUpdate = false;
            this.updated();
          };

          WeElement.prototype.forceUpdate = function forceUpdate() {
            this.update(true);
          };

          WeElement.prototype.updateProps = function updateProps(obj) {
            var _this3 = this;

            Object.keys(obj).forEach(function (key) {
              _this3.props[key] = obj[key];
              if (_this3.prevProps) {
                _this3.prevProps[key] = obj[key];
              }
            });
            this.forceUpdate();
          };

          WeElement.prototype.updateSelf = function updateSelf(ignoreAttrs) {
            this.update(ignoreAttrs, true);
          };

          WeElement.prototype.removeAttribute = function removeAttribute(key) {
            _HTMLElement.prototype.removeAttribute.call(this, key);
            //Avoid executing removeAttribute methods before connectedCallback
            this.isInstalled && this.update();
          };

          WeElement.prototype.setAttribute = function setAttribute(key, val) {
            if (val && typeof val === 'object') {
              _HTMLElement.prototype.setAttribute.call(this, key, JSON.stringify(val));
            } else {
              _HTMLElement.prototype.setAttribute.call(this, key, val);
            }
            //Avoid executing setAttribute methods before connectedCallback
            this.isInstalled && this.update();
          };

          WeElement.prototype.pureRemoveAttribute = function pureRemoveAttribute(key) {
            _HTMLElement.prototype.removeAttribute.call(this, key);
          };

          WeElement.prototype.pureSetAttribute = function pureSetAttribute(key, val) {
            _HTMLElement.prototype.setAttribute.call(this, key, val);
          };

          WeElement.prototype.attrsToProps = function attrsToProps(ignoreAttrs) {
            if (ignoreAttrs || this.store && this.store.ignoreAttrs || this.props.ignoreAttrs) return;
            var ele = this;
            ele.props['css'] = ele.getAttribute('css');
            var attrs = this.constructor.propTypes;
            if (!attrs) return;
            Object.keys(attrs).forEach(function (key) {
              var type = attrs[key];
              var val = ele.getAttribute(hyphenate(key));
              if (val !== null) {
                switch (type) {
                  case String:
                    ele.props[key] = val;
                    break;
                  case Number:
                    ele.props[key] = Number(val);
                    break;
                  case Boolean:
                    if (val === 'false' || val === '0') {
                      ele.props[key] = false;
                    } else {
                      ele.props[key] = true;
                    }
                    break;
                  case Array:
                  case Object:
                    if (val[0] === ':') {
                      ele.props[key] = getValByPath(val.substr(1), Omi.$);
                    } else {
                      ele.props[key] = JSON.parse(val.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4').replace(/'([\s\S]*?)'/g, '"$1"').replace(/,(\s*})/g, '$1'));
                    }
                    break;
                }
              } else {
                if (ele.constructor.defaultProps && ele.constructor.defaultProps.hasOwnProperty(key)) {
                  ele.props[key] = ele.constructor.defaultProps[key];
                } else {
                  ele.props[key] = null;
                }
              }
            });
          };

          WeElement.prototype.fire = function fire(name, data) {
            this.dispatchEvent(new CustomEvent(name, {
              detail: data
            }));
          };

          WeElement.prototype.beforeInstall = function beforeInstall() { };

          WeElement.prototype.install = function install() { };

          WeElement.prototype.afterInstall = function afterInstall() { };

          WeElement.prototype.installed = function installed() { };

          WeElement.prototype.uninstall = function uninstall() { };

          WeElement.prototype.beforeUpdate = function beforeUpdate() { };

          WeElement.prototype.updated = function updated() { };

          WeElement.prototype.beforeRender = function beforeRender() { };

          WeElement.prototype.rendered = function rendered() { };

          WeElement.prototype.receiveProps = function receiveProps() { };

          return WeElement;
        }(HTMLElement);

        WeElement.is = 'WeElement';

        function render(vnode, parent, store) {
          parent = typeof parent === 'string' ? document.querySelector(parent) : parent;
          if (store) {
            parent.store = store;
          }
          return diff(null, vnode, parent, false);
        }

        function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        var storeHelpers = ['use', 'useSelf'];

        function define(name, ctor, config) {
          if (customElements.get(name)) {
            return;
          }
          if (options.mapping[name]) {
            return;
          }
          if (ctor.is === 'WeElement') {
            customElements.define(name, ctor);
            options.mapping[name] = ctor;
          } else {
            if (typeof config === 'string') {
              config = { css: config };
            } else {
              config = config || {};
            }

            var Ele = function (_WeElement) {
              _inherits$1(Ele, _WeElement);

              function Ele() {
                var _temp, _this, _ret;

                _classCallCheck$1(this, Ele);

                for (var _len = arguments.length, args = Array(_len), key = 0; key < _len; key++) {
                  args[key] = arguments[key];
                }

                return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, _WeElement.call.apply(_WeElement, [this].concat(args))), _this), _this.compute = config.compute, _temp), _possibleConstructorReturn$1(_this, _ret);
              }

              Ele.prototype.render = function render() {
                return ctor.call(this, this);
              };

              return Ele;
            }(WeElement);

            Ele.css = config.css;
            Ele.propTypes = config.propTypes;
            Ele.defaultProps = config.defaultProps;
            Ele.isLightDOM = config.isLightDOM;

            var _loop = function _loop(key) {
              if (typeof config[key] === 'function') {
                Ele.prototype[key] = function () {
                  return config[key].apply(this, arguments);
                };
              }
            };

            for (var key in config) {
              _loop(key);
            }

            storeHelpers.forEach(function (func) {
              if (config[func] && config[func] !== 'function') {
                Ele.prototype[func] = function () {
                  return config[func];
                };
              }
            });

            customElements.define(name, Ele);
            options.mapping[name] = Ele;
          }
        }

        function tag(name) {
          return function (target) {
            define(name, target);
          };
        }

        /**
         * Clones the given VNode, optionally adding attributes/props and replacing its children.
         * @param {VNode} vnode    The virtual DOM element to clone
         * @param {Object} props  Attributes/props to add when cloning
         * @param {VNode} rest    Any additional arguments will be used as replacement children.
         */
        function cloneElement(vnode, props) {
          return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
        }

        function getHost(ele) {
          var p = ele.parentNode;
          while (p) {
            if (p.host) {
              return p.host;
            } else if (p.shadowRoot && p.shadowRoot.host) {
              return p.shadowRoot.host;
            } else {
              p = p.parentNode;
            }
          }
        }

        function rpx(css) {
          return css.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, function (a, b) {
            return window.innerWidth * Number(b) / 750 + 'px';
          });
        }

        /**
         * classNames based on https://github.com/JedWatson/classnames
         * by Jed Watson
         * Licensed under the MIT License
         * https://github.com/JedWatson/classnames/blob/master/LICENSE
         * modified by dntzhang
         */

        var hasOwn = {}.hasOwnProperty;

        function classNames() {
          var classes = [];

          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (!arg) continue;

            var argType = typeof arg;

            if (argType === 'string' || argType === 'number') {
              classes.push(arg);
            } else if (Array.isArray(arg) && arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            } else if (argType === 'object') {
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            }
          }

          return classes.join(' ');
        }

        function extractClass() {
          var _Array$prototype$slic = Array.prototype.slice.call(arguments, 0),
            props = _Array$prototype$slic[0],
            args = _Array$prototype$slic.slice(1);

          if (props.class) {
            args.unshift(props.class);
            delete props.class;
          } else if (props.className) {
            args.unshift(props.className);
            delete props.className;
          }
          if (args.length > 0) {
            return { class: classNames.apply(null, args) };
          }
        }

        function o(obj) {
          return JSON.stringify(obj);
        }

        (function () {

          if ('adoptedStyleSheets' in document) { return; }

          var hasShadyCss = 'ShadyCSS' in window && !ShadyCSS.nativeShadow;
          var bootstrapper = document.implementation.createHTMLDocument('boot');
          var closedShadowRootRegistry = new WeakMap();
          var _DOMException = typeof DOMException === 'object' ? Error : DOMException;

          var defineProperty = Object.defineProperty;
          var forEach = Array.prototype.forEach;
          var importPattern = /@import.+?;?$/gm;
          function rejectImports(contents) {
            var _contents = contents.replace(importPattern, '');
            if (_contents !== contents) {
              console.warn('@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418');
            }
            return _contents.trim();
          }
          function clearRules(sheet) {
            for (var i = 0; i < sheet.cssRules.length; i++) {
              sheet.deleteRule(0);
            }
          }
          function insertAllRules(from, to) {
            forEach.call(from.cssRules, function (rule, i) {
              to.insertRule(rule.cssText, i);
            });
          }
          function isElementConnected(element) {
            return 'isConnected' in element
              ? element.isConnected
              : document.contains(element);
          }
          function unique(arr) {
            return arr.filter(function (value, index) { return arr.indexOf(value) === index; });
          }
          function diff(arr1, arr2) {
            return arr1.filter(function (value) { return arr2.indexOf(value) === -1; });
          }
          function removeNode(node) {
            node.parentNode.removeChild(node);
          }
          function getShadowRoot(element) {
            return element.shadowRoot || closedShadowRootRegistry.get(element);
          }

          var cssStyleSheetMethods = [
            'addImport',
            'addPageRule',
            'addRule',
            'deleteRule',
            'insertRule',
            'removeImport',
            'removeRule',
          ];
          var NonConstructedStyleSheet = CSSStyleSheet;
          var nonConstructedProto = NonConstructedStyleSheet.prototype;
          nonConstructedProto.replace = function () {
            return Promise.reject(new _DOMException("Can't call replace on non-constructed CSSStyleSheets."));
          };
          nonConstructedProto.replaceSync = function () {
            throw new _DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.");
          };
          function isCSSStyleSheetInstance(instance) {
            return typeof instance === 'object'
              ? proto$2.isPrototypeOf(instance) ||
              nonConstructedProto.isPrototypeOf(instance)
              : false;
          }
          function isNonConstructedStyleSheetInstance(instance) {
            return typeof instance === 'object'
              ? nonConstructedProto.isPrototypeOf(instance)
              : false;
          }
          var $basicStyleSheet = new WeakMap();
          var $locations = new WeakMap();
          var $adoptersByLocation = new WeakMap();
          function addAdopterLocation(sheet, location) {
            var adopter = document.createElement('style');
            $adoptersByLocation.get(sheet).set(location, adopter);
            $locations.get(sheet).push(location);
            return adopter;
          }
          function getAdopterByLocation(sheet, location) {
            return $adoptersByLocation.get(sheet).get(location);
          }
          function removeAdopterLocation(sheet, location) {
            $adoptersByLocation.get(sheet).delete(location);
            $locations.set(sheet, $locations.get(sheet).filter(function (_location) { return _location !== location; }));
          }
          function restyleAdopter(sheet, adopter) {
            requestAnimationFrame(function () {
              clearRules(adopter.sheet);
              insertAllRules($basicStyleSheet.get(sheet), adopter.sheet);
            });
          }
          function checkInvocationCorrectness(self) {
            if (!$basicStyleSheet.has(self)) {
              throw new TypeError('Illegal invocation');
            }
          }
          function ConstructedStyleSheet() {
            var self = this;
            var style = document.createElement('style');
            bootstrapper.body.appendChild(style);
            $basicStyleSheet.set(self, style.sheet);
            $locations.set(self, []);
            $adoptersByLocation.set(self, new WeakMap());
          }
          var proto$2 = ConstructedStyleSheet.prototype;
          proto$2.replace = function replace(contents) {
            try {
              this.replaceSync(contents);
              return Promise.resolve(this);
            }
            catch (e) {
              return Promise.reject(e);
            }
          };
          proto$2.replaceSync = function replaceSync(contents) {
            checkInvocationCorrectness(this);
            if (typeof contents === 'string') {
              var self_1 = this;
              var style = $basicStyleSheet.get(self_1).ownerNode;
              style.textContent = rejectImports(contents);
              $basicStyleSheet.set(self_1, style.sheet);
              $locations.get(self_1).forEach(function (location) {
                if (location.isConnected()) {
                  restyleAdopter(self_1, getAdopterByLocation(self_1, location));
                }
              });
            }
          };
          defineProperty(proto$2, 'cssRules', {
            configurable: true,
            enumerable: true,
            get: function cssRules() {
              checkInvocationCorrectness(this);
              return $basicStyleSheet.get(this).cssRules;
            },
          });
          cssStyleSheetMethods.forEach(function (method) {
            proto$2[method] = function () {
              var self = this;
              checkInvocationCorrectness(self);
              var args = arguments;
              var basic = $basicStyleSheet.get(self);
              var locations = $locations.get(self);
              var result = basic[method].apply(basic, args);
              locations.forEach(function (location) {
                if (location.isConnected()) {
                  var sheet = getAdopterByLocation(self, location).sheet;
                  sheet[method].apply(sheet, args);
                }
              });
              return result;
            };
          });
          defineProperty(ConstructedStyleSheet, Symbol.hasInstance, {
            configurable: true,
            value: isCSSStyleSheetInstance,
          });

          var defaultObserverOptions = {
            childList: true,
            subtree: true,
          };
          var locations = new WeakMap();
          function getAssociatedLocation(element) {
            var location = locations.get(element);
            if (!location) {
              location = new Location(element);
              locations.set(element, location);
            }
            return location;
          }
          function attachAdoptedStyleSheetProperty(constructor) {
            defineProperty(constructor.prototype, 'adoptedStyleSheets', {
              configurable: true,
              enumerable: true,
              get: function () {
                return getAssociatedLocation(this).sheets;
              },
              set: function (sheets) {
                getAssociatedLocation(this).update(sheets);
              },
            });
          }
          function traverseWebComponents(node, callback) {
            var iter = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT, function (foundNode) {
              return getShadowRoot(foundNode)
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_REJECT;
            },
              null, false);
            for (var next = void 0; (next = iter.nextNode());) {
              callback(getShadowRoot(next));
            }
          }
          var $element = new WeakMap();
          var $uniqueSheets = new WeakMap();
          var $observer = new WeakMap();
          function isExistingAdopter(self, element) {
            return (element instanceof HTMLStyleElement &&
              $uniqueSheets.get(self).some(function (sheet) { return getAdopterByLocation(sheet, self); }));
          }
          function getAdopterContainer(self) {
            var element = $element.get(self);
            return element instanceof Document ? element.body : element;
          }
          function adopt(self) {
            var styleList = document.createDocumentFragment();
            var sheets = $uniqueSheets.get(self);
            var observer = $observer.get(self);
            var container = getAdopterContainer(self);
            observer.disconnect();
            sheets.forEach(function (sheet) {
              styleList.appendChild(getAdopterByLocation(sheet, self) || addAdopterLocation(sheet, self));
            });
            container.insertBefore(styleList, null);
            observer.observe(container, defaultObserverOptions);
            sheets.forEach(function (sheet) {
              restyleAdopter(sheet, getAdopterByLocation(sheet, self));
            });
          }
          function Location(element) {
            var self = this;
            self.sheets = [];
            $element.set(self, element);
            $uniqueSheets.set(self, []);
            $observer.set(self, new MutationObserver(function (mutations, observer) {
              if (!document) {
                observer.disconnect();
                return;
              }
              mutations.forEach(function (mutation) {
                if (!hasShadyCss) {
                  forEach.call(mutation.addedNodes, function (node) {
                    if (!(node instanceof Element)) {
                      return;
                    }
                    traverseWebComponents(node, function (root) {
                      getAssociatedLocation(root).connect();
                    });
                  });
                }
                forEach.call(mutation.removedNodes, function (node) {
                  if (!(node instanceof Element)) {
                    return;
                  }
                  if (isExistingAdopter(self, node)) {
                    adopt(self);
                  }
                  if (!hasShadyCss) {
                    traverseWebComponents(node, function (root) {
                      getAssociatedLocation(root).disconnect();
                    });
                  }
                });
              });
            }));
          }
          var proto$1 = Location.prototype;
          proto$1.isConnected = function isConnected() {
            var element = $element.get(this);
            return element instanceof Document
              ? element.readyState !== 'loading'
              : isElementConnected(element.host);
          };
          proto$1.connect = function connect() {
            var container = getAdopterContainer(this);
            $observer.get(this).observe(container, defaultObserverOptions);
            if ($uniqueSheets.get(this).length > 0) {
              adopt(this);
            }
            traverseWebComponents(container, function (root) {
              getAssociatedLocation(root).connect();
            });
          };
          proto$1.disconnect = function disconnect() {
            $observer.get(this).disconnect();
          };
          proto$1.update = function update(sheets) {
            var self = this;
            var locationType = $element.get(self) === document ? 'Document' : 'ShadowRoot';
            if (!Array.isArray(sheets)) {
              throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Iterator getter is not callable.");
            }
            if (!sheets.every(isCSSStyleSheetInstance)) {
              throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Failed to convert value to 'CSSStyleSheet'");
            }
            if (sheets.some(isNonConstructedStyleSheetInstance)) {
              throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Can't adopt non-constructed stylesheets");
            }
            self.sheets = sheets;
            var oldUniqueSheets = $uniqueSheets.get(self);
            var uniqueSheets = unique(sheets);
            var removedSheets = diff(oldUniqueSheets, uniqueSheets);
            removedSheets.forEach(function (sheet) {
              removeNode(getAdopterByLocation(sheet, self));
              removeAdopterLocation(sheet, self);
            });
            $uniqueSheets.set(self, uniqueSheets);
            if (self.isConnected() && uniqueSheets.length > 0) {
              adopt(self);
            }
          };

          window.CSSStyleSheet = ConstructedStyleSheet;
          attachAdoptedStyleSheetProperty(Document);
          if ('ShadowRoot' in window) {
            attachAdoptedStyleSheetProperty(ShadowRoot);
            var proto = Element.prototype;
            var attach_1 = proto.attachShadow;
            proto.attachShadow = function attachShadow(init) {
              var root = attach_1.call(this, init);
              if (init.mode === 'closed') {
                closedShadowRootRegistry.set(this, root);
              }
              return root;
            };
          }
          var documentLocation = getAssociatedLocation(document);
          if (documentLocation.isConnected()) {
            documentLocation.connect();
          }
          else {
            document.addEventListener('DOMContentLoaded', documentLocation.connect.bind(documentLocation));
          }

        }());

        h.f = Fragment;

        function createRef() {
          return {};
        }

        var $ = {};
        var Component = WeElement;
        var defineElement = define;
        var elements = options.mapping;

        var omi = {
          tag: tag,
          WeElement: WeElement,
          Component: Component,
          render: render,
          h: h,
          createElement: h,
          options: options,
          define: define,
          cloneElement: cloneElement,
          getHost: getHost,
          rpx: rpx,
          defineElement: defineElement,
          classNames: classNames,
          extractClass: extractClass,
          createRef: createRef,
          o: o,
          elements: elements,
          $: $,
          extend: extend$1,
          get: get,
          set: set,
          bind: bind,
          unbind: unbind
        };

        options.root.Omi = omi;
        options.root.omi = omi;
        options.root.Omi.version = '6.21.3';

/* harmony default export */ __webpack_exports__["default"] = (omi);

        //# sourceMappingURL=omi.esm.js.map

        /* WEBPACK VAR INJECTION */
}.call(this, __webpack_require__(/*! ./../../_webpack@4.46.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.46.0@webpack/buildin/global.js")))

      /***/
}),

/***/ "./node_modules/_webpack@4.46.0@webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function (module, exports) {

      var g;

      // This works in non-strict mode
      g = (function () {
        return this;
      })();

      try {
        // This works if eval is allowed (see CSP)
        g = g || new Function("return this")();
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === "object") g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;


      /***/
}),

/***/ "./src/index.esm.js":
/*!**************************!*\
  !*** ./src/index.esm.js ***!
  \**************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
/* WEBPACK VAR INJECTION */(function (global) {
        /**
         * omi-router v3.0.2 http://omijs.org
         * Front End Cross-Frameworks Framework.
         * By dntzhang https://github.com/dntzhang
         * Github: https://github.com/Tencent/omi
         * MIT Licensed.
         */
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.route = exports.hashChange = exports.default = void 0;
        /**
         * Expose `pathToRegexp`.
         */
        var _pathToRegexp_3_2_0_pathToRegexp = pathToRegexp;
        var match_1 = match;
        var regexpToFunction_1 = regexpToFunction;
        var parse_1 = parse;
        var compile_1 = compile;
        var tokensToFunction_1 = tokensToFunction;
        var tokensToRegExp_1 = tokensToRegExp;
        /**
         * Default configs.
         */
        var DEFAULT_DELIMITER = '/';
        /**
         * The main path matching regexp utility.
         *
         * @type {RegExp}
         */
        var PATH_REGEXP = new RegExp([
          // Match escaped characters that would otherwise appear in future matches.
          // This allows the user to escape special characters that won't transform.
          '(\\\\.)',
          // Match Express-style parameters and un-named parameters with a prefix
          // and optional suffixes. Matches appear as:
          //
          // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
          // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
          '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
        ].join('|'), 'g');
        /**
         * Parse a string for the raw tokens.
         *
         * @param  {string}  str
         * @param  {Object=} options
         * @return {!Array}
         */
        function parse(str, options) {
          var tokens = [];
          var key = 0;
          var index = 0;
          var path = '';
          var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER;
          var whitelist = (options && options.whitelist) || undefined;
          var pathEscaped = false;
          var res;
          while ((res = PATH_REGEXP.exec(str)) !== null) {
            var m = res[0];
            var escaped = res[1];
            var offset = res.index;
            path += str.slice(index, offset);
            index = offset + m.length;
            // Ignore already escaped sequences.
            if (escaped) {
              path += escaped[1];
              pathEscaped = true;
              continue;
            }
            var prev = '';
            var name = res[2];
            var capture = res[3];
            var group = res[4];
            var modifier = res[5];
            if (!pathEscaped && path.length) {
              var k = path.length - 1;
              var c = path[k];
              var matches = whitelist ? whitelist.indexOf(c) > -1 : true;
              if (matches) {
                prev = c;
                path = path.slice(0, k);
              }
            }
            // Push the current path onto the tokens.
            if (path) {
              tokens.push(path);
              path = '';
              pathEscaped = false;
            }
            var repeat = modifier === '+' || modifier === '*';
            var optional = modifier === '?' || modifier === '*';
            var pattern = capture || group;
            var delimiter = prev || defaultDelimiter;
            tokens.push({
              name: name || key++,
              prefix: prev,
              delimiter: delimiter,
              optional: optional,
              repeat: repeat,
              pattern: pattern
                ? escapeGroup(pattern)
                : '[^' + escapeString(delimiter === defaultDelimiter ? delimiter : (delimiter + defaultDelimiter)) + ']+?'
            });
          }
          // Push any remaining characters.
          if (path || index < str.length) {
            tokens.push(path + str.substr(index));
          }
          return tokens;
        }
        /**
         * Compile a string to a template function for the path.
         *
         * @param  {string}             str
         * @param  {Object=}            options
         * @return {!function(Object=, Object=)}
         */
        function compile(str, options) {
          return tokensToFunction(parse(str, options), options);
        }
        /**
         * Create path match function from `path-to-regexp` spec.
         */
        function match(str, options) {
          var keys = [];
          var re = pathToRegexp(str, keys, options);
          return regexpToFunction(re, keys);
        }
        /**
         * Create a path match function from `path-to-regexp` output.
         */
        function regexpToFunction(re, keys) {
          return function (pathname, options) {
            var m = re.exec(pathname);
            if (!m)
              return false;
            var path = m[0];
            var index = m.index;
            var params = {};
            var decode = (options && options.decode) || decodeURIComponent;
            for (var i = 1; i < m.length; i++) {
              if (m[i] === undefined)
                continue;
              var key = keys[i - 1];
              if (key.repeat) {
                params[key.name] = m[i].split(key.delimiter).map(function (value) {
                  return decode(value, key);
                });
              }
              else {
                params[key.name] = decode(m[i], key);
              }
            }
            return { path: path, index: index, params: params };
          };
        }
        /**
         * Expose a method for transforming tokens into the path function.
         */
        function tokensToFunction(tokens, options) {
          // Compile all the tokens into regexps.
          var matches = new Array(tokens.length);
          // Compile all the patterns before compilation.
          for (var i = 0; i < tokens.length; i++) {
            if (typeof tokens[i] === 'object') {
              matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
            }
          }
          return function (data, options) {
            var path = '';
            var encode = (options && options.encode) || encodeURIComponent;
            var validate = options ? options.validate !== false : true;
            for (var i = 0; i < tokens.length; i++) {
              var token = tokens[i];
              if (typeof token === 'string') {
                path += token;
                continue;
              }
              var value = data ? data[token.name] : undefined;
              var segment;
              if (Array.isArray(value)) {
                if (!token.repeat) {
                  throw new TypeError('Expected "' + token.name + '" to not repeat, but got array');
                }
                if (value.length === 0) {
                  if (token.optional)
                    continue;
                  throw new TypeError('Expected "' + token.name + '" to not be empty');
                }
                for (var j = 0; j < value.length; j++) {
                  segment = encode(value[j], token);
                  if (validate && !matches[i].test(segment)) {
                    throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"');
                  }
                  path += (j === 0 ? token.prefix : token.delimiter) + segment;
                }
                continue;
              }
              if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                  throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
                }
                path += token.prefix + segment;
                continue;
              }
              if (token.optional)
                continue;
              throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'));
            }
            return path;
          };
        }
        /**
         * Escape a regular expression string.
         *
         * @param  {string} str
         * @return {string}
         */
        function escapeString(str) {
          return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
        }
        /**
         * Escape the capturing group by escaping special characters and meaning.
         *
         * @param  {string} group
         * @return {string}
         */
        function escapeGroup(group) {
          return group.replace(/([=!:$/()])/g, '\\$1');
        }
        /**
         * Get the flags for a regexp from the options.
         *
         * @param  {Object} options
         * @return {string}
         */
        function flags(options) {
          return options && options.sensitive ? '' : 'i';
        }
        /**
         * Pull out keys from a regexp.
         *
         * @param  {!RegExp} path
         * @param  {Array=}  keys
         * @return {!RegExp}
         */
        function regexpToRegexp(path, keys) {
          if (!keys)
            return path;
          // Use a negative lookahead to match only capturing groups.
          var groups = path.source.match(/\((?!\?)/g);
          if (groups) {
            for (var i = 0; i < groups.length; i++) {
              keys.push({
                name: i,
                prefix: null,
                delimiter: null,
                optional: false,
                repeat: false,
                pattern: null
              });
            }
          }
          return path;
        }
        /**
         * Transform an array into a regexp.
         *
         * @param  {!Array}  path
         * @param  {Array=}  keys
         * @param  {Object=} options
         * @return {!RegExp}
         */
        function arrayToRegexp(path, keys, options) {
          var parts = [];
          for (var i = 0; i < path.length; i++) {
            parts.push(pathToRegexp(path[i], keys, options).source);
          }
          return new RegExp('(?:' + parts.join('|') + ')', flags(options));
        }
        /**
         * Create a path regexp from string input.
         *
         * @param  {string}  path
         * @param  {Array=}  keys
         * @param  {Object=} options
         * @return {!RegExp}
         */
        function stringToRegexp(path, keys, options) {
          return tokensToRegExp(parse(path, options), keys, options);
        }
        /**
         * Expose a function for taking tokens and returning a RegExp.
         *
         * @param  {!Array}  tokens
         * @param  {Array=}  keys
         * @param  {Object=} options
         * @return {!RegExp}
         */
        function tokensToRegExp(tokens, keys, options) {
          options = options || {};
          var strict = options.strict;
          var start = options.start !== false;
          var end = options.end !== false;
          var delimiter = options.delimiter || DEFAULT_DELIMITER;
          var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
          var route = start ? '^' : '';
          // Iterate over the tokens and create our regexp string.
          for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === 'string') {
              route += escapeString(token);
            }
            else {
              var capture = token.repeat
                ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*'
                : token.pattern;
              if (keys)
                keys.push(token);
              if (token.optional) {
                if (!token.prefix) {
                  route += '(' + capture + ')?';
                }
                else {
                  route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?';
                }
              }
              else {
                route += escapeString(token.prefix) + '(' + capture + ')';
              }
            }
          }
          if (end) {
            if (!strict)
              route += '(?:' + escapeString(delimiter) + ')?';
            route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
          }
          else {
            var endToken = tokens[tokens.length - 1];
            var isEndDelimited = typeof endToken === 'string'
              ? endToken[endToken.length - 1] === delimiter
              : endToken === undefined;
            if (!strict)
              route += '(?:' + escapeString(delimiter) + '(?=' + endsWith + '))?';
            if (!isEndDelimited)
              route += '(?=' + escapeString(delimiter) + '|' + endsWith + ')';
          }
          return new RegExp(route, flags(options));
        }
        /**
         * Normalize the given path string, returning a regular expression.
         *
         * An empty array can be passed in for the keys, which will hold the
         * placeholder key descriptions. For example, using `/user/:id`, `keys` will
         * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
         *
         * @param  {(string|RegExp|Array)} path
         * @param  {Array=}                keys
         * @param  {Object=}               options
         * @return {!RegExp}
         */
        function pathToRegexp(path, keys, options) {
          if (path instanceof RegExp) {
            return regexpToRegexp(path, keys);
          }
          if (Array.isArray(path)) {
            return arrayToRegexp(/** @type {!Array} */(path), keys, options);
          }
          return stringToRegexp(/** @type {string} */(path), keys, options);
        }
        _pathToRegexp_3_2_0_pathToRegexp.match = match_1;
        _pathToRegexp_3_2_0_pathToRegexp.regexpToFunction = regexpToFunction_1;
        _pathToRegexp_3_2_0_pathToRegexp.parse = parse_1;
        _pathToRegexp_3_2_0_pathToRegexp.compile = compile_1;
        _pathToRegexp_3_2_0_pathToRegexp.tokensToFunction = tokensToFunction_1;
        _pathToRegexp_3_2_0_pathToRegexp.tokensToRegExp = tokensToRegExp_1;
        /*!
         *  omi-router v3.0.1 by dntzhang
         *  Router for Omi.
         *  Github: https://github.com/Tencent/omi
         *  MIT Licensed.
         */
        var mapping = {};
        var root = getGlobal();
        root.route = route;
        root.route.params = null;
        root.historyLength = 0;
        root.route.to = function (path, data) {
          root.route._routeByTo = true;
          root.route.data = data;
          if (path[0] === '#') {
            location.hash = path;
          }
          else {
            location.hash = '#' + path;
          }
        };
        window.addEventListener('hashchange', hashChange);
        function hashChange(evt) {
          var byNative = false;
          //need to fix a line by omi-link
          if (window.history.length === root.historyLength && !root.route._routeByTo) {
            //keep alive mode
            byNative = true;
          }
          root.route._routeByTo = false;
          root.historyLength = window.history.length;
          var prevent = false;
          if (root.route.before) {
            prevent = root.route.before(evt) === false;
          }
          if (prevent)
            return;
          var path = window.location.hash.replace('#', '');
          if (path === '')
            path = '/';
          var notFound = true;
          Object.keys(mapping).every(function (key) {
            var toArr = path.split('?')[0].match(mapping[key].reg);
            if (toArr) {
              var pathArr = key.match(mapping[key].reg);
              root.route.params = getParams(toArr, pathArr);
              root.route.query = getUrlParams(path);
              mapping[key].callback({
                params: root.route.params,
                query: getUrlParams(path),
                data: root.route.data,
                byNative: byNative
              });
              root.route.data = null;
              notFound = false;
              return false;
            }
            return true;
          });
          if (notFound) {
            mapping['*'] && mapping['*'].callback({ byNative: byNative });
          }
          if (root.route.after) {
            root.route.after(evt);
          }
        }
        exports.hashChange = hashChange;
        document.addEventListener('DOMContentLoaded', hashChange);
        function getParams(toArr, pathArr) {
          var params = {};
          toArr.forEach(function (item, index) {
            if (index > 0) {
              params[pathArr[index].replace(':', '')] = item;
            }
          });
          return params;
        }
        function route(path, callback) {
          mapping[path] = {
            callback: callback,
            reg: _pathToRegexp_3_2_0_pathToRegexp(path)
          };
        }
        exports.route = route;
        var router = { route: route, hashChange: hashChange };
        exports.default = router;
        function getGlobal() {
          if (typeof global !== 'object' ||
            !global ||
            global.Math !== Math ||
            global.Array !== Array) {
            return (self ||
              window ||
              global ||
              (function () {
                return this;
              })());
          }
          return global;
        }
        function getUrlParams(url) {
          url = url.replace(/#.*$/, '');
          var queryArray = url.split(/[?&]/).slice(1);
          var i, args = {};
          for (i = 0; i < queryArray.length; i++) {
            var match = queryArray[i].match(/([^=]+)=([^=]+)/);
            if (match !== null) {
              args[match[1]] = decodeURIComponent(match[2]);
            }
          }
          return args;
        }
        //# sourceMappingURL=index.esm.js.map

        /* WEBPACK VAR INJECTION */
}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.46.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.46.0@webpack/buildin/global.js")))

      /***/
})

  /******/
});
//# sourceMappingURL=bundler.js.map

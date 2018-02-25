/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _h = __webpack_require__(6);

var _h2 = _interopRequireDefault(_h);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Omi = {
    x: _h2['default'],
    instances: {},
    _instanceId: 0,
    _styleId: 0,
    STYLEPREFIX: '__st_',
    PREFIX: '__s_',
    getInstanceId: function getInstanceId() {
        return Omi._instanceId++;
    },
    plugins: {},
    scopedStyle: true,
    mapping: {},
    style: {},
    componentConstructor: {}
};

Omi.getAttr = function (ctor) {
    if (ctor.is) {
        return ctor.is;
    }
    var inst = Omi.instances,
        hasAttr = false;
    for (var key in inst) {
        if (inst[key].constructor === ctor) {
            hasAttr = true;
            ctor.is = Omi.STYLEPREFIX + Omi._styleId;
            Omi._styleId++;
            return ctor.is;
        }
    }
    if (!hasAttr) {
        ctor.is = Omi.STYLEPREFIX + Omi._styleId;
        Omi._styleId++;
        return ctor.is;
    }
};

Omi.$ = function (selector, context) {
    if (context) {
        return context.querySelector(selector);
    } else {
        return document.querySelector(selector);
    }
};

Omi.$$ = function (selector, context) {
    if (context) {
        return Array.prototype.slice.call(context.querySelectorAll(selector));
    } else {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
    }
};

Omi._capitalize = function (str) {
    str = str.toLowerCase();
    str = str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
    }).replace(/-/g, '');
    return str;
};

Omi.tag = function (name, ctor) {
    var cname = name.replace(/-/g, '').toLowerCase();
    Omi.componentConstructor[cname] = ctor;
    ctor.is = name;

    var uname = Omi._capitalize(name);
    Omi.tags[uname] = Omi.tags.createTag(uname);
};

Omi.getConstructor = function (name) {
    for (var key in Omi.componentConstructor) {
        if (key === name.toLowerCase() || key === name.replace(/-/g, '').toLowerCase()) {
            return Omi.componentConstructor[key];
        }
    }
};

function isServer() {
    return !(typeof window !== 'undefined' && window.document);
}

Omi.render = function (component, renderTo, option) {
    if (isServer()) return;
    component.renderTo = typeof renderTo === 'string' ? document.querySelector(renderTo) : renderTo;
    if (typeof option === 'boolean') {
        component._omi_increment = option;
    } else if (option) {
        component._omi_increment = option.increment;
        component.$store = option.store;
        if (option.ssr) {
            component.data = Object.assign({}, window.__omiSsrData, component.data);
        }
    }
    component.install();
    component.beforeRender();
    component._render(true);
    component._childrenInstalled(component);
    component.installed();
    component._execInstalledHandlers();
    return component;
};

Omi.get = function (name) {
    return Omi.mapping[name];
};

Omi.extendPlugin = function (name, handler) {
    Omi.plugins[name] = handler;
};

Omi.deletePlugin = function (name) {
    delete Omi.plugins[name];
};

function spread(vd) {
    var str = '';
    var type = vd.type;
    switch (type) {
        case 'VirtualNode':
            str += '<' + vd.tagName + ' ' + props2str(vd.props) + '>' + vd.children.map(function (child) {
                return spread(child);
            }).join('') + '</' + vd.tagName + '>';
            break;
        case 'VirtualText':
            return vd.text;
    }

    return str;
}

function props2str(props) {
    var result = '';
    for (var key in props) {
        var val = props[key];
        var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
        if (type !== 'function' && type !== 'object') {
            result += key + '="' + val + '" ';
        }
    }
    return result;
}

function spreadStyle() {
    var css = '';
    for (var key in Omi.style) {
        css += '\n' + Omi.style[key] + '\n';
    }
    return css;
}

function stringifyData(component) {
    return '<script>window.__omiSsrData=' + JSON.stringify(component.data) + '</script>';
}

Omi.renderToString = function (component, store) {
    Omi.ssr = true;
    component.$store = store;
    component.install();
    component.beforeRender();
    component._render(true);
    Omi.ssr = false;
    var result = '<style>' + spreadStyle() + '</style>\n' + spread(component._virtualDom) + stringifyData(component);
    Omi.style = {};
    Omi._instanceId = 0;
    return result;
};

exports['default'] = Omi;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getPrototype = getPrototype;
exports.isObject = isObject;
function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value);
    } else if (value.constructor) {
        return value.constructor.prototype;
    }
}

function isObject(x) {
    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _applyProperties = __webpack_require__(3);

var _applyProperties2 = _interopRequireDefault(_applyProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function createElement(vnode, opts) {
    var doc = opts ? opts.document || document : document;

    // vnode = handleThunk(vnode).a

    if (typeof vnode === 'string') {
        return doc.createTextNode(vnode);
    }

    var node = doc.createElement(vnode.tagName);

    var props = vnode.props;

    (0, _applyProperties2['default'])(node, props);

    var children = vnode.children;

    for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts);
        if (childNode) {
            node.appendChild(childNode);
        }
    }

    return node;
}

exports['default'] = createElement;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = applyProperties;

var _util = __webpack_require__(1);

function removeProperty(node, propName, propValue, previous) {
    if (previous) {
        var previousValue = previous[propName];

        if (propName === 'attributes') {
            for (var attrName in previousValue) {
                node.removeAttribute(attrName);
            }
        } else if (propName === 'style') {
            for (var i in previousValue) {
                node.style[i] = '';
            }
        } else if (typeof previousValue === 'string') {
            node[propName] = '';
            node.removeAttribute(propName);
        } else {
            node[propName] = null;
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined;

    // Set attributes
    if (propName === 'attributes') {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName];

            if (attrValue === undefined) {
                node.removeAttribute(attrName);
            } else {
                node.setAttribute(attrName, attrValue);
            }
        }

        return;
    }

    if (previousValue && (0, _util.isObject)(previousValue) && (0, _util.getPrototype)(previousValue) !== (0, _util.getPrototype)(propValue)) {
        node[propName] = propValue;
        return;
    }

    if (!(0, _util.isObject)(node[propName])) {
        node[propName] = {};
    }

    var replacer = propName === 'style' ? '' : undefined,
        json = propValue;

    if (propName === 'style' && Object.prototype.toString.call(propValue) === '[object Array]') {
        var arr = propValue.slice(0);
        arr.unshift({});

        json = Object.assign.apply(null, arr);
    }

    for (var k in json) {
        var value = json[k];

        node[propName][k] = value === undefined ? replacer : value;
    }
}

function applyProperties(node, props, previous) {
    if (!node.omixEventList) {
        node.omixEventList = {};
    }
    for (var event in node.omixEventList) {
        node[event] = null;
    }
    for (var propName in props) {
        var propValue = props[propName];

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous);
        } else {
            if ((0, _util.isObject)(propValue)) {
                patchObject(node, props, previous, propName, propValue);
            } else {
                // https://stackoverflow.com/questions/12718186/element-setattributeprop-value-vs-element-prop-value
                if (typeof propValue === 'function') {
                    node[propName.toLowerCase()] = propValue;
                    node.omixEventList[propName.toLowerCase()] = true;
                    node.omixEventList[propName] = true;
                } else {
                    node.setAttribute(propName, propValue);
                }
                if (propName !== 'style') {
                    // fix readonly bug in ios
                    node[propName] = propValue;
                }
            }
        }
    }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

var _todoApp = __webpack_require__(11);

var _todoApp2 = _interopRequireDefault(_todoApp);

var _store = __webpack_require__(13);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var app = new _todoApp2['default']();
var store = new _store2['default']({
    items: [{ id: 1, text: 'Omi' }, { id: 2, text: 'AlloyTeam' }],
    text: ''
}, {
    add: function add(text) {
        //�������ע�붯����Ч�������߼��ٽ���app.update������
        //setTimeout(()=>{
        app.update();
        // },100)
    },
    remove: function remove(id) {
        app.update();
    },
    addItems: function addItems() {
        app.update();
    },
    changeText: function changeText() {
        app.update();
    },
    undo: function undo() {
        app.update();
    },
    redo: function redo() {
        app.update();
    }
});

_index2['default'].render(app, 'body', {
    store: store
});

window.s = store;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _omi = __webpack_require__(0);

var _omi2 = _interopRequireDefault(_omi);

var _component = __webpack_require__(7);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

if (typeof Object.assign !== 'function') {
    Object.assign = function (target) {
        'use strict';

        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}

_omi2['default'].Component = _component2['default'];

if (typeof window !== 'undefined' && window.Omi) {
    module.exports = window.Omi;
} else {
    typeof window !== 'undefined' && (window.Omi = _omi2['default']);
    module.exports = _omi2['default'];
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// from  preact
/** Virtual DOM Node */

function VNode() {}

var stack = [];

var EMPTY_CHILDREN = [];

/** JSX/hyperscript reviver
    Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
    @see http://jasonformat.com/wtf-is-jsx
    @public
 */
function h(tagName, props) {
    var children = EMPTY_CHILDREN,
        lastSimple = void 0,
        child = void 0,
        simple = void 0,
        i = void 0;
    for (i = arguments.length; i-- > 2;) {
        stack.push(arguments[i]);
    }
    if (props && props.children != null) {
        if (!stack.length) stack.push(props.children);
        delete props.children;
    }
    while (stack.length) {
        if ((child = stack.pop()) && child.pop !== undefined) {
            for (i = child.length; i--;) {
                stack.push(child[i]);
            }
        } else {
            if (typeof child === 'boolean') child = null;

            if (simple = typeof tagName !== 'function') {
                if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
            }

            if (simple && lastSimple) {
                children[children.length - 1] += child;
            } else if (child != null) {
                if (children === EMPTY_CHILDREN) {
                    children = [child];
                } else {
                    children.push(child);
                }
            }

            lastSimple = simple;
        }
    }

    var p = new VNode();
    p.tagName = tagName;
    p.children = children;
    p.props = props == null ? {} : props;
    p.key = props == null ? undefined : props.key;

    // if a "vnode hook" is defined, pass every created VNode to it
    // if (options.vnode!==undefined) options.vnode(p);

    p.count = children.length;

    p.children.forEach(function (nChild) {
        if (nChild && nChild.count) {
            p.count += nChild.count;
        }
    });
    return p;
}

exports['default'] = h;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _omi2 = _interopRequireDefault(_omi);

var _style = __webpack_require__(8);

var _style2 = _interopRequireDefault(_style);

var _diff = __webpack_require__(9);

var _diff2 = _interopRequireDefault(_diff);

var _patch = __webpack_require__(10);

var _patch2 = _interopRequireDefault(_patch);

var _createElement = __webpack_require__(2);

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
    function Component(data) {
        _classCallCheck(this, Component);

        this.data = data || {};
        this.id = _omi2['default'].getInstanceId();
        this.children = [];
        this._omi_scopedAttr = _omi2['default'].PREFIX + this.id;
        _omi2['default'].instances[this.id] = this;
        this.refs = {};
    }

    _createClass(Component, [{
        key: 'render',
        value: function render() {}
    }, {
        key: 'install',
        value: function install() {}
    }, {
        key: 'beforeUpdate',
        value: function beforeUpdate() {}
    }, {
        key: 'update',
        value: function update() {
            this._resetUsing(this);
            this.beforeUpdate();
            // this._childrenBeforeUpdate(this)
            this.beforeRender();
            this._preVirtualDom = this._virtualDom;
            this._virtualDom = this.render();
            this._normalize(this._virtualDom);

            this._fixVirtualDomCount(this._virtualDomCount(this._preVirtualDom, [[this._preVirtualDom]]));
            // this._fixVirtualDomCount(this._virtualDomCount(this._virtualDom, [[this._virtualDom]]))

            (0, _patch2['default'])(this.node, (0, _diff2['default'])(this._preVirtualDom, this._virtualDom));

            this._mixAttr(this);

            this._childrenAfterUpdate(this);
            this.afterUpdate();

            this._childrenInstalled(this);
            if (!this.renderTo) {
                // 子节点自己更新之后同步至父节点的虚拟
                this.parent._virtualDom.children[this._omi_instanceIndex] = this._virtualDom;
            }

            this._fixForm();
        }
    }, {
        key: '_virtualDomCount',
        value: function _virtualDomCount(root, arr) {
            var _this = this;

            root.count = root.children.length;
            var list = [];
            root.children.forEach(function (child) {
                list.push(child);
                if (child.children) {
                    child.count = child.children.length;
                    child._pp = root;
                }
            });

            arr.push(list);

            root.children.forEach(function (child) {
                if (child.children) {
                    _this._virtualDomCount(child, arr);
                }
            });
            return arr;
        }
    }, {
        key: '_fixVirtualDomCount',
        value: function _fixVirtualDomCount(list) {
            for (var i = list.length - 1; i >= 0; i--) {
                var children = list[i];
                children.forEach(function (child) {
                    if (child._pp) {
                        child._pp.count += child.count || 0;
                    }
                });
            }
        }

        // _childrenBeforeUpdate(root) {
        //    root.children.forEach((child) => {
        //        child.beforeUpdate()
        //        this._childrenBeforeUpdate(child)
        //    })
        // }

    }, {
        key: '_childrenAfterUpdate',
        value: function _childrenAfterUpdate(root) {
            var _this2 = this;

            root.children.forEach(function (child) {
                _this2._childrenAfterUpdate(child);
                child.afterUpdate();
            });
        }
    }, {
        key: 'afterUpdate',
        value: function afterUpdate() {}
    }, {
        key: 'beforeRender',
        value: function beforeRender() {}
    }, {
        key: 'installed',
        value: function installed() {}
    }, {
        key: 'style',
        value: function style() {}
    }, {
        key: 'onInstalled',
        value: function onInstalled(handler) {
            if (!this._omi_installedHandlers) {
                this._omi_installedHandlers = [];
            }
            this._omi_installedHandlers.push(handler);
        }
    }, {
        key: '_execInstalledHandlers',
        value: function _execInstalledHandlers() {
            this._omi_installedHandlers && this._omi_installedHandlers.forEach(function (handler) {
                handler();
            });
        }
    }, {
        key: '_render',
        value: function _render(first) {
            this._generateCss();
            this._virtualDom = this.render();
            this._normalize(this._virtualDom, first);
            if (this.renderTo) {
                this.node = (0, _createElement2['default'])(this._virtualDom);
                if (!this._omi_increment) {
                    while (this.renderTo.firstChild) {
                        this.renderTo.removeChild(this.renderTo.firstChild);
                    }
                }
                this.renderTo.appendChild(this.node);
                this._mixAttr(this);
                this._fixForm();
            }
        }
    }, {
        key: '_generateCss',
        value: function _generateCss() {
            this.css = (this.style() || '').replace(/<\/?style>/g, '');
            var shareAttr = this.data.scopedSelfCss ? this._omi_scopedAttr : _omi2['default'].getAttr(this.constructor);

            if (this.css) {
                if (this.data.closeScopedStyle) {
                    _omi2['default'].style[shareAttr + '_g'] = this.css;
                    if (!_omi2['default'].ssr) {
                        if (this.css !== this._preCss) {
                            _style2['default'].addStyle(this.css, this.id);
                            this._preCss = this.css;
                        }
                    }
                } else if (!_omi2['default'].style[shareAttr]) {
                    if (_omi2['default'].scopedStyle) {
                        this.css = _style2['default'].scoper(this.css, this.data.scopedSelfCss ? '[' + this._omi_scopedAttr + ']' : '[' + shareAttr + ']');
                    }
                    _omi2['default'].style[shareAttr] = this.css;
                    if (!_omi2['default'].ssr) {
                        if (this.css !== this._preCss) {
                            _style2['default'].addStyle(this.css, this.id);
                            this._preCss = this.css;
                        }
                    }
                }
            }
        }
    }, {
        key: '_normalize',
        value: function _normalize(root, first, parent, index, parentInstance) {
            var _this3 = this;

            if (_omi2['default'].NativeComponent && root.tagName.isNativeBaseComponent) {
                return;
            }
            var ps = root.props;
            // for scoped css
            if (ps) {
                if (_omi2['default'].scopedStyle && this.constructor.name) {
                    ps[_omi2['default'].getAttr(this.constructor)] = '';
                }
                ps[this._omi_scopedAttr] = '';
            }

            if (root.tagName) {
                var Ctor = typeof root.tagName === 'string' ? _omi2['default'].getConstructor(root.tagName) : root.tagName;
                if (Ctor) {
                    var cmi = this._getNextChild(root.tagName, parentInstance);
                    // not using pre instance the first time
                    if (cmi && !first) {
                        if (cmi.data.selfDataFirst) {
                            cmi.data = Object.assign({}, root.props, cmi.data);
                        } else {
                            cmi.data = Object.assign({}, cmi.data, root.props);
                        }
                        cmi.beforeUpdate();
                        cmi.beforeRender();
                        cmi._render();
                        parent[index] = cmi._virtualDom;
                    } else {
                        var instance = new Ctor(root.props);
                        if (parentInstance) {
                            instance.$store = parentInstance.$store;
                        }
                        if (instance.data.children !== undefined) {
                            instance.data._children = instance.data.children;
                            console.warn('The children property will be covered.access it by _children');
                        }
                        instance.data.children = root.children;
                        instance._using = true;
                        instance.install();
                        instance.beforeRender();
                        instance._render(first);
                        instance.parent = parentInstance;
                        instance._omi_needInstalled = true;
                        if (parentInstance) {
                            instance.parent = parentInstance;
                            instance._omi_instanceIndex = parentInstance.children.length;
                            parentInstance.children.push(instance);
                            parent[index] = instance._virtualDom;
                            if (root.props['omi-name']) {
                                parentInstance[root.props['omi-name']] = instance;
                            }
                        } else {
                            this._virtualDom = instance._virtualDom;
                            if (root.props['omi-name']) {
                                this[root.props['omi-name']] = instance;
                            }
                        }

                        if (root.props['omi-id']) {
                            _omi2['default'].mapping[root.props['omi-id']] = instance;
                        }
                    }
                }
            }

            root.children && root.children.forEach(function (child, index) {
                _this3._normalize(child, first, root.children, index, _this3);
            });
        }
    }, {
        key: '_resetUsing',
        value: function _resetUsing(root) {
            var _this4 = this;

            root.children.forEach(function (child) {
                _this4._resetUsing(child);
                child._using = false;
            });
        }
    }, {
        key: '_getNextChild',
        value: function _getNextChild(cn, parentInstance) {
            if (!parentInstance) return;
            if (typeof cn !== 'string') {
                for (var i = 0, len = parentInstance.children.length; i < len; i++) {
                    var child = parentInstance.children[i];
                    if (cn === child.constructor && !child._using) {
                        child._using = true;
                        return child;
                    }
                }
            } else if (parentInstance) {
                for (var _i = 0, _len = parentInstance.children.length; _i < _len; _i++) {
                    var _child = parentInstance.children[_i];
                    if (cn.replace(/-/g, '').toLowerCase() === _child.constructor.is.replace(/-/g, '').toLowerCase() && !_child._using) {
                        _child._using = true;
                        return _child;
                    }
                }
            }
        }
    }, {
        key: '_fixForm',
        value: function _fixForm() {
            _omi2['default'].$$('input', this.node).forEach(function (element) {
                var type = element.type.toLowerCase();
                if (element.getAttribute('value') === '') {
                    element.value = '';
                }
                if (type === 'checked' || type === 'radio') {
                    if (element.hasAttribute('checked')) {
                        element.checked = 'checked';
                    } else {
                        element.checked = false;
                    }
                }
            });

            _omi2['default'].$$('textarea', this.node).forEach(function (textarea) {
                textarea.value = textarea.getAttribute('value');
            });

            _omi2['default'].$$('select', this.node).forEach(function (select) {
                var value = select.getAttribute('value');
                if (value) {
                    _omi2['default'].$$('option', select).forEach(function (option) {
                        if (value === option.getAttribute('value')) {
                            option.selected = true;
                        }
                    });
                } else {
                    var firstOption = _omi2['default'].$$('option', select)[0];
                    firstOption && (firstOption.selected = true);
                }
            });
        }
    }, {
        key: '_childrenInstalled',
        value: function _childrenInstalled(root) {
            var _this5 = this;

            root.children.forEach(function (child) {
                _this5._childrenInstalled(child);
                child._omi_needInstalled && child.installed();
                child._omi_needInstalled = false;
                child._execInstalledHandlers();
            });
        }
    }, {
        key: '_mixPlugins',
        value: function _mixPlugins() {
            var _this6 = this;

            Object.keys(_omi2['default'].plugins).forEach(function (item) {
                var nodes = _omi2['default'].$$('*[' + item + ']', _this6.node);
                nodes.forEach(function (node) {
                    if (node.hasAttribute(_this6._omi_scopedAttr)) {
                        _omi2['default'].plugins[item](node, _this6);
                    }
                });
                if (_this6.node.hasAttribute(item)) {
                    _omi2['default'].plugins[item](_this6.node, _this6);
                }
            });
        }
    }, {
        key: '_mixRefs',
        value: function _mixRefs() {
            var _this7 = this;

            this.refs = {};
            var nodes = _omi2['default'].$$('*[ref]', this.node);
            nodes.forEach(function (node) {
                if (node.hasAttribute(_this7._omi_scopedAttr)) {
                    _this7.refs[node.getAttribute('ref')] = node;
                }
            });
            var attr = this.node.getAttribute('ref');
            if (attr) {
                this.refs[attr] = this.node;
            }
        }
    }, {
        key: '_mixAttr',
        value: function _mixAttr(current) {
            current._mixRefs();
            current._mixPlugins();
            for (var i = 0, len = current.children.length; i < len; i++) {
                var child = current.children[i];
                child.node = _omi2['default'].$('[' + child._omi_scopedAttr + ']', current.node);
                if (!child.node) {
                    child._virtualDom = null;
                    current.children.splice(i, 1);
                    i--;
                    len--;
                } else {
                    child._omi_instanceIndex = i;
                    current._mixAttr(child);
                }
            }
        }
    }]);

    return Component;
}();

exports['default'] = Component;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _omi = __webpack_require__(0);

var _omi2 = _interopRequireDefault(_omi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// many thanks to https://github.com/thomaspark/scoper/
function scoper(css, prefix) {
    // https://www.w3.org/TR/css-syntax-3/#lexical
    css = css.replace(/\/\*[^*]*\*+([^/][^*]*\*+)*\//g, '');
    // eslint-disable-next-line
    var re = new RegExp('([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{}]*{)|\s*{)', 'g');
    /**
     * Example:
     *
     * .classname::pesudo { color:red }
     *
     * g1 is normal selector `.classname`
     * g2 is pesudo class or pesudo element
     * g3 is the suffix
     */
    css = css.replace(re, function (g0, g1, g2, g3) {
        if (typeof g2 === 'undefined') {
            g2 = '';
        }

        /* eslint-ignore-next-line */
        if (g1.match(/^\s*(@media|\d+%?|@-webkit-keyframes|@keyframes|to|from|@font-face)/)) {
            return g1 + g2 + g3;
        }

        var appendClass = g1.replace(/(\s*)$/, '') + prefix + g2;
        var prependClass = prefix + ' ' + g1.trim() + g2;
        return appendClass + ',' + prependClass + g3;
    });

    return css;
}

function addStyle(cssText, id) {
    var ele = document.getElementById(_omi2['default'].PREFIX + id);
    var head = document.getElementsByTagName('head')[0];
    if (ele && ele.parentNode === head) {
        head.removeChild(ele);
    }

    var someThingStyles = document.createElement('style');
    head.appendChild(someThingStyles);
    someThingStyles.setAttribute('type', 'text/css');
    someThingStyles.setAttribute('id', _omi2['default'].PREFIX + id);
    if (window.ActiveXObject) {
        someThingStyles.styleSheet.cssText = cssText;
    } else {
        someThingStyles.textContent = cssText;
    }
}

exports['default'] = {
    scoper: scoper,
    addStyle: addStyle
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(1);

function diff(a, b) {
    var patch = { a: a };
    walk(a, b, patch, 0);
    return patch;
}

function walk(a, b, patch, index) {
    var apply = patch[index];
    if (b == null) {
        apply = appendPatch(apply, { p: ['REMOVE', a, b] });
    } else if ((0, _util.isObject)(b)) {
        if ((0, _util.isObject)(a)) {
            if (a.tagName === b.tagName) {
                var propsPatch = diffProps(a.props, b.props);
                if (propsPatch) {
                    apply = appendPatch(apply, { p: ['PROPS', a, propsPatch] });
                }

                apply = diffChildren(a, b, patch, apply, index);
            } else {
                apply = appendPatch(apply, { p: ['VNODE', a, b] });
            }
        } else {
            apply = appendPatch(apply, { p: ['VNODE', a, b] });
        }
    } else if (typeof b === 'string') {
        if (typeof a !== 'string') {
            apply = appendPatch(apply, { p: ['VTEXT', a, b] });
        } else if (a !== b) {
            apply = appendPatch(apply, { p: ['VTEXT', a, b] });
        }
    }

    if (apply) {
        patch[index] = apply;
    }
}

function appendPatch(apply, patch) {
    if (apply) {
        if (Object.prototype.toString.call(apply) === '[object Array]') {
            apply.push(patch);
        } else {
            apply = [apply, patch];
        }

        return apply;
    } else {
        return patch;
    }
}

function diffChildren(a, b, patch, apply, index) {
    var aChildren = a.children;
    var orderedSet = reorder(aChildren, b.children);
    var bChildren = orderedSet.children;

    var aLen = aChildren.length;
    var bLen = bChildren.length;
    var len = aLen > bLen ? aLen : bLen;

    for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i];
        var rightNode = bChildren[i];
        index += 1;

        if (!leftNode) {
            if (rightNode) {
                // Excess nodes in b need to be added

                apply = appendPatch(apply, { p: ['INSERT', null, rightNode] });
            }
        } else {
            walk(leftNode, rightNode, patch, index);
        }

        if ((0, _util.isObject)(leftNode) && leftNode.count) {
            index += leftNode.count;
        }
    }

    if (orderedSet.moves) {
        // Reorder nodes last
        apply = appendPatch(apply, { p: ['ORDER', a, orderedSet.moves] });
    }

    return apply;
}

// List diff, naive left to right reordering
function reorder(aChildren, bChildren) {
    // O(M) time, O(M) memory
    var bChildIndex = keyIndex(bChildren);
    var bKeys = bChildIndex.keys;
    var bFree = bChildIndex.free;

    if (bFree.length === bChildren.length) {
        return {
            children: bChildren,
            moves: null
        };
    }

    // O(N) time, O(N) memory
    var aChildIndex = keyIndex(aChildren);
    var aKeys = aChildIndex.keys;
    var aFree = aChildIndex.free;

    if (aFree.length === aChildren.length) {
        return {
            children: bChildren,
            moves: null
        };
    }

    // O(MAX(N, M)) memory
    var newChildren = [];

    var freeIndex = 0;
    var freeCount = bFree.length;
    var deletedItems = 0;

    // Iterate through a and match a node in b
    // O(N) time,
    for (var i = 0; i < aChildren.length; i++) {
        var aItem = aChildren[i];
        var itemIndex;

        if (aItem.key) {
            if (bKeys.hasOwnProperty(aItem.key)) {
                // Match up the old keys
                itemIndex = bKeys[aItem.key];
                newChildren.push(bChildren[itemIndex]);
            } else {
                // Remove old keyed items
                itemIndex = i - deletedItems++;
                newChildren.push(null);
            }
        } else {
            // Match the item in a with the next free item in b
            if (freeIndex < freeCount) {
                itemIndex = bFree[freeIndex++];
                newChildren.push(bChildren[itemIndex]);
            } else {
                // There are no free items in b to match with
                // the free items in a, so the extra free nodes
                // are deleted.
                itemIndex = i - deletedItems++;
                newChildren.push(null);
            }
        }
    }

    var lastFreeIndex = freeIndex >= bFree.length ? bChildren.length : bFree[freeIndex];

    // Iterate through b and append any new keys
    // O(M) time
    for (var j = 0; j < bChildren.length; j++) {
        var newItem = bChildren[j];

        if (newItem.key) {
            if (!aKeys.hasOwnProperty(newItem.key)) {
                // Add any new keyed items
                // We are adding new items to the end and then sorting them
                // in place. In future we should insert new items in place.
                newChildren.push(newItem);
            }
        } else if (j >= lastFreeIndex) {
            // Add any leftover non-keyed items
            newChildren.push(newItem);
        }
    }

    var simulate = newChildren.slice();
    var simulateIndex = 0;
    var removes = [];
    var inserts = [];
    var simulateItem;

    for (var k = 0; k < bChildren.length;) {
        var wantedItem = bChildren[k];
        simulateItem = simulate[simulateIndex];

        // remove items
        while (simulateItem === null && simulate.length) {
            removes.push(remove(simulate, simulateIndex, null));
            simulateItem = simulate[simulateIndex];
        }

        if (!simulateItem || simulateItem.key !== wantedItem.key) {
            // if we need a key in this position...
            if (wantedItem.key) {
                if (simulateItem && simulateItem.key) {
                    // if an insert doesn't put this key in place, it needs to move
                    if (bKeys[simulateItem.key] !== k + 1) {
                        removes.push(remove(simulate, simulateIndex, simulateItem.key));
                        simulateItem = simulate[simulateIndex];
                        // if the remove didn't put the wanted item in place, we need to insert it
                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
                            inserts.push({ key: wantedItem.key, to: k });
                        } else {
                            // items are matching, so skip ahead
                            simulateIndex++;
                        }
                    } else {
                        inserts.push({ key: wantedItem.key, to: k });
                    }
                } else {
                    inserts.push({ key: wantedItem.key, to: k });
                }
                k++;
            } else if (simulateItem && simulateItem.key) {
                // a key in simulate has no matching wanted key, remove it
                removes.push(remove(simulate, simulateIndex, simulateItem.key));
            }
        } else {
            simulateIndex++;
            k++;
        }
    }

    // remove all the remaining nodes from simulate
    while (simulateIndex < simulate.length) {
        simulateItem = simulate[simulateIndex];
        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key));
    }

    // If the only moves we have are deletes then we can just
    // let the delete patch remove these items.
    if (removes.length === deletedItems && !inserts.length) {
        return {
            children: newChildren,
            moves: null
        };
    }

    return {
        children: newChildren,
        moves: {
            removes: removes,
            inserts: inserts
        }
    };
}

function remove(arr, index, key) {
    arr.splice(index, 1);

    return {
        from: index,
        key: key
    };
}

function keyIndex(children) {
    var keys = {};
    var free = [];
    var length = children.length;

    for (var i = 0; i < length; i++) {
        var child = children[i];

        if (child.key) {
            keys[child.key] = i;
        } else {
            free.push(i);
        }
    }

    return {
        keys: keys, // A hash of key name to index
        free: free // An array of unkeyed item indices
    };
}

function diffProps(a, b) {
    var diff;

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {};
            diff[aKey] = undefined;
        }

        var aValue = a[aKey];
        var bValue = b[aKey];

        if (aValue === bValue) {
            continue;
        } else if ((0, _util.isObject)(aValue) && (0, _util.isObject)(bValue)) {
            if ((0, _util.getPrototype)(bValue) !== (0, _util.getPrototype)(aValue)) {
                diff = diff || {};
                diff[aKey] = bValue;
            } else {
                var objectDiff = diffProps(aValue, bValue);
                if (objectDiff) {
                    diff = diff || {};
                    diff[aKey] = objectDiff;
                }
            }
        } else {
            diff = diff || {};
            diff[aKey] = bValue;
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {};
            diff[bKey] = b[bKey];
        }
    }

    return diff;
}

exports['default'] = diff;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createElement = __webpack_require__(2);

var _createElement2 = _interopRequireDefault(_createElement);

var _applyProperties = __webpack_require__(3);

var _applyProperties2 = _interopRequireDefault(_applyProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

var noChild = {};

function domIndex(rootNode, tree, indices, nodes) {
    if (!indices || indices.length === 0) {
        return {};
    } else {
        indices.sort(ascending);
        return recurse(rootNode, tree, indices, nodes, 0);
    }
}

function recurse(rootNode, tree, indices, nodes, rootIndex) {
    nodes = nodes || {};

    if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode;
        }

        var vChildren = tree.children;

        if (vChildren) {
            var childNodes = rootNode.childNodes;

            for (var i = 0; i < tree.children.length; i++) {
                rootIndex += 1;

                var vChild = vChildren[i] || noChild;
                var nextIndex = rootIndex + (vChild.count || 0);

                // skip recursion down the tree if there are no nodes down here
                if (indexInRange(indices, rootIndex, nextIndex)) {
                    recurse(childNodes[i], vChild, indices, nodes, rootIndex);
                }

                rootIndex = nextIndex;
            }
        }
    }

    return nodes;
}

// Binary search for an index in the interval [left, right]
function indexInRange(indices, left, right) {
    if (indices.length === 0) {
        return false;
    }

    var minIndex = 0;
    var maxIndex = indices.length - 1;
    var currentIndex;
    var currentItem;

    while (minIndex <= maxIndex) {
        currentIndex = (maxIndex + minIndex) / 2 >> 0;
        currentItem = indices[currentIndex];

        if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right;
        } else if (currentItem < left) {
            minIndex = currentIndex + 1;
        } else if (currentItem > right) {
            maxIndex = currentIndex - 1;
        } else {
            return true;
        }
    }

    return false;
}

function ascending(a, b) {
    return a > b ? 1 : -1;
}

function VPatch(type, vNode, patch) {
    this.type = Number(type);
    this.vNode = vNode;
    this.patch = patch;
}

VPatch.NONE = 0;
VPatch.VTEXT = 1;
VPatch.VNODE = 2;

VPatch.PROPS = 4;
VPatch.ORDER = 5;
VPatch.INSERT = 6;
VPatch.REMOVE = 7;

function patchOp(vpatch, domNode, renderOptions) {
    var type = vpatch.p[0];
    var vNode = vpatch.p[1];
    var patch = vpatch.p[2];

    switch (type) {
        case 'REMOVE':
            return removeNode(domNode, vNode);
        case 'INSERT':
            return insertNode(domNode, patch, renderOptions);
        case 'VTEXT':

            return stringPatch(domNode, vNode, patch, renderOptions);

        case 'VNODE':
            return vNodePatch(domNode, vNode, patch, renderOptions);
        case 'ORDER':
            reorderChildren(domNode, patch);
            return domNode;
        case 'PROPS':
            (0, _applyProperties2['default'])(domNode, patch, vNode.props);
            return domNode;
        default:
            return domNode;
    }
}

function removeNode(domNode, vNode) {
    var parentNode = domNode.parentNode;

    if (parentNode) {
        parentNode.removeChild(domNode);
    }

    return null;
}

function insertNode(parentNode, vNode, renderOptions) {
    var newNode = renderOptions.render(vNode, renderOptions);

    if (parentNode) {
        parentNode.appendChild(newNode);
    }

    return parentNode;
}

function stringPatch(domNode, leftVNode, vText, renderOptions) {
    var newNode;

    if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText);
        newNode = domNode;
    } else {
        var parentNode = domNode.parentNode;

        newNode = renderOptions.render(vText, renderOptions);

        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode);
        }
    }

    return newNode;
}

function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
    var parentNode = domNode.parentNode;
    var newNode = renderOptions.render(vNode, renderOptions);

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode);
    }

    return newNode;
}

function reorderChildren(domNode, moves) {
    var childNodes = domNode.childNodes;
    var keyMap = {};
    var node;
    var remove;
    var insert;

    for (var i = 0; i < moves.removes.length; i++) {
        remove = moves.removes[i];
        node = childNodes[remove.from];
        if (remove.key) {
            keyMap[remove.key] = node;
        }
        domNode.removeChild(node);
    }

    var length = childNodes.length;
    for (var j = 0; j < moves.inserts.length; j++) {
        insert = moves.inserts[j];
        node = keyMap[insert.key];
        // this is the weirdest bug i've ever seen in webkit
        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to]);
    }
}

function patch(rootNode, patches, renderOptions) {
    renderOptions = renderOptions || {};
    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch ? renderOptions.patch : patchRecursive;
    renderOptions.render = renderOptions.render || _createElement2['default'];

    return renderOptions.patch(rootNode, patches, renderOptions);
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches);

    if (indices.length === 0) {
        return rootNode;
    }

    var nodes = domIndex(rootNode, patches.a, indices);

    var ownerDocument = rootNode.ownerDocument;

    if (!renderOptions.document && ownerDocument !== document) {
        renderOptions.document = ownerDocument;
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i];

        rootNode = applyPatch(rootNode, nodes[nodeIndex], patches[nodeIndex], renderOptions);
    }

    return rootNode;
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode;
    }

    var newNode;

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions);

            if (domNode === rootNode) {
                rootNode = newNode;
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions);

        if (domNode === rootNode) {
            rootNode = newNode;
        }
    }

    return rootNode;
}

function patchIndices(patches) {
    var indices = [];

    for (var key in patches) {
        if (key !== 'a') {
            indices.push(Number(key));
        }
    }

    return indices;
}

exports['default'] = patch;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _todoList = __webpack_require__(12);

var _todoList2 = _interopRequireDefault(_todoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_Omi$Component) {
    _inherits(TodoApp, _Omi$Component);

    function TodoApp(data) {
        _classCallCheck(this, TodoApp);

        var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, data));

        _this.undo = _this.undo.bind(_this);
        _this.redo = _this.redo.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);

        return _this;
    }

    _createClass(TodoApp, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var text = this.$store.text;
            this.$store.text = '';
            this.$store.add(text);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            this.$store.text = e.target.value;
        }
    }, {
        key: 'undo',
        value: function undo() {
            this.$store.undo();
        }
    }, {
        key: 'redo',
        value: function redo() {
            this.$store.redo();
        }
    }, {
        key: 'render',
        value: function render() {
            return Omi.x(
                'div',
                null,
                Omi.x(
                    'h3',
                    null,
                    'TODO ',
                    Omi.x(
                        'button',
                        { onClick: this.undo },
                        'Undo'
                    ),
                    Omi.x(
                        'button',
                        { onClick: this.redo },
                        'Redo'
                    )
                ),
                Omi.x(_todoList2['default'], null),
                Omi.x(
                    'form',
                    { onSubmit: this.handleSubmit },
                    Omi.x('input', { onChange: this.handleChange, value: this.$store.text }),
                    Omi.x(
                        'button',
                        null,
                        'Add #' + this.$store.items.length
                    )
                )
            );
        }
    }]);

    return TodoApp;
}(Omi.Component);

exports['default'] = TodoApp;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoList = function (_Omi$Component) {
    _inherits(TodoList, _Omi$Component);

    function TodoList() {
        _classCallCheck(this, TodoList);

        return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
    }

    _createClass(TodoList, [{
        key: "removeItem",
        value: function removeItem(id) {
            this.$store.remove(id);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return Omi.x(
                "ul",
                null,
                this.$store.items.map(function (item) {
                    return Omi.x(
                        "li",
                        { "data-id": item.id },
                        item.text,
                        " ",
                        Omi.x(
                            "button",
                            { onClick: function onClick(id) {
                                    _this2.removeItem(item.id);
                                } },
                            "Delete"
                        )
                    );
                })
            );
        }
    }]);

    return TodoList;
}(Omi.Component);

exports["default"] = TodoList;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
    function Store(data, callbacks) {
        _classCallCheck(this, Store);

        this.items = data.items;
        this.text = data.text;
        var noop = function noop() {};
        this.onAdd = callbacks.add || noop;
        this.onRemove = callbacks.remove || noop;
        this.onAddItems = callbacks.addItems || noop;
        this.onChangeText = callbacks.changeText || noop;
        this.onUndo = callbacks.undo || noop;
        this.onRedo = callbacks.redo || noop;
        this.actionLog = [];
        this.actionUndoLog = [];
        this.actionRedoLog = [];
        this.actionIndex = 0;
    }

    _createClass(Store, [{
        key: 'add',
        value: function add(text, cmd, redo) {

            var item = { id: this.items.length + 1, text: text };
            this.items.push(item);
            this.onAdd(text);

            if (!cmd) {
                this.actionLog.push({
                    action: 'add',
                    args: [text]
                });
                this.actionUndoLog.push({
                    action: 'remove',
                    args: [item.id]
                });
                this.actionIndex++;
                if (!redo) {
                    this.actionRedoLog.length = 0;
                }
            }
        }
    }, {
        key: 'remove',
        value: function remove(id, cmd, redo) {
            var item = void 0,
                index = void 0;
            for (var i = 0, len = this.items.length; i < len; i++) {
                if (this.items[i].id === id) {
                    item = this.items[i];
                    index = i;
                    this.items.splice(i, 1);
                    break;
                }
            }

            this.onRemove(id);

            if (!cmd) {

                this.actionLog.push({
                    action: 'remove',
                    args: [id]
                });

                this.actionUndoLog.push({
                    action: 'add',
                    args: [item.text, index]
                });

                this.actionIndex++;
                if (!redo) {
                    this.actionRedoLog.length = 0;
                }
            }
        }
    }, {
        key: 'undo',
        value: function undo() {

            if (this.actionIndex > 0) {
                this.actionIndex--;
                var log = this.actionUndoLog.pop();
                if (log) {
                    this[log.action].apply(this, [].concat(_toConsumableArray(log.args), [true]));
                    this.actionRedoLog.push(this.actionLog.pop());
                }
            }
        }
    }, {
        key: 'redo',
        value: function redo() {
            var log = this.actionRedoLog.pop();
            if (log) {
                this[log.action].apply(this, [].concat(_toConsumableArray(log.args), [false, true]));
                this.actionIndex++;
            }
        }
    }]);

    return Store;
}();

exports['default'] = Store;

/***/ })
/******/ ]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(1);

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(data) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, data));

        _this.touchChange = _this.touchChange.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'touchChange',
        value: function touchChange(value) {
            console.log(this);
            console.log(value);
        }
    }, {
        key: 'render',
        value: function render() {
            return Omi.h(
                'div',
                { 'class': 'main' },
                Omi.h(
                    _index2.default,
                    { min: -1750, max: 0, change: this.touchChange },
                    Omi.h(
                        'div',
                        { 'class': 'touchArea' },
                        Omi.h(
                            'ul',
                            null,
                            Omi.h(
                                'li',
                                null,
                                'Hello, Omi-Touch!'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'AlloyTouch'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'Omix'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'AlloyFinger'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'Omi'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'AlloyGameEngine'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'css3transform'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'AlloyRender'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'AlloyStick'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'CodeStar'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'AlloyDesigner'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'JX'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'TEditor'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'JXAnimate'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'Spirit'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'AlloyImage'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'ModJS'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'Pretty row 16'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'stepify'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'AlloyTimer'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'Alloy Desktop'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'JX UI'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'CodeTank'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'iSpriter'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'Rythem'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'Go!Png '
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 1'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 2'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 3'
                            ),
                            Omi.h(
                                'li',
                                null,
                                'row 5'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 5'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 7'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 8'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 9'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 11'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 11'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 12'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 13'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 14'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 15'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 16'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 17'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 18'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 19'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 20'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 21'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 22'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 23'
                            ),
                            Omi.h(
                                'li',
                                null,
                                ' row 24'
                            ),
                            Omi.h(
                                'li',
                                { style: 'border-bottom: none;' },
                                ' row 25'
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'style',
        value: function style() {
            return '\n        *{\n            box-sizing: border-box;\n        }\n\n        .main{\n            width: 160px;\n            overflow: hidden;\n            border: 1px solid rgb(204, 204, 204);\n            text-indent: 10px;\n            margin: 0 auto;\n        }\n\n\n        .main ul {\n            list-style: none;\n            padding: 0;\n            margin: 0;\n            width: 100%;\n            text-align: left;\n            font-size: 14px;\n            transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n        }\n\n        .main li {\n            padding: 0 10px;\n            height: 40px;\n            line-height: 40px;\n            border-bottom: 1px solid #ccc;\n            border-top: 1px solid #fff;\n            background-color: #fafafa;\n            font-size: 14px;\n        }\n\n        .touchArea{\n            height: 250px;\n            overflow: hidden;\n        }';
        }
    }]);

    return App;
}(_omi.Component);

(0, _omi.render)(Omi.h(App, null), "#container");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function () {
    'use strict';

    function VNode() {}
    function h(nodeName, attributes) {
        var lastSimple,
            child,
            simple,
            i,
            children = EMPTY_CHILDREN;
        for (i = arguments.length; i-- > 2;) {
            stack.push(arguments[i]);
        }if (attributes && null != attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) {
            if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--;) {
                stack.push(child[i]);
            } else {
                if ('boolean' == typeof child) child = null;
                if (simple = 'function' != typeof nodeName) if (null == child) child = '';else if ('number' == typeof child) child = String(child);else if ('string' != typeof child) simple = !1;
                if (simple && lastSimple) children[children.length - 1] += child;else if (children === EMPTY_CHILDREN) children = [child];else children.push(child);
                lastSimple = simple;
            }
        }var p = new VNode();
        p.nodeName = isH5 ? nodeName : map[nodeName];
        p.attributes = null == attributes ? void 0 : attributes;
        if (children && 'string' == typeof children[0] && !isH5) {
            if (p.attributes) p.attributes.value = children[0];else p.attributes = {
                value: children[0]
            };
        } else p.children = children;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        for (var i in props) {
            obj[i] = props[i];
        }return obj;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function enqueueRender(component) {
        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
    }
    function rerender() {
        var p,
            list = items;
        items = [];
        var element;
        while (p = list.pop()) {
            element = p.base;
            if (p.__d) renderComponent(p);
        }
        if (!list.length) if (options.componentChange) options.componentChange(p, element);
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName);else return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
    }
    function getNodeProps(vnode) {
        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) {
            if (void 0 === props[i]) props[i] = defaultProps[i];
        }return props;
    }
    function createNode(nodeName, isSvg) {
        var node = isSvg ? options.doc.createElementNS('http://www.w3.org/2000/svg', nodeName) : options.doc.createElement(nodeName);
        node.__n = nodeName;
        return node;
    }
    function parseCSSText(cssText) {
        var cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, " ").replace(/\s+/g, " ");
        var style = {},
            _ref = cssTxt.match(/ ?(.*?) ?{([^}]*)}/) || [a, b, cssTxt],
            a = _ref[0],
            b = _ref[1],
            rule = _ref[2];
        var properties = rule.split(";").map(function (o) {
            return o.split(":").map(function (x) {
                return x && x.trim();
            });
        });
        for (var i = properties, i = Array.isArray(i), i = 0, i = i ? i : i[Symbol.iterator]();;) {
            var _ref3;
            if (i) {
                if (i >= i.length) break;
                _ref3 = i[i++];
            } else {
                i = i.next();
                if (i.done) break;
                _ref3 = i.value;
            }
            var _ref2 = _ref3;
            var property = _ref2[0];
            var value = _ref2[1];
            style[function (s) {
                return s.replace(/\W+\w/g, function (match) {
                    return match.slice(-1).toUpperCase();
                });
            }(property)] = value;
        }
        return style;
    }
    function removeNode(node) {
        var parentNode = node.parentNode;
        if (parentNode) parentNode.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('key' === name) ;else if ('ref' === name) {
            if (old) old(null);
            if (value) value(node);
        } else if ('class' === name && !isSvg) node.className = value || '';else if ('style' === name) {
            if (isH5$1) {
                if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
                if (value && 'object' == (typeof value === 'undefined' ? 'undefined' : _typeof(value))) {
                    if ('string' != typeof old) for (var i in old) {
                        if (!(i in value)) node.style[i] = '';
                    }for (var i in value) {
                        node.style[i] = 'number' == typeof value[i] && !1 === IS_NON_DIMENSIONAL.test(i) ? value[i] + 'px' : value[i];
                    }
                }
            } else {
                var oldJson = old,
                    currentJson = value;
                if ('string' == typeof old) oldJson = parseCSSText(old);
                if ('string' == typeof value) currentJson = parseCSSText(value);
                var result = {},
                    changed = !1;
                if (oldJson) {
                    for (var key in oldJson) {
                        if ('object' == (typeof currentJson === 'undefined' ? 'undefined' : _typeof(currentJson)) && !(key in currentJson)) {
                            result[key] = '';
                            changed = !0;
                        }
                    }for (var ckey in currentJson) {
                        if (currentJson[ckey] !== oldJson[ckey]) {
                            result[ckey] = currentJson[ckey];
                            changed = !0;
                        }
                    }if (changed) node.setStyles(result);
                } else node.setStyles(currentJson);
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var useCapture = name !== (name = name.replace(/Capture$/, ''));
            name = name.toLowerCase().substring(2);
            if (value) {
                if (!old) node.addEventListener(name, eventProxy, useCapture);
            } else node.removeEventListener(name, eventProxy, useCapture);
            (node.__l || (node.__l = {}))[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || !1 === value) node.removeAttribute(name);
        } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
            if (null == value || !1 === value) {
                if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
            } else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this.__l[e.type](options.event && options.event(e) || e);
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
            if (c.installed) c.installed();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
            hydrating = null != dom && !('__preactattr_' in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (! --diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll, componentRoot) {
        var out = dom,
            prevSvgMode = isSvgMode;
        if (null == vnode || 'boolean' == typeof vnode) vnode = '';
        if ('string' == typeof vnode || 'number' == typeof vnode) {
            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                out = document.createTextNode(vnode);
                if (dom) {
                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                    recollectNodeTree(dom, !0);
                }
            }
            out.t = !0;
            return out;
        }
        var vnodeName = vnode.nodeName;
        if ('function' == typeof vnodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);
        isSvgMode = 'svg' === vnodeName ? !0 : 'foreignObject' === vnodeName ? !1 : isSvgMode;
        vnodeName = String(vnodeName);
        if (!dom || !isNamedNode(dom, vnodeName)) {
            out = createNode(vnodeName, isSvgMode);
            if (dom) {
                while (dom.firstChild) {
                    out.appendChild(dom.firstChild);
                }if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                recollectNodeTree(dom, !0);
            }
        }
        var fc = out.firstChild,
            props = out.t,
            vchildren = vnode.children;
        if (null == props) {
            props = out.t = {};
            for (var a = out.attributes, i = a.length; i--;) {
                props[a[i].name] = a[i].value;
            }
        }
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
        var j,
            c,
            f,
            vchild,
            child,
            originalChildren = dom.childNodes,
            children = [],
            keyed = {},
            keyedLen = 0,
            min = 0,
            len = originalChildren.length,
            childrenLen = 0,
            vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i],
                props = _child.t,
                key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
        }
        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && void 0 !== keyed[key]) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) {
                if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
                    child = c;
                    children[j] = void 0;
                    if (j === childrenLen - 1) childrenLen--;
                    if (j === min) min++;
                    break;
                }
            }child = idiff(child, vchild, context, mountAll);
            f = originalChildren[i];
            if (child && child !== dom && child !== f) if (null == f) dom.appendChild(child);else if (child === f.nextSibling) removeNode(f);else dom.insertBefore(child, f);
        }
        if (keyedLen) for (var i in keyed) {
            if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        }while (min <= childrenLen) {
            if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
        }
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component);else {
            if (null != node.t && node.t.ref) node.t.ref(null);
            if (!1 === unmountOnly || null == node.t) removeNode(node);
            removeChildren(node);
        }
    }
    function removeChildren(node) {
        node = node.lastChild;
        while (node) {
            var next = node.previousSibling;
            recollectNodeTree(node, !0);
            node = next;
        }
    }
    function diffAttributes(dom, attrs, old) {
        var name;
        for (name in old) {
            if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        }for (name in attrs) {
            if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
        }
    }
    function collectComponent(component) {
        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
    }
    function createComponent(Ctor, props, context) {
        var inst,
            list = components[Ctor.name];
        if (Ctor.prototype && Ctor.prototype.render) {
            inst = new Ctor(props, context);
            Component.call(inst, props, context);
        } else {
            inst = new Component(props, context);
            inst.constructor = Ctor;
            inst.render = doRender;
        }
        inst.$store = options.$store;
        if (window && window.Omi) window.Omi.instances.push(inst);
        if (list) for (var i = list.length; i--;) {
            if (list[i].constructor === Ctor) {
                inst.__b = list[i].__b;
                list.splice(i, 1);
                break;
            }
        }return inst;
    }
    function doRender(props, state, context) {
        return this.constructor(props, context);
    }
    function scoper(css, prefix) {
        prefix = '[' + prefix.toLowerCase() + ']';
        css = css.replace(/\/\*[^*]*\*+([^\/][^*]*\*+)*\//g, '');
        var re = new RegExp('([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{}]*{)|s*{)', 'g');
        css = css.replace(re, function (g0, g1, g2, g3) {
            if (void 0 === g2) g2 = '';
            if (g1.match(/^\s*(@media|\d+%?|@-webkit-keyframes|@keyframes|to|from|@font-face)/)) return g1 + g2 + g3;
            var appendClass = g1.replace(/(\s*)$/, '') + prefix + g2;
            var prependClass = prefix + ' ' + g1.trim() + g2;
            return appendClass + ',' + prependClass + g3;
        });
        return css;
    }
    function addStyle(cssText, id) {
        id = id.toLowerCase();
        var ele = document.getElementById(id);
        var head = document.getElementsByTagName('head')[0];
        if (ele && ele.parentNode === head) head.removeChild(ele);
        var someThingStyles = document.createElement('style');
        head.appendChild(someThingStyles);
        someThingStyles.setAttribute('type', 'text/css');
        someThingStyles.setAttribute('id', id);
        if (window.ActiveXObject) someThingStyles.styleSheet.cssText = cssText;else someThingStyles.textContent = cssText;
    }
    function addStyleWithoutId(cssText) {
        var head = document.getElementsByTagName('head')[0];
        var someThingStyles = document.createElement('style');
        head.appendChild(someThingStyles);
        someThingStyles.setAttribute('type', 'text/css');
        if (window.ActiveXObject) someThingStyles.styleSheet.cssText = cssText;else someThingStyles.textContent = cssText;
    }
    function addScopedAttr(vdom, style, attr, component) {
        if (options.scopedStyle) {
            scopeVdom(attr, vdom);
            style = scoper(style, attr);
            if (style !== component.r) addStyle(style, attr);
        } else if (style !== component.r) addStyleWithoutId(style);
        component.r = style;
    }
    function addScopedAttrStatic(vdom, style, attr, firstTime) {
        if (options.scopedStyle) {
            scopeVdom(attr, vdom);
            if (firstTime) addStyle(scoper(style, attr), attr);
        } else if (firstTime) addStyleWithoutId(style);
    }
    function scopeVdom(attr, vdom) {
        if ('string' != typeof vdom) {
            vdom.attributes = vdom.attributes || {};
            vdom.attributes[attr] = '';
            vdom.children.forEach(function (child) {
                return scopeVdom(attr, child);
            });
        }
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component.__x) {
            component.__x = !0;
            if (component.__r = props.ref) delete props.ref;
            if (component.__k = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
                if (component.install) component.install();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.__c) component.__c = component.context;
                component.context = context;
            }
            if (!component.__p) component.__p = component.props;
            component.props = props;
            component.__x = !1;
            if (0 !== opts) if (1 === opts || !1 !== options.syncComponentUpdates || !component.base) renderComponent(component, 1, mountAll);else enqueueRender(component);
            if (component.__r) component.__r(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component.__x) {
            var rendered,
                inst,
                cbase,
                props = component.props,
                state = component.state,
                context = component.context,
                previousProps = component.__p || props,
                previousState = component.__s || state,
                previousContext = component.__c || context,
                isUpdate = component.base,
                nextBase = component.__b,
                initialBase = isUpdate || nextBase,
                initialChildComponent = component._component,
                skip = !1;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && !1 === component.shouldComponentUpdate(props, state, context)) skip = !0;else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);else if (component.beforeUpdate) component.beforeUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.__p = component.__s = component.__c = component.__b = null;
            component.__d = !1;
            if (!skip) {
                rendered = component.render(props, state, context);
                if (component.style) addScopedAttr(rendered, component.style(), '_style_' + component.s, component);
                if (component.staticStyle) addScopedAttrStatic(rendered, component.staticStyle(), '_style_' + component.constructor.name, !component.base);
                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
                var toUnmount,
                    base,
                    childComponent = rendered && rendered.nodeName;
                if ('function' == typeof childComponent) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1);else {
                        toUnmount = inst;
                        component._component = inst = createComponent(childComponent, childProps, context);
                        inst.__b = inst.__b || nextBase;
                        inst.__u = component;
                        setComponentProps(inst, childProps, 0, context, !1);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) {
                        baseParent.replaceChild(base, initialBase);
                        if (!toUnmount) {
                            initialBase._component = null;
                            recollectNodeTree(initialBase, !1);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component,
                        t = component;
                    while (t = t.__u) {
                        (componentRef = t).base = base;
                    }base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component);else if (!skip) {
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (component.afterUpdate) component.afterUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            if (null != component.__h) while (component.__h.length) {
                component.__h.pop().call(component);
            }if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component,
            originalComponent = c,
            oldDom = dom,
            isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
            isOwner = isDirectOwner,
            props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) {
            isOwner = c.constructor === vnode.nodeName;
        }if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.__b) {
                c.__b = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom, !1);
            }
        }
        return dom;
    }
    function unmountComponent(component) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component.__x = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        if (component.uninstall) component.uninstall();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner);else if (base) {
            if (base.t && base.t.ref) base.t.ref(null);
            component.__b = base;
            removeNode(base);
            collectComponent(component);
            removeChildren(base);
        }
        if (component.__r) component.__r(null);
    }
    function getId() {
        return id++;
    }
    function Component(props, context) {
        this.__d = !0;
        this.context = context;
        this.props = props;
        this.state = this.state || {};
        this.s = getId();
        this.r = null;
        this.$store = null;
    }
    function isElement(obj) {
        try {
            return obj instanceof HTMLElement;
        } catch (e) {
            return "object" == (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) && 1 === obj.nodeType && "object" == _typeof(obj.style) && "object" == _typeof(obj.ownerDocument);
        }
    }
    function render(vnode, parent, merge) {
        parent = 'string' == typeof parent ? document.querySelector(parent) : parent;
        if (!0 === merge) while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }var m = isElement(merge) || void 0 === merge;
        if (vnode instanceof Component) {
            if (window && window.Omi) window.Omi.instances.push(vnode);
            if (vnode.componentWillMount) vnode.componentWillMount();
            if (vnode.install) vnode.install();
            var rendered = vnode.render();
            if (vnode.style) addScopedAttr(rendered, vnode.style(), '_style_' + vnode.s, vnode);
            if (vnode.staticStyle) addScopedAttrStatic(rendered, vnode.staticStyle(), '_style_' + vnode.constructor.name, !vnode.base);
            if (m) vnode.base = diff(merge, rendered, {}, !1, parent, !1);else {
                vnode.$store = options.$store = merge;
                vnode.base = diff(void 0, rendered, {}, !1, parent, !1);
            }
            if (vnode.componentDidMount) vnode.componentDidMount();
            if (vnode.installed) vnode.installed();
            return vnode.base;
        }
        return diff(merge, vnode, {}, !1, parent, !1);
    }
    var options = {
        scopedStyle: !0,
        $store: null,
        isWeb: !0,
        doc: 'object' == (typeof document === 'undefined' ? 'undefined' : _typeof(document)) ? document : null
    };
    var stack = [];
    var EMPTY_CHILDREN = [];
    var isH5 = options.isWeb;
    var map = {
        br: 'view',
        hr: 'view',
        p: 'view',
        h1: 'view',
        h2: 'view',
        h3: 'view',
        h4: 'view',
        h5: 'view',
        h6: 'view',
        abbr: 'view',
        address: 'view',
        b: 'view',
        bdi: 'view',
        bdo: 'view',
        blockquote: 'view',
        cite: 'view',
        code: 'view',
        del: 'view',
        ins: 'view',
        dfn: 'view',
        em: 'view',
        strong: 'view',
        samp: 'view',
        kbd: 'view',
        var: 'view',
        i: 'view',
        mark: 'view',
        pre: 'view',
        q: 'view',
        ruby: 'view',
        rp: 'view',
        rt: 'view',
        s: 'view',
        small: 'view',
        sub: 'view',
        sup: 'view',
        time: 'view',
        u: 'view',
        wbr: 'view',
        form: 'form',
        input: 'input',
        textarea: 'textarea',
        button: 'button',
        select: 'picker',
        option: 'view',
        optgroup: 'view',
        label: 'label',
        fieldset: 'view',
        datalist: 'picker',
        legend: 'view',
        output: 'view',
        iframe: 'view',
        img: 'image',
        canvas: 'canvas',
        figure: 'view',
        figcaption: 'view',
        audio: 'audio',
        source: 'audio',
        video: 'video',
        track: 'video',
        a: 'navigator',
        nav: 'view',
        link: 'navigator',
        ul: 'view',
        ol: 'view',
        li: 'view',
        dl: 'view',
        dt: 'view',
        dd: 'view',
        menu: 'view',
        command: 'view',
        table: 'view',
        caption: 'view',
        th: 'view',
        td: 'view',
        tr: 'view',
        thead: 'view',
        tbody: 'view',
        tfoot: 'view',
        col: 'view',
        colgroup: 'view',
        div: 'view',
        main: 'view',
        span: 'text',
        header: 'view',
        footer: 'view',
        section: 'view',
        article: 'view',
        aside: 'view',
        details: 'view',
        dialog: 'view',
        summary: 'view',
        progress: 'progress',
        meter: 'progress',
        head: 'view',
        meta: 'view',
        base: 'text',
        map: 'map',
        area: 'navigator',
        script: 'view',
        noscript: 'view',
        embed: 'view',
        object: 'view',
        param: 'view',
        view: 'view',
        'scroll-view': 'scroll-view',
        swiper: 'swiper',
        icon: 'icon',
        text: 'text',
        checkbox: 'checkbox',
        radio: 'radio',
        picker: 'picker',
        'picker-view': 'picker-view',
        slider: 'slider',
        switch: 'switch',
        navigator: 'navigator',
        image: 'image',
        'contact-button': 'contact-button',
        block: 'block'
    };
    var usePromise = 'function' == typeof Promise;
    if ('object' != (typeof document === 'undefined' ? 'undefined' : _typeof(document)) && 'undefined' != typeof global && global.v) if ('android' === global.v.platform) usePromise = !0;else {
        var systemVersion = global.v.systemVersion && global.v.systemVersion.split('.')[0] || 0;
        if (systemVersion > 8) usePromise = !0;
    }
    var defer = usePromise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var items = [];
    var isH5$1 = options.isWeb;
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    var id = 0;
    extend(Component.prototype, {
        setState: function setState(state, callback) {
            var s = this.state;
            if (!this.__s) this.__s = extend({}, s);
            extend(s, 'function' == typeof state ? state(s, this.props) : state);
            if (callback) (this.__h = this.__h || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function forceUpdate(callback) {
            if (callback) (this.__h = this.__h || []).push(callback);
            renderComponent(this, 2);
            if (options.componentChange) options.componentChange(this, this.base);
        },
        update: function update(callback) {
            this.forceUpdate(callback);
        },
        render: function render() {}
    });
    var instances = [];
    var root = function () {
        if ('object' != (typeof global === 'undefined' ? 'undefined' : _typeof(global)) || !global || global.Math !== Math || global.Array !== Array) {
            if ('undefined' != typeof self) return self;else if ('undefined' != typeof window) return window;else if ('undefined' != typeof global) return global;
            return function () {
                return this;
            }();
        }
        return global;
    }();
    root.Omi = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options,
        instances: instances
    };
    var Omi = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options,
        instances: instances
    };
    if (true) module.exports = Omi;else self.Omi = Omi;
}();
//# sourceMappingURL=omi.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 *  omi-touch v0.2.1 by dntzhang
 *  AlloyTouch / Omi integration. Smooth scrolling, rotation, pull to refresh, page transition and any motion for your Omi project.
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */

;(function () {
    if (typeof Omi === 'undefined') return;

    var OmiTouch = {};
    var AlloyTouch =  true ? __webpack_require__(4) : window.AlloyTouch;
    var Transform =  true ? __webpack_require__(5) : window.Transform;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var OmiTouch = function (_Component) {
        _inherits(OmiTouch, _Component);

        function OmiTouch() {
            _classCallCheck(this, OmiTouch);

            return _possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        OmiTouch.prototype.render = function () {
            return this.props.children[0];
        };

        OmiTouch.prototype.installed = function () {
            console.log(this.base);

            var target = this.base.firstChild;

            Transform(target);

            var alloyTouch = new AlloyTouch({
                touch: this.base,
                vertical: this.props.vertical === false ? false : true,
                target: target,
                property: this.props.property || "translateY",
                min: this.props.min,
                max: this.props.max,
                sensitivity: this.props.sensitivity,
                factor: this.props.factor,
                step: this.props.step,
                bindSelf: this.props.bindSelf,
                preventDefault: this.props.preventDefault === false ? false : true,
                change: this.props.change,
                touchStart: this.props.touchStart,
                touchMove: this.props.touchMove,
                touchEnd: this.props.touchEnd,
                tap: this.props.tap,
                pressMove: this.props.pressMove,
                animationEnd: this.props.animationEnd

            });
        };

        return OmiTouch;
    }(Omi.Component);

    // var noop = function(){

    // };

    // var getHandler = function(name, dom, instance) {
    //     var value = dom.getAttribute(name);
    //     if (value === null) {
    //         return noop;
    //     }else{
    //         return instance[value].bind(instance);
    //     }
    // };

    // var getNum = function(name, dom){
    //     var value = dom.getAttribute(name);
    //     if(value){
    //         return parseFloat(value);
    //     }
    // }


    // Omi.extendPlugin('omi-touch',function(dom, instance){
    //     if(dom.alloyTouch) return;
    //     var target = instance.refs[ dom.getAttribute('motionRef')];
    //     Transform(target);
    //     var initialValue = dom.getAttribute('initialValue');
    //     if(initialValue){
    //         target[dom.getAttribute('property') || "translateY"] = parseInt(initialValue);
    //     }

    //     var alloyTouch = new AlloyTouch({
    //         touch: dom,//����������dom
    //         vertical: dom.getAttribute('vertical') === 'false' ? false : true,//�����裬Ĭ����true���������ֱ����touch
    //         target: target, //�˶��Ķ���
    //         property: dom.getAttribute('property') || "translateY",  //���˶�������
    //         min:  getNum('min', dom), //������,�˶����Ե���Сֵ
    //         max:  getNum('max', dom), //������,�������Ե����ֵ
    //         sensitivity: getNum('sensitivity', dom) ,//������,�������������ȣ�Ĭ��ֵΪ1������Ϊ����
    //         factor: getNum('factor', dom) ,//������,��ʾ����λ���뱻�˶�����ӳ���ϵ��Ĭ��ֵ��1
    //         step: getNum('step', dom),//����У����step��������
    //         bindSelf: dom.getAttribute('bindSelf') === 'true' ? true : false,
    //         change: getHandler('change', dom, instance),
    //         touchStart: getHandler('touchStart', dom, instance),
    //         touchMove: getHandler('touchMove', dom, instance),
    //         touchEnd: getHandler('touchEnd', dom, instance),
    //         tap: getHandler('tap', dom, instance),
    //         pressMove: getHandler('pressMove', dom, instance),
    //         animationEnd: getHandler('animationEnd', dom, instance),
    //         preventDefault: dom.getAttribute('preventDefault') === 'false' ? false : true
    //     })

    //     dom.alloyTouch = alloyTouch
    // });


    if (( false ? 'undefined' : _typeof(exports)) == "object") {
        module.exports = OmiTouch;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return OmiTouch;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        window.OmiTouch = OmiTouch;
    }
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* AlloyTouch CSS v0.2.5
 * By AlloyTeam http://www.alloyteam.com/
 * Github: https://github.com/AlloyTeam/AlloyTouch
 * MIT Licensed.
 */
;(function () {
    'use strict';

    if (!Date.now) Date.now = function () {
        return new Date().getTime();
    };

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
    || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function (callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function () {
                callback(lastTime = nextTime);
            }, nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
})();

;(function () {

    var _elementStyle = document.createElement('div').style,
        endTransitionEventName,
        transitionDuration,
        transitionTimingFunction,
        transform;

    if ('transform' in _elementStyle) {
        transform = 'transform';
        endTransitionEventName = 'transitionend';
        transitionDuration = 'transitionDuration';
        transitionTimingFunction = 'transitionTimingFunction';
    } else if ('webkitTransform' in _elementStyle) {
        transform = 'webkitTransform';
        endTransitionEventName = 'webkitTransitionEnd';
        transitionDuration = 'webkitTransitionDuration';
        transitionTimingFunction = 'webkitTransitionTimingFunction';
    } else {
        throw 'please use a modern browser';
    }

    var ease = 'cubic-bezier(0.1, 0.57, 0.1, 1)';

    function reverseEase(y) {
        return 1 - Math.sqrt(1 - y * y);
    }

    function bind(element, type, callback) {
        element.addEventListener(type, callback, false);
    }

    function unbind(element, type, callback) {
        element.removeEventListener(type, callback);
    }

    function preventDefaultTest(el, exceptions) {
        for (var i in exceptions) {
            if (exceptions[i].test(el[i])) {
                return true;
            }
        }
        return false;
    }

    var AlloyTouch = function AlloyTouch(option) {
        this.scroller = option.target;
        this.element = typeof option.touch === "string" ? document.querySelector(option.touch) : option.touch;
        this.vertical = this._getValue(option.vertical, true);
        this.property = option.property;
        this.preventDefault = this._getValue(option.preventDefault, true);
        this.sensitivity = this._getValue(option.sensitivity, 1);
        this.lockDirection = this._getValue(option.lockDirection, true);

        this.initialValue = this._getValue(option.initialValue, this.scroller[this.property]);
        this.scroller[this.property] = this.initialValue;

        this.moveFactor = this._getValue(option.moveFactor, 1);
        this.factor = this._getValue(option.factor, 1);
        this.outFactor = this._getValue(option.outFactor, 0.3);

        this.min = option.min;
        this.max = option.max;

        this.maxRegion = this._getValue(option.maxRegion, 60);

        this.deceleration = 0.0006;
        this.maxRegion = this._getValue(option.maxRegion, 600);
        this.springMaxRegion = this._getValue(option.springMaxRegion, 60);

        this.change = option.change || function () {};
        this.touchEnd = option.touchEnd || function () {};
        this.touchStart = option.touchStart || function () {};
        this.touchMove = option.touchMove || function () {};
        this.touchCancel = option.touchMove || function () {};
        this.animationEnd = option.animationEnd || function () {};

        this.preventDefaultException = { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ };
        this.hasMin = !(this.min === void 0);
        this.hasMax = !(this.max === void 0);
        this.isTouchStart = false;
        this.step = option.step;
        this.inertia = this._getValue(option.inertia, true);
        this.maxSpeed = option.maxSpeed;
        this.hasMaxSpeed = !(this.maxSpeed === void 0);

        if (this.hasMax && this.hasMin) {
            if (this.min > this.max) throw "min value can't be greater than max value";
            this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
        }

        this._startHandler = this._start.bind(this);
        this._moveHandler = this._move.bind(this);
        this._transitionEndHandler = this._transitionEnd.bind(this);
        this._endHandler = this._end.bind(this);
        this._cancelHandler = this._cancel.bind(this);
        bind(this.element, "touchstart", this._startHandler);
        bind(this.scroller, endTransitionEventName, this._transitionEndHandler);
        bind(window, "touchmove", this._moveHandler);
        bind(window, "touchend", this._endHandler);
        bind(window, "touchcancel", this._cancelHandler);
        //当有step设置的时候防止执行两次end
        this._endCallbackTag = true;

        this._endTimeout = null;
    };

    AlloyTouch.prototype = {
        _getValue: function _getValue(obj, defaultValue) {
            return obj === void 0 ? defaultValue : obj;
        },
        _transitionEnd: function _transitionEnd() {
            if (!this._triggerTransitionEnd) return;
            var current = this.scroller[this.property];
            if (current < this.min) {
                this.to(this.min, 600, ease);
                return;
            } else if (current > this.max) {
                this.to(this.max, 600, ease);
                return;
            }

            if (this.step) {
                this.correction();
                if (this._endCallbackTag) {
                    this._endTimeout = setTimeout(function () {
                        this.animationEnd.call(this, current);
                        cancelAnimationFrame(this.tickID);
                    }.bind(this), 400);
                    this._endCallbackTag = false;
                }
            } else {
                this.animationEnd.call(this, current);
                cancelAnimationFrame(this.tickID);
            }
        },
        _cancelAnimation: function _cancelAnimation() {
            this.scroller.style[transitionDuration] = '0ms';
            this.scroller[this.property] = this.getComputedPosition();
        },
        getComputedPosition: function getComputedPosition() {
            var matrix = window.getComputedStyle(this.scroller, null);
            matrix = matrix[transform].split(')')[0].split(', ');
            return this.vertical ? +(matrix[13] || matrix[5]) : +(matrix[12] || matrix[4]);
        },
        _tick: function _tick() {
            this.change.call(this, this.getComputedPosition());
            this.tickID = requestAnimationFrame(this._tick.bind(this));
        },
        stop: function stop() {
            cancelAnimationFrame(this.tickID);
            this._cancelAnimation();
            clearTimeout(this._endTimeout);
            if (this.hasMax && this.hasMin) {
                this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
            }
        },
        _start: function _start(evt) {
            cancelAnimationFrame(this.tickID);
            this._tick();

            this._endCallbackTag = true;
            this.isTouchStart = true;
            this._firstTouchMove = true;
            this._preventMove = false;
            this.touchStart.call(this, evt, this.scroller[this.property]);
            this._cancelAnimation();
            clearTimeout(this._endTimeout);
            if (this.hasMax && this.hasMin) {
                this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
            }
            this.startTime = new Date().getTime();
            this._startX = this.preX = evt.touches[0].pageX;
            this._startY = this.preY = evt.touches[0].pageY;
            this.start = this.vertical ? this.preY : this.preX;
        },
        _move: function _move(evt) {
            if (this.isTouchStart) {
                var dx = Math.abs(evt.touches[0].pageX - this._startX),
                    dy = Math.abs(evt.touches[0].pageY - this._startY);
                if (this._firstTouchMove && this.lockDirection) {
                    var dDis = dx - dy;
                    if (dDis > 0 && this.vertical) {
                        this._preventMove = true;
                    } else if (dDis < 0 && !this.vertical) {
                        this._preventMove = true;
                    }
                    this._firstTouchMove = false;
                }
                if (dx < 10 && dy < 10) return;

                if (!this._preventMove) {
                    var f = this.moveFactor;
                    var d = (this.vertical ? evt.touches[0].pageY - this.preY : evt.touches[0].pageX - this.preX) * this.sensitivity;
                    if (this.hasMax && this.scroller[this.property] > this.max && d > 0) {
                        f = this.outFactor;
                    } else if (this.hasMin && this.scroller[this.property] < this.min && d < 0) {
                        f = this.outFactor;
                    }
                    d *= f;
                    this.preX = evt.touches[0].pageX;
                    this.preY = evt.touches[0].pageY;
                    this.scroller[this.property] += d;

                    var timestamp = new Date().getTime();
                    if (timestamp - this.startTime > 300) {
                        this.startTime = timestamp;
                        this.start = this.vertical ? this.preY : this.preX;
                    }
                    this.touchMove.call(this, evt, this.scroller[this.property]);
                }

                if (this.preventDefault && !preventDefaultTest(evt.target, this.preventDefaultException)) {
                    evt.preventDefault();
                }
            }
        },
        _end: function _end(evt) {
            if (this.isTouchStart) {
                var self = this,
                    current = this.scroller[this.property];
                if (this.touchEnd.call(this, evt, current) === false) {
                    this._triggerTransitionEnd = false;
                    cancelAnimationFrame(this.tickID);
                    return;
                } else {
                    this._triggerTransitionEnd = true;
                }
                if (this.hasMax && current > this.max) {
                    this.to(this.max, 600, ease);
                } else if (this.hasMin && current < this.min) {
                    this.to(this.min, 600, ease);
                } else if (this.inertia && !this._preventMove) {
                    var dt = new Date().getTime() - this.startTime;
                    if (dt < 300) {

                        var distance = ((this.vertical ? evt.changedTouches[0].pageY : evt.changedTouches[0].pageX) - this.start) * this.sensitivity,
                            speed = Math.abs(distance) / dt,
                            speed2 = this.factor * speed;
                        if (this.hasMaxSpeed && speed2 > this.maxSpeed) {
                            speed2 = this.maxSpeed;
                        }
                        var destination = current + speed2 * speed2 / (2 * this.deceleration) * (distance < 0 ? -1 : 1);

                        var tRatio = 1;
                        if (destination < this.min) {
                            if (destination < this.min - this.maxRegion) {
                                tRatio = reverseEase((current - this.min + this.springMaxRegion) / (current - destination));
                                destination = this.min - this.springMaxRegion;
                            } else {
                                tRatio = reverseEase((current - this.min + this.springMaxRegion * (this.min - destination) / this.maxRegion) / (current - destination));
                                destination = this.min - this.springMaxRegion * (this.min - destination) / this.maxRegion;
                            }
                        } else if (destination > this.max) {
                            if (destination > this.max + this.maxRegion) {
                                tRatio = reverseEase((this.max + this.springMaxRegion - current) / (destination - current));
                                destination = this.max + this.springMaxRegion;
                            } else {
                                tRatio = reverseEase((this.max + this.springMaxRegion * (destination - this.max) / this.maxRegion - current) / (destination - current));
                                destination = this.max + this.springMaxRegion * (destination - this.max) / this.maxRegion;
                            }
                        }
                        var duration = Math.round(speed / self.deceleration) * tRatio;

                        self.to(Math.round(destination), duration, ease);
                    } else {
                        if (self.step) {
                            self.correction();
                        }
                    }
                } else {
                    if (self.step) {
                        self.correction();
                    }
                }
                // if (this.preventDefault && !preventDefaultTest(evt.target, this.preventDefaultException)) {
                //     evt.preventDefault();
                // }
                this.isTouchStart = false;
            }
        },
        _cancel: function _cancel(evt) {
            cancelAnimationFrame(this.tickID);
            if (this.step) {
                this.correction();
            }
            this.touchCancel.call(this, evt);
        },
        to: function to(value, time, u_ease) {
            var el = this.scroller,
                property = this.property;

            el.style[transitionDuration] = this._getValue(time, 600) + 'ms';
            el.style[transitionTimingFunction] = u_ease || ease;
            el[property] = value;
        },
        correction: function correction() {
            var m_str = window.getComputedStyle(this.scroller)[transform];
            var value = this.vertical ? parseInt(m_str.split(',')[13]) : parseInt(m_str.split(',')[12]);
            var rpt = Math.floor(Math.abs(value / this.step));
            var dy = value % this.step;
            var result;
            if (Math.abs(dy) > this.step / 2) {
                result = (value < 0 ? -1 : 1) * (rpt + 1) * this.step;
                if (result > this.max) result = this.max;
                if (result < this.min) result = this.min;
                this.to(result, 400, ease);
            } else {
                result = (value < 0 ? -1 : 1) * rpt * this.step;
                if (result > this.max) result = this.max;
                if (result < this.min) result = this.min;
                this.to(result, 400, ease);
            }
        },
        destroy: function destroy() {
            unbind(this.element, "touchstart", this._startHandler);
            unbind(this.scroller, endTransitionEventName, this._transitionEndHandler);
            unbind(window, "touchmove", this._moveHandler);
            unbind(window, "touchend", this._endHandler);
            unbind(window, "touchcancel", this._cancelHandler);
        }
    };

    if (typeof module !== 'undefined' && ( false ? 'undefined' : _typeof(exports)) === 'object') {
        module.exports = AlloyTouch;
    } else {
        window.AlloyTouch = AlloyTouch;
    }
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* transformjs 1.1.6
 * By dntzhang
 * Github: https://github.com/AlloyTeam/AlloyTouch/tree/master/transformjs
 */
;(function () {

    var DEG_TO_RAD = 0.017453292519943295;

    var Matrix3D = function Matrix3D(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
        this.elements = window.Float32Array ? new Float32Array(16) : [];
        var te = this.elements;
        te[0] = n11 !== undefined ? n11 : 1;te[4] = n12 || 0;te[8] = n13 || 0;te[12] = n14 || 0;
        te[1] = n21 || 0;te[5] = n22 !== undefined ? n22 : 1;te[9] = n23 || 0;te[13] = n24 || 0;
        te[2] = n31 || 0;te[6] = n32 || 0;te[10] = n33 !== undefined ? n33 : 1;te[14] = n34 || 0;
        te[3] = n41 || 0;te[7] = n42 || 0;te[11] = n43 || 0;te[15] = n44 !== undefined ? n44 : 1;
    };

    Matrix3D.prototype = {
        set: function set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
            var te = this.elements;
            te[0] = n11;te[4] = n12;te[8] = n13;te[12] = n14;
            te[1] = n21;te[5] = n22;te[9] = n23;te[13] = n24;
            te[2] = n31;te[6] = n32;te[10] = n33;te[14] = n34;
            te[3] = n41;te[7] = n42;te[11] = n43;te[15] = n44;
            return this;
        },
        identity: function identity() {
            this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            return this;
        },
        multiplyMatrices: function multiplyMatrices(a, be) {

            var ae = a.elements;
            var te = this.elements;
            var a11 = ae[0],
                a12 = ae[4],
                a13 = ae[8],
                a14 = ae[12];
            var a21 = ae[1],
                a22 = ae[5],
                a23 = ae[9],
                a24 = ae[13];
            var a31 = ae[2],
                a32 = ae[6],
                a33 = ae[10],
                a34 = ae[14];
            var a41 = ae[3],
                a42 = ae[7],
                a43 = ae[11],
                a44 = ae[15];

            var b11 = be[0],
                b12 = be[1],
                b13 = be[2],
                b14 = be[3];
            var b21 = be[4],
                b22 = be[5],
                b23 = be[6],
                b24 = be[7];
            var b31 = be[8],
                b32 = be[9],
                b33 = be[10],
                b34 = be[11];
            var b41 = be[12],
                b42 = be[13],
                b43 = be[14],
                b44 = be[15];

            te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
            te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
            te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
            te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

            te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
            te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
            te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
            te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

            te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
            te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
            te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
            te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

            te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
            te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
            te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
            te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

            return this;
        },
        // 解决角度为90的整数倍导致Math.cos得到极小的数，其实是0。导致不渲染
        _rounded: function _rounded(value, i) {
            i = Math.pow(10, i || 15);
            // default
            return Math.round(value * i) / i;
        },
        _arrayWrap: function _arrayWrap(arr) {
            return window.Float32Array ? new Float32Array(arr) : arr;
        },
        appendTransform: function appendTransform(x, y, z, scaleX, scaleY, scaleZ, rotateX, rotateY, rotateZ, skewX, skewY, originX, originY, originZ) {

            var rx = rotateX * DEG_TO_RAD;
            var cosx = this._rounded(Math.cos(rx));
            var sinx = this._rounded(Math.sin(rx));
            var ry = rotateY * DEG_TO_RAD;
            var cosy = this._rounded(Math.cos(ry));
            var siny = this._rounded(Math.sin(ry));
            var rz = rotateZ * DEG_TO_RAD;
            var cosz = this._rounded(Math.cos(rz * -1));
            var sinz = this._rounded(Math.sin(rz * -1));

            this.multiplyMatrices(this, this._arrayWrap([1, 0, 0, x, 0, cosx, sinx, y, 0, -sinx, cosx, z, 0, 0, 0, 1]));

            this.multiplyMatrices(this, this._arrayWrap([cosy, 0, siny, 0, 0, 1, 0, 0, -siny, 0, cosy, 0, 0, 0, 0, 1]));

            this.multiplyMatrices(this, this._arrayWrap([cosz * scaleX, sinz * scaleY, 0, 0, -sinz * scaleX, cosz * scaleY, 0, 0, 0, 0, 1 * scaleZ, 0, 0, 0, 0, 1]));

            if (skewX || skewY) {
                this.multiplyMatrices(this, this._arrayWrap([this._rounded(Math.cos(skewX * DEG_TO_RAD)), this._rounded(Math.sin(skewX * DEG_TO_RAD)), 0, 0, -1 * this._rounded(Math.sin(skewY * DEG_TO_RAD)), this._rounded(Math.cos(skewY * DEG_TO_RAD)), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
            }

            if (originX || originY || originZ) {
                this.elements[12] -= originX * this.elements[0] + originY * this.elements[4] + originZ * this.elements[8];
                this.elements[13] -= originX * this.elements[1] + originY * this.elements[5] + originZ * this.elements[9];
                this.elements[14] -= originX * this.elements[2] + originY * this.elements[6] + originZ * this.elements[10];
            }
            return this;
        }
    };

    var Matrix2D = function Matrix2D(a, b, c, d, tx, ty) {
        this.a = a == null ? 1 : a;
        this.b = b || 0;
        this.c = c || 0;
        this.d = d == null ? 1 : d;
        this.tx = tx || 0;
        this.ty = ty || 0;
        return this;
    };

    Matrix2D.prototype = {
        identity: function identity() {
            this.a = this.d = 1;
            this.b = this.c = this.tx = this.ty = 0;
            return this;
        },
        appendTransform: function appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, originX, originY) {
            if (rotation % 360) {
                var r = rotation * DEG_TO_RAD;
                var cos = Math.cos(r);
                var sin = Math.sin(r);
            } else {
                cos = 1;
                sin = 0;
            }
            if (skewX || skewY) {
                skewX *= DEG_TO_RAD;
                skewY *= DEG_TO_RAD;
                this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
                this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
            } else {
                this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
            }
            if (originX || originY) {
                this.tx -= originX * this.a + originY * this.c;
                this.ty -= originX * this.b + originY * this.d;
            }
            return this;
        },
        append: function append(a, b, c, d, tx, ty) {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            this.a = a * a1 + b * c1;
            this.b = a * b1 + b * d1;
            this.c = c * a1 + d * c1;
            this.d = c * b1 + d * d1;
            this.tx = tx * a1 + ty * c1 + this.tx;
            this.ty = tx * b1 + ty * d1 + this.ty;
            return this;
        },
        initialize: function initialize(a, b, c, d, tx, ty) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
            return this;
        },
        setValues: function setValues(a, b, c, d, tx, ty) {
            this.a = a == null ? 1 : a;
            this.b = b || 0;
            this.c = c || 0;
            this.d = d == null ? 1 : d;
            this.tx = tx || 0;
            this.ty = ty || 0;
            return this;
        },
        copy: function copy(matrix) {
            return this.setValues(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
        }
    };

    function observe(target, props, callback) {
        for (var i = 0, len = props.length; i < len; i++) {
            var prop = props[i];
            watch(target, prop, callback);
        }
    }

    function watch(target, prop, callback) {
        Object.defineProperty(target, prop, {
            get: function get() {
                return this["_" + prop];
            },
            set: function set(value) {
                this["_" + prop] = value;
                callback();
            }
        });
    }

    function isElement(o) {
        return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object" ? o instanceof HTMLElement : //DOM2
        o && (typeof o === "undefined" ? "undefined" : _typeof(o)) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
    }

    function Transform(obj, notPerspective) {
        if (obj.___mixCSS3Transform) return;
        var observeProps = ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"],
            objIsElement = isElement(obj);
        if (!notPerspective) {
            observeProps.push("perspective");
        }
        obj.___mixCSS3Transform = true;
        observe(obj, observeProps, function () {
            var mtx = obj.matrix3d.identity().appendTransform(obj.translateX, obj.translateY, obj.translateZ, obj.scaleX, obj.scaleY, obj.scaleZ, obj.rotateX, obj.rotateY, obj.rotateZ, obj.skewX, obj.skewY, obj.originX, obj.originY, obj.originZ);
            var transform = (notPerspective ? "" : "perspective(" + obj.perspective + "px) ") + "matrix3d(" + Array.prototype.slice.call(mtx.elements).join(",") + ")";
            if (objIsElement) {
                obj.style.transform = obj.style.msTransform = obj.style.OTransform = obj.style.MozTransform = obj.style.webkitTransform = transform;
            } else {
                obj.transform = transform;
            }
        });

        obj.matrix3d = new Matrix3D();
        if (!notPerspective) {
            obj.perspective = 500;
        }
        obj.scaleX = obj.scaleY = obj.scaleZ = 1;
        //由于image自带了x\y\z，所有加上translate前缀
        obj.translateX = obj.translateY = obj.translateZ = obj.rotateX = obj.rotateY = obj.rotateZ = obj.skewX = obj.skewY = obj.originX = obj.originY = obj.originZ = 0;
    }

    Transform.getMatrix3D = function (option) {
        var defaultOption = {
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            skewX: 0,
            skewY: 0,
            originX: 0,
            originY: 0,
            originZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        };
        for (var key in option) {
            if (option.hasOwnProperty(key)) {
                defaultOption[key] = option[key];
            }
        }
        return new Matrix3D().identity().appendTransform(defaultOption.translateX, defaultOption.translateY, defaultOption.translateZ, defaultOption.scaleX, defaultOption.scaleY, defaultOption.scaleZ, defaultOption.rotateX, defaultOption.rotateY, defaultOption.rotateZ, defaultOption.skewX, defaultOption.skewY, defaultOption.originX, defaultOption.originY, defaultOption.originZ).elements;
    };

    Transform.getMatrix2D = function (option) {
        var defaultOption = {
            translateX: 0,
            translateY: 0,
            rotation: 0,
            skewX: 0,
            skewY: 0,
            originX: 0,
            originY: 0,
            scaleX: 1,
            scaleY: 1
        };
        for (var key in option) {
            if (option.hasOwnProperty(key)) {
                defaultOption[key] = option[key];
            }
        }
        return new Matrix2D().identity().appendTransform(defaultOption.translateX, defaultOption.translateY, defaultOption.scaleX, defaultOption.scaleY, defaultOption.rotation, defaultOption.skewX, defaultOption.skewY, defaultOption.originX, defaultOption.originY);
    };

    if (typeof module !== 'undefined' && ( false ? "undefined" : _typeof(exports)) === 'object') {
        module.exports = Transform;
    } else {
        window.Transform = Transform;
    }
})();

/***/ })
/******/ ]);
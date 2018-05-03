/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".bundler.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
        p.nodeName = nodeName;
        p.children = children;
        p.attributes = null == attributes ? void 0 : attributes;
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
        while (p = list.pop()) {
            if (p.__d) renderComponent(p);
        }
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
        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
        node.__n = nodeName;
        return node;
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
            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
            if (value && 'object' == (typeof value === 'undefined' ? 'undefined' : _typeof(value))) {
                if ('string' != typeof old) for (var i in old) {
                    if (!(i in value)) node.style[i] = '';
                }for (var i in value) {
                    node.style[i] = 'number' == typeof value[i] && !1 === IS_NON_DIMENSIONAL.test(i) ? value[i] + 'px' : value[i];
                }
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
        var m = isElement(merge) || !merge;
        if (vnode instanceof Component) {
            if (window && window.Omi) window.Omi.instances.push(vnode);
            if (vnode.componentWillMount) vnode.componentWillMount();
            if (vnode.install) vnode.install();
            if (m) vnode.base = diff(merge, vnode.render(), {}, !1, parent, !1);else {
                vnode.$store = options.$store = merge;
                vnode.base = diff(void 0, vnode.render(), {}, !1, parent, !1);
            }
            if (vnode.componentDidMount) vnode.componentDidMount();
            if (vnode.installed) vnode.installed();
            return vnode.base;
        }
        return diff(merge, vnode, {}, !1, parent, !1);
    }
    var options = {
        scopedStyle: !0,
        $store: null
    };
    var stack = [];
    var EMPTY_CHILDREN = [];
    var defer = 'function' == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var items = [];
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
        },
        update: function update(callback) {
            this.forceUpdate(callback);
        },
        render: function render() {}
    });
    var instances = [];
    if ("object" == (typeof window === 'undefined' ? 'undefined' : _typeof(window))) window.Omi = window.Omi || {
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 *  OmiRouter v1.0.0 By dntzhang 
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["OmiRouter"] = factory();else root["OmiRouter"] = factory();
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      /*!
       *  omi-router v0.3.0 by dntzhang
       *  Router for Omi.
       *  Github: https://github.com/AlloyTeam/omi
       *  MIT Licensed.
       */

      ;(function () {

        if (typeof Omi === 'undefined') return;

        var OmiRouter = {};

        var parser = __webpack_require__(1),
            renderTo = null,
            params = {},
            Component = null,
            store = null,
            routerOption = {},
            preRenderTo = null,
            preInstance = null,
            currentRoute = null,
            preRoute = null,
            instanceList = [],
            $route = {};

        OmiRouter.init = function (option) {
          routerOption = option;
          option.routes.forEach(function (route) {
            route.reg = parser(route.path);
          });

          var hash = window.location.hash.replace('#', '');
          hashMapping(hash ? hash : routerOption.defaultRoute, renderTo);
          if (hash) {
            render();
            // option.root.onInstalled(function(){
            //     render()
            // })
          }
        };

        function getParams(toArr, pathArr) {
          var params = {};
          toArr.forEach(function (item, index) {
            if (index > 0) {
              params[pathArr[index].replace(':', '')] = item;
            }
          });
          return params;
        }

        function hashMapping(to) {
          routerOption.routes.every(function (route) {
            var toArr = to.match(route.reg);
            if (toArr) {
              var pathArr = route.path.match(route.reg);
              params = getParams(toArr, pathArr);
              renderTo = route.renderTo || routerOption.renderTo;
              store = route.store || routerOption.store;
              Component = route.component;
              currentRoute = route;
              renderTo = typeof renderTo === 'string' ? document.querySelector(renderTo) : renderTo;

              pushState(to);
              return false;
            }
            return true;
          });
        }

        function pushState(route) {
          window.location.hash = route;
        }

        window.addEventListener('hashchange', function () {
          hashMapping(window.location.hash.replace('#', ''), renderTo);
          render();
        }, false);

        function render() {
          $route.params = params;

          if (preRenderTo === renderTo && preInstance && !routerOption.increment) {
            deleteInstance(preInstance);
          }

          var instance;

          if (routerOption.increment) {
            var i = 0,
                len = instanceList.length;
            for (; i < len; i++) {
              if (instanceList[i] instanceof Component) {
                instance = instanceList[i];
                break;
              }
            }
          }

          var doRouter = true;

          if (routerOption.beforeRoute) {
            doRouter = routerOption.beforeRoute({
              preRoute: preRoute,
              route: currentRoute,
              preComponent: preInstance
            });
          }

          if (doRouter === false) return;

          if (!instance) {
            if (currentRoute.component.prototype.render) {
              initComponent(instance, Component);
            } else {
              currentRoute.component().then(function (Component) {
                initComponent(instance, Component['default']);
                change(instance);
              });
              return;
            }
          } else {
            instance.$route = $route;
          }
          change(instance);
        }

        function initComponent(instance, Component) {
          instance = new Component();
          if (routerOption.increment) {
            instanceList.push(instance);
          }
          instance.$route = $route;

          if (!routerOption.increment) {
            while (renderTo.firstChild) {
              renderTo.removeChild(renderTo.firstChild);
            }
          }

          Omi.render(instance, renderTo, store);
          if (routerOption.init) {
            routerOption.init({
              component: instance,
              preComponent: preInstance,
              preRoute: preRoute,
              route: currentRoute
            });
          }
        }

        function deleteInstance(instance) {
          for (var key in Omi.instances) {
            if (Omi.instances.hasOwnProperty(key)) {
              if (Omi.instances[key].id === instance.id) {
                delete Omi.instances[key];
                instance = null;
                break;
              }
            }
          }
        }

        function change(instance) {
          if (routerOption.change) {
            routerOption.change({
              component: instance,
              preComponent: preInstance,
              preRoute: preRoute,
              route: currentRoute
            });
          }

          preRoute = currentRoute;
          preInstance = instance;
          preRenderTo = renderTo;
        }

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

        var Link = function (_Component) {
          _inherits(Link, _Component);

          function Link() {
            _classCallCheck(this, Link);

            return _possibleConstructorReturn(this, _Component.apply(this, arguments));
          }

          Link.prototype.render = function render$$1() {
            return Omi.h('a', { href: '#' + this.props.to }, this.props.children[0]);
          };

          return Link;
        }(Omi.Component);

        OmiRouter.Link = Link;

        if (true) {
          module.exports = OmiRouter;
        } else if (typeof define == "function" && define.amd) {
          define([], function () {
            return OmiRouter;
          });
        } else {
          window.OmiRouter = OmiRouter;
        }
      })();

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      var isarray = __webpack_require__(2);

      /**
       * Expose `pathToRegexp`.
       */
      module.exports = pathToRegexp;
      module.exports.parse = parse;
      module.exports.compile = compile;
      module.exports.tokensToFunction = tokensToFunction;
      module.exports.tokensToRegExp = tokensToRegExp;

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
      // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
      // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
      // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
      '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

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
        var defaultDelimiter = options && options.delimiter || '/';
        var res;

        while ((res = PATH_REGEXP.exec(str)) != null) {
          var m = res[0];
          var escaped = res[1];
          var offset = res.index;
          path += str.slice(index, offset);
          index = offset + m.length;

          // Ignore already escaped sequences.
          if (escaped) {
            path += escaped[1];
            continue;
          }

          var next = str[index];
          var prefix = res[2];
          var name = res[3];
          var capture = res[4];
          var group = res[5];
          var modifier = res[6];
          var asterisk = res[7];

          // Push the current path onto the tokens.
          if (path) {
            tokens.push(path);
            path = '';
          }

          var partial = prefix != null && next != null && next !== prefix;
          var repeat = modifier === '+' || modifier === '*';
          var optional = modifier === '?' || modifier === '*';
          var delimiter = res[2] || defaultDelimiter;
          var pattern = capture || group;

          tokens.push({
            name: name || key++,
            prefix: prefix || '',
            delimiter: delimiter,
            optional: optional,
            repeat: repeat,
            partial: partial,
            asterisk: !!asterisk,
            pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
          });
        }

        // Match any characters still remaining.
        if (index < str.length) {
          path += str.substr(index);
        }

        // If the path exists, push it onto the end.
        if (path) {
          tokens.push(path);
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
        return tokensToFunction(parse(str, options));
      }

      /**
       * Prettier encoding of URI path segments.
       *
       * @param  {string}
       * @return {string}
       */
      function encodeURIComponentPretty(str) {
        return encodeURI(str).replace(/[\/?#]/g, function (c) {
          return '%' + c.charCodeAt(0).toString(16).toUpperCase();
        });
      }

      /**
       * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
       *
       * @param  {string}
       * @return {string}
       */
      function encodeAsterisk(str) {
        return encodeURI(str).replace(/[?#]/g, function (c) {
          return '%' + c.charCodeAt(0).toString(16).toUpperCase();
        });
      }

      /**
       * Expose a method for transforming tokens into the path function.
       */
      function tokensToFunction(tokens) {
        // Compile all the tokens into regexps.
        var matches = new Array(tokens.length);

        // Compile all the patterns before compilation.
        for (var i = 0; i < tokens.length; i++) {
          if (_typeof(tokens[i]) === 'object') {
            matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
          }
        }

        return function (obj, opts) {
          var path = '';
          var data = obj || {};
          var options = opts || {};
          var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

          for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];

            if (typeof token === 'string') {
              path += token;

              continue;
            }

            var value = data[token.name];
            var segment;

            if (value == null) {
              if (token.optional) {
                // Prepend partial segment prefixes.
                if (token.partial) {
                  path += token.prefix;
                }

                continue;
              } else {
                throw new TypeError('Expected "' + token.name + '" to be defined');
              }
            }

            if (isarray(value)) {
              if (!token.repeat) {
                throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
              }

              if (value.length === 0) {
                if (token.optional) {
                  continue;
                } else {
                  throw new TypeError('Expected "' + token.name + '" to not be empty');
                }
              }

              for (var j = 0; j < value.length; j++) {
                segment = encode(value[j]);

                if (!matches[i].test(segment)) {
                  throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
                }

                path += (j === 0 ? token.prefix : token.delimiter) + segment;
              }

              continue;
            }

            segment = token.asterisk ? encodeAsterisk(value) : encode(value);

            if (!matches[i].test(segment)) {
              throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
            }

            path += token.prefix + segment;
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
        return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
      }

      /**
       * Escape the capturing group by escaping special characters and meaning.
       *
       * @param  {string} group
       * @return {string}
       */
      function escapeGroup(group) {
        return group.replace(/([=!:$\/()])/g, '\\$1');
      }

      /**
       * Attach the keys as a property of the regexp.
       *
       * @param  {!RegExp} re
       * @param  {Array}   keys
       * @return {!RegExp}
       */
      function attachKeys(re, keys) {
        re.keys = keys;
        return re;
      }

      /**
       * Get the flags for a regexp from the options.
       *
       * @param  {Object} options
       * @return {string}
       */
      function flags(options) {
        return options.sensitive ? '' : 'i';
      }

      /**
       * Pull out keys from a regexp.
       *
       * @param  {!RegExp} path
       * @param  {!Array}  keys
       * @return {!RegExp}
       */
      function regexpToRegexp(path, keys) {
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
              partial: false,
              asterisk: false,
              pattern: null
            });
          }
        }

        return attachKeys(path, keys);
      }

      /**
       * Transform an array into a regexp.
       *
       * @param  {!Array}  path
       * @param  {Array}   keys
       * @param  {!Object} options
       * @return {!RegExp}
       */
      function arrayToRegexp(path, keys, options) {
        var parts = [];

        for (var i = 0; i < path.length; i++) {
          parts.push(pathToRegexp(path[i], keys, options).source);
        }

        var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

        return attachKeys(regexp, keys);
      }

      /**
       * Create a path regexp from string input.
       *
       * @param  {string}  path
       * @param  {!Array}  keys
       * @param  {!Object} options
       * @return {!RegExp}
       */
      function stringToRegexp(path, keys, options) {
        return tokensToRegExp(parse(path, options), keys, options);
      }

      /**
       * Expose a function for taking tokens and returning a RegExp.
       *
       * @param  {!Array}          tokens
       * @param  {(Array|Object)=} keys
       * @param  {Object=}         options
       * @return {!RegExp}
       */
      function tokensToRegExp(tokens, keys, options) {
        if (!isarray(keys)) {
          options = /** @type {!Object} */keys || options;
          keys = [];
        }

        options = options || {};

        var strict = options.strict;
        var end = options.end !== false;
        var route = '';

        // Iterate over the tokens and create our regexp string.
        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i];

          if (typeof token === 'string') {
            route += escapeString(token);
          } else {
            var prefix = escapeString(token.prefix);
            var capture = '(?:' + token.pattern + ')';

            keys.push(token);

            if (token.repeat) {
              capture += '(?:' + prefix + capture + ')*';
            }

            if (token.optional) {
              if (!token.partial) {
                capture = '(?:' + prefix + '(' + capture + '))?';
              } else {
                capture = prefix + '(' + capture + ')?';
              }
            } else {
              capture = prefix + '(' + capture + ')';
            }

            route += capture;
          }
        }

        var delimiter = escapeString(options.delimiter || '/');
        var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

        // In non-strict mode we allow a slash at the end of match. If the path to
        // match already ends with a slash, we remove it for consistency. The slash
        // is valid at the end of a path match, not in the middle. This is important
        // in non-ending mode, where "/test/" shouldn't match "/test//route".
        if (!strict) {
          route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
        }

        if (end) {
          route += '$';
        } else {
          // In non-ending mode, we need the capturing groups to match as much as
          // possible by using a positive lookahead to the end or next path segment.
          route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
        }

        return attachKeys(new RegExp('^' + route, flags(options)), keys);
      }

      /**
       * Normalize the given path string, returning a regular expression.
       *
       * An empty array can be passed in for the keys, which will hold the
       * placeholder key descriptions. For example, using `/user/:id`, `keys` will
       * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
       *
       * @param  {(string|RegExp|Array)} path
       * @param  {(Array|Object)=}       keys
       * @param  {Object=}               options
       * @return {!RegExp}
       */
      function pathToRegexp(path, keys, options) {
        if (!isarray(keys)) {
          options = /** @type {!Object} */keys || options;
          keys = [];
        }

        options = options || {};

        if (path instanceof RegExp) {
          return regexpToRegexp(path, /** @type {!Array} */keys);
        }

        if (isarray(path)) {
          return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
        }

        return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
      }

      /***/
    },
    /* 2 */
    /***/function (module, exports) {

      module.exports = Array.isArray || function (arr) {
        return Object.prototype.toString.call(arr) == '[object Array]';
      };

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _omi2 = _interopRequireDefault(_omi);

var _omiRouter = __webpack_require__(1);

var _omiRouter2 = _interopRequireDefault(_omiRouter);

var _home = __webpack_require__(4);

var _home2 = _interopRequireDefault(_home);

var _about = __webpack_require__(5);

var _about2 = _interopRequireDefault(_about);

var _userList = __webpack_require__(6);

var _userList2 = _interopRequireDefault(_userList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Omi$Component) {
    _inherits(App, _Omi$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'installed',
        value: function installed() {
            _omiRouter2['default'].init({
                routes: [{ path: '/', component: _home2['default'] }, { path: '/about', component: _about2['default'] }, { path: '/user-list', component: _userList2['default'] }, { path: '/user/:name/category/:category', component: function component() {
                        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 7));
                    } }],
                renderTo: "#view",
                defaultRoute: '/',
                root: this
            });
        }
    }, {
        key: 'style',
        value: function style() {
            return '\n        ul{\n            border-bottom: 1px solid #ccc;\n            padding-bottom:5px;\n        }\n        li{\n            display:inline-block;\n            margin-left:4px;\n        }\n        #view li{\n            display:block;\n        }\n        #view ul{\n            border-width: 0px;\n        }\n        ';
        }
    }, {
        key: 'render',
        value: function render() {
            return _omi2['default'].h(
                'div',
                null,
                _omi2['default'].h(
                    'ul',
                    null,
                    _omi2['default'].h(
                        'li',
                        null,
                        _omi2['default'].h(
                            _omiRouter.Link,
                            { to: '/' },
                            'Home'
                        )
                    ),
                    _omi2['default'].h(
                        'li',
                        null,
                        _omi2['default'].h(
                            _omiRouter.Link,
                            { to: '/about' },
                            'About'
                        )
                    ),
                    _omi2['default'].h(
                        'li',
                        null,
                        _omi2['default'].h(
                            _omiRouter.Link,
                            { to: '/user-list' },
                            'UserList'
                        )
                    )
                ),
                _omi2['default'].h('div', { id: 'view' })
            );
        }
    }]);

    return App;
}(_omi2['default'].Component);

_omi2['default'].render(new App(), "#container");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _omi2 = _interopRequireDefault(_omi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Omi$Component) {
    _inherits(Home, _Omi$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {

            return _omi2['default'].h(
                'div',
                null,
                'Home'
            );
        }
    }]);

    return Home;
}(_omi2['default'].Component);

exports['default'] = Home;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _omi2 = _interopRequireDefault(_omi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Omi$Component) {
    _inherits(About, _Omi$Component);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: 'render',
        value: function render() {
            return _omi2['default'].h(
                'div',
                null,
                'About'
            );
        }
    }]);

    return About;
}(_omi2['default'].Component);

exports['default'] = About;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _omi2 = _interopRequireDefault(_omi);

var _omiRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserList = function (_Omi$Component) {
    _inherits(UserList, _Omi$Component);

    function UserList() {
        _classCallCheck(this, UserList);

        return _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).apply(this, arguments));
    }

    _createClass(UserList, [{
        key: 'render',
        value: function render() {
            return _omi2['default'].h(
                'ul',
                null,
                _omi2['default'].h(
                    'li',
                    null,
                    _omi2['default'].h(
                        _omiRouter.Link,
                        { to: '/user/yanagao/category/js' },
                        'yanagao'
                    )
                ),
                _omi2['default'].h(
                    'li',
                    null,
                    _omi2['default'].h(
                        _omiRouter.Link,
                        { to: '/user/vorshen/category/html' },
                        'vorshen'
                    )
                ),
                _omi2['default'].h(
                    'li',
                    null,
                    _omi2['default'].h(
                        _omiRouter.Link,
                        { to: '/user/dntzhang/category/css' },
                        'dntzhang'
                    )
                )
            );
        }
    }]);

    return UserList;
}(_omi2['default'].Component);

exports['default'] = UserList;

/***/ })
/******/ ]);
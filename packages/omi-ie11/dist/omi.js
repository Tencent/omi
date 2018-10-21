!function() {
    'use strict';
    function VNode() {}
    function h(nodeName, attributes) {
        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;
        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
        if (attributes && null != attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
            if ("boolean" == typeof child) child = null;
            if (simple = "function" != typeof nodeName) if (null == child) child = ""; else if ("number" == typeof child) child = String(child); else if ("string" != typeof child) simple = !1;
            if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [ child ]; else children.push(child);
            lastSimple = simple;
        }
        var p = new VNode();
        p.nodeName = nodeName;
        p.children = children;
        p.attributes = null == attributes ? void 0 : attributes;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function cssToDom(css) {
        var node = document.createElement("style");
        node.innerText = css;
        return node;
    }
    function npn(str) {
        return str.replace(/-(\w)/g, function($, $1) {
            return $1.toUpperCase();
        });
    }
    function applyRef(ref, value) {
        if (null != ref) if ("function" == typeof ref) ref(value); else ref.current = value;
    }
    function isArray(obj) {
        return "[object Array]" === Object.prototype.toString.call(obj);
    }
    function nProps(props) {
        if (!props || isArray(props)) return {};
        var result = {};
        Object.keys(props).forEach(function(key) {
            result[key] = props[key].value;
        });
        return result;
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ("string" == typeof vnode || "number" == typeof vnode) return void 0 !== node.splitText;
        if ("string" == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
    }
    function createNode(nodeName, isSvg) {
        var node = isSvg ? document.createElementNS("http://www.w3.org/2000/svg", nodeName) : document.createElement(nodeName);
        node.__n = nodeName;
        return node;
    }
    function removeNode(node) {
        var parentNode = node.parentNode;
        if (parentNode) parentNode.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ("className" === name) name = "class";
        if ("key" === name) ; else if ("ref" === name) {
            applyRef(old, null);
            applyRef(value, node);
        } else if ("class" === name && !isSvg) node.className = value || ""; else if ("style" === name) {
            if (!value || "string" == typeof value || "string" == typeof old) node.style.cssText = value || "";
            if (value && "object" == typeof value) {
                if ("string" != typeof old) for (var i in old) if (!(i in value)) node.style[i] = "";
                for (var i in value) node.style[i] = "number" == typeof value[i] && !1 === IS_NON_DIMENSIONAL.test(i) ? value[i] + "px" : value[i];
            }
        } else if ("dangerouslySetInnerHTML" === name) {
            if (value) node.innerHTML = value.__html || "";
        } else if ("o" == name[0] && "n" == name[1]) {
            var useCapture = name !== (name = name.replace(/Capture$/, ""));
            name = name.toLowerCase().substring(2);
            if (value) {
                if (!old) node.addEventListener(name, eventProxy, useCapture);
            } else node.removeEventListener(name, eventProxy, useCapture);
            (node.__l || (node.__l = {}))[name] = value;
        } else if ("list" !== name && "type" !== name && !isSvg && name in node) {
            try {
                node[name] = null == value ? "" : value;
            } catch (e) {}
            if ((null == value || !1 === value) && "spellcheck" != name) node.removeAttribute(name);
        } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ""));
            if (null == value || !1 === value) if (ns) node.removeAttributeNS("http://www.w3.org/1999/xlink", name.toLowerCase()); else node.removeAttribute(name); else if ("string" == typeof value) if (ns) node.setAttributeNS("http://www.w3.org/1999/xlink", name.toLowerCase(), value); else node.setAttribute(name, value);
        }
    }
    function eventProxy(e) {
        return this.__l[e.type](options.event && options.event(e) || e);
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
            hydrating = null != dom && !("__preactattr_" in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) hydrating = !1;
        return ret;
    }
    function idiff(dom, vnode, context, mountAll, componentRoot) {
        var out = dom, prevSvgMode = isSvgMode;
        if (null == vnode || "boolean" == typeof vnode) vnode = "";
        if ("string" == typeof vnode || "number" == typeof vnode) {
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
        isSvgMode = "svg" === vnodeName ? !0 : "foreignObject" === vnodeName ? !1 : isSvgMode;
        vnodeName = String(vnodeName);
        if (!dom || !isNamedNode(dom, vnodeName)) {
            out = createNode(vnodeName, isSvgMode);
            if (dom) {
                while (dom.firstChild) out.appendChild(dom.firstChild);
                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                recollectNodeTree(dom, !0);
            }
        }
        var fc = out.firstChild, props = out.t, vchildren = vnode.children;
        if (null == props) {
            props = out.t = {};
            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
        }
        if (!hydrating && vchildren && 1 === vchildren.length && "string" == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
        var j, c, f, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i], props = _child.t, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
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
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
                child = c;
                children[j] = void 0;
                if (j === childrenLen - 1) childrenLen--;
                if (j === min) min++;
                break;
            }
            child = idiff(child, vchild, context, mountAll);
            f = originalChildren[i];
            if (child && child !== dom && child !== f) if (null == f) dom.appendChild(child); else if (child === f.nextSibling) removeNode(f); else dom.insertBefore(child, f);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
    }
    function recollectNodeTree(node, unmountOnly) {
        if (null != node.t && node.t.ref) node.t.ref(null);
        if (!1 === unmountOnly || null == node.t) removeNode(node);
        removeChildren(node);
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
        var update = !1;
        var isWeElement = dom.update;
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) {
            setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
            if (isWeElement) {
                delete dom.props[name];
                update = !0;
            }
        }
        for (name in attrs) if (isWeElement && "object" == typeof attrs[name]) {
            dom.props[npn(name)] = attrs[name];
            update = !0;
        } else if (!("children" === name || "innerHTML" === name || name in old && attrs[name] === ("value" === name || "checked" === name ? dom[name] : old[name]))) {
            setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
            if (isWeElement) {
                dom.props[npn(name)] = attrs[name];
                update = !0;
            }
        }
        dom.parentNode && update && isWeElement && dom.update();
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return call && ("object" == typeof call || "function" == typeof call) ? call : self;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    function diff$1(current, pre) {
        var result = {};
        syncKeys(current, pre);
        _diff(current, pre, "", result);
        return result;
    }
    function syncKeys(current, pre) {
        if (current !== pre) {
            var rootCurrentType = type(current);
            var rootPreType = type(pre);
            if ("[object Object]" == rootCurrentType && "[object Object]" == rootPreType) {
                if (Object.keys(current).length >= Object.keys(pre).length) for (var key in pre) {
                    var currentValue = current[key];
                    if (void 0 === currentValue) current[key] = null; else syncKeys(currentValue, pre[key]);
                }
            } else if ("[object Array]" == rootCurrentType && "[object Array]" == rootPreType) if (current.length >= pre.length) pre.forEach(function(item, index) {
                syncKeys(current[index], item);
            });
        }
    }
    function _diff(current, pre, path, result) {
        if (current !== pre) {
            var rootCurrentType = type(current);
            var rootPreType = type(pre);
            if ("[object Object]" == rootCurrentType) if ("[object Object]" != rootPreType || Object.keys(current).length < Object.keys(pre).length) setResult(result, path, current); else {
                for (var key in current) !function(key) {
                    var currentValue = current[key];
                    var preValue = pre[key];
                    var currentType = type(currentValue);
                    var preType = type(preValue);
                    if ("[object Array]" != currentType && "[object Object]" != currentType) {
                        if (currentValue != pre[key]) setResult(result, ("" == path ? "" : path + ".") + key, currentValue);
                    } else if ("[object Array]" == currentType) if ("[object Array]" != preType) setResult(result, ("" == path ? "" : path + ".") + key, currentValue); else if (currentValue.length < preValue.length) setResult(result, ("" == path ? "" : path + ".") + key, currentValue); else currentValue.forEach(function(item, index) {
                        _diff(item, preValue[index], ("" == path ? "" : path + ".") + key + "[" + index + "]", result);
                    }); else if ("[object Object]" == currentType) if ("[object Object]" != preType || Object.keys(currentValue).length < Object.keys(preValue).length) setResult(result, ("" == path ? "" : path + ".") + key, currentValue); else for (var subKey in currentValue) _diff(currentValue[subKey], preValue[subKey], ("" == path ? "" : path + ".") + key + "." + subKey, result);
                }(key);
            } else if ("[object Array]" == rootCurrentType) if ("[object Array]" != rootPreType) setResult(result, path, current); else if (current.length < pre.length) setResult(result, path, current); else current.forEach(function(item, index) {
                _diff(item, pre[index], path + "[" + index + "]", result);
            }); else setResult(result, path, current);
        }
    }
    function setResult(result, k, v) {
        if ("[object Function]" != type(v)) result[k] = v;
    }
    function type(obj) {
        return Object.prototype.toString.call(obj);
    }
    function render(vnode, parent, store) {
        function execTask(deadline) {
            while (deadline.timeRemaining() > 0) list.forEach(function(currentStore) {
                currentStore.update();
            });
            setTimeout(function() {
                requestIdleCallback(execTask);
            }, 200);
        }
        parent = "string" == typeof parent ? document.querySelector(parent) : parent;
        if (store) {
            store.instances = [];
            extendStoreUpate(store);
            store.originData = JSON.parse(JSON.stringify(store.data));
        }
        parent.store = store;
        diff(null, vnode, {}, !1, parent, !1);
        list.push(store);
        if (store && !tick) {
            requestIdleCallback(execTask);
            tick = !0;
        }
    }
    function extendStoreUpate(store) {
        store.update = function() {
            var _this = this;
            var diffResult = diff$1(this.data, this.originData);
            if ("" == Object.keys(diffResult)[0]) diffResult = diffResult[""];
            var updateAll = matchGlobalData(this.globalData, diffResult);
            if (Object.keys(diffResult).length > 0) {
                this.instances.forEach(function(instance) {
                    if (updateAll || _this.updateAll || instance.constructor.updatePath && needUpdate(diffResult, instance.constructor.updatePath)) instance.update();
                });
                this.onChange && this.onChange(diffResult);
                for (var key in diffResult) updateByPath(this.originData, key, "object" == typeof diffResult[key] ? JSON.parse(JSON.stringify(diffResult[key])) : diffResult[key]);
            }
        };
    }
    function matchGlobalData(globalData, diffResult) {
        if (!globalData) return !1;
        for (var keyA in diffResult) {
            if (globalData.indexOf(keyA) > -1) return !0;
            for (var i = 0, len = globalData.length; i < len; i++) if (includePath(keyA, globalData[i])) return !0;
        }
        return !1;
    }
    function needUpdate(diffResult, updatePath) {
        for (var keyA in diffResult) {
            if (updatePath[keyA]) return !0;
            for (var keyB in updatePath) if (includePath(keyA, keyB)) return !0;
        }
        return !1;
    }
    function includePath(pathA, pathB) {
        if (0 === pathA.indexOf(pathB)) {
            var next = pathA.substr(pathB.length, 1);
            if ("[" === next || "." === next) return !0;
        }
        return !1;
    }
    function updateByPath(origin, path, value) {
        var arr = path.replace(/]/g, "").replace(/\[/g, ".").split(".");
        var current = origin;
        for (var i = 0, len = arr.length; i < len; i++) if (i === len - 1) current[arr[i]] = value; else current = current[arr[i]];
    }
    function define(name, ctor) {
        customElements.define(name, ctor);
        if (ctor.data && !ctor.pure) ctor.updatePath = getUpdatePath(ctor.data);
    }
    function getUpdatePath(data) {
        var result = {};
        dataToPath(data, result);
        return result;
    }
    function dataToPath(data, result) {
        Object.keys(data).forEach(function(key) {
            result[key] = !0;
            var type = Object.prototype.toString.call(data[key]);
            if ("[object Object]" === type) _objToPath(data[key], key, result); else if ("[object Array]" === type) _arrayToPath(data[key], key, result);
        });
    }
    function _objToPath(data, path, result) {
        Object.keys(data).forEach(function(key) {
            result[path + "." + key] = !0;
            delete result[path];
            var type = Object.prototype.toString.call(data[key]);
            if ("[object Object]" === type) _objToPath(data[key], path + "." + key, result); else if ("[object Array]" === type) _arrayToPath(data[key], path + "." + key, result);
        });
    }
    function _arrayToPath(data, path, result) {
        data.forEach(function(item, index) {
            result[path + "[" + index + "]"] = !0;
            delete result[path];
            var type = Object.prototype.toString.call(item);
            if ("[object Object]" === type) _objToPath(item, path + "[" + index + "]", result); else if ("[object Array]" === type) _arrayToPath(item, path + "[" + index + "]", result);
        });
    }
    function tag(name, pure) {
        return function(target) {
            target.pure = pure;
            define(name, target);
        };
    }
    var options = {
        store: null,
        root: function() {
            if ("object" != typeof global || !global || global.Math !== Math || global.Array !== Array) return self || window || global || function() {
                return this;
            }(); else return global;
        }()
    };
    var stack = [];
    var EMPTY_CHILDREN = [];
    !function() {
        if (void 0 !== window.Reflect && void 0 !== window.customElements && !window.customElements.hasOwnProperty("polyfillWrapFlushCallback")) {
            var BuiltInHTMLElement = HTMLElement;
            window.HTMLElement = function() {
                return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
            };
            HTMLElement.prototype = BuiltInHTMLElement.prototype;
            HTMLElement.prototype.constructor = HTMLElement;
            Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
        }
    }();
    window.requestIdleCallback = window.requestIdleCallback || function(cb) {
        return setTimeout(function() {
            var start = Date.now();
            cb({
                didTimeout: !1,
                timeRemaining: function() {
                    return Math.max(0, 50 - (Date.now() - start));
                }
            });
        }, 1);
    };
    window.cancelIdleCallback = window.cancelIdleCallback || function(id) {
        clearTimeout(id);
    };
    "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var WeElement = function(_HTMLElement) {
        function WeElement() {
            _classCallCheck(this, WeElement);
            var _this = _possibleConstructorReturn(this, _HTMLElement.call(this));
            _this.props = nProps(_this.constructor.props);
            _this.data = _this.constructor.data || {};
            return _this;
        }
        _inherits(WeElement, _HTMLElement);
        WeElement.prototype.connectedCallback = function() {
            if (!this.constructor.pure) {
                var p = this.parentNode;
                while (p && !this.store) {
                    this.store = p.store;
                    p = p.parentNode || p.host;
                }
                if (this.store) this.store.instances.push(this);
            }
            this.install();
            var shadowRoot = this.attachShadow({
                mode: "open"
            });
            this.css && shadowRoot.appendChild(cssToDom(this.css()));
            this.host = diff(null, this.render(this.props, !this.constructor.pure && this.store ? this.store.data : this.data), {}, !1, null, !1);
            shadowRoot.appendChild(this.host);
            this.installed();
        };
        WeElement.prototype.disconnectedCallback = function() {
            this.uninstall();
            if (this.store) for (var i = 0, len = this.store.instances.length; i < len; i++) if (this.store.instances[i] === this) {
                this.store.instances.splice(i, 1);
                break;
            }
        };
        WeElement.prototype.update = function() {
            this.beforeUpdate();
            diff(this.host, this.render(this.props, !this.constructor.pure && this.store ? this.store.data : this.data));
            this.afterUpdate();
        };
        WeElement.prototype.fire = function(name, data) {
            this.dispatchEvent(new CustomEvent(name, {
                detail: data
            }));
        };
        WeElement.prototype.install = function() {};
        WeElement.prototype.installed = function() {};
        WeElement.prototype.uninstall = function() {};
        WeElement.prototype.beforeUpdate = function() {};
        WeElement.prototype.afterUpdate = function() {};
        return WeElement;
    }(HTMLElement);
    var list = [];
    var tick = !1;
    var omi = {
        tag: tag,
        WeElement: WeElement,
        render: render,
        h: h,
        createElement: h,
        options: options,
        define: define
    };
    options.root.Omi = omi;
    options.root.Omi.version = "4.0.3";
    if ('undefined' != typeof module) module.exports = omi; else self.Omi = omi;
}();
//# sourceMappingURL=omi.js.map
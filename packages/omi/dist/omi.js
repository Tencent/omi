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
            if ('boolean' == typeof child) child = null;
            if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
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
        var node = document.createElement('style');
        node.innerText = css;
        return node;
    }
    function npn(str) {
        return str.replace(/-(\w)/g, function($, $1) {
            return $1.toUpperCase();
        });
    }
    function applyRef(ref, value) {
        if (null != ref) if ('function' == typeof ref) ref(value); else ref.current = value;
    }
    function isArray(obj) {
        return '[object Array]' === Object.prototype.toString.call(obj);
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
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
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
        if ('key' === name) ; else if ('ref' === name) {
            applyRef(old, null);
            applyRef(value, node);
        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && !1 === IS_NON_DIMENSIONAL.test(i) ? value[i] + 'px' : value[i];
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
            try {
                node[name] = null == value ? '' : value;
            } catch (e) {}
            if ((null == value || !1 === value) && 'spellcheck' != name) node.removeAttribute(name);
        } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
            if (null == value || !1 === value) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('string' == typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
        }
    }
    function eventProxy(e) {
        return this.__l[e.type](options.event && options.event(e) || e);
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
            hydrating = null != dom && !('__preactattr_' in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) hydrating = !1;
        return ret;
    }
    function idiff(dom, vnode, context, mountAll, componentRoot) {
        var out = dom, prevSvgMode = isSvgMode;
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
        isSvgMode = 'svg' === vnodeName ? !0 : 'foreignObject' === vnodeName ? !1 : isSvgMode;
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
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
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
        for (name in attrs) if (isWeElement && 'object' == typeof attrs[name]) {
            dom.props[npn(name)] = attrs[name];
            update = !0;
        } else if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) {
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
    function render(vnode, parent, store) {
        parent = 'string' == typeof parent ? document.querySelector(parent) : parent;
        if (store) {
            store.instances = [];
            extendStoreUpate(store);
            options.store = store;
            store.data = new JSONPatcherProxy(store.data).observe(!0, handler);
        }
        diff(null, vnode, {}, !1, parent, !1);
    }
    function update(patch) {
        options.store.update(patch);
    }
    function extendStoreUpate(store) {
        store.update = function(patch) {
            var _this = this;
            var updateAll = matchGlobalData(this.globalData, patch);
            if (Object.keys(patch).length > 0) {
                this.instances.forEach(function(instance) {
                    if (updateAll || _this.updateAll || instance.constructor.updatePath && needUpdate(patch, instance.constructor.updatePath)) instance.update();
                });
                this.onChange && this.onChange(patch);
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
            if ('[' === next || '.' === next) return !0;
        }
        return !1;
    }
    function fixPath(path) {
        var mpPath = '';
        var arr = path.replace('/', '').split('/');
        arr.forEach(function(item, index) {
            if (index) if (isNaN(Number(item))) mpPath += '.' + item; else mpPath += '[' + item + ']'; else mpPath += item;
        });
        return mpPath;
    }
    function getArrayPatch(path) {
        var arr = path.replace('/', '').split('/');
        var current = options.store.data[arr[0]];
        for (var i = 1, len = arr.length; i < len - 1; i++) current = current[arr[i]];
        return {
            k: fixArrPath(path),
            v: current
        };
    }
    function fixArrPath(path) {
        var mpPath = '';
        var arr = path.replace('/', '').split('/');
        var len = arr.length;
        arr.forEach(function(item, index) {
            if (index < len - 1) if (index) if (isNaN(Number(item))) mpPath += '.' + item; else mpPath += '[' + item + ']'; else mpPath += item;
        });
        return mpPath;
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
            if ('[object Object]' === type) _objToPath(data[key], key, result); else if ('[object Array]' === type) _arrayToPath(data[key], key, result);
        });
    }
    function _objToPath(data, path, result) {
        Object.keys(data).forEach(function(key) {
            result[path + '.' + key] = !0;
            delete result[path];
            var type = Object.prototype.toString.call(data[key]);
            if ('[object Object]' === type) _objToPath(data[key], path + '.' + key, result); else if ('[object Array]' === type) _arrayToPath(data[key], path + '.' + key, result);
        });
    }
    function _arrayToPath(data, path, result) {
        data.forEach(function(item, index) {
            result[path + '[' + index + ']'] = !0;
            delete result[path];
            var type = Object.prototype.toString.call(item);
            if ('[object Object]' === type) _objToPath(item, path + '[' + index + ']', result); else if ('[object Array]' === type) _arrayToPath(item, path + '[' + index + ']', result);
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
            if ('object' != typeof global || !global || global.Math !== Math || global.Array !== Array) {
                if ('undefined' != typeof self) return self; else if ('undefined' != typeof window) return window; else if ('undefined' != typeof global) return global;
                return function() {
                    return this;
                }();
            }
            return global;
        }()
    };
    var stack = [];
    var EMPTY_CHILDREN = [];
    !function() {
        if (void 0 !== window.Reflect && void 0 !== window.customElements && !window.customElements.hasOwnProperty('polyfillWrapFlushCallback')) {
            var BuiltInHTMLElement = HTMLElement;
            window.HTMLElement = function() {
                return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
            };
            HTMLElement.prototype = BuiltInHTMLElement.prototype;
            HTMLElement.prototype.constructor = HTMLElement;
            Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
        }
    }();
    'function' == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
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
            this.store = options.store;
            if (this.store) this.store.instances.push(this);
            this.install();
            var shadowRoot = this.attachShadow({
                mode: 'open'
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
    var JSONPatcherProxy = function() {
        function deepClone(obj) {
            switch (typeof obj) {
              case 'object':
                return JSON.parse(JSON.stringify(obj));

              case 'undefined':
                return null;

              default:
                return obj;
            }
        }
        function escapePathComponent(str) {
            if (-1 == str.indexOf('/') && -1 == str.indexOf('~')) return str; else return str.replace(/~/g, '~0').replace(/\//g, '~1');
        }
        function findObjectPath(instance, obj) {
            var pathComponents = [];
            var parentAndPath = instance.parenthoodMap.get(obj);
            while (parentAndPath && parentAndPath.path) {
                pathComponents.unshift(parentAndPath.path);
                parentAndPath = instance.parenthoodMap.get(parentAndPath.parent);
            }
            if (pathComponents.length) {
                var path = pathComponents.join('/');
                return '/' + path;
            }
            return '';
        }
        function setTrap(instance, target, key, newValue) {
            var parentPath = findObjectPath(instance, target);
            var destinationPropKey = parentPath + '/' + escapePathComponent(key);
            if (instance.proxifiedObjectsMap.has(newValue)) {
                var newValueOriginalObject = instance.proxifiedObjectsMap.get(newValue);
                instance.parenthoodMap.set(newValueOriginalObject.originalObject, {
                    parent: target,
                    path: key
                });
            }
            var revokableInstance = instance.proxifiedObjectsMap.get(newValue);
            if (revokableInstance && !instance.isProxifyingTreeNow) revokableInstance.inherited = !0;
            if (newValue && 'object' == typeof newValue && !instance.proxifiedObjectsMap.has(newValue)) {
                instance.parenthoodMap.set(newValue, {
                    parent: target,
                    path: key
                });
                newValue = instance.A(target, newValue, key);
            }
            var operation = {
                op: 'remove',
                path: destinationPropKey
            };
            if (void 0 === newValue) {
                if (!Array.isArray(target) && !target.hasOwnProperty(key)) return Reflect.set(target, key, newValue);
                if (Array.isArray(target)) operation.op = 'replace', operation.value = null;
                var oldValue = instance.proxifiedObjectsMap.get(target[key]);
                if (oldValue) {
                    instance.parenthoodMap.delete(target[key]);
                    instance.disableTrapsForProxy(oldValue);
                    instance.proxifiedObjectsMap.delete(oldValue);
                }
            } else {
                if (Array.isArray(target) && !Number.isInteger(+key.toString())) {
                    if ('length' != key) console.warn('JSONPatcherProxy noticed a non-integer prop was set for an array. This will not emit a patch');
                    return Reflect.set(target, key, newValue);
                }
                operation.op = 'add';
                if (target.hasOwnProperty(key)) if (void 0 !== target[key] || Array.isArray(target)) operation.op = 'replace';
                operation.value = newValue;
            }
            var reflectionResult = Reflect.set(target, key, newValue);
            instance.defaultCallback(operation);
            return reflectionResult;
        }
        function deleteTrap(instance, target, key) {
            if (void 0 !== target[key]) {
                var parentPath = findObjectPath(instance, target);
                var destinationPropKey = parentPath + '/' + escapePathComponent(key);
                var revokableProxyInstance = instance.proxifiedObjectsMap.get(target[key]);
                if (revokableProxyInstance) if (revokableProxyInstance.inherited) revokableProxyInstance.inherited = !1; else {
                    instance.parenthoodMap.delete(revokableProxyInstance.originalObject);
                    instance.disableTrapsForProxy(revokableProxyInstance);
                    instance.proxifiedObjectsMap.delete(target[key]);
                }
                var reflectionResult = Reflect.deleteProperty(target, key);
                instance.defaultCallback({
                    op: 'remove',
                    path: destinationPropKey
                });
                return reflectionResult;
            }
        }
        function resume() {
            var _this = this;
            this.defaultCallback = function(operation) {
                _this.isRecording && _this.patches.push(operation);
                _this.userCallback && _this.userCallback(operation);
            };
            this.isObserving = !0;
        }
        function pause() {
            this.defaultCallback = function() {};
            this.isObserving = !1;
        }
        function JSONPatcherProxy(root, showDetachedWarning) {
            this.isProxifyingTreeNow = !1;
            this.isObserving = !1;
            this.proxifiedObjectsMap = new Map();
            this.parenthoodMap = new Map();
            if ('boolean' != typeof showDetachedWarning) showDetachedWarning = !0;
            this.showDetachedWarning = showDetachedWarning;
            this.originalObject = root;
            this.cachedProxy = null;
            this.isRecording = !1;
            this.userCallback;
            this.resume = resume.bind(this);
            this.pause = pause.bind(this);
        }
        JSONPatcherProxy.deepClone = deepClone;
        JSONPatcherProxy.escapePathComponent = escapePathComponent;
        JSONPatcherProxy.prototype.generateProxyAtPath = function(parent, obj, path) {
            var _this2 = this;
            if (!obj) return obj;
            var traps = {
                set: function(target, key, value, receiver) {
                    return setTrap(_this2, target, key, value);
                },
                deleteProperty: function(target, key) {
                    return deleteTrap(_this2, target, key);
                }
            };
            var revocableInstance = Proxy.revocable(obj, traps);
            revocableInstance.trapsInstance = traps;
            revocableInstance.originalObject = obj;
            this.parenthoodMap.set(obj, {
                parent: parent,
                path: path
            });
            this.proxifiedObjectsMap.set(revocableInstance.proxy, revocableInstance);
            return revocableInstance.proxy;
        };
        JSONPatcherProxy.prototype.A = function(parent, root, path) {
            for (var key in root) if (root.hasOwnProperty(key)) if (root[key] instanceof Object) root[key] = this.A(root, root[key], escapePathComponent(key));
            return this.generateProxyAtPath(parent, root, path);
        };
        JSONPatcherProxy.prototype.proxifyObjectTree = function(root) {
            this.pause();
            this.isProxifyingTreeNow = !0;
            var proxifiedObject = this.A(void 0, root, '');
            this.isProxifyingTreeNow = !1;
            this.resume();
            return proxifiedObject;
        };
        JSONPatcherProxy.prototype.disableTrapsForProxy = function(revokableProxyInstance) {
            if (this.showDetachedWarning) {
                var message = "You're accessing an object that is detached from the observedObject tree, see https://github.com/Palindrom/JSONPatcherProxy#detached-objects";
                revokableProxyInstance.trapsInstance.set = function(targetObject, propKey, newValue) {
                    console.warn(message);
                    return Reflect.set(targetObject, propKey, newValue);
                };
                revokableProxyInstance.trapsInstance.set = function(targetObject, propKey, newValue) {
                    console.warn(message);
                    return Reflect.set(targetObject, propKey, newValue);
                };
                revokableProxyInstance.trapsInstance.deleteProperty = function(targetObject, propKey) {
                    return Reflect.deleteProperty(targetObject, propKey);
                };
            } else {
                delete revokableProxyInstance.trapsInstance.set;
                delete revokableProxyInstance.trapsInstance.get;
                delete revokableProxyInstance.trapsInstance.deleteProperty;
            }
        };
        JSONPatcherProxy.prototype.observe = function(record, callback) {
            if (!record && !callback) throw new Error('You need to either record changes or pass a callback');
            this.isRecording = record;
            this.userCallback = callback;
            if (record) this.patches = [];
            this.cachedProxy = this.proxifyObjectTree(this.originalObject);
            return this.cachedProxy;
        };
        JSONPatcherProxy.prototype.generate = function() {
            if (!this.isRecording) throw new Error('You should set record to true to get patches later');
            return this.patches.splice(0, this.patches.length);
        };
        JSONPatcherProxy.prototype.revoke = function() {
            this.proxifiedObjectsMap.forEach(function(el) {
                el.revoke();
            });
        };
        JSONPatcherProxy.prototype.disableTraps = function() {
            this.proxifiedObjectsMap.forEach(this.disableTrapsForProxy, this);
        };
        return JSONPatcherProxy;
    }();
    var timeout = null;
    var patchs = {};
    var handler = function(patch) {
        clearTimeout(timeout);
        if ('remove' === patch.op) {
            var kv = getArrayPatch(patch.path);
            patchs[kv.k] = kv.v;
            timeout = setTimeout(function() {
                update(patchs);
                patchs = {};
            });
        } else {
            var key = fixPath(patch.path);
            patchs[key] = patch.value;
            timeout = setTimeout(function() {
                update(patchs);
                patchs = {};
            });
        }
    };
    options.root.Omi = {
        tag: tag,
        WeElement: WeElement,
        render: render,
        h: h,
        createElement: h,
        options: options,
        define: define
    };
    options.root.Omi.version = '4.0.1';
    var Omi = {
        tag: tag,
        WeElement: WeElement,
        render: render,
        h: h,
        createElement: h,
        options: options,
        define: define
    };
    if ('undefined' != typeof module) module.exports = Omi; else self.Omi = Omi;
}();
//# sourceMappingURL=omi.js.map
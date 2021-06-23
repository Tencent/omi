!function() {
    'use strict';
    function cssToDom(css) {
        var node = document.createElement('style');
        node.textContent = css;
        return node;
    }
    function camelCase(str) {
        return str.replace(/-(\w)/g, function($, $1) {
            return $1.toUpperCase();
        });
    }
    function Fragment(props) {
        return props.children;
    }
    function extend(obj, props) {
        for (var i in props) obj[i] = props[i];
        return obj;
    }
    function applyRef(ref, value) {
        if (null != ref) if ('function' == typeof ref) ref(value); else ref.current = value;
    }
    function isArray(obj) {
        return '[object Array]' === Object.prototype.toString.call(obj);
    }
    function getUse(data, paths, out, name) {
        var obj = [];
        paths.forEach(function(path, index) {
            var isPath = 'string' == typeof path;
            if (isPath) obj[index] = getTargetByPath(data, path); else {
                var key = Object.keys(path)[0];
                var value = path[key];
                if ('string' == typeof value) obj[index] = getTargetByPath(data, value); else {
                    var tempPath = value[0];
                    if ('string' == typeof tempPath) {
                        var tempVal = getTargetByPath(data, tempPath);
                        obj[index] = value[1] ? value[1](tempVal) : tempVal;
                    } else {
                        var args = [];
                        tempPath.forEach(function(path) {
                            args.push(getTargetByPath(data, path));
                        });
                        obj[index] = value[1].apply(null, args);
                    }
                }
                obj[key] = obj[index];
            }
        });
        if (out) out[name] = obj;
        return obj;
    }
    function pathToArr(path) {
        if ('string' != typeof path || !path) return []; else return path.replace(/]/g, '').replace(/\[/g, '.').split('.');
    }
    function getTargetByPath(origin, path) {
        var arr = pathToArr(path);
        var current = origin;
        for (var i = 0, len = arr.length; i < len; i++) current = current[arr[i]];
        return current;
    }
    function hyphenate(str) {
        return str.replace(hyphenateRE, '-$1').toLowerCase();
    }
    function getValByPath(path, current) {
        var arr = pathToArr(path);
        arr.forEach(function(prop) {
            current = current[prop];
        });
        return current;
    }
    function getPath(obj, out, name) {
        var result = {};
        obj.forEach(function(item) {
            if ('string' == typeof item) result[item] = !0; else {
                var tempPath = item[Object.keys(item)[0]];
                if ('string' == typeof tempPath) result[tempPath] = !0; else if ('string' == typeof tempPath[0]) result[tempPath[0]] = !0; else tempPath[0].forEach(function(path) {
                    return result[path] = !0;
                });
            }
        });
        if (out) out[name] = result;
        return result;
    }
    function removeItem(item, arr) {
        if (arr) for (var i = 0, len = arr.length; i < len; i++) if (arr[i] === item) {
            arr.splice(i, 1);
            break;
        }
    }
    function h(nodeName, attributes) {
        var lastSimple, child, simple, i, children = [];
        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
        if (attributes && null != attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
            if ('boolean' == typeof child) child = null;
            if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
            if (simple && lastSimple) children[children.length - 1] += child; else if (0 === children.length) children = [ child ]; else children.push(child);
            lastSimple = simple;
        }
        if (nodeName === Fragment) return children;
        var p = {
            nodeName: nodeName,
            children: children,
            attributes: null == attributes ? void 0 : attributes,
            key: null == attributes ? void 0 : attributes.key
        };
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else if ('function' == typeof vnode.nodeName) return options.mapping[node.nodeName.toLowerCase()] === vnode.nodeName;
        return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
    }
    function extend$1(name, handler) {
        extension['o-' + name] = handler;
    }
    function set(origin, path, value) {
        var arr = pathToArr(path);
        var current = origin;
        for (var i = 0, len = arr.length; i < len; i++) if (i === len - 1) current[arr[i]] = value; else current = current[arr[i]];
    }
    function get(origin, path) {
        var arr = pathToArr(path);
        var current = origin;
        for (var i = 0, len = arr.length; i < len; i++) current = current[arr[i]];
        return current;
    }
    function eventProxy(e) {
        return this.__l[e.type](e);
    }
    function bind(el, type, handler) {
        el.__l = el.__l || {};
        el.__l[type] = handler;
        el.addEventListener(type, eventProxy);
    }
    function unbind(el, type) {
        el.removeEventListener(type, eventProxy);
    }
    function createNode(nodeName, isSvg) {
        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
        node.normalizedNodeName = nodeName;
        return node;
    }
    function removeNode(node) {
        var parentNode = node.parentNode;
        if (parentNode) parentNode.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg, component) {
        if ('className' === name) name = 'class';
        if ('o' == name[0] && '-' == name[1]) {
            if (extension[name]) extension[name](node, value, component);
        } else if ('key' === name) ; else if ('ref' === name) {
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
            var nameLower = name.toLowerCase();
            name = (nameLower in node ? nameLower : name).slice(2);
            if (value) {
                if (!old) {
                    node.addEventListener(name, eventProxy$1, useCapture);
                    if ('tap' == name) {
                        node.addEventListener('touchstart', touchStart, useCapture);
                        node.addEventListener('touchend', touchEnd, useCapture);
                    }
                }
            } else {
                node.removeEventListener(name, eventProxy$1, useCapture);
                if ('tap' == name) {
                    node.removeEventListener('touchstart', touchStart, useCapture);
                    node.removeEventListener('touchend', touchEnd, useCapture);
                }
            }
            (node.__l || (node.__l = {}))[name] = value;
        } else if ('INPUT' === node.nodeName && 'value' === name) node[name] = null == value ? '' : value; else if ('list' !== name && 'type' !== name && 'css' !== name && !isSvg && name in node && '' !== value) {
            try {
                node[name] = null == value ? '' : value;
            } catch (e) {}
            if ((null == value || !1 === value) && 'spellcheck' != name) node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name);
        } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
            if (null == value || !1 === value) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.pureSetAttribute ? node.pureSetAttribute(name, value) : node.setAttribute(name, value);
        }
    }
    function eventProxy$1(e) {
        return this.__l[e.type](options.event && options.event(e) || e);
    }
    function touchStart(e) {
        this.F = e.touches[0].pageX;
        this.G = e.touches[0].pageY;
        this.H = document.body.scrollTop;
    }
    function touchEnd(e) {
        if (Math.abs(e.changedTouches[0].pageX - this.F) < 30 && Math.abs(e.changedTouches[0].pageY - this.G) < 30 && Math.abs(document.body.scrollTop - this.H) < 30) this.dispatchEvent(new CustomEvent('tap', {
            detail: e
        }));
    }
    function diff(dom, vnode, parent, component, updateSelf) {
        if (dom || vnode) {
            var ret;
            if (!diffLevel++) {
                isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
                hydrating = null != dom && !('prevProps' in dom);
            }
            if (vnode && vnode.nodeName === Fragment) vnode = vnode.children;
            if (isArray(vnode)) if (parent) {
                var styles = parent.querySelectorAll('style');
                styles.forEach(function(s) {
                    parent.removeChild(s);
                });
                innerDiffNode(parent, vnode, hydrating, component, updateSelf);
                for (var i = styles.length - 1; i >= 0; i--) parent.firstChild ? parent.insertBefore(styles[i], parent.firstChild) : parent.appendChild(style[i]);
            } else {
                ret = [];
                vnode.forEach(function(item, index) {
                    var ele = idiff(0 === index ? dom : null, item, component, updateSelf);
                    ret.push(ele);
                });
            } else {
                if (isArray(dom)) dom.forEach(function(one, index) {
                    if (0 === index) ret = idiff(one, vnode, component, updateSelf); else recollectNodeTree(one, !1);
                }); else ret = idiff(dom, vnode, component, updateSelf);
                if (parent && ret.parentNode !== parent) parent.appendChild(ret);
            }
            if (!--diffLevel) hydrating = !1;
            return ret;
        }
    }
    function idiff(dom, vnode, component, updateSelf) {
        if (dom && vnode && dom.props) dom.props.children = vnode.children;
        var out = dom, prevSvgMode = isSvgMode;
        if (null == vnode || 'boolean' == typeof vnode) vnode = '';
        if ('string' == typeof vnode || 'number' == typeof vnode) {
            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || component)) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                out = document.createTextNode(vnode);
                if (dom) {
                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                    recollectNodeTree(dom, !0);
                }
            }
            out.prevProps = !0;
            return out;
        }
        var vnodeName = vnode.nodeName;
        if ('function' == typeof vnodeName) for (var key in options.mapping) if (options.mapping[key] === vnodeName) {
            vnodeName = key;
            vnode.nodeName = key;
            break;
        }
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
        var fc = out.firstChild, props = out.prevProps, vchildren = vnode.children;
        if (null == props) {
            props = out.prevProps = {};
            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
        }
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) if ('WeElement' != out.constructor.is || !out.constructor.noSlot) innerDiffNode(out, vchildren, hydrating || null != props.dangerouslySetInnerHTML, component, updateSelf);
        diffAttributes(out, vnode.attributes, props, component, updateSelf);
        if (out.props) out.props.children = vnode.children;
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, isHydrating, component, updateSelf) {
        var j, c, f, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i], props = _child.prevProps, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
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
            child = idiff(child, vchild, component, updateSelf);
            f = originalChildren[i];
            if (child && child !== dom && child !== f) if (null == f) dom.appendChild(child); else if (child === f.nextSibling) removeNode(f); else dom.insertBefore(child, f);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
    }
    function recollectNodeTree(node, unmountOnly) {
        if (null != node.prevProps && node.prevProps.ref) if ('function' == typeof node.prevProps.ref) node.prevProps.ref(null); else if (node.prevProps.ref.current) node.prevProps.ref.current = null;
        if (!1 === unmountOnly || null == node.prevProps) removeNode(node);
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
    function diffAttributes(dom, attrs, old, component, updateSelf) {
        var name;
        var isWeElement = dom.update;
        var oldClone;
        if (dom.receiveProps) oldClone = Object.assign({}, old);
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) {
            setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode, component);
            if (isWeElement) delete dom.props[name];
        }
        for (name in attrs) if (isWeElement && 'object' == typeof attrs[name] && 'ref' !== name) {
            if ('style' === name) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode, component);
            var ccName = camelCase(name);
            dom.props[ccName] = old[ccName] = attrs[name];
        } else if (!('children' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) {
            setAccessor(dom, name, old[name], attrs[name], isSvgMode, component);
            if (isWeElement) {
                var _ccName = camelCase(name);
                dom.props[_ccName] = old[_ccName] = attrs[name];
            } else old[name] = attrs[name];
        }
        if (isWeElement && !updateSelf && dom.parentNode) if (!1 !== dom.receiveProps(dom.props, oldClone)) dom.update();
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
            if (store.data) observeStore(store); else {
                options.isMultiStore = !0;
                for (var key in store) observeStore(store[key], key);
            }
            parent.store = store;
        }
        return diff(null, vnode, parent, !1);
    }
    function observeStore(store, key) {
        store.instances = [];
        store.updateSelfInstances = [];
        extendStoreUpdate(store, key);
        store.data = new JSONPatcherProxy(store.data).observe(!1, function(patch) {
            var patchs = {};
            if ('remove' === patch.op) {
                var kv = getArrayPatch(patch.path, store);
                patchs[kv.k] = kv.v;
                update(patchs, store);
            } else {
                var key = fixPath(patch.path);
                patchs[key] = patch.value;
                update(patchs, store);
            }
        });
    }
    function update(patch, store) {
        store.update(patch);
    }
    function extendStoreUpdate(store, key) {
        store.update = function(patch) {
            if (Object.keys(patch).length > 0) {
                this.instances.forEach(function(instance) {
                    compute(instance, key);
                    if (key) {
                        if (instance.M && instance.M[key] && needUpdate(patch, instance.M[key])) {
                            if (instance.use) getUse(store.data, ('function' == typeof instance.use ? instance.use() : instance.use)[key], instance.using, key);
                            instance.update();
                        }
                    } else if (instance.M && needUpdate(patch, instance.M)) {
                        if (instance.use) instance.using = getUse(store.data, 'function' == typeof instance.use ? instance.use() : instance.use);
                        instance.update();
                    }
                });
                this.updateSelfInstances.forEach(function(instance) {
                    compute(instance, key);
                    if (key) {
                        if (instance.R && instance.R[key] && needUpdate(patch, instance.R[key])) {
                            if (instance.useSelf) getUse(store.data, ('function' == typeof instance.useSelf ? instance.useSelf() : instance.useSelf)[key], instance.usingSelf, key);
                            instance.updateSelf();
                        }
                    } else if (instance.R && needUpdate(patch, instance.R)) {
                        instance.usingSelf = getUse(store.data, 'function' == typeof instance.useSelf ? instance.useSelf() : instance.useSelf);
                        instance.updateSelf();
                    }
                });
                this.onChange && this.onChange(patch);
            }
        };
    }
    function compute(instance, isMultiStore) {
        if (instance.compute) for (var ck in instance.compute) instance.computed[ck] = instance.compute[ck].call(isMultiStore ? instance.store : instance.store.data);
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
    function getArrayPatch(path, store) {
        var arr = path.replace('/', '').split('/');
        var current = store.data[arr[0]];
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
    function _classCallCheck$1(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn$1(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return call && ("object" == typeof call || "function" == typeof call) ? call : self;
    }
    function _inherits$1(subClass, superClass) {
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
    function define(name, ctor, config) {
        if (!options.mapping[name]) if ('WeElement' === ctor.is) {
            customElements.define(name, ctor);
            options.mapping[name] = ctor;
        } else {
            if ('string' == typeof config) config = {
                css: config
            }; else config = config || {};
            var Ele = function(_WeElement) {
                function Ele() {
                    var _temp, _this, _ret;
                    _classCallCheck$1(this, Ele);
                    for (var _len = arguments.length, args = Array(_len), key = 0; key < _len; key++) args[key] = arguments[key];
                    return _ret = (_temp = _this = _possibleConstructorReturn$1(this, _WeElement.call.apply(_WeElement, [ this ].concat(args))), 
                    _this.compute = config.compute, _temp), _possibleConstructorReturn$1(_this, _ret);
                }
                _inherits$1(Ele, _WeElement);
                Ele.prototype.render = function() {
                    return ctor.call(this, this);
                };
                return Ele;
            }(WeElement);
            Ele.css = config.css;
            Ele.propTypes = config.propTypes;
            Ele.defaultProps = config.defaultProps;
            Ele.isLightDom = config.isLightDom;
            for (var key in config) !function(key) {
                if ('function' == typeof config[key]) Ele.prototype[key] = function() {
                    return config[key].apply(this, arguments);
                };
            }(key);
            storeHelpers.forEach(function(func) {
                if (config[func] && 'function' !== config[func]) Ele.prototype[func] = function() {
                    return config[func];
                };
            });
            customElements.define(name, Ele);
            options.mapping[name] = Ele;
        }
    }
    function tag(name, pure) {
        return function(target) {
            target.pure = pure;
            define(name, target);
        };
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function getHost(ele) {
        var p = ele.parentNode;
        while (p) if (p.host) return p.host; else if (p.shadowRoot && p.shadowRoot.host) return p.shadowRoot.host; else p = p.parentNode;
    }
    function rpx(str) {
        return str.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, function(a, b) {
            return window.innerWidth * Number(b) / 750 + 'px';
        });
    }
    function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (arg) {
                var argType = typeof arg;
                if ('string' === argType || 'number' === argType) classes.push(arg); else if (Array.isArray(arg) && arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) classes.push(inner);
                } else if ('object' === argType) for (var key in arg) if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
            }
        }
        return classes.join(' ');
    }
    function extractClass() {
        var _Array$prototype$slic = Array.prototype.slice.call(arguments, 0), props = _Array$prototype$slic[0], args = _Array$prototype$slic.slice(1);
        if (props.class) {
            args.unshift(props.class);
            delete props.class;
        } else if (props.className) {
            args.unshift(props.className);
            delete props.className;
        }
        if (args.length > 0) return {
            class: classNames.apply(null, args)
        };
    }
    function o(obj) {
        return JSON.stringify(obj);
    }
    function htm(t) {
        var r = n(this, e(t), arguments, []);
        return r.length > 1 ? r : r[0];
    }
    function createRef() {
        return {};
    }
    var options = {
        store: null,
        root: function() {
            if ('object' != typeof global || !global || global.Math !== Math || global.Array !== Array) return self || window || global || function() {
                return this;
            }(); else return global;
        }(),
        mapping: {},
        isMultiStore: !1,
        ignoreAttrs: !1
    };
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
    var hyphenateRE = /\B([A-Z])/g;
    var stack = [];
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var extension = {};
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var id = 0;
    var WeElement = function(_HTMLElement) {
        function WeElement() {
            _classCallCheck(this, WeElement);
            var _this = _possibleConstructorReturn(this, _HTMLElement.call(this));
            _this.props = Object.assign({}, _this.constructor.defaultProps);
            _this.elementId = id++;
            _this.computed = {};
            return _this;
        }
        _inherits(WeElement, _HTMLElement);
        WeElement.prototype.connectedCallback = function() {
            var p = this.parentNode;
            while (p && !this.store) {
                this.store = p.store;
                p = p.parentNode || p.host;
            }
            this.attrsToProps();
            if (this.props.use) this.use = this.props.use;
            if (this.props.useSelf) this.use = this.props.useSelf;
            if (this.use) {
                var use = 'function' == typeof this.use ? this.use() : this.use;
                if (options.isMultiStore) {
                    var _updatePath = {};
                    var using = {};
                    for (var storeName in use) {
                        _updatePath[storeName] = {};
                        using[storeName] = {};
                        getPath(use[storeName], _updatePath, storeName);
                        getUse(this.store[storeName].data, use[storeName], using, storeName);
                        this.store[storeName].instances.push(this);
                    }
                    this.using = using;
                    this.M = _updatePath;
                } else {
                    this.M = getPath(use);
                    this.using = getUse(this.store.data, use);
                    this.store.instances.push(this);
                }
            }
            if (this.useSelf) {
                var _use = 'function' == typeof this.useSelf ? this.useSelf() : this.useSelf;
                if (options.isMultiStore) {
                    var _updatePath2 = {};
                    var _using = {};
                    for (var _storeName in _use) {
                        getPath(_use[_storeName], _updatePath2, _storeName);
                        getUse(this.store[_storeName].data, _use[_storeName], _using, _storeName);
                        this.store[_storeName].updateSelfInstances.push(this);
                    }
                    this.usingSelf = _using;
                    this.R = _updatePath2;
                } else {
                    this.R = getPath(_use);
                    this.usingSelf = getUse(this.store.data, _use);
                    this.store.updateSelfInstances.push(this);
                }
            }
            if (this.compute) for (var key in this.compute) this.computed[key] = this.compute[key].call(options.isMultiStore ? this.store : this.store.data);
            this.beforeInstall();
            this.install();
            this.afterInstall();
            var shadowRoot;
            if (this.constructor.isLightDom) shadowRoot = this; else if (!this.shadowRoot) shadowRoot = this.attachShadow({
                mode: 'open'
            }); else {
                shadowRoot = this.shadowRoot;
                var fc;
                while (fc = shadowRoot.firstChild) shadowRoot.removeChild(fc);
            }
            if (this.constructor.css) {
                if ('string' == typeof this.constructor.css) {
                    console.log(1111);
                    this.styleSheet = new CSSStyleSheet();
                    this.styleSheet.replaceSync(this.constructor.css);
                } else {
                    console.log(this.constructor.css);
                    this.styleSheet = this.constructor.css;
                }
                shadowRoot.adoptedStyleSheets = [ this.styleSheet ];
            }
            if (this.css) shadowRoot.appendChild(cssToDom('function' == typeof this.css ? this.css() : this.css));
            this.beforeRender();
            options.afterInstall && options.afterInstall(this);
            var rendered = this.render(this.props, this.store);
            this.rootNode = diff(null, rendered, null, this);
            this.rendered();
            if (this.props.css) {
                this.N = cssToDom(this.props.css);
                this.O = this.props.css;
                shadowRoot.appendChild(this.N);
            }
            if (isArray(this.rootNode)) this.rootNode.forEach(function(item) {
                shadowRoot.appendChild(item);
            }); else this.rootNode && shadowRoot.appendChild(this.rootNode);
            this.installed();
            this.B = !0;
        };
        WeElement.prototype.disconnectedCallback = function() {
            this.uninstall();
            this.B = !1;
            if (this.store) if (options.isMultiStore) for (var key in this.store) {
                var current = this.store[key];
                removeItem(this, current.instances);
                removeItem(this, current.updateSelfInstances);
            } else {
                removeItem(this, this.store.instances);
                removeItem(this, this.store.updateSelfInstances);
            }
        };
        WeElement.prototype.update = function(ignoreAttrs, updateSelf) {
            this.J = !0;
            this.beforeUpdate();
            this.beforeRender();
            if (this.O != this.props.css) {
                this.O = this.props.css;
                this.N.textContent = this.O;
            }
            this.attrsToProps(ignoreAttrs);
            var rendered = this.render(this.props, this.store);
            this.rendered();
            this.rootNode = diff(this.rootNode, rendered, this.constructor.isLightDom ? this : this.shadowRoot, this, updateSelf);
            this.J = !1;
            this.updated();
        };
        WeElement.prototype.forceUpdate = function() {
            this.update(!0);
        };
        WeElement.prototype.updateProps = function(obj) {
            var _this2 = this;
            Object.keys(obj).forEach(function(key) {
                _this2.props[key] = obj[key];
                if (_this2.prevProps) _this2.prevProps[key] = obj[key];
            });
            this.forceUpdate();
        };
        WeElement.prototype.updateSelf = function(ignoreAttrs) {
            this.update(ignoreAttrs, !0);
        };
        WeElement.prototype.removeAttribute = function(key) {
            _HTMLElement.prototype.removeAttribute.call(this, key);
            this.B && this.update();
        };
        WeElement.prototype.setAttribute = function(key, val) {
            if (val && 'object' == typeof val) _HTMLElement.prototype.setAttribute.call(this, key, JSON.stringify(val)); else _HTMLElement.prototype.setAttribute.call(this, key, val);
            this.B && this.update();
        };
        WeElement.prototype.pureRemoveAttribute = function(key) {
            _HTMLElement.prototype.removeAttribute.call(this, key);
        };
        WeElement.prototype.pureSetAttribute = function(key, val) {
            _HTMLElement.prototype.setAttribute.call(this, key, val);
        };
        WeElement.prototype.attrsToProps = function(ignoreAttrs) {
            if (!options.ignoreAttrs && !ignoreAttrs) {
                var ele = this;
                ele.props.css = ele.getAttribute('css');
                var attrs = this.constructor.propTypes;
                if (attrs) Object.keys(attrs).forEach(function(key) {
                    var type = attrs[key];
                    var val = ele.getAttribute(hyphenate(key));
                    if (null !== val) switch (type) {
                      case String:
                        ele.props[key] = val;
                        break;

                      case Number:
                        ele.props[key] = Number(val);
                        break;

                      case Boolean:
                        if ('false' === val || '0' === val) ele.props[key] = !1; else ele.props[key] = !0;
                        break;

                      case Array:
                      case Object:
                        if (':' === val[0]) ele.props[key] = getValByPath(val.substr(1), Omi.$); else ele.props[key] = JSON.parse(val.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4').replace(/'([\s\S]*?)'/g, '"$1"').replace(/,(\s*})/g, '$1'));
                    } else if (ele.constructor.defaultProps && ele.constructor.defaultProps.hasOwnProperty(key)) ele.props[key] = ele.constructor.defaultProps[key]; else ele.props[key] = null;
                });
            }
        };
        WeElement.prototype.fire = function(name, data) {
            this.dispatchEvent(new CustomEvent(name, {
                detail: data
            }));
        };
        WeElement.prototype.beforeInstall = function() {};
        WeElement.prototype.install = function() {};
        WeElement.prototype.afterInstall = function() {};
        WeElement.prototype.installed = function() {};
        WeElement.prototype.uninstall = function() {};
        WeElement.prototype.beforeUpdate = function() {};
        WeElement.prototype.updated = function() {};
        WeElement.prototype.beforeRender = function() {};
        WeElement.prototype.rendered = function() {};
        WeElement.prototype.receiveProps = function() {};
        return WeElement;
    }(HTMLElement);
    WeElement.is = 'WeElement';
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
            operation.oldValue = target[key];
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
    var storeHelpers = [ 'use', 'useSelf' ];
    var hasOwn = {}.hasOwnProperty;
    var n = function(t, r, u, e) {
        for (var p = 1; p < r.length; p++) {
            var s = r[p], h = "number" == typeof s ? u[s] : s, a = r[++p];
            1 === a ? e[0] = h : 3 === a ? e[1] = Object.assign(e[1] || {}, h) : 5 === a ? (e[1] = e[1] || {})[r[++p]] = h : 6 === a ? e[1][r[++p]] += h + "" : e.push(a ? t.apply(null, n(t, h, u, [ "", null ])) : h);
        }
        return e;
    }, t = function(n) {
        for (var t, r, u = 1, e = "", p = "", s = [ 0 ], h = function(n) {
            1 === u && (n || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? s.push(n || e, 0) : 3 === u && (n || e) ? (s.push(n || e, 1), 
            u = 2) : 2 === u && "..." === e && n ? s.push(n, 3) : 2 === u && e && !n ? s.push(!0, 5, e) : u >= 5 && ((e || !n && 5 === u) && (s.push(e, u, r), 
            u = 6), n && (s.push(n, u, r), u = 6)), e = "";
        }, a = 0; a < n.length; a++) {
            a && (1 === u && h(), h(a));
            for (var f = 0; f < n[a].length; f++) t = n[a][f], 1 === u ? "<" === t ? (h(), s = [ s ], u = 3) : e += t : 4 === u ? "--" === e && ">" === t ? (u = 1, 
            e = "") : e = t + e[0] : p ? t === p ? p = "" : e += t : '"' === t || "'" === t ? p = t : ">" === t ? (h(), u = 1) : u && ("=" === t ? (u = 5, 
            r = e, e = "") : "/" === t && (u < 5 || ">" === n[a][f + 1]) ? (h(), 3 === u && (s = s[0]), u = s, (s = s[0]).push(u, 2), 
            u = 0) : " " === t || "\t" === t || "\n" === t || "\r" === t ? (h(), u = 2) : e += t), 3 === u && "!--" === e && (u = 4, 
            s = s[0]);
        }
        return h(), s;
    }, r = "function" == typeof Map, u = r ? new Map() : {}, e = r ? function(n) {
        var r = u.get(n);
        return r || u.set(n, r = t(n)), r;
    } : function(n) {
        for (var r = "", e = 0; e < n.length; e++) r += n[e].length + "-" + n[e];
        return u[r] || (u[r] = t(n));
    };
    !function() {
        function rejectImports(contents) {
            var _contents = contents.replace(importPattern, '');
            if (_contents !== contents) console.warn('@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418');
            return _contents.trim();
        }
        function clearRules(sheet) {
            for (var i = 0; i < sheet.cssRules.length; i++) sheet.deleteRule(0);
        }
        function insertAllRules(from, to) {
            forEach.call(from.cssRules, function(rule, i) {
                to.insertRule(rule.cssText, i);
            });
        }
        function isElementConnected(element) {
            return 'isConnected' in element ? element.isConnected : document.contains(element);
        }
        function unique(arr) {
            return arr.filter(function(value, index) {
                return arr.indexOf(value) === index;
            });
        }
        function diff(arr1, arr2) {
            return arr1.filter(function(value) {
                return -1 === arr2.indexOf(value);
            });
        }
        function removeNode(node) {
            node.parentNode.removeChild(node);
        }
        function getShadowRoot(element) {
            return element.shadowRoot || closedShadowRootRegistry.get(element);
        }
        function isCSSStyleSheetInstance(instance) {
            return 'object' == typeof instance ? proto$2.isPrototypeOf(instance) || nonConstructedProto.isPrototypeOf(instance) : !1;
        }
        function isNonConstructedStyleSheetInstance(instance) {
            return 'object' == typeof instance ? nonConstructedProto.isPrototypeOf(instance) : !1;
        }
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
            $locations.set(sheet, $locations.get(sheet).filter(function(_location) {
                return _location !== location;
            }));
        }
        function restyleAdopter(sheet, adopter) {
            requestAnimationFrame(function() {
                clearRules(adopter.sheet);
                insertAllRules($basicStyleSheet.get(sheet), adopter.sheet);
            });
        }
        function checkInvocationCorrectness(self) {
            if (!$basicStyleSheet.has(self)) throw new TypeError('Illegal invocation');
        }
        function ConstructedStyleSheet() {
            var self = this;
            var style = document.createElement('style');
            bootstrapper.body.appendChild(style);
            $basicStyleSheet.set(self, style.sheet);
            $locations.set(self, []);
            $adoptersByLocation.set(self, new WeakMap());
        }
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
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return getAssociatedLocation(this).sheets;
                },
                set: function(sheets) {
                    getAssociatedLocation(this).update(sheets);
                }
            });
        }
        function traverseWebComponents(node, callback) {
            var iter = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT, function(foundNode) {
                return getShadowRoot(foundNode) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }, null, !1);
            for (var next = void 0; next = iter.nextNode(); ) callback(getShadowRoot(next));
        }
        function isExistingAdopter(self, element) {
            return element instanceof HTMLStyleElement && $uniqueSheets.get(self).some(function(sheet) {
                return getAdopterByLocation(sheet, self);
            });
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
            sheets.forEach(function(sheet) {
                styleList.appendChild(getAdopterByLocation(sheet, self) || addAdopterLocation(sheet, self));
            });
            container.insertBefore(styleList, null);
            observer.observe(container, defaultObserverOptions);
            sheets.forEach(function(sheet) {
                restyleAdopter(sheet, getAdopterByLocation(sheet, self));
            });
        }
        function Location(element) {
            var self = this;
            self.sheets = [];
            $element.set(self, element);
            $uniqueSheets.set(self, []);
            $observer.set(self, new MutationObserver(function(mutations, observer) {
                if (document) mutations.forEach(function(mutation) {
                    if (!hasShadyCss) forEach.call(mutation.addedNodes, function(node) {
                        if (node instanceof Element) traverseWebComponents(node, function(root) {
                            getAssociatedLocation(root).connect();
                        });
                    });
                    forEach.call(mutation.removedNodes, function(node) {
                        if (node instanceof Element) {
                            if (isExistingAdopter(self, node)) adopt(self);
                            if (!hasShadyCss) traverseWebComponents(node, function(root) {
                                getAssociatedLocation(root).disconnect();
                            });
                        }
                    });
                }); else observer.disconnect();
            }));
        }
        if (!('adoptedStyleSheets' in document)) {
            var hasShadyCss = 'ShadyCSS' in window && !ShadyCSS.nativeShadow;
            var bootstrapper = document.implementation.createHTMLDocument('boot');
            var closedShadowRootRegistry = new WeakMap();
            var _DOMException = 'object' == typeof DOMException ? Error : DOMException;
            var defineProperty = Object.defineProperty;
            var forEach = Array.prototype.forEach;
            var importPattern = /@import.+?;?$/gm;
            var cssStyleSheetMethods = [ 'addImport', 'addPageRule', 'addRule', 'deleteRule', 'insertRule', 'removeImport', 'removeRule' ];
            var NonConstructedStyleSheet = CSSStyleSheet;
            var nonConstructedProto = NonConstructedStyleSheet.prototype;
            nonConstructedProto.replace = function() {
                return Promise.reject(new _DOMException("Can't call replace on non-constructed CSSStyleSheets."));
            };
            nonConstructedProto.replaceSync = function() {
                throw new _DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.");
            };
            var $basicStyleSheet = new WeakMap();
            var $locations = new WeakMap();
            var $adoptersByLocation = new WeakMap();
            var proto$2 = ConstructedStyleSheet.prototype;
            proto$2.replace = function(contents) {
                try {
                    this.replaceSync(contents);
                    return Promise.resolve(this);
                } catch (e) {
                    return Promise.reject(e);
                }
            };
            proto$2.replaceSync = function(contents) {
                checkInvocationCorrectness(this);
                if ('string' == typeof contents) {
                    var self_1 = this;
                    var style = $basicStyleSheet.get(self_1).ownerNode;
                    style.textContent = rejectImports(contents);
                    $basicStyleSheet.set(self_1, style.sheet);
                    $locations.get(self_1).forEach(function(location) {
                        if (location.isConnected()) restyleAdopter(self_1, getAdopterByLocation(self_1, location));
                    });
                }
            };
            defineProperty(proto$2, 'cssRules', {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    checkInvocationCorrectness(this);
                    return $basicStyleSheet.get(this).cssRules;
                }
            });
            cssStyleSheetMethods.forEach(function(method) {
                proto$2[method] = function() {
                    var self = this;
                    checkInvocationCorrectness(self);
                    var args = arguments;
                    var basic = $basicStyleSheet.get(self);
                    var locations = $locations.get(self);
                    var result = basic[method].apply(basic, args);
                    locations.forEach(function(location) {
                        if (location.isConnected()) {
                            var sheet = getAdopterByLocation(self, location).sheet;
                            sheet[method].apply(sheet, args);
                        }
                    });
                    return result;
                };
            });
            defineProperty(ConstructedStyleSheet, Symbol.hasInstance, {
                configurable: !0,
                value: isCSSStyleSheetInstance
            });
            var defaultObserverOptions = {
                childList: !0,
                subtree: !0
            };
            var locations = new WeakMap();
            var $element = new WeakMap();
            var $uniqueSheets = new WeakMap();
            var $observer = new WeakMap();
            var proto$1 = Location.prototype;
            proto$1.isConnected = function() {
                var element = $element.get(this);
                return element instanceof Document ? 'loading' !== element.readyState : isElementConnected(element.host);
            };
            proto$1.connect = function() {
                var container = getAdopterContainer(this);
                $observer.get(this).observe(container, defaultObserverOptions);
                if ($uniqueSheets.get(this).length > 0) adopt(this);
                traverseWebComponents(container, function(root) {
                    getAssociatedLocation(root).connect();
                });
            };
            proto$1.disconnect = function() {
                $observer.get(this).disconnect();
            };
            proto$1.update = function(sheets) {
                var self = this;
                var locationType = $element.get(self) === document ? 'Document' : 'ShadowRoot';
                if (!Array.isArray(sheets)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Iterator getter is not callable.");
                if (!sheets.every(isCSSStyleSheetInstance)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Failed to convert value to 'CSSStyleSheet'");
                if (sheets.some(isNonConstructedStyleSheetInstance)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Can't adopt non-constructed stylesheets");
                self.sheets = sheets;
                var oldUniqueSheets = $uniqueSheets.get(self);
                var uniqueSheets = unique(sheets);
                var removedSheets = diff(oldUniqueSheets, uniqueSheets);
                removedSheets.forEach(function(sheet) {
                    removeNode(getAdopterByLocation(sheet, self));
                    removeAdopterLocation(sheet, self);
                });
                $uniqueSheets.set(self, uniqueSheets);
                if (self.isConnected() && uniqueSheets.length > 0) adopt(self);
            };
            window.CSSStyleSheet = ConstructedStyleSheet;
            attachAdoptedStyleSheetProperty(Document);
            if ('ShadowRoot' in window) {
                attachAdoptedStyleSheetProperty(ShadowRoot);
                var proto = Element.prototype;
                var attach_1 = proto.attachShadow;
                proto.attachShadow = function(init) {
                    var root = attach_1.call(this, init);
                    if ('closed' === init.mode) closedShadowRootRegistry.set(this, root);
                    return root;
                };
            }
            var documentLocation = getAssociatedLocation(document);
            if (documentLocation.isConnected()) documentLocation.connect(); else document.addEventListener('DOMContentLoaded', documentLocation.connect.bind(documentLocation));
        }
    }();
    h.f = Fragment;
    var html = htm.bind(h);
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
        html: html,
        htm: htm,
        o: o,
        elements: elements,
        $: $,
        extend: extend$1,
        get: get,
        set: set,
        bind: bind,
        unbind: unbind,
        JSONProxy: JSONPatcherProxy
    };
    options.root.Omi = omi;
    options.root.omi = omi;
    options.root.Omi.version = '6.19.3';
    if ('undefined' != typeof module) module.exports = omi; else self.Omi = omi;
}();
//# sourceMappingURL=omi.js.map
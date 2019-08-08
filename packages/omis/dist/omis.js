!function() {
    'use strict';
    function getCtorName(ctor) {
        for (var i = 0, len = options.styleCache.length; i < len; i++) {
            var item = options.styleCache[i];
            if (item.ctor === ctor) return item.attrName;
        }
        var attrName = '_ss' + styleId;
        options.styleCache.push({
            ctor: ctor,
            attrName: attrName
        });
        styleId++;
        return attrName;
    }
    function scoper(css, prefix) {
        prefix = '[' + prefix.toLowerCase() + ']';
        css = css.replace(/\/\*[^*]*\*+([^\/][^*]*\*+)*\//g, '');
        var re = new RegExp('([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{}]*{)|s*{)', 'g');
        css = css.replace(re, function(g0, g1, g2, g3) {
            if (void 0 === g2) g2 = '';
            if (g1.match(/^\s*(@media|\d+%?|@-webkit-keyframes|@keyframes|to|from|@font-face)/)) return g1 + g2 + g3;
            var appendClass = g1.replace(/(\s*)$/, '') + prefix + g2;
            return appendClass + g3;
        });
        return css;
    }
    function addStyle(cssText, id, parent) {
        id = id.toLowerCase();
        var ele = document.getElementById(id);
        var head = parent || document.getElementsByTagName('head')[0];
        if (ele && ele.parentNode === head) head.removeChild(ele);
        var someThingStyles = document.createElement('style');
        head.appendChild(someThingStyles);
        someThingStyles.setAttribute('type', 'text/css');
        someThingStyles.setAttribute('id', id);
        if (window.ActiveXObject) someThingStyles.styleSheet.cssText = cssText; else someThingStyles.textContent = cssText;
    }
    function addStyleToHead(style, attr, parent) {
        if (parent || !options.staticStyleMapping[attr]) {
            "undefined" != typeof wx && wx.getSystemInfoSync || addStyle(scoper(style, attr), attr, parent);
            if (!parent) options.staticStyleMapping[attr] = !0;
        }
    }
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
        p.attributes = null == attributes ? {} : attributes;
        if (options.runTimeComponent) {
            if (options.runTimeComponent.constructor.css) p.attributes[getCtorName(options.runTimeComponent.constructor)] = '';
            if (options.runTimeComponent.props && options.runTimeComponent.props.css) p.attributes['_ds' + options.runTimeComponent.elementId] = '';
        }
        p.key = p.attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        for (var i in props) obj[i] = props[i];
        return obj;
    }
    function applyRef(ref, value) {
        if (ref) if ('function' == typeof ref) ref(value); else ref.current = value;
    }
    function getPath(obj) {
        if ('[object Array]' === Object.prototype.toString.call(obj)) {
            var result = {};
            obj.forEach(function(item) {
                if ('string' == typeof item) result[item] = !0; else {
                    var tempPath = item[Object.keys(item)[0]];
                    if ('string' == typeof tempPath) result[tempPath] = !0; else if ('string' == typeof tempPath[0]) result[tempPath[0]] = !0; else tempPath[0].forEach(function(path) {
                        return result[path] = !0;
                    });
                }
            });
            return result;
        } else return getUpdatePath(obj);
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
            if (type === OBJECTTYPE) _objToPath(data[key], key, result); else if (type === ARRAYTYPE) _arrayToPath(data[key], key, result);
        });
    }
    function _objToPath(data, path, result) {
        Object.keys(data).forEach(function(key) {
            result[path + '.' + key] = !0;
            delete result[path];
            var type = Object.prototype.toString.call(data[key]);
            if (type === OBJECTTYPE) _objToPath(data[key], path + '.' + key, result); else if (type === ARRAYTYPE) _arrayToPath(data[key], path + '.' + key, result);
        });
    }
    function _arrayToPath(data, path, result) {
        data.forEach(function(item, index) {
            result[path + '[' + index + ']'] = !0;
            delete result[path];
            var type = Object.prototype.toString.call(item);
            if (type === OBJECTTYPE) _objToPath(item, path + '[' + index + ']', result); else if (type === ARRAYTYPE) _arrayToPath(item, path + '[' + index + ']', result);
        });
    }
    function getUse(data, paths) {
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
        return obj;
    }
    function getTargetByPath(origin, path) {
        var arr = path.replace(/]/g, '').replace(/\[/g, '.').split('.');
        var current = origin;
        for (var i = 0, len = arr.length; i < len; i++) current = current[arr[i]];
        return current;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function enqueueRender(component) {
        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
    }
    function rerender() {
        var p;
        while (p = items.pop()) if (p.__d) renderComponent(p);
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
    }
    function getNodeProps(vnode) {
        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
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
    function setAccessor(node, name, old, value, isSvg, store) {
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
            (node.__l || (node.__l = {}))[name] = value && store ? value.bind(store) : value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            try {
                node[name] = null == value ? '' : value;
            } catch (e) {}
            if ((null == value || !1 === value) && 'spellcheck' != name) node.removeAttribute(name);
        } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
            if (null == value || !1 === value) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
        }
    }
    function eventProxy(e) {
        return this.__l[e.type](options.event && options.event(e) || e);
    }
    function flushMounts() {
        var c;
        while (c = mounts.shift()) {
            if (c.constructor.css) addStyleToHead(c.constructor.css, getCtorName(c.constructor));
            if (c.props.css) addStyleToHead(c.props.css, '_ds' + c.elementId);
            if (options.afterMount) options.afterMount(c);
            if (c.store.installed) c.store.installed();
        }
    }
    function diff(dom, vnode, $, mountAll, parent, componentRoot, store) {
        if (!diffLevel++) {
            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
            hydrating = null != dom && !('prevProps' in dom);
        }
        var ret = idiff(dom, vnode, $, mountAll, componentRoot, store);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, $, mountAll, componentRoot, store) {
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
            out.__p = !0;
            return out;
        }
        var vnodeName = vnode.nodeName;
        if ('function' == typeof vnodeName) return buildComponentFromVNode(dom, vnode, $, mountAll);
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
        var fc = out.firstChild, props = out.__p, vchildren = vnode.children;
        if (null == props) {
            props = out.__p = {};
            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
        }
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, $, mountAll, hydrating || null != props.dangerouslySetInnerHTML, store);
        diffAttributes(out, vnode.attributes, props, store);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, $, mountAll, isHydrating, store) {
        var j, c, f, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i], props = _child.__p, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
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
            } else if (min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
                child = c;
                children[j] = void 0;
                if (j === childrenLen - 1) childrenLen--;
                if (j === min) min++;
                break;
            }
            child = idiff(child, vchild, $, mountAll, null, store);
            f = originalChildren[i];
            if (child && child !== dom && child !== f) if (null == f) dom.appendChild(child); else if (child === f.nextSibling) removeNode(f); else dom.insertBefore(child, f);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component); else {
            if (null != node.__p) applyRef(node.__p.ref, null);
            if (!1 === unmountOnly || null == node.__p) removeNode(node);
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
    function diffAttributes(dom, attrs, old, store) {
        var name;
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode, store);
        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode, store);
    }
    function createComponent(Ctor, props, $) {
        var inst, i = recyclerComponents.length;
        inst = new Component(props, $);
        inst.constructor = Ctor;
        inst.render = doRender;
        if (Ctor.store) {
            inst.store = Ctor.store(inst, $);
            inst.store.update = inst.update.bind(inst);
        }
        if (inst.$ && inst.$.data) if (inst.constructor.use) {
            inst.constructor.updatePath = getPath(inst.constructor.use);
            inst.using = getUse(inst.$.data, inst.constructor.use);
            inst.$.instances.push(inst);
        } else if (inst.use) {
            var use = 'function' == typeof inst.use ? inst.use() : inst.use;
            inst.M = getPath(use);
            inst.using = getUse(inst.$.data, use);
            inst.$.instances.push(inst);
        }
        while (i--) if (recyclerComponents[i].constructor === Ctor) {
            inst.__b = recyclerComponents[i].__b;
            recyclerComponents.splice(i, 1);
            return inst;
        }
        return inst;
    }
    function doRender(props, $) {
        return this.constructor(props, this.store, this, $);
    }
    function setComponentProps(component, props, renderMode, $, mountAll) {
        if (!component.__x) {
            component.__x = !0;
            component.__r = props.ref;
            component.__k = props.key;
            delete props.ref;
            delete props.key;
            if (!component.base || mountAll) {
                if (component.store.install) component.store.install();
            } else if (component.store.receiveProps) component.R = component.store.receiveProps(props, $);
            if ($ && $ !== component.$) component.$ = $;
            if (!component.__p) component.__p = component.props;
            component.props = props;
            component.__x = !1;
            if (0 !== renderMode) if (1 === renderMode || !1 !== options.syncComponentUpdates || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
            applyRef(component.__r, component);
        }
    }
    function renderComponent(component, renderMode, mountAll, isChild) {
        if (!component.__x) {
            var rendered, inst, cbase, props = component.props, $ = component.$, previousProps = component.__p || props, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
            if (isUpdate) {
                component.props = previousProps;
                if (!1 !== component.R) {
                    skip = !1;
                    if (component.store.beforeUpdate) component.store.beforeUpdate(props, $);
                } else skip = !0;
                delete component.R;
                component.props = props;
            }
            component.__p = component.__c = component.__b = null;
            component.__d = !1;
            if (!skip) {
                options.runTimeComponent = component;
                if (component.store.beforeRender) component.store.beforeRender();
                rendered = component.render(props, $);
                options.runTimeComponent = null;
                var toUnmount, base, childComponent = rendered && rendered.nodeName;
                if ('function' == typeof childComponent) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, $, !1); else {
                        toUnmount = inst;
                        component._component = inst = createComponent(childComponent, childProps, $);
                        inst.__b = inst.__b || nextBase;
                        inst.__u = component;
                        setComponentProps(inst, childProps, 0, $, !1);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === renderMode) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, $, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0, component.store);
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
                    var componentRef = component, t = component;
                    while (t = t.__u) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.push(component); else if (!skip) {
                if (component.store.updated) component.store.updated(previousProps);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            while (component.__h.length) component.__h.pop().call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, $, mountAll) {
        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, $, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, $);
            if (dom && !c.__b) {
                c.__b = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, $, mountAll);
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
        if (component.store.uninstall) component.store.uninstall();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner); else if (base) {
            if (null != base.__p) applyRef(base.__p.ref, null);
            component.__b = base;
            removeNode(base);
            recyclerComponents.push(component);
            removeChildren(base);
        }
        applyRef(component.__r, null);
    }
    function Component(props, $) {
        this.__d = !0;
        this.elementId = id++;
        this.store = {};
        this.$ = $;
        this.props = props;
        this.__h = [];
    }
    function obaa(target, arr, callback) {
        var eventPropArr = [];
        if (isArray(target)) {
            if (0 === target.length) target.$_o = {
                $_r: target,
                $_p: '#'
            };
            mock(target, target);
        }
        for (var prop in target) if (target.hasOwnProperty(prop)) if (callback) {
            if (isArray(arr) && isInArray(arr, prop)) {
                eventPropArr.push(prop);
                watch(target, prop, null, target);
            } else if (isString(arr) && prop == arr) {
                eventPropArr.push(prop);
                watch(target, prop, null, target);
            }
        } else {
            eventPropArr.push(prop);
            watch(target, prop, null, target);
        }
        if (!target.$_c) target.$_c = [];
        var propChanged = callback ? callback : arr;
        target.$_c.push({
            all: !callback,
            propChanged: propChanged,
            eventPropArr: eventPropArr
        });
    }
    function mock(target, root) {
        methods.forEach(function(item) {
            target[item] = function() {
                var old = Array.prototype.slice.call(this, 0);
                var result = Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
                if (new RegExp('\\b' + item + '\\b').test(triggerStr)) {
                    for (var cprop in this) if (this.hasOwnProperty(cprop) && !isFunction(this[cprop])) watch(this, cprop, this.$_o.$_p, root);
                    onPropertyChanged('Array-' + item, this, old, this, this.$_o.$_p, root);
                }
                return result;
            };
            target['pure' + item.substring(0, 1).toUpperCase() + item.substring(1)] = function() {
                return Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
            };
        });
    }
    function watch(target, prop, path, root) {
        if ('$_o' !== prop) if (!isFunction(target[prop])) {
            if (!target.$_o) target.$_o = {
                $_r: root
            };
            if (void 0 !== path && null !== path) target.$_o.$_p = path; else target.$_o.$_p = '#';
            var currentValue = target.$_o[prop] = target[prop];
            Object.defineProperty(target, prop, {
                get: function() {
                    return this.$_o[prop];
                },
                set: function(value) {
                    var old = this.$_o[prop];
                    this.$_o[prop] = value;
                    onPropertyChanged(prop, value, old, this, target.$_o.$_p, root);
                },
                configurable: !0,
                enumerable: !0
            });
            if ('object' == typeof currentValue) {
                if (isArray(currentValue)) {
                    mock(currentValue, root);
                    if (0 === currentValue.length) {
                        if (!currentValue.$_o) currentValue.$_o = {};
                        if (void 0 !== path && null !== path) currentValue.$_o.$_p = path + '-' + prop; else currentValue.$_o.$_p = "#-" + prop;
                    }
                }
                for (var cprop in currentValue) if (currentValue.hasOwnProperty(cprop)) watch(currentValue, cprop, target.$_o.$_p + '-' + prop, root);
            }
        }
    }
    function onPropertyChanged(prop, value, oldValue, target, path, root) {
        if (value !== oldValue && root.$_c) {
            var rootName = getRootName(prop, path);
            for (var i = 0, len = root.$_c.length; i < len; i++) {
                var handler = root.$_c[i];
                if (handler.all || isInArray(handler.eventPropArr, rootName) || 0 === rootName.indexOf('Array-')) handler.propChanged.call(target, prop, value, oldValue, path);
            }
        }
        if (0 !== prop.indexOf('Array-') && 'object' == typeof value) watch(target, prop, target.$_o.$_p, root);
    }
    function isFunction(obj) {
        return '[object Function]' == Object.prototype.toString.call(obj);
    }
    function isArray(obj) {
        return '[object Array]' === Object.prototype.toString.call(obj);
    }
    function isString(obj) {
        return 'string' == typeof obj;
    }
    function isInArray(arr, item) {
        for (var i = arr.length; --i > -1; ) if (item === arr[i]) return !0;
        return !1;
    }
    function getRootName(prop, path) {
        if ('#' === path) return prop; else return path.split('-')[1];
    }
    function render(vnode, parent, globalStore) {
        obsStore(globalStore);
        return diff(null, vnode, globalStore, !1, 'string' == typeof parent ? document.querySelector(parent) : parent, !1);
    }
    function obsStore(store) {
        if (store && store.data) {
            store.instances = [];
            extendStoreUpate(store);
            obaa(store.data, function(prop, val, old, path) {
                var patchs = {};
                var key = fixPath(path + '-' + prop);
                patchs[key] = !0;
                store.update(patchs);
            });
        }
    }
    function extendStoreUpate(store) {
        store.update = function(patch) {
            var _this = this;
            var updateAll = matchGlobalData(this.globalData, patch);
            if (Object.keys(patch).length > 0) {
                this.instances.forEach(function(instance) {
                    if (updateAll || _this.updateAll || instance.constructor.updatePath && needUpdate(patch, instance.constructor.updatePath) || instance.M && needUpdate(patch, instance.M)) {
                        if (instance.constructor.use) instance.using = getUse(store.data, instance.constructor.use); else if (instance.use) instance.using = getUse(store.data, 'function' == typeof instance.use ? instance.use() : instance.use);
                        instance.update();
                    }
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
        var arr = path.replace('#-', '').split('-');
        arr.forEach(function(item, index) {
            if (index) if (isNaN(Number(item))) mpPath += '.' + item; else mpPath += '[' + item + ']'; else mpPath += item;
        });
        return mpPath;
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
    function define(name, Component) {
        customElements.define(name, function(_HTMLElement) {
            function _class() {
                _classCallCheck(this, _class);
                return _possibleConstructorReturn(this, _HTMLElement.apply(this, arguments));
            }
            _inherits(_class, _HTMLElement);
            _class.prototype.connectedCallback = function() {
                var shadowRoot = this.attachShadow({
                    mode: 'open'
                });
                this.props = {};
                this.attrsToProps();
                if (Component.css) addStyleToHead(Component.css, getCtorName(Component), shadowRoot);
                this.W = render(h(Component, this.props), shadowRoot);
                if (this.props.css) addStyleToHead(this.props.css, '_ds' + this.W._component.elementId, shadowRoot);
            };
            _class.prototype.disconnectedCallback = function() {};
            _class.prototype.addEventListener = function(name, callback) {
                this.W._component.props['on' + name.charAt(0).toUpperCase() + name.slice(1)] = callback;
            };
            _class.prototype.removeEventListener = function(name, callback) {
                var props = this.W._component.props;
                var eventName = 'on' + name.charAt(0).toUpperCase() + name.slice(1);
                for (var key in props) if (key === eventName && callback === props[key]) {
                    delete props[key];
                    break;
                }
            };
            _class.prototype.removeAttribute = function(key) {
                _HTMLElement.prototype.removeAttribute.call(this, key);
                delete this.W._component.props[key];
                if (Component.defaultProps.hasOwnProperty(key)) this.W._component.props[key] = Component.defaultProps[key];
                this.W._component.update();
            };
            _class.prototype.setAttribute = function(key, val) {
                if (val && 'object' == typeof val) {
                    val = JSON.stringify(val);
                    _HTMLElement.prototype.setAttribute.call(this, key, val);
                } else {
                    val = val.toString();
                    _HTMLElement.prototype.setAttribute.call(this, key, val);
                }
                this.attrToProp(key, val, this.W._component.props);
                this.W._component.update();
            };
            _class.prototype.attrToProp = function(key, val, props) {
                var type = Component.propTypes[key];
                switch (type) {
                  case String:
                    props[key] = val;
                    break;

                  case Number:
                    props[key] = Number(val);
                    break;

                  case Boolean:
                    if ('false' === val || '0' === val) props[key] = !1; else props[key] = !0;
                    break;

                  case Array:
                  case Object:
                    props[key] = JSON.parse(val.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4').replace(/'([\s\S]*?)'/g, '"$1"').replace(/,(\s*})/g, '$1'));
                }
            };
            _class.prototype.attrsToProps = function() {
                var _this2 = this;
                this.props.css = this.getAttribute('css');
                var attrs = Component.propTypes;
                if (attrs) Object.keys(attrs).forEach(function(key) {
                    var type = attrs[key];
                    var val = _this2.getAttribute(hyphenate(key));
                    if (null !== val) switch (type) {
                      case String:
                        _this2.props[key] = val;
                        break;

                      case Number:
                        _this2.props[key] = Number(val);
                        break;

                      case Boolean:
                        if ('false' === val || '0' === val) _this2.props[key] = !1; else _this2.props[key] = !0;
                        break;

                      case Array:
                      case Object:
                        _this2.props[key] = JSON.parse(val.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4').replace(/'([\s\S]*?)'/g, '"$1"').replace(/,(\s*})/g, '$1'));
                    } else if (Component.defaultProps && Component.defaultProps.hasOwnProperty(key)) _this2.props[key] = Component.defaultProps[key]; else _this2.props[key] = null;
                });
            };
            return _class;
        }(HTMLElement));
    }
    function hyphenate(str) {
        return str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
    }
    function createRef() {
        return {};
    }
    var VNode = function() {};
    var options = {
        runTimeComponent: {},
        styleCache: [],
        staticStyleMapping: {}
    };
    var styleId = 0;
    var stack = [];
    var EMPTY_CHILDREN = [];
    var defer = 'function' == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var items = [];
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var recyclerComponents = [];
    var id = 0;
    extend(Component.prototype, {
        update: function(callback) {
            if (callback) this.__h.push(callback);
            renderComponent(this, 2);
        },
        render: function() {}
    });
    var triggerStr = [ 'concat', 'copyWithin', 'fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'size' ].join(',');
    var methods = [ 'concat', 'copyWithin', 'entries', 'every', 'fill', 'filter', 'find', 'findIndex', 'forEach', 'includes', 'indexOf', 'join', 'keys', 'lastIndexOf', 'map', 'pop', 'push', 'reduce', 'reduceRight', 'reverse', 'shift', 'slice', 'some', 'sort', 'splice', 'toLocaleString', 'toString', 'unshift', 'values', 'size' ];
    obaa.add = function(obj, prop) {
        watch(obj, prop, obj.$_o.$_p, obj.$_o.$_r);
    };
    obaa.set = function(obj, prop, value) {
        watch(obj, prop, obj.$_o.$_p, obj.$_o.$_r);
        obj[prop] = value;
    };
    Array.prototype.size = function(length) {
        this.length = length;
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
    var Omis = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        createRef: createRef,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options,
        define: define,
        obaa: obaa
    };
    if ('undefined' != typeof window) window.Omis = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        createRef: createRef,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options,
        define: define,
        obaa: obaa
    };
    if ('undefined' != typeof module) module.exports = Omis; else self.Omis = Omis;
}();
//# sourceMappingURL=omis.js.map
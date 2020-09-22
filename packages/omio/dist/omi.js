!function() {
    'use strict';
    function VNode() {}
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
        var p = new VNode();
        p.nodeName = nodeName;
        p.children = children;
        p.attributes = null == attributes ? void 0 : attributes;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function toObject(val) {
        if (null === val || void 0 === val) throw new TypeError('Object.assign cannot be called with null or undefined');
        return Object(val);
    }
    function assign(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
            from = Object(arguments[s]);
            for (var key in from) if (hasOwnProperty.call(from, key)) to[key] = from[key];
            if (getOwnPropertySymbols) {
                symbols = getOwnPropertySymbols(from);
                for (var i = 0; i < symbols.length; i++) if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
            }
        }
        return to;
    }
    function extend(obj, props) {
        for (var i in props) obj[i] = props[i];
        return obj;
    }
    function applyRef(ref, value) {
        if (ref) if ('function' == typeof ref) ref(value); else ref.current = value;
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
        out && (out[name] = obj);
        return obj;
    }
    function getTargetByPath(origin, path) {
        var arr = path.replace(/]/g, '').replace(/\[/g, '.').split('.');
        var current = origin;
        for (var i = 0, len = arr.length; i < len; i++) current = current[arr[i]];
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
        out && (out[name] = result);
        return result;
    }
    function removeItem(item, arr) {
        for (var i = 0, len = arr.length; i < len; i++) if (arr[i] === item) {
            arr.splice(i, 1);
            break;
        }
    }
    function Fragment(props) {
        return props.children;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function enqueueRender(component) {
        if (1 == items.push(component)) (options.debounceRendering || defer)(rerender);
    }
    function rerender() {
        var p;
        while (p = items.pop()) renderComponent(p);
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        if ('string' == typeof vnode.nodeName) {
            var ctor = mapping[vnode.nodeName];
            if (ctor) return hydrating || node._componentConstructor === ctor; else return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
        }
        return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
    }
    function getNodeProps(vnode) {
        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
    }
    function createNode(nodeName, isSvg) {
        var node = isSvg ? options.doc.createElementNS('http://www.w3.org/2000/svg', nodeName) : options.doc.createElement(nodeName);
        node.__n = nodeName;
        return node;
    }
    function parseCSSText(cssText) {
        var cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, ' ').replace(/\s+/g, ' ');
        var style = {}, _ref = cssTxt.match(/ ?(.*?) ?{([^}]*)}/) || [ a, b, cssTxt ], a = _ref[0], b = _ref[1], rule = _ref[2];
        var properties = rule.split(';').map(function(o) {
            return o.split(':').map(function(x) {
                return x && x.trim();
            });
        });
        for (var i = properties, i = Array.isArray(i), i = 0, i = i ? i : i[Symbol.iterator](); ;) {
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
            style[function(s) {
                return s.replace(/\W+\w/g, function(match) {
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
        if ('key' === name) ; else if ('ref' === name) {
            applyRef(old, null);
            applyRef(value, node);
        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) if (options.isWeb) {
            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && !1 === IS_NON_DIMENSIONAL$1.test(i) ? value[i] + 'px' : value[i];
            }
        } else {
            var oldJson = old, currentJson = value;
            if ('string' == typeof old) oldJson = parseCSSText(old);
            if ('string' == typeof value) currentJson = parseCSSText(value);
            var result = {}, changed = !1;
            if (oldJson) {
                for (var key in oldJson) if ('object' == typeof currentJson && !(key in currentJson)) {
                    result[key] = '';
                    changed = !0;
                }
                for (var ckey in currentJson) if (currentJson[ckey] !== oldJson[ckey]) {
                    result[ckey] = currentJson[ckey];
                    changed = !0;
                }
                if (changed) node.setStyles(result);
            } else node.setStyles(currentJson);
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var useCapture = name !== (name = name.replace(/Capture$/, ''));
            var nameLower = name.toLowerCase();
            name = (nameLower in node ? nameLower : name).slice(2);
            if (value) {
                if (!old) {
                    node.addEventListener(name, eventProxy, useCapture);
                    if ('tap' == name) {
                        node.addEventListener('touchstart', touchStart, useCapture);
                        node.addEventListener('touchend', touchEnd, useCapture);
                    }
                }
            } else {
                node.removeEventListener(name, eventProxy, useCapture);
                if ('tap' == name) {
                    node.removeEventListener('touchstart', touchStart, useCapture);
                    node.removeEventListener('touchend', touchEnd, useCapture);
                }
            }
            (node.__l || (node.__l = {}))[name] = value;
        } else if ('list' !== name && 'tagName' !== name && 'form' !== name && 'type' !== name && 'size' !== name && 'download' !== name && 'href' !== name && !isSvg && name in node) setProperty(node, name, null == value ? '' : value); else {
            var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
            if (null == value || !1 === value) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
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
    function touchStart(e) {
        this.C = e.touches[0].pageX;
        this.D = e.touches[0].pageY;
        this.F = document.body.scrollTop;
    }
    function touchEnd(e) {
        if (Math.abs(e.changedTouches[0].pageX - this.C) < 30 && Math.abs(e.changedTouches[0].pageY - this.D) < 30 && Math.abs(document.body.scrollTop - this.F) < 30) this.dispatchEvent(new CustomEvent('tap', {
            detail: e
        }));
    }
    function getCtorName(ctor) {
        for (var i = 0, len = options.styleCache.length; i < len; i++) {
            var item = options.styleCache[i];
            if (item.ctor === ctor) return item.attrName;
        }
        var attrName = 's' + styleId;
        options.styleCache.push({
            ctor: ctor,
            attrName: attrName
        });
        styleId++;
        return attrName;
    }
    function scoper(css, prefix) {
        prefix = '[' + prefix.toLowerCase() + ']';
        css = css.replace(/\/\*[^*]*\*+([^/][^*]*\*+)*\//g, '');
        var re = new RegExp('([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{}]*{)|s*{)', 'g');
        css = css.replace(re, function(g0, g1, g2, g3) {
            if (void 0 === g2) g2 = '';
            if (g1.match(/^\s*(@media|\d+%?|@-webkit-keyframes|@keyframes|to|from|@font-face)/)) return g1 + g2 + g3;
            var appendClass = g1.replace(/(\s*)$/, '') + prefix + g2;
            return appendClass + g3;
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
        if (window.ActiveXObject) someThingStyles.styleSheet.cssText = cssText; else someThingStyles.textContent = cssText;
    }
    function addStyleWithoutId(cssText) {
        var head = document.getElementsByTagName('head')[0];
        var someThingStyles = document.createElement('style');
        head.appendChild(someThingStyles);
        someThingStyles.setAttribute('type', 'text/css');
        if (window.ActiveXObject) someThingStyles.styleSheet.cssText = cssText; else someThingStyles.textContent = cssText;
    }
    function addScopedAttrStatic(vdom, attr) {
        if (options.scopedStyle) scopeVdom(attr, vdom);
    }
    function addStyleToHead(style, attr) {
        if (options.scopedStyle) {
            if (!options.staticStyleMapping[attr]) {
                addStyle(scoper(style, attr), attr);
                options.staticStyleMapping[attr] = !0;
            }
        } else if (!options.staticStyleMapping[attr]) {
            addStyleWithoutId(style);
            options.staticStyleMapping[attr] = !0;
        }
    }
    function scopeVdom(attr, vdom) {
        if ('object' == typeof vdom) {
            vdom.attributes = vdom.attributes || {};
            vdom.attributes[attr] = '';
            vdom.css = vdom.css || {};
            vdom.css[attr] = '';
            vdom.children.forEach(function(child) {
                return scopeVdom(attr, child);
            });
        }
    }
    function scopeHost(vdom, css) {
        if ('object' == typeof vdom && css) {
            vdom.attributes = vdom.attributes || {};
            for (var key in css) vdom.attributes[key] = '';
        }
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.installed) c.installed();
            if (c.constructor.css || c.css) addStyleToHead(c.constructor.css ? c.constructor.css : 'function' == typeof c.css ? c.css() : c.css, '_s' + getCtorName(c.constructor));
        }
    }
    function diff(dom, vnode, store, mountAll, parent, componentRoot, updateSelf) {
        if (!diffLevel++) {
            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
            hydrating = null != dom && !('__omiattr_' in dom);
        }
        var ret;
        if (isArray(vnode)) vnode = {
            nodeName: 'span',
            children: vnode
        }; else if (vnode && vnode.nodeName === Fragment) vnode.nodeName = 'span';
        ret = idiff(dom, vnode, store, mountAll, componentRoot, updateSelf);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, store, mountAll, componentRoot, updateSelf) {
        var out = dom, prevSvgMode = isSvgMode;
        if (null == vnode || 'boolean' == typeof vnode) vnode = '';
        var vnodeName = vnode.nodeName;
        if (options.mapping[vnodeName]) {
            vnode.nodeName = options.mapping[vnodeName];
            return buildComponentFromVNode(dom, vnode, store, mountAll, updateSelf);
        }
        if ('function' == typeof vnodeName) return buildComponentFromVNode(dom, vnode, store, mountAll, updateSelf);
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
            try {
                out.__omiattr_ = !0;
            } catch (e) {}
            return out;
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
        var fc = out.firstChild, props = out.__omiattr_, vchildren = vnode.children;
        if (null == props) {
            props = out.__omiattr_ = {};
            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
        }
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, store, mountAll, hydrating || null != props.dangerouslySetInnerHTML, updateSelf);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, store, mountAll, isHydrating, updateSelf) {
        var j, c, f, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i], props = _child.__omiattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
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
            child = idiff(child, vchild, store, mountAll, null, updateSelf);
            f = originalChildren[i];
            if (child && child !== dom && child !== f) if (null == f) dom.appendChild(child); else if (child === f.nextSibling) removeNode(f); else dom.insertBefore(child, f);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component); else {
            if (null != node.__omiattr_) applyRef(node.__omiattr_.ref, null);
            if (!1 === unmountOnly || null == node.__omiattr_) removeNode(node);
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
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
    function collectComponent(component) {
        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
    }
    function createComponent(Ctor, props, store, vnode) {
        var inst, list = components[Ctor.name];
        if (Ctor.prototype && Ctor.prototype.render) {
            inst = new Ctor(props, store);
            Component.call(inst, props, store);
        } else {
            inst = new Component(props, store);
            inst.constructor = Ctor;
            inst.render = doRender;
        }
        vnode && (inst.scopedCssAttr = vnode.css);
        if (inst.store) {
            if (inst.use) {
                var use = 'function' == typeof inst.use ? inst.use() : inst.use;
                if (options.isMultiStore) {
                    var _updatePath = {};
                    var using = {};
                    for (var storeName in use) {
                        _updatePath[storeName] = {};
                        using[storeName] = {};
                        getPath(use[storeName], _updatePath, storeName);
                        getUse(inst.store[storeName].data, use[storeName], using, storeName);
                        inst.store[storeName].instances.push(inst);
                    }
                    inst.using = using;
                    inst.H = _updatePath;
                } else {
                    inst.H = getPath(use);
                    inst.using = getUse(inst.store.data, use);
                    inst.store.instances.push(inst);
                }
            }
            if (inst.useSelf) {
                var _use = 'function' == typeof inst.useSelf ? inst.useSelf() : inst.useSelf;
                if (options.isMultiStore) {
                    var _updatePath2 = {};
                    var _using = {};
                    for (var _storeName in _use) {
                        getPath(_use[_storeName], _updatePath2, _storeName);
                        getUse(inst.store[_storeName].data, _use[_storeName], _using, _storeName);
                        inst.store[_storeName].updateSelfInstances.push(inst);
                    }
                    inst.usingSelf = _using;
                    inst.I = _updatePath2;
                } else {
                    inst.I = getPath(_use);
                    inst.usingSelf = getUse(inst.store.data, _use);
                    inst.store.updateSelfInstances.push(inst);
                }
            }
            if (inst.compute) for (var key in inst.compute) inst.computed[key] = inst.compute[key].call(options.isMultiStore ? inst.store : inst.store.data);
        }
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
            inst.__b = list[i].__b;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function doRender(props, store) {
        return this.constructor(props, store);
    }
    function setComponentProps(component, props, opts, store, mountAll) {
        if (!component.__x) {
            component.__x = !0;
            if (component.__r = props.ref) delete props.ref;
            if (component.__k = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.beforeInstall) component.beforeInstall();
                if (component.install) component.install();
            }
            if (!component.__p) component.__p = component.props;
            component.props = props;
            component.__x = !1;
            if (0 !== opts) if (1 === opts || !1 !== options.syncComponentUpdates || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
            applyRef(component.__r, component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild, updateSelf) {
        if (!component.__x) {
            var rendered, inst, cbase, props = component.props, store = component.store, previousProps = component.__p || props, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
            if (isUpdate) {
                component.props = previousProps;
                var receiveResult = !0;
                if (component.receiveProps) receiveResult = component.receiveProps(props, previousProps);
                if (!1 !== receiveResult) {
                    skip = !1;
                    if (component.beforeUpdate) component.beforeUpdate(props, store);
                } else skip = !0;
                component.props = props;
            }
            component.__p = component.__b = null;
            if (!skip) {
                component.beforeRender && component.beforeRender();
                rendered = component.render(props, store);
                if (component.constructor.css || component.css) addScopedAttrStatic(rendered, '_s' + getCtorName(component.constructor));
                scopeHost(rendered, component.scopedCssAttr);
                var toUnmount, base, childComponent = rendered && rendered.nodeName, ctor = options.mapping[childComponent];
                if (ctor) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === ctor && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, store, !1); else {
                        toUnmount = inst;
                        component._component = inst = createComponent(ctor, childProps, store);
                        inst.__b = inst.__b || nextBase;
                        inst.__u = component;
                        setComponentProps(inst, childProps, 0, store, !1);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, store, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0, updateSelf);
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
            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
                if (component.afterUpdate) component.afterUpdate(previousProps, store);
                if (component.updated) component.updated(previousProps, store);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, store, mountAll, updateSelf) {
        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            if (!updateSelf) setComponentProps(c, props, 3, store, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, store, vnode);
            if (dom && !c.__b) {
                c.__b = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, store, mountAll);
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
        if (component.uninstall) component.uninstall();
        if (component.store) if (options.isMultiStore) for (var key in component.store) {
            var current = component.store[key];
            current.instances && removeItem(component, current.instances);
            current.updateSelfInstances && removeItem(component, current.updateSelfInstances);
        } else {
            component.store.instances && removeItem(component, component.store.instances);
            component.store.updateSelfInstances && removeItem(component, component.store.updateSelfInstances);
        }
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner); else if (base) {
            if (null != base.__omiattr_) applyRef(base.__omiattr_.ref, null);
            component.__b = base;
            removeNode(base);
            collectComponent(component);
            removeChildren(base);
        }
        applyRef(component.__r, null);
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function obaa(target, arr, callback) {
        var eventPropArr = [];
        if (isArray$1(target)) {
            if (0 === target.length) target.$_o_ = {
                $_r_: target,
                $_p_: '#'
            };
            mock(target, target);
        }
        if (target && 'object' == typeof target && 0 === Object.keys(target).length) {
            track(target);
            target.$_o_.$_r_ = target;
        }
        for (var prop in target) if (target.hasOwnProperty(prop)) if (callback) {
            if (isArray$1(arr) && isInArray(arr, prop)) {
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
        if (!target.$_c_) target.$_c_ = [];
        var propChanged = callback ? callback : arr;
        target.$_c_.push({
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
                    for (var cprop in this) if (this.hasOwnProperty(cprop) && !isFunction(this[cprop])) watch(this, cprop, this.$_o_.$_p_, root);
                    onPropertyChanged('Array-' + item, this, old, this, this.$_o_.$_p_, root);
                }
                return result;
            };
            target['pure' + item.substring(0, 1).toUpperCase() + item.substring(1)] = function() {
                return Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
            };
        });
    }
    function watch(target, prop, path, root) {
        if ('$_o_' !== prop) if (!isFunction(target[prop])) {
            if (!target.$_o_) target.$_o_ = {
                $_r_: root
            };
            if (void 0 !== path && null !== path) target.$_o_.$_p_ = path; else target.$_o_.$_p_ = '#';
            var currentValue = target.$_o_[prop] = target[prop];
            Object.defineProperty(target, prop, {
                get: function() {
                    return this.$_o_[prop];
                },
                set: function(value) {
                    var old = this.$_o_[prop];
                    this.$_o_[prop] = value;
                    onPropertyChanged(prop, value, old, this, target.$_o_.$_p_, root);
                },
                configurable: !0,
                enumerable: !0
            });
            if ('object' == typeof currentValue) {
                if (isArray$1(currentValue)) {
                    mock(currentValue, root);
                    if (0 === currentValue.length) track(currentValue, prop, path);
                }
                if (currentValue && 0 === Object.keys(currentValue).length) track(currentValue, prop, path);
                for (var cprop in currentValue) if (currentValue.hasOwnProperty(cprop)) watch(currentValue, cprop, target.$_o_.$_p_ + '-' + prop, root);
            }
        }
    }
    function track(obj, prop, path) {
        if (!obj.$_o_) {
            obj.$_o_ = {};
            if (void 0 !== path && null !== path) obj.$_o_.$_p_ = path + '-' + prop; else if (void 0 !== prop && null !== prop) obj.$_o_.$_p_ = "#-" + prop; else obj.$_o_.$_p_ = '#';
        }
    }
    function onPropertyChanged(prop, value, oldValue, target, path, root) {
        if (value !== oldValue && (!nan(value) || !nan(oldValue)) && root.$_c_) {
            var rootName = getRootName(prop, path);
            for (var i = 0, len = root.$_c_.length; i < len; i++) {
                var handler = root.$_c_[i];
                if (handler.all || isInArray(handler.eventPropArr, rootName) || 0 === rootName.indexOf('Array-')) handler.propChanged.call(target, prop, value, oldValue, path);
            }
        }
        if (0 !== prop.indexOf('Array-') && 'object' == typeof value) watch(target, prop, target.$_o_.$_p_, root);
    }
    function isFunction(obj) {
        return '[object Function]' == Object.prototype.toString.call(obj);
    }
    function nan(value) {
        return "number" == typeof value && isNaN(value);
    }
    function isArray$1(obj) {
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
    function render(vnode, parent, store, empty, merge) {
        parent = 'string' == typeof parent ? document.querySelector(parent) : parent;
        if (store) if (store.data) obsStore(store); else {
            options.isMultiStore = !0;
            for (var key in store) if (store[key].data) obsStore(store[key], key);
        }
        if (empty) while (parent.firstChild) parent.removeChild(parent.firstChild);
        if (merge) merge = 'string' == typeof merge ? document.querySelector(merge) : merge;
        return diff(merge, vnode, store, !1, parent, !1);
    }
    function obsStore(store, storeName) {
        store.instances = [];
        store.updateSelfInstances = [];
        extendStoreUpate(store, storeName);
        obaa(store.data, function(prop, val, old, path) {
            var patchs = {};
            var key = fixPath(path + '-' + prop);
            patchs[key] = !0;
            store.update(patchs);
        });
    }
    function merge(vnode, merge, store) {
        obsStore(store);
        merge = 'string' == typeof merge ? document.querySelector(merge) : merge;
        return diff(merge, vnode, store);
    }
    function extendStoreUpate(store, key) {
        store.update = function(patch) {
            if (Object.keys(patch).length > 0) {
                this.instances.forEach(function(instance) {
                    compute(instance, key);
                    if (key) {
                        if (instance.H && instance.H[key] && needUpdate(patch, instance.H[key])) {
                            if (instance.use) getUse(store.data, ('function' == typeof instance.use ? instance.use() : instance.use)[key], instance.using, key);
                            instance.update();
                        }
                    } else if (instance.H && needUpdate(patch, instance.H)) {
                        if (instance.use) instance.using = getUse(store.data, 'function' == typeof instance.use ? instance.use() : instance.use);
                        instance.update();
                    }
                });
                this.updateSelfInstances.forEach(function(instance) {
                    compute(instance, key);
                    if (key) {
                        if (instance.I && instance.I[key] && needUpdate(patch, instance.I[key])) {
                            if (instance.useSelf) getUse(store.data, ('function' == typeof instance.useSelf ? instance.useSelf() : instance.useSelf)[key], instance.usingSelf, key);
                            instance.updateSelf();
                        }
                    } else if (instance.I && needUpdate(patch, instance.I)) {
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
        var arr = path.replace('#-', '').split('-');
        arr.forEach(function(item, index) {
            if (index) if (isNaN(Number(item))) mpPath += '.' + item; else mpPath += '[' + item + ']'; else mpPath += item;
        });
        return mpPath;
    }
    function _classCallCheck$1(instance, Constructor) {
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
    function define(name, ctor, config) {
        if ('WeElement' === ctor.is) options.mapping[name] = ctor; else {
            if ('string' == typeof config) config = {
                css: config
            }; else config = config || {};
            var Comp = function(_Component) {
                function Comp() {
                    var _temp, _this, _ret;
                    _classCallCheck$1(this, Comp);
                    for (var _len = arguments.length, args = Array(_len), key = 0; key < _len; key++) args[key] = arguments[key];
                    return _ret = (_temp = _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [ this ].concat(args))), 
                    _this.compute = config.compute, _temp), _possibleConstructorReturn(_this, _ret);
                }
                _inherits(Comp, _Component);
                Comp.prototype.render = function() {
                    return ctor.call(this, this);
                };
                return Comp;
            }(Component);
            Comp.css = config.css;
            Comp.propTypes = config.propTypes;
            Comp.defaultProps = config.defaultProps;
            for (var key in config) !function(key) {
                if ('function' == typeof config[key]) Comp.prototype[key] = function() {
                    return config[key].apply(this, arguments);
                };
            }(key);
            storeHelpers.forEach(function(func) {
                if (config[func] && 'function' !== config[func]) Comp.prototype[func] = function() {
                    return config[func];
                };
            });
            options.mapping[name] = Comp;
        }
    }
    function rpx(str) {
        return str.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, function(a, b) {
            return window.innerWidth * Number(b) / 750 + 'px';
        });
    }
    function tag(name) {
        return function(target) {
            define(name, target);
        };
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
        if (props) if (props.class) {
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
    function getHost(component) {
        var base = component.base;
        if (base) while (base.parentNode) if (base.parentNode._component) return base.parentNode._component; else base = base.parentNode;
    }
    function styleObjToCss(s) {
        var str = '';
        for (var prop in s) {
            var val = s[prop];
            if (null != val) {
                if (str) str += ' ';
                str += JS_TO_CSS[prop] || (JS_TO_CSS[prop] = prop.replace(/([A-Z])/g, '-$1').toLowerCase());
                str += ': ';
                str += val;
                if ('number' == typeof val && !1 === IS_NON_DIMENSIONAL.test(prop)) str += 'px';
                str += ';';
            }
        }
        return str || void 0;
    }
    function renderToString(vnode, opts, store, isSvgMode) {
        store = store || {};
        opts = Object.assign({
            scopedCSS: !0
        }, opts);
        var css = {};
        var html = _renderToString(vnode, opts, store, isSvgMode, css);
        return {
            css: Object.values(css),
            html: html
        };
    }
    function _renderToString(vnode, opts, store, isSvgMode, css) {
        if (null == vnode || 'boolean' == typeof vnode) return '';
        var nodeName = vnode.nodeName, attributes = vnode.attributes, isComponent = !1;
        var pretty = opts.pretty, indentChar = pretty && 'string' == typeof pretty ? pretty : '\t';
        if ('object' != typeof vnode && !nodeName) return encodeEntities(vnode);
        var ctor = mapping$1[nodeName];
        if (ctor) {
            isComponent = !0;
            var rendered, props = getNodeProps$1(vnode);
            var c = new ctor(props, store);
            c.__x = c.G = !0;
            c.props = props;
            c.store = store;
            if (c.install) c.install();
            if (c.beforeRender) c.beforeRender();
            rendered = c.render(c.props, c.store);
            if (opts.scopedCSS) {
                if (c.constructor.css || c.css) {
                    var cssStr = c.constructor.css ? c.constructor.css : 'function' == typeof c.css ? c.css() : c.css;
                    var cssAttr = '_s' + getCtorName(c.constructor);
                    css[cssAttr] = {
                        id: cssAttr,
                        css: scoper(cssStr, cssAttr)
                    };
                    addScopedAttrStatic(rendered, cssAttr);
                }
                c.scopedCSSAttr = vnode.css;
                scopeHost(rendered, c.scopedCSSAttr);
            }
            return _renderToString(rendered, opts, store, !1, css);
        }
        var html, s = '';
        if (attributes) {
            var attrs = Object.keys(attributes);
            if (opts && !0 === opts.sortAttributes) attrs.sort();
            for (var i = 0; i < attrs.length; i++) {
                var name = attrs[i], v = attributes[name];
                if ('children' !== name) if (!name.match(/[\s\n\\/='"\0<>]/)) if (opts && opts.allAttributes || 'key' !== name && 'ref' !== name) {
                    if ('className' === name) {
                        if (attributes.class) continue;
                        name = 'class';
                    } else if (isSvgMode && name.match(/^xlink:?./)) name = name.toLowerCase().replace(/^xlink:?/, 'xlink:');
                    if ('style' === name && v && 'object' == typeof v) v = styleObjToCss(v);
                    var hooked = opts.attributeHook && opts.attributeHook(name, v, store, opts, isComponent);
                    if (!hooked && '' !== hooked) {
                        if ('dangerouslySetInnerHTML' === name) html = v && v.__html; else if ((v || 0 === v || '' === v) && 'function' != typeof v) {
                            if (!0 === v || '' === v) {
                                v = name;
                                if (!opts || !opts.xml) {
                                    s += ' ' + name;
                                    continue;
                                }
                            }
                            s += ' ' + name + '="' + encodeEntities(v) + '"';
                        }
                    } else s += hooked;
                }
            }
        }
        if (pretty) {
            var sub = s.replace(/^\n\s*/, ' ');
            if (sub !== s && !~sub.indexOf('\n')) s = sub; else if (pretty && ~s.indexOf('\n')) s += '\n';
        }
        s = '<' + nodeName + s + '>';
        if (String(nodeName).match(/[\s\n\\/='"\0<>]/)) throw s;
        var isVoid = String(nodeName).match(VOID_ELEMENTS);
        if (isVoid) s = s.replace(/>$/, ' />');
        var pieces = [];
        if (html) {
            if (pretty && isLargeString(html)) html = '\n' + indentChar + indent(html, indentChar);
            s += html;
        } else if (vnode.children) {
            var hasLarge = pretty && ~s.indexOf('\n');
            for (var i = 0; i < vnode.children.length; i++) {
                var child = vnode.children[i];
                if (null != child && !1 !== child) {
                    var childSvgMode = 'svg' === nodeName ? !0 : 'foreignObject' === nodeName ? !1 : isSvgMode, ret = _renderToString(child, opts, store, childSvgMode, css);
                    if (pretty && !hasLarge && isLargeString(ret)) hasLarge = !0;
                    if (ret) pieces.push(ret);
                }
            }
            if (pretty && hasLarge) for (var i = pieces.length; i--; ) pieces[i] = '\n' + indentChar + indent(pieces[i], indentChar);
        }
        if (pieces.length) s += pieces.join(''); else if (opts && opts.xml) return s.substring(0, s.length - 1) + ' />';
        if (!isVoid) {
            if (pretty && ~s.indexOf('\n')) s += '\n';
            s += '</' + nodeName + '>';
        }
        return s;
    }
    function assign$1(obj, props) {
        for (var i in props) obj[i] = props[i];
        return obj;
    }
    function getNodeProps$1(vnode) {
        var props = assign$1({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
    }
    function createRef() {
        return {};
    }
    var options = {
        scopedStyle: !0,
        mapping: {},
        isWeb: !0,
        staticStyleMapping: {},
        doc: 'object' == typeof document ? document : null,
        root: function() {
            if ('object' != typeof global || !global || global.Math !== Math || global.Array !== Array) {
                if ('undefined' != typeof self) return self; else if ('undefined' != typeof window) return window; else if ('undefined' != typeof global) return global;
                return function() {
                    return this;
                }();
            }
            return global;
        }(),
        styleCache: [],
        isMultiStore: !1
    };
    var stack = [];
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    if ('undefined' != typeof Element && !Element.prototype.addEventListener) {
        var runListeners = function(oEvent) {
            if (!oEvent) oEvent = window.event;
            for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId < oEvtListeners.aEls.length; iElId++) if (oEvtListeners.aEls[iElId] === this) {
                for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent);
                break;
            }
        };
        var oListeners = {};
        Element.prototype.addEventListener = function(sEventType, fListener) {
            if (oListeners.hasOwnProperty(sEventType)) {
                var oEvtListeners = oListeners[sEventType];
                for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) if (oEvtListeners.aEls[iElId] === this) {
                    nElIdx = iElId;
                    break;
                }
                if (-1 === nElIdx) {
                    oEvtListeners.aEls.push(this);
                    oEvtListeners.aEvts.push([ fListener ]);
                    this["on" + sEventType] = runListeners;
                } else {
                    var aElListeners = oEvtListeners.aEvts[nElIdx];
                    if (this["on" + sEventType] !== runListeners) {
                        aElListeners.splice(0);
                        this["on" + sEventType] = runListeners;
                    }
                    for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) if (aElListeners[iLstId] === fListener) return;
                    aElListeners.push(fListener);
                }
            } else {
                oListeners[sEventType] = {
                    aEls: [ this ],
                    aEvts: [ [ fListener ] ]
                };
                this["on" + sEventType] = runListeners;
            }
        };
        Element.prototype.removeEventListener = function(sEventType, fListener) {
            if (oListeners.hasOwnProperty(sEventType)) {
                var oEvtListeners = oListeners[sEventType];
                for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) if (oEvtListeners.aEls[iElId] === this) {
                    nElIdx = iElId;
                    break;
                }
                if (-1 !== nElIdx) for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId < aElListeners.length; iLstId++) if (aElListeners[iLstId] === fListener) aElListeners.splice(iLstId, 1);
            }
        };
    }
    if ('function' != typeof Object.create) Object.create = function(proto, propertiesObject) {
        function F() {}
        if ('object' != typeof proto && 'function' != typeof proto) throw new TypeError('Object prototype may only be an Object: ' + proto); else if (null === proto) throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
        F.prototype = proto;
        return new F();
    };
    if (!String.prototype.trim) String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
    var usePromise = 'function' == typeof Promise;
    if ('object' != typeof document && 'undefined' != typeof global && global.v) if ('android' === global.v.platform) usePromise = !0; else {
        var systemVersion = global.v.systemVersion && global.v.systemVersion.split('.')[0] || 0;
        if (systemVersion > 8) usePromise = !0;
    }
    var defer = usePromise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
    var IS_NON_DIMENSIONAL$1 = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var items = [];
    var mapping = options.mapping;
    var styleId = 0;
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    var id = 0;
    var Component = function() {
        function Component(props, store) {
            _classCallCheck(this, Component);
            this.props = assign({}, this.constructor.defaultProps, props);
            this.elementId = id++;
            this.z = null;
            this.store = store;
            this.computed = {};
        }
        Component.prototype.update = function(ignoreAttrs, updateSelf, callback) {
            if (!this.A) {
                this.A = !0;
                if (callback) (this.__h = this.__h || []).push(callback);
                renderComponent(this, 2);
                if (options.componentChange) options.componentChange(this, this.base);
                this.A = !1;
            }
        };
        Component.prototype.updateSelf = function() {
            if (!this.J) {
                this.J = !0;
                renderComponent(this, 2, null, null, !0);
                this.J = !1;
            }
        };
        Component.prototype.fire = function(type, data) {
            var _this = this;
            Object.keys(this.props).every(function(key) {
                if ('on' + type.toLowerCase() === key.toLowerCase()) {
                    _this.props[key]({
                        detail: data
                    });
                    return !1;
                }
                return !0;
            });
        };
        Component.prototype.render = function() {};
        return Component;
    }();
    Component.is = 'WeElement';
    var triggerStr = [ 'concat', 'copyWithin', 'fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'size' ].join(',');
    var methods = [ 'concat', 'copyWithin', 'entries', 'every', 'fill', 'filter', 'find', 'findIndex', 'forEach', 'includes', 'indexOf', 'join', 'keys', 'lastIndexOf', 'map', 'pop', 'push', 'reduce', 'reduceRight', 'reverse', 'shift', 'slice', 'some', 'sort', 'splice', 'toLocaleString', 'toString', 'unshift', 'values', 'size' ];
    obaa.add = function(obj, prop) {
        watch(obj, prop, obj.$_o_.$_p_, obj.$_o_.$_r_);
    };
    obaa.set = function(obj, prop, value) {
        if (void 0 === obj[prop]) watch(obj, prop, obj.$_o_.$_p_, obj.$_o_.$_r_);
        obj[prop] = value;
    };
    Array.prototype.size = function(length) {
        this.length = length;
    };
    var storeHelpers = [ 'use', 'useSelf' ];
    var hasOwn = {}.hasOwnProperty;
    var encodeEntities = function(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    };
    var indent = function(s, char) {
        return String(s).replace(/(\n+)/g, '$1' + (char || '\t'));
    };
    var mapping$1 = options.mapping;
    var VOID_ELEMENTS = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;
    var isLargeString = function(s, length, ignoreLines) {
        return String(s).length > (length || 40) || !ignoreLines && -1 !== String(s).indexOf('\n') || -1 !== String(s).indexOf('<');
    };
    var JS_TO_CSS = {};
    h.f = Fragment;
    var WeElement = Component;
    var defineElement = define;
    options.root.Omi = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        createRef: createRef,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options,
        WeElement: WeElement,
        define: define,
        rpx: rpx,
        defineElement: defineElement,
        classNames: classNames,
        extractClass: extractClass,
        getHost: getHost,
        renderToString: renderToString,
        tag: tag,
        merge: merge,
        obaa: obaa
    };
    options.root.omi = options.root.Omi;
    options.root.Omi.version = 'omio-2.8.3';
    var Omi = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        createRef: createRef,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options,
        WeElement: WeElement,
        define: define,
        rpx: rpx,
        defineElement: defineElement,
        classNames: classNames,
        extractClass: extractClass,
        getHost: getHost,
        renderToString: renderToString,
        tag: tag,
        merge: merge,
        obaa: obaa
    };
    if ('undefined' != typeof module) module.exports = Omi; else self.Omi = Omi;
}();
//# sourceMappingURL=omi.js.map
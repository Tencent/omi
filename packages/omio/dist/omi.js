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
        p.attributes = null == attributes ? void 0 : attributes;
        if (children && 'string' == typeof children[0] && !options.isWeb) if (p.attributes) p.attributes.value = children[0]; else p.attributes = {
            value: children[0]
        }; else p.children = children;
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
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function enqueueRender(component) {
        if (1 == items.push(component)) (options.debounceRendering || defer)(rerender);
    }
    function rerender() {
        var p, list = items;
        items = [];
        var element;
        while (p = list.pop()) {
            element = p.base;
            renderComponent(p);
        }
        if (!list.length) if (options.componentChange) options.componentChange(p, element);
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        var ctor = options.mapping[vnode.nodeName];
        if (ctor) return hydrating || node._componentConstructor === ctor; else return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
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
            if (old) old(null);
            if (value) value(node);
        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) if (options.isWeb) {
            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && !1 === IS_NON_DIMENSIONAL.test(i) ? value[i] + 'px' : value[i];
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
            hydrating = null != dom && !('__omiattr_' in dom);
        }
        var ret;
        if (isArray(vnode)) vnode = {
            nodeName: 'span',
            children: vnode
        };
        ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll, componentRoot) {
        var out = dom, prevSvgMode = isSvgMode;
        if (null == vnode || 'boolean' == typeof vnode) vnode = '';
        var vnodeName = vnode.nodeName;
        if (options.mapping[vnodeName]) {
            vnode.nodeName = options.mapping[vnodeName];
            return buildComponentFromVNode(dom, vnode, context, mountAll);
        }
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
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
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
            child = idiff(child, vchild, context, mountAll);
            f = originalChildren[i];
            if (child && child !== dom && child !== f) if (null == f) dom.appendChild(child); else if (child === f.nextSibling) removeNode(f); else dom.insertBefore(child, f);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component); else {
            if (null != node.__omiattr_ && node.__omiattr_.ref) node.__omiattr_.ref(null);
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
    function createComponent(Ctor, props, context, vnode) {
        var inst, list = components[Ctor.name];
        if (Ctor.prototype && Ctor.prototype.render) {
            inst = new Ctor(props, context);
            Component.call(inst, props, context);
        } else {
            inst = new Component(props, context);
            inst.constructor = Ctor;
            inst.render = doRender;
        }
        vnode && (inst.B = vnode.css);
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
            inst.__b = list[i].__b;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function doRender(props, data, context) {
        return this.constructor(props, context);
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
    function addScopedAttr(vdom, style, attr, component) {
        if (options.scopedStyle) {
            scopeVdom(attr, vdom);
            style = scoper(style, attr);
            if (style !== component.z) addStyle(style, attr);
        } else if (style !== component.z) addStyleWithoutId(style);
        component.z = style;
    }
    function addScopedAttrStatic(vdom, style, attr) {
        if (options.scopedStyle) {
            scopeVdom(attr, vdom);
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
    function fireTick() {
        callbacks.forEach(function(item) {
            item.fn.call(item.scope);
        });
        nextTickCallback.forEach(function(nextItem) {
            nextItem.fn.call(nextItem.scope);
        });
        nextTickCallback.length = 0;
    }
    function proxyUpdate(ele) {
        var timeout = null;
        obaa(ele.data, function() {
            if (!ele.A) if (ele.constructor.mergeUpdate) {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    ele.update();
                    fireTick();
                }, 0);
            } else {
                ele.update();
                fireTick();
            }
        });
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component.__x) {
            component.__x = !0;
            if (component.__r = props.ref) delete props.ref;
            if (component.__k = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
                if (component.beforeInstall) component.beforeInstall();
                if (component.install) component.install();
                if (component.constructor.observe) proxyUpdate(component);
            } else if (component.receiveProps) component.receiveProps(props, component.data, component.props); else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.__c) component.__c = component.context;
                component.context = context;
            }
            if (!component.__p) component.__p = component.props;
            component.props = props;
            component.__x = !1;
            if (0 !== opts) if (1 === opts || !1 !== options.syncComponentUpdates || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
            if (component.__r) component.__r(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component.__x) {
            var rendered, inst, cbase, props = component.props, data = component.data, context = component.context, previousProps = component.__p || props, previousState = component.__s || data, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
            if (isUpdate) {
                component.props = previousProps;
                component.data = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && !1 === component.shouldComponentUpdate(props, data, context)) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, data, context); else if (component.beforeUpdate) component.beforeUpdate(props, data, context);
                component.props = props;
                component.data = data;
                component.context = context;
            }
            component.__p = component.__s = component.__c = component.__b = null;
            if (!skip) {
                component.beforeRender && component.beforeRender();
                rendered = component.render(props, data, context);
                if (component.css) addScopedAttrStatic(rendered, component.css(), '_s' + getCtorName(component.constructor));
                if (component.dynamicCss) addScopedAttr(rendered, component.dynamicCss(), '_s' + component.elementId, component);
                scopeHost(rendered, component.B);
                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
                var toUnmount, base, childComponent = rendered && rendered.nodeName, ctor = options.mapping[childComponent];
                if (ctor) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === ctor && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {
                        toUnmount = inst;
                        component._component = inst = createComponent(ctor, childProps, context);
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
                    var componentRef = component, t = component;
                    while (t = t.__u) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (component.afterUpdate) component.afterUpdate(previousProps, previousState, previousContext);
                if (component.updated) component.updated(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context, vnode);
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
        if (inner) unmountComponent(inner); else if (base) {
            if (base.__omiattr_ && base.__omiattr_.ref) base.__omiattr_.ref(null);
            component.__b = base;
            removeNode(base);
            collectComponent(component);
            removeChildren(base);
        }
        if (component.__r) component.__r(null);
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function render(vnode, parent, store) {
        parent = 'string' == typeof parent ? document.querySelector(parent) : parent;
        if (store && store.merge) store.merge = 'string' == typeof store.merge ? document.querySelector(store.merge) : store.merge;
        return diff(store && store.merge, vnode, store, !1, parent, !1);
    }
    function define(name, ctor) {
        options.mapping[name] = ctor;
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
    function rpx(str) {
        return str.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, function(a, b) {
            return window.innerWidth * Number(b) / 750 + 'px';
        });
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
        styleCache: []
    };
    var stack = [];
    var EMPTY_CHILDREN = [];
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    if (!Element.prototype.addEventListener) {
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
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var items = [];
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    var styleId = 0;
    var obaa = function obaa(target, arr, callback) {
        var _observe = function(target, arr, callback) {
            if (!target.$observer) target.$observer = this;
            var $observer = target.$observer;
            var eventPropArr = [];
            if (obaa.isArray(target)) {
                if (0 === target.length) {
                    target.$observeProps = {};
                    target.$observeProps.$observerPath = '#';
                }
                $observer.mock(target);
            }
            for (var prop in target) if (target.hasOwnProperty(prop)) if (callback) {
                if (obaa.isArray(arr) && obaa.isInArray(arr, prop)) {
                    eventPropArr.push(prop);
                    $observer.watch(target, prop);
                } else if (obaa.isString(arr) && prop == arr) {
                    eventPropArr.push(prop);
                    $observer.watch(target, prop);
                }
            } else {
                eventPropArr.push(prop);
                $observer.watch(target, prop);
            }
            $observer.target = target;
            if (!$observer.propertyChangedHandler) $observer.propertyChangedHandler = [];
            var propChanged = callback ? callback : arr;
            $observer.propertyChangedHandler.push({
                all: !callback,
                propChanged: propChanged,
                eventPropArr: eventPropArr
            });
        };
        _observe.prototype = {
            onPropertyChanged: function(prop, value, oldValue, target, path) {
                if (value !== oldValue && this.propertyChangedHandler) {
                    var rootName = obaa.y(prop, path);
                    for (var i = 0, len = this.propertyChangedHandler.length; i < len; i++) {
                        var handler = this.propertyChangedHandler[i];
                        if (handler.all || obaa.isInArray(handler.eventPropArr, rootName) || 0 === rootName.indexOf('Array-')) handler.propChanged.call(this.target, prop, value, oldValue, path);
                    }
                }
                if (0 !== prop.indexOf('Array-') && 'object' == typeof value) this.watch(target, prop, target.$observeProps.$observerPath);
            },
            mock: function(target) {
                var self = this;
                obaa.methods.forEach(function(item) {
                    target[item] = function() {
                        var old = Array.prototype.slice.call(this, 0);
                        var result = Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
                        if (new RegExp('\\b' + item + '\\b').test(obaa.triggerStr)) {
                            for (var cprop in this) if (this.hasOwnProperty(cprop) && !obaa.isFunction(this[cprop])) self.watch(this, cprop, this.$observeProps.$observerPath);
                            self.onPropertyChanged('Array-' + item, this, old, this, this.$observeProps.$observerPath);
                        }
                        return result;
                    };
                    target['pure' + item.substring(0, 1).toUpperCase() + item.substring(1)] = function() {
                        return Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
                    };
                });
            },
            watch: function(target, prop, path) {
                if ('$observeProps' !== prop && '$observer' !== prop) if (!obaa.isFunction(target[prop])) {
                    if (!target.$observeProps) target.$observeProps = {};
                    if (void 0 !== path) target.$observeProps.$observerPath = path; else target.$observeProps.$observerPath = '#';
                    var currentValue = target.$observeProps[prop] = target[prop];
                    if ('object' == typeof currentValue) {
                        if (obaa.isArray(currentValue)) {
                            this.mock(currentValue);
                            if (0 === currentValue.length) {
                                if (!currentValue.$observeProps) currentValue.$observeProps = {};
                                if (void 0 !== path) currentValue.$observeProps.$observerPath = path; else currentValue.$observeProps.$observerPath = '#';
                            }
                        }
                        for (var cprop in currentValue) if (currentValue.hasOwnProperty(cprop)) this.watch(currentValue, cprop, target.$observeProps.$observerPath + '-' + prop);
                    }
                }
            }
        };
        return new _observe(target, arr, callback);
    };
    obaa.methods = [ 'concat', 'copyWithin', 'entries', 'every', 'fill', 'filter', 'find', 'findIndex', 'forEach', 'includes', 'indexOf', 'join', 'keys', 'lastIndexOf', 'map', 'pop', 'push', 'reduce', 'reduceRight', 'reverse', 'shift', 'slice', 'some', 'sort', 'splice', 'toLocaleString', 'toString', 'unshift', 'values', 'size' ];
    obaa.triggerStr = [ 'concat', 'copyWithin', 'fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'size' ].join(',');
    obaa.isArray = function(obj) {
        return '[object Array]' === Object.prototype.toString.call(obj);
    };
    obaa.isString = function(obj) {
        return 'string' == typeof obj;
    };
    obaa.isInArray = function(arr, item) {
        for (var i = arr.length; --i > -1; ) if (item === arr[i]) return !0;
        return !1;
    };
    obaa.isFunction = function(obj) {
        return '[object Function]' == Object.prototype.toString.call(obj);
    };
    obaa.y = function(prop, path) {
        if ('#' === path) return prop; else return path.split('-')[1];
    };
    obaa.add = function(obj, prop) {
        var $observer = obj.$observer;
        $observer.watch(obj, prop);
    };
    obaa.set = function(obj, prop, value, exec) {
        if (!exec) obj[prop] = value;
        var $observer = obj.$observer;
        $observer.watch(obj, prop);
        if (exec) obj[prop] = value;
    };
    Array.prototype.size = function(length) {
        this.length = length;
    };
    var callbacks = [];
    var nextTickCallback = [];
    var id = 0;
    var Component = function() {
        function Component(props, store) {
            _classCallCheck(this, Component);
            this.props = assign(nProps(this.constructor.props), this.constructor.defaultProps, props);
            this.elementId = id++;
            this.data = this.constructor.data || this.data || {};
            this.z = null;
            this.store = store;
        }
        Component.prototype.update = function(callback) {
            this.A = !0;
            if (callback) (this.__h = this.__h || []).push(callback);
            renderComponent(this, 2);
            if (options.componentChange) options.componentChange(this, this.base);
            this.A = !1;
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
    var ModelView = function(_Component) {
        function ModelView() {
            _classCallCheck$1(this, ModelView);
            return _possibleConstructorReturn(this, _Component.apply(this, arguments));
        }
        _inherits(ModelView, _Component);
        ModelView.prototype.beforeInstall = function() {
            this.data = this.vm.data;
        };
        return ModelView;
    }(Component);
    ModelView.observe = !0;
    ModelView.mergeUpdate = !0;
    var hasOwn = {}.hasOwnProperty;
    var WeElement = Component;
    var defineElement = define;
    options.root.Omi = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options,
        WeElement: WeElement,
        define: define,
        rpx: rpx,
        ModelView: ModelView,
        defineElement: defineElement,
        classNames: classNames,
        extractClass: extractClass
    };
    options.root.omi = Omi;
    options.root.Omi.version = 'omio-1.2.3';
    var Omi$1 = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options,
        WeElement: WeElement,
        define: define,
        rpx: rpx,
        ModelView: ModelView,
        defineElement: defineElement,
        classNames: classNames,
        extractClass: extractClass
    };
    if ('undefined' != typeof module) module.exports = Omi$1; else self.Omi = Omi$1;
}();
//# sourceMappingURL=omi.js.map
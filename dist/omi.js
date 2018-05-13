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
        p.nodeName = options.isWeb ? nodeName : map[nodeName];
        p.attributes = null == attributes ? void 0 : attributes;
        if (children && 'string' == typeof children[0] && !options.isWeb) if (p.attributes) p.attributes.value = children[0]; else p.attributes = {
            value: children[0]
        }; else p.children = children;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        for (var i in props) obj[i] = props[i];
        return obj;
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
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;
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
        var cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, " ").replace(/\s+/g, " ");
        var style = {}, _ref = cssTxt.match(/ ?(.*?) ?{([^}]*)}/) || [ a, b, cssTxt ], a = _ref[0], b = _ref[1], rule = _ref[2];
        var properties = rule.split(";").map(function(o) {
            return o.split(":").map(function(x) {
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
            hydrating = null != dom && !('__preactattr_' in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
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
        var component = node._component;
        if (component) unmountComponent(component); else {
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
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
    function collectComponent(component) {
        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
    }
    function createComponent(Ctor, props, context) {
        var inst, list = components[Ctor.name];
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
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
            inst.__b = list[i].__b;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function doRender(props, state, context) {
        return this.constructor(props, context);
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
            if (style !== component.r) addStyle(style, attr);
        } else if (style !== component.r) addStyleWithoutId(style);
        component.r = style;
    }
    function addScopedAttrStatic(vdom, style, attr) {
        if (options.scopedStyle) {
            scopeVdom(attr, vdom);
            if (!options.staticStyleRendered) addStyle(scoper(style, attr), attr);
        } else if (!options.staticStyleRendered) addStyleWithoutId(style);
    }
    function scopeVdom(attr, vdom) {
        if ('string' != typeof vdom) {
            vdom.attributes = vdom.attributes || {};
            vdom.attributes[attr] = '';
            vdom.children.forEach(function(child) {
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
            if (0 !== opts) if (1 === opts || !1 !== options.syncComponentUpdates || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
            if (component.__r) component.__r(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component.__x) {
            var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && !1 === component.shouldComponentUpdate(props, state, context)) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context); else if (component.beforeUpdate) component.beforeUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.__p = component.__s = component.__c = component.__b = null;
            if (!skip) {
                rendered = component.render(props, state, context);
                if (component.style) addScopedAttr(rendered, component.style(), '_style_' + component.s, component);
                if (component.staticStyle) addScopedAttrStatic(rendered, component.staticStyle(), '_style_' + component.constructor.name);
                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
                var toUnmount, base, childComponent = rendered && rendered.nodeName;
                if ('function' == typeof childComponent) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {
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
                    var componentRef = component, t = component;
                    while (t = t.__u) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (component.afterUpdate) component.afterUpdate(previousProps, previousState, previousContext);
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
        if (inner) unmountComponent(inner); else if (base) {
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
            return "object" == typeof obj && 1 === obj.nodeType && "object" == typeof obj.style && "object" == typeof obj.ownerDocument;
        }
    }
    function render(vnode, parent, merge, ssrRoot) {
        var m = isElement(merge) || void 0 === merge;
        if ('undefined' != typeof window) {
            options.staticStyleRendered = !1;
            parent = 'string' == typeof parent ? document.querySelector(parent) : parent;
            if (ssrRoot) ssrRoot = document.querySelector(ssrRoot);
            if (!0 === merge) while (parent.firstChild) parent.removeChild(parent.firstChild);
            if (vnode instanceof Component) {
                if (window && window.Omi) window.Omi.instances.push(vnode);
                if (!m) vnode.$store = options.$store = merge;
                if (vnode.componentWillMount) vnode.componentWillMount();
                if (vnode.install) vnode.install();
                var rendered = vnode.render(vnode.props, vnode.state, vnode.context);
                if (vnode.style) addScopedAttr(rendered, vnode.style(), '_style_' + vnode.s, vnode);
                if (vnode.staticStyle) addScopedAttrStatic(rendered, vnode.staticStyle(), '_style_' + vnode.constructor.name, !vnode.base);
                vnode.base = diff(m ? merge : ssrRoot, rendered, {}, !1, parent, !1);
                if (vnode.componentDidMount) vnode.componentDidMount();
                if (vnode.installed) vnode.installed();
                options.staticStyleRendered = !0;
                return vnode.base;
            }
            var result = diff(merge, vnode, {}, !1, parent, !1);
            options.staticStyleRendered = !0;
            return result;
        } else if (vnode instanceof Component && !m) vnode.$store = merge;
    }
    var options = {
        scopedStyle: !0,
        $store: null,
        isWeb: !0,
        staticStyleRendered: !1,
        doc: 'object' == typeof document ? document : null
    };
    var stack = [];
    var EMPTY_CHILDREN = [];
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
    var id = 0;
    extend(Component.prototype, {
        setState: function(state, callback) {
            var s = this.state;
            if (!this.__s) this.__s = extend({}, s);
            extend(s, 'function' == typeof state ? state(s, this.props) : state);
            if (callback) (this.__h = this.__h || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function(callback) {
            if (callback) (this.__h = this.__h || []).push(callback);
            renderComponent(this, 2);
            if (options.componentChange) options.componentChange(this, this.base);
        },
        update: function(callback) {
            this.forceUpdate(callback);
        },
        render: function() {}
    });
    var instances = [];
    var root = function() {
        if ('object' != typeof global || !global || global.Math !== Math || global.Array !== Array) {
            if ('undefined' != typeof self) return self; else if ('undefined' != typeof window) return window; else if ('undefined' != typeof global) return global;
            return function() {
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
    root.Omi.version = '3.0.2';
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
    if ('undefined' != typeof module) module.exports = Omi; else self.Omi = Omi;
}();
//# sourceMappingURL=omi.js.map
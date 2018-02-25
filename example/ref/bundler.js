/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {}
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/ 		if (installedModules[moduleId]) {
            /******/ 			return installedModules[moduleId].exports
            /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			i: moduleId,
            /******/ 			l: false,
            /******/ 			exports: {}
            /******/ 		}
        /******/
        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
        /******/
        /******/ 		// Flag the module as loaded
        /******/ 		module.l = true
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports
        /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function(exports, name, getter) {
        /******/ 		if (!__webpack_require__.o(exports, name)) {
            /******/ 			Object.defineProperty(exports, name, {
                /******/ 				configurable: false,
                /******/ 				enumerable: true,
                /******/ 				get: getter
                /******/ 			})
            /******/ 		}
        /******/ 	}
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function(module) {
        /******/ 		var getter = module && module.__esModule
            /******/ 			? function getDefault() { return module['default'] }
            /******/ 			: function getModuleExports() { return module }
        /******/ 		__webpack_require__.d(getter, 'a', getter)
        /******/ 		return getter
        /******/ 	}
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property) }
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = ''
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 16)
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {
        'use strict'

        module.exports = isWidget

        function isWidget(w) {
            return w && w.type === 'Widget'
        }
        /***/ },
    /* 1 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        module.exports = '2'
        /***/ },
    /* 2 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var version = __webpack_require__(1)

        module.exports = isVirtualNode

        function isVirtualNode(x) {
            return x && x.type === 'VirtualNode' && x.version === version
        }
        /***/ },
    /* 3 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        module.exports = isThunk

        function isThunk(t) {
            return t && t.type === 'Thunk'
        }
        /***/ },
    /* 4 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        module.exports = isHook

        function isHook(hook) {
            return hook && (typeof hook.hook === 'function' && !hook.hasOwnProperty('hook') || typeof hook.unhook === 'function' && !hook.hasOwnProperty('unhook'))
        }
        /***/ },
    /* 5 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var version = __webpack_require__(1)

        module.exports = isVirtualText

        function isVirtualText(x) {
            return x && x.type === 'VirtualText' && x.version === version
        }
        /***/ },
    /* 6 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
            value: true
        })

        var _h = __webpack_require__(17)

        var _h2 = _interopRequireDefault(_h)

        var _hyperscriptHelpers = __webpack_require__(28)

        var _hyperscriptHelpers2 = _interopRequireDefault(_hyperscriptHelpers)

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj } }

        var Omi = {}
        Omi.h = _h2['default']
        Omi.tags = (0, _hyperscriptHelpers2['default'])(_h2['default'])
        Omi.instances = {}
        Omi._instanceId = 0
        Omi.getInstanceId = function() {
            return Omi._instanceId++
        }
        Omi.scopedStyle = true
        Omi.customTags = []
        Omi.mapping = {}

        Omi.style = {}

        Omi.componentConstructor = {}

        Omi.$ = function(selector, context) {
            if (context) {
                return context.querySelector(selector)
            } else {
                return document.querySelector(selector)
            }
        }

        Omi.$$ = function(selector, context) {
            if (context) {
                return Array.prototype.slice.call(context.querySelectorAll(selector))
            } else {
                return Array.prototype.slice.call(document.querySelectorAll(selector))
            }
        }

        Omi.tag = function(name, ctor) {
            Omi.componentConstructor[name] = ctor
            Omi.componentConstructor[name.toLowerCase()] = ctor
            Omi.customTags.push(name, name.toLowerCase())
            ctor.is = name
            if (document.documentMode < 9) {
                document.createElement(name.toLowerCase())
            }
            var un = _capitalize(name)
            Omi.tags[un] = Omi.tags.createTag(un)
        }

        function _capitalize(str) {
            str = str.toLowerCase()
            str = str.replace(/\b\w+\b/g, function(word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1)
            }).replace(/-/g, '')
            return str
        }

        Omi._capitalize = _capitalize

        Omi.getConstructor = function(name) {
            for (var key in Omi.componentConstructor) {
                if (key === name || _capitalize(key).toLowerCase() === name) {
                    return Omi.componentConstructor[key]
                }
            }
        }

        Omi.render = function(component, renderTo, option) {
            component.renderTo = typeof renderTo === 'string' ? document.querySelector(renderTo) : renderTo
            if (typeof option === 'boolean') {
                component._omi_increment = option
            } else if (option) {
                component._omi_increment = option.increment
            }
            component.install()
            component.beforeRender()
            component._render(true)
            component._childrenInstalled(component)
            component.installed()
            component._execInstalledHandlers()
            return component
        }

        Omi.get = function(name) {
            return Omi.mapping[name]
        }

        Omi.plugins = {}

        Omi.extendPlugin = function(name, handler) {
            Omi.plugins[name] = handler
        }

        Omi.deletePlugin = function(name) {
            delete Omi.plugins[name]
        }

        exports['default'] = Omi
        /***/ },
    /* 7 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var nativeIsArray = Array.isArray
        var toString = Object.prototype.toString

        module.exports = nativeIsArray || isArray

        function isArray(obj) {
            return toString.call(obj) === '[object Array]'
        }
        /***/ },
    /* 8 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _omi = __webpack_require__(6)

        var _omi2 = _interopRequireDefault(_omi)

        var _component = __webpack_require__(29)

        var _component2 = _interopRequireDefault(_component)

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj } }

        _omi2['default'].Component = _component2['default']

        if (window && window.Omi) {
            module.exports = window.Omi
        } else {
            window && (window.Omi = _omi2['default'])
            module.exports = _omi2['default']
        }
        /***/ },
    /* 9 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj }

        var g

        // This works in non-strict mode
        g = (function() {
            return this
        }())

        try {
            // This works if eval is allowed (see CSP)
            g = g || Function('return this')() || (1, eval)('this')
        } catch (e) {
            // This works if the window reference is available
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') g = window
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g
        /***/ },
    /* 10 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var version = __webpack_require__(1)

        VirtualPatch.NONE = 0
        VirtualPatch.VTEXT = 1
        VirtualPatch.VNODE = 2
        VirtualPatch.WIDGET = 3
        VirtualPatch.PROPS = 4
        VirtualPatch.ORDER = 5
        VirtualPatch.INSERT = 6
        VirtualPatch.REMOVE = 7
        VirtualPatch.THUNK = 8

        module.exports = VirtualPatch

        function VirtualPatch(type, vNode, patch) {
            this.type = Number(type)
            this.vNode = vNode
            this.patch = patch
        }

        VirtualPatch.prototype.version = version
        VirtualPatch.prototype.type = 'VirtualPatch'
        /***/ },
    /* 11 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var isVNode = __webpack_require__(2)
        var isVText = __webpack_require__(5)
        var isWidget = __webpack_require__(0)
        var isThunk = __webpack_require__(3)

        module.exports = handleThunk

        function handleThunk(a, b) {
            var renderedA = a
            var renderedB = b

            if (isThunk(b)) {
                renderedB = renderThunk(b, a)
            }

            if (isThunk(a)) {
                renderedA = renderThunk(a, null)
            }

            return {
                a: renderedA,
                b: renderedB
            }
        }

        function renderThunk(thunk, previous) {
            var renderedThunk = thunk.vnode

            if (!renderedThunk) {
                renderedThunk = thunk.vnode = thunk.render(previous)
            }

            if (!(isVNode(renderedThunk) || isVText(renderedThunk) || isWidget(renderedThunk))) {
                throw new Error('thunk did not return a valid node')
            }

            return renderedThunk
        }
        /***/ },
    /* 12 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj }

        module.exports = function isObject(x) {
            return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null
        }
        /***/ },
    /* 13 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /* WEBPACK VAR INJECTION */(function(global) {
            var topLevel = typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : {}
            var minDoc = __webpack_require__(36)

            var doccy

            if (typeof document !== 'undefined') {
                doccy = document
            } else {
                doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4']

                if (!doccy) {
                    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc
                }
            }

            module.exports = doccy
            /* WEBPACK VAR INJECTION */ }.call(exports, __webpack_require__(9)))
        /***/ },
    /* 14 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var document = __webpack_require__(13)

        var applyProperties = __webpack_require__(15)

        var isVNode = __webpack_require__(2)
        var isVText = __webpack_require__(5)
        var isWidget = __webpack_require__(0)
        var handleThunk = __webpack_require__(11)

        module.exports = createElement

        function createElement(vnode, opts) {
            var doc = opts ? opts.document || document : document
            var warn = opts ? opts.warn : null

            vnode = handleThunk(vnode).a

            if (isWidget(vnode)) {
                return vnode.init()
            } else if (isVText(vnode)) {
                return doc.createTextNode(vnode.text)
            } else if (!isVNode(vnode)) {
                if (warn) {
                    warn('Item is not a valid virtual dom node', vnode)
                }
                return null
            }

            var node = vnode.namespace === null ? doc.createElement(vnode.tagName) : doc.createElementNS(vnode.namespace, vnode.tagName)

            var props = vnode.properties
            applyProperties(node, props)

            var children = vnode.children

            for (var i = 0; i < children.length; i++) {
                var childNode = createElement(children[i], opts)
                if (childNode) {
                    node.appendChild(childNode)
                }
            }

            return node
        }
        /***/ },
    /* 15 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var isObject = __webpack_require__(12)
        var isHook = __webpack_require__(4)

        module.exports = applyProperties

        function applyProperties(node, props, previous) {
            for (var propName in props) {
                var propValue = props[propName]

                if (propValue === undefined) {
                    removeProperty(node, propName, propValue, previous)
                } else if (isHook(propValue)) {
                    removeProperty(node, propName, propValue, previous)
                    if (propValue.hook) {
                        propValue.hook(node, propName, previous ? previous[propName] : undefined)
                    }
                } else {
                    if (isObject(propValue)) {
                        patchObject(node, props, previous, propName, propValue)
                    } else {
                        // https://stackoverflow.com/questions/12718186/element-setattributeprop-value-vs-element-prop-value
                        // node.setAttribute(propName,propValue)
                        if (propName.indexOf('__s_') !== -1 || propName == 'ref') {
                            node.setAttribute(propName, propValue)
                        } else {
                            node[propName] = propValue
                        }
                    }
                }
            }
        }

        function removeProperty(node, propName, propValue, previous) {
            if (previous) {
                var previousValue = previous[propName]

                if (!isHook(previousValue)) {
                    if (propName === 'attributes') {
                        for (var attrName in previousValue) {
                            node.removeAttribute(attrName)
                        }
                    } else if (propName === 'style') {
                        for (var i in previousValue) {
                            node.style[i] = ''
                        }
                    } else if (typeof previousValue === 'string') {
                        node[propName] = ''
                    } else {
                        node[propName] = null
                    }
                } else if (previousValue.unhook) {
                    previousValue.unhook(node, propName, propValue)
                }
            }
        }

        function patchObject(node, props, previous, propName, propValue) {
            var previousValue = previous ? previous[propName] : undefined

            // Set attributes
            if (propName === 'attributes') {
                for (var attrName in propValue) {
                    var attrValue = propValue[attrName]

                    if (attrValue === undefined) {
                        node.removeAttribute(attrName)
                    } else {
                        node.setAttribute(attrName, attrValue)
                    }
                }

                return
            }

            if (previousValue && isObject(previousValue) && getPrototype(previousValue) !== getPrototype(propValue)) {
                node[propName] = propValue
                return
            }

            if (!isObject(node[propName])) {
                node[propName] = {}
            }

            var replacer = propName === 'style' ? '' : undefined

            for (var k in propValue) {
                var value = propValue[k]
                node[propName][k] = value === undefined ? replacer : value
            }
        }

        function getPrototype(value) {
            if (Object.getPrototypeOf) {
                return Object.getPrototypeOf(value)
            } else if (value.__proto__) {
                return value.__proto__
            } else if (value.constructor) {
                return value.constructor.prototype
            }
        }
        /***/ },
    /* 16 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _createClass = (function() { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

        var _index = __webpack_require__(8)

        var _index2 = _interopRequireDefault(_index)

        var _hello = __webpack_require__(41)

        var _hello2 = _interopRequireDefault(_hello)

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj } }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

        function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

        var App = (function(_Omi$Component) {
            _inherits(App, _Omi$Component)

            function App() {
                _classCallCheck(this, App)

                return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments))
            }

            _createClass(App, [{
                key: 'handleClick',
                value: function handleClick(e) {
                    console.log(this.refs.test)
                    this.refs.test.innerHTML = 'empty!'
                }
            }, {
                key: 'style',
                value: function style() {
                    return '\n        <style>\n        h3{\n            color:red;\n            cursor: pointer;\n        }\n        '
                }
            }, {
                key: 'render',
                value: function render() {
                    return _index2['default'].h('div', null, [_index2['default'].h('hello', { name: this.name }), _index2['default'].h('h3', { ref: 'test', onclick: this.handleClick.bind(this) }, ['scoped css and event test! click me!'])])
                }
            }])

            return App
        }(_index2['default'].Component))

        _index2['default'].render(new App(), 'body')
        /***/ },
    /* 17 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var h = __webpack_require__(18)

        module.exports = h
        /***/ },
    /* 18 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var isArray = __webpack_require__(7)

        var VNode = __webpack_require__(19)
        var VText = __webpack_require__(20)
        var isVNode = __webpack_require__(2)
        var isVText = __webpack_require__(5)
        var isWidget = __webpack_require__(0)
        var isHook = __webpack_require__(4)
        var isVThunk = __webpack_require__(3)

        var parseTag = __webpack_require__(21)
        var softSetHook = __webpack_require__(23)
        var evHook = __webpack_require__(24)

        module.exports = h

        function h(tagName, properties, children) {
            var childNodes = []
            var tag, props, key, namespace

            if (!children && isChildren(properties)) {
                children = properties
                props = {}
            }

            props = props || properties || {}
            tag = parseTag(tagName, props)

            // support keys
            if (props.hasOwnProperty('key')) {
                key = props.key
                props.key = undefined
            }

            // support namespace
            if (props.hasOwnProperty('namespace')) {
                namespace = props.namespace
                props.namespace = undefined
            }

            // fix cursor bug
            if (tag === 'INPUT' && !namespace && props.hasOwnProperty('value') && props.value !== undefined && !isHook(props.value)) {
                props.value = softSetHook(props.value)
            }

            transformProperties(props)

            if (children !== undefined && children !== null) {
                addChild(children, childNodes, tag, props)
            }

            return new VNode(tag, props, childNodes, key, namespace)
        }

        function addChild(c, childNodes, tag, props) {
            if (typeof c === 'string') {
                childNodes.push(new VText(c))
            } else if (typeof c === 'number') {
                childNodes.push(new VText(String(c)))
            } else if (isChild(c)) {
                childNodes.push(c)
            } else if (isArray(c)) {
                for (var i = 0; i < c.length; i++) {
                    addChild(c[i], childNodes, tag, props)
                }
            } else if (c === null || c === undefined || c === false) {

            } else {
                throw UnexpectedVirtualElement({
                    foreignObject: c,
                    parentVnode: {
                        tagName: tag,
                        properties: props
                    }
                })
            }
        }

        function transformProperties(props) {
            for (var propName in props) {
                if (props.hasOwnProperty(propName)) {
                    var value = props[propName]

                    if (isHook(value)) {
                        continue
                    }

                    if (propName.substr(0, 3) === 'ev-') {
                        // add ev-foo support
                        props[propName] = evHook(value)
                    }
                }
            }
        }

        function isChild(x) {
            return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x)
        }

        function isChildren(x) {
            return typeof x === 'string' || isArray(x) || isChild(x)
        }

        function UnexpectedVirtualElement(data) {
            var err = new Error()

            err.type = 'virtual-hyperscript.unexpected.virtual-element'
            err.message = 'Unexpected virtual child passed to h().\n' + 'Expected a VNode / Vthunk / VWidget / string but:\n' + 'got:\n' + errorString(data.foreignObject) + '.\n' + 'The parent vnode is:\n' + errorString(data.parentVnode)
            '\n' + 'Suggested fix: change your `h(..., [ ... ])` callsite.'
            err.foreignObject = data.foreignObject
            err.parentVnode = data.parentVnode

            return err
        }

        function errorString(obj) {
            try {
                return JSON.stringify(obj, null, '    ')
            } catch (e) {
                return String(obj)
            }
        }
        /***/ },
    /* 19 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var version = __webpack_require__(1)
        var isVNode = __webpack_require__(2)
        var isWidget = __webpack_require__(0)
        var isThunk = __webpack_require__(3)
        var isVHook = __webpack_require__(4)

        module.exports = VirtualNode

        var noProperties = {}
        var noChildren = []

        function VirtualNode(tagName, properties, children, key, namespace) {
            this.tagName = tagName
            this.properties = properties || noProperties
            this.children = children || noChildren
            this.key = key != null ? String(key) : undefined
            this.namespace = typeof namespace === 'string' ? namespace : null

            var count = children && children.length || 0
            var descendants = 0
            var hasWidgets = false
            var hasThunks = false
            var descendantHooks = false
            var hooks

            for (var propName in properties) {
                if (properties.hasOwnProperty(propName)) {
                    var property = properties[propName]
                    if (isVHook(property) && property.unhook) {
                        if (!hooks) {
                            hooks = {}
                        }

                        hooks[propName] = property
                    }
                }
            }

            for (var i = 0; i < count; i++) {
                var child = children[i]
                if (isVNode(child)) {
                    descendants += child.count || 0

                    if (!hasWidgets && child.hasWidgets) {
                        hasWidgets = true
                    }

                    if (!hasThunks && child.hasThunks) {
                        hasThunks = true
                    }

                    if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                        descendantHooks = true
                    }
                } else if (!hasWidgets && isWidget(child)) {
                    if (typeof child.destroy === 'function') {
                        hasWidgets = true
                    }
                } else if (!hasThunks && isThunk(child)) {
                    hasThunks = true
                }
            }

            this.count = count + descendants
            this.hasWidgets = hasWidgets
            this.hasThunks = hasThunks
            this.hooks = hooks
            this.descendantHooks = descendantHooks
        }

        VirtualNode.prototype.version = version
        VirtualNode.prototype.type = 'VirtualNode'
        /***/ },
    /* 20 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var version = __webpack_require__(1)

        module.exports = VirtualText

        function VirtualText(text) {
            this.text = String(text)
        }

        VirtualText.prototype.version = version
        VirtualText.prototype.type = 'VirtualText'
        /***/ },
    /* 21 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var split = __webpack_require__(22)

        var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/
        var notClassId = /^\.|#/

        module.exports = parseTag

        function parseTag(tag, props) {
            if (!tag) {
                return 'DIV'
            }

            var noId = !props.hasOwnProperty('id')

            var tagParts = split(tag, classIdSplit)
            var tagName = null

            if (notClassId.test(tagParts[1])) {
                tagName = 'DIV'
            }

            var classes, part, type, i

            for (i = 0; i < tagParts.length; i++) {
                part = tagParts[i]

                if (!part) {
                    continue
                }

                type = part.charAt(0)

                if (!tagName) {
                    tagName = part
                } else if (type === '.') {
                    classes = classes || []
                    classes.push(part.substring(1, part.length))
                } else if (type === '#' && noId) {
                    props.id = part.substring(1, part.length)
                }
            }

            if (classes) {
                if (props.className) {
                    classes.push(props.className)
                }

                props.className = classes.join(' ')
            }

            return props.namespace ? tagName : tagName.toUpperCase()
        }
        /***/ },
    /* 22 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        /*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

        /**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
        module.exports = (function split(undef) {
            var nativeSplit = String.prototype.split,
                compliantExecNpcg = /()??/.exec('')[1] === undef,

                // NPCG: nonparticipating capturing group
                self

            self = function self(str, separator, limit) {
                // If `separator` is not a regex, use `nativeSplit`
                if (Object.prototype.toString.call(separator) !== '[object RegExp]') {
                    return nativeSplit.call(str, separator, limit)
                }
                var output = [],
                    flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.extended ? 'x' : '') + ( // Proposed for ES6
                        separator.sticky ? 'y' : ''),

                    // Firefox 3+
                    lastLastIndex = 0,

                    // Make `global` and avoid `lastIndex` issues by working with a copy
                    separator = new RegExp(separator.source, flags + 'g'),
                    separator2,
                    match,
                    lastIndex,
                    lastLength
                str += '' // Type-convert
                if (!compliantExecNpcg) {
                    // Doesn't need flags gy, but they don't hurt
                    separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags)
                }
                /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
                limit = limit === undef ? -1 >>> 0 // Math.pow(2, 32) - 1
                    : limit >>> 0 // ToUint32(limit)
                while (match = separator.exec(str)) {
                    // `separator.lastIndex` is not reliable cross-browser
                    lastIndex = match.index + match[0].length
                    if (lastIndex > lastLastIndex) {
                        output.push(str.slice(lastLastIndex, match.index))
                        // Fix browsers whose `exec` methods don't consistently return `undefined` for
                        // nonparticipating capturing groups
                        if (!compliantExecNpcg && match.length > 1) {
                            match[0].replace(separator2, function() {
                                for (var i = 1; i < arguments.length - 2; i++) {
                                    if (arguments[i] === undef) {
                                        match[i] = undef
                                    }
                                }
                            })
                        }
                        if (match.length > 1 && match.index < str.length) {
                            Array.prototype.push.apply(output, match.slice(1))
                        }
                        lastLength = match[0].length
                        lastLastIndex = lastIndex
                        if (output.length >= limit) {
                            break
                        }
                    }
                    if (separator.lastIndex === match.index) {
                        separator.lastIndex++ // Avoid an infinite loop
                    }
                }
                if (lastLastIndex === str.length) {
                    if (lastLength || !separator.test('')) {
                        output.push('')
                    }
                } else {
                    output.push(str.slice(lastLastIndex))
                }
                return output.length > limit ? output.slice(0, limit) : output
            }

            return self
        }())
        /***/ },
    /* 23 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        module.exports = SoftSetHook

        function SoftSetHook(value) {
            if (!(this instanceof SoftSetHook)) {
                return new SoftSetHook(value)
            }

            this.value = value
        }

        SoftSetHook.prototype.hook = function(node, propertyName) {
            if (node[propertyName] !== this.value) {
                node[propertyName] = this.value
            }
        }
        /***/ },
    /* 24 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var EvStore = __webpack_require__(25)

        module.exports = EvHook

        function EvHook(value) {
            if (!(this instanceof EvHook)) {
                return new EvHook(value)
            }

            this.value = value
        }

        EvHook.prototype.hook = function(node, propertyName) {
            var es = EvStore(node)
            var propName = propertyName.substr(3)

            es[propName] = this.value
        }

        EvHook.prototype.unhook = function(node, propertyName) {
            var es = EvStore(node)
            var propName = propertyName.substr(3)

            es[propName] = undefined
        }
        /***/ },
    /* 25 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var OneVersionConstraint = __webpack_require__(26)

        var MY_VERSION = '7'
        OneVersionConstraint('ev-store', MY_VERSION)

        var hashKey = '__EV_STORE_KEY@' + MY_VERSION

        module.exports = EvStore

        function EvStore(elem) {
            var hash = elem[hashKey]

            if (!hash) {
                hash = elem[hashKey] = {}
            }

            return hash
        }
        /***/ },
    /* 26 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var Individual = __webpack_require__(27)

        module.exports = OneVersion

        function OneVersion(moduleName, version, defaultValue) {
            var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName
            var enforceKey = key + '_ENFORCE_SINGLETON'

            var versionValue = Individual(enforceKey, version)

            if (versionValue !== version) {
                throw new Error('Can only have one copy of ' + moduleName + '.\n' + 'You already have version ' + versionValue + ' installed.\n' + 'This means you cannot install version ' + version)
            }

            return Individual(key, defaultValue)
        }
        /***/ },
    /* 27 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /* WEBPACK VAR INJECTION */(function(global) {
            /* global window, global */

            var root = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {}

            module.exports = Individual

            function Individual(key, value) {
                if (key in root) {
                    return root[key]
                }

                root[key] = value

                return value
            }
            /* WEBPACK VAR INJECTION */ }.call(exports, __webpack_require__(9)))
        /***/ },
    /* 28 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
            value: true
        })
        var isValidString = function isValidString(param) {
            return typeof param === 'string' && param.length > 0
        }

        var startsWith = function startsWith(string, start) {
            return string[0] === start
        }

        var isSelector = function isSelector(param) {
            return isValidString(param) && (startsWith(param, '.') || startsWith(param, '#'))
        }

        var node = function node(h) {
            return function(tagName) {
                return function(first) {
                    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        rest[_key - 1] = arguments[_key]
                    }

                    if (isSelector(first)) {
                        return h.apply(undefined, [tagName + first].concat(rest))
                    } else if (typeof first === 'undefined') {
                        return h(tagName)
                    } else {
                        return h.apply(undefined, [tagName, first].concat(rest))
                    }
                }
            }
        }

        var TAG_NAMES = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'content', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'image', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark', 'marquee', 'math', 'menu', 'menuitem', 'meta', 'meter', 'multicol', 'nav', 'nextid', 'nobr', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'plaintext', 'pre', 'progress', 'q', 'rb', 'rbc', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'slot', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp']

        exports['default'] = function(h) {
            var createTag = node(h)
            var exported = { TAG_NAMES: TAG_NAMES, isSelector: isSelector, createTag: createTag }
            TAG_NAMES.forEach(function(n) {
                exported[n] = createTag(n)
            })
            return exported
        }

        module.exports = exports['default']
        /***/ },
    /* 29 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
            value: true
        })

        var _createClass = (function() { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

        var _omi = __webpack_require__(6)

        var _omi2 = _interopRequireDefault(_omi)

        var _style = __webpack_require__(30)

        var _style2 = _interopRequireDefault(_style)

        var _diff = __webpack_require__(31)

        var _diff2 = _interopRequireDefault(_diff)

        var _patch = __webpack_require__(34)

        var _patch2 = _interopRequireDefault(_patch)

        var _createElement = __webpack_require__(40)

        var _createElement2 = _interopRequireDefault(_createElement)

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj } }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

        var Component = (function() {
            function Component(data) {
                _classCallCheck(this, Component)

                this.data = Object.assign({
                    scopedSelfCSS: false
                }, data)
                this.id = _omi2['default'].getInstanceId()
                this.children = []
                this._omi_scopedSelfCSS = this.data.scopedSelfCSS
                this._omi_scoped_attr = '__s_' + this.id
                _omi2['default'].instances[this.id] = this
                this.refs = {}
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
                    this._resetUsing(this)
                    this.beforeUpdate()
                    this._childrenBeforeUpdate(this)
                    this.beforeRender()
                    this._preVirtualDom = this._virtualDom
                    this._virtualDom = this.render()
                    this._normalize(this._virtualDom);
                    (0, _patch2['default'])(this.node, (0, _diff2['default'])(this._preVirtualDom, this._virtualDom))

                    this._mixRefs(this)

                    this._childrenAfterUpdate(this)
                    this.afterUpdate()

                    this._childrenInstalled(this)
                }
            }, {
                key: '_childrenBeforeUpdate',
                value: function _childrenBeforeUpdate(root) {
                    var _this = this

                    root.children.forEach(function(child) {
                        child.beforeUpdate()
                        _this._childrenBeforeUpdate(child)
                    })
                }
            }, {
                key: '_childrenAfterUpdate',
                value: function _childrenAfterUpdate(root) {
                    var _this2 = this

                    root.children.forEach(function(child) {
                        _this2._childrenAfterUpdate(child)
                        child.afterUpdate()
                    })
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
                        this._omi_installedHandlers = []
                    }
                    this._omi_installedHandlers.push(handler)
                }
            }, {
                key: '_execInstalledHandlers',
                value: function _execInstalledHandlers() {
                    this._omi_installedHandlers && this._omi_installedHandlers.forEach(function(handler) {
                        handler()
                    })
                }
            }, {
                key: '_render',
                value: function _render() {
                    this._generateCSS()
                    this._virtualDom = this.render()
                    this._normalize(this._virtualDom)
                    this.node = (0, _createElement2['default'])(this._virtualDom)
                    if (this.renderTo) {
                        this.renderTo.appendChild(this.node)
                        this._mixRefs(this)
                    }
                }
            }, {
                key: '_generateCSS',
                value: function _generateCSS() {
                    var name = this.constructor.is
                    this.CSS = (this.style() || '').replace(/<\/?style>/g, '')
                    var shareAttr = name ? '__s_' + name : '__s_' + this.id

                    if (this.CSS) {
                        if (this._omi_scopedSelfCSS || !_omi2['default'].style[shareAttr]) {
                            if (_omi2['default'].scopedStyle) {
                                this.CSS = _style2['default'].scoper(this.CSS, this._omi_scopedSelfCSS ? '[__s_' + this.id + ']' : '[' + shareAttr + ']')
                            }
                            _omi2['default'].style[shareAttr] = this.CSS
                            if (this.CSS !== this._preCSS) {
                                _style2['default'].addStyle(this.CSS, this.id)
                                this._preCSS = this.CSS
                            }
                        }
                    }
                }
            }, {
                key: '_normalize',
                value: function _normalize(root, parent, index, parentInstance) {
                    var _this3 = this

                    var ps = root.properties
                    // for scoped css
                    if (_omi2['default'].scopedStyle && ps) {
                        if (this.constructor.is) {
                            ps['__s_' + this.constructor.is] = ''
                        }
                        ps['__s_' + this.id] = ''
                    }
                    // 编译啥时候处理?
                    for (var key in ps) {
                        if (/on(Abort|Blur|Cancel|CanPlay|CanPlayThrough|Change|Click|Close|ContextMenu|CueChange|DblClick|Drag|DragEnd|DragEnter|DragLeave|DragOver|DragStart|Drop|DurationChange|Emptied|Ended|Error|Focus|Input|Invalid|KeyDown|KeyPress|KeyUp|Load|LoadedData|LoadedMetadata|LoadStart|MouseDown|MouseEnter|MouseLeave|MouseMove|MouseOut|MouseOver|MouseUp|MouseWheel|Pause|Play|Playing|Progress|RateChange|Reset|Resize|Scroll|Seeked|Seeking|Select|Show|Stalled|Submit|Suspend|TimeUpdate|Toggle|VolumeChange|Waiting|AutoComplete|AutoCompleteError|BeforeCopy|BeforeCut|BeforePaste|Copy|Cut|Paste|Search|SelectStart|Wheel|WebkitFullScreenChange|WebkitFullScreenError|TouchStart|TouchMove|TouchEnd|TouchCancel|PointerDown|PointerUp|PointerCancel|PointerMove|PointerOver|PointerOut|PointerEnter|PointerLeave)/g.test(key)) {
                            if (ps.hasOwnProperty(key)) {
                                ps[key.toLowerCase()] = ps[key]
                            }
                        }
                    }

                    if (root.tagName) {
                        var cmi = this._getNextChild(root.tagName, parentInstance)
                        if (cmi) {
                            cmi.beforeRender()
                            cmi._render()
                            parent[index] = cmi._virtualDom
                        } else {
                            var Ctor = _omi2['default'].getConstructor(root.tagName.toLowerCase())
                            if (Ctor) {
                                var instance = new Ctor(root.properties)
                                instance.install()
                                instance.beforeRender()
                                instance._render()
                                instance.parent = parentInstance
                                instance._omi_needInstalled = true
                                parentInstance.children.push(instance)
                                parent[index] = instance._virtualDom
                            }
                        }
                    }

                    root.children && root.children.forEach(function(child, index) {
                        _this3._normalize(child, root.children, index, _this3)
                    })
                }
            }, {
                key: '_resetUsing',
                value: function _resetUsing(root) {
                    var _this4 = this

                    root.children.forEach(function(child) {
                        _this4._resetUsing(child)
                        child._using = false
                    })
                }
            }, {
                key: '_getNextChild',
                value: function _getNextChild(cn, parentInstance) {
                    if (parentInstance) {
                        for (var i = 0, len = parentInstance.children.length; i < len; i++) {
                            var child = parentInstance.children[i]
                            var is = child.constructor.is
                            if ((cn.toLowerCase() === is || cn.toLowerCase() === _omi2['default']._capitalize(is)) && !child._using) {
                                child._using = true
                                return child
                            }
                        }
                    }
                }
            }, {
                key: '_childrenInstalled',
                value: function _childrenInstalled(root) {
                    var _this5 = this

                    root.children.forEach(function(child) {
                        _this5._childrenInstalled(child)
                        child._omi_needInstalled && child.installed()
                        child._omi_needInstalled = false
                        child._execInstalledHandlers()
                    })
                }
            }, {
                key: '_mixRefs',
                value: function _mixRefs() {
                    var _this6 = this

                    this.refs = {}
                    var nodes = _omi2['default'].$$('*[ref]', this.node)
                    nodes.forEach(function(node) {
                        if (node.hasAttribute(_this6._omi_scoped_attr)) {
                            _this6.refs[node.getAttribute('ref')] = node
                        }
                    })
                    var attr = this.node.getAttribute('ref')
                    if (attr) {
                        this.refs[attr] = this.node
                    }

                    this.children.forEach(function(child) {
                        return child._mixRefs()
                    })
                }
            }])

            return Component
        }())

        exports['default'] = Component
        /***/ },
    /* 30 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
            value: true
        })

        var _omi = __webpack_require__(6)

        var _omi2 = _interopRequireDefault(_omi)

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj } }

        // many thanks to https://github.com/thomaspark/scoper/
        function scoper(css, prefix) {
            // https://www.w3.org/TR/css-syntax-3/#lexical
            css = css.replace(/\/\*[^*]*\*+([^/][^*]*\*+)*\//g, '')

            var re = new RegExp('([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{}]*{)|\s*{)', 'g')
            /**
     * Example:
     *
     * .classname::pesudo { color:red }
     *
     * g1 is normal selector `.classname`
     * g2 is pesudo class or pesudo element
     * g3 is the suffix
     */
            css = css.replace(re, function(g0, g1, g2, g3) {
                if (typeof g2 === 'undefined') {
                    g2 = ''
                }

                /* eslint-ignore-next-line */
                if (g1.match(/^\s*(@media|\d+%?|@-webkit-keyframes|@keyframes|to|from|@font-face)/)) {
                    return g1 + g2 + g3
                }

                var appendClass = g1.replace(/(\s*)$/, '') + prefix + g2
                var prependClass = prefix + ' ' + g1.trim() + g2
                return appendClass + ',' + prependClass + g3
            })

            return css
        }

        function addStyle(cssText, id) {
            var ele = document.getElementById(_omi2['default'].STYLEPREFIX + id)
            var head = document.getElementsByTagName('head')[0]
            if (ele && ele.parentNode === head) {
                head.removeChild(ele)
            }

            var someThingStyles = document.createElement('style')
            head.appendChild(someThingStyles)
            someThingStyles.setAttribute('type', 'text/css')
            someThingStyles.setAttribute('id', _omi2['default'].STYLEPREFIX + id)
            if (window.ActiveXObject) {
                someThingStyles.styleSheet.cssText = cssText
            } else {
                someThingStyles.textContent = cssText
            }
        }

        exports['default'] = {
            scoper: scoper,
            addStyle: addStyle
        }
        /***/ },
    /* 31 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var diff = __webpack_require__(32)

        module.exports = diff
        /***/ },
    /* 32 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var isArray = __webpack_require__(7)

        var VPatch = __webpack_require__(10)
        var isVNode = __webpack_require__(2)
        var isVText = __webpack_require__(5)
        var isWidget = __webpack_require__(0)
        var isThunk = __webpack_require__(3)
        var handleThunk = __webpack_require__(11)

        var diffProps = __webpack_require__(33)

        module.exports = diff

        function diff(a, b) {
            var patch = { a: a }
            walk(a, b, patch, 0)
            return patch
        }

        function walk(a, b, patch, index) {
            if (a === b) {
                return
            }

            var apply = patch[index]
            var applyClear = false

            if (isThunk(a) || isThunk(b)) {
                thunks(a, b, patch, index)
            } else if (b == null) {
                // If a is a widget we will add a remove patch for it
                // Otherwise any child widgets/hooks must be destroyed.
                // This prevents adding two remove patches for a widget.
                if (!isWidget(a)) {
                    clearState(a, patch, index)
                    apply = patch[index]
                }

                apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
            } else if (isVNode(b)) {
                if (isVNode(a)) {
                    if (a.tagName === b.tagName && a.namespace === b.namespace && a.key === b.key) {
                        var propsPatch = diffProps(a.properties, b.properties)
                        if (propsPatch) {
                            apply = appendPatch(apply, new VPatch(VPatch.PROPS, a, propsPatch))
                        }
                        apply = diffChildren(a, b, patch, apply, index)
                    } else {
                        apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
                        applyClear = true
                    }
                } else {
                    apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
                    applyClear = true
                }
            } else if (isVText(b)) {
                if (!isVText(a)) {
                    apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
                    applyClear = true
                } else if (a.text !== b.text) {
                    apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
                }
            } else if (isWidget(b)) {
                if (!isWidget(a)) {
                    applyClear = true
                }

                apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
            }

            if (apply) {
                patch[index] = apply
            }

            if (applyClear) {
                clearState(a, patch, index)
            }
        }

        function diffChildren(a, b, patch, apply, index) {
            var aChildren = a.children
            var orderedSet = reorder(aChildren, b.children)
            var bChildren = orderedSet.children

            var aLen = aChildren.length
            var bLen = bChildren.length
            var len = aLen > bLen ? aLen : bLen

            for (var i = 0; i < len; i++) {
                var leftNode = aChildren[i]
                var rightNode = bChildren[i]
                index += 1

                if (!leftNode) {
                    if (rightNode) {
                        // Excess nodes in b need to be added
                        apply = appendPatch(apply, new VPatch(VPatch.INSERT, null, rightNode))
                    }
                } else {
                    walk(leftNode, rightNode, patch, index)
                }

                if (isVNode(leftNode) && leftNode.count) {
                    index += leftNode.count
                }
            }

            if (orderedSet.moves) {
                // Reorder nodes last
                apply = appendPatch(apply, new VPatch(VPatch.ORDER, a, orderedSet.moves))
            }

            return apply
        }

        function clearState(vNode, patch, index) {
            // TODO: Make this a single walk, not two
            unhook(vNode, patch, index)
            destroyWidgets(vNode, patch, index)
        }

        // Patch records for all destroyed widgets must be added because we need
        // a DOM node reference for the destroy function
        function destroyWidgets(vNode, patch, index) {
            if (isWidget(vNode)) {
                if (typeof vNode.destroy === 'function') {
                    patch[index] = appendPatch(patch[index], new VPatch(VPatch.REMOVE, vNode, null))
                }
            } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
                var children = vNode.children
                var len = children.length
                for (var i = 0; i < len; i++) {
                    var child = children[i]
                    index += 1

                    destroyWidgets(child, patch, index)

                    if (isVNode(child) && child.count) {
                        index += child.count
                    }
                }
            } else if (isThunk(vNode)) {
                thunks(vNode, null, patch, index)
            }
        }

        // Create a sub-patch for thunks
        function thunks(a, b, patch, index) {
            var nodes = handleThunk(a, b)
            var thunkPatch = diff(nodes.a, nodes.b)
            if (hasPatches(thunkPatch)) {
                patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
            }
        }

        function hasPatches(patch) {
            for (var index in patch) {
                if (index !== 'a') {
                    return true
                }
            }

            return false
        }

        // Execute hooks when two nodes are identical
        function unhook(vNode, patch, index) {
            if (isVNode(vNode)) {
                if (vNode.hooks) {
                    patch[index] = appendPatch(patch[index], new VPatch(VPatch.PROPS, vNode, undefinedKeys(vNode.hooks)))
                }

                if (vNode.descendantHooks || vNode.hasThunks) {
                    var children = vNode.children
                    var len = children.length
                    for (var i = 0; i < len; i++) {
                        var child = children[i]
                        index += 1

                        unhook(child, patch, index)

                        if (isVNode(child) && child.count) {
                            index += child.count
                        }
                    }
                }
            } else if (isThunk(vNode)) {
                thunks(vNode, null, patch, index)
            }
        }

        function undefinedKeys(obj) {
            var result = {}

            for (var key in obj) {
                result[key] = undefined
            }

            return result
        }

        // List diff, naive left to right reordering
        function reorder(aChildren, bChildren) {
            // O(M) time, O(M) memory
            var bChildIndex = keyIndex(bChildren)
            var bKeys = bChildIndex.keys
            var bFree = bChildIndex.free

            if (bFree.length === bChildren.length) {
                return {
                    children: bChildren,
                    moves: null
                }
            }

            // O(N) time, O(N) memory
            var aChildIndex = keyIndex(aChildren)
            var aKeys = aChildIndex.keys
            var aFree = aChildIndex.free

            if (aFree.length === aChildren.length) {
                return {
                    children: bChildren,
                    moves: null
                }
            }

            // O(MAX(N, M)) memory
            var newChildren = []

            var freeIndex = 0
            var freeCount = bFree.length
            var deletedItems = 0

            // Iterate through a and match a node in b
            // O(N) time,
            for (var i = 0; i < aChildren.length; i++) {
                var aItem = aChildren[i]
                var itemIndex

                if (aItem.key) {
                    if (bKeys.hasOwnProperty(aItem.key)) {
                        // Match up the old keys
                        itemIndex = bKeys[aItem.key]
                        newChildren.push(bChildren[itemIndex])
                    } else {
                        // Remove old keyed items
                        itemIndex = i - deletedItems++
                        newChildren.push(null)
                    }
                } else {
                    // Match the item in a with the next free item in b
                    if (freeIndex < freeCount) {
                        itemIndex = bFree[freeIndex++]
                        newChildren.push(bChildren[itemIndex])
                    } else {
                        // There are no free items in b to match with
                        // the free items in a, so the extra free nodes
                        // are deleted.
                        itemIndex = i - deletedItems++
                        newChildren.push(null)
                    }
                }
            }

            var lastFreeIndex = freeIndex >= bFree.length ? bChildren.length : bFree[freeIndex]

            // Iterate through b and append any new keys
            // O(M) time
            for (var j = 0; j < bChildren.length; j++) {
                var newItem = bChildren[j]

                if (newItem.key) {
                    if (!aKeys.hasOwnProperty(newItem.key)) {
                        // Add any new keyed items
                        // We are adding new items to the end and then sorting them
                        // in place. In future we should insert new items in place.
                        newChildren.push(newItem)
                    }
                } else if (j >= lastFreeIndex) {
                    // Add any leftover non-keyed items
                    newChildren.push(newItem)
                }
            }

            var simulate = newChildren.slice()
            var simulateIndex = 0
            var removes = []
            var inserts = []
            var simulateItem

            for (var k = 0; k < bChildren.length;) {
                var wantedItem = bChildren[k]
                simulateItem = simulate[simulateIndex]

                // remove items
                while (simulateItem === null && simulate.length) {
                    removes.push(remove(simulate, simulateIndex, null))
                    simulateItem = simulate[simulateIndex]
                }

                if (!simulateItem || simulateItem.key !== wantedItem.key) {
                    // if we need a key in this position...
                    if (wantedItem.key) {
                        if (simulateItem && simulateItem.key) {
                            // if an insert doesn't put this key in place, it needs to move
                            if (bKeys[simulateItem.key] !== k + 1) {
                                removes.push(remove(simulate, simulateIndex, simulateItem.key))
                                simulateItem = simulate[simulateIndex]
                                // if the remove didn't put the wanted item in place, we need to insert it
                                if (!simulateItem || simulateItem.key !== wantedItem.key) {
                                    inserts.push({ key: wantedItem.key, to: k })
                                }
                                // items are matching, so skip ahead
                                else {
                                    simulateIndex++
                                }
                            } else {
                                inserts.push({ key: wantedItem.key, to: k })
                            }
                        } else {
                            inserts.push({ key: wantedItem.key, to: k })
                        }
                        k++
                    }
                    // a key in simulate has no matching wanted key, remove it
                    else if (simulateItem && simulateItem.key) {
                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
                    }
                } else {
                    simulateIndex++
                    k++
                }
            }

            // remove all the remaining nodes from simulate
            while (simulateIndex < simulate.length) {
                simulateItem = simulate[simulateIndex]
                removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
            }

            // If the only moves we have are deletes then we can just
            // let the delete patch remove these items.
            if (removes.length === deletedItems && !inserts.length) {
                return {
                    children: newChildren,
                    moves: null
                }
            }

            return {
                children: newChildren,
                moves: {
                    removes: removes,
                    inserts: inserts
                }
            }
        }

        function remove(arr, index, key) {
            arr.splice(index, 1)

            return {
                from: index,
                key: key
            }
        }

        function keyIndex(children) {
            var keys = {}
            var free = []
            var length = children.length

            for (var i = 0; i < length; i++) {
                var child = children[i]

                if (child.key) {
                    keys[child.key] = i
                } else {
                    free.push(i)
                }
            }

            return {
                keys: keys, // A hash of key name to index
                free: free // An array of unkeyed item indices
            }
        }

        function appendPatch(apply, patch) {
            if (apply) {
                if (isArray(apply)) {
                    apply.push(patch)
                } else {
                    apply = [apply, patch]
                }

                return apply
            } else {
                return patch
            }
        }
        /***/ },
    /* 33 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var isObject = __webpack_require__(12)
        var isHook = __webpack_require__(4)

        module.exports = diffProps

        function diffProps(a, b) {
            var diff

            for (var aKey in a) {
                if (!(aKey in b)) {
                    diff = diff || {}
                    diff[aKey] = undefined
                }

                var aValue = a[aKey]
                var bValue = b[aKey]

                if (aValue === bValue) {
                    continue
                } else if (isObject(aValue) && isObject(bValue)) {
                    if (getPrototype(bValue) !== getPrototype(aValue)) {
                        diff = diff || {}
                        diff[aKey] = bValue
                    } else if (isHook(bValue)) {
                        diff = diff || {}
                        diff[aKey] = bValue
                    } else {
                        var objectDiff = diffProps(aValue, bValue)
                        if (objectDiff) {
                            diff = diff || {}
                            diff[aKey] = objectDiff
                        }
                    }
                } else {
                    diff = diff || {}
                    diff[aKey] = bValue
                }
            }

            for (var bKey in b) {
                if (!(bKey in a)) {
                    diff = diff || {}
                    diff[bKey] = b[bKey]
                }
            }

            return diff
        }

        function getPrototype(value) {
            if (Object.getPrototypeOf) {
                return Object.getPrototypeOf(value)
            } else if (value.__proto__) {
                return value.__proto__
            } else if (value.constructor) {
                return value.constructor.prototype
            }
        }
        /***/ },
    /* 34 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var patch = __webpack_require__(35)

        module.exports = patch
        /***/ },
    /* 35 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var document = __webpack_require__(13)
        var isArray = __webpack_require__(7)

        var render = __webpack_require__(14)
        var domIndex = __webpack_require__(37)
        var patchOp = __webpack_require__(38)
        module.exports = patch

        function patch(rootNode, patches, renderOptions) {
            renderOptions = renderOptions || {}
            renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch ? renderOptions.patch : patchRecursive
            renderOptions.render = renderOptions.render || render

            return renderOptions.patch(rootNode, patches, renderOptions)
        }

        function patchRecursive(rootNode, patches, renderOptions) {
            var indices = patchIndices(patches)

            if (indices.length === 0) {
                return rootNode
            }

            var index = domIndex(rootNode, patches.a, indices)
            var ownerDocument = rootNode.ownerDocument

            if (!renderOptions.document && ownerDocument !== document) {
                renderOptions.document = ownerDocument
            }

            for (var i = 0; i < indices.length; i++) {
                var nodeIndex = indices[i]
                rootNode = applyPatch(rootNode, index[nodeIndex], patches[nodeIndex], renderOptions)
            }

            return rootNode
        }

        function applyPatch(rootNode, domNode, patchList, renderOptions) {
            if (!domNode) {
                return rootNode
            }

            var newNode

            if (isArray(patchList)) {
                for (var i = 0; i < patchList.length; i++) {
                    newNode = patchOp(patchList[i], domNode, renderOptions)

                    if (domNode === rootNode) {
                        rootNode = newNode
                    }
                }
            } else {
                newNode = patchOp(patchList, domNode, renderOptions)

                if (domNode === rootNode) {
                    rootNode = newNode
                }
            }

            return rootNode
        }

        function patchIndices(patches) {
            var indices = []

            for (var key in patches) {
                if (key !== 'a') {
                    indices.push(Number(key))
                }
            }

            return indices
        }
        /***/ },
    /* 36 */
    /***/ function(module, exports) {

        /* (ignored) */

        /***/ },
    /* 37 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        // Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
        // We don't want to read all of the DOM nodes in the tree so we use
        // the in-order tree indexing to eliminate recursion down certain branches.
        // We only recurse into a DOM node if we know that it contains a child of
        // interest.

        var noChild = {}

        module.exports = domIndex

        function domIndex(rootNode, tree, indices, nodes) {
            if (!indices || indices.length === 0) {
                return {}
            } else {
                indices.sort(ascending)
                return recurse(rootNode, tree, indices, nodes, 0)
            }
        }

        function recurse(rootNode, tree, indices, nodes, rootIndex) {
            nodes = nodes || {}

            if (rootNode) {
                if (indexInRange(indices, rootIndex, rootIndex)) {
                    nodes[rootIndex] = rootNode
                }

                var vChildren = tree.children

                if (vChildren) {
                    var childNodes = rootNode.childNodes

                    for (var i = 0; i < tree.children.length; i++) {
                        rootIndex += 1

                        var vChild = vChildren[i] || noChild
                        var nextIndex = rootIndex + (vChild.count || 0)

                        // skip recursion down the tree if there are no nodes down here
                        if (indexInRange(indices, rootIndex, nextIndex)) {
                            recurse(childNodes[i], vChild, indices, nodes, rootIndex)
                        }

                        rootIndex = nextIndex
                    }
                }
            }

            return nodes
        }

        // Binary search for an index in the interval [left, right]
        function indexInRange(indices, left, right) {
            if (indices.length === 0) {
                return false
            }

            var minIndex = 0
            var maxIndex = indices.length - 1
            var currentIndex
            var currentItem

            while (minIndex <= maxIndex) {
                currentIndex = (maxIndex + minIndex) / 2 >> 0
                currentItem = indices[currentIndex]

                if (minIndex === maxIndex) {
                    return currentItem >= left && currentItem <= right
                } else if (currentItem < left) {
                    minIndex = currentIndex + 1
                } else if (currentItem > right) {
                    maxIndex = currentIndex - 1
                } else {
                    return true
                }
            }

            return false
        }

        function ascending(a, b) {
            return a > b ? 1 : -1
        }
        /***/ },
    /* 38 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var applyProperties = __webpack_require__(15)

        var isWidget = __webpack_require__(0)
        var VPatch = __webpack_require__(10)

        var updateWidget = __webpack_require__(39)

        module.exports = applyPatch

        function applyPatch(vpatch, domNode, renderOptions) {
            var type = vpatch.type
            var vNode = vpatch.vNode
            var patch = vpatch.patch

            switch (type) {
            case VPatch.REMOVE:
                return removeNode(domNode, vNode)
            case VPatch.INSERT:
                return insertNode(domNode, patch, renderOptions)
            case VPatch.VTEXT:
                return stringPatch(domNode, vNode, patch, renderOptions)
            case VPatch.WIDGET:
                return widgetPatch(domNode, vNode, patch, renderOptions)
            case VPatch.VNODE:
                return vNodePatch(domNode, vNode, patch, renderOptions)
            case VPatch.ORDER:
                reorderChildren(domNode, patch)
                return domNode
            case VPatch.PROPS:
                applyProperties(domNode, patch, vNode.properties)
                return domNode
            case VPatch.THUNK:
                return replaceRoot(domNode, renderOptions.patch(domNode, patch, renderOptions))
            default:
                return domNode
            }
        }

        function removeNode(domNode, vNode) {
            var parentNode = domNode.parentNode

            if (parentNode) {
                parentNode.removeChild(domNode)
            }

            destroyWidget(domNode, vNode)

            return null
        }

        function insertNode(parentNode, vNode, renderOptions) {
            var newNode = renderOptions.render(vNode, renderOptions)

            if (parentNode) {
                parentNode.appendChild(newNode)
            }

            return parentNode
        }

        function stringPatch(domNode, leftVNode, vText, renderOptions) {
            var newNode

            if (domNode.nodeType === 3) {
                domNode.replaceData(0, domNode.length, vText.text)
                newNode = domNode
            } else {
                var parentNode = domNode.parentNode
                newNode = renderOptions.render(vText, renderOptions)

                if (parentNode && newNode !== domNode) {
                    parentNode.replaceChild(newNode, domNode)
                }
            }

            return newNode
        }

        function widgetPatch(domNode, leftVNode, widget, renderOptions) {
            var updating = updateWidget(leftVNode, widget)
            var newNode

            if (updating) {
                newNode = widget.update(leftVNode, domNode) || domNode
            } else {
                newNode = renderOptions.render(widget, renderOptions)
            }

            var parentNode = domNode.parentNode

            if (parentNode && newNode !== domNode) {
                parentNode.replaceChild(newNode, domNode)
            }

            if (!updating) {
                destroyWidget(domNode, leftVNode)
            }

            return newNode
        }

        function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
            var parentNode = domNode.parentNode
            var newNode = renderOptions.render(vNode, renderOptions)

            if (parentNode && newNode !== domNode) {
                parentNode.replaceChild(newNode, domNode)
            }

            return newNode
        }

        function destroyWidget(domNode, w) {
            if (typeof w.destroy === 'function' && isWidget(w)) {
                w.destroy(domNode)
            }
        }

        function reorderChildren(domNode, moves) {
            var childNodes = domNode.childNodes
            var keyMap = {}
            var node
            var remove
            var insert

            for (var i = 0; i < moves.removes.length; i++) {
                remove = moves.removes[i]
                node = childNodes[remove.from]
                if (remove.key) {
                    keyMap[remove.key] = node
                }
                domNode.removeChild(node)
            }

            var length = childNodes.length
            for (var j = 0; j < moves.inserts.length; j++) {
                insert = moves.inserts[j]
                node = keyMap[insert.key]
                // this is the weirdest bug i've ever seen in webkit
                domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
            }
        }

        function replaceRoot(oldRoot, newRoot) {
            if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
                oldRoot.parentNode.replaceChild(newRoot, oldRoot)
            }

            return newRoot
        }
        /***/ },
    /* 39 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var isWidget = __webpack_require__(0)

        module.exports = updateWidget

        function updateWidget(a, b) {
            if (isWidget(a) && isWidget(b)) {
                if ('name' in a && 'name' in b) {
                    return a.id === b.id
                } else {
                    return a.init === b.init
                }
            }

            return false
        }
        /***/ },
    /* 40 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var createElement = __webpack_require__(14)

        module.exports = createElement
        /***/ },
    /* 41 */
    /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
            value: true
        })

        var _createClass = (function() { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

        var _index = __webpack_require__(8)

        var _index2 = _interopRequireDefault(_index)

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj } }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

        function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

        var Hello = (function(_Omi$Component) {
            _inherits(Hello, _Omi$Component)

            function Hello() {
                _classCallCheck(this, Hello)

                return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments))
            }

            _createClass(Hello, [{
                key: 'handleClick',
                value: function handleClick() {
                    alert(this.refs.bb.innerHTML)
                }
            }, {
                key: 'render',
                value: function render() {
                    return _index2['default'].h('div', { ref: 'aa', onclick: this.handleClick.bind(this) }, ['Hello ', this.data.name, '!', _index2['default'].h('div', { ref: 'bb' }, ['c'])])
                }
            }])

            return Hello
        }(_index2['default'].Component))

        _index2['default'].tag('hello', Hello)

        exports['default'] = Hello
        /***/ }
/******/ ])

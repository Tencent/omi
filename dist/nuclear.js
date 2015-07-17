/* Nuclear
 * By AlloyTeam http://www.alloyteam.com/
 * Github: https://github.com/AlloyTeam/Nuclear
 * MIT Licensed.
 */
;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === "function" && define.cmd) {
        define(function(require, exports, module){
            module.exports=factory();
        });
    }
    root.$ = root.Nuclear  = factory();   
}(this, function () {

/* paste from Zepto v1.1.6 -
contain zepto,event and touch ajax fx modules
https://github.com/madrobby/zepto/blob/master/src/zepto.js
https://github.com/madrobby/zepto/blob/master/src/event.js
https://github.com/madrobby/zepto/blob/master/src/touch.js
https://github.com/madrobby/zepto/blob/master/src/ajax.js
https://github.com/madrobby/zepto/blob/master/src/fx.js
https://gist.github.com/madrobby/8507960#file-scrolltotop-js
*/

var Nuclear = (function () {
    var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
      document = window.document,
      elementDisplay = {}, classCache = {},
      cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1, 'opacity': 1, 'z-index': 1, 'zoom': 1 },
      fragmentRE = /^\s*<(\w+|!)[^>]*>/,
      singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
      rootNodeRE = /^(?:body|html)$/i,
      capitalRE = /([A-Z])/g,

      // special attributes that should be get/set via method calls
      methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

      adjacencyOperators = ['after', 'prepend', 'before', 'append'],
      table = document.createElement('table'),
      tableRow = document.createElement('tr'),
      containers = {
          'tr': document.createElement('tbody'),
          'tbody': table, 'thead': table, 'tfoot': table,
          'td': tableRow, 'th': tableRow,
          '*': document.createElement('div')
      },
      readyRE = /complete|loaded|interactive/,
      simpleSelectorRE = /^[\w-]*$/,
      class2type = {},
      toString = class2type.toString,
      nuclear = {},
      camelize, uniq,
      tempParent = document.createElement('div'),
      propMap = {
          'tabindex': 'tabIndex',
          'readonly': 'readOnly',
          'for': 'htmlFor',
          'class': 'className',
          'maxlength': 'maxLength',
          'cellspacing': 'cellSpacing',
          'cellpadding': 'cellPadding',
          'rowspan': 'rowSpan',
          'colspan': 'colSpan',
          'usemap': 'useMap',
          'frameborder': 'frameBorder',
          'contenteditable': 'contentEditable'
      },
      isArray = Array.isArray ||
        function (object) { return object instanceof Array }

    nuclear.matches = function (element, selector) {
        if (!selector || !element || element.nodeType !== 1) return false
        var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
                              element.oMatchesSelector || element.matchesSelector
        if (matchesSelector) return matchesSelector.call(element, selector)
        // fall back to performing a selector:
        var match, parent = element.parentNode, temp = !parent
        if (temp) (parent = tempParent).appendChild(element)
        match = ~nuclear.qsa(parent, selector).indexOf(element)
        temp && tempParent.removeChild(element)
        return match
    }

    function type(obj) {
        return obj == null ? String(obj) :
          class2type[toString.call(obj)] || "object"
    }

    function isFunction(value) { return type(value) == "function" }
    function isWindow(obj) { return obj != null && obj == obj.window }
    function isDocument(obj) { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
    function isObject(obj) { return type(obj) == "object" }
    function isPlainObject(obj) {
        return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
    }
    function likeArray(obj) { return typeof obj.length == 'number' }

    function compact(array) { return filter.call(array, function (item) { return item != null }) }
    function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
    camelize = function (str) { return str.replace(/-+(.)?/g, function (match, chr) { return chr ? chr.toUpperCase() : '' }) }
    function dasherize(str) {
        return str.replace(/::/g, '/')
               .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
               .replace(/([a-z\d])([A-Z])/g, '$1_$2')
               .replace(/_/g, '-')
               .toLowerCase()
    }
    uniq = function (array) { return filter.call(array, function (item, idx) { return array.indexOf(item) == idx }) }

    function classRE(name) {
        return name in classCache ?
          classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
    }

    function maybeAddPx(name, value) {
        return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
    }

    function defaultDisplay(nodeName) {
        var element, display
        if (!elementDisplay[nodeName]) {
            element = document.createElement(nodeName)
            document.body.appendChild(element)
            display = getComputedStyle(element, '').getPropertyValue("display")
            element.parentNode.removeChild(element)
            display == "none" && (display = "block")
            elementDisplay[nodeName] = display
        }
        return elementDisplay[nodeName]
    }

    function children(element) {
        return 'children' in element ?
          slice.call(element.children) :
          $.map(element.childNodes, function (node) { if (node.nodeType == 1) return node })
    }

    // `$.nuclear.fragment` takes a html string and an optional tag name
    // to generate DOM nodes nodes from the given html string.
    // The generated DOM nodes are returned as an array.
    // This function can be overriden in plugins for example to make
    // it compatible with browsers that don't support the DOM fully.
    nuclear.fragment = function (html, name, properties) {
        var dom, nodes, container

        // A special case optimization for a single tag
        if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

        if (!dom) {
            if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
            if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
            if (!(name in containers)) name = '*'

            container = containers[name]
            container.innerHTML = '' + html
            dom = $.each(slice.call(container.childNodes), function () {
                container.removeChild(this)
            })
        }

        if (isPlainObject(properties)) {
            nodes = $(dom)
            $.each(properties, function (key, value) {
                if (methodAttributes.indexOf(key) > -1) nodes[key](value)
                else nodes.attr(key, value)
            })
        }

        return dom
    }

    // `$.nuclear.Z` swaps out the prototype of the given `dom` array
    // of nodes with `$.fn` and thus supplying all the Nuclear functions
    // to the array. Note that `__proto__` is not supported on Internet
    // Explorer. This method can be overriden in plugins.
    nuclear.Z = function (dom, selector) {
        dom = dom || []
        dom.__proto__ = $.fn
        dom.selector = selector || ''
        return dom
    }

    // `$.nuclear.isZ` should return `true` if the given object is a Nuclear
    // collection. This method can be overriden in plugins.
    nuclear.isZ = function (object) {
        return object instanceof nuclear.Z
    }

    // `$.nuclear.init` is Nuclear's counterpart to jQuery's `$.fn.init` and
    // takes a CSS selector and an optional context (and handles various
    // special cases).
    // This method can be overriden in plugins.
    nuclear.init = function (selector, context) {
        var dom
        // If nothing given, return an empty Nuclear collection
        if (!selector) return nuclear.Z()
            // Optimize for string selectors
        else if (typeof selector == 'string') {
            selector = selector.trim()
            // If it's a html fragment, create nodes from it
            // Note: In both Chrome 21 and Firefox 15, DOM error 12
            // is thrown if the fragment doesn't begin with <
            if (selector[0] == '<' && fragmentRE.test(selector))
                dom = nuclear.fragment(selector, RegExp.$1, context), selector = null
                // If there's a context, create a collection on that context first, and select
                // nodes from there
            else if (context !== undefined) return $(context).find(selector)
                // If it's a CSS selector, use it to select nodes.
            else dom = nuclear.qsa(document, selector)
        }
            // If a function is given, call it when the DOM is ready
        else if (isFunction(selector)) return $(document).ready(selector)
            // If a Nuclear collection is given, just return it
        else if (nuclear.isZ(selector)) return selector
        else {
            // normalize array if an array of nodes is given
            if (isArray(selector)) dom = compact(selector)
                // Wrap DOM nodes.
            else if (isObject(selector))
                dom = [selector], selector = null
                // If it's a html fragment, create nodes from it
            else if (fragmentRE.test(selector))
                dom = nuclear.fragment(selector.trim(), RegExp.$1, context), selector = null
                // If there's a context, create a collection on that context first, and select
                // nodes from there
            else if (context !== undefined) return $(context).find(selector)
                // And last but no least, if it's a CSS selector, use it to select nodes.
            else dom = nuclear.qsa(document, selector)
        }
        // create a new Nuclear collection from the nodes found
        return nuclear.Z(dom, selector)
    }

    // `$` will be the base `Nuclear` object. When calling this
    // function just call `$.nuclear.init, which makes the implementation
    // details of selecting nodes and creating Nuclear collections
    // patchable in plugins.
    $ = function (selector, context) {
        return nuclear.init(selector, context)
    }

    function extend(target, source, deep) {
        for (key in source)
            if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
                if (isPlainObject(source[key]) && !isPlainObject(target[key]))
                    target[key] = {}
                if (isArray(source[key]) && !isArray(target[key]))
                    target[key] = []
                extend(target[key], source[key], deep)
            }
            else if (source[key] !== undefined) target[key] = source[key]
    }

    // Copy all but undefined properties from one or more
    // objects to the `target` object.
    $.extend = function (target) {
        var deep, args = slice.call(arguments, 1)
        if (typeof target == 'boolean') {
            deep = target
            target = args.shift()
        }
        args.forEach(function (arg) { extend(target, arg, deep) })
        return target
    }

    // `$.nuclear.qsa` is Nuclear's CSS selector implementation which
    // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
    // This method can be overriden in plugins.
    nuclear.qsa = function (element, selector) {
        var found,
            maybeID = selector[0] == '#',
            maybeClass = !maybeID && selector[0] == '.',
            nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
            isSimple = simpleSelectorRE.test(nameOnly)
        return (isDocument(element) && isSimple && maybeID) ?
          ((found = element.getElementById(nameOnly)) ? [found] : []) :
          (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
          slice.call(
            isSimple && !maybeID ?
              maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
              element.getElementsByTagName(selector) : // Or a tag
              element.querySelectorAll(selector) // Or it's not simple, and we need to query all
          )
    }

    function filtered(nodes, selector) {
        return selector == null ? $(nodes) : $(nodes).filter(selector)
    }

    $.contains = document.documentElement.contains ?
      function (parent, node) {
          return parent !== node && parent.contains(node)
      } :
      function (parent, node) {
          while (node && (node = node.parentNode))
              if (node === parent) return true
          return false
      }

    function funcArg(context, arg, idx, payload) {
        return isFunction(arg) ? arg.call(context, idx, payload) : arg
    }

    function setAttribute(node, name, value) {
        value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
    }

    // access className property while respecting SVGAnimatedString
    function className(node, value) {
        var klass = node.className || '',
            svg = klass && klass.baseVal !== undefined

        if (value === undefined) return svg ? klass.baseVal : klass
        svg ? (klass.baseVal = value) : (node.className = value)
    }

    // "true"  => true
    // "false" => false
    // "null"  => null
    // "42"    => 42
    // "42.5"  => 42.5
    // "08"    => "08"
    // JSON    => parse if valid
    // String  => self
    function deserializeValue(value) {
        try {
            return value ?
              value == "true" ||
              (value == "false" ? false :
                value == "null" ? null :
                +value + "" == value ? +value :
                /^[\[\{]/.test(value) ? $.parseJSON(value) :
                value)
              : value
        } catch (e) {
            return value
        }
    }

    $.type = type
    $.isFunction = isFunction
    $.isWindow = isWindow
    $.isArray = isArray
    $.isPlainObject = isPlainObject

    $.isEmptyObject = function (obj) {
        var name
        for (name in obj) return false
        return true
    }

    $.inArray = function (elem, array, i) {
        return emptyArray.indexOf.call(array, elem, i)
    }

    $.camelCase = camelize
    $.trim = function (str) {
        return str == null ? "" : String.prototype.trim.call(str)
    }

    // plugin compatibility
    $.uuid = 0
    $.support = {}
    $.expr = {}

    $.map = function (elements, callback) {
        var value, values = [], i, key
        if (likeArray(elements))
            for (i = 0; i < elements.length; i++) {
                value = callback(elements[i], i)
                if (value != null) values.push(value)
            }
        else
            for (key in elements) {
                value = callback(elements[key], key)
                if (value != null) values.push(value)
            }
        return flatten(values)
    }

    $.each = function (elements, callback) {
        var i, key
        if (likeArray(elements)) {
            for (i = 0; i < elements.length; i++)
                if (callback.call(elements[i], i, elements[i]) === false) return elements
        } else {
            for (key in elements)
                if (callback.call(elements[key], key, elements[key]) === false) return elements
        }

        return elements
    }

    $.grep = function (elements, callback) {
        return filter.call(elements, callback)
    }

    if (window.JSON) $.parseJSON = JSON.parse

    // Populate the class2type map
    $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase()
    })

    // Define methods that will be available on all
    // Nuclear collections
    $.fn = {
        // Because a collection acts like an array
        // copy over these useful array functions.
        forEach: emptyArray.forEach,
        reduce: emptyArray.reduce,
        push: emptyArray.push,
        sort: emptyArray.sort,
        indexOf: emptyArray.indexOf,
        concat: emptyArray.concat,

        // `map` and `slice` in the jQuery API work differently
        // from their array counterparts
        map: function (fn) {
            return $($.map(this, function (el, i) { return fn.call(el, i, el) }))
        },
        slice: function () {
            return $(slice.apply(this, arguments))
        },

        ready: function (callback) {
            // need to check if document.body exists for IE as that browser reports
            // document ready when it hasn't yet created the body element
            if (readyRE.test(document.readyState) && document.body) callback($)
            else document.addEventListener('DOMContentLoaded', function () { callback($) }, false)
            return this
        },
        get: function (idx) {
            return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
        },
        toArray: function () { return this.get() },
        size: function () {
            return this.length
        },
        remove: function () {
            return this.each(function () {
                if (this.parentNode != null)
                    this.parentNode.removeChild(this)
            })
        },
        each: function (callback) {
            emptyArray.every.call(this, function (el, idx) {
                return callback.call(el, idx, el) !== false
            })
            return this
        },
        filter: function (selector) {
            if (isFunction(selector)) return this.not(this.not(selector))
            return $(filter.call(this, function (element) {
                return nuclear.matches(element, selector)
            }))
        },
        add: function (selector, context) {
            return $(uniq(this.concat($(selector, context))))
        },
        is: function (selector) {
            return this.length > 0 && nuclear.matches(this[0], selector)
        },
        not: function (selector) {
            var nodes = []
            if (isFunction(selector) && selector.call !== undefined)
                this.each(function (idx) {
                    if (!selector.call(this, idx)) nodes.push(this)
                })
            else {
                var excludes = typeof selector == 'string' ? this.filter(selector) :
                  (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
                this.forEach(function (el) {
                    if (excludes.indexOf(el) < 0) nodes.push(el)
                })
            }
            return $(nodes)
        },
        has: function (selector) {
            return this.filter(function () {
                return isObject(selector) ?
                  $.contains(this, selector) :
                  $(this).find(selector).size()
            })
        },
        eq: function (idx) {
            return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1)
        },
        first: function () {
            var el = this[0]
            return el && !isObject(el) ? el : $(el)
        },
        last: function () {
            var el = this[this.length - 1]
            return el && !isObject(el) ? el : $(el)
        },
        find: function (selector) {
            var result, $this = this
            if (!selector) result = $()
            else if (typeof selector == 'object')
                result = $(selector).filter(function () {
                    var node = this
                    return emptyArray.some.call($this, function (parent) {
                        return $.contains(parent, node)
                    })
                })
            else if (this.length == 1) result = $(nuclear.qsa(this[0], selector))
            else result = this.map(function () { return nuclear.qsa(this, selector) })
            return result
        },
        closest: function (selector, context) {
            var node = this[0], collection = false
            if (typeof selector == 'object') collection = $(selector)
            while (node && !(collection ? collection.indexOf(node) >= 0 : nuclear.matches(node, selector)))
                node = node !== context && !isDocument(node) && node.parentNode
            return $(node)
        },
        parents: function (selector) {
            var ancestors = [], nodes = this
            while (nodes.length > 0)
                nodes = $.map(nodes, function (node) {
                    if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
                        ancestors.push(node)
                        return node
                    }
                })
            return filtered(ancestors, selector)
        },
        parent: function (selector) {
            return filtered(uniq(this.pluck('parentNode')), selector)
        },
        children: function (selector) {
            return filtered(this.map(function () { return children(this) }), selector)
        },
        contents: function () {
            return this.map(function () { return slice.call(this.childNodes) })
        },
        siblings: function (selector) {
            return filtered(this.map(function (i, el) {
                return filter.call(children(el.parentNode), function (child) { return child !== el })
            }), selector)
        },
        empty: function () {
            return this.each(function () { this.innerHTML = '' })
        },
        // `pluck` is borrowed from Prototype.js
        pluck: function (property) {
            return $.map(this, function (el) { return el[property] })
        },
        show: function () {
            return this.each(function () {
                this.style.display == "none" && (this.style.display = '')
                if (getComputedStyle(this, '').getPropertyValue("display") == "none")
                    this.style.display = defaultDisplay(this.nodeName)
            })
        },
        replaceWith: function (newContent) {
            return this.before(newContent).remove()
        },
        wrap: function (structure) {
            var func = isFunction(structure)
            if (this[0] && !func)
                var dom = $(structure).get(0),
                    clone = dom.parentNode || this.length > 1

            return this.each(function (index) {
                $(this).wrapAll(
                  func ? structure.call(this, index) :
                    clone ? dom.cloneNode(true) : dom
                )
            })
        },
        wrapAll: function (structure) {
            if (this[0]) {
                $(this[0]).before(structure = $(structure))
                var children
                // drill down to the inmost element
                while ((children = structure.children()).length) structure = children.first()
                $(structure).append(this)
            }
            return this
        },
        wrapInner: function (structure) {
            var func = isFunction(structure)
            return this.each(function (index) {
                var self = $(this), contents = self.contents(),
                    dom = func ? structure.call(this, index) : structure
                contents.length ? contents.wrapAll(dom) : self.append(dom)
            })
        },
        unwrap: function () {
            this.parent().each(function () {
                $(this).replaceWith($(this).children())
            })
            return this
        },
        clone: function () {
            return this.map(function () { return this.cloneNode(true) })
        },
        hide: function () {
            return this.css("display", "none")
        },
        toggle: function (setting) {
            return this.each(function () {
                var el = $(this)
                ; (setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
            })
        },
        prev: function (selector) { return $(this.pluck('previousElementSibling')).filter(selector || '*') },
        next: function (selector) { return $(this.pluck('nextElementSibling')).filter(selector || '*') },
        html: function (html) {
            return 0 in arguments ?
              this.each(function (idx) {
                  var originHtml = this.innerHTML
                  $(this).empty().append(funcArg(this, html, idx, originHtml))
              }) :
              (0 in this ? this[0].innerHTML : null)
        },
        text: function (text) {
            return 0 in arguments ?
              this.each(function (idx) {
                  var newText = funcArg(this, text, idx, this.textContent)
                  this.textContent = newText == null ? '' : '' + newText
              }) :
              (0 in this ? this[0].textContent : null)
        },
        attr: function (name, value) {
            var result
            return (typeof name == 'string' && !(1 in arguments)) ?
              (!this.length || this[0].nodeType !== 1 ? undefined :
                (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
              ) :
              this.each(function (idx) {
                  if (this.nodeType !== 1) return
                  if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
                  else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
              })
        },
        removeAttr: function (name) {
            return this.each(function () {
                this.nodeType === 1 && name.split(' ').forEach(function (attribute) {
                    setAttribute(this, attribute)
                }, this)
            })
        },
        prop: function (name, value) {
            name = propMap[name] || name
            return (1 in arguments) ?
              this.each(function (idx) {
                  this[name] = funcArg(this, value, idx, this[name])
              }) :
              (this[0] && this[0][name])
        },
        data: function (name, value) {
            var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

            var data = (1 in arguments) ?
              this.attr(attrName, value) :
              this.attr(attrName)

            return data !== null ? deserializeValue(data) : undefined
        },
        val: function (value) {
            return 0 in arguments ?
              this.each(function (idx) {
                  this.value = funcArg(this, value, idx, this.value)
              }) :
              (this[0] && (this[0].multiple ?
                 $(this[0]).find('option').filter(function () { return this.selected }).pluck('value') :
                 this[0].value)
              )
        },
        offset: function (coordinates) {
            if (coordinates) return this.each(function (index) {
                var $this = $(this),
                    coords = funcArg(this, coordinates, index, $this.offset()),
                    parentOffset = $this.offsetParent().offset(),
                    props = {
                        top: coords.top - parentOffset.top,
                        left: coords.left - parentOffset.left
                    }

                if ($this.css('position') == 'static') props['position'] = 'relative'
                $this.css(props)
            })
            if (!this.length) return null
            var obj = this[0].getBoundingClientRect()
            return {
                left: obj.left + window.pageXOffset,
                top: obj.top + window.pageYOffset,
                width: Math.round(obj.width),
                height: Math.round(obj.height)
            }
        },
        css: function (property, value) {
            if (arguments.length < 2) {
                var computedStyle, element = this[0]
                if (!element) return
                computedStyle = getComputedStyle(element, '')
                if (typeof property == 'string')
                    return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
                else if (isArray(property)) {
                    var props = {}
                    $.each(property, function (_, prop) {
                        props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
                    })
                    return props
                }
            }

            var css = ''
            if (type(property) == 'string') {
                if (!value && value !== 0)
                    this.each(function () { this.style.removeProperty(dasherize(property)) })
                else
                    css = dasherize(property) + ":" + maybeAddPx(property, value)
            } else {
                for (key in property)
                    if (!property[key] && property[key] !== 0)
                        this.each(function () { this.style.removeProperty(dasherize(key)) })
                    else
                        css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
            }

            return this.each(function () { this.style.cssText += ';' + css })
        },
        index: function (element) {
            return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function (name) {
            if (!name) return false
            return emptyArray.some.call(this, function (el) {
                return this.test(className(el))
            }, classRE(name))
        },
        addClass: function (name) {
            if (!name) return this
            return this.each(function (idx) {
                if (!('className' in this)) return
                classList = []
                var cls = className(this), newName = funcArg(this, name, idx, cls)
                newName.split(/\s+/g).forEach(function (klass) {
                    if (!$(this).hasClass(klass)) classList.push(klass)
                }, this)
                classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
            })
        },
        removeClass: function (name) {
            return this.each(function (idx) {
                if (!('className' in this)) return
                if (name === undefined) return className(this, '')
                classList = className(this)
                funcArg(this, name, idx, classList).split(/\s+/g).forEach(function (klass) {
                    classList = classList.replace(classRE(klass), " ")
                })
                className(this, classList.trim())
            })
        },
        toggleClass: function (name, when) {
            if (!name) return this
            return this.each(function (idx) {
                var $this = $(this), names = funcArg(this, name, idx, className(this))
                names.split(/\s+/g).forEach(function (klass) {
                    (when === undefined ? !$this.hasClass(klass) : when) ?
                      $this.addClass(klass) : $this.removeClass(klass)
                })
            })
        },
        scrollTop: function (value) {
            if (!this.length) return
            var hasScrollTop = 'scrollTop' in this[0]
            if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
            return this.each(hasScrollTop ?
              function () { this.scrollTop = value } :
              function () { this.scrollTo(this.scrollX, value) })
        },
        scrollLeft: function (value) {
            if (!this.length) return
            var hasScrollLeft = 'scrollLeft' in this[0]
            if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
            return this.each(hasScrollLeft ?
              function () { this.scrollLeft = value } :
              function () { this.scrollTo(value, this.scrollY) })
        },
        position: function () {
            if (!this.length) return

            var elem = this[0],
              // Get *real* offsetParent
              offsetParent = this.offsetParent(),
              // Get correct offsets
              offset = this.offset(),
              parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

            // Subtract element margins
            // note: when an element has margin: auto the offsetLeft and marginLeft
            // are the same in Safari causing offset.left to incorrectly be 0
            offset.top -= parseFloat($(elem).css('margin-top')) || 0
            offset.left -= parseFloat($(elem).css('margin-left')) || 0

            // Add offsetParent borders
            parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0
            parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0

            // Subtract the two offsets
            return {
                top: offset.top - parentOffset.top,
                left: offset.left - parentOffset.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var parent = this.offsetParent || document.body
                while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
                    parent = parent.offsetParent
                return parent
            })
        }
    }

    // for now
    $.fn.detach = $.fn.remove

    // Generate the `width` and `height` functions
    ;['width', 'height'].forEach(function (dimension) {
        var dimensionProperty =
          dimension.replace(/./, function (m) { return m[0].toUpperCase() })

        $.fn[dimension] = function (value) {
            var offset, el = this[0]
            if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
              isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
              (offset = this.offset()) && offset[dimension]
            else return this.each(function (idx) {
                el = $(this)
                el.css(dimension, funcArg(this, value, idx, el[dimension]()))
            })
        }
    })

    function traverseNode(node, fun) {
        fun(node)
        for (var i = 0, len = node.childNodes.length; i < len; i++)
            traverseNode(node.childNodes[i], fun)
    }

    // Generate the `after`, `prepend`, `before`, `append`,
    // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
    adjacencyOperators.forEach(function (operator, operatorIndex) {
        var inside = operatorIndex % 2 //=> prepend, append

        $.fn[operator] = function () {
            // arguments can be nodes, arrays of nodes, nuclear objects and HTML strings
            var argType, nodes = $.map(arguments, function (arg) {
                argType = type(arg)
                return argType == "object" || argType == "array" || arg == null ?
                    arg : nuclear.fragment(arg)
            }),
                parent, copyByClone = this.length > 1
            if (nodes.length < 1) return this

            return this.each(function (_, target) {
                parent = inside ? target : target.parentNode

                // convert all methods to a "before" operation
                target = operatorIndex == 0 ? target.nextSibling :
                         operatorIndex == 1 ? target.firstChild :
                         operatorIndex == 2 ? target :
                         null

                var parentInDocument = $.contains(document.documentElement, parent)

                nodes.forEach(function (node) {
                    if (copyByClone) node = node.cloneNode(true)
                    else if (!parent) return $(node).remove()

                    parent.insertBefore(node, target)
                    if (parentInDocument) traverseNode(node, function (el) {
                        if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
                           (!el.type || el.type === 'text/javascript') && !el.src)
                            window['eval'].call(window, el.innerHTML)
                    })
                })
            })
        }

        // after    => insertAfter
        // prepend  => prependTo
        // before   => insertBefore
        // append   => appendTo
        $.fn[inside ? operator + 'To' : 'insert' + (operatorIndex ? 'Before' : 'After')] = function (html) {
            $(html)[operator](this)
            return this
        }
    })

    nuclear.Z.prototype = $.fn

    // Export internal API functions in the `$.nuclear` namespace
    nuclear.uniq = uniq
    nuclear.deserializeValue = deserializeValue
    $.nuclear = nuclear

    return $
})()



; (function ($) {
    var _zid = 1, undefined,
        slice = Array.prototype.slice,
        isFunction = $.isFunction,
        isString = function (obj) { return typeof obj == 'string' },
        handlers = {},
        specialEvents = {},
        focusinSupported = 'onfocusin' in window,
        focus = { focus: 'focusin', blur: 'focusout' },
        hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

    specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

    function zid(element) {
        return element._zid || (element._zid = _zid++)
    }
    function findHandlers(element, event, fn, selector) {
        event = parse(event)
        if (event.ns) var matcher = matcherFor(event.ns)
        return (handlers[zid(element)] || []).filter(function (handler) {
            return handler
              && (!event.e || handler.e == event.e)
              && (!event.ns || matcher.test(handler.ns))
              && (!fn || zid(handler.fn) === zid(fn))
              && (!selector || handler.sel == selector)
        })
    }
    function parse(event) {
        var parts = ('' + event).split('.')
        return { e: parts[0], ns: parts.slice(1).sort().join(' ') }
    }
    function matcherFor(ns) {
        return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
    }

    function eventCapture(handler, captureSetting) {
        return handler.del &&
          (!focusinSupported && (handler.e in focus)) ||
          !!captureSetting
    }

    function realEvent(type) {
        return hover[type] || (focusinSupported && focus[type]) || type
    }

    function add(element, events, fn, data, selector, delegator, capture) {
        var id = zid(element), set = (handlers[id] || (handlers[id] = []))
        events.split(/\s/).forEach(function (event) {
            if (event == 'ready') return $(document).ready(fn)
            var handler = parse(event)
            handler.fn = fn
            handler.sel = selector
            // emulate mouseenter, mouseleave
            if (handler.e in hover) fn = function (e) {
                var related = e.relatedTarget
                if (!related || (related !== this && !$.contains(this, related)))
                    return handler.fn.apply(this, arguments)
            }
            handler.del = delegator
            var callback = delegator || fn
            handler.proxy = function (e) {
                e = compatible(e)
                if (e.isImmediatePropagationStopped()) return
                e.data = data
                var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
                if (result === false) e.preventDefault(), e.stopPropagation()
                return result
            }
            handler.i = set.length
            set.push(handler)
            if ('addEventListener' in element)
                element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
        })
    }
    function remove(element, events, fn, selector, capture) {
        var id = zid(element)
        ; (events || '').split(/\s/).forEach(function (event) {
            findHandlers(element, event, fn, selector).forEach(function (handler) {
                delete handlers[id][handler.i]
                if ('removeEventListener' in element)
                    element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
            })
        })
    }

    $.event = { add: add, remove: remove }

    $.proxy = function (fn, context) {
        var args = (2 in arguments) && slice.call(arguments, 2)
        if (isFunction(fn)) {
            var proxyFn = function () { return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
            proxyFn._zid = zid(fn)
            return proxyFn
        } else if (isString(context)) {
            if (args) {
                args.unshift(fn[context], fn)
                return $.proxy.apply(null, args)
            } else {
                return $.proxy(fn[context], fn)
            }
        } else {
            throw new TypeError("expected function")
        }
    }

    $.fn.bind = function (event, data, callback) {
        return this.on(event, data, callback)
    }
    $.fn.unbind = function (event, callback) {
        return this.off(event, callback)
    }
    $.fn.one = function (event, selector, data, callback) {
        return this.on(event, selector, data, callback, 1)
    }

    var returnTrue = function () { return true },
        returnFalse = function () { return false },
        ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
        eventMethods = {
            preventDefault: 'isDefaultPrevented',
            stopImmediatePropagation: 'isImmediatePropagationStopped',
            stopPropagation: 'isPropagationStopped'
        }

    function compatible(event, source) {
        if (source || !event.isDefaultPrevented) {
            source || (source = event)

            $.each(eventMethods, function (name, predicate) {
                var sourceMethod = source[name]
                event[name] = function () {
                    this[predicate] = returnTrue
                    return sourceMethod && sourceMethod.apply(source, arguments)
                }
                event[predicate] = returnFalse
            })

            if (source.defaultPrevented !== undefined ? source.defaultPrevented :
                'returnValue' in source ? source.returnValue === false :
                source.getPreventDefault && source.getPreventDefault())
                event.isDefaultPrevented = returnTrue
        }
        return event
    }

    function createProxy(event) {
        var key, proxy = { originalEvent: event }
        for (key in event)
            if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

        return compatible(proxy, event)
    }

    $.fn.delegate = function (selector, event, callback) {
        return this.on(event, selector, callback)
    }
    $.fn.undelegate = function (selector, event, callback) {
        return this.off(event, selector, callback)
    }

    $.fn.live = function (event, callback) {
        $(document.body).delegate(this.selector, event, callback)
        return this
    }
    $.fn.die = function (event, callback) {
        $(document.body).undelegate(this.selector, event, callback)
        return this
    }

    $.fn.on = function (event, selector, data, callback, one) {
        var autoRemove, delegator, $this = this
        if (event && !isString(event)) {
            $.each(event, function (type, fn) {
                $this.on(type, selector, data, fn, one)
            })
            return $this
        }

        if (!isString(selector) && !isFunction(callback) && callback !== false)
            callback = data, data = selector, selector = undefined
        if (isFunction(data) || data === false)
            callback = data, data = undefined

        if (callback === false) callback = returnFalse

        return $this.each(function (_, element) {
            if (one) autoRemove = function (e) {
                remove(element, e.type, callback)
                return callback.apply(this, arguments)
            }

            if (selector) delegator = function (e) {
                var evt, match = $(e.target).closest(selector, element).get(0)
                if (match && match !== element) {
                    evt = $.extend(createProxy(e), { currentTarget: match, liveFired: element })
                    return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
                }
            }

            add(element, event, callback, data, selector, delegator || autoRemove)
        })
    }
    $.fn.off = function (event, selector, callback) {
        var $this = this
        if (event && !isString(event)) {
            $.each(event, function (type, fn) {
                $this.off(type, selector, fn)
            })
            return $this
        }

        if (!isString(selector) && !isFunction(callback) && callback !== false)
            callback = selector, selector = undefined

        if (callback === false) callback = returnFalse

        return $this.each(function () {
            remove(this, event, callback, selector)
        })
    }

    $.fn.trigger = function (event, args) {
        event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
        event._args = args
        return this.each(function () {
            // handle focus(), blur() by calling them directly
            if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
                // items in the collection might not be DOM elements
            else if ('dispatchEvent' in this) this.dispatchEvent(event)
            else $(this).triggerHandler(event, args)
        })
    }

    // triggers event handlers on current element just as if an event occurred,
    // doesn't trigger an actual event, doesn't bubble
    $.fn.triggerHandler = function (event, args) {
        var e, result
        this.each(function (i, element) {
            e = createProxy(isString(event) ? $.Event(event) : event)
            e._args = args
            e.target = element
            $.each(findHandlers(element, event.type || event), function (i, handler) {
                result = handler.proxy(e)
                if (e.isImmediatePropagationStopped()) return false
            })
        })
        return result
    }

    // shortcut methods for `.bind(event, fn)` for each event type
    ; ('focusin focusout focus blur load resize scroll unload click dblclick ' +
    'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' +
    'change select keydown keypress keyup error').split(' ').forEach(function (event) {
        $.fn[event] = function (callback) {
            return (0 in arguments) ?
              this.bind(event, callback) :
              this.trigger(event)
        }
    })

    $.Event = function (type, props) {
        if (!isString(type)) props = type, type = props.type
        var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
        if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
        event.initEvent(type, bubbles, true)
        return compatible(event)
    }

})(Nuclear);

; (function ($) {
    // __proto__ doesn't exist on IE<11, so redefine
    // the Z function to use object extension instead
    if (!('__proto__' in {})) {
        $.extend($.nuclear, {
            Z: function (dom, selector) {
                dom = dom || []
                $.extend(dom, $.fn)
                dom.selector = selector || ''
                dom.__Z = true
                return dom
            },
            // this is a kludge but works
            isZ: function (object) {
                return $.type(object) === 'array' && '__Z' in object
            }
        })
    }

    // getComputedStyle shouldn't freak out when called
    // without a valid element as argument
    try {
        getComputedStyle(undefined)
    } catch (e) {
        var nativeGetComputedStyle = getComputedStyle;
        window.getComputedStyle = function (element) {
            try {
                return nativeGetComputedStyle(element)
            } catch (e) {
                return null
            }
        }
    }
})(Nuclear)

; (function ($) {
    var touch = {},
      touchTimeout, tapTimeout, swipeTimeout, longTapTimeout,
      longTapDelay = 750,
      gesture

    function swipeDirection(x1, x2, y1, y2) {
        return Math.abs(x1 - x2) >=
          Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
    }

    function longTap() {
        longTapTimeout = null
        if (touch.last) {
            touch.el.trigger('longTap')
            touch = {}
        }
    }

    function cancelLongTap() {
        if (longTapTimeout) clearTimeout(longTapTimeout)
        longTapTimeout = null
    }

    function cancelAll() {
        if (touchTimeout) clearTimeout(touchTimeout)
        if (tapTimeout) clearTimeout(tapTimeout)
        if (swipeTimeout) clearTimeout(swipeTimeout)
        if (longTapTimeout) clearTimeout(longTapTimeout)
        touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null
        touch = {}
    }

    function isPrimaryTouch(event) {
        return (event.pointerType == 'touch' ||
          event.pointerType == event.MSPOINTER_TYPE_TOUCH)
          && event.isPrimary
    }

    function isPointerEventType(e, type) {
        return (e.type == 'pointer' + type ||
          e.type.toLowerCase() == 'mspointer' + type)
    }

    $(document).ready(function () {
        var now, delta, deltaX = 0, deltaY = 0, firstTouch, _isPointerType

        if ('MSGesture' in window) {
            gesture = new MSGesture()
            gesture.target = document.body
        }

        $(document)
          .bind('MSGestureEnd', function (e) {
              var swipeDirectionFromVelocity =
                e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;
              if (swipeDirectionFromVelocity) {
                  touch.el.trigger('swipe')
                  touch.el.trigger('swipe' + swipeDirectionFromVelocity)
              }
          })
          .on('touchstart MSPointerDown pointerdown', function (e) {
              if ((_isPointerType = isPointerEventType(e, 'down')) &&
                !isPrimaryTouch(e)) return
              firstTouch = _isPointerType ? e : e.touches[0]
              if (e.touches && e.touches.length === 1 && touch.x2) {
                  // Clear out touch movement data if we have it sticking around
                  // This can occur if touchcancel doesn't fire due to preventDefault, etc.
                  touch.x2 = undefined
                  touch.y2 = undefined
              }
              now = Date.now()
              delta = now - (touch.last || now)
              touch.el = $('tagName' in firstTouch.target ?
                firstTouch.target : firstTouch.target.parentNode)
              touchTimeout && clearTimeout(touchTimeout)
              touch.x1 = firstTouch.pageX
              touch.y1 = firstTouch.pageY
              if (delta > 0 && delta <= 250) touch.isDoubleTap = true
              touch.last = now
              longTapTimeout = setTimeout(longTap, longTapDelay)
              // adds the current touch contact for IE gesture recognition
              if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
          })
          .on('touchmove MSPointerMove pointermove', function (e) {
              if ((_isPointerType = isPointerEventType(e, 'move')) &&
                !isPrimaryTouch(e)) return
              firstTouch = _isPointerType ? e : e.touches[0]
              cancelLongTap()
              touch.x2 = firstTouch.pageX
              touch.y2 = firstTouch.pageY

              deltaX += Math.abs(touch.x1 - touch.x2)
              deltaY += Math.abs(touch.y1 - touch.y2)
          })
          .on('touchend MSPointerUp pointerup', function (e) {
              if ((_isPointerType = isPointerEventType(e, 'up')) &&
                !isPrimaryTouch(e)) return
              cancelLongTap()

              // swipe
              if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
                  (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))

                  swipeTimeout = setTimeout(function () {
                      touch.el.trigger('swipe')
                      touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
                      touch = {}
                  }, 0)

                  // normal tap
              else if ('last' in touch)
                  // don't fire tap when delta position changed by more than 30 pixels,
                  // for instance when moving to a point and back to origin
                  if (deltaX < 30 && deltaY < 30) {
                      // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
                      // ('tap' fires before 'scroll')
                      tapTimeout = setTimeout(function () {

                          // trigger universal 'tap' with the option to cancelTouch()
                          // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
                          var event = $.Event('tap')
                          event.cancelTouch = cancelAll
                          touch.el.trigger(event)

                          // trigger double tap immediately
                          if (touch.isDoubleTap) {
                              if (touch.el) touch.el.trigger('doubleTap')
                              touch = {}
                          }

                              // trigger single tap after 250ms of inactivity
                          else {
                              touchTimeout = setTimeout(function () {
                                  touchTimeout = null
                                  if (touch.el) touch.el.trigger('singleTap')
                                  touch = {}
                              }, 250)
                          }
                      }, 0)
                  } else {
                      touch = {}
                  }
              deltaX = deltaY = 0

          })
          // when the browser window loses focus,
          // for example when a modal dialog is shown,
          // cancel all ongoing events
          .on('touchcancel MSPointerCancel pointercancel', cancelAll)

        // scrolling the window indicates intention of the user
        // to scroll, not tap or swipe, so cancel all ongoing events
        $(window).on('scroll', cancelAll)
    })

    ;['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',
      'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function (eventName) {
          $.fn[eventName] = function (callback) { return this.on(eventName, callback) }
      })
})(Nuclear)



; (function ($) {
    var jsonpID = 0,
        document = window.document,
        key,
        name,
        rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        scriptTypeRE = /^(?:text|application)\/javascript/i,
        xmlTypeRE = /^(?:text|application)\/xml/i,
        jsonType = 'application/json',
        htmlType = 'text/html',
        blankRE = /^\s*$/,
        originAnchor = document.createElement('a')

    originAnchor.href = window.location.href

    // trigger a custom event and return false if it was cancelled
    function triggerAndReturn(context, eventName, data) {
        var event = $.Event(eventName)
        $(context).trigger(event, data)
        return !event.isDefaultPrevented()
    }

    // trigger an Ajax "global" event
    function triggerGlobal(settings, context, eventName, data) {
        if (settings.global) return triggerAndReturn(context || document, eventName, data)
    }

    // Number of active Ajax requests
    $.active = 0

    function ajaxStart(settings) {
        if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
    }
    function ajaxStop(settings) {
        if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
    }

    // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
    function ajaxBeforeSend(xhr, settings) {
        var context = settings.context
        if (settings.beforeSend.call(context, xhr, settings) === false ||
            triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
            return false

        triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
    }
    function ajaxSuccess(data, xhr, settings, deferred) {
        var context = settings.context, status = 'success'
        settings.success.call(context, data, status, xhr)
        if (deferred) deferred.resolveWith(context, [data, status, xhr])
        triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
        ajaxComplete(status, xhr, settings)
    }
    // type: "timeout", "error", "abort", "parsererror"
    function ajaxError(error, type, xhr, settings, deferred) {
        var context = settings.context
        settings.error.call(context, xhr, type, error)
        if (deferred) deferred.rejectWith(context, [xhr, type, error])
        triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
        ajaxComplete(type, xhr, settings)
    }
    // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
    function ajaxComplete(status, xhr, settings) {
        var context = settings.context
        settings.complete.call(context, xhr, status)
        triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
        ajaxStop(settings)
    }

    // Empty function, used as default callback
    function empty() { }

    $.ajaxJSONP = function (options, deferred) {
        if (!('type' in options)) return $.ajax(options)

        var _callbackName = options.jsonpCallback,
          callbackName = ($.isFunction(_callbackName) ?
            _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
          script = document.createElement('script'),
          originalCallback = window[callbackName],
          responseData,
          abort = function (errorType) {
              $(script).triggerHandler('error', errorType || 'abort')
          },
          xhr = { abort: abort }, abortTimeout

        if (deferred) deferred.promise(xhr)

        $(script).on('load error', function (e, errorType) {
            clearTimeout(abortTimeout)
            $(script).off().remove()

            if (e.type == 'error' || !responseData) {
                ajaxError(null, errorType || 'error', xhr, options, deferred)
            } else {
                ajaxSuccess(responseData[0], xhr, options, deferred)
            }

            window[callbackName] = originalCallback
            if (responseData && $.isFunction(originalCallback))
                originalCallback(responseData[0])

            originalCallback = responseData = undefined
        })

        if (ajaxBeforeSend(xhr, options) === false) {
            abort('abort')
            return xhr
        }

        window[callbackName] = function () {
            responseData = arguments
        }

        script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
        document.head.appendChild(script)

        if (options.timeout > 0) abortTimeout = setTimeout(function () {
            abort('timeout')
        }, options.timeout)

        return xhr
    }

    $.ajaxSettings = {
        // Default type of request
        type: 'GET',
        // Callback that is executed before request
        beforeSend: empty,
        // Callback that is executed if the request succeeds
        success: empty,
        // Callback that is executed the the server drops error
        error: empty,
        // Callback that is executed on request complete (both: error and success)
        complete: empty,
        // The context for the callbacks
        context: null,
        // Whether to trigger "global" Ajax events
        global: true,
        // Transport
        xhr: function () {
            return new window.XMLHttpRequest()
        },
        // MIME types mapping
        // IIS returns Javascript as "application/x-javascript"
        accepts: {
            script: 'text/javascript, application/javascript, application/x-javascript',
            json: jsonType,
            xml: 'application/xml, text/xml',
            html: htmlType,
            text: 'text/plain'
        },
        // Whether the request is to another domain
        crossDomain: false,
        // Default timeout
        timeout: 0,
        // Whether data should be serialized to string
        processData: true,
        // Whether the browser should be allowed to cache GET responses
        cache: true
    }

    function mimeToDataType(mime) {
        if (mime) mime = mime.split(';', 2)[0]
        return mime && (mime == htmlType ? 'html' :
          mime == jsonType ? 'json' :
          scriptTypeRE.test(mime) ? 'script' :
          xmlTypeRE.test(mime) && 'xml') || 'text'
    }

    function appendQuery(url, query) {
        if (query == '') return url
        return (url + '&' + query).replace(/[&?]{1,2}/, '?')
    }

    // serialize payload and append it to the URL for GET requests
    function serializeData(options) {
        if (options.processData && options.data && $.type(options.data) != "string")
            options.data = $.param(options.data, options.traditional)
        if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
            options.url = appendQuery(options.url, options.data), options.data = undefined
    }

    $.ajax = function (options) {
        var settings = $.extend({}, options || {}),
            deferred = $.Deferred && $.Deferred(),
            urlAnchor, hashIndex
        for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

        ajaxStart(settings)

        if (!settings.crossDomain) {
            urlAnchor = document.createElement('a')
            urlAnchor.href = settings.url
            // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049
            urlAnchor.href = urlAnchor.href
            settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
        }

        if (!settings.url) settings.url = window.location.toString()
        if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex)
        serializeData(settings)

        var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
        if (hasPlaceholder) dataType = 'jsonp'

        if (settings.cache === false || (
             (!options || options.cache !== true) &&
             ('script' == dataType || 'jsonp' == dataType)
            ))
            settings.url = appendQuery(settings.url, '_=' + Date.now())

        if ('jsonp' == dataType) {
            if (!hasPlaceholder)
                settings.url = appendQuery(settings.url,
                  settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
            return $.ajaxJSONP(settings, deferred)
        }

        var mime = settings.accepts[dataType],
            headers = {},
            setHeader = function (name, value) { headers[name.toLowerCase()] = [name, value] },
            protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
            xhr = settings.xhr(),
            nativeSetHeader = xhr.setRequestHeader,
            abortTimeout

        if (deferred) deferred.promise(xhr)

        if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
        setHeader('Accept', mime || '*/*')
        if (mime = settings.mimeType || mime) {
            if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
            xhr.overrideMimeType && xhr.overrideMimeType(mime)
        }
        if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
            setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')

        if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
        xhr.setRequestHeader = setHeader

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                xhr.onreadystatechange = empty
                clearTimeout(abortTimeout)
                var result, error = false
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
                    dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))
                    result = xhr.responseText

                    try {
                        // http://perfectionkills.com/global-eval-what-are-the-options/
                        if (dataType == 'script') (1, eval)(result)
                        else if (dataType == 'xml') result = xhr.responseXML
                        else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
                    } catch (e) { error = e }

                    if (error) ajaxError(error, 'parsererror', xhr, settings, deferred)
                    else ajaxSuccess(result, xhr, settings, deferred)
                } else {
                    ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
                }
            }
        }

        if (ajaxBeforeSend(xhr, settings) === false) {
            xhr.abort()
            ajaxError(null, 'abort', xhr, settings, deferred)
            return xhr
        }

        if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]

        var async = 'async' in settings ? settings.async : true
        xhr.open(settings.type, settings.url, async, settings.username, settings.password)

        for (name in headers) nativeSetHeader.apply(xhr, headers[name])

        if (settings.timeout > 0) abortTimeout = setTimeout(function () {
            xhr.onreadystatechange = empty
            xhr.abort()
            ajaxError(null, 'timeout', xhr, settings, deferred)
        }, settings.timeout)

        // avoid sending empty string (#319)
        xhr.send(settings.data ? settings.data : null)
        return xhr
    }

    // handle optional data/success arguments
    function parseArguments(url, data, success, dataType) {
        if ($.isFunction(data)) dataType = success, success = data, data = undefined
        if (!$.isFunction(success)) dataType = success, success = undefined
        return {
            url: url
        , data: data
        , success: success
        , dataType: dataType
        }
    }

    $.get = function (/* url, data, success, dataType */) {
        return $.ajax(parseArguments.apply(null, arguments))
    }

    $.post = function (/* url, data, success, dataType */) {
        var options = parseArguments.apply(null, arguments)
        options.type = 'POST'
        return $.ajax(options)
    }

    $.getJSON = function (/* url, data, success */) {
        var options = parseArguments.apply(null, arguments)
        options.dataType = 'json'
        return $.ajax(options)
    }

    $.fn.load = function (url, data, success) {
        if (!this.length) return this
        var self = this, parts = url.split(/\s/), selector,
            options = parseArguments(url, data, success),
            callback = options.success
        if (parts.length > 1) options.url = parts[0], selector = parts[1]
        options.success = function (response) {
            self.html(selector ?
              $('<div>').html(response.replace(rscript, "")).find(selector)
              : response)
            callback && callback.apply(self, arguments)
        }
        $.ajax(options)
        return this
    }

    var escape = encodeURIComponent

    function serialize(params, obj, traditional, scope) {
        var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
        $.each(obj, function (key, value) {
            type = $.type(value)
            if (scope) key = traditional ? scope :
              scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
            // handle data in serializeArray() format
            if (!scope && array) params.add(value.name, value.value)
                // recurse into nested objects
            else if (type == "array" || (!traditional && type == "object"))
                serialize(params, value, traditional, key)
            else params.add(key, value)
        })
    }

    $.param = function (obj, traditional) {
        var params = []
        params.add = function (key, value) {
            if ($.isFunction(value)) value = value()
            if (value == null) value = ""
            this.push(escape(key) + '=' + escape(value))
        }
        serialize(params, obj, traditional)
        return params.join('&').replace(/%20/g, '+')
    }
})(Nuclear)



; (function ($, undefined) {
    var prefix = '', eventPrefix,
      vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
      testEl = document.createElement('div'),
      supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
      transform,
      transitionProperty, transitionDuration, transitionTiming, transitionDelay,
      animationName, animationDuration, animationTiming, animationDelay,
      cssReset = {}

    function dasherize(str) { return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase() }
    function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }

    $.each(vendors, function (vendor, event) {
        if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
            prefix = '-' + vendor.toLowerCase() + '-'
            eventPrefix = event
            return false
        }
    })

    transform = prefix + 'transform'
    cssReset[transitionProperty = prefix + 'transition-property'] =
    cssReset[transitionDuration = prefix + 'transition-duration'] =
    cssReset[transitionDelay = prefix + 'transition-delay'] =
    cssReset[transitionTiming = prefix + 'transition-timing-function'] =
    cssReset[animationName = prefix + 'animation-name'] =
    cssReset[animationDuration = prefix + 'animation-duration'] =
    cssReset[animationDelay = prefix + 'animation-delay'] =
    cssReset[animationTiming = prefix + 'animation-timing-function'] = ''

    $.fx = {
        off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
        speeds: { _default: 400, fast: 200, slow: 600 },
        cssPrefix: prefix,
        transitionEnd: normalizeEvent('TransitionEnd'),
        animationEnd: normalizeEvent('AnimationEnd')
    }

    $.fn.animate = function (properties, duration, ease, callback, delay) {
        if ($.isFunction(duration))
            callback = duration, ease = undefined, duration = undefined
        if ($.isFunction(ease))
            callback = ease, ease = undefined
        if ($.isPlainObject(duration))
            ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
        if (duration) duration = (typeof duration == 'number' ? duration :
                        ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
        if (delay) delay = parseFloat(delay) / 1000
        return this.anim(properties, duration, ease, callback, delay)
    }

    $.fn.anim = function (properties, duration, ease, callback, delay) {
        var key, cssValues = {}, cssProperties, transforms = '',
            that = this, wrappedCallback, endEvent = $.fx.transitionEnd,
            fired = false

        if (duration === undefined) duration = $.fx.speeds._default / 1000
        if (delay === undefined) delay = 0
        if ($.fx.off) duration = 0

        if (typeof properties == 'string') {
            // keyframe animation
            cssValues[animationName] = properties
            cssValues[animationDuration] = duration + 's'
            cssValues[animationDelay] = delay + 's'
            cssValues[animationTiming] = (ease || 'linear')
            endEvent = $.fx.animationEnd
        } else {
            cssProperties = []
            // CSS transitions
            for (key in properties)
                if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
                else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

            if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
            if (duration > 0 && typeof properties === 'object') {
                cssValues[transitionProperty] = cssProperties.join(', ')
                cssValues[transitionDuration] = duration + 's'
                cssValues[transitionDelay] = delay + 's'
                cssValues[transitionTiming] = (ease || 'linear')
            }
        }

        wrappedCallback = function (event) {
            if (typeof event !== 'undefined') {
                if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
                $(event.target).unbind(endEvent, wrappedCallback)
            } else
                $(this).unbind(endEvent, wrappedCallback) // triggered by setTimeout

            fired = true
            $(this).css(cssReset)
            callback && callback.call(this)
        }
        if (duration > 0) {
            this.bind(endEvent, wrappedCallback)
            // transitionEnd is not always firing on older Android phones
            // so make sure it gets fired
            setTimeout(function () {
                if (fired) return
                wrappedCallback.call(that)
            }, ((duration + delay) * 1000) + 25)
        }

        // trigger page reflow so new elements can animate
        this.size() && this.get(0).clientLeft

        this.css(cssValues)

        if (duration <= 0) setTimeout(function () {
            that.each(function () { wrappedCallback.call(this) })
        }, 0)

        return this
    }

    testEl = null
})(Nuclear)

; (function ($) {
    var scrollToTopInProgress = false

    $.fn.scrollToTop = function (position) {
        var $this = this,
          targetY = position || 0,
          initialY = $this.scrollTop(),
          lastY = initialY,
          delta = targetY - initialY,
          speed = Math.min(750, Math.min(1500, Math.abs(initialY - targetY))),
          start, t, y, frame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) { setTimeout(callback, 15) },
          cancelScroll = function () { abort() }

        if (scrollToTopInProgress) return
        if (delta == 0) return

        function smooth(pos) {
            if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 5)
            return 0.5 * (Math.pow((pos - 2), 5) + 2)
        }

        function abort() {
            $this.off('touchstart', cancelScroll)
            scrollToTopInProgress = false
        }

        $this.on('touchstart', cancelScroll)
        scrollToTopInProgress = true

        frame(function render(now) {
            if (!scrollToTopInProgress) return
            if (!start) start = now
            t = Math.min(1, Math.max((now - start) / speed, 0))
            y = Math.round(initialY + delta * smooth(t))
            if (delta > 0 && y > targetY) y = targetY
            if (delta < 0 && y < targetY) y = targetY
            if (lastY != y) $this.scrollTop(y)
            lastY = y
            if (y !== targetY) frame(render)
            else abort()
        })
    }
})(Nuclear)
Nuclear.create = function (obj) {
    Nuclear._mixObj(obj);
    if (!obj.statics) obj.statics = {};
    obj.statics.create = function (obj) {      
        Nuclear._mixObj(obj);
        return this.extend(obj);
    }
    return Nuclear.Class.extend(obj);
}

Nuclear._mixObj = function (obj) {
    obj.ctor = function (option, selector) {
        this._ncInstanceId=Nuclear.getInstanceId();
        Nuclear.instances[this._ncInstanceId] = this;
        this._nuclearParentEmpty = !selector;
        this.HTML = "";
        this.option = option;
        if (!this._nuclearParentEmpty) {
            this.parent = typeof selector === "string" ? document.querySelector(selector) : selector;
        } else {
            this.parent = document.createElement("div");
        }
        if (this.install) {
            this.install();
        }
        this._nuclearRef = [];
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                if (this[key] && this[key]["_nuclearLocalRefresh"]) {
                    this[key]._nuclearParent = this;
                    this._nuclearRef.push(this[key]);
                }
            }
        }
        this._nuclearTimer = null;
        this._preNuclearTime = new Date();
 
        if (this.option) {
            Nuclear.observe(this.option, function (prop, value, oldValue, path) {
                if (!this.onOptionChange||(this.onOptionChange && this.onOptionChange(prop, value, oldValue, path))) {
                    clearTimeout(this._nuclearTimer);
                    if (new Date() - this._preNuclearTime > 40) {
                        this._nuclearLocalRefresh();
                        this._preNuclearTime = new Date();
                    } else {
                        this._nuclearTimer = setTimeout(function () {
                            this._nuclearLocalRefresh();
                        }.bind(this), 40);
                    }
                }
            }.bind(this));
        }
        this._nuclearRenderInfo = {
            tpl: this._nuclearTplGenerator(),
            data: this.option,
            parent: this.parent
        };
        this.option._nuclearIndex = function () {
            return ++window['_nuclearIndex'] || (window['_nuclearIndex'] = 0);
        }
        this.option._resetNuclearIndex=function() {
            window['_nuclearIndex'] = -1;
            return;
        }
        this._nuclearRender(this._nuclearRenderInfo);
        if (this.installed) this.installed();
    }

    obj.refresh = function () {
        this._nuclearLocalRefresh();
    }

    //加if防止子类赋值undefined，丢失父类方法
    if (obj.render) {
        obj._nuclearTplGenerator = obj.render;
    }

    obj.render = function () {
        if (this._nuclearParentEmpty) {
         
            return this.HTML;
            //var len=this._nuclearRef.length;
            ////嵌套的render逻辑        
            ////子节点下再无子节点
            //if (len === 0) {
            //    return this.HTML;
            //} else {//子节点下又有子节点
            //    var i=0;
            //    for (; i < len; i++) {
            //        var ref = this._nuclearRef[i];
            //        return ref.render();
            //    }
            //}
        } else {
            return this._nuclearTplGenerator();
        }
    }


    obj._nuclearRender = function (item) {
        if (this.node) {
            //this.node.parentNode&&this.node.parentNode.removeChild(this.node);
            // item.parent.removeChild(this.node);      
            if (Nuclear.isUndefined(item.tpl)) {
                item.parent.removeChild(this.node);
                this.node = null;
                this.HTML = "";
            } else {
                var newNode = Nuclear.str2Dom(Nuclear.Tpl.render(Nuclear._fixEvent(Nuclear._fixTplIndex(item.tpl), this._ncInstanceId), item.data));
                item.parent.replaceChild(newNode, this.node);
                this.node = newNode;
            }
        } else {
            item.parent.insertAdjacentHTML("beforeEnd", Nuclear.Tpl.render(Nuclear._fixEvent(Nuclear._fixTplIndex(item.tpl), this._ncInstanceId), item.data));
            this.node = item.parent.lastChild;
        }
        window["_nuclearIndex"] = null;
        if (this.node) {
            this._nuclearId = Nuclear.getId();
            this.node.setAttribute("data-nuclearId", this._nuclearId);

            this._mixNode();

           
            item.refreshPart = this.node.querySelectorAll('*[nc-refresh]');
            this.HTML = this.node.outerHTML;


            this._nuclearFix();
            if (this.onRefresh) this.onRefresh();
        }
    }

    obj._mixNode = function () {
        var nodes = this.node.querySelectorAll('*[nc-id]'),len=nodes.length;
        if (len > 0) {
            var i=0;
            for (; i < len; i++) {
                var node=nodes[i];
                this[node.getAttribute("nc-id")] = node;
            }
        }
    }

    //从最顶部组件向内fix
    obj._nuclearFix = function () {
        if (this._nuclearParent) return;
        this._nuclearFixOne(this)
    }

    obj._nuclearFixOne = function (one) {
        var refLen = one._nuclearRef.length;
        if (refLen > 0) {
            var i = 0;
            for (; i < refLen; i++) {
                var ref = one._nuclearRef[i];
                ref.node = one.node.querySelector('*[data-nuclearId="' + ref._nuclearId + '"]');
                if (ref.node) {
                    ref._mixNode();
                    ref._nuclearRenderInfo.refreshPart = ref.node.querySelectorAll('*[nc-refresh]');
                    ref._nuclearRenderInfo.parent = ref.node.parentNode;
                   
                    this._nuclearFixOne(ref);
                    if (ref.onRefresh) ref.onRefresh();
                    if (ref.installed) ref.installed();
                }
            }
        }
    }


    obj._nuclearLocalRefresh = function () {
        var item = this._nuclearRenderInfo, rpLen = item.refreshPart.length;
        item.tpl = this._nuclearTplGenerator();
        if (rpLen > 0) {
            var parts = Nuclear.str2Dom(Nuclear.Tpl.render(Nuclear._fixEvent(Nuclear._fixTplIndex(item.tpl), this._ncInstanceId), item.data)).querySelectorAll('*[nc-refresh]');
            window["_nuclearIndex"] = null;
            for (var j = 0; j < rpLen; j++) {
                var part = item.refreshPart[j];
                //part.parentNode为null,代表其已经被子节点替换掉了
                part.parentNode&&part.parentNode.replaceChild(parts[j], part);

            }
            item.refreshPart = parts;
            this._mixNode();
           
            this.HTML = this.node.outerHTML;

            this._nuclearFix();
            if (this.onRefresh) this.onRefresh();
        } else {
            this._nuclearRender(item);
        }
    }
}

Nuclear._fixEvent = function (tpl,instanceId) {

   return tpl.replace(/<[\s\S]*?>/g, function (item) {
       return item.replace(/(onabort|onblur|oncancel|oncanplay|oncanplaythrough|onchange|onclick|onclose|oncontextmenu|oncuechange|ondblclick|ondrag|ondragend|ondragenter|ondragleave|ondragover|ondragstart|ondrop|ondurationchange|onemptied|onended|onerror|onfocus|oninput|oninvalid|onkeydown|onkeypress|onkeyup|onload|onloadeddata|onloadedmetadata|onloadstart|onmousedown|onmouseenter|onmouseleave|onmousemove|onmouseout|onmouseover|onmouseup|onmousewheel|onpause|onplay|onplaying|onprogress|onratechange|onreset|onresize|onscroll|onseeked|onseeking|onselect|onshow|onstalled|onsubmit|onsuspend|ontimeupdate|ontoggle|onvolumechange|onwaiting|onautocomplete|onautocompleteerror|onbeforecopy|onbeforecut|onbeforepaste|oncopy|oncut|onpaste|onsearch|onselectstart|onwheel|onwebkitfullscreenchange|onwebkitfullscreenerror)=('|")/g, function (eventStr, b, c, d, e) {
           if (e.substr(eventStr.length + d, 18) === "Nuclear.instances[") return eventStr;
            return eventStr += "Nuclear.instances[" + instanceId + "].";
        });
    });
}

Nuclear._fixTplIndex = function (tpl) {
    //"{{_nuclearIndex}}"
    return tpl.replace(/{{#[\s\S]*?{{@index}}/g, function (str) {

        return "{{_resetNuclearIndex}}" + str.replace("{{@index}}", "{{_nuclearIndex}}");
    });
}

Nuclear._minActionObj = function (obj) {
    obj.ctor = function (option) {
        this.option = option;
        if (this.install) {
            this.install();
        }
    }
}

Nuclear.createAction = function (obj) {  
    Nuclear._minActionObj(obj)
    if (!obj.statics) obj.statics = {};
    obj.statics.createAction = function (obj) {
        Nuclear._minActionObj(obj);
        return this.extend(obj);
    }
    return Nuclear.Class.extend(obj);
    
}

Nuclear.throttle = function (func, wait, options) {
    var context, args, result;
    var timeout = null;
    // 上次执行时间点
    var previous = 0;
    if (!options) options = {};
    // 延迟执行函数
    var later = function () {
        // 若设定了开始边界不执行选项，上次执行时间始终为0
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function () {
        var now = Date.now();
        // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
        if (!previous && options.leading === false) previous = now;
        // 延迟执行时间间隔
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
        // remaining大于时间窗口wait，表示客户端系统时间被调整过
        if (remaining <= 0 || remaining > wait) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
            //如果延迟执行不存在，且没有设定结尾边界不执行选项
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}

Nuclear.isElement=function(o) {
    return (
      typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
  );
}

Nuclear.str2Dom = function (html) {
    var wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        body: [0, "", ""],
        _default: [1, "<div>", "</div>"]
    };
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    var match = /<\s*\w.*?>/g.exec(html);
    var element = document.createElement('div');
    if (match != null) {
        var tag = match[0].replace(/</g, '').replace(/>/g, '').split(' ')[0];
        if (tag.toLowerCase() === 'body') {
            var dom = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
            var body = document.createElement("body");
            // keeping the attributes
            element.innerHTML = html.replace(/<body/g, '<div').replace(/<\/body>/g, '</div>');
            var attrs = element.firstChild.attributes;
            body.innerHTML = html;
            for (var i = 0; i < attrs.length; i++) {
                body.setAttribute(attrs[i].name, attrs[i].value);
            }
            return body;
        } else {
            var map = wrapMap[tag] || wrapMap._default, element;
            html = map[1] + html + map[2];
            element.innerHTML = html;
            // Descend through wrappers to the right content
            var j = map[0] + 1;
            while (j--) {
                element = element.lastChild;
            }
        }
    } else {
        element.innerHTML = html;
        element = element.lastChild;
    }
    return element;
}

Nuclear.debounce=function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

Nuclear.addEvent = (function () {
    return function (el, type, fn) {
        if (el && el.nodeName || el === window) {
            el.addEventListener(type, fn, false);
        } else if (el && el.length) {
            for (var i = 0; i < el.length; i++) {
                Nuclear.addEvent(el[i], type, fn);
            }
        }
    };
})();

Nuclear.removeEvent = (function () {
    return function (el, type, fn) {
        if (el && el.nodeName || el === window) {
            el.removeEventListener(type, fn, false);
        } else if (el && el.length) {
            for (var i = 0; i < el.length; i++) {
                Nuclear.removeEvent.removeEvent(el[i], type, fn);
            }
        }
    };
})();

Nuclear.getNodeIndex = function (node) {
    var index = 0;
    while ((node = node.previousSibling)) {
        if (node.nodeType != 3 || !/^\s*$/.test(node.data)) {
            index++;
        }
    }
    return index;
}

Nuclear.hasClass = function (ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

Nuclear.addClass = function (node, cls) {
    if (Nuclear.isNodeList(node)) {
        Nuclear._iteration("addClass", arguments);
        return;
    }
    if (!Nuclear.hasClass(node, cls)) node.className += " " + cls;

}

Nuclear.removeClass = function (node, cls) {
    if (Nuclear.isNodeList(node)) {
        Nuclear._iteration("removeClass", arguments);
        return;
    }
    if (Nuclear.hasClass(node, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        node.className = node.className.replace(reg, ' ');
    }
}

Nuclear.toggleClass = function (node, classStr) {
    if (Nuclear.isNodeList(node)) {
        Nuclear._iteration("toggleClass", arguments);
        return;
    }

    var cls = ' ' + node.className + ' ';
    if (cls.indexOf(' ' + Nuclear.trim(classStr) + ' ') >= 0) {
        Nuclear.removeClass(node, classStr);
    } else {
        Nuclear.addClass(node, classStr);
    }
}

Nuclear.trim = function (str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

Nuclear._iteration = function (method, args) {
    var args = Array.prototype.slice.call(args);
    Nuclear.foreach(args[0], function (index) {
        var temp = args[0];
        args[0] = args[0][index];
        Nuclear[method].apply(Nuclear, args);
        args[0] = temp;
    })
}

Nuclear.css = function (node, styleName, value) {
    if (!node) return;

    if (Nuclear.isNodeList(node)) {
        Nuclear._iteration("css", arguments);
        return;
    }

    if (arguments.length == 3 && node.style) {  //change by bizai
        node.style[styleName] = value;
    }
    //因为有transition的存在，所有这行代码需要注释掉
    //if (node.style[styleName]) return node.style[styleName];
    return window.getComputedStyle(node, null)[styleName];

},


Nuclear.foreach = function (list, fn) {
    for (var i = 0, len = list.length; i < len ; i++) {
        fn.call(list[i], i);
    }
}

Nuclear.offset = function (el) {
    var _t = 0,
        _l = 0;
    if (document.documentElement.getBoundingClientRect && el.getBoundingClientRect) {
        var box = el.getBoundingClientRect();
        _l = box.left;
        _t = box.top;
    } else {
        while (el.offsetParent) {
            _t += el.offsetTop;
            _l += el.offsetLeft;
            el = el.offsetParent;
        }
        return { left: _l, top: _t };
    }
    return { left: _l + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), top: _t + Math.max(document.documentElement.scrollTop, document.body.scrollTop) };
}

Nuclear.getViewport = function () {
    var d = document.documentElement, b = document.body, w = window, div = document.createElement("div");
    div.innerHTML = "  <link/>";
    var lt = !(div.firstChild.nodeType === 3) ?
                { left: b.scrollLeft || d.scrollLeft, top: b.scrollTop || d.scrollTop } :
                { left: w.pageXOffset, top: w.pageYOffset };
    var wh = w.innerWidth ?
                { width: w.innerWidth, height: w.innerHeight } :
            (d && d.clientWidth && d.clientWidth != 0 ?
                    { width: d.clientWidth, height: d.clientHeight } :
                    { width: b.clientWidth, height: b.clientHeight });

    return { left: lt.left, top: lt.top, width: wh.width, height: wh.height };
}

//this.parent.lastChild代替
Nuclear.getLastNode = function (parent, selector) {
    var childs = parent.querySelectorAll(selector), len = childs.length;
    return childs[len - 1];
}

Nuclear.isUndefined = function (o) {
    return typeof (o) === "undefined";
}

Nuclear.domready = (function () {

    var fns = [], listener
      , doc = document
      , hack = doc.documentElement.doScroll
      , domContentLoaded = 'DOMContentLoaded'
      , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


    if (!loaded)
        doc.addEventListener(domContentLoaded, listener = function () {
            doc.removeEventListener(domContentLoaded, listener)
            loaded = 1
            while (listener = fns.shift()) listener()
        })

    return function (fn) {
        loaded ? setTimeout(fn, 0) : fns.push(fn)
    }

})();

; (function () {
    var class2type = {}, toString = Object.prototype.toString;
    "Boolean Number String Function Array Date RegExp Object Error NodeList".split(" ").forEach(function (name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    })
    var hasOwn = Object.prototype.hasOwnProperty;
    var type = function (obj) {
        if (obj == null) {
            return obj + "";
        }
        // Support: Android<4.0 (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ?
			class2type[toString.call(obj)] || "object" :
			typeof obj;
    }

    var isNodeList = function (obj) {
        return type(obj) === "nodelist";
    }

    var isFunction = function (obj) {
        return type(obj) === "function";

    }
    var isArray = function (obj) {
        return type(obj) === "array";
    }
    var isWindow = function (obj) {
        return obj != null && obj === obj.window;
    }

    var isPlainObject = function (obj) {
        // Not plain objects:
        // - Any object or value whose internal [[Class]] property is not "[object Object]"
        // - DOM nodes
        // - window
        if (type(obj) !== "object" || obj.nodeType || isWindow(obj)) {
            return false;
        }

        if (obj.constructor &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
            return false;
        }

        // If the function hasn't returned already, we're confident that
        // |obj| is a plain object, created by {} or constructed with new Object
        return true;
    }

    Nuclear.type = type;
    Nuclear.isFunction = isFunction;
    Nuclear.isArray = isArray;
    Nuclear.isWindow = isWindow;
    Nuclear.isPlainObject = isPlainObject;
    Nuclear.isNodeList = isNodeList;
})();

Nuclear.merge = function () {
    var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

    // Handle a deep copy situation
    if (typeof target === "boolean") {
        deep = target;

        // Skip the boolean and the target
        target = arguments[i] || {};
        i++;
    }

    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== "object" && !Nuclear.isFunction(target)) {
        target = {};
    }

    // Extend jQuery itself if only one argument is passed
    if (i === length) {
        target = this;
        i--;
    }

    for (; i < length; i++) {
        // Only deal with non-null/undefined values
        if ((options = arguments[i]) != null) {
            // Extend the base object
            for (name in options) {
                src = target[name];
                copy = options[name];

                // Prevent never-ending loop
                if (target === copy) {
                    continue;
                }

                // Recurse if we're merging plain objects or arrays
                if (deep && copy && (Nuclear.isPlainObject(copy) ||
					(copyIsArray = Nuclear.isArray(copy)))) {

                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && Nuclear.isArray(src) ? src : [];

                    } else {
                        clone = src && Nuclear.isPlainObject(src) ? src : {};
                    }

                    // Never move original objects, clone them
                    target[name] = Nuclear.merge(deep, clone, copy);

                    // Don't bring in undefined values
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }

    // Return the modified object
    return target;
};

//因为js单线程的关系，所以就算同时执行两次Nuclear.uuid,得到的uuid也不可能相同
Nuclear.uuid = function () {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

Nuclear.createCanvas = function (obj) {
    Nuclear._minCanvasObj(obj);
    if (!obj.statics) obj.statics = {};
    obj.statics.create = function (obj) {
        Nuclear._minCanvasObj(obj);
        return this.extend(obj);
    }
    return Nuclear.Class.extend(obj);
};


Nuclear._minCanvasObj = function (obj) {
    obj.ctor = function (width, height, option, selector) {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;
        this.parent = typeof selector === "string" ? document.querySelector(selector) : selector;
        this.option = option;
        if (this.install) {
            this.install();
        }
        if (this.option) {
            Nuclear.observe(this.option, Nuclear.throttle(this._nuclearRender.bind(this), 15));
        }
        this._nuclearRender();
        if (this.installed) this.installed();
        this.parent.appendChild(this.canvas);
    }

    obj._nuclearRender = function (item) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.render();
    }


};

Nuclear._nextID = 0;
Nuclear.getId = function () {
    return Nuclear._nextID++;        
}

Nuclear._instanceId= 0;
Nuclear.getInstanceId = function () {
    return Nuclear._instanceId++;
}
Nuclear.instances = {};
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

;(function defineMustache (global, factory) {
    Nuclear.Tpl = {};
    factory(Nuclear.Tpl); // script, wsh, asp
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
    case -1:
      match = this.tail;
      this.tail = '';
      break;
    case 0:
      match = '';
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (name in cache) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1 && value != null)
              lookupHit = (typeof value === 'object') &&
                value.hasOwnProperty(names[index]);
            value = value[names[index++]];
          }
        } else if (context.view != null && typeof context.view === 'object') {
          value = context.view[name];
          lookupHit = context.view.hasOwnProperty(name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.0.0';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

}));
/* observejs --- By dnt http://kmdjs.github.io/
 * Github: https://github.com/kmdjs/observejs
 * MIT Licensed.
 */
;(function () {
    var observe = function (target, arr,callback) {
        var _observe = function (target, arr, callback) {
			if(!target.$observer)target.$observer=this;
			var $observer=target.$observer;
			var eventPropArr=[];
			if (observe.isArray(target)) {
			    if (target.length === 0) {
			        target.$observeProps = {};
			        target.$observeProps.$observerPath = "#";
			    }
			     $observer.mock(target);
			   
            }
            for (var prop in target) {
                if (target.hasOwnProperty(prop)) {
                    if (callback) {
                        if (observe.isArray(arr) && observe.isInArray(arr, prop)) {
							eventPropArr.push(prop);
                            $observer.watch(target, prop);
                        } else if (observe.isString(arr) && prop == arr) {
							eventPropArr.push(prop);
                            $observer.watch(target, prop);
                        }                       
                    } else{
						eventPropArr.push(prop);
                        $observer.watch(target, prop);
                    }
                }
            }         
            $observer.target = target;
			if(!$observer.propertyChangedHandler)$observer.propertyChangedHandler=[];
			var propChanged=callback ? callback : arr;
			$observer.propertyChangedHandler.push({ all: !callback, propChanged: propChanged, eventPropArr: eventPropArr });	
        }
        _observe.prototype = {
            "onPropertyChanged": function (prop, value,oldValue,target,path) {
                if(value!== oldValue && this.propertyChangedHandler){
					var rootName=observe._getRootName(prop,path);
					for(var i=0,len=this.propertyChangedHandler.length;i<len;i++){
						var handler=this.propertyChangedHandler[i];
						if(handler.all||observe.isInArray(handler.eventPropArr,rootName)||rootName.indexOf("Array-")===0){
							handler.propChanged.call(this.target, prop, value, oldValue, path);
						}	
					}			
				}
                if (prop.indexOf("Array-") !== 0 && typeof value === "object") {
					this.watch(target,prop, target.$observeProps.$observerPath);
				}
            },
            "mock": function (target) {
                var self = this;
                observe.methods.forEach(function (item) {
                    target[item] = function () {
						var old =  Array.prototype.slice.call(this,0);
                        var result = Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
                        if (new RegExp("\\b" + item + "\\b").test(observe.triggerStr)) {
							for (var cprop in this) {
								if (this.hasOwnProperty(cprop)  && !observe.isFunction(this[cprop])) {
									self.watch(this, cprop, this.$observeProps.$observerPath);
								}
							}
							//todo
                            self.onPropertyChanged("Array-"+item, this, old,this, this.$observeProps.$observerPath);
                        }
                        return result;
                    };
                });
            },
            "watch": function (target, prop, path) {             
                if (prop === "$observeProps"||prop === "$observer") return;
				if (observe.isFunction(target[prop])) return;
				if (!target.$observeProps) target.$observeProps = {};
				if(path !== undefined){
					target.$observeProps.$observerPath = path;
				}else{
					target.$observeProps.$observerPath = "#";
				}
                var self = this;              
                var currentValue = target.$observeProps[prop] = target[prop];
                Object.defineProperty(target, prop, {
                    get: function () {
                        return this.$observeProps[prop];
                    },
                    set: function (value) {
                        var old = this.$observeProps[prop];
                        this.$observeProps[prop] = value;
                        self.onPropertyChanged(prop, value, old, this, target.$observeProps.$observerPath);                   
                    }
                });
                if (typeof currentValue == "object") {
                    if (observe.isArray(currentValue)) {
                        this.mock(currentValue);
                        if (currentValue.length === 0) {
                            if (!currentValue.$observeProps) currentValue.$observeProps = {};
                            if (path !== undefined) {
                                currentValue.$observeProps.$observerPath = path;
                            } else {
                                currentValue.$observeProps.$observerPath = "#";
                            }
                        }
                    }
                    for (var cprop in currentValue) {
                        if (currentValue.hasOwnProperty(cprop)) {
                            this.watch(currentValue, cprop, target.$observeProps.$observerPath+"-"+prop);
                        }
                    }
                }
            }
        }
        return new _observe(target, arr, callback)
    }
    observe.methods = ["concat", "every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "pop", "push", "reduce", "reduceRight", "reverse", "shift", "slice", "some", "sort", "splice", "unshift", "toLocaleString","toString","size"]
    observe.triggerStr = ["concat", "pop", "push", "reverse", "shift", "sort", "splice", "unshift","size"].join(",")
    observe.isArray = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }
    observe.isString = function (obj) {
        return typeof obj === "string";
    }
    observe.isInArray = function (arr, item) {
        for (var i = arr.length; --i > -1;) {
            if (item === arr[i]) return true;
        }
        return false;
    }
    observe.isFunction = function (obj) {
        return Object.prototype.toString.call(obj) == '[object Function]';
    }
    observe.twoWay = function (objA, aProp, objB, bProp) {
        if (typeof objA[aProp] === "object" && typeof objB[bProp] === "object") {
            observe(objA, aProp, function (name, value) {
                objB[bProp] = this[aProp];
            })
            observe(objB, bProp, function (name, value) {
                objA[aProp] = this[bProp];
            })
        } else {
            observe(objA, aProp, function (name, value) {
                objB[bProp] = value;
            })
            observe(objB, bProp, function (name, value) {
                objA[aProp] = value;
            })
        }
    }
	observe._getRootName=function(prop,path){
		if(path==="#"){
			return prop;
		}
		return path.split("-")[1];
	}
    
	observe.add = function(obj , prop , value) {
		obj[prop] = value;		
		var $observer=obj.$observer;
		$observer.watch(obj,prop);
	}
	Array.prototype.size = function (length) {
		this.length = length;
	}
	
	Nuclear.observe = observe;
})();

;(function () {
    var initializing = false, fnTest = /xyz/.test(function () { xyz; }) ? /\b_super\b/ : /.*/;

    // The base Class implementation (does nothing)
    var Class = function () { };

    // Create a new Class that inherits from this class
    Class.extend = function (prop) {
        var _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        var prototype = new this();
        initializing = false;

        // Copy the properties over onto the new prototype
        for (var name in prop) {
            if (name != "statics") {
                // Check if we're overwriting an existing function
                prototype[name] = typeof prop[name] == "function" &&
                  typeof _super[name] == "function" && fnTest.test(prop[name]) ?
                  (function (name, fn) {
                      return function () {
                          var tmp = this._super;

                          // Add a new ._super() method that is the same method
                          // but on the super-class
                          this._super = _super[name];

                          // The method only need to be bound temporarily, so we
                          // remove it when we're done executing
                          var ret = fn.apply(this, arguments);
                          this._super = tmp;

                          return ret;
                      };
                  })(name, prop[name]) :
                  prop[name];
            }
        }

        // The dummy class constructor
        function _Class() {
            // All construction is actually done in the init method
            if (!initializing && this.ctor)
                this.ctor.apply(this, arguments);
        }

        //继承父类的静态属性
        for (var key in this) {
            if (this.hasOwnProperty(key) && key != "extend")
                _Class[key] = this[key];
        }

        // Populate our constructed prototype object
        _Class.prototype = prototype;

        //静态属性和方法
        if (prop.statics) {
            for (var name in prop.statics) {
                if (prop.statics.hasOwnProperty(name)) {
                    _Class[name] = prop.statics[name];
                    if (name == "ctor") {
                        //提前执行静态构造函数
                        _Class[name]();
                    }
                }

            }
        }

        // Enforce the constructor to be what we expect
        _Class.prototype.constructor = _Class;

        // And make this class extendable
        _Class.extend = Class.extend;

        //add implementation method
        _Class.implement = function (prop) {
            for (var name in prop) {
                prototype[name] = prop[name];
            }
        };
        return _Class;
    };


    Nuclear.Class = Class;
})()


return Nuclear;
}));
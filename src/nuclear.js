/* paste from Zepto v1.1.6 -
contain zepto,event and touch modules
https://github.com/madrobby/zepto/blob/master/src/zepto.js
https://github.com/madrobby/zepto/blob/master/src/event.js
https://github.com/madrobby/zepto/blob/master/src/touch.js
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


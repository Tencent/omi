(function () {
  'use strict';

  var stack = [];

  var EMPTY_CHILDREN = [];

  /**
   * JSX/hyperscript reviver.
   * @see http://jasonformat.com/wtf-is-jsx
   * Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
   *
   * Note: this is exported as both `h()` and `createElement()` for compatibility reasons.
   *
   * Creates a VNode (virtual DOM element). A tree of VNodes can be used as a lightweight representation
   * of the structure of a DOM tree. This structure can be realized by recursively comparing it against
   * the current _actual_ DOM structure, and applying only the differences.
   *
   * `h()`/`createElement()` accepts an element name, a list of attributes/props,
   * and optionally children to append to the element.
   *
   * @example The following DOM tree
   *
   * `<div id="foo" name="bar">Hello!</div>`
   *
   * can be constructed using this function as:
   *
   * `h('div', { id: 'foo', name : 'bar' }, 'Hello!');`
   *
   * @param {string} nodeName	An element name. Ex: `div`, `a`, `span`, etc.
   * @param {Object} attributes	Any attributes/props to set on the created element.
   * @param rest			Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
   *
   * @public
   */
  function h(nodeName, attributes) {
    var children = EMPTY_CHILDREN,
        lastSimple = void 0,
        child = void 0,
        simple = void 0,
        i = void 0;
    for (i = arguments.length; i-- > 2;) {
      stack.push(arguments[i]);
    }
    if (attributes && attributes.children != null) {
      if (!stack.length) stack.push(attributes.children);
      delete attributes.children;
    }
    while (stack.length) {
      if ((child = stack.pop()) && child.pop !== undefined) {
        for (i = child.length; i--;) {
          stack.push(child[i]);
        }
      } else {
        if (typeof child === 'boolean') child = null;

        if (simple = typeof nodeName !== 'function') {
          if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
        }

        if (simple && lastSimple) {
          children[children.length - 1] += child;
        } else if (children === EMPTY_CHILDREN) {
          children = [child];
        } else {
          children.push(child);
        }

        lastSimple = simple;
      }
    }

    var p = {};
    p.nodeName = nodeName;
    p.children = children;
    p.attributes = attributes == null ? undefined : attributes;
    p.key = attributes == null ? undefined : attributes.key;

    return p;
  }

  // render modes

  var NO_RENDER = 0;
  var SYNC_RENDER = 1;
  var FORCE_RENDER = 2;
  var ASYNC_RENDER = 3;

  var ATTR_KEY = '__omiattr_';

  // DOM properties that should NOT have "px" added when numeric
  var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|x|y|ntw|ine[ch]|zoo|^ord/i;

  var nodeId = 1;
  function uniqueId() {
    return nodeId++;
  }

  var docMap = {};

  function addDoc(id, doc) {
    docMap[id] = doc;
  }

  function getDoc(id) {
    return docMap[id];
  }

  function removeDoc(id) {
    delete docMap[id];
  }

  function insertIndex(target, list, newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    }
    var before = list[newIndex - 1];
    var after = list[newIndex];
    list.splice(newIndex, 0, target);

    before && (before.nextSibling = target);
    target.previousSibling = before;
    target.nextSibling = after;
    after && (after.previousSibling = target);

    return newIndex;
  }

  function moveIndex(target, list, newIndex) {
    var index = list.indexOf(target);

    if (index < 0) {
      return -1;
    }

    var before = list[index - 1];
    var after = list[index + 1];
    before && (before.nextSibling = after);
    after && (after.previousSibling = before);

    list.splice(index, 1);
    var newIndexAfter = newIndex;
    if (index <= newIndex) {
      newIndexAfter = newIndex - 1;
    }
    var beforeNew = list[newIndexAfter - 1];
    var afterNew = list[newIndexAfter];
    list.splice(newIndexAfter, 0, target);

    beforeNew && (beforeNew.nextSibling = target);
    target.previousSibling = beforeNew;
    target.nextSibling = afterNew;
    afterNew && (afterNew.previousSibling = target);

    if (index === newIndexAfter) {
      return -1;
    }
    return newIndex;
  }

  function removeIndex(target, list, changeSibling) {
    var index = list.indexOf(target);

    if (index < 0) {
      return;
    }
    if (changeSibling) {
      var before = list[index - 1];
      var after = list[index + 1];
      before && (before.nextSibling = after);
      after && (after.previousSibling = before);
    }
    list.splice(index, 1);
  }

  function linkParent(node, parent) {
    node.parentNode = parent;
    if (parent.docId) {
      node.docId = parent.docId;
      node.ownerDocument = parent.ownerDocument;
      node.ownerDocument.nodeMap[node.nodeId] = node;
      node.depth = parent.depth + 1;
    }

    node.childNodes && node.childNodes.forEach(function (child) {
      linkParent(child, node);
    });
  }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var displayMap = {
  	div: 'block',
  	span: 'inline-block'
  };

  function registerNode(docId, node) {
  	var doc = getDoc(docId);
  	doc.nodeMap[node.nodeId] = node;
  }

  var Element$1 = function () {
  	function Element(type) {
  		_classCallCheck(this, Element);

  		this.nodeType = 1;
  		this.nodeId = uniqueId();
  		this.ref = this.nodeId;
  		this.type = type;
  		this.attributes = {};
  		this.style = {
  			display: displayMap[type]
  		};
  		this.classStyle = {};
  		this.event = {};
  		this.childNodes = [];

  		this.nodeName = this.type;

  		this.parentNode = null;
  		this.nextSibling = null;
  		this.previousSibling = null;
  		this.firstChild = null;
  	}

  	Element.prototype.appendChild = function appendChild(node) {
  		if (!node.parentNode) {
  			linkParent(node, this);
  			insertIndex(node, this.childNodes, this.childNodes.length, true);

  			if (this.docId != undefined) {
  				registerNode(this.docId, node);
  			}

  			//this.ownerDocument.addElement(this.ref, node.toJSON(), -1)
  		} else {
  			node.parentNode.removeChild(node);

  			this.appendChild(node);

  			return;
  		}

  		this.firstChild = this.childNodes[0];
  	};

  	Element.prototype.insertBefore = function insertBefore(node, before) {
  		if (!node.parentNode) {
  			linkParent(node, this);
  			var index = insertIndex(node, this.childNodes, this.childNodes.indexOf(before), true);
  			if (this.docId != undefined) {
  				registerNode(this.docId, node);
  			}

  			//this.ownerDocument.addElement(this.ref, node.toJSON(), index)
  		} else {
  			node.parentNode.removeChild(node);
  			this.insertBefore(node, before);
  			return;
  		}

  		this.firstChild = this.childNodes[0];
  	};

  	Element.prototype.insertAfter = function insertAfter(node, after) {
  		if (node.parentNode && node.parentNode !== this) {
  			return;
  		}
  		if (node === after || node.previousSibling && node.previousSibling === after) {
  			return;
  		}
  		if (!node.parentNode) {
  			linkParent(node, this);
  			var index = insertIndex(node, this.childNodes, this.childNodes.indexOf(after) + 1, true);

  			if (this.docId != undefined) {
  				registerNode(this.docId, node);
  			}

  			//this.ownerDocument.addElement(this.ref, node.toJSON(), index)
  		} else {
  			var _index = moveIndex(node, this.childNodes, this.childNodes.indexOf(after) + 1);

  			//this.ownerDocument.moveElement(node.ref, this.ref, index)
  		}

  		this.firstChild = this.childNodes[0];
  	};

  	Element.prototype.removeChild = function removeChild(node) {
  		if (node.parentNode) {
  			removeIndex(node, this.childNodes, true);

  			this.ownerDocument.removeElement(node.ref);
  		}

  		node.parentNode = null;

  		this.firstChild = this.childNodes[0];
  	};

  	Element.prototype.setAttribute = function setAttribute(key, value, silent) {
  		if (this.attributes[key] === value && silent !== false) {
  			return;
  		}
  		this.attributes[key] = value;
  		if (!silent) {
  			var result = {};
  			result[key] = value;

  			this.ownerDocument.setAttr(this.ref, result);
  		}
  	};

  	Element.prototype.removeAttribute = function removeAttribute(key) {
  		if (this.attributes[key]) {
  			delete this.attributes[key];
  		}
  	};

  	Element.prototype.setStyle = function setStyle(key, value, silent) {
  		if (this.style[key] === value && silent !== false) {
  			return;
  		}
  		this.style[key] = value;
  		if (!silent && this.ownerDocument) {
  			var result = {};
  			result[key] = value;

  			this.ownerDocument.setStyles(this.ref, result);
  		}
  	};

  	Element.prototype.setStyles = function setStyles(styles) {
  		Object.assign(this.style, styles);
  		if (this.ownerDocument) {

  			this.ownerDocument.setStyles(this.ref, styles);
  		}
  	};

  	Element.prototype.setClassStyle = function setClassStyle(classStyle) {
  		for (var key in this.classStyle) {
  			this.classStyle[key] = '';
  		}

  		Object.assign(this.classStyle, classStyle);

  		this.ownerDocument.setStyles(this.ref, this.toStyle());
  	};

  	Element.prototype.addEventListener = function addEventListener(type, handler) {
  		if (!this.event[type]) {
  			this.event[type] = handler;

  			//this.ownerDocument.addEvent(this.ref, type)
  		}
  	};

  	Element.prototype.removeEventListener = function removeEventListener(type) {
  		if (this.event[type]) {
  			delete this.event[type];
  			var doc = getDoc(this.docId);
  			doc.nodeMap[this.ref] && doc.nodeMap[this.ref].event && doc.nodeMap[this.ref].event[type] ? doc.nodeMap[this.ref].event[type] = null : '';

  			this.ownerDocument.removeEvent(this.ref, type);
  		}
  	};

  	Element.prototype.fireEvent = function fireEvent(type, e) {
  		var handler = this.event[type];
  		if (handler) {
  			return handler.call(this, e);
  		}
  	};

  	Element.prototype.toStyle = function toStyle() {
  		return Object.assign({}, this.classStyle, this.style);
  	};

  	Element.prototype.getComputedStyle = function getComputedStyle() {};

  	Element.prototype.toJSON = function toJSON() {
  		var result = {
  			id: this.ref,
  			type: this.type,
  			docId: this.docId || -10000,
  			attributes: this.attributes ? this.attributes : {}
  		};
  		result.attributes.style = this.toStyle();

  		var event = Object.keys(this.event);
  		if (event.length) {
  			result.event = event;
  		}

  		if (this.childNodes.length) {
  			result.children = this.childNodes.map(function (child) {
  				return child.toJSON();
  			});
  		}
  		return result;
  	};

  	Element.prototype.replaceChild = function replaceChild(newChild, oldChild) {
  		this.insertBefore(newChild, oldChild);
  		this.removeChild(oldChild);
  	};

  	Element.prototype.destroy = function destroy() {
  		var doc = getDoc(this.docId);

  		if (doc) {
  			delete doc.nodeMap[this.nodeId];
  		}

  		this.parentNode = null;
  		this.childNodes.forEach(function (child) {
  			child.destroy();
  		});
  	};

  	return Element;
  }();

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var TextNode = function () {
  	function TextNode(nodeValue) {
  		_classCallCheck$1(this, TextNode);

  		this.nodeType = 3;
  		this.nodeId = uniqueId();
  		this.ref = this.nodeId;
  		this.attributes = {};
  		this.style = {
  			display: 'inline'
  		};
  		this.classStyle = {};
  		this.event = {};
  		this.nodeValue = nodeValue;
  		this.parentNode = null;
  		this.nextSibling = null;
  		this.previousSibling = null;
  		this.firstChild = null;
  		this.type = 'text';
  	}

  	TextNode.prototype.setAttribute = function setAttribute(key, value, silent) {
  		if (this.attributes[key] === value && silent !== false) {
  			return;
  		}
  		this.attributes[key] = value;
  		if (!silent) {
  			var result = {};
  			result[key] = value;

  			this.ownerDocument.setAttr(this.ref, result);
  		}
  	};

  	TextNode.prototype.removeAttribute = function removeAttribute(key) {
  		if (this.attributes[key]) {
  			delete this.attributes[key];
  		}
  	};

  	TextNode.prototype.toStyle = function toStyle() {
  		return Object.assign({}, this.classStyle, this.style);
  	};

  	TextNode.prototype.splitText = function splitText() {};

  	TextNode.prototype.getComputedStyle = function getComputedStyle() {};

  	TextNode.prototype.toJSON = function toJSON() {
  		var result = {
  			id: this.ref,
  			type: this.type,
  			docId: this.docId || -10000,
  			attributes: this.attributes ? this.attributes : {}
  		};
  		result.attributes.style = this.toStyle();

  		var event = Object.keys(this.event);
  		if (event.length) {
  			result.event = event;
  		}

  		return result;
  	};

  	TextNode.prototype.destroy = function destroy() {
  		var doc = getDoc(this.docId);

  		if (doc) {
  			delete doc.nodeMap[this.nodeId];
  		}

  		this.parentNode = null;
  	};

  	return TextNode;
  }();

  function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Document = function () {
    function Document(id) {
      _classCallCheck$2(this, Document);

      this.id = id;
      addDoc(id, this);
      this.nodeMap = {};
      this._isMockDocument = true;
    }

    // createBody(type, props) {
    //   if (!this.body) {
    //     const el = new Element(type, props)
    //     el.didMount = true
    //     el.ownerDocument = this
    //     el.docId = this.id
    //     el.style.alignItems = 'flex-start'
    //     this.body = el
    //   }

    //   return this.body
    // }

    Document.prototype.createElement = function createElement(tagName, props) {
      var el = new Element$1(tagName, props);
      el.ownerDocument = this;
      el.docId = this.id;
      return el;
    };

    Document.prototype.createTextNode = function createTextNode(txt) {
      var node = new TextNode(txt);
      node.docId = this.id;
      return node;
    };

    Document.prototype.destroy = function destroy() {
      delete this.listener;
      delete this.nodeMap;
      removeDoc(this.id);
    };

    Document.prototype.addEventListener = function addEventListener(ref, type) {
      //document.addEvent(this.id, ref, type)
    };

    Document.prototype.removeEventListener = function removeEventListener(ref, type) {
      //document.removeEvent(this.id, ref, type)
    };

    Document.prototype.scrollTo = function scrollTo(ref, x, y, animated) {
      document.scrollTo(this.id, ref, x, y, animated);
    };

    return Document;
  }();

  var mock = {
  	document: new Document(0)
  };

  function getGlobal() {
    if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
      if (typeof self !== 'undefined') {
        return self;
      } else if (typeof window !== 'undefined') {
        return window;
      } else if (typeof global !== 'undefined') {
        return global;
      }
      return function () {
        return this;
      }();
    }
    return global;
  }

  /** Global options
   *	@public
   *	@namespace options {Object}
   */
  var options = {
    scopedStyle: true,
    mapping: {},
    isWeb: true,
    staticStyleMapping: {},
    doc: mock.document,
    //doc: typeof document === 'object' ? document : null,
    root: getGlobal(),
    //styleCache :[{ctor:ctor,ctorName:ctorName,style:style}]
    styleCache: []
    //componentChange(component, element) { },
    /** If `true`, `prop` changes trigger synchronous component updates.
     *	@name syncComponentUpdates
     *	@type Boolean
     *	@default true
     */
    //syncComponentUpdates: true,

    /** Processes all created VNodes.
     *	@param {VNode} vnode	A newly-created VNode to normalize/process
     */
    //vnode(vnode) { }

    /** Hook invoked after a component is mounted. */
    //afterMount(component) { },

    /** Hook invoked after the DOM is updated with a component's latest render. */
    //afterUpdate(component) { }

    /** Hook invoked immediately before a component is unmounted. */
    // beforeUnmount(component) { }
  };

  /* eslint-disable no-unused-vars */

  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function assign(target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  }

  if (!Element.prototype.addEventListener) {
    var runListeners = function runListeners(oEvent) {
      if (!oEvent) {
        oEvent = window.event;
      }
      for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId < oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) {
          for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) {
            oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent);
          }
          break;
        }
      }
    };

    var oListeners = {};

    Element.prototype.addEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
      if (oListeners.hasOwnProperty(sEventType)) {
        var oEvtListeners = oListeners[sEventType];
        for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
          if (oEvtListeners.aEls[iElId] === this) {
            nElIdx = iElId;break;
          }
        }
        if (nElIdx === -1) {
          oEvtListeners.aEls.push(this);
          oEvtListeners.aEvts.push([fListener]);
          this["on" + sEventType] = runListeners;
        } else {
          var aElListeners = oEvtListeners.aEvts[nElIdx];
          if (this["on" + sEventType] !== runListeners) {
            aElListeners.splice(0);
            this["on" + sEventType] = runListeners;
          }
          for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {
            if (aElListeners[iLstId] === fListener) {
              return;
            }
          }
          aElListeners.push(fListener);
        }
      } else {
        oListeners[sEventType] = { aEls: [this], aEvts: [[fListener]] };
        this["on" + sEventType] = runListeners;
      }
    };
    Element.prototype.removeEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
      if (!oListeners.hasOwnProperty(sEventType)) {
        return;
      }
      var oEvtListeners = oListeners[sEventType];
      for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) {
          nElIdx = iElId;break;
        }
      }
      if (nElIdx === -1) {
        return;
      }
      for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId < aElListeners.length; iLstId++) {
        if (aElListeners[iLstId] === fListener) {
          aElListeners.splice(iLstId, 1);
        }
      }
    };
  }

  if (typeof Object.create !== 'function') {
    Object.create = function (proto, propertiesObject) {
      if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('Object prototype may only be an Object: ' + proto);
      } else if (proto === null) {
        throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
      }

      // if (typeof propertiesObject != 'undefined') {
      //     throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
      // }

      function F() {}
      F.prototype = proto;

      return new F();
    };
  }

  if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  }

  /**
   *  Copy all properties from `props` onto `obj`.
   *  @param {Object} obj		Object onto which properties should be copied.
   *  @param {Object} props	Object from which to copy properties.
   *  @returns obj
   *  @private
   */
  function extend(obj, props) {
    for (var i in props) {
      obj[i] = props[i];
    }return obj;
  }

  /** Invoke or update a ref, depending on whether it is a function or object ref.
   *  @param {object|function} [ref=null]
   *  @param {any} [value]
   */
  function applyRef(ref, value) {
    if (ref) {
      if (typeof ref == 'function') ref(value);else ref.current = value;
    }
  }

  /**
   * Call a function asynchronously, as soon as possible. Makes
   * use of HTML Promise to schedule the callback if available,
   * otherwise falling back to `setTimeout` (mainly for IE<11).
   *
   * @param {Function} callback
   */

  var usePromise = typeof Promise == 'function';

  // for native
  if (typeof document !== 'object' && typeof global !== 'undefined' && global.__config__) {
    if (global.__config__.platform === 'android') {
      usePromise = true;
    } else {
      var systemVersion = global.__config__.systemVersion && global.__config__.systemVersion.split('.')[0] || 0;
      if (systemVersion > 8) {
        usePromise = true;
      }
    }
  }

  var defer = usePromise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

  function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }

  function nProps(props) {
    if (!props || isArray(props)) return {};
    var result = {};
    Object.keys(props).forEach(function (key) {
      result[key] = props[key].value;
    });
    return result;
  }

  /** Managed queue of dirty components to be re-rendered */

  var items = [];

  function enqueueRender(component) {
    if (items.push(component) == 1) {
  (options.debounceRendering || defer)(rerender);
    }
  }

  /** Rerender all enqueued dirty components */
  function rerender() {
    var p = void 0;
    while (p = items.pop()) {
      renderComponent(p);
    }
  }

  var mapping = options.mapping;
  /**
   * Check if two nodes are equivalent.
   *
   * @param {Node} node			DOM Node to compare
   * @param {VNode} vnode			Virtual DOM node to compare
   * @param {boolean} [hydrating=false]	If true, ignores component constructors when comparing.
   * @private
   */
  function isSameNodeType(node, vnode, hydrating) {
    if (typeof vnode === 'string' || typeof vnode === 'number') {
      return node.splitText !== undefined;
    }
    if (typeof vnode.nodeName === 'string') {
      var ctor = mapping[vnode.nodeName];
      if (ctor) {
        return hydrating || node._componentConstructor === ctor;
      }
      return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
    }
    return hydrating || node._componentConstructor === vnode.nodeName;
  }

  /**
   * Check if an Element has a given nodeName, case-insensitively.
   *
   * @param {Element} node	A DOM Element to inspect the name of.
   * @param {String} nodeName	Unnormalized name to compare against.
   */
  function isNamedNode(node, nodeName) {
    return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
  }

  /**
   * Reconstruct Component-style `props` from a VNode.
   * Ensures default/fallback values from `defaultProps`:
   * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
   *
   * @param {VNode} vnode
   * @returns {Object} props
   */
  function getNodeProps(vnode) {
    var props = extend({}, vnode.attributes);
    props.children = vnode.children;

    var defaultProps = vnode.nodeName.defaultProps;
    if (defaultProps !== undefined) {
      for (var i in defaultProps) {
        if (props[i] === undefined) {
          props[i] = defaultProps[i];
        }
      }
    }

    return props;
  }

  /** Create an element with the given nodeName.
   *	@param {String} nodeName
   *	@param {Boolean} [isSvg=false]	If `true`, creates an element within the SVG namespace.
   *	@returns {Element} node
   */
  function createNode(nodeName, isSvg) {
    var node = isSvg ? options.doc.createElementNS('http://www.w3.org/2000/svg', nodeName) : options.doc.createElement(nodeName);
    node.normalizedNodeName = nodeName;
    return node;
  }

  function parseCSSText(cssText) {
    var cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, ' ').replace(/\s+/g, ' ');
    var style = {},
        _ref = cssTxt.match(/ ?(.*?) ?{([^}]*)}/) || [a, b, cssTxt],
        a = _ref[0],
        b = _ref[1],
        rule = _ref[2];

    var cssToJs = function cssToJs(s) {
      return s.replace(/\W+\w/g, function (match) {
        return match.slice(-1).toUpperCase();
      });
    };
    var properties = rule.split(';').map(function (o) {
      return o.split(':').map(function (x) {
        return x && x.trim();
      });
    });
    for (var _iterator = properties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref3 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref3 = _i.value;
      }

      var _ref2 = _ref3;
      var property = _ref2[0];
      var value = _ref2[1];
      style[cssToJs(property)] = value;
    }return style;
  }

  /** Remove a child node from its parent if attached.
   *	@param {Element} node		The node to remove
   */
  function removeNode(node) {
    var parentNode = node.parentNode;
    if (parentNode) parentNode.removeChild(node);
  }

  /** Set a named attribute on the given Node, with special behavior for some names and event handlers.
   *	If `value` is `null`, the attribute/handler will be removed.
   *	@param {Element} node	An element to mutate
   *	@param {string} name	The name/key to set, such as an event or attribute name
   *	@param {any} old	The last value that was set for this name/node pair
   *	@param {any} value	An attribute value, such as a function to be used as an event handler
   *	@param {Boolean} isSvg	Are we currently diffing inside an svg?
   *	@private
   */
  function setAccessor(node, name, old, value, isSvg) {
    if (name === 'className') name = 'class';

    if (name === 'key') {
      // ignore
    } else if (name === 'ref') {
      applyRef(old, null);
      applyRef(value, node);
    } else if (name === 'class' && !isSvg) {
      node.className = value || '';
    } else if (name === 'style') {
      if (options.isWeb) {
        if (!value || typeof value === 'string' || typeof old === 'string') {
          node.style.cssText = value || '';
        }
        if (value && typeof value === 'object') {
          if (typeof old !== 'string') {
            for (var i in old) {
              if (!(i in value)) node.style[i] = '';
            }
          }
          for (var _i2 in value) {
            node.style[_i2] = typeof value[_i2] === 'number' && IS_NON_DIMENSIONAL.test(_i2) === false ? value[_i2] + 'px' : value[_i2];
          }
        }
      } else {
        var oldJson = old,
            currentJson = value;
        if (typeof old === 'string') {
          oldJson = parseCSSText(old);
        }
        if (typeof value == 'string') {
          currentJson = parseCSSText(value);
        }

        var result = {},
            changed = false;

        if (oldJson) {
          for (var key in oldJson) {
            if (typeof currentJson == 'object' && !(key in currentJson)) {
              result[key] = '';
              changed = true;
            }
          }

          for (var ckey in currentJson) {
            if (currentJson[ckey] !== oldJson[ckey]) {
              result[ckey] = currentJson[ckey];
              changed = true;
            }
          }

          if (changed) {
            node.setStyles(result);
          }
        } else {
          node.setStyles(currentJson);
        }
      }
    } else if (name === 'dangerouslySetInnerHTML') {
      if (value) node.innerHTML = value.__html || '';
    } else if (name[0] == 'o' && name[1] == 'n') {
      var useCapture = name !== (name = name.replace(/Capture$/, ''));
      name = name.toLowerCase().substring(2);
      if (value) {
        if (!old) {
          node.addEventListener(name, eventProxy, useCapture);
          if (name == 'tap') {
            node.addEventListener('touchstart', touchStart, useCapture);
            node.addEventListener('touchend', touchEnd, useCapture);
          }
        }
      } else {
        node.removeEventListener(name, eventProxy, useCapture);
        if (name == 'tap') {
          node.removeEventListener('touchstart', touchStart, useCapture);
          node.removeEventListener('touchend', touchEnd, useCapture);
        }
      }
  (node._listeners || (node._listeners = {}))[name] = value;
    } else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
      setProperty(node, name, value == null ? '' : value);
      if (value == null || value === false) node.removeAttribute(name);
    } else {
      var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
      if (value == null || value === false) {
        if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
      } else if (typeof value !== 'function') {
        if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
      }
    }
  }

  /** Attempt to set a DOM property to the given value.
   *	IE & FF throw for certain property-value combinations.
   */
  function setProperty(node, name, value) {
    try {
      node[name] = value;
    } catch (e) {}
  }

  /** Proxy an event to hooked event handlers
   *	@private
   */
  function eventProxy(e) {
    return this._listeners[e.type](options.event && options.event(e) || e);
  }

  function touchStart(e) {
    this.___touchX = e.touches[0].pageX;
    this.___touchY = e.touches[0].pageY;
    this.___scrollTop = document.body.scrollTop;
  }

  function touchEnd(e) {
    if (Math.abs(e.changedTouches[0].pageX - this.___touchX) < 30 && Math.abs(e.changedTouches[0].pageY - this.___touchY) < 30 && Math.abs(document.body.scrollTop - this.___scrollTop) < 30) {
      this.dispatchEvent(new CustomEvent('tap', { detail: e }));
    }
  }

  /**
   * Tween.js - Licensed under the MIT license
   * https://github.com/tweenjs/tween.js
   * ----------------------------------------------
   *
   * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
   * Thank you all, you're awesome!
   */

  var _Group = function _Group() {
    this._tweens = {};
    this._tweensAddedDuringUpdate = {};
  };

  _Group.prototype = {
    getAll: function getAll() {
      return Object.keys(this._tweens).map(function (tweenId) {
        return this._tweens[tweenId];
      }.bind(this));
    },

    removeAll: function removeAll() {
      this._tweens = {};
    },

    add: function add(tween) {
      this._tweens[tween.getId()] = tween;
      this._tweensAddedDuringUpdate[tween.getId()] = tween;
    },

    remove: function remove(tween) {
      delete this._tweens[tween.getId()];
      delete this._tweensAddedDuringUpdate[tween.getId()];
    },

    update: function update(time, preserve) {
      var tweenIds = Object.keys(this._tweens);

      if (tweenIds.length === 0) {
        return false;
      }

      time = time !== undefined ? time : TWEEN.now();

      // Tweens are updated in "batches". If you add a new tween during an update, then the
      // new tween will be updated in the next batch.
      // If you remove a tween during an update, it may or may not be updated. However,
      // if the removed tween was added during the current batch, then it will not be updated.
      while (tweenIds.length > 0) {
        this._tweensAddedDuringUpdate = {};

        for (var i = 0; i < tweenIds.length; i++) {
          var tween = this._tweens[tweenIds[i]];

          if (tween && tween.update(time) === false) {
            tween._isPlaying = false;

            if (!preserve) {
              delete this._tweens[tweenIds[i]];
            }
          }
        }

        tweenIds = Object.keys(this._tweensAddedDuringUpdate);
      }

      return true;
    }
  };

  var TWEEN = new _Group();

  TWEEN.Group = _Group;
  TWEEN._nextId = 0;
  TWEEN.nextId = function () {
    return TWEEN._nextId++;
  };

  // Include a performance.now polyfill.
  // In node.js, use process.hrtime.
  if (typeof window === 'undefined' && typeof process !== 'undefined') {
    if (typeof wx !== 'undefined') {
      TWEEN.now = Date.now;
    } else {
      TWEEN.now = function () {
        var time = process.hrtime();

        // Convert [seconds, nanoseconds] to milliseconds.
        return time[0] * 1000 + time[1] / 1000000;
      };
    }
  } else if (typeof window !== 'undefined' &&
  // In a browser, use window.performance.now if it is available.
  window.performance !== undefined && window.performance.now !== undefined) {
    // This must be bound, because directly assigning this function
    // leads to an invocation exception in Chrome.
    TWEEN.now = window.performance.now.bind(window.performance);
  } else if (Date.now !== undefined) {
    // Use Date.now if it is available.
    TWEEN.now = Date.now;
  } else {
    // Otherwise, use 'new Date().getTime()'.
    TWEEN.now = function () {
      return new Date().getTime();
    };
  }

  TWEEN.Tween = function (object, group) {
    this._object = object;
    this._valuesStart = {};
    this._valuesEnd = {};
    this._valuesStartRepeat = {};
    this._duration = 1000;
    this._repeat = 0;
    this._repeatDelayTime = undefined;
    this._yoyo = false;
    this._isPlaying = false;
    this._reversed = false;
    this._delayTime = 0;
    this._startTime = null;
    this._easingFunction = TWEEN.Easing.Linear.None;
    this._interpolationFunction = TWEEN.Interpolation.Linear;
    this._chainedTweens = [];
    this._onStartCallback = null;
    this._onStartCallbackFired = false;
    this._onUpdateCallback = null;
    this._onCompleteCallback = null;
    this._onStopCallback = null;
    this._group = group || TWEEN;
    this._id = TWEEN.nextId();

    this._paused = false;
    this._passTime = null;
  };

  TWEEN.Tween.prototype = {
    getId: function getId() {
      return this._id;
    },

    toggle: function toggle() {
      if (this._paused) {
        this.play();
      } else {
        this.pause();
      }
    },


    pause: function pause() {
      this._paused = true;
      var pauseTime = TWEEN.now();
      this._passTime = pauseTime - this._startTime;
    },

    play: function play() {
      this._paused = false;
      var nowTime = TWEEN.now();
      this._startTime = nowTime - this._passTime;
    },

    isPlaying: function isPlaying() {
      return this._isPlaying;
    },

    to: function to(properties, duration) {
      this._valuesEnd = properties;

      if (duration !== undefined) {
        this._duration = duration;
      }

      return this;
    },

    start: function start(time) {
      this._group.add(this);

      this._isPlaying = true;

      this._onStartCallbackFired = false;

      this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
      this._startTime += this._delayTime;

      for (var property in this._valuesEnd) {
        // Check if an Array was provided as property value
        if (this._valuesEnd[property] instanceof Array) {
          if (this._valuesEnd[property].length === 0) {
            continue;
          }

          // Create a local copy of the Array with the start value at the front
          this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
        }

        // If `to()` specifies a property that doesn't exist in the source object,
        // we should not set that property in the object
        if (this._object[property] === undefined) {
          continue;
        }

        // Save the starting value.
        this._valuesStart[property] = this._object[property];

        if (this._valuesStart[property] instanceof Array === false) {
          this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
        }

        this._valuesStartRepeat[property] = this._valuesStart[property] || 0;
      }

      return this;
    },

    stop: function stop() {
      if (!this._isPlaying) {
        return this;
      }

      this._group.remove(this);
      this._isPlaying = false;

      if (this._onStopCallback !== null) {
        this._onStopCallback(this._object);
      }

      this.stopChainedTweens();
      return this;
    },

    end: function end() {
      this.update(this._startTime + this._duration);
      return this;
    },

    stopChainedTweens: function stopChainedTweens() {
      for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
        this._chainedTweens[i].stop();
      }
    },

    group: function group(group) {
      this._group = group;
      return this;
    },

    delay: function delay(amount) {
      this._delayTime = amount;
      return this;
    },

    repeat: function repeat(times) {
      this._repeat = times;
      return this;
    },

    repeatDelay: function repeatDelay(amount) {
      this._repeatDelayTime = amount;
      return this;
    },

    yoyo: function yoyo(yy) {
      this._yoyo = yy;
      return this;
    },

    easing: function easing(eas) {
      this._easingFunction = eas;
      return this;
    },

    interpolation: function interpolation(inter) {
      this._interpolationFunction = inter;
      return this;
    },

    chain: function chain() {
      this._chainedTweens = arguments;
      return this;
    },

    onStart: function onStart(callback) {
      this._onStartCallback = callback;
      return this;
    },

    onUpdate: function onUpdate(callback) {
      this._onUpdateCallback = callback;
      return this;
    },

    onComplete: function onComplete(callback) {
      this._onCompleteCallback = callback;
      return this;
    },

    onStop: function onStop(callback) {
      this._onStopCallback = callback;
      return this;
    },

    update: function update(time) {
      if (this._paused) return true;
      var property;
      var elapsed;
      var value;

      if (time < this._startTime) {
        return true;
      }

      if (this._onStartCallbackFired === false) {
        if (this._onStartCallback !== null) {
          this._onStartCallback(this._object);
        }

        this._onStartCallbackFired = true;
      }

      elapsed = (time - this._startTime) / this._duration;
      elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;

      value = this._easingFunction(elapsed);

      for (property in this._valuesEnd) {
        // Don't update properties that do not exist in the source object
        if (this._valuesStart[property] === undefined) {
          continue;
        }

        var start = this._valuesStart[property] || 0;
        var end = this._valuesEnd[property];

        if (end instanceof Array) {
          this._object[property] = this._interpolationFunction(end, value);
        } else {
          // Parses relative end values with start as base (e.g.: +10, -3)
          if (typeof end === 'string') {
            if (end.charAt(0) === '+' || end.charAt(0) === '-') {
              end = start + parseFloat(end);
            } else {
              end = parseFloat(end);
            }
          }

          // Protect against non numeric properties.
          if (typeof end === 'number') {
            this._object[property] = start + (end - start) * value;
          }
        }
      }

      if (this._onUpdateCallback !== null) {
        this._onUpdateCallback(this._object);
      }

      if (elapsed === 1) {
        if (this._repeat > 0) {
          if (isFinite(this._repeat)) {
            this._repeat--;
          }

          // Reassign starting values, restart by making startTime = now
          for (property in this._valuesStartRepeat) {
            if (typeof this._valuesEnd[property] === 'string') {
              this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
            }

            if (this._yoyo) {
              var tmp = this._valuesStartRepeat[property];

              this._valuesStartRepeat[property] = this._valuesEnd[property];
              this._valuesEnd[property] = tmp;
            }

            this._valuesStart[property] = this._valuesStartRepeat[property];
          }

          if (this._yoyo) {
            this._reversed = !this._reversed;
          }

          if (this._repeatDelayTime !== undefined) {
            this._startTime = time + this._repeatDelayTime;
          } else {
            this._startTime = time + this._delayTime;
          }

          return true;
        } else {
          if (this._onCompleteCallback !== null) {
            this._onCompleteCallback(this._object);
          }

          for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            // Make the chained tweens start exactly at the time they should,
            // even if the `update()` method was called way past the duration of the tween
            this._chainedTweens[i].start(this._startTime + this._duration);
          }

          return false;
        }
      }

      return true;
    }
  };

  TWEEN.Easing = {

    Linear: {

      None: function None(k) {
        return k;
      }

    },

    Quadratic: {

      In: function In(k) {
        return k * k;
      },

      Out: function Out(k) {
        return k * (2 - k);
      },

      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k;
        }

        return -0.5 * (--k * (k - 2) - 1);
      }

    },

    Cubic: {

      In: function In(k) {
        return k * k * k;
      },

      Out: function Out(k) {
        return --k * k * k + 1;
      },

      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k * k;
        }

        return 0.5 * ((k -= 2) * k * k + 2);
      }

    },

    Quartic: {

      In: function In(k) {
        return k * k * k * k;
      },

      Out: function Out(k) {
        return 1 - --k * k * k * k;
      },

      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k * k * k;
        }

        return -0.5 * ((k -= 2) * k * k * k - 2);
      }

    },

    Quintic: {

      In: function In(k) {
        return k * k * k * k * k;
      },

      Out: function Out(k) {
        return --k * k * k * k * k + 1;
      },

      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k * k * k * k;
        }

        return 0.5 * ((k -= 2) * k * k * k * k + 2);
      }

    },

    Sinusoidal: {

      In: function In(k) {
        return 1 - Math.cos(k * Math.PI / 2);
      },

      Out: function Out(k) {
        return Math.sin(k * Math.PI / 2);
      },

      InOut: function InOut(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }

    },

    Exponential: {

      In: function In(k) {
        return k === 0 ? 0 : Math.pow(1024, k - 1);
      },

      Out: function Out(k) {
        return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
      },

      InOut: function InOut(k) {
        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        if ((k *= 2) < 1) {
          return 0.5 * Math.pow(1024, k - 1);
        }

        return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
      }

    },

    Circular: {

      In: function In(k) {
        return 1 - Math.sqrt(1 - k * k);
      },

      Out: function Out(k) {
        return Math.sqrt(1 - --k * k);
      },

      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return -0.5 * (Math.sqrt(1 - k * k) - 1);
        }

        return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
      }

    },

    Elastic: {

      In: function In(k) {
        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
      },

      Out: function Out(k) {
        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
      },

      InOut: function InOut(k) {
        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        k *= 2;

        if (k < 1) {
          return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
        }

        return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
      }

    },

    Back: {

      In: function In(k) {
        var s = 1.70158;

        return k * k * ((s + 1) * k - s);
      },

      Out: function Out(k) {
        var s = 1.70158;

        return --k * k * ((s + 1) * k + s) + 1;
      },

      InOut: function InOut(k) {
        var s = 1.70158 * 1.525;

        if ((k *= 2) < 1) {
          return 0.5 * (k * k * ((s + 1) * k - s));
        }

        return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
      }

    },

    Bounce: {

      In: function In(k) {
        return 1 - TWEEN.Easing.Bounce.Out(1 - k);
      },

      Out: function Out(k) {
        if (k < 1 / 2.75) {
          return 7.5625 * k * k;
        } else if (k < 2 / 2.75) {
          return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
        } else if (k < 2.5 / 2.75) {
          return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
        } else {
          return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
        }
      },

      InOut: function InOut(k) {
        if (k < 0.5) {
          return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
        }

        return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
      }

    }

  };

  TWEEN.Interpolation = {

    Linear: function Linear(v, k) {
      var m = v.length - 1;
      var f = m * k;
      var i = Math.floor(f);
      var fn = TWEEN.Interpolation.Utils.Linear;

      if (k < 0) {
        return fn(v[0], v[1], f);
      }

      if (k > 1) {
        return fn(v[m], v[m - 1], m - f);
      }

      return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },

    Bezier: function Bezier(v, k) {
      var b = 0;
      var n = v.length - 1;
      var pw = Math.pow;
      var bn = TWEEN.Interpolation.Utils.Bernstein;

      for (var i = 0; i <= n; i++) {
        b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
      }

      return b;
    },

    CatmullRom: function CatmullRom(v, k) {
      var m = v.length - 1;
      var f = m * k;
      var i = Math.floor(f);
      var fn = TWEEN.Interpolation.Utils.CatmullRom;

      if (v[0] === v[m]) {
        if (k < 0) {
          i = Math.floor(f = m * (1 + k));
        }

        return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
      } else {
        if (k < 0) {
          return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
        }

        if (k > 1) {
          return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
        }

        return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
      }
    },

    Utils: {

      Linear: function Linear(p0, p1, t) {
        return (p1 - p0) * t + p0;
      },

      Bernstein: function Bernstein(n, i) {
        var fc = TWEEN.Interpolation.Utils.Factorial;

        return fc(n) / fc(i) / fc(n - i);
      },

      Factorial: function () {
        var a = [1];

        return function (n) {
          var s = 1;

          if (a[n]) {
            return a[n];
          }

          for (var i = n; i > 1; i--) {
            s *= i;
          }

          a[n] = s;
          return s;
        };
      }(),

      CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
        var v0 = (p2 - p0) * 0.5;
        var v1 = (p3 - p1) * 0.5;
        var t2 = t * t;
        var t3 = t * t2;

        return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
      }

    }

  };

  /*!
   *  raf-interval v0.3.0 By dntzhang
   *  Github: https://github.com/dntzhang/raf-interval
   *  MIT Licensed.
   */

  if (!Date.now) {
    Date.now = function now() {
      return new Date().getTime();
    };
  }

  var queue = [],
      id = -1,
      ticking = false,
      tickId = null,
      now = Date.now,
      lastTime = 0,
      vendors = ['ms', 'moz', 'webkit', 'o'],
      x = 0,
      isWeapp = typeof wx !== 'undefined' && !wx.createCanvas,
      isWegame = typeof wx !== 'undefined' && wx.createCanvas,
      isBrowser = typeof window !== 'undefined';

  var raf = isBrowser ? window.requestAnimationFrame : null;
  var caf = isBrowser ? window.cancelAnimationFrame : null;

  function mockRaf(callback, element) {
    var currTime = now();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  }

  function mockCaf(id) {
    clearTimeout(id);
  }

  if (isBrowser) {
    window.setRafInterval = setRafInterval;
    window.clearRafInterval = clearRafInterval;

    for (; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!raf) {
      raf = mockRaf;
      caf = mockCaf;
      window.requestAnimationFrame = raf;
      window.cancelAnimationFrame = caf;
    }
  } else if (isWeapp) {
    raf = mockRaf;
    caf = mockCaf;
  } else if (isWegame) {
    raf = requestAnimationFrame;
    caf = cancelAnimationFrame;
  }

  function setRafInterval(fn, interval) {
    id++;
    queue.push({ id: id, fn: fn, interval: interval, lastTime: now() });
    if (!ticking) {
      var tick = function tick() {
        tickId = raf(tick);
        each(queue, function (item) {
          if (item.interval < 17 || now() - item.lastTime >= item.interval) {
            item.fn();
            item.lastTime = now();
          }
        });
      };
      ticking = true;
      tick();
    }
    return id;
  }

  function clearRafInterval(id) {
    var i = 0,
        len = queue.length;

    for (; i < len; i++) {
      if (id === queue[i].id) {
        queue.splice(i, 1);
        break;
      }
    }

    if (queue.length === 0) {
      caf(tickId);
      ticking = false;
    }
  }

  function each(arr, fn) {
    if (Array.prototype.forEach) {
      arr.forEach(fn);
    } else {
      var i = 0,
          len = arr.length;
      for (; i < len; i++) {
        fn(arr[i], i);
      }
    }
  }

  function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var To = function () {
    function To(element) {
      _classCallCheck$3(this, To);

      this.element = element;
      this.cmds = [];
      this.index = 0;
      this.tweens = [];
      this._pause = false;
      this.loop = setRafInterval(function () {
        TWEEN.update();
      }, 15);
      this.cycleCount = 0;
    }

    To.prototype.to = function to(target, duration, easing) {
      this.cmds.push(['to']);
      if (arguments.length !== 0) {
        for (var key in target) {
          this.set(key, target[key], duration || 0, easing);
        }
      }
      return this;
    };

    To.prototype.set = function set(prop, value, duration, easing) {
      this.cmds[this.cmds.length - 1].push([prop, [value, duration, easing]]);
      return this;
    };

    To.prototype.x = function x() {
      this.cmds[this.cmds.length - 1].push(['x', arguments]);
      return this;
    };

    To.prototype.y = function y() {
      this.cmds[this.cmds.length - 1].push(['y', arguments]);
      return this;
    };

    To.prototype.z = function z() {
      this.cmds[this.cmds.length - 1].push(['z', arguments]);
      return this;
    };

    To.prototype.rotation = function rotation() {
      this.cmds[this.cmds.length - 1].push(['rotation', arguments]);
      return this;
    };

    To.prototype.scaleX = function scaleX() {
      this.cmds[this.cmds.length - 1].push(['scaleX', arguments]);
      return this;
    };

    To.prototype.scaleY = function scaleY() {
      this.cmds[this.cmds.length - 1].push(['scaleY', arguments]);
      return this;
    };

    To.prototype.skewX = function skewX() {
      this.cmds[this.cmds.length - 1].push(['skewX', arguments]);
      return this;
    };

    To.prototype.skewY = function skewY() {
      this.cmds[this.cmds.length - 1].push(['skewY', arguments]);
      return this;
    };

    To.prototype.originX = function originX() {
      this.cmds[this.cmds.length - 1].push(['originX', arguments]);
      return this;
    };

    To.prototype.originY = function originY() {
      this.cmds[this.cmds.length - 1].push(['originY', arguments]);
      return this;
    };

    To.prototype.alpha = function alpha() {
      this.cmds[this.cmds.length - 1].push(['alpha', arguments]);
      return this;
    };

    To.prototype.begin = function begin(fn) {
      this.cmds[this.cmds.length - 1].begin = fn;
      return this;
    };

    To.prototype.progress = function progress(fn) {
      this.cmds[this.cmds.length - 1].progress = fn;
      return this;
    };

    To.prototype.end = function end(fn) {
      this.cmds[this.cmds.length - 1].end = fn;
      return this;
    };

    To.prototype.wait = function wait() {
      this.cmds.push(['wait', arguments]);
      return this;
    };

    To.prototype.then = function then() {
      this.cmds.push(['then', arguments]);
      return this;
    };

    To.prototype.cycle = function cycle() {
      this.cmds.push(['cycle', arguments]);
      return this;
    };

    To.prototype.start = function start() {
      if (this._pause) return;
      var len = this.cmds.length;
      if (this.index < len) {
        this.exec(this.cmds[this.index], this.index === len - 1);
      } else {
        clearRafInterval(this.loop);
      }
      return this;
    };

    To.prototype.pause = function pause() {
      this._pause = true;
      for (var i = 0, len = this.tweens.length; i < len; i++) {
        this.tweens[i].pause();
      }
      if (this.currentTask === 'wait') {
        this.timeout -= new Date() - this.currentTaskBegin;
        this.currentTaskBegin = new Date();
      }
    };

    To.prototype.toggle = function toggle() {
      if (this._pause) {
        this.play();
      } else {
        this.pause();
      }
    };

    To.prototype.play = function play() {
      this._pause = false;
      for (var i = 0, len = this.tweens.length; i < len; i++) {
        this.tweens[i].play();
      }
      var self = this;
      if (this.currentTask === 'wait') {
        setTimeout(function () {
          if (self._pause) return;
          self.index++;
          self.start();
          if (self.index === self.cmds.length && self.complete) self.complete();
        }, this.timeout);
      }
    };

    To.prototype.stop = function stop() {
      for (var i = 0, len = this.tweens.length; i < len; i++) {
        this.tweens[i].stop();
      }
      this.cmds.length = 0;
    };

    To.prototype.animate = function animate(name) {
      this.cmds = this.cmds.concat(To.animationMap[name] || []);
      return this;
    };

    To.prototype.exec = function exec(cmd, last) {
      var len = cmd.length,
          self = this;
      this.currentTask = cmd[0];
      switch (this.currentTask) {
        case 'to':
          self.stepCompleteCount = 0;
          for (var i = 1; i < len; i++) {
            var task = cmd[i];
            var ease = task[1][2];
            var target = {};
            var prop = task[0];
            target[prop] = task[1][0];

            var t = new TWEEN.Tween(this.element).to(target, task[1][1]).onStart(function () {
              if (cmd.begin) cmd.begin.call(self.element, self.element);
            }).onUpdate(function () {
              if (cmd.progress) cmd.progress.call(self.element, self.element);
              // self.element[prop] = this[prop];
            }).easing(ease || TWEEN.Easing.Linear.None).onComplete(function () {
              self.stepCompleteCount++;
              if (self.stepCompleteCount === len - 1) {
                if (cmd.end) cmd.end.call(self.element, self.element);
                if (last && self.complete) self.complete();
                self.index++;
                self.start();
              }
            }).start();
            this.tweens.push(t);
          }
          break;
        case 'wait':
          this.currentTaskBegin = new Date();
          this.timeout = cmd[1][0];
          setTimeout(function () {
            if (self._pause) return;
            self.index++;
            self.start();
            if (cmd.end) cmd.end.call(self.element, self.element);
            if (last && self.complete) self.complete();
          }, cmd[1][0]);
          break;
        case 'then':
          var arg = cmd[1][0];
          arg.index = 0;
          arg.complete = function () {
            self.index++;
            self.start();
            if (last && self.complete) self.complete();
          };
          arg.start();
          break;
        case 'cycle':
          var count = cmd[1][1];
          if (count === undefined) {
            self.index = cmd[1][0] || 0;
            self.start();
          } else {
            if (count && self.cycleCount === count) {
              self.index++;
              self.start();
              if (last && self.complete) self.complete();
            } else {
              self.cycleCount++;
              self.index = cmd[1][0];
              self.start();
            }
          }
          break;
      }
    };

    return To;
  }();

  To.get = function (element) {
    var to = new To(element);
    return to;
  };

  To.animationMap = {};
  To.extend = function (animationName, cmds) {
    To.animationMap[animationName] = cmds;
  };

  To.extend('rubber', [['to', ['scaleX', {
    '0': 1.25,
    '1': 300
  }], ['scaleY', {
    '0': 0.75,
    '1': 300
  }]], ['to', ['scaleX', {
    '0': 0.75,
    '1': 100
  }], ['scaleY', {
    '0': 1.25,
    '1': 100
  }]], ['to', ['scaleX', {
    '0': 1.15,
    '1': 100
  }], ['scaleY', {
    '0': 0.85,
    '1': 100
  }]], ['to', ['scaleX', {
    '0': 0.95,
    '1': 150
  }], ['scaleY', {
    '0': 1.05,
    '1': 150
  }]], ['to', ['scaleX', {
    '0': 1.05,
    '1': 100
  }], ['scaleY', {
    '0': 0.95,
    '1': 100
  }]], ['to', ['scaleX', {
    '0': 1,
    '1': 250
  }], ['scaleY', {
    '0': 1,
    '1': 250
  }]]]);

  To.extend('bounceIn', [['to', ['scaleX', {
    '0': 0,
    '1': 0
  }], ['scaleY', {
    '0': 0,
    '1': 0
  }]], ['to', ['scaleX', {
    '0': 1.35,
    '1': 200
  }], ['scaleY', {
    '0': 1.35,
    '1': 200
  }]], ['to', ['scaleX', {
    '0': 0.9,
    '1': 100
  }], ['scaleY', {
    '0': 0.9,
    '1': 100
  }]], ['to', ['scaleX', {
    '0': 1.1,
    '1': 100
  }], ['scaleY', {
    '0': 1.1,
    '1': 100
  }]], ['to', ['scaleX', {
    '0': 0.95,
    '1': 100
  }], ['scaleY', {
    '0': 0.95,
    '1': 100
  }]], ['to', ['scaleX', {
    '0': 1,
    '1': 100
  }], ['scaleY', {
    '0': 1,
    '1': 100
  }]]]);

  To.extend('flipInX', [['to', ['rotateX', {
    '0': -90,
    '1': 0
  }]], ['to', ['rotateX', {
    '0': 20,
    '1': 300
  }]], ['to', ['rotateX', {
    '0': -20,
    '1': 300
  }]], ['to', ['rotateX', {
    '0': 10,
    '1': 300
  }]], ['to', ['rotateX', {
    '0': -5,
    '1': 300
  }]], ['to', ['rotateX', {
    '0': 0,
    '1': 300
  }]]]);

  To.extend('zoomOut', [['to', ['scaleX', {
    '0': 0,
    '1': 400
  }], ['scaleY', {
    '0': 0,
    '1': 400
  }]]]);

  var wegameCanvas = null;
  if (typeof wx !== 'undefined' && wx.createCanvas) {
    wegameCanvas = wx.createCanvas();
  }

  var wegameCanvas$1 = wegameCanvas;

  function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var DEG_TO_RAD = 0.017453292519943295;
  var PI_2 = Math.PI * 2;

  var Matrix2D = function () {
    function Matrix2D(a, b, c, d, tx, ty) {
      _classCallCheck$4(this, Matrix2D);

      this.a = a == null ? 1 : a;
      this.b = b || 0;
      this.c = c || 0;
      this.d = d == null ? 1 : d;
      this.tx = tx || 0;
      this.ty = ty || 0;
      return this;
    }

    Matrix2D.prototype.identity = function identity() {
      this.a = this.d = 1;
      this.b = this.c = this.tx = this.ty = 0;
      return this;
    };

    Matrix2D.prototype.appendTransform = function appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, originX, originY) {
      if (rotation % 360) {
        var r = rotation * DEG_TO_RAD;
        var cos = Math.cos(r);
        var sin = Math.sin(r);
      } else {
        cos = 1;
        sin = 0;
      }
      if (skewX || skewY) {
        skewX *= DEG_TO_RAD;
        skewY *= DEG_TO_RAD;
        this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
        this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
      } else {
        this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
      }
      if (originX || originY) {
        this.tx -= originX * this.a + originY * this.c;
        this.ty -= originX * this.b + originY * this.d;
      }
      return this;
    };

    Matrix2D.prototype.append = function append(a, b, c, d, tx, ty) {
      var a1 = this.a;
      var b1 = this.b;
      var c1 = this.c;
      var d1 = this.d;
      this.a = a * a1 + b * c1;
      this.b = a * b1 + b * d1;
      this.c = c * a1 + d * c1;
      this.d = c * b1 + d * d1;
      this.tx = tx * a1 + ty * c1 + this.tx;
      this.ty = tx * b1 + ty * d1 + this.ty;
      return this;
    };

    Matrix2D.prototype.initialize = function initialize(a, b, c, d, tx, ty) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.tx = tx;
      this.ty = ty;
      return this;
    };

    Matrix2D.prototype.setValues = function setValues(a, b, c, d, tx, ty) {
      this.a = a == null ? 1 : a;
      this.b = b || 0;
      this.c = c || 0;
      this.d = d == null ? 1 : d;
      this.tx = tx || 0;
      this.ty = ty || 0;
      return this;
    };

    Matrix2D.prototype.invert = function invert() {
      var a1 = this.a;
      var b1 = this.b;
      var c1 = this.c;
      var d1 = this.d;
      var tx1 = this.tx;
      var n = a1 * d1 - b1 * c1;

      this.a = d1 / n;
      this.b = -b1 / n;
      this.c = -c1 / n;
      this.d = a1 / n;
      this.tx = (c1 * this.ty - d1 * tx1) / n;
      this.ty = -(a1 * this.ty - b1 * tx1) / n;
      return this;
    };

    Matrix2D.prototype.copy = function copy(matrix) {
      return this.setValues(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    };

    return Matrix2D;
  }();

  Matrix2D.decompose = function (a, b, c, d, tx, ty, transform) {
    var skewX = -Math.atan2(-c, d);
    var skewY = Math.atan2(b, a);

    var delta = Math.abs(skewX + skewY);

    if (delta < 0.00001 || Math.abs(PI_2 - delta) < 0.00001) {
      transform.rotation = skewY;

      if (a < 0 && d >= 0) {
        transform.rotation += transform.rotation <= 0 ? Math.PI : -Math.PI;
      }

      transform.skewX = transform.skewY = 0;
    } else {
      transform.rotation = 0;
      transform.skewX = skewX;
      transform.skewY = skewY;
    }

    // next set scale
    transform.scaleX = Math.sqrt(a * a + b * b);
    transform.scaleY = Math.sqrt(c * c + d * d);

    // next set position
    transform.x = tx;
    transform.y = ty;
  };

  var option = {
      stagePropagationStopped: {}
  };

  function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var EventDispatcher = function () {
    function EventDispatcher() {
      _classCallCheck$5(this, EventDispatcher);

      this._listeners = null;
      this._captureListeners = null;
    }

    EventDispatcher.prototype.addEventListener = function addEventListener(type, listener, useCapture) {
      var listeners;
      if (useCapture) {
        listeners = this._captureListeners = this._captureListeners || {};
      } else {
        listeners = this._listeners = this._listeners || {};
      }
      var arr = listeners[type];
      if (arr) {
        this.removeEventListener(type, listener, useCapture);
      }
      arr = listeners[type]; // remove may have deleted the array
      if (!arr) {
        listeners[type] = [listener];
      } else {
        arr.push(listener);
      }
      return listener;
    };

    EventDispatcher.prototype.removeEventListener = function removeEventListener(type, listener, useCapture) {
      var listeners = useCapture ? this._captureListeners : this._listeners;
      if (!listeners) {
        return;
      }
      var arr = listeners[type];
      if (!arr) {
        return;
      }

      arr.every(function (item, index) {
        if (item === listener) {
          arr.splice(index, 1);
          return false;
        }
        return true;
      });
    };

    EventDispatcher.prototype.on = function on(type, listener, useCapture) {
      this.addEventListener(type, listener, useCapture);
    };

    EventDispatcher.prototype.off = function off(type, listener, useCapture) {
      this.removeEventListener(type, listener, useCapture);
    };

    EventDispatcher.prototype.dispatchEvent = function dispatchEvent(evt) {
      option.stagePropagationStopped[evt.type] = false;

      var top = this,
          list = [top];
      while (top.parent) {
        list.push(top = top.parent);
      }
      var i,
          l = list.length;

      // capture & atTarget
      for (i = l - 1; i >= 0 && !evt.propagationStopped; i--) {
        list[i]._dispatchEvent(evt, 0);
      }
      // bubbling
      for (i = 0; i < l && !evt.propagationStopped; i++) {
        list[i]._dispatchEvent(evt, 1);
      }
    };

    EventDispatcher.prototype._dispatchEvent = function _dispatchEvent(evt, type) {
      var _this = this;

      evt.target = this;
      if (this._captureListeners && type === 0) {
        var cls = this._captureListeners[evt.type];
        cls && cls.forEach(function (fn) {
          fn.call(_this, evt);
        });
      }

      if (this._listeners && type === 1) {
        var ls = this._listeners[evt.type];
        ls && ls.forEach(function (fn) {
          fn.call(_this, evt);
        });
      }
    };

    return EventDispatcher;
  }();

  var UID = {};

  UID._nextID = 0;

  UID.get = function () {
    return UID._nextID++;
  };

  function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var DisplayObject = function (_EventDispatcher) {
    _inherits(DisplayObject, _EventDispatcher);

    function DisplayObject() {
      _classCallCheck$6(this, DisplayObject);

      var _this = _possibleConstructorReturn(this, _EventDispatcher.call(this));

      _this.alpha = _this.complexAlpha = _this.scaleX = _this.scaleY = 1;
      _this.x = _this.y = _this.rotation = _this.skewX = _this.skewY = _this.originX = _this.originY = 0;
      _this.cursor = null;
      _this.visible = true;
      _this._matrix = new Matrix2D();
      _this._hitMatrix = new Matrix2D();
      _this.id = UID.get();
      _this.clipGraphics = null;
      _this.clipRuleNonzero = true;
      _this.fixed = false;
      _this.shadow = null;
      _this.compositeOperation = null;
      _this.absClipGraphics = null;
      _this.absClipRuleNonzero = true;
      _this.cacheUpdating = false;

      try {
        Object.defineProperties(_this, {
          stage: { get: _this._getStage },
          scale: {
            get: function get() {
              return this.scaleX;
            },
            set: function set(scale) {
              this.scaleX = this.scaleY = scale;
            }
          }
        });
      } catch (e) {}

      _this.hitBox = null;
      return _this;
    }

    DisplayObject.prototype.isVisible = function isVisible() {
      return this.visible && this.alpha > 0 && this.scaleX !== 0 && this.scaleY !== 0;
    };

    DisplayObject.prototype.initAABB = function initAABB() {

      if ((this.width === undefined || this.height === undefined) && !this.hitBox) {
        return;
      }

      var x = void 0,
          y = void 0,
          width = this.width,
          height = this.height,
          mtx = this._matrix,
          tx = mtx.tx,
          ty = mtx.ty;

      if (this.hitBox) {
        width = this.hitBox[2];
        height = this.hitBox[3];
        tx = this.hitBox[0] * mtx.a + this.hitBox[1] * mtx.c + tx;
        ty = this.hitBox[0] * mtx.b + this.hitBox[1] * mtx.d + ty;
      }

      var xA = width * mtx.a,
          xB = width * mtx.b,
          yC = height * mtx.c,
          yD = height * mtx.d,
          minX = tx,
          maxX = tx,
          minY = ty,
          maxY = ty;

      if ((x = xA + tx) < minX) {
        minX = x;
      } else if (x > maxX) {
        maxX = x;
      }
      if ((x = xA + yC + tx) < minX) {
        minX = x;
      } else if (x > maxX) {
        maxX = x;
      }
      if ((x = yC + tx) < minX) {
        minX = x;
      } else if (x > maxX) {
        maxX = x;
      }
      if ((y = xB + ty) < minY) {
        minY = y;
      } else if (y > maxY) {
        maxY = y;
      }
      if ((y = xB + yD + ty) < minY) {
        minY = y;
      } else if (y > maxY) {
        maxY = y;
      }
      if ((y = yD + ty) < minY) {
        minY = y;
      } else if (y > maxY) {
        maxY = y;
      }
      this.AABB = [minX, minY, maxX - minX, maxY - minY];
      this.rectPoints = [{
        x: tx,
        y: ty
      }, {
        x: xA + tx,
        y: xB + ty
      }, {
        x: xA + yC + tx,
        y: xB + yD + ty
      }, {
        x: yC + tx,
        y: yD + ty
      }];
    };

    DisplayObject.prototype.destroy = function destroy() {
      this.parent.remove(this);
    };

    DisplayObject.prototype.hover = function hover(over, out, move) {
      this.on('mouseover', over);
      this.on('mouseout', out);
      move && this.on('mousemove', move);
    };

    // https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clip


    DisplayObject.prototype.clip = function clip(graphics, notClipRuleNonzero) {
      this.clipGraphics = graphics;
      this.clipRuleNonzero = !notClipRuleNonzero;
    };

    DisplayObject.prototype.unclip = function unclip() {
      this.clipGraphics = null;
    };

    DisplayObject.prototype.absClip = function absClip(graphics, notClipRuleNonzero) {
      this.absClipGraphics = graphics;
      this.absClipRuleNonzero = !notClipRuleNonzero;
    };

    DisplayObject.prototype.unAbsClip = function unAbsClip() {
      this.absClipGraphics = null;
    };

    DisplayObject.prototype.cache = function cache(x, y, width, height, scale, cacheUpdating) {
      this._cacheData = {
        x: x || 0,
        y: y || 0,
        width: width || this.width,
        height: height || this.height,
        scale: scale || 1
      };
      this.cacheUpdating = cacheUpdating;
      if (!this.cacheCanvas) {
        if (typeof wx !== 'undefined' && wx.createCanvas) {
          this.cacheCanvas = wx.createCanvas();
        } else {
          this.cacheCanvas = document.createElement('canvas');
        }
        this.cacheCtx = this.cacheCanvas.getContext('2d');
      }
      this.cacheCanvas.width = this._cacheData.width * this._cacheData.scale;
      this.cacheCanvas.height = this._cacheData.height * this._cacheData.scale;

      // debug cache canvas
      // this.cacheCtx.fillRect(0,0,1000,1000)
      this._readyToCache = true;
    };

    DisplayObject.prototype.uncache = function uncache() {
      this.cacheCanvas = null;
    };

    DisplayObject.prototype.filter = function filter(filterName, filterBox) {
      filterBox = Object.assign({}, {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
      }, filterBox);
      this.cache(filterBox.x, filterBox.y, filterBox.width, filterBox.height);
      this._readyToFilter = true;
      this._filterName = filterName;
    };

    DisplayObject.prototype.setTransform = function setTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, originX, originY) {
      this.x = x || 0;
      this.y = y || 0;
      this.scaleX = scaleX == null ? 1 : scaleX;
      this.scaleY = scaleY == null ? 1 : scaleY;
      this.rotation = rotation || 0;
      this.skewX = skewX || 0;
      this.skewY = skewY || 0;
      this.originX = originX || 0;
      this.originY = originY || 0;
    };

    DisplayObject.prototype.setMatrix = function setMatrix(a, b, c, d, tx, ty) {
      Matrix2D.decompose(a, b, c, d, tx, ty, this);
    };

    DisplayObject.prototype.unfilter = function unfilter() {
      this.uncache();
    };

    DisplayObject.prototype._getStage = function _getStage() {
      var o = this;
      while (o.parent) {
        o = o.parent;
      }
      if (o.___instanceof === 'Stage') {
        return o;
      }
      return null;
    };

    return DisplayObject;
  }(EventDispatcher);

  function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Group = function (_DisplayObject) {
    _inherits$1(Group, _DisplayObject);

    function Group(data) {
      _classCallCheck$7(this, Group);

      var _this = _possibleConstructorReturn$1(this, _DisplayObject.call(this, data));

      _this.children = [];
      return _this;
    }

    Group.prototype.add = function add(child) {
      var len = arguments.length;

      for (var i = 0; i < len; i++) {
        var c = arguments[i];
        var parent = c.parent;
        if (parent) {
          parent.removeChildAt(parent.children.indexOf(c));
        }
        this.children.push(c);
        c.parent = this;
      }
    };

    Group.prototype.addChildAt = function addChildAt(child, index) {
      var par = child.parent;
      par && par.removeChildAt(par.children.indexOf(child));
      child.parent = this;
      this.children.splice(index, 0, child);
    };

    Group.prototype.removeChildAt = function removeChildAt(index) {
      var child = this.children[index];
      if (child) {
        child.parent = null;
      }
      this.children.splice(index, 1);
    };

    Group.prototype.replace = function replace(current, pre) {
      var index = pre.parent.children.indexOf(pre);
      this.removeChildAt(index);
      this.addChildAt(current, index);
    };

    Group.prototype.remove = function remove(child) {
      var len = arguments.length;
      var cLen = this.children.length;

      for (var i = 0; i < len; i++) {
        for (var j = 0; j < cLen; j++) {
          if (child.id === this.children[j].id) {
            child.parent = null;
            this.children.splice(j, 1);
            j--;
            cLen--;
          }
        }
      }
    };

    Group.prototype.empty = function empty() {
      this.children.forEach(function (child) {
        child.parent = null;
      });
      this.children.length = 0;
    };

    Group.prototype.destroy = function destroy() {
      this.empty();
      // Stage does not have a parent
      this.parent && _DisplayObject.prototype.destroy.call(this);
    };

    return Group;
  }(DisplayObject);

  function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var assMap = {
    fillStyle: true,
    strokeStyle: true,
    lineWidth: true,
    lineCap: true,
    lineDashOffset: true,
    lineJoin: true,
    miterLimit: true
  };

  var Graphics = function (_DisplayObject) {
    _inherits$2(Graphics, _DisplayObject);

    function Graphics() {
      _classCallCheck$8(this, Graphics);

      var _this = _possibleConstructorReturn$2(this, _DisplayObject.call(this));

      _this.cmds = [];
      _this.currentGradient = null;
      return _this;
    }

    Graphics.prototype.clearRect = function clearRect() {
      this.cmds.push(['clearRect', arguments]);
      return this;
    };

    Graphics.prototype.rect = function rect() {
      this.cmds.push(['rect', arguments]);
      return this;
    };

    Graphics.prototype.clear = function clear() {
      this.cmds.length = 0;
      return this;
    };

    Graphics.prototype.setLineDash = function setLineDash() {
      this.cmds.push(['setLineDash', arguments]);
      return this;
    };

    Graphics.prototype.strokeRect = function strokeRect() {
      this.cmds.push(['strokeRect', arguments]);
      return this;
    };

    Graphics.prototype.fillRect = function fillRect() {
      this.cmds.push(['fillRect', arguments]);
      return this;
    };

    Graphics.prototype.beginPath = function beginPath() {
      this.cmds.push(['beginPath', arguments]);
      return this;
    };

    Graphics.prototype.arc = function arc() {
      this.cmds.push(['arc', arguments]);
      return this;
    };

    Graphics.prototype.closePath = function closePath() {
      this.cmds.push(['closePath', arguments]);
      return this;
    };

    Graphics.prototype.fillStyle = function fillStyle() {
      this.cmds.push(['fillStyle', arguments]);
      return this;
    };

    Graphics.prototype.fill = function fill() {
      this.cmds.push(['fill', arguments]);
      return this;
    };

    Graphics.prototype.strokeStyle = function strokeStyle() {
      this.cmds.push(['strokeStyle', arguments]);
      return this;
    };

    Graphics.prototype.lineWidth = function lineWidth() {
      this.cmds.push(['lineWidth', arguments]);
      return this;
    };

    Graphics.prototype.lineCap = function lineCap() {
      this.cmds.push(['lineCap', arguments]);
      return this;
    };

    Graphics.prototype.lineDashOffset = function lineDashOffset() {
      this.cmds.push(['lineDashOffset', arguments]);
      return this;
    };

    Graphics.prototype.lineJoin = function lineJoin() {
      this.cmds.push(['lineJoin', arguments]);
      return this;
    };

    Graphics.prototype.miterLimit = function miterLimit() {
      this.cmds.push(['miterLimit', arguments]);
      return this;
    };

    Graphics.prototype.stroke = function stroke() {
      this.cmds.push(['stroke', arguments]);
      return this;
    };

    Graphics.prototype.moveTo = function moveTo() {
      this.cmds.push(['moveTo', arguments]);
      return this;
    };

    Graphics.prototype.lineTo = function lineTo() {
      this.cmds.push(['lineTo', arguments]);
      return this;
    };

    Graphics.prototype.bezierCurveTo = function bezierCurveTo() {
      this.cmds.push(['bezierCurveTo', arguments]);
      return this;
    };

    Graphics.prototype.quadraticCurveTo = function quadraticCurveTo() {
      this.cmds.push(['quadraticCurveTo', arguments]);
      return this;
    };

    Graphics.prototype.createRadialGradient = function createRadialGradient() {
      this.cmds.push(['createRadialGradient', arguments]);
      return this;
    };

    Graphics.prototype.createLinearGradient = function createLinearGradient() {
      this.cmds.push(['createLinearGradient', arguments]);
      return this;
    };

    Graphics.prototype.addColorStop = function addColorStop() {
      this.cmds.push(['addColorStop', arguments]);
      return this;
    };

    Graphics.prototype.fillGradient = function fillGradient() {
      this.cmds.push(['fillGradient']);
      return this;
    };

    Graphics.prototype.arcTo = function arcTo() {
      this.cmds.push(['arcTo', arguments]);
      return this;
    };

    Graphics.prototype.render = function render(ctx) {
      var _this2 = this;

      this.cmds.forEach(function (cmd) {
        var methodName = cmd[0];
        if (assMap[methodName]) {
          ctx[methodName] = cmd[1][0];
        } else if (methodName === 'addColorStop') {
          _this2.currentGradient && _this2.currentGradient.addColorStop(cmd[1][0], cmd[1][1]);
        } else if (methodName === 'fillGradient') {
          ctx.fillStyle = _this2.currentGradient;
        } else {
          var result = ctx[methodName].apply(ctx, Array.prototype.slice.call(cmd[1]));
          if (methodName === 'createRadialGradient' || methodName === 'createLinearGradient') {
            _this2.currentGradient = result;
          }
        }
      });
    };

    return Graphics;
  }(DisplayObject);

  function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Render = function () {
    function Render() {
      _classCallCheck$9(this, Render);
    }

    Render.prototype.render = function render() {};

    Render.prototype.renderGraphics = function renderGraphics() {};

    Render.prototype.clear = function clear() {};

    return Render;
  }();

  function getImageInWx(img, callback) {
    if (img.indexOf('https://') === -1 && img.indexOf('http://') === -1 || img.indexOf('http://tmp/') === 0) {
      wx.getImageInfo({
        src: img,
        success: function success(info) {
          callback({
            img: img,
            width: info.width,
            height: info.height
          });
        }
      });
    } else {
      wx.downloadFile({
        url: img,
        success: function success(res) {
          if (res.statusCode === 200) {
            wx.getImageInfo({
              src: res.tempFilePath,
              success: function success(info) {
                callback({
                  img: res.tempFilePath,
                  width: info.width,
                  height: info.height
                });
              }
            });
          }
        }
      });
    }
  }

  function getGlobal$1() {
    if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
      if (typeof self !== 'undefined') {
        return self;
      } else if (typeof window !== 'undefined') {
        return window;
      } else if (typeof global !== 'undefined') {
        return global;
      }
      return function () {
        return this;
      }();
    }
    return global;
  }

  var root = getGlobal$1();

  var util = {
    getImageInWx: getImageInWx,
    root: root,
    isWeapp: typeof wx !== 'undefined' && !wx.createCanvas,
    isWegame: typeof wx !== 'undefined' && wx.createCanvas
  };

  function _classCallCheck$10(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Bitmap = function (_DisplayObject) {
    _inherits$3(Bitmap, _DisplayObject);

    function Bitmap(img, onLoad) {
      _classCallCheck$10(this, Bitmap);

      var _this = _possibleConstructorReturn$3(this, _DisplayObject.call(this));

      if (typeof img === 'string') {
        if (Bitmap.cache[img]) {
          if (util.isWeapp) {
            _this.img = Bitmap.cache[img].img;
            _this.rect = [0, 0, Bitmap.cache[img].width, Bitmap.cache[img].height];
            _this.width = _this.rect[2];
            _this.height = _this.rect[3];
          } else {
            _this.img = Bitmap.cache[img];
            _this.rect = [0, 0, _this.img.width, _this.img.height];
            _this.width = _this.img.width;
            _this.height = _this.img.height;
          }
          onLoad && onLoad.call(_this);
        } else if (util.isWeapp) {
          util.getImageInWx(img, function (result) {
            _this.img = result.img;
            if (!_this.rect) {
              _this.rect = [0, 0, result.width, result.height];
            }
            _this.width = result.width;
            _this.height = result.height;
            onLoad && onLoad.call(_this);
            Bitmap.cache[img] = result;
          });
        } else {
          _this.img = util.isWegame ? wx.createImage() : new window.Image();

          _this.img.onload = function () {

            if (!_this.rect) {
              _this.rect = [0, 0, _this.img.width, _this.img.height];
            }
            _this.width = _this.img.width;
            _this.height = _this.img.height;
            onLoad && onLoad.call(_this);
            Bitmap.cache[img] = _this.img;
          };
          _this.img.src = img;
        }
      } else {
        _this.img = img;
        _this.rect = [0, 0, img.width, img.height];
        _this.width = img.width;
        _this.height = img.height;
        Bitmap.cache[img.src] = img;
      }
      return _this;
    }

    Bitmap.prototype.clone = function clone() {
      // 复制完img宽度0？？所以直接传字符串
      var bitmap = new Bitmap(typeof this.img === 'string' ? this.img : this.img.src);
      bitmap.x = this.x;
      bitmap.y = this.y;
      bitmap.scaleX = this.scaleX;
      bitmap.scaleY = this.scaleY;
      bitmap.rotation = this.rotation;
      bitmap.skewX = this.skewX;
      bitmap.skewY = this.skewY;
      bitmap.originX = this.originX;
      bitmap.originY = this.originY;
      bitmap.width = this.width;
      bitmap.height = this.height;
      bitmap.cursor = this.cursor;

      return bitmap;
    };

    return Bitmap;
  }(DisplayObject);

  Bitmap.cache = {};

  function _classCallCheck$11(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Sprite = function (_DisplayObject) {
    _inherits$4(Sprite, _DisplayObject);

    function Sprite(option) {
      _classCallCheck$11(this, Sprite);

      var _this = _possibleConstructorReturn$4(this, _DisplayObject.call(this));

      _this.option = option;
      var len = _this.option.imgs.length;
      var count = 0;
      var firstImg = _this.option.imgs[0];
      _this.imgMap = {};

      if (util.isWeapp) {
        _this.option.imgs.forEach(function (img) {
          util.getImageInWx(img, function (result) {
            _this.imgMap[img] = result.img;
            count++;
            if (count === len) {
              _this.img = _this.imgMap[firstImg];
              _this.rect = [0, 0, 0, 0];
            }
          });
        });
      } else {
        if (typeof firstImg === 'string') {
          var _len = _this.option.imgs.length;
          var loadedCount = 0;
          _this.option.imgs.forEach(function (src) {
            if (Bitmap.cache[src]) {
              _this.imgMap[src] = Bitmap.cache[src];
              loadedCount++;
              if (loadedCount === _len) {
                _this.img = _this.imgMap[firstImg];
                _this.rect = [0, 0, 0, 0];
              }
            } else {
              var img = util.isWegame ? wx.createImage() : new window.Image();
              img.onload = function () {
                _this.imgMap[src] = img;
                loadedCount++;
                if (loadedCount === _len) {
                  _this.img = _this.imgMap[firstImg];
                  _this.rect = [0, 0, 0, 0];
                }
                Bitmap.cache[src] = img;
              };
              img.src = src;
            }
          });
        } else if (firstImg instanceof Bitmap) {
          _this.rect = [0, 0, 0, 0];
          _this.img = firstImg.img;
        } else {
          _this.rect = [0, 0, 0, 0];
          _this.img = firstImg;
        }
      }

      _this.x = option.x || 0;
      _this.y = option.y || 0;
      _this.currentFrameIndex = 0;
      _this.animationFrameIndex = 0;
      _this.currentAnimation = option.currentAnimation || null;

      _this.interval = 1e3 / option.framerate;

      _this.paused = false;
      _this.animationEnd = option.animationEnd || function () {};
      if (_this.currentAnimation) {
        if (option.playOnce) {
          _this.gotoAndPlayOnce(_this.currentAnimation);
        } else {
          _this.gotoAndPlay(_this.currentAnimation);
        }
      }
      return _this;
    }

    Sprite.prototype.play = function play() {
      this.paused = false;
    };

    Sprite.prototype.pause = function pause() {
      this.paused = true;
    };

    Sprite.prototype.reset = function reset() {
      this.currentFrameIndex = 0;
      this.animationFrameIndex = 0;
    };

    Sprite.prototype.updateFrame = function updateFrame() {
      if (!this.paused) {
        var opt = this.option;
        this.dt = Date.now() - this.startTime;
        var frames = opt.animations[this.currentAnimation].frames;
        var len = frames.length;
        var index = Math.floor(this.dt / this.interval % len);
        this.rect = opt.frames[frames[index]];
        var rectLen = this.rect.length;

        rectLen > 4 && (this.originX = this.rect[2] * this.rect[4]);
        rectLen > 5 && (this.originY = this.rect[3] * this.rect[5]);
        if (rectLen > 6) {
          var img = this.option.imgs[this.rect[6]];
          this.img = typeof img === 'string' ? this.imgMap[img] : img;
        }

        if (index === len - 1 && (!this.endTime || Date.now() - this.endTime > this.interval)) {
          this.endTime = Date.now();
          this.animationEnd();
          if (this._willDestroy) {
            this.destroy();
          }
        }
      }
    };

    Sprite.prototype.gotoAndPlay = function gotoAndPlay(animation) {
      this.paused = false;
      this.reset();
      this.currentAnimation = animation;
      this.startTime = Date.now();
    };

    Sprite.prototype.gotoAndStop = function gotoAndStop(animation) {
      this.reset();
      this.paused = true;
      this.currentAnimation = animation;
      var opt = this.option;
      var frames = opt.animations[this.currentAnimation].frames;
      this.rect = opt.frames[frames[this.animationFrameIndex]];
      var rect = this.rect;
      this.width = rect[2];
      this.height = rect[3];
      var rectLen = rect.length;
      rectLen > 4 && (this.originX = rect[2] * rect[4]);
      rectLen > 5 && (this.originY = rect[3] * rect[5]);
      if (rectLen > 6) {
        var img = this.option.imgs[rect[6]];
        this.img = typeof img === 'string' ? this.imgMap[img] : img;
      }
    };

    Sprite.prototype.gotoAndPlayOnce = function gotoAndPlayOnce(animation) {
      this.gotoAndPlay(animation);
      this._willDestroy = true;
    };

    return Sprite;
  }(DisplayObject);

  function _classCallCheck$12(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$5(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var measureCtx = void 0;

  if (util.isWeapp) {
    measureCtx = wx.createCanvasContext('measure0');
  } else if (typeof document !== 'undefined') {
    measureCtx = document.createElement('canvas').getContext('2d');
  }

  var Text = function (_DisplayObject) {
    _inherits$5(Text, _DisplayObject);

    function Text(text, option) {
      _classCallCheck$12(this, Text);

      var _this = _possibleConstructorReturn$5(this, _DisplayObject.call(this));

      _this.text = text;
      option = option || {};
      _this.font = option.font || '10px sans-serif';
      _this.color = option.color || 'black';
      _this.textAlign = option.textAlign || 'left';
      _this.baseline = option.baseline || 'top';
      return _this;
    }

    Text.prototype.getWidth = function getWidth() {
      if (!measureCtx) {
        if (util.isWegame) {
          measureCtx = wx.createCanvas().getContext('2d');
        }
      }

      if (this.font) {
        measureCtx.font = this.font;
      }
      return measureCtx.measureText(this.text).width;
    };

    return Text;
  }(DisplayObject);

  function invert(pixels, ratio) {
    var d = pixels.data;
    ratio = ratio === undefined ? 1 : ratio;
    for (var i = 0; i < d.length; i += 4) {
      d[i] = d[i] + ratio * (255 - 2 * d[i]);
      d[i + 1] = d[i + 1] + ratio * (255 - 2 * d[i + 1]);
      d[i + 2] = d[i + 2] + ratio * (255 - 2 * d[i + 2]);
    }
    return pixels;
  }

  var tmpCtx = null;

  if (typeof document !== 'undefined') {
    tmpCtx = document.createElement('canvas').getContext('2d');
  } else if (typeof wx !== 'undefined' && wx.createCanvas) {
    tmpCtx = wx.createCanvas().getContext('2d');
  }

  function createImageData(w, h) {
    return tmpCtx.createImageData(w, h);
  }

  function blur(pixels, diameter) {
    diameter = Math.abs(diameter);
    if (diameter <= 1) return pixels;
    var radius = diameter / 2;
    var len = Math.ceil(diameter) + (1 - Math.ceil(diameter) % 2);
    var weights = new Float32Array(len);
    var rho = (radius + 0.5) / 3;
    var rhoSq = rho * rho;
    var gaussianFactor = 1 / Math.sqrt(2 * Math.PI * rhoSq);
    var rhoFactor = -1 / (2 * rho * rho);
    var wsum = 0;
    var middle = Math.floor(len / 2);
    for (var i = 0; i < len; i++) {
      var x = i - middle;
      var gx = gaussianFactor * Math.exp(x * x * rhoFactor);
      weights[i] = gx;
      wsum += gx;
    }
    for (var i = 0; i < weights.length; i++) {
      weights[i] /= wsum;
    }
    return separableConvolve(pixels, weights, weights, false);
  }

  function separableConvolve(pixels, horizWeights, vertWeights, opaque) {
    return horizontalConvolve(verticalConvolve(pixels, vertWeights, opaque), horizWeights, opaque);
  }

  function horizontalConvolve(pixels, weightsVector, opaque) {
    var side = weightsVector.length;
    var halfSide = Math.floor(side / 2);

    var src = pixels.data;
    var sw = pixels.width;
    var sh = pixels.height;

    var w = sw;
    var h = sh;
    var output = createImageData(w, h);
    var dst = output.data;

    var alphaFac = opaque ? 1 : 0;

    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        var sy = y;
        var sx = x;
        var dstOff = (y * w + x) * 4;
        var r = 0,
            g = 0,
            b = 0,
            a = 0;
        for (var cx = 0; cx < side; cx++) {
          var scy = sy;
          var scx = Math.min(sw - 1, Math.max(0, sx + cx - halfSide));
          var srcOff = (scy * sw + scx) * 4;
          var wt = weightsVector[cx];
          r += src[srcOff] * wt;
          g += src[srcOff + 1] * wt;
          b += src[srcOff + 2] * wt;
          a += src[srcOff + 3] * wt;
        }
        dst[dstOff] = r;
        dst[dstOff + 1] = g;
        dst[dstOff + 2] = b;
        dst[dstOff + 3] = a + alphaFac * (255 - a);
      }
    }
    return output;
  }

  function verticalConvolve(pixels, weightsVector, opaque) {
    var side = weightsVector.length;
    var halfSide = Math.floor(side / 2);

    var src = pixels.data;
    var sw = pixels.width;
    var sh = pixels.height;

    var w = sw;
    var h = sh;
    var output = createImageData(w, h);
    var dst = output.data;

    var alphaFac = opaque ? 1 : 0;

    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        var sy = y;
        var sx = x;
        var dstOff = (y * w + x) * 4;
        var r = 0,
            g = 0,
            b = 0,
            a = 0;
        for (var cy = 0; cy < side; cy++) {
          var scy = Math.min(sh - 1, Math.max(0, sy + cy - halfSide));
          var scx = sx;
          var srcOff = (scy * sw + scx) * 4;
          var wt = weightsVector[cy];
          r += src[srcOff] * wt;
          g += src[srcOff + 1] * wt;
          b += src[srcOff + 2] * wt;
          a += src[srcOff + 3] * wt;
        }
        dst[dstOff] = r;
        dst[dstOff + 1] = g;
        dst[dstOff + 2] = b;
        dst[dstOff + 3] = a + alphaFac * (255 - a);
      }
    }
    return output;
  }

  function brightness(pixels, adjustment) {
    var data = pixels.data;
    var length = data.length;
    for (var i = 0; i < length; i += 4) {
      data[i] += adjustment;
      data[i + 1] += adjustment;
      data[i + 2] += adjustment;
    }
    return pixels;
  }

  function contrast(pixels, contrast) {
    var data = pixels.data;
    var length = data.length;
    var factor = 259 * (contrast + 255) / (255 * (259 - contrast));

    for (var i = 0; i < length; i += 4) {
      data[i] = factor * (data[i] - 128) + 128;
      data[i + 1] = factor * (data[i + 1] - 128) + 128;
      data[i + 2] = factor * (data[i + 2] - 128) + 128;
    }

    return pixels;
  }

  function grayscale(pixels, adjustment) {
    var data = pixels.data;
    var length = data.length;
    for (var i = 0; i < length; i += 4) {
      var r = data[i];
      var g = data[i + 1];
      var b = data[i + 2];

      // CIE luminance for the RGB
      // The human eye is bad at seeing red and blue, so we de-emphasize them.
      var v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      data[i] = r + (v - r) * adjustment;
      data[i + 1] = g + (v - g) * adjustment;
      data[i + 2] = b + (v - b) * adjustment;
    }
    return pixels;
  }

  function sepia(pixels, adjustment) {
    var data = pixels.data;
    var length = data.length;
    for (var i = 0; i < length; i += 4) {
      var r = data[i];
      var g = data[i + 1];
      var b = data[i + 2];

      var sr = r * 0.393 + g * 0.769 + b * 0.189;
      var sg = r * 0.349 + g * 0.686 + b * 0.168;
      var sb = r * 0.272 + g * 0.534 + b * 0.131;

      data[i] = r + (sr - r) * adjustment;
      data[i + 1] = g + (sg - g) * adjustment;
      data[i + 2] = b + (sb - b) * adjustment;
    }

    return pixels;
  }

  function threshold(pixels, threshold) {
    var data = pixels.data;
    var length = data.length;
    for (var i = 0; i < length; i += 4) {
      var r = data[i];
      var g = data[i + 1];
      var b = data[i + 2];
      var v = 0.2126 * r + 0.7152 * g + 0.0722 * b >= threshold ? 255 : 0;
      data[i] = data[i + 1] = data[i + 2] = v;
    }
    return pixels;
  }

  function gamma(pixels, adjustment) {
    var data = pixels.data;
    var length = data.length;
    for (var i = 0; i < length; i += 4) {
      data[i] = Math.pow(data[i] / 255, adjustment) * 255;
      data[i + 1] = Math.pow(data[i + 1] / 255, adjustment) * 255;
      data[i + 2] = Math.pow(data[i + 2] / 255, adjustment) * 255;
    }
    return pixels;
  }

  function colorize(pixels, option) {
    var data = pixels.data;
    var length = data.length;
    var hex = option.color.charAt(0) === '#' ? option.color.substr(1) : option.color;
    var colorRGB = {
      r: parseInt(hex.substr(0, 2), 16),
      g: parseInt(hex.substr(2, 2), 16),
      b: parseInt(hex.substr(4, 2), 16)
    };

    for (var i = 0; i < length; i += 4) {
      data[i] -= (data[i] - colorRGB.r) * option.amount;
      data[i + 1] -= (data[i + 1] - colorRGB.g) * option.amount;
      data[i + 2] -= (data[i + 2] - colorRGB.b) * option.amount;
    }

    return pixels;
  }

  function filter(pixels, name) {
    if (typeof name === 'string') {
      var type = name.split('(')[0];
      var num = getNumber(name);
      switch (type) {
        case 'invert':
          return invert(pixels, num);
        case 'brightness':
          return brightness(pixels, -255 + num * 255);
        case 'blur':
          return blur(pixels, num);
        case 'contrast':
          return contrast(pixels, -255 + num * 255);
        case 'grayscale':
          return grayscale(pixels, num);
        case 'sepia':
          return sepia(pixels, num);
        case 'threshold':
          return threshold(pixels, num);
        case 'gamma':
          return gamma(pixels, num);
      }
    } else {
      switch (name.type) {
        case 'colorize':
          return colorize(pixels, name);
      }
    }
  }

  function getNumber(str) {
    str = str.replace(/(invert)|(brightness)|(blur)|(contrast)|(grayscale)|(sepia)|(threshold)|(gamma)?\(/g, '').replace(')', '');
    if (str.indexOf('%') !== -1) {
      return Number(str.replace('%', '')) / 100;
    } else if (str.indexOf('px') !== -1) {
      return Number(str.replace('px', ''));
    } else {
      return Number(str);
    }
  }

  function _classCallCheck$13(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$6(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var CanvasRender = function (_Render) {
    _inherits$6(CanvasRender, _Render);

    function CanvasRender(canvasOrContext, width, height) {
      _classCallCheck$13(this, CanvasRender);

      var _this = _possibleConstructorReturn$6(this, _Render.call(this));

      if (arguments.length === 3) {
        _this.ctx = canvasOrContext;
        _this.width = width;
        _this.height = height;
      } else {
        _this.ctx = canvasOrContext.getContext('2d');
        _this.width = canvasOrContext.width;
        _this.height = canvasOrContext.height;
      }
      return _this;
    }

    CanvasRender.prototype.clear = function clear(ctx, width, height) {
      ctx.clearRect(0, 0, width, height);
    };

    CanvasRender.prototype.render = function render(ctx, o, cacheData) {
      var mtx = o._matrix;
      if (o.children) {
        var list = o.children.slice(0),
            l = list.length;
        for (var i = 0; i < l; i++) {
          var child = list[i];
          mtx.initialize(1, 0, 0, 1, 0, 0);
          mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.originX, o.originY);
          // if (!this.checkBoundEvent(child)) continue
          ctx.save();
          this._render(ctx, child, cacheData ? null : mtx, cacheData, true);
          ctx.restore();
        }
      } else {
        this._render(ctx, o, cacheData ? null : mtx, cacheData);
      }
    };

    CanvasRender.prototype._render = function _render(ctx, o, mtx, cacheData, inGroup) {
      if (!o.isVisible()) return;
      if (mtx && !o.fixed) {
        o._matrix.initialize(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
      } else if (cacheData && !o.fixed) {
        o._matrix.initialize(cacheData.scale, 0, 0, cacheData.scale, cacheData.x * -1, cacheData.y * -1);
      } else {
        o._matrix.initialize(1, 0, 0, 1, 0, 0);
      }
      mtx = o._matrix;

      // group 进行 cache canvas 内部的子元素需要进行appendTransform
      // cache canvas 渲染不叠加自身的 transform，因为进入主渲染会进行appendTransform
      if (inGroup || !cacheData) {
        mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.originX, o.originY);
      }
      var ocg = o.clipGraphics;
      if (ocg) {
        ctx.beginPath();
        ocg._matrix.copy(mtx);
        ocg._matrix.appendTransform(ocg.x, ocg.y, ocg.scaleX, ocg.scaleY, ocg.rotation, ocg.skewX, ocg.skewY, ocg.originX, ocg.originY);
        ctx.setTransform(ocg._matrix.a, ocg._matrix.b, ocg._matrix.c, ocg._matrix.d, ocg._matrix.tx, ocg._matrix.ty);
        ocg.render(ctx);
        ctx.clip(o.clipRuleNonzero ? 'nonzero' : 'evenodd');
      }

      var oacg = o.absClipGraphics;
      if (oacg) {
        ctx.beginPath();
        oacg._matrix.initialize(1, 0, 0, 1, 0, 0);
        oacg._matrix.appendTransform(oacg.x, oacg.y, oacg.scaleX, oacg.scaleY, oacg.rotation, oacg.skewX, oacg.skewY, oacg.originX, oacg.originY);
        ctx.setTransform(oacg._matrix.a, oacg._matrix.b, oacg._matrix.c, oacg._matrix.d, oacg._matrix.tx, oacg._matrix.ty);
        oacg.render(ctx);
        ctx.clip(o.absClipRuleNonzero ? 'nonzero' : 'evenodd');
      }

      // if(!cacheData){
      ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
      // }
      if (o._readyToCache || o.cacheUpdating) {
        this.setComplexProps(ctx, o);
        o._readyToCache = false;
        o.cacheCtx.clearRect(0, 0, o.cacheCanvas.width, o.cacheCanvas.height);
        o.cacheCtx.save();
        this.render(o.cacheCtx, o, o._cacheData);
        o.cacheCtx.restore();
        // debug cacheCanvas
        // document.body.appendChild(o.cacheCanvas)
        if (o._readyToFilter) {
          o.cacheCtx.putImageData(filter(o.cacheCtx.getImageData(0, 0, o.cacheCanvas.width, o.cacheCanvas.height), o._filterName), 0, 0);
          this._readyToFilter = false;
        }

        ctx.drawImage(o.cacheCanvas, o._cacheData.x, o._cacheData.y);
      } else if (o.cacheCanvas && !cacheData) {
        this.setComplexProps(ctx, o);
        ctx.drawImage(o.cacheCanvas, o._cacheData.x, o._cacheData.y);
      } else if (o instanceof Group) {
        var list = o.children.slice(0),
            l = list.length;
        for (var i = 0; i < l; i++) {
          ctx.save();
          this._render(ctx, list[i], mtx);
          ctx.restore();
        }
      } else if (o instanceof Graphics) {
        this.setComplexProps(ctx, o);
        o.render(ctx);
      } else if (o instanceof Sprite && o.rect) {
        this.setComplexProps(ctx, o);
        o.updateFrame();
        var rect = o.rect;
        ctx.drawImage(o.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
      } else if (o instanceof Bitmap && o.rect) {
        this.setComplexProps(ctx, o);
        var bRect = o.rect;
        ctx.drawImage(o.img, bRect[0], bRect[1], bRect[2], bRect[3], 0, 0, bRect[2], bRect[3]);
      } else if (o instanceof Text) {
        this.setComplexProps(ctx, o);
        ctx.font = o.font;
        ctx.fillStyle = o.color;
        ctx.textAlign = o.textAlign;
        ctx.textBaseline = o.baseline;
        ctx.fillText(o.text, 0, 0);
      }
    };

    CanvasRender.prototype.setComplexProps = function setComplexProps(ctx, o) {
      o.complexCompositeOperation = ctx.globalCompositeOperation = this.getCompositeOperation(o);
      o.complexAlpha = ctx.globalAlpha = this.getAlpha(o, 1);

      o.complexShadow = this.getShadow(o);
      if (o.complexShadow) {
        ctx.shadowColor = o.complexShadow.color;
        ctx.shadowOffsetX = o.complexShadow.offsetX;
        ctx.shadowOffsetY = o.complexShadow.offsetY;
        ctx.shadowBlur = o.complexShadow.blur;
      }
    };

    CanvasRender.prototype.getCompositeOperation = function getCompositeOperation(o) {
      if (o.compositeOperation) return o.compositeOperation;
      if (o.parent) return this.getCompositeOperation(o.parent);
    };

    CanvasRender.prototype.getAlpha = function getAlpha(o, alpha) {
      var result = o.alpha * alpha;
      if (o.parent) {
        return this.getAlpha(o.parent, result);
      }
      return result;
    };

    CanvasRender.prototype.getShadow = function getShadow(o) {
      if (o.shadow) return o.shadow;
      if (o.parent) return this.getShadow(o.parent);
    };

    return CanvasRender;
  }(Render);

  function _classCallCheck$14(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Renderer = function () {
    function Renderer(canvasOrContext, width, height) {
      _classCallCheck$14(this, Renderer);

      this.renderList = [];
      if (arguments.length === 3) {
        this.renderer = new CanvasRender(canvasOrContext, width, height);
        this.width = width;
        this.height = height;
      } else {
        this.renderer = new CanvasRender(canvasOrContext);
        this.width = canvasOrContext.width;
        this.height = canvasOrContext.height;
      }
      this.ctx = this.renderer.ctx;
    }

    Renderer.prototype.update = function update(stage) {
      this.renderer.clear(this.ctx, this.width, this.height);
      this.renderer.render(this.ctx, stage);
      this.ctx.draw && this.ctx.draw();
    };

    Renderer.prototype.getHitRenderList = function getHitRenderList(stage) {
      var objs = this.renderList;
      objs.length = 0;
      this.computeMatrix(stage);
      return objs;
    };

    Renderer.prototype.computeMatrix = function computeMatrix(stage) {
      for (var i = 0, len = stage.children.length; i < len; i++) {
        this._computeMatrix(stage.children[i]);
      }
    };

    Renderer.prototype.initComplex = function initComplex(o) {
      o.complexCompositeOperation = this._getCompositeOperation(o);
      o.complexAlpha = this._getAlpha(o, 1);
    };

    Renderer.prototype._computeMatrix = function _computeMatrix(o, mtx) {
      if (!o.isVisible()) {
        return;
      }
      if (mtx && !o.fixed) {
        o._matrix.initialize(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
      } else {
        o._matrix.initialize(1, 0, 0, 1, 0, 0);
      }

      o._matrix.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.originX, o.originY);

      if (o instanceof Group) {
        var list = o.children,
            len = list.length,
            i = 0;
        for (; i < len; i++) {
          this._computeMatrix(list[i], o._matrix);
        }
      } else {
        // if (o instanceof Graphics) {
        //   this.renderList.push(o)
        //   this.initComplex(o)
        // } else {
        o.initAABB();
        // if (this.isInStage(o)) {
        this.renderList.push(o);
        this.initComplex(o);
        // }
        // }
      }
    };

    Renderer.prototype._getCompositeOperation = function _getCompositeOperation(o) {
      if (o.compositeOperation) return o.compositeOperation;
      if (o.parent) return this._getCompositeOperation(o.parent);
    };

    Renderer.prototype._getAlpha = function _getAlpha(o, alpha) {
      var result = o.alpha * alpha;
      if (o.parent) {
        return this._getAlpha(o.parent, result);
      }
      return result;
    };

    Renderer.prototype.isInStage = function isInStage(o) {
      return this.collisionBetweenAABB(o.AABB, this.stage.AABB);
    };

    Renderer.prototype.collisionBetweenAABB = function collisionBetweenAABB(AABB1, AABB2) {
      var maxX = AABB1[0] + AABB1[2];
      if (maxX < AABB2[0]) return false;
      var minX = AABB1[0];
      if (minX > AABB2[0] + AABB2[2]) return false;
      var maxY = AABB1[1] + AABB1[3];
      if (maxY < AABB2[1]) return false;
      var minY = AABB1[1];
      if (minY > AABB2[1] + AABB2[3]) return false;
      return true;
    };

    return Renderer;
  }();

  function _classCallCheck$15(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Event = function () {
    function Event() {
      _classCallCheck$15(this, Event);

      this.propagationStopped = false;
      this.stageX = null;
      this.stageY = null;
      this.pureEvent = null;
    }

    Event.prototype.stopPropagation = function stopPropagation() {
      option.stagePropagationStopped[this.type] = true;
      this.propagationStopped = true;
    };

    Event.prototype.preventDefault = function preventDefault() {
      this.pureEvent.preventDefault();
    };

    return Event;
  }();

  function _classCallCheck$16(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$7(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$7(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var HitRender = function (_Render) {
    _inherits$7(HitRender, _Render);

    function HitRender() {
      _classCallCheck$16(this, HitRender);

      var _this = _possibleConstructorReturn$7(this, _Render.call(this));

      if (typeof wx !== 'undefined' && wx.createCanvas) {
        _this.canvas = wx.createCanvas();
      } else {
        _this.canvas = document.createElement('canvas');
      }

      _this.canvas.width = 1;
      _this.canvas.height = 1;
      _this.ctx = _this.canvas.getContext('2d');

      // debug event
      // this.canvas.width = 441
      // this.canvas.height = 441
      // this.ctx = this.canvas.getContext('2d')
      // document.body.appendChild(this.canvas)

      _this.disableEvents = ['mouseover', 'mouseout', 'mousemove', 'touchmove'];
      return _this;
    }

    HitRender.prototype.clear = function clear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    };

    HitRender.prototype.hitAABB = function hitAABB(o, evt) {
      var list = o.children.slice(0),
          l = list.length;
      for (var i = l - 1; i >= 0; i--) {
        var child = list[i];
        // if (!this.isbindingEvent(child)) continue;
        var path = this._hitAABB(child, evt, [], true);

        if (path.length > 0) {
          var target = path[path.length - 1];
          this._dispatchEvent(target, evt);
          return target;
        }
      }
    };

    HitRender.prototype._hitAABB = function _hitAABB(o, evt, path, rootCall) {
      if (o.ignoreHit || !o.isVisible()) {
        return;
      }

      o.initAABB();
      if (o.AABB && this.checkPointInAABB(evt.stageX, evt.stageY, o.AABB)) {
        // this._bubbleEvent(o, type, evt);
        o.___$push = true;
        path.push(o);
        //return o
      }

      if (o instanceof Group) {
        var list = o.children.slice(0),
            l = list.length;
        for (var i = l - 1; i >= 0; i--) {
          var child = list[i];
          this._hitAABB(child, evt, path);
          if (child.___$push) {
            delete child.___$push;
            //同级只找一个就好了，所有 break
            break;
          }
          //if (target) return target
        }
      }

      if (rootCall) {
        return path;
      }
    };

    HitRender.prototype.checkPointInAABB = function checkPointInAABB(x, y, AABB) {
      var minX = AABB[0];
      if (x < minX) return false;
      var minY = AABB[1];
      if (y < minY) return false;
      var maxX = minX + AABB[2];
      if (x > maxX) return false;
      var maxY = minY + AABB[3];
      if (y > maxY) return false;
      return true;
    };

    HitRender.prototype.hitPixel = function hitPixel(o, evt) {
      var ctx = this.ctx;
      ctx.clearRect(0, 0, 2, 2);
      var mtx = o._hitMatrix;
      var list = o.children.slice(0),
          l = list.length;
      for (var i = l - 1; i >= 0; i--) {
        var child = list[i];
        mtx.initialize(1, 0, 0, 1, 0, 0);
        mtx.appendTransform(o.x - evt.stageX, o.y - evt.stageY, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.originX, o.originY);
        // if (!this.checkBoundEvent(child)) continue
        ctx.save();
        var target = this._hitPixel(child, evt, mtx);
        ctx.restore();
        if (target) return target;
      }
    };

    HitRender.prototype._hitPixel = function _hitPixel(o, evt, mtx) {
      if (o.ignoreHit || !o.isVisible()) return;
      var ctx = this.ctx;
      if (o.fixed) {
        o._hitMatrix.initialize(1, 0, 0, 1, -evt.stageX, -evt.stageY);
      } else if (mtx) {
        o._hitMatrix.initialize(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
      } else {
        o._hitMatrix.initialize(1, 0, 0, 1, 0, 0);
      }
      mtx = o._hitMatrix;
      mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.originX, o.originY);

      var ocg = o.clipGraphics;
      if (ocg) {
        ctx.beginPath();
        ocg._matrix.copy(mtx);
        ocg._matrix.appendTransform(ocg.x, ocg.y, ocg.scaleX, ocg.scaleY, ocg.rotation, ocg.skewX, ocg.skewY, ocg.originX, ocg.originY);
        ctx.setTransform(ocg._matrix.a, ocg._matrix.b, ocg._matrix.c, ocg._matrix.d, ocg._matrix.tx, ocg._matrix.ty);
        ocg.render(ctx);
        ctx.clip(o.clipRuleNonzero ? 'nonzero' : 'evenodd');
      }

      var oacg = o.absClipGraphics;
      if (oacg) {
        ctx.beginPath();
        oacg._matrix.initialize(1, 0, 0, 1, 0, 0);
        oacg._matrix.appendTransform(oacg.x, oacg.y, oacg.scaleX, oacg.scaleY, oacg.rotation, oacg.skewX, oacg.skewY, oacg.originX, oacg.originY);
        ctx.setTransform(oacg._matrix.a, oacg._matrix.b, oacg._matrix.c, oacg._matrix.d, oacg._matrix.tx, oacg._matrix.ty);
        oacg.render(ctx);
        ctx.clip(o.absClipRuleNonzero ? 'nonzero' : 'evenodd');
      }

      if (o.cacheCanvas) {
        ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
        ctx.drawImage(o.cacheCanvas, o._cacheData.x, o._cacheData.y);
      } else if (o instanceof Group) {
        var list = o.children.slice(0),
            l = list.length;
        for (var i = l - 1; i >= 0; i--) {
          ctx.save();
          var target = this._hitPixel(list[i], evt, mtx);
          ctx.restore();
          if (target) return target;
        }
      } else {
        ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
        if (o instanceof Graphics) {
          this.setComplexProps(ctx, o);

          o.render(ctx);
        } else if (o instanceof Sprite && o.rect) {
          this.setComplexProps(ctx, o);

          o.updateFrame();
          var rect = o.rect;
          ctx.drawImage(o.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
        } else if (o instanceof Bitmap && o.rect) {
          this.setComplexProps(ctx, o);

          var bRect = o.rect;
          ctx.drawImage(o.img, bRect[0], bRect[1], bRect[2], bRect[3], 0, 0, bRect[2], bRect[3]);
        } else if (o instanceof Text) {
          this.setComplexProps(ctx, o);

          ctx.font = o.font;
          ctx.fillStyle = o.color;
          ctx.textAlign = o.textAlign;
          ctx.textBaseline = o.baseline;
          ctx.fillText(o.text, 0, 0);
        }
      }

      if (o.hitBox) {
        o.initAABB();
        if (this.checkPointInAABB(evt.stageX, evt.stageY, o.AABB)) {
          this._dispatchEvent(o, evt);
          return o;
        }
      } else if (ctx.getImageData(0, 0, 1, 1).data[3] > 0) {
        this._dispatchEvent(o, evt);
        return o;
      }
    };

    HitRender.prototype.setComplexProps = function setComplexProps(ctx, o) {
      ctx.globalCompositeOperation = o.complexCompositeOperation;
      ctx.globalAlpha = o.complexAlpha;
      // The shadow does not trigger the event, so remove it
      // if(o.complexShadow){
      //   ctx.shadowColor = o.complexShadow.color
      //   ctx.shadowOffsetX = o.complexShadow.offsetX
      //   ctx.shadowOffsetY = o.complexShadow.offsetY
      //   ctx.shadowBlur = o.complexShadow.blur
      // }
    };

    HitRender.prototype._dispatchEvent = function _dispatchEvent(obj, evt) {
      if (this.disableEvents.indexOf(evt.type) !== -1) return;
      var mockEvt = new Event();
      mockEvt.stageX = evt.stageX;
      mockEvt.stageY = evt.stageY;
      mockEvt.pureEvent = evt;
      mockEvt.type = evt.type;
      obj.dispatchEvent(mockEvt);
    };

    return HitRender;
  }(Render);

  function _classCallCheck$17(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$8(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$8(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var WxHitRender = function (_Render) {
    _inherits$8(WxHitRender, _Render);

    function WxHitRender(ctx, component, canvasId) {
      _classCallCheck$17(this, WxHitRender);

      var _this = _possibleConstructorReturn$8(this, _Render.call(this));

      _this.ctx = ctx;
      _this._isWeapp = true;
      _this._component = component;
      _this._hitCanvasId = canvasId + 'Hit';

      _this.disableEvents = ['mouseover', 'mouseout', 'mousemove', 'touchmove'];
      return _this;
    }

    WxHitRender.prototype.clear = function clear() {
      this.ctx.clearRect(0, 0, 2, 2);
    };

    WxHitRender.prototype.hitAABB = function hitAABB(list, evt, cb) {
      var len = list.length;
      for (var i = len - 1; i >= 0; i--) {
        var o = list[i];

        if (o.AABB && this.checkPointInAABB(evt.stageX, evt.stageY, o.AABB)) {
          this._dispatchEvent(o, evt);
          cb(o);
          return o;
        }
      }
    };

    WxHitRender.prototype.checkPointInAABB = function checkPointInAABB(x, y, AABB) {
      var minX = AABB[0];
      if (x < minX) return false;
      var minY = AABB[1];
      if (y < minY) return false;
      var maxX = minX + AABB[2];
      if (x > maxX) return false;
      var maxY = minY + AABB[3];
      if (y > maxY) return false;
      return true;
    };

    WxHitRender.prototype.hit = function hit(list, evt, cb, current) {
      var _this2 = this;

      var ctx = this.ctx;
      var obj = list[current];
      var mtx = obj._hitMatrix.initialize(1, 0, 0, 1, 0, 0);
      ctx.save();
      mtx.appendTransform(obj.x - evt.stageX, obj.y - evt.stageY, obj.scaleX, obj.scaleY, obj.rotation, obj.skewX, obj.skewY, obj.originX, obj.originY);
      ctx.globalCompositeOperation = obj.complexCompositeOperation;
      ctx.globalAlpha = obj.complexAlpha;
      ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
      if (obj instanceof Graphics) {
        obj.render(ctx);
      } else if (obj instanceof Sprite && obj.rect) {
        obj.updateFrame();
        var rect = obj.rect;
        ctx.drawImage(obj.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
      } else if (obj instanceof Bitmap && obj.rect) {
        var bRect = obj.rect;
        ctx.drawImage(obj.img, bRect[0], bRect[1], bRect[2], bRect[3], 0, 0, bRect[2], bRect[3]);
      } else if (obj instanceof Text) {
        ctx.font = obj.font;
        ctx.fillStyle = obj.color;
        ctx.textAlign = obj.textAlign;
        ctx.fillText(obj.text, 0, 0);
      }
      ctx.restore();
      current--;
      ctx.draw(false, function () {
        wx.canvasGetImageData({
          canvasId: _this2._hitCanvasId,
          x: 0,
          y: 0,
          width: 1,
          height: 1,
          success: function success(res) {
            if (res.data[3] > 1) {
              _this2._dispatchEvent(obj, evt);
              cb(obj);
            } else {
              if (current > -1) {
                _this2.hit(list, evt, cb, current);
              }
            }
          }
        }, _this2._component);
      });
    };

    WxHitRender.prototype._dispatchEvent = function _dispatchEvent(obj, evt) {
      if (this.disableEvents.indexOf(evt.type) !== -1) return;
      var mockEvt = new Event();
      mockEvt.stageX = evt.stageX;
      mockEvt.stageY = evt.stageY;
      mockEvt.pureEvent = evt;
      mockEvt.type = evt.type;
      obj.dispatchEvent(mockEvt);
    };

    return WxHitRender;
  }(Render);

  function _classCallCheck$18(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$9(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$9(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var WeStage = function (_Group) {
    _inherits$9(WeStage, _Group);

    function WeStage(width, height, id, page) {
      _classCallCheck$18(this, WeStage);

      var _this = _possibleConstructorReturn$9(this, _Group.call(this));

      var component = page.selectComponent('#' + id);
      component.setData({
        width: width,
        height: height
      });
      component.stage = _this;
      var canvasId = component.getCaxCanvasId();

      var ctx = wx.createCanvasContext(canvasId, component);
      var hitCtx = wx.createCanvasContext(canvasId + 'Hit', component);
      _this.renderer = new Renderer(ctx, width, height);
      _this._hitRender = new WxHitRender(hitCtx, component, canvasId);
      _this._overObject = null;
      _this.ctx = ctx;
      _this.hitAABB = true;
      _this.width = width;
      _this.height = height;
      return _this;
    }

    WeStage.prototype.touchStartHandler = function touchStartHandler(evt) {
      var _this2 = this;

      var p1 = evt.changedTouches[0];

      evt.stageX = Math.round(p1.x * this.scaleX);
      evt.stageY = Math.round(p1.y * this.scaleY);

      this._getObjectUnderPoint(evt, function (obj) {
        _this2.willDragObject = obj;
        _this2._mouseDownX = evt.stageX;
        _this2._mouseDownY = evt.stageY;
        _this2.preStageX = evt.stageX;
        _this2.preStageY = evt.stageY;
      });
    };

    WeStage.prototype.touchMoveHandler = function touchMoveHandler(evt) {
      var _this3 = this;

      var p1 = evt.changedTouches[0];

      evt.stageX = Math.round(p1.x * this.scaleX);
      evt.stageY = Math.round(p1.y * this.scaleY);

      this._getObjectUnderPoint(evt, function (obj) {
        var mockEvt = new Event();
        mockEvt.stageX = evt.stageX;
        mockEvt.stageY = evt.stageY;
        mockEvt.pureEvent = evt;

        if (_this3.willDragObject) {
          mockEvt.type = 'drag';
          mockEvt.dx = mockEvt.stageX - _this3.preStageX;
          mockEvt.dy = mockEvt.stageY - _this3.preStageY;
          _this3.preStageX = mockEvt.stageX;
          _this3.preStageY = mockEvt.stageY;
          _this3.willDragObject.dispatchEvent(mockEvt);
        }

        if (obj) {
          if (_this3._overObject === null) {
            _this3._overObject = obj;
          } else {
            if (obj.id !== _this3._overObject.id) {
              _this3._overObject = obj;
            } else {
              mockEvt.type = 'touchmove';
              obj.dispatchEvent(mockEvt);
            }
          }
        } else if (_this3._overObject) {
          _this3._overObject = null;
        }
      });
    };

    WeStage.prototype.touchEndHandler = function touchEndHandler(evt) {
      var _this4 = this;

      var p1 = evt.changedTouches[0];

      evt.stageX = Math.round(p1.x * this.scaleX);
      evt.stageY = Math.round(p1.y * this.scaleY);

      var mockEvt = new Event();
      mockEvt.stageX = evt.stageX;
      mockEvt.stageY = evt.stageY;

      mockEvt.pureEvent = evt;

      this._getObjectUnderPoint(evt, function (obj) {
        _this4._mouseUpX = evt.stageX;
        _this4._mouseUpY = evt.stageY;

        _this4.willDragObject = null;
        _this4.preStageX = null;
        _this4.preStageY = null;

        if (obj && Math.abs(_this4._mouseDownX - _this4._mouseUpX) < 30 && Math.abs(_this4._mouseDownY - _this4._mouseUpY) < 30) {
          mockEvt.type = 'tap';
          obj.dispatchEvent(mockEvt);
        }
      });
    };

    WeStage.prototype._handleMouseOut = function _handleMouseOut(evt) {
      this.dispatchEvent({
        pureEvent: evt,
        type: 'mouseout',
        stageX: evt.stageX,
        stageY: evt.stageY
      });
    };

    WeStage.prototype._getObjectUnderPoint = function _getObjectUnderPoint(evt, cb) {
      var list = this.renderer.getHitRenderList(this);
      if (this.hitAABB) {
        return this._hitRender.hitAABB(list, evt, cb);
      } else {
        this._hitRender.clear();
        this._hitRender.hit(list, evt, cb, list.length - 1);
      }
    };

    WeStage.prototype.on = function on(type, cb) {
      switch (type) {
        case 'touchstart':
          this.touchStart = cb;
          break;
        case 'touchmove':
          this.touchMove = cb;
          break;
        case 'touchend':
          this.touchEnd = cb;
          break;
      }
    };

    WeStage.prototype.update = function update() {
      this.renderer.update(this);
    };

    return WeStage;
  }(Group);

  function _classCallCheck$19(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$10(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$10(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Stage = function (_Group) {
    _inherits$10(Stage, _Group);

    function Stage(width, height, renderTo) {
      _classCallCheck$19(this, Stage);

      var _this = _possibleConstructorReturn$10(this, _Group.call(this));

      var len = arguments.length;
      _this.isWegame = typeof wx !== 'undefined' && wx.createCanvas;
      _this.moveDetectionInterval = 0;
      if (len === 0) {
        // wegame
        _this.canvas = wegameCanvas$1;
        _this.disableMoveDetection = true;
        _this.moveDetectionInterval = 500;
      } else if (len === 4) {
        var _ret;

        // weapp
        return _ret = new WeStage(arguments[0], arguments[1], arguments[2], arguments[3]), _possibleConstructorReturn$10(_this, _ret);
      } else {
        if (len === 1) {
          _this.canvas = typeof width === 'string' ? document.querySelector(width) : width;
        } else {
          _this.renderTo = typeof renderTo === 'string' ? document.querySelector(renderTo) : renderTo;
          if (_this.renderTo.tagName === 'CANVAS') {
            _this.canvas = _this.renderTo;
            _this.canvas.width = width;
            _this.canvas.height = height;
          } else {
            _this.canvas = document.createElement('canvas');
            _this.canvas.width = width;
            _this.canvas.height = height;
            _this.renderTo.appendChild(_this.canvas);
          }
        }
        // get rect again when trigger onscroll onresize event!?
        _this._boundingClientRect = _this.canvas.getBoundingClientRect();

        _this.offset = _this._getOffset(_this.canvas);
      }
      _this.renderer = new Renderer(_this.canvas);
      if (_this.isWegame) {
        wx.onTouchStart(function (evt) {
          return _this._handleMouseDown(evt);
        });

        wx.onTouchMove(function (evt) {
          return _this._handleMouseMove(evt);
        });

        wx.onTouchEnd(function (evt) {
          return _this._handleMouseUp(evt);
        });
      } else {
        _this.canvas.addEventListener('click', function (evt) {
          return _this._handleClick(evt);
        });
        _this.canvas.addEventListener('mousedown', function (evt) {
          return _this._handleMouseDown(evt);
        });
        _this.canvas.addEventListener('mousemove', function (evt) {
          return _this._handleMouseMove(evt);
        });
        _this.canvas.addEventListener('mouseup', function (evt) {
          return _this._handleMouseUp(evt);
        });
        _this.canvas.addEventListener('mouseout', function (evt) {
          return _this._handleMouseOut(evt);
        });
        _this.canvas.addEventListener('touchstart', function (evt) {
          return _this._handleMouseDown(evt);
        });
        _this.canvas.addEventListener('touchmove', function (evt) {
          return _this._handleMouseMove(evt);
        });
        _this.canvas.addEventListener('touchend', function (evt) {
          return _this._handleMouseUp(evt);
        });

        _this.canvas.addEventListener('dblclick', function (evt) {
          return _this._handleDblClick(evt);
        });
        // this.addEvent(this.canvas, "mousewheel", this._handleMouseWheel.bind(this));

        document.addEventListener('contextmenu', function (evt) {
          return _this._handleContextmenu(evt);
        });
      }

      _this.borderTopWidth = 0;
      _this.borderLeftWidth = 0;

      _this.hitAABB = false;
      _this._hitRender = new HitRender();

      _this._overObject = null;

      _this._scaleX = 1;
      _this._scaleY = 1;

      _this._mouseDownX = 0;
      _this._mouseDownY = 0;

      _this._mouseUpX = 0;
      _this._mouseUpY = 0;

      _this.willDragObject = null;
      _this.preStageX = null;
      _this.preStageY = null;

      _this.width = _this.canvas.width;
      _this.height = _this.canvas.height;

      _this.___instanceof = 'Stage';

      _this._moveDetectionTime = Date.now();
      return _this;
    }

    Stage.prototype._handleContextmenu = function _handleContextmenu(evt) {
      this._getObjectUnderPoint(evt);
    };

    Stage.prototype._handleDblClick = function _handleDblClick(evt) {
      this._getObjectUnderPoint(evt);
    };

    Stage.prototype._handleClick = function _handleClick(evt) {
      if (Math.abs(this._mouseDownX - this._mouseUpX) < 20 && Math.abs(this._mouseDownY - this._mouseUpY) < 20) {
        this._getObjectUnderPoint(evt);
      }
    };

    Stage.prototype._handleMouseDown = function _handleMouseDown(evt) {
      if (this.isWegame) {
        evt.type = 'touchstart';
      }
      this.offset = this._getOffset(this.canvas);
      var obj = this._getObjectUnderPoint(evt);
      this.willDragObject = obj;
      this._mouseDownX = evt.stageX;
      this._mouseDownY = evt.stageY;
      this.preStageX = evt.stageX;
      this.preStageY = evt.stageY;
    };

    Stage.prototype.scaleEventPoint = function scaleEventPoint(x, y) {
      this._scaleX = x;
      this._scaleY = y;
    };

    Stage.prototype._handleMouseUp = function _handleMouseUp(evt) {
      if (this.isWegame) {
        evt.type = 'touchend';
      }
      var obj = this._getObjectUnderPoint(evt);
      this._mouseUpX = evt.stageX;
      this._mouseUpY = evt.stageY;

      var mockEvt = new Event();
      mockEvt.stageX = evt.stageX;
      mockEvt.stageY = evt.stageY;
      mockEvt.pureEvent = evt;

      this.willDragObject = null;
      this.preStageX = null;
      this.preStageY = null;

      if (obj && evt.type === 'touchend' && Math.abs(this._mouseDownX - this._mouseUpX) < 30 && Math.abs(this._mouseDownY - this._mouseUpY) < 30) {
        mockEvt.type = 'tap';
        obj.dispatchEvent(mockEvt);
      }
    };

    Stage.prototype._handleMouseOut = function _handleMouseOut(evt) {
      this._computeStageXY(evt);
      this.dispatchEvent({
        pureEvent: evt,
        type: 'mouseout',
        stageX: evt.stageX,
        stageY: evt.stageY
      });
    };

    Stage.prototype._handleMouseMove = function _handleMouseMove(evt) {
      if (Date.now() - this._moveDetectionTime < this.moveDetectionInterval) {
        return;
      }
      this._moveDetectionTime = Date.now();

      if (this.isWegame) {
        evt.type = 'touchmove';
      }
      if (this.disableMoveDetection) return;
      var obj = this._getObjectUnderPoint(evt);
      var mockEvt = new Event();
      mockEvt.stageX = evt.stageX;
      mockEvt.stageY = evt.stageY;
      mockEvt.pureEvent = evt;

      if (this.willDragObject) {
        mockEvt.type = 'drag';
        mockEvt.dx = mockEvt.stageX - this.preStageX;
        mockEvt.dy = mockEvt.stageY - this.preStageY;
        this.preStageX = mockEvt.stageX;
        this.preStageY = mockEvt.stageY;
        this.willDragObject.dispatchEvent(mockEvt);
      }

      if (obj) {
        if (this._overObject === null) {
          mockEvt.type = 'mouseover';
          obj.dispatchEvent(mockEvt);
          this._overObject = obj;
          this._setCursor(obj);
        } else {
          if (obj.id !== this._overObject.id) {
            this._overObject.dispatchEvent({
              pureEvent: evt,
              type: 'mouseout',
              stageX: evt.stageX,
              stageY: evt.stageY
            });
            mockEvt.type = 'mouseover';
            obj.dispatchEvent(mockEvt);
            this._setCursor(obj);
            this._overObject = obj;
          } else {
            mockEvt.type = 'mousemove';
            obj.dispatchEvent(mockEvt);
            mockEvt.type = 'touchmove';
            obj.dispatchEvent(mockEvt);
          }
        }
      } else if (this._overObject) {
        mockEvt.type = 'mouseout';
        this._overObject.dispatchEvent(mockEvt);
        this._overObject = null;
        this._setCursor({ cursor: 'default' });
      }
    };

    Stage.prototype._setCursor = function _setCursor(obj) {
      if (!this.canvas.style) {
        return;
      }
      if (obj.cursor) {
        this.canvas.style.cursor = obj.cursor;
      } else if (obj.parent) {
        this._setCursor(obj.parent);
      } else {
        this._setCursor({ cursor: 'default' });
      }
    };

    Stage.prototype._getObjectUnderPoint = function _getObjectUnderPoint(evt) {
      this._computeStageXY(evt);
      if (this.hitAABB) {
        return this._hitRender.hitAABB(this, evt);
      } else {
        return this._hitRender.hitPixel(this, evt);
      }
    };

    Stage.prototype._computeStageXY = function _computeStageXY(evt) {
      this._boundingClientRect = this.isWegame ? { left: 0, top: 0 } : this.canvas.getBoundingClientRect();
      if (evt.touches || evt.changedTouches) {
        var firstTouch = evt.touches[0] || evt.changedTouches[0];
        if (firstTouch) {
          evt.stageX = (firstTouch.pageX - this.offset[0]) / this._scaleX;
          evt.stageY = (firstTouch.pageY - this.offset[1]) / this._scaleY;
        }
      } else {
        evt.stageX = (evt.clientX - this._boundingClientRect.left - this.borderLeftWidth) / this._scaleX;
        evt.stageY = (evt.clientY - this._boundingClientRect.top - this.borderTopWidth) / this._scaleY;
      }
    };

    Stage.prototype._getOffset = function _getOffset(el) {
      if (this.isWegame) {
        return [0, 0];
      }
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
        return [_l, _t];
      }
      return [_l + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), _t + Math.max(document.documentElement.scrollTop, document.body.scrollTop)];
    };

    Stage.prototype.update = function update() {
      this.renderer.update(this);
    };

    Stage.prototype.on = function on(type, fn) {
      var _this2 = this;

      this.canvas.addEventListener(type, function (evt) {
        if (!option.stagePropagationStopped[type]) {
          _this2._computeStageXY(evt);
          fn(evt);
        }
        option.stagePropagationStopped[type] = false;
      });
    };

    Stage.prototype.off = function off(type, fn) {
      this.canvas.removeEventListener(type, fn);
    };

    return Stage;
  }(Group);

  function _classCallCheck$20(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$11(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$11(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Shape = function (_Graphics) {
    _inherits$11(Shape, _Graphics);

    function Shape() {
      _classCallCheck$20(this, Shape);

      return _possibleConstructorReturn$11(this, _Graphics.apply(this, arguments));
    }

    // constructor() {
    //     super()
    // }

    Shape.prototype.draw = function draw() {};

    Shape.prototype.render = function render(ctx) {
      this.clear();
      this.draw();
      _Graphics.prototype.render.call(this, ctx);
    };

    return Shape;
  }(Graphics);

  function _classCallCheck$21(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$12(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$12(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var RoundedRect = function (_Shape) {
    _inherits$12(RoundedRect, _Shape);

    function RoundedRect(width, height, r, option) {
      _classCallCheck$21(this, RoundedRect);

      var _this = _possibleConstructorReturn$12(this, _Shape.call(this));

      _this.option = Object.assign({
        lineWidth: 1,
        lt: true,
        rt: true,
        lb: true,
        rb: true
      }, option);
      _this.r = r || 0;
      _this.width = width;
      _this.height = height;
      return _this;
    }

    RoundedRect.prototype.draw = function draw() {
      var width = this.width,
          height = this.height,
          r = this.r;

      var ax = r,
          ay = 0,
          bx = width,
          by = 0,
          cx = width,
          cy = height,
          dx = 0,
          dy = height,
          ex = 0,
          ey = 0;

      this.beginPath();

      this.moveTo(ax, ay);
      if (this.option.rt) {
        this.arcTo(bx, by, cx, cy, r);
      } else {
        this.lineTo(bx, by);
      }

      if (this.option.rb) {
        this.arcTo(cx, cy, dx, dy, r);
      } else {
        this.lineTo(cx, cy);
      }

      if (this.option.lb) {
        this.arcTo(dx, dy, ex, ey, r);
      } else {
        this.lineTo(dx, dy);
      }

      if (this.option.lt) {
        this.arcTo(ex, ey, ax, ay, r);
      } else {
        this.lineTo(ex, ey);
      }

      if (this.option.fillStyle) {
        this.closePath();
        this.fillStyle(this.option.fillStyle);
        this.fill();
      }

      if (this.option.strokeStyle) {
        this.lineWidth(this.option.lineWidth);
        this.strokeStyle(this.option.strokeStyle);
        this.stroke();
      }
    };

    return RoundedRect;
  }(Shape);

  function _classCallCheck$22(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$13(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$13(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ArrowPath = function (_Shape) {
    _inherits$13(ArrowPath, _Shape);

    function ArrowPath(path, option) {
      _classCallCheck$22(this, ArrowPath);

      var _this = _possibleConstructorReturn$13(this, _Shape.call(this));

      _this.path = path;
      _this.option = Object.assign({
        strokeStyle: 'black',
        lineWidth: 1,
        headSize: 10
      }, option);
      return _this;
    }

    ArrowPath.prototype.draw = function draw() {
      var path = this.path;
      this.beginPath();
      var len = path.length;
      if (len === 2) {
        this.drawArrow(path[0].x, path[0].y, path[1].x, path[1].y, 30);
      } else {
        this.moveTo(path[0].x, path[0].y);
        for (var i = 1; i < len - 1; i++) {
          this.lineTo(path[i].x, path[i].y);
        }
        this.drawArrow(path[len - 2].x, path[len - 2].y, path[len - 1].x, path[len - 1].y, 30);
      }

      this.stroke();
    };

    ArrowPath.prototype.drawArrow = function drawArrow(fromX, fromY, toX, toY, theta) {
      var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
          angle1 = (angle + theta) * Math.PI / 180,
          angle2 = (angle - theta) * Math.PI / 180,
          hs = this.option.headSize,
          topX = hs * Math.cos(angle1),
          topY = hs * Math.sin(angle1),
          botX = hs * Math.cos(angle2),
          botY = hs * Math.sin(angle2);

      var arrowX = fromX - topX,
          arrowY = fromY - topY;

      this.moveTo(arrowX, arrowY);
      this.moveTo(fromX, fromY);
      this.lineTo(toX, toY);
      arrowX = toX + topX;
      arrowY = toY + topY;
      this.moveTo(arrowX, arrowY);
      this.lineTo(toX, toY);
      arrowX = toX + botX;
      arrowY = toY + botY;
      this.lineTo(arrowX, arrowY);
      this.strokeStyle(this.option.strokeStyle);
      this.lineWidth(this.option.lineWidth);
    };

    return ArrowPath;
  }(Shape);

  function _classCallCheck$23(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$14(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$14(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Ellipse = function (_Shape) {
    _inherits$14(Ellipse, _Shape);

    function Ellipse(width, height, option) {
      _classCallCheck$23(this, Ellipse);

      var _this = _possibleConstructorReturn$14(this, _Shape.call(this));

      _this.option = option || {};
      _this.width = width;
      _this.height = height;
      return _this;
    }

    Ellipse.prototype.draw = function draw() {
      var w = this.width;
      var h = this.height;
      var k = 0.5522848;
      var ox = w / 2 * k;
      var oy = h / 2 * k;
      var xe = w;
      var ye = h;
      var xm = w / 2;
      var ym = h / 2;

      this.beginPath();
      this.moveTo(0, ym);
      this.bezierCurveTo(0, ym - oy, xm - ox, 0, xm, 0);
      this.bezierCurveTo(xm + ox, 0, xe, ym - oy, xe, ym);
      this.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
      this.bezierCurveTo(xm - ox, ye, 0, ym + oy, 0, ym);

      if (this.option.strokeStyle) {
        if (this.option.lineWidth !== undefined) {
          this.lineWidth(this.option.lineWidth);
        }
        this.strokeStyle(this.option.strokeStyle);
        this.stroke();
      }

      if (this.option.fillStyle) {
        this.fillStyle(this.option.fillStyle);
        this.fill();
      }
    };

    return Ellipse;
  }(Shape);

  // https://github.com/jkroso/parse-svg-path/blob/master/index.js
  /**
   * expected argument lengths
   * @type {Object}
   */

  var length = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0

    /**
     * segment pattern
     * @type {RegExp}
     */

  };var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;

  /**
   * parse an svg path data string. Generates an Array
   * of commands where each command is an Array of the
   * form `[command, arg1, arg2, ...]`
   *
   * @param {String} path
   * @return {Array}
   */

  function parse(path) {
    var data = [];
    path.replace(segment, function (_, command, args) {
      var type = command.toLowerCase();
      args = parseValues(args);

      // overloaded moveTo
      if (type === 'm' && args.length > 2) {
        data.push([command].concat(args.splice(0, 2)));
        type = 'l';
        command = command === 'm' ? 'l' : 'L';
      }

      while (true) {
        if (args.length === length[type]) {
          args.unshift(command);
          return data.push(args);
        }
        if (args.length < length[type]) throw new Error('malformed path data');
        data.push([command].concat(args.splice(0, length[type])));
      }
    });
    return data;
  }

  var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;

  function parseValues(args) {
    var numbers = args.match(number);
    return numbers ? numbers.map(Number) : [];
  }

  // https://github.com/colinmeinke/svg-arc-to-cubic-bezier

  var TAU = Math.PI * 2;

  var mapToEllipse = function mapToEllipse(_ref, rx, ry, cosphi, sinphi, centerx, centery) {
    var x = _ref.x,
        y = _ref.y;

    x *= rx;
    y *= ry;

    var xp = cosphi * x - sinphi * y;
    var yp = sinphi * x + cosphi * y;

    return {
      x: xp + centerx,
      y: yp + centery
    };
  };

  var approxUnitArc = function approxUnitArc(ang1, ang2) {
    var a = 4 / 3 * Math.tan(ang2 / 4);

    var x1 = Math.cos(ang1);
    var y1 = Math.sin(ang1);
    var x2 = Math.cos(ang1 + ang2);
    var y2 = Math.sin(ang1 + ang2);

    return [{
      x: x1 - y1 * a,
      y: y1 + x1 * a
    }, {
      x: x2 + y2 * a,
      y: y2 - x2 * a
    }, {
      x: x2,
      y: y2
    }];
  };

  var vectorAngle = function vectorAngle(ux, uy, vx, vy) {
    var sign = ux * vy - uy * vx < 0 ? -1 : 1;
    var umag = Math.sqrt(ux * ux + uy * uy);
    var vmag = Math.sqrt(ux * ux + uy * uy);
    var dot = ux * vx + uy * vy;

    var div = dot / (umag * vmag);

    if (div > 1) {
      div = 1;
    }

    if (div < -1) {
      div = -1;
    }

    return sign * Math.acos(div);
  };

  var getArcCenter = function getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp) {
    var rxsq = Math.pow(rx, 2);
    var rysq = Math.pow(ry, 2);
    var pxpsq = Math.pow(pxp, 2);
    var pypsq = Math.pow(pyp, 2);

    var radicant = rxsq * rysq - rxsq * pypsq - rysq * pxpsq;

    if (radicant < 0) {
      radicant = 0;
    }

    radicant /= rxsq * pypsq + rysq * pxpsq;
    radicant = Math.sqrt(radicant) * (largeArcFlag === sweepFlag ? -1 : 1);

    var centerxp = radicant * rx / ry * pyp;
    var centeryp = radicant * -ry / rx * pxp;

    var centerx = cosphi * centerxp - sinphi * centeryp + (px + cx) / 2;
    var centery = sinphi * centerxp + cosphi * centeryp + (py + cy) / 2;

    var vx1 = (pxp - centerxp) / rx;
    var vy1 = (pyp - centeryp) / ry;
    var vx2 = (-pxp - centerxp) / rx;
    var vy2 = (-pyp - centeryp) / ry;

    var ang1 = vectorAngle(1, 0, vx1, vy1);
    var ang2 = vectorAngle(vx1, vy1, vx2, vy2);

    if (sweepFlag === 0 && ang2 > 0) {
      ang2 -= TAU;
    }

    if (sweepFlag === 1 && ang2 < 0) {
      ang2 += TAU;
    }

    return [centerx, centery, ang1, ang2];
  };

  var arcToBezier = function arcToBezier(_ref2) {
    var px = _ref2.px,
        py = _ref2.py,
        cx = _ref2.cx,
        cy = _ref2.cy,
        rx = _ref2.rx,
        ry = _ref2.ry,
        _ref2$xAxisRotation = _ref2.xAxisRotation,
        xAxisRotation = _ref2$xAxisRotation === undefined ? 0 : _ref2$xAxisRotation,
        _ref2$largeArcFlag = _ref2.largeArcFlag,
        largeArcFlag = _ref2$largeArcFlag === undefined ? 0 : _ref2$largeArcFlag,
        _ref2$sweepFlag = _ref2.sweepFlag,
        sweepFlag = _ref2$sweepFlag === undefined ? 0 : _ref2$sweepFlag;

    var curves = [];

    if (rx === 0 || ry === 0) {
      return [];
    }

    var sinphi = Math.sin(xAxisRotation * TAU / 360);
    var cosphi = Math.cos(xAxisRotation * TAU / 360);

    var pxp = cosphi * (px - cx) / 2 + sinphi * (py - cy) / 2;
    var pyp = -sinphi * (px - cx) / 2 + cosphi * (py - cy) / 2;

    if (pxp === 0 && pyp === 0) {
      return [];
    }

    rx = Math.abs(rx);
    ry = Math.abs(ry);

    var lambda = Math.pow(pxp, 2) / Math.pow(rx, 2) + Math.pow(pyp, 2) / Math.pow(ry, 2);

    if (lambda > 1) {
      rx *= Math.sqrt(lambda);
      ry *= Math.sqrt(lambda);
    }

    var _getArcCenter = getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp),
        centerx = _getArcCenter[0],
        centery = _getArcCenter[1],
        ang1 = _getArcCenter[2],
        ang2 = _getArcCenter[3];

    var segments = Math.max(Math.ceil(Math.abs(ang2) / (TAU / 4)), 1);

    ang2 /= segments;

    for (var i = 0; i < segments; i++) {
      curves.push(approxUnitArc(ang1, ang2));
      ang1 += ang2;
    }

    return curves.map(function (curve) {
      var _mapToEllipse = mapToEllipse(curve[0], rx, ry, cosphi, sinphi, centerx, centery),
          x1 = _mapToEllipse.x,
          y1 = _mapToEllipse.y;

      var _mapToEllipse2 = mapToEllipse(curve[1], rx, ry, cosphi, sinphi, centerx, centery),
          x2 = _mapToEllipse2.x,
          y2 = _mapToEllipse2.y;

      var _mapToEllipse3 = mapToEllipse(curve[2], rx, ry, cosphi, sinphi, centerx, centery),
          x = _mapToEllipse3.x,
          y = _mapToEllipse3.y;

      return { x1: x1, y1: y1, x2: x2, y2: y2, x: x, y: y };
    });
  };

  function _classCallCheck$24(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$15(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$15(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Path = function (_Shape) {
    _inherits$15(Path, _Shape);

    function Path(d, option) {
      _classCallCheck$24(this, Path);

      var _this = _possibleConstructorReturn$15(this, _Shape.call(this));

      _this.d = d;

      option = Object.assign({
        lineWidth: 1
      }, option);
      _this.option = option;
      return _this;
    }

    Path.prototype.draw = function draw() {
      var _this2 = this;

      var cmds = parse(this.d);

      this.beginPath();
      // https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths
      // M = moveto
      // L = lineto
      // H = horizontal lineto
      // V = vertical lineto
      // C = curveto
      // S = smooth curveto
      // Q = quadratic Belzier curve
      // T = smooth quadratic Belzier curveto
      // A = elliptical Arc  暂时未实现，用贝塞尔拟合椭圆
      // Z = closepath
      // 以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位(从上一个点开始)。
      var preX = void 0,
          preY = void 0,
          curves = void 0,
          lastCurve = void 0;

      // 参考我的 pasition https://github.com/AlloyTeam/pasition/blob/master/src/index.js
      for (var j = 0, cmdLen = cmds.length; j < cmdLen; j++) {
        var item = cmds[j];
        var action = item[0];
        var preItem = cmds[j - 1];

        switch (action) {
          case 'M':
            preX = item[1];
            preY = item[2];
            this.moveTo(preX, preY);
            break;
          case 'L':
            preX = item[1];
            preY = item[2];
            this.lineTo(preX, preY);
            break;
          case 'H':
            preX = item[1];
            this.lineTo(preX, preY);
            break;
          case 'V':
            preY = item[1];
            this.lineTo(preX, preY);
            break;
          case 'C':
            preX = item[5];
            preY = item[6];
            this.bezierCurveTo(item[1], item[2], item[3], item[4], preX, preY);
            break;
          case 'S':

            if (preItem[0] === 'C' || preItem[0] === 'c') {
              this.bezierCurveTo(preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], item[1], item[2], item[3], item[4]);
            } else if (preItem[0] === 'S' || preItem[0] === 's') {
              this.bezierCurveTo(preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], item[1], item[2], item[3], item[4]);
            }
            preX = item[3];
            preY = item[4];
            break;

          case 'Q':
            preX = item[3];
            preY = item[4];
            this.quadraticCurveTo(item[1], item[2], preX, preY);
            break;

          case 'm':
            preX += item[1];
            preY += item[2];
            this.moveTo(preX, preY);
            break;
          case 'l':
            preX += item[1];
            preY += item[2];
            this.lineTo(preX, preY);
            break;
          case 'h':
            preX += item[1];
            this.lineTo(preX, preY);
            break;
          case 'v':
            preY += item[1];
            this.lineTo(preX, preY);
            break;
          case 'c':
            this.bezierCurveTo(preX + item[1], preY + item[2], preX + item[3], preY + item[4], preX + item[5], preY + item[6]);
            preX = preX + item[5];
            preY = preY + item[6];
            break;
          case 's':
            if (preItem[0] === 'C' || preItem[0] === 'c') {
              this.bezierCurveTo(preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], preX + item[1], preY + item[2], preX + item[3], preY + item[4]);
            } else if (preItem[0] === 'S' || preItem[0] === 's') {
              this.bezierCurveTo(preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], preX + item[1], preY + item[2], preX + item[3], preY + item[4]);
            }

            preX += item[3];
            preY += item[4];
            break;
          case 'q':

            this.quadraticCurveTo(preX + item[1], preY + item[2], item[3] + preX, item[4] + preY);
            preX += item[3];
            preY += item[4];
            break;
          case 'Z':
            this.closePath();
            break;
          case 'z':
            this.closePath();
            break;

          case 'a':
            curves = arcToBezier({
              rx: item[1],
              ry: item[2],
              px: preX,
              py: preY,
              xAxisRotation: item[3],
              largeArcFlag: item[4],
              sweepFlag: item[5],
              cx: preX + item[6],
              cy: preX + item[7]
            });
            lastCurve = curves[curves.length - 1];

            curves.forEach(function (curve, index) {
              if (index === 0) {
                _this2.moveTo(preX, preY);
                _this2.bezierCurveTo(curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y);
              } else {
                //curves[index - 1].x, curves[index - 1].y, 
                _this2.bezierCurveTo(curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y);
              }
            });

            preX = lastCurve.x;
            preY = lastCurve.y;

            break;

          case 'A':

            curves = arcToBezier({
              rx: item[1],
              ry: item[2],
              px: preX,
              py: preY,
              xAxisRotation: item[3],
              largeArcFlag: item[4],
              sweepFlag: item[5],
              cx: item[6],
              cy: item[7]
            });
            lastCurve = curves[curves.length - 1];

            curves.forEach(function (curve, index) {
              if (index === 0) {
                _this2.moveTo(preX, preY);
                _this2.bezierCurveTo(curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y);
              } else {
                //curves[index - 1].x, curves[index - 1].y
                _this2.bezierCurveTo(curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y);
              }
            });

            preX = lastCurve.x;
            preY = lastCurve.y;

            break;

          case 'T':

            if (preItem[0] === 'Q' || preItem[0] === 'q') {
              preCX = preX + preItem[3] - preItem[1];
              preCY = preY + preItem[4] - preItem[2];
              this.quadraticCurveTo(preX, preY, preCX, preCY, item[1], item[2]);
            } else if (preItem[0] === 'T' || preItem[0] === 't') {
              this.quadraticCurveTo(preX, preY, preX + preX - preCX, preY + preY - preCY, item[1], item[2]);
              preCX = preX + preX - preCX;
              preCY = preY + preY - preCY;
            }

            preX = item[1];
            preY = item[2];
            break;

          case 't':
            if (preItem[0] === 'Q' || preItem[0] === 'q') {
              preCX = preX + preItem[3] - preItem[1];
              preCY = preY + preItem[4] - preItem[2];
              this.quadraticCurveTo(preX, preY, preCX, preCY, preX + item[1], preY + item[2]);
            } else if (preItem[0] === 'T' || preItem[0] === 't') {
              this.quadraticCurveTo(preX, preY, preX + preX - preCX, preY + preY - preCY, preX + item[1], preY + item[2]);
              preCX = preX + preX - preCX;
              preCY = preY + preY - preCY;
            }

            preX += item[1];
            preY += item[2];
            break;
        }
      }
      if (this.option.fillStyle) {
        this.fillStyle(this.option.fillStyle);
        this.fill();
      }

      if (this.option.strokeStyle) {
        this.lineWidth(this.option.lineWidth);
        this.strokeStyle(this.option.strokeStyle);
        this.stroke();
      }
    };

    Path.prototype.clone = function clone() {
      return new Path(this.d, {
        lineWidth: this.option.lineWidth,
        strokeStyle: this.option.strokeStyle,
        fillStyle: this.option.fillStyle
      });
    };

    return Path;
  }(Shape);

  function _classCallCheck$25(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$16(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$16(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  /*
  Options
    font:
    text: 
    textColor:
    image: [path, width, height]
    bgColor: 
    bgImage: [path, width, height]
    borderRadius:
    borderColor:
  */

  var Button = function (_Group) {
    _inherits$16(Button, _Group);

    function Button(option) {
      _classCallCheck$25(this, Button);

      var _this = _possibleConstructorReturn$16(this, _Group.call(this));

      _this.width = option.width;
      _this.height = option.height;
      _this.x = option.x;
      _this.y = option.y;

      var textHeight = 0;
      var textGroup;

      if (option.text) {
        textGroup = new Group();
        _this.text = new Text(option.text, {
          font: option.font,
          color: option.color
        });
        var textWidth = _this.text.getWidth();

        if (textWidth > option.width) {
          var step = Math.round(option.text.length * option.width / textWidth / 2);

          var textList = _this.stringSplit(option.text, step);
          var lineHeight = option.lineHeight || 12;
          textHeight = textList.length * lineHeight + 6;

          textList.forEach(function (text, index) {
            _this.text = new Text(text, {
              font: option.font,
              color: option.color
            });

            _this.text.x = option.width / 2 - _this.text.getWidth() / 2 * _this.text.scaleX + (option.textX || 0);
            _this.text.y = Math.max(textHeight, option.height) / 2 - 10 + 5 * _this.text.scaleY + (option.textY || 0) + index * 12 - textHeight / 2 + lineHeight / 2;
            textGroup.add(_this.text);
          });
        } else {
          _this.text.x = option.width / 2 - _this.text.getWidth() / 2 * _this.text.scaleX + (option.textX || 0);
          _this.text.y = option.height / 2 - 10 + 5 * _this.text.scaleY + (option.textY || 0);
          textGroup.add(_this.text);
        }
      }

      if (option.bgImage) {
        var ratio = SCALE_RATIO;
        var bitmap = new Bitmap(option.bgImage[0]);
        bitmap.scaleX = ratio;
        bitmap.scaleY = ratio;
        bitmap.width = option.bgImage[1];
        bitmap.height = option.bgImage[2];
        bitmap.x = (_this.width - bitmap.width) / 2;
        bitmap.y = (_this.height - bitmap.height) / 2;
        _this.add(bitmap);
      } else if (option.bgColor || option.borderColor) {
        _this.roundedRect = new RoundedRect(option.width, option.autoHeight ? Math.max(textHeight, option.height) : option.height, option.borderRadius, {
          strokeStyle: option.borderColor || 'black',
          fillStyle: option.bgColor || '#F5F5F5'
        });
        _this.add(_this.roundedRect);
      }

      if (option.image) {
        var ratio = SCALE_RATIO;
        var _bitmap = new Bitmap(option.image[0]);
        _bitmap.scaleX = ratio;
        _bitmap.scaleY = ratio;
        _bitmap.width = option.image[1];
        _bitmap.height = option.image[2];
        _bitmap.x = (_this.width - _bitmap.width) / 2;
        _bitmap.y = (_this.height - _bitmap.height) / 2;
        _this.add(_bitmap);
      }

      if (textGroup) {
        _this.add(textGroup);
      }
      return _this;
    }

    Button.prototype.stringSplit = function stringSplit(str, len) {
      var arr = [],
          offset = 0,
          char_length = 0;
      for (var i = 0; i < str.length; i++) {
        var son_str = str.charAt(i);
        encodeURI(son_str).length > 2 ? char_length += 1 : char_length += 0.5;
        if (char_length >= len || char_length < len && i === str.length - 1) {
          var sub_len = char_length == len ? i + 1 : i;
          arr.push(str.substr(offset, sub_len - offset + (char_length < len && i === str.length - 1 ? 1 : 0)));
          offset = i + 1;
          char_length = 0;
        }
      }
      return arr;
    };

    return Button;
  }(Group);

  function _classCallCheck$26(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$17(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$17(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Rect = function (_Shape) {
    _inherits$17(Rect, _Shape);

    function Rect(width, height, option) {
      _classCallCheck$26(this, Rect);

      var _this = _possibleConstructorReturn$17(this, _Shape.call(this));

      _this.width = width;
      _this.height = height;
      _this.option = option || {};
      return _this;
    }

    Rect.prototype.draw = function draw() {
      if (this.option.fillStyle) {
        this.fillStyle(this.option.fillStyle);
        this.fillRect(0, 0, this.width, this.height);
      }

      if (this.option.strokeStyle) {
        this.strokeStyle(this.option.strokeStyle);
        if (typeof this.option.lineWidth === 'number') {
          this.lineWidth(this.option.lineWidth);
        }
        this.strokeRect(0, 0, this.width, this.height);
      }
    };

    return Rect;
  }(Shape);

  function _classCallCheck$27(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$18(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$18(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Circle = function (_Shape) {
    _inherits$18(Circle, _Shape);

    function Circle(r, option) {
      _classCallCheck$27(this, Circle);

      var _this = _possibleConstructorReturn$18(this, _Shape.call(this));

      _this.option = option || {};
      _this.r = r;

      _this._dp = Math.PI * 2;
      return _this;
    }

    Circle.prototype.draw = function draw() {
      this.beginPath();
      this.arc(0, 0, this.r, 0, this._dp, false);

      if (this.option.strokeStyle) {
        if (this.option.lineWidth !== undefined) {
          this.lineWidth(this.option.lineWidth);
        }
        this.strokeStyle(this.option.strokeStyle);
        this.stroke();
      }

      if (this.option.fillStyle) {
        this.fillStyle(this.option.fillStyle);
        this.fill();
      }
    };

    return Circle;
  }(Shape);

  function _classCallCheck$28(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$19(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$19(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Polygon = function (_Shape) {
    _inherits$19(Polygon, _Shape);

    function Polygon(vertex, options) {
      _classCallCheck$28(this, Polygon);

      var _this = _possibleConstructorReturn$19(this, _Shape.call(this));

      _this.vertex = vertex || [];
      _this.options = options || {};
      _this.strokeColor = _this.options.strokeColor;
      _this.fillColor = _this.options.fillColor;
      return _this;
    }

    Polygon.prototype.draw = function draw() {
      this.clear().beginPath();
      this.strokeStyle(this.strokeColor);
      this.moveTo(this.vertex[0][0], this.vertex[0][1]);

      for (var i = 1, len = this.vertex.length; i < len; i++) {
        this.lineTo(this.vertex[i][0], this.vertex[i][1]);
      }
      this.closePath();
      // 路径闭合
      //  if (this.options.strokeStyle) {
      //    this.strokeStyle = strokeStyle;
      // this.lineWidth(this.options.width);
      // this.lineJoin('round');
      // this.stroke();
      //  }
      if (this.strokeColor) {
        this.strokeStyle(this.strokeColor);
        this.stroke();
      }
      if (this.fillColor) {
        this.fillStyle(this.fillColor);
        this.fill();
      }
    };

    return Polygon;
  }(Shape);

  function _classCallCheck$29(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$20(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$20(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var EquilateralPolygon = function (_Shape) {
    _inherits$20(EquilateralPolygon, _Shape);

    function EquilateralPolygon(num, r, options) {
      _classCallCheck$29(this, EquilateralPolygon);

      var _this = _possibleConstructorReturn$20(this, _Shape.call(this));

      _this.num = num;
      _this.r = r;
      _this.options = options || {};

      _this.vertex = [];
      _this.initVertex();
      return _this;
    }

    EquilateralPolygon.prototype.initVertex = function initVertex() {
      this.vertex.length = [];
      var num = this.num;
      var r = this.r;
      var i = void 0,
          startX = void 0,
          startY = void 0,
          newX = void 0,
          newY = void 0;

      if (num % 2 === 0) {
        startX = r * Math.cos(2 * Math.PI * 0 / num);
        startY = r * Math.sin(2 * Math.PI * 0 / num);

        this.vertex.push([startX, startY]);
        for (i = 1; i < num; i++) {
          newX = r * Math.cos(2 * Math.PI * i / num);
          newY = r * Math.sin(2 * Math.PI * i / num);

          this.vertex.push([newX, newY]);
        }
      } else {
        startX = r * Math.cos(2 * Math.PI * 0 / num - Math.PI / 2);
        startY = r * Math.sin(2 * Math.PI * 0 / num - Math.PI / 2);

        this.vertex.push([startX, startY]);
        for (i = 1; i < num; i++) {
          newX = r * Math.cos(2 * Math.PI * i / num - Math.PI / 2);
          newY = r * Math.sin(2 * Math.PI * i / num - Math.PI / 2);

          this.vertex.push([newX, newY]);
        }
      }
    };

    EquilateralPolygon.prototype.draw = function draw() {
      this.beginPath();

      this.moveTo(this.vertex[0][0], this.vertex[0][1]);

      for (var i = 1, len = this.vertex.length; i < len; i++) {
        this.lineTo(this.vertex[i][0], this.vertex[i][1]);
      }
      this.closePath();

      if (this.options.fillStyle) {
        this.fillStyle(this.options.fillStyle);
        this.fill();
      }

      if (this.options.strokeStyle) {
        this.strokeStyle(this.options.strokeStyle);
        if (typeof this.options.lineWidth === 'number') {
          this.lineWidth(this.options.lineWidth);
        }
        this.stroke();
      }
    };

    return EquilateralPolygon;
  }(Shape);

  To.easing = {
    linear: TWEEN.Easing.Linear.None
  };

  var cax = {
    easing: {
      linear: TWEEN.Easing.Linear.None
    },
    util: {
      randomInt: function randomInt(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
      }
    },

    Stage: Stage,
    WeStage: WeStage,
    Graphics: Graphics,
    Bitmap: Bitmap,
    Text: Text,
    Group: Group,
    Sprite: Sprite,
    Shape: Shape,

    ArrowPath: ArrowPath,
    Ellipse: Ellipse,
    Path: Path,

    Button: Button,

    RoundedRect: RoundedRect,
    Rect: Rect,
    Circle: Circle,
    Polygon: Polygon,
    EquilateralPolygon: EquilateralPolygon,

    setInterval: setRafInterval,
    clearInterval: clearRafInterval,
    tick: function tick(fn) {
      return setRafInterval(fn, 16);
    },
    untick: function untick(tickId) {
      clearRafInterval(tickId);
    },

    caxCanvasId: 0,
    TWEEN: TWEEN,
    To: To
  };

  ['Quadratic', 'Cubic', 'Quartic', 'Quintic', 'Sinusoidal', 'Exponential', 'Circular', 'Elastic', 'Back', 'Bounce'].forEach(function (item) {
    var itemLower = item.toLowerCase();
    cax.easing[itemLower + 'In'] = TWEEN.Easing[item].In;
    cax.easing[itemLower + 'Out'] = TWEEN.Easing[item].Out;
    cax.easing[itemLower + 'InOut'] = TWEEN.Easing[item].InOut;

    To.easing[itemLower + 'In'] = TWEEN.Easing[item].In;
    To.easing[itemLower + 'Out'] = TWEEN.Easing[item].Out;
    To.easing[itemLower + 'InOut'] = TWEEN.Easing[item].InOut;
  });

  var isWegame$1 = typeof wx !== 'undefined' && wx.createCanvas;

  cax.loadImg = function (option) {
    var img = isWegame$1 ? wx.createImage() : new Image();
    img.onload = function () {
      option.complete(this);
    };
    img.src = option.img;
  };

  cax.loadImgs = function (option) {
    var result = [];
    var loaded = 0;
    var len = option.imgs.length;
    option.imgs.forEach(function (src, index) {
      var img = isWegame$1 ? wx.createImage() : new Image();
      img.onload = function (i, img) {
        return function () {
          result[i] = img;
          loaded++;
          option.progress && option.progress(loaded / len, loaded, i, img, result);
          if (loaded === len) {
            option.complete && option.complete(result);
          }
        };
      }(index, img);
      img.src = src;
    });
  };

  function draw(root, width, height) {
  	var stage = new cax.Stage(window.innerWidth, window.innerHeight, 'body');
  	// root.style.x = 0
  	// root.style.y = 0
  	root.style._width = root.style.width === undefined ? width : root.style.width;
  	root.style._height = root.style.height === undefined ? 0 : root.style.height;

  	var group = _draw(root, stage);

  	if (root.childNodes) {
  		root.childNodes.forEach(function (child) {
  			child.style._color = child.style.color || root.style.color;
  			renderChildren(child, width, height, group);
  		});
  	}

  	stage.hitAABB = true;
  	//debug
  	//window.stage = stage
  	//console.log(stage)

  	cax.tick(function () {
  		stage.update();
  	});

  	return stage.canvas;
  }

  function _draw(root, g) {

  	switch (root.type) {
  		case 'div':
  		case 'button':
  		case 'span':
  			var group = new cax.Group();
  			Object.keys(root.event).forEach(function (key) {
  				group.on(key, root.event[key].bind(root));
  			});
  			group.width = parseFloat(root.style.width);
  			group.height = parseFloat(root.style.height);
  			group.cursor = root.style.cursor;
  			group.zIndex = root.style.zIndex;
  			group.position = root.style.position;
  			//bg rect
  			var rect = new cax.Rect(parseFloat(root.style._width), parseFloat(root.style._height), {
  				fillStyle: root.style.backgroundColor
  			});

  			group.x = root.style.x || 0;
  			group.y = root.style.y || 0;
  			group.add(rect);
  			root.childNodes.forEach(function (child) {
  				_draw(child, group);
  			});
  			g.add(group);
  			return group;
  			break;

  		case 'text':
  			var text = new cax.Text(root.nodeValue, {
  				color: root.style._color
  			});
  			//link it by _renderText
  			root._renderText = text;
  			text.x = root.style.x || 0;
  			text.y = root.style.y || 0;

  			g.add(text);

  			return text;
  			break;

  		case 'img':
  			var bmp = new cax.Bitmap(root.src);
  			bmp.x = root.style.x || 0;
  			bmp.y = root.style.y || 0;

  			g.add(bmp);

  			return bmp;
  		// case 'button':

  		// 	break

  		// case 'span':

  		// 	break

  		// case 'div':

  		// 	break

  	}
  }

  function getParent(root) {
  	if (!root.parent) {
  		return root;
  	} else if (root.parent.style.position !== 'static') {

  		return root.parent;
  	} else {
  		return getParent(root.parent);
  	}
  }

  function renderChildren(root, width, height, group) {
  	//fix it?

  	var display = root.parentNode.style.display;
  	var position = root.style.position;

  	if (position === 'absolute') {
  		var parent = getParent(root);

  		// root.style.x = (parent.style.x || 0 )  + parseFloat( root.style.left)
  		// root.style.y = (parent.style.y || 0 )  + parseFloat( root.style.top)
  		root.style._width = root.style.width === undefined ? 0 : root.style.width;

  		root.style._height = root.style.height === undefined ? 0 : root.style.height;
  	} else if (display === 'block') {
  		root.style._width = root.style.width === undefined ? root.parent ? root.parent.style._width : window.innerWidth : root.style.width;
  		root.style._height = root.style.height === undefined ? 0 : root.style.height;
  		//root.style.x = root.parent?root.parent.style.x:0
  		if (root.preNode) {
  			//	root.style.y = root.preNode.style.y + root.preNode.style._height
  		} else {

  				//	root.style.y = root.parent?root.parent.style.y:0
  			}
  	} else if (display === 'flex') {

  		if (root.parent.totalFlex !== undefined) {
  			root.style._flex = root.style.flex / root.parent.totalFlex;
  		} else {
  			root.parent.totalFlex = 0;
  			var len = root.parent.children.length;
  			if (len > 1) {
  				root.parent.children.forEach(function (child) {
  					if (child.style.position != 'absolute' && child.style.position != 'fixed') {
  						child.style._flexPosition = root.parent.totalFlex;
  						root.parent.totalFlex += child.style.flex;
  					}
  				});
  			}
  			root.style._flex = root.style.flex / root.parent.totalFlex;
  		}

  		//root.style.x = width * root.style._flexPosition / root.parent.totalFlex


  		root.style._width = width * root.style._flex;
  		root.style._height = root.style.height === undefined ? 0 : root.style.height;

  		//root.style.y = root.parent.style.y
  	}

  	// const newg = _draw(root, group)

  	// if (root.children) {
  	// 		root.children.forEach(child => {
  	// 				child.style._color = child.style.color || root.style.color || root.style._color
  	// 				renderChildren(child, width, height, newg)
  	// 		})
  	// }

  }

  /** Queue of components that have been mounted and are awaiting componentDidMount */
  var mounts = [];

  /** Diff recursion count, used to track the end of the diff cycle. */
  var diffLevel = 0;

  /** Global flag indicating if the diff is currently within an SVG */
  var isSvgMode = false;

  /** Global flag indicating if the diff is performing hydration */
  var hydrating = false;

  /** Invoke queued componentDidMount lifecycle methods */
  function flushMounts() {
    var c = void 0;
    while (c = mounts.pop()) {
      if (options.afterMount) options.afterMount(c);
      if (c.installed) c.installed();
    }
  }

  /** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
   *	@param {Element} [dom=null]		A DOM node to mutate into the shape of the `vnode`
   *	@param {VNode} vnode			A VNode (with descendants forming a tree) representing the desired DOM structure
   *	@returns {Element} dom			The created/mutated element
   *	@private
   */
  function diff(dom, vnode, context, mountAll, parent, componentRoot, fromRender) {
    // diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
    if (!diffLevel++) {
      // when first starting the diff, check if we're diffing an SVG or within an SVG
      isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

      // hydration is indicated by the existing element to be diffed not having a prop cache
      hydrating = dom != null && !(ATTR_KEY in dom);
    }
    var ret = void 0;

    if (isArray(vnode)) {
      vnode = {
        nodeName: 'span',
        children: vnode
      };
    }

    ret = idiff(dom, vnode, context, mountAll, componentRoot);
    // append the element if its a new parent
    if (parent && ret.parentNode !== parent) {
      if (fromRender) {
        parent.appendChild(draw(ret));
      } else {
        parent.appendChild(ret);
      }
    }

    // diffLevel being reduced to 0 means we're exiting the diff
    if (! --diffLevel) {
      hydrating = false;
      // invoke queued componentDidMount lifecycle methods
      if (!componentRoot) flushMounts();
    }

    return ret;
  }

  /** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
  function idiff(dom, vnode, context, mountAll, componentRoot) {
    var out = dom,
        prevSvgMode = isSvgMode;

    // empty values (null, undefined, booleans) render as empty Text nodes
    if (vnode == null || typeof vnode === 'boolean') vnode = '';

    // If the VNode represents a Component, perform a component diff:
    var vnodeName = vnode.nodeName;
    if (options.mapping[vnodeName]) {
      vnode.nodeName = options.mapping[vnodeName];
      return buildComponentFromVNode(dom, vnode, context, mountAll);
    }
    if (typeof vnodeName == 'function') {
      return buildComponentFromVNode(dom, vnode, context, mountAll);
    }

    // Fast case: Strings & Numbers create/update Text nodes.
    if (typeof vnode === 'string' || typeof vnode === 'number') {
      // update if it's already a Text node:
      if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
        /* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
        if (dom.nodeValue != vnode) {
          dom.nodeValue = vnode;
        }
      } else {
        // it wasn't a Text node: replace it with one and recycle the old Element
        out = options.doc.createTextNode(vnode);
        if (dom) {
          if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
          recollectNodeTree(dom, true);
        }
      }

      //ie8 error
      try {
        out[ATTR_KEY] = true;
      } catch (e) {}

      return out;
    }

    // Tracks entering and exiting SVG namespace when descending through the tree.
    isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

    // If there's no existing element or it's the wrong type, create a new one:
    vnodeName = String(vnodeName);
    if (!dom || !isNamedNode(dom, vnodeName)) {
      out = createNode(vnodeName, isSvgMode);

      if (dom) {
        // move children into the replacement node
        while (dom.firstChild) {
          out.appendChild(dom.firstChild);
        } // if the previous Element was mounted into the DOM, replace it inline
        if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

        // recycle the old element (skips non-Element node types)
        recollectNodeTree(dom, true);
      }
    }

    var fc = out.firstChild,
        props = out[ATTR_KEY],
        vchildren = vnode.children;

    if (props == null) {
      props = out[ATTR_KEY] = {};
      for (var a = out.attributes, i = a.length; i--;) {
        props[a[i].name] = a[i].value;
      }
    }

    // Optimization: fast-path for elements containing a single TextNode:
    if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
      if (fc.nodeValue != vchildren[0]) {
        fc.nodeValue = vchildren[0];
        //update rendering obj
        fc._renderText.text = fc.nodeValue;
      }
    }
    // otherwise, if there are existing or new children, diff them:
    else if (vchildren && vchildren.length || fc != null) {
        innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
      }

    // Apply attributes/props from VNode to the DOM Element:
    diffAttributes(out, vnode.attributes, props);

    // restore previous SVG mode: (in case we're exiting an SVG namespace)
    isSvgMode = prevSvgMode;

    return out;
  }

  /** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
   *	@param {Element} dom			Element whose children should be compared & mutated
   *	@param {Array} vchildren		Array of VNodes to compare to `dom.childNodes`
   *	@param {Object} context			Implicitly descendant context object (from most recent `getChildContext()`)
   *	@param {Boolean} mountAll
   *	@param {Boolean} isHydrating	If `true`, consumes externally created elements similar to hydration
   */
  function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
    var originalChildren = dom.childNodes,
        children = [],
        keyed = {},
        keyedLen = 0,
        min = 0,
        len = originalChildren.length,
        childrenLen = 0,
        vlen = vchildren ? vchildren.length : 0,
        j = void 0,
        c = void 0,
        f = void 0,
        vchild = void 0,
        child = void 0;

    // Build up a map of keyed children and an Array of unkeyed children:
    if (len !== 0) {
      for (var i = 0; i < len; i++) {
        var _child = originalChildren[i],
            props = _child[ATTR_KEY],
            key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
        if (key != null) {
          keyedLen++;
          keyed[key] = _child;
        } else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
          children[childrenLen++] = _child;
        }
      }
    }

    if (vlen !== 0) {
      for (var _i = 0; _i < vlen; _i++) {
        vchild = vchildren[_i];
        child = null;

        // attempt to find a node based on key matching
        var _key = vchild.key;
        if (_key != null) {
          if (keyedLen && keyed[_key] !== undefined) {
            child = keyed[_key];
            keyed[_key] = undefined;
            keyedLen--;
          }
        }
        // attempt to pluck a node of the same type from the existing children
        else if (!child && min < childrenLen) {
            for (j = min; j < childrenLen; j++) {
              if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
                child = c;
                children[j] = undefined;
                if (j === childrenLen - 1) childrenLen--;
                if (j === min) min++;
                break;
              }
            }
          }

        // morph the matched/found/created DOM child to match vchild (deep)
        child = idiff(child, vchild, context, mountAll);

        f = originalChildren[_i];
        if (child && child !== dom && child !== f) {
          if (f == null) {
            dom.appendChild(child);
          } else if (child === f.nextSibling) {
            removeNode(f);
          } else {
            dom.insertBefore(child, f);
          }
        }
      }
    }

    // remove unused keyed children:
    if (keyedLen) {
      for (var _i2 in keyed) {
        if (keyed[_i2] !== undefined) recollectNodeTree(keyed[_i2], false);
      }
    }

    // remove orphaned unkeyed children:
    while (min <= childrenLen) {
      if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
    }
  }

  /** Recursively recycle (or just unmount) a node and its descendants.
   *	@param {Node} node						DOM node to start unmount/removal from
   *	@param {Boolean} [unmountOnly=false]	If `true`, only triggers unmount lifecycle, skips removal
   */
  function recollectNodeTree(node, unmountOnly) {
    var component = node._component;
    if (component) {
      // if node is owned by a Component, unmount that component (ends up recursing back here)
      unmountComponent(component);
    } else {
      // If the node's VNode had a ref function, invoke it with null here.
      // (this is part of the React spec, and smart for unsetting references)
      if (node[ATTR_KEY] != null) applyRef(node[ATTR_KEY].ref, null);

      if (unmountOnly === false || node[ATTR_KEY] == null) {
        removeNode(node);
      }

      removeChildren(node);
    }
  }

  /** Recollect/unmount all children.
   *	- we use .lastChild here because it causes less reflow than .firstChild
   *	- it's also cheaper than accessing the .childNodes Live NodeList
   */
  function removeChildren(node) {
    node = node.lastChild;
    while (node) {
      var next = node.previousSibling;
      recollectNodeTree(node, true);
      node = next;
    }
  }

  /** Apply differences in attributes from a VNode to the given DOM Element.
   *	@param {Element} dom		Element with attributes to diff `attrs` against
   *	@param {Object} attrs		The desired end-state key-value attribute pairs
   *	@param {Object} old			Current/previous attributes (from previous VNode or element's prop cache)
   */
  function diffAttributes(dom, attrs, old) {
    var name = void 0;

    // remove attributes no longer present on the vnode by setting them to undefined
    for (name in old) {
      if (!(attrs && attrs[name] != null) && old[name] != null) {
        setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
      }
    }

    // add new & update changed attributes
    for (name in attrs) {
      if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
        setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
      }
    }
  }

  /** Retains a pool of Components for re-use, keyed on component name.
   *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
   *	@private
   */
  var components = {};

  /** Reclaim a component for later re-use by the recycler. */
  function collectComponent(component) {
    var name = component.constructor.name;(components[name] || (components[name] = [])).push(component);
  }

  /** Create a component. Normalizes differences between PFC's and classful Components. */
  function createComponent(Ctor, props, context, vnode) {
    var list = components[Ctor.name],
        inst = void 0;

    if (Ctor.prototype && Ctor.prototype.render) {
      inst = new Ctor(props, context);
      Component.call(inst, props, context);
    } else {
      inst = new Component(props, context);
      inst.constructor = Ctor;
      inst.render = doRender;
    }
    vnode && (inst.scopedCssAttr = vnode.css);

    if (list) {
      for (var i = list.length; i--;) {
        if (list[i].constructor === Ctor) {
          inst.nextBase = list[i].nextBase;
          list.splice(i, 1);
          break;
        }
      }
    }
    return inst;
  }

  /** The `.render()` method for a PFC backing instance. */
  function doRender(props, data, context) {
    return this.constructor(props, context);
  }

  /* obaa 1.0.0
   * By dntzhang
   * Github: https://github.com/Tencent/omi
   * MIT Licensed.
   */

  var obaa = function obaa(target, arr, callback) {
    var _observe = function _observe(target, arr, callback) {
      if (!target.$observer) target.$observer = this;
      var $observer = target.$observer;
      var eventPropArr = [];
      if (obaa.isArray(target)) {
        if (target.length === 0) {
          target.$observeProps = {};
          target.$observeProps.$observerPath = '#';
        }
        $observer.mock(target);
      }
      for (var prop in target) {
        if (target.hasOwnProperty(prop)) {
          if (callback) {
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
        }
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
      onPropertyChanged: function onPropertyChanged(prop, value, oldValue, target, path) {
        if (value !== oldValue && this.propertyChangedHandler) {
          var rootName = obaa._getRootName(prop, path);
          for (var i = 0, len = this.propertyChangedHandler.length; i < len; i++) {
            var handler = this.propertyChangedHandler[i];
            if (handler.all || obaa.isInArray(handler.eventPropArr, rootName) || rootName.indexOf('Array-') === 0) {
              handler.propChanged.call(this.target, prop, value, oldValue, path);
            }
          }
        }
        if (prop.indexOf('Array-') !== 0 && typeof value === 'object') {
          this.watch(target, prop, target.$observeProps.$observerPath);
        }
      },
      mock: function mock(target) {
        var self = this;
        obaa.methods.forEach(function (item) {
          target[item] = function () {
            var old = Array.prototype.slice.call(this, 0);
            var result = Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
            if (new RegExp('\\b' + item + '\\b').test(obaa.triggerStr)) {
              for (var cprop in this) {
                if (this.hasOwnProperty(cprop) && !obaa.isFunction(this[cprop])) {
                  self.watch(this, cprop, this.$observeProps.$observerPath);
                }
              }
              //todo
              self.onPropertyChanged('Array-' + item, this, old, this, this.$observeProps.$observerPath);
            }
            return result;
          };
          target['pure' + item.substring(0, 1).toUpperCase() + item.substring(1)] = function () {
            return Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
          };
        });
      },
      watch: function watch(target, prop, path) {
        if (prop === '$observeProps' || prop === '$observer') return;
        if (obaa.isFunction(target[prop])) return;
        if (!target.$observeProps) target.$observeProps = {};
        if (path !== undefined) {
          target.$observeProps.$observerPath = path;
        } else {
          target.$observeProps.$observerPath = '#';
        }
        var self = this;
        var currentValue = target.$observeProps[prop] = target[prop];
        Object.defineProperty(target, prop, {
          get: function get() {
            return this.$observeProps[prop];
          },
          set: function set(value) {
            var old = this.$observeProps[prop];
            this.$observeProps[prop] = value;
            self.onPropertyChanged(prop, value, old, this, target.$observeProps.$observerPath);
          }
        });
        if (typeof currentValue == 'object') {
          if (obaa.isArray(currentValue)) {
            this.mock(currentValue);
            if (currentValue.length === 0) {
              if (!currentValue.$observeProps) currentValue.$observeProps = {};
              if (path !== undefined) {
                currentValue.$observeProps.$observerPath = path;
              } else {
                currentValue.$observeProps.$observerPath = '#';
              }
            }
          }
          for (var cprop in currentValue) {
            if (currentValue.hasOwnProperty(cprop)) {
              this.watch(currentValue, cprop, target.$observeProps.$observerPath + '-' + prop);
            }
          }
        }
      }
    };
    return new _observe(target, arr, callback);
  };

  obaa.methods = ['concat', 'copyWithin', 'entries', 'every', 'fill', 'filter', 'find', 'findIndex', 'forEach', 'includes', 'indexOf', 'join', 'keys', 'lastIndexOf', 'map', 'pop', 'push', 'reduce', 'reduceRight', 'reverse', 'shift', 'slice', 'some', 'sort', 'splice', 'toLocaleString', 'toString', 'unshift', 'values', 'size'];
  obaa.triggerStr = ['concat', 'copyWithin', 'fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'size'].join(',');

  obaa.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  obaa.isString = function (obj) {
    return typeof obj === 'string';
  };

  obaa.isInArray = function (arr, item) {
    for (var i = arr.length; --i > -1;) {
      if (item === arr[i]) return true;
    }
    return false;
  };

  obaa.isFunction = function (obj) {
    return Object.prototype.toString.call(obj) == '[object Function]';
  };

  obaa._getRootName = function (prop, path) {
    if (path === '#') {
      return prop;
    }
    return path.split('-')[1];
  };

  obaa.add = function (obj, prop) {
    var $observer = obj.$observer;
    $observer.watch(obj, prop);
  };

  obaa.set = function (obj, prop, value, exec) {
    if (!exec) {
      obj[prop] = value;
    }
    var $observer = obj.$observer;
    $observer.watch(obj, prop);
    if (exec) {
      obj[prop] = value;
    }
  };

  Array.prototype.size = function (length) {
    this.length = length;
  };

  var callbacks = [];
  var nextTickCallback = [];

  function fireTick() {
    callbacks.forEach(function (item) {
      item.fn.call(item.scope);
    });

    nextTickCallback.forEach(function (nextItem) {
      nextItem.fn.call(nextItem.scope);
    });
    nextTickCallback.length = 0;
  }

  function proxyUpdate(ele) {
    var timeout = null;
    obaa(ele.data, function () {
      if (ele._willUpdate) {
        return;
      }
      if (ele.constructor.mergeUpdate) {
        clearTimeout(timeout);

        timeout = setTimeout(function () {
          ele.update();
          fireTick();
        }, 0);
      } else {
        ele.update();
        fireTick();
      }
    });
  }

  /** Set a component's `props` (generally derived from JSX attributes).
   *	@param {Object} props
   *	@param {Object} [opts]
   *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
   *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
   */
  function setComponentProps(component, props, opts, context, mountAll) {
    if (component._disable) return;
    component._disable = true;

    if (component.__ref = props.ref) delete props.ref;
    if (component.__key = props.key) delete props.key;

    if (!component.base || mountAll) {
      if (component.beforeInstall) component.beforeInstall();
      if (component.install) component.install();
      if (component.constructor.observe) {
        proxyUpdate(component);
      }
    } else if (component.receiveProps) {
      component.receiveProps(props, component.data, component.props);
    }

    if (context && context !== component.context) {
      if (!component.prevContext) component.prevContext = component.context;
      component.context = context;
    }

    if (!component.prevProps) component.prevProps = component.props;
    component.props = props;

    component._disable = false;

    if (opts !== NO_RENDER) {
      if (opts === SYNC_RENDER || options.syncComponentUpdates !== false || !component.base) {
        renderComponent(component, SYNC_RENDER, mountAll);
      } else {
        enqueueRender(component);
      }
    }

    applyRef(component.__ref, component);
  }

  function shallowComparison(old, attrs) {
    var name = void 0;

    for (name in old) {
      if (attrs[name] == null && old[name] != null) {
        return true;
      }
    }

    if (old.children.length > 0 || attrs.children.length > 0) {
      return true;
    }

    for (name in attrs) {
      if (name != 'children') {
        var type = typeof attrs[name];
        if (type == 'function' || type == 'object') {
          return true;
        } else if (attrs[name] != old[name]) {
          return true;
        }
      }
    }
  }

  /** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
   *	@param {Component} component
   *	@param {Object} [opts]
   *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
   *	@private
   */
  function renderComponent(component, opts, mountAll, isChild) {
    if (component._disable) return;

    var props = component.props,
        data = component.data,
        context = component.context,
        previousProps = component.prevProps || props,
        previousState = component.prevState || data,
        previousContext = component.prevContext || context,
        isUpdate = component.base,
        nextBase = component.nextBase,
        initialBase = isUpdate || nextBase,
        initialChildComponent = component._component,
        skip = false,
        rendered = void 0,
        inst = void 0,
        cbase = void 0;

    // if updating
    if (isUpdate) {
      component.props = previousProps;
      component.data = previousState;
      component.context = previousContext;
      if (component.store || opts == FORCE_RENDER || shallowComparison(previousProps, props)) {
        skip = false;
        if (component.beforeUpdate) {
          component.beforeUpdate(props, data, context);
        }
      } else {
        skip = true;
      }
      component.props = props;
      component.data = data;
      component.context = context;
    }

    component.prevProps = component.prevState = component.prevContext = component.nextBase = null;

    if (!skip) {
      component.beforeRender && component.beforeRender();
      rendered = component.render(props, data, context);

      // context to pass to the child, can be updated via (grand-)parent component
      if (component.getChildContext) {
        context = extend(extend({}, context), component.getChildContext());
      }

      var childComponent = rendered && rendered.nodeName,
          toUnmount = void 0,
          base = void 0,
          ctor = options.mapping[childComponent];

      if (ctor) {
        // set up high order component link

        var childProps = getNodeProps(rendered);
        inst = initialChildComponent;

        if (inst && inst.constructor === ctor && childProps.key == inst.__key) {
          setComponentProps(inst, childProps, SYNC_RENDER, context, false);
        } else {
          toUnmount = inst;

          component._component = inst = createComponent(ctor, childProps, context);
          inst.nextBase = inst.nextBase || nextBase;
          inst._parentComponent = component;
          setComponentProps(inst, childProps, NO_RENDER, context, false);
          renderComponent(inst, SYNC_RENDER, mountAll, true);
        }

        base = inst.base;
      } else {
        cbase = initialBase;

        // destroy high order component link
        toUnmount = initialChildComponent;
        if (toUnmount) {
          cbase = component._component = null;
        }

        if (initialBase || opts === SYNC_RENDER) {
          if (cbase) cbase._component = null;
          base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
        }
      }

      if (initialBase && base !== initialBase && inst !== initialChildComponent) {
        var baseParent = initialBase.parentNode;
        if (baseParent && base !== baseParent) {
          baseParent.replaceChild(base, initialBase);

          if (!toUnmount) {
            initialBase._component = null;
            recollectNodeTree(initialBase, false);
          }
        }
      }

      if (toUnmount) {
        unmountComponent(toUnmount);
      }

      component.base = base;
      if (base && !isChild) {
        var componentRef = component,
            t = component;
        while (t = t._parentComponent) {
  (componentRef = t).base = base;
        }
        base._component = componentRef;
        base._componentConstructor = componentRef.constructor;
      }
    }

    if (!isUpdate || mountAll) {
      mounts.unshift(component);
    } else if (!skip) {
      // Ensure that pending componentDidMount() hooks of child components
      // are called before the componentDidUpdate() hook in the parent.
      // Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
      // flushMounts();

      if (component.afterUpdate) {
        //deprecated
        component.afterUpdate(previousProps, previousState, previousContext);
      }
      if (component.updated) {
        component.updated(previousProps, previousState, previousContext);
      }
      if (options.afterUpdate) options.afterUpdate(component);
    }

    if (component._renderCallbacks != null) {
      while (component._renderCallbacks.length) {
        component._renderCallbacks.pop().call(component);
      }
    }

    if (!diffLevel && !isChild) flushMounts();
  }

  /** Apply the Component referenced by a VNode to the DOM.
   *	@param {Element} dom	The DOM node to mutate
   *	@param {VNode} vnode	A Component-referencing VNode
   *	@returns {Element} dom	The created/mutated element
   *	@private
   */
  function buildComponentFromVNode(dom, vnode, context, mountAll) {
    var c = dom && dom._component,
        originalComponent = c,
        oldDom = dom,
        isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
        isOwner = isDirectOwner,
        props = getNodeProps(vnode);
    while (c && !isOwner && (c = c._parentComponent)) {
      isOwner = c.constructor === vnode.nodeName;
    }

    if (c && isOwner && (!mountAll || c._component)) {
      setComponentProps(c, props, ASYNC_RENDER, context, mountAll);
      dom = c.base;
    } else {
      if (originalComponent && !isDirectOwner) {
        unmountComponent(originalComponent);
        dom = oldDom = null;
      }

      c = createComponent(vnode.nodeName, props, context, vnode);
      if (dom && !c.nextBase) {
        c.nextBase = dom;
        // passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
        oldDom = null;
      }
      setComponentProps(c, props, SYNC_RENDER, context, mountAll);
      dom = c.base;

      if (oldDom && dom !== oldDom) {
        oldDom._component = null;
        recollectNodeTree(oldDom, false);
      }
    }

    return dom;
  }

  /** Remove a component from the DOM and recycle it.
   *	@param {Component} component	The Component instance to unmount
   *	@private
   */
  function unmountComponent(component) {
    if (options.beforeUnmount) options.beforeUnmount(component);

    var base = component.base;

    component._disable = true;

    if (component.uninstall) component.uninstall();

    component.base = null;

    // recursively tear down & recollect high-order component children:
    var inner = component._component;
    if (inner) {
      unmountComponent(inner);
    } else if (base) {
      if (base[ATTR_KEY] != null) applyRef(base[ATTR_KEY].ref, null);

      component.nextBase = base;

      removeNode(base);
      collectComponent(component);

      removeChildren(base);
    }

    applyRef(component.__ref, null);
  }

  var _class, _temp;

  function _classCallCheck$30(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var id$1 = 0;

  var Component = (_temp = _class = function () {
    function Component(props, store) {
      _classCallCheck$30(this, Component);

      this.props = assign(nProps(this.constructor.props), this.constructor.defaultProps, props);
      this.elementId = id$1++;
      this.data = this.constructor.data || this.data || {};

      this._preCss = null;

      this.store = store;
    }

    Component.prototype.update = function update(callback) {
      this._willUpdate = true;
      if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
      renderComponent(this, FORCE_RENDER);
      if (options.componentChange) options.componentChange(this, this.base);
      this._willUpdate = false;
    };

    Component.prototype.fire = function fire(type, data) {
      var _this = this;

      Object.keys(this.props).every(function (key) {
        if ('on' + type.toLowerCase() === key.toLowerCase()) {
          _this.props[key]({ detail: data });
          return false;
        }
        return true;
      });
    };

    Component.prototype.render = function render() {};

    return Component;
  }(), _class.is = 'WeElement', _temp);

  /** Render JSX into a `parent` Element.
   *	@param {VNode} vnode		A (JSX) VNode to render
   *	@param {Element} parent		DOM element to render into
   *	@param {object} [store]
   *	@public
   */
  function render(vnode, parent, store, empty, merge) {
    parent = typeof parent === 'string' ? document.querySelector(parent) : parent;

    if (empty) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }

    if (merge) {
      merge = typeof merge === 'string' ? document.querySelector(merge) : merge;
    }

    return diff(merge, vnode, store, false, parent, false, true);
  }

  function define(name, ctor) {
    options.mapping[name] = ctor;
  }

  var WeElement = Component;
  var root$1 = getGlobal$2();
  var omix = {
    h: h,
    define: define,
    Component: Component,
    render: render,
    WeElement: WeElement,
    options: options
  };

  root$1.Omi = omix;
  root$1.omi = omix;
  root$1.omix = omix;
  root$1.omix.version = '0.0.0';

  function getGlobal$2() {
    if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
      if (typeof self !== 'undefined') {
        return self;
      } else if (typeof window !== 'undefined') {
        return window;
      } else if (typeof global !== 'undefined') {
        return global;
      }
      return function () {
        return this;
      }();
    }
    return global;
  }

  function _classCallCheck$31(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$21(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$21(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  define('my-counter', function (_WeElement) {
    _inherits$21(_class2, _WeElement);

    function _class2() {
      var _temp, _this, _ret;

      _classCallCheck$31(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn$21(this, _WeElement.call.apply(_WeElement, [this].concat(args))), _this), _this.count = 1, _this.sub = function () {
        _this.count--;
        _this.update();
      }, _this.add = function () {
        _this.count++;
        _this.update();
      }, _this.buttonAStyle = {
        x: 0,
        color: 'red',
        cursor: 'pointer',
        backgroundColor: 'green',
        width: 20,
        height: 20
      }, _this.buttonBStyle = {
        x: 40,
        color: 'red',
        cursor: 'pointer',
        backgroundColor: 'green',
        width: 20,
        height: 20
      }, _this.testStyle = {
        x: 20,
        backgroundColor: 'red'
      }, _this.divStyle = {
        x: 100,
        y: 100,
        width: 100,
        height: 40,
        backgroundColor: '#ccc'
      }, _temp), _possibleConstructorReturn$21(_this, _ret);
    }

    _class2.prototype.render = function render$$1() {
      return Omi.h(
        'div',
        { style: this.divStyle },
        Omi.h(
          'button',
          { style: this.buttonAStyle, onClick: this.sub },
          '-'
        ),
        Omi.h(
          'span',
          { style: this.testStyle },
          this.count
        ),
        Omi.h(
          'button',
          { style: this.buttonBStyle, onClick: this.add },
          '+'
        )
      );
    };

    return _class2;
  }(WeElement));

  render(Omi.h('my-counter', null), 'body');

}());
//# sourceMappingURL=b.js.map

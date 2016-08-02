/* Nuclear  v0.3.1
 * By AlloyTeam http://www.alloyteam.com/
 * Github: https://github.com/AlloyTeam/Nuclear
 * MIT Licensed.
 */
(function( global, factory ) {

    if ( typeof module === "object" && typeof module.exports === "object" ) {
        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get Nuclear.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var Nuclear = require("alloynuclear")(window);
        // e.g. var Nuclear = require("alloynuclear")(jsdom.jsdom().defaultView);
        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "Nuclear requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

    var Nuclear={};
    var document=window.document;


(function(){
    'use strict'

    var NODE_INDEX = '__set-dom-index__'
    var ELEMENT_TYPE = 1
    var DOCUMENT_TYPE = 9
    var HTML_ELEMENT = document.createElement('html')
    var BODY_ELEMENT = document.createElement('body')



    /**
     * @description
     * Updates existing dom to match a new dom.
     *
     * @param {HTMLEntity} prev - The html entity to update.
     * @param {String|HTMLEntity} next - The updated html(entity).
     */
    function setDOM (prev, next) {
        // Ensure a realish dom node is provided.
        assert(prev && prev.nodeType, 'You must provide a valid node to update.')

        // Alias document element with document.
        if (prev.nodeType === DOCUMENT_TYPE) prev = prev.documentElement

        // If a string was provided we will parse it as dom.
        if (typeof next === 'string') {
            if (prev === document.documentElement) {
                HTML_ELEMENT.innerHTML = next
                next = HTML_ELEMENT
            } else {
                BODY_ELEMENT.innerHTML = next
                next = BODY_ELEMENT.firstChild
            }
        }

        // Update the node.
        setNode(prev, next)
    }

    /**
     * @private
     * @description
     * Updates a specific htmlNode and does whatever it takes to convert it to another one.
     *
     * @param {HTMLEntity} prev - The previous HTMLNode.
     * @param {HTMLEntity} next - The updated HTMLNode.
     */
    function setNode (prev, next) {
        // Handle regular element node updates.
        if (prev.nodeType === ELEMENT_TYPE) {
            // Update all children (and subchildren).
            setChildNodes(prev, prev.childNodes, next.childNodes)

            // Update the elements attributes / tagName.
            if (prev.nodeName === next.nodeName) {
                // If we have the same nodename then we can directly update the attributes.
                setAttributes(prev, prev.attributes, next.attributes)
            } else {
                // Otherwise clone the new node to use as the existing node.
                var newPrev = next.cloneNode()
                // Copy over all existing children from the original node.
                while (prev.firstChild) newPrev.appendChild(prev.firstChild)
                // Replace the original node with the new one with the right tag.
                prev.parentNode.replaceChild(newPrev, prev)
            }
        } else if (prev.nodeType === next.nodeType) {
            // Handle other types of node updates (text/comments/etc).
            // If both are the same type of node we can update directly.
            prev.nodeValue = next.nodeValue
        } else {
            // we have to replace the node.
            prev.parentNode.replaceChild(next, prev)
        }
    }

    /*
     * @private
     * @description
     * Utility that will update one list of attributes to match another.
     *
     * @param {HTMLEntity} parent - The current parentNode being updated.
     * @param {Attributes} prev - The previous attributes.
     * @param {Attributes} next - The updated attributes.
     */
    function setAttributes (parent, prev, next) {
        var i, a, b, ns

        // Remove old attributes.
        for (i = prev.length; i--;) {
            a = prev[i]
            ns = a.namespaceURI
            b = next.getNamedItemNS(ns, a.name)
            if (!b) prev.removeNamedItemNS(ns, a.name)
        }

        // Set new attributes.
        for (i = next.length; i--;) {
            a = next[i]
            ns = a.namespaceURI
            b = prev.getNamedItemNS(ns, a.name)
            if (!b) {
                // Add a new attribute.
                next.removeNamedItemNS(ns, a.name)
                prev.setNamedItemNS(a)
            } else if (b.value !== a.value) {
                // Update existing attribute.
                b.value = a.value
            }
        }
    }

    /*
     * @private
     * @description
     * Utility that will update one list of childNodes to match another.
     *
     * @param {HTMLEntity} parent - The current parentNode being updated.
     * @param {NodeList} prevChildNodes - The previous children.
     * @param {NodeList} nextChildNodes - The updated children.
     */
    function setChildNodes (parent, prevChildNodes, nextChildNodes) {
        var key, a, b, oldPosition, newPosition

        // Convert nodelists into a usuable map.
        var prev = keyNodes(prevChildNodes)
        var next = keyNodes(nextChildNodes)

        // Remove old nodes.
        for (key in prev) {
            if (next[key]) continue
            parent.removeChild(prev[key])
        }

        // Set new nodes.
        for (key in next) {
            a = prev[key]
            b = next[key]
            if (a) {
                // Update an existing node.
                setNode(a, b)
                // Check if the node has moved in the tree.
                oldPosition = a[NODE_INDEX]
                newPosition = b[NODE_INDEX]
                if (oldPosition === newPosition) continue
                // Check if the node has already been properly positioned.
                if (prevChildNodes[newPosition] === a) continue
                // Reposition node.
                parent.insertBefore(a, prevChildNodes[newPosition])
            } else {
                // Append the new node.
                parent.appendChild(b)
            }
        }
    }

    /**
     * @private
     * @description
     * Converts a nodelist into a keyed map.
     * This is used for diffing while keeping elements with 'data-key' or 'id' if possible.
     *
     * @param {NodeList} childNodes - The childNodes to convert.
     * @return {Object}
     */
    function keyNodes (childNodes) {
        var result = {}

        for (var i = childNodes.length, el; i--;) {
            el = childNodes[i]
            el[NODE_INDEX] = i
            result[getKey(el) || i] = el
        }

        return result
    }

    /**
     * @private
     * @description
     * Utility to try to pull a key out of an element.
     * (Uses 'id' if possible and falls back to 'data-key')
     *
     * @param {HTMLEntity} node - The node to get the key for.
     * @return {String}
     */
    function getKey (node) {
        if (node.nodeType !== ELEMENT_TYPE) return
        return node.getAttribute('data-key') || node.id
    }

    /**
     * Confirm that a value is truthy, throws an error message otherwise.
     *
     * @param {*} val - the val to test.
     * @param {String} msg - the error message on failure.
     * @throws Error
     */
    function assert (val, msg) {
        if (!val) throw new Error('set-dom: ' + msg)
    }

    Nuclear.setDOM=setDOM;
})()
Nuclear.create = function (obj, setting) {
    obj._nuclearSetting = setting||{};
    Nuclear._mixObj(obj);
    var currentEvn = this === Nuclear ? Nuclear.Class : this;
    var component = currentEvn.extend(obj);
    component.create = Nuclear.create;
    return component;
};

Nuclear._mixObj = function (obj) {
    obj.ctor = function (option, selector) {

        this._nuclearTwoWay = true;
        this._nuclearDiffDom = true;
        this._nuclearServerRender = this._nuclearSetting.server;
        //close two way binding by default in node evn
        if (this._nuclearSetting.twoWay === false||this._nuclearServerRender) {
            this._nuclearTwoWay = false;
        }
        if (this._nuclearSetting.diff === false) {
            this._nuclearDiffDom = false;
        }
        this._nuclearReRender= (typeof option === 'string');

        if(this._nuclearReRender) {
            this.parentNode = document.querySelector(option);
            this._ncInstanceId = this.parentNode.firstChild.getAttribute('data-nuclearId');
            this._nuclearOption = JSON.parse(this.parentNode.querySelector("input[name=__nuclear_option_"+this._ncInstanceId+"]").value);
        }else if(this._nuclearServerRender) {
            this._ncInstanceId = Nuclear.getServerInstanceId();
            this._nuclearOption = option;
        }else {
            this._ncInstanceId = Nuclear.getInstanceId();
            this._nuclearOption = option;
        }
        if(Nuclear.ie<9){
            this._nuclearDiffDom = false;
        }
        //加window防止构建到webpack中，Nuclear是局部而非全局
        window.Nuclear.instances[this._ncInstanceId] = this;
        this._nuclearParentEmpty = !selector;
        this.HTML = "";

        if(!(Nuclear.ie<9)) {
            Object.defineProperty(this, 'option', {
                get: function () {
                    return this._nuclearOption;
                },
                set: function (value) {
                    var old = this._nuclearOption;
                    if (old !== value) {
                        this._nuclearOption = value;

                        if (this._nuclearRenderInfo) {
                            this.onOptionChange && this.onOptionChange('_nuclearOption', value, old, '');
                            this._nuclearObserver();
                            this._nuclearRenderInfo.data = this.option;
                            this.refresh();
                        }

                    }
                }
            });
        }else{
            this.option=this._nuclearOption;
        }
        this.option['@item']=function(){

            return JSON.stringify(this);
        }
        if(!this._nuclearReRender) {
            if (!this._nuclearParentEmpty) {
                this.parentNode = typeof selector === "string" ? document.querySelector(selector) : selector;
            } else {
                this.parentNode = document.createElement("div");
            }
        }
        if (this.install) {
            this.install();
        }
        this._nuclearRef = [];
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                //这里判断是否依赖其他nuclear组件，依赖的话记录下来
                if (this[key] && this[key]["_isNuclearComponent"]) {
                    this[key]._nuclearParent = this;
                    this._nuclearRef.push(this[key]);
                }
            }
        }
        this._nuclearTimer = null;
        this._preNuclearTime = new Date();
        this._nuclearObserver();

        this._nuclearRenderInfo = {
            data: this.option,
            parent: this.parentNode
        };
        this._nuclearRender();
        if (this.installed) this.installed();
    };

    obj._nuclearObserver = function () {
        if (this.option && this._nuclearTwoWay&&!(Nuclear.ie<9)) {
            Nuclear.observe(this.option, function (prop, value, oldValue, path) {
                if (!this.onOptionChange || (this.onOptionChange && this.onOptionChange(prop, value, oldValue, path) !== false)) {
                    clearTimeout(this._nuclearTimer);
                    if (new Date() - this._preNuclearTime > 40) {
                        this._nuclearRender();
                        this._preNuclearTime = new Date();
                    } else {
                        this._nuclearTimer = setTimeout(function () {
                            this._nuclearRender();
                        }.bind(this), 40);
                    }
                }
            }.bind(this));
        }
    }

    obj.refresh = function () {
        this._nuclearRender();
    };

    obj.setNuclearContainer = function(selector){
        this.parentNode = typeof selector === "string" ? document.querySelector(selector) : selector;
        this._nuclearRenderInfo.parent = this.parentNode;
        if(document.body === this.parentNode) {
            this.parentNode.insertAdjacentHTML('beforeend',this.HTML);
        }else{
            this.parentNode.innerHTML = this.HTML;
        }
        this.node = this.parentNode.lastChild;
        this._mixNode();
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
    };

    //obj._nuclearSetStyleData=function() {
    //    var styles = this.node.querySelectorAll('style');
    //    var i = 0, len = styles.length;
    //    for (; i < len; i++) {
    //        var style = styles[i];
    //        style.setAttribute('data-nuclearId', this._ncInstanceId);
    //        var cssText = Nuclear.scoper(style.innerHTML, "#nuclear-scoper-" + this._ncInstanceId);
    //        style.innerHTML = '';
    //        if (style.styleSheet) {
    //            style.styleSheet.cssText = cssText;
    //        } else {
    //            style.appendChild(document.createTextNode(cssText));
    //        }
    //    }
    //}

    obj._nuclearRender = function () {
        var item = this._nuclearRenderInfo;
        item.tpl = this._nuclearTplGenerator();
     
        if (this.style) {
            var ele = document.getElementById('nuclear_style_' + this._ncInstanceId);
            ele && document.getElementsByTagName('head')[0].removeChild(ele);

            Nuclear.addStyle(this.style(), "nuclear_style_" + this._ncInstanceId);
        }

        if (this.node) {
            //this.node.parentNode&&this.node.parentNode.removeChild(this.node);
            // item.parent.removeChild(this.node);      
            if (Nuclear.isUndefined(item.tpl)) {
                item.parent.removeChild(this.node);
                this.node = null;
                this.HTML = "";
            } else {
                if (this._nuclearDiffDom) {
                    Nuclear.setDOM(this.node, this._nulcearGenerateHTML(item));
                } else {
                    var newNode = Nuclear.str2Dom(this._nulcearGenerateHTML(item));
                    item.parent.replaceChild(newNode, this.node);
                    this.node = newNode;
                }
            }
        } else {
            //第一次渲染
            if (!Nuclear.isUndefined(item.tpl)) {
                if(document.body === item.parent) {
                    item.parent.insertAdjacentHTML('beforeend', this._nulcearGenerateHTML(item));
                }else {
                    item.parent.innerHTML = this._nulcearGenerateHTML(item);
                }
                this.node = item.parent.lastChild;
            }
        }
        if (this.node) {
            this.node.setAttribute("data-nuclearId", this._ncInstanceId);

            this._mixNode();
            //this._nuclearSetStyleData();
            this.HTML = this.node.outerHTML;


            this._nuclearFix();
            if (this.onRefresh) this.onRefresh();
            if(!this._nuclearServerRender){
                this._nuclearFixForm();
            }
        }
    };

    obj._nuclearFixForm = function(){
        var elements = this.node.querySelectorAll('input'),
            i = 0,
            len = elements.length;
        for (; i < len; i++) {
            var element = elements[i];
            var type = element.type.toLowerCase();
            if (element.getAttribute('value') === '') {
                element.value = '';
            }
            if (type === 'checked' || type === 'radio') {
                if (element.hasAttribute('checked')) {
                    element.checked = 'checked';
                } else {
                    element.checked = false;
                }

            }
        }
    };

    obj._mixNode = function () {
        var nodes = this.node.querySelectorAll('*[nc-id]'),len=nodes.length;
        if (len > 0) {
            var i=0;
            for (; i < len; i++) {
                var node=nodes[i];
                this[node.getAttribute("nc-id")] = node;
            }
        }

        var cNodes = this.node.querySelectorAll('*[nc-class]'), cLen = cNodes.length;
        if (cLen > 0) {
            var j = 0;
            for (; j < cLen; j++) {
                var cNode = cNodes[j];
                var cAttr = cNode.getAttribute("nc-class");
                this[cAttr] = [];
            }
            for (j = 0; j < cLen; j++) {
                var cNode = cNodes[j];
                var cAttr = cNode.getAttribute("nc-class");
                this[cAttr].push(cNode);
            }
        }
    };

    
    obj._nuclearFix = function () {
        //从最顶部组件向内fix,非顶层直接return出去
        if (this._nuclearParent || this._nuclearParentEmpty) return;
        this._nuclearFixOne(this)
    };

    obj._nuclearFixOne = function (one) {
        var refLen = one._nuclearRef.length;
        if (refLen > 0) {
            var i = 0;
            for (; i < refLen; i++) {
                var ref = one._nuclearRef[i];
                ref.node = one.node.querySelector('*[data-nuclearId="' + ref._ncInstanceId + '"]');
                if (ref.node) {
                    ref._mixNode();
                    //ref._nuclearRenderInfo.refreshPart = ref.node.querySelectorAll('*[nc-refresh]');
                    ref._nuclearRenderInfo.parent = ref.node.parentNode;

                    this._nuclearFixOne(ref);
                    //依赖的组件new的时候没有插入dom，所以下面两行再次执行是为了防止内部的事件绑定失效
                    if (ref.onRefresh) ref.onRefresh();
                    if(!this._nuclearServerRender){
                        this._nuclearFixForm();
                    }
                    //if (ref.installed) ref.installed();
                }
            }
        }
    };

    obj._nuclearWrap = function (tpl) {
        var optionStr="";
        if(this._nuclearServerRender){
            optionStr=this._nuclearViewOption(this._ncInstanceId,JSON.stringify(this.option));
        }
        return '<div id="nuclear-scoper-'+this._ncInstanceId+'" '+(this._nuclearServerRender?'data-server="server"':'')+'>' + tpl  +optionStr+ '</div>'
    };

    obj._nuclearViewOption = function(id,optionStr){
        return '\n<input type="hidden" name="__nuclear_option_'+id+'"  value=\''+optionStr+'\'>\n'
    }

    obj._nulcearGenerateHTML = function (item) {
        return this._nuclearWrap(Nuclear.render(Nuclear._fixEvent(Nuclear._fixTplIndex(this._fixStyleFromTpl(item.tpl)), this._ncInstanceId), item.data));
    }

    obj._fixStyleFromTpl = function (tpl) {
        var arr = tpl.match(/<style(([\s\S])*?)<\/style>/g);
        var str = this.style ? this.style() : '';

        if (arr) {
            var i = 0, len = arr.length;
            for (; i < len; i++) {
                str += arr[i].replace('<style>', '').replace('</style>', '');
            }
        }
        var ele = document.getElementById('nuclear_style_' + this._ncInstanceId);
        ele && document.getElementsByTagName('head')[0].removeChild(ele);

        Nuclear.addStyle(Nuclear.scoper(str, "#nuclear-scoper-" + this._ncInstanceId), "nuclear_style_" + this._ncInstanceId);

        return tpl.replace(/<style(([\s\S])*?)<\/style>/g, '');

    }


    obj._isNuclearComponent = function () { }
};

Nuclear._fixEvent = function (tpl,instanceId) {
    return tpl.replace(/<[\s\S]*?>/g, function (item) {
        return item.replace(/(onabort|onblur|oncancel|oncanplay|oncanplaythrough|onchange|onclick|onclose|oncontextmenu|oncuechange|ondblclick|ondrag|ondragend|ondragenter|ondragleave|ondragover|ondragstart|ondrop|ondurationchange|onemptied|onended|onerror|onfocus|oninput|oninvalid|onkeydown|onkeypress|onkeyup|onload|onloadeddata|onloadedmetadata|onloadstart|onmousedown|onmouseenter|onmouseleave|onmousemove|onmouseout|onmouseover|onmouseup|onmousewheel|onpause|onplay|onplaying|onprogress|onratechange|onreset|onresize|onscroll|onseeked|onseeking|onselect|onshow|onstalled|onsubmit|onsuspend|ontimeupdate|ontoggle|onvolumechange|onwaiting|onautocomplete|onautocompleteerror|onbeforecopy|onbeforecut|onbeforepaste|oncopy|oncut|onpaste|onsearch|onselectstart|onwheel|onwebkitfullscreenchange|onwebkitfullscreenerror|ontouchstart|ontouchmove|ontouchend|ontouchcancel|onpointerdown|onpointerup|onpointercancel|onpointermove|onpointerover|onpointerout|onpointerenter|onpointerleave)=('|")/g, function (eventStr, b, c, d, e) {
            if (e.substr(eventStr.length + d, 18) === "Nuclear.instances[") return eventStr;
            return eventStr += "Nuclear.instances[" + instanceId + "].";
        });
    });
};

Nuclear._fixTplIndex = function (tpl) {
    return tpl.replace(/{{@index}}/g, "{{_nuclearIndex}}");
};

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
            //var dom = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
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
            var map = wrapMap[tag] || wrapMap._default;
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
};

Nuclear.isUndefined = function (o) {
    return typeof (o) === "undefined";
};

Nuclear._serverInstanceId=1000000;
Nuclear.getServerInstanceId = function () {
    if(Nuclear._serverInstanceId>10000000&&!Nuclear.instances[1000000])Nuclear._serverInstanceId=1000000;
    return Nuclear._serverInstanceId++;
};

Nuclear._instanceId= 0;
Nuclear.getInstanceId = function () {
    if(Nuclear._instanceId>Nuclear._serverInstanceId){
        throw  'please set _serverInstanceId value to a larger value';
    }
    return Nuclear._instanceId++;
};

Nuclear.instances = {};
Nuclear.destroy=function(instance){
    Nuclear.instances[instance._ncInstanceId] =null;
}
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

;(function defineMustache (global, factory) {
    Nuclear.Tpl = {};
    factory(Nuclear.Tpl); // script, wsh, asp
    Nuclear.render=Nuclear.Tpl.render;
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
                target.forEach(function (item, index) {
                    item._nuclearIndex = index;
                });
                observe.methods.forEach(function (item) {
                    target[item] = function () {
						var old =  Array.prototype.slice.call(this,0);
                        var result = Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
                        if (new RegExp("\\b" + item + "\\b").test(observe.triggerStr)) {
                            this.forEach(function (item, index) {
                                item._nuclearIndex = index;
                            });
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
                    target['real'+item.substring(0,1).toUpperCase()+item.substring(1)] = function () {
                        return Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
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
    observe.methods = ["concat", "copyWithin", "entries", "every", "fill", "filter", "find", "findIndex", "forEach", "includes", "indexOf", "join", "keys", "lastIndexOf", "map", "pop", "push", "reduce", "reduceRight", "reverse", "shift", "slice", "some", "sort", "splice", "toLocaleString", "toString", "unshift", "values", "size"]
    observe.triggerStr = ["concat", "copyWithin", "fill", "pop", "push", "reverse", "shift", "sort", "splice", "unshift", "size"].join(",")
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

if (typeof Object.create != 'function') {
    Object.create = (function(undefined) {
        var Temp = function() {};
        return function (prototype, propertiesObject) {
            if(prototype !== Object(prototype) && prototype !== null) {
                throw TypeError('Argument must be an object, or null');
            }
            Temp.prototype = prototype || {};
            if (propertiesObject !== undefined) {
                Object.defineProperties(Temp.prototype, propertiesObject);
            }
            var result = new Temp();
            Temp.prototype = null;
            // to imitate the case of Object.create(null)
            if(prototype === null) {
                result.__proto__ = null;
            }
            return result;
        };
    })();
}

//所有类的基类
Nuclear.Class = function () { };

//基类增加一个extend方法
Nuclear.Class.extend = function (prop) {
    var prototype = Object.create(this.prototype);
    //把要扩展的属性复制到prototype变量上
    for (var name in prop) {
        //下面代码是让ctor里可以直接访问使用this._super访问父类构造函数，除了ctor的其他方法，this._super都是访问父类的实例
        prototype[name] = prop[name];
    }

    //假的构造函数
    function Class() {
        //执行真正的ctor构造函数
        this.ctor.apply(this, arguments);
    }

    Class.prototype = prototype;

    Class.prototype._super = Object.create(this.prototype);


    Class.prototype.constructor = Class;
    //任何Class.extend的返回对象都将具备extend方法
    Class.extend = Nuclear.Class.extend;

    return Class;
};
//many thanks to https://github.com/thomaspark/scoper/
Nuclear.scoper = function (css, prefix) {
    var re = new RegExp("([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)", "g");
    css = css.replace(re, function (g0, g1, g2) {

        if (g1.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
            return g1 + g2;
        }

        if (g1.match(/:scope/)) {
            g1 = g1.replace(/([^\s]*):scope/, function (h0, h1) {
                if (h1 === "") {
                    return "> *";
                } else {
                    return "> " + h1;
                }
            });
        }

        g1 = g1.replace(/^(\s*)/, "$1" + prefix + " ");

        return g1 + g2;
    });

    return css;
}

Nuclear.ie = (function () {

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
            all[0]
        );

    return v > 4 ? v : undef;

}());

Nuclear.addStyle = function (cssText, id) {
    var d = document,
        someThingStyles = d.createElement('style');
    d.getElementsByTagName('head')[0].appendChild(someThingStyles);
    someThingStyles.setAttribute('type', 'text/css');
    someThingStyles.setAttribute('id', id);
    if (Nuclear.ie) {
        someThingStyles.styleSheet.cssText = cssText;
    } else {

        someThingStyles.textContent = cssText;

    }

}
    if ( !noGlobal ) {
        window.Nuclear&&window.Nuclear.instances||(window.Nuclear=Nuclear);
    }

    return Nuclear;
}));
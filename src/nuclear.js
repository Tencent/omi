var Nuclear={};

Nuclear.create = function (obj) {
    Nuclear._mixObj(obj);
    var currentEvn = this === Nuclear ? Nuclear.Class : this;
    var component = currentEvn.extend(obj);
    component.create = Nuclear.create;
    return component;
};

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
                //这里判断是否依赖其他nuclear组件，依赖的话记录下来
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
                if (!this.onOptionChange||(this.onOptionChange && this.onOptionChange(prop, value, oldValue, path)!==false)) {
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
        };
        this.option._resetNuclearIndex=function() {
            window['_nuclearIndex'] = -1;
        };
        this._nuclearRender(this._nuclearRenderInfo);
        if (this.installed) this.installed();
    };

    obj.refresh = function () {
        this._nuclearLocalRefresh();
    };

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


    obj._nuclearRender = function (item) {
        if (this.node) {
            //this.node.parentNode&&this.node.parentNode.removeChild(this.node);
            // item.parent.removeChild(this.node);      
            if (Nuclear.isUndefined(item.tpl)) {
                item.parent.removeChild(this.node);
                this.node = null;
                this.HTML = "";
            } else {
                var newNode = Nuclear.str2Dom(this._nuclearWrap(Nuclear.Tpl.render(Nuclear._fixEvent(Nuclear._fixTplIndex(item.tpl), this._ncInstanceId), item.data)));
                item.parent.replaceChild(newNode, this.node);
                this.node = newNode;
            }
        } else {
            //第一次渲染
            if (!Nuclear.isUndefined(item.tpl)) {
                item.parent.insertAdjacentHTML("beforeEnd", this._nuclearWrap(Nuclear.Tpl.render(Nuclear._fixEvent(Nuclear._fixTplIndex(item.tpl), this._ncInstanceId), item.data)));
                this.node = item.parent.lastChild;
            }
        }
        window["_nuclearIndex"] = null;
        if (this.node) {
            this._nuclearId = Nuclear.getId();
            this.node.setAttribute("data-nuclearId", this._nuclearId);

            this._mixNode();

            //nc-refresh的比较常见的应用场景就是文本框输入的时候不刷新自己，刷新会导致失去焦点。nc-refresh也能用于性能优化
            item.refreshPart = this.node.querySelectorAll('*[nc-refresh]');
            this.HTML = this.node.outerHTML;


            this._nuclearFix();
            if (this.onRefresh) this.onRefresh();
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
                if (!this[cAttr]) this[cAttr] = [];
                this[cAttr].push(cNode);
            }
        }
    };

    //从最顶部组件向内fix
    obj._nuclearFix = function () {
        if (this._nuclearParent) return;
        this._nuclearFixOne(this)
    };

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
                    //依赖的组件new的时候没有插入dom，所以下面两行再次执行是为了防止内部的事件绑定失效
                    if (ref.onRefresh) ref.onRefresh();
                    if (ref.installed) ref.installed();
                }
            }
        }
    };

    obj._nuclearWrap = function (tpl) {
        var scopedStr = "";
        if (this.style) {
            scopedStr = '<style scoped>' + this.style() + '</style>';
        }
        return '<div>' + tpl + scopedStr + '</div>'
    };

    obj._nuclearLocalRefresh = function () {
        var item = this._nuclearRenderInfo, rpLen = item.refreshPart.length;
        item.tpl = this._nuclearTplGenerator();
        if (rpLen > 0) {
            var parts = Nuclear.str2Dom(this._nuclearWrap(Nuclear.Tpl.render(Nuclear._fixEvent(Nuclear._fixTplIndex(item.tpl), this._ncInstanceId), item.data))).querySelectorAll('*[nc-refresh]');
            window["_nuclearIndex"] = null;
            for (var j = 0; j < rpLen; j++) {
                var part = item.refreshPart[j];
                //执行完replaceChild，原part的parentNode就为null,代表其已经被子节点替换掉了
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
        //刷新局部样式
        Nuclear.refreshStyle();
    }
};

Nuclear._fixEvent = function (tpl,instanceId) {

    return tpl.replace(/<[\s\S]*?>/g, function (item) {
        return item.replace(/(onabort|onblur|oncancel|oncanplay|oncanplaythrough|onchange|onclick|onclose|oncontextmenu|oncuechange|ondblclick|ondrag|ondragend|ondragenter|ondragleave|ondragover|ondragstart|ondrop|ondurationchange|onemptied|onended|onerror|onfocus|oninput|oninvalid|onkeydown|onkeypress|onkeyup|onload|onloadeddata|onloadedmetadata|onloadstart|onmousedown|onmouseenter|onmouseleave|onmousemove|onmouseout|onmouseover|onmouseup|onmousewheel|onpause|onplay|onplaying|onprogress|onratechange|onreset|onresize|onscroll|onseeked|onseeking|onselect|onshow|onstalled|onsubmit|onsuspend|ontimeupdate|ontoggle|onvolumechange|onwaiting|onautocomplete|onautocompleteerror|onbeforecopy|onbeforecut|onbeforepaste|oncopy|oncut|onpaste|onsearch|onselectstart|onwheel|onwebkitfullscreenchange|onwebkitfullscreenerror)=('|")/g, function (eventStr, b, c, d, e) {
            if (e.substr(eventStr.length + d, 18) === "Nuclear.instances[") return eventStr;
            return eventStr += "Nuclear.instances[" + instanceId + "].";
        });
    });
};

Nuclear._fixTplIndex = function (tpl) {
    //"{{_nuclearIndex}}"
    return tpl.replace(/{{#[\s\S]*?{{@index}}/g, function (str) {

        return "{{_resetNuclearIndex}}" + str.replace("{{@index}}", "{{_nuclearIndex}}");
    });
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

Nuclear._nextID = 0;
Nuclear.getId = function () {
    return Nuclear._nextID++;
};

Nuclear._instanceId= 0;
Nuclear.getInstanceId = function () {
    return Nuclear._instanceId++;
};
Nuclear.instances = {};
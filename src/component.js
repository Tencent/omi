import Omi from './omi.js';
import style from './style.js';
import scopedEvent from './event.js';
import setDOM from './diff.js';

class Component {
    constructor(data, server) {
        //re render the server-side rendering html on the client-side
        const type = Object.prototype.toString.call(data);
        const isReRendering = type !== '[object Object]' && type !== '[object Undefined]';
        if (isReRendering) {
            this.renderTo = typeof data === "string" ? document.querySelector(data) : data;
            this._hidden = this.renderTo.querySelector('.omi_scoped__hidden_data');
            this.id = this._hidden.dataset.omiId;
            this.data = JSON.parse(this._hidden.value);
        } else {
            this.data = data || {};
            this._omi_server_rendering = server;
            this.id = Omi.getInstanceId();
            this.refs = {};
        }
        this.children = [];
        this.childrenData = [];
        this.HTML = null;
        this._addedItems = [];
        this._omi_order = [];
        Omi.instances[this.id] = this;
        this.BODY_ELEMENT = document.createElement('body');
        if (this._omi_server_rendering || isReRendering) {
            this.install();
            this._render(true);
            this.installed();
            this._childrenInstalled(this);
        }
    }

    install() {
    }

    installed() {
    }

    uninstall(){

    }

    afterUpdate(){

    }

    beforeUpdate(){

    }

    render() {
    }

    style() {
    }

    update() {
        this.beforeUpdate();
        if (this.renderTo) {
            this._render();
        } else {
            // update child node
            if(this._omi_removed ) {
                let hdNode  = this._createHiddenNode();
                this.node.parentNode.replaceChild(hdNode,this.node);
                this.node = hdNode;
            }else{
                setDOM(this.node, scopedEvent(this._childRender(this._omiChildStr), this.id));
            }
        }
        //update added components
        this._renderAddedChildren();
        this.afterUpdate();
    }

    setData(data,update) {
        this.data = data;
        if (update) {
            this.update();
        }
    }

    removeChild(indexOrChild){
        let child = indexOrChild;
        if(typeof indexOrChild === 'number'){
            child = this.children[indexOrChild];
        }

        child.remove();
    }

    restoreChild(indexOrChild){
        let child = indexOrChild;
        if(typeof indexOrChild === 'number'){
            child = this.children[indexOrChild];
        }

        child.restore();
    }

    setComponentOrder(arr) {
        arr.forEach((item, index)=>{
            this._omi_order[index] = item;
        })
        this.update();
    }
    //beforeBegin,beforeEnd,afterBegin,afterEnd
    addComponent(position, el, component) {
        this._addedItems.push({position: position, el: el, component: component});
        this.update();
    }

    removeComponent(component) {
        for(let i = 0,len = this._addedItems.length;i<len;i++){
            if(component.id === this._addedItems[i].component.id){
                this._addedItems.splice(i,1);
                break;
            }
        }
        this.update();
    }

    remove (){
        this._omi_removed  = true;
        this.update();
        this.uninstall();

    }

    restore(){
        this._omi_removed  = false;
        this.update();
        this.installed();
    }

    _renderAddedChildren(){
        this._addedItems.forEach((item)=>{
            let target = typeof item.el === "string" ? this.node.querySelector(item.el) : item.el;
            item.component.install();
            item.component._render(true);
            item.component.installed();
            item.component._childrenInstalled(item.component);
            target.insertAdjacentHTML(item.position ,item.component.HTML);
        });
        this.children.forEach((child)=>{
            child._renderAddedChildren();
        });
    }

    _render(isFirst) {
        if(this._omi_removed ){
            let node = this._createHiddenNode();
            if(!isFirst){
                this.node.parentNode.replaceChild(node, this.node);
                this.node = node;
            }else if(this.renderTo){
                this.renderTo.appendChild(node);
            }
            return;
        }
        this._generateHTMLCSS();
        this._extractChildren(this);
        if(isFirst){
            this.children.forEach((item,index)=>{
                this._omi_order[index] = index;
            });
        }
        this.children.forEach((item, index) => {
            this.HTML = this.HTML.replace(item._omiChildStr, this.children[this._omi_order[index]].HTML);
        });
        this.HTML =  scopedEvent(this.HTML, this.id);
        if (isFirst) {
            if (this.renderTo) {
                if (this._omi_increment) {
                    this.renderTo.insertAdjacentHTML('beforeend', this.HTML);
                } else {
                    this.renderTo.innerHTML = this.HTML ;
                }
            }
        } else {
            if (this.HTML !== "") {
                setDOM(this.node, this.HTML);
            } else {
                setDOM(this.node ,this._createHiddenNode());
            }
        }
        //get node prop from parent node
        if (this.renderTo) {
            this.node = document.querySelector("[" + Omi.STYLESCOPEDPREFIX + this.id + "]");
            this._queryElements(this);
            this._fixForm();
        }
    }

    _childRender(childStr,isFirst) {
        if(this._omi_removed ){
            this.HTML = '<input type="hidden" omi_scoped_'+this.id+' >';
            return this.HTML;
        }
        childStr = childStr.replace("<child", "<div").replace("/>", "></div>");
        this._mergeData(childStr,isFirst);
        this._generateHTMLCSS();
        this._extractChildren(this);
        if(isFirst){
            this.children.forEach((item,index)=>{
                this._omi_order[index] = index;
            });
        }
        this.children.forEach((item, index) => {
            this.HTML = this.HTML.replace(item._omiChildStr, this.children[this._omi_order[index]].HTML);
        });
        this.HTML =  scopedEvent(this.HTML, this.id);
        return this.HTML;
    }

    _queryElements(current) {
        current._mixRefs();
        current.children.forEach((item)=>{
            item.node = current.node.querySelector("[" + Omi.STYLESCOPEDPREFIX + item.id + "]");
            //recursion get node prop from parent node
            current._queryElements(item);
        });
    }

    _mixRefs() {
        let nodes = this.node.querySelectorAll('*[ref]');
        const len = nodes.length;
        if (len > 0) {
            for (let i = 0; i < len; i++) {
                let node = nodes[i];
                this.refs[node.getAttribute("ref")] = node;
            }
        }

    }

    _childrenInstalled(root){
        root.children.forEach((child)=>{
            child.installed();
            this._childrenInstalled(child);
        })
    }

    _getConstructorNameByMagic(c){
        return  (c+"").split("(")[0].replace("function","").trim();
    }

    _fixForm (){
        let elements = this.node.querySelectorAll('input');
        const len = elements.length;
        for (let i = 0; i < len; i++) {
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
    }

    _replaceTags(array, html) {
        const str = array.join("|");
        let reg = new RegExp("(<(" + str + "))[^a-zA-Z>][\\s\\S]*?/>", "g");
        return html.replace(reg, function (m, a, b) {
            return m.replace(a, '<child tag="' + b + '" ');
        })
    }


    _createHiddenNode(){
        let hdNode = document.createElement("input");
        hdNode.setAttribute("type","hidden");
        hdNode.setAttribute( Omi.STYLESCOPEDPREFIX+this.id,"");
        return hdNode;
    }

    _mergeData(childStr,isFirst){
        this.data = Object.assign({}, this._getDataset(childStr), this.data);
        isFirst&&this.install();
    }

    _generateHTMLCSS() {
        this.CSS = this.style();
        let css = "";
        if (this.CSS) {
            css = style.scoper(this.CSS, "[" + Omi.STYLESCOPEDPREFIX + this.id + "]");
            if (!this._omi_server_rendering) {
                style.addStyle(css, this.id);
            }
        }
        let tpl = this.render();
        this.HTML = this._scopedAttr(Omi.template(tpl ? tpl : "", this.data), Omi.STYLESCOPEDPREFIX + this.id).trim();
        if (this._omi_server_rendering) {
            this.HTML = '\r\n<style id="'+Omi.STYLEPREFIX+this.id+'">\r\n' + css + '\r\n</style>\r\n'+this.HTML ;
            this.HTML += '\r\n<input type="hidden" data-omi-id="' + this.id + '" class="' + Omi.STYLESCOPEDPREFIX + '_hidden_data" value=\'' + JSON.stringify(this.data) + '\'  />\r\n'
        }
    }

    _scopedAttr(html, id) {
        return html.replace(/<[^/]([A-Za-z]*)[^>]*>/g, function (m) {
            let str = m.split(" ")[0].replace(">", "");
            return m.replace(str, str + " " + id);
        });
    }

    _getDataset(str) {
        this.BODY_ELEMENT.innerHTML = str ;
        return this.BODY_ELEMENT.firstChild.dataset;
    }

    _extractChildren(child) {
        if (Omi.customTags.length > 0) {
            child.HTML = this._replaceTags(Omi.customTags, child.HTML);
        }
        let arr = child.HTML.match(/<child[^>][\s\S]*?tag=['|"](\S*)['|"][\s\S]*?\/>/g);

        if (arr) {
            const len = arr.length;

            for (let i = 0; i < len; i++) {
                let childStr = arr[i];
                childStr.match(/\s*tag=['|"](\S*)['|"]/);

                let name = RegExp.$1;
                let cmi = this.children[i];
                //if not first time to invoke _extractChildren method
                //___omi_constructor_name for es5
                if (cmi && (cmi.constructor.name === name || cmi.___omi_constructor_name === name||this._getConstructorNameByMagic(cmi.constructor))) {
                    cmi._childRender(childStr);
                    continue;
                } else {
                    let ChildClass = Omi.getClassFromString(name);
                    if (!ChildClass) throw "Can't find Class called [" + name+"]";
                    let sub_child = new ChildClass(child.childrenData[i]||{},false);
                    sub_child._omiChildStr = childStr;
                    sub_child.parent = child;

                    let evtArr = childStr.match(/[\s\t\n]+on(\S*)=['|"](\S*)['|"]/g);
                    if(evtArr) {
                        evtArr.forEach((item) => {
                            let evtArr = item.trim().split("=");
                            let hdName = evtArr[1].replace(/['|"]/g, "");
                            let handler = sub_child.parent[hdName];
                            if (handler) {
                                sub_child.data[evtArr[0]] = handler.bind(sub_child.parent);
                            }
                        })
                    }
                    sub_child._childRender(childStr,true);

                    let mo_ids = childStr.match(/omi-id=['|"](\S*)['|"]/);
                    if (mo_ids) {
                        Omi.mapping[RegExp.$1] = sub_child;
                    }
                    if (!cmi) {
                        child.children.push(sub_child);
                    } else {
                        child.children[i] = sub_child;
                    }

                    childStr.match(/\s*name=['|"](\S*)['|"]/);

                    if (RegExp.$1) {
                        child[RegExp.$1] = sub_child;
                    }
                }

            }
        }
    }
}

export default Component;
import Omi from './omi.js';
import style from './style.js';
import scopedEvent from './event.js';
import morphdom from './morphdom.js';
import html2json from './html2json.js';

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
            this.id = this._omi_server_rendering ? (1000000+ Omi.getInstanceId()) : Omi.getInstanceId();
        }
        this.refs = {};
        this.children = [];
        this.childrenData = [];
        this.HTML = null;
        this._addedItems = [];
        Omi.instances[this.id] = this;
        this.dataFirst = true;

        this._omi_scoped_attr =  Omi.STYLESCOPEDPREFIX + this.id;
        //this.BODY_ELEMENT = document.createElement('body');
        this._preCSS = null;
        this._omiGroupDataCounter = {};
        if(Omi.dataFromGlobalStore){
            this.dataFromStore = true;
            this.useStore(Omi.globalStore);
        }else{
            this.dataFromStore = false;
        }
        if (this._omi_server_rendering || isReRendering) {
            this.install();
            this._render(true);
            this._childrenInstalled(this);
            this.installed();
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

    useStore(store){
        this.store = store;
        this.data = store.data
        let isInclude = false
        this.dataFromStore = true
        store.instances.forEach(instance=>{
            if(instance.id ===this.id){
                isInclude = true
            }
        })
        if(!isInclude){
            store.instances.push(this)
        }

    }

    update() {
        this.beforeUpdate();
        this._childrenBeforeUpdate(this);
        if (this.renderTo) {
            this._render();
        } else {
            // update child node
            if(this._omi_removed ) {
                let hdNode  = this._createHiddenNode();
                this.node.parentNode.replaceChild(hdNode,this.node);
                this.node = hdNode;
            }else{
                morphdom(this.node, scopedEvent(this._childRender(this._omiChildStr), this.id));

                this.node = document.querySelector("[" + this._omi_scoped_attr + "]");
                this._queryElements(this);
                this._fixForm();
            }
        }
        //update added components
        this._renderAddedChildren();
        this._childrenAfterUpdate(this);
        this.afterUpdate();
    }

    _childrenBeforeUpdate(root){
        root.children.forEach((child)=>{
            child.beforeUpdate();
            this._childrenBeforeUpdate(child);
        })
    }

    _childrenAfterUpdate(root){
        root.children.forEach((child)=>{
            this._childrenAfterUpdate(child);
            child.afterUpdate();
        })
    }

    setData(data, update) {
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

        this.children.forEach((item, index) => {
            this.HTML = this.HTML.replace(item._omiChildStr, this.children[index].HTML);
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
                morphdom(this.node, this.HTML);
            } else {
                morphdom(this.node ,this._createHiddenNode());
            }
        }
        //get node prop from parent node
        if (this.renderTo) {
            this.node = document.querySelector("[" + this._omi_scoped_attr + "]");
            this._queryElements(this);
            this._fixForm();
        }
    }

    _childRender(childStr,isFirst) {
        if(this._omi_removed ){
            this.HTML = '<input type="hidden" omi_scoped_'+this.id+' >';
            return this.HTML;
        }
        //childStr = childStr.replace("<child", "<div").replace("/>", "></div>");
        this._mergeData(childStr);
        this._generateHTMLCSS();
        this._extractChildren(this);

        this.children.forEach((item, index) => {
            this.HTML = this.HTML.replace(item._omiChildStr, this.children[index].HTML);
        });
        this.HTML =  scopedEvent(this.HTML, this.id);
        return this.HTML;
    }

    _queryElements(current) {
        current._mixRefs();
        current._execPlugins();
        current.children.forEach((item)=>{
            item.node = current.node.querySelector("[" + Omi.STYLESCOPEDPREFIX + item.id + "]");
            //recursion get node prop from parent node
            item.node && current._queryElements(item);
        });
    }

    _mixRefs() {
        let nodes = Omi.$$('*[ref]',this.node);
        nodes.forEach(node => {
            if(node.hasAttribute(this._omi_scoped_attr) ) {
                this.refs[node.getAttribute('ref')] = node;
            }
        });
        let attr = this.node.getAttribute('ref');
        if(attr) {
            this.refs[attr] = this.node;
        }
    }

    _execPlugins(){
        Object.keys(Omi.plugins).forEach(item => {
            let nodes = Omi.$$('*['+item+']',this.node);
            nodes.forEach(node => {
                if(node.hasAttribute(this._omi_scoped_attr) ) {
                    Omi.plugins[item](node,this);
                }
            });
            if(this.node.hasAttribute(item)) {
                Omi.plugins[item](this.node, this);
            }
        });
    }

    _childrenInstalled(root){
        root.children.forEach((child)=>{
            this._childrenInstalled(child);
            child.installed();
        })
    }

    _fixForm (){

        Omi.$$('input',this.node).forEach(element =>{
            let type = element.type.toLowerCase();
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
        });

        Omi.$$('textarea',this.node).forEach(textarea =>{
            textarea.value = textarea.getAttribute('value');
        });

        Omi.$$('select',this.node).forEach(select =>{
            let value = select.getAttribute('value')
            if (value) {
                Omi.$$('option',select).forEach(option =>{
                    if(value === option.getAttribute('value')) {
                        option.setAttribute('selected', 'selected');
                    }
                })
            }else {
                let firstOption = Omi.$$('option', select)[0];
                firstOption && firstOption.setAttribute('selected', 'selected');
            }
        });
    }

    _replaceTags(array, html) {
        const str = array.join("|");
        const reg = new RegExp('<(' + str + '+)((?:\\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\\s*=\\s*(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>\\s]+))?)*)\\s*(\\/?)>', 'g');
        return html.replace(reg, function (m, a) {
            var d = m.length - 2;
            if (d >= 0 && m.lastIndexOf('/>') === m.length - 2) {
                return m.replace('<' + a, '<child tag="' + a + '"').substr(0, m.length + 10) + '></child>';
            } else if (m.lastIndexOf('>') === m.length - 1) {
                return m.replace('<' + a, '<child tag="' + a + '"') + '</child>';
            }
        })
    }

    _createHiddenNode(){
        let hdNode = document.createElement("input");
        hdNode.setAttribute("type","hidden");
        hdNode.setAttribute( this._omi_scoped_attr, '');
        return hdNode;
    }

    _mergeData(childStr) {
        if(this.dataFromStore) return;
        if(this.dataFirst){
            this.data = Object.assign({},this._getDataset(childStr),this.data);
        }else{
            this.data = Object.assign({},this.data, this._getDataset(childStr));
        }
    }

    _generateHTMLCSS() {
        this.CSS = (this.style()|| '').replace(/<\/?style>/g,'') ;
        if (this.CSS) {
            this.CSS = style.scoper(this.CSS, "[" + this._omi_scoped_attr + "]");
            if (this.CSS !== this._preCSS && !this._omi_server_rendering) {
                style.addStyle(this.CSS, this.id);
                this._preCSS = this.CSS;
            }
        }
        let tpl = this.render();
        this.HTML = this._scopedAttr(Omi.template(tpl ? tpl : "", this.data), this._omi_scoped_attr).trim();
        if (this._omi_server_rendering) {
            this.HTML = '\r\n<style id="'+Omi.STYLEPREFIX+this.id+'">\r\n' + this.CSS + '\r\n</style>\r\n'+this.HTML ;
            this.HTML += '\r\n<input type="hidden" data-omi-id="' + this.id + '" class="' + Omi.STYLESCOPEDPREFIX + '_hidden_data" value=\'' + JSON.stringify(this.data) + '\'  />\r\n'
        }
    }

    _scopedAttr(html, id) {
        return html.replace(/<[^/]([A-Za-z]*)[^>]*>/g, function (m) {
            let str = m.split(" ")[0].replace(">", "");
            return m.replace(str, str + " " + id);
        });
    }

    _getDataset(childStr) {
        let json = html2json(childStr);
        let attr = json.child[0].attr;
        Object.keys(attr).forEach(key => {
            if(key.indexOf('data-') === 0){
                this._dataset[this._capitalize(key.replace('data-', ''))] = attr[key];
            }
        });
        return this._dataset;
    }

    _capitalize (str){
        str = str.toLowerCase();
        str = str.replace(/\b\w+\b/g, function (word) {
            return word.substring(0, 1).toUpperCase() + word.substring(1);
        }).replace(/-/g,'');
        return str.substring(0, 1).toLowerCase() + str.substring(1);
    }

    _extractPropertyFromString(str, instance){
        let arr = str.replace(/['|"|\]]/g,'' ).replace(/\[/g,'.').split('.');
        let current = instance;
        arr.forEach(prop => {
            current = current[prop];
        });
        arr = null;
        return current;

    }

    _extractChildren(child){
        if (Omi.customTags.length > 0) {
            child.HTML = this._replaceTags(Omi.customTags, child.HTML);
        }
        let arr = child.HTML.match(/<child[^>][\s\S]*?tag=['|"](\S*)['|"][\s\S]*?><\/child>/g);

        if(arr){
            arr.forEach( (childStr, i) =>{
                let json = html2json(childStr);
                let attr = json.child[0].attr;
                let name = attr.tag;
                delete attr.tag;
                let cmi = this.children[i];
                //if not first time to invoke _extractChildren method
                if (cmi && cmi.___omi_constructor_name === name) {
                    cmi._childRender(childStr);
                } else {
                    let baseData = {};
                    let dataset = {};
                    let dataFromParent = {};
                    let groupData = {};
                    let omiID = null;
                    let instanceName = null;
                    Object.keys(attr).forEach(key => {
                        const value = attr[key];
                        if (key.indexOf('on') === 0) {
                            let handler = child[value];
                            if (handler) {
                                baseData[key] = handler.bind(child);
                            }
                        } else if (key === 'omi-id'){
                            omiID = value;
                        }else if (key === 'name'){
                            instanceName = value;
                        }else if (key === 'group-data') {
                            if (child._omiGroupDataCounter.hasOwnProperty(value)) {
                                child._omiGroupDataCounter[value]++;
                            } else {
                                child._omiGroupDataCounter[value] = 0;
                            }
                            groupData = this._extractPropertyFromString(value,child)[child._omiGroupDataCounter[value]];

                        } else if(key.indexOf('data-') === 0){
                            dataset[this._capitalize(key.replace('data-', ''))] = value;
                        }else if(key === 'data'){
                            dataFromParent =  this._extractPropertyFromString(value,child);
                        }
                    });

                    let ChildClass = Omi.getClassFromString(name);
                    if (!ChildClass) throw "Can't find Class called [" + name+"]";
                    let sub_child = new ChildClass( Object.assign(baseData,child.childrenData[i],dataset,dataFromParent,groupData ),false);
                    sub_child._omiChildStr = childStr;
                    sub_child.parent = child;
                    sub_child.___omi_constructor_name = name;
                    sub_child._dataset = {};
                    sub_child.install();

                    omiID && (Omi.mapping[omiID] = sub_child);
                    instanceName && (child[instanceName] = sub_child);

                    if (!cmi) {
                        child.children.push(sub_child);
                    } else {
                        child.children[i] = sub_child;
                    }

                    sub_child._childRender(childStr,true);
                }
            });
        }
    }
}

export default Component;
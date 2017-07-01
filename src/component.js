import Omi from './omi.js'
import style from './style.js'
import scopedEvent from './event.js'
import morphdom from './morphdom.js'
import html2json from './html2json.js'

class Component {
    constructor(data, option) {
        const componentOption = Object.assign({
            server: false,
            ignoreStoreData: false,
            preventSelfUpdate: false,
            selfDataFirst: false,
            domDiffDisabled: false,
            scopedSelfCSS: false
        },option)
        this._omi_scopedSelfCSS = componentOption.scopedSelfCSS
        this._omi_preventSelfUpdate = componentOption.preventSelfUpdate
        this._omi_domDiffDisabled = componentOption.domDiffDisabled
        this._omi_ignoreStoreData = componentOption.ignoreStoreData

        this.data = data || {}
        this._omi_server_rendering = componentOption.server
        this.id = this._omi_server_rendering ? (1000000 + Omi.getInstanceId()) : Omi.getInstanceId()

        this.refs = {}
        this.children = []

        this.HTML = null

        Omi.instances[this.id] = this
        this.selfDataFirst = componentOption.selfDataFirst

        this._omi_scoped_attr =  Omi.STYLESCOPEDPREFIX + this.id
        //this.BODY_ELEMENT = document.createElement('body')
        this._preCSS = null
        this._omiGroupDataCounter = {}
        this._omi_installedHandlers = null

    }

    install() {
    }

    installed() {
    }

    onInstalled(handler){
        if(!this._omi_installedHandlers){
            this._omi_installedHandlers = []
        }
        this._omi_installedHandlers.push(handler)
    }

    _execInstalledHandlers(){
        this._omi_installedHandlers&&this._omi_installedHandlers.forEach((handler)=>{
            handler()
        })
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

    beforeRender(){

    }

    useStore(store) {
        this.$$store = store
        let isInclude = false
        store.instances.forEach(instance=> {
            if (instance.id === this.id) {
                isInclude = true
            }
        })
        if (!isInclude) {
            store.instances.push(this)
        }
    }

    updateSelf(){
        this.beforeUpdate()
        if (this.renderTo) {
            this._render(false, true)
        } else {
            if(this._omi_preventSelfUpdate) return;
            // update child node
            if(this._omi_removed ) {
                let hdNode  = this._createHiddenNode()
                this.node.parentNode.replaceChild(hdNode,this.node)
                this.node = hdNode
            }else{
                morphdom(this.node, scopedEvent(this._childRender(this._omiChildStr, true), this.id), {
                    ignoreAttr:this._getIgnoreAttr()
                })

                this.node = document.querySelector("[" + this._omi_scoped_attr + "]")
                this._queryElements(this)
                this._fixForm()
            }
        }
        this.afterUpdate()
    }

    update() {
        this.beforeUpdate()
        this._childrenBeforeUpdate(this)
        this._omiGroupDataCounter = {}
        if (this.renderTo) {
            this._render(false, false, true)
        } else {
            if(this._omi_preventSelfUpdate) return;
            // update child node
            if(this._omi_removed ) {
                let hdNode  = this._createHiddenNode()
                this.node.parentNode.replaceChild(hdNode,this.node)
                this.node = hdNode
            }else{
                if(this._omi_domDiffDisabled){
                    this.node.parentNode.replaceChild(morphdom.toElement(scopedEvent(this._childRender(this._omiChildStr, false, true), this.id)),this.node)
                }else {
                    morphdom(this.node, scopedEvent(this._childRender(this._omiChildStr,false, true), this.id))
                }
                this.node = document.querySelector("[" + this._omi_scoped_attr + "]")
                this._queryElements(this)
                this._fixForm()

            }
        }

        //exec new element installed
        this._childrenInstalledAfterUpdate(this)

        this._childrenAfterUpdate(this)
        this.afterUpdate()
    }

    _childrenBeforeUpdate(root){
        root.children.forEach((child)=>{
            child.beforeUpdate()
            child._omiGroupDataCounter = {}
            this._childrenBeforeUpdate(child)
        })
    }

    _childrenAfterUpdate(root){
        root.children.forEach((child)=>{
            this._childrenAfterUpdate(child)
            child.afterUpdate()
        })
    }

    setData(data, update) {
        this.data = data
        if (update) {
            this.update()
        }
    }

    removeChild(indexOrChild){
        let child = indexOrChild
        if(typeof indexOrChild === 'number'){
            child = this.children[indexOrChild]
        }

        child.remove()
    }

    restoreChild(indexOrChild){
        let child = indexOrChild
        if(typeof indexOrChild === 'number'){
            child = this.children[indexOrChild]
        }

        child.restore()
    }

    remove (){
        this._omi_removed  = true
        this.update()
        this.uninstall()
    }

    restore(){
        this._omi_removed  = false
        this.update()
        this.installed()
        this._execInstalledHandlers()
    }

    _render(isFirst, isSelf, fromUpdate) {
        if(this._omi_removed ){
            let node = this._createHiddenNode()
            if(!isFirst){
                this.node.parentNode.replaceChild(node, this.node)
                this.node = node
            }else if(this.renderTo){
                this.renderTo.appendChild(node)
            }
            return
        }
        if(this._omi_autoStoreToData){
            if(!this._omi_ignoreStoreData) {
                this.data = this.$store.data
            }
        }
        this.beforeRender()
        this._generateHTMLCSS()
        if(!isSelf) {
            this._extractChildren(this, fromUpdate)
        }else {
            this._extractChildrenString(this, fromUpdate)
        }

        this.children.forEach(item => {
            this.HTML = this.HTML.replace(item._omiChildStr, isSelf ? item.node.outerHTML : item.HTML)
        })

        this.HTML =  scopedEvent(this.HTML, this.id)
        if (isFirst) {
            if (this.renderTo) {
                if (this._omi_increment) {
                    this.renderTo.insertAdjacentHTML('beforeend', this.HTML)
                } else {
                    this.renderTo.innerHTML = this.HTML
                }
            }
        } else {
            if (this.HTML !== "") {
                if(this._omi_domDiffDisabled){
                    this.renderTo.innerHTML = this.HTML
                }else {
                    morphdom(this.node, this.HTML, isSelf ? {
                        ignoreAttr: this._getIgnoreAttr()
                    } : null)
                }
            } else {
                morphdom(this.node, this._createHiddenNode())
            }
        }
        //get node prop from parent node
        if (this.renderTo) {
            this.node = document.querySelector("[" + this._omi_scoped_attr + "]")
            this._queryElements(this)
            this._fixForm()
        }
    }

    _getIgnoreAttr(){
        var arr = []
        this.children.forEach( child => {
            arr.push(child._omi_scoped_attr)
        })
        return arr
    }

    _childRender(childStr, isSelf, fromUpdate) {
        if (this._omi_removed) {
            this.HTML = '<input type="hidden" omi_scoped_' + this.id + ' >'
            return this.HTML
        }
        //childStr = childStr.replace("<child", "<div").replace("/>", "></div>")
        this._mergeData(childStr)
        if (this.parent._omi_autoStoreToData) {
            this._omi_autoStoreToData = true
            if (!this._omi_ignoreStoreData) {
                this.data = this.$store.data
            }
        }
        this.beforeRender()
        this._fixSlot(this._generateHTMLCSS())
        if (!isSelf) {
            this._extractChildren(this, fromUpdate)
        } else {
            this._extractChildrenString(this, fromUpdate)
        }

        this.children.forEach(item => {
            this.HTML = this.HTML.replace(item._omiChildStr, isSelf ? item.node.outerHTML : item.HTML)
        })
        this.HTML = scopedEvent(this.HTML, this.id)
        return this.HTML
    }

    _fixSlot(shareAttr) {
        if(!this._omi_slotContent) return
        this._omi_slotContent = this._scopedAttr(this._omi_slotContent, this._omi_scoped_attr, shareAttr)
        let nodes = morphdom.toElements(this._omi_slotContent)
        let slotMatch = this.HTML.match(/<slot[\s\S]*?<\/slot>/g)
        if(nodes.length === 1 && slotMatch && slotMatch.length===1) {
            this.HTML = this.HTML.replace(/<slot[\s\S]*?<\/slot>/, this._omi_slotContent)
        }else{
            nodes.sort(function(a,b){
                return  parseInt(a.getAttribute('slot-index'))- parseInt(b.getAttribute('slot-index'))
            })
            nodes.forEach((node)=> {
                this.HTML = this.HTML.replace(/<slot[\s\S]*?<\/slot>/, node.outerHTML)
            })
        }
    }

    _queryElements(current) {
        current._mixRefs()
        current._execPlugins()
        current.children.forEach((item)=>{
            item.node = current.node.querySelector("[" + Omi.STYLESCOPEDPREFIX + item.id + "]")
            //recursion get node prop from parent node
            item.node && current._queryElements(item)
        })
    }

    _mixRefs() {
        let nodes = Omi.$$('*[ref]',this.node)
        nodes.forEach(node => {
            if(node.hasAttribute(this._omi_scoped_attr) ) {
                this.refs[node.getAttribute('ref')] = node
            }
        })
        let attr = this.node.getAttribute('ref')
        if(attr) {
            this.refs[attr] = this.node
        }
    }

    _execPlugins(){
        Object.keys(Omi.plugins).forEach(item => {
            let nodes = Omi.$$('*['+item+']',this.node)
            nodes.forEach(node => {
                if(node.hasAttribute(this._omi_scoped_attr) ) {
                    Omi.plugins[item](node,this)
                }
            })
            if(this.node.hasAttribute(item)) {
                Omi.plugins[item](this.node, this)
            }
        })
    }

    _childrenInstalled(root){
        root.children.forEach((child)=>{
            this._childrenInstalled(child)
            child.installed()
            child._execInstalledHandlers()
        })
    }

    _childrenInstalledAfterUpdate(root){
        root.children.forEach((child)=>{
            if(child._omi_needInstalled){
                child._omi_needInstalled = false
                this._childrenInstalled(child)
                child.installed()
                child._execInstalledHandlers()
            }
        })
    }

    _fixForm (){

        Omi.$$('input',this.node).forEach(element =>{
            let type = element.type.toLowerCase()
            if (element.getAttribute('value') === '') {
                element.value = ''
            }
            if (type === 'checked' || type === 'radio') {
                if (element.hasAttribute('checked')) {
                    element.checked = 'checked'
                } else {
                    element.checked = false
                }
            }
        })

        Omi.$$('textarea',this.node).forEach(textarea =>{
            textarea.value = textarea.getAttribute('value')
        })

        Omi.$$('select',this.node).forEach(select =>{
            let value = select.getAttribute('value')
            if (value) {
                Omi.$$('option',select).forEach(option =>{
                    if(value === option.getAttribute('value')) {
                        option.setAttribute('selected', 'selected')
                    }
                })
            }else {
                let firstOption = Omi.$$('option', select)[0]
                firstOption && firstOption.setAttribute('selected', 'selected')
            }
        })
    }

    _replaceTags(array, html, updateSelf, fromUpdate) {
        if (Omi.customTags.length === 0) return
        const str = array.join("|")
        const reg = new RegExp('<(' + str + '+)((?:\\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\\s*=\\s*(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>\\s]+))?)*)\\s*((\\/>)|>(([\\s\\S]*?)<\\/\\1>))', 'g');
        let index = 0
        return html.replace(reg, (m,a,b,c,d,e,f) => {
            if(updateSelf) {
                let cmi = this.children[index]
                if (cmi && cmi.___omi_constructor_name === a) {
                    cmi._omiChildStr = m
                }
            }else{
                this._initComponentByString(a, m, f, index++, this, fromUpdate)
            }
        })
    }

    _createHiddenNode(){
        let hdNode = document.createElement("input")
        hdNode.setAttribute("type","hidden")
        hdNode.setAttribute( this._omi_scoped_attr, '')
        return hdNode
    }

    _mergeData(childStr) {
        if(this.selfDataFirst){
            this.data = Object.assign({},this._getDataset(childStr),this.data)
        }else{
            this.data = Object.assign({},this.data, this._getDataset(childStr))
        }
    }

    _generateHTMLCSS() {
        this.CSS = (this.style()|| '').replace(/<\/?style>/g,'')
        let shareAttr = this.___omi_constructor_name?(Omi.STYLESCOPEDPREFIX + this.___omi_constructor_name.toLowerCase()):this._omi_scoped_attr
        if (this.CSS) {
            if(this._omi_scopedSelfCSS||!Omi.style[shareAttr]) {
                this.CSS = style.scoper(this.CSS, this._omi_scopedSelfCSS ? "[" + this._omi_scoped_attr + "]" : "[" + shareAttr + "]")
                Omi.style[shareAttr] = this.CSS
                if (this.CSS !== this._preCSS && !this._omi_server_rendering) {
                    style.addStyle(this.CSS, this.id)
                    this._preCSS = this.CSS
                }
            }
        }
        let tpl = this.render()
        this.HTML = this._scopedAttr(Omi.template(tpl ? tpl : "", this.data), this._omi_scoped_attr, shareAttr).trim()
        if (this._omi_server_rendering) {
            this.HTML = '\r\n<style id="'+Omi.STYLEPREFIX+this.id+'">\r\n' + this.CSS + '\r\n</style>\r\n'+this.HTML
            this.HTML += '\r\n<input type="hidden" data-omi-id="' + this.id + '" class="' + Omi.STYLESCOPEDPREFIX + '_hidden_data" value=\'' + JSON.stringify(this.data) + '\'  />\r\n'
        }

        return shareAttr
    }

    _scopedAttr(html, id, shareAtrr) {
        return html.replace(/<[^/]([A-Za-z]*)[^>]*>/g,  (m) => {
            let str = m.split(" ")[0].replace(">", "")
            if(this._omi_scopedSelfCSS||!this.___omi_constructor_name){
                return m.replace(str, str + " " + id)
            }else{
                return m.replace(str, str + " " + id+" "+ shareAtrr)
            }
        })
    }

    _getDataset(childStr) {
        let json = html2json(childStr)
        let attr = json.child[0].attr
        let baseData = { }
        Object.keys(attr).forEach(key => {
            const value = attr[key]
            if (key.indexOf('on') === 0) {
                let handler = this.parent[value]
                if (handler) {
                    baseData[this._capitalize(key)] = handler.bind(this.parent)
                }
            }else if(key.indexOf('data-') === 0){
                this._dataset[this._capitalize(key.replace('data-', ''))] = value
            }else if(key.indexOf(':data-') === 0) {
                this._dataset[this._capitalize(key.replace(':data-', ''))] = eval('(' + value + ')')
            }else if(key.indexOf('::data-') === 0){
                this._dataset[this._capitalize(key.replace('::data-', ''))] =  this._extractPropertyFromString(value,this.parent)
            }else if(key === 'data'){
                this._dataset =  this._extractPropertyFromString(value,this.parent)
            }else if(key === ':data'){
                this._dataset = eval('(' + value + ')')
            }else if (key === 'group-data') {
                this._dataset = this._extractPropertyFromString(value,this.parent)[this._omi_groupDataIndex]
            }
        })

        return Object.assign(baseData,this._dataset)
    }

    _capitalize (str){
        str = str.toLowerCase()
        str = str.replace(/\b\w+\b/g, function (word) {
            return word.substring(0, 1).toUpperCase() + word.substring(1)
        }).replace(/-/g,'')
        return str.substring(0, 1).toLowerCase() + str.substring(1)
    }

    _extractPropertyFromString(str, instance){
        let arr = str.replace(/['|"|\]]/g,'' ).replace(/\[/g,'.').split('.')
        let current = instance
        arr.forEach(prop => {
            current = current[prop]
        })
        arr = null
        return current

    }

    _extractChildrenString(child, fromUpdate){
        this._replaceTags(Omi.customTags, child.HTML, true, fromUpdate)

    }

    _extractChildren(child, fromUpdate){
        this._replaceTags(Omi.customTags, child.HTML, false, fromUpdate)
    }

    _initComponentByString(name, childStr, slotContent, i, child, fromUpdate){
        let json = html2json(childStr)
        let attr = json.child[0].attr
        let cmi = this.children[i]
        //if not first time to invoke _extractChildren method
        if (cmi && cmi.___omi_constructor_name === name) {
            cmi._omiChildStr = childStr
            cmi._omi_slotContent = slotContent
            Object.keys(attr).forEach(key => {
                const value = attr[key]
                if (key === 'group-data') {
                    if (child._omiGroupDataCounter.hasOwnProperty(value)) {
                        child._omiGroupDataCounter[value]++
                    } else {
                        child._omiGroupDataCounter[value] = 0
                    }
                    cmi._omi_groupDataIndex = child._omiGroupDataCounter[value]
                }
            })

            cmi._childRender(childStr)
        } else {
            let baseData = {}
            let dataset = {}

            let groupDataIndex = null
            let omiID = null
            let instanceName = null
            let _omi_option = {}

            Object.keys(attr).forEach(key => {
                const value = attr[key]
                if (key.indexOf('on') === 0) {
                    let handler = child[value]
                    if (handler) {
                        baseData[this._capitalize(key)] = handler.bind(child)
                    }
                } else if (key === 'omi-id'){
                    omiID = value
                }else if (key === 'name'){
                    instanceName = value
                }else if (key === 'group-data') {
                    if (child._omiGroupDataCounter.hasOwnProperty(value)) {
                        child._omiGroupDataCounter[value]++
                    } else {
                        child._omiGroupDataCounter[value] = 0
                    }
                    groupDataIndex = child._omiGroupDataCounter[value]
                    dataset = this._extractPropertyFromString(value,child)[groupDataIndex]

                } else if(key.indexOf('data-') === 0){
                    dataset[this._capitalize(key.replace('data-', ''))] = value
                }else if(key.indexOf(':data-') === 0) {
                    dataset[this._capitalize(key.replace(':data-', ''))] = eval('(' + value + ')')
                }else if(key.indexOf('::data-') === 0){
                    dataset[this._capitalize(key.replace('::data-', ''))] =  this._extractPropertyFromString(value,child)
                }else if(key === 'data'){
                    dataset =  this._extractPropertyFromString(value,child)
                }else if(key === ':data'){
                    dataset = eval('(' + value + ')')
                }else if(key === 'preventSelfUpdate'|| key === 'psu'|| key === 'preventselfupdate'){
                    _omi_option.preventSelfUpdate = true
                }else if(key === 'selfDataFirst'|| key === 'sdf'|| key === 'selfdatafirst'){
                    _omi_option.selfDataFirst = true
                }else if(key === 'domDiffDisabled'|| key === 'ddd'|| key === 'domdiffdisabled'){
                    _omi_option.domDiffDisabled = true
                }else if(key === 'ignoreStoreData'|| key === 'isd'|| key === 'ignorestoredata'){
                    _omi_option.ignoreStoreData = true
                }else if(key === 'scopedSelfCSS'|| key === 'ssc'|| key === 'scopedselfcss'){
                    _omi_option.scopedSelfCSS = true
                }
            })

            let ChildClass = Omi.getClassFromString(name)
            if (!ChildClass) throw "Can't find Class called [" + name+"]"
            let sub_child = new ChildClass( Object.assign(baseData,dataset ),_omi_option)
            sub_child._omi_groupDataIndex = groupDataIndex
            sub_child._omiChildStr = childStr
            sub_child._omi_slotContent = slotContent
            sub_child.parent = child
            sub_child.$store = child.$store
            sub_child.___omi_constructor_name = name
            sub_child._dataset = {}
            sub_child.install()

            omiID && (Omi.mapping[omiID] = sub_child)
            instanceName && (child[instanceName] = sub_child)

            if (!cmi) {
                child.children.push(sub_child)
            } else {
                child.children[i] = sub_child
            }

            sub_child._childRender(childStr)

            if(fromUpdate){
                sub_child._omi_needInstalled = true
            }
        }
    }
}

export default Component
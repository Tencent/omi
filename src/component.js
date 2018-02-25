import Omi from './omi.js'
import style from './style.js'

import diff from './vdom/diff'
import patch from './vdom/patch'
import createElement from './vdom/create-element'

class Component {
    constructor(data) {
        this.data = data || {}
        this.id = Omi.getInstanceId()
        this.children = []
        this._omi_scopedAttr = Omi.PREFIX + this.id
        Omi.instances[this.id] = this
        this.refs = {}
    }

    render() {

    }

    install() {

    }

    beforeUpdate() {

    }

    update() {

        this.beforeUpdate()
        // this._childrenBeforeUpdate(this)
        this.beforeRender()
        this._preVirtualDom = this._virtualDom
        this._virtualDom = this.render()
        this._normalize(this._virtualDom)

        this._fixVirtualDomCount(this._virtualDomCount(this._preVirtualDom, [[this._preVirtualDom]]))
        // this._fixVirtualDomCount(this._virtualDomCount(this._virtualDom, [[this._virtualDom]]))

        patch(this.node, diff(this._preVirtualDom, this._virtualDom))

        this._mixAttr(this)

        this._childrenAfterUpdate(this)
        this.afterUpdate()

        this._childrenInstalled(this)
        if (!this.renderTo) {
            // 子节点自己更新之后同步至父节点的虚拟
            this.parent._virtualDom.children[this._omi_instanceIndex] = this._virtualDom
        }

        this._fixForm()
    }

    _virtualDomCount(root, arr) {
        root.count = root.children.length
        let list = []
        root.children.forEach(child => {
            list.push(child)
            if (child.children) {
                child.count = child.children.length
                child._pp = root
            }
        })

        arr.push(list)

        root.children.forEach(child => {
            if (child.children) {
                this._virtualDomCount(child, arr)
            }
        })
        return arr
    }

    _fixVirtualDomCount(list) {
        for (let i = list.length - 1; i >= 0; i--) {
            var children = list[i]
            children.forEach(child => {
                if (child._pp) {
                    child._pp.count += child.count || 0
                }
            })
        }
    }

    _childrenAfterUpdate(root) {
        root.children.forEach((child) => {
            this._childrenAfterUpdate(child)
            child.afterUpdate()
        })
    }

    afterUpdate() {

    }

    beforeRender() {

    }

    installed() {

    }

    style() {

    }

    onInstalled(handler) {
        if (!this._omi_installedHandlers) {
            this._omi_installedHandlers = []
        }
        this._omi_installedHandlers.push(handler)
    }

    _execInstalledHandlers() {
        this._omi_installedHandlers && this._omi_installedHandlers.forEach((handler) => {
            handler()
        })
    }

    _render(first) {
        this._generateCss()
        this._virtualDom = this.render()
        this._normalize(this._virtualDom, first)
        if (this.renderTo) {
            this.node = createElement(this._virtualDom)
            if (!this._omi_increment) {
                while (this.renderTo.firstChild) {
                    this.renderTo.removeChild(this.renderTo.firstChild)
                }
            }
            this.renderTo.appendChild(this.node)
            this._mixAttr(this)
            this._fixForm()
        }
    }

    _generateCss() {
        this.css = (this.style() || '').replace(/<\/?style>/g, '')
        let shareAttr = this.data.scopedSelfCss ? this._omi_scopedAttr : Omi.getAttr(this.constructor)

        if (this.css) {
            if (this.data.closeScopedStyle) {
                Omi.style[shareAttr + '_g'] = this.css
                if (!Omi.ssr) {
                    if (this.css !== this._preCss) {
                        style.addStyle(this.css, this.id)
                        this._preCss = this.css
                    }
                }
            } else if (!Omi.style[shareAttr]) {
                if (Omi.scopedStyle) {
                    this.css = style.scoper(this.css, this.data.scopedSelfCss ? '[' + this._omi_scopedAttr + ']' : '[' + shareAttr + ']')
                }
                Omi.style[shareAttr] = this.css
                if (!Omi.ssr) {
                    if (this.css !== this._preCss) {
                        style.addStyle(this.css, this.id)
                        this._preCss = this.css
                    }
                }
            }
        }
    }

    _normalize(root, first, parent, index, parentInstance, cmiIndex) {


        let ps = root.props
        // for scoped css
        if (ps) {
            if (Omi.scopedStyle && this.constructor.name) {
                ps[Omi.getAttr(this.constructor)] = ''
            }
            ps[this._omi_scopedAttr] = ''
        }

        if (root.tagName) {
            if (typeof root.tagName === 'function') {
                let cmi = null
                 if(cmiIndex !== undefined && !first) {
                     let childIns = parentInstance.children[cmiIndex]
                     if (childIns && childIns.constructor === root.tagName) {
                         cmi = childIns
                     }//else destroy the instance?!
                 }

                // not using pre instance the first time
                if (cmi && !first) {
                    if (cmi.data.selfDataFirst) {
                        cmi.data = Object.assign({}, root.props, cmi.data)
                    } else {
                        cmi.data = Object.assign({}, cmi.data, root.props)
                    }
                    cmi.beforeUpdate()
                    cmi.beforeRender()
                    cmi._render()
                    parent[index] = cmi._virtualDom
                } else {
                    let instance = new root.tagName(root.props)
                    if (parentInstance) {
                        instance.$store = parentInstance.$store
                    }
                    if (instance.data.children !== undefined) {
                        instance.data._children = instance.data.children
                        console.warn('The children property will be covered.access it by _children')
                    }
                    instance.data.children = root.children
                    instance._using = true
                    instance.install()
                    instance.beforeRender()
                    instance._render(first)
                    instance.parent = parentInstance
                    instance._omi_needInstalled = true
                    if (parentInstance) {
                        instance.parent = parentInstance
                        instance._omi_instanceIndex = parentInstance.children.length
                        parentInstance.children.push(instance)
                        parent[index] = instance._virtualDom
                        if (root.props['omi-name']) {
                            parentInstance[root.props['omi-name']] = instance
                        }
                    } else {
                        this._virtualDom = instance._virtualDom
                        if (root.props['omi-name']) {
                            this[root.props['omi-name']] = instance
                        }
                    }

                    if (root.props['omi-id']) {
                        Omi.mapping[root.props['omi-id']] = instance
                    }
                }
            }
        }

        let __cmiIndex = 0
        root.children && root.children.forEach((child, index) => {
            if(typeof root !== 'string') {
                this._normalize(child, first, root.children, index, this, __cmiIndex)
                if(typeof root.tagName === 'function'){
                    __cmiIndex++
                }
            }
        })
    }

    _fixForm() {
        Omi.$$('input', this.node).forEach(element => {
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

        Omi.$$('textarea', this.node).forEach(textarea => {
            textarea.value = textarea.getAttribute('value')
        })

        Omi.$$('select', this.node).forEach(select => {
            let value = select.getAttribute('value')
            if (value) {
                Omi.$$('option', select).forEach(option => {
                    if (value === option.getAttribute('value')) {
                        option.selected = true
                    }
                })
            } else {
                let firstOption = Omi.$$('option', select)[0]
                firstOption && (firstOption.selected = true)
            }
        })
    }

    _childrenInstalled(root) {
        root.children.forEach((child) => {
            this._childrenInstalled(child)
            child._omi_needInstalled && child.installed()
            child._omi_needInstalled = false
            child._execInstalledHandlers()
        })
    }

    _mixPlugins() {
        Object.keys(Omi.plugins).forEach(item => {
            let nodes = Omi.$$('*[' + item + ']', this.node)
            nodes.forEach(node => {
                if (node.hasAttribute(this._omi_scopedAttr)) {
                    Omi.plugins[item](node, this)
                }
            })
            if (this.node.hasAttribute(item)) {
                Omi.plugins[item](this.node, this)
            }
        })
    }

    _mixRefs() {
        this.refs = {}
        let nodes = Omi.$$('*[ref]', this.node)
        nodes.forEach(node => {
            if (node.hasAttribute(this._omi_scopedAttr)) {
                this.refs[node.getAttribute('ref')] = node
            }
        })
        let attr = this.node.getAttribute('ref')
        if (attr) {
            this.refs[attr] = this.node
        }
    }

    _mixAttr(current) {
        current._mixRefs()
        current._mixPlugins()
        for (let i = 0, len = current.children.length; i < len; i++) {
            let child = current.children[i]
            child.node = Omi.$('[' + child._omi_scopedAttr + ']', current.node)
            if (!child.node) {
                child._virtualDom = null
                current.children.splice(i, 1)
                i--
                len--
            } else {
                child._omi_instanceIndex = i
                current._mixAttr(child)
            }
        }
    }
}

export default Component

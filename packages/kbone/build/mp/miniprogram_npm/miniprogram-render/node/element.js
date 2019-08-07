const Node = require('./node')
const ClassList = require('./class-list')
const Style = require('./style')
const Attribute = require('./attribute')
const cache = require('../util/cache')
const parser = require('../tree/parser')
const tool = require('../util/tool')
const Pool = require('../util/pool')

const pool = new Pool()

class Element extends Node {
    /**
     * 创建实例
     */
    static $$create(options, tree) {
        const config = cache.getConfig()

        if (config.optimization.elementMultiplexing) {
            // 复用 element 节点
            const instance = pool.get()

            if (instance) {
                instance.$$init(options, tree)
                return instance
            }
        }

        return new Element(options, tree)
    }

    /**
     * 覆写父类的 $$init 方法
     */
    $$init(options, tree) {
        options.type = 'element'

        super.$$init(options, tree)

        this.$_tagName = options.tagName || ''
        this.$_children = []
        this.$_nodeType = options.nodeType || Node.ELEMENT_NODE
        this.$_unary = !!parser.voidMap[this.$_tagName.toLowerCase()]
        this.$_notTriggerUpdate = false
        this.$_dataset = null
        this.$_classList = null
        this.$_style = null
        this.$_attrs = null

        this.$_initAttrs(options.attrs)
    }

    /**
     * 覆写父类的 $$destroy 方法
     */
    $$destroy() {
        super.$$destroy()

        this.$_tagName = null
        this.$_children.length = 0
        this.$_nodeType = null
        this.$_unary = null
        this.$_notTriggerUpdate = null
        this.$_dataset = null
        this.$_classList = null
        this.$_style = null
        this.$_attrs = null
    }

    /**
     * 回收实例
     */
    $$recycle() {
        this.$_children.forEach(child => child.$$recycle())
        this.$$destroy()

        const config = cache.getConfig()

        if (config.optimization.elementMultiplexing) {
            // 复用 element 节点
            pool.add(this)
        }
    }

    /**
     * 延迟创建内部属性对象
     */
    set $_dataset(value) {
        this.$__dataset = value
    }

    get $_dataset() {
        if (!this.$__dataset) this.$__dataset = Object.create(null)
        return this.$__dataset
    }

    set $_classList(value) {
        if (!value && this.$__classList) this.$__classList.$$recycle()
        this.$__classList = value
    }

    get $_classList() {
        if (!this.$__classList) this.$__classList = ClassList.$$create(this.$_onClassOrStyleUpdate.bind(this))
        return this.$__classList
    }

    set $_style(value) {
        if (!value && this.$__style) this.$__style.$$recycle()
        this.$__style = value
    }

    get $_style() {
        if (!this.$__style) this.$__style = Style.$$create(this.$_onClassOrStyleUpdate.bind(this))
        return this.$__style
    }

    set $_attrs(value) {
        if (!value && this.$__attrs) this.$__attrs.$$recycle()
        this.$__attrs = value
    }

    get $_attrs() {
        if (!this.$__attrs) this.$__attrs = Attribute.$$create(this, this.$_triggerParentUpdate.bind(this))
        return this.$__attrs
    }

    /**
     * 初始化属性
     */
    $_initAttrs(attrs = {}) {
        // 防止一开始就创建 $_attrs
        const attrKeys = Object.keys(attrs)
        if (!attrKeys.length) return

        this.$_notTriggerUpdate = true // 初始化不触发更新

        attrKeys.forEach(name => {
            if (name.indexOf('data-') === 0) {
                // dataset
                const datasetName = tool.toCamel(name.substr(5))
                this.$_dataset[datasetName] = attrs[name]
            } else {
                // 其他属性
                this.setAttribute(name, attrs[name])
            }
        })

        this.$_notTriggerUpdate = false // 重启触发更新
    }

    /**
     * 监听 class 或 style 属性值变化
     */
    $_onClassOrStyleUpdate() {
        if (this.$__attrs) this.$_attrs.triggerUpdate()
        this.$_triggerParentUpdate()
    }

    /**
     * 更新父组件树
     */
    $_triggerParentUpdate() {
        if (this.parentNode && !this.$_notTriggerUpdate) this.parentNode.$$trigger('$$childNodesUpdate')
        if (!this.$_notTriggerUpdate) this.$$trigger('$$domNodeUpdate')
    }

    /**
     * 更新子组件树
     */
    $_triggerMeUpdate() {
        if (!this.$_notTriggerUpdate) this.$$trigger('$$childNodesUpdate')
    }

    /**
     * 更新子节点变动引起的映射表修改
     */
    $_updateChildrenExtra(node, isRemove) {
        const id = node.id

        // 更新 nodeId - dom 映射表
        if (isRemove) {
            cache.setNode(this.$_pageId, node.$$nodeId, null)
        } else {
            cache.setNode(this.$_pageId, node.$$nodeId, node)
        }

        // 更新 id - dom 映射表
        if (id) {
            if (isRemove) {
                this.$_tree.updateIdMap(id, null)
            } else {
                this.$_tree.updateIdMap(id, node)
            }
        }

        if (node.childNodes && node.childNodes.length) {
            for (const child of node.childNodes) {
                this.$_updateChildrenExtra(child, isRemove)
            }
        }
    }

    /**
     * 遍历 dom 树，生成 html
     */
    $_generateHtml(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            // 文本节点
            return node.textContent
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // 元素
            const tagName = node.tagName.toLowerCase()
            let html = `<${tagName}`

            // 属性
            if (node.id) html += ` id="${node.id}"`
            if (node.className) html += ` class="${node.className}"`

            const styleText = node.style.cssText
            if (styleText) html += ` style="${styleText}"`

            const src = node.src
            if (src) html += ` src=${src}`

            const dataset = node.dataset
            Object.keys(dataset).forEach(name => {
                html += ` data-${tool.toDash(name)}="${dataset[name]}"`
            })

            html = this.$$dealWithAttrsForGenerateHtml(html, node)

            if (node.$$isUnary) {
                // 空标签
                return `${html} />`
            } else {
                const childrenHtml = node.childNodes.map(child => this.$_generateHtml(child)).join('')
                return `${html}>${childrenHtml}</${tagName}>`
            }
        }
    }

    /**
     * 遍历 ast，生成 dom 树
     */
    $_generateDomTree(node) {
        const {
            type,
            tagName = '',
            attrs = [],
            children = [],
            content = '',
        } = node

        const nodeId = `b-${tool.getId()}` // 运行时生成，使用 b- 前缀

        if (type === 'element') {
            // 元素
            const attrsMap = {}

            // 属性列表转化成 map
            for (const attr of attrs) {
                const name = attr.name
                let value = attr.value

                if (name === 'style') value = value && value.replace('"', '\'') || ''

                attrsMap[name] = value
            }

            const element = this.ownerDocument.$$createElement({
                tagName, attrs: attrsMap, nodeId
            })

            for (let child of children) {
                child = this.$_generateDomTree(child)

                if (child) element.appendChild(child)
            }

            return element
        } else if (type === 'text') {
            // 文本
            return this.ownerDocument.$$createTextNode({
                content: tool.decodeContent(content), nodeId
            })
        }
    }

    /**
     * 对应的 dom 信息
     */
    get $$domInfo() {
        return {
            nodeId: this.$$nodeId,
            pageId: this.$$pageId,
            type: this.$_type,
            tagName: this.$_tagName,
            id: this.id,
            class: this.className,
            style: this.$__style ? this.style.cssText : '',
        }
    }

    /**
     * 是否空标签
     */
    get $$isUnary() {
        return this.$_unary
    }

    /**
     * 调用 $_generateHtml 接口时用于处理额外的属性
     */
    $$dealWithAttrsForGenerateHtml(html) {
        // 具体实现逻辑由子类实现
        return html
    }

    /**
     * 调用 outerHTML 的 setter 时用于处理额外的属性
     */
    $$dealWithAttrsForOuterHTML() {
        // ignore，具体实现逻辑由子类实现
    }

    /**
     * 调用 cloneNode 接口时用于处理额外的属性
     */
    $$dealWithAttrsForCloneNode() {
    // 具体实现逻辑由子类实现
        return {}
    }

    /**
     * 小程序端的 getBoundingClientRect 实现
     * https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html
     * https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.boundingClientRect.html
     */
    $$getBoundingClientRect() {
        tool.flushThrottleCache() // 先清空 setData
        const window = cache.getWindow(this.$_pageId)
        return new Promise((resolve, reject) => {
            if (!window) reject()

            if (this.tagName === 'BODY') {
                window.$$createSelectorQuery().selectViewport().scrollOffset(res => (res ? resolve(res) : reject())).exec()
            } else {
                window.$$createSelectorQuery().select(`.miniprogram-root >>> .node-${this.$_nodeId}`).boundingClientRect(res => (res ? resolve(res) : reject())).exec()
            }
        })
    }

    /**
     * 获取对应小程序组件的 context 对象
     */
    $$getContext() {
        tool.flushThrottleCache() // 先清空 setData
        const window = cache.getWindow(this.$_pageId)
        return new Promise((resolve, reject) => {
            if (!window) reject()

            if (this.tagName === 'CANVAS') {
                // TODO，为了兼容基础库的一个 bug，暂且如此实现
                wx.createSelectorQuery().in(this._wxComponent).select(`.node-${this.$_nodeId}`).context(res => (res && res.context ? resolve(res.context) : reject()))
                    .exec()
            } else {
                window.$$createSelectorQuery().select(`.miniprogram-root >>> .node-${this.$_nodeId}`).context(res => (res && res.context ? resolve(res.context) : reject())).exec()
            }
        })
    }

    /**
     * 设置属性，但不触发更新
     */
    $$setAttributeWithoutUpdate(name, value) {
        this.$_notTriggerUpdate = true
        this.setAttribute(name, value)
        this.$_notTriggerUpdate = false
    }

    /**
     * 对外属性和方法
     */
    get id() {
        if (!this.$__attrs) return ''

        return this.$_attrs.get('id')
    }

    set id(id) {
        if (typeof id !== 'string') return

        id = id.trim()
        const oldId = this.$_attrs.get('id')
        this.$_attrs.set('id', id)

        if (id === oldId) return

        // 更新 tree
        if (this.$_tree.getById(oldId) === this) this.$_tree.updateIdMap(oldId, null)
        if (id) this.$_tree.updateIdMap(id, this)
        this.$_triggerParentUpdate()
    }

    get tagName() {
        return this.$_tagName.toUpperCase()
    }

    get className() {
        if (!this.$__classList) return ''

        return this.$_classList.toString()
    }

    set className(className) {
        if (typeof className !== 'string') return

        this.$_classList.$$parse(className)
    }

    get classList() {
        return this.$_classList
    }

    get nodeName() {
        return this.tagName
    }

    get nodeType() {
        return this.$_nodeType
    }

    get childNodes() {
        return this.$_children
    }

    get children() {
        return this.$_children.filter(child => child.nodeType === Node.ELEMENT_NODE)
    }

    get firstChild() {
        return this.$_children[0]
    }

    get lastChild() {
        return this.$_children[this.$_children.length - 1]
    }

    get innerHTML() {
        return this.$_children.map(child => this.$_generateHtml(child)).join('')
    }

    set innerHTML(html) {
        if (typeof html !== 'string') return

        const fragment = this.ownerDocument.$$createElement({
            tagName: 'documentfragment',
            nodeId: `b-${tool.getId()}`, // 运行时生成，使用 b- 前缀
            nodeType: Node.DOCUMENT_FRAGMENT_NODE,
        })

        // 解析成 ast
        let ast = null
        try {
            ast = parser.parse(html)
        } catch (err) {
            console.error(err)
        }

        if (!ast) return

        // 生成 dom 树
        ast.forEach(item => {
            const node = this.$_generateDomTree(item)
            if (node) fragment.appendChild(node)
        })

        // 删除所有子节点
        this.$_children.forEach(node => {
            node.$$updateParent(null)

            // 更新映射表
            this.$_updateChildrenExtra(node, true)
        })
        this.$_children.length = 0

        // 追加新子节点
        if (this.$_tagName === 'table') {
            // table 节点需要判断是否存在 tbody
            let hasTbody = false

            for (const child of fragment.childNodes) {
                if (child.tagName === 'TBODY') {
                    hasTbody = true
                    break
                }
            }

            if (!hasTbody) {
                const tbody = this.ownerDocument.$$createElement({
                    tagName: 'tbody',
                    attrs: {},
                    nodeType: Node.ELEMENT_NODE,
                    nodeId: `b-${tool.getId()}`, // 运行时生成，使用 b- 前缀
                })

                tbody.appendChild(fragment)
                this.appendChild(tbody)
            }
        } else {
            this.appendChild(fragment)
        }
    }

    get outerHTML() {
        return this.$_generateHtml(this)
    }

    set outerHTML(html) {
        if (typeof html !== 'string') return

        // 解析成 ast，只取第一个作为当前节点
        let ast = null
        try {
            ast = parser.parse(html)[0]
        } catch (err) {
            console.error(err)
        }

        if (ast) {
            // 生成 dom 树
            const node = this.$_generateDomTree(ast)

            // 删除所有子节点
            this.$_children.forEach(node => {
                node.$$updateParent(null)

                // 更新映射表
                this.$_updateChildrenExtra(node, true)
            })
            this.$_children.length = 0

            this.$_notTriggerUpdate = true // 先不触发更新

            // 追加新子节点
            const children = [].concat(node.childNodes)
            for (const child of children) {
                this.appendChild(child)
            }

            this.$_tagName = node.tagName.toLowerCase()
            this.id = node.id || ''
            this.className = node.className || ''
            this.style.cssText = node.style.cssText || ''
            this.src = node.src || ''
            this.$_dataset = Object.assign({}, node.dataset)

            this.$$dealWithAttrsForOuterHTML(node)

            this.$_notTriggerUpdate = false // 重启触发更新
            this.$_triggerParentUpdate()
        }
    }

    get innerText() {
        // WARN：此处处理成和 textContent 一致，不去判断是否会渲染出来的情况
        return this.textContent
    }

    set innerText(text) {
        this.textContent = text
    }

    get textContent() {
        return this.$_children.map(child => child.textContent).join('')
    }

    set textContent(text) {
        text = '' + text

        // 空串不新增 textNode 节点
        if (!text) return

        const nodeId = `b-${tool.getId()}` // 运行时生成，使用 b- 前缀
        const child = this.ownerDocument.$$createTextNode({content: text, nodeId})

        // 删除所有子节点
        this.$_children.forEach(node => {
            node.$$updateParent(null)

            // 更新映射表
            this.$_updateChildrenExtra(node, true)
        })
        this.$_children.length = 0

        this.appendChild(child)
    }

    get style() {
        return this.$_style
    }

    set style(value) {
        this.$_style.cssText = value
    }

    get dataset() {
        return this.$_dataset
    }

    get attributes() {
        return this.$_attrs.list
    }

    get src() {
        if (!this.$__attrs) return ''

        return this.$_attrs.get('src')
    }

    set src(value) {
        value = '' + value
        this.$_attrs.set('src', value)
    }

    cloneNode(deep) {
        const dataset = {}
        Object.keys(this.$_dataset).forEach(name => {
            dataset[`data-${tool.toDash(name)}`] = this.$_dataset[name]
        })

        const newNode = this.ownerDocument.$$createElement({
            tagName: this.$_tagName,
            attrs: {
                id: this.id,
                class: this.className,
                style: this.style.cssText,
                src: this.src,

                ...dataset,
                ...this.$$dealWithAttrsForCloneNode(),
            },
            nodeType: this.$_nodeType,
            nodeId: `b-${tool.getId()}`, // 运行时生成，使用 b- 前缀
        })

        if (deep) {
            // 深克隆
            for (const child of this.$_children) {
                newNode.appendChild(child.cloneNode(deep))
            }
        }

        return newNode
    }

    appendChild(node) {
        if (!(node instanceof Node)) return

        let nodes
        let hasUpdate = false

        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            // documentFragment
            nodes = [].concat(node.childNodes)
        } else {
            nodes = [node]
        }

        for (const node of nodes) {
            if (node === this) continue
            if (node.parentNode) node.parentNode.removeChild(node)

            this.$_children.push(node)
            node.$$updateParent(this) // 设置 parentNode

            // 更新映射表
            this.$_updateChildrenExtra(node)

            hasUpdate = true
        }

        // 触发 webview 端更新
        if (hasUpdate) this.$_triggerMeUpdate()

        return this
    }

    removeChild(node) {
        if (!(node instanceof Node)) return

        const index = this.$_children.indexOf(node)

        if (index >= 0) {
            // 已经插入，需要删除
            this.$_children.splice(index, 1)

            node.$$updateParent(null)

            // 更新映射表
            this.$_updateChildrenExtra(node, true)

            // 触发 webview 端更新
            this.$_triggerMeUpdate()
        }

        return node
    }

    insertBefore(node, ref) {
        if (!(node instanceof Node)) return
        if (ref && !(ref instanceof Node)) return

        let nodes
        let hasUpdate = false

        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            // documentFragment
            nodes = []
            for (let i = 0; i < node.childNodes.length; i++) {
                // 因为是逐个插入，所以需要逆序
                nodes.push(node.childNodes[i])
            }
        } else {
            nodes = [node]
        }

        for (const node of nodes) {
            if (node === this) continue
            if (node.parentNode) node.parentNode.removeChild(node)

            const insertIndex = ref ? this.$_children.indexOf(ref) : -1

            if (insertIndex === -1) {
                // 插入到末尾
                this.$_children.push(node)
            } else {
                // 插入到 ref 之前
                this.$_children.splice(insertIndex, 0, node)
            }

            node.$$updateParent(this) // 设置 parentNode

            // 更新映射表
            this.$_updateChildrenExtra(node)

            hasUpdate = true
        }


        // 触发 webview 端更新
        if (hasUpdate) this.$_triggerMeUpdate()

        return node
    }

    replaceChild(node, old) {
        if (!(node instanceof Node) || !(old instanceof Node)) return

        let nodes
        let hasUpdate = false

        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            // documentFragment
            nodes = []
            for (let i = node.childNodes.length - 1; i >= 0; i--) {
                // 因为是逐个插入，所以需要逆序
                nodes.push(node.childNodes[i])
            }
        } else {
            nodes = [node]
        }

        const replaceIndex = this.$_children.indexOf(old)
        if (replaceIndex !== -1) this.$_children.splice(replaceIndex, 1)

        for (const node of nodes) {
            if (node === this) continue
            if (node.parentNode) node.parentNode.removeChild(node)

            if (replaceIndex === -1) {
                // 插入到末尾
                this.$_children.push(node)
            } else {
                // 替换到 old
                this.$_children.splice(replaceIndex, 0, node)
            }

            node.$$updateParent(this) // 设置 parentNode

            // 更新映射表
            this.$_updateChildrenExtra(node)
            this.$_updateChildrenExtra(old, true)

            hasUpdate = true
        }

        // 触发 webview 端更新
        if (hasUpdate) this.$_triggerMeUpdate()

        return old
    }

    hasChildNodes() {
        return this.$_children.length > 0
    }

    getElementsByTagName(tagName) {
        if (typeof tagName !== 'string') return []

        return this.$_tree.getByTagName(tagName, this)
    }

    getElementsByClassName(className) {
        if (typeof className !== 'string') return []

        return this.$_tree.getByClassName(className, this)
    }

    querySelector(selector) {
        if (typeof selector !== 'string') return

        return this.$_tree.query(selector, this)[0] || null
    }

    querySelectorAll(selector) {
        if (typeof selector !== 'string') return []

        return this.$_tree.query(selector, this)
    }

    setAttribute(name, value) {
        if (typeof name !== 'string') return

        // 保留对象/数组/布尔值/undefined 原始内容，方便处理小程序内置组件的使用
        const valueType = typeof value
        if (valueType !== 'object' && valueType !== 'boolean' && value !== undefined && !Array.isArray(value)) value = '' + value

        if (name === 'id') {
            // id 要提前到此处特殊处理
            this.id = value
        } else {
            this.$_attrs.set(name, value)
        }
    }

    getAttribute(name) {
        if (typeof name !== 'string') return ''
        if (!this.$__attrs) return name === 'id' || name === 'style' || name === 'class' ? '' : undefined

        return this.$_attrs.get(name)
    }

    hasAttribute(name) {
        if (typeof name !== 'string') return false
        if (!this.$__attrs) return false

        return this.$_attrs.has(name)
    }

    removeAttribute(name) {
        if (typeof name !== 'string') return false

        return this.$_attrs.remove(name)
    }

    contains(otherElement) {
        const stack = []
        let checkElement = this

        while (checkElement) {
            if (checkElement === otherElement) return true

            const childNodes = checkElement.childNodes
            if (childNodes && childNodes.length) childNodes.forEach(child => stack.push(child))

            checkElement = stack.pop()
        }

        return false
    }

    getBoundingClientRect() {
        // 不作任何实现，只作兼容使用
        console.warn('getBoundingClientRect is not supported')
        return {}
    }
}

module.exports = Element

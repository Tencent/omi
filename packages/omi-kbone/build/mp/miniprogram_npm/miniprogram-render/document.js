const EventTarget = require('./event/event-target')
const Tree = require('./tree/tree')
const Node = require('./node/node')
const Element = require('./node/element')
const TextNode = require('./node/text-node')
const Comment = require('./node/comment')
const tool = require('./util/tool')
const cache = require('./util/cache')
const A = require('./node/element/a')
const Image = require('./node/element/image')
const Input = require('./node/element/input')
const Textarea = require('./node/element/textarea')
const Video = require('./node/element/video')
const Canvas = require('./node/element/canvas')
const NotSupport = require('./node/element/not-support')
const WxComponent = require('./node/element/wx-component')
const Cookie = require('./bom/cookie')

const CONSTRUCTOR_MAP = {
    A,
    IMG: Image,
    INPUT: Input,
    TEXTAREA: Textarea,
    VIDEO: Video,
    CANVAS: Canvas,
    'WX-COMPONENT': WxComponent,
}

class Document extends EventTarget {
    constructor(pageId, nodeIdMap) {
        super()

        // 用于封装特殊标签和对应构造器
        const that = this
        this.$_imageConstructor = function HTMLImageElement(width, height) {
            return Image.$$create({
                tagName: 'img',
                nodeId: `b-${tool.getId()}`, // 运行时生成，使用 b- 前缀
                attrs: {},
                width,
                height,
            }, that.$_tree)
        }

        this.$_pageId = pageId
        this.$_tree = new Tree(pageId, {
            type: 'element',
            tagName: 'body',
            attrs: {},
            unary: false,
            nodeId: 'e-body',
            children: [],
        }, nodeIdMap, this)
        this.$_cookie = new Cookie()

        // documentElement
        this.$_node = this.$$createElement({
            tagName: 'html',
            attrs: {},
            nodeId: `a-${tool.getId()}`, // 运行前生成，使用 a- 前缀
            type: Node.DOCUMENT_NODE,
        })
        this.$_node.$$updateParent(this) // documentElement 的 parentNode 是 document
        this.$_node.scrollTop = 0

        // head 元素
        this.$_head = this.createElement('head')

        // 更新 body 的 parentNode
        this.$_tree.root.$$updateParent(this.$_node)
    }

    /**
     * Image 构造器
     */
    get $$imageConstructor() {
        return this.$_imageConstructor
    }

    get $$pageId() {
        return this.$_pageId
    }

    /**
     * 完整的 cookie，包括 httpOnly 也能获取到
     */
    get $$cookie() {
        return this.$_cookie.getCookie(this.URL, true)
    }


    /**
     * 触发节点事件
     */
    $$trigger(eventName, options) {
        this.documentElement.$$trigger(eventName, options)
    }

    /**
     * 内部所有节点创建都走此接口，统一把控
     */
    $$createElement(options, tree) {
        const tagName = options.tagName.toUpperCase()
        tree = tree || this.$_tree

        const constructorClass = CONSTRUCTOR_MAP[tagName]
        if (constructorClass) {
            return constructorClass.$$create(options, tree)
        } else if (!tool.isTagNameSupport(tagName)) {
            return NotSupport.$$create(options, tree)
        } else {
            return Element.$$create(options, tree)
        }
    }

    /**
     * 内部所有文本节点创建都走此接口，统一把控
     */
    $$createTextNode(options, tree) {
        return TextNode.$$create(options, tree || this.$_tree)
    }

    /**
     * 内部所有注释节点创建都走此接口，统一把控
     */
    $$createComment(options, tree) {
        return Comment.$$create(options, tree || this.$_tree)
    }

    /**
     * 对外属性和方法
     */
    get nodeType() {
        return Node.DOCUMENT_NODE
    }

    get documentElement() {
        return this.$_node
    }

    get body() {
        return this.$_tree.root
    }

    get nodeName() {
        return '#document'
    }

    get head() {
        return this.$_head
    }

    get defaultView() {
        return cache.getWindow(this.$_pageId) || null
    }

    get URL() {
        if (this.defaultView) return this.defaultView.location.href

        return ''
    }

    get cookie() {
        return this.$_cookie.getCookie(this.URL)
    }

    set cookie(value) {
        if (!value || typeof value !== 'string') return

        this.$_cookie.setCookie(value, this.URL)
    }

    getElementById(id) {
        if (typeof id !== 'string') return

        return this.$_tree.getById(id) || null
    }

    getElementsByTagName(tagName) {
        if (typeof tagName !== 'string') return []

        return this.$_tree.getByTagName(tagName)
    }

    getElementsByClassName(className) {
        if (typeof className !== 'string') return []

        return this.$_tree.getByClassName(className)
    }

    querySelector(selector) {
        if (typeof selector !== 'string') return

        return this.$_tree.query(selector)[0] || null
    }

    querySelectorAll(selector) {
        if (typeof selector !== 'string') return []

        return this.$_tree.query(selector)
    }

    createElement(tagName) {
        if (typeof tagName !== 'string') return

        tagName = tagName.trim().toLowerCase()
        if (!tagName) return

        return this.$$createElement({
            tagName,
            nodeId: `b-${tool.getId()}`, // 运行时生成，使用 b- 前缀
        })
    }

    createElementNS(ns, tagName) {
        // 不支持真正意义上的 createElementNS，转成调用 createElement
        return this.createElement(tagName)
    }

    createTextNode(content) {
        content = '' + content

        return this.$$createTextNode({
            content,
            nodeId: `b-${tool.getId()}`, // 运行时生成，使用 b- 前缀
        })
    }

    createComment() {
        // 忽略注释内容的传入
        return this.$$createComment({
            nodeId: `b-${tool.getId()}`, // 运行时生成，使用 b- 前缀
        })
    }

    createDocumentFragment() {
        return Element.$$create({
            tagName: 'documentfragment',
            nodeId: `b-${tool.getId()}`, // 运行时生成，使用 b- 前缀
            nodeType: Node.DOCUMENT_FRAGMENT_NODE,
        }, this.$_tree)
    }

    createEvent() {
        const window = cache.getWindow(this.$_pageId)

        return new window.CustomEvent()
    }

    addEventListener(eventName, handler, options) {
        this.documentElement.addEventListener(eventName, handler, options)
    }

    removeEventListener(eventName, handler, isCapture) {
        this.documentElement.removeEventListener(eventName, handler, isCapture)
    }

    dispatchEvent(evt) {
        this.documentElement.dispatchEvent(evt)
    }
}

module.exports = Document

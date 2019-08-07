const mp = require('miniprogram-render')
const _ = require('./util/tool')
const initHandle = require('./util/init-handle')

const {
    cache,
    EventTarget,
    tool,
} = mp.$$adapter
const {
    WX_COMP_NAME_MAP,
    NOT_SUPPORT,
} = _

// dom 子树作为自定义组件渲染的层级数
const MAX_DOM_SUB_TREE_LEVEL = 10
let DOM_SUB_TREE_LEVEL = 10

Component({
    properties: {
        inCover: {
            type: Boolean,
            value: false,
        },
    },
    data: {
        wxCompName: '', // 需要渲染的内置组件名
        innerChildNodes: [], // 内置组件的孩子节点
        childNodes: [], // 孩子节点
    },
    options: {
        addGlobalClass: true, // 开启全局样式
    },
    created() {
        const config = cache.getConfig()

        // 根据配置重置全局变量
        const domSubTreeLevel = +config.optimization.domSubTreeLevel
        if (domSubTreeLevel >= 1 && domSubTreeLevel <= MAX_DOM_SUB_TREE_LEVEL) DOM_SUB_TREE_LEVEL = domSubTreeLevel
    },
    attached() {
        const nodeId = this.dataset.privateNodeId
        const pageId = this.dataset.privatePageId
        const data = {}

        this.nodeId = nodeId
        this.pageId = pageId

        // 记录 dom
        this.domNode = cache.getNode(pageId, nodeId)

        // TODO，为了兼容基础库的一个 bug，暂且如此实现
        if (this.domNode.tagName === 'CANVAS') this.domNode._wxComponent = this

        // 存储 document
        this.document = cache.getDocument(pageId)

        // 监听全局事件
        this.onChildNodesUpdate = tool.throttle(this.onChildNodesUpdate.bind(this))
        this.domNode.$$clearEvent('$$childNodesUpdate')
        this.domNode.addEventListener('$$childNodesUpdate', this.onChildNodesUpdate)
        this.onSelfNodeUpdate = tool.throttle(this.onSelfNodeUpdate.bind(this))
        this.domNode.$$clearEvent('$$domNodeUpdate')
        this.domNode.addEventListener('$$domNodeUpdate', this.onSelfNodeUpdate)

        // 初始化
        this.init(data)

        // 初始化孩子节点
        const childNodes = _.filterNodes(this.domNode, DOM_SUB_TREE_LEVEL - 1)
        const dataChildNodes = _.dealWithLeafAndSimple(childNodes, this.onChildNodesUpdate)
        if (data.wxCompName) {
            // 内置组件
            data.innerChildNodes = dataChildNodes
            data.childNodes = []
        } else {
            // 非内置组件
            data.innerChildNodes = []
            data.childNodes = dataChildNodes
        }

        // 执行一次 setData
        if (Object.keys(data).length) this.setData(data)
    },
    detached() {
        this.nodeId = null
        this.pageId = null
        this.domNode = null
        this.document = null
    },
    methods: {
        /**
         * 监听子节点变化
         */
        onChildNodesUpdate() {
            // 判断是否已被销毁
            if (!this.pageId || !this.nodeId) return

            // 儿子节点有变化
            const childNodes = _.filterNodes(this.domNode, DOM_SUB_TREE_LEVEL - 1)
            if (_.checkDiffChildNodes(childNodes, this.data.childNodes)) {
                const dataChildNodes = _.dealWithLeafAndSimple(childNodes, this.onChildNodesUpdate)
                const newData = {}
                if (this.data.wxCompName) {
                    // 内置组件
                    newData.innerChildNodes = dataChildNodes
                    newData.childNodes = []
                } else {
                    // 非内置组件
                    newData.innerChildNodes = []
                    newData.childNodes = dataChildNodes
                }

                this.setData(newData)
            }

            // 触发子节点变化
            const childNodeStack = [].concat(childNodes)
            let childNode = childNodeStack.pop()
            while (childNode) {
                if (childNode.type === 'element' && !childNode.isLeaf && !childNode.isSimple) {
                    childNode.domNode.$$trigger('$$childNodesUpdate')
                }

                if (childNode.childNodes && childNode.childNodes.length) childNode.childNodes.forEach(subChildNode => childNodeStack.push(subChildNode))
                childNode = childNodeStack.pop()
            }
        },

        /**
         * 监听当前节点变化
         */
        onSelfNodeUpdate() {
            // 判断是否已被销毁
            if (!this.pageId || !this.nodeId) return

            const newData = {}
            const domNode = this.domNode
            const data = this.data
            const tagName = domNode.tagName

            if (tagName === 'WX-COMPONENT') {
                // 无可替换 html 标签
                if (data.wxCompName !== domNode.$$behavior) newData.wxCompName = domNode.$$behavior
                const wxCompName = WX_COMP_NAME_MAP[domNode.$$behavior]
                if (wxCompName) _.checkComponentAttr(wxCompName, domNode, newData, data)
            } else if (NOT_SUPPORT.indexOf(tagName) >= 0) {
                // 不支持标签
                newData.wxCompName = 'not-support'
                if (data.content !== domNode.content) newData.content = domNode.textContent
            } else {
                // 可替换 html 标签
                const wxCompName = WX_COMP_NAME_MAP[tagName]
                if (wxCompName) _.checkComponentAttr(wxCompName, domNode, newData, data)
            }

            this.setData(newData)
        },

        /**
         * 触发事件
         */
        callEvent(evt, eventName, extra) {
            const pageId = this.pageId
            const originNodeId = evt.currentTarget.dataset.privateNodeId || this.nodeId
            const originNode = cache.getNode(pageId, originNodeId)

            if (!originNode) return

            EventTarget.$$process(originNode, eventName, evt, extra, (domNode, evt, isCapture) => {
                // 处理特殊节点事件
                if (domNode.tagName === 'A' && evt.type === 'click' && !isCapture) {
                    const window = cache.getWindow(this.pageId)

                    // 延迟触发跳转，先等所有同步回调处理完成
                    setTimeout(() => {
                        if (evt.cancelable) return

                        // 处理 a 标签的跳转
                        const href = domNode.href
                        const target = domNode.target

                        if (!href || href.indexOf('javascript') !== -1) return

                        if (target === '_blank') window.open(href)
                        else window.location.href = href
                    }, 0)
                }
            })
        },

        /**
         * 监听节点事件
         */
        onTouchStart(evt) {
            if (this.document && this.document.$$checkEvent(evt)) {
                this.callEvent(evt, 'touchstart')
            }
        },

        onTouchMove(evt) {
            if (this.document && this.document.$$checkEvent(evt)) {
                this.callEvent(evt, 'touchmove')
            }
        },

        onTouchEnd(evt) {
            if (this.document && this.document.$$checkEvent(evt)) {
                this.callEvent(evt, 'touchend')
            }
        },

        onTouchCancel(evt) {
            if (this.document && this.document.$$checkEvent(evt)) {
                this.callEvent(evt, 'touchcancel')
            }
        },

        onTap(evt) {
            if (this.document && this.document.$$checkEvent(evt)) {
                this.callEvent(evt, 'click', {button: 0}) // 默认左键
            }
        },

        onImgLoad(evt) {
            if (this.document && this.document.$$checkEvent(evt)) {
                this.callEvent(evt, 'load')
            }
        },

        onImgError(evt) {
            if (this.document && this.document.$$checkEvent(evt)) {
                this.callEvent(evt, 'error')
            }
        },

        ...initHandle,
    }
})

const mp = require('miniprogram-render')
const _ = require('./util/tool')
const initHandle = require('./util/init-handle')
const component = require('./util/component')

const {
    cache,
    EventTarget,
    tool,
} = mp.$$adapter
const {
    NOT_SUPPORT,
} = _
const {
    wxCompNameMap,
} = component

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
        wxCustomCompName: '', // 需要渲染的自定义组件名
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
        if (data.wxCompName || data.wxCustomCompName) {
            // 内置组件/自定义组件
            data.innerChildNodes = dataChildNodes
            data.childNodes = []
        } else {
            // 普通标签
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
                if (this.data.wxCompName || this.data.wxCustomCompName) {
                    // 内置组件/自定义组件
                    newData.innerChildNodes = dataChildNodes
                    newData.childNodes = []
                } else {
                    // 普通标签
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
                // 内置组件
                if (data.wxCompName !== domNode.behavior) newData.wxCompName = domNode.behavior
                const wxCompName = wxCompNameMap[domNode.behavior]
                if (wxCompName) _.checkComponentAttr(wxCompName, domNode, newData, data)
            } else if (tagName === 'WX-CUSTOM-COMPONENT') {
                // 自定义组件
                if (data.wxCustomCompName !== domNode.behavior) newData.wxCustomCompName = domNode.behavior
                if (data.nodeId !== this.nodeId) data.nodeId = this.nodeId
                if (data.pageId !== this.pageId) data.pageId = this.pageId
            } else if (NOT_SUPPORT.indexOf(tagName) >= 0) {
                // 不支持标签
                newData.wxCompName = 'not-support'
                if (data.content !== domNode.content) newData.content = domNode.textContent
            } else {
                // 可替换 html 标签
                const wxCompName = wxCompNameMap[tagName]
                if (wxCompName) _.checkComponentAttr(wxCompName, domNode, newData, data)
            }

            this.setData(newData)
        },

        /**
         * 触发事件
         */
        callEvent(eventName, evt, extra) {
            const pageId = this.pageId
            const originNodeId = evt.currentTarget.dataset.privateNodeId || this.nodeId
            const originNode = cache.getNode(pageId, originNodeId)

            if (!originNode) return

            EventTarget.$$process(originNode, eventName, evt, extra, (domNode, evt, isCapture) => {
                // 延迟触发跳转，先等所有同步回调处理完成
                setTimeout(() => {
                    if (evt.cancelable) return
                    const window = cache.getWindow(this.pageId)

                    // 处理特殊节点事件
                    if (domNode.tagName === 'A' && evt.type === 'click' && !isCapture) {
                        // 处理 a 标签的跳转
                        const href = domNode.href
                        const target = domNode.target

                        if (!href || href.indexOf('javascript') !== -1) return

                        if (target === '_blank') window.open(href)
                        else window.location.href = href
                    } else if (domNode.tagName === 'LABEL' && evt.type === 'click' && !isCapture) {
                        // 处理 label 的点击
                        const forValue = domNode.getAttribute('for')
                        let targetDomNode
                        if (forValue) {
                            targetDomNode = window.document.getElementById(forValue)
                        } else {
                            targetDomNode = domNode.querySelector('input')

                            // 寻找 switch 节点
                            if (!targetDomNode) targetDomNode = domNode.querySelector('wx-component[behavior=switch]')
                        }

                        if (!targetDomNode || !!targetDomNode.getAttribute('disabled')) return

                        // 找到了目标节点
                        if (targetDomNode.tagName === 'INPUT') {
                            if (_.checkEventAccessDomNode(evt, targetDomNode, domNode)) return

                            const type = targetDomNode.type
                            if (type === 'radio') {
                                targetDomNode.checked = true
                                const name = targetDomNode.name
                                const otherDomNodes = window.document.querySelectorAll(`input[name=${name}]`) || []
                                for (const otherDomNode of otherDomNodes) {
                                    if (otherDomNode.type === 'radio' && otherDomNode !== targetDomNode) {
                                        otherDomNode.checked = false
                                    }
                                }
                                this.callSimpleEvent('change', {detail: {value: targetDomNode.value}}, targetDomNode)
                            } else if (type === 'checkbox') {
                                targetDomNode.checked = !targetDomNode.checked
                                this.callSimpleEvent('change', {detail: {value: targetDomNode.checked ? [targetDomNode.value] : []}}, targetDomNode)
                            } else {
                                targetDomNode.focus()
                            }
                        } else if (targetDomNode.tagName === 'WX-COMPONENT') {
                            if (_.checkEventAccessDomNode(evt, targetDomNode, domNode)) return

                            const behavior = targetDomNode.behavior
                            if (behavior === 'switch') {
                                const checked = !targetDomNode.getAttribute('checked')
                                targetDomNode.setAttribute('checked', checked)
                                this.callSimpleEvent('change', {detail: {value: checked}}, targetDomNode)
                            }
                        }
                    }
                }, 0)
            })
        },

        /**
         * 监听节点事件
         */
        onTouchStart(evt) {
            if (this.document && this.document.$$checkEvent(evt)) {
                this.callEvent('touchstart', evt)
            }
        },

        onTouchMove(evt) {
            if (this.document && this.document.$$checkEvent(evt)) {
                this.callEvent('touchmove', evt)
            }
        },

        onTouchEnd(evt) {
            if (this.document && this.document.$$checkEvent(evt)) {
                this.callEvent('touchend', evt)
            }
        },

        onTouchCancel(evt) {
            if (this.document && this.document.$$checkEvent(evt)) {
                this.callEvent('touchcancel', evt)
            }
        },

        onTap(evt) {
            if (this.document && this.document.$$checkEvent(evt)) {
                this.callEvent('click', evt, {button: 0}) // 默认左键
            }
        },

        onImgLoad(evt) {
            const pageId = this.pageId
            const originNodeId = evt.currentTarget.dataset.privateNodeId || this.nodeId
            const originNode = cache.getNode(pageId, originNodeId)

            if (!originNode) return

            this.callSimpleEvent('load', evt, originNode)
        },

        onImgError(evt) {
            const pageId = this.pageId
            const originNodeId = evt.currentTarget.dataset.privateNodeId || this.nodeId
            const originNode = cache.getNode(pageId, originNodeId)

            if (!originNode) return

            this.callSimpleEvent('error', evt, originNode)
        },

        ...initHandle,
    }
})

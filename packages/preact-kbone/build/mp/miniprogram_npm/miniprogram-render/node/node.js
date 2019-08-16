const EventTarget = require('../event/event-target')
const cache = require('../util/cache')

class Node extends EventTarget {
    /**
     * 覆写父类的 $$init 方法
     */
    $$init(options, tree) {
        super.$$init()

        this.$_nodeId = options.nodeId // 唯一标识
        this.$_type = options.type
        this.$_parentNode = null
        this.$_tree = tree
        this.$_pageId = tree.pageId
    }

    /**
     * 覆写父类的 $$destroy 方法
     */
    $$destroy() {
        super.$$destroy()

        this.$_nodeId = null
        this.$_type = null
        this.$_parentNode = null
        this.$_tree = null
        this.$_pageId = null
    }

    /**
     * 内部 nodeId
     */
    get $$nodeId() {
        return this.$_nodeId
    }

    /**
     * 内部 pageId
     */
    get $$pageId() {
        return this.$_pageId
    }

    /**
     * 更新 parentNode
     */
    $$updateParent(parentNode = null) {
        this.$_parentNode = parentNode
    }

    /**
     * 对外属性和方法
     */
    get parentNode() {
        return this.$_parentNode
    }

    get nodeValue() {
        return null
    }

    get previousSibling() {
        const childNodes = this.parentNode && this.parentNode.childNodes || []
        const index = childNodes.indexOf(this)

        if (index > 0) {
            return childNodes[index - 1]
        }

        return null
    }

    get previousElementSibling() {
        const childNodes = this.parentNode && this.parentNode.childNodes || []
        const index = childNodes.indexOf(this)

        if (index > 0) {
            for (let i = index - 1; i >= 0; i--) {
                if (childNodes[i].nodeType === Node.ELEMENT_NODE) {
                    return childNodes[i]
                }
            }
        }

        return null
    }

    get nextSibling() {
        const childNodes = this.parentNode && this.parentNode.childNodes || []
        const index = childNodes.indexOf(this)

        return childNodes[index + 1] || null
    }

    get nextElementSibling() {
        const childNodes = this.parentNode && this.parentNode.childNodes || []
        const index = childNodes.indexOf(this)

        if (index < childNodes.length - 1) {
            for (let i = index + 1, len = childNodes.length; i < len; i++) {
                if (childNodes[i].nodeType === Node.ELEMENT_NODE) {
                    return childNodes[i]
                }
            }
        }

        return null
    }

    get ownerDocument() {
        return cache.getDocument(this.$_pageId) || null
    }

    hasChildNodes() {
        return false
    }
}

// 静态属性
Node.ELEMENT_NODE = 1
Node.TEXT_NODE = 3
Node.CDATA_SECTION_NODE = 4
Node.PROCESSING_INSTRUCTION_NODE = 7
Node.COMMENT_NODE = 8
Node.DOCUMENT_NODE = 9
Node.DOCUMENT_TYPE_NODE = 10
Node.DOCUMENT_FRAGMENT_NODE = 11

module.exports = Node

const Node = require('./node')
const tool = require('../util/tool')
const Pool = require('../util/pool')
const cache = require('../util/cache')

const pool = new Pool()

class TextNode extends Node {
    /**
     * 创建实例
     */
    static $$create(options, tree) {
        const config = cache.getConfig()

        if (config.optimization.textMultiplexing) {
            // 复用 text 节点
            const instance = pool.get()

            if (instance) {
                instance.$$init(options, tree)
                return instance
            }
        }

        return new TextNode(options, tree)
    }

    /**
     * 覆写父类的 $$init 方法
     */
    $$init(options, tree) {
        options.type = 'text'

        super.$$init(options, tree)

        this.$_content = options.content || ''
    }

    /**
     * 覆写父类的 $$destroy 方法
     */
    $$destroy() {
        super.$$destroy()

        this.$_content = ''
    }

    /**
     * 回收实例
     */
    $$recycle() {
        this.$$destroy()

        const config = cache.getConfig()

        if (config.optimization.textMultiplexing) {
            // 复用 text 节点
            pool.add(this)
        }
    }

    /**
     * 更新父组件树
     */
    $_triggerParentUpdate() {
        if (this.parentNode) this.parentNode.$$trigger('$$childNodesUpdate')
    }

    /**
     * 对应的 dom 信息
     */
    get $$domInfo() {
        return {
            nodeId: this.$_nodeId,
            pageId: this.$_pageId,
            type: this.$_type,
            content: this.$_content,
        }
    }

    /**
     * 对外属性和方法
     */
    get nodeName() {
        return '#text'
    }

    get nodeType() {
        return Node.TEXT_NODE
    }

    get nodeValue() {
        return this.textContent
    }

    set nodeValue(value) {
        this.textContent = value
    }

    get textContent() {
        return this.$_content
    }

    set textContent(value) {
        value += ''

        this.$_content = value
        this.$_triggerParentUpdate()
    }

    get data() {
        return this.textContent
    }

    set data(value) {
        this.textContent = value
    }

    cloneNode() {
        return this.ownerDocument.$$createTextNode({
            content: this.$_content,
            nodeId: `b-${tool.getId()}`, // 运行时生成，使用 b- 前缀
        })
    }
}

module.exports = TextNode

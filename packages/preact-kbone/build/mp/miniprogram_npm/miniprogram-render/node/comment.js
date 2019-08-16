const Node = require('./node')
const tool = require('../util/tool')
const Pool = require('../util/pool')
const cache = require('../util/cache')

const pool = new Pool()

class Comment extends Node {
    /**
     * 创建实例
     */
    static $$create(options, tree) {
        const config = cache.getConfig()

        if (config.optimization.commentMultiplexing) {
            // 复用 comment 节点
            const instance = pool.get()

            if (instance) {
                instance.$$init(options, tree)
                return instance
            }
        }

        return new Comment(options, tree)
    }

    /**
     * 覆写父类的 $$init 方法
     */
    $$init(options, tree) {
        options.type = 'comment'

        super.$$init(options, tree)
    }

    /**
     * 回收实例
     */
    $$recycle() {
        this.$$destroy()

        const config = cache.getConfig()

        if (config.optimization.commentMultiplexing) {
            // 复用 comment 节点
            pool.add(this)
        }
    }

    /**
     * 对应的 dom 信息
     */
    get $$domInfo() {
        return {
            nodeId: this.$_nodeId,
            pageId: this.$_pageId,
            type: this.$_type,
        }
    }

    /**
     * 对外属性和方法
     */
    get nodeName() {
        return '#comment'
    }

    get nodeType() {
        return Node.COMMENT_NODE
    }

    cloneNode() {
        return this.ownerDocument.$$createComment({
            nodeId: `b-${tool.getId()}`, // 运行时生成，使用 b- 前缀
        })
    }
}

module.exports = Comment

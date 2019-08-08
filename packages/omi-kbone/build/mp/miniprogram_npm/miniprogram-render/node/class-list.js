/**
 * babel extends 无法直接继承 Array，所以换种方法来继承：https://babeljs.io/docs/en/caveats/#classes
 */
const Pool = require('../util/pool')
const cache = require('../util/cache')

const pool = new Pool()

function ClassList(onUpdate) {
    this.$$init(onUpdate)
}

/**
 * 创建实例
 */
ClassList.$$create = function(onUpdate) {
    const config = cache.getConfig()

    if (config.optimization.domExtendMultiplexing) {
    // 复用 dom 扩展对象
        const instance = pool.get()

        if (instance) {
            instance.$$init(onUpdate)
            return instance
        }
    }

    return new ClassList(onUpdate)
}

ClassList.prototype = Object.assign([], {
    /**
     * 初始化实例
     */
    $$init(onUpdate) {
        this.$_doUpdate = onUpdate
    },

    /**
     * 销毁实例
     */
    $$destroy() {
        this.$_doUpdate = null
        this.length = 0
    },

    /**
     * 回收实例
     */
    $$recycle() {
        this.$$destroy()

        const config = cache.getConfig()

        if (config.optimization.domExtendMultiplexing) {
            // 复用 dom 扩展对象
            pool.add(this)
        }
    },

    /**
     * 解析 className
     */
    $$parse(className = '') {
        this.length = 0 // 置空当前内容

        className = className.trim()
        className = className ? className.split(/\s+/) : []

        for (const item of className) {
            this.push(item)
        }

        this.$_doUpdate()
    },

    /**
     * 对外属性和方法
     */
    item(index) {
        return this[index]
    },

    contains(className) {
        if (typeof className !== 'string') return false

        return this.indexOf(className) !== -1
    },

    add(...args) {
        let isUpdate = false

        for (let className of args) {
            if (typeof className !== 'string') continue

            className = className.trim()

            if (className && this.indexOf(className) === -1) {
                this.push(className)
                isUpdate = true
            }
        }

        if (isUpdate) this.$_doUpdate()
    },

    remove(...args) {
        let isUpdate = false

        for (let className of args) {
            if (typeof className !== 'string') continue

            className = className.trim()

            if (!className) continue

            const index = this.indexOf(className)
            if (index >= 0) {
                this.splice(index, 1)
                isUpdate = true
            }
        }

        if (isUpdate) this.$_doUpdate()
    },

    toggle(className, force) {
        if (typeof className !== 'string') return false

        className = className.trim()

        if (!className) return false

        const isNotContain = this.indexOf(className) === -1
        let action = isNotContain ? 'add' : 'remove'
        action = force === true ? 'add' : force === false ? 'remove' : action

        if (action === 'add') {
            this.add(className)
        } else {
            this.remove(className)
        }

        return force === true || force === false ? force : isNotContain
    },

    toString() {
        return this.join(' ')
    },
})

module.exports = ClassList

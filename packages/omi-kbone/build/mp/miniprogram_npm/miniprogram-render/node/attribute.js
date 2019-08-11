const Pool = require('../util/pool')
const cache = require('../util/cache')
const tool = require('../util/tool')

const pool = new Pool()

class Attribute {
    constructor(element, onUpdate) {
        this.$$init(element, onUpdate)
    }

    /**
     * 创建实例
     */
    static $$create(element, onUpdate) {
        const config = cache.getConfig()

        if (config.optimization.domExtendMultiplexing) {
            // 复用 dom 扩展对象
            const instance = pool.get()

            if (instance) {
                instance.$$init(element, onUpdate)
                return instance
            }
        }

        return new Attribute(element, onUpdate)
    }

    /**
     * 初始化实例
     */
    $$init(element, onUpdate) {
        this.$_element = element
        this.$_doUpdate = onUpdate
        this.$_map = {}
        this.$_list = []

        this.triggerUpdate()
    }

    /**
     * 销毁实例
     */
    $$destroy() {
        this.$_element = null
        this.$_doUpdate = null
        this.$_map = null
        this.$_list = null
    }

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
    }

    /**
     * 属性列表，需要动态更新
     */
    get list() {
        return this.$_list
    }

    /**
     * 设置属性
     */
    set(name, value) {
        const element = this.$_element
        const map = this.$_map

        if (name === 'id') {
            map.id = value
        } else if (name === 'class') {
            element.className = value
        } else if (name === 'style') {
            element.style.cssText = value
        } else if (name.indexOf('data-') === 0) {
            const datasetName = tool.toCamel(name.substr(5))
            element.dataset[datasetName] = value
        } else {
            const config = cache.getConfig()

            // 判断 value 是否需要删减
            if (typeof value === 'string' && config.optimization.attrValueReduce && value.length > config.optimization.attrValueReduce) {
                console.warn(`property "${name}" will be deleted, because it's greater than ${config.optimization.attrValueReduce}`)
                value = ''
            }

            map[name] = value

            // 其他字段的设置需要触发父组件更新
            this.$_doUpdate()
        }

        this.triggerUpdate()
    }

    /**
     * 取属性
     */
    get(name) {
        const element = this.$_element
        const map = this.$_map

        if (name === 'id') {
            return map.id || ''
        } if (name === 'class') {
            return element.className
        } else if (name === 'style') {
            return element.style.cssText
        } else if (name.indexOf('data-') === 0) {
            const datasetName = tool.toCamel(name.substr(5))
            if (!element.$__dataset) return undefined
            return element.dataset[datasetName]
        } else {
            return map[name]
        }
    }

    /**
     * 判断属性是否存在
     */
    has(name) {
        const element = this.$_element
        const map = this.$_map

        if (name === 'id') {
            return !!element.id
        } else if (name === 'class') {
            return !!element.className
        } else if (name === 'style') {
            return !!element.style.cssText
        } else if (name.indexOf('data-') === 0) {
            const datasetName = tool.toCamel(name.substr(5))
            if (!element.$__dataset) return false
            return Object.prototype.hasOwnProperty.call(element.dataset, datasetName)
        } else {
            return Object.prototype.hasOwnProperty.call(map, name)
        }
    }

    /**
     * 删除属性
     */
    remove(name) {
        const element = this.$_element
        const map = this.$_map

        if (name === 'id') {
            element.id = ''
        } else if (name === 'class' || name === 'style') {
            this.set(name, '')
        } else if (name.indexOf('data-') === 0) {
            const datasetName = tool.toCamel(name.substr(5))
            if (element.$__dataset) delete element.dataset[datasetName]
        } else {
            // 其他字段的设置需要触发父组件更新
            delete map[name]
            this.$_doUpdate()
        }

        this.triggerUpdate()
    }

    /**
     * 更新属性列表
     */
    triggerUpdate() {
        const map = this.$_map
        const list = this.$_list

        // 清空旧的列表
        list.forEach(item => {
            delete list[item.name]
        })
        delete list.class
        delete list.style
        list.length = 0

        // 添加新列表
        Object.keys(map).forEach(name => {
            if (name !== 'id') {
                const item = {name, value: map[name]}

                list.push(item)
                list[name] = item
            }
        })

        const idValue = this.get('id')
        const classValue = this.get('class')
        const styleValue = this.get('style')
        if (idValue) {
            const item = {name: 'id', value: idValue}
            list.push(item)
            list.id = item
        }
        if (classValue) {
            const item = {name: 'class', value: classValue}
            list.push(item)
            list.class = item
        }
        if (styleValue) {
            const item = {name: 'style', value: styleValue}
            list.push(item)
            list.style = item
        }
    }
}

module.exports = Attribute

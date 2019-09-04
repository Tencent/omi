const Element = require('../element')
const Event = require('../../event/event')
const Pool = require('../../util/pool')
const cache = require('../../util/cache')

const pool = new Pool()

class Image extends Element {
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

        return new Image(options, tree)
    }

    /**
     * 覆写父类的 $$init 方法
     */
    $$init(options, tree) {
        const width = options.width
        const height = options.height

        if (typeof width === 'number' && width >= 0) options.attrs.width = width
        if (typeof height === 'number' && height >= 0) options.attrs.height = height

        super.$$init(options, tree)

        this.$_naturalWidth = 0
        this.$_naturalHeight = 0

        this.$_initRect()
    }

    /**
     * 覆写父类的 $$destroy 方法
     */
    $$destroy() {
        super.$$destroy()

        this.$_naturalWidth = null
        this.$_naturalHeight = null
    }

    /**
     * 覆写父类的回收实例方法
     */
    $$recycle() {
        this.$$destroy()

        const config = cache.getConfig()

        if (config.optimization.elementMultiplexing) {
            // 复用 element 节点
            pool.add(this)
        }
    }

    /**
     * 更新父组件树
     */
    $_triggerParentUpdate() {
        this.$_initRect()
        super.$_triggerParentUpdate()
    }

    /**
     * 初始化长宽
     */
    $_initRect() {
        const width = parseInt(this.$_attrs.get('width'), 10)
        const height = parseInt(this.$_attrs.get('height'), 10)

        if (typeof width === 'number' && width >= 0) this.$_style.width = `${width}px`
        if (typeof height === 'number' && height >= 0) this.$_style.height = `${height}px`
    }

    /**
     * 重置长宽
     */
    $_resetRect(rect = {}) {
        this.$_naturalWidth = rect.width || 0
        this.$_naturalHeight = rect.height || 0

        this.$_initRect()
    }

    /**
     * 对外属性和方法
     */
    get src() {
        return this.$_attrs.get('src') || ''
    }

    set src(value) {
        if (!value || typeof value !== 'string') return

        this.$_attrs.set('src', value)

        setTimeout(() => {
            wx.getImageInfo({
                src: this.src,
                success: res => {
                    // 加载成功，调整图片的宽高
                    this.$_resetRect(res)

                    // 触发 load 事件
                    this.$$trigger('load', {
                        event: new Event({
                            name: 'load',
                            target: this,
                            eventPhase: Event.AT_TARGET
                        }),
                        currentTarget: this,
                    })
                },
                fail: () => {
                    // 加载失败，调整图片的宽高
                    this.$_resetRect({width: 0, height: 0})

                    // 触发 error 事件
                    this.$$trigger('error', {
                        event: new Event({
                            name: 'error',
                            target: this,
                            eventPhase: Event.AT_TARGET
                        }),
                        currentTarget: this,
                    })
                },
            })
        }, 0)
    }

    get width() {
        return +this.$_attrs.get('width') || 0
    }

    set width(value) {
        if (typeof value !== 'number' || !isFinite(value) || value < 0) return

        this.$_attrs.set('width', value)
        this.$_initRect()
    }

    get height() {
        return +this.$_attrs.get('height') || 0
    }

    set height(value) {
        if (typeof value !== 'number' || !isFinite(value) || value < 0) return

        this.$_attrs.set('height', value)
        this.$_initRect()
    }

    get naturalWidth() {
        return this.$_naturalWidth
    }

    get naturalHeight() {
        return this.$_naturalHeight
    }
}

module.exports = Image

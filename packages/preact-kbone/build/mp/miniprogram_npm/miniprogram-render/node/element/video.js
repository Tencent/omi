const Element = require('../element')
const Pool = require('../../util/pool')
const cache = require('../../util/cache')

const pool = new Pool()

class HTMLVideoElement extends Element {
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

        return new HTMLVideoElement(options, tree)
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

        this.$_initRect()
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
     * 对外属性和方法
     */
    get src() {
        return this.$_attrs.get('src') || ''
    }

    set src(value) {
        if (!value || typeof value !== 'string') return

        this.$_attrs.set('src', value)
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

    get autoplay() {
        return !!this.$_attrs.get('autoplay')
    }

    set autoplay(value) {
        value = !!value
        this.$_attrs.set('autoplay', value)
    }

    get loop() {
        return !!this.$_attrs.get('loop')
    }

    set loop(value) {
        value = !!value
        this.$_attrs.set('loop', value)
    }

    get muted() {
        return !!this.$_attrs.get('muted')
    }

    set muted(value) {
        value = !!value
        this.$_attrs.set('muted', value)
    }

    get controls() {
        const value = this.$_attrs.get('controls')
        return value !== undefined ? !!value : true
    }

    set controls(value) {
        this.$_attrs.set('controls', value)
    }

    get poster() {
        return this.$_attrs.get('poster')
    }

    set poster(value) {
        if (!value || typeof value !== 'string') return

        this.$_attrs.set('poster', value)
    }

    get currentTime() {
        return +this.$_attrs.get('currentTime') || 0
    }

    get buffered() {
        return this.$_attrs.get('buffered')
    }
}

module.exports = HTMLVideoElement

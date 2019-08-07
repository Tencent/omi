const Element = require('../element')
const Pool = require('../../util/pool')
const cache = require('../../util/cache')

const pool = new Pool()

class Video extends Element {
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

        return new Video(options, tree)
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
        const width = parseInt(this.getAttribute('width'), 10)
        const height = parseInt(this.getAttribute('height'), 10)

        if (typeof width === 'number' && width >= 0) this.$_style.width = `${width}px`
        if (typeof height === 'number' && height >= 0) this.$_style.height = `${height}px`
    }

    /**
     * 对外属性和方法
     */
    get src() {
        return this.getAttribute('src') || ''
    }

    set src(value) {
        if (!value || typeof value !== 'string') return

        this.setAttribute('src', value)
    }

    get width() {
        return +this.getAttribute('width') || 0
    }

    set width(value) {
        if (typeof value !== 'number' || !isFinite(value) || value < 0) return

        this.setAttribute('width', value)
        this.$_initRect()
    }

    get height() {
        return +this.getAttribute('height') || 0
    }

    set height(value) {
        if (typeof value !== 'number' || !isFinite(value) || value < 0) return

        this.setAttribute('height', value)
        this.$_initRect()
    }

    get autoplay() {
        return !!this.getAttribute('autoplay')
    }

    set autoplay(value) {
        value = !!value
        this.setAttribute('autoplay', value)
    }

    get loop() {
        return !!this.getAttribute('loop')
    }

    set loop(value) {
        value = !!value
        this.setAttribute('loop', value)
    }

    get muted() {
        return !!this.getAttribute('muted')
    }

    set muted(value) {
        value = !!value
        this.setAttribute('muted', value)
    }

    get controls() {
        const value = this.getAttribute('controls')
        return value !== undefined ? !!value : true
    }

    set controls(value) {
        this.setAttribute('controls', value)
    }

    get poster() {
        return this.getAttribute('poster')
    }

    set poster(value) {
        if (!value || typeof value !== 'string') return

        this.setAttribute('poster', value)
    }

    get currentTime() {
        return +this.getAttribute('currentTime') || 0
    }

    get buffered() {
        return this.getAttribute('buffered')
    }
}

module.exports = Video

const Element = require('../element')
const Location = require('../../bom/location')
const cache = require('../../util/cache')
const Pool = require('../../util/pool')

const pool = new Pool()

class HTMLAnchorElement extends Element {
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

        return new HTMLAnchorElement(options, tree)
    }

    /**
     * 覆写父类的 $$init 方法
     */
    $$init(options, tree) {
        super.$$init(options, tree)

        this.$_protocol = 'http:'
        this.$_hostname = ''
        this.$_port = ''
        this.$_pathname = '/'
        this.$_search = ''
        this.$_hash = ''
    }

    /**
     * 覆写父类的 $$destroy 方法
     */
    $$destroy() {
        super.$$destroy()

        this.$_protocol = null
        this.$_hostname = null
        this.$_port = null
        this.$_pathname = null
        this.$_search = null
        this.$_hash = null
    }

    /**
     * 覆写父类的回收实例方法
     */
    $$recycle() {
        this.$_children.forEach(child => child.$$recycle())
        this.$$destroy()

        const config = cache.getConfig()

        if (config.optimization.elementMultiplexing) {
            // 复用 element 节点
            pool.add(this)
        }
    }

    /**
     * 调用 $_generateHtml 接口时用于处理额外的属性，
     */
    $$dealWithAttrsForGenerateHtml(html, node) {
        const href = node.href
        if (href) html += ` href="${href}"`

        const target = node.target
        if (target) html += ` target="${target}"`

        return html
    }

    /**
     * 调用 outerHTML 的 setter 时用于处理额外的属性
     */
    $$dealWithAttrsForOuterHTML(node) {
        this.href = node.href || ''
        this.target = node.target || ''
    }

    /**
     * 调用 cloneNode 接口时用于处理额外的属性
     */
    $$dealWithAttrsForCloneNode() {
        return {
            href: this.href,
            target: this.target,
        }
    }

    /**
     * 对外属性和方法
     */
    get href() {
        return this.$_attrs.get('href')
    }

    set href(value) {
        value = '' + value

        if (value.indexOf('//') === -1) {
            const {origin} = cache.getConfig()
            value = origin + (value[0] === '/' ? value : `/${value}`)
        }

        this.$_attrs.set('href', value)
        const {
            protocol, hostname, port, pathname, search, hash
        } = Location.$$parse(value)

        this.$_protocol = protocol || this.$_protocol
        this.$_hostname = hostname || this.$_hostname
        this.$_port = port || ''
        this.$_pathname = pathname || '/'
        this.$_search = search || ''
        this.$_hash = hash || ''
    }

    get protocol() {
        return this.$_protocol
    }

    get hostname() {
        return this.$_hostname
    }

    get port() {
        return this.$_port
    }

    get pathname() {
        return this.$_pathname
    }

    get search() {
        return this.$_search
    }

    get hash() {
        return this.$_hash
    }

    get target() {
        return this.$_attrs.get('target')
    }

    set target(value) {
        value = '' + value
        this.$_attrs.set('target', value)
    }
}

module.exports = HTMLAnchorElement

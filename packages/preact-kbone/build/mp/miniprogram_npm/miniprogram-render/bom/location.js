/**
 * 暂不对 ipv6 地址做支持
 */
const EventTarget = require('../event/event-target')
const tool = require('../util/tool')
const cache = require('../util/cache')

class Location extends EventTarget {
    constructor(pageId) {
        super()

        this.$_pageId = pageId
        this.$_pageRoute = tool.getPageRoute(pageId) // 小程序页面路由

        this.$_protocol = 'https:'
        this.$_hostname = ''
        this.$_port = ''
        this.$_pathname = '/'
        this.$_search = ''
        this.$_hash = ''

        this.$_lastHash = ''
        this.$_lastHref = ''
        this.$_allowCheck = true // 是否检查 url 和 hash 变化
    }

    /**
     * 获取 url 中旧的需要进行检测的部分
     */
    $_getOldValues() {
        return {
            protocol: this.$_protocol,
            hostname: this.$_hostname,
            port: this.$_port,
            pathname: this.$_pathname,
            search: this.$_search,
            hash: this.$_hash,
        }
    }

    /**
     * 开始检查 hash 变化
     */
    $_startCheckHash() {
        if (!this.$_allowCheck) return

        this.$_lastHash = this.hash
        this.$_lastHref = this.href
    }

    /**
     * 检查 hash 变化
     */
    $_endCheckHash() {
        if (!this.$_allowCheck) return

        if (this.$_lastHash !== this.hash) {
            this.$$trigger('hashchange', {
                event: {
                    oldURL: this.$_lastHref,
                    newURL: this.href,
                }
            })
        }
    }

    /**
     * 设置 href，不进入 history
     */
    $_setHrefWithoutEnterHistory(value) {
        if (!value || typeof value !== 'string') return

        this.$_startCheckHash()

        if (!/^(([a-zA-Z0-9]+:)|(\/\/))/i.test(value)) {
            // 没有带协议
            if (value.indexOf('/') === 0) {
                // 以 / 开头，直接替换整个 pathname、search、hash
                value = `${this.origin}${value}`
            } else if (value.indexOf('#') === 0) {
                // 以 # 开头，直接替换整个 hash
                value = `${this.origin}${this.$_pathname}${this.$_search}${value}`
            } else {
                // 非以 / 开头，则替换 pathname 的最后一段、search、hash
                let pathname = this.$_pathname.split('/')
                pathname.pop()
                pathname = pathname.join('/')

                value = `${this.origin}${pathname}/${value}`
            }
        }

        const {
            protocol, hostname, port, hash, search, pathname
        } = Location.$$parse(value)
        const oldValues = this.$_getOldValues()

        this.$_protocol = protocol || this.$_protocol
        this.$_hostname = hostname || this.$_hostname
        this.$_port = port || ''
        this.$_pathname = pathname || '/'
        this.$_search = search || ''
        this.$_hash = hash || ''

        if (this.$_checkUrl(oldValues)) this.$_endCheckHash()
    }

    /**
     * 进入 history
     */
    $_enterHistory() {
        this.$$trigger('$_addToHistory', {
            event: {
                href: this.href,
            }
        })
    }

    /**
     * 检查 url 变化是否需要跳转
     */
    $_checkUrl(oldValues) {
        if (!this.$_allowCheck) return false

        const window = cache.getWindow(this.$_pageId)

        if (this.$_protocol !== oldValues.protocol || this.$_hostname !== oldValues.hostname || this.$_port !== oldValues.port) {
            // 只能跳转相同 protocol、hostname 和 port 的 url
            const jumpUrl = this.href

            // 和 web 端不同，这里恢复成原状
            this.$_protocol = oldValues.protocol
            this.$_hostname = oldValues.hostname
            this.$_port = oldValues.port
            this.$_pathname = oldValues.pathname
            this.$_search = oldValues.search
            this.$_hash = oldValues.hash

            window.$$trigger('pageaccessdenied', {
                event: {
                    url: jumpUrl,
                    type: 'jump',
                },
            })

            return false
        }

        if (this.$_pathname !== oldValues.pathname) {
            const matchRoute = window.$$miniprogram.getMatchRoute(this.$_pathname)

            if (matchRoute) {
                let param = ['type=jump', `targeturl=${encodeURIComponent(this.href)}`]
                if (this.$_search) param.push(`search=${encodeURIComponent(this.$_search)}`)
                if (this.$_hash) param.push(`hash=${encodeURIComponent(this.$_hash)}`)

                param = '?' + param.join('&')

                wx.redirectTo({
                    url: `${matchRoute}${param}`
                })

                return true
            } else {
                const jumpUrl = this.href

                // 和 web 端不同，这里恢复成原状
                this.$_protocol = oldValues.protocol
                this.$_hostname = oldValues.hostname
                this.$_port = oldValues.port
                this.$_pathname = oldValues.pathname
                this.$_search = oldValues.search
                this.$_hash = oldValues.hash

                window.$$trigger('pagenotfound', {
                    event: {
                        url: jumpUrl,
                        type: 'jump',
                    },
                })

                return false
            }
        }

        return true
    }

    /**
     * 打开一个新页面
     */
    $$open(url) {
        url = tool.completeURL(url, this.origin, true)

        const window = cache.getWindow(this.$_pageId)
        const parseRes = Location.$$parse(url)

        if (parseRes.protocol !== this.$_protocol || parseRes.hostname !== this.$_hostname || parseRes.port !== this.$_port) {
            // 只能打开相同 protocol、hostname 和 port 的 url
            return window.$$trigger('pageaccessdenied', {
                event: {
                    url,
                    type: 'open',
                },
            })
        }

        const matchRoute = window.$$miniprogram.getMatchRoute(parseRes.pathname || '/')

        if (matchRoute) {
            let param = ['type=open', `targeturl=${encodeURIComponent(url)}`]
            if (this.$_search) param.push(`search=${encodeURIComponent(parseRes.search || '')}`)
            if (this.$_hash) param.push(`hash=${encodeURIComponent(parseRes.hash || '')}`)

            param = '?' + param.join('&')

            wx.navigateTo({
                url: `${matchRoute}${param}`
            })
        } else {
            window.$$trigger('pagenotfound', {
                event: {
                    url,
                    type: 'open',
                },
            })
        }
    }

    /**
     * 重置实例
     */
    $$reset(url = '') {
        const {
            protocol, hostname, port, pathname, hash, search
        } = Location.$$parse(url)

        this.$_protocol = protocol || 'https:'
        this.$_hostname = hostname || ''
        this.$_port = port || ''
        this.$_pathname = pathname || '/'
        this.$_search = search || ''
        this.$_hash = hash || ''
    }

    /**
     * 解析 href
     */
    static $$parse(href = '') {
        href = href.trim()

        // protocol
        let protocol = /^[a-zA-Z0-9]+:/i.exec(href)
        if (protocol) {
            protocol = protocol[0].toLowerCase()
            href = href.slice(protocol.length)
        }

        // 跳过 //
        if (href.indexOf('//') === 0) {
            href = href.slice(2)
        }

        let hostStart = 0
        let hostEnd = -1
        let isEnd = false
        let host
        for (let i = 0, len = href.length; i < len; i++) {
            const char = href[i]
            if ('\t\n\r "%\';<>\\^`{|}'.indexOf(char) >= 0) {
                // RFC 2396：不允许在 hostname 中使用的字符
                if (hostEnd === -1) hostEnd = i
            } else if ('#/?'.indexOf(char) >= 0) {
                // host 结束符
                if (hostEnd === -1) hostEnd = i
                isEnd = true
            } else if (char === '@') {
                hostStart = i + 1
                hostEnd = -1
            }

            if (isEnd) break
        }

        if (hostEnd === -1) {
            host = href.slice(hostStart)
            href = ''
        } else {
            host = href.slice(hostStart, hostEnd)
            href = href.slice(hostEnd)
        }


        // port
        let port = /:[0-9]*$/.exec(host)
        if (port) {
            port = port[0]
            host = host.slice(0, host.length - port.length)

            if (port !== ':') port = port.slice(1)
        } else {
            port = ''
        }

        // hostname
        for (let i = 0, len = host.length; i < len; i++) {
            const char = host[i]
            const isValid = (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9') || '.-+_'.indexOf(char) >= 0 || char.charCodeAt(0) > 127

            // 不合法的 host 字符
            if (!isValid) {
                host = host.slice(0, i)

                href = `/${host.slice(i)}${href}`
            }
        }
        const hostname = host.length > 255 ? '' : host.toLowerCase()

        // hash
        let hash
        let searchIndex = -1
        let hashIndex = -1
        for (let i = 0, len = href.length; i < len; i++) {
            if (href[i] === '#') {
                hash = href.slice(i)
                hashIndex = i
                break
            } else if (href[i] === '?' && searchIndex === -1) {
                searchIndex = i
            }
        }
        hash = hash === '#' ? '' : hash

        // search
        let search
        if (searchIndex !== -1) {
            if (hashIndex === -1) {
                search = href.slice(searchIndex)
            } else {
                search = href.slice(searchIndex, hashIndex)
            }
        }
        search = search === '?' ? '' : search

        // pathname
        let pathname
        const firstIndex = searchIndex !== -1 && (hashIndex === -1 || searchIndex < hashIndex) ? searchIndex : hashIndex
        if (firstIndex > 0) {
            pathname = href.slice(0, firstIndex)
        } else if (firstIndex === -1 && href.length > 0) {
            pathname = href
        }
        if (hostname && !pathname) {
            pathname = '/'
        }

        return {
            protocol,
            hostname,
            port,
            pathname,
            hash,
            search,
        }
    }

    /**
     * 不触发检查的方式替换 href
     */
    $$setHrefWithoutCheck(value) {
        this.$_allowCheck = false
        this.replace(value)
        this.$_allowCheck = true
    }

    /**
     * 对外属性和方法
     */
    get protocol() {
        return this.$_protocol
    }

    set protocol(value) {
        if (!value || typeof value !== 'string') return

        const parseRes = /^([a-z0-9.+-]+)(:)?$/i.exec(value)
        const oldValues = this.$_getOldValues()

        if (parseRes) {
            if (parseRes[2] === ':') {
                this.$_protocol = value
            } else {
                this.$_protocol = `${parseRes[1]}:`
            }

            if (this.$_checkUrl(oldValues)) this.$_enterHistory()
        }
    }

    get host() {
        return (this.$_hostname || '') + (this.$_port ? ':' + this.$_port : '')
    }

    set host(value) {
        if (!value || typeof value !== 'string') return

        const {hostname, port} = Location.$$parse(`//${value}`)
        const oldValues = this.$_getOldValues()

        this.$_hostname = hostname || this.$_hostname
        this.$_port = port || ''

        if (this.$_checkUrl(oldValues)) this.$_enterHistory()
    }

    get hostname() {
        return this.$_hostname
    }

    set hostname(value) {
        if (!value || typeof value !== 'string') return

        const {hostname} = Location.$$parse(`//${value}`)
        const oldValues = this.$_getOldValues()

        this.$_hostname = hostname || this.$_hostname

        if (this.$_checkUrl(oldValues)) this.$_enterHistory()
    }

    get port() {
        return this.$_port
    }

    set port(value) {
        value = +value

        if (typeof value !== 'number' || !isFinite(value) || value <= 0) return

        const port = value === 80 ? '' : value + ''
        const oldValues = this.$_getOldValues()

        this.$_port = port

        if (this.$_checkUrl(oldValues)) this.$_enterHistory()
    }

    get origin() {
        return `${this.$_protocol}//${this.host}`
    }

    set origin(value) {
        if (!value || typeof value !== 'string') return
        if (!/^(([a-zA-Z0-9]+:)|(\/\/))/i.test(value)) return // 没有带协议

        const {protocol, hostname, port} = Location.$$parse(value)
        const oldValues = this.$_getOldValues()

        this.$_protocol = protocol || this.$_protocol
        this.$_hostname = hostname || this.$_hostname
        this.$_port = port || ''

        if (this.$_checkUrl(oldValues)) this.$_enterHistory()
    }

    get pathname() {
        return this.$_pathname
    }

    set pathname(value) {
        if (typeof value !== 'string') return

        const oldValues = this.$_getOldValues()

        if (!value || value === '/') {
            this.$_pathname = '/'
        } else {
            if (value[0] !== '/') value = `/${value}`

            const {pathname} = Location.$$parse(`//miniprogram${value}`)

            this.$_pathname = pathname || '/'
        }

        if (this.$_checkUrl(oldValues)) this.$_enterHistory()
    }

    get search() {
        return this.$_search
    }

    set search(value) {
        if (typeof value !== 'string') return

        if (!value || value === '?') {
            this.$_search = ''
        } else {
            if (value[0] !== '?') value = `?${value}`

            const {search} = Location.$$parse(`//miniprogram${value}`)

            this.$_search = search || ''
        }

        this.$_enterHistory()
    }

    get hash() {
        return this.$_hash
    }

    set hash(value) {
        if (typeof value !== 'string') return

        this.$_startCheckHash()

        if (!value || value === '#') {
            this.$_hash = ''
        } else {
            if (value[0] !== '#') value = `#${value}`

            const {hash} = Location.$$parse(`//miniprogram${value}`)

            this.$_hash = hash || ''
        }

        this.$_endCheckHash()
        this.$_enterHistory()
    }

    get href() {
        return `${this.$_protocol}//${this.host}${this.$_pathname}${this.$_search}${this.$_hash}`
    }

    set href(value) {
        this.$_setHrefWithoutEnterHistory(value)
        this.$_enterHistory()
    }

    reload() {
        let param = ['type=jump', `targeturl=${encodeURIComponent(this.href)}`]
        if (this.$_search) param.push(`search=${encodeURIComponent(this.$_search)}`)
        if (this.$_hash) param.push(`hash=${encodeURIComponent(this.$_hash)}`)

        param = '?' + param.join('&')

        wx.redirectTo({
            url: `${this.$_pageRoute}${param}`
        })
    }

    replace(value) {
        // 和直接赋值 location.href 不同，不需要进入 history
        this.$_setHrefWithoutEnterHistory(value)
    }

    toString() {
        return this.href
    }
}

module.exports = Location

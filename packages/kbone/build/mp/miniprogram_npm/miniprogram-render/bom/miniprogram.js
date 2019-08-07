const cache = require('../util/cache')

let pageUrlRouteMap = null

class Miniprogram {
    constructor(pageId) {
        this.$_pageId = pageId
        this.$_pageUrl = '' // 页面真实 url
    }

    get window() {
        return cache.getWindow(this.$_pageId) || null
    }

    get document() {
        return cache.getDocument(this.$_pageId) || null
    }

    get config() {
        return cache.getConfig()
    }

    /**
     * 初始化
     */
    init(url) {
        if (typeof url === 'string') this.$_pageUrl = url // 设置真实 url
        const {origin, entry, router} = cache.getConfig()

        this.$_pageUrl = this.$_pageUrl || (origin + entry)
        this.window.location.$$reset(this.$_pageUrl)
        this.window.history.$$reset()

        if (!pageUrlRouteMap) {
            // 需要初始化页面 url - 小程序页面路由映射表
            pageUrlRouteMap = {}

            Object.keys(router).forEach(pageName => {
                const regexpList = []

                router[pageName].forEach(pathObj => {
                    // 构造正则表达式
                    const regexp = new RegExp(pathObj.regexp, pathObj.options)
                    regexpList.push(regexp)
                })

                // 将每个页面的路由改造成函数，方便后续做匹配用
                pageUrlRouteMap[pageName] = pathname => {
                    for (const regexp of regexpList) {
                        const parseRes = regexp.exec(pathname)
                        regexp.lastIndex = 0

                        if (parseRes) {
                            // 匹配成功
                            return `/pages/${pageName}/index`
                        }
                    }

                    return null
                }
            })
        }
    }

    /**
     * 需要匹配对应路由的 route
     */
    getMatchRoute(pathname) {
        const keys = Object.keys(pageUrlRouteMap)
        for (const key of keys) {
            const matchRes = pageUrlRouteMap[key](pathname)

            if (matchRes) return matchRes // 匹配成功
        }

        return null
    }
}

module.exports = Miniprogram

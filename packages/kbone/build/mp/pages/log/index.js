const mp = require('miniprogram-render')
const config = require('../../config')

function init(window, document) {require('../../common/vendors~index~log.js')(window, document);require('../../common/log.js')(window, document)}

/**
 * 处理一些特殊的页面
 */
function dealWithPage(evt, window, value) {
    const type = evt.type
    let url = evt.url

    if (value === 'webview') {
        // 补全 url
        url = mp.$$adapter.tool.completeURL(url, window.location.origin)

        const options = {url: `/pages/webview/index?url=${encodeURIComponent(url)}`}
        if (type === 'jump') wx.redirectTo(options)
        else if (type === 'open') wx.navigateTo(options)
    } else if (value === 'error') {
        console.error(`page not found: ${evt.url}`)
    } else if (value !== 'none') {
        const targeturl = `${window.location.origin}/redirect?url=${encodeURIComponent(url)}`
        const options = {url: `/pages/${value}/index?type=${type}&targeturl=${encodeURIComponent(targeturl)}`}
        if (type === 'jump') wx.redirectTo(options)
        else if (type === 'open') wx.navigateTo(options)
    }
}

Page({
    data: {
        pageId: '',
        bodyClass: 'h5-body miniprogram-root',
        bodyStyle: '',
    },
    onLoad(query) {
        const pageName = mp.$$adapter.tool.getPageName(this.route)
        const pageConfig = this.pageConfig = config.pages[pageName] || {}

        if (pageConfig.loadingText) {
            wx.showLoading({
                title: pageConfig.loadingText,
                mask: true,
            })
        }

        const mpRes = mp.createPage(this.route, config)
        this.pageId = mpRes.pageId
        this.window = mpRes.window
        this.document = mpRes.document
        this.query = query

        init(this.window, this.document)

        // 处理跳转页面不存在的情况
        if (config.redirect && config.redirect.notFound) {
            this.window.addEventListener('pagenotfound', evt => {
                dealWithPage(evt, mpRes.window, config.redirect.notFound)
            })
        }

        // 处理跳转受限制页面的情况
        if (config.redirect && config.redirect.accessDenied) {
            this.window.addEventListener('pageaccessdenied', evt => {
                dealWithPage(evt, mpRes.window, config.redirect.accessDenied)
            })
        }

        if (query.type === 'open' || query.type === 'jump' || query.type === 'share') {
            // 处理页面参数，只有当页面是其他页面打开或跳转时才处理
            this.window.$$miniprogram.init(query.targeturl ? decodeURIComponent(query.targeturl) : null)

            if (query.search) this.window.location.search = decodeURIComponent(query.search)
            if (query.hash) this.window.location.hash = decodeURIComponent(query.hash)
        } else {
            this.window.$$miniprogram.init()
        }

        // 处理分享显示
        if (!pageConfig.share) {
            wx.hideShareMenu()
        }

        // 处理 body 更新
        this.document.documentElement.addEventListener('$$childNodesUpdate', () => {
            const domNode = this.document.body
            const data = {
                bodyClass: `${domNode.className || ''} h5-body miniprogram-root`, // 增加默认 class
                bodyStyle: domNode.style.cssText || ''
            }

            if (data.bodyClass !== this.data.bodyClass || data.bodyStyle !== this.data.bodyStyle) {
                this.setData(data)
            }
        })

        // 处理 selectorQuery 获取
        this.window.$$createSelectorQuery = () => wx.createSelectorQuery().in(this)

        // 处理 intersectionObserver 获取
        this.window.$$createIntersectionObserver = options => wx.createIntersectionObserver(this, options)

        this.setData({
            pageId: this.pageId
        })
        this.app = this.window.createApp()
    },
    onShow() {
        // 方便调试
        global.$$runtime = {
            window: this.window,
            document: this.document,
        }
    },
    onReady() {
        if (this.pageConfig.loadingText) wx.hideLoading()
    },
    onHide() {
        global.$$runtime = null
    },
    onUnload() {
        this.window.$$trigger('beforeunload')
        this.app && this.app.$destroy && this.app.$destroy()
        this.document.body.$$recycle() // 回收 dom 节点

        mp.destroyPage(this.pageId)
        global.$$runtime = null

        this.pageConfig = null
        this.pageId = null
        this.window = null
        this.document = null
        this.app = null
        this.query = null
    },
    onShareAppMessage(data) {
        if (this.window.onShareAppMessage) {
            const shareOptions = this.window.onShareAppMessage(data)
            const query = Object.assign({}, this.query || {})

            if (shareOptions.path) {
                query.targeturl = encodeURIComponent(shareOptions.path)
            } else {
                // 组装当前页面路径
                const location = this.window.location

                query.targeturl = encodeURIComponent(location.href)
                query.search = encodeURIComponent(location.search)
                query.hash = encodeURIComponent(location.hash)
            }

            query.type = 'share'
            const queryString = Object.keys(query).map(key => `${key}=${query[key] || ''}`).join('&')
            const currentPagePath = `${this.route}?${queryString}`
            shareOptions.path = currentPagePath

            return shareOptions
        }
    },
    
    
    
})

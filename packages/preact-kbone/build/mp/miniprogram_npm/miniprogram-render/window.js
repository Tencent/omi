const Document = require('./document')
const EventTarget = require('./event/event-target')
const Event = require('./event/event')
const OriginalCustomEvent = require('./event/custom-event')
const Location = require('./bom/location')
const Navigator = require('./bom/navigator')
const cache = require('./util/cache')
const tool = require('./util/tool')
const Screen = require('./bom/screen')
const History = require('./bom/history')
const Miniprogram = require('./bom/miniprogram')
const LocalStorage = require('./bom/local-storage')
const SessionStorage = require('./bom/session-storage')
const Performance = require('./bom/performance')
const Node = require('./node/node')
const Element = require('./node/element')
const TextNode = require('./node/text-node')
const Comment = require('./node/comment')
const ClassList = require('./node/class-list')
const Style = require('./node/style')
const Attribute = require('./node/attribute')

let lastRafTime = 0
const WINDOW_PROTOTYPE_MAP = {
    location: Location.prototype,
    navigator: Navigator.prototype,
    performance: Performance.prototype,
    screen: Screen.prototype,
    history: History.prototype,
    localStorage: LocalStorage.prototype,
    sessionStorage: SessionStorage.prototype,
    event: Event.prototype,
}
const ELEMENT_PROTOTYPE_MAP = {
    attribute: Attribute.prototype,
    classList: ClassList.prototype,
    style: Style.prototype,
}

class Window extends EventTarget {
    constructor(pageId) {
        super()

        const timeOrigin = +new Date()

        this.$_pageId = pageId
        this.$_pageRoute = tool.getPageRoute(pageId)
        this.$_pageName = tool.getPageName(this.$_pageRoute)

        this.$_outerHeight = 0
        this.$_outerWidth = 0
        this.$_innerHeight = 0
        this.$_innerWidth = 0

        this.$_location = new Location(pageId)
        this.$_navigator = new Navigator()
        this.$_screen = new Screen()
        this.$_history = new History(this.$_location)
        this.$_miniprogram = new Miniprogram(pageId)
        this.$_localStorage = new LocalStorage(this)
        this.$_sessionStorage = new SessionStorage(this)
        this.$_performance = new Performance(timeOrigin)

        this.$_nowFetchingWebviewInfoPromise = null // 正在拉取 webview 端信息的 promise 实例

        this.$_fetchDeviceInfo()
        this.$_initInnerEvent()

        // 补充实例的属性，用于 'xxx' in XXX 判断
        this.onhashchange = null

        this.$_elementConstructor = function HTMLElement(...args) {
            return Element.$$create(...args)
        }
        this.$_customEventConstructor = class CustomEvent extends OriginalCustomEvent {
            constructor(name = '', options = {}) {
                options.timeStamp = +new Date() - timeOrigin
                super(name, options)
            }
        }

        // react 环境兼容
        this.HTMLIFrameElement = function() {}
    }

    /**
     * 初始化内部事件
     */
    $_initInnerEvent() {
        const config = cache.getConfig()
        const runtime = config.runtime || {}
        const cookieStore = runtime.cookieStore


        // 监听 location 的事件
        this.$_location.addEventListener('hashchange', ({oldURL, newURL}) => {
            this.$$trigger('hashchange', {
                event: new Event({
                    name: 'hashchange',
                    target: this,
                    eventPhase: Event.AT_TARGET,
                    $$extra: {
                        oldURL,
                        newURL,
                    },
                }),
                currentTarget: this,
            })
        })

        // 监听 history 的事件
        this.$_history.addEventListener('popstate', ({state}) => {
            this.$$trigger('popstate', {
                event: new Event({
                    name: 'popstate',
                    target: this,
                    eventPhase: Event.AT_TARGET,
                    $$extra: {state},
                }),
                currentTarget: this,
            })
        })

        // 监听自身的事件
        const onPageUnloadOrHide = () => {
            // 持久化 cookie
            if (cookieStore === 'storage') {
                wx.setStorage({
                    key: `PAGE_COOKIE_${this.$_pageName}`,
                    data: this.document.$$cookieInstance.serialize(),
                })
            }
        }
        this.addEventListener('wxunload', onPageUnloadOrHide)
        this.addEventListener('wxhide', onPageUnloadOrHide)
    }

    /**
     * 拉取设备参数
     */
    $_fetchDeviceInfo() {
        try {
            const info = wx.getSystemInfoSync()

            this.$_outerHeight = info.screenHeight
            this.$_outerWidth = info.screenWidth
            this.$_innerHeight = info.windowHeight
            this.$_innerWidth = info.windowWidth

            this.$_screen.$$reset(info)
            this.$_navigator.$$reset(info)
        } catch (err) {
            // ignore
        }
    }

    /**
     * 拉取处理切面必要的信息
     */
    $_getAspectInfo(descriptor) {
        if (!descriptor || typeof descriptor !== 'string') return

        descriptor = descriptor.split('.')
        const main = descriptor[0]
        const sub = descriptor[1]
        let method = descriptor[1]
        let type = descriptor[2]
        let prototype

        // 找出对象原型
        if (main === 'window') {
            if (WINDOW_PROTOTYPE_MAP[sub]) {
                prototype = WINDOW_PROTOTYPE_MAP[sub]
                method = type
                type = descriptor[3]
            } else {
                prototype = Window.prototype
            }
        } else if (main === 'document') {
            prototype = Document.prototype
        } else if (main === 'element') {
            if (ELEMENT_PROTOTYPE_MAP[sub]) {
                prototype = ELEMENT_PROTOTYPE_MAP[sub]
                method = type
                type = descriptor[3]
            } else {
                prototype = Element.prototype
            }
        } else if (main === 'textNode') {
            prototype = TextNode.prototype
        } else if (main === 'comment') {
            prototype = Comment.prototype
        }

        return {prototype, method, type}
    }

    /**
     * 暴露给小程序用的对象
     */
    get $$miniprogram() {
        return this.$_miniprogram
    }

    /**
     * 小程序端的 getComputedStyle 实现
     * https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.fields.html
     */
    $$getComputedStyle(dom, computedStyle = []) {
        tool.flushThrottleCache() // 先清空 setData
        return new Promise((resolve, reject) => {
            if (dom.tagName === 'BODY') {
                this.$$createSelectorQuery().select('.miniprogram-root').fields({computedStyle}, res => (res ? resolve(res) : reject())).exec()
            } else {
                this.$$createSelectorQuery().select(`.miniprogram-root >>> .node-${dom.$$nodeId}`).fields({computedStyle}, res => (res ? resolve(res) : reject())).exec()
            }
        })
    }

    /**
     * 强制清空 setData 缓存
     */
    $$forceRender() {
        tool.flushThrottleCache()
    }

    /**
     * 触发节点事件
     */
    $$trigger(eventName, options = {}) {
        if (eventName === 'error' && typeof options.event === 'string') {
            // 此处触发自 App.onError 钩子
            const errStack = options.event
            const errLines = errStack.split('\n')
            let message = ''
            for (let i = 0, len = errLines.length; i < len; i++) {
                const line = errLines[i]
                if (line.trim().indexOf('at') !== 0) {
                    message += (line + '\n')
                } else {
                    break
                }
            }

            const error = new Error(message)
            error.stack = errStack
            options.event = new this.$_customEventConstructor('error', {
                target: this,
                $$extra: {
                    message,
                    filename: '',
                    lineno: 0,
                    colno: 0,
                    error,
                },
            })
            options.args = [message, error]

            // window.onerror 比较特殊，需要调整参数
            if (typeof this.onerror === 'function' && !this.onerror.$$isOfficial) {
                const oldOnError = this.onerror
                this.onerror = (event, message, error) => {
                    oldOnError.call(this, message, '', 0, 0, error)
                }
                this.onerror.$$isOfficial = true // 标记为官方封装的方法
            }
        }

        super.$$trigger(eventName, options)
    }

    /**
     * 获取原型
     */
    $$getPrototype(descriptor) {
        if (!descriptor || typeof descriptor !== 'string') return

        descriptor = descriptor.split('.')
        const main = descriptor[0]
        const sub = descriptor[1]

        if (main === 'window') {
            if (WINDOW_PROTOTYPE_MAP[sub]) {
                return WINDOW_PROTOTYPE_MAP[sub]
            } else if (!sub) {
                return Window.prototype
            }
        } else if (main === 'document') {
            if (!sub) {
                return Document.prototype
            }
        } else if (main === 'element') {
            if (ELEMENT_PROTOTYPE_MAP[sub]) {
                return ELEMENT_PROTOTYPE_MAP[sub]
            } else if (!sub) {
                return Element.prototype
            }
        } else if (main === 'textNode') {
            if (!sub) {
                return TextNode.prototype
            }
        } else if (main === 'comment') {
            if (!sub) {
                return Comment.prototype
            }
        }
    }

    /**
     * 扩展 dom/bom 对象
     */
    $$extend(descriptor, options) {
        if (!descriptor || !options || typeof descriptor !== 'string' || typeof options !== 'object') return

        const prototype = this.$$getPrototype(descriptor)
        const keys = Object.keys(options)

        if (prototype) keys.forEach(key => prototype[key] = options[key])
    }

    /**
     * 对 dom/bom 对象方法追加切面方法
     */
    $$addAspect(descriptor, func) {
        if (!descriptor || !func || typeof descriptor !== 'string' || typeof func !== 'function') return

        const {prototype, method, type} = this.$_getAspectInfo(descriptor)

        // 处理切面
        if (prototype && method && type) {
            const methodInPrototype = prototype[method]
            if (typeof methodInPrototype !== 'function') return

            // 重写原始方法
            if (!methodInPrototype.$$isHook) {
                prototype[method] = function(...args) {
                    const beforeFuncs = prototype[method].$$before || []
                    const afterFuncs = prototype[method].$$after || []

                    if (beforeFuncs.length) {
                        for (const beforeFunc of beforeFuncs) {
                            const isStop = beforeFunc.apply(this, args)
                            if (isStop) return
                        }
                    }

                    const res = methodInPrototype.apply(this, args)

                    if (afterFuncs.length) {
                        for (const afterFunc of afterFuncs) {
                            afterFunc.call(this, res)
                        }
                    }

                    return res
                }
                prototype[method].$$isHook = true
                prototype[method].$$originalMethod = methodInPrototype
            }

            // 追加切面方法
            if (type === 'before') {
                prototype[method].$$before = prototype[method].$$before || []
                prototype[method].$$before.push(func)
            } else if (type === 'after') {
                prototype[method].$$after = prototype[method].$$after || []
                prototype[method].$$after.push(func)
            }
        }
    }

    /**
     * 删除对 dom/bom 对象方法追加前置/后置处理
     */
    $$removeAspect(descriptor, func) {
        if (!descriptor || !func || typeof descriptor !== 'string' || typeof func !== 'function') return

        const {prototype, method, type} = this.$_getAspectInfo(descriptor)

        // 处理切面
        if (prototype && method && type) {
            const methodInPrototype = prototype[method]
            if (typeof methodInPrototype !== 'function' || !methodInPrototype.$$isHook) return

            // 移除切面方法
            if (type === 'before' && methodInPrototype.$$before) {
                methodInPrototype.$$before.splice(methodInPrototype.$$before.indexOf(func), 1)
            } else if (type === 'after' && methodInPrototype.$$after) {
                methodInPrototype.$$after.splice(methodInPrototype.$$after.indexOf(func), 1)
            }

            if ((!methodInPrototype.$$before || !methodInPrototype.$$before.length) && (!methodInPrototype.$$after || !methodInPrototype.$$after.length)) {
                prototype[method] = methodInPrototype.$$originalMethod
            }
        }
    }

    /**
     * 对外属性和方法
     */
    get document() {
        return cache.getDocument(this.$_pageId) || null
    }

    get location() {
        return this.$_location
    }

    set location(href) {
        this.$_location.href = href
    }

    get navigator() {
        return this.$_navigator
    }

    get CustomEvent() {
        return this.$_customEventConstructor
    }

    get self() {
        return this
    }

    get localStorage() {
        return this.$_localStorage
    }

    get sessionStorage() {
        return this.$_sessionStorage
    }

    get screen() {
        return this.$_screen
    }

    get history() {
        return this.$_history
    }

    get outerHeight() {
        return this.$_outerHeight
    }

    get outerWidth() {
        return this.$_outerWidth
    }

    get innerHeight() {
        return this.$_innerHeight
    }

    get innerWidth() {
        return this.$_innerWidth
    }

    get Image() {
        return this.document.$$imageConstructor
    }

    get setTimeout() {
        return setTimeout.bind(null)
    }

    get clearTimeout() {
        return clearTimeout.bind(null)
    }

    get setInterval() {
        return setInterval.bind(null)
    }

    get clearInterval() {
        return clearInterval.bind(null)
    }

    get HTMLElement() {
        return this.$_elementConstructor
    }

    get Element() {
        return Element
    }

    get Node() {
        return Node
    }

    get RegExp() {
        return RegExp
    }

    get Math() {
        return Math
    }

    get Number() {
        return Number
    }

    get Boolean() {
        return Boolean
    }

    get String() {
        return String
    }

    get Date() {
        return Date
    }

    get performance() {
        return this.$_performance
    }

    open(url) {
        // 不支持 windowName 和 windowFeatures
        this.location.$$open(url)
    }

    getComputedStyle() {
        // 不作任何实现，只作兼容使用
        console.warn('window.getComputedStyle is not supported, please use window.$$getComputedStyle instead of it')
        return {
            // vue transition 组件使用
            transitionDelay: '',
            transitionDuration: '',
            animationDelay: '',
            animationDuration: '',
        }
    }

    requestAnimationFrame(callback) {
        if (typeof callback !== 'function') return

        const now = new Date()
        const nextRafTime = Math.max(lastRafTime + 16, now)
        return setTimeout(() => {
            callback(nextRafTime)
            lastRafTime = nextRafTime
        }, nextRafTime - now)
    }

    cancelAnimationFrame(timeId) {
        return clearTimeout(timeId)
    }
}

module.exports = Window

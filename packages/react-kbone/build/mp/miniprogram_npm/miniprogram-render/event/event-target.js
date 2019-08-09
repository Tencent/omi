const Event = require('./event')
const CustomEvent = require('./custom-event')

/**
 * 比较 touch 列表
 */
function compareTouchList(a, b) {
    if (a.length !== b.length) return false

    for (let i, len = a.length; i < len; i++) {
        const aItem = a[i]
        const bItem = b[i]

        if (aItem.identifier !== bItem.identifier) return false
        if (aItem.pageX !== bItem.pageX || aItem.pageY !== bItem.pageY || aItem.clientX !== bItem.clientX || aItem.clientY !== bItem.clientY) return false
    }

    return true
}

class EventTarget {
    constructor(...args) {
        this.$$init(...args)
    }

    /**
     * 初始化实例
     */
    $$init() {
    // 补充实例的属性，用于 'xxx' in XXX 判断
        this.ontouchstart = null
        this.ontouchmove = null
        this.ontouchend = null
        this.ontouchcancel = null

        this.$_miniprogramEvent = null // 记录已触发的小程序事件
        this.$_eventHandlerMap = null
    }

    /**
     * 销毁实例
     */
    $$destroy() {
        Object.keys(this).forEach(key => {
            // 处理 on 开头的属性
            if (key.indexOf('on') === 0) this[key] = null
            // 处理外部挂进来的私有的属性
            if (key[0] === '_') this[key] = null
            if (key[0] === '$' && (key[1] !== '_' && key[1] !== '$')) this[key] = null
        })

        this.$_miniprogramEvent = null
        this.$_eventHandlerMap = null
    }

    set $_eventHandlerMap(value) {
        this.$__eventHandlerMap = value
    }

    get $_eventHandlerMap() {
        if (!this.$__eventHandlerMap) this.$__eventHandlerMap = Object.create(null)
        return this.$__eventHandlerMap
    }

    /**
     * 触发事件捕获、冒泡流程
     */
    static $$process(target, eventName, miniprogramEvent, extra, callback) {
        let event

        if (eventName instanceof CustomEvent) {
            // 传入的是自定义事件
            event = eventName
            eventName = event.type
        }

        eventName = eventName.toLowerCase()

        const path = [target]
        let parentNode = target.parentNode

        while (parentNode && parentNode.tagName !== 'HTML') {
            path.push(parentNode)
            parentNode = parentNode.parentNode
        }

        if (path[path.length - 1].tagName === 'BODY') {
            // 如果最后一个节点是 document.body，则追加 document.documentElement
            path.push(parentNode)
        }

        if (!event) {
            // 此处特殊处理，不直接返回小程序的 event 对象
            event = new Event({
                name: eventName,
                target,
                timeStamp: miniprogramEvent.timeStamp,
                touches: miniprogramEvent.touches,
                changedTouches: miniprogramEvent.changedTouches,
                bubbles: true, // 默认都可以冒泡 TODO
                $$extra: extra,
            })
        }

        if (event.bubbles) {
            // 捕获
            for (let i = path.length - 1; i >= 0; i--) {
                const currentTarget = path[i]

                if (!event.$$canBubble) break // 判定冒泡是否结束
                if (currentTarget === target) continue

                event.$$setCurrentTarget(currentTarget)
                event.$$setEventPhase(Event.CAPTURING_PHASE)

                currentTarget.$$trigger(eventName, {
                    event,
                    isCapture: true,
                })
                if (callback) callback(currentTarget, event, true)
            }
        }

        // 目标
        if (event.$$canBubble) {
            event.$$setCurrentTarget(target)
            event.$$setEventPhase(Event.AT_TARGET)

            // 捕获和冒泡阶段监听的事件都要触发
            target.$$trigger(eventName, {
                event,
                isCapture: true,
            })
            if (callback) callback(target, event, true)

            target.$$trigger(eventName, {
                event,
                isCapture: false,
            })
            if (callback) callback(target, event, false)
        }

        if (event.bubbles) {
            // 冒泡
            for (const currentTarget of path) {
                if (!event.$$canBubble) break // 判定冒泡是否结束
                if (currentTarget === target) continue

                event.$$setCurrentTarget(currentTarget)
                event.$$setEventPhase(Event.BUBBLING_PHASE)

                currentTarget.$$trigger(eventName, {
                    event,
                    isCapture: false,
                })
                if (callback) callback(currentTarget, event, false)
            }
        }

        // 重置事件
        event.$$setCurrentTarget(null)
        event.$$setEventPhase(Event.NONE)
    }

    /**
     * 获取 handlers
     */
    $_getHandlers(eventName, isCapture, isInit) {
        const handlerMap = this.$_eventHandlerMap

        if (isInit) {
            const handlerObj = handlerMap[eventName] = handlerMap[eventName] || {}

            handlerObj.capture = handlerObj.capture || []
            handlerObj.bubble = handlerObj.bubble || []

            return isCapture ? handlerObj.capture : handlerObj.bubble
        } else {
            const handlerObj = handlerMap[eventName]

            if (!handlerObj) return null

            return isCapture ? handlerObj.capture : handlerObj.bubble
        }
    }

    /**
     * 触发节点事件
     */
    $$trigger(eventName, {event, isCapture} = {}) {
        eventName = eventName.toLowerCase()
        const handlers = this.$_getHandlers(eventName, isCapture)
        const onEventName = `on${eventName}`

        if (typeof this[onEventName] === 'function') {
            // 触发 onXXX 绑定的事件
            this[onEventName].call(this || null, event)
        }

        if (handlers && handlers.length) {
            // 触发 addEventListener 绑定的事件
            handlers.forEach(handler => handler.call(this || null, event))
        }
    }

    /**
     * 检查该事件是否可以触发
     */
    $$checkEvent(miniprogramEvent) {
        const last = this.$_miniprogramEvent
        const now = miniprogramEvent

        let flag = false

        if (!last || last.timeStamp !== now.timeStamp) {
            // 时间戳不同
            flag = true
        } else {
            if (last.touches && now.touches && !compareTouchList(last.touches, now.touches)) {
                // 存在不同的 touches
                flag = true
            } else if ((!last.touches && now.touches) || (last.touches && !now.touches)) {
                // 存在一方没有 touches
                flag = true
            }

            if (last.changedTouches && now.changedTouches && !compareTouchList(last.changedTouches, now.changedTouches)) {
                // 存在不同的 changedTouches
                flag = true
            } else if ((!last.changedTouches && now.changedTouches) || (last.changedTouches && !now.changedTouches)) {
                // 存在一方没有 changedTouches
                flag = true
            }
        }

        if (flag) this.$_miniprogramEvent = now
        return flag
    }

    /**
     * 清空某个事件的所有句柄
     */
    $$clearEvent(eventName, isCapture = false) {
        if (typeof eventName !== 'string') return

        eventName = eventName.toLowerCase()
        const handlers = this.$_getHandlers(eventName, isCapture)

        if (handlers && handlers.length) handlers.length = 0
    }

    /**
     * 对外属性和方法
     */
    addEventListener(eventName, handler, options) {
        if (typeof eventName !== 'string' || typeof handler !== 'function') return

        let isCapture = false

        if (typeof options === 'boolean') isCapture = options
        else if (typeof options === 'object') isCapture = options.capture

        eventName = eventName.toLowerCase()
        const handlers = this.$_getHandlers(eventName, isCapture, true)

        handlers.push(handler)
    }

    removeEventListener(eventName, handler, isCapture = false) {
        if (typeof eventName !== 'string' || typeof handler !== 'function') return

        eventName = eventName.toLowerCase()
        const handlers = this.$_getHandlers(eventName, isCapture)

        if (handlers && handlers.length) handlers.splice(handlers.indexOf(handler), 1)
    }

    dispatchEvent(evt) {
        if (evt instanceof CustomEvent) {
            EventTarget.$$process(this, evt)
        }

        // 因为不支持 preventDefault，所以永远返回 true
        return true
    }
}

module.exports = EventTarget

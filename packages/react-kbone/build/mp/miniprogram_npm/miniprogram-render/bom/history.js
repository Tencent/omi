/**
 * 暂不维护跳转后页面的历史，不做页面刷新的操作
 */
const Location = require('./location')
const EventTarget = require('../event/event-target')

class History extends EventTarget {
    constructor(location) {
        super()

        this.$_location = location
        this.$_stack = [{
            state: null,
            title: '',
            url: location.href,
        }]
        this.$_currentIndex = 0

        this.$_location.addEventListener('$_addToHistory', evt => {
            this.$_currentIndex++
            this.$_stack = this.$_stack.slice(0, this.$_currentIndex)
            this.$_stack.push({
                state: null,
                title: '',
                url: evt.href
            })
        })
    }

    /**
     * 检查是否同源
     */
    $_checkOrigin(url) {
        const {protocol, hostname, port} = Location.$$parse(url)

        return (!protocol || this.$_location.protocol === protocol) && (!hostname || this.$_location.hostname === hostname) && ((!hostname && !port) || this.$_location.port === port)
    }

    /**
     * 重置实例
     */
    $$reset() {
        this.$_stack = [{
            state: null,
            title: '',
            url: this.$_location.href,
        }]
        this.$_currentIndex = 0
    }

    /**
     * 对外属性和方法
     */
    get state() {
        const current = this.$_stack[this.$_currentIndex]
        return current && current.state || null
    }

    get length() {
        return this.$_stack.length
    }

    back() {
        this.go(-1)
    }

    forward() {
        this.go(1)
    }

    go(delta) {
        if (typeof delta === 'number') {
            const next = this.$_currentIndex + delta

            if (next >= 0 && next < this.$_stack.length && this.$_currentIndex !== next) {
                this.$_currentIndex = next
                // 替换 href，但不做跳转（理论上此处应该做跳转，但是在小程序环境里不适合）
                this.$_location.$$setHrefWithoutCheck(this.$_stack[this.$_currentIndex].url)

                this.$$trigger('popstate', {
                    event: {
                        state: this.state
                    }
                })
            }
        } else {
            // 刷新当前页面
            this.$_location.reload()
        }
    }

    pushState(state = null, title, url) {
        if (!url || typeof url !== 'string') return

        if (this.$_checkOrigin(url)) {
            // 同源才允许操作
            if (title && typeof title === 'string') {
                // 设置标题
                wx.setNavigationBarTitle({title})
            }


            this.$_currentIndex++
            this.$_stack = this.$_stack.slice(0, this.$_currentIndex)

            // 替换 href，但不做跳转
            this.$_location.$$setHrefWithoutCheck(url)

            this.$_stack.push({state, title, url: this.$_location.href})
        }
    }

    replaceState(state = null, title, url) {
        if (!url || typeof url !== 'string') return

        if (this.$_checkOrigin(url)) {
            // 同源才允许操作
            if (title && typeof title === 'string') {
                // 设置标题
                wx.setNavigationBarTitle({title})
            }

            // 替换 href，但不做跳转
            this.$_location.$$setHrefWithoutCheck(url)

            this.$_stack.splice(this.$_currentIndex, 1, {state, title, url: this.$_location.href})
        }
    }
}

module.exports = History

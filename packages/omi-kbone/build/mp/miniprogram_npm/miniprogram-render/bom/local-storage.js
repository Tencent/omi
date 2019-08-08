const Event = require('../event/event')

class LocalStorage {
    constructor(window) {
        this.$_keys = []
        this.$_window = window
    }

    /**
     * 更新 storage 信息
     */
    $_updateInfo() {
        try {
            const info = wx.getStorageInfoSync()

            this.$_keys = info.keys
        } catch (err) {
            console.warn('getStorageInfoSync fail')
        }
    }

    /**
     * 触发 window 的 storage 事件
     */
    $_triggerStorage(key, newValue, oldValue, force) {
        if (!force && newValue === oldValue) return

        this.$_window.$$trigger('storage', {
            event: new Event({
                name: 'storage',
                target: this.$_window,
                $$extra: {
                    key,
                    newValue,
                    oldValue,
                    storageArea: this,
                    url: this.$_window.location.href,
                }
            })
        })
    }

    /**
     * 对外属性和方法
     */
    get length() {
        return this.$_keys && this.$_keys.length || 0
    }

    key(num) {
        if (typeof num !== 'number' || !isFinite(num) || num < 0) return null

        return this.$_keys[num] || null
    }

    getItem(key) {
        if (!key || typeof key !== 'string') return null

        return wx.getStorageSync(key) || null
    }

    setItem(key, data) {
        if (!key || typeof key !== 'string' || typeof data !== 'string') return

        const oldValue = wx.getStorageSync(key) || null

        wx.setStorageSync(key, data)
        this.$_updateInfo()
        this.$_triggerStorage(key, data, oldValue)
    }

    removeItem(key) {
        if (!key || typeof key !== 'string') return

        const oldValue = wx.getStorageSync(key) || null

        wx.removeStorageSync(key)
        this.$_updateInfo()
        this.$_triggerStorage(key, null, oldValue)
    }

    clear() {
        wx.clearStorageSync()
        this.$_updateInfo()
        this.$_triggerStorage(null, null, null, true)
    }
}

module.exports = LocalStorage

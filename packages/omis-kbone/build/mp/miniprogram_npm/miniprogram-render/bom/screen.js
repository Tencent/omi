const EventTarget = require('../event/event-target')

class Screen extends EventTarget {
    constructor() {
        super()

        this.$_width = 0
        this.$_height = 0
    }

    /**
     * 重置实例
     */
    $$reset(info) {
        this.$_width = info.screenWidth
        this.$_height = info.screenHeight
    }

    /**
     * 对外属性和方法
     */
    get width() {
        return this.$_width
    }

    get height() {
        return this.$_height
    }
}

module.exports = Screen

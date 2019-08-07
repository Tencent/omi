class Pool {
    constructor(size) {
        this.$_size = size || 3000
        this.$_cache = []
    }

    /**
     * 添加一个对象
     */
    add(object) {
        if (this.$_cache.length >= this.$_size) return

        this.$_cache.push(object)
    }

    /**
     * 取出一个对象
     */
    get() {
        return this.$_cache.pop()
    }
}

module.exports = Pool

export default {
    data: {
        items: ["omi", "store"]
    },
    methods: {
        add: function (value) {
            this.data.items.push(value)
            this.data.length = this.data.items.length
            this.update()
        },

        clear: function () {
            this.data.items.length = 0
            this.data.length = 0
            this.update()
        }
    }
}
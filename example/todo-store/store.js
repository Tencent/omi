export default {
    data: {
        items: ["omi", "store"]
    },
    methods: {
        install:function(){

        },
        add: function (value) {
            this.data.items.push(value)
            this.update()
        },

        clear: function () {
            this.data.items.length = 0
            this.update()
        }
    }
}
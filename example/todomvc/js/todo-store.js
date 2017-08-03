import Omi from '../../src/index.js'

class TodoStore extends Omi.Store {
    constructor(data, isReady) {
        super(isReady)

        this.startId = 0
        this.data = Object.assign({
            inputValue: '',
            filter: 'all',
            items: [],
            editingIndex: -1,
            hasCompleted: false,
            left: 0,
            all:'selected'
        }, data)
    }

    getID() {
        return this.startId++
    }

    destroy(id) {
        this.data.items.every((item, index)=> {
            if (item.id === id) {
                this.data.items.splice(index, 1)

                return false
            }
            return true
        })
        this.compute()

        this.update()
    }

    add() {
        if (this.data.inputValue) {
            this.data.items.unshift({
                id: this.getID(),
                text: this.data.inputValue,
                show: true,
                isCompleted: false
            })
            this.data.inputValue = ""
            this.compute()
            this.update()
        }
    }

    updateText(text) {
        this.data.inputValue = text
    }

    clear() {
        this.data.items.length = 0
        this.data.length = 0
        this.update()
    }

    getItemById(id) {
        for (let i = 0, len = this.data.items.length; i < len; i++) {
            let item = this.data.items[i]
            if (item.id === id) {
                return item
            }
        }
    }

    edit(id) {
        let item = this.getItemById(id)
        item.isEditing = true
        this.data.editing = true
        this.data.editingId = id
        this.update()
    }

    endEdit(id, text) {
        this.data.editing = false
        let item = this.getItemById(id)
        item.text = text
        item.isEditing = false
        this.update()
    }


    toggleState(id) {
        let item = this.getItemById(id)
        item.isCompleted = !item.isCompleted
        this.filter(this.data.filter)
        this.compute()
        this.update()
    }

    clearCompleted() {

        var items = this.data.items
        for (let i = 0, len = items.length; i < len; i++) {
            if (items[i].isCompleted) {
                items.splice(i--, 1)
                len--
            }
        }

        this.data.hasCompleted = false
        this.update()
    }

    filter(type){
        this.data.filter = type
        this.data.items.forEach(function (item) {
            if (type === 'all') {
                item.show = true
            } else if (type === 'active' && !item.isCompleted) {
                item.show = true
            } else if (type === 'completed' && item.isCompleted) {
                item.show = true
            } else {
                item.show = false
            }
        })
        this.compute()
        this.update()
    }

    toggleAll(){
        if(this.data.left>0){

            this.completeAll()
        }else{
            this.unCompleteAll()
        }

    }

    completeAll(){
        this.data.items.forEach(function (item) {
            item.isCompleted=true
        })
        this.compute()
        this.update()
    }

    unCompleteAll(){
        this.data.items.forEach(function (item) {
            item.isCompleted=false
        })

        this.compute()
        this.update()
    }

    compute() {
        let left = 0
        let length = this.data.items.length
        this.data.items.forEach(function (item) {
            if (!item.isCompleted) {
                item.checked = ""
                left++
            } else {
                item.checked = "checked"
            }
        })

        this.data.hasCompleted = (length - left > 0)
        this.data.left = left
        this.data.allchecked = left === 0 ? 'checked' : ''

        this.data['all'] = ''
        this.data['active'] = ''
        this.data['completed'] = ''
        this.data[this.data.filter] = 'selected'
    }
}

export default TodoStore
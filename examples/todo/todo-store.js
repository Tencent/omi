class TodoStore  {
    constructor(data,callbacks) {
        this.items = data.items
        this.text = data.text
        this.onAdd = callbacks.add || function(){}
    }

    add(text){
        this.items.push({id: this.items.length + 1, text: text})
        this.text = ''
        this.onAdd(text)
    }

    clear(){
        this.items.length = 0
    }
}

export default TodoStore
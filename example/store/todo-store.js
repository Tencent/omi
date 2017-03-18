import Omi from '../../src/index.js';

class TodoStore extends Omi.Store {
    constructor(data , isReady) {
        super(isReady)

        this.data = Object.assign({
            items:[],
            text:'',
            length:0
        },data)

        this.data.length = this.data.items.length
    }

    add(){
        this.data.items.push(this.data.text)
        this.data.text = ""
        this.data.length = this.data.items.length
        this.update()
    }

    updateText(text){
        this.data.text = text
    }

    clear(){
        this.data.items.length = 0
        this.data.length = 0
        this.update()
    }
}

export default TodoStore
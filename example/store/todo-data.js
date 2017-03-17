import Omi from '../../src/index.js';

class TodoData extends Omi.Store {
    constructor(data , isReady) {
        super(isReady)
        this.data = data
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

export default TodoData
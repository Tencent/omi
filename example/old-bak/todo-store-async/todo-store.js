import Omi from '../../src/index.js';

class TodoStore extends Omi.Store {
    constructor(data , isReady) {
        super(isReady)

        this.data = Object.assign({
            items:[],
            length:0
        },data)

        this.data.length = this.data.items.length
    }

    add(value){
        this.data.items.push(value)
        this.data.length = this.data.items.length
        this.update()
    }

    clear(){
        this.data.items.length = 0
        this.data.length = 0
        this.update()
    }
}

export default TodoStore
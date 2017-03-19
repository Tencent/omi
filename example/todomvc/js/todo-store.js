import Omi from '../../../src/index.js';

class TodoStore extends Omi.Store {
    constructor(data , isReady) {
        super(isReady)

        this.startId = 0
        this.data = Object.assign({
            inputValue: '',
            filter: 'all',
            items: [],
            editingIndex:-1
        },data)

    }

    getID(){
        return this.startId++
    }

    destroy(id) {
        this.data.items.every((item, index)=> {
            if (item.id === id) {
                this.data.items.splice(index, 1)
                this.update()
                return false
            }
            return true
        })
    }

    add() {
        if (this.data.inputValue) {
            this.data.items.push({
                id: this.getID(),
                text: this.data.inputValue,
                show: true,
                isCompleted:false
            })
            this.data.inputValue = ""
            this.update()
        }
    }

    updateText(text){
        this.data.inputValue = text
    }

    clear(){
        this.data.items.length = 0
        this.data.length = 0
        this.update()
    }

    getItemById(id) {
        //return this.data.items.find(item=> {
        //    return item.id === id
        //})

        for(let i = 0,len = this.data.items.length;i<len;i++){
            let item = this.data.items[i]
            if(item.id ===id){
                return item
            }
        }
    }

    toggleState(id) {
        let item = this.getItemById(id)
        item.isCompleted = !item.isCompleted;
        if(item.isCompleted ){
            item.checked = 'checked'
        }else{
            item.checked = ''
        }
        this.update()
    }

    computer(){
        var left = 0;
        this.option.items.forEach(function (item) {
            if (!item.isCompleted) {
                item.checked = "";
                left++
            } else {
                item.checked = "checked";
            }
        })
        this.option['all'] = '';
        this.option['active'] = '';
        this.option['completed'] = '';
        this.option[this.option.filter] = 'selected';
        this.option.clearWording = this.option.items.length - left > 0 ? 'Clear completed' : '';
        this.option.left = left;
        this.option.allchecked = left === 0 ? 'checked' : '';
    }
}

export default TodoStore
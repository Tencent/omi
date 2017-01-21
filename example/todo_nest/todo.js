import Omi from '../../src/index.js';
import List from './list.js';

Omi.makeHTML(List);

class Todo extends Omi.Component {
    constructor(data, renderTo) {
        super(data, renderTo);
    }

    install (){
        this.data.length = this.data.items.length;
    }

    add (evt) {
        evt.preventDefault();
        this.list.data.items.push(this.data.text);
        this.data.length = this.list.data.items.length;
        this.data.text = '';
        this.update();
    }

    style () {
        return `
        h3 { color:red; }
        button{ color:green;}
        `;
    }

    handleChange(target){
        this.data.text = target.value;
    }

    render () {
        return `<div>
                    <h3>TODO</h3>
                    <List omi-id="list" name="list" />
                    <form onsubmit="add(event)" >
                        <input type="text" onchange="handleChange(this)"  value="{{text}}"  />
                        <button>Add #{{length}}</button>
                    </form>
                </div>`;
    }
}

export default Todo;

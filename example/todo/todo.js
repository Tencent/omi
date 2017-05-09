import Omi from '../../src/index.js';
import List from './list.js';

Omi.tag('list', List);

class Todo extends Omi.Component {
    constructor(data) {
        super(data)
    }

    add (evt) {
        evt.preventDefault();
        this.data.items.push({text: this.data.text})
        this.data.text = ''
        this.update()
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
                    <list ::data-items="data.items" ></list>
                    <form onsubmit="add(event)" >
                        <input type="text" onchange="handleChange(this)"  value="{{text}}"  />
                        <button>Add #${this.data.items.length}</button>
                    </form>
                </div>`;
    }
}

export default Todo;

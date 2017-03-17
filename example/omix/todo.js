import Omi from '../../src/index.js';
import List from './list.js';
import store from './store.js';

Omi.makeHTML('List', List);

class Todo extends Omi.Component {
    constructor(data) {
        super(data)
        this.data = store.data;
        store.ready(()=>this.update())
    }

    add (evt) {
        evt.preventDefault();
        store.add();
        this.update();
    }

    style () {
        return `
        h3 { color:red; }
        button{ color:green;}
        `;
    }

    handleChange(target){
        store.updateText(target.value);
    }

    render () {
        return `<div>
                    <h3>TODO</h3>
                    <List  name="list"  />
                    <form onsubmit="add(event)" >
                        <input type="text" onchange="handleChange(this)"  value="{{text}}"  />
                        <button>Add #{{length}}</button>
                    </form>
                </div>`;
    }
}

export default Todo;

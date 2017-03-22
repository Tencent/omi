import Omi from '../../src/index.js';
import List from './list.js';

Omi.makeHTML('List', List);

class Todo extends Omi.Component {
    constructor(data) {
        super(data)
    }

    install(){
        this.$store.ready(()=>this.update())
    }

    beforeRender(){
        this.data.length = this.$store.data.items.length
        this.data.text = this.$store.text
    }

    add (evt) {
        evt.preventDefault();
        this.$store.add();
    }

    style () {
        return `
        h3 { color:red; }
        button{ color:green;}
        `;
    }

    handleChange(target){
        this.$store.updateText(target.value);
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

import Omi from '../../src/index.js';

class Todo extends Omi.Component {
    constructor(data) {
        super(data);
    }
    add (evt) {
        evt.preventDefault();
        this.data.items.push(this.data.text);
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
                    <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>
                    <form onsubmit="add(event)" >
                        <input type="text" onchange="handleChange(this)"  value="{{text}}"  />
                        <button>Add #{{items.length}}</button>
                    </form>
                </div>`;
    }
}

export default Todo;

import Omi from '../../src/index.js';

class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render () {
        return `<ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>`;
    }
}

Omi.makeHTML('List', List);

class Todo extends Omi.Component {
    constructor(data) {
        super(data);
        this.data.length = this.data.items.length;
        this.childrenData = [ { items : this.data.items } ];
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
        button{ color:green;}`;
    }

    handleChange(target){
        this.data.text = target.value;
    }

    render () {
        return `
      <div>
          <h3>TODO</h3>
          <List name="list" />
          <form onsubmit="add(event)" >
              <textarea ref="textarea" type="text" onchange="handleChange(this)" placeholder="todo" value="{{text}}"></textarea>
              <button>Add #{{length}}</button>
          </form>
      </div>`;
    }
}


Omi.render(new Todo({ items: ['Omi','dntzhang','AlloyTeam'] , text : '' }),'#container');
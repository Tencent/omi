import Nuclear from "../../lib/nuclear.js"

var ES6TodoApp = Nuclear.create({
    add: function (evt) {
        evt.preventDefault();
        this.option.items.push(this.textBox.value);
    },
    render: function () {
        return `<div>
                    <h3>ES6 Todo</h3>
                    <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>
                    <form onsubmit="add(event)" >
                        <input nc-id="textBox" type="text"  />
                        <button>Add #{{items.length}}</button>
                    </form>
                </div>`;
    },
    style: function () {
        return `h3 { color:red; }
               button{ color:green;}`;
    }
});

export default  ES6TodoApp;
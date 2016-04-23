"use strict";

App.ES6TodoApp = Nuclear.create({
    add: function add(evt) {
        evt.preventDefault();
        this.option.items.push(this.textBox.value);
    },
    render: function render() {
        return "<div>\n        <h3>ES6 Todo</h3>\n        <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>\n        <form onsubmit=\"add(event)\" >\n            <input nc-id=\"textBox\" type=\"text\"  />\n            <button>Add #{{items.length}}</button>\n        </form>\n        </div>";
    },
    style: function style() {
        return "h3 { color:red; }\n    button{ color:green;}";
    }
});
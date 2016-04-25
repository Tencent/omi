App.componentRes['component/todo/index.html'] =
'<div>\
    <h3>TODO</h3>\
    <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>\
    <form onsubmit="add(event)" >\
        <input nc-id="textBox" type="text"  />\
        <button>Add #{{items.length}}</button>\
    </form>\
</div>';

App.componentRes['component/todo/index.css'] =
'h3 { color:red; }\
button{ color:green;}';

"use strict";

App.Util.loadFile("component/todo/index.html", "component/todo/index.css", function (tpl, css) {
    App.TodoApp = Nuclear.create({
        add: function add(evt) {
            evt.preventDefault();
            this.option.items.push(this.textBox.value);
        },
        render: function render() {
            return tpl;
        },
        style: function style() {
            return css;
        }
    });
});
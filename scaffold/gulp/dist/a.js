var tpl=
'<div>\
    <h3>TODO</h3>\
    <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>\
    <form onsubmit="add(event)" >\
        <input nc-id="textBox" type="text"  />\
        <button>Add #{{items.length}}</button>\
    </form>\
</div>';

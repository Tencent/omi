App.Util.loadFile("component/todo/index.html", "component/todo/index.css", function (tpl, css) {
    App.TodoApp = Nuclear.create({
        add: function (evt) {
            evt.preventDefault();
            this.option.items.push(this.textBox.value);
        },
        render: function () {
            return tpl;
        },
        style: function () {
            return css;
        }
    });

});
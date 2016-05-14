App.TodoApp = Nuclear.create({
        add: function (evt) {
            evt.preventDefault();
            this.option.items.push(this.textBox.value);
        },
        render: function () {
            return App.loadFile('component/todo/index.html');
        },
        style: function () {
            return App.loadFile('component/todo/index.css');
        }
});
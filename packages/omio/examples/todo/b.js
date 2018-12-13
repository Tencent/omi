(function () {
    'use strict';

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var TodoList = function (_Omi$Component) {
        _inherits(TodoList, _Omi$Component);

        function TodoList() {
            _classCallCheck(this, TodoList);

            return _possibleConstructorReturn(this, _Omi$Component.apply(this, arguments));
        }

        TodoList.prototype.render = function render() {
            return Omi.h(
                "ul",
                null,
                this.$store.items.map(function (item) {
                    return Omi.h(
                        "li",
                        { key: item.id },
                        item.text
                    );
                })
            );
        };

        return TodoList;
    }(Omi.Component);

    function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var TodoApp = function (_Omi$Component) {
        _inherits$1(TodoApp, _Omi$Component);

        function TodoApp(data) {
            _classCallCheck$1(this, TodoApp);

            var _this = _possibleConstructorReturn$1(this, _Omi$Component.call(this, data));

            _this.handleChange = _this.handleChange.bind(_this);
            _this.handleSubmit = _this.handleSubmit.bind(_this);
            return _this;
        }

        TodoApp.prototype.handleSubmit = function handleSubmit(e) {
            e.preventDefault();
            this.$store.add(this.$store.text);
        };

        TodoApp.prototype.handleChange = function handleChange(e) {
            this.$store.text = e.target.value;
        };

        TodoApp.prototype.render = function render() {
            return Omi.h(
                'div',
                null,
                Omi.h(
                    'h3',
                    null,
                    'TODO'
                ),
                Omi.h(TodoList, null),
                Omi.h(
                    'form',
                    { onSubmit: this.handleSubmit },
                    Omi.h('input', { onChange: this.handleChange, value: this.$store.text }),
                    Omi.h(
                        'button',
                        null,
                        'Add #' + this.$store.items.length
                    )
                )
            );
        };

        return TodoApp;
    }(Omi.Component);

    function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var TodoStore = function () {
        function TodoStore(data, callbacks) {
            _classCallCheck$2(this, TodoStore);

            this.items = data.items;
            this.text = data.text;
            this.onAdd = callbacks.add || function () {};
        }

        TodoStore.prototype.add = function add(text) {
            this.items.push({ id: this.items.length + 1, text: text });
            this.text = '';
            this.onAdd(text);
        };

        TodoStore.prototype.clear = function clear() {
            this.items.length = 0;
        };

        return TodoStore;
    }();

    var app = new TodoApp();
    var store = new TodoStore({
        items: [{ id: 1, text: 'Omi' }, { id: 2, text: 'React' }, { id: 3, text: 'preact' }],
        text: ''
    }, {
        add: function add(text) {
            app.update();
        }
    });

    Omi.render(app, 'body', store);

}());
//# sourceMappingURL=b.js.map

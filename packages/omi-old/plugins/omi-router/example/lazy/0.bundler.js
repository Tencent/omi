webpackJsonp([0],{

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = __webpack_require__(0);

var _omi2 = _interopRequireDefault(_omi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_Omi$Component) {
    _inherits(User, _Omi$Component);

    function User() {
        _classCallCheck(this, User);

        return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
    }

    _createClass(User, [{
        key: 'install',
        value: function install() {
            var params = this.$route.params;
            this.name = params.name;
            this.category = params.category;
            this.info = this.queryInfo(this.name);
            this.age = this.info.age;
            this.sex = this.info.sex;
        }
    }, {
        key: 'queryInfo',
        value: function queryInfo(name) {
            this.mockData = {
                'yanagao': { age: 18, sex: 'female' },
                'vorshen': { age: 20, sex: 'male' },
                'dntzhang': { age: 22, sex: 'male' }
            };
            return this.mockData[name];
        }
    }, {
        key: 'back',
        value: function back() {
            history.back();
        }
    }, {
        key: 'render',
        value: function render() {
            return _omi2['default'].h(
                'div',
                null,
                _omi2['default'].h(
                    'button',
                    { onclick: this.back.bind(this) },
                    'back'
                ),
                _omi2['default'].h(
                    'ul',
                    null,
                    _omi2['default'].h(
                        'li',
                        null,
                        'name:',
                        this.name
                    ),
                    _omi2['default'].h(
                        'li',
                        null,
                        'age:',
                        this.age
                    ),
                    _omi2['default'].h(
                        'li',
                        null,
                        'sex:',
                        this.sex
                    ),
                    _omi2['default'].h(
                        'li',
                        null,
                        'category:',
                        this.category
                    )
                )
            );
        }
    }]);

    return User;
}(_omi2['default'].Component);

exports['default'] = User;

/***/ })

});
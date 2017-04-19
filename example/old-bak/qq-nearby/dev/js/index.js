window.Root ={}; Root.isDev = true;webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _config = __webpack_require__(1);

	var _config2 = _interopRequireDefault(_config);

	var _omi = __webpack_require__(2);

	var _omi2 = _interopRequireDefault(_omi);

	var _index = __webpack_require__(3);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_omi2.default.makeHTML('UserList', _index2.default);

	var Main = function (_Omi$Component) {
	    _inherits(Main, _Omi$Component);

	    function Main(data) {
	        _classCallCheck(this, Main);

	        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, data));
	    }

	    _createClass(Main, [{
	        key: 'install',
	        value: function install() {
	            this.orig_grid = 0;
	            this.next_grid = 0;
	        }
	    }, {
	        key: 'installed',
	        value: function installed() {
	            var _this2 = this;

	            window.onscroll = function () {
	                return _this2.loadMore();
	            };
	            this.requestData(function (data) {
	                return _this2.list.appendUsers(data);
	            });
	        }
	    }, {
	        key: 'loadMore',
	        value: function loadMore() {
	            var _this3 = this;

	            var body = document.body,
	                html = document.documentElement,
	                height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
	                vp_height = window.innerHeight;

	            if (height - document.body.scrollTop - vp_height < 200) {
	                this.requestData(function (data) {
	                    return _this3.list.appendUsers(data);
	                });
	            }
	        }
	    }, {
	        key: 'requestData',
	        value: function requestData(callback) {
	            if (_config2.default.isDev) {
	                __webpack_require__.e/* nsure */(1, function () {
	                    callback(__webpack_require__(4).default);
	                });
	                return;
	            } else {}
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return '\n    <div class="main">\n        <UserList name="list" />\n    </div>';
	        }
	    }]);

	    return Main;
	}(_omi2.default.Component);

	_omi2.default.render(new Main(), 'body');

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	window.Root = window.Root || {};

	Root.CDN = '//s.url.cn';

	if (!Root.hasOwnProperty('isDev')) {
	    Root.isDev = true;
	}

	exports.default = Root;

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _omi = __webpack_require__(2);

	var _omi2 = _interopRequireDefault(_omi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UserList = function (_Omi$Component) {
	    _inherits(UserList, _Omi$Component);

	    function UserList(data) {
	        _classCallCheck(this, UserList);

	        return _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this, data));
	    }

	    _createClass(UserList, [{
	        key: "install",
	        value: function install() {
	            var _this2 = this;

	            this.data.uin_info || (this.data.uin_info = []);
	            this.data.uin_info.forEach(function (user) {
	                _this2.prepareData(user);
	            });
	            this.done = false;
	        }
	    }, {
	        key: "prepareData",
	        value: function prepareData(user) {
	            user.desc_d = user.desc.split("&nbsp;")[0];
	            user.desc_t = user.desc.split("&nbsp;")[1];
	            user.isBoy = user.sex === "男";
	            user.qlogo = user.url.replace("http://", location.protocol + "//").replace(/&amp;/g, "&");
	            if (user.profession_desc) {
	                user.hasProfession_desc = true;
	            }
	        }
	    }, {
	        key: "sendGift",
	        value: function sendGift(uin, nick, qlogo) {
	            if (this.done) return;
	            this.done = true;
	            mqq.dispatchEvent("_nearby_send_gift", { uin: uin, nick: nick, recv_avatar: qlogo });
	            mqq.ui.popBack();
	        }
	    }, {
	        key: "appendUsers",
	        value: function appendUsers(users) {
	            var _this3 = this;

	            users.uin_info && users.uin_info.forEach(function (user) {
	                _this3.prepareData(user);
	                _this3.data.uin_info.push(user);
	            });
	            this.update();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return "\n<div class=\"user_list\">\n    {{#uin_info}}\n    <div class=\"item\" onclick=\"sendGift('{{uin}}','{{nick}}','{{qlogo}}')\">\n        <div class=\"qlogo\">\n            <img style=\"width: 70px;\" src=\"{{qlogo}}\" />\n        </div>\n        <div class=\"main b1 bb\">\n            <div class=\"nick\">{{{nick}}}</div>\n            <div class=\"icons\">\n                {{#isBoy}}<span class=\"boy_age\"><img src=\"component/user_list/boy.png\" alt=\"\" /><span>{{age}}</span></span> {{/isBoy}}\n               {{^isBoy}}<span class=\"girl_age\"><img src=\"component/user_list/girl.png\" alt=\"\" /><span>{{age}}</span></span> {{/isBoy}}\n             <!--   <span class=\"vip\"><span>VIP</span></span>\n                <span class=\"svip\"></span>-->\n                {{#hasProfession_desc}} <span class=\"profession\"><span>{{profession_desc}}</span></span> {{/hasProfession_desc}}\n            </div>\n            <div class=\"action\">{{{intro}}}</div>\n        </div>\n        <div class=\"distance_info\">{{desc_d}} \xB7 {{desc_t}}</div>\n    </div>\n    {{/uin_info}}\n    <div style=\"text-align:center;font-size:13px;line-height:30px;height:30px;\"><span class=\"loading\"></span> \u52A0\u8F7D\u4E2D...</div>\n</div>\n";
	        }
	    }, {
	        key: "style",
	        value: function style() {
	            return "\n.user_list {\n}\n\n.qlogo {\n    overflow: hidden;\n    width: 70px;\n    height: 70px;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    position: absolute;\n    top: 10px;\n    left: 12px;\n}\n\n.distance_info {\n    position: absolute;\n    top: 15px;\n    right: 9px;\n    color: #7B7B84;\n    font-size: 10px;\n}\n\n.main {\n    padding-top: 13px;\n    height: 94px;\n    margin-left: 94px;\n}\n\n.item {\n    position: relative;\n    height: 94px;\n}\n\n.nick {\n    line-height: 25px;\n    font-size: 18px;\n    width: 60%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.icons {\n    height: 18px;\n    color: white;\n    font-size: 10px;\n}\n\n.action {\n    line-height: 24px;\n    font-size: 14px;\n    color: #7B7B84;\n    width: 85%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.boy_age {\n    display: inline-block;\n    width: auto;\n    padding-left: 3px;\n    padding-right: 3px;\n    height: 12px;\n    line-height: 13px;\n    letter-spacing: 0;\n    background-color: #a1c8fa;\n    text-align: center;\n}\n\n    .girl_age img, .boy_age img {\n        width: 7px;\n        margin-right: 2px;\n    }\n\n    .boy_age img {\n        position: relative;\n        top: 1px;\n    }\n\n\n.girl_age {\n    display: inline-block;\n    width: auto;\n    padding-left: 3px;\n    padding-right: 3px;\n    height: 12px;\n    line-height: 13px;\n    background-color: #ffb4c8;\n    text-align: center;\n}\n\n\n\n\n.profession {\n    display: inline-block;\n    width: auto;\n    padding-left: 3px;\n    padding-right: 3px;\n    height: 12px;\n    background-color: rgb(112, 211, 249);\n    line-height: 13px;\n    text-align: center;\n}\n\n\n\n.loading {\n    background-image: url(component/user_list/loading.png); /* @meta {\"sprite\":{\"skip\":true}} */\n    background-size: 20px 20px;\n    width: 20px;\n    height: 20px;\n    -webkit-animation: spinner-12 1.6s step-start infinite;\n    animation: spinner-12 1.6s step-start infinite;\n    display:inline-block;\n    position:relative;\n    top:5px;\n\n}\n        ";
	        }
	    }]);

	    return UserList;
	}(_omi2.default.Component);

	exports.default = UserList;

/***/ }
]);
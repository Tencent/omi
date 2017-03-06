window.Root ={}; Root.isDev = false;webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _frame = __webpack_require__(1);

	var _frame2 = _interopRequireDefault(_frame);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Omi.render(new _frame2.default({ lan: 'cn' }), 'body', true);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _omi = __webpack_require__(2);

	var _omi2 = _interopRequireDefault(_omi);

	var _index = __webpack_require__(3);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(37);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(43);

	var _index6 = _interopRequireDefault(_index5);

	var _config = __webpack_require__(4);

	var _config2 = _interopRequireDefault(_config);

	var _index7 = __webpack_require__(48);

	var _index8 = _interopRequireDefault(_index7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_omi2.default.makeHTML('Content', _index2.default);
	_omi2.default.makeHTML('Sidebar', _index4.default);
	_omi2.default.makeHTML('Head', _index6.default);
	_omi2.default.makeHTML('Pager', _index8.default);

	var Frame = function (_Omi$Component) {
	    _inherits(Frame, _Omi$Component);

	    function Frame(data) {
	        _classCallCheck(this, Frame);

	        return _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, data));
	    }

	    _createClass(Frame, [{
	        key: 'install',
	        value: function install() {
	            var _this2 = this;

	            this.setViewport();
	            window.onresize = function () {
	                if (window.innerWidth < 768) {
	                    _this2.refs.main.style.width = '100%';
	                } else {
	                    _this2.refs.main.style.width = window.innerWidth - 220 + 'px';
	                }
	            };
	        }
	    }, {
	        key: 'setViewport',
	        value: function setViewport() {
	            if (window.innerWidth < 768) {
	                this.data.width = '100%';
	            } else {
	                this.data.width = window.innerWidth - 220 + 'px';
	            }
	        }
	    }, {
	        key: 'style',
	        value: function style() {
	            return '\n    <style>\n        .main{\n            position: absolute;\n            left:220px;\n            top:45px;\n            height:auto;\n        }\n\n        @media only screen and (max-width: 768px) {\n            .main{\n                left:0%;\n            }\n        }\n    </style>\n        ';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return '<div>\n                    <Head data-lan="{{lan}}" />\n                    <div class="main" ref="main"  style="width:{{width}};">\n                        <Content  omi-id="content" data-lan="{{lan}}" />\n                        <Pager omi-id="pager" data-lan="{{lan}}" />\n                    </div>\n                    <Sidebar omi-id="sidebar" data-lan="{{lan}}" />\n                </div>';
	        }
	    }]);

	    return Frame;
	}(_omi2.default.Component);

	exports.default = Frame;

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _omi = __webpack_require__(2);

	var _omi2 = _interopRequireDefault(_omi);

	var _config = __webpack_require__(4);

	var _config2 = _interopRequireDefault(_config);

	var _highlightLines = __webpack_require__(5);

	var _highlightLines2 = _interopRequireDefault(_highlightLines);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var tpl = __webpack_require__(6);
	var css = __webpack_require__(7);

	var Content = function (_Omi$Component) {
	    _inherits(Content, _Omi$Component);

	    function Content(data) {
	        _classCallCheck(this, Content);

	        data = Object.assign({
	            lan: 'cn',
	            name: 'installation'
	        }, data);

	        var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, data));

	        _this.md = new Remarkable({ html: true });
	        return _this;
	    }

	    _createClass(Content, [{
	        key: 'getMarkDown',
	        value: function getMarkDown(name, lan) {
	            return __webpack_require__(8)("./" + lan + "/" + name + ".md");
	        }
	    }, {
	        key: 'installed',
	        value: function installed() {
	            this.initCodeStyle();
	        }
	    }, {
	        key: 'afterUpdate',
	        value: function afterUpdate() {
	            this.initCodeStyle();
	        }
	    }, {
	        key: 'initCodeStyle',
	        value: function initCodeStyle() {
	            var _this2 = this;

	            var codes = _omi2.default.$$("code");
	            var codeHlNumArr = [];
	            codes.forEach(function (code) {
	                hljs.highlightBlock(code);
	                var arr = code.className.match(/{\S*}/);
	                var hllNums = null;
	                if (arr) {
	                    var numArr = arr[0].replace(/[{|}]/g, '').split(',');
	                    hllNums = _this2._arrToNumber(numArr);
	                }
	                codeHlNumArr.push(hllNums);
	            });

	            (0, _highlightLines2.default)();

	            codes.forEach(function (code, index) {
	                _this2._hll(code, codeHlNumArr[index]);
	            });
	        }
	    }, {
	        key: '_arrToNumber',
	        value: function _arrToNumber(numArr) {
	            var arr = [];
	            numArr.forEach(function (item) {
	                if (item.indexOf('-') !== -1) {
	                    var tempArr = item.split('-');
	                    var begin = Number(tempArr[0]);
	                    var end = Number(tempArr[1]);
	                    for (var i = begin; i < end + 1; i++) {
	                        arr.push(i);
	                    }
	                } else {
	                    arr.push(Number(item));
	                }
	            });
	            return arr;
	        }
	    }, {
	        key: '_hll',
	        value: function _hll(code, hllNums) {
	            var spans = _omi2.default.$$('.line', code);
	            hllNums && hllNums.forEach(function (num) {
	                spans[num] && spans[num].classList.add('highlight');
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.data.html = this.md.render(this.getMarkDown(this.data.name, this.data.lan));
	            return tpl;
	        }
	    }, {
	        key: 'style',
	        value: function style() {
	            return css;
	        }
	    }]);

	    return Content;
	}(_omi2.default.Component);

	exports.default = Content;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var config = {
	    menus: {
	        cn: [{
	            active: true,
	            title: '快速开始',
	            currentIndex: 0,
	            list: [{ 'name': '安装', md: 'installation' }, { 'name': 'Hello World', md: 'hello_world' }, { 'name': '组件', md: 'components' }, { 'name': '组件通讯', md: 'communication' }, { 'name': '生命周期', md: 'lifecycle' }, { 'name': '事件处理', md: 'events' }, { 'name': '条件判断', md: 'condition' }, { 'name': '循环遍历', md: 'loop' }, { 'name': '表单', md: 'form' }, { 'name': '继承', md: 'inherit' }, { 'name': '模板切换', md: 'template' }, { 'name': '获取DOM节点', md: 'get_dom' }, { 'name': '插件体系', md: 'plugin' }, { 'name': 'Omi的理念', md: 'thinking_in_omi' }]
	        }],
	        en: [{
	            title: 'QUICK START',
	            active: true,
	            currentIndex: 0,
	            list: [{ 'name': 'Installation', md: 'installation' }, { 'name': 'Hello World', md: 'hello_world' }, { 'name': 'Components', md: 'components' }, { 'name': 'Communication', md: 'communication' }, { 'name': 'Lifecycle', md: 'lifecycle' }, { 'name': 'Handling Events', md: 'events' }, { 'name': 'Conditional Rendering', md: 'condition' }, { 'name': 'Loop', md: 'loop' }, { 'name': 'Forms', md: 'form' }, { 'name': 'Inheritance', md: 'inherit' }, { 'name': 'Templates', md: 'template' }, { 'name': 'Get DOM', md: 'get_dom' }, { 'name': 'Plugin', md: 'plugin' }, { 'name': 'Thinking in Omi', md: 'thinking_in_omi' }]
	        }]
	    }
	};

	exports.default = config;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	// Iterates through `array`, running `callback` for each `array` element.
	function forEach(array, callback) {
	    var i = -1,
	        length = array ? array.length : 0;
	    while (++i < length) {
	        callback(array[i]);
	    }
	}

	function indexOf(array, elem) {
	    var i = -1,
	        length = array ? array.length : 0;
	    while (++i < length) {
	        if (array[i] === elem) {
	            return i;
	        }
	    }
	}
	function highlightLines() {
	    // TODO: mark as parsed.
	    forEach(document.querySelectorAll('pre code'), function (element) {
	        // Trim whitespace if the `data-trim` attribute is present.
	        if (element.hasAttribute('data-trim') && typeof element.innerHTML.trim == 'function') {
	            element.innerHTML = element.innerHTML.trim();
	        }

	        // Highlight code using highlight.js.
	        hljs.highlightBlock(element);

	        // Split highlighted code into lines.
	        var openTags = [],
	            reHtmlTag = /<(\/?)span(?:\s+(?:class=(['"])hljs-.*?\2)?\s*|\s*)>/g;
	        element.innerHTML = element.innerHTML.replace(/(.*?)\r?\n/g, function (_, string) {
	            if (!string) {
	                return '<span class=line>&nbsp;</span>';
	            }
	            var openTag, stringPrepend;
	            // Re-open all tags that were previously closed.
	            if (openTags.length) {
	                stringPrepend = openTags.join('');
	            }
	            // Match all HTML `<span>` tags.
	            reHtmlTag.lastIndex = 0;
	            while (openTag = reHtmlTag.exec(string)) {
	                // If it is a closing tag, remove the opening tag from the list.
	                if (openTag[1]) {
	                    openTags.pop();
	                }
	                // Otherwise if it is an opening tag, push it to the list.
	                else {
	                        openTags.push(openTag[0]);
	                    }
	            }
	            // Close all opened tags, so that strings can be wrapped with `span.line`.
	            if (openTags.length) {
	                string += Array(openTags.length + 1).join('</span>');
	            }
	            if (stringPrepend) {
	                string = stringPrepend + string;
	            }
	            return '<span class=line>' + string + '</span>';
	        });
	    });
	}

	exports.default = highlightLines;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"content\">    {{{html}}}</div>"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = ".content{    width: 80%;}h3{    color:#444444;}pre{    border: 1px solid #eee;    width: 100%;}li{    text-indent: 20px;    list-style:disc inside ;}@media only screen and (max-width: 768px) {    .content{        width: 100%;    }}"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./cn/communication.md": 9,
		"./cn/components.md": 10,
		"./cn/condition.md": 11,
		"./cn/events.md": 12,
		"./cn/form.md": 13,
		"./cn/get_dom.md": 14,
		"./cn/hello_world.md": 15,
		"./cn/inherit.md": 16,
		"./cn/installation.md": 17,
		"./cn/lifecycle.md": 18,
		"./cn/loop.md": 19,
		"./cn/plugin.md": 20,
		"./cn/template.md": 21,
		"./cn/thinking_in_omi.md": 22,
		"./en/communication.md": 23,
		"./en/components.md": 24,
		"./en/condition.md": 25,
		"./en/events.md": 26,
		"./en/form.md": 27,
		"./en/get_dom.md": 28,
		"./en/hello_world.md": 29,
		"./en/inherit.md": 30,
		"./en/installation.md": 31,
		"./en/lifecycle.md": 32,
		"./en/loop.md": 33,
		"./en/plugin.md": 34,
		"./en/template.md": 35,
		"./en/thinking_in_omi.md": 36
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 8;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "## 组件通讯\r\n\r\n[Omi框架](https://github.com/AlloyTeam/omi)组建间的通讯非常遍历灵活，因为有许多可选方案进行通讯：\r\n\r\n* 通过在组件上声明 data-* 传递给子节点 \r\n* 通过在组件上声明 data 传递给子节点 （支持复杂数据类型的映射）\r\n* 父容器设置 childrenData 自动传递给子节点\r\n* 声明 group-data 传递（支持复杂数据类型的映射）\r\n* 完全面向对象，可以非常容易地拿到对象的实例，之后可以设置实例属性和调用实例的方法\r\n\r\n所以通讯变得畅通无阻，下面一一来举例说明。\r\n\r\n### data-*通讯 \r\n\r\n```js {36}\r\nclass Hello extends Omi.Component {\r\n    constructor(data) {\r\n      super(data);\r\n    }\r\n    \r\n    style () {\r\n      return  `\r\n      h1{\r\n      \tcursor:pointer;\r\n      }\r\n      `;\r\n    }\r\n    \r\n    handleClick(target, evt){\r\n      alert(target.innerHTML);\r\n    }\r\n    \r\n    render() {\r\n      return  `\r\n      <div>\r\n      \t<h1 onclick=\"handleClick(this, event)\">Hello ,{{name}}!</h1>\r\n      </div>\r\n  \t\t`;\r\n    }\r\n}\r\n\r\nOmi.makeHTML('Hello', Hello);\r\n\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n  \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello data-name=\"Omi\" />\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\n一般data-*用来传递值类型，如string、number。值得注意的是，通过data-*接收到的数据类型都是string，需要自行转成number类型。\r\n通常情况下，data-*能满足我们的要求，但是遇到复杂的数据类型是没有办法通过大量data-*去表达，所以可以通过data通讯，请往下看。\r\n\r\n### data通讯 \r\n\r\n如上面代码所示，通过 data-name=\"Omi\"可以把name传递给子组件。下面的代码也可以达到同样的效果。\r\n\r\n```js {4,10}\r\n...\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n      super(data);\r\n      this.helloData = { name : 'Omi' };\r\n    }\r\n  \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello data=\"helloData\" />\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\n使用data声明，会去组件的instance（也就是this）下找对应的属性，this下可以挂载任意复杂的对象。所以这也就突破了data-*的局限性。\r\n\r\n如果instance下面的某个属性下面的某个属性下面的某个数组的第一个元素的某个属性要作为data传递Hello怎么办？\r\n没关系，data声明是支持复杂类型的，使用方式如下:\r\n\r\n```js\r\n...\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n        this.complexData ={\r\n            a:{\r\n                b:{\r\n                    c:[\r\n                        {\r\n                            e:[{\r\n                                name:'ComplexData Support1'\r\n                            },{\r\n                                name:'ComplexData Support2'\r\n                            }]\r\n                        },\r\n                        {\r\n                            name: 'ComplexData Support3'\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        };\r\n    }\r\n  \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello data=\"complexData.a.b.c[1]\" />\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n...\r\n```\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=data_complex\" target=\"_blank\">点击这里→data映射复杂数据</a>\r\n\r\n### childrenData通讯\r\n\r\n```js\r\n...\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n      super(data);\r\n      this.childrenData = [{ name : 'Omi' } , { name : 'dntzhang' }];\r\n    }\r\n  \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello  />\r\n            <Hello  />\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\n使用this.childrenData传递data给子组件，childrenData是一个数组类型，所以支持同时给多个组件传递data，与render里面的组件会一一对应上。\r\n\r\n### group-data通讯\r\n\r\nchildrenData的方式可以批量传递数据给组件，但是有很多场景下data的来源不一定非要都从childrenData来，childrenData是个数组，会和组件的顺序一一对应，这就给不同传递方式的data必须全部集中的childrenData中，非常不方便。group-data专门为解决上面的痛点而生，专门是为了给一组组件批量传递data。\r\n\r\n```js\r\nimport Hello from './hello.js';\r\n\r\n\r\nOmi.makeHTML('Hello', Hello);\r\n\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n        this.testData = [{name: 'Omi'}, {name: 'dntzhang'}, {name: 'AlloyTeam'}];\r\n    }\r\n\r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello group-data=\"testData\" />\r\n            <Hello group-data=\"testData\" />\r\n            <Hello group-data=\"testData\" />\r\n        </div>\r\n        `;\r\n\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\n只需要在声明的子组件上标记group-data，就会去当前组件的instance（也就是this）下面找对应的属性，然后根据当前的位置，和对应数组的位置会一一对应起来。\r\n\r\n运行结果如下：\r\n![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170216110701535-1698390390.png)\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=group_data\" target=\"_blank\">点击这里→group-data</a>\r\n\r\n同样group-data支持复杂数据类型的映射，需要注意的是，group-data映射的终点必须是一个数组:\r\n\r\n```js\r\nimport Hello from './hello.js';\r\n\r\n\r\nOmi.makeHTML('Hello', Hello);\r\n\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n        this.complexData ={\r\n            a:{\r\n                b:{\r\n                    c:[\r\n                        {\r\n                            e:[{\r\n                                name:'ComplexData Support1'\r\n                            },{\r\n                                name:'ComplexData Support2'\r\n                            }]\r\n                        },\r\n                        {\r\n                            name: 'ComplexData Support3'\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        };\r\n    }\r\n\r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello group-data=\"complexData.a.b.c[0].e\" />\r\n            <Hello group-data=\"complexData.a.b.c[0].e\" />\r\n        </div>\r\n        `;\r\n\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=group_data_complex\" target=\"_blank\">点击这里→group-data映射复杂数据</a>\r\n\r\n### 通过对象实例\r\n\r\n```js {7}\r\n...\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n    \r\n    installed(){\r\n        this.hello.data.name = \"Omi\";\r\n        this.update()\r\n    }\r\n  \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello name=\"hello\" />\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\n### 通过omi-id\r\n\r\n```js {7,14}\r\n...\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n    \r\n    installed(){\r\n        Omi.get(\"hello\").data.name = \"Omi\";\r\n        this.update()\r\n    }\r\n  \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello omi-id=\"hello\" />\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\n通过在组件上声明omi-id，在程序任何地方拿到该对象的实例。这个可以算是跨任意组件通讯神器。\r\n\r\n### 特别强调\r\n\r\n* 通过childrenData或者data方式通讯都是一锤子买卖。后续变更只能通过组件实例下的data属性去更新组件\r\n* 通过data-✼通讯也是一锤子买卖。后续变更只能通过组件实例下的data属性去更新组件。\r\n* 关于data-✼通讯也可以不是一锤子买卖，但是要设置组件实例的dataFirst为false，这样的话data-✼就会覆盖组件实例的data对应的属性\r\n\r\n关于上面的第三条也就是这样的逻辑伪代码：\r\n```js\r\nif(this.dataFirst){\r\n    this.data = Object.assign({},data-✼ ,this.data);\r\n}else{\r\n    this.data = Object.assign({},this.data, data-✼);\r\n}\r\n```"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "## 组件\r\n\r\n[Omi框架](https://github.com/AlloyTeam/omi)完全基于组件体系设计，我们希望开发者可以像搭积木一样制作Web程序，一切皆是组件，组件也可以嵌套子组件形成新的组件，新的组件又可以当作子组件嵌套至任意组件形成新的组件...\r\n\r\n![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170210093427338-1536910080.png)\r\n\r\n## 简单组件\r\n\r\n这里使用Todo的例子来讲解Omi组件体系的使用。\r\n\r\n```js\r\nclass Todo extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n    \r\n    add (evt) {\r\n        evt.preventDefault();\r\n        this.data.items.push(this.data.text);\r\n        this.data.text = '';\r\n        this.update();\r\n    }\r\n\r\n    style () {\r\n        return `\r\n        h3 { color:red; }\r\n        button{ color:green;}\r\n        `;\r\n    }\r\n\r\n    handleChange(target){\r\n        this.data.text = target.value;\r\n    }\r\n\r\n    render () {\r\n        return `<div>\r\n                    <h3>TODO</h3>\r\n                    <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>\r\n                    <form onsubmit=\"add(event)\" >\r\n                        <input type=\"text\" onchange=\"handleChange(this)\"  value=\"{{text}}\"  />\r\n                        <button>Add #{{items.length}}</button>\r\n                    </form>\r\n                </div>`;\r\n    }\r\n}\r\n\r\nOmi.render(new Todo({ items: [] ,text : '' }),\"body\");\r\n```\r\n\r\n组件生成的HTML最终会插入到body中。上面的例子展示了Omi的部分特性:\r\n\r\n- data传递: new Todo(data,..)的data可以直接提供给render方法里的模板\r\n- 局部CSS: h3只对render里的h3生效，不会污染外面的h3；button也是同样的\r\n- 声明式事件绑定: onchange调用的就是组件内的handleChange，this可以拿到当然的DOM元素,还可以拿到当前的event\r\n- 需要手动调用update方法才能更新组件\r\n\r\n这里需要特别强调的是，为了更加的自由和灵活度。Omi没有内置数据变更的自动更新，需要开发者自己调用update方法。\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=todo\" target=\"_blank\">点击这里→在线试试</a>\r\n\r\n## 组件嵌套\r\n\r\n如果页面超级简单的话，可以没有组件嵌套。但是绝大部分Web网页或者Web应用，需要嵌套定义的组件来完成所有的功能和展示。比如上面的Todo，我们也是可以抽取出List。\r\n这样让程序易维护、可扩展、方便复用。如，我们抽取出List：\r\n\r\n```js\r\nclass List extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    render () {\r\n        return `<ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>`;\r\n    }\r\n}\r\n```\r\n\r\n怎么使用这个List？我们需要使用Omi.makeHTML把List制作成可以声明式的标签，在render方法中就能直接使用该标签。如下所示：\r\n\r\n```js\r\nimport List from './list.js';\r\n\r\nOmi.makeHTML('List', List);\r\n\r\nclass Todo extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n        this.data.length = this.data.items.length;\r\n        this.listData = { items : this.data.items };\r\n    }\r\n\r\n    add (evt) {\r\n        evt.preventDefault();\r\n        this.list.data.items.push(this.data.text);\r\n        this.data.length = this.list.data.items.length;\r\n        this.data.text = '';\r\n        this.update();\r\n    }\r\n\r\n    style () {\r\n        return `\r\n        h3 { color:red; }\r\n        button{ color:green;}\r\n        `;\r\n    }\r\n\r\n    handleChange(target){\r\n        this.data.text = target.value;\r\n    }\r\n\r\n    render () {\r\n        return `<div>\r\n                    <h3>TODO</h3>\r\n                    <List  name=\"list\" data=\"listData\" />\r\n                    <form onsubmit=\"add(event)\" >\r\n                        <input type=\"text\" onchange=\"handleChange(this)\"  value=\"{{text}}\"  />\r\n                        <button>Add #{{length}}</button>\r\n                    </form>\r\n                </div>`;\r\n    }\r\n}\r\n```\r\n\r\n* 第3行，通过makeHTML方法把组件制作成可以在render中使用的标签。当然Omi.makeHTML('List', List);也可以写在List组件的代码下面。\r\n* 第9行，在父组件上定义listData属性用来传递给子组件。\r\n* 第34行，在render方法中使用List组件。其中name方法可以让你在代码里通过this快速方法到该组件的实例。data=\"listData\"可以让你把this.listData传递给子组件。\r\n\r\n需要注意的是，父组件的this.listData会被通过Object.assign浅拷贝到子组件。\r\n这样做的目的主要是希望以后DOM的变更都尽量修改子组件自身的data，然后再调用其update方法，而不是去更改父组件的listData。\r\n\r\n关于Omi组件通讯其实有4种方案，这个后续教程会专门来讲。\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=todo_nest\" target=\"_blank\">点击这里→在线试试</a>\r\n"

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "## 条件判断\r\n\r\n我们经常需要根据不同的状态呈现不同的界面，比如有的用户是vip要显示vip的Logo。Omi有许多种方式满足你的要求。\r\n\r\n### 方式一\r\n\r\n```js\r\nclass ConditionTest extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    render () {\r\n        return `{{#isVip}}\r\n                    <div>you are VIP.</div>\r\n                {{/isVip}}\r\n                {{^isVip}}\r\n                    <div>you are not VIP.</div>\r\n                {{/isVip}}`;\r\n    }\r\n}\r\n```\r\n\r\n上面完全使用mustachejs的条件判断的语法。当然Omi不强制你使用mustachejs。你可以是omi.lite.js，然后重写Omi.template方法去使用任意你喜爱的模板引擎。\r\n\r\n### 方式二\r\n\r\n```js\r\nclass ConditionTest extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    render () {\r\n        if(this.data.isVip){\r\n            return '<div>you are VIP.</div>';\r\n        }else{\r\n            return '<div>you are not VIP.</div>';\r\n        }\r\n    }\r\n}\r\n```\r\n\r\nrender就是提供了很好的可编程性，里面可以写任意js逻辑代码。对了，差点忘了，style方法里面也可以写js逻辑的。\r\n\r\n```js\r\nclass ConditionTest extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    style (){\r\n        if(this.data.isVip){\r\n            return 'div{ color : red; }';\r\n        }else{\r\n            return 'div{ color : green; }';\r\n        }\r\n    }\r\n\r\n    render () {\r\n        if(this.data.isVip){\r\n            return '<div>you are VIP.</div>';\r\n        }else{\r\n            return '<div>you are not VIP.</div>';\r\n        }\r\n    }\r\n}\r\n```\r\n\r\n### 方式三\r\n\r\n```js\r\nclass ConditionTest extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    render() {\r\n        return  `\r\n            ${this.data.isVip\r\n                ?\"<div>you are VIP.</div>\"\r\n                :\"<div>you are not VIP.</div>\"\r\n    \t\t}\r\n        `;\r\n    }\r\n}\r\n```\r\n\r\n当然可以使用${ }里面写javascript代码进行输出。"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "## 事件处理\r\n\r\nOmi的事件分内置事件和自定义事件。在内置事件处理方面巧妙地利用了浏览器自身的管线机制，可以通过event和this轻松拿到事件实例和触发该事件的元素。\r\n\r\n### 内置事件\r\n\r\n什么算内置事件？只要下面正则能匹配到就算内置事件。\r\n\r\n```js\r\non(abort|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|pause|play|playing|progress|ratechange|reset|resize|scroll|seeked|seeking|select|show|stalled|submit|suspend|timeupdate|toggle|volumechange|waiting|autocomplete|autocompleteerror|beforecopy|beforecut|beforepaste|copy|cut|paste|search|selectstart|wheel|webkitfullscreenchange|webkitfullscreenerror|touchstart|touchmove|touchend|touchcancel|pointerdown|pointerup|pointercancel|pointermove|pointerover|pointerout|pointerenter|pointerleave)\r\n```\r\n\r\n内置事件怎么绑定？如下所示：\r\n\r\n```js\r\nclass EventTest extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    handleClick(dom, evt){\r\n        alert(dom.innerHTML);\r\n    }\r\n\r\n    render () {\r\n        return `<div onclick=\"handleClick(this, event)\">Hello, Omi!</div>`;\r\n    }\r\n}\r\n```\r\n\r\n### 自定义事件\r\n\r\n开发者自己定义的组件的事件，称为自定义事件，自定义事件必须以on开头，即onXXXX的格式，不然Omi识别不到。这里拿分页作为例子：\r\n\r\n```js\r\nimport Omi from '../../src/index.js';\r\nimport Pagination from './pagination.js';\r\nimport Content from './content.js';\r\n\r\nOmi.makeHTML('Pagination', Pagination);\r\nOmi.makeHTML('Content', Content);\r\n\r\nclass Main extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    installed(){\r\n        this.content.goto(this.pagination.data.currentPage+1);\r\n    }\r\n    \r\n    handlePageChange(index){\r\n        this.content.goto(index+1);\r\n    }\r\n\r\n    render () {\r\n        return `<div>\r\n                    <h1>Pagination Example</h1>\r\n                    <Content name=\"content\" />\r\n                    <Pagination\r\n                        name=\"pagination\"\r\n                        data-total=\"100\"\r\n                        data-page-size=\"10\"\r\n                        data-num-edge=\"1\"\r\n                        data-num-display=\"4\"　　　　　\r\n                        onPageChange=\"handlePageChange\" />\r\n                </div>`;\r\n    }\r\n}\r\n\r\nOmi.render( new Main(),'body');\r\n```\r\n\r\n如上面的onPageChange就是自定义事件，触发会执行handlePageChange。onPageChange方法是在Pagination中执行：\r\n\r\n```js\r\nimport Omi from '../../src/index.js';\r\n\r\nclass Pagination extends Omi.Component {\r\n    ...\r\n    ...\r\n    ...\r\n            linkTo: \"#\",\r\n            prevText: \"Prev\",\r\n            nextText: \"Next\",\r\n            ellipseText: \"...\",\r\n            prevShow: true,\r\n            nextShow: true,\r\n            onPageChange: function () { return false; }\r\n        }, this.data);\r\n\r\n        this.pageNum = Math.ceil(this.data.total / this.data.pageSize);\r\n    }\r\n    \r\n    goto (index,evt) {\r\n        evt.preventDefault();\r\n        this.data.currentPage=index;\r\n        this.update();\r\n        this.data.onPageChange(index);\r\n    }\r\n    ...\r\n    ...\r\n    ...\r\n}\r\n```\r\n\r\n这里取了Pagination组件的部分代码。高亮的就是执行onPageChange的地方。\r\n\r\n### 相关地址\r\n\r\n* [演示地址](http://alloyteam.github.io/omi/example/pagination/)\r\n* [源码地址](https://github.com/AlloyTeam/omi/tree/master/example/pagination)\r\n"

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "## 表单\r\n\r\nOmi让一些表单操控起来更加方便，特别是select！\r\n\r\n### select标签\r\n\r\n以前，我们需要像如下的方式选中一个选项：\r\n\r\n```html\r\n<select>\r\n  <option value=\"grapefruit\">Grapefruit</option>\r\n  <option value=\"lime\">Lime</option>\r\n  <option selected value=\"coconut\">Coconut</option>\r\n  <option value=\"mango\">Mango</option>\r\n</select>\r\n```\r\n\r\n第三个option由于加上了selected，所有会被选中。这样带来的问题就是，开发者写的程序可能要操遍历每个option。而使用Omi，你只需要这样子：\r\n\r\n```html\r\n<select value=\"coconut\">\r\n  <option value=\"grapefruit\">Grapefruit</option>\r\n  <option value=\"lime\">Lime</option>\r\n  <option value=\"coconut\">Coconut</option>\r\n  <option value=\"mango\">Mango</option>\r\n</select>\r\n```\r\n\r\n这样就能达到同样的效果。比如你想选择第一项：\r\n\r\n```html\r\n<select value=\"grapefruit\">\r\n  <option value=\"grapefruit\">Grapefruit</option>\r\n  <option value=\"lime\">Lime</option>\r\n  <option value=\"coconut\">Coconut</option>\r\n  <option value=\"mango\">Mango</option>\r\n</select>\r\n```\r\n\r\n是不是非常方便？\r\n\r\n###  举个例子\r\n\r\n```js\r\nclass FormTest extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n       \r\n    }\r\n\r\n    handleChange(target){\r\n      console.log(target.value)\r\n      this.data.value = target.value;\r\n    }\r\n\r\n    handleSubmit(evt) {\r\n      alert('Your favorite flavor is: ' + this.data.value);\r\n      evt.preventDefault();\r\n    }\r\n  \r\n    render () {\r\n        return `\r\n        <form onsubmit=\"handleSubmit(event)\">\r\n        <label>\r\n          Pick your favorite La Croix flavor:\r\n          <select value=\"{{value}}\" onchange=\"handleChange(this)\">\r\n            <option value=\"grapefruit\">Grapefruit</option>\r\n            <option value=\"lime\">Lime</option>\r\n            <option value=\"coconut\">Coconut</option>\r\n            <option value=\"mango\">Mango</option>\r\n          </select>\r\n        </label>\r\n        <input type=\"submit\" value=\"Submit\" />\r\n      </form>`;\r\n    }\r\n}\r\n\r\nOmi.render(new FormTest({ value: 'mango' }),'#container');\r\n```\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=form\" target=\"_blank\">点击这里→在线试试</a>"

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "## 获取DOM节点\r\n\r\n虽然绝大部分情况下，开发者不需要去查找获取DOM，但是还是有需要获取DOM的场景，所以Omi提供了方便获取DOM节点的方式。\r\n\r\n### ref和refs\r\n\r\n```js\r\nclass Hello extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n    \r\n    style () {\r\n        return  `\r\n            h1{\r\n                cursor:pointer;\r\n            }\r\n         `;\r\n    }\r\n    \r\n    handleClick(){\r\n        alert(this.refs.abc.innerHTML);\r\n    }\r\n    \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <h1 ref=\"abc\" onclick=\"handleClick()\">Hello ,{{name}}!</h1>\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n\r\nOmi.render(new Hello({ name : \"Omi\" }),\"#container\");\r\n```\r\n\r\n可以看到通过在HTML中标记ref为abc，那么就通过this.refs.abc访问到该DOM节点。\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=ref\" target=\"_blank\">点击这里→在线试试</a>"

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "## Hello World\r\n\r\n你可以使用ES6+或者ES5的方式编写Omi程序来搭建你的Web程序。\r\n\r\n### Hello World with ES6+\r\n\r\n你可以使用 [webpack](https://webpack.github.io/) 打包工具，webpack会把你的模块代码打成一个很小的包，优化加载时间。使用[babel](http://babeljs.io/)，让你立刻马上使用ES6+来编写你的web程序。你只需要在webpack配置的module设置好[babel-loader](https://github.com/babel/babel-loader)便可。\r\n\r\n一个Omi的简短的例子如下所示:\r\n\r\n```js\r\nimport Omi from './omi.js';\r\n\r\nclass Hello extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n    \r\n    style () {\r\n        //注意，return中的<style></style>包裹是可选的。主要是为了识别为JSX文件可以有CSS高亮。\r\n        return  `\r\n        <style>\r\n            h1{\r\n                cursor:pointer;\r\n            }\r\n        </style>\r\n         `;\r\n    }\r\n    \r\n    handleClick(target, evt){\r\n        alert(target.innerHTML);\r\n    }\r\n    \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <h1 onclick=\"handleClick(this, event)\">Hello ,{{name}}!</h1>\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n\r\nOmi.render(new Hello({ name : \"Omi\" }),\"#container\");\r\n```\r\n\r\n组件生成的HTML最终会插入到#container中。上面的例子展示了Omi的部分特性:\r\n\r\n- data传递: new Hello(data,..)的data可以直接提供给render方法里的模板\r\n- 局部CSS: h1只对render里的h1生效，不会污染外面的h1\r\n- 声明式事件绑定: onclick调用的就是组件内的handleClick，this可以拿到当前的DOM元素,还可以拿到当前的event\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=hello\" target=\"_blank\">点击这里→在线试试</a>\r\n\r\n你可以使用Omi.makeHTML来生成组件标签用于嵌套。\r\n```js\r\n    Omi.makeHTML('Hello', Hello);\r\n```\r\n那么你就在其他组件中使用，如\r\n```js\r\n  ...\r\n  render() {\r\n        return  `\r\n        <div>\r\n            <div>Test</div>\r\n            <Hello data-name=\"Omi\" />\r\n        </div>\r\n        `;\r\n    }\r\n    ...\r\n```\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=hello_nest\" target=\"_blank\">点击这里→在线试试</a>\r\n\r\n###  Hello World with ES5\r\n\r\n当然Omi没有抛弃ES5的用户。你可以使用ES5的方式编写Omi。如，在你的HTML中引用omi.js：\r\n\r\n```html\r\n<script src=\"omi.js\"></script>\r\n```\r\n\r\n然后：\r\n\r\n```js\r\nvar Hello =  Omi.create(\"Hello\", {\r\n    style: function () {\r\n        return \"h1{ cursor:pointer }\";\r\n    },\r\n    \r\n    handleClick: function (dom) {\r\n        alert(dom.innerHTML)\r\n    },\r\n    \r\n    render: function () {\r\n        return ' <div>\\\r\n                        <h1 onclick=\"handleClick(this, event)\">\\\r\n                            Hello ,{{name}}!\\\r\n                        </h1>\\\r\n                </div>'\r\n    }\r\n});\r\n\r\nvar Test =  Omi.create(\"Test\", {\r\n    render: function () {\r\n        return '<div>\\\r\n                    <div>Test</div>\\\r\n                    <Hello data-name=\"Omi\" />\\\r\n                </div>'\r\n    }\r\n});\r\n\r\nOmi.render(new Test(),'#container');\r\n```\r\n当然除了在HTML引入脚本，你还可以使用AMD、CMD或者CommonJS的方式引入Omi，这里就不再一一列举。\r\n\r\n需要注意的是，Omi.create的第一个参数Hello是用来生成Tag Name的。你可以在其他地方嵌入你的组件。如：\r\n\r\n```js\r\n  ...\r\n  render:function() {\r\n        return  '<div>\\\r\n                    <Hello  data-name=\"Omi1\" />\\\r\n                    <div>Test XXXX</div>\\\r\n                    <Hello  data-name=\"Omi2\" />\\\r\n                </div>';\r\n    }\r\n    ...\r\n```\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=hello_es5\" target=\"_blank\">点击这里→在线试试</a>\r\n"

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "## 继承\r\n\r\n通过继承机制，可以利用已有的数据类型来定义新的数据类型。所定义的新的数据类型不仅拥有新定义的成员，而且还同时拥有旧的成员。我们称已存在的用来派生新类的类为基类，又称为父类。由已存在的类派生出的新类称为派生类，又称为子类。\r\n\r\n### 举个例子\r\n\r\n```js\r\nclass Hello extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n    \r\n    style () {\r\n        return  `\r\n            div{\r\n                cursor:pointer;\r\n            }\r\n         `;\r\n    }\r\n    \r\n    handleClick(target, evt){\r\n        alert(target.innerHTML);\r\n    }\r\n    \r\n    render() {\r\n       return  ' <div onclick=\"handleClick(this,event)\">Hello {{name}}!</div>'\r\n    }\r\n}\r\n\r\nclass SubHello extends Hello {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n}\r\n\r\nOmi.render(new SubHello({ name : 'Omi' }),'#container');\r\n```\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=inherit\" target=\"_blank\">点击这里→在线试试</a>\r\n\r\n###  ES5下的继承\r\n\r\n```js\r\nvar Hello =  Omi.create(\"Hello\",{\r\n  render:function(){\r\n    return  ' <div>Hello {{name}}!</div>'\r\n  }\r\n})\r\n\r\nvar SubHello =  Omi.create(\"SubHello\",Hello,{ });\r\n\r\n\r\nOmi.render(new SubHello({ name : 'Omi' }),'#container');\r\n```\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=inherit_es5\" target=\"_blank\">点击这里→在线试试</a>"

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "## 安装\n\n[Omi](https://github.com/AlloyTeam/omi)（读音 / [ˈomɪ] /, 汉字类似于 欧米） 是一款用于创建用户界面的组件化框架，开放并且现代，故得名：Omi。\n\n### 安装 Omi\n\n我们推荐使用  [npm](https://www.npmjs.com/) 来管理你的前端依赖.\n\n通过npm安装Omi，你只需要执行下面的命令:\n\n``` js\n$ npm install omi\n```\n\n## omi-cli\n\n你也可以通过omi-cli去初始化你的项目:\n\n``` js\n$ npm install omi-cli -g       //安装cli\n$ omi init your_project_name   //初始化项目，你也可以在一个空的文件夹下执行 omi init\n$ cd your_project_name         //如果你是在空文件夹下执行的 omi init。请无视这条命令\n$ npm run dev                  //开发\n$ npm run dist                 //部署发布\n```"

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "## 生命周期\r\n\r\n|name   |avatars   |company   | \r\n|---|---|---|\r\n| constructor  | 构造函数 | new的时候 |\r\n| install  | 初始化安装，这可以拿到用户传进的data进行处理 | 实例化 |\r\n| installed    | 安装完成，HTML已经插入页面之后执行  |  实例化  |\r\n| uninstall | 卸载组件。执行remove方法会触发该事件    |   销毁时 |\r\n| beforeUpdate | 更新前     |   存在期 |\r\n| afterUpdate | 更新后     |    存在期 |\r\n\r\n## 示意图\r\n\r\n![lc](http://images2015.cnblogs.com/blog/105416/201701/105416-20170119153018546-1566368987.png)\r\n       \r\n### 举个例子\r\n\r\n```js\r\nclass Timer extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    install () {\r\n        this.data = {secondsElapsed: 0};\r\n    }\r\n\r\n    tick() {\r\n        this.data.secondsElapsed++;\r\n        this.update();\r\n    }\r\n\r\n    installed(){\r\n        this.interval = setInterval(() => this.tick(), 1000);\r\n    }\r\n\r\n    uninstall() {\r\n        clearInterval(this.interval);\r\n    }\r\n\r\n\r\n    style () {\r\n        return `\r\n        .num { color:red; }\r\n        `;\r\n    }\r\n\r\n    render () {\r\n        return `<div>Seconds Elapsed:<span class=\"num\"> {{secondsElapsed}}</span></div>`;\r\n    }\r\n}\r\n```\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=lifecycle\" target=\"_blank\">点击这里→在线试试</a>\r\n"

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "## 循环遍历\r\n\r\n下面介绍mustache.js的方式和javascript遍历的方式。\r\n\r\n### 方式一\r\n\r\n```js\r\nclass List extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    render () {\r\n        return `<div>\r\n                    <ul> \r\n                        {{#items}} \r\n                        <li id=\"{{id}}\">{{text}}</li> \r\n                        {{/items}}\r\n                    </ul>\r\n                </div>`;\r\n    }\r\n}\r\n\r\nOmi.render(new List({\r\n    items: [\r\n        {id: 1, text: 'Omi'},\r\n        {id: 2, text: 'dntzhang'},\r\n        {id: 3, text: 'AlloyTeam'}\r\n    ]\r\n}),\"body\");\r\n```\r\n\r\nmustache.js更详细的循环遍历使用可看[https://github.com/janl/mustache.js#non-empty-lists](https://github.com/janl/mustache.js#non-empty-lists)。 比如还支持：\r\n\r\n* 如果items的每一项是字符串，可以直接**{{.}}**的方式来输出每一项\r\n* 循环的时候调用定义好的函数\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=list\" target=\"_blank\">点击这里→在线试试</a>\r\n\r\n### 方式二\r\n\r\n既然ES6+了，当然可以使用${ }以及Array的map方法: \r\n\r\n```js\r\nclass List extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    render() {\r\n        return `<div>\r\n                    <ul>\r\n                    ${this.data.items.map(item =>\r\n                         `<li id=\"${item.id}\">${item.text}</li>`\r\n                    ).join('')}\r\n                    </ul>\r\n                </div>`;\r\n    }\r\n}\r\n\r\nOmi.render(new List({\r\n    items: [\r\n        {id: 1, text: 'Omi'},\r\n        {id: 2, text: 'dntzhang'},\r\n        {id: 3, text: 'AlloyTeam'}\r\n    ]\r\n}),\"body\");\r\n```\r\n\r\n你将在页面看到如下效果:\r\n\r\n![pv](http://images2015.cnblogs.com/blog/105416/201701/105416-20170122095724129-2059595233.png)\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=list2\" target=\"_blank\">点击这里→在线试试</a>\r\n\r\n如果想在循环里加些判断呢？比如需要把id为偶数的隐藏起来:\r\n\r\n```js\r\nrender() {\r\n    return `<div>\r\n                <ul>\r\n                ${this.data.items.map(item =>\r\n                    `<li style=\"display:${item.id%2===0?'none':'block'};\" id=\"${item.id}\">${item.text}</li>`\r\n                ).join('')}\r\n                </ul>\r\n            </div>`;\r\n}\r\n```\r\n\r\n所以模板字符串还是非常方便，随着ES继续发展下去，模板引擎估计会慢慢消失。所以omi提供了 omi.lite.js 版本不包含任何模板引擎。"

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "## 插件体系\r\n\r\n[Omi](https://github.com/AlloyTeam/omi)是Web组件化框架，怎么又来了个插件的概念？\r\n\r\n可以这么理解: Omi插件体系可以赋予dom元素一些能力，并且可以和组件的实例产生关联。\r\n\r\n### omi-drag\r\n\r\n且看这个例子:\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=plugin\" target=\"_blank\">点击这里→在线试试</a>\r\n\r\n```js\r\nimport OmiDrag from './omi-drag.js';\r\n\r\nOmiDrag.init();\r\n\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    render() {\r\n        return  `\r\n        <div>\r\n            <div omi-drag class=\"test\">Drag Me</div>\r\n        </div>\r\n        `;\r\n\r\n    }\r\n\r\n    style(){\r\n       return `\r\n        .test{\r\n            width:100px;\r\n            height:100px;\r\n            color:white;\r\n            line-height:90px;\r\n            text-align:center;\r\n            background-color:#00BFF3;\r\n        }\r\n        `\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\n如上面的代码所示，通过在div上标记omi-drag，这个div就能够被用户使用鼠标拖拽。我们称omi-drag.js为omi插件。\r\n是不是非常方便？那么这个omi-drag是怎么实现的？\r\n\r\n## Omi.extendPlugin\r\n\r\n核心方法: Omi.extendPlugin( pluginName, handler )\r\n\r\n下面的代码就是展示了如何通过 Omi.extendPlugin 赋予dom拖拽的能力:\r\n\r\n```js\r\n;(function () {\r\n\r\n    var OmiDrag = {};\r\n    var Omi = typeof require === 'function'\r\n        ? require('omi')\r\n        : window.Omi;\r\n\r\n    OmiDrag.init = function(){\r\n        Omi.extendPlugin('omi-drag',function(dom, instance){\r\n            dom.style.cursor='move';\r\n            var isMouseDown = false,\r\n                preX = null,\r\n                preY = null,\r\n                currentX = null,\r\n                currentY = null,\r\n                translateX = 0,\r\n                translateY = 0;\r\n\r\n            dom.addEventListener('mousedown',function(evt){\r\n                isMouseDown = true;\r\n                preX = evt.pageX;\r\n                preY = evt.pageY;\r\n                evt.stopPropagation();\r\n            },false);\r\n\r\n            window.addEventListener('mousemove',function(evt){\r\n                if(isMouseDown){\r\n                    currentX = evt.pageX;\r\n                    currentY = evt.pageY;\r\n                    if(preX != null){\r\n                        translateX += currentX - preX;\r\n                        translateY += currentY - preY;\r\n                        dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';\r\n                    }\r\n                    preX = currentX;\r\n                    preY = currentY;\r\n                    evt.preventDefault();\r\n                }\r\n            },false);\r\n\r\n            window.addEventListener('mouseup',function(){\r\n                isMouseDown = false;\r\n                preX = preY = currentX = currentY = null;\r\n            },false);\r\n        });\r\n    }\r\n\r\n    OmiDrag.destroy = function(){\r\n        delete Omi.plugins['omi-drag'];\r\n    };\r\n\r\n    if (typeof exports == \"object\") {\r\n        module.exports = OmiDrag;\r\n    } else if (typeof define == \"function\" && define.amd) {\r\n        define([], function(){ return OmiDrag });\r\n    } else {\r\n        window.OmiDrag = OmiDrag;\r\n    }\r\n\r\n})();\r\n```\r\n\r\n方法: Omi.extendPlugin( pluginName, handler )\r\n\r\n其中pluginName为插件的名称\r\n其中handler为处理器。handler可以拿到标记了pluginName的dom以及dom所在的组件的实例，即 dom 和 instance。\r\n\r\n通过 Omi.extendPlugin，可以赋予dom元素一些能力，也可以和组件的实例(instance)产生关联。\r\n但是上面的例子没有和instance产生关联，我们接下来试试:\r\n\r\n## 关联instance\r\n\r\n我们想在组件里面能够监听到move并且执行回调。如下:\r\n\r\n```js\r\n...\r\n...\r\nmoveHandler(){\r\n    console.log('moving');\r\n}\r\n\r\nrender() {\r\n    return  `\r\n    <div>\r\n        <div omi-drag class=\"test\">Drag Me</div>\r\n    </div>\r\n    `;\r\n}\r\n...\r\n```\r\n\r\n主要被拖动过程中，moveHandler就不断地被执行。插件代码需要修改:\r\n\r\n```js\r\n...\r\nwindow.addEventListener('mousemove',function(evt){\r\n    if(isMouseDown){\r\n        currentX = evt.pageX;\r\n        currentY = evt.pageY;\r\n        if(preX != null){\r\n            translateX += currentX - preX;\r\n            translateY += currentY - preY;\r\n            dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';\r\n        }\r\n        preX = currentX;\r\n        preY = currentY;\r\n        evt.preventDefault();\r\n        instance.moveHandler(evt);\r\n    }\r\n},false);\r\n```\r\n\r\n我们在里面增加了instance.moveHandler(evt);方法，用来执行组件实例上的moveHandler方法。\r\n这样的话:就是组件的实例(instance)产生关联。但是还是有问题？如果标记了多个omi-drag 就会有问题！如:\r\n\r\n```js\r\n...\r\nrender() {\r\n    return  `\r\n    <div>\r\n        <div omi-drag class=\"test\">Drag Me</div>\r\n        <div omi-drag class=\"test\">Drag Me</div>\r\n    </div>\r\n    `;\r\n}\r\n...\r\n```\r\n\r\n通常我们系统每个omi-drag都能对应一个回调函数，如：\r\n\r\n```js\r\n...\r\n...\r\nmoveHandlerA(){\r\n    console.log('moving');\r\n}\r\n\r\nmoveHandlerB(){\r\n    console.log('moving');\r\n}\r\n\r\nrender() {\r\n    return  `\r\n    <div>\r\n        <div omi-drag class=\"test\">Drag Me A</div>\r\n        <div omi-drag class=\"test\">Drag Me B</div>\r\n    </div>\r\n    `;\r\n}\r\n...\r\n```\r\n\r\n怎么办？怎么实现？有办法！通过dom传递数据给插件。\r\n\r\n## 传递数据\r\n\r\n先来看最后实现的效果:\r\n\r\n```js\r\n...\r\n...\r\nmoveHandlerA(){\r\n    console.log('moving');\r\n}\r\n\r\nmoveHandlerB(){\r\n    console.log('moving');\r\n}\r\n\r\nrender() {\r\n    return  `\r\n    <div>\r\n        <div omi-drag class=\"test\" dragMove=\"moveHandlerA\" >Drag Me A</div>\r\n        <div omi-drag class=\"test\" dragMove=\"moveHandlerB\" >Drag Me B</div>\r\n    </div>\r\n    `;\r\n}\r\n...\r\n```\r\n\r\nomi-drag修改的地方:\r\n\r\n```js\r\n...\r\nvar handlerName = dom.getAttribute('dragMove');\r\n\r\nwindow.addEventListener('mousemove',function(evt){\r\n    if(isMouseDown){\r\n        currentX = evt.pageX;\r\n        currentY = evt.pageY;\r\n        if(preX != null){\r\n            translateX += currentX - preX;\r\n            translateY += currentY - preY;\r\n            dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';\r\n        }\r\n        preX = currentX;\r\n        preY = currentY;\r\n        evt.preventDefault();\r\n        instance[handlerName](evt);\r\n    }\r\n},false);\r\n...\r\n```\r\n\r\n* 通过 var handlerName = dom.getAttribute('dragMove') 拿到dom上声明的dragMove\r\n* 通过 instance[handlerName](evt) 去执行对应的方法\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=plugin\" target=\"_blank\">点击这里→在线试试</a>\r\n\r\n## 更多插件\r\n\r\n* [omi-finger](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-finger) Omi的[AlloyFinger](https://github.com/AlloyTeam/AlloyFinger)插件，支持各种触摸事件和手势\r\n* [omi-transform](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-transform) Omi的[transformjs](http://alloyteam.github.io/AlloyTouch/transformjs/)插件，快速方便地设置DOM的CSS3 Transform属性\r\n* [omi-touch](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-touch) Omi的[AlloyTouch](https://github.com/AlloyTeam/AlloyTouch)插件，Omi项目的触摸运动解决方案（支持触摸滚动、旋转、翻页、选择等等）\r\n* [omi-jquery-date-picker](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-jquery-date-picker) Omi的时间选择插件，支持各种时间或者时间区域选择\r\n"

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "## 模板切换\r\n\r\nOmi有三个版本。其中的omi.js和omi.lite.js属于Web端使用的版本。\r\n\r\n* omi.js内置了[mustache.js](https://github.com/janl/mustache.js)作为模版引擎\r\n* omi.lite.js不包含任何模版引擎\r\n\r\nOmi不强制开发者使用mustache.js，你可以根据业务场景使用任意模板引擎或者不使用模板引擎。\r\n\r\n那么怎么使用别的模板引擎？下面拿[artTemplate](https://github.com/aui/artTemplate)作为例子。\r\n\r\n### 使用artTemplate\r\n\r\n```js\r\nOmi.template = function(tpl, data){\r\n    return artTemplate.compile(tpl)(data);\r\n}\r\n```\r\n重写Omi.template方法，tpl为传入的模板，data为模板所需的数据，返回值为HTML。\r\n重写完毕后就能在render使用artTemplate的语法，如：\r\n\r\n```js\r\nclass List extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    style () {\r\n        return `\r\n        h1 { color:red; }\r\n        li{ color:green;}\r\n        `;\r\n    }\r\n\r\n    render () {\r\n        return `<h1>{{title}}</h1>\r\n                <ul>\r\n                    {{each list as value i}}\r\n                    <li>索引 {{i + 1}} ：{{value}}</li>\r\n                    {{/each}}\r\n                </ul>`;\r\n    }\r\n}\r\n```\r\n\r\n### 相关地址\r\n\r\n* [演示地址](http://alloyteam.github.io/omi/example/artTemplate/)\r\n* [源码地址](https://github.com/AlloyTeam/omi/tree/master/example/artTemplate)"

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "## Omi的理念\r\n\r\nOmi的理念是基于面向对象编程体系，内建积木系统。\r\n 传统的单向数据流或者抛出event的组件通讯方式增加了系统的稳定性，但是丧失了灵活性。一定程度上也降低了组建的复用。所谓鱼和熊掌不可兼得。\r\n 面向对象体系需要多一个逻辑层，可以自由操作所有组件的instance，instance之间的逻辑关系构建出了整个程序。这样组建间的逻辑，通信，复用就全部迎刃而解。组建也更加单一职责，更松耦合。\r\n\r\n对比函数式编程、命令式编程与面向对象编程，可以归纳总结出下面几条：\r\n\r\n- 命令式编程干脆直接，利用循环条件等控制流程，强调执行过程\r\n- 命令式编程对硬件执行友好，运行更容易，却阻碍了复杂程序的设计\r\n- 函数式强调输入和输出，并非执行过程\r\n- 函数式倡导多个简单执行单元组合成复杂运算程序\r\n- 面向对象编程将对象作为程序的基本单元，更具有重用性、灵活性和扩展性\r\n\r\nJavascript是哪种类型的语言？现在ES6+已经有了class。那么他是面向对象语言？\r\n但是JS可以在任意地方定义函数并且当作把函数当作值来传递。那么他是函数式编程语言？\r\n所以，没有精准的定义，取决于你的用法和姿势。其次，Web组件化架构层面编程模型和语言层面编程模型是非常自由的关系。意思就是，你可以用Javascript构建函数式编程框架如React，也可以基于面向对象体系搭建Omi。\r\n\r\n### 函数式编程 VS 面向对象编程\r\n\r\n在UI组件框架层面，函数式编程的代表有React，Omi属于面向对象编程体系。那么他们各有什么优缺点？下面做了个对比（其实也是函数式编程与面向对象编程的对比）：\r\n\r\n|    | React        | Omi  |\r\n| ------------- |:-------------:|:-----:|\r\n| 组件通信  | ★★★★☆| ★★★★★ |\r\n| 稳定性    | ★★★★★    |   ★★★★☆ |\r\n| 灵活性  | ★★★★☆| ★★★★★ |\r\n| 扩展性 | ★★★★☆     |   ★★★★★ |\r\n| 测试性 | ★★★★★     |   ★★★★☆ |\r\n| 文件大小 | ★★★☆☆    |   ★★★★★ |\r\n| 功能特性 | ★★★☆☆    |   ★★★★☆ |\r\n| DOM性能 | ★★★★★    |   ★★★★☆ |\r\n| 动画性能 | ★★★★☆    |   ★★★★★ |\r\n| 抽象复杂度 | ★★★★☆    |   ★★★★★ |\r\n| 异步编程 | ★★★★★    |   ★★★★☆ |\r\n\r\n可以看得出，鱼和熊掌不可兼得。面向对象编程更具有重用性、灵活性和扩展性，带来的问题就是更加难测试。\r\n具体来说，如函数式编程，其测试面积是state1 + state2 + ... + stateN；在面向对象编程中，其测试面积是state1×event1 + state2×event2 + ... + stateN×eventN。\r\n\r\n总结来说，更加推荐使用面向对象的方式去搭建UI组件化框架。\r\n\r\n<hr/>\r\n\r\n### 全文结束，感谢阅读。[开始Omi之旅吧!](https://github.com/AlloyTeam/omi) \r\n\r\n"

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "## Component Communication\r\n\r\nCommunication between [Omi](https://github.com/AlloyTeam/omi) components is very flexible, there are many options:\r\n\r\n- By declaring `data-*` on the component to pass data to child node\r\n- By declaring `data` on the component to pass data to child node (support complex data types mapping)\r\n- By declaring `childrenData` on parent component to automatically pass data to child node\r\n- By declaring `group-data` (support complex data types mapping)\r\n- It's completely object-oriented, you can easily get the object instance, then you can set the instance of the property or call the instance of the method\r\n\r\nLet's see some examples.\r\n\r\n### Communicate by `data-*`\r\n\r\n```js\r\nclass Hello extends Omi.Component {\r\n    constructor(data) {\r\n      super(data);\r\n    }\r\n    \r\n    style () {\r\n      return  `\r\n      h1{\r\n      \tcursor:pointer;\r\n      }\r\n      `;\r\n    }\r\n    \r\n    handleClick(target, evt){\r\n      alert(target.innerHTML);\r\n    }\r\n    \r\n    render() {\r\n      return  `\r\n      <div>\r\n      \t<h1 onclick=\"handleClick(this, event)\">Hello ,{{name}}!</h1>\r\n      </div>\r\n  \t\t`;\r\n    }\r\n}\r\n\r\nOmi.makeHTML('Hello', Hello);\r\n\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n  \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello data-name=\"Omi\" />\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\nGenerally `data-*` is used to pass value types such as string and number. It is worth noting that, through `data-*`, received data types are string. You need to manually transform it to the number type.\r\n\r\nNormally, communicate by `data-*` is enough, but sometimes we may need to use complex data types, then we can use `data` to communicate.\r\n\r\n### Communicate by `data`\r\n\r\nAs shown in the above code, name can be passed to the subcomponent by `data-name=\"Omi\"`. The following code can also achieve the same effect.\r\n\r\n```js\r\n...\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n      super(data);\r\n      this.helloData = { name : 'Omi' };\r\n    }\r\n  \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello data=\"helloData\" />\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\nUse the `data` tag, it will find the property from the component instance (that is, this), this can be mounted with any complex objects. This also broke the limitations of `data-*`.\r\n\r\nThen how do we pass `data` that is in a deep depth of the instance to the Hello? No worries, `data` tag can be a complex statement:\r\n\r\n```js\r\n...\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n        this.complexData ={\r\n            a:{\r\n                b:{\r\n                    c:[\r\n                        {\r\n                            e:[{\r\n                                name:'ComplexData Support1'\r\n                            },{\r\n                                name:'ComplexData Support2'\r\n                            }]\r\n                        },\r\n                        {\r\n                            name: 'ComplexData Support3'\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        };\r\n    }\r\n  \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello data=\"complexData.a.b.c[1]\" />\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n...\r\n```\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=data_complex\" target=\"_blank\">Click me for the complex data mapping</a>\r\n\r\n### Communicate by `childrenData`\r\n\r\n```js\r\n...\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n      super(data);\r\n      this.childrenData = [{ name : 'Omi' } , { name : 'dntzhang' }];\r\n    }\r\n  \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello  />\r\n            <Hello  />\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\nWe can use `this.childrenData` to transfer data to the sub-component. In this case, `childrenData` is an array, so it can pass data to multiple components in the same time. In the meanwhile, the data will be passed to components one by one.\r\n\r\n### Communicate by `group-data`\r\n\r\n`childrenData` can pass data to multiple components. However, there are many scenes where the source of data does not have to be from `childrenData`. `childrenData` is an array, and it should be the same order with the components, so that the data must all concentrated in `childrenData`, it's very inconvenient. `group-data` dedicated to solve the above pain points, specifically to pass data to a group of components.\r\n\r\n```js\r\nimport Hello from './hello.js';\r\n\r\n\r\nOmi.makeHTML('Hello', Hello);\r\n\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n        this.testData = [{name: 'Omi'}, {name: 'dntzhang'}, {name: 'AlloyTeam'}];\r\n    }\r\n\r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello group-data=\"testData\" />\r\n            <Hello group-data=\"testData\" />\r\n            <Hello group-data=\"testData\" />\r\n        </div>\r\n        `;\r\n\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\nBy declaring a `group-data` tag in the sub-components, it will go to the current instance of the component (that is, `this`) to find the corresponding property. Then according to the current location, the data will pass to the positions one by one.\r\n\r\nThe results are as follows:\r\n\r\n![group-data results](http://images2015.cnblogs.com/blog/105416/201702/105416-20170216110701535-1698390390.png)\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=group_data\" target=\"_blank\">Click me for the group-data example</a>\r\n\r\nSimilarly, `group-data` supports the mapping of complex data types. It should be noted that the end of the group-data mapping must be an array:\r\n\r\n```js\r\nimport Hello from './hello.js';\r\n\r\n\r\nOmi.makeHTML('Hello', Hello);\r\n\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n        this.complexData ={\r\n            a:{\r\n                b:{\r\n                    c:[\r\n                        {\r\n                            e:[{\r\n                                name:'ComplexData Support1'\r\n                            },{\r\n                                name:'ComplexData Support2'\r\n                            }]\r\n                        },\r\n                        {\r\n                            name: 'ComplexData Support3'\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        };\r\n    }\r\n\r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello group-data=\"complexData.a.b.c[0].e\" />\r\n            <Hello group-data=\"complexData.a.b.c[0].e\" />\r\n        </div>\r\n        `;\r\n\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=group_data_complex\" target=\"_blank\">Click me for the complex group-data mapping</a>\r\n\r\n### By object instance\r\n\r\n```js\r\n...\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n    \r\n    installed(){\r\n        this.hello.data.name = \"Omi\";\r\n        this.update()\r\n    }\r\n  \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello name=\"hello\" />\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\n### By omi-id\r\n\r\n```js\r\n...\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n    \r\n    installed(){\r\n        Omi.get(\"hello\").data.name = \"Omi\";\r\n        this.update()\r\n    }\r\n  \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <Hello omi-id=\"hello\" />\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\nBy declaring `omi-id` on the component, we can get the instance of the object anywhere in the program. This can be regarded as any component communication artifacts.\r\n\r\n### Warm Tips\r\n\r\n- The data that passed by `childrenData` or `data` is shadow copied to sub-components. In order to update it, we need to update the `data` attribute of the component instance.\r\n- The data that passed by `data-*` is also shadow copied to sub-components. In order to update it, we need to update the `data` attribute of the component instance.\r\n- If we set the `dataFirst` property of the component instance to `false`, then `data-*` will override the `data` of component instance.\r\n\r\nFor the third tip, please checkout the pseudo-code:\r\n\r\n```js\r\nif(this.dataFirst){\r\n    this.data = Object.assign({},data-✼ ,this.data);\r\n}else{\r\n    this.data = Object.assign({},this.data, data-✼);\r\n}\r\n```"

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "## Components\r\n\r\n[Omi](https://github.com/AlloyTeam/omi) is based entirely on component architecture, which allows developers to build web applications like building blocks. Everything is components, components can be nested to create new components.\r\n\r\n![Omi Components System](http://images2015.cnblogs.com/blog/105416/201702/105416-20170210093427338-1536910080.png)\r\n\r\n### Simple Components\r\n\r\nLet's explore a simple Todo example to learn the components system in Omi.\r\n\r\n```js\r\nclass Todo extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n    \r\n    add (evt) {\r\n        evt.preventDefault();\r\n        this.data.items.push(this.data.text);\r\n        this.data.text = '';\r\n        this.update();\r\n    }\r\n\r\n    style () {\r\n        return `\r\n        h3 { color:red; }\r\n        button{ color:green;}\r\n        `;\r\n    }\r\n\r\n    handleChange(target){\r\n        this.data.text = target.value;\r\n    }\r\n\r\n    render () {\r\n        return `<div>\r\n                    <h3>TODO</h3>\r\n                    <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>\r\n                    <form onsubmit=\"add(event)\" >\r\n                        <input type=\"text\" onchange=\"handleChange(this)\"  value=\"{{text}}\"  />\r\n                        <button>Add #{{items.length}}</button>\r\n                    </form>\r\n                </div>`;\r\n    }\r\n}\r\n\r\nOmi.render(new Todo({ items: [] ,text : '' }),\"body\");\r\n```\r\n\r\nThe HTML generated by the component will eventually be inserted into the body. The above example shows some of the features of Omi:\r\n\r\n- Data flow: `data` in `new Todo(data,..)` can be used directly in the template in render method.\r\n- Partial CSS: `h3` in `style()` only effect inside of render. It'll never pollute `h3`  outside of this component. The same rule applies to `button`.\r\n- Declarative event binding: `onchange` will call `handleChange` that inside of the component. `this` refers to the current DOM element, `event` refers to the current DOM Event Object.\r\n- You need to manually call the `this.update()` method to update the component\r\n\r\nIt is important to note that, for more freedom and flexibility, Omi does not automatically update DOM while data changes. Developers need to call the `update` method manually.\r\n\r\nYou can also use [oba] (https://github.com/dntzhang/oba) or mobx to implement automatic updates.\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=todo\" target=\"_blank\">Click me for the live demo</a>\r\n\r\n### Component Nesting\r\n\r\nIt's ok to not use nesting component if your page is super simple. However, for most of webpages and web applications, it is a necessary to define the nesting Components to implement complex features.\r\n\r\nFor instance, we can extract a `List` component form the Todo example. This brings maintainable, scalable and reuseable to our project:\r\n\r\n```js\r\nclass List extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    render () {\r\n        return `<ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>`;\r\n    }\r\n}\r\n```\r\n\r\nThen how to use this `List`? We need to use `Omi.makeHTML` to make the `List` to a tag which can be used in render method:\r\n\r\n```js\r\nimport List from './list.js';\r\n\r\nOmi.makeHTML('List', List);\r\n\r\nclass Todo extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n        this.data.length = this.data.items.length;\r\n        this.listData = { items : this.data.items };\r\n    }\r\n\r\n    add (evt) {\r\n        evt.preventDefault();\r\n        this.list.data.items.push(this.data.text);\r\n        this.data.length = this.list.data.items.length;\r\n        this.data.text = '';\r\n        this.update();\r\n    }\r\n\r\n    style () {\r\n        return `\r\n        h3 { color:red; }\r\n        button{ color:green;}\r\n        `;\r\n    }\r\n\r\n    handleChange(target){\r\n        this.data.text = target.value;\r\n    }\r\n\r\n    render () {\r\n        return `<div>\r\n                    <h3>TODO</h3>\r\n                    <List name=\"list\" data=\"listData\" />\r\n                    <form onsubmit=\"add(event)\" >\r\n                        <input type=\"text\" onchange=\"handleChange(this)\"  value=\"{{text}}\"  />\r\n                        <button>Add #{{length}}</button>\r\n                    </form>\r\n                </div>`;\r\n    }\r\n}\r\n```\r\n\r\n- In line 3, we use `makeHTML` to make the component to a tag which can be used in render method. Of course, `Omi.makeHTML('List', List);` can also be written in the end of List component.\r\n- In line 9, the parent component defines the 'listData' property\r\n- In line 34, we use List component in the render method. `name` attribute allows us easily find the instance of the component by using `this`.`data=\"listData\"` attribute allows us easily pass `this.listData`  to the sub component from parent component.\r\n\r\nIt should be noted that the `data` passed from `data=\"listData\"` is cloned to the subcomponents by Object.assign(shallow  copy) , which means if we want to change the DOM, we recommend  that first update the `data` of the instance of subcomponent(not the parent component's `listData` ) and secondly call the `update` method.\r\n\r\nIn fact there are 4 way to communicate between components, it'll be explained later.\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=todo_nest\" target=\"_blank\">Click me for the live demo</a>\r\n"

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "## Conditional Rendering\r\n\r\nIn most case, we need to show different layouts according to different states. For example, some users are vip and we need to show vip logo for them. Omi has many ways to meet this kind of requirements.\r\n\r\n### First Option\r\n\r\n```js\r\nclass ConditionTest extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    render () {\r\n        return `{{#isVip}}\r\n                    <div>you are VIP.</div>\r\n                {{/isVip}}\r\n                {{^isVip}}\r\n                    <div>you are not VIP.</div>\r\n                {{/isVip}}`;\r\n    }\r\n}\r\n```\r\n\r\nIn the above case, we use the condition in mustachejs for rendering. Of course Omi does not force you to use mustachejs. You can use omi.lite.js and then override the `Omi.template` method to use any of your favorite template engines.\r\n\r\n### Second Option\r\n\r\n```js\r\nclass ConditionTest extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    render () {\r\n        if(this.data.isVip){\r\n            return '<div>you are VIP.</div>';\r\n        }else{\r\n            return '<div>you are not VIP.</div>';\r\n        }\r\n    }\r\n}\r\n```\r\n\r\n`render` provides a very good programmability, which can write any js code inside. Oh, don't forget that `style` method can also have js code inside it.\r\n\r\n```js\r\nclass ConditionTest extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    style (){\r\n        if(this.data.isVip){\r\n            return 'div{ color : red; }';\r\n        }else{\r\n            return 'div{ color : green; }';\r\n        }\r\n    }\r\n\r\n    render () {\r\n        if(this.data.isVip){\r\n            return '<div>you are VIP.</div>';\r\n        }else{\r\n            return '<div>you are not VIP.</div>';\r\n        }\r\n    }\r\n}\r\n```"

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "## Handling Events\r\n\r\nThere are two types of events in Omi, built-in events and custom events. Built-in events clever use of the browser's own pipeline mechanism, you can easily get events instance and the triggered event elements through `event` and `this`.\r\n\r\n### Built-in events\r\n\r\nWhat is the built-in event? As long as the it can match the following regular expression.\r\n\r\n```js\r\non(abort|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|pause|play|playing|progress|ratechange|reset|resize|scroll|seeked|seeking|select|show|stalled|submit|suspend|timeupdate|toggle|volumechange|waiting|autocomplete|autocompleteerror|beforecopy|beforecut|beforepaste|copy|cut|paste|search|selectstart|wheel|webkitfullscreenchange|webkitfullscreenerror|touchstart|touchmove|touchend|touchcancel|pointerdown|pointerup|pointercancel|pointermove|pointerover|pointerout|pointerenter|pointerleave)\r\n```\r\n\r\nHow to bind built-in events? As follows:\r\n\r\n```js\r\nclass EventTest extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    handleClick(dom, evt){\r\n        alert(dom.innerHTML);\r\n    }\r\n\r\n    render () {\r\n        return `<div onclick=\"handleClick(this, event)\">Hello, Omi!</div>`;\r\n    }\r\n}\r\n```\r\n\r\n### Custom events\r\n\r\nEvents that defined by developers is the custom events. Here is the pagination example:\r\n\r\n```js\r\nimport Omi from '../../src/index.js';\r\nimport Pagination from './pagination.js';\r\nimport Content from './content.js';\r\n\r\nOmi.makeHTML('Pagination', Pagination);\r\nOmi.makeHTML('Content', Content);\r\n\r\nclass Main extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    installed(){\r\n        this.content.goto(this.pagination.data.currentPage+1);\r\n    }\r\n    \r\n    handlePageChange(index){\r\n        this.content.goto(index+1);\r\n    }\r\n\r\n    render () {\r\n        return `<div>\r\n                    <h1>Pagination Example</h1>\r\n                    <Content name=\"content\" />\r\n                    <Pagination\r\n                        name=\"pagination\"\r\n                        data-total=\"100\"\r\n                        data-page-size=\"10\"\r\n                        data-num-edge=\"1\"\r\n                        data-num-display=\"4\"　　　　　\r\n                        onPageChange=\"handlePageChange\" />\r\n                </div>`;\r\n    }\r\n}\r\n\r\nOmi.render( new Main(),'body');\r\n```\r\n\r\nAs we can see, the `onPageChange` is a custom event, `handlePageChange` will being executed when `onPageChange` is triggered. The `onPageChange` method is executed in `Pagination`:\r\n\r\n```js\r\nimport Omi from '../../src/index.js';\r\n\r\nclass Pagination extends Omi.Component {\r\n    ...\r\n    ...\r\n    ...\r\n            linkTo: \"#\",\r\n            prevText: \"Prev\",\r\n            nextText: \"Next\",\r\n            ellipseText: \"...\",\r\n            prevShow: true,\r\n            nextShow: true,\r\n            onPageChange: function () { return false; }\r\n        }, this.data);\r\n\r\n        this.pageNum = Math.ceil(this.data.total / this.data.pageSize);\r\n    }\r\n    \r\n    goto (index,evt) {\r\n        evt.preventDefault();\r\n        this.data.currentPage=index;\r\n        this.update();\r\n        this.data.onPageChange(index);\r\n    }\r\n    ...\r\n    ...\r\n    ...\r\n}\r\n```\r\n\r\nThis is a part of `Pagination` code. Highlight is the place to execute `onPageChange`.\r\n\r\n### Links\r\n\r\n- [Demo](http://alloyteam.github.io/omi/example/pagination/)\r\n- [Source](https://github.com/AlloyTeam/omi/tree/master/example/pagination)"

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "## Forms\r\n\r\nIt's much more convenient to control forms in Omi, especially `<select>`!\r\n\r\n### select element\r\n\r\nIn the past, we needed to select an option in the following way:\r\n\r\n```html\r\n<select>\r\n  <option value=\"grapefruit\">Grapefruit</option>\r\n  <option value=\"lime\">Lime</option>\r\n  <option selected value=\"coconut\">Coconut</option>\r\n  <option value=\"mango\">Mango</option>\r\n</select>\r\n```\r\n\r\nThe third option is selected because it is being set to `selected` attribute. The problem is that developers need to traversed each option. While using Omi, you can write code like this:\r\n\r\n```html\r\n<select value=\"coconut\">\r\n  <option value=\"grapefruit\">Grapefruit</option>\r\n  <option value=\"lime\">Lime</option>\r\n  <option value=\"coconut\">Coconut</option>\r\n  <option value=\"mango\">Mango</option>\r\n</select>\r\n```\r\n\r\nThis will achieve the same effect. For example, you want to choose the first item:\r\n\r\n```html\r\n<select value=\"grapefruit\">\r\n  <option value=\"grapefruit\">Grapefruit</option>\r\n  <option value=\"lime\">Lime</option>\r\n  <option value=\"coconut\">Coconut</option>\r\n  <option value=\"mango\">Mango</option>\r\n</select>\r\n```\r\n\r\nIsn't it very convenient?\r\n\r\n### For Example\r\n\r\n```js\r\nclass FormTest extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n       \r\n    }\r\n\r\n    handleChange(target){\r\n      console.log(target.value)\r\n      this.data.value = target.value;\r\n    }\r\n\r\n    handleSubmit(evt) {\r\n      alert('Your favorite flavor is: ' + this.data.value);\r\n      evt.preventDefault();\r\n    }\r\n  \r\n    render () {\r\n        return `\r\n        <form onsubmit=\"handleSubmit(event)\">\r\n        <label>\r\n          Pick your favorite La Croix flavor:\r\n          <select value=\"{{value}}\" onchange=\"handleChange(this)\">\r\n            <option value=\"grapefruit\">Grapefruit</option>\r\n            <option value=\"lime\">Lime</option>\r\n            <option value=\"coconut\">Coconut</option>\r\n            <option value=\"mango\">Mango</option>\r\n          </select>\r\n        </label>\r\n        <input type=\"submit\" value=\"Submit\" />\r\n      </form>`;\r\n    }\r\n}\r\n\r\nOmi.render(new FormTest({ value: 'mango' }),'#container');\r\n```\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=form\" target=\"_blank\">Click me for a live demo</a>"

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "## Get DOM\r\n\r\nWhile most of the time, developers do not need to find the DOM, but sometimes is a need to get the DOM.\r\n\r\nOmi provides a way to get the DOM node.\r\n\r\n### ref and refs\r\n\r\n```js\r\nclass Hello extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n    \r\n    style () {\r\n        return  `\r\n            h1{\r\n                cursor:pointer;\r\n            }\r\n         `;\r\n    }\r\n    \r\n    handleClick(){\r\n        alert(this.refs.abc.innerHTML);\r\n    }\r\n    \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <h1 ref=\"abc\" onclick=\"handleClick()\">Hello ,{{name}}!</h1>\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n\r\nOmi.render(new Hello({ name : \"Omi\" }),\"#container\");\r\n```\r\n\r\nAs we can see, by referencing `ref` as `abc` in HTML, the DOM node can be accessed through `this.refs.abc`.\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=ref\" target=\"_blank\">Click me for the live demo</a>\r\n"

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "## Hello World\r\n\r\n### Hello World with ES20XX \r\n\r\nWe recommend using a bundler like [webpack](https://webpack.github.io/) or [Browserify](http://browserify.org/) so you can write modular code and bundle it together into small packages to optimize load time.\r\n\r\nThe small Omi example looks like this:\r\n\r\n```js\r\nimport Omi from './omi.js';\r\n\r\nclass Hello extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n    \r\n    style () {\r\n        return  `\r\n            h1{\r\n                cursor:pointer;\r\n            }\r\n         `;\r\n    }\r\n    \r\n    handleClick(target){\r\n        alert(target.innerHTML);\r\n    }\r\n    \r\n    render() {\r\n        return  `\r\n        <div>\r\n            <h1 onclick=\"handleClick(this)\">Hello ,{{name}}!</h1>\r\n        </div>\r\n        `;\r\n    }\r\n}\r\n\r\nOmi.render(new Hello({ name : \"Omi\" }),\"body\");\r\n```\r\n\r\nThis code renders into body element. \r\n\r\n###  Hello World with ES5\r\n\r\n```html\r\n<script src=\"omi.js\"></script>\r\n```\r\n\r\nthen:\r\n\r\n```js\r\nvar Hello =  Omi.create(\"Hello\", {\r\n    style: function () {\r\n        return \"h1{ cursor:pointer }\";\r\n    },\r\n    \r\n    handleClick: function (dom) {\r\n        alert(dom.innerHTML)\r\n    },\r\n    \r\n    render: function () {\r\n        return ' <div>\\\r\n                        <h1 onclick=\"handleClick(this, event)\">\\\r\n                            Hello ,{{name}}!\\\r\n                        </h1>\\\r\n                </div>'\r\n    }\r\n});\r\n\r\nvar Test =  Omi.create(\"Test\", {\r\n    render: function () {\r\n        return '<div>\\\r\n                    <div>Test</div>\\\r\n                    <Hello data-name=\"Omi\" />\\\r\n                </div>'\r\n    }\r\n});\r\n\r\nOmi.render(new Test(),'#container');\r\n```"

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "## Inheritance\r\n\r\nThrough the inheritance mechanism, we can define new classes base on old classes. The new classes not only have newly defined members, but also have old members at the same time.\r\n\r\nWe call the existing class the base class, also known as the parent class. And the new class derived from the existing class is called a derived class, also known as a subclass.\r\n\r\n### For Example\r\n\r\n```js\r\nclass Hello extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n    \r\n    style () {\r\n        return  `\r\n            div{\r\n                cursor:pointer;\r\n            }\r\n         `;\r\n    }\r\n    \r\n    handleClick(target, evt){\r\n        alert(target.innerHTML);\r\n    }\r\n    \r\n    render() {\r\n       return  ' <div onclick=\"handleClick(this,event)\">Hello {{name}}!</div>'\r\n    }\r\n}\r\n\r\nclass SubHello extends Hello {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n}\r\n\r\nOmi.render(new SubHello({ name : 'Omi' }),'#container');\r\n```\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=inherit\" target=\"_blank\">Click me for the live demo</a>\r\n\r\n### inherit in ES5\r\n\r\n```js\r\nvar Hello =  Omi.create(\"Hello\",{\r\n  render:function(){\r\n    return  ' <div>Hello {{name}}!</div>'\r\n  }\r\n})\r\n\r\nvar SubHello =  Omi.create(\"SubHello\",Hello,{ });\r\n\r\n\r\nOmi.render(new SubHello({ name : 'Omi' }),'#container');\r\n```\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=inherit_es5\" target=\"_blank\">Click me for the live demo</a>"

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "## Installation\r\n\r\n[Omi](https://github.com/AlloyTeam/omi) is open and modern framework  for building user interfaces.\r\n\r\n### Installing Omi\r\n\r\nWe recommend using  [npm](https://www.npmjs.com/) for managing front-end dependencies. If you're new to package managers.\r\n\r\nTo install Omi with npm, run:\r\n\r\n``` js\r\n$ npm install omi\r\n```\r\n### omi-cli\r\n\r\n``` js\r\n$ npm install omi-cli -g       \r\n$ omi init your_project_name   \r\n$ cd your_project_name         \r\n$ npm run dev                  \r\n$ npm run dist                 \r\n```"

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "## Lifecycle\r\n\r\n| Name | Meaning | Occasion |\r\n| :-------------: | :-------------: | :-----: |\r\n| constructor | The constructor | When new a constructor |\r\n| install | The installation. We can process the data that user pass | When instantiate |\r\n| installed | Complete the installation. It'll trigger after HTML being inserted to the page. Please note that it'll trigger when component being removed and restored | **Instantiation and existence** |\r\n| uninstall | Uninstall the component. It'll trigger when remove is executed | When destroy |\r\n| beforeUpdate | Before update | When existence |\r\n| afterUpdate | After update | When existence |\r\n\r\n## Illustration\r\n\r\n![lc](http://images2015.cnblogs.com/blog/105416/201701/105416-20170119153018546-1566368987.png)\r\n\r\nIt should be noted that the installed will be executed during the instantiation, which is not shown above. For example, it'll executed when a component is removed and restored, or when the new component is being added.\r\n\r\n### Examples\r\n\r\n```js\r\nclass Timer extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    install () {\r\n        this.data = {secondsElapsed: 0};\r\n    }\r\n\r\n    tick() {\r\n        this.data.secondsElapsed++;\r\n        this.update();\r\n    }\r\n\r\n    installed(){\r\n        this.interval = setInterval(() => this.tick(), 1000);\r\n    }\r\n\r\n    uninstall() {\r\n        clearInterval(this.interval);\r\n    }\r\n\r\n\r\n    style () {\r\n        return `\r\n        .num { color:red; }\r\n        `;\r\n    }\r\n\r\n    render () {\r\n        return `<div>Seconds Elapsed:<span class=\"num\"> {{secondsElapsed}}</span></div>`;\r\n    }\r\n}\r\n```\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=lifecycle\" target=\"_blank\">Click me for the live demo</a>"

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "## Loop\r\n\r\nThe following describes how to traverses in mustache.js and javascript.\r\n\r\n### First Option\r\n\r\n```js\r\nclass List extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    render () {\r\n        return `<div>\r\n                    <ul> \r\n                        {{#items}} \r\n                        <li id=\"{{id}}\">{{text}}</li> \r\n                        {{/items}}\r\n                    </ul>\r\n                </div>`;\r\n    }\r\n}\r\n\r\nOmi.render(new List({\r\n    items: [\r\n        {id: 1, text: 'Omi'},\r\n        {id: 2, text: 'dntzhang'},\r\n        {id: 3, text: 'AlloyTeam'}\r\n    ]\r\n}),\"body\");\r\n```\r\n\r\nMustache.js more detailed loop traversal use can see \r\n\r\nFor more details for traversal in mustache.js please view [https://github.com/janl/mustache.js#non-empty-lists](https://github.com/janl/mustache.js#non-empty-lists).\r\n\r\nFor example, it also support:\r\n\r\n- If each item of items is a string, you can directly use **{{.}}** to output each item\r\n- Call the defined function when looping\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=list\" target=\"_blank\">Click me for the live demo</a>\r\n\r\n### Second Option\r\n\r\nOf course, you can also use template string inside the `map`:\r\n\r\n```js\r\nclass List extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    render() {\r\n        return `<div>\r\n                    <ul>\r\n                    ${this.data.items.map(item =>\r\n                         `<li id=\"${item.id}\">${item.text}</li>`\r\n                    ).join('')}\r\n                    </ul>\r\n                </div>`;\r\n    }\r\n}\r\n\r\nOmi.render(new List({\r\n    items: [\r\n        {id: 1, text: 'Omi'},\r\n        {id: 2, text: 'dntzhang'},\r\n        {id: 3, text: 'AlloyTeam'}\r\n    ]\r\n}),\"body\");\r\n```\r\n\r\nYou will see the following page:\r\n\r\n![pv](http://images2015.cnblogs.com/blog/105416/201701/105416-20170122095724129-2059595233.png)\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=list2\" target=\"_blank\">Click me for the live demo</a>"

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "## Plugin\r\n\r\n[Omi](https://github.com/AlloyTeam/omi) is a componentized web framework. Then what is plugin?\r\n\r\nIt can be understood that the Omi plugin system can give the dom element some ability and can be associated with the instance of the components.\r\n\r\n### omi-drag\r\n\r\nLet's see this example:\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=plugin\" target=\"_blank\">Click me for the live deme</a>\r\n\r\n```js\r\nimport OmiDrag from './omi-drag.js';\r\n\r\nOmiDrag.init();\r\n\r\nclass App extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    render() {\r\n        return  `\r\n        <div>\r\n            <div omi-drag class=\"test\">Drag Me</div>\r\n        </div>\r\n        `;\r\n\r\n    }\r\n\r\n    style(){\r\n       return `\r\n        .test{\r\n            width:100px;\r\n            height:100px;\r\n            color:white;\r\n            line-height:90px;\r\n            text-align:center;\r\n            background-color:#00BFF3;\r\n        }\r\n        `\r\n    }\r\n}\r\n\r\nOmi.render(new App(),\"#container\");\r\n```\r\n\r\nAs shown above, by adding `omi-drag` attribute to the div, it can be dragged by the user using the mouse. We call omi-drag.js an omi plugin.\r\n\r\nIsn't it very convenient? So how did this omi-drag implement?\r\n\r\n如上面的代码所示，通过在div上标记omi-drag，这个div就能够被用户使用鼠标拖拽。我们称omi-drag.js为omi插件。\r\n是不是非常方便？那么这个omi-drag是怎么实现的？\r\n\r\n## Omi.extendPlugin\r\n\r\nCore method: Omi.extendPlugin( pluginName, handler )\r\n\r\nThe following code shows how to use `Omi.extendPlugin` to give dom the drap and drop ability:\r\n\r\n```js\r\n;(function () {\r\n\r\n    var OmiDrag = {};\r\n    var Omi = typeof require === 'function'\r\n        ? require('omi')\r\n        : window.Omi;\r\n\r\n    OmiDrag.init = function(){\r\n        Omi.extendPlugin('omi-drag',function(dom, instance){\r\n            dom.style.cursor='move';\r\n            var isMouseDown = false,\r\n                preX = null,\r\n                preY = null,\r\n                currentX = null,\r\n                currentY = null,\r\n                translateX = 0,\r\n                translateY = 0;\r\n\r\n            dom.addEventListener('mousedown',function(evt){\r\n                isMouseDown = true;\r\n                preX = evt.pageX;\r\n                preY = evt.pageY;\r\n                evt.stopPropagation();\r\n            },false);\r\n\r\n            window.addEventListener('mousemove',function(evt){\r\n                if(isMouseDown){\r\n                    currentX = evt.pageX;\r\n                    currentY = evt.pageY;\r\n                    if(preX != null){\r\n                        translateX += currentX - preX;\r\n                        translateY += currentY - preY;\r\n                        dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';\r\n                    }\r\n                    preX = currentX;\r\n                    preY = currentY;\r\n                    evt.preventDefault();\r\n                }\r\n            },false);\r\n\r\n            window.addEventListener('mouseup',function(){\r\n                isMouseDown = false;\r\n                preX = preY = currentX = currentY = null;\r\n            },false);\r\n        });\r\n    }\r\n\r\n    OmiDrag.destroy = function(){\r\n        delete Omi.plugins['omi-drag'];\r\n    };\r\n\r\n    if (typeof exports == \"object\") {\r\n        module.exports = OmiDrag;\r\n    } else if (typeof define == \"function\" && define.amd) {\r\n        define([], function(){ return OmiDrag });\r\n    } else {\r\n        window.OmiDrag = OmiDrag;\r\n    }\r\n\r\n})();\r\n```\r\n\r\nMethod: Omi.extendPlugin( pluginName, handler )\r\n\r\n`pluginName` is the name of the plugin.\r\n\r\n`handler` is the processor. The handler can get the dom which marked as the `pluginName` and the instance of the component.\r\n\r\nWith `Omi.extendPlugin`, we can give the dom some ability, and can also be associated with the component instance.\r\n\r\nThe above example is not associated with the instance, let's try it:\r\n\r\n## Associated with instance\r\n\r\nWe want to be able to listen to the `move` inside the component and perform a callback. As follows:\r\n\r\n```js\r\n...\r\n...\r\nmoveHandler(){\r\n    console.log('moving');\r\n}\r\n\r\nrender() {\r\n    return  `\r\n    <div>\r\n        <div omi-drag class=\"test\">Drag Me</div>\r\n    </div>\r\n    `;\r\n}\r\n...\r\n```\r\n\r\nIn this case, the `moveHandler` will be continually executed while dragging. We can modify some code to solve this issue:\r\n\r\n```js\r\n...\r\nwindow.addEventListener('mousemove',function(evt){\r\n    if(isMouseDown){\r\n        currentX = evt.pageX;\r\n        currentY = evt.pageY;\r\n        if(preX != null){\r\n            translateX += currentX - preX;\r\n            translateY += currentY - preY;\r\n            dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';\r\n        }\r\n        preX = currentX;\r\n        preY = currentY;\r\n        evt.preventDefault();\r\n        instance.moveHandler(evt);\r\n    }\r\n},false);\r\n```\r\n\r\nWe add `instance.moveHandler(evt)` method to execute the `moveHandler` method of component instance.\r\n\r\nThis is how associated with instance works.\r\n\r\nHowever, this may still have an issue if we add `omi-drag` to a list of `div`:\r\n\r\n```js\r\n...\r\nrender() {\r\n    return  `\r\n    <div>\r\n        <div omi-drag class=\"test\">Drag Me</div>\r\n        <div omi-drag class=\"test\">Drag Me</div>\r\n    </div>\r\n    `;\r\n}\r\n...\r\n```\r\n\r\nUsually each of our `omi-drag` can correspond to a callback function, such as:\r\n\r\n```js\r\n...\r\n...\r\nmoveHandlerA(){\r\n    console.log('moving');\r\n}\r\n\r\nmoveHandlerB(){\r\n    console.log('moving');\r\n}\r\n\r\nrender() {\r\n    return  `\r\n    <div>\r\n        <div omi-drag class=\"test\">Drag Me A</div>\r\n        <div omi-drag class=\"test\">Drag Me B</div>\r\n    </div>\r\n    `;\r\n}\r\n...\r\n```\r\n\r\nHow to achieve this? We can pass the data to the plugin via dom.\r\n\r\n## Passing data\r\n\r\nLet's see the final code:\r\n\r\n```js\r\n...\r\n...\r\nmoveHandlerA(){\r\n    console.log('moving');\r\n}\r\n\r\nmoveHandlerB(){\r\n    console.log('moving');\r\n}\r\n\r\nrender() {\r\n    return  `\r\n    <div>\r\n        <div omi-drag class=\"test\" dragMove=\"moveHandlerA\" >Drag Me A</div>\r\n        <div omi-drag class=\"test\" dragMove=\"moveHandlerB\" >Drag Me B</div>\r\n    </div>\r\n    `;\r\n}\r\n...\r\n```\r\n\r\nWhere `omi-drag` modified:\r\n\r\n```js\r\n...\r\nvar handlerName = dom.getAttribute('dragMove');\r\n\r\nwindow.addEventListener('mousemove',function(evt){\r\n    if(isMouseDown){\r\n        currentX = evt.pageX;\r\n        currentY = evt.pageY;\r\n        if(preX != null){\r\n            translateX += currentX - preX;\r\n            translateY += currentY - preY;\r\n            dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';\r\n        }\r\n        preX = currentX;\r\n        preY = currentY;\r\n        evt.preventDefault();\r\n        instance[handlerName](evt);\r\n    }\r\n},false);\r\n...\r\n```\r\n\r\n- We use `var handlerName = dom.getAttribute('dragMove')` to get the `dragMove` of dom\r\n- We use `instance[handlerName](evt)` to execute the method\r\n\r\n<a href=\"http://alloyteam.github.io/omi/website/redirect.html?type=plugin\" target=\"_blank\">Click me for the live demo</a>\r\n\r\n## More plugins\r\n\r\n* [omi-finger](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-finger) The [AlloyFinger](https://github.com/AlloyTeam/AlloyFinger) plugin for Omi, which support touch events and gustures\r\n* [omi-transform](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-transform) The [transformjs](http://alloyteam.github.io/AlloyTouch/transformjs/) plugin for Omi, which can easily set CSS3 Transform to DOM\r\n* [omi-touch](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-touch) The [AlloyTouch](https://github.com/AlloyTeam/AlloyTouch) plugin for Omi. The touch movement solution for Omi (support touch scroll, rotate, flip, select, etc.)\r\n* [omi-jquery-date-picker](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-jquery-date-picker) The date picker plugin for Omi, which support choose any time zone\r\n"

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "## Templates\r\n\r\nThere are three types of Omi. omi.js and omi.lite.js is for web side.\r\n\r\n- omi.js has a built-in [mustache.js](https://github.com/janl/mustache.js) as the template engine\r\n- omi.lite.js doesn't have any template engines\r\n\r\nOmi does not force developers to use mustache.js, you can use any template engine based on business scenarios or do not use any template engines.\r\n\r\nHow to use other template engines? Let's see the [artTemplate](https://github.com/aui/artTemplate) example.\r\n\r\n### Use artTemplate\r\n\r\n```js\r\nOmi.template = function(tpl, data){\r\n    return artTemplate.compile(tpl)(data);\r\n}\r\n```\r\n\r\nWe need to rewrite the `Omi.template` method, the `tpl` is the incoming template, the `data` is the required data for the template, and the return value is HTML.\r\n\r\nAfter rewriting, you can use the artTemplate syntax in `render`, such as:\r\n\r\n```js\r\nclass List extends Omi.Component {\r\n    constructor(data) {\r\n        super(data);\r\n    }\r\n\r\n    style () {\r\n        return `\r\n        h1 { color:red; }\r\n        li{ color:green;}\r\n        `;\r\n    }\r\n\r\n    render () {\r\n        return `<h1>{{title}}</h1>\r\n                <ul>\r\n                    {{each list as value i}}\r\n                    <li># {{i + 1}} ：{{value}}</li>\r\n                    {{/each}}\r\n                </ul>`;\r\n    }\r\n}\r\n```\r\n\r\n### Links\r\n\r\n* [Demo Link](http://alloyteam.github.io/omi/example/artTemplate/)\r\n* [Source Code](https://github.com/AlloyTeam/omi/tree/master/example/artTemplate)"

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "## Thinking in Omi\r\n\r\nOmi is based on object-oriented programming, with plugin system.\r\n\r\nThe traditional one-way data flow or the event-throwing component communicating can increase the stability of the system, but it loses it's flexibility. To a certain extent also reduced the component reusing.\r\n\r\nObject-oriented system has an other logical layer, which let you control the instance of components. The logic between instances build the entire program.\r\n\r\nThen the issues like communication, reusing and logics between components are all solved.\r\n\r\n\r\nPlus, the component is also more single duty, more loosely coupled.\r\n\r\nFor functional programming, imperative programming and object-oriented programming, we can sum up the following list:\r\n\r\n- Imperative programming is well understood, we use loop and if-else condition to control processes, it emphasize the process of execution\r\n- Imperative programming is hardware friendly, easy to run, but hard to design complex program\r\n- Functional programming is all about input and output, not the process of execution\r\n- Functional programming advocates multiple simple execution units into complex operations\r\n- Object-oriented programming uses objects as the basic unit of the program, with more reusability, flexibility, and extensibility\r\n\r\nWhat kind of language is JavaScript? We have `class` in ES6+, so is JavaScript object-oriented language?\r\n\r\nJavaScript can pass a function as a argumant, so is JavaScript a functional language?\r\n\r\nThere are no right answer, it depands on how you use JavaScript.\r\n\r\nIt's free to chooce, you can use functional programming framework like React, or object-oriented framework like Omi.  \r\n\r\n### Functional Programming VS Object-Oriented Programming\r\n\r\nIn the UI component framework scope, functional programming is represented by React, while Omi belongs to object-oriented programming.\r\n\r\nSo what are their strengths and weaknesses? The following is a comparison (in fact, functional programming and object-oriented programming comparison):\r\n\r\n|    | React        | Omi  |\r\n| ------------- |:-------------:|:-----:|\r\n| Component communication  | ★★★★☆| ★★★★★ |\r\n| Stability    | ★★★★★    |   ★★★★☆ |\r\n| Flexibility  | ★★★★☆| ★★★★★ |\r\n| Scalability | ★★★★☆     |   ★★★★★ |\r\n| Testability | ★★★★★     |   ★★★★☆ |\r\n| File size | ★★★☆☆    |   ★★★★★ |\r\n| Features | ★★★☆☆    |   ★★★★☆ |\r\n| DOM performance | ★★★★★    |   ★★★★☆ |\r\n| Animation performance | ★★★★☆    |   ★★★★★ |\r\n| Abstract complexity | ★★★★☆    |   ★★★★★ |\r\n| Asynchronous programming | ★★★★★    |   ★★★★☆ |\r\n\r\nAs we can see, we can not have it both ways. Object-oriented programming is more reusable, flexible and scalable, the problem is more difficult to test.\r\n\r\nSpecifically, if the functional programming, the test area is state1 + state2 + ... + stateN; in object-oriented programming, the test area is state1 × event1 + state2 × event2 + ... + stateN × eventN.\r\n\r\nIn summary, it is more recommended to use the object-oriented programming to build UI component framework.\r\n\r\n<hr/>\r\n\r\n### The end. Thanks for reading. [Let's start the Omi journey](https://github.com/AlloyTeam/omi)!\r\n"

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _omi = __webpack_require__(2);

	var _omi2 = _interopRequireDefault(_omi);

	var _index = __webpack_require__(38);

	var _index2 = _interopRequireDefault(_index);

	var _config = __webpack_require__(4);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_omi2.default.makeHTML('List', _index2.default);

	var Sidebar = function (_Omi$Component) {
	    _inherits(Sidebar, _Omi$Component);

	    function Sidebar(data) {
	        _classCallCheck(this, Sidebar);

	        return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, data));
	    }

	    _createClass(Sidebar, [{
	        key: 'install',
	        value: function install() {
	            this.data.items = _config2.default['menus'][this.data.lan];
	            this.data.height = window.innerHeight - 45;
	        }
	    }, {
	        key: 'style',
	        value: function style() {
	            return __webpack_require__(41);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return __webpack_require__(42);
	        }
	    }]);

	    return Sidebar;
	}(_omi2.default.Component);

	exports.default = Sidebar;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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

	var tpl = __webpack_require__(39);
	var css = __webpack_require__(40);

	var List = function (_Omi$Component) {
	    _inherits(List, _Omi$Component);

	    function List(data) {
	        _classCallCheck(this, List);

	        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, data));

	        _omi2.default.mixIndexToArray(_this.data.list);
	        _this.data.currentIndex = 0;
	        var self = _this;
	        _this.data.isCurrent = function () {
	            return this.index === self.data.currentIndex && self.data.active;
	        };
	        return _this;
	    }

	    _createClass(List, [{
	        key: 'goto',
	        value: function goto(name, index) {
	            var _this2 = this;

	            _omi2.default.get('content').data.name = name;
	            _omi2.default.get('content').update();
	            this.data.currentIndex = index;
	            this.parent.children.forEach(function (child, index) {
	                child.data.active = false;
	                if (child.id === _this2.id) {
	                    _omi2.default.get('pager').activeIndex = index;
	                    child.data.active = true;
	                }
	                child.update();
	            });
	            _omi2.default.get('pager').currentIndex = index;
	            _omi2.default.get('pager').update();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return tpl;
	        }
	    }, {
	        key: 'style',
	        value: function style() {
	            return css;
	        }
	    }]);

	    return List;
	}(_omi2.default.Component);

	exports.default = List;

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<ul>    <li class=\"title\">{{title}}</li>    {{#list}}    <li>        <a href=\"#\"  onclick=\"goto(\'{{md}}\',{{index}})\" {{#isCurrent}}class=\"current\"{{/isCurrent}}>{{name}}</a>    </li>    {{/list}}</ul>"

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "li.title{    font-size: 16px;    font-weight: bold;    margin-bottom:10px;    margin-top:10px;    text-indent: 23px;}li{    margin-bottom:3px;    text-indent: 33px;}li a{    display:block;    font-size:14px;    height:20px;    line-height:20px;    color: #666;}li a.current{    background-color:#c3d4fc;    color:white;}li a:hover{    background-color:#b3d4fc;    color:white;}"

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "@media only screen and (max-width: 768px) {    .list{        transform: translateX(-100%);        background-color:white;        -moz-transition: all .6s ease;        -o-transition: all .6s ease;        -webkit-transition: all .6s ease;        transition: all .6s ease;    }    .list.show {        -moz-transform: translateX(0%) translateZ(0);        -ms-transform: translateX(0%) translateZ(0);        -o-transform: translateX(0%) translateZ(0);        -webkit-transform: translateX(0%) translateZ(0);        transform: translateX(0%) translateZ(0);    }}.list{    width:200px;    text-indent: 20px;    border-right: 1px solid #eee;    overflow-x: hidden;    overflow-y: auto;    position:fixed;    top:45px;}.version{    height:20px;}"

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<div class=\"list\" style=\"height:{{height}}px;\">    <div class=\"version\"></div>    {{#items}}<List group-data=\"data.items\" /> {{/items}}</div>"

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _omi = __webpack_require__(2);

	var _omi2 = _interopRequireDefault(_omi);

	var _omiFinger = __webpack_require__(44);

	var _omiFinger2 = _interopRequireDefault(_omiFinger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var tpl = __webpack_require__(46);
	var css = __webpack_require__(47);

	_omiFinger2.default.init();

	var Head = function (_Omi$Component) {
	    _inherits(Head, _Omi$Component);

	    function Head(data) {
	        _classCallCheck(this, Head);

	        return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).call(this, data));
	    }

	    _createClass(Head, [{
	        key: 'install',
	        value: function install() {
	            var _this2 = this;

	            this.data.isEnLan = this.data.lan === 'en';
	            document.body.addEventListener('touchend', function () {
	                _this2.removeClass(_omi2.default.get('sidebar').node, 'show');
	            }, false);
	        }
	    }, {
	        key: 'toggleMenus',
	        value: function toggleMenus(evt) {
	            this.toggleClass(_omi2.default.get('sidebar').node, 'show');
	            evt.stopPropagation();
	        }
	    }, {
	        key: 'handleTouchEnd',
	        value: function handleTouchEnd(evt) {
	            evt.stopPropagation();
	        }
	    }, {
	        key: 'toggleClass',
	        value: function toggleClass(element, className) {
	            if (!element || !className) {
	                return;
	            }

	            var classString = element.className,
	                nameIndex = classString.indexOf(className);
	            if (nameIndex == -1) {
	                classString += ' ' + className;
	            } else {
	                classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
	            }
	            element.className = classString;
	        }
	    }, {
	        key: 'removeClass',
	        value: function removeClass(element, className) {
	            var classString = element.className,
	                nameIndex = classString.indexOf(className);
	            if (nameIndex !== -1) {
	                classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
	            }
	            element.className = classString;
	        }
	    }, {
	        key: 'style',
	        value: function style() {
	            return css;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return tpl;
	        }
	    }]);

	    return Head;
	}(_omi2.default.Component);

	exports.default = Head;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *  omi-finger v0.1.3 by dntzhang
	 *  Omi / AlloyFinger integration. Support touch and gesture events in your Omi project.
	 *  Github: https://github.com/AlloyTeam/omi
	 *  MIT Licensed.
	 */

	;(function () {

	    var OmiFinger = {};
	    var AlloyFinger =  true
	        ? __webpack_require__(45)
	        : window.AlloyFinger;
	    var Omi =  true
	        ? __webpack_require__(2)
	        : window.Omi;

	    var noop = function(){

	    };

	    var getHandler = function(name, dom, instance) {
	        var value = dom.getAttribute(name);
	        if (value === null) {
	            return noop;
	        }else{
	            return instance[value].bind(instance);
	        }
	    };


	    OmiFinger.init = function(){
	        Omi.extendPlugin('omi-finger',function(dom, instance){
	            if(!instance.alloyFingerInstances)instance.alloyFingerInstances = [];
	            var len = instance.alloyFingerInstances.length;
	            var i = 0 ;
	            for(;i<len;i++){
	                if(instance.alloyFingerInstances[i].dom===dom){
	                    instance.alloyFingerInstances[i].fg.destroy();
	                    instance.alloyFingerInstances.splice(i,1);
	                    break;
	                }
	            }
	            var alloyFinger = new AlloyFinger(dom,{
	                touchStart: getHandler('touchStart', dom, instance),
	                touchMove: getHandler('touchMove', dom, instance),
	                touchEnd: getHandler('touchEnd', dom, instance),
	                touchCancel: getHandler('touchCancel', dom, instance),
	                multipointStart: getHandler('multipointStart', dom, instance),
	                multipointEnd: getHandler('multipointEnd', dom, instance),
	                tap: getHandler('tap', dom, instance),
	                doubleTap: getHandler('doubleTap', dom, instance),
	                longTap: getHandler('longTap', dom, instance),
	                singleTap: getHandler('singleTap', dom, instance),
	                rotate: getHandler('rotate', dom, instance),
	                pinch: getHandler('pinch', dom, instance),
	                pressMove: getHandler('pressMove', dom, instance),
	                swipe: getHandler('swipe', dom, instance)

	            });
	            instance.alloyFingerInstances.push({fg:alloyFinger,dom:dom});
	        });
	    }

	    OmiFinger.destroy = function(){
	        delete Omi.plugins['omi-finger'];
	    };

	    if (true) {
	        module.exports = OmiFinger;
	    } else if (typeof define == "function" && define.amd) {
	        define([], function(){ return OmiFinger });
	    } else {
	        window.OmiFinger = OmiFinger;
	    }

	})();

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* AlloyFinger v0.1.6
	 * By dntzhang
	 * Github: https://github.com/AlloyTeam/AlloyFinger
	 */
	; (function () {
	    function getLen(v) {
	        return Math.sqrt(v.x * v.x + v.y * v.y);
	    }

	    function dot(v1, v2) {
	        return v1.x * v2.x + v1.y * v2.y;
	    }

	    function getAngle(v1, v2) {
	        var mr = getLen(v1) * getLen(v2);
	        if (mr === 0) return 0;
	        var r = dot(v1, v2) / mr;
	        if (r > 1) r = 1;
	        return Math.acos(r);
	    }

	    function cross(v1, v2) {
	        return v1.x * v2.y - v2.x * v1.y;
	    }

	    function getRotateAngle(v1, v2) {
	        var angle = getAngle(v1, v2);
	        if (cross(v1, v2) > 0) {
	            angle *= -1;
	        }

	        return angle * 180 / Math.PI;
	    }

	    var HandlerAdmin = function(el) {
	        this.handlers = [];
	        this.el = el;
	    };

	    HandlerAdmin.prototype.add = function(handler) {
	        this.handlers.push(handler);
	    }

	    HandlerAdmin.prototype.del = function(handler) {
	        if(!handler) this.handlers = [];

	        for(var i=this.handlers.length; i>=0; i--) {
	            if(this.handlers[i] === handler) {
	                this.handlers.splice(i, 1);
	            }
	        }
	    }

	    HandlerAdmin.prototype.dispatch = function() {
	        for(var i=0,len=this.handlers.length; i<len; i++) {
	            var handler = this.handlers[i];
	            if(typeof handler === 'function') handler.apply(this.el, arguments);
	        }
	    }

	    function wrapFunc(el, handler) {
	        var handlerAdmin = new HandlerAdmin(el);
	        handlerAdmin.add(handler);

	        return handlerAdmin;
	    }

	    var AlloyFinger = function (el, option) {

	        this.element = typeof el == 'string' ? document.querySelector(el) : el;

	        this.start = this.start.bind(this);
	        this.move = this.move.bind(this);
	        this.end = this.end.bind(this);
	        this.cancel = this.cancel.bind(this);
	        this.element.addEventListener("touchstart", this.start, false);
	        this.element.addEventListener("touchmove", this.move, false);
	        this.element.addEventListener("touchend", this.end, false);
	        this.element.addEventListener("touchcancel", this.cancel, false);

	        this.preV = { x: null, y: null };
	        this.pinchStartLen = null;
	        this.scale = 1;
	        this.isDoubleTap = false;

	        var noop = function () { };

	        this.rotate = wrapFunc(this.element, option.rotate || noop);
	        this.touchStart = wrapFunc(this.element, option.touchStart || noop);
	        this.multipointStart = wrapFunc(this.element, option.multipointStart || noop);
	        this.multipointEnd = wrapFunc(this.element, option.multipointEnd || noop);
	        this.pinch = wrapFunc(this.element, option.pinch || noop);
	        this.swipe = wrapFunc(this.element, option.swipe || noop);
	        this.tap = wrapFunc(this.element, option.tap || noop);
	        this.doubleTap = wrapFunc(this.element, option.doubleTap || noop);
	        this.longTap = wrapFunc(this.element, option.longTap || noop);
	        this.singleTap = wrapFunc(this.element, option.singleTap || noop);
	        this.pressMove = wrapFunc(this.element, option.pressMove || noop);
	        this.touchMove = wrapFunc(this.element, option.touchMove || noop);
	        this.touchEnd = wrapFunc(this.element, option.touchEnd || noop);
	        this.touchCancel = wrapFunc(this.element, option.touchCancel || noop);

	        this.delta = null;
	        this.last = null;
	        this.now = null;
	        this.tapTimeout = null;
	        this.singleTapTimeout = null;
	        this.longTapTimeout = null;
	        this.swipeTimeout = null;
	        this.x1 = this.x2 = this.y1 = this.y2 = null;
	        this.preTapPosition = { x: null, y: null };
	    };

	    AlloyFinger.prototype = {
	        start: function (evt) {
	            if (!evt.touches) return;
	            this.now = Date.now();
	            this.x1 = evt.touches[0].pageX;
	            this.y1 = evt.touches[0].pageY;
	            this.delta = this.now - (this.last || this.now);
	            this.touchStart.dispatch(evt);
	            if (this.preTapPosition.x !== null) {
	                this.isDoubleTap = (this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30);
	            }
	            this.preTapPosition.x = this.x1;
	            this.preTapPosition.y = this.y1;
	            this.last = this.now;
	            var preV = this.preV,
	                len = evt.touches.length;
	            if (len > 1) {
	                this._cancelLongTap();
	                this._cancelSingleTap();
	                var v = { x: evt.touches[1].pageX - this.x1, y: evt.touches[1].pageY - this.y1 };
	                preV.x = v.x;
	                preV.y = v.y;
	                this.pinchStartLen = getLen(preV);
	                this.multipointStart.dispatch(evt);
	            }
	            this.longTapTimeout = setTimeout(function () {
	                this.longTap.dispatch(evt);
	            }.bind(this), 750);
	        },
	        move: function (evt) {
	            if (!evt.touches) return;
	            var preV = this.preV,
	                len = evt.touches.length,
	                currentX = evt.touches[0].pageX,
	                currentY = evt.touches[0].pageY;
	            this.isDoubleTap = false;
	            if (len > 1) {
	                var v = { x: evt.touches[1].pageX - currentX, y: evt.touches[1].pageY - currentY };

	                if (preV.x !== null) {
	                    if (this.pinchStartLen > 0) {
	                        evt.scale = getLen(v) / this.pinchStartLen;
	                        this.pinch.dispatch(evt);
	                    }

	                    evt.angle = getRotateAngle(v, preV);
	                    this.rotate.dispatch(evt);
	                }
	                preV.x = v.x;
	                preV.y = v.y;
	            } else {
	                if (this.x2 !== null) {
	                    evt.deltaX = currentX - this.x2;
	                    evt.deltaY = currentY - this.y2;

	                } else {
	                    evt.deltaX = 0;
	                    evt.deltaY = 0;
	                }
	                this.pressMove.dispatch(evt);
	            }

	            this.touchMove.dispatch(evt);

	            this._cancelLongTap();
	            this.x2 = currentX;
	            this.y2 = currentY;
	            if (len > 1) {
	                evt.preventDefault();
	            }
	        },
	        end: function (evt) {
	            if (!evt.changedTouches) return;
	            this._cancelLongTap();
	            var self = this;
	            if (evt.touches.length < 2) {
	                this.multipointEnd.dispatch(evt);
	            }
	            this.touchEnd.dispatch(evt);
	            //swipe
	            if ((this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
	                (this.y2 && Math.abs(this.y1 - this.y2) > 30)) {
	                evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
	                this.swipeTimeout = setTimeout(function () {
	                    self.swipe.dispatch(evt);

	                }, 0)
	            } else {
	                this.tapTimeout = setTimeout(function () {
	                    self.tap.dispatch(evt);
	                    // trigger double tap immediately
	                    if (self.isDoubleTap) {
	                        self.doubleTap.dispatch(evt);
	                        clearTimeout(self.singleTapTimeout);
	                        self.isDoubleTap = false;
	                    }
	                }, 0)

	                if (!self.isDoubleTap) {
	                    self.singleTapTimeout = setTimeout(function () {
	                        self.singleTap.dispatch(evt);
	                    }, 250);
	                }
	            }

	            this.preV.x = 0;
	            this.preV.y = 0;
	            this.scale = 1;
	            this.pinchStartLen = null;
	            this.x1 = this.x2 = this.y1 = this.y2 = null;
	        },
	        cancel: function (evt) {
	            clearTimeout(this.singleTapTimeout);
	            clearTimeout(this.tapTimeout);
	            clearTimeout(this.longTapTimeout);
	            clearTimeout(this.swipeTimeout);
	            this.touchCancel.dispatch(evt);
	        },
	        _cancelLongTap: function () {
	            clearTimeout(this.longTapTimeout);
	        },
	        _cancelSingleTap: function () {
	            clearTimeout(this.singleTapTimeout);
	        },
	        _swipeDirection: function (x1, x2, y1, y2) {
	            return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
	        },

	        on: function(evt, handler) {
	            if(this[evt]) {
	                this[evt].add(handler);
	            }
	        },

	        off: function(evt, handler) {
	            if(this[evt]) {
	                this[evt].del(handler);
	            }
	        },

	        destroy: function() {
	            if(this.singleTapTimeout) clearTimeout(this.singleTapTimeout);
	            if(this.tapTimeout) clearTimeout(this.tapTimeout);
	            if(this.longTapTimeout) clearTimeout(this.longTapTimeout);
	            if(this.swipeTimeout) clearTimeout(this.swipeTimeout);

	            this.element.removeEventListener("touchstart", this.start);
	            this.element.removeEventListener("touchmove", this.move);
	            this.element.removeEventListener("touchend", this.end);
	            this.element.removeEventListener("touchcancel", this.cancel);

	            this.rotate.del();
	            this.touchStart.del();
	            this.multipointStart.del();
	            this.multipointEnd.del();
	            this.pinch.del();
	            this.swipe.del();
	            this.tap.del();
	            this.doubleTap.del();
	            this.longTap.del();
	            this.singleTap.del();
	            this.pressMove.del();
	            this.touchMove.del();
	            this.touchEnd.del();
	            this.touchCancel.del();

	            this.preV = this.pinchStartLen = this.scale = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = null;

	            return null;
	        }
	    };

	    if (true) {
	        module.exports = AlloyFinger;
	    } else {
	        window.AlloyFinger = AlloyFinger;
	    }
	})();


/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"head bord-btm\">    <div class=\"m_menu\" omi-finger tap=\"toggleMenus\" touchEnd=\"handleTouchEnd\"> <img src=\"./component/head/menu.png\" alt=\"\" /></div>    <div class=\"logo_box\">        <a href=\"https://github.com/AlloyTeam/omi\">Omi</a>    </div>    <ul class=\"menu\">        <li class=\"github_li\"><a href=\"https://github.com/AlloyTeam/omi\">Github</a>        <li><a href=\"http://alloyteam.github.io/omi/example/playground/\">Playground</a></li>        <li><a href=\"https://github.com/AlloyTeam/omi/tree/master/docs\">[Edit the Docs]</a></li>        {{#isEnLan}}        <li class=\"github_li m_show\"><a href=\"docs-cn.html\">中文</a>            {{/isEnLan}}            {{^isEnLan}}        <li class=\"github_li m_show\"><a href=\"docs-en.html\">English</a>            {{/isEnLan}}        </li>    </ul></div>"

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = ".head{    position:fixed;    height:45px;    line-height: 45px;    border-bottom: 1px solid #eee;    width:100%;    background-color:#303030;    z-index:100;}ul,li{    display: inline-block;}.logo_box{    width:100px;    display: inline-block;    text-align:center;    line-height: 60px;}.menu a,.logo_box a{    display: inline-block;    height:45px;    color:#ddd;}.menu{    position: absolute;    right:20px;}.menu li{    margin-left:15px;}.logo_box a{    font-size: 34px;    font-weight: bold;    color: #00bff3;    padding: 0px 15px;    line-height: 45px;    cursor: pointer;}.menu a:hover{    color: white;}.m_menu{    position:fixed;    display:none;}@media only screen and (max-width: 768px) {    .menu li{        display:none;    }    .menu .m_show{        display:block;    }    .logo_box{        display:inline-block;    }    .head{        text-align:center;    }    .m_menu{        top:0;        left:0;        display:block;        width:50px;        height:50px;        padding-top: 6px;    }    .m_menu img{        width:30px;    }}"

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _omi = __webpack_require__(2);

	var _omi2 = _interopRequireDefault(_omi);

	var _config = __webpack_require__(4);

	var _config2 = _interopRequireDefault(_config);

	var _omiFinger = __webpack_require__(44);

	var _omiFinger2 = _interopRequireDefault(_omiFinger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_omiFinger2.default.init();

	var Pager = function (_Omi$Component) {
	    _inherits(Pager, _Omi$Component);

	    function Pager(data) {
	        _classCallCheck(this, Pager);

	        var _this = _possibleConstructorReturn(this, (Pager.__proto__ || Object.getPrototypeOf(Pager)).call(this, data));

	        _this.activeIndex = 0;
	        _this.currentIndex = 0;
	        return _this;
	    }

	    _createClass(Pager, [{
	        key: 'updatePager',
	        value: function updatePager() {
	            this.data.preMd = null;
	            this.data.preName = null;
	            this.data.nextMd = null;
	            this.data.nextName = null;
	            var item = _config2.default.menus[this.data.lan][this.activeIndex];

	            var pre = item.list[this.currentIndex - 1];
	            if (pre) {
	                this.data.preMd = pre.md;
	                this.data.preName = pre.name;
	            }
	            var next = item.list[this.currentIndex + 1];
	            if (next) {
	                this.data.nextMd = next.md;
	                this.data.nextName = next.name;
	            }
	        }
	    }, {
	        key: 'goto',
	        value: function goto(name, dir) {
	            var sidebar = _omi2.default.get('sidebar');
	            if (dir === 'next') {
	                sidebar.children[this.activeIndex].goto(name, ++this.currentIndex);
	            } else {
	                sidebar.children[this.activeIndex].goto(name, --this.currentIndex);
	            }
	            this.update();
	        }
	    }, {
	        key: 'handleTap',
	        value: function handleTap(evt) {
	            var dir = evt.target.getAttribute('data-dir');
	            var name = evt.target.getAttribute('data-name');
	            this.goto(name, dir);
	        }
	    }, {
	        key: 'isMobile',
	        value: function isMobile() {
	            var browser = {
	                versions: function () {
	                    var u = navigator.userAgent,
	                        app = navigator.appVersion;
	                    return { //移动终端浏览器版本信息
	                        trident: u.indexOf('Trident') > -1, //IE内核
	                        presto: u.indexOf('Presto') > -1, //opera内核
	                        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	                        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
	                        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
	                        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	                        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
	                        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
	                        iPad: u.indexOf('iPad') > -1, //是否iPad
	                        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
	                    };
	                }(),
	                language: (navigator.browserLanguage || navigator.language).toLowerCase()
	            };

	            if (browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad) {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.updatePager();
	            if (this.isMobile()) {
	                return '\n    <div class="pager">\n      {{#preName}} <a class="pre" href="#" omi-finger tap="handleTap" data-dir="pre" data-name="{{preMd}}">\u2190{{preName}}</a>{{/preName}}\n      {{#nextName}}<a class="next" href="#" omi-finger tap="handleTap" data-dir="next" data-name="{{nextMd}}">{{nextName}}\u2192</a> {{/nextName}}\n    </div>';
	            } else {
	                return '\n    <div class="pager">\n        {{#preName}} <a class="pre" href="#" onclick="goto(\'{{preMd}}\',\'pre\')">\u2190{{preName}}</a>{{/preName}}\n        {{#nextName}}<a class="next" href="#"  onclick="goto(\'{{nextMd}}\',\'next\')">{{nextName}}\u2192</a> {{/nextName}}\n    </div>';
	            }
	        }
	    }, {
	        key: 'style',
	        value: function style() {
	            return __webpack_require__(49);
	        }
	    }]);

	    return Pager;
	}(_omi2.default.Component);

	exports.default = Pager;

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = ".pager {    width:85%;    height:80px;    line-height:80px;    position: relative;    font-size:16px;}@media only screen and (max-width: 768px) {    .pager {        width:100%;    }}.pre{    position: absolute;    left:10px;    top:10px;}.next{    position: absolute;    right:10px;    top:10px;}"

/***/ }
]);
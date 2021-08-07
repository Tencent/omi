/*!
 * ====================================================
 * Hot Box UI - v1.0.15 - 2017-05-05
 * https://github.com/fex-team/hotbox
 * GitHub: https://github.com/fex-team/hotbox.git 
 * Copyright (c) 2017 Baidu FEX; Licensed BSD
 * ====================================================
 */

(function () {
var _p = {
    r: function(index) {
        if (_p[index].inited) {
            return _p[index].value;
        }
        if (typeof _p[index].value === "function") {
            var module = {
                exports: {}
            }, returnValue = _p[index].value(null, module.exports, module);
            _p[index].inited = true;
            _p[index].value = returnValue;
            if (returnValue !== undefined) {
                return returnValue;
            } else {
                for (var key in module.exports) {
                    if (module.exports.hasOwnProperty(key)) {
                        _p[index].inited = true;
                        _p[index].value = module.exports;
                        return module.exports;
                    }
                }
            }
        } else {
            _p[index].inited = true;
            return _p[index].value;
        }
    }
};

//src/expose.js
_p[0] = {
    value: function(require, exports, module) {
        module.exports = window.HotBox = _p.r(1);
    }
};

//src/hotbox.js
_p[1] = {
    value: function(require, exports, module) {
        var key = _p.r(2);
        var KeyControl = _p.r(3);
        /**** Dom Utils ****/
        function createElement(name) {
            return document.createElement(name);
        }
        function setElementAttribute(element, name, value) {
            element.setAttribute(name, value);
        }
        function getElementAttribute(element, name) {
            return element.getAttribute(name);
        }
        function addElementClass(element, name) {
            element.classList.add(name);
        }
        function removeElementClass(element, name) {
            element.classList.remove(name);
        }
        function appendChild(parent, child) {
            parent.appendChild(child);
        }
        /*******************/
        var IDLE = HotBox.STATE_IDLE = "idle";
        var div = "div";
        /**
     * Simple Formatter
     */
        function format(template, args) {
            if (typeof args != "object") {
                args = [].slice.apply(arguments, 1);
            }
            return String(template).replace(/\{(\w+)\}/g, function(match, name) {
                return args[name] || match;
            });
        }
        /**
     * Hot Box Class
     */
        function HotBox($container) {
            if (typeof $container == "string") {
                $container = document.querySelector($container);
            }
            if (!$container || !($container instanceof HTMLElement)) {
                throw new Error("No container or not invalid container for hot box");
            }
            // 创建 HotBox Dom 解构
            var $hotBox = createElement(div);
            addElementClass($hotBox, "hotbox");
            appendChild($container, $hotBox);
            // 保存 Dom 解构和父容器
            this.$element = $hotBox;
            this.$container = $container;
            // 标示是否是输入法状态
            this.isIME = false;
            /**
         * @Desc: 增加一个browser用于判断浏览器类型，方便解决兼容性问题
         * @Editor: Naixor
         * @Date: 2015.09.14
         */
            this.browser = {
                sg: /se[\s\S]+metasr/.test(navigator.userAgent.toLowerCase())
            };
            /*
        * added by zhangbobell
        * 2015.09.22
        * 增加父状态机，以解决在父 FSM 下状态控制的问题，最好的解决办法是增加一个函数队列
        * 将其中的函数一起执行。//TODO
        * */
            this._parentFSM = {};
            // 记录位置
            this.position = {};
            // 已定义的状态（string => HotBoxState）
            var _states = {};
            // 主状态（HotBoxState）
            var _mainState = null;
            // 当前状态（HotBoxState）
            var _currentState = IDLE;
            // 当前状态堆栈
            var _stateStack = [];
            // 实例引用
            var _this = this;
            var _controler;
            /**
         * Controller: {
         *     constructor(hotbox: HotBox),
         *     active: () => void
         * }
         */
            function _control(Controller) {
                if (_controler) {
                    _controler.active();
                    return;
                }
                Controller = Controller || KeyControl;
                _controler = new Controller(_this);
                _controler.active();
                $hotBox.onmousedown = function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                };
                return _this;
            }
            function _dispatchKey(e) {
                var type = e.type.toLowerCase();
                e.keyHash = key.hash(e);
                e.isKey = function(keyExpression) {
                    if (!keyExpression) return false;
                    var expressions = keyExpression.split(/\s*\|\s*/);
                    while (expressions.length) {
                        if (e.keyHash == key.hash(expressions.shift())) return true;
                    }
                    return false;
                };
                e[type] = true;
                // Boot: keyup and activeKey pressed on IDLE, active main state.
                if (e.keyup && _this.activeKey && e.isKey(_this.activeKey) && _currentState == IDLE && _mainState) {
                    _activeState("main", {
                        x: $container.clientWidth / 2,
                        y: $container.clientHeight / 2
                    });
                    return;
                }
                var handleState = _currentState == IDLE ? _mainState : _currentState;
                if (handleState) {
                    var handleResult = handleState.handleKeyEvent(e);
                    if (typeof _this.onkeyevent == "function") {
                        e.handleResult = handleResult;
                        _this.onkeyevent(e, handleResult);
                    }
                    return handleResult;
                }
                return null;
            }
            function _addState(name) {
                if (!name) return _currentState;
                if (name == IDLE) {
                    throw new Error("Can not define or use the `idle` state.");
                }
                _states[name] = _states[name] || new HotBoxState(this, name);
                if (name == "main") {
                    _mainState = _states[name];
                }
                return _states[name];
            }
            function _activeState(name, position) {
                _this.position = position;
                // 回到 IDLE
                if (name == IDLE) {
                    if (_currentState != IDLE) {
                        _stateStack.shift().deactive();
                        _stateStack = [];
                    }
                    _currentState = IDLE;
                } else if (name == "back") {
                    if (_currentState != IDLE) {
                        _currentState.deactive();
                        _stateStack.shift();
                        _currentState = _stateStack[0];
                        if (_currentState) {
                            _currentState.active();
                        } else {
                            _currentState = "idle";
                        }
                    }
                } else {
                    if (_currentState != IDLE) {
                        _currentState.deactive();
                    }
                    var newState = _states[name];
                    _stateStack.unshift(newState);
                    if (typeof _this.position == "function") {
                        position = _this.position(position);
                    }
                    newState.active(position);
                    _currentState = newState;
                }
            }
            function setParentFSM(fsm) {
                _this._parentFSM = fsm;
            }
            function getParentFSM() {
                return _this._parentFSM;
            }
            this.control = _control;
            this.state = _addState;
            this.active = _activeState;
            this.dispatch = _dispatchKey;
            this.setParentFSM = setParentFSM;
            this.getParentFSM = getParentFSM;
            this.activeKey = "space";
            this.actionKey = "space";
        }
        /**
     * 表示热盒某个状态，包含这些状态需要的 Dom 对象
     */
        function HotBoxState(hotBox, stateName) {
            var BUTTON_SELECTED_CLASS = "selected";
            var BUTTON_PRESSED_CLASS = "pressed";
            var STATE_ACTIVE_CLASS = "active";
            // 状态容器
            var $state = createElement(div);
            // 四种可见的按钮容器
            var $center = createElement(div);
            var $ring = createElement(div);
            var $ringShape = createElement("div");
            var $top = createElement(div);
            var $bottom = createElement(div);
            // 添加 CSS 类
            addElementClass($state, "state");
            addElementClass($state, stateName);
            addElementClass($center, "center");
            addElementClass($ring, "ring");
            addElementClass($ringShape, "ring-shape");
            addElementClass($top, "top");
            addElementClass($bottom, "bottom");
            // 摆放容器
            appendChild(hotBox.$element, $state);
            appendChild($state, $ringShape);
            appendChild($state, $center);
            appendChild($state, $ring);
            appendChild($state, $top);
            appendChild($state, $bottom);
            // 记住状态名称
            this.name = stateName;
            // 五种按钮：中心，圆环，上栏，下栏，幕后
            var buttons = {
                center: null,
                ring: [],
                top: [],
                bottom: [],
                behind: []
            };
            var allButtons = [];
            var selectedButton = null;
            var pressedButton = null;
            var stateActived = false;
            // 布局，添加按钮后，标记需要布局
            var needLayout = true;
            function layout() {
                var radius = buttons.ring.length * 15;
                layoutRing(radius);
                layoutTop(radius);
                layoutBottom(radius);
                indexPosition();
                needLayout = false;
                function layoutRing(radius) {
                    var ring = buttons.ring;
                    var step = 2 * Math.PI / ring.length;
                    if (buttons.center) {
                        buttons.center.indexedPosition = [ 0, 0 ];
                    }
                    $ringShape.style.marginLeft = $ringShape.style.marginTop = -radius + "px";
                    $ringShape.style.width = $ringShape.style.height = radius + radius + "px";
                    var $button, angle, x, y;
                    for (var i = 0; i < ring.length; i++) {
                        $button = ring[i].$button;
                        angle = step * i - Math.PI / 2;
                        x = radius * Math.cos(angle);
                        y = radius * Math.sin(angle);
                        ring[i].indexedPosition = [ x, y ];
                        $button.style.left = x + "px";
                        $button.style.top = y + "px";
                    }
                }
                function layoutTop(radius) {
                    var xOffset = -$top.clientWidth / 2;
                    var yOffset = -radius * 2 - $top.clientHeight / 2;
                    $top.style.marginLeft = xOffset + "px";
                    $top.style.marginTop = yOffset + "px";
                    buttons.top.forEach(function(topButton) {
                        var $button = topButton.$button;
                        topButton.indexedPosition = [ xOffset + $button.offsetLeft + $button.clientWidth / 2, yOffset ];
                    });
                }
                function layoutBottom(radius) {
                    var xOffset = -$bottom.clientWidth / 2;
                    var yOffset = radius * 2 - $bottom.clientHeight / 2;
                    $bottom.style.marginLeft = xOffset + "px";
                    $bottom.style.marginTop = yOffset + "px";
                    buttons.bottom.forEach(function(bottomButton) {
                        var $button = bottomButton.$button;
                        bottomButton.indexedPosition = [ xOffset + $button.offsetLeft + $button.clientWidth / 2, yOffset ];
                    });
                }
                function indexPosition() {
                    var positionedButtons = allButtons.filter(function(button) {
                        return button.indexedPosition;
                    });
                    positionedButtons.forEach(findNeightbour);
                    function findNeightbour(button) {
                        var neighbor = {};
                        var coef = 0;
                        var minCoef = {};
                        var homePosition = button.indexedPosition;
                        var candidatePosition, dx, dy, ds;
                        var possible, dir;
                        var abs = Math.abs;
                        positionedButtons.forEach(function(candidate) {
                            if (button == candidate) return;
                            candidatePosition = candidate.indexedPosition;
                            possible = [];
                            dx = candidatePosition[0] - homePosition[0];
                            dy = candidatePosition[1] - homePosition[1];
                            ds = Math.sqrt(dx * dx + dy * dy);
                            if (abs(dx) > 2) {
                                possible.push(dx > 0 ? "right" : "left");
                                possible.push(ds + abs(dy));
                            }
                            if (abs(dy) > 2) {
                                possible.push(dy > 0 ? "down" : "up");
                                possible.push(ds + abs(dx));
                            }
                            while (possible.length) {
                                dir = possible.shift();
                                coef = possible.shift();
                                if (!neighbor[dir] || coef < minCoef[dir]) {
                                    neighbor[dir] = candidate;
                                    minCoef[dir] = coef;
                                }
                            }
                        });
                        button.neighbor = neighbor;
                    }
                }
            }
            function alwaysEnable() {
                return true;
            }
            // 为状态创建按钮
            function createButton(option) {
                var $button = createElement(div);
                addElementClass($button, "button");
                var render = option.render || defaultButtonRender;
                $button.innerHTML = render(format, option);
                switch (option.position) {
                  case "center":
                    appendChild($center, $button);
                    break;

                  case "ring":
                    appendChild($ring, $button);
                    break;

                  case "top":
                    appendChild($top, $button);
                    break;

                  case "bottom":
                    appendChild($bottom, $button);
                    break;
                }
                return {
                    action: option.action,
                    enable: option.enable || alwaysEnable,
                    beforeShow: option.beforeShow,
                    key: option.key,
                    next: option.next,
                    label: option.label,
                    data: option.data || null,
                    $button: $button
                };
            }
            // 默认按钮渲染
            function defaultButtonRender(format, option) {
                return format('<span class="label">{label}</span><span class="key">{key}</span>', {
                    label: option.label,
                    key: option.key && option.key.split("|")[0]
                });
            }
            // 为当前状态添加按钮
            this.button = function(option) {
                var button = createButton(option);
                if (option.position == "center") {
                    buttons.center = button;
                } else if (buttons[option.position]) {
                    buttons[option.position].push(button);
                }
                allButtons.push(button);
                needLayout = true;
            };
            function activeState(position) {
                position = position || {
                    x: hotBox.$container.clientWidth / 2,
                    y: hotBox.$container.clientHeight / 2
                };
                if (position) {
                    $state.style.left = position.x + "px";
                    $state.style.top = position.y + "px";
                }
                allButtons.forEach(function(button) {
                    var $button = button.$button;
                    if ($button) {
                        $button.classList[button.enable() ? "add" : "remove"]("enabled");
                    }
                    if (button.beforeShow) {
                        button.beforeShow();
                    }
                });
                addElementClass($state, STATE_ACTIVE_CLASS);
                if (needLayout) {
                    layout();
                }
                if (!selectedButton) {
                    select(buttons.center || buttons.ring[0] || buttons.top[0] || buttons.bottom[0]);
                }
                stateActived = true;
            }
            function deactiveState() {
                removeElementClass($state, STATE_ACTIVE_CLASS);
                select(null);
                stateActived = false;
            }
            // 激活当前状态
            this.active = activeState;
            // 反激活当前状态
            this.deactive = deactiveState;
            function press(button) {
                if (pressedButton && pressedButton.$button) {
                    removeElementClass(pressedButton.$button, BUTTON_PRESSED_CLASS);
                }
                pressedButton = button;
                if (pressedButton && pressedButton.$button) {
                    addElementClass(pressedButton.$button, BUTTON_PRESSED_CLASS);
                }
            }
            function select(button) {
                if (selectedButton && selectedButton.$button) {
                    if (selectedButton.$button) {
                        removeElementClass(selectedButton.$button, BUTTON_SELECTED_CLASS);
                    }
                }
                selectedButton = button;
                if (selectedButton && selectedButton.$button) {
                    addElementClass(selectedButton.$button, BUTTON_SELECTED_CLASS);
                }
            }
            $state.onmouseup = function(e) {
                if (e.button) return;
                var target = e.target;
                while (target && target != $state) {
                    if (target.classList.contains("button")) {
                        allButtons.forEach(function(button) {
                            if (button.$button == target) {
                                execute(button);
                            }
                        });
                    }
                    target = target.parentNode;
                }
            };
            this.handleKeyEvent = function(e) {
                var handleResult = null;
                /**
             * @Desc: 搜狗浏览器下esc只触发keyup，因此做兼容性处理
             * @Editor: Naixor
             * @Date: 2015.09.14
             */
                if (hotBox.browser.sg) {
                    if (e.isKey("esc")) {
                        if (pressedButton) {
                            // 若存在已经按下的按钮，则取消操作
                            if (!e.isKey(pressedButton.key)) {
                                // the button is not esc
                                press(null);
                            }
                        } else {
                            hotBox.active("back", hotBox.position);
                        }
                        return "back";
                    }
                }
                if (e.keydown || hotBox.isIME && e.keyup) {
                    allButtons.forEach(function(button) {
                        if (button.enable() && e.isKey(button.key)) {
                            if (stateActived || hotBox.hintDeactiveMainState) {
                                select(button);
                                press(button);
                                handleResult = "buttonpress";
                                // 如果是 keyup 事件触发的，因为没有后续的按键事件，所以就直接执行
                                if (e.keyup) {
                                    execute(button);
                                    handleResult = "execute";
                                    return handleResult;
                                }
                            } else {
                                execute(button);
                                handleResult = "execute";
                            }
                            e.preventDefault();
                            e.stopPropagation();
                            if (!stateActived && hotBox.hintDeactiveMainState) {
                                hotBox.active(stateName, hotBox.position);
                            }
                        }
                    });
                    if (stateActived) {
                        if (e.isKey("esc")) {
                            if (pressedButton) {
                                // 若存在已经按下的按钮，则取消操作
                                if (!e.isKey(pressedButton.key)) {
                                    // the button is not esc
                                    press(null);
                                }
                            } else {
                                hotBox.active("back", hotBox.position);
                            }
                            return "back";
                        }
                        [ "up", "down", "left", "right" ].forEach(function(dir) {
                            if (!e.isKey(dir)) return;
                            if (!selectedButton) {
                                select(buttons.center || buttons.ring[0] || buttons.top[0] || buttons.bottom[0]);
                                return;
                            }
                            var neighbor = selectedButton.neighbor[dir];
                            while (neighbor && !neighbor.enable()) {
                                neighbor = neighbor.neighbor[dir];
                            }
                            if (neighbor) {
                                select(neighbor);
                            }
                            handleResult = "navigate";
                        });
                        // 若是由 keyup 触发的，则直接执行选中的按钮
                        if (e.isKey("space") && e.keyup) {
                            execute(selectedButton);
                            e.preventDefault();
                            e.stopPropagation();
                            handleResult = "execute";
                        } else if (e.isKey("space") && selectedButton) {
                            press(selectedButton);
                            handleResult = "buttonpress";
                        } else if (pressedButton && pressedButton != selectedButton) {
                            press(null);
                            handleResult = "selectcancel";
                        }
                    }
                } else if (e.keyup && (stateActived || !hotBox.hintDeactiveMainState)) {
                    if (pressedButton) {
                        if (e.isKey("space") && selectedButton == pressedButton || e.isKey(pressedButton.key)) {
                            execute(pressedButton);
                            e.preventDefault();
                            e.stopPropagation();
                            handleResult = "execute";
                        }
                    }
                }
                /*
             * Add by zhangbobell 2015.09.06
             * 增加了下面这一个判断因为 safari 下开启输入法后，所有的 keydown 的 keycode 都为 229，
             * 只能以 keyup 的 keycode 进行判断
             * */
                hotBox.isIME = e.keyCode == 229 && e.keydown;
                return handleResult;
            };
            function execute(button) {
                if (button) {
                    if (!button.enable || button.enable()) {
                        if (button.action) button.action(button);
                        hotBox.active(button.next || IDLE, hotBox.position);
                    }
                    press(null);
                    select(null);
                }
            }
        }
        module.exports = HotBox;
    }
};

//src/key.js
_p[2] = {
    value: function(require, exports, module) {
        var keymap = _p.r(4);
        var CTRL_MASK = 4096;
        var ALT_MASK = 8192;
        var SHIFT_MASK = 16384;
        function hash(unknown) {
            if (typeof unknown == "string") {
                return hashKeyExpression(unknown);
            }
            return hashKeyEvent(unknown);
        }
        function is(a, b) {
            return a && b && hash(a) == hash(b);
        }
        exports.hash = hash;
        exports.is = is;
        function hashKeyEvent(keyEvent) {
            var hashCode = 0;
            if (keyEvent.ctrlKey || keyEvent.metaKey) {
                hashCode |= CTRL_MASK;
            }
            if (keyEvent.altKey) {
                hashCode |= ALT_MASK;
            }
            if (keyEvent.shiftKey) {
                hashCode |= SHIFT_MASK;
            }
            // Shift, Control, Alt KeyCode ignored.
            if ([ 16, 17, 18, 91 ].indexOf(keyEvent.keyCode) == -1) {
                hashCode |= keyEvent.keyCode;
            }
            return hashCode;
        }
        function hashKeyExpression(keyExpression) {
            var hashCode = 0;
            keyExpression.toLowerCase().split(/\s*\+\s*/).forEach(function(name) {
                switch (name) {
                  case "ctrl":
                  case "cmd":
                    hashCode |= CTRL_MASK;
                    break;

                  case "alt":
                    hashCode |= ALT_MASK;
                    break;

                  case "shift":
                    hashCode |= SHIFT_MASK;
                    break;

                  default:
                    hashCode |= keymap[name];
                }
            });
            return hashCode;
        }
    }
};

//src/keycontrol.js
_p[3] = {
    value: function(require, exports, module) {
        var key = _p.r(2);
        var FOCUS_CLASS = "hotbox-focus";
        var RECEIVER_CLASS = "hotbox-key-receiver";
        function KeyControl(hotbox) {
            var _this = this;
            var _receiver;
            var _actived = true;
            var _receiverIsSelfCreated = false;
            var $container = hotbox.$container;
            _createReceiver();
            _bindReceiver();
            _bindContainer();
            _active();
            function _createReceiver() {
                _receiver = document.createElement("input");
                _receiver.classList.add(RECEIVER_CLASS);
                $container.appendChild(_receiver);
                _receiverIsSelfCreated = true;
            }
            function _bindReceiver() {
                _receiver.onkeyup = _handle;
                _receiver.onkeypress = _handle;
                _receiver.onkeydown = _handle;
                _receiver.onfocus = _active;
                _receiver.onblur = _deactive;
                if (_receiverIsSelfCreated) {
                    _receiver.oninput = function(e) {
                        _receiver.value = null;
                    };
                }
            }
            function _bindContainer() {
                $container.onmousedown = function(e) {
                    _active();
                    e.preventDefault();
                };
            }
            function _handle(keyEvent) {
                if (!_actived) return;
                hotbox.dispatch(keyEvent);
            }
            function _active() {
                _receiver.select();
                _receiver.focus();
                _actived = true;
                $container.classList.add(FOCUS_CLASS);
            }
            function _deactive() {
                _receiver.blur();
                _actived = false;
                $container.classList.remove(FOCUS_CLASS);
            }
            this.handle = _handle;
            this.active = _active;
            this.deactive = _deactive;
        }
        module.exports = KeyControl;
    }
};

//src/keymap.js
_p[4] = {
    value: function(require, exports, module) {
        var keymap = {
            Shift: 16,
            Control: 17,
            Alt: 18,
            CapsLock: 20,
            BackSpace: 8,
            Tab: 9,
            Enter: 13,
            Esc: 27,
            Space: 32,
            PageUp: 33,
            PageDown: 34,
            End: 35,
            Home: 36,
            Insert: 45,
            Left: 37,
            Up: 38,
            Right: 39,
            Down: 40,
            Direction: {
                37: 1,
                38: 1,
                39: 1,
                40: 1
            },
            Delete: 46,
            NumLock: 144,
            Cmd: 91,
            CmdFF: 224,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "`": 192,
            "=": 187,
            "-": 189,
            "/": 191,
            ".": 190
        };
        // 小写适配
        for (var key in keymap) {
            if (keymap.hasOwnProperty(key)) {
                keymap[key.toLowerCase()] = keymap[key];
            }
        }
        var aKeyCode = 65;
        var aCharCode = "a".charCodeAt(0);
        // letters
        "abcdefghijklmnopqrstuvwxyz".split("").forEach(function(letter) {
            keymap[letter] = aKeyCode + (letter.charCodeAt(0) - aCharCode);
        });
        // numbers
        var n = 9;
        do {
            keymap[n.toString()] = n + 48;
        } while (n--);
        module.exports = keymap;
    }
};

var moduleMapping = {
    expose: 0
};

function use(name) {
    _p.r([ moduleMapping[name] ]);
}
use('expose');
})();
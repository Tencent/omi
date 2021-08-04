/*!
 * ====================================================
 * kityminder-editor - v1.0.67 - 2019-02-12
 * https://github.com/fex-team/kityminder-editor
 * GitHub: https://github.com/fex-team/kityminder-editor 
 * Copyright (c) 2019 ; Licensed 
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

//src/editor.js
_p[0] = {
    value: function(require, exports, module) {
        /**
     * 运行时
     */
        var runtimes = [];
        function assemble(runtime) {
            runtimes.push(runtime);
        }
        function KMEditor(selector) {
            this.selector = selector;
            for (var i = 0; i < runtimes.length; i++) {
                if (typeof runtimes[i] == "function") {
                    runtimes[i].call(this, this);
                }
            }
        }
        KMEditor.assemble = assemble;
        assemble(_p.r(7));
        assemble(_p.r(9));
        assemble(_p.r(14));
        assemble(_p.r(18));
        assemble(_p.r(11));
        assemble(_p.r(12));
        assemble(_p.r(5));
        assemble(_p.r(6));
        assemble(_p.r(8));
        assemble(_p.r(15));
        assemble(_p.r(10));
        assemble(_p.r(13));
        assemble(_p.r(16));
        assemble(_p.r(17));
        return module.exports = KMEditor;
    }
};

//src/expose-editor.js
/**
 * @fileOverview
 *
 * 打包暴露
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[1] = {
    value: function(require, exports, module) {
        return module.exports = kityminder.Editor = _p.r(0);
    }
};

//src/hotbox.js
_p[2] = {
    value: function(require, exports, module) {
        return module.exports = window.HotBox;
    }
};

//src/lang.js
_p[3] = {
    value: function(require, exports, module) {}
};

//src/minder.js
_p[4] = {
    value: function(require, exports, module) {
        return module.exports = window.kityminder.Minder;
    }
};

//src/runtime/clipboard-mimetype.js
/**
 * @Desc: 新增一个用于处理系统ctrl+c ctrl+v等方式导入导出节点的MIMETYPE处理，如系统不支持clipboardEvent或者是FF则不初始化改class
 * @Editor: Naixor
 * @Date: 2015.9.21
 */
_p[5] = {
    value: function(require, exports, module) {
        function MimeType() {
            /**
		 * 私有变量
		 */
            var SPLITOR = "\ufeff";
            var MIMETYPE = {
                "application/km": "￿"
            };
            var SIGN = {
                "\ufeff": "SPLITOR",
                "￿": "application/km"
            };
            /**
		 * 用于将一段纯文本封装成符合其数据格式的文本
		 * @method process 			private
		 * @param  {MIMETYPE} mimetype 数据格式
		 * @param  {String} text     原始文本
		 * @return {String}          符合该数据格式下的文本
		 * @example
		 * 			var str = "123";
		 * 			str = process('application/km', str); // 返回的内容再经过MimeType判断会读取出其数据格式为application/km
		 * 			process('text/plain', str); // 若接受到一个非纯文本信息，则会将其转换为新的数据格式
		 */
            function process(mimetype, text) {
                if (!this.isPureText(text)) {
                    var _mimetype = this.whichMimeType(text);
                    if (!_mimetype) {
                        throw new Error("unknow mimetype!");
                    }
                    text = this.getPureText(text);
                }
                if (mimetype === false) {
                    return text;
                }
                return mimetype + SPLITOR + text;
            }
            /**
		 * 注册数据类型的标识
		 * @method registMimeTypeProtocol  	public
		 * @param  {String} type 数据类型
		 * @param  {String} sign 标识
		 */
            this.registMimeTypeProtocol = function(type, sign) {
                if (sign && SIGN[sign]) {
                    throw new Error("sing has registed!");
                }
                if (type && !!MIMETYPE[type]) {
                    throw new Error("mimetype has registed!");
                }
                SIGN[sign] = type;
                MIMETYPE[type] = sign;
            };
            /**
		 * 获取已注册数据类型的协议
		 * @method getMimeTypeProtocol  	public
		 * @param  {String} type 数据类型
		 * @param  {String} text|undefiend  文本内容或不传入
		 * @return {String|Function} 
		 * @example 
		 * 			text若不传入则直接返回对应数据格式的处理(process)方法
		 * 			若传入文本则直接调用对应的process方法进行处理，此时返回处理后的内容
		 * 			var m = new MimeType();
		 * 			var kmprocess = m.getMimeTypeProtocol('application/km');
		 * 			kmprocess("123") === m.getMimeTypeProtocol('application/km', "123");
		 * 			
		 */
            this.getMimeTypeProtocol = function(type, text) {
                var mimetype = MIMETYPE[type] || false;
                if (text === undefined) {
                    return process.bind(this, mimetype);
                }
                return process(mimetype, text);
            };
            this.getSpitor = function() {
                return SPLITOR;
            };
            this.getMimeType = function(sign) {
                if (sign !== undefined) {
                    return SIGN[sign] || null;
                }
                return MIMETYPE;
            };
        }
        MimeType.prototype.isPureText = function(text) {
            return !~text.indexOf(this.getSpitor());
        };
        MimeType.prototype.getPureText = function(text) {
            if (this.isPureText(text)) {
                return text;
            }
            return text.split(this.getSpitor())[1];
        };
        MimeType.prototype.whichMimeType = function(text) {
            if (this.isPureText(text)) {
                return null;
            }
            return this.getMimeType(text.split(this.getSpitor())[0]);
        };
        function MimeTypeRuntime() {
            if (this.minder.supportClipboardEvent && !kity.Browser.gecko) {
                this.MimeType = new MimeType();
            }
        }
        return module.exports = MimeTypeRuntime;
    }
};

//src/runtime/clipboard.js
/**
 * @Desc: 处理editor的clipboard事件，只在支持ClipboardEvent并且不是FF的情况下工作
 * @Editor: Naixor
 * @Date: 2015.9.21
 */
_p[6] = {
    value: function(require, exports, module) {
        function ClipboardRuntime() {
            var minder = this.minder;
            var Data = window.kityminder.data;
            if (!minder.supportClipboardEvent || kity.Browser.gecko) {
                return;
            }
            var fsm = this.fsm;
            var receiver = this.receiver;
            var MimeType = this.MimeType;
            var kmencode = MimeType.getMimeTypeProtocol("application/km"), decode = Data.getRegisterProtocol("json").decode;
            var _selectedNodes = [];
            /*
		 * 增加对多节点赋值粘贴的处理
		 */
            function encode(nodes) {
                var _nodes = [];
                for (var i = 0, l = nodes.length; i < l; i++) {
                    _nodes.push(minder.exportNode(nodes[i]));
                }
                return kmencode(Data.getRegisterProtocol("json").encode(_nodes));
            }
            var beforeCopy = function(e) {
                if (document.activeElement == receiver.element) {
                    var clipBoardEvent = e;
                    var state = fsm.state();
                    switch (state) {
                      case "input":
                        {
                            break;
                        }

                      case "normal":
                        {
                            var nodes = [].concat(minder.getSelectedNodes());
                            if (nodes.length) {
                                // 这里由于被粘贴复制的节点的id信息也都一样，故做此算法
                                // 这里有个疑问，使用node.getParent()或者node.parent会离奇导致出现非选中节点被渲染成选中节点，因此使用isAncestorOf，而没有使用自行回溯的方式
                                if (nodes.length > 1) {
                                    var targetLevel;
                                    nodes.sort(function(a, b) {
                                        return a.getLevel() - b.getLevel();
                                    });
                                    targetLevel = nodes[0].getLevel();
                                    if (targetLevel !== nodes[nodes.length - 1].getLevel()) {
                                        var plevel, pnode, idx = 0, l = nodes.length, pidx = l - 1;
                                        pnode = nodes[pidx];
                                        while (pnode.getLevel() !== targetLevel) {
                                            idx = 0;
                                            while (idx < l && nodes[idx].getLevel() === targetLevel) {
                                                if (nodes[idx].isAncestorOf(pnode)) {
                                                    nodes.splice(pidx, 1);
                                                    break;
                                                }
                                                idx++;
                                            }
                                            pidx--;
                                            pnode = nodes[pidx];
                                        }
                                    }
                                }
                                var str = encode(nodes);
                                clipBoardEvent.clipboardData.setData("text/plain", str);
                            }
                            e.preventDefault();
                            break;
                        }
                    }
                }
            };
            var beforeCut = function(e) {
                if (document.activeElement == receiver.element) {
                    if (minder.getStatus() !== "normal") {
                        e.preventDefault();
                        return;
                    }
                    var clipBoardEvent = e;
                    var state = fsm.state();
                    switch (state) {
                      case "input":
                        {
                            break;
                        }

                      case "normal":
                        {
                            var nodes = minder.getSelectedNodes();
                            if (nodes.length) {
                                clipBoardEvent.clipboardData.setData("text/plain", encode(nodes));
                                minder.execCommand("removenode");
                            }
                            e.preventDefault();
                            break;
                        }
                    }
                }
            };
            var beforePaste = function(e) {
                if (document.activeElement == receiver.element) {
                    if (minder.getStatus() !== "normal") {
                        e.preventDefault();
                        return;
                    }
                    var clipBoardEvent = e;
                    var state = fsm.state();
                    var textData = clipBoardEvent.clipboardData.getData("text/plain");
                    switch (state) {
                      case "input":
                        {
                            // input状态下如果格式为application/km则不进行paste操作
                            if (!MimeType.isPureText(textData)) {
                                e.preventDefault();
                                return;
                            }
                            break;
                        }

                      case "normal":
                        {
                            /*
						 * 针对normal状态下通过对选中节点粘贴导入子节点文本进行单独处理
						 */
                            var sNodes = minder.getSelectedNodes();
                            if (MimeType.whichMimeType(textData) === "application/km") {
                                var nodes = decode(MimeType.getPureText(textData));
                                var _node;
                                sNodes.forEach(function(node) {
                                    // 由于粘贴逻辑中为了排除子节点重新排序导致逆序，因此复制的时候倒过来
                                    for (var i = nodes.length - 1; i >= 0; i--) {
                                        _node = minder.createNode(null, node);
                                        minder.importNode(_node, nodes[i]);
                                        _selectedNodes.push(_node);
                                        node.appendChild(_node);
                                    }
                                });
                                minder.select(_selectedNodes, true);
                                _selectedNodes = [];
                                minder.refresh();
                            } else if (clipBoardEvent.clipboardData && clipBoardEvent.clipboardData.items[0].type.indexOf("image") > -1) {
                                var imageFile = clipBoardEvent.clipboardData.items[0].getAsFile();
                                var serverService = angular.element(document.body).injector().get("server");
                                return serverService.uploadImage(imageFile).then(function(json) {
                                    var resp = json.data;
                                    if (resp.errno === 0) {
                                        minder.execCommand("image", resp.data.url);
                                    }
                                });
                            } else {
                                sNodes.forEach(function(node) {
                                    minder.Text2Children(node, textData);
                                });
                            }
                            e.preventDefault();
                            break;
                        }
                    }
                }
            };
            /**
		 * 由editor的receiver统一处理全部事件，包括clipboard事件
		 * @Editor: Naixor
		 * @Date: 2015.9.24
		 */
            document.addEventListener("copy", beforeCopy);
            document.addEventListener("cut", beforeCut);
            document.addEventListener("paste", beforePaste);
        }
        return module.exports = ClipboardRuntime;
    }
};

//src/runtime/container.js
/**
 * @fileOverview
 *
 * 初始化编辑器的容器
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[7] = {
    value: function(require, exports, module) {
        /**
     * 最先执行的 Runtime，初始化编辑器容器
     */
        function ContainerRuntime() {
            var container;
            if (typeof this.selector == "string") {
                container = document.querySelector(this.selector);
            } else {
                container = this.selector;
            }
            if (!container) throw new Error("Invalid selector: " + this.selector);
            // 这个类名用于给编辑器添加样式
            container.classList.add("km-editor");
            // 暴露容器给其他运行时使用
            this.container = container;
        }
        return module.exports = ContainerRuntime;
    }
};

//src/runtime/drag.js
/**
 * @fileOverview
 *
 * 用于拖拽节点时屏蔽键盘事件
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[8] = {
    value: function(require, exports, module) {
        var Hotbox = _p.r(2);
        var Debug = _p.r(19);
        var debug = new Debug("drag");
        function DragRuntime() {
            var fsm = this.fsm;
            var minder = this.minder;
            var hotbox = this.hotbox;
            var receiver = this.receiver;
            var receiverElement = receiver.element;
            // setup everything to go
            setupFsm();
            // listen the fsm changes, make action.
            function setupFsm() {
                // when jumped to drag mode, enter
                fsm.when("* -> drag", function() {});
                fsm.when("drag -> *", function(exit, enter, reason) {
                    if (reason == "drag-finish") {}
                });
            }
            var downX, downY;
            var MOUSE_HAS_DOWN = 0;
            var MOUSE_HAS_UP = 1;
            var BOUND_CHECK = 20;
            var flag = MOUSE_HAS_UP;
            var maxX, maxY, osx, osy, containerY;
            var freeHorizen = false, freeVirtical = false;
            var frame;
            function move(direction, speed) {
                if (!direction) {
                    freeHorizen = freeVirtical = false;
                    frame && kity.releaseFrame(frame);
                    frame = null;
                    return;
                }
                if (!frame) {
                    frame = kity.requestFrame(function(direction, speed, minder) {
                        return function(frame) {
                            switch (direction) {
                              case "left":
                                minder._viewDragger.move({
                                    x: -speed,
                                    y: 0
                                }, 0);
                                break;

                              case "top":
                                minder._viewDragger.move({
                                    x: 0,
                                    y: -speed
                                }, 0);
                                break;

                              case "right":
                                minder._viewDragger.move({
                                    x: speed,
                                    y: 0
                                }, 0);
                                break;

                              case "bottom":
                                minder._viewDragger.move({
                                    x: 0,
                                    y: speed
                                }, 0);
                                break;

                              default:
                                return;
                            }
                            frame.next();
                        };
                    }(direction, speed, minder));
                }
            }
            minder.on("mousedown", function(e) {
                flag = MOUSE_HAS_DOWN;
                var rect = minder.getPaper().container.getBoundingClientRect();
                downX = e.originEvent.clientX;
                downY = e.originEvent.clientY;
                containerY = rect.top;
                maxX = rect.width;
                maxY = rect.height;
            });
            minder.on("mousemove", function(e) {
                if (fsm.state() === "drag" && flag == MOUSE_HAS_DOWN && minder.getSelectedNode() && (Math.abs(downX - e.originEvent.clientX) > BOUND_CHECK || Math.abs(downY - e.originEvent.clientY) > BOUND_CHECK)) {
                    osx = e.originEvent.clientX;
                    osy = e.originEvent.clientY - containerY;
                    if (osx < BOUND_CHECK) {
                        move("right", BOUND_CHECK - osx);
                    } else if (osx > maxX - BOUND_CHECK) {
                        move("left", BOUND_CHECK + osx - maxX);
                    } else {
                        freeHorizen = true;
                    }
                    if (osy < BOUND_CHECK) {
                        move("bottom", osy);
                    } else if (osy > maxY - BOUND_CHECK) {
                        move("top", BOUND_CHECK + osy - maxY);
                    } else {
                        freeVirtical = true;
                    }
                    if (freeHorizen && freeVirtical) {
                        move(false);
                    }
                }
                if (fsm.state() !== "drag" && flag === MOUSE_HAS_DOWN && minder.getSelectedNode() && (Math.abs(downX - e.originEvent.clientX) > BOUND_CHECK || Math.abs(downY - e.originEvent.clientY) > BOUND_CHECK)) {
                    if (fsm.state() === "hotbox") {
                        hotbox.active(Hotbox.STATE_IDLE);
                    }
                    return fsm.jump("drag", "user-drag");
                }
            });
            window.addEventListener("mouseup", function() {
                flag = MOUSE_HAS_UP;
                if (fsm.state() === "drag") {
                    move(false);
                    return fsm.jump("normal", "drag-finish");
                }
            }, false);
        }
        return module.exports = DragRuntime;
    }
};

//src/runtime/fsm.js
/**
 * @fileOverview
 *
 * 编辑器状态机
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[9] = {
    value: function(require, exports, module) {
        var Debug = _p.r(19);
        var debug = new Debug("fsm");
        function handlerConditionMatch(condition, when, exit, enter) {
            if (condition.when != when) return false;
            if (condition.enter != "*" && condition.enter != enter) return false;
            if (condition.exit != "*" && condition.exit != exit) return;
            return true;
        }
        function FSM(defaultState) {
            var currentState = defaultState;
            var BEFORE_ARROW = " - ";
            var AFTER_ARROW = " -> ";
            var handlers = [];
            /**
         * 状态跳转
         *
         * 会通知所有的状态跳转监视器
         *
         * @param  {string} newState  新状态名称
         * @param  {any} reason 跳转的原因，可以作为参数传递给跳转监视器
         */
            this.jump = function(newState, reason) {
                if (!reason) throw new Error("Please tell fsm the reason to jump");
                var oldState = currentState;
                var notify = [ oldState, newState ].concat([].slice.call(arguments, 1));
                var i, handler;
                // 跳转前
                for (i = 0; i < handlers.length; i++) {
                    handler = handlers[i];
                    if (handlerConditionMatch(handler.condition, "before", oldState, newState)) {
                        if (handler.apply(null, notify)) return;
                    }
                }
                currentState = newState;
                debug.log("[{0}] {1} -> {2}", reason, oldState, newState);
                // 跳转后
                for (i = 0; i < handlers.length; i++) {
                    handler = handlers[i];
                    if (handlerConditionMatch(handler.condition, "after", oldState, newState)) {
                        handler.apply(null, notify);
                    }
                }
                return currentState;
            };
            /**
         * 返回当前状态
         * @return {string}
         */
            this.state = function() {
                return currentState;
            };
            /**
         * 添加状态跳转监视器
         * 
         * @param {string} condition
         *     监视的时机
         *         "* => *" （默认）
         *
         * @param  {Function} handler
         *     监视函数，当状态跳转的时候，会接收三个参数
         *         * from - 跳转前的状态
         *         * to - 跳转后的状态
         *         * reason - 跳转的原因
         */
            this.when = function(condition, handler) {
                if (arguments.length == 1) {
                    handler = condition;
                    condition = "* -> *";
                }
                var when, resolved, exit, enter;
                resolved = condition.split(BEFORE_ARROW);
                if (resolved.length == 2) {
                    when = "before";
                } else {
                    resolved = condition.split(AFTER_ARROW);
                    if (resolved.length == 2) {
                        when = "after";
                    }
                }
                if (!when) throw new Error("Illegal fsm condition: " + condition);
                exit = resolved[0];
                enter = resolved[1];
                handler.condition = {
                    when: when,
                    exit: exit,
                    enter: enter
                };
                handlers.push(handler);
            };
        }
        function FSMRumtime() {
            this.fsm = new FSM("normal");
        }
        return module.exports = FSMRumtime;
    }
};

//src/runtime/history.js
/**
 * @fileOverview
 *
 * 历史管理
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[10] = {
    value: function(require, exports, module) {
        var jsonDiff = _p.r(22);
        function HistoryRuntime() {
            var minder = this.minder;
            var hotbox = this.hotbox;
            var MAX_HISTORY = 100;
            var lastSnap;
            var patchLock;
            var undoDiffs;
            var redoDiffs;
            function reset() {
                undoDiffs = [];
                redoDiffs = [];
                lastSnap = minder.exportJson();
            }
            function makeUndoDiff() {
                var headSnap = minder.exportJson();
                var diff = jsonDiff(headSnap, lastSnap);
                if (diff.length) {
                    undoDiffs.push(diff);
                    while (undoDiffs.length > MAX_HISTORY) {
                        undoDiffs.shift();
                    }
                    lastSnap = headSnap;
                    return true;
                }
            }
            function makeRedoDiff() {
                var revertSnap = minder.exportJson();
                redoDiffs.push(jsonDiff(revertSnap, lastSnap));
                lastSnap = revertSnap;
            }
            function undo() {
                patchLock = true;
                var undoDiff = undoDiffs.pop();
                if (undoDiff) {
                    minder.applyPatches(undoDiff);
                    makeRedoDiff();
                }
                patchLock = false;
            }
            function redo() {
                patchLock = true;
                var redoDiff = redoDiffs.pop();
                if (redoDiff) {
                    minder.applyPatches(redoDiff);
                    makeUndoDiff();
                }
                patchLock = false;
            }
            function changed() {
                if (patchLock) return;
                if (makeUndoDiff()) redoDiffs = [];
            }
            function hasUndo() {
                return !!undoDiffs.length;
            }
            function hasRedo() {
                return !!redoDiffs.length;
            }
            function updateSelection(e) {
                if (!patchLock) return;
                var patch = e.patch;
                switch (patch.express) {
                  case "node.add":
                    minder.select(patch.node.getChild(patch.index), true);
                    break;

                  case "node.remove":
                  case "data.replace":
                  case "data.remove":
                  case "data.add":
                    minder.select(patch.node, true);
                    break;
                }
            }
            this.history = {
                reset: reset,
                undo: undo,
                redo: redo,
                hasUndo: hasUndo,
                hasRedo: hasRedo
            };
            reset();
            minder.on("contentchange", changed);
            minder.on("import", reset);
            minder.on("patch", updateSelection);
            var main = hotbox.state("main");
            main.button({
                position: "top",
                label: "撤销",
                key: "Ctrl + Z",
                enable: hasUndo,
                action: undo,
                next: "idle"
            });
            main.button({
                position: "top",
                label: "重做",
                key: "Ctrl + Y",
                enable: hasRedo,
                action: redo,
                next: "idle"
            });
        }
        window.diff = jsonDiff;
        return module.exports = HistoryRuntime;
    }
};

//src/runtime/hotbox.js
/**
 * @fileOverview
 *
 * 热盒 Runtime
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[11] = {
    value: function(require, exports, module) {
        var Hotbox = _p.r(2);
        function HotboxRuntime() {
            var fsm = this.fsm;
            var minder = this.minder;
            var receiver = this.receiver;
            var container = this.container;
            var hotbox = new Hotbox(container);
            hotbox.setParentFSM(fsm);
            fsm.when("normal -> hotbox", function(exit, enter, reason) {
                var node = minder.getSelectedNode();
                var position;
                if (node) {
                    var box = node.getRenderBox();
                    position = {
                        x: box.cx,
                        y: box.cy
                    };
                }
                hotbox.active("main", position);
            });
            fsm.when("normal -> normal", function(exit, enter, reason, e) {
                if (reason == "shortcut-handle") {
                    var handleResult = hotbox.dispatch(e);
                    if (handleResult) {
                        e.preventDefault();
                    } else {
                        minder.dispatchKeyEvent(e);
                    }
                }
            });
            fsm.when("modal -> normal", function(exit, enter, reason, e) {
                if (reason == "import-text-finish") {
                    receiver.element.focus();
                }
            });
            this.hotbox = hotbox;
        }
        return module.exports = HotboxRuntime;
    }
};

//src/runtime/input.js
/**
 * @fileOverview
 *
 * 文本输入支持
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[12] = {
    value: function(require, exports, module) {
        _p.r(21);
        var Debug = _p.r(19);
        var debug = new Debug("input");
        function InputRuntime() {
            var fsm = this.fsm;
            var minder = this.minder;
            var hotbox = this.hotbox;
            var receiver = this.receiver;
            var receiverElement = receiver.element;
            var isGecko = window.kity.Browser.gecko;
            // setup everything to go
            setupReciverElement();
            setupFsm();
            setupHotbox();
            // expose editText()
            this.editText = editText;
            // listen the fsm changes, make action.
            function setupFsm() {
                // when jumped to input mode, enter
                fsm.when("* -> input", enterInputMode);
                // when exited, commit or exit depends on the exit reason
                fsm.when("input -> *", function(exit, enter, reason) {
                    switch (reason) {
                      case "input-cancel":
                        return exitInputMode();

                      case "input-commit":
                      default:
                        return commitInputResult();
                    }
                });
                // lost focus to commit
                receiver.onblur(function(e) {
                    if (fsm.state() == "input") {
                        fsm.jump("normal", "input-commit");
                    }
                });
                minder.on("beforemousedown", function() {
                    if (fsm.state() == "input") {
                        fsm.jump("normal", "input-commit");
                    }
                });
                minder.on("dblclick", function() {
                    if (minder.getSelectedNode() && minder._status !== "readonly") {
                        editText();
                    }
                });
            }
            // let the receiver follow the current selected node position
            function setupReciverElement() {
                if (debug.flaged) {
                    receiverElement.classList.add("debug");
                }
                receiverElement.onmousedown = function(e) {
                    e.stopPropagation();
                };
                minder.on("layoutallfinish viewchange viewchanged selectionchange", function(e) {
                    // viewchange event is too frequenced, lazy it
                    if (e.type == "viewchange" && fsm.state() != "input") return;
                    updatePosition();
                });
                updatePosition();
            }
            // edit entrance in hotbox
            function setupHotbox() {
                hotbox.state("main").button({
                    position: "center",
                    label: "编辑",
                    key: "F2",
                    enable: function() {
                        return minder.queryCommandState("text") != -1;
                    },
                    action: editText
                });
            }
            /**
         * 增加对字体的鉴别，以保证用户在编辑状态ctrl/cmd + b/i所触发的加粗斜体与显示一致
         * @editor Naixor
         * @Date 2015-12-2
         */
            // edit for the selected node
            function editText() {
                var node = minder.getSelectedNode();
                if (!node) {
                    return;
                }
                var textContainer = receiverElement;
                receiverElement.innerText = "";
                if (node.getData("font-weight") === "bold") {
                    var b = document.createElement("b");
                    textContainer.appendChild(b);
                    textContainer = b;
                }
                if (node.getData("font-style") === "italic") {
                    var i = document.createElement("i");
                    textContainer.appendChild(i);
                    textContainer = i;
                }
                textContainer.innerText = minder.queryCommandValue("text");
                if (isGecko) {
                    receiver.fixFFCaretDisappeared();
                }
                fsm.jump("input", "input-request");
                receiver.selectAll();
            }
            /**
         * 增加对字体的鉴别，以保证用户在编辑状态ctrl/cmd + b/i所触发的加粗斜体与显示一致
         * @editor Naixor
         * @Date 2015-12-2
         */
            function enterInputMode() {
                var node = minder.getSelectedNode();
                if (node) {
                    var fontSize = node.getData("font-size") || node.getStyle("font-size");
                    receiverElement.style.fontSize = fontSize + "px";
                    receiverElement.style.minWidth = 0;
                    receiverElement.style.minWidth = receiverElement.clientWidth + "px";
                    receiverElement.style.fontWeight = node.getData("font-weight") || "";
                    receiverElement.style.fontStyle = node.getData("font-style") || "";
                    receiverElement.classList.add("input");
                    receiverElement.focus();
                }
            }
            /**
         * 按照文本提交操作处理
         * @Desc: 从其他节点复制文字到另一个节点时部分浏览器(chrome)会自动包裹一个span标签，这样试用一下逻辑出来的就不是text节点二是span节点因此导致undefined的情况发生
         * @Warning: 下方代码使用[].slice.call来将HTMLDomCollection处理成为Array，ie8及以下会有问题
         * @Editor: Naixor
         * @Date: 2015.9.16
         */
            function commitInputText(textNodes) {
                var text = "";
                var TAB_CHAR = "\t", ENTER_CHAR = "\n", STR_CHECK = /\S/, SPACE_CHAR = " ", // 针对FF,SG,BD,LB,IE等浏览器下SPACE的charCode存在为32和160的情况做处理
                SPACE_CHAR_REGEXP = new RegExp("( |" + String.fromCharCode(160) + ")"), BR = document.createElement("br");
                var isBold = false, isItalic = false;
                for (var str, _divChildNodes, space_l, space_num, tab_num, i = 0, l = textNodes.length; i < l; i++) {
                    str = textNodes[i];
                    switch (Object.prototype.toString.call(str)) {
                      // 正常情况处理
                        case "[object HTMLBRElement]":
                        {
                            text += ENTER_CHAR;
                            break;
                        }

                      case "[object Text]":
                        {
                            // SG下会莫名其妙的加上&nbsp;影响后续判断，干掉！
                            /**
                         * FF下的wholeText会导致如下问题：
                         *     |123| -> 在一个节点中输入一段字符，此时TextNode为[#Text 123]
                         *     提交并重新编辑，在后面追加几个字符
                         *     |123abc| -> 此时123为一个TextNode为[#Text 123, #Text abc]，但是对这两个任意取值wholeText均为全部内容123abc
                         * 上述BUG仅存在在FF中，故将wholeText更改为textContent
                         */
                            str = str.textContent.replace("&nbsp;", " ");
                            if (!STR_CHECK.test(str)) {
                                space_l = str.length;
                                while (space_l--) {
                                    if (SPACE_CHAR_REGEXP.test(str[space_l])) {
                                        text += SPACE_CHAR;
                                    } else if (str[space_l] === TAB_CHAR) {
                                        text += TAB_CHAR;
                                    }
                                }
                            } else {
                                text += str;
                            }
                            break;
                        }

                      // ctrl + b/i 会给字体加上<b>/<i>标签来实现黑体和斜体
                        case "[object HTMLElement]":
                        {
                            switch (str.nodeName) {
                              case "B":
                                {
                                    isBold = true;
                                    break;
                                }

                              case "I":
                                {
                                    isItalic = true;
                                    break;
                                }

                              default:
                                {}
                            }
                            [].splice.apply(textNodes, [ i, 1 ].concat([].slice.call(str.childNodes)));
                            l = textNodes.length;
                            i--;
                            break;
                        }

                      // 被增加span标签的情况会被处理成正常情况并会推交给上面处理
                        case "[object HTMLSpanElement]":
                        {
                            [].splice.apply(textNodes, [ i, 1 ].concat([].slice.call(str.childNodes)));
                            l = textNodes.length;
                            i--;
                            break;
                        }

                      // 若标签为image标签，则判断是否为合法url，是将其加载进来
                        case "[object HTMLImageElement]":
                        {
                            if (str.src) {
                                if (/http(|s):\/\//.test(str.src)) {
                                    minder.execCommand("Image", str.src, str.alt);
                                } else {}
                            }
                            break;
                        }

                      // 被增加div标签的情况会被处理成正常情况并会推交给上面处理
                        case "[object HTMLDivElement]":
                        {
                            _divChildNodes = [];
                            for (var di = 0, l = str.childNodes.length; di < l; di++) {
                                _divChildNodes.push(str.childNodes[di]);
                            }
                            _divChildNodes.push(BR);
                            [].splice.apply(textNodes, [ i, 1 ].concat(_divChildNodes));
                            l = textNodes.length;
                            i--;
                            break;
                        }

                      default:
                        {
                            if (str && str.childNodes.length) {
                                _divChildNodes = [];
                                for (var di = 0, l = str.childNodes.length; di < l; di++) {
                                    _divChildNodes.push(str.childNodes[di]);
                                }
                                _divChildNodes.push(BR);
                                [].splice.apply(textNodes, [ i, 1 ].concat(_divChildNodes));
                                l = textNodes.length;
                                i--;
                            } else {
                                if (str && str.textContent !== undefined) {
                                    text += str.textContent;
                                } else {
                                    text += "";
                                }
                            }
                        }
                    }
                }
                text = text.replace(/^\n*|\n*$/g, "");
                text = text.replace(new RegExp("(\n|\r|\n\r)( |" + String.fromCharCode(160) + "){4}", "g"), "$1\t");
                minder.getSelectedNode().setText(text);
                if (isBold) {
                    minder.queryCommandState("bold") || minder.execCommand("bold");
                } else {
                    minder.queryCommandState("bold") && minder.execCommand("bold");
                }
                if (isItalic) {
                    minder.queryCommandState("italic") || minder.execCommand("italic");
                } else {
                    minder.queryCommandState("italic") && minder.execCommand("italic");
                }
                exitInputMode();
                return text;
            }
            /**
         * 判断节点的文本信息是否是
         * @Desc: 从其他节点复制文字到另一个节点时部分浏览器(chrome)会自动包裹一个span标签，这样使用以下逻辑出来的就不是text节点二是span节点因此导致undefined的情况发生
         * @Notice: 此处逻辑应该拆分到 kityminder-core/core/data中去，单独增加一个对某个节点importJson的事件
         * @Editor: Naixor
         * @Date: 2015.9.16
         */
            function commitInputNode(node, text) {
                try {
                    minder.decodeData("text", text).then(function(json) {
                        function importText(node, json, minder) {
                            var data = json.data;
                            node.setText(data.text || "");
                            var childrenTreeData = json.children || [];
                            for (var i = 0; i < childrenTreeData.length; i++) {
                                var childNode = minder.createNode(null, node);
                                importText(childNode, childrenTreeData[i], minder);
                            }
                            return node;
                        }
                        importText(node, json, minder);
                        minder.fire("contentchange");
                        minder.getRoot().renderTree();
                        minder.layout(300);
                    });
                } catch (e) {
                    minder.fire("contentchange");
                    minder.getRoot().renderTree();
                    // 无法被转换成脑图节点则不处理
                    if (e.toString() !== "Error: Invalid local format") {
                        throw e;
                    }
                }
            }
            function commitInputResult() {
                /**
             * @Desc: 进行如下处理：
             *             根据用户的输入判断是否生成新的节点
             *        fix #83 https://github.com/fex-team/kityminder-editor/issues/83
             * @Editor: Naixor
             * @Date: 2015.9.16
             */
                var textNodes = [].slice.call(receiverElement.childNodes);
                /**
             * @Desc: 增加setTimeout的原因：ie下receiverElement.innerHTML=""会导致后
             * 		  面commitInputText中使用textContent报错，不要问我什么原因！
             * @Editor: Naixor
             * @Date: 2015.12.14
             */
                setTimeout(function() {
                    // 解决过大内容导致SVG窜位问题
                    receiverElement.innerHTML = "";
                }, 0);
                var node = minder.getSelectedNode();
                textNodes = commitInputText(textNodes);
                commitInputNode(node, textNodes);
                if (node.type == "root") {
                    var rootText = minder.getRoot().getText();
                    minder.fire("initChangeRoot", {
                        text: rootText
                    });
                }
            }
            function exitInputMode() {
                receiverElement.classList.remove("input");
                receiver.selectAll();
            }
            function updatePosition() {
                var planed = updatePosition;
                var focusNode = minder.getSelectedNode();
                if (!focusNode) return;
                if (!planed.timer) {
                    planed.timer = setTimeout(function() {
                        var box = focusNode.getRenderBox("TextRenderer");
                        receiverElement.style.left = Math.round(box.x) + "px";
                        receiverElement.style.top = (debug.flaged ? Math.round(box.bottom + 30) : Math.round(box.y)) + "px";
                        //receiverElement.focus();
                        planed.timer = 0;
                    });
                }
            }
        }
        return module.exports = InputRuntime;
    }
};

//src/runtime/jumping.js
/**
 * @fileOverview
 *
 * 根据按键控制状态机的跳转
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[13] = {
    value: function(require, exports, module) {
        var Hotbox = _p.r(2);
        // Nice: http://unixpapa.com/js/key.html
        function isIntendToInput(e) {
            if (e.ctrlKey || e.metaKey || e.altKey) return false;
            // a-zA-Z
            if (e.keyCode >= 65 && e.keyCode <= 90) return true;
            // 0-9 以及其上面的符号
            if (e.keyCode >= 48 && e.keyCode <= 57) return true;
            // 小键盘区域 (除回车外)
            if (e.keyCode != 108 && e.keyCode >= 96 && e.keyCode <= 111) return true;
            // 小键盘区域 (除回车外)
            // @yinheli from pull request
            if (e.keyCode != 108 && e.keyCode >= 96 && e.keyCode <= 111) return true;
            // 输入法
            if (e.keyCode == 229 || e.keyCode === 0) return true;
            return false;
        }
        /**
     * @Desc: 下方使用receiver.enable()和receiver.disable()通过
     *        修改div contenteditable属性的hack来解决开启热核后依然无法屏蔽浏览器输入的bug;
     *        特别: win下FF对于此种情况必须要先blur在focus才能解决，但是由于这样做会导致用户
     *             输入法状态丢失，因此对FF暂不做处理
     * @Editor: Naixor
     * @Date: 2015.09.14
     */
        function JumpingRuntime() {
            var fsm = this.fsm;
            var minder = this.minder;
            var receiver = this.receiver;
            var container = this.container;
            var receiverElement = receiver.element;
            var hotbox = this.hotbox;
            var compositionLock = false;
            // normal -> *
            receiver.listen("normal", function(e) {
                // 为了防止处理进入edit模式而丢失处理的首字母,此时receiver必须为enable
                receiver.enable();
                // normal -> hotbox
                if (e.is("Space")) {
                    e.preventDefault();
                    // safari下Space触发hotbox,然而这时Space已在receiver上留下作案痕迹,因此抹掉
                    if (kity.Browser.safari) {
                        receiverElement.innerHTML = "";
                    }
                    return fsm.jump("hotbox", "space-trigger");
                }
                /**
             * check
             * @editor Naixor
             * @Date 2015-12-2
             */
                switch (e.type) {
                  case "keydown":
                    {
                        if (minder.getSelectedNode()) {
                            if (isIntendToInput(e)) {
                                return fsm.jump("input", "user-input");
                            }
                        } else {
                            receiverElement.innerHTML = "";
                        }
                        // normal -> normal shortcut
                        fsm.jump("normal", "shortcut-handle", e);
                        break;
                    }

                  case "keyup":
                    {
                        break;
                    }

                  default:
                    {}
                }
            });
            // hotbox -> normal
            receiver.listen("hotbox", function(e) {
                receiver.disable();
                e.preventDefault();
                var handleResult = hotbox.dispatch(e);
                if (hotbox.state() == Hotbox.STATE_IDLE && fsm.state() == "hotbox") {
                    return fsm.jump("normal", "hotbox-idle");
                }
            });
            // input => normal
            receiver.listen("input", function(e) {
                receiver.enable();
                if (e.type == "keydown") {
                    if (e.is("Enter")) {
                        e.preventDefault();
                        return fsm.jump("normal", "input-commit");
                    }
                    if (e.is("Esc")) {
                        e.preventDefault();
                        return fsm.jump("normal", "input-cancel");
                    }
                    if (e.is("Tab") || e.is("Shift + Tab")) {
                        e.preventDefault();
                    }
                } else if (e.type == "keyup" && e.is("Esc")) {
                    e.preventDefault();
                    if (!compositionLock) {
                        return fsm.jump("normal", "input-cancel");
                    }
                } else if (e.type == "compositionstart") {
                    compositionLock = true;
                } else if (e.type == "compositionend") {
                    setTimeout(function() {
                        compositionLock = false;
                    });
                }
            });
            //////////////////////////////////////////////
            /// 右键呼出热盒
            /// 判断的标准是：按下的位置和结束的位置一致
            //////////////////////////////////////////////
            var downX, downY;
            var MOUSE_RB = 2;
            // 右键
            container.addEventListener("mousedown", function(e) {
                if (e.button == MOUSE_RB) {
                    e.preventDefault();
                }
                if (fsm.state() == "hotbox") {
                    hotbox.active(Hotbox.STATE_IDLE);
                    fsm.jump("normal", "blur");
                } else if (fsm.state() == "normal" && e.button == MOUSE_RB) {
                    downX = e.clientX;
                    downY = e.clientY;
                }
            }, false);
            container.addEventListener("mousewheel", function(e) {
                if (fsm.state() == "hotbox") {
                    hotbox.active(Hotbox.STATE_IDLE);
                    fsm.jump("normal", "mousemove-blur");
                }
            }, false);
            container.addEventListener("contextmenu", function(e) {
                e.preventDefault();
            });
            container.addEventListener("mouseup", function(e) {
                if (fsm.state() != "normal") {
                    return;
                }
                if (e.button != MOUSE_RB || e.clientX != downX || e.clientY != downY) {
                    return;
                }
                if (!minder.getSelectedNode()) {
                    return;
                }
                fsm.jump("hotbox", "content-menu");
            }, false);
            // 阻止热盒事件冒泡，在热盒正确执行前导致热盒关闭
            hotbox.$element.addEventListener("mousedown", function(e) {
                e.stopPropagation();
            });
        }
        return module.exports = JumpingRuntime;
    }
};

//src/runtime/minder.js
/**
 * @fileOverview
 *
 * 脑图示例运行时
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[14] = {
    value: function(require, exports, module) {
        var Minder = _p.r(4);
        function MinderRuntime() {
            // 不使用 kityminder 的按键处理，由 ReceiverRuntime 统一处理
            var minder = new Minder({
                enableKeyReceiver: false,
                enableAnimation: true
            });
            // 渲染，初始化
            minder.renderTo(this.selector);
            minder.setTheme(null);
            minder.select(minder.getRoot(), true);
            minder.execCommand("text", "中心主题");
            // 导出给其它 Runtime 使用
            this.minder = minder;
        }
        return module.exports = MinderRuntime;
    }
};

//src/runtime/node.js
_p[15] = {
    value: function(require, exports, module) {
        function NodeRuntime() {
            var runtime = this;
            var minder = this.minder;
            var hotbox = this.hotbox;
            var fsm = this.fsm;
            var main = hotbox.state("main");
            var buttons = [ "前移:Alt+Up:ArrangeUp", "下级:Tab|Insert:AppendChildNode", "同级:Enter:AppendSiblingNode", "后移:Alt+Down:ArrangeDown", "删除:Delete|Backspace:RemoveNode", "上级:Shift+Tab|Shift+Insert:AppendParentNode" ];
            var AppendLock = 0;
            buttons.forEach(function(button) {
                var parts = button.split(":");
                var label = parts.shift();
                var key = parts.shift();
                var command = parts.shift();
                main.button({
                    position: "ring",
                    label: label,
                    key: key,
                    action: function() {
                        if (command.indexOf("Append") === 0) {
                            AppendLock++;
                            minder.execCommand(command, "分支主题");
                            // provide in input runtime
                            function afterAppend() {
                                if (!--AppendLock) {
                                    runtime.editText();
                                }
                                minder.off("layoutallfinish", afterAppend);
                            }
                            minder.on("layoutallfinish", afterAppend);
                        } else {
                            minder.execCommand(command);
                            fsm.jump("normal", "command-executed");
                        }
                    },
                    enable: function() {
                        return minder.queryCommandState(command) != -1;
                    }
                });
            });
            main.button({
                position: "bottom",
                label: "导入节点",
                key: "Alt + V",
                enable: function() {
                    var selectedNodes = minder.getSelectedNodes();
                    return selectedNodes.length == 1;
                },
                action: importNodeData,
                next: "idle"
            });
            main.button({
                position: "bottom",
                label: "导出节点",
                key: "Alt + C",
                enable: function() {
                    var selectedNodes = minder.getSelectedNodes();
                    return selectedNodes.length == 1;
                },
                action: exportNodeData,
                next: "idle"
            });
            function importNodeData() {
                minder.fire("importNodeData");
            }
            function exportNodeData() {
                minder.fire("exportNodeData");
            }
        }
        return module.exports = NodeRuntime;
    }
};

//src/runtime/priority.js
_p[16] = {
    value: function(require, exports, module) {
        function PriorityRuntime() {
            var minder = this.minder;
            var hotbox = this.hotbox;
            var main = hotbox.state("main");
            main.button({
                position: "top",
                label: "优先级",
                key: "P",
                next: "priority",
                enable: function() {
                    return minder.queryCommandState("priority") != -1;
                }
            });
            var priority = hotbox.state("priority");
            "123456789".replace(/./g, function(p) {
                priority.button({
                    position: "ring",
                    label: "P" + p,
                    key: p,
                    action: function() {
                        minder.execCommand("Priority", p);
                    }
                });
            });
            priority.button({
                position: "center",
                label: "移除",
                key: "Del",
                action: function() {
                    minder.execCommand("Priority", 0);
                }
            });
            priority.button({
                position: "top",
                label: "返回",
                key: "esc",
                next: "back"
            });
        }
        return module.exports = PriorityRuntime;
    }
};

//src/runtime/progress.js
_p[17] = {
    value: function(require, exports, module) {
        function ProgressRuntime() {
            var minder = this.minder;
            var hotbox = this.hotbox;
            var main = hotbox.state("main");
            main.button({
                position: "top",
                label: "进度",
                key: "G",
                next: "progress",
                enable: function() {
                    return minder.queryCommandState("progress") != -1;
                }
            });
            var progress = hotbox.state("progress");
            "012345678".replace(/./g, function(p) {
                progress.button({
                    position: "ring",
                    label: "G" + p,
                    key: p,
                    action: function() {
                        minder.execCommand("Progress", parseInt(p) + 1);
                    }
                });
            });
            progress.button({
                position: "center",
                label: "移除",
                key: "Del",
                action: function() {
                    minder.execCommand("Progress", 0);
                }
            });
            progress.button({
                position: "top",
                label: "返回",
                key: "esc",
                next: "back"
            });
        }
        return module.exports = ProgressRuntime;
    }
};

//src/runtime/receiver.js
/**
 * @fileOverview
 *
 * 键盘事件接收/分发器
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[18] = {
    value: function(require, exports, module) {
        var key = _p.r(23);
        var hotbox = _p.r(2);
        function ReceiverRuntime() {
            var fsm = this.fsm;
            var minder = this.minder;
            var me = this;
            // 接收事件的 div
            var element = document.createElement("div");
            element.contentEditable = true;
            /**
         * @Desc: 增加tabindex属性使得element的contenteditable不管是trur还是false都能有focus和blur事件
         * @Editor: Naixor
         * @Date: 2015.09.14
         */
            element.setAttribute("tabindex", -1);
            element.classList.add("receiver");
            element.onkeydown = element.onkeypress = element.onkeyup = dispatchKeyEvent;
            element.addEventListener("compositionstart", dispatchKeyEvent);
            // element.addEventListener('compositionend', dispatchKeyEvent);
            this.container.appendChild(element);
            // receiver 对象
            var receiver = {
                element: element,
                selectAll: function() {
                    // 保证有被选中的
                    if (!element.innerHTML) element.innerHTML = "&nbsp;";
                    var range = document.createRange();
                    var selection = window.getSelection();
                    range.selectNodeContents(element);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    element.focus();
                },
                /**
             * @Desc: 增加enable和disable方法用于解决热核态的输入法屏蔽问题
             * @Editor: Naixor
             * @Date: 2015.09.14
             */
                enable: function() {
                    element.setAttribute("contenteditable", true);
                },
                disable: function() {
                    element.setAttribute("contenteditable", false);
                },
                /**
             * @Desc: hack FF下div contenteditable的光标丢失BUG
             * @Editor: Naixor
             * @Date: 2015.10.15
             */
                fixFFCaretDisappeared: function() {
                    element.removeAttribute("contenteditable");
                    element.setAttribute("contenteditable", "true");
                    element.blur();
                    element.focus();
                },
                /**
             * 以此事件代替通过mouse事件来判断receiver丢失焦点的事件
             * @editor Naixor
             * @Date 2015-12-2
             */
                onblur: function(handler) {
                    element.onblur = handler;
                }
            };
            receiver.selectAll();
            minder.on("beforemousedown", receiver.selectAll);
            minder.on("receiverfocus", receiver.selectAll);
            minder.on("readonly", function() {
                // 屏蔽minder的事件接受，删除receiver和hotbox
                minder.disable();
                editor.receiver.element.parentElement.removeChild(editor.receiver.element);
                editor.hotbox.$container.removeChild(editor.hotbox.$element);
            });
            // 侦听器，接收到的事件会派发给所有侦听器
            var listeners = [];
            // 侦听指定状态下的事件，如果不传 state，侦听所有状态
            receiver.listen = function(state, listener) {
                if (arguments.length == 1) {
                    listener = state;
                    state = "*";
                }
                listener.notifyState = state;
                listeners.push(listener);
            };
            function dispatchKeyEvent(e) {
                e.is = function(keyExpression) {
                    var subs = keyExpression.split("|");
                    for (var i = 0; i < subs.length; i++) {
                        if (key.is(this, subs[i])) return true;
                    }
                    return false;
                };
                var listener, jumpState;
                for (var i = 0; i < listeners.length; i++) {
                    listener = listeners[i];
                    // 忽略不在侦听状态的侦听器
                    if (listener.notifyState != "*" && listener.notifyState != fsm.state()) {
                        continue;
                    }
                    /**
                 *
                 * 对于所有的侦听器，只允许一种处理方式：跳转状态。
                 * 如果侦听器确定要跳转，则返回要跳转的状态。
                 * 每个事件只允许一个侦听器进行状态跳转
                 * 跳转动作由侦听器自行完成（因为可能需要在跳转时传递 reason），返回跳转结果即可。
                 * 比如：
                 *
                 * ```js
                 *  receiver.listen('normal', function(e) {
                 *      if (isSomeReasonForJumpState(e)) {
                 *          return fsm.jump('newstate', e);
                 *      }
                 *  });
                 * ```
                 */
                    if (listener.call(null, e)) {
                        return;
                    }
                }
            }
            this.receiver = receiver;
        }
        return module.exports = ReceiverRuntime;
    }
};

//src/tool/debug.js
/**
 * @fileOverview
 *
 * 支持各种调试后门
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[19] = {
    value: function(require, exports, module) {
        var format = _p.r(20);
        function noop() {}
        function stringHash(str) {
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                hash += str.charCodeAt(i);
            }
            return hash;
        }
        /* global console */
        function Debug(flag) {
            var debugMode = this.flaged = window.location.search.indexOf(flag) != -1;
            if (debugMode) {
                var h = stringHash(flag) % 360;
                var flagStyle = format("background: hsl({0}, 50%, 80%); " + "color: hsl({0}, 100%, 30%); " + "padding: 2px 3px; " + "margin: 1px 3px 0 0;" + "border-radius: 2px;", h);
                var textStyle = "background: none; color: black;";
                this.log = function() {
                    var output = format.apply(null, arguments);
                    console.log(format("%c{0}%c{1}", flag, output), flagStyle, textStyle);
                };
            } else {
                this.log = noop;
            }
        }
        return module.exports = Debug;
    }
};

//src/tool/format.js
_p[20] = {
    value: function(require, exports, module) {
        function format(template, args) {
            if (typeof args != "object") {
                args = [].slice.call(arguments, 1);
            }
            return String(template).replace(/\{(\w+)\}/gi, function(match, $key) {
                return args[$key] || $key;
            });
        }
        return module.exports = format;
    }
};

//src/tool/innertext.js
/**
 * @fileOverview
 *
 * innerText polyfill
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[21] = {
    value: function(require, exports, module) {
        if (!("innerText" in document.createElement("a")) && "getSelection" in window) {
            HTMLElement.prototype.__defineGetter__("innerText", function() {
                var selection = window.getSelection(), ranges = [], str, i;
                // Save existing selections.
                for (i = 0; i < selection.rangeCount; i++) {
                    ranges[i] = selection.getRangeAt(i);
                }
                // Deselect everything.
                selection.removeAllRanges();
                // Select `el` and all child nodes.
                // 'this' is the element .innerText got called on
                selection.selectAllChildren(this);
                // Get the string representation of the selected nodes.
                str = selection.toString();
                // Deselect everything. Again.
                selection.removeAllRanges();
                // Restore all formerly existing selections.
                for (i = 0; i < ranges.length; i++) {
                    selection.addRange(ranges[i]);
                }
                // Oh look, this is what we wanted.
                // String representation of the element, close to as rendered.
                return str;
            });
            HTMLElement.prototype.__defineSetter__("innerText", function(text) {
                /**
             * @Desc: 解决FireFox节点内容删除后text为null，出现报错的问题
             * @Editor: Naixor
             * @Date: 2015.9.16
             */
                this.innerHTML = (text || "").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
            });
        }
    }
};

//src/tool/jsondiff.js
/**
 * @fileOverview
 *
 *
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[22] = {
    value: function(require, exports, module) {
        /*!
    * https://github.com/Starcounter-Jack/Fast-JSON-Patch
    * json-patch-duplex.js 0.5.0
    * (c) 2013 Joachim Wester
    * MIT license
    */
        var _objectKeys = function() {
            if (Object.keys) return Object.keys;
            return function(o) {
                var keys = [];
                for (var i in o) {
                    if (o.hasOwnProperty(i)) {
                        keys.push(i);
                    }
                }
                return keys;
            };
        }();
        function escapePathComponent(str) {
            if (str.indexOf("/") === -1 && str.indexOf("~") === -1) return str;
            return str.replace(/~/g, "~0").replace(/\//g, "~1");
        }
        function deepClone(obj) {
            if (typeof obj === "object") {
                return JSON.parse(JSON.stringify(obj));
            } else {
                return obj;
            }
        }
        // Dirty check if obj is different from mirror, generate patches and update mirror
        function _generate(mirror, obj, patches, path) {
            var newKeys = _objectKeys(obj);
            var oldKeys = _objectKeys(mirror);
            var changed = false;
            var deleted = false;
            for (var t = oldKeys.length - 1; t >= 0; t--) {
                var key = oldKeys[t];
                var oldVal = mirror[key];
                if (obj.hasOwnProperty(key)) {
                    var newVal = obj[key];
                    if (typeof oldVal == "object" && oldVal != null && typeof newVal == "object" && newVal != null) {
                        _generate(oldVal, newVal, patches, path + "/" + escapePathComponent(key));
                    } else {
                        if (oldVal != newVal) {
                            changed = true;
                            patches.push({
                                op: "replace",
                                path: path + "/" + escapePathComponent(key),
                                value: deepClone(newVal)
                            });
                        }
                    }
                } else {
                    patches.push({
                        op: "remove",
                        path: path + "/" + escapePathComponent(key)
                    });
                    deleted = true;
                }
            }
            if (!deleted && newKeys.length == oldKeys.length) {
                return;
            }
            for (var t = 0; t < newKeys.length; t++) {
                var key = newKeys[t];
                if (!mirror.hasOwnProperty(key)) {
                    patches.push({
                        op: "add",
                        path: path + "/" + escapePathComponent(key),
                        value: deepClone(obj[key])
                    });
                }
            }
        }
        function compare(tree1, tree2) {
            var patches = [];
            _generate(tree1, tree2, patches, "");
            return patches;
        }
        return module.exports = compare;
    }
};

//src/tool/key.js
_p[23] = {
    value: function(require, exports, module) {
        var keymap = _p.r(24);
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
            if ([ 16, 17, 18, 91 ].indexOf(keyEvent.keyCode) === -1) {
                /**
             * 解决浏览器输入法状态下对keyDown的keyCode判断不准确的问题,使用keyIdentifier,
             * 可以解决chrome和safari下的各种问题,其他浏览器依旧有问题,然而那并不影响我们对特
             * 需判断的按键进行判断(比如Space在safari输入法态下就是229,其他的就不是)
             * @editor Naixor
             * @Date 2015-12-2
             */
                if (keyEvent.keyCode === 229 && keyEvent.keyIdentifier) {
                    return hashCode |= parseInt(keyEvent.keyIdentifier.substr(2), 16);
                }
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

//src/tool/keymap.js
_p[24] = {
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
            Del: 46,
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
        } while (--n);
        module.exports = keymap;
    }
};

var moduleMapping = {
    "expose-editor": 1
};

function use(name) {
    _p.r([ moduleMapping[name] ]);
}
angular.module('kityminderEditor', [
    'ui.bootstrap',
	'ui.codemirror',
	'ui.colorpicker'
])
	.config(["$sceDelegateProvider", function($sceDelegateProvider) {
		$sceDelegateProvider.resourceUrlWhitelist([
			// Allow same origin resource loads.
			'self',
			// Allow loading from our assets domain.  Notice the difference between * and **.
			'http://agroup.baidu.com:8910/**',
            'http://cq01-fe-rdtest01.vm.baidu.com:8910/**',
            'http://agroup.baidu.com:8911/**'
		]);
	}]);
angular.module('kityminderEditor').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('ui/directive/appendNode/appendNode.html',
    "<div class=\"km-btn-group append-group\"><div class=\"km-btn-item append-child-node\" ng-disabled=\"minder.queryCommandState('AppendChildNode') === -1\" ng-click=\"minder.queryCommandState('AppendChildNode') === -1 || execCommand('AppendChildNode')\" title=\"{{ 'appendchildnode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'appendchildnode' | lang:'ui/command' }}</span></div><div class=\"km-btn-item append-parent-node\" ng-disabled=\"minder.queryCommandState('AppendParentNode') === -1\" ng-click=\"minder.queryCommandState('AppendParentNode') === -1 || execCommand('AppendParentNode')\" title=\"{{ 'appendparentnode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'appendparentnode' | lang:'ui/command' }}</span></div><div class=\"km-btn-item append-sibling-node\" ng-disabled=\"minder.queryCommandState('AppendSiblingNode') === -1\" ng-click=\"minder.queryCommandState('AppendSiblingNode') === -1 ||execCommand('AppendSiblingNode')\" title=\"{{ 'appendsiblingnode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'appendsiblingnode' | lang:'ui/command' }}</span></div></div>"
  );


  $templateCache.put('ui/directive/arrange/arrange.html',
    "<div class=\"km-btn-group arrange-group\"><div class=\"km-btn-item arrange-up\" ng-disabled=\"minder.queryCommandState('ArrangeUp') === -1\" ng-click=\"minder.queryCommandState('ArrangeUp') === -1 || minder.execCommand('ArrangeUp')\" title=\"{{ 'arrangeup' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'arrangeup' | lang:'ui/command' }}</span></div><div class=\"km-btn-item arrange-down\" ng-disabled=\"minder.queryCommandState('ArrangeDown') === -1\" ng-click=\"minder.queryCommandState('ArrangeDown') === -1 || minder.execCommand('ArrangeDown');\" title=\"{{ 'arrangedown' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'arrangedown' | lang:'ui/command' }}</span></div></div>"
  );


  $templateCache.put('ui/directive/colorPanel/colorPanel.html',
    "<div class=\"bg-color-wrap\"><span class=\"quick-bg-color\" ng-click=\"minder.queryCommandState('background') === -1 || minder.execCommand('background', bgColor)\" ng-disabled=\"minder.queryCommandState('background') === -1\"></span> <span color-picker class=\"bg-color\" set-color=\"setDefaultBg()\" ng-disabled=\"minder.queryCommandState('background') === -1\"><span class=\"caret\"></span></span> <span class=\"bg-color-preview\" ng-style=\"{ 'background-color': bgColor }\" ng-click=\"minder.queryCommandState('background') === -1 || minder.execCommand('background', bgColor)\" ng-disabled=\"minder.queryCommandState('background') === -1\"></span></div>"
  );


  $templateCache.put('ui/directive/expandLevel/expandLevel.html',
    "<div class=\"btn-group-vertical\" dropdown is-open=\"isopen\"><button type=\"button\" class=\"btn btn-default expand\" title=\"{{ 'expandtoleaf' | lang:'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"minder.execCommand('ExpandToLevel', 9999)\"></button> <button type=\"button\" class=\"btn btn-default expand-caption dropdown-toggle\" title=\"{{ 'expandtoleaf' | lang:'ui' }}\" dropdown-toggle><span class=\"caption\">{{ 'expandtoleaf' | lang:'ui' }}</span> <span class=\"caret\"></span> <span class=\"sr-only\">{{ 'expandtoleaf' | lang:'ui' }}</span></button><ul class=\"dropdown-menu\" role=\"menu\"><li ng-repeat=\"level in levels\"><a href ng-click=\"minder.execCommand('ExpandToLevel', level)\">{{ 'expandtolevel' + level | lang:'ui/command' }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/fontOperator/fontOperator.html',
    "<div class=\"font-operator\"><div class=\"dropdown font-family-list\" dropdown><div class=\"dropdown-toggle current-font-item\" dropdown-toggle ng-disabled=\"minder.queryCommandState('fontfamily') === -1\"><a href class=\"current-font-family\" title=\"{{ 'fontfamily' | lang: 'ui' }}\">{{ getFontfamilyName(minder.queryCommandValue('fontfamily')) || '字体' }}</a> <span class=\"caret\"></span></div><ul class=\"dropdown-menu font-list\"><li ng-repeat=\"f in fontFamilyList\" class=\"font-item-wrap\"><a ng-click=\"minder.execCommand('fontfamily', f.val)\" class=\"font-item\" ng-class=\"{ 'font-item-selected' : f == minder.queryCommandValue('fontfamily') }\" ng-style=\"{'font-family': f.val }\">{{ f.name }}</a></li></ul></div><div class=\"dropdown font-size-list\" dropdown><div class=\"dropdown-toggle current-font-item\" dropdown-toggle ng-disabled=\"minder.queryCommandState('fontsize') === -1\"><a href class=\"current-font-size\" title=\"{{ 'fontsize' | lang: 'ui' }}\">{{ minder.queryCommandValue('fontsize') || '字号' }}</a> <span class=\"caret\"></span></div><ul class=\"dropdown-menu font-list\"><li ng-repeat=\"f in fontSizeList\" class=\"font-item-wrap\"><a ng-click=\"minder.execCommand('fontsize', f)\" class=\"font-item\" ng-class=\"{ 'font-item-selected' : f == minder.queryCommandValue('fontsize') }\" ng-style=\"{'font-size': f + 'px'}\">{{ f }}</a></li></ul></div><span class=\"s-btn-icon font-bold\" ng-click=\"minder.queryCommandState('bold') === -1 || minder.execCommand('bold')\" ng-class=\"{'font-bold-selected' : minder.queryCommandState('bold') == 1}\" ng-disabled=\"minder.queryCommandState('bold') === -1\"></span> <span class=\"s-btn-icon font-italics\" ng-click=\"minder.queryCommandState('italic') === -1 || minder.execCommand('italic')\" ng-class=\"{'font-italics-selected' : minder.queryCommandState('italic') == 1}\" ng-disabled=\"minder.queryCommandState('italic') === -1\"></span><div class=\"font-color-wrap\"><span class=\"quick-font-color\" ng-click=\"minder.queryCommandState('forecolor') === -1 || minder.execCommand('forecolor', foreColor)\" ng-disabled=\"minder.queryCommandState('forecolor') === -1\">A</span> <span color-picker class=\"font-color\" set-color=\"setDefaultColor()\" ng-disabled=\"minder.queryCommandState('forecolor') === -1\"><span class=\"caret\"></span></span> <span class=\"font-color-preview\" ng-style=\"{ 'background-color': foreColor }\" ng-click=\"minder.queryCommandState('forecolor') === -1 || minder.execCommand('forecolor', foreColor)\" ng-disabled=\"minder.queryCommandState('forecolor') === -1\"></span></div><color-panel minder=\"minder\" class=\"inline-directive\"></color-panel></div>"
  );


  $templateCache.put('ui/directive/hyperLink/hyperLink.html',
    "<div class=\"btn-group-vertical\" dropdown is-open=\"isopen\"><button type=\"button\" class=\"btn btn-default hyperlink\" title=\"{{ 'link' | lang:'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"addHyperlink()\" ng-disabled=\"minder.queryCommandState('HyperLink') === -1\"></button> <button type=\"button\" class=\"btn btn-default hyperlink-caption dropdown-toggle\" ng-disabled=\"minder.queryCommandState('HyperLink') === -1\" title=\"{{ 'link' | lang:'ui' }}\" dropdown-toggle><span class=\"caption\">{{ 'link' | lang:'ui' }}</span> <span class=\"caret\"></span> <span class=\"sr-only\">{{ 'link' | lang:'ui' }}</span></button><ul class=\"dropdown-menu\" role=\"menu\"><li><a href ng-click=\"addHyperlink()\">{{ 'insertlink' | lang:'ui' }}</a></li><li><a href ng-click=\"minder.execCommand('HyperLink', null)\">{{ 'removelink' | lang:'ui' }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/imageBtn/imageBtn.html',
    "<div class=\"btn-group-vertical\" dropdown is-open=\"isopen\"><button type=\"button\" class=\"btn btn-default image-btn\" title=\"{{ 'image' | lang:'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"addImage()\" ng-disabled=\"minder.queryCommandState('Image') === -1\"></button> <button type=\"button\" class=\"btn btn-default image-btn-caption dropdown-toggle\" ng-disabled=\"minder.queryCommandState('Image') === -1\" title=\"{{ 'image' | lang:'ui' }}\" dropdown-toggle><span class=\"caption\">{{ 'image' | lang:'ui' }}</span> <span class=\"caret\"></span> <span class=\"sr-only\">{{ 'image' | lang:'ui' }}</span></button><ul class=\"dropdown-menu\" role=\"menu\"><li><a href ng-click=\"addImage()\">{{ 'insertimage' | lang:'ui' }}</a></li><li><a href ng-click=\"minder.execCommand('Image', '')\">{{ 'removeimage' | lang:'ui' }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/kityminderEditor/kityminderEditor.html',
    "<div class=\"minder-editor-container\"><div class=\"top-tab\" top-tab=\"minder\" editor=\"editor\" ng-if=\"minder\"></div><div search-box minder=\"minder\" ng-if=\"minder\"></div><div class=\"minder-editor\"></div><div class=\"km-note\" note-editor minder=\"minder\" ng-if=\"minder\"></div><div class=\"note-previewer\" note-previewer ng-if=\"minder\"></div><div class=\"navigator\" navigator minder=\"minder\" ng-if=\"minder\"></div></div>"
  );


  $templateCache.put('ui/directive/kityminderViewer/kityminderViewer.html',
    "<div class=\"minder-editor-container\"><div class=\"minder-viewer\"></div><div class=\"note-previewer\" note-previewer ng-if=\"minder\"></div><div class=\"navigator\" navigator minder=\"minder\" ng-if=\"minder\"></div></div>"
  );


  $templateCache.put('ui/directive/layout/layout.html',
    "<div class=\"readjust-layout\"><a ng-click=\"minder.queryCommandState('resetlayout') === -1 || minder.execCommand('resetlayout')\" class=\"btn-wrap\" ng-disabled=\"minder.queryCommandState('resetlayout') === -1\"><span class=\"btn-icon reset-layout-icon\"></span> <span class=\"btn-label\">{{ 'resetlayout' | lang: 'ui/command' }}</span></a></div>"
  );


  $templateCache.put('ui/directive/navigator/navigator.html',
    "<div class=\"nav-bar\"><div class=\"nav-btn zoom-in\" ng-click=\"minder.execCommand('zoomIn')\" title=\"{{ 'zoom-in' | lang : 'ui' }}\" ng-class=\"{ 'active' : getZoomRadio(zoom) == 0 }\"><div class=\"icon\"></div></div><div class=\"zoom-pan\"><div class=\"origin\" ng-style=\"{'transform': 'translate(0, ' + getHeight(100) + 'px)'}\" ng-click=\"minder.execCommand('zoom', 100);\"></div><div class=\"indicator\" ng-style=\"{\n" +
    "             'transform': 'translate(0, ' + getHeight(zoom) + 'px)',\n" +
    "             'transition': 'transform 200ms'\n" +
    "             }\"></div></div><div class=\"nav-btn zoom-out\" ng-click=\"minder.execCommand('zoomOut')\" title=\"{{ 'zoom-out' | lang : 'ui' }}\" ng-class=\"{ 'active' : getZoomRadio(zoom) == 1 }\"><div class=\"icon\"></div></div><div class=\"nav-btn hand\" ng-click=\"minder.execCommand('hand')\" title=\"{{ 'hand' | lang : 'ui' }}\" ng-class=\"{ 'active' : minder.queryCommandState('hand') == 1 }\"><div class=\"icon\"></div></div><div class=\"nav-btn camera\" ng-click=\"minder.execCommand('camera', minder.getRoot(), 600);\" title=\"{{ 'camera' | lang : 'ui' }}\"><div class=\"icon\"></div></div><div class=\"nav-btn nav-trigger\" ng-class=\"{'active' : isNavOpen}\" ng-click=\"toggleNavOpen()\" title=\"{{ 'navigator' | lang : 'ui' }}\"><div class=\"icon\"></div></div></div><div class=\"nav-previewer\" ng-show=\"isNavOpen\"></div>"
  );


  $templateCache.put('ui/directive/noteBtn/noteBtn.html',
    "<div class=\"btn-group-vertical note-btn-group\" dropdown is-open=\"isopen\"><button type=\"button\" class=\"btn btn-default note-btn\" title=\"{{ 'note' | lang:'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"addNote()\" ng-disabled=\"minder.queryCommandState('note') === -1\"></button> <button type=\"button\" class=\"btn btn-default note-btn-caption dropdown-toggle\" ng-disabled=\"minder.queryCommandState('note') === -1\" title=\"{{ 'note' | lang:'ui' }}\" dropdown-toggle><span class=\"caption\">{{ 'note' | lang:'ui' }}</span> <span class=\"caret\"></span> <span class=\"sr-only\">{{ 'note' | lang:'ui' }}</span></button><ul class=\"dropdown-menu\" role=\"menu\"><li><a href ng-click=\"addNote()\">{{ 'insertnote' | lang:'ui' }}</a></li><li><a href ng-click=\"minder.execCommand('note', null)\">{{ 'removenote' | lang:'ui' }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/noteEditor/noteEditor.html',
    "<div class=\"panel panel-default\" ng-init=\"noteEditorOpen = false\" ng-show=\"noteEditorOpen\"><div class=\"panel-heading\"><h3 class=\"panel-title\">备注</h3><span>（<a class=\"help\" href=\"https://www.zybuluo.com/techird/note/46064\" target=\"_blank\">支持 GFM 语法书写</a>）</span> <i class=\"close-note-editor glyphicon glyphicon-remove\" ng-click=\"closeNoteEditor()\"></i></div><div class=\"panel-body\"><div ng-show=\"noteEnabled\" ui-codemirror=\"{ onLoad: codemirrorLoaded }\" ng-model=\"noteContent\" ui-codemirror-opts=\"{\n" +
    "                gfm: true,\n" +
    "                breaks: true,\n" +
    "                lineWrapping : true,\n" +
    "                mode: 'gfm',\n" +
    "                dragDrop: false,\n" +
    "                lineNumbers:true\n" +
    "             }\"></div><p ng-show=\"!noteEnabled\" class=\"km-note-tips\">请选择节点编辑备注</p></div></div>"
  );


  $templateCache.put('ui/directive/notePreviewer/notePreviewer.html',
    "<div id=\"previewer-content\" ng-show=\"showNotePreviewer\" ng-style=\"previewerStyle\" ng-bind-html=\"noteContent\"></div>"
  );


  $templateCache.put('ui/directive/operation/operation.html',
    "<div class=\"km-btn-group operation-group\"><div class=\"km-btn-item edit-node\" ng-disabled=\"minder.queryCommandState('text') === -1\" ng-click=\"minder.queryCommandState('text') === -1 || editNode()\" title=\"{{ 'editnode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'editnode' | lang:'ui/command' }}</span></div><div class=\"km-btn-item remove-node\" ng-disabled=\"minder.queryCommandState('RemoveNode') === -1\" ng-click=\"minder.queryCommandState('RemoveNode') === -1 || minder.execCommand('RemoveNode');\" title=\"{{ 'removenode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'removenode' | lang:'ui/command' }}</span></div></div>"
  );


  $templateCache.put('ui/directive/priorityEditor/priorityEditor.html',
    "<ul class=\"km-priority tool-group\" ng-disabled=\"commandDisabled\"><li class=\"km-priority-item tool-group-item\" ng-repeat=\"p in priorities\" ng-click=\"commandDisabled || minder.execCommand('priority', p)\" ng-class=\"{ active: commandValue == p }\" title=\"{{ getPriorityTitle(p) }}\"><div class=\"km-priority-icon tool-group-icon priority-{{p}}\"></div></li></ul>"
  );


  $templateCache.put('ui/directive/progressEditor/progressEditor.html',
    "<ul class=\"km-progress tool-group\" ng-disabled=\"commandDisabled\"><li class=\"km-progress-item tool-group-item\" ng-repeat=\"p in progresses\" ng-click=\"commandDisabled || minder.execCommand('progress', p)\" ng-class=\"{ active: commandValue == p }\" title=\"{{ getProgressTitle(p) }}\"><div class=\"km-progress-icon tool-group-icon progress-{{p}}\"></div></li></ul>"
  );


  $templateCache.put('ui/directive/resourceEditor/resourceEditor.html',
    "<div class=\"resource-editor\"><div class=\"input-group\"><input class=\"form-control\" type=\"text\" ng-model=\"newResourceName\" ng-required ng-keypress=\"$event.keyCode == 13 && addResource(newResourceName)\" ng-disabled=\"!enabled\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" ng-click=\"addResource(newResourceName)\" ng-disabled=\"!enabled\">添加</button></span></div><div class=\"resource-dropdown clearfix\" id=\"resource-dropdown\"><ul class=\"km-resource\" ng-init=\"resourceListOpen = false\" ng-class=\"{'open': resourceListOpen}\"><li ng-repeat=\"resource in used\" ng-disabled=\"!enabled\" ng-blur=\"blurCB()\"><label style=\"background: {{resourceColor(resource.name)}}\"><input type=\"checkbox\" ng-model=\"resource.selected\" ng-disabled=\"!enabled\"> <span>{{resource.name}}</span></label></li></ul><div class=\"resource-caret\" click-anywhere-but-here=\"resourceListOpen = false\" is-active=\"resourceListOpen\" ng-click=\"resourceListOpen = !resourceListOpen\"><span class=\"caret\"></span></div></div></div>"
  );


  $templateCache.put('ui/directive/searchBox/searchBox.html',
    "<div id=\"search\" class=\"search-box clearfix\" ng-show=\"showSearch\"><div class=\"input-group input-group-sm search-input-wrap\"><input type=\"text\" id=\"search-input\" class=\"form-control search-input\" ng-model=\"keyword\" ng-keydown=\"handleKeyDown($event)\" aria-describedby=\"basic-addon2\"> <span class=\"input-group-addon search-addon\" id=\"basic-addon2\" ng-show=\"showTip\" ng-bind=\"'第 ' + curIndex + ' 条，共 ' + resultNum + ' 条'\"></span></div><div class=\"btn-group btn-group-sm prev-and-next-btn\" role=\"group\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"doSearch(keyword, 'prev')\"><span class=\"glyphicon glyphicon-chevron-up\"></span></button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"doSearch(keyword, 'next')\"><span class=\"glyphicon glyphicon-chevron-down\"></span></button></div><div class=\"close-search\" ng-click=\"exitSearch()\"><span class=\"glyphicon glyphicon-remove\"></span></div></div>"
  );


  $templateCache.put('ui/directive/searchBtn/searchBtn.html',
    "<div class=\"btn-group-vertical\" dropdown is-open=\"isopen\"><button type=\"button\" class=\"btn btn-default search\" title=\"{{ 'search' | lang:'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"enterSearch()\"></button> <button type=\"button\" class=\"btn btn-default search-caption dropdown-toggle\" ng-click=\"enterSearch()\" title=\"{{ 'search' | lang:'ui' }}\"><span class=\"caption\">{{ 'search' | lang:'ui' }}</span> <span class=\"sr-only\">{{ 'search' | lang:'ui' }}</span></button></div>"
  );


  $templateCache.put('ui/directive/selectAll/selectAll.html',
    "<div class=\"btn-group-vertical\" dropdown is-open=\"isopen\"><button type=\"button\" class=\"btn btn-default select\" title=\"{{ 'selectall' | lang:'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"select['all']()\"></button> <button type=\"button\" class=\"btn btn-default select-caption dropdown-toggle\" title=\"{{ 'selectall' | lang:'ui' }}\" dropdown-toggle><span class=\"caption\">{{ 'selectall' | lang:'ui' }}</span> <span class=\"caret\"></span> <span class=\"sr-only\">{{ 'selectall' | lang:'ui' }}</span></button><ul class=\"dropdown-menu\" role=\"menu\"><li ng-repeat=\"item in items\"><a href ng-click=\"select[item]()\">{{ 'select' + item | lang:'ui' }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/styleOperator/styleOperator.html',
    "<div class=\"style-operator\"><a ng-click=\"minder.queryCommandState('clearstyle') === -1 || minder.execCommand('clearstyle')\" class=\"btn-wrap clear-style\" ng-disabled=\"minder.queryCommandState('clearstyle') === -1\"><span class=\"btn-icon clear-style-icon\"></span> <span class=\"btn-label\">{{ 'clearstyle' | lang: 'ui' }}</span></a><div class=\"s-btn-group-vertical\"><a class=\"s-btn-wrap\" href ng-click=\"minder.queryCommandState('copystyle') === -1 || minder.execCommand('copystyle')\" ng-disabled=\"minder.queryCommandState('copystyle') === -1\"><span class=\"s-btn-icon copy-style-icon\"></span> <span class=\"s-btn-label\">{{ 'copystyle' | lang: 'ui' }}</span></a> <a class=\"s-btn-wrap paste-style-wrap\" href ng-click=\"minder.queryCommandState('pastestyle') === -1 || minder.execCommand('pastestyle')\" ng-disabled=\"minder.queryCommandState('pastestyle') === -1\"><span class=\"s-btn-icon paste-style-icon\"></span> <span class=\"s-btn-label\">{{ 'pastestyle' | lang: 'ui' }}</span></a></div></div>"
  );


  $templateCache.put('ui/directive/templateList/templateList.html',
    "<div class=\"dropdown temp-panel\" dropdown on-toggle=\"toggled(open)\"><div class=\"dropdown-toggle current-temp-item\" ng-disabled=\"minder.queryCommandState('template') === -1\" dropdown-toggle><a href class=\"temp-item {{ minder.queryCommandValue('template') }}\" title=\"{{ minder.queryCommandValue('template') | lang: 'template' }}\"></a> <span class=\"caret\"></span></div><ul class=\"dropdown-menu temp-list\"><li ng-repeat=\"(key, templateObj) in templateList\" class=\"temp-item-wrap\"><a ng-click=\"minder.execCommand('template', key);\" class=\"temp-item {{key}}\" ng-class=\"{ 'temp-item-selected' : key == minder.queryCommandValue('template') }\" title=\"{{ key | lang: 'template' }}\"></a></li></ul></div>"
  );


  $templateCache.put('ui/directive/themeList/themeList.html',
    "<div class=\"dropdown theme-panel\" dropdown><div class=\"dropdown-toggle theme-item-selected\" dropdown-toggle ng-disabled=\"minder.queryCommandState('theme') === -1\"><a href class=\"theme-item\" ng-style=\"getThemeThumbStyle(minder.queryCommandValue('theme'))\" title=\"{{ minder.queryCommandValue('theme') | lang: 'theme'; }}\">{{ minder.queryCommandValue('theme') | lang: 'theme'; }}</a> <span class=\"caret\"></span></div><ul class=\"dropdown-menu theme-list\"><li ng-repeat=\"key in themeKeyList\" class=\"theme-item-wrap\"><a ng-click=\"minder.execCommand('theme', key);\" class=\"theme-item\" ng-style=\"getThemeThumbStyle(key)\" title=\"{{ key | lang: 'theme'; }}\">{{ key | lang: 'theme'; }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/topTab/topTab.html',
    "<tabset><tab heading=\"{{ 'idea' | lang: 'ui/tabs'; }}\" ng-click=\"toggleTopTab('idea')\" select=\"setCurTab('idea')\"><undo-redo editor=\"editor\"></undo-redo><append-node minder=\"minder\"></append-node><arrange minder=\"minder\"></arrange><operation minder=\"minder\"></operation><hyper-link minder=\"minder\"></hyper-link><image-btn minder=\"minder\"></image-btn><note-btn minder=\"minder\"></note-btn><priority-editor minder=\"minder\"></priority-editor><progress-editor minder=\"minder\"></progress-editor><resource-editor minder=\"minder\"></resource-editor></tab><tab heading=\"{{ 'appearence' | lang: 'ui/tabs'; }}\" ng-click=\"toggleTopTab('appearance')\" select=\"setCurTab('appearance')\"><template-list minder=\"minder\" class=\"inline-directive\"></template-list><theme-list minder=\"minder\"></theme-list><layout minder=\"minder\" class=\"inline-directive\"></layout><style-operator minder=\"minder\" class=\"inline-directive\"></style-operator><font-operator minder=\"minder\" class=\"inline-directive\"></font-operator></tab><tab heading=\"{{ 'view' | lang: 'ui/tabs'; }}\" ng-click=\"toggleTopTab('view')\" select=\"setCurTab('view')\"><expand-level minder=\"minder\"></expand-level><select-all minder=\"minder\"></select-all><search-btn minder=\"minder\"></search-btn></tab></tabset>"
  );


  $templateCache.put('ui/directive/undoRedo/undoRedo.html',
    "<div class=\"km-btn-group do-group\"><div class=\"km-btn-item undo\" ng-disabled=\"editor.history.hasUndo() == false\" ng-click=\"editor.history.hasUndo() == false || editor.history.undo();\" title=\"{{ 'undo' | lang:'ui' }}\"><i class=\"km-btn-icon\"></i></div><div class=\"km-btn-item redo\" ng-disabled=\"editor.history.hasRedo() == false\" ng-click=\"editor.history.hasRedo() == false || editor.history.redo()\" title=\"{{ 'redo' | lang:'ui' }}\"><i class=\"km-btn-icon\"></i></div></div>"
  );


  $templateCache.put('ui/dialog/hyperlink/hyperlink.tpl.html',
    "<div class=\"modal-header\"><h3 class=\"modal-title\">链接</h3></div><div class=\"modal-body\"><form><div class=\"form-group\" id=\"link-url-wrap\" ng-class=\"{true: 'has-success', false: 'has-error'}[urlPassed]\"><label for=\"link-url\">链接地址：</label><input type=\"text\" class=\"form-control\" ng-model=\"url\" ng-blur=\"urlPassed = R_URL.test(url)\" ng-focus=\"this.value = url\" ng-keydown=\"shortCut($event)\" id=\"link-url\" placeholder=\"必填：以 http(s):// 或 ftp:// 开头\"></div><div class=\"form-group\" ng-class=\"{'has-success' : titlePassed}\"><label for=\"link-title\">提示文本：</label><input type=\"text\" class=\"form-control\" ng-model=\"title\" ng-blur=\"titlePassed = true\" id=\"link-title\" placeholder=\"选填：鼠标在链接上悬停时提示的文本\"></div></form></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"ok()\">确定</button> <button class=\"btn btn-warning\" ng-click=\"cancel()\">取消</button></div>"
  );


  $templateCache.put('ui/dialog/imExportNode/imExportNode.tpl.html',
    "<div class=\"modal-header\"><h3 class=\"modal-title\">{{ title }}</h3></div><div class=\"modal-body\"><textarea type=\"text\" class=\"form-control single-input\" rows=\"8\" ng-keydown=\"shortCut($event);\" ng-model=\"value\" ng-readonly=\"type === 'export'\">\n" +
    "    </textarea></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"ok()\" ng-disabled=\"type === 'import' && value == ''\">OK</button> <button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button></div>"
  );


  $templateCache.put('ui/dialog/image/image.tpl.html',
    "<div class=\"modal-header\"><h3 class=\"modal-title\">图片</h3></div><div class=\"modal-body\"><tabset><tab heading=\"图片搜索\"><form class=\"form-inline\"><div class=\"form-group\"><label for=\"search-keyword\">关键词：</label><input type=\"text\" class=\"form-control\" ng-model=\"data.searchKeyword2\" id=\"search-keyword\" placeholder=\"请输入搜索的关键词\"></div><button class=\"btn btn-primary\" ng-click=\"searchImage()\">百度一下</button></form><div class=\"search-result\" id=\"search-result\"><ul><li ng-repeat=\"image in list\" id=\"{{ 'img-item' + $index }}\" ng-class=\"{'selected' : isSelected}\" ng-click=\"selectImage($event)\"><img id=\"{{ 'img-' + $index }}\" ng-src=\"{{ image.src || '' }}\" alt=\"{{ image.title }}\" onerror=\"this.parentNode.removeChild(this)\"> <span>{{ image.title }}</span></li></ul></div></tab><tab heading=\"外链图片\"><form><div class=\"form-group\" ng-class=\"{true: 'has-success', false: 'has-error'}[urlPassed]\"><label for=\"image-url\">链接地址：</label><input type=\"text\" class=\"form-control\" ng-model=\"data.url\" ng-blur=\"urlPassed = data.R_URL.test(data.url)\" ng-focus=\"this.value = data.url\" ng-keydown=\"shortCut($event)\" id=\"image-url\" placeholder=\"必填：以 http(s):// 开头\"></div><div class=\"form-group\" ng-class=\"{'has-success' : titlePassed}\"><label for=\"image-title\">提示文本：</label><input type=\"text\" class=\"form-control\" ng-model=\"data.title\" ng-blur=\"titlePassed = true\" id=\"image-title\" placeholder=\"选填：鼠标在图片上悬停时提示的文本\"></div><div class=\"form-group\"><label for=\"image-preview\">图片预览：</label><img class=\"image-preview\" id=\"image-preview\" ng-src=\"{{ data.url }}\" alt=\"{{ data.title }}\"></div></form></tab><tab heading=\"上传图片\" active=\"true\"><form><div class=\"form-group\"><input type=\"file\" name=\"upload-image\" id=\"upload-image\" class=\"upload-image\" accept=\".jpg,.JPG,jpeg,JPEG,.png,.PNG,.gif,.GIF\" onchange=\"angular.element(this).scope().uploadImage()\"><label for=\"upload-image\" class=\"btn btn-primary\"><span>选择文件&hellip;</span></label></div><div class=\"form-group\" ng-class=\"{'has-success' : titlePassed}\"><label for=\"image-title\">提示文本：</label><input type=\"text\" class=\"form-control\" ng-model=\"data.title\" ng-blur=\"titlePassed = true\" id=\"image-title\" placeholder=\"选填：鼠标在图片上悬停时提示的文本\"></div><div class=\"form-group\"><label for=\"image-preview\">图片预览：</label><img class=\"image-preview\" id=\"image-preview\" ng-src=\"{{ data.url }}\" title=\"{{ data.title }}\" alt=\"{{ data.title }}\"></div></form></tab></tabset></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"ok()\">确定</button> <button class=\"btn btn-warning\" ng-click=\"cancel()\">取消</button></div>"
  );

}]);

angular.module('kityminderEditor').service('commandBinder', function() {
	return {
		bind: function(minder, command, scope) {

			minder.on('interactchange', function() {
				scope.commandDisabled = minder.queryCommandState(command) === -1;
				scope.commandValue = minder.queryCommandValue(command);
				scope.$apply();
			});
		}
	};
});
angular.module('kityminderEditor')
	.provider('config',  function() {

		this.config = {
			// 右侧面板最小宽度
			ctrlPanelMin: 250,

			// 右侧面板宽度
			ctrlPanelWidth: parseInt(window.localStorage.__dev_minder_ctrlPanelWidth) || 250,

			// 分割线宽度
			dividerWidth: 3,

			// 默认语言
			defaultLang: 'zh-cn',

			// 放大缩小比例
			zoom: [10, 20, 30, 50, 80, 100, 120, 150, 200],

            // 图片上传接口
            imageUpload: 'server/imageUpload.php'
		};

		this.set = function(key, value) {
            var supported = Object.keys(this.config);
            var configObj = {};

            // 支持全配置
            if (typeof key === 'object') {
                configObj = key;
            }
            else {
                configObj[key] = value;
            }

            for (var i in configObj) {
                if (configObj.hasOwnProperty(i) && supported.indexOf(i) !== -1) {
                    this.config[i] = configObj[i];
                }
                else {
                    console.error('Unsupported config key: ', key, ', please choose in :', supported.join(', '));
                    return false;
                }
            }

            return true;
		};

		this.$get = function () {
			var me = this;

			return {
				get: function (key) {
                    if (arguments.length === 0) {
                        return me.config;
                    }

					if (me.config.hasOwnProperty(key)) {
						return me.config[key];
					}

					console.warn('Missing config key pair for : ', key);
					return '';
				}

			};
		}
	});
angular.module('kityminderEditor')
	.service('lang.zh-cn', function() {
		return {
			'zh-cn': {
				'template': {
					'default': '思维导图',
					'tianpan': '天盘图',
					'structure': '组织结构图',
					'filetree': '目录组织图',
					'right': '逻辑结构图',
					'fish-bone': '鱼骨头图'
				},
				'theme': {
					'classic': '脑图经典',
					'classic-compact': '紧凑经典',
					'snow': '温柔冷光',
					'snow-compact': '紧凑冷光',
					'fish': '鱼骨图',
					'wire': '线框',
					'fresh-red': '清新红',
					'fresh-soil': '泥土黄',
					'fresh-green': '文艺绿',
					'fresh-blue': '天空蓝',
					'fresh-purple': '浪漫紫',
					'fresh-pink': '脑残粉',
					'fresh-red-compat': '紧凑红',
					'fresh-soil-compat': '紧凑黄',
					'fresh-green-compat': '紧凑绿',
					'fresh-blue-compat': '紧凑蓝',
					'fresh-purple-compat': '紧凑紫',
					'fresh-pink-compat': '紧凑粉',
					'tianpan':'经典天盘',
					'tianpan-compact': '紧凑天盘'
				},
				'maintopic': '中心主题',
				'topic': '分支主题',
				'panels': {
					'history': '历史',
					'template': '模板',
					'theme': '皮肤',
					'layout': '布局',
					'style': '样式',
					'font': '文字',
					'color': '颜色',
					'background': '背景',
					'insert': '插入',
					'arrange': '调整',
					'nodeop': '当前',
					'priority': '优先级',
					'progress': '进度',
					'resource': '资源',
					'note': '备注',
					'attachment': '附件',
					'word': '文字'
				},
				'error_message': {
					'title': '哎呀，脑图出错了',

					'err_load': '加载脑图失败',
					'err_save': '保存脑图失败',
					'err_network': '网络错误',
					'err_doc_resolve': '文档解析失败',
					'err_unknown': '发生了奇怪的错误',
					'err_localfile_read': '文件读取错误',
					'err_download': '文件下载失败',
					'err_remove_share': '取消分享失败',
					'err_create_share': '分享失败',
					'err_mkdir': '目录创建失败',
					'err_ls': '读取目录失败',
					'err_share_data': '加载分享内容出错',
					'err_share_sync_fail': '分享内容同步失败',
					'err_move_file': '文件移动失败',
					'err_rename': '重命名失败',

					'unknownreason': '可能是外星人篡改了代码...',
					'pcs_code': {
						3: "不支持此接口",
						4: "没有权限执行此操作",
						5: "IP未授权",
						110: "用户会话已过期，请重新登录",
						31001: "数据库查询错误",
						31002: "数据库连接错误",
						31003: "数据库返回空结果",
						31021: "网络错误",
						31022: "暂时无法连接服务器",
						31023: "输入参数错误",
						31024: "app id为空",
						31025: "后端存储错误",
						31041: "用户的cookie不是合法的百度cookie",
						31042: "用户未登陆",
						31043: "用户未激活",
						31044: "用户未授权",
						31045: "用户不存在",
						31046: "用户已经存在",
						31061: "文件已经存在",
						31062: "文件名非法",
						31063: "文件父目录不存在",
						31064: "无权访问此文件",
						31065: "目录已满",
						31066: "文件不存在",
						31067: "文件处理出错",
						31068: "文件创建失败",
						31069: "文件拷贝失败",
						31070: "文件删除失败",
						31071: "不能读取文件元信息",
						31072: "文件移动失败",
						31073: "文件重命名失败",
						31079: "未找到文件MD5，请使用上传API上传整个文件。",
						31081: "superfile创建失败",
						31082: "superfile 块列表为空",
						31083: "superfile 更新失败",
						31101: "tag系统内部错误",
						31102: "tag参数错误",
						31103: "tag系统错误",
						31110: "未授权设置此目录配额",
						31111: "配额管理只支持两级目录",
						31112: "超出配额",
						31113: "配额不能超出目录祖先的配额",
						31114: "配额不能比子目录配额小",
						31141: "请求缩略图服务失败",
						31201: "签名错误",
						31202: "文件不存在",
						31203: "设置acl失败",
						31204: "请求acl验证失败",
						31205: "获取acl失败",
						31206: "acl不存在",
						31207: "bucket已存在",
						31208: "用户请求错误",
						31209: "服务器错误",
						31210: "服务器不支持",
						31211: "禁止访问",
						31212: "服务不可用",
						31213: "重试出错",
						31214: "上传文件data失败",
						31215: "上传文件meta失败",
						31216: "下载文件data失败",
						31217: "下载文件meta失败",
						31218: "容量超出限额",
						31219: "请求数超出限额",
						31220: "流量超出限额",
						31298: "服务器返回值KEY非法",
						31299: "服务器返回值KEY不存在"
					}
				},
				'ui': {
					'shared_file_title': '[分享的] {0} (只读)',
					'load_share_for_edit': '正在加载分享的文件...',
					'share_sync_success': '分享内容已同步',
					'recycle_clear_confirm': '确认清空回收站么？清空后的文件无法恢复。',

					'fullscreen_exit_hint': '按 Esc 或 F11 退出全屏',

					'error_detail': '详细信息',
					'copy_and_feedback': '复制并反馈',
					'move_file_confirm': '确定把 "{0}" 移动到 "{1}" 吗？',
					'rename': '重命名',
					'rename_success': '{0} 重命名成功',
					'move_success': '{0} 移动成功到 {1}',

					'command': {
						'appendsiblingnode': '插入同级主题',
                        'appendparentnode': '插入上级主题',
						'appendchildnode': '插入下级主题',
						'removenode': '删除',
						'editnode': '编辑',
						'arrangeup': '上移',
						'arrangedown': '下移',
						'resetlayout': '整理布局',
						'expandtoleaf': '展开全部节点',
						'expandtolevel1': '展开到一级节点',
						'expandtolevel2': '展开到二级节点',
						'expandtolevel3': '展开到三级节点',
						'expandtolevel4': '展开到四级节点',
						'expandtolevel5': '展开到五级节点',
						'expandtolevel6': '展开到六级节点',
						'fullscreen': '全屏',
						'outline': '大纲'
					},

					'search':'搜索',

					'expandtoleaf': '展开',

					'back': '返回',

					'undo': '撤销 (Ctrl + Z)',
					'redo': '重做 (Ctrl + Y)',

					'tabs': {
						'idea': '思路',
						'appearence': '外观',
						'view': '视图'
					},

					'quickvisit': {
						'new': '新建 (Ctrl + Alt + N)',
						'save': '保存 (Ctrl + S)',
						'share': '分享 (Ctrl + Alt + S)',
						'feedback': '反馈问题（F1）',
						'editshare': '编辑'
					},

					'menu': {

						'mainmenutext': '百度脑图', // 主菜单按钮文本

						'newtab': '新建',
						'opentab': '打开',
						'savetab': '保存',
						'sharetab': '分享',
						'preferencetab': '设置',
						'helptab': '帮助',
						'feedbacktab': '反馈',
						'recenttab': '最近使用',
						'netdisktab': '百度云存储',
						'localtab': '本地文件',
						'drafttab': '草稿箱',
						'downloadtab': '导出到本地',
						'createsharetab': '当前脑图',
						'managesharetab': '已分享',

						'newheader': '新建脑图',
						'openheader': '打开',
						'saveheader': '保存到',
						'draftheader': '草稿箱',
						'shareheader': '分享我的脑图',
						'downloadheader': '导出到指定格式',
						'preferenceheader': '偏好设置',
						'helpheader': '帮助',
						'feedbackheader': '反馈'
					},

					'mydocument': '我的文档',
					'emptydir': '目录为空！',
					'pickfile': '选择文件...',
					'acceptfile': '支持的格式：{0}',
					'dropfile': '或将文件拖至此处',
					'unsupportedfile': '不支持的文件格式',
					'untitleddoc': '未命名文档',
					'overrideconfirm': '{0} 已存在，确认覆盖吗？',
					'checklogin': '检查登录状态中...',
					'loggingin': '正在登录...',
					'recent': '最近打开',
					'clearrecent': '清空',
					'clearrecentconfirm': '确认清空最近文档列表？',
					'cleardraft': '清空',
					'cleardraftconfirm': '确认清空草稿箱？',

					'none_share': '不分享',
					'public_share': '公开分享',
					'password_share': '私密分享',
					'email_share': '邮件邀请',
					'url_share': '脑图 URL 地址：',
					'sns_share': '社交网络分享：',
					'sns_share_text': '“{0}” - 我用百度脑图制作的思维导图，快看看吧！（地址：{1}）',
					'none_share_description': '不分享当前脑图',
					'public_share_description': '创建任何人可见的分享',
					'share_button_text': '创建',
					'password_share_description': '创建需要密码才可见的分享',
					'email_share_description': '创建指定人可见的分享，您还可以允许他们编辑',
					'ondev': '敬请期待！',
					'create_share_failed': '分享失败：{0}',
					'remove_share_failed': '删除失败：{1}',
					'copy': '复制',
					'copied': '已复制',
					'shared_tip': '当前脑图被 {0}  分享，你可以修改之后保存到自己的网盘上或再次分享',
					'current_share': '当前脑图',
					'manage_share': '我的分享',
					'share_remove_action': '不分享该脑图',
					'share_view_action': '打开分享地址',
					'share_edit_action': '编辑分享的文件',

					'login': '登录',
					'logout': '注销',
					'switchuser': '切换账户',
					'userinfo': '个人信息',
					'gotonetdisk': '我的网盘',
					'requirelogin': '请 <a class="login-button">登录</a> 后使用',
					'saveas': '保存为',
					'filename': '文件名',
					'fileformat': '保存格式',
					'save': '保存',
					'mkdir': '新建目录',
					'recycle': '回收站',
					'newdir': '未命名目录',

					'bold': '加粗',
					'italic': '斜体',
					'forecolor': '字体颜色',
					'fontfamily': '字体',
					'fontsize': '字号',
					'layoutstyle': '主题',
					'node': '节点操作',
					'saveto': '另存为',
					'hand': '允许拖拽',
					'camera': '定位根节点',
					'zoom-in': '放大（Ctrl+）',
					'zoom-out': '缩小（Ctrl-）',
					'markers': '标签',
					'resource': '资源',
					'help': '帮助',
					'preference': '偏好设置',
					'expandnode': '展开到叶子',
					'collapsenode': '收起到一级节点',
					'template': '模板',
					'theme': '皮肤',
					'clearstyle': '清除样式',
					'copystyle': '复制样式',
					'pastestyle': '粘贴样式',
					'appendsiblingnode': '同级主题',
					'appendchildnode': '下级主题',
					'arrangeup': '前调',
					'arrangedown': '后调',
					'editnode': '编辑',
					'removenode': '移除',
					'priority': '优先级',
					'progress': {
						'p1': '未开始',
						'p2': '完成 1/8',
						'p3': '完成 1/4',
						'p4': '完成 3/8',
						'p5': '完成一半',
						'p6': '完成 5/8',
						'p7': '完成 3/4',
						'p8': '完成 7/8',
						'p9': '已完成',
						'p0': '清除进度'
					},
					'link': '链接',
					'image': '图片',
					'note': '备注',
                    'insertlink': '插入链接',
                    'insertimage': '插入图片',
                    'insertnote': '插入备注',
					'removelink': '移除已有链接',
					'removeimage': '移除已有图片',
					'removenote': '移除已有备注',
					'resetlayout': '整理',

					'justnow': '刚刚',
					'minutesago': '{0} 分钟前',
					'hoursago': '{0} 小时前',
					'yesterday': '昨天',
					'daysago': '{0} 天前',
					'longago': '很久之前',

					'redirect': '您正在打开连接 {0}，百度脑图不能保证连接的安全性，是否要继续？',
					'navigator': '导航器',

					'unsavedcontent': '当前文件还没有保存到网盘：\n\n{0}\n\n虽然未保存的数据会缓存在草稿箱，但是清除浏览器缓存会导致草稿箱清除。',

					'shortcuts': '快捷键',
					'contact': '联系与反馈',
					'email': '邮件组',
					'qq_group': 'QQ 群',
					'github_issue': 'Github',
					'baidu_tieba': '贴吧',

					'clipboardunsupported': '您的浏览器不支持剪贴板，请使用快捷键复制',

					'load_success': '{0} 加载成功',
					'save_success': '{0} 已保存于 {1}',
					'autosave_success': '{0} 已自动保存于 {1}',

					'selectall': '全选',
					'selectrevert': '反选',
					'selectsiblings': '选择兄弟节点',
					'selectlevel': '选择同级节点',
					'selectpath': '选择路径',
					'selecttree': '选择子树'
				},
				'popupcolor': {
					'clearColor': '清空颜色',
					'standardColor': '标准颜色',
					'themeColor': '主题颜色'
				},
				'dialogs': {
					'markers': {
						'static': {
							'lang_input_text': '文本内容：',
							'lang_input_url': '链接地址：',
							'lang_input_title': '标题：',
							'lang_input_target': '是否在新窗口：'
						},
						'priority': '优先级',
						'none': '无',
						'progress': {
							'title': '进度',
							'notdone': '未完成',
							'done1': '完成 1/8',
							'done2': '完成 1/4',
							'done3': '完成 3/8',
							'done4': '完成 1/2',
							'done5': '完成 5/8',
							'done6': '完成 3/4',
							'done7': '完成 7/8',
							'done': '已完成'
						}
					},
					'help': {

					},
					'hyperlink': {},
					'image': {},
					'resource': {}
				},
				'hyperlink': {
					'hyperlink': '链接...',
					'unhyperlink': '移除链接'
				},
				'image': {
					'image': '图片...',
					'removeimage': '移除图片'
				},
				'marker': {
					'marker': '进度/优先级...'
				},
				'resource': {
					'resource': '资源...'
				}
			}
		}
	});
/**
 * @fileOverview
 *
 * UI 状态的 LocalStorage 的存取文件，未来可能在离线编辑的时候升级
 *
 * @author: zhangbobell
 * @email : zhangbobell@163.com
 *
 * @copyright: Baidu FEX, 2015
 */
angular.module('kityminderEditor')
    .service('memory', function() {

        function isQuotaExceeded(e) {
            var quotaExceeded = false;
            if (e) {
                if (e.code) {
                    switch (e.code) {
                        case 22:
                            quotaExceeded = true;
                            break;
                        case 1014:
                            // Firefox
                            if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                                quotaExceeded = true;
                            }
                            break;
                    }
                } else if (e.number === -2147024882) {
                    // Internet Explorer 8
                    quotaExceeded = true;
                }
            }
            return quotaExceeded;
        }

        return {
            get: function(key) {
                var value = window.localStorage.getItem(key);
                return null || JSON.parse(value);
            },

            set: function(key, value) {
                try {
                    window.localStorage.setItem(key, JSON.stringify(value));
                    return true;
                } catch(e) {
                    if (isQuotaExceeded(e)) {
                        return false;
                    }
                }
            },
            remove: function(key) {
                var value = window.localStorage.getItem(key);
                window.localStorage.removeItem(key);
                return value;
            },
            clear: function() {
                window.localStorage.clear();
            }
    }
});
angular.module('kityminderEditor')
    .service('minder.service',  function() {

        var callbackQueue = [];

        function registerEvent(callback) {
            callbackQueue.push(callback);
        }

        function executeCallback() {
            callbackQueue.forEach(function(ele) {
                ele.apply(this, arguments);
            })
        }

        return {
            registerEvent: registerEvent,
            executeCallback: executeCallback
        }
    });
angular.module('kityminderEditor')
    .service('resourceService', ['$document', function($document) {
    var openScope = null;

    this.open = function( dropdownScope ) {
        if ( !openScope ) {
            $document.bind('click', closeDropdown);
            $document.bind('keydown', escapeKeyBind);
        }

        if ( openScope && openScope !== dropdownScope ) {
            openScope.resourceListOpen = false;
        }

        openScope = dropdownScope;
    };

    this.close = function( dropdownScope ) {
        if ( openScope === dropdownScope ) {
            openScope = null;
            $document.unbind('click', closeDropdown);
            $document.unbind('keydown', escapeKeyBind);
        }
    };

    var closeDropdown = function( evt ) {
        // This method may still be called during the same mouse event that
        // unbound this event handler. So check openScope before proceeding.
        //console.log(evt, openScope);
        if (!openScope) { return; }

        var toggleElement = openScope.getToggleElement();
        if ( evt && toggleElement && toggleElement[0].contains(evt.target) ) {
            return;
        }

        openScope.$apply(function() {
            console.log('to close the resourcelist');
            openScope.resourceListOpen = false;
        });
    };

    var escapeKeyBind = function( evt ) {
        if ( evt.which === 27 ) {
            openScope.focusToggleElement();
            closeDropdown();
        }
    };
}])
angular.module('kityminderEditor').service('revokeDialog', ['$modal', 'minder.service', function($modal, minderService) {

    minderService.registerEvent(function() {

        // 触发导入节点或导出节点对话框
        var minder = window.minder;
        var editor = window.editor;
        var parentFSM = editor.hotbox.getParentFSM();


        minder.on('importNodeData', function() {
            parentFSM.jump('modal', 'import-text-modal');

            var importModal = $modal.open({
                animation: true,
                templateUrl: 'ui/dialog/imExportNode/imExportNode.tpl.html',
                controller: 'imExportNode.ctrl',
                size: 'md',
                resolve: {
                    title: function() {
                        return '导入节点';
                    },
                    defaultValue: function() {
                        return '';
                    },
                    type: function() {
                        return 'import';
                    }
                }
            });

            importModal.result.then(function(result) {
                try{
                    minder.Text2Children(minder.getSelectedNode(), result);
                } catch(e) {
                    alert(e);
                }
                parentFSM.jump('normal', 'import-text-finish');
                editor.receiver.selectAll();
            }, function() {
                parentFSM.jump('normal', 'import-text-finish');
                editor.receiver.selectAll();
            });
        });

        minder.on('exportNodeData', function() {
            parentFSM.jump('modal', 'export-text-modal');

            var exportModal = $modal.open({
                animation: true,
                templateUrl: 'ui/dialog/imExportNode/imExportNode.tpl.html',
                controller: 'imExportNode.ctrl',
                size: 'md',
                resolve: {
                    title: function() {
                        return '导出节点';
                    },
                    defaultValue: function() {
                        var selectedNode = minder.getSelectedNode(),
                            Node2Text = window.kityminder.data.getRegisterProtocol('text').Node2Text;

                        return Node2Text(selectedNode);
                    },
                    type: function() {
                        return 'export';
                    }
                }
            });

            exportModal.result.then(function(result) {
                parentFSM.jump('normal', 'export-text-finish');
                editor.receiver.selectAll();
            }, function() {
                parentFSM.jump('normal', 'export-text-finish');
                editor.receiver.selectAll();
            });
        });

    });

    return {};
}]);
/**
 * @fileOverview
 *
 *  与后端交互的服务
 *
 * @author: zhangbobell
 * @email : zhangbobell@163.com
 *
 * @copyright: Baidu FEX, 2015
 */
angular.module('kityminderEditor')
    .service('server', ['config', '$http',  function(config, $http) {

        return {
            uploadImage: function(file) {
                var url = config.get('imageUpload');
                var fd = new FormData();
                fd.append('upload_file', file);

                return $http.post(url, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                });
            }
        }
    }]);
angular.module('kityminderEditor')
    .service('valueTransfer', function() {
        return {};
    });
angular.module('kityminderEditor')
    .filter('commandState', function() {
        return function(minder, command) {
            return minder.queryCommandState(command);
        }
    })
    .filter('commandValue', function() {
        return function(minder, command) {
            return minder.queryCommandValue(command);
        }
    });


angular.module('kityminderEditor')
	.filter('lang', ['config', 'lang.zh-cn', function(config, lang) {
		return function(text, block) {
			var defaultLang = config.get('defaultLang');

			if (lang[defaultLang] == undefined) {
				return '未发现对应语言包，请检查 lang.xxx.service.js!';
			} else {

				var dict = lang[defaultLang];
				block.split('/').forEach(function(ele, idx) {
					dict = dict[ele];
				});

				return dict[text] || null;
			}

		};
	}]);
angular.module('kityminderEditor')
    .controller('hyperlink.ctrl', ["$scope", "$modalInstance", "link", function ($scope, $modalInstance, link) {

        var urlRegex = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';
        $scope.R_URL = new RegExp(urlRegex, 'i');

        $scope.url = link.url || '';
        $scope.title = link.title || '';

        setTimeout(function() {
            var $linkUrl = $('#link-url');
            $linkUrl.focus();
            $linkUrl[0].setSelectionRange(0, $scope.url.length);
        }, 30);

        $scope.shortCut = function(e) {
            e.stopPropagation();

            if (e.keyCode == 13) {
                $scope.ok();
            } else if (e.keyCode == 27) {
                $scope.cancel();
            }
        };

        $scope.ok = function () {
            if($scope.R_URL.test($scope.url)) {
                $modalInstance.close({
                    url: $scope.url,
                    title: $scope.title
                });
            } else {
                $scope.urlPassed = false;

                var $linkUrl = $('#link-url');
                $linkUrl.focus();
                $linkUrl[0].setSelectionRange(0, $scope.url.length);
            }
            editor.receiver.selectAll();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
            editor.receiver.selectAll();
        };

    }]);
angular.module('kityminderEditor')
    .controller('imExportNode.ctrl', ["$scope", "$modalInstance", "title", "defaultValue", "type", function ($scope, $modalInstance, title, defaultValue, type) {

        $scope.title = title;

        $scope.value = defaultValue;

        $scope.type = type;

        $scope.ok = function () {
            if ($scope.value == '') {
                return;
            }
            $modalInstance.close($scope.value);
            editor.receiver.selectAll();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
            editor.receiver.selectAll();
        };

        setTimeout(function() {
            $('.single-input').focus();

            $('.single-input')[0].setSelectionRange(0, defaultValue.length);

        }, 30);

        $scope.shortCut = function(e) {
            e.stopPropagation();

            //if (e.keyCode == 13 && e.shiftKey == false) {
            //    $scope.ok();
            //}

            if (e.keyCode == 27) {
                $scope.cancel();
            }

            // tab 键屏蔽默认事件 和 backspace 键屏蔽默认事件
            if (e.keyCode == 8 && type == 'export') {
                e.preventDefault();
            }

            if (e.keyCode == 9) {
                e.preventDefault();
                var $textarea = e.target;
                var pos = getCursortPosition($textarea);
                var str = $textarea.value;
                $textarea.value = str.substr(0, pos) + '\t' + str.substr(pos);
                setCaretPosition($textarea, pos + 1);
            }

        };

        /*
        * 获取 textarea 的光标位置
        * @Author: Naixor
        * @date: 2015.09.23
        * */
        function getCursortPosition (ctrl) {
            var CaretPos = 0;	// IE Support
            if (document.selection) {
                ctrl.focus ();
                var Sel = document.selection.createRange ();
                Sel.moveStart ('character', -ctrl.value.length);
                CaretPos = Sel.text.length;
            }
            // Firefox support
            else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
                CaretPos = ctrl.selectionStart;
            }
            return (CaretPos);
        }

        /*
         * 设置 textarea 的光标位置
         * @Author: Naixor
         * @date: 2015.09.23
         * */
        function setCaretPosition(ctrl, pos){
            if(ctrl.setSelectionRange) {
                ctrl.focus();
                ctrl.setSelectionRange(pos,pos);
            } else if (ctrl.createTextRange) {
                var range = ctrl.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        }

    }]);
angular.module('kityminderEditor')
    .controller('image.ctrl', ['$http', '$scope', '$modalInstance', 'image', 'server', function($http, $scope, $modalInstance, image, server) {

        $scope.data = {
            list: [],
            url: image.url || '',
            title: image.title || '',
            R_URL: /^https?\:\/\/\w+/
        };

        setTimeout(function() {
            var $imageUrl = $('#image-url');
            $imageUrl.focus();
            $imageUrl[0].setSelectionRange(0, $scope.data.url.length);
        }, 300);


        // 搜索图片按钮点击事件
        $scope.searchImage = function() {
            $scope.list = [];

            getImageData()
                .success(function(json) {
                    if(json && json.data) {
                        for(var i = 0; i < json.data.length; i++) {
                            if(json.data[i].objURL) {
                                $scope.list.push({
                                    title: json.data[i].fromPageTitleEnc,
                                    src: json.data[i].middleURL,
                                    url: json.data[i].middleURL
                                });
                            }
                        }
                    }
                })
                .error(function() {

                });
        };

        // 选择图片的鼠标点击事件
        $scope.selectImage = function($event) {
            var targetItem = $('#img-item'+ (this.$index));
            var targetImg = $('#img-'+ (this.$index));

            targetItem.siblings('.selected').removeClass('selected');
            targetItem.addClass('selected');

            $scope.data.url = targetImg.attr('src');
            $scope.data.title = targetImg.attr('alt');
        };

        // 自动上传图片，后端需要直接返回图片 URL
        $scope.uploadImage = function() {
            var fileInput = $('#upload-image');
            if (!fileInput.val()) {
                return;
            }
            if (/^.*\.(jpg|JPG|jpeg|JPEG|gif|GIF|png|PNG)$/.test(fileInput.val())) {
                var file = fileInput[0].files[0];
                return server.uploadImage(file).then(function (json) {
                    var resp = json.data;
                    if (resp.errno === 0) {
                        $scope.data.url = resp.data.url;
                    }
                });
            } else {
                alert("后缀只能是 jpg、gif 及 png");
            }
        };

        $scope.shortCut = function(e) {
            e.stopPropagation();

            if (e.keyCode == 13) {
                $scope.ok();
            } else if (e.keyCode == 27) {
                $scope.cancel();
            }
        };

        $scope.ok = function () {
            if($scope.data.R_URL.test($scope.data.url)) {
                $modalInstance.close({
                    url: $scope.data.url,
                    title: $scope.data.title
                });
            } else {
                $scope.urlPassed = false;

                var $imageUrl = $('#image-url');
                if ($imageUrl) {
                    $imageUrl.focus();
                    $imageUrl[0].setSelectionRange(0, $scope.data.url.length);
                }

            }

            editor.receiver.selectAll();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
            editor.receiver.selectAll();
        };

        function getImageData() {
            var key = $scope.data.searchKeyword2;
            var currentTime = new Date();
            var url = 'http://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&fp=result&queryWord='+ key +'&cl=2&lm=-1&ie=utf-8&oe=utf-8&st=-1&ic=0&word='+ key +'&face=0&istype=2&nc=1&pn=60&rn=60&gsm=3c&'+ currentTime.getTime() +'=&callback=JSON_CALLBACK';

            return $http.jsonp(url);
        }
    }]);
angular.module('kityminderEditor')
    .directive('appendNode', ['commandBinder', function(commandBinder) {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/appendNode/appendNode.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function($scope) {
                var minder = $scope.minder;

                commandBinder.bind(minder, 'appendchildnode', $scope)

                $scope.execCommand = function(command) {
                    minder.execCommand(command, '分支主题');
                    editText();
                };

                function editText() {
                    var receiverElement = editor.receiver.element;
                    var fsm = editor.fsm;
                    var receiver = editor.receiver;

                    receiverElement.innerText = minder.queryCommandValue('text');
                    fsm.jump('input', 'input-request');
                    receiver.selectAll();
                }
            }
        }
    }]);
angular.module('kityminderEditor')
    .directive('arrange', ['commandBinder', function(commandBinder) {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/arrange/arrange.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function($scope) {
                var minder = $scope.minder;

                //commandBinder.bind(minder, 'priority', $scope);
            }
        }
    }]);
angular.module('kityminderEditor')
	.directive('colorPanel', function() {
		return {
			restrict: 'E',
			templateUrl: 'ui/directive/colorPanel/colorPanel.html',
			scope: {
				minder: '='
			},
            replace: true,
			link: function(scope) {

				var minder = scope.minder;
				var currentTheme = minder.getThemeItems();

				scope.$on('colorPicked', function(event, color) {
                    event.stopPropagation();
					scope.bgColor = color;
					minder.execCommand('background', color);
				});

				scope.setDefaultBg = function() {
                    var currentNode = minder.getSelectedNode();
                    var bgColor = minder.getNodeStyle(currentNode, 'background');

                    // 有可能是 kity 的颜色类
                    return typeof bgColor === 'object' ? bgColor.toHEX() : bgColor;
                };

                scope.bgColor = scope.setDefaultBg() || '#fff';

			}
		}
	});
angular.module('kityminderEditor')
    .directive('expandLevel', function() {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/expandLevel/expandLevel.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function($scope) {

                $scope.levels = [1, 2, 3, 4, 5, 6];
            }
        }
    });
angular.module('kityminderEditor')
	.directive('fontOperator', function() {
		return {
			restrict: 'E',
			templateUrl: 'ui/directive/fontOperator/fontOperator.html',
			scope: {
				minder: '='
			},
            replace: true,
			link: function(scope) {
				var minder = scope.minder;
				var currentTheme = minder.getThemeItems();

				scope.fontSizeList = [10, 12, 16, 18, 24, 32, 48];
                scope.fontFamilyList = [{
                    name: '宋体',
                    val: '宋体,SimSun'
                }, {
                    name: '微软雅黑',
                    val: '微软雅黑,Microsoft YaHei'
                }, {
                    name: '楷体',
                    val: '楷体,楷体_GB2312,SimKai'
                }, {
                    name: '黑体',
                    val: '黑体, SimHei'
                }, {
                    name: '隶书',
                    val: '隶书, SimLi'
                }, {
                    name: 'Andale Mono',
                    val: 'andale mono'
                }, {
                    name: 'Arial',
                    val: 'arial,helvetica,sans-serif'
                }, {
                    name: 'arialBlack',
                    val: 'arial black,avant garde'
                }, {
                    name: 'Comic Sans Ms',
                    val: 'comic sans ms'
                }, {
                    name: 'Impact',
                    val: 'impact,chicago'
                }, {
                    name: 'Times New Roman',
                    val: 'times new roman'
                }, {
                    name: 'Sans-Serif',
                    val: 'sans-serif'
                }];

                scope.$on('colorPicked', function(event, color) {
                    event.stopPropagation();

                    scope.foreColor = color;
                    minder.execCommand('forecolor', color);
                });

                scope.setDefaultColor = function() {
                    var currentNode = minder.getSelectedNode();
                    var fontColor = minder.getNodeStyle(currentNode, 'color');

                    // 有可能是 kity 的颜色类
                    return typeof fontColor === 'object' ? fontColor.toHEX() : fontColor;
                };

                scope.foreColor = scope.setDefaultColor() || '#000';

                scope.getFontfamilyName = function(val) {
                    var fontName = '';
                    scope.fontFamilyList.forEach(function(ele, idx, arr) {
                        if (ele.val === val) {
                            fontName = ele.name;
                            return '';
                        }
                    });

                    return fontName;
                }
			}
		}
	});
angular.module('kityminderEditor')
    .directive('hyperLink', ['$modal', function($modal) {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/hyperLink/hyperLink.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function($scope) {
                var minder = $scope.minder;

                $scope.addHyperlink = function() {

                    var link = minder.queryCommandValue('HyperLink');

                    var hyperlinkModal = $modal.open({
                        animation: true,
                        templateUrl: 'ui/dialog/hyperlink/hyperlink.tpl.html',
                        controller: 'hyperlink.ctrl',
                        size: 'md',
                        resolve: {
                            link: function() {
                                return link;
                            }
                        }
                    });

                    hyperlinkModal.result.then(function(result) {
                        minder.execCommand('HyperLink', result.url, result.title || '');
                    });
                }
            }
        }
    }]);
angular.module('kityminderEditor')
    .directive('imageBtn', ['$modal', function($modal) {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/imageBtn/imageBtn.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function($scope) {
                var minder = $scope.minder;

                $scope.addImage = function() {

                    var image = minder.queryCommandValue('image');

                    var imageModal = $modal.open({
                        animation: true,
                        templateUrl: 'ui/dialog/image/image.tpl.html',
                        controller: 'image.ctrl',
                        size: 'md',
                        resolve: {
                            image: function() {
                                return image;
                            }
                        }
                    });

                    imageModal.result.then(function(result) {
                        minder.execCommand('image', result.url, result.title || '');
                    });
                }
            }
        }
    }]);
angular.module('kityminderEditor')
	.directive('kityminderEditor', ['config', 'minder.service', 'revokeDialog', function(config, minderService, revokeDialog) {
		return {
			restrict: 'EA',
			templateUrl: 'ui/directive/kityminderEditor/kityminderEditor.html',
			replace: true,
			scope: {
				onInit: '&'
			},
			link: function(scope, element, attributes) {

				var $minderEditor = element.children('.minder-editor')[0];

				function onInit(editor, minder) {
					scope.onInit({
						editor: editor,
						minder: minder
					});

					minderService.executeCallback();
				}

				if (typeof(seajs) != 'undefined') {
					/* global seajs */
					seajs.config({
						base: './src'
					});

					define('demo', function(require) {
						var Editor = require('editor');

						var editor = window.editor = new Editor($minderEditor);

						if (window.localStorage.__dev_minder_content) {
							editor.minder.importJson(JSON.parse(window.localStorage.__dev_minder_content));
						}

						editor.minder.on('contentchange', function() {
							window.localStorage.__dev_minder_content = JSON.stringify(editor.minder.exportJson());
						});

						window.minder = window.km = editor.minder;

						scope.editor = editor;
						scope.minder = minder;
                        scope.config = config.get();

                        //scope.minder.setDefaultOptions(scope.config);
						scope.$apply();

						onInit(editor, minder);
					});

					seajs.use('demo');

				} else if (window.kityminder && window.kityminder.Editor) {
					var editor = new kityminder.Editor($minderEditor);

					window.editor = scope.editor = editor;
					window.minder = scope.minder = editor.minder;

                    scope.config = config.get();

                    //scope.minder.setDefaultOptions(config.getConfig());

                    onInit(editor, editor.minder);
                }

			}
		}
	}]);
angular.module('kityminderEditor')
    .directive('kityminderViewer', ['config', 'minder.service', function(config, minderService) {
        return {
            restrict: 'EA',
            templateUrl: 'ui/directive/kityminderViewer/kityminderViewer.html',
            replace: true,
            scope: {
                onInit: '&'
            },
            link: function(scope, element, attributes) {

                var $minderEditor = element.children('.minder-viewer')[0];

                function onInit(editor, minder) {
                    scope.onInit({
                        editor: editor,
                        minder: minder
                    });

                    minderService.executeCallback();
                }

                if (window.kityminder && window.kityminder.Editor) {
                    var editor = new kityminder.Editor($minderEditor);

                    window.editor = scope.editor = editor;
                    window.minder = scope.minder = editor.minder;

                    onInit(editor, editor.minder);
                }

            }
        }
    }]);
angular.module('kityminderEditor')
	.directive('layout', function() {
		return {
			restrict: 'E',
			templateUrl: 'ui/directive/layout/layout.html',
			scope: {
				minder: '='
			},
            replace: true,
			link: function(scope) {

			}
		}
	});
/**
 * @fileOverview
 *
 * 左下角的导航器
 *
 * @author: zhangbobell
 * @email : zhangbobell@163.com
 *
 * @copyright: Baidu FEX, 2015 */
angular.module('kityminderEditor')
    .directive('navigator', ['memory', 'config', function(memory, config) {
        return {
            restrict: 'A',
            templateUrl: 'ui/directive/navigator/navigator.html',
            scope: {
                minder: '='
            },
            link: function(scope) {
                minder.setDefaultOptions({zoom: config.get('zoom')});

                scope.isNavOpen = !memory.get('navigator-hidden');

                scope.getZoomRadio = function(value) {
                    var zoomStack = minder.getOption('zoom');
                    var minValue = zoomStack[0];
                    var maxValue = zoomStack[zoomStack.length - 1];
                    var valueRange = maxValue - minValue;

                    return (1 - (value - minValue) / valueRange);
                };

                scope.getHeight = function(value) {
                    var totalHeight = $('.zoom-pan').height();

                    return scope.getZoomRadio(value) * totalHeight;
                };

                // 初始的缩放倍数
                scope.zoom = 100;

                // 发生缩放事件时
                minder.on('zoom', function(e) {
                    scope.zoom = e.zoom;
                });

                scope.toggleNavOpen = function() {
                    scope.isNavOpen = !scope.isNavOpen;
                    memory.set('navigator-hidden', !scope.isNavOpen);

                    if (scope.isNavOpen) {
                        bind();
                        updateContentView();
                        updateVisibleView();
                    } else{
                        unbind();
                    }
                };

                setTimeout(function() {
                    if (scope.isNavOpen) {
                        bind();
                        updateContentView();
                        updateVisibleView();
                    } else{
                        unbind();
                    }
                }, 0);



                function bind() {
                    minder.on('layout layoutallfinish', updateContentView);
                    minder.on('viewchange', updateVisibleView);
                }

                function unbind() {
                    minder.off('layout layoutallfinish', updateContentView);
                    minder.off('viewchange', updateVisibleView);
                }


                /**  以下部分是缩略图导航器 *
                 * */

                var $previewNavigator = $('.nav-previewer');

                // 画布，渲染缩略图
                var paper = new kity.Paper($previewNavigator[0]);

                // 用两个路径来挥之节点和连线的缩略图
                var nodeThumb = paper.put(new kity.Path());
                var connectionThumb = paper.put(new kity.Path());

                // 表示可视区域的矩形
                var visibleRect = paper.put(new kity.Rect(100, 100).stroke('red', '1%'));

                var contentView = new kity.Box(), visibleView = new kity.Box();

                /**
                 * 增加一个对天盘图情况缩略图的处理,
                 * @Editor: Naixor line 104~129
                 * @Date: 2015.11.3
                 */
                var pathHandler = getPathHandler(minder.getTheme());

                // 主题切换事件
                minder.on('themechange', function(e) {
                    pathHandler = getPathHandler(e.theme);
                });

                function getPathHandler(theme) {
                    switch (theme) {
                        case "tianpan":
                        case "tianpan-compact":
                            return function(nodePathData, x, y, width, height) {
                                var r = width >> 1;
                                nodePathData.push('M', x, y + r,
                                    'a', r, r, 0, 1, 1, 0, 0.01,
                                    'z');
                            }
                        default: {
                            return function(nodePathData, x, y, width, height) {
                                nodePathData.push('M', x, y,
                                    'h', width, 'v', height,
                                    'h', -width, 'z');
                            }
                        }
                    }
                }

                navigate();

                function navigate() {

                    function moveView(center, duration) {
                        var box = visibleView;
                        center.x = -center.x;
                        center.y = -center.y;

                        var viewMatrix = minder.getPaper().getViewPortMatrix();
                        box = viewMatrix.transformBox(box);

                        var targetPosition = center.offset(box.width / 2, box.height / 2);

                        minder.getViewDragger().moveTo(targetPosition, duration);
                    }

                    var dragging = false;

                    paper.on('mousedown', function(e) {
                        dragging = true;
                        moveView(e.getPosition('top'), 200);
                        $previewNavigator.addClass('grab');
                    });

                    paper.on('mousemove', function(e) {
                        if (dragging) {
                            moveView(e.getPosition('top'));
                        }
                    });

                    $(window).on('mouseup', function() {
                        dragging = false;
                        $previewNavigator.removeClass('grab');
                    });
                }

                function updateContentView() {

                    var view = minder.getRenderContainer().getBoundaryBox();

                    contentView = view;

                    var padding = 30;

                    paper.setViewBox(
                        view.x - padding - 0.5,
                        view.y - padding - 0.5,
                        view.width + padding * 2 + 1,
                        view.height + padding * 2 + 1);

                    var nodePathData = [];
                    var connectionThumbData = [];

                    minder.getRoot().traverse(function(node) {
                        var box = node.getLayoutBox();
                        pathHandler(nodePathData, box.x, box.y, box.width, box.height);
                        if (node.getConnection() && node.parent && node.parent.isExpanded()) {
                            connectionThumbData.push(node.getConnection().getPathData());
                        }
                    });

                    paper.setStyle('background', minder.getStyle('background'));

                    if (nodePathData.length) {
                        nodeThumb
                            .fill(minder.getStyle('root-background'))
                            .setPathData(nodePathData);
                    } else {
                        nodeThumb.setPathData(null);
                    }

                    if (connectionThumbData.length) {
                        connectionThumb
                            .stroke(minder.getStyle('connect-color'), '0.5%')
                            .setPathData(connectionThumbData);
                    } else {
                        connectionThumb.setPathData(null);
                    }

                    updateVisibleView();
                }

                function updateVisibleView() {
                    visibleView = minder.getViewDragger().getView();
                    visibleRect.setBox(visibleView.intersect(contentView));
                }

            }
        }
    }]);
angular.module('kityminderEditor')
    .directive('noteBtn', ['valueTransfer', function(valueTransfer) {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/noteBtn/noteBtn.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function($scope) {
                var minder = $scope.minder;

                $scope.addNote =function() {
                    valueTransfer.noteEditorOpen = true;
                };
            }
        }
    }]);
angular.module('kityminderEditor')

	.directive('noteEditor', ['valueTransfer', function(valueTransfer) {
		return {
			restrict: 'A',
			templateUrl: 'ui/directive/noteEditor/noteEditor.html',
			scope: {
				minder: '='
			},
            replace: true,
			controller: ["$scope", function($scope) {
				var minder = $scope.minder;
				var isInteracting = false;
				var cmEditor;

				$scope.codemirrorLoaded =  function(_editor) {

					cmEditor = $scope.cmEditor = _editor;

					_editor.setSize('100%', '100%');
				};

				function updateNote() {
					var enabled = $scope.noteEnabled = minder.queryCommandState('note') != -1;
					var noteValue = minder.queryCommandValue('note') || '';

					if (enabled) {
						$scope.noteContent = noteValue;
					}

					isInteracting = true;
					$scope.$apply();
					isInteracting = false;
				}


				$scope.$watch('noteContent', function(content) {
					var enabled = minder.queryCommandState('note') != -1;

					if (content && enabled && !isInteracting) {
						minder.execCommand('note', content);
					}

					setTimeout(function() {
						cmEditor.refresh();
					});
				});


                var noteEditorOpen = function() {
                    return valueTransfer.noteEditorOpen;
                };

                // 监听面板状态变量的改变
                $scope.$watch(noteEditorOpen, function(newVal, oldVal) {
                    if (newVal) {
                        setTimeout(function() {
                            cmEditor.refresh();
                            cmEditor.focus();
                        });
                    }
                    $scope.noteEditorOpen = valueTransfer.noteEditorOpen;
                }, true);


                $scope.closeNoteEditor = function() {
                    valueTransfer.noteEditorOpen = false;
					editor.receiver.selectAll();
                };



				minder.on('interactchange', updateNote);
			}]
		}
	}]);
// TODO: 使用一个 div 容器作为 previewer，而不是两个
angular.module('kityminderEditor')

	.directive('notePreviewer', ['$sce', 'valueTransfer', function($sce, valueTransfer) {
		return {
			restrict: 'A',
			templateUrl: 'ui/directive/notePreviewer/notePreviewer.html',
			link: function(scope, element) {
				var minder = scope.minder;
				var $container = element.parent();
				var $previewer = element.children();
				scope.showNotePreviewer = false;

				marked.setOptions({
                    gfm: true,
                    tables: true,
                    breaks: true,
                    pedantic: false,
                    sanitize: true,
                    smartLists: true,
                    smartypants: false
                });


				var previewTimer;
				minder.on('shownoterequest', function(e) {

					previewTimer = setTimeout(function() {
						preview(e.node, e.keyword);
					}, 300);
				});
				minder.on('hidenoterequest', function() {
					clearTimeout(previewTimer);

                    scope.showNotePreviewer = false;
                    //scope.$apply();
				});

				var previewLive = false;
				$(document).on('mousedown mousewheel DOMMouseScroll', function() {
					if (!previewLive) return;
					scope.showNotePreviewer = false;
					scope.$apply();
				});

				element.on('mousedown mousewheel DOMMouseScroll', function(e) {
					e.stopPropagation();
				});

				function preview(node, keyword) {
					var icon = node.getRenderer('NoteIconRenderer').getRenderShape();
					var b = icon.getRenderBox('screen');
					var note = node.getData('note');

					$previewer[0].scrollTop = 0;

					var html = marked(note);
					if (keyword) {
						html = html.replace(new RegExp('(' + keyword + ')', 'ig'), '<span class="highlight">$1</span>');
					}
					scope.noteContent = $sce.trustAsHtml(html);
					scope.$apply(); // 让浏览器重新渲染以获取 previewer 提示框的尺寸

					var cw = $($container[0]).width();
					var ch = $($container[0]).height();
					var pw = $($previewer).outerWidth();
					var ph = $($previewer).outerHeight();

					var x = b.cx - pw / 2 - $container[0].offsetLeft;
					var y = b.bottom + 10 - $container[0].offsetTop;

					if (x < 0) x = 10;
					if (x + pw > cw) x = b.left - pw - 10 - $container[0].offsetLeft;
					if (y + ph > ch) y = b.top - ph - 10 - $container[0].offsetTop;


					scope.previewerStyle = {
						'left': Math.round(x) + 'px',
						'top': Math.round(y) + 'px'
					};

					scope.showNotePreviewer = true;

					var view = $previewer[0].querySelector('.highlight');
					if (view) {
						view.scrollIntoView();
					}
					previewLive = true;

					scope.$apply();
				}
			}
		}
}]);
angular.module('kityminderEditor')
    .directive('operation', function() {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/operation/operation.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function($scope) {
                $scope.editNode = function() {

                    var receiverElement = editor.receiver.element;
                    var fsm = editor.fsm;
                    var receiver = editor.receiver;

                    receiverElement.innerText = minder.queryCommandValue('text');
                    fsm.jump('input', 'input-request');
                    receiver.selectAll();

                }

            }
        }
    });
angular.module('kityminderEditor')

    .directive('priorityEditor', ['commandBinder', function(commandBinder) {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/priorityEditor/priorityEditor.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function($scope) {
                var minder = $scope.minder;
                var priorities = [];

                for (var i = 0; i < 10; i++) {
                    priorities.push(i);
                }

	            commandBinder.bind(minder, 'priority', $scope);

	            $scope.priorities = priorities;

	            $scope.getPriorityTitle = function(p) {
		            switch(p) {
			            case 0: return '移除优先级';
			            default: return '优先级' + p;
		            }
	            }
            }

        }
    }]);
angular.module('kityminderEditor')
	.directive('progressEditor', ['commandBinder', function(commandBinder) {
		return {
			restrict: 'E',
			templateUrl: 'ui/directive/progressEditor/progressEditor.html',
			scope: {
				minder: '='
			},
            replace: true,
			link: function($scope) {
				var minder = $scope.minder;
				var progresses = [];

				for (var i = 0; i < 10; i++) {
					progresses.push(i);
				}

				commandBinder.bind(minder, 'progress', $scope);

				$scope.progresses = progresses;

				$scope.getProgressTitle = function(p) {
					switch(p) {
						case 0: return '移除进度';
						case 1: return '未开始';
						case 9: return '全部完成';
						default: return '完成' + (p - 1) + '/8';

					}
				}
			}
		}
	}])
angular.module('kityminderEditor')
    .directive('resourceEditor', function () {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/resourceEditor/resourceEditor.html',
            scope: {
                minder: '='
            },
            replace: true,
            controller: ["$scope", function ($scope) {
                var minder = $scope.minder;

	            var isInteracting = false;

                minder.on('interactchange', function () {
                    var enabled = $scope.enabled = minder.queryCommandState('resource') != -1;
                    var selected = enabled ? minder.queryCommandValue('resource') : [];
                    var used = minder.getUsedResource().map(function (resourceName) {
                        return {
                            name: resourceName,
                            selected: selected.indexOf(resourceName) > -1
                        }
                    });
                    $scope.used = used;

	                isInteracting = true;
                    $scope.$apply();
	                isInteracting = false;
                });

                $scope.$watch('used', function (used) {
                    if (minder.queryCommandState('resource') != -1 && used) {
                        var resource = used.filter(function (resource) {
                            return resource.selected;
                        }).map(function (resource) {
                            return resource.name;
                        });

	                    // 由于 interactchange 带来的改变则不用执行 resource 命令
	                    if (isInteracting) {
		                    return;
	                    }
                        minder.execCommand('resource', resource);
                    }
                }, true);

                $scope.resourceColor = function (resource) {
                    return minder.getResourceColor(resource).toHEX();
                };

                $scope.addResource = function (resourceName) {
	                var origin = minder.queryCommandValue('resource');
                    if (!resourceName || !/\S/.test(resourceName)) return;

	                if (origin.indexOf(resourceName) == -1) {
		                $scope.used.push({
			                name: resourceName,
			                selected: true
		                });
	                }

                    $scope.newResourceName = null;
                };

            }]
        };
    })

    .directive('clickAnywhereButHere', ['$document', function ($document) {
        return {
            link: function(scope, element, attrs) {
                var onClick = function (event) {
                    var isChild = $('#resource-dropdown').has(event.target).length > 0;
                    var isSelf = $('#resource-dropdown') == event.target;
                    var isInside = isChild || isSelf;
                    if (!isInside) {
                        scope.$apply(attrs.clickAnywhereButHere)
                    }
                };

                scope.$watch(attrs.isActive, function(newValue, oldValue) {
                    if (newValue !== oldValue && newValue == true) {
                        $document.bind('click', onClick);
                    }
                    else if (newValue !== oldValue && newValue == false) {
                        $document.unbind('click', onClick);
                    }
                });
            }
        };
    }]);
angular.module('kityminderEditor')
    .directive('searchBox', function() {
        return {
            restrict: 'A',
            templateUrl: 'ui/directive/searchBox/searchBox.html',
            scope: {
                minder: '='
            },
            replace: true,
            controller: ["$scope", function ($scope) {
                var minder = $scope.minder;
                var editor = window.editor;
                $scope.handleKeyDown = handleKeyDown;
                $scope.doSearch = doSearch;
                $scope.exitSearch = exitSearch;
                $scope.showTip = false;
                $scope.showSearch = false;

                // 处理输入框按键事件
                function handleKeyDown(e) {
                    if (e.keyCode == 13) {
                        var direction = e.shiftKey ? 'prev' : 'next';
                        doSearch($scope.keyword, direction);
                    }
                    if (e.keyCode == 27) {
                        exitSearch();
                    }
                }

                function exitSearch() {
                    $('#search-input').blur();
                    $scope.showSearch = false;
                    minder.fire('hidenoterequest');
                    editor.receiver.selectAll();
                }

                function enterSearch() {
                    $scope.showSearch = true;
                    setTimeout(function() {
                        $('#search-input').focus();
                    }, 10);

                    if ($scope.keyword) {
                        $('#search-input')[0].setSelectionRange(0, $scope.keyword.length);
                    }
                }

                $('body').on('keydown', function(e) {
                    if (e.keyCode == 70 && (e.ctrlKey || e.metaKey) && !e.shiftKey) {
                        enterSearch();

                        $scope.$apply();
                        e.preventDefault();
                    }
                });

                minder.on('searchNode', function() {
                    enterSearch();
                });


                var nodeSequence = [];
                var searchSequence = [];


                minder.on('contentchange', makeNodeSequence);

                makeNodeSequence();


                function makeNodeSequence() {
                    nodeSequence = [];
                    minder.getRoot().traverse(function(node) {
                        nodeSequence.push(node);
                    });
                }

                function makeSearchSequence(keyword) {
                    searchSequence = [];

                    for (var i = 0; i < nodeSequence.length; i++) {
                        var node = nodeSequence[i];
                        var text = node.getText().toLowerCase();
                        if (text.indexOf(keyword) != -1) {
                            searchSequence.push({node:node});
                        }
                        var note = node.getData('note');
                        if (note && note.toLowerCase().indexOf(keyword) != -1) {
                            searchSequence.push({node: node, keyword: keyword});
                        }
                    }
                }


                function doSearch(keyword, direction) {
                    $scope.showTip = false;
                    minder.fire('hidenoterequest');

                    if (!keyword || !/\S/.exec(keyword)) {
                        $('#search-input').focus();
                        return;
                    }

                    // 当搜索不到节点时候默认的选项
                    $scope.showTip = true;
                    $scope.curIndex = 0;
                    $scope.resultNum = 0;


                    keyword = keyword.toLowerCase();
                    var newSearch = doSearch.lastKeyword != keyword;

                    doSearch.lastKeyword = keyword;

                    if (newSearch) {
                        makeSearchSequence(keyword);
                    }

                    $scope.resultNum = searchSequence.length;

                    if (searchSequence.length) {
                        var curIndex = newSearch ? 0 : (direction === 'next' ? doSearch.lastIndex + 1 : doSearch.lastIndex - 1) || 0;
                        curIndex = (searchSequence.length + curIndex) % searchSequence.length;

                        setSearchResult(searchSequence[curIndex].node, searchSequence[curIndex].keyword);

                        doSearch.lastIndex = curIndex;

                        $scope.curIndex = curIndex + 1;

                        function setSearchResult(node, previewKeyword) {
                            minder.execCommand('camera', node, 50);
                            setTimeout(function () {
                                minder.select(node, true);
                                if (!node.isExpanded()) minder.execCommand('expand', true);
                                if (previewKeyword) {
                                    minder.fire('shownoterequest', {node: node, keyword: previewKeyword});
                                }
                            }, 60);
                        }
                    }
                }


            }]
        }
    });
angular.module('kityminderEditor')
    .directive('searchBtn', function() {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/searchBtn/searchBtn.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function (scope) {
                scope.enterSearch = enterSearch;

                function enterSearch() {
                    minder.fire('searchNode');
                }
            }
        }
    });
angular.module('kityminderEditor')
    .directive('selectAll', function() {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/selectAll/selectAll.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function($scope) {
                var minder = $scope.minder;

                $scope.items = ['revert', 'siblings', 'level', 'path', 'tree'];

                $scope.select = {
                    all: function() {
                        var selection = [];
                        minder.getRoot().traverse(function(node) {
                            selection.push(node);
                        });
                        minder.select(selection, true);
                        minder.fire('receiverfocus');
                    },
                    revert: function() {
                        var selected = minder.getSelectedNodes();
                        var selection = [];
                        minder.getRoot().traverse(function(node) {
                            if (selected.indexOf(node) == -1) {
                                selection.push(node);
                            }
                        });
                        minder.select(selection, true);
                        minder.fire('receiverfocus');
                    },
                    siblings: function() {
                        var selected = minder.getSelectedNodes();
                        var selection = [];
                        selected.forEach(function(node) {
                            if (!node.parent) return;
                            node.parent.children.forEach(function(sibling) {
                                if (selection.indexOf(sibling) == -1) selection.push(sibling);
                            });
                        });
                        minder.select(selection, true);
                        minder.fire('receiverfocus');
                    },
                    level: function() {
                        var selectedLevel = minder.getSelectedNodes().map(function(node) {
                            return node.getLevel();
                        });
                        var selection = [];
                        minder.getRoot().traverse(function(node) {
                            if (selectedLevel.indexOf(node.getLevel()) != -1) {
                                selection.push(node);
                            }
                        });
                        minder.select(selection, true);
                        minder.fire('receiverfocus');
                    },
                    path: function() {
                        var selected = minder.getSelectedNodes();
                        var selection = [];
                        selected.forEach(function(node) {
                            while(node && selection.indexOf(node) == -1) {
                                selection.push(node);
                                node = node.parent;
                            }
                        });
                        minder.select(selection, true);
                        minder.fire('receiverfocus');
                    },
                    tree: function() {
                        var selected = minder.getSelectedNodes();
                        var selection = [];
                        selected.forEach(function(parent) {
                            parent.traverse(function(node) {
                                if (selection.indexOf(node) == -1) selection.push(node);
                            });
                        });
                        minder.select(selection, true);
                        minder.fire('receiverfocus');
                    }
                };
            }
        }
    });
angular.module('kityminderEditor')
	.directive('styleOperator', function() {
		return {
			restrict: 'E',
			templateUrl: 'ui/directive/styleOperator/styleOperator.html',
			scope: {
				minder: '='
			},
            replace: true
		}
	});
angular.module('kityminderEditor')
	.directive('templateList', function() {
		return {
			restrict: 'E',
			templateUrl: 'ui/directive/templateList/templateList.html',
			scope: {
				minder: '='
			},
            replace: true,
			link: function($scope) {
				$scope.templateList = kityminder.Minder.getTemplateList();

			}
		}
	});
angular.module('kityminderEditor')
	.directive('themeList', function() {
		return {
			restrict: 'E',
			templateUrl: 'ui/directive/themeList/themeList.html',
            replace: true,
			link: function($scope) {
				var themeList = kityminder.Minder.getThemeList();

				//$scope.themeList = themeList;

				$scope.getThemeThumbStyle = function (theme) {
					var themeObj = themeList[theme];
                    if (!themeObj) {
                        return;
                    }
					var style = {
						'color': themeObj['root-color'],
						'border-radius': themeObj['root-radius'] / 2
					};

					if (themeObj['root-background']) {
						style['background'] = themeObj['root-background'].toString();
					}

					return style;
				};

				// 维护 theme key 列表以保证列表美观（不按字母顺序排序）
				$scope.themeKeyList = [
					'classic',
					'classic-compact',
					'fresh-blue',
					'fresh-blue-compat',
					'fresh-green',
					'fresh-green-compat',
					'fresh-pink',
					'fresh-pink-compat',
					'fresh-purple',
					'fresh-purple-compat',
					'fresh-red',
					'fresh-red-compat',
					'fresh-soil',
					'fresh-soil-compat',
					'snow',
					'snow-compact',
					'tianpan',
					'tianpan-compact',
					'fish',
					'wire'
				];
			}
		}
	});
angular.module('kityminderEditor')
    .directive('topTab', function() {
       return {
           restrict: 'A',
           templateUrl: 'ui/directive/topTab/topTab.html',
           scope: {
               minder: '=topTab',
               editor: '='
           },
           link: function(scope) {

               /*
               *
               * 用户选择一个新的选项卡会执行 setCurTab 和 foldTopTab 两个函数
               * 用户点击原来的选项卡会执行 foldTopTop 一个函数
               *
               * 也就是每次选择新的选项卡都会执行 setCurTab，初始化的时候也会执行 setCurTab 函数
               * 因此用 executedCurTab 记录是否已经执行了 setCurTab 函数
               * 用 isInit 记录是否是初始化的状态，在任意一个函数时候 isInit 设置为 false
               * 用 isOpen 记录是否打开了 topTab
               *
               * 因此用到了三个 mutex
               * */
               var executedCurTab = false;
               var isInit = true;
               var isOpen = true;

               scope.setCurTab = function(tabName) {
                   setTimeout(function() {
                       //console.log('set cur tab to : ' + tabName);
                       executedCurTab = true;
                       //isOpen = false;
                       if (tabName != 'idea') {
                           isInit = false;
                       }
                   });
                };

               scope.toggleTopTab = function() {
                   setTimeout(function() {
                       if(!executedCurTab || isInit) {
                           isInit = false;

                           isOpen ? closeTopTab(): openTopTab();
                           isOpen = !isOpen;
                       }

                       executedCurTab = false;
                   });
               };

               function closeTopTab() {
                   var $tabContent = $('.tab-content');
                   var $minderEditor = $('.minder-editor');

                   $tabContent.animate({
                       height: 0,
                       display: 'none'
                   });

                   $minderEditor.animate({
                      top: '32px'
                   });
               }

               function openTopTab() {
                   var $tabContent = $('.tab-content');
                   var $minderEditor = $('.minder-editor');

                   $tabContent.animate({
                       height: '60px',
                       display: 'block'
                   });

                   $minderEditor.animate({
                       top: '92px'
                   });
               }
           }
       }
    });
angular.module('kityminderEditor')
    .directive('undoRedo', function() {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/undoRedo/undoRedo.html',
            scope: {
                editor: '='
            },
            replace: true,
            link: function($scope) {

            }
        }
    });
use('expose-editor');
})();
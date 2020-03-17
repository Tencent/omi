"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lifecycle;
(function (Lifecycle) {
    Lifecycle["constructor"] = "constructor";
    Lifecycle["componentWillMount"] = "componentWillMount";
    Lifecycle["componentDidMount"] = "componentDidMount";
    Lifecycle["componentWillUpdate"] = "componentWillUpdate";
    Lifecycle["componentDidUpdate"] = "componentDidUpdate";
    Lifecycle["componentWillUnmount"] = "componentWillUnmount";
    Lifecycle["componentDidCatch"] = "componentDidCatch";
    Lifecycle["componentDidShow"] = "componentDidShow";
    Lifecycle["componentDidHide"] = "componentDidHide";
    Lifecycle["componentDidAttached"] = "componentDidAttached";
    Lifecycle["componentDidMoved"] = "componentDidMoved";
    Lifecycle["shouldComponentUpdate"] = "shouldComponentUpdate";
    Lifecycle["componentWillReceiveProps"] = "componentWillReceiveProps";
})(Lifecycle = exports.Lifecycle || (exports.Lifecycle = {}));
exports.PageLifecycle = {
    [Lifecycle.componentDidMount]: 'onLaunch',
    [Lifecycle.componentWillMount]: 'onLoad',
    [Lifecycle.componentWillUnmount]: 'onUnload',
    [Lifecycle.componentDidShow]: 'onShow',
    [Lifecycle.componentDidHide]: 'onHide'
};
exports.ComponentLifeCycle = {
    [Lifecycle.componentWillMount]: 'created',
    [Lifecycle.componentDidAttached]: 'attached',
    [Lifecycle.componentDidMount]: 'ready',
    [Lifecycle.componentDidMoved]: 'moved',
    [Lifecycle.componentWillUnmount]: 'detached'
};
//# sourceMappingURL=lifecycle.js.map
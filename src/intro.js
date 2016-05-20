;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === "function" && define.cmd) {
        define(function(require, exports, module){
            module.exports=factory();
        });
    }
    root.Nuclear&&root.Nuclear.instances||(root.Nuclear=factory());
}(window, function () {

    var Nuclear={};

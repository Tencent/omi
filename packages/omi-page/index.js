;(function(){

    var page = typeof require === 'function' ? require('page') : window.page

    //todo extend page method
    //todo define element named <omi-page></omi-page>
    //...

    if (typeof exports == "object") {
        module.exports = page;
    } else if (typeof define == "function" && define.amd) {
        define([], function () { return page })
    } else {
        window.page = page
    }
})()
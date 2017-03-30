/*!
 *  omi-router v0.1.0 by dntzhang
 *  Router for Omi.
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */

;(function () {

    var OmiRouter = {}
    var Omi = typeof require === 'function'
        ? require('omi')
        : window.Omi

    var parser = require('path-to-regexp'),
        routes = null,
        renderTo = null,
        params = { },
        Component = null

    OmiRouter.init = function (option) {
        routes = option.routes
        renderTo = option.renderTo
        option.routes.forEach(function (route) {
            route.reg = parser(route.path)
        })

        Omi.extendPlugin('omi-router', function (dom, instance) {
            dom.setAttribute('href', 'javascript:void(0)')

            dom.addEventListener('click', function () {
                var to = dom.getAttribute('to')

                option.routes.every(function (route) {
                    var toArr = to.match(route.reg);
                    if (toArr) {
                        var pathArr =  route.path.match(route.reg)
                        params = getParams(toArr, pathArr)
                        renderTo = option.renderTo
                        Component = route.component
                        pushState(to)
                        return false
                    }
                    return true
                })
            }, false)
        })
    }

    function getParams(toArr, pathArr) {
        var params = {}
        toArr.forEach(function (item, index) {
            if (index > 0) {
                params[pathArr[index].replace(':','')] = item
            }
        })
        return params
    }

    function hashMapping(to) {
        routes.every(function (route) {
            var arr = to.match(route.reg);
            if (arr) {
                pushState(to)
                Component = route.component
                return false
            }
            return true
        })
    }

    function pushState(route){
        window.location.hash = route
    }

    window.addEventListener('hashchange', function() {
        hashMapping(window.location.hash.replace('#',''), renderTo)
        Omi.render(new Component(), renderTo, {
            store: {data: params}
        })
    }, false);

    OmiRouter.destroy = function () {
        delete Omi.plugins['omi-router']
    }

    if (typeof exports == "object") {
        module.exports = OmiRouter
    } else if (typeof define == "function" && define.amd) {
        define([], function () {
            return OmiRouter
        })
    } else {
        window.OmiRouter = OmiRouter
    }

})()
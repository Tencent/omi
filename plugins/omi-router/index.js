/*!
 *  omi-router v0.1.0 by dntzhang
 *  Router for Omi.
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */

;(function () {

    var OmiRouter = {};
    var Omi = typeof require === 'function'
        ? require('omi')
        : window.Omi;

    var parser = require('path-to-regexp');


    OmiRouter.init = function (option) {

        option.routes.forEach(function (route) {
            route.reg = parser(route.path)
        })

        Omi.extendPlugin('omi-router', function (dom, instance) {
            dom.setAttribute('href', '##')

            dom.addEventListener('click', function () {
                var to = dom.getAttribute('to')

                option.routes.every(function (route) {
                    var arr = to.match(route.reg);
                    if (arr) {
                        Omi.render(new route.component(), option.renderTo, {
                            store: {data: arr}
                        })
                        return false
                    }
                    return true
                })

            }, false)

        })
    }

    OmiRouter.destroy = function () {
        delete Omi.plugins['omi-finger']
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

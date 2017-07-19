/*!
 *  omi-router v0.2.0 by dntzhang
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
        renderTo = null,
        params = { },
        Component = null,
        store = null,
        routerOption = { },
        preRenderTo = null,
        preInstance = null,
        currentRoute = null,
        preRoute = null,
        instanceList = []

    OmiRouter.init = function (option) {
        routerOption = option
        option.routes.forEach(function (route) {
            route.reg = parser(route.path)
        })

        Omi.extendPlugin('omi-router', function (dom, instance) {
            dom.setAttribute('href', '#'+ dom.getAttribute('to'))
        })

        var hash = window.location.hash.replace('#', '')
        hashMapping(hash ? hash : routerOption.defaultRoute, renderTo)
        if(hash) {
            option.root.onInstalled(function(){
                render()
            })
        }
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
        routerOption.routes.every(function (route) {
            var toArr = to.match(route.reg);
            if (toArr) {
                var pathArr = route.path.match(route.reg)
                params = getParams(toArr, pathArr)
                renderTo = route.renderTo || routerOption.renderTo
                store = route.store || routerOption.store
                Component = route.component
                currentRoute = route
                pushState(to)
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
        render()
    }, false)

    function render() {
        if (store) {
            store.$route = {}
            store.$route.params = params
        } else {
            store = {
                methods: {
                    install: function () {
                        this.$route = {}
                        this.$route.params = params
                    }
                }
            }
        }
        if (preRenderTo === renderTo && preInstance && !routerOption.increment) {
            deleteInstance(preInstance)
        }

        var instance
        if(routerOption.increment) {
            var i = 0,
                len = instanceList.length
            for (; i < len; i++) {
                if (instanceList[i] instanceof Component) {
                    instance = instanceList[i]
                    break
                }
            }
        }

        var doRouter = true

        if(routerOption.beforeRoute){
            doRouter = routerOption.beforeRoute({
                preRoute:preRoute,
                route:currentRoute,
                preComponent:preInstance
            })
        }

        if(doRouter === false) return

        if (!instance) {
            instance = new Component()
            if(routerOption.increment){
                instanceList.push(instance)
            }
            Omi.render(instance, renderTo, {
                store: store,
                increment: routerOption.increment
            })
            if(routerOption.init){
                routerOption.init({
                    component:instance,
                    preComponent:preInstance,
                    preRoute:preRoute,
                    route:currentRoute
                })
            }
        }


        if(routerOption.change) {
            routerOption.change({
                component:instance,
                preComponent:preInstance,
                preRoute:preRoute,
                route:currentRoute
            })
        }

        preRoute = currentRoute
        preInstance = instance
        preRenderTo = renderTo



    }

    function deleteInstance(instance){
        for(var key in Omi.instances){
            if(Omi.instances.hasOwnProperty(key)){
                if(Omi.instances[key].id === instance.id){
                    delete  Omi.instances[key]
                    instance = null
                    break
                }
            }
        }
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
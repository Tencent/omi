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
        renderTo = null,
        params = { },
        Component = null,
        store = null,
        routerOption = { },
        preRenderTo = null,
        preInstance = null

    OmiRouter.init = function (option) {
        routerOption = option
        option.routes.forEach(function (route) {
            route.reg = parser(route.path)
        })

        Omi.extendPlugin('omi-router', function (dom, instance) {
            dom.setAttribute('href', 'javascript:void(0)')

            dom.addEventListener('click', function () {
                hashMapping(dom.getAttribute('to'))
            }, false)
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

    function render(){
        if(store){
            store.$route = { }
            store.$route.params = params
        }else{
            store = {
                methods:{
                    install:function(){
                        this.$route = { }
                        this.$route.params = params
                    }
                }
            }
        }
        if(preRenderTo === renderTo&&preInstance){
            deleteInstance(preInstance)
        }
        var instance = new Component()
        Omi.render(instance, renderTo, {
            store: store
        })
        preInstance = instance
        preRenderTo = renderTo
    }

    function deleteInstance(instance){
        for(var key in Omi.instances){
            if(Omi.instances.hasOwnProperty(key)){
                Omi.instances[key].id = instance.id
                delete  Omi.instances[key]
                instance = null
                break
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
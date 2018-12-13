/*!
 *  omi-router v0.3.0 by dntzhang
 *  Router for Omi.
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */

;(function () {

    if(typeof Omi === 'undefined') return

    var OmiRouter = { }

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
        instanceList = [],
        $route = {}

    OmiRouter.init = function (option) {
        routerOption = option
        option.routes.forEach(function (route) {
            route.reg = parser(route.path)
        })


        var hash = window.location.hash.replace('#', '')
        hashMapping(hash ? hash : routerOption.defaultRoute, renderTo)
        if(hash) {
            render()
            // option.root.onInstalled(function(){
            //     render()
            // })
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
                renderTo = typeof renderTo === 'string' ? document.querySelector(renderTo) : renderTo

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
        $route.params = params

        if (preRenderTo === renderTo && preInstance && !routerOption.increment) {
            deleteInstance(preInstance)
        }

        var instance

        if (routerOption.increment) {
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

        if (routerOption.beforeRoute) {
            doRouter = routerOption.beforeRoute({
                preRoute: preRoute,
                route: currentRoute,
                preComponent: preInstance
            })
        }

        if (doRouter === false) return

        if (!instance) {
            if (currentRoute.component.prototype.render) {
                initComponent(instance, Component)
            }else{
                currentRoute.component().then(function(Component){
                    initComponent(instance, Component.default)
                    change(instance)
                })
                return
            }
        } else {
            instance.$route = $route
        }
        change(instance)
    }

    function initComponent(instance, Component){
        instance = new Component()
        if (routerOption.increment) {
            instanceList.push(instance)
        }
        instance.$route = $route
        
        if(!routerOption.increment){
            while (renderTo.firstChild) {
                renderTo.removeChild(renderTo.firstChild);
            }
        }
        
        Omi.render(instance, renderTo, store)
        if (routerOption.init) {
            routerOption.init({
                component: instance,
                preComponent: preInstance,
                preRoute: preRoute,
                route: currentRoute
            })
        }
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

    function change(instance){
        if (routerOption.change) {
            routerOption.change({
                component: instance,
                preComponent: preInstance,
                preRoute: preRoute,
                route: currentRoute
            })
        }

        preRoute = currentRoute
        preInstance = instance
        preRenderTo = renderTo
    }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Link = function (_Component) {
	    _inherits(Link, _Component);

	    function Link() {
	        _classCallCheck(this, Link);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }

	    Link.prototype.render = function render$$1() {
	        return Omi.h(
	            'a',
	            { href: '#' + this.props.to },
	            this.props.children[0]
	        );
	    };

	    return Link;
    }(Omi.Component);

    OmiRouter.Link = Link
    
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
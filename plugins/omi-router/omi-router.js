/*!
 *  omi-router v0.1.0 by dntzhang
 *  Router for Omi.
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */

;(function () {

    var OmiRouter = {};
    var Omi = typeof require === 'function'
        ? require('../../src/index.js')
        : window.Omi;

    var noop = function(){

    };

    var getHandler = function(name, dom, instance) {
        var value = dom.getAttribute(name);
        if (value === null) {
            return noop;
        }else{
            return instance[value].bind(instance);
        }
    };


    OmiRouter.init = function(){
        Omi.extendPlugin('omi-router',function(dom, instance) {
            dom.setAttribute('href','##')
            var value = dom.getAttribute('to');
            var renderTo = dom.getAttribute('renderTo');
            var component = dom.getAttribute('component');
            dom.addEventListener('click',function(){
                Omi.render(new Omi.componentConstructor[component],"#view");
            },false)

        })
    }

    OmiRouter.destroy = function(){
        delete Omi.plugins['omi-finger'];
    };

    if (typeof exports == "object") {
        module.exports = OmiRouter
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return OmiRouter })
    } else {
        window.OmiRouter = OmiRouter
    }

})();
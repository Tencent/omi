/*!
 *  omi-finger v0.1.0 by dntzhang
 *  Omi / AlloyFinger integration. Support touch and gesture events in your Omi project.
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */

;(function () {

    var OmiFinger = {};
    var AlloyFinger = require('./alloy_finger.js');
    var Omi = require('../../src/index.js');

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


    OmiFinger.init = function(){
        Omi.extendPlugin('omi-finger',function(dom, instance){
            if(instance.alloyFinger ){
                instance.alloyFinger.destroy();
            }

            var alloyFinger = new AlloyFinger(dom,{
                touchStart: getHandler('touchStart', dom, instance),
                touchMove: getHandler('touchMove', dom, instance),
                touchEnd: getHandler('touchEnd', dom, instance),
                touchCancel: getHandler('touchCancel', dom, instance),
                multipointStart: getHandler('multipointStart', dom, instance),
                multipointEnd: getHandler('multipointEnd', dom, instance),
                tap: getHandler('tap', dom, instance),
                doubleTap: getHandler('doubleTap', dom, instance),
                longTap: getHandler('longTap', dom, instance),
                singleTap: getHandler('singleTap', dom, instance),
                rotate: getHandler('rotate', dom, instance),
                pinch: getHandler('pinch', dom, instance),
                pressMove: getHandler('pressMove', dom, instance),
                swipe: getHandler('swipe', dom, instance)

            });

            instance.alloyFinger = alloyFinger;
        });
    }

    OmiFinger.destroy = function(){
        delete Omi.plugins['omi-finger'];
    };

    if (typeof exports == "object") {
        module.exports = OmiFinger;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return OmiFinger });
    } else {
        window.OmiFinger = OmiFinger;
    }

})();
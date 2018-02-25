/*!
 *  omi-finger v0.2.3 by dntzhang
 *  Omi / AlloyFinger integration. Support touch and gesture events in your Omi project.
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */

;(function () {

    if(typeof Omi === 'undefined') return

    var OmiFinger = {};
    var AlloyFinger = typeof require === 'function'
        ? require('alloyfinger')
        : window.AlloyFinger;

    var noop = function(){

    };

    var getHandler = function(name, dom, instance) {
        var value = dom.getAttribute(name);
        if (value === null) {
            if (dom[name]) {
                return function (evt) {
                    dom[name].bind(instance)(evt, dom);
                }
            }
            return noop;
        } else {
            return function (evt) {
                instance[value].bind(instance)(evt, dom);
            }
        }
    };

    Omi.extendPlugin('omi-finger',function(dom, instance){
        if(dom.alloyFinger) {
            if (dom.getAttribute('once') !== null) {
                return
            } else {
                dom.alloyFinger.destroy()
            }
        }

        var alloyFinger = new AlloyFinger(dom, {
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

        dom.alloyFinger = alloyFinger

    });


    if (typeof exports == "object") {
        module.exports = OmiFinger;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return OmiFinger });
    } else {
        window.OmiFinger = OmiFinger;
    }

})();
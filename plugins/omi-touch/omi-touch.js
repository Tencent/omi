/*!
 *  omi-touch v0.1.0 by dntzhang
 *  AlloyTouch / Omi integration. Smooth scrolling, rotation, pull to refresh, page transition and any motion for your Omi project.
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */

;(function () {

    var OmiTouch = {};
    var AlloyTouch = typeof require === 'function' ? require('alloytouch') : window.AlloyTouch;
    var Transform = typeof require === 'function' ? require('css3transform') : window.Transform;
    var Omi = typeof require === 'function' ? require('omi') : window.Omi;

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

    var getNum = function(name, dom){
        var value = dom.getAttribute(name);
        if(value){
            return parseFloat(value);
        }
    }

    OmiTouch.init = function(){
        Omi.extendPlugin('omi-touch',function(dom, instance){
            var target = instance.refs[ dom.getAttribute('motionRef')];
            Transform(target);
            var initialValue = dom.getAttribute('initialValue');
            if(initialValue){
                target[dom.getAttribute('property') || "translateY"] = parseInt(initialValue);
            }

            new AlloyTouch({
                touch: dom,//反馈触摸的dom
                vertical: dom.getAttribute('vertical') === 'false' ? false : true,//不必需，默认是true代表监听竖直方向touch
                target: target, //运动的对象
                property: dom.getAttribute('property') || "translateY",  //被运动的属性
                min:  getNum('min', dom), //不必需,运动属性的最小值
                max:  getNum('max', dom), //不必需,滚动属性的最大值
                sensitivity: getNum('sensitivity', dom) ,//不必需,触摸区域的灵敏度，默认值为1，可以为负数
                factor: getNum('factor', dom) ,//不必需,表示触摸位移与被运动属性映射关系，默认值是1
                step: getNum('step', dom),//用于校正到step的整数倍
                bindSelf: dom.getAttribute('bindSelf') === 'true' ? true : false,
                change: getHandler('change', dom, instance),
                touchStart: getHandler('touchStart', dom, instance),
                touchMove: getHandler('touchMove', dom, instance),
                touchEnd: getHandler('touchEnd', dom, instance),
                tap: getHandler('tap', dom, instance),
                pressMove: getHandler('pressMove', dom, instance),
                animationEnd: getHandler('animationEnd', dom, instance)
            })
        });
    }

    OmiTouch.destroy = function(){
        delete Omi.plugins['omi-touch'];
    };

    if (typeof exports == "object") {
        module.exports = OmiTouch;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return OmiTouch });
    } else {
        window.OmiTouch = OmiTouch;
    }

})();
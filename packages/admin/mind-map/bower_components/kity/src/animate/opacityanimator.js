/**
 * @fileOverview
 *
 * 透明度动画器，让图形动画过度到指定的透明度。
 */

define(function(require) {
    var Animator = require('./animator');

    /**
     * @class kity.OpacityAnimator
     * @catalog animate
     * @base kity.Animator
     * @description 透明度动画器，让图形动画过度到指定的透明度
     */
    var OpacityAnimator = require('../core/class').createClass('OpacityAnimator', {
        base: Animator,

        /**
         * @constructor
         * @for kity.OpacityAnimator
         * @grammar new kity.OpacityAnimator(opacity)
         *
         * @param  {Number} opacity 目标透明度，取值范围 0 - 1
         */
        constructor: function(opacity) {
            this.callBase({
                beginValue: function(target) {
                    return target.getOpacity();
                },
                finishValue: opacity,
                setter: function(target, value) {
                    target.setOpacity(value);
                }
            });
        }
    });

    var Shape = require('../graphic/shape');

    require('../core/class').extendClass(Shape, {
        /**
         * @method fxOpacity()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形的透明度以动画的形式过渡到指定的值
         *
         * @grammar fxOpacity(opacity, duration, easing, delay, callback) => {this}
         *
         * @param {Number}            opacity  动画的目标透明度
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
        fxOpacity: function(opacity, duration, easing, delay, callback) {
            return this.animate(new OpacityAnimator(opacity), duration, easing, delay, callback);
        },

        /**
         * @method fadeTo()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形的透明度以动画的形式过渡到指定的值
         *
         * @grammar fadeTo(opacity, duration, easing, delay, callback) => {this}
         *
         * @param {Number}            opacity  动画的目标透明度
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
        fadeTo: function() {
            return this.fxOpacity.apply(this, arguments);
        },

        /**
         * @method fadeIn()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形淡入
         *
         * @grammar fadeIn(duration, easing, delay, callback) => {this}
         *
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
        fadeIn: function() {
            return this.fxOpacity.apply(this, [1].concat([].slice.call(arguments)));
        },

        /**
         * @method fadeOut()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形淡出
         *
         * @grammar fadeIn(duration, easing, delay, callback) => {this}
         *
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
        fadeOut: function() {
            return this.fxOpacity.apply(this, [0].concat([].slice.call(arguments)));
        }
    });

    return OpacityAnimator;
});
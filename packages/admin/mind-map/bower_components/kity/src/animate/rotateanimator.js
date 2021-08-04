/**
 * @fileOverview
 *
 * 提供支持目标旋转的动画器
 */

define(function(require) {
    var Animator = require('./animator');

    /**
     * @class kity.RotateAnimator
     * @base Animator
     * @description 提供支持目标旋转的动画器
     */
    var RotateAnimator = require('../core/class').createClass('RotateAnimator', {
        base: Animator,

        /**
         * @constructor
         * @for kity.RotateAnimator
         *
         * @grammar new kity.RotateAnimator(deg, ax, ay)
         *
         * @param  {Number} deg 要旋转的角度
         */
        constructor: function(deg) {
            this.callBase({
                beginValue: 0,
                finishValue: deg,
                setter: function(target, value, timeline) {
                    var delta = timeline.getDelta();
                    target.rotate(delta, ax, ay);
                }
            });
        }
    });

    var Shape = require('../graphic/shape');

    require('../core/class').extendClass(Shape, {
        /**
         * @method fxRotate()
         * @for kity.Shape
         * @description 让目标以动画旋转指定的角度
         *
         * @grammar fxRotate(deg, duration, easing, delay) => {this}
         *
         * @param {Number}            deg      要旋转的角度
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
        fxRotate: function(deg, duration, easing, delay, callback) {
            return this.animate(new RotateAnimator(deg), duration, easing, delay, callback);
        }
    });

    return RotateAnimator;
});
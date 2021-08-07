/**
 * @fileOverview
 *
 * 提供支持目标缩放的动画器
 */

define(function(require) {
    var Animator = require('./animator');

    /**
     * @class kity.ScaleAnimator
     * @base kity.Animator
     * @description 提供支持目标缩放的动画器
     */
    var ScaleAnimator = require('../core/class').createClass('ScaleAnimator', {
        base: Animator,

        /**
         * @constructor
         * @for kity.ScaleAnimator
         *
         * @grammar new kity.ScaleAnimator(sx, sy)
         * @param  {Number} sx x 轴的缩放比例
         * @param  {Number} sy y 轴的缩放比例
         */
        constructor: function(sx, sy) {
            this.callBase({
                beginValue: 0,
                finishValue: 1,
                setter: function(target, value, timeline) {
                    var delta = timeline.getDelta();
                    var kx = Math.pow(sx, delta);
                    var ky = Math.pow(sy, delta);
                    target.scale(ky, kx);
                }
            });
        }
    });

    var Shape = require('../graphic/shape');

    require('../core/class').extendClass(Shape, {

        /**
         * @method fxScale
         * @for kity.Shape
         * @description 动画缩放当前的图形
         *
         * @grammar fxScale(sx, sy, duration, easing, delay, callback) => {this}
         *
         * @param {Number} sx x 轴的缩放比例
         * @param {Number} sy y 轴的缩放比例
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
        fxScale: function(sx, sy, duration, easing, delay, callback) {
            return this.animate(new ScaleAnimator(sx, sy), duration, easing, delay, callback);
        }
    });

    return ScaleAnimator;
});
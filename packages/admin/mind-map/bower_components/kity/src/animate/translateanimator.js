/**
 * @fileOverview
 *
 * 提供让图形移动的动画器
 */

define(function(require) {
    var Animator = require('./animator');

    /**
     * @class kity.TranslateAnimator
     * @base kity.Animator
     * @description 提供让图形移动的动画器
     */
    var TranslateAnimator = require('../core/class').createClass('TranslateAnimator', {
        base: Animator,

        /**
         * @constructor
         * @for kity.TranslateAnimator
         * @grammar new kity.TranslateAnimator(x, y)
         * @param  {Number} x x 方向上需要移动的距离
         * @param  {Number} y y 方向上需要移动的距离
         */
        constructor: function(x, y) {
            this.callBase({
                x: 0,
                y: 0
            }, {
                x: x,
                y: y
            }, function(target, value, timeline) {
                var delta = timeline.getDelta();
                target.translate(delta.x, delta.y);
            });
        }
    });

    var Shape = require('../graphic/shape');

    require('../core/class').extendClass(Shape, {
        /**
         * @method fxTranslate()
         * @for kity.Shape
         * @description 让目标以动画平移指定的距离
         *
         * @grammar fxTranslate(x, y, duration, easing, delay, callback) => {this}
         *
         * @param {Number} x x 方向上需要移动的距离
         * @param {Number} y y 方向上需要移动的距离
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
        fxTranslate: function(x, y, duration, easing, delay, callback) {
            return this.animate(new TranslateAnimator(x, y), duration, easing, delay, callback);
        }
    });

    return TranslateAnimator;
});
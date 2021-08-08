/**
 * @fileOverview
 *
 * 路径动画器，可以让一个物体沿着某个轨迹运动
 */

define(function(require) {
    var Animator = require('./animator');
    var g = require('../graphic/geometry');

    var Path = require('../graphic/path');
    var Shape = require('../graphic/shape');

    /**
     * @class kity.MotionAnimator
     * @catalog animate
     * @base kity.Animator
     * @description 路径动画器，可以让一个物体沿着某个轨迹运动
     *
     * @example
     *
     * ```js
     * var motionAnimator = new MotionAnimator('M0,0C100,0,100,0,100,100L200,200');
     * motionAnimator.start(rect, 3000);
     * ```
     */
    var MotionAnimator = require('../core/class').createClass('MotionAnimator', {
        base: Animator,

        /**
         * @constructor
         * @for kity.MotionAnimator
         * @grammar new kity.MotionAnimator(path, doRotate)
         * @param {kity.Path|String|PathSegment} path 运动的轨迹，或者是 kity.Path 对象
         * @param {boolean} doRotate 是否让运动的目标沿着路径的切线方向旋转
         */
        constructor: function(path, doRotate) {
            var me = this;
            this.callBase({
                beginValue: 0,
                finishValue: 1,
                setter: function(target, value) {
                    var path = me.motionPath instanceof Path ? me.motionPath.getPathData() : me.motionPath;
                    var point = g.pointAtPath(path, value);
                    target.setTranslate(point.x, point.y);
                    if (this.doRotate) target.setRotate(point.tan.getAngle());
                }
            });

            /**
             * @property doRotate
             * @for kity.MotionAnimator
             * @type {boolean}
             * @description 是否让运动的目标沿着路径的切线方向旋转
             *
             * @example
             *
             * ```js
             * motionAnimator.doRotate = true; // 目标沿着切线方向旋转
             * ```
             */
            this.doRotate = doRotate;


            /**
             * @property motionPath
             * @for kity.MotionAnimator
             * @type  {kity.Path|String|PathSegment}
             * @description 运动沿着的路径，可以在动画过程中更新
             */
            this.motionPath = path;
        }
    });

    require('../core/class').extendClass(Shape, {

        /**
         * @method motion()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形沿着指定的路径运动
         *
         * @grammar motion(path, duration, easing, delay, callback) => this
         *
         * @param {kity.Path|String|PathSegment} path 运动的轨迹，或者是 kity.Path 对象
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
        motion: function(path, duration, easing, delay, callback) {
            return this.animate(new MotionAnimator(path), duration, easing, delay, callback);
        }
    });

    return MotionAnimator;
});
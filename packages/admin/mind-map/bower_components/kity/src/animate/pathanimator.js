/**
 * @fileOverview
 *
 * 路径补间动画器，让图形从一个形状变为另一个形状
 */

define(function(require) {
    var Animator = require('./animator');
    var g = require('../graphic/geometry');

    /**
     * @catalog animate
     *
     * @class kity.PathAnimator
     * @base kity.Animator
     * @description 路径补间动画器，让图形从一个形状变为另一个形状
     *
     * @example
     *
     * ```js
     * var path = new kity.Path('M0,0L0,100');
     * var pa = new kity.PathAnimator('M0,0C100,0,100,0,100,100');
     * pa.start(path, 300);
     * ```
     */
    var PathAnimator = require('../core/class').createClass('OpacityAnimator', {
        base: Animator,

        /**
         * @constructor
         * @for kity.PathAnimator
         *
         * @grammar new kity.Path.Animator(path)
         *
         * @param  {String|PathSegment} path 目标形状的路径数据
         *
         */
        constructor: function(path) {
            this.callBase({
                beginValue: function(target) {
                    this.beginPath = target.getPathData();
                    return 0;
                },
                finishValue: 1,
                setter: function(target, value) {
                    target.setPathData(g.pathTween(this.beginPath, path, value));
                }
            });
        }
    });

    var Path = require('../graphic/path');

    require('../core/class').extendClass(Path, {
        /**
         * @catalog animate
         *
         * @method fxPath()
         * @for kity.Shape
         * @description 以动画的形式把路径变换为新路径
         *
         * @grammar fxPath(path, duration, easing, delay, callback) => {this}
         *
         * @param {String|PathSegment}   path     要变换新路径
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
        fxPath: function(path, duration, easing, delay, callback) {
            return this.animate(new PathAnimator(path), duration, easing, delay, callback);
        }
    });

    return PathAnimator;
});
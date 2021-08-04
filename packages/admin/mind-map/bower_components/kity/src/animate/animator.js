/**
 * @fileOverview
 *
 * 提供基本的动画支持
 */

define(function(require) {

    function parseTime(str) {
        var value = parseFloat(str, 10);
        if (/ms/.test(str)) {
            return value;
        }
        if (/s/.test(str)) {
            return value * 1000;
        }
        if (/min/.test(str)) {
            return value * 60 * 1000;
        }
        return value;
    }

    var Timeline = require('./timeline');
    var easingTable = require('./easing');


    /**
     * @class kity.Animator
     * @catalog animate
     * @description 表示一个动画启动器，可以作用于不同的对象进行动画
     */
    var Animator = require('../core/class').createClass('Animator', {

        /**
         * @constructor
         * @for kity.Animator
         * @catalog animate
         *
         * @grammar new kity.Animator(beginValue, finishValue, setter)
         * @grammar new kity.Animator(option)
         *
         * @param  {any}      beginValue|opt.beginValue
         *     动画的起始值，允许的类型有数字、数组、字面量、kity.Point、kity.Vector、kity.Box、kity.Matrix
         *
         * @param  {any}      finishValue|opt.beginValue
         *     动画的结束值，类型应于起始值相同
         *
         * @param  {Function} setter|opt.setter
         *     值的使用函数，接受三个参数: function(target, value, timeline)
         *         target   {object}        动画的目标
         *         value    {any}           动画的当前值
         *         timeline {kity.Timeline} 动画当前的时间线对象
         */
        constructor: function(beginValue, finishValue, setter) {
            if (arguments.length == 1) {
                var opt = arguments[0];
                this.beginValue = opt.beginValue;
                this.finishValue = opt.finishValue;
                this.setter = opt.setter;
            } else {
                this.beginValue = beginValue;
                this.finishValue = finishValue;
                this.setter = setter;
            }
        },

        /**
         * @method start()
         * @for kity.Animator
         * @description 使用当前的动画器启动在指定目标上启动动画
         *
         * @grammar start(target, duration, easing, delay, callback) => {kity.Timeline}
         * @grammar start(target, option) => {kity.Timeline}
         *
         * @param  {object} target
         *     启动动画的目标
         *
         * @param  {Number|String} duration|option.duration
         *     [Optional] 动画的持续时间，如 300、"300ms"、"1.5min"
         *
         * @param  {String|Function} easing|option.easing
         *     [Optional] 动画使用的缓动函数，如 "ease"、"linear"、"swing"
         *
         * @param  {Number|String} delay|option.delay
         *     [Optional] 动画的播放延迟时间
         *
         * @param  {Function} callback|option.callback
         *     [Optional] 动画结束后的回调函数
         *
         * @example
         *
         * ```js
         * var turnRed = new kity.Animator(
         *     new kity.Color('yellow'),
         *     new kity.Color('red'),
         *     function(target, value) {
         *         target.fill(value);
         *     });
         *
         * turnRed.start(rect, 300, 'ease', function() {
         *     console.log('I am red!');
         * });
         * ```
         */
        start: function(target, duration, easing, delay, callback) {
            if (arguments.length === 2 && typeof(duration) == 'object') {
                easing = duration.easing;
                delay = duration.delay;
                callback = duration.callback;
                duration = duration.duration;
            }
            if (arguments.length === 4 && typeof(delay) == 'function') {
                callback = delay;
                delay = 0;
            }
            var timeline = this.create(target, duration, easing, callback);
            delay = parseTime(delay);
            if (delay > 0) {
                setTimeout(function() {
                    timeline.play();
                }, delay);
            } else {
                timeline.play();
            }
            return timeline;
        },


        /**
         * @method create()
         * @for kity.Animator
         * @description 使用当前的动画器为指定目标创建时间线
         *
         * @grammar create(target, duration, easing, callback) => {kity.Timeline}
         *
         * @param  {object}            target   要创建的时间线的目标
         * @param  {Number|String}     duration 要创建的时间线的长度，如 300、"5s"、"0.5min"
         * @param  {String|Function}   easing   要创建的时间线的缓动函数，如 'ease'、'linear'、'swing'
         * @param  {Function}          callback 时间线播放结束之后的回调函数
         *
         * @example
         *
         * ```js
         * var expand = new kity.Animator({
         *     beginValue: function(target) {
         *         return target.getBox();
         *     },
         *     finishValue: function(target) {
         *         return target.getBox().expand(100, 100, 100, 100);
         *     },
         *     setter: function(target, value) {
         *         target.setBox(value)
         *     }
         * });
         *
         * var timeline = expand.create(rect, 300);
         * timeline.repeat(3).play();
         * ```
         */
        create: function(target, duration, easing, callback) {
            var timeline;

            duration = duration && parseTime(duration) || Animator.DEFAULT_DURATION;
            easing = easing || Animator.DEFAULT_EASING;

            if (typeof(easing) == 'string') {
                easing = easingTable[easing];
            }

            timeline = new Timeline(this, target, duration, easing);

            if (typeof(callback) == 'function') {
                timeline.on('finish', callback);
            }
            return timeline;
        },

        /**
         * @method reverse()
         * @for kity.Animator
         * @grammar reverse() => {kity.Animator}
         * @description 创建一个与当前动画器相反的动画器
         *
         * @example
         *
         * ```js
         * var turnYellow = turnRed.reverse();
         * ```
         */
        reverse: function() {
            return new Animator(this.finishValue, this.beginValue, this.setter);
        }

    });

    Animator.DEFAULT_DURATION = 300;
    Animator.DEFAULT_EASING = 'linear';

    var Shape = require('../graphic/shape');
    require('../core/class').extendClass(Shape, {
        /**
         * @method animate()
         * @for kity.Shape
         * @description 在图形上播放使用指定的动画器播放动画，如果图形当前有动画正在播放，则会加入播放队列
         *
         * @grammar animate(animator, duration, easing, delay, callback)
         *
         * @param  {object}            animator 播放动画使用的动画器
         * @param  {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param  {Number|String}     delay    动画播放前的延时
         * @param  {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param  {Function}          callback 播放结束之后的回调函数
         *
         * @example
         *
         * ```js
         * rect.animate(turnRed, 300); // turnRect 是一个动画器
         * rect.animate(expand, 500);  // turnRect 播放结束后播放 expand
         * ```
         */
        animate: function(animator, duration, easing, delay, callback) {
            var queue = this._KityAnimateQueue = this._KityAnimateQueue || [];
            var timeline = animator.create(this, duration, easing, callback);

            function dequeue() {
                queue.shift();
                if (queue.length) {
                    setTimeout(queue[0].t.play.bind(queue[0].t), queue[0].d);
                }
            }
            timeline.on('finish', dequeue);
            queue.push({
                t: timeline,
                d: delay
            });
            if (queue.length == 1) {
                setTimeout(timeline.play.bind(timeline), delay);
            }
            return this;
        },

        /**
         * @method timeline()
         * @for kity.Shape
         * @description 获得当前正在播放的动画的时间线
         *
         * @grammar timeline() => {kity.Timeline}
         *
         * @example
         *
         * ```js
         * rect.timeline().repeat(2);
         * ```
         */
        timeline: function() {
            return this._KityAnimateQueue[0].t;
        },

        /**
         * @method stop()
         * @for kity.Shape
         * @description 停止当前正在播放的动画
         *
         * @grammar stop() => {this}
         *
         * @example
         *
         * ```js
         * rect.stop(); // 停止 rect 上的动画
         * ```
         */
        stop: function() {
            var queue = this._KityAnimateQueue;
            if (queue) {
                while (queue.length) {
                    queue.shift().t.stop();
                }
            }
            return this;
        }
    });

    return Animator;
});
/**
 * @fileOverview
 *
 * 动画时间线的实现
 */

define(function(require) {

    var EventHandler = require('../graphic/eventhandler');
    var utils = require('../core/utils');

    var frame = require('./frame');

    function getPercentValue(b, f, p) {
        return utils.paralle(b, f, function(b, f) {
            return b + (f - b) * p;
        });
    }

    function getDelta(v1, v2) {
        return utils.paralle(v1, v2, function(v1, v2) {
            return v2 - v1;
        });
    }

    function TimelineEvent(timeline, type, param) {
        this.timeline = timeline;
        this.target = timeline.target;
        this.type = type;
        for (var name in param) {
            if (param.hasOwnProperty(name)) {
                this[name] = param[name];
            }
        }
    }

    /**
     * @class kity.Timeline
     * @catalog animate
     * @mixins EventHandler
     * @description 动画时间线
     */
    var Timeline = require('../core/class').createClass('Timeline', {

        mixins: [EventHandler],

        /**
         * @constructor
         * @for kity.Timeline
         * @private
         * @description 时间线应该由动画器进行构造，不应手动创建
         *
         */
        constructor: function(animator, target, duration, easing) {
            this.callMixin();

            this.target = target;

            this.time = 0;
            this.duration = duration;

            this.easing = easing;
            this.animator = animator;
            this.beginValue = animator.beginValue;
            this.finishValue = animator.finishValue;
            this.setter = animator.setter;

            this.status = 'ready';
        },

        /**
         * @private
         *
         * 让时间线进入下一帧
         */
        nextFrame: function(frame) {
            if (this.status != 'playing') {
                return;
            }

            this.time += frame.dur;

            this.setValue(this.getValue());

            if (this.time >= this.duration) {
                this.timeUp();
            }

            frame.next();
        },

        /**
         * @method getPlayTime()
         * @for kity.Timeline
         * @grammar getPlayTime() => {Number}
         * @description 获得当前播放的时间，取值区间为 [0, duration]
         */
        getPlayTime: function() {
            return this.rollbacking ? this.duration - this.time : this.time;
        },

        /**
         * @method getTimeProportion()
         * @for kity.Timeline
         * @grammar getTimeProportion() => {Number}
         * @description 获得当前播放时间的比例，取值区间为 [0, 1]
         */
        getTimeProportion: function() {
            return this.getPlayTime() / this.duration;
        },

        /**
         * @method getValueProportion()
         * @for kity.Timeline
         * @grammar getValueProportion() => {Number}
         * @description 获得当前播放时间对应值的比例，取值区间为 [0, 1]；该值实际上是时间比例值经过缓动函数计算之后的值。
         */
        getValueProportion: function() {
            return this.easing(this.getPlayTime(), 0, 1, this.duration);
        },

        /**
         * @method getValue()
         * @for kity.Timeline
         * @grammar getValue() => {any}
         * @description 返回当前播放时间对应的值。
         */
        getValue: function() {
            var b = this.beginValue;
            var f = this.finishValue;
            var p = this.getValueProportion();
            return getPercentValue(b, f, p);
        },

        /**
         * @private
         *
         * 把值通过动画器的 setter 设置到目标上
         */
        setValue: function(value) {
            this.lastValue = this.currentValue;
            this.currentValue = value;
            this.setter.call(this.target, this.target, value, this);
        },

        /**
         * @method getDelta()
         * @for kity.Timeline
         * @grammar getDelta() => {any}
         * @description 返回当前值和上一帧的值的差值
         */
        getDelta: function() {
            this.lastValue = this.lastValue === undefined ? this.beginValue : this.lastValue;
            return getDelta(this.lastValue, this.currentValue);
        },

        /**
         * @method play()
         * @for kity.Timeline
         * @grammar play() => {this}
         * @description 让时间线播放，如果时间线还没开始，或者已停止、已结束，则重头播放；如果是已暂停，从暂停的位置继续播放
         */
        play: function() {
            var lastStatus = this.status;
            this.status = 'playing';

            switch (lastStatus) {

                case 'ready':
                    if (utils.isFunction(this.beginValue)) {
                        this.beginValue = this.beginValue.call(this.target, this.target);
                    }
                    if (utils.isFunction(this.finishValue)) {
                        this.finishValue = this.finishValue.call(this.target, this.target);
                    }
                    this.time = 0;
                    this.setValue(this.beginValue);
                    this.frame = frame.requestFrame(this.nextFrame.bind(this));
                    break;

                case 'finished':
                case 'stoped':
                    this.time = 0;
                    this.frame = frame.requestFrame(this.nextFrame.bind(this));
                    break;

                case 'paused':
                    this.frame.next();
            }

            /**
             * @event play
             * @for kity.Timeline
             * @description 在时间线播放后触发
             *
             * @param {String} event.lastStatus
             *        表示播放前的上一个状态，可能取值为 'ready'、'finished'、'stoped'、'paused'
             */
            this.fire('play', new TimelineEvent(this, 'play', {
                lastStatus: lastStatus
            }));

            return this;
        },

        /**
         * @method pause()
         * @for kity.Timeline
         * @description 暂停当前的时间线
         *
         * @grammar pause() => {this}
         */
        pause: function() {
            this.status = 'paused';

            /**
             * @event pause
             * @for kity.Timeline
             * @description 暂停事件，在时间线暂停时触发
             */
            this.fire('pause', new TimelineEvent(this, 'pause'));
            frame.releaseFrame(this.frame);
            return this;
        },

        /**
         * @method stop()
         * @for kity.Timeline
         * @description 停止当前时间线
         *
         * @grammar stop() => {this}
         */
        stop: function() {
            this.status = 'stoped';
            this.setValue(this.finishValue);
            this.rollbacking = false;

            /**
             * @event stop
             * @for kity.Timeline
             * @description 停止时间，在时间线停止时触发
             */
            this.fire('stop', new TimelineEvent(this, 'stop'));
            frame.releaseFrame(this.frame);
            return this;
        },

        /**
         * @private
         *
         * 播放结束之后的处理
         */
        timeUp: function() {
            if (this.repeatOption) {
                this.time = 0;
                if (this.rollback) {
                    if (this.rollbacking) {
                        this.decreaseRepeat();
                        this.rollbacking = false;
                    } else {
                        this.rollbacking = true;

                        /**
                         * @event rollback
                         * @for kity.Timeline
                         * @description 回滚事件，在时间线回滚播放开始的时候触发
                         */
                        this.fire('rollback', new TimelineEvent(this, 'rollback'));
                    }
                } else {
                    this.decreaseRepeat();
                }
                if (!this.repeatOption) {
                    this.finish();
                } else {
                    /**
                     * @event repeat
                     * @for kity.Timeline
                     * @description 循环事件，在时间线循环播放开始的时候触发
                     */
                    this.fire('repeat', new TimelineEvent(this, 'repeat'));
                }
            } else {
                this.finish();
            }
        },
        /**
         * @private
         *
         * 决定播放结束的处理
         */
        finish: function() {
            this.setValue(this.finishValue);
            this.status = 'finished';
            /**
             * @event finish
             * @for kity.Timeline
             * @description 结束事件，在时间线播放结束后触发（包括重复和回滚都结束）
             */
            this.fire('finish', new TimelineEvent(this, 'finish'));
            frame.releaseFrame(this.frame);
        },
        /**
         * @private
         *
         *  循环次数递减
         */
        decreaseRepeat: function() {
            if (this.repeatOption !== true) {
                this.repeatOption--;
            }
        },

        /**
         * @method repeat()
         * @for kity.Timeline
         * @description 设置时间线的重复选项
         *
         * @grammar repeat(repeat, rollback) => {this}
         *
         * @param  {Number|Boolean} repeat
         *     是否重复播放，设置为 true 无限循环播放，设置数值则循环指定的次数
         * @param  {Boolean} rollback
         *     指示是否要回滚播放。
         *     如果设置为真，一次事件到 duration 则一个来回算一次循环次数，否则播放完成一次算一次循环次数
         *
         */
        repeat: function(repeat, rollback) {
            this.repeatOption = repeat;
            this.rollback = rollback;
            return this;
        }
    });
    Timeline.requestFrame = frame.requestFrame;
    Timeline.releaseFrame = frame.releaseFrame;
    return Timeline;
});
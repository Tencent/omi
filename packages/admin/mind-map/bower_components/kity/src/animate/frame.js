/**
 * @fileOverview
 *
 * 提供动画帧的基本支持
 */

define(function(require, exports) {

    // 原生动画帧方法 polyfill
    var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(fn) {
            return setTimeout(fn, 1000 / 60);
        };

    var cancelAnimationFrame =
        window.cancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.msCancelAnimationFrame ||
        window.clearTimeout;

    // 上一个请求的原生动画帧 id
    var frameRequestId;

    // 等待执行的帧动作的集合，这些帧的方法将在下个原生动画帧同步执行
    var pendingFrames = [];

    /**
     * 添加一个帧到等待集合中
     *
     * 如果添加的帧是序列的第一个，至少有一个帧需要被执行，则会请求一个原生动画帧来执行
     */
    function pushFrame(frame) {
        if (pendingFrames.push(frame) === 1) {
            frameRequestId = requestAnimationFrame(executePendingFrames);
        }
    }

    /**
     * 执行所有等待帧
     */
    function executePendingFrames() {
        var frames = pendingFrames;
        pendingFrames = [];
        while (frames.length) {
            executeFrame(frames.pop());
        }
        frameRequestId = 0;
    }

    /**
     * @method kity.requestFrame
     * @catalog animate
     * @grammar kity.requestFrame(action) => {frame}
     * @description 请求一个帧，执行指定的动作。动作回调提供一些有用的信息
     *
     * @param {Function} action
     *
     *     要执行的动作，该动作回调有一个参数 frame，其中：
     *
     *     frame.time {Number}
     *         动作执行时的时间戳（ms）
     *
     *     frame.index {Number}
     *         当前执行的帧的编号（首帧为 0）
     *
     *     frame.dur {Number}
     *         上一帧至当前帧经过的时间，单位 ms
     *
     *     frame.elapsed {Number}
     *         从首帧开始到当前帧经过的时间，单位 ms
     *
     *     frame.action {Number}
     *         指向当前的帧处理函数
     *
     *     frame.next()
     *         表示下一帧继续执行。如果不调用该方法，将不会执行下一帧。
     *
     * @example
     *
     * ```js
     * kity.requestFrame(function(frame) {
     *     console.log('平均帧率:' + frame.elapsed / (frame.index + 1));
     *
     *     // 更新或渲染动作
     *
     *     frame.next(); //继续执行下一帧
     * });
     * ```
     */
    function requestFrame(action) {
        var frame = initFrame(action);
        pushFrame(frame);
        return frame;
    }

    /**
     * @method kity.releaseFrame
     * @catalog animate
     * @grammar kity.releaseFrame(frame)
     * @description 释放一个已经请求过的帧，如果该帧在等待集合里，将移除，下个动画帧不会执行释放的帧
     *
     * @param {frame} frame 使用 kity.requestFrame() 返回的帧
     *
     * @example
     *
     * ```js
     * var frame = kity.requestFrame(function() {....});
     * kity.releaseFrame(frame);
     * ```
     */
    function releaseFrame(frame) {
        var index = pendingFrames.indexOf(frame);
        if (~index) {
            pendingFrames.splice(index, 1);
        }
        if (pendingFrames.length === 0) {
            cancelAnimationFrame(frameRequestId);
        }
    }

    /**
     * 初始化一个帧，主要用于后续计算
     */
    function initFrame(action) {
        var frame = {
            index: 0,
            time: +new Date(),
            elapsed: 0,
            action: action,
            next: function() {
                pushFrame(frame);
            }
        };
        return frame;
    }

    /**
     * 执行一个帧动作
     */
    function executeFrame(frame) {
        // 当前帧时间错
        var time = +new Date();

        // 当上一帧到当前帧经过的时间
        var dur = time - frame.time;

        //
        // http://stackoverflow.com/questions/13133434/requestanimationframe-detect-stop
        // 浏览器最小化或切换标签，requestAnimationFrame 不会执行。
        // 检测时间超过 200 ms（频率小于 5Hz ） 判定为计时器暂停，重置为一帧长度
        //
        if (dur > 200) {
            dur = 1000 / 60;
        }

        frame.dur = dur;
        frame.elapsed += dur;
        frame.time = time;
        frame.action.call(null, frame);
        frame.index++;
    }

    // 暴露
    exports.requestFrame = requestFrame;
    exports.releaseFrame = releaseFrame;
});
/* tick https://github.com/AlloyTeam/AlloyTouch/blob/master/transformjs/asset/tick.js
 * By dntzhang|当耐特
 */
; (function () {

    if (!Date.now)
        Date.now = function () { return new Date().getTime(); };

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame']
                                   || window[vp + 'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function (callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function () { callback(lastTime = nextTime); },
                              nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }

    var tickArr = [];

    var tick = function (fn) {
        tickArr.push(fn);
    };

    var execTick = function () {
        var i = 0, len = tickArr.length;
        for (; i < len; i++) {
            tickArr[i]();
        }
        requestAnimationFrame(execTick);
    };
    execTick();

    window.tick = tick;
})();
/* tojs https://github.com/AlloyTeam/AlloyTouch/blob/master/transformjs/asset/to.js
 * By dntzhang|µ±ÄÍÌØ
 */
(function () {
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

}());

(function() {
    var To = {};

    var _To = function (el, property, value, time, ease, setting) {
        var current = el[property];
        var dv = value - current;
        var beginTime = new Date();
        var self = this;
        var currentEase = ease || function (a) {
                return a
            };
        var currentSetting = setting || {};
        var onChange = currentSetting.onChange || function () {
            };
        var onEnd = currentSetting.onEnd || function () {
            };
        this.tickID = null;
        var toTick = function () {
            var dt = new Date() - beginTime;
            if (dt >= time) {
                el[property] = value;
                onChange && onChange(value);
                onEnd && onEnd(value);
                cancelAnimationFrame(self.tickID);
                self.toTick = null;
                return;
            }
            el[property] = dv * currentEase(dt / time) + current;
            self.tickID = requestAnimationFrame(toTick);
            onChange && onChange(el[property]);
        };
        toTick();
        To.List.push(this);
    };

    To.go = function (el, property, value, time, ease,setting) {
        return new _To(el, property, value, time, ease,setting);
    };

    To.List = [];

    To.stopAll = function () {
        for (var i = 0, len = To.List.length; i < len; i++) {
            cancelAnimationFrame(To.List[i].tickID);
        }
        To.List.length = 0;
    };

    To.stop = function (to) {
        cancelAnimationFrame(to.tickID);
    };

    window.To = To;
})();

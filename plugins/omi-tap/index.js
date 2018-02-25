/*!
 *  omi-tap v0.1.0 by dntzhang
 *  Support tap event in your Omi project.
 *  Github: https://github.com/AlloyTeam/omix
 *  MIT Licensed.
 */

;(function () {

    if (typeof Omi === 'undefined') {
        return
    }


    Omi.extendPlugin('omi-tap', function (dom, instance) {

        var x1,
            y1,
            scrollTop

        dom.removeEventListener('touchstart', dom._preTouchStart, false)
        dom.removeEventListener('touchend', dom._preTouchEnd, false)
        dom.addEventListener('touchstart', start, false)
        dom.addEventListener('touchend', end, false)

        dom._preTouchStart = start
        dom._preTouchEnd = end

        function start(evt) {
            x1 = evt.touches[0].pageX
            y1 = evt.touches[0].pageY
            scrollTop = document.body.scrollTop
        }

        function end(evt) {
            if (Math.abs(evt.changedTouches[0].pageX - x1) < 30 && Math.abs(evt.changedTouches[0].pageY - y1) < 30 && Math.abs(document.body.scrollTop - scrollTop) < 30) {
                getHandler('tap', dom, instance)(evt)
            }
        }
    })

    function getHandler(name, dom, instance) {
        var value = dom.getAttribute(name)
        if (value === null) {
            if (dom[name]) {
                return function (evt) {
                    dom[name].bind(instance)(evt, dom)
                }
            }
            return noop
        } else {
            return function (evt) {
                instance[value].bind(instance)(evt, dom)
            }
        }
    }

})();
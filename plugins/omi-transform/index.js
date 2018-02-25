/*!
 *  omi-transform v0.3.1 by dntzhang
 *  Omi / css3transform  integration. Support CSS3 transformation in your Omi project.
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */

;(function () {
    if(typeof Omi === 'undefined') return

    var OmiTransform = {};
    var Transform = typeof require === 'function'
        ? require('css3transform')
        : window.Transform;


    Omi.extendPlugin('omi-transform',function(dom, instance){
        var ref = dom.getAttribute('ref');
        if(ref) {
            var element = instance.refs[ref];

            Transform(element, dom.getAttribute('perspective') === null ? true : false);
            ['translateX', 'translateY', 'translateZ', 'scaleX', 'scaleY', 'scaleZ', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'originX', 'originY', 'originZ','perspective'].forEach(function (name) {
                var attr = dom.getAttribute(name);
                if (attr) {
                    var num = parseFloat(dom.getAttribute(name));
                    if(!isNaN(num)) {
                        element[name] = num;
                    }
                }
            });
        }
    });


    if (typeof exports == "object") {
        module.exports = OmiTransform;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return OmiTransform });
    } else {
        window.OmiTransform = OmiTransform;
    }

})();
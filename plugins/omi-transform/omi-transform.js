/*!
 *  omi-transform v0.1.0 by dntzhang
 *  Omi / css3transform  integration. Support CSS3 transformation in your Omi project.
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */

;(function () {

    var OmiTransform = {};
    var Transform = typeof require === 'function'
        ? require('css3transform')
        : window.Transform;
    var Omi = typeof require === 'function'
        ? require('omi')
        : window.Omi;



    OmiTransform.init = function(){
        Omi.extendPlugin('omi-transform',function(dom, instance){
            var ref = dom.getAttribute('ref');
            if(ref){
                var element = instance.refs[ref];
                Transform(element);
                ['translateX', 'translateY', 'translateZ', 'scaleX', 'scaleY', 'scaleZ', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'originX', 'originY', 'originZ'].forEach(function(name){
                    var attr = dom.getAttribute(name);
                    if(attr) {
                        element[name] = parseFloat(dom.getAttribute(name));
                    }
                });
            }

        });
    }

    OmiTransform.destroy = function(){
        delete Omi.plugins['omi-transform'];
    };

    if (typeof exports == "object") {
        module.exports = OmiTransform;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return OmiTransform });
    } else {
        window.OmiTransform = OmiTransform;
    }

})();
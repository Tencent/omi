;(function () {

    var OmiDrag = {};
    var Omi = typeof require === 'function'
        ? require('../../src/index.js')
        : window.Omi;

    OmiDrag.init = function(){
        Omi.extendPlugin('omi-drag',function(dom, instance){
            dom.style.cursor='move';
            var isMouseDown = false,
                preX = preY = currentX = currentY = null,
                translateX = 0,
                translateY = 0;

            dom.addEventListener('mousedown',function(evt){
                isMouseDown = true;
                preX = evt.pageX;
                preY = evt.pageY;
                evt.stopPropagation();
            },false);

            window.addEventListener('mousemove',function(evt){
                if(isMouseDown){
                    currentX = evt.pageX;
                    currentY = evt.pageY;

                    if(preX != null){
                        translateX += currentX - preX;
                        translateY += currentY - preY;
                        dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';
                    }
                    preX = currentX;
                    preY = currentY;
                    evt.preventDefault();
                }
            },false);

            window.addEventListener('mouseup',function(){
                isMouseDown = false;
                preX = preY = currentX = currentY = null;
            },false);
        });
    }

    OmiDrag.destroy = function(){
        delete Omi.plugins['omi-drag'];
    };

    if (typeof exports == "object") {
        module.exports = OmiDrag;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return OmiDrag });
    } else {
        window.OmiDrag = OmiDrag;
    }

})();
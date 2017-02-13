import Omi from '../../src/index.js';
import AlloyFinger from './alloy-finger.js';

let OmiFinger = {};

OmiFinger.init = function(){
    Omi.extendPlugin('omi-finger',function(dom, instance){
        let finger = new AlloyFinger(dom,{
            tap: instance[dom.getAttribute('onTap')],
            swipe: instance[dom.getAttribute('onSwipe')]
        });
    })
}


OmiFinger.destroy = function(){
    delete Omi.plugins['omi-finger'];
};

export default OmiFinger;

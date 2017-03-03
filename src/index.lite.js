import Omi from './omi.js';
import Component from './component.js';

Omi.template = function(tpl, data){
    return tpl;
}

Omi.Component = Component;

if(window.Omi){
    module.exports = window.Omi;
}else {
    window.Omi = Omi;
    module.exports = Omi;
}
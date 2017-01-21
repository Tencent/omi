import Omi from './omi.js';
import Component from './component.js';

Omi.template = function(tpl, data){
    return tpl;
}

Omi.Component = Component;

window.Omi=Omi;
module.exports = Omi;
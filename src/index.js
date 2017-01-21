import Omi from './omi.js';
import Mustache from './mustache.js';
import Component from './component.js';

Omi.template = Mustache.render;

Omi.Component = Component;

window.Omi=Omi;
module.exports = Omi;
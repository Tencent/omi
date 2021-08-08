define(function (require, exports, module) {
    var Class = require('core/class');
    var Paper = require('graphic/paper');
    var Draggable = require('../public/draggable');
    var PathDiagram = require('../pathdiagram/pathdiagram');

    Class.extendClass(Paper, Draggable);

    var paper = new Paper(document.body).drag();

    paper.on('dragstart', function() {
        this.setStyle('cursor', '-webkit-grabbing');
    }).on('dragend', function() {
        this.setStyle('cursor', '-webkit-grab');
    }).trigger('dragend');

    paper.setViewBox(-600.5, -400.5, 1200, 800);

    var keyword = /q=(.+)/.exec(window.location.href);
    keyword = keyword && keyword[1];
    paper.addShape(new PathDiagram(keyword));
});
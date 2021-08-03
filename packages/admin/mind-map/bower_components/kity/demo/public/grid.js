define(function(require, exports, module) {
    var Rect = require('graphic/rect');
    var PatternBrush = require('graphic/patternbrush');
    return require('core/class').createClass('Grid', {
        base: Rect,
        constructor: function( x, y, width, height, gridSize, color1, color2 ) {
            this.color1 = color1 || 'white';
            this.color2 = color2 || 'lightgray';
            this.gridSize = gridSize;
            this.callBase(width, height, x, y);
            this.draw();
        },
        draw: function() {
            var me = this;
            function lazyDraw() {
                var paper = me.getPaper();
                if( !paper ) {
                    return setTimeout( lazyDraw, 100 );
                }
                var size = me.gridSize;
                me.fill(new PatternBrush().pipe(function() {
                    this.setX(0).setY(0);
                    this.setWidth(size * 2).setHeight(size * 2);
                    this.addShape(new Rect(size, size).fill(me.color2));
                    this.addShape(new Rect(size, size, size, size).fill(me.color2));
                    paper.addResource(this);
                }));
            }
            lazyDraw();
        }
    });
});
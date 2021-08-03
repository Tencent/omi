define(function(require, exports, module){
    var Path = require('graphic/path');
    var Point = require('graphic/point');
    return require('core/class').createClass({
        base: Path,
        constructor: function(r, R, a1, a2) {
            this.callBase();
            this.draw(r, R, a1, a2);
            this.center = Point.fromPolar( (R + r) / 2, (a1 + a2) / 2 );
        },
        draw: function(r, R, a1, a2) {
            var d = this.getDrawer();
            var p1 = Point.fromPolar(r, a1),
                p2 = Point.fromPolar(R, a1),
                p3 = Point.fromPolar(R, a2),
                p4 = Point.fromPolar(r, a2);
            d.moveTo(p1.x, p1.y);
            d.lineTo(p2.x, p2.y);
            d.carcTo(R, 0, 1, p3.x, p3.y);
            d.lineTo(p4.x, p4.y);
            d.carcTo(r, 0, 0, p1.x, p1.y);
            d.close();
        }
    });
});
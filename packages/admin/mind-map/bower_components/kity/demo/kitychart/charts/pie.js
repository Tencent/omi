var kityPie = kity.createClass({
    base: kity.Path,
    constructor: function(r, R, a1, a2, x, y) {
        this.callBase();
        this.draw(r, R, a1, a2, x, y);
        this.center = kity.Point.fromPolar((R + r) / 2, (a1 + a2) / 2);
    },
    draw: function(r, R, a1, a2, x, y) {
        var d = this.getDrawer();
        var p1 = kity.Point.fromPolar(r, a1),
            p2 = kity.Point.fromPolar(R, a1),
            p3 = kity.Point.fromPolar(R, a2),
            p4 = kity.Point.fromPolar(r, a2);
        d.moveTo(p1.x + x, p1.y + y);
        d.lineTo(p2.x + x, p2.y + y);
        var dir = Math.abs(a2 - a1) > 180 ? 1 : 0;
        d.carcTo(R, dir, 1, p3.x + x, p3.y + y);
        d.lineTo(p4.x + x, p4.y + y);
        d.carcTo(r, dir, 0, p1.x + x, p1.y + y);
        d.close();
    }
});
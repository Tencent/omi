define(function(require, exports, module) {

    var Group = require('graphic/group');
    var Circle = require('graphic/circle');
    var Color = require('graphic/color');
    var Text = require('graphic/text');
    var Pen = require('graphic/pen');
    var Matrix = require('graphic/matrix');
    var Pie = require('../ringpalette/pie');
    var Draggable = require('../public/draggable');

    return require('core/class').createClass({
        base: Group,
        mixins: [Draggable],
        constructor: function(innerRadius, outerRadius, trackCount, trackPieCount, initSaturation) {
            this.callBase();
            this.innerRadius = innerRadius || 200;
            this.outerRadius = outerRadius || 400;
            this.trackCount = trackCount || 12;
            this.trackHeight = (this.outerRadius - this.innerRadius) / this.trackCount;
            this.trackPieCount = trackPieCount || 60;
            this.saturation = initSaturation || 50;
            this.generate();
            this.control();
            this.callMixin();
            this.drag();
        },
        generate: function() {
            this.generateCircle();
            this.generateTracks();
            this.generateLabels();
        },
        generateCircle: function() {
            this.circle = new Circle(this.innerRadius);
            this.circle.stroke(new Pen('white', 5));
            this.circle.setStyle('cursor', 'move');
            this.addShape(this.circle);
        },
        generateTracks: function() {
            this.pies = new Group();
            for (var trackNumber = 0; trackNumber < this.trackCount; trackNumber++) {
                this.pies.addShapes(this.generateTrackPies(trackNumber));
            }
            this.addShape(this.pies.rotate(0));
        },
        generateTrackPies: function(trackNumber) {
            var trackInnerRadius = this.innerRadius + this.trackHeight * trackNumber,
                trackOuterRadius = trackInnerRadius + this.trackHeight;
            var h,
                s = this.saturation,
                l = this.getTrackLightness(trackNumber);
            var color, pie;
            var hStep = 360 / this.trackPieCount;
            var trackPies = [];

            for (h = 0; h < 360; h += hStep) {
                color = Color.createHSL(h, s, l);
                pie = new Pie(trackInnerRadius + 1, trackOuterRadius, h + 0.2, h + hStep - 0.2);
                pie.fill(pie.color = color);
                trackPies.push(pie);
            }
            return trackPies;
        },
        getTrackLightness: function(trackNumber) {
            var lMin = 20,
                lMax = 95;
            return lMin + trackNumber / this.trackCount * (lMax - lMin);
        },
        generateLabels: function() {
            var fontSize = this.innerRadius / 6;
            this.rgbLabel = new Text().setTextAnchor('middle').setSize(fontSize).setY(-this.innerRadius / 8);
            this.hslLabel = new Text().setTextAnchor('middle').setSize(fontSize).setY(this.innerRadius / 4);
            this.addShape(this.rgbLabel);
            this.addShape(this.hslLabel);
        },
        control: function() {
            var ring = this;
            this.on('mouseover', function(e) {
                var pie = e.targetShape;
                if (pie.getClass() == Pie) {
                    var color = pie.color;

                    pie.setScale(2).setTranslate(-pie.center.x, -pie.center.y);
                    pie.stroke('white');

                    ring.setCircleColor(color);
                    ring.bringFront(pie);
                }
                e.stopPropagation();
                e.preventDefault();
            });
            this.on('mouseout', function(e) {
                var pie = e.targetShape;
                if (pie.getClass() == Pie) {
                    pie.setScale(1).setTranslate(0, 0);
                    pie.stroke('none');
                    ring.showSelected();
                }
            });
            this.on('click', function(e) {
                var pie = e.targetShape;
                if (pie.getClass() == Pie) {
                    ring.selectedPie(pie);
                }
            });
        },
        selectedPie: function(pie) {
            if (this.selected) {
                this.selected.stroke('none');
            }
            this.selected = pie;
        },
        showSelected: function() {
            var pie = this.selected,
                pen;
            if (pie) {
                pen = new Pen().setWidth(5).setColor('white');
                pie.stroke(pen);
                this.bringFront(pie);
                this.setCircleColor(pie.color);
            }
        },
        setCircleColor: function(color) {
            this.circle.color = color;
            this.circle.fill(color);
            var labelColor = color.get('l') >= 50 ?
                color.dec('l', 50).set('s', 10) :
                color.inc('l', 50).set('s', 10);
            this.rgbLabel.setContent(color.toRGB()).fill(labelColor);
            this.hslLabel.setContent(color.toHSL()).fill(labelColor);
        },
        bringFront: function(obj) {
            obj.container.removeShape(obj).addShape(obj);
        },
        updateSaturation: function(s) {
            this.s = s;
            this.pies.eachItem(function(index, pie) {
                pie.fill(pie.color.set('s', s));
            });
            if (this.circle.color) {
                this.setCircleColor(this.circle.color.set('s', s));
            }
        },
        getPan: function() {
            this.pan = this.pan || {
                min: -this.outerRadius * 0.8,
                max: this.outerRadius * 0.8,
                length: this.outerRadius * 1.6,
                value: 0
            };
            return this.pan;
        },
        drag: function() {
            return this.callMixin({
                target: this.circle,
                move: function(e) {
                    var pan = this.getPan();
                    pan.value += e.delta.x;
                    pan.value = Math.min(pan.value, pan.max);
                    pan.value = Math.max(pan.value, pan.min);
                    this.updateSaturation(100 * (pan.value - pan.min) / pan.length);
                    this.updatePosition(pan.value);
                }
            });
        },
        updatePosition: function(x) {
            this.setTranslate(x, 0);
        }
    });
});
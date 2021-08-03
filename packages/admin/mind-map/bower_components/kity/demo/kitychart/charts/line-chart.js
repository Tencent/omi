function snapToSharp(number) {
	return (number | 0) + 0.5;
}

var MarkDot = kity.createClass("MarkDot", {
	base: kity.Group,
	constructor: function(size, color) {
		this.callBase();
		this.addShape(new kity.Circle(size || 1).fill(color));
		this.addShape(this.rect = new kity.Rect().fill('white').setOpacity(0.95).stroke(color, 2).setRadius(3));
		this.addShape(this.text = new kity.Text().fill(color).setStyle('font-family', 'Arial'));
	},
	setText: function(content) {
		this.text.setContent(content);
	},
	updatePosition: function(x, y, bx, by) {
		this.setTranslate(x, y);

		var rb = this.text.getRenderBox();
		var tx, ty, margin = 15;

		if (x + rb.width > bx) {
			// 右边越界，放在左方
			tx = -rb.width - margin;
		} else {
			// 默认放在右方
			tx = margin;
		}
		ty = -rb.height / 2;
		this.text.setTranslate(tx, ty + rb.height - 2);
		var f = snapToSharp;
		this.rect.setPosition(f(tx) - 5, f(ty) - 5);
		this.rect.setSize((rb.width | 0) + 10, (rb.height | 0) + 10);
	}
});

var KCLineChart = kity.createClass("lineChart", (function() {
	var p = new kity.Palette();
	p.add('alix-text', new kity.Color('black').inc('l', '50'));
	return {
		constructor: function(data, target) {
			this.graphMargin = {
				top: 9.5,
				right: 19.5,
				left: 20.5,
				bottom: 49.5
			};
			this._paper = new kity.Paper(target);
			this.renderData(data);
			this.interact(data);
		},
		renderData: function(d) {
			var me = this;
			var _paper = this._paper;
			var container = _paper.getContainer();
			var margin = this.graphMargin;
			this.paperWidth = container.clientWidth;
			this.paperHeight = container.clientHeight;
			_paper.setViewBox(0, 0, container.clientWidth, container.clientHeight).setWidth(container.clientWidth).setHeight(container.clientHeight);
			_paper.setWidth(container.clientWidth).setHeight(container.clientHeight);
			var drawArea = {
				top: margin.top,
				right: me.paperWidth - margin.right,
				bottom: me.paperHeight - margin.bottom,
				left: margin.left
			};
			var duraction = (drawArea.right - drawArea.left) / 18;

			var renderAxis = function() {
				var _paper = me._paper;
				var labels = d.axis.cateX;
				_paper.addShape(new kity.Path().pipe(function() {
					var dr = this.getDrawer();
					dr.moveTo(drawArea.left, drawArea.bottom).lineTo(drawArea.right, drawArea.bottom);
					for (var i = 0; i < 18; i++) {
						var vX = drawArea.left + i * duraction;
						dr.moveTo(vX, drawArea.bottom).lineTo(vX, drawArea.bottom + 3);
					}
					this.stroke("#C0D0E0", 1);
				}));
				//绘制label
				for (var j = 0; j < 17; j++) {
					var vX = 15.5 + j * duraction;
					var _label = new kity.Text(labels[j]);
					_label
						.setX(vX).setY(drawArea.bottom + 10).setSize(12).setStyle("font-family", "Arial").fill(p.get('alix-text'));
					_paper.addShape(_label);
					_label.translate(-_label.getX(), -_label.getY())
						.rotate(60)
						.translate(_label.getX(), _label.getY());
				}
			};
			//根据设定的最大值和最小值绘制折线图
			var renderPolyLine = function(d, base, top) {
				//将传入的坐标转换成绘制坐标
				var map = function(step, x, y) {
					var areaY = top - base;
					var mapped_y = drawArea.bottom - ((drawArea.bottom - drawArea.top) * (y - base) / areaY);
					var mapped_x = drawArea.left + duraction * step + duraction * x / 10;
					return [mapped_x, mapped_y];
				};
				var lineData = d.series;
				var drawingSeries = me.drawingSeries = [];
				for (var i = 0; i < lineData.length; i++) {
					var ld = lineData[i].data;
					drawingSeries.push([]);
					for (var j = 0; j < 17; j++) {
						var step = j;
						for (var k = 0; k < 10; k++) {
							var actualY = ld[j][k];
							var actualX = k;
							var drawingPos = map(step, actualX, actualY);
							drawingSeries[i].push(new kity.Point(drawingPos[0], drawingPos[1]));
						}
					}
				}
				//绘制折线
				for (var _line = 0; _line < drawingSeries.length; _line++) {
					var line = new kity.Polyline(drawingSeries[_line]);
					//(d.colors[_line] || "red"), 2).setLineJoin("round").setLinecap("round")
					line.stroke(new kity.Pen().setColor(d.colors[_line] || "red").setWidth(2).setLineJoin("round").setLineCap("round"));
					_paper.addShape(line);
				}
			};
			renderAxis();
			renderPolyLine(d, 10000, 20000);
		},
		interact: function(data) {
			var me = this;
			var margin = this.graphMargin;
			var drawArea = {
				top: margin.top,
				right: me.paperWidth - margin.right,
				bottom: me.paperHeight - margin.bottom,
				left: margin.left
			};
			var xRuler = new kity.Line(0.5, drawArea.top, 0.5, drawArea.bottom).stroke("#C0D0E0").translate(-10);
			this._paper.addShape(xRuler);

			var pointIndex = (function(origin) {
				var series = [];
				for (var i = 0; i < origin.length; i++) {
					for (var j = 0; j < origin[i].length; j++) {
						var p = origin[i][j];
						series[j] = series[j] || [p.x];
						series[j].push(p.y);
					}
				}
				return series;
			})(this.drawingSeries);

			function mid(i, j) {
				return (i + j) >> 1;
			}

			function findNearestPoint(x) {
				var i = 0,
					j = pointIndex.length - 1,
					m = mid(i, j);
				while (i != m && j != m) {
					if (x > pointIndex[m][0]) {
						i = m;
					} else {
						j = m;
					}
					m = mid(i, j);
				}
				return Math.abs(pointIndex[i][0] - x) < Math.abs(pointIndex[j][0] - x) ? pointIndex[i] : pointIndex[j];
			}

			var iDots = [];
			for (var i = 0; i < data.colors.length; i++) {
				var dot = new MarkDot(3.5, new kity.Color(data.colors[i]).dec('l', 10));
				dot.translate(-10);
				iDots.push(dot);
				this._paper.addShape(dot);
			}

			var lastUpdateTs = 0;

			function updatePosition(e) {
				if (+new Date() - lastUpdateTs < 16) {
					return;
				}
				var x = e.getPosition().x;
				var points = findNearestPoint(x);
				x = Math.floor(points[0]);
				xRuler.setTranslate(x, 0);
				for (var i = 1; i < points.length; i++) {
					iDots[i - 1].setText((points[0] | 0) + ', ' + (points[i] | 0));
					iDots[i - 1].updatePosition(points[0], points[i], me.paperWidth - 100, me.paperHeight);
				}
				e.preventDefault();
				lastUpdateTs = +new Date();
			}
			if (window.ontouchstart !== undefined) {
				this._paper.on('touchstart touchmove', updatePosition);
			} else {
				this._paper.on('mousemove', updatePosition);
				var on = true;
				var paper = this._paper.on('click', function(e) {
					if (on) {
						paper.off('mousemove', updatePosition);
					} else {
						updatePosition(e);
						paper.on('mousemove', updatePosition);
					}
					on = !on;
				});
			}
		}
	};
})());
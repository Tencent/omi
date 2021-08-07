var KCScatterDiagram = kity.createClass("scatterDiagram", (function() {
	var p = new kity.Palette();
	p.add('alix-text', new kity.Color('black').inc('l', '50'));
	return {
		constructor: function(data, target) {
			this.graphMargin = {
				top: 9.5,
				right: 19.5,
				left: 49.5,
				bottom: 39.5
			};
			this._paper = new kity.Paper(target);
			this._paper.on("click", changeview);
			this.renderData(data);
		},
		renderData: function(d) {
			var me = this;
			var _paper = this._paper;
			var container = this._paper.getContainer();
			var margin = this.graphMargin;

			this.paperWidth = container.clientWidth;
			this.paperHeight = container.clientHeight;
			_paper.setViewBox(0, 0, container.clientWidth, container.clientHeight).setWidth(container.clientWidth).setHeight(container.clientHeight);

			var drawArea = {
				top: margin.top,
				right: me.paperWidth - margin.right,
				bottom: me.paperHeight - margin.bottom,
				left: margin.left
			}
			var map = function(x, y, drawArea) {
				return [
					drawArea.left + (drawArea.right - drawArea.left - 10) * x / 2 + (drawArea.right - drawArea.left - 10) / 5,
					drawArea.bottom - ((drawArea.bottom - drawArea.top - 10) * y / 2 + (drawArea.bottom - drawArea.top - 10) / 5)];
			}
			var createLine = function(x1, y1, x2, y2, color, dasharray) {
				var Line = new kity.Line(x1, y1, x2, y2);
				//if (dasharray) Line.setDashArray(dasharray);
				Line.stroke(new kity.Pen().setColor(color).setDashArray(dasharray));
				return Line;
			};
			var renderAxis = function() {
				if (_paper.items) {
					for (var _d = 0; _d < _paper.items.length; _d++) {
						if (_paper.items[_d].name === "Axis") {
							_paper.items[_d].remove()
						}
					}
				}
				var group = new kity.Group();
				group.name = "Axis";
				group.addShape(new kity.Path().pipe(function() {
					var dr = this.getDrawer();
					dr.moveTo(drawArea.left, drawArea.bottom).lineTo(drawArea.right, drawArea.bottom);
					dr.moveTo(drawArea.left, drawArea.bottom).lineTo(drawArea.left, drawArea.top);
					for (var i = 0; i < 10; i++) {
						var curX = drawArea.left + i * ((drawArea.right - drawArea.left - 10) / 9);
						dr.moveTo(curX, drawArea.bottom).lineTo(curX, drawArea.bottom + 3);
						if (i % 2 !== 0) {
							continue;
						}
						var txtX = (new kity.Text(d.axis.cateX[i / 2])).fill(p.get('alix-text'));
						txtX.setStyle('font-family', 'Arial');
						txtX.setSize(12);
						group.addShape(txtX, "labelX" + i);
						txtX.setY(drawArea.bottom + 20);
						txtX.setX(curX - 10);
					}
					for (var j = 0; j < 5; j++) {
						var curY = drawArea.bottom - j * ((drawArea.bottom - drawArea.top - 10) / 5);
						dr.moveTo(drawArea.left, curY).lineTo(drawArea.left - 3, curY);
						var txtY = (new kity.Text(d.axis.cateY[j])).fill(p.get('alix-text'));
						txtY.setStyle('font-family', 'Arial');
						txtY.setSize(12);
						group.addShape(txtY, "labelY" + j);
						var _txtWidthY = txtY.shapeNode.clientWidth;
						txtY.setY(curY + 5);
						txtY.setX(10);
					}
					this.stroke("#C0D0E0", 1);
				}));
				group.addShape(createLine(drawArea.left, drawArea.bottom, drawArea.right, drawArea.top, "#666"));
				//var linePos = (drawArea.bottom - drawArea.top) * (0.54 + 0.4) / 2;
				var linePos = drawArea.bottom - (2.42 + 0.4) * ((drawArea.bottom - drawArea.top - 10) / 5);
				group.addShape(createLine(drawArea.left, linePos, drawArea.right, linePos, "#666", [5, 2]));
				var linePos2 = drawArea.left + (2.14 + 0.4) * ((drawArea.right - drawArea.left - 10) / 9) / 0.5;
				group.addShape(createLine(linePos2, drawArea.top, linePos2, drawArea.bottom, "#666", [5, 2]));
				_paper.addShape(group);
			};

			var createDot = function(dot) {
				var Round = new kity.Group();
				var mapXY = map(dot.x, dot.y, drawArea);
				var vX = mapXY[0];
				var vY = mapXY[1];
				//draw circle
				var circle = new kity.Circle(dot.r, 0, 0);
				circle.stroke(dot.color, 2).fill("white");
				//draw percent
				var pie = new kityPie(0, dot.r, 0, dot.percent * 360, 0, 0);
				pie.fill(dot.color);
				//var label_val = new kity.Text((dot.percent * 100).toFixed(2) + "%");
				//label_val.fill("#333").setX(0).setY(0).setSize((dot.r / 3 > 12 ? dot.r / 3 : 12)).setStyle('font-family', 'Arial');
				var label = new kity.Text(dot.label + (dot.percent * 100).toFixed(2) + "%");
				label.fill(dot.color).setSize(12).setX(dot.r).setY(0 - 12);
				Round.addShape(circle);
				Round.addShape(pie);
				//Round.addShape(label_val);
				Round.addShape(label);
				Round.setOpacity(0.9);
				Round.dot = dot;
				Round.vX = vX;
				Round.vY = vY;
				Round.translate(vX, vY);
				return Round;
			};
			var transDot = function(Dot) {
				console.log(drawArea);
				var dot = Dot.dot;
				var mapXY = map(dot.x, dot.y, drawArea);
				var vX = mapXY[0];
				var vY = mapXY[1];
				Dot.node.setAttribute("transform", null);
				Dot.translate(Dot.vX, Dot.vY);
				Dot.fxTranslate(vX - Dot.vX, vY - Dot.vY, 1000, 'easeOutExpo');
				Dot.vX = vX;
				Dot.vY = vY;
			}
			renderAxis();
			var dots = d.data.series;
			var exist = false,
				dotgroup;
			for (var _d = 0; _d < _paper.items.length; _d++) {
				if (_paper.items[_d].name === "dots") {
					exist = true;
					dotgroup = _paper.items[_d];
					break;
				}
			}
			if (!exist) {
				var dotGroup = new kity.Group();
				for (var i = 0; i < dots.length; i++) {
					dotGroup.addShape(createDot(dots[i]));
				}
				dotGroup.name = "dots";
				_paper.addShape(dotGroup);
			} else {
				dotgroup.remove();
				_paper.addShape(dotgroup);
				//调整散点的位置
				for (var _i = 0; _i < dotgroup.items.length; _i++) {
					transDot(dotgroup.items[_i]);
				}
			}
		}
	};
})());

console.log(KCScatterDiagram);
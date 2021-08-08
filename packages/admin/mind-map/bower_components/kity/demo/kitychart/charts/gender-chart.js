var KCGenderChart = kity.createClass("GenderChart", (function() {
	return {
		constructor: function(data, target) {
			this._paper = new kity.Paper(target);
			var _width = this._paper.getContainer().clientWidth;
			var _height = this._paper.getContainer().clientHeight;
			this.centerX = _width / 2;
			this.centerY = _height / 2;
			this.R = _height / 2 - 10;
			this.r = this.R * 0.7;
			this._paper.setWidth(_width).setHeight(_height);
			this.renderData(data);
		},
		renderData: function(d) {
			var genderDis = d.data;
			var me = this;
			console.log(me.centerX, me.centerY);
			//绘制箭头
			var drawArrow = function(color, rotate) {
				var _paper = me._paper;
				var group = new kity.Group();
				var polygon1 = new kity.Polygon([
					new kity.Point(30, 0),
					new kity.Point(-5, -20),
					new kity.Point(-5, 20)
				]);
				var rect2 = new kity.Rect(30, me.R * 0.2, -25, -me.R * 0.1, 0);
				polygon1.fill(color);
				rect2.fill(color);
				_paper.addShape(group);
				group.addShapes([polygon1, rect2]);
				group.translate(me.centerX + me.R + 10, me.centerY)
					.translate(-me.centerX, -me.centerY)
					.rotate(rotate)
					.translate(me.centerX, me.centerY);
			};
			//绘制十字
			var drawCross = function(color, rotate) {
				var _paper = me._paper;
				var group = new kity.Group();
				var rect1 = new kity.Rect(me.R * 0.2, 50, -me.R * 0.1, -25, me.R * 0.05);
				var rect2 = new kity.Rect(50, me.R * 0.2, -25, -me.R * 0.1, me.R * 0.05);
				rect1.fill(color);
				rect2.fill(color);
				group.addShapes([rect1, rect2]);
				group.translate(me.centerX + me.R + 10, me.centerY)
					.translate(-me.centerX, -me.centerY)
					.rotate(rotate)
					.translate(me.centerX, me.centerY);
				_paper.addShape(group);
			};
			var renderPie = function(pMale, pFemale) {
				var group = new kity.Group();
				var _paper = me._paper;
				var _colors = d.colors;
				var mPie = new kityPie(me.r, me.R, 0, pMale * 360, 0, 0);
				var fPie = new kityPie(me.r, me.R, pMale * 360, 360, 0, 0);
				console.log(pFemale * 360);
				mPie.fill(_colors[0]).stroke("white");
				fPie.fill(_colors[1]).stroke("white");
				group.addShapes([mPie, fPie]);
				var _rotate = -pMale * 180 - 45;
				_paper.addShape(group);
				group.translate(me.centerX, me.centerY).rotate(_rotate);
				drawCross(_colors[1], -225);
				drawArrow(_colors[0], -45);
			};
			//绘制male图标
			var drawMale = function(color, x, y) {
				var _paper = me._paper;
				var group = new kity.Group();
				var circle = new kity.Circle(8, 0, 0);
				var rect1 = new kity.Rect(20, 40, -10, 8, 10);
				var rect2 = new kity.Rect(10, 40, -5, 30, 5);
				circle.fill(color);
				rect1.fill(color);
				rect2.fill(color);
				group.addShapes([circle, rect1, rect2]);
				group.translate(x, y);
				_paper.addShape(group);
			};
			//绘制female图标
			var drawFemale = function(color, x, y) {
				var _paper = me._paper;
				var group = new kity.Group();
				var circle = new kity.Circle(8, 0, 0);
				var rect1 = new kity.Rect(20, 40, -10, 8, 10);
				var rect2 = new kity.Rect(10, 40, -5, 30, 5);
				var polygon = new kity.Polygon([
					(new kity.Point(0, 20)), (new kity.Point(-20, 50)), (new kity.Point(20, 50))
				]);
				circle.fill(color);
				rect1.fill(color);
				rect2.fill(color);
				polygon.fill(color);
				group.addShapes([circle, rect1, rect2, polygon]);
				group.translate(x, y);
				_paper.addShape(group);
			};

			renderPie(genderDis.male, genderDis.female);
			drawMale(d.colors[0], this.centerX + this.r * 0.4, this.centerY - 30);
			drawFemale(d.colors[1], this.centerX - this.r * 0.4, this.centerY - 30);
		}
	};
})());
var KCUbpMap = kity.createClass("KCUbpMap", (function() {
	return {
		constructor: function(data, target) {
			this._paper = new kity.Paper(target);
			var container = this._paper.getContainer();
			this._paper.setWidth(container.clientWidth).setHeight(container.clientHeight);
			var chinaMap = (new ChinaMap()).setWidth(container.clientWidth - 40);
			this._paper.addShape(chinaMap);
			this.drawData(data);
		},
		drawData: function(d) {
			var me = this;
			var radiusMap = function(val) {
				if (val > 70) {
					return 21;
				} else if (val > 50) {
					return 16;
				} else if (val > 30) {
					return 10;
				} else {
					return 5;
				}
			};
			var drawLegend = function(d) {
				var group = new kity.Group();
				me._paper.addShape(group);
			}
			var drawDots = function(d) {
				var ds = d.series;
				var _paper = me._paper;
				for (var i = 0; i < ds.length; i++) {
					var fillColor = d.colors[i] || "yellow";
					var subData = d.series[i].data;
					for (var j = 0; j < subData.length; j++) {
						console.log(radiusMap(subData[j].hot));
						var circle = new kity.Circle(radiusMap(subData[j].hot), subData[j].x, subData[j].y);
						circle.fill(fillColor).stroke(fillColor).setOpacity(0.8);
						_paper.addShape(circle);
					}
				}
			};
			drawDots(d);
		}
	};
})());
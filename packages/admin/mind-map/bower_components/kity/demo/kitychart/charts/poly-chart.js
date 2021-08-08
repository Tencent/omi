var KCPolyChart = kity.createClass('PolyChart', {
	base: kity.Paper,
	constructor: function(data, container, series) {
		this.callBase(container);
		this.setWidth(260).setHeight(200);
		this.setViewBox(-30.5, -180.5, 260, 200);
		this.xLength = 220;
		this.yLength = 140;
		this.renderLowArea(100);
		this.renderAlis(data);
		this.renderData(data.series[series].data);
	},

	renderLowArea: function(y) {
		var me = this;
		this.addShape(new kity.Path().pipe(function() {
			var d = this.getDrawer();
			d.moveTo(0, 0)
				.lineTo(me.xLength, 0)
				.lineTo(me.xLength, -y)
				.lineTo(0, -y)
				.close();
			this.fill('#f8f8f8');
		}));
	},

	renderAlis: function(data) {
		var xLength = this.xLength,
			yLength = this.yLength;
		var xSteps = this.xSteps = [];
		var alis = new kity.Group().pipe(function() {

			var xCount = data.xAlis.length + 1,
				xStep = (xLength + 40) / xCount;
			var xGrid = new kity.Path(),
				dXGrid = xGrid.getDrawer();
			for (var i = 0; i < xCount - 1; i++) {
				var xlabel = new kity.Text();
				var x = Math.floor(xStep * i + 20);
				xlabel.setContent(data.xAlis[i]);
				xlabel.setTextAnchor('middle');
				xlabel.setSize(12);
				xlabel.setX(x).setY(13);
				xlabel.fill('gray');
				this.addShape(xlabel);
				dXGrid.moveTo(x, 0).lineTo(x, -yLength);
				xSteps.push(x);
			}
			this.addShape(xGrid.stroke('#CCC'));

			var yGrid = new kity.Path(),
				dYGrid = yGrid.getDrawer();
			dYGrid.moveTo(0, 0).lineTo(xLength, 0);
			for (var j = 0; j < data.yAlis.length; j++) {
				var yLabel = new kity.Text();
				yLabel.setContent(data.yAlis[j]);
				yLabel.setTextAnchor('end');
				yLabel.setSize(12);
				yLabel.setX(-5).setY(3 - data.yAlis[j]);
				yLabel.fill('gray');
				this.addShape(yLabel);
				dYGrid.moveTo(0, -data.yAlis[j]).lineTo(xLength, -data.yAlis[j]);
			}
			this.addShape(yGrid.stroke('#CCC'));



			this.addShape(new kity.Path().pipe(function() {
				var d = this.getDrawer();
				d.moveTo(xLength, 0).lineTo(0, 0).lineTo(0, -yLength);
				this.stroke('gray');
			})).addShape(new kity.Path().pipe(function() {
				var d = this.getDrawer();
				d.moveTo(-3, -yLength).lineTo(3, -yLength).lineTo(0, -yLength - 7).close();
				this.fill('gray');
			}));

			this.addShape(new kity.Rect(80, 25, -20, -yLength - 40, 6).fill('#f0f0f0'));
			this.addShape(new kity.Text('喜好度(TGI)').setX(-12).setY(-yLength - 23).setSize(12));
		});
		this.addShape(alis);
	},

	renderData: function(data) {
		var xSteps = this.xSteps;
		var poly = new kity.Path(),
			dPoly = poly.getDrawer();
		this.addShape(poly);
		dPoly.moveTo(xSteps[0], -data[0]);
		this.addDot(xSteps[0], -data[0]);
		for (var i = 1; i < xSteps.length; i++) {
			dPoly.lineTo(xSteps[i], -data[i]);
			this.addDot(xSteps[i], -data[i]);
		}
		poly.stroke('#999');
	},

	addDot: function(x, y) {
		var circle = new kity.Circle(2, x, y).fill('lightblue');
		this.addShape(circle);
		this.nextTimeout = this.nextTimeout || 0;
		setTimeout(function() {
			circle.fxScale(3, 3, 1000, 'easeOutElastic');
		}, this.nextTimeout += 100);
	}
});
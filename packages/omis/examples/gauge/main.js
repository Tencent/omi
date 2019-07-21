import { render } from '../../src/omis'

/** polar to cartesian: https://www.mathsisfun.com/polar-cartesian-coordinates.html
*   @param {number} cx - x position of the center of the circle
*   @param {number} cy - y position of the center of the circle
*   @param {number} radius - radius of the circle
*   @param {number} angle -
*   returns an {object} representing cartesian points x and y
*/

//https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
//fillOpacity textAnchor didn't work

const Gauge = (props, {data}) => {
  const getPathValues = (value) => {
		var dx = 0;
		var dy = 0;
		var gws = 1;

		var alpha = (1 - (value - data.min) / (data.max - data.min)) * Math.PI;
		var Ro = data.width / 2 - data.width / 10;
		var Ri = Ro - data.width / 6.666666666666667;

		var Cx = data.width / 2 + dx;
		var Cy = data.height / 1.25 + dy;

		var Xo = data.width / 2 + dx + Ro * Math.cos(alpha);
		var Yo = data.height - (data.height - Cy) - Ro * Math.sin(alpha);
		var Xi = data.width / 2 + dx + Ri * Math.cos(alpha);
		var Yi = data.height - (data.height - Cy) - Ri * Math.sin(alpha);

		return { alpha, Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi };
	};

	const getPath = (value) => {
		var dx = 0;
		var dy = 0;
		var gws = 1;

		var { alpha, Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi } = getPathValues(value);

		var path = "M" + (Cx - Ri) + "," + Cy + " ";
		path += "L" + (Cx - Ro) + "," + Cy + " ";
		path += "A" + Ro + "," + Ro + " 0 0 1 " + Xo + "," + Yo + " ";
		path += "L" + Xi + "," + Yi + " ";
		path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx - Ri) + "," + Cy + " ";
		path += "Z ";

		return path;
	};


//   use text comp
  return (
    <div>
      <svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" style={{ width: data.width, height: data.height, overflow: 'hidden', position: 'relative', left: 0, top: 0, maxWidth: '100%' }}>
        <path fill={data.backgroundColor} stroke="none" d={getPath(data.max)} />
        <path fill={data.color} stroke="none" d={getPath(data.value)} />

        <text x={data.width / 2} y={data.height / 5 * 3.5} text-anchor="middle" fill={data.color} style={{ fontSize: data.valueFontSize, fontWeight: 400, fontFamily: 'Lato' }}>
          { (data.value / data.max) * 100 }%
        </text>
         <text x={data.width / 2} y={data.height / 5 * 4} text-anchor="middle" fill={data.color} style={{ fontSize: data.labelFontSize }}>
           {data.label}
        </text>
      </svg>
    </div>
  );
};

Gauge.store = _ =>{
	return {
		data: {
			min: 0,
			max: 100,
			value: 35,
			valueFontSize: 50,
			labelFontSize: 20,
			width: 400,
			height: 320,
			label: 'Sales Goals',
			color: '#3498db',
			backgroundColor: "#edebeb"
		}
	}
}

render(<Gauge />, 'body')

import { WeElement, tag } from "../../src/omi";
import Transform from './css3transform'

@tag("css3-transform")
class CSS3Transform extends WeElement {

	install() {
		this.css = this.parentNode.host.css
	}

	installed() {
		Transform(this.host);
		this.transformByProps()
	}

	afterUpdate(){
		this.transformByProps()
	
	}

	transformByProps(){
		["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ", "perspective"].forEach(item => {
			if (this.props.hasOwnProperty(item)) {
				this.host[item] = this.props[item]
			}
		})
	}


	render(props, data) {
	
		const mtx = Transform.getMatrix3D(this.props)

		let transform = "matrix3d(" + Array.prototype.slice.call(mtx).join(",") + ")"
		if (this.props.hasOwnProperty('perspective')) {
			if (typeof this.props.perspective === 'number') {
				transform = "perspective(" + this.props.perspective + "px) " + transform
			} else {
				transform = "perspective(" + this.props.perspective + ") " + transform
			}
		}

		const vd = this.props.children[0]
		if (!vd.attributes) vd.attributes = {}
		if (!vd.attributes.style) vd.attributes.style = {}

		if (typeof vd.attributes.style === 'string') {
			vd.attributes.style += "transform:" + transform + ";"
		} else {
			vd.attributes.style.transform = transform
		}

		return vd
		// return Omi.cloneElement(this.props.children[0], {
		//     style :"transform:"+transform+";"
		// });
	}
}
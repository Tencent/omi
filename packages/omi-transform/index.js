import { WeElement, define, getHost } from 'omi'
import Transform from 'css3transform'

class CSS3Transform extends WeElement {

	install() {
		this.css = getHost(this).css
	}

	installed() {
		Transform(this.host);
		this.transformByProps()
	}

	afterUpdate() {
		this.transformByProps()
	}

	transformByProps() {
		['translateX', 'translateY', 'translateZ', 'scaleX', 'scaleY', 'scaleZ', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'originX', 'originY', 'originZ', 'perspective'].forEach(item => {
			if (this.props.hasOwnProperty(item)) {
				this.host[item] = this.props[item]
			}
		})
	}

	render(props) {
		return props.children[0]
	}
}

define('css3-transform', CSS3Transform)
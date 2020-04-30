import { define, WeElement } from '../../src/omi'

define('my-component', class XX extends WeElement {
	static propTypes = {
		first: String,
		last: String
	}

	static isLightDom = true

	render(props) {
		return <div>
			Hello, World! I'm {props.first}, {props.last}
		</div>
	}
})



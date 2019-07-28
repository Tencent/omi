import { define, render, WeElement } from '../../src/omi'

define('my-component', class extends WeElement {
	static propTypes = {
		user: Object
	}

	render(props) {
		return (
			<div>name: {props.user.name}, age: {props.user.age}</div>
		)
	}
})

import { define, render, WeElement, extend } from '../../src/omi'

Omi.extend('model', {
	installed(el, path) {
		el.value = getValue(el, path)

		el.addEventListener('change', () => {

			setValue[el, path]
			el.update()
		})
	}
})

define('my-component', class extends WeElement {
	msg = 'a'

	render(props) {
		return (
			<div>
				<input v-model="msg"></input>
				<div>{this.msg}</div>
			</div>
		)
	}
})

render(<my-component />, 'body')


import { define, render, WeElement, extend, set, get } from '../../src/omi'



Omi.extend('model', (el, path, scope) => {
	el.value = get(scope, path)
	el.addEventListener('input', () => {
		set(scope, path, el.value)
		scope.update()
	})
})


define('my-component', class extends WeElement {
	msg = 'a'

	render(props) {
		return (
			<div>
				<input o-model="msg"></input>
				<div>{this.msg}</div>
			</div>
		)
	}
})

render(<my-component />, 'body')


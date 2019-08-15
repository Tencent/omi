import { define, WeElement, render, h, extend, get, set } from '../../src/omi'

extend('model', (el, path, scope) => {
	if (el.type === 'checkbox') {
		el.checked = get(scope, path)
		el.addEventListener('change', () => {
			set(scope, path, el.checked)
			scope.update()
		})
	} else {
		el.value = get(scope, path)
		el.addEventListener('input', () => {
			set(scope, path, el.value)
			scope.update()
		})
	}
})

define('my-component', class extends WeElement {
	info = {
		msg: 'two-way binding',
		checked: true
	}

	render() {
		return (
			<div>
				<input o-model="info.msg"> </input>
				<input type="checkbox" o-model="info.checked"></input>
				<div>{JSON.stringify(this.info)} </div>
			</div>
		)
	}
})

render(<my-component></my-component>, 'body')
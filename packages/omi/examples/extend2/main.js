import { define, render, WeElement, extend, set, get, bind, unbind, getHost } from '../../src/omi'



extend('model', (el, path, scope) => {
	el.value = get(scope, path)
	unbind(el, 'input')
	bind(el, 'input', () => {
		set(scope, path, el.value)
		scope.update()
	})
})


define('my-input', class extends WeElement {

	beforeRender() {
		this.props[this.props.oModel] = get(getHost(this), this.props.oModel)
	}

	inputHandle = (evt) => {
		this.value = evt.target.value
		this.fire('input')
	}

	render(props) {
		return (
			<div>
				<input value={props[props.oModel]} oninput={this.inputHandle}></input>
			</div>
		)
	}
})

define('my-component', class extends WeElement {
	data = { msg: 'a' }

	render() {
		return (
			<div>
				<my-input o-model="data.msg" ></my-input>
				<div>{this.data.msg}</div>
			</div>
		)
	}
})

render(<my-component />, 'body')



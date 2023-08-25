import { define, WeElement, h } from '../../src/omi'

define('my-counter', class extends WeElement {

	static css = `
    span {
      color: red;
    }`

	static propTypes = {
		count: Number
	}

	install() {
		this.count = this.props.count
	}

	sub = () => {
		this.count--
		this.update()
	}

	add = () => {
		this.count++
		this.update()
	}

	render() {
		return (
			<h.f>
				<button onClick={this.sub}>-</button>
				<span>{this.count}</span>
        <my-child obj={{name: '1111'}}></my-child>
			</h.f>
		)
	}
})



define('my-child', class extends WeElement {

  static propTypes = {
		obj: Object
	}

	render(props) {
		return (
			<h.f>
				<span>name:{this.props.obj.name}</span>
			</h.f>
		)
	}
})

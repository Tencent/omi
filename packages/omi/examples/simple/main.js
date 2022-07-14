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
				<button onClick={this.add}>+</button>
			</h.f>
		)
	}
})

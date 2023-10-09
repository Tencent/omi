import { define, render, WeElement } from '../../src/omi'


define('t-g', class extends WeElement {

	static isLightDOM = true

	render(props) {
		return props.list.map(props.renderItem)
	}
})


define('my-app', class extends WeElement {

	list = [{
		name: 'abc'
	}, {
		name: 'bcd'
	}, {
		name: 'EEE'
	}]

	clickHandler = () => {
		this.list.splice(0, 1)
		this.update()
	}

	removeItem = (item, index) => {
		this.list.splice(index, 1)
		this.update()
	}

	renderItem = (item, index) => {
		return <li>{index}: {item.name}<button onClick={_ => this.removeItem(item, index)}>-</button></li>
	}

	render() {
		return <div>
			<ul>
				<t-g list={this.list} renderItem={this.renderItem}></t-g>

			</ul>
			<button onClick={this.clickHandler}>+</button>
		</div>
	}
})


render(<my-app />, 'body')

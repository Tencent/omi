import { define, render, WeElement } from '../../src/omi'

class List {
	constructor(array, root) {
		this.count = 1
		this.array = array
		this.root = root
	}

	render() {
		return this.array.map(item => <li onClick={() => {
			this.count++
			this.array[0] = 'aaa'
			this.root.update()
		}}>{item} {this.count}</li>)
	}
}

define('my-app', class extends WeElement {

	list = ['d', 'e']

	install() {
		this.listA = new List(this.list.slice(0), this)
		this.listB = new List(this.list.slice(0), this)
	}
	render() {
		return <ul>
			<li onClick={
				() => {
					this.list[1] = 'f'
					this.update()
				}
			}>a</li>
			<li>b</li>
			{this.listA.render()}
			{this.listB.render()}
		</ul>
	}
})


render(<my-app />, 'body')

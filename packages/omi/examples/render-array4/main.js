import { define, render, WeElement } from '../../src/omi'

function List(array) {

	const list = () => {
		return array.map(item => <li>{item} {Math.random()}</li>)
	}
	return list()
}

define('my-app', class extends WeElement {

	list = ['d', 'e']

	render() {
		return <ul>
			<li onClick={
				()=>{
					this.list[1] = 'f'
					this.update()
				}
			}>a</li>
			<li>b</li>
			{List(this.list)}
			{List(this.list)}
		</ul>
	}
})


render(<my-app />, 'body')

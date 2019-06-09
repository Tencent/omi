import '../../src/step/index.tsx'
import { define, render, h, WeElement } from 'omi'

const state = {
	DONE: 0,
	ERROR: 1,
	DOING: 2,
	TODO: 3
}

define('my-app', class extends WeElement {

	itemsA = [
		{ name: 'Finished', description: 'This is a description.', state: state.DONE },
		{ name: 'In Progress', description: 'This is a description.', state: state.DOING },
		{ name: 'Waiting', description: 'This is a description.', state: state.TODO }
	]

	itemsB = [
		{ name: 'Finished', description: 'This is a description.', state: state.DONE },
		{ name: 'Error', description: 'This is a description.', state: state.ERROR },
		{ name: 'Waiting', description: 'This is a description.', state: state.TODO }
	]

	itemsC = [
		{ name: 'Finished', description: 'This is a description.', state: state.DONE },
		{ name: 'Finished', description: 'This is a description.', state: state.DONE },
		{ name: 'Finished', description: 'This is a description.', state: state.DONE }
	]

	render() {
		return (
			<div>
				<m-step items={this.itemsA} />
				<m-step items={this.itemsB} />
				<m-step items={this.itemsC} />

        <m-step items={this.itemsA} vertical/>
				<m-step items={this.itemsB} vertical/>
        <m-step items={this.itemsC} vertical/>

			</div>

		)
	}
})


render(<my-app />, 'body')

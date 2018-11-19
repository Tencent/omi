import { define, render, WeElement } from '../../src/omi'

define('my-node', class extends WeElement {
	render(props) {
		return (
			<li>
				<h1>{props.node.name}</h1>
				{props.node.children && props.node.children.map(child => {
					return <ul><my-node node={child}></my-node></ul>
				})}
			</li>
		)
	}
})

define('my-tree', class extends WeElement {
	render(props) {
		return (
			<ul>
				<my-node node={props.node}></my-node>
			</ul>
		)
	}
})

const node = {
	name: 'a',
	data: { x: 1 },
	children: [
		{
			name: 'a-1'
		},
		{
			name: 'a-2',
			children: [
				{
					name: 'a-2-1'
				}
			]
		}
	]
}

render(<my-tree node={node} />, 'body')

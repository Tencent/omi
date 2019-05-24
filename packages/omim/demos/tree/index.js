
import '../../src/tree/index.tsx'
import { render, h, define, WeElement } from 'omi'

define('my-app', class extends WeElement {

	node = {
		title: 'p-0',
		id: 1,
		children: [
			{
				title: 'p-1',
				id: 2,
				children: [
					{ title: 'p-2', id: 3 }
				]
			},
			{
				title: 'p-4',
				id: 4,
				children: [
					{ title: 'p-5', id: 5, selected: true },
					{ title: '项目六', id: 6 }
				]
			}
		]
	}

	toggleHandler = (evt) => {
		const node = this.getNodeById(evt.detail.id, this.node)
		node.close = !node.close
		this.update()
	}

	onNodeClick = (evt) => {
		const pre = this.getNodeById(evt.detail.pre, this.node)
		pre.selected = false
		const node = this.getNodeById(evt.detail.id, this.node)
		node.selected = true
		this.update()
	}

	getNodeById(id, node) {
		if (node.id === id) return node
		if (node.children) {
			for (let i = 0, len = node.children.length; i < len; i++) {
				let child = node.children[i]
				let target = this.getNodeById(id, child)
				if (target) {
					return target
				}
			}
		}
	}

	render() {
		return <div>
			<m-tree
				onNodeClick={this.onNodeClick}
				onToggle={this.toggleHandler}
				node={this.node}></m-tree>
		</div>

	}
})

render(<my-app />, 'body')

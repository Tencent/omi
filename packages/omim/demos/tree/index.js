
import '../../src/tree/index.tsx'
import { render, h, define, WeElement } from 'omi'

define('my-app', class extends WeElement {

	node = {
		title: 'p-0',
		id: 1,
		icon: 'account_balance_wallet',
		children: [
			{
				title: 'p-1',
				id: 2,
				icon: 'assignment_ind',
				children: [
					{ title: 'p-2', id: 3, icon: 'chrome_reader_mode', checked: true },
					{ title: 'p-2.5', id: 13, icon: 'chrome_reader_mode' }
				]
			},
			{
				title: 'p-4',
				id: 4,
				icon: 'extension',

				children: [
					{
						title: 'p-5', id: 5, selected: true, icon: 'dashboard', checked: true,
						disabled: true
					},
					{ title: '项目六', id: 6, icon: 'favorite' },
					{ title: '项目7', id: 7 }
				]
			},
			{
				title: 'p-11',
				id: 14,
				icon: 'group_work',

				children: [
					{
						title: 'p-12', id: 12, icon: 'fingerprint', checked: true
					}
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

	onCheck = (evt) => {
		const node = this.getNodeById(evt.detail.id, this.node)
		if (!node.children) {

			node.checked = evt.detail.checked
		} else {
			this.checkAll(node, evt.detail.state !== 'checked')

		}
		this.update()
	}

	checkAll(node, checked) {
		node.children && node.children.forEach(child => {
			child.checked = checked
			this.checkAll(child, checked)
		})
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
				checkbox
				onNodeClick={this.onNodeClick}
				onToggle={this.toggleHandler}
				onCheck={this.onCheck}
				node={this.node}>
			</m-tree>
		</div>

	}
})

render(<my-app />, 'body')

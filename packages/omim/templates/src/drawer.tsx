import * as css from './_drawer.css'
import { define, WeElement, h } from 'omi'
import '@omim/core/nav'

define('my-drawer', class extends WeElement {
	static css = css


	render() {
		return <div class="app">
			<div>
				<div class="title">
					<h3>Omim Templates</h3>
					<h6>powered by omi</h6>
				</div>

			</div>

			<m-nav
				css={`.m-nav{
				border:none;
			}
			.m-nav>ul{
				border-bottom: 1px solid #efefef;
			}
			.m-nav>ul:last-child{
				border-bottom: 0px solid #ccc;
			}
			`}
				onNodeClick={this.onNodeClick}
				onToggle={this.toggleHandler}
				nodes={this.nodes}>
			</m-nav>
		</div>
	}


	nodes = [{
		title: 'Dashboard',
		id: 1,
		icon: 'dashboard',
		selected: true
	},
	{
		title: 'About',
		id: 15,
		icon: 'people'
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
	}]

	toggleHandler = (evt) => {
		const node = this.getNodeById(evt.detail.id, this.nodes)
		node.close = !node.close
		this.update()
	}

	onNodeClick = (evt) => {
		const pre = this.getNodeById(evt.detail.pre, this.nodes)
		pre.selected = false
		const node = this.getNodeById(evt.detail.id, this.nodes)
		node.selected = true
		this.update()
	}



	getNodeById(id, nodes) {

		for (let i = 0, len = nodes.length; i < len; i++) {
			let child = nodes[i]
			let target = this._getNodeById(id, child)
			if (target) {
				return target
			}
		}

	}

	_getNodeById(id, node) {
		if (node.id === id) return node
		if (node.children) {
			for (let i = 0, len = node.children.length; i < len; i++) {
				let child = node.children[i]
				let target = this._getNodeById(id, child)
				if (target) {
					return target
				}
			}
		}
	}
})

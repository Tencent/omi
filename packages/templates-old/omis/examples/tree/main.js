import { render } from '../../src/omis'


const TreeNode = (props, store) => {
	return <ul>
		{createNode(store.data, '#', store)}
	</ul>
}

function createNode(node, path, store) {

	const children = node.children
	const canOpen = children && children.length
	return (
		<li>
			<h4 ondblclick={e => store.extend(path)}>
				{node.name}
				{canOpen && <span onclick={e => store.open(path)}>[{node.open ? '-' : '+'}]</span>}
			</h4>

			{canOpen && node.open && (
				<ul>
					{children.map((child, index) => {
						return createNode(child, path + '-' + index, store)
					})}
					<li class="add" onclick={e => store.addChild(path)}>
						+
					</li>
				</ul>
			)}
		</li>
	)
}



TreeNode.store = _ => {
	return {
		data: {
			name: 'my-tree',
			data: { x: 1 },
			open: true,
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
		},
		open(path) {
			const node = this.getNodeByPath(path)
			node.open = !node.open
			this.update()
		},

		getNodeByPath(path) {
			if (path === '#') {
				return this.data
			}
			const arr = path.split('-')
			arr.shift()
			let current = this.data
			let item
			while (item = arr.shift()) {
				current = current.children[item]
			}
			return current
		},

		extend(path) {
			const node = this.getNodeByPath(path)
			if(node){
				node.open = !node.open
				this.update()
			}
		},

		addChild(path){
			const node = this.getNodeByPath(path)
			node.children.push({ name: 'new child' })
			this.update()
		}


	}
}

TreeNode.css = `
h4{
	cursor:pointer;
}

.add{
	cursor:pointer;
}
`

render(<TreeNode />, 'body')

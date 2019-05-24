## Tree

许多东西都可以用树结构表示，如目录，组织层次结构，生物分类，等。树组件是表示这些事物之间层次关系的一种方式。还可以展开，折叠和选择树中的树节点。

## 使用

```html
<m-tree id='myTree' checkbox node="{
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
			id: 4,
			icon: 'group_work',
			children: [
				{
					title: 'p-12', id: 12, icon: 'fingerprint', checked: true
				}
			]
		}
	]
}">
</m-tree>
```

## Javascript

```js
var myTree = document.querySelector('#myTree')
var nodeData = myTree.props.node

myTree.addEventListener('check', (evt) => {
	const node = getNodeById(evt.detail.id, nodeData)
	if (!node.children) {
		node.checked = evt.detail.checked
	} else {
		checkAll(node, evt.detail.state !== 'checked')
	}
	myTree.setAttribute('node', nodeData)
})


myTree.addEventListener('toggle', (evt) => {
	const node = getNodeById(evt.detail.id, nodeData)
	node.close = !node.close
	myTree.setAttribute('node', nodeData)
})

myTree.addEventListener('nodeclick', (evt) => {
	const pre = getNodeById(evt.detail.pre, nodeData)
	pre.selected = false
	const node = getNodeById(evt.detail.id, nodeData)
	node.selected = true
	myTree.setAttribute('node', nodeData)
})


function checkAll(node, checked) {
	node.children && node.children.forEach(child => {
		child.checked = checked
		checkAll(child, checked)
	})
}

function getNodeById(id, node) {
	if (node.id === id) return node
	if (node.children) {
		for (let i = 0, len = node.children.length; i < len; i++) {
			let child = node.children[i]
			let target = getNodeById(id, child)
			if (target) {
				return target
			}
		}
	}
}
```

## API

### Props

```jsx
{
	node: obj,
	checkbox: boolean
}
```

### Event

```jsx
{
	toggle: function, 
	nodeclick: function,
	check: function
}
```

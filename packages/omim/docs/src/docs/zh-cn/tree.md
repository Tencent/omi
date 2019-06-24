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
			id: 14,
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

myTree.addEventListener('check', (evt) => {
	console.log(evt.detail)
})

myTree.addEventListener('toggle', (evt) => {
	console.log(evt.detail)
})

myTree.addEventListener('nodeclick', (evt) => {
	console.log(evt.detail)
})
```

获取树的数据:

```js
console.log(myTree.props.node)
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

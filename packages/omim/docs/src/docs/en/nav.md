## Nav

Menu list of Navigation.

## Usage

```html
<m-nav id='myNav' nodes="[{
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
    }
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
}]">
</m-nav>
```

## Javascript

```js
var myNav = document.querySelector('#myNav')
var nodeData = myNav.props.nodes

myNav.addEventListener('toggle', (evt) => {
  const node = getNodeById(evt.detail.id, nodeData)
  node.close = !node.close
  myNav.setAttribute('nodes', nodeData)
})

myNav.addEventListener('nodeclick', (evt) => {
  const pre = getNodeById(evt.detail.pre, nodeData)
  pre.selected = false
  const node = getNodeById(evt.detail.id, nodeData)
  node.selected = true
  myNav.setAttribute('nodes', nodeData)
})

function getNodeById(id, nodes) {
  for (let i = 0, len = nodes.length; i < len; i++) {
    let child = nodes[i]
    let target = this._getNodeById(id, child)
    if (target) {
      return target
    }
  }
}

function _getNodeById(id, node) {
  if (node.id === id) return node
  if (node.children) {
    for (let i = 0, len = node.children.length; i < len; i++) {
      let child = node.children[i]
      let target = _getNodeById(id, child)
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
	nodes: obj
}
```

### Event

```jsx
{
	toggle: function, 
	nodeclick: function
}
```

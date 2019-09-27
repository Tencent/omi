## Nav

导航的菜单列表。

## 使用

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

myNav.addEventListener('toggle', (evt) => {
  console.log(evt.detail)
})

myNav.addEventListener('nodeClick', (evt) => {
  console.log(evt.detail)
})

console.log(myNav.props.nodes)
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

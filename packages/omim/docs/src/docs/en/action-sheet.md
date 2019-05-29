## ActionSheet

ActionSheet

## 使用

```js
 MActionSheet({
    items: ['Option 1', 'Option 2'],
    onItemClick: (item) => {
      console.log(item)
    }
  })
}
```

IOS 风格:

```js
MActionSheet({
  items: ['Option 1', 'Option 2'],
  onItemClick: (item) => {
    console.log(item)
  },
  ios: true,
  cancel: '取消'
})
```

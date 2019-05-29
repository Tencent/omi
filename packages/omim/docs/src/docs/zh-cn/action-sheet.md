## ActionSheet

ActionSheet

## Usage

```js
 MActionSheet({
    items: ['Option 1', 'Option 2'],
    onItemClick: (item) => {
      console.log(item)
    }
  })
}
```

IOS Style:

```js
MActionSheet({
  items: ['Option 1', 'Option 2'],
  onItemClick: (item) => {
    console.log(item)
  },
  ios: true,
  cancel: 'Cancel Text'
})
```

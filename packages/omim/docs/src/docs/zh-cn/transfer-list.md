## Transfer List

传输列表允许用户在列表之间移动一个或多个列表项。

## 使用

```html
<script src="https://tencent.github.io/omi/packages/omi/dist/omi.dev.js"></script>
<script src="transfer-list/index.js"></script>

<m-transfer-list 
  id="myTransferList" 
  onChange={this.onChange} 
  left="[{
      text: 'Line item1'
    },
    {
      text: 'Line item2',
      checked: true
    },
    {
      text: 'Line item3'
    },
    {
      text: 'Line item4'
    }]" 
  right="[{
      text: 'Line item5'
    },
    {
      text: 'Line item6'
    },
    {
      text: 'Line item7'
    }]">
</m-transfer-list>

<script>
  document.querySelector('#myTransferList').addEventListener('change', function (evt) {
    console.log(evt.detail.left)
    console.log(evt.detail.right)
  })
</script>
```


## API

### Props

```jsx
{
  left: object[]
  right: object[]
}
```


### Event

* change
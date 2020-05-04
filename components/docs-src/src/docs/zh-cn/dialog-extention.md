## DialogExtention 基础对话框

在页面中间弹出alert、confirm、prompt

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU DialogExtention" src="https://codepen.io/omijs/embed/GRpOBmL?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/GRpOBmL'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/dialog-extention'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/dialog-extention"></script>
```

## 使用

```js
Omiu.alert({
  msg: 'Simple Message',
  title: 'Msg',
  confirmButtonText: 'OK',
  onConfirm: function () {
    console.log('ok')
  }
})

Omiu.confirm({
  msg: 'Simple Message',
  title: 'Msg',
  cancelButtonText: 'Cancel',
  confirmButtonText: 'OK',
  onCancel: function () {

  },
  onConfirm: function () {
    console.log('ok')
  }
})

Omiu.prompt({
  msg: 'Simple Message',
  title: 'Msg',
  cancelButtonText: 'Cancel',
  confirmButtonText: 'OK',
  onCancel: function () {

  },
  onConfirm: function (val) {
    console.log(val)
  }
})
```





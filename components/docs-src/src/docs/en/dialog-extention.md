## DialogExtention

Pop alert, confirm or prompt in the middle of the page

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU DialogExtention" src="https://codepen.io/omijs/embed/GRpOBmL?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/GRpOBmL'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/dialog-extention'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/dialog-extention"></script>
```

## Usage

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


## DialogExtention

Pop alert, confirm or prompt in the middle of the page

* [→ CodePen](https://codepen.io/omijs/pen/GRpOBmL)

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



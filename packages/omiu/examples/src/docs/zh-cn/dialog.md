## Dialog  

对话框。

## 使用

```js
<o-dialog
  onClose={this.closePopup}
  onConfirm={this.onConfirm}
  show={this.popupShow}
  title='My Title'
  msg='My Msg!'
  cancelText='cancel'
  confirmText='confirm'
/>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| show  | bool |   --    |           |
| title  | string |   --    |           |
| msg  | string |    --   |           |
| cancelText  | string |   --    |           |
| confirmText  | string |   --    |           |
| onClose  |function |    --   |           |
| onConfirm  | function |    --   |           |
## Snackbar 

Snackbar 在屏幕底部提供关于应用程序进程的简短消息。

## 使用

```html
<m-snackbar id="m-snackbar-a" button-text="RETRY" msg="Can't send photo. Retry in 5 seconds."></m-snackbar>
<m-snackbar id="m-snackbar-b" button-text="UNDO" msg="Your photo has been archived." leading></m-snackbar>
<m-snackbar id="m-snackbar-c" stacked msg='This item already has the label "travel". You can add a new label.' button-text="ADD A NEW LABEL"></m-snackbar>
```

## Omi 中使用

JSX:

```jsx
<m-snackbar
  onClosed={this.onClosedA}
  onButtonClick={this.onButtonClickA}
  onIconButtonClick={this.onIconButtonClickA}
  buttonText="RETRY"
  msg="Can't send photo. Retry in 5 seconds."
  show={this.aShow}
></m-snackbar>
<m-snackbar
  onClosed={this.onClosedB}
  onButtonClick={this.onButtonClickB}
  onIconButtonClick={this.onIconButtonClickB}
  buttonText="UNDO"
  msg="Your photo has been archived."
  leading show={this.bShow}
></m-snackbar>
<m-snackbar
  onClosed={this.onClosedC}
  onButtonClick={this.onButtonClickC}
  onIconButtonClick={this.onIconButtonClickC}
  stacked msg='This item already has the label "travel". You can add a new label.'
  buttonText="ADD A NEW LABEL"
  show={this.cShow}
></m-snackbar>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| show | boolean | -- | 是否显示弹窗 |
| stacked | boolean | -- | 按钮与文本分两层 |
| msg | string | -- | 提示内容 |
| buttonText | string | -- | 按钮文本 |
| leading | boolean | -- | 弹窗出现在主窗口角落 |
| onOpened | function | -- | 打开完成后触发 |
| onClosed | function | -- | 关闭完成后触发 |
| onButtonClick | function | -- | 单击按钮触发 |
| onIconButtonClick | function | -- | 单击图标按钮触发 |

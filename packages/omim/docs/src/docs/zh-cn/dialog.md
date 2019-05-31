## Dialog

对话框通知用户任务，可以包含关键信息，需要决策或涉及多个任务。

## 使用

```html
<m-dialog cancel-button="{text: 'Cancel'}" confirm-button="{text: 'Discard'}">
  <p class="m-dialog-alert-p">Discard draft?</p>
</m-dialog>
```

## Omi 中使用

JSX:

```jsx
<m-dialog cancel-button={{text: 'Cancel'}} confirm-button={{text: 'Discard'}}>
  <p style='margin:0'>Discard draft?</p>
</m-dialog>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| show | boolean | -- | 是否显示对话框 |
| scrollable | boolean | -- | 对话框内容溢出保证滚动 |
| title | string | -- | 对话框标题 |
| cancel-button | object | -- | 对话框取消按钮内容，支持所有 m-icon 属性 |
| confirm-button | object | -- | 对话框确认按钮内容，支持所有 m-icon 属性 |
| onOpening | function | -- | 对话框打开过程触发 |
| onOpened | function | -- | 对话框打开完成后触发 |
| onClosing | function | -- | 对话框关闭过程触发 |
| onClosed | function | -- | 对话框关闭完成触发 |
| onScrim | function | -- | 单击对话框周围黑色透明区域触发 |
| onCancel | function | -- | 单击对话框取消按钮触发 |
| onConfirm | function | -- | 单击对话框确认按钮触发 |

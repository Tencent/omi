## Dialog

对话框通知用户任务，可以包含关键信息，需要决策或涉及多个任务。

## 使用

```jsx
<m-dialog
  id="m-dialog-alert"
  onScrim
  onCancel
  onConfirm
  message="<p>Discard draft?</p>"
  cancel-button="{
    text: 'Cancel'
  }"
  confirm-button="{
    text: 'Discard'
  }"
></m-dialog>
```

## API

### Props

```jsx
{
  show: boolean,
  scrollable: boolean,
  title: string,
  message: string,
  cancelButton: object,
  confirmButton: object,
}
```
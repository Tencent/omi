## Dialog

Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

## Usage

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
## Dialog

Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

## Usage

```html
<m-dialog
  id="m-dialog-alert"
  onOpening
  onOpened
  onClosing
  onClosed
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

## Used in Omi

JSX:

```jsx
<m-dialog
  onOpening={this.onOpenClose}
  onOpened={this.onOpenClose}
  onClosing={this.onOpenClose}
  onClosed={this.onOpenClose}
  onScrim={this.onClose}
  onCancel={this.onClose}
  onConfirm={this.onConfirm}
  show={this.alertShow}
  message={<p>Discard draft?</p>}
  cancel-button={{
    text: 'Cancel'
  }}
  confirm-button={{
    text: 'Discard'
  }}
/>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| show | boolean | -- | Whether to display a dialog box |
| scrollable | boolean | -- | Displays upper and lower border lines when a scroll bar is present |
| title | string | -- | Dialog title |
| message | string/Vdom | -- | Dialog content |
| cancelButton | object | -- | Dialog box cancels button content, supports all m-icon attribute |
| confirmButton | object | -- | Dialog to confirm button content, supports all m-icon attribute |
| onOpening | function | -- | Dialog opening trigger |
| onOpened | function | -- | Dialog opened trigger |
| onClosing | function | -- | Dialog closing trigger |
| onClosed | function | -- | Dialog closed trigger |
| onScrim | function | -- | Click the black transparent area around the dialog box to trigger |
| onCancel | function | -- | Click the dialog cancel button to trigger |
| onConfirm | function | -- | Click the dialog confirm button to trigger |

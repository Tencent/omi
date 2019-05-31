## Dialog

Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

## Usage

```html
<m-dialog cancel-button="{text: 'Cancel'}" confirm-button="{text: 'Discard'}">
  <p class="m-dialog-alert-p">Discard draft?</p>
</m-dialog>
```

## Usage in Omi

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
| show | boolean | -- | Whether to display a dialog box |
| scrollable | boolean | -- | Dialog content overflow guarantees scrolling |
| title | string | -- | Dialog title |
| cancel-button | object | -- | Dialog box cancels button content, supports all m-icon attribute |
| confirm-button | object | -- | Dialog to confirm button content, supports all m-icon attribute |
| onOpening | function | -- | Dialog opening trigger |
| onOpened | function | -- | Dialog opened trigger |
| onClosing | function | -- | Dialog closing trigger |
| onClosed | function | -- | Dialog closed trigger |
| onScrim | function | -- | Click the black transparent area around the dialog box to trigger |
| onCancel | function | -- | Click the dialog cancel button to trigger |
| onConfirm | function | -- | Click the dialog confirm button to trigger |

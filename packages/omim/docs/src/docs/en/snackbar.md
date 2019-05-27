## Snackbar 

Snackbar provide brief messages about app processes at the bottom of the screen.

## Usage

```html
<m-snackbar id="m-snackbar-a" button-text="RETRY" msg="Can't send photo. Retry in 5 seconds."></m-snackbar>
<m-snackbar id="m-snackbar-b" button-text="UNDO" msg="Your photo has been archived." leading></m-snackbar>
<m-snackbar id="m-snackbar-c" stacked msg='This item already has the label "travel". You can add a new label.' button-text="ADD A NEW LABEL"></m-snackbar>
```

## Usage in Omi

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
| show | boolean | -- | Whether to display popovers |
| stacked | boolean | -- | Buttons and text have two layers |
| msg | string | -- | prompt content |
| buttonText | string | -- | ButtonText |
| leading | boolean | -- | The popover appears in the corner of the main window |
| onOpened | function | -- | Triggered after completion of open |
| onClosed | function | -- | Trigger after shutdown is complete |
| onButtonClick | function | -- | Click the button to trigger |
| onIconButtonClick | function | -- | Click the icon button to trigger |

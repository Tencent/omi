## ActionSheet 

Selection component in pop-up mode.

## Usage

```js
<o-action-sheet
  menus={[{
      label: 'Option 1',
      onClick: () => { }
    }, {
      label: 'Option 2',
      onClick: () => { }
  }]}
  actions={[
      {
        label: 'Cancel',
        onClick: this.hide
      }
  ]}
  show={true}
  type="ios"
  onClose={e => { }}
/>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| menus  | json array|  ||
| actions  | json array|  ||
| scale | number   |   2 | |
| show | bool| false ||
| type | string| ios | options: ios, android|
| onClose | function| -- ||

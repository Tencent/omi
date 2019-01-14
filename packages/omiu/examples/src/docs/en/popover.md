## Popover  

Popover.

## Usage

```js
<o-popover 
  show={this.popoverShow} 
  target={this.popoverTarget} 
  direction={this.direction} 
  onClose={this.onClose}>
    <div>Test content....</div>
    <div>Test content</div>
    <div>Test content Test content</div>
</o-popover>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| show  | bool |   --    |           |
| target  | dom element |   --    |     Surrounding target      |
| direction  | string |    --   |    Surrounding direction       |
| onClose  | function |   --    |           |
| children  | json array |   --    |           |
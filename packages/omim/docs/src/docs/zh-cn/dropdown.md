## Dropdown  

下拉框。

## 使用

```js
<o-dropdown selectedIndex={this.selectedIndex}
  show={this.showSelect}
  onToggle={this.onToggle}
  onSelect={this.onSelect}>
  <item value={1}>Item 1</item>
  <item value={2}>Item 2</item>
  <item value={3}>Item 3</item>
</o-dropdown>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| selectedIndex  | number|       |           |
| show  | bool|   false    |           |
| children  | json array|       |           |
| onToggle  | function|       |           |
| onSelect  | function|       |           |

## Popover  

气泡卡片。

## 使用

```js
<o-popover 
  show={this.popoverShow} 
  target={this.popoverTarget} 
  direction={this.direction} 
  onClose={this.onClose}>
    <div>测试内容....</div>
    <div>测试内容</div>
    <div>测试内容测试内容</div>
</o-popover>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| show  | bool |   --    |           |
| target  | dom element |   --    |     环绕的目标      |
| direction  | string |    --   |    环绕的方向       |
| onClose  | function |   --    |           |
| children  | json array |   --    |           |
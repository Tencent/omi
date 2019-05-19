## Menu

菜单显示临时表面选项列表。 当用户与按钮，操作或其他控件交互时，它们会出现。

## 使用

```html
<m-menu anchor id="menu" onSelected="onSelected()" list="[
  { text: 'A Menu Item' },
  { text: 'A Disabled Menu Item', disabled: true },
  { text: 'Another Menu Item' }
]">
</m-menu>
```

## Omi 中使用

JSX:

```jsx
<m-menu anchor show={this.show} onSelected={this.onSelected} list={[
  { text: 'A Menu Item' },
  { text: 'A Disabled Menu Item', disabled: true },
  { text: 'Another Menu Item' }
]}></m-menu>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| show | boolean | -- | 是否显示菜单 |
| list | object | -- | 列表内容 |
| anchor | boolean | -- | 自动确定父元素 |
| onSelected | function | -- | 选择触发 |

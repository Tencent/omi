## Menu

菜单显示临时表面选项列表。 当用户与按钮，操作或其他控件交互时，它们会出现。

## 使用

```jsx
<m-menu anchor id="menu" onSelected="onSelected()" list="[
  { text: 'A Menu Item' },
  { text: 'A Disabled Menu Item', disabled: true },
  { text: 'Another Menu Item' }
]">
</m-menu>
```

## API

### Props

```jsx
{
  show?: boolean,
  list: object,
  anchor: boolean
}
```
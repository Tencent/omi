## Select

Select提供单选项选择菜单。 它完全可访问，并且完全支持RTL。

## 使用

```jsx
<m-select menu="[
  { text: 'Google', value: 0 },
  { text: 'Omi', value: 1 },
  { text: 'Tencent', value: 2 }
]" label="Choose One Item" onchange="changeB(event)" >
</m-select>
```

## API

### Props

```jsx
{
  label: String,
  menu: Object
}
```
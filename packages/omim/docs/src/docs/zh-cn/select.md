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

## Omi 中使用

JSX:

```jsx
<m-select menu={[
  { text: 'Google', value: 0 },
  { text: 'Omi', value: 1 },
  { text: 'Tencent', value: 2 }
]} label="Choose One Item" onChange={(e) => { console.log(e.detail) }}>
</m-select>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| label | String | -- | 选框标题文本 |
| menu | Object | -- | 菜单内容 |
| onChange | function | -- | 选择触发 |

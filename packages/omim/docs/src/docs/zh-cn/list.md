## List

列表是文本或图像的连续垂直索引。

## 使用

```html
<m-list
  single-selection 
  items="[{
    text: 'Line item1',
    icon: 'wifi'
  },
  { divider: true },
  {
    text: 'Line item2',
    selected: true,
    icon: 'bluetooth'
  },
  { divider: true },
  {
    text: 'Line item3',
    icon: 'data_usage'
  }]"></m-list>
```


## API

### Props

```jsx
{
  items: object,
  singleSelection: boolean,
  checkbox: boolean,
  radio: boolean,
  onItemClick: (evt: CustomEvent) => void
}
```
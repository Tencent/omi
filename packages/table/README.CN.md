# Table 表格

展示行列数据。


## 导入

```js
import '@omiu/table'
```

或者直接 script 标签引入。

```html
<script src="https://unpkg.com/@omiu/table"></script>
```

## 使用

```html
<o-table></o-table>
```

## API

### 属性

```tsx
{
  options: TableOptions
}
```

#### TableOptions

```tsx
{
  data: {[key: string]: any}[]
  columns: Column[]
  mergeCells: mergeCell[]
}
```

### Column

```tsx
{
  align?:	'left' | 'right' | 'center'	// 设置列的对齐方式， 默认 left
  render?: ({cellData, column, rowData, tableData}) => VNode
}
```


### mergeCell

```tsx
{
  row: number
  col: number
  rowSpan: number
  colSpan: number
}
```

### Events



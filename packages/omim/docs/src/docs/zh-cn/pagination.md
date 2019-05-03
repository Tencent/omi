## Pagination 

分页组件.

## 使用

```js
<o-pagination
  total={25}
  currentPage={1}
  pageSize={5}
  onChange={this.onChange}
/>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| total         | number|    --       |          |
| currentPage  | number          |   0 |           |
| pageSize | number            | 10   |        |
| numDisplay | number| 5 ||
| numEdge | number| 3 ||
| ellipseText | string| ... ||
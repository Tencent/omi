## Layout Grid

材料设计的响应用户界面基于列变量网格布局。它在桌面上有12列，在平板电脑上有8列，在电话上有4列。

## 使用

```jsx
<m-layout-grid
  align-right
  style='text-align:center;'
  css='
    .mdc-layout-grid__cell {
      background: rgba(0,0,0,.2);
      height: 100px;
  }'>
  <cell></cell>
  <cell></cell>
  <cell></cell>
</m-layout-grid>
```

由于 layout 会把 html 字符串转换成 vdom，会有很大的开销，所以请在 jsx 中使用这个组件，html 的方式请只使用它的 css。

```js
import { css } from '@omim/core/layout-grid'
```

## API

### Props

```jsx
{
  align-right: boolean,
  align-left: boolean
}
```
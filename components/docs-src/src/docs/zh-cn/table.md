## Table 树形控件

展示树形嵌套数据结构的组件。

<iframe height="391" style="width: 100%;" scrolling="no" title="OMIU Table" src="https://codepen.io/omijs/embed/yLYMrdg?height=391&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/yLYMrdg'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

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
  dataSource: any[],
  columns: object,
  checkbox: boolean,
  border: boolean
}
```


### 事件
* changeall
* change

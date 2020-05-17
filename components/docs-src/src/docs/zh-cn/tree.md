## Tree 树形控件

展示树形嵌套数据结构的组件。

<iframe height="391" style="width: 100%;" scrolling="no" title="OMIU Tree" src="https://codepen.io/omijs/embed/yLYMrdg?height=391&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/yLYMrdg'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/tree'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/tree"></script>
```

## 使用

```html
<o-tree></o-tree>
```


## API

### 属性

```tsx
{
  data?: any[]
  padding: number
}
```

### 默认属性
```tsx
{
  padding: 10
}
```
### 事件
* node-click
* node-arrow-click
* context-menu
* action-icon-click
* fold

# Kanban 看板



<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU Counter_to_be_replace" src="https://codepen.io/omijs/embed/?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/o-kanban'
```

或者直接 script 标签引入。

```html
<script src="https://unpkg.com/@omiu/counter_to_be_replace"></script>
```

## 使用

```html
<o-kanban></o-kanban>
```

## API

### 属性

```tsx
{
  dataSource: T[];
  title?:string;
  renderItem?:renderItemType;
  onEnd:(data:T[])=>void;

  isLimited?:boolean;//是否固定高度，改为滚动 未实装
  height?:string;
  width?:string;
}
```
### dataSource

```tsx
CardType{
  id?:number;
  title?:string;
}
DataType{
  id?:number;
  title?:string;
  cards:CardType[];
}
```

### 默认属性

```tsx
{
  
}
```

### Events

- onEnd

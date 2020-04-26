## Pagination 分页

用来把大量的list数据分开多页展示

<iframe height="391" style="width: 100%;" scrolling="no" title="OMIU Pagination" src="https://codepen.io/omijs/embed/MWamyBQ?height=391&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/MWamyBQ'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/pagination'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/pagination"></script>
```

## 使用

```html
<o-pagination> </o-pagination>
```


## API

### 属性

```tsx
{
  total: number
  pageSize: number
  numDisplay: number
  currentPage: number
  numEdge: number
  linkTo: string
  prevText: string
  nextText: string
  ellipseText: string
  prevShow: boolean
  nextShow: boolean
}
```

### 默认属性
```tsx
{
  total: 0,
  pageSize: 10,
  numDisplay: 5,
  currentPage: 0,
  numEdge: 3,
  linkTo: '#',
  prevText: 'Prev',
  nextText: 'Next',
  ellipseText: '...',
  prevShow: true,
  nextShow: true
)
```
### 事件
* change

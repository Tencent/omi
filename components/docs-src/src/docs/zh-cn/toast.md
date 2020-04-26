## Toast 弹出式提示

居中显示的弹出式提示

<iframe height="391" style="width: 100%;" scrolling="no" title="OMIU Toast" src="https://codepen.io/omijs/embed/YzyVwOO?height=391&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/YzyVwOO'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/toast'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/toast"></script>
```

## 使用

```html
<o-toast> </o-toast>
```


## API

### 属性

```tsx
{
  label?: string
  loading?: boolean
  done?: boolean
  duration: number
  autoClose: boolean
  show: boolean
}
```

### 默认属性
```tsx
{
  duration: 2000,
  autoClose: false,
  show: true
)
```

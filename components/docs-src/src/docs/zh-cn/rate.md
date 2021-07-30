## Rate 评分

评分

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU Rate" src="https://codepen.io/omijs/embed/LYppwYG?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/LYppwYG'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/rate'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/rate"></script>
```

## 使用

```html
<o-rate></o-rate>
```


## API

### 属性

```tsx
{
  value?: Number
  max?: Number
  precision?: Number
  readonly?: Boolean
  disabled?: Boolean
  icon?: String,
  color?: String,
  path?: String
}
```

### 默认属性
```tsx
{
  size: 10,
  value: 0,
  max: 5,
  precision: 1,
  // readonly: false,
  // disabled: false,
  color: '#f7e620',
  path: 'M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'
}
```

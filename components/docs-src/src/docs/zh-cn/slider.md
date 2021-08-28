# Slider 滑块

一般用于拖动页面内容

<iframe height="undefined" style="width: 100%;" scrolling="no" title="OMIU Slider" src="https://codepen.io/omijs/embed/undefined?height=undefined&theme-id=default&default-tab=undefined" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/undefined'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/slider'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/slider"></script>
```

## 使用

```html
<o-slider></o-slider>
```


## API

### 属性

```tsx
{
  min?: number
  max?: number
  step?: number
  value?: number
  second_value?: number
  size: 'small' | 'normal' | 'large'
  range: 'single' | 'double'
  orient?: 'vertical' | 'horizontal'
  shape: 'square' | 'round'
  tooltip?: boolean
  disabled?: boolean
  reversed?: boolean
}
```

### 默认属性
```tsx
{
  //default a single round range slider
  min: undefined,
  max: undefined,
  step: 1,
  value: undefined,
  second_value: undefined,
  range: 'single',
  size: 'normal',
  orient: 'horizontal',
  shape: 'round',
  tooltip: false,
  disabled: false,
  reversed: false,
}
```
### 事件
* input
* change

## Input 输入框

一般用于输入信息提交给服务器。

<iframe height="391" style="width: 100%;" scrolling="no" title="OMIU Input" src="https://codepen.io/omijs/embed/yLYMGqa?height=391&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/yLYMGqa'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/input'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/input"></script>
```

## 使用

```html
<o-input></o-input>
```


## API

### 属性

```tsx
{
  value?: string
  disabled?: boolean
  type?: string
  placeholder?: string
  clearable?: boolean
  size?: 'medium' | 'small' | 'mini'
  suffixIcon?: string
  prefixIcon?: string
  maxLength?: number
  autoComplete?: string
  block?: boolean
}
```

### 默认属性
```tsx
{
  type: 'text',
  autosize: false,
  rows: 2,
  trim: false,
  autoComplete: 'off',
  block: false
}
```
### 事件
* blur
* focus
* change
* input

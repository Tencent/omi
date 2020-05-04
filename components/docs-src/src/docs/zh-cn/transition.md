## Transition 过渡动画

定义进入离开的过渡动画

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU Transition" src="https://codepen.io/omijs/embed/JjYyezQ?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/JjYyezQ'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/transition'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/transition"></script>
```

## 使用

```html
<o-transition></o-transition>
```


## API

### 属性

```tsx
{
  name: string
  leavingTime?: number
  autoRemove?: boolean
  appear?: boolean
  delay?: number
}
```

### 默认属性
```tsx
{
  name: 'o',
  delay: 0
}
```
### 事件
* before-enter
* after-enter
* enter
* before-leave
* after-leave
* leave

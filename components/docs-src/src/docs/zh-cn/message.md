## Message 消息

顶部消息提醒

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU Message" src="https://codepen.io/omijs/embed/JjYyezQ?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/JjYyezQ'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/message'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/message"></script>
```

## 使用

```html
<o-message></o-message>
```


## API

### 属性

```tsx
{
  type?: 'success' | 'warning' | 'info' | 'error'
  message: string
  showClose: boolean
  center: boolean
  duration: number
}
```

### 默认属性
```tsx
{
  duration: 3000
}
```

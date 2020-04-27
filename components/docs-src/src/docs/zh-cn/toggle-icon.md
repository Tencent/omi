## ToggleIcon 可切换图标

拥有两种状态切换的icon

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU ToggleIcon" src="https://codepen.io/omijs/embed/ZEbKwXX?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/ZEbKwXX'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/toggle-icon'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/toggle-icon"></script>
```

## 使用

```html
<o-toggle-icon> </o-toggle-icon>
```


## API

### 属性

```tsx
{
  isOn?: boolean
  icons: object
  imgs: object
  color: string
  disabled: boolean
}
```

### 默认属性
```tsx
{
  isOn: false,
  icons: []
)
```
### 事件
* change

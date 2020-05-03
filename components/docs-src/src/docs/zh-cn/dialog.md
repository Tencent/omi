## Dialog 对话框

在页面中间弹出任何你想弹出的东西

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU Dialog" src="https://codepen.io/omijs/embed/dyYZvRP?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/dyYZvRP'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/dialog'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/dialog"></script>
```

## 使用

```html
<o-dialog></o-dialog>
```


## API

### 属性

```tsx
{
  visible: boolean
  title: String
  width: String
}
```

### 默认属性
```tsx
{
  visible: false,
  width: '50%'
}
```
### 事件
* open
* mask-click
* close

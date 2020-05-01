## ActionSheet 弹出式菜单

移动端弹出式选项列表

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU ActionSheet" src="https://codepen.io/omijs/embed/wvKdoNJ?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/wvKdoNJ'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/action-sheet'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/action-sheet"></script>
```

## 使用

```html
<o-action-sheet></o-action-sheet>
```


## API

### 属性

```tsx
{
  type: string,
  menus: any[],
  actions: any[],
  show: boolean
}
```

### 默认属性
```tsx
{
  type: '',
  menus: [],
  actions: [],
  show: false
}
```
### 事件
* item-click
* close

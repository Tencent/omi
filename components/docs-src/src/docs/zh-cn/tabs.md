## Tabs 选项卡

用于同一个区域切换多个显示面板，充分利用空间。

<iframe height="572" style="width: 100%;" scrolling="no" title="OMIU Tabs" src="https://codepen.io/omijs/embed/XWmjyXK?height=572&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/XWmjyXK'>OMIU Tabs</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/tabs'
```

或者直接 script 标签引入。

```html
<script src="https://unpkg.com/@omiu/tabs"></script>
```

## 使用

```html
<o-tabs
  tabs="[{label:'用户管理'},{label:'系统设置'},{label:'权限管理中心'}]"
  active-index="0"
>
</o-tabs>
```

## API

### 属性

```tsx
{
  tabs?: any[];
  activeIndex: number;
  type?: 'card' | 'border-card';
  position?: 'left' | 'right' | 'top' | 'bottom';
  closable?: boolean;
  addable?: boolean;
}
```

### 属性默认值

```tsx
{
  position: 'top',
  closable: false,
  addable: false
}
```

### 事件

- change
- remove
- add-icon-click

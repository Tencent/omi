## HamburgerMenu 汉堡包菜单 

用于切换打开和关闭侧边面板的菜单按钮。

<iframe height="318" style="width: 100%;" scrolling="no" title="OMIU Hamburger Menu" src="https://codepen.io/omijs/embed/MWapaJd?height=318&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/MWapaJd'>OMIU Hamburger Menu</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/hamburger-menu'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/hamburger-menu"></script>
```

## 使用

```html
<o-hamburger-menu></o-hamburger-menu>
```


## API

### 属性

```tsx
{
  active?: boolean;
  ariaLabel?: string;
  color?: string;
}
```

## 属性默认值

```tsx
{
  active: false,
  ariaLabel: '',
  color: 'black'
}
```

### 事件

* change

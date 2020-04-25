## Button 按钮 

点击或触摸触发一个操作的元素。响应用户点击操作，触发封装的逻辑。

<iframe height="350" style="width: 100%;" scrolling="no" title="OMIU Button" src="https://codepen.io/omijs/embed/LYppwYG?height=350&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/LYppwYG'>OMIU Button</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/button'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/button"></script>
```

## 使用

```html
<o-button type="primary">Primary Button</o-button>
```


## API

### 属性

```jsx
{
  size?: 'medium' | 'small' | 'mini';
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: string;
  autofocus?: boolean;
  nativeType?: 'button' | 'submit' | 'reset';
  block?: boolean;
}
```

### 属性默认值

```jsx
{
  plain: false,
  round: false,
  circle: false,
  loading: false,
  disabled: false,
  autofocus: false,
  nativeType: 'button',
  block: false
}
```

## Link 文字链接 

用于跳转到新的页面。

<iframe height="372" style="width: 100%;" scrolling="no" title="OMIU Link" src="https://codepen.io/omijs/embed/KKdNBaO?height=372&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/KKdNBaO'>OMIU Link</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/link'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/link"></script>
```

## 使用

```html
<o-link 
  target="_blank" 
  href="https://tencent.github.io/omi/">
  Default
</o-link>
```


## API

### 属性

```tsx
{
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
  disabled?: boolean;
  underline?: boolean;
  href?: string;
  target: string;
}
```

### 属性默认值

```tsx
{
  underline: true,
  disabled: false
}
```

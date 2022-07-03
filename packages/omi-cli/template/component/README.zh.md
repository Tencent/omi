# Counter_to_be_replace 计数器

计数器描述，待替换。

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU Counter_to_be_replace" src="https://codepen.io/omijs/embed/?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/counter_to_be_replace'
```

或者直接 script 标签引入。

```html
<script src="https://unpkg.com/@omiu/counter_to_be_replace"></script>
```

## 使用

```html
<o-counter_to_be_replace></o-counter_to_be_replace>
```

## API

### 属性

```tsx
{
  count?: number
  onCountChanged?: (evt: CustomEvent) => void
}
```

### 默认属性

```tsx
{
  count: 1
}
```

### Events

- count-changed

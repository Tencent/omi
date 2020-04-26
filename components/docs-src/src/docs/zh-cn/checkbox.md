## Checkbox 复选框 

用于选择多个选项。

<iframe height="391" style="width: 100%;" scrolling="no" title="OMIU Checkbox" src="https://codepen.io/omijs/embed/MWapwNZ?height=391&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/MWapwNZ'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/checkbox'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/checkbox"></script>
```

## 使用

```html
<o-checkbox label='Label'> </o-checkbox>
```


## API

### 属性

```tsx
{
  disabled: boolean;
  checked: boolean;
  value: string;
  label: string;
  indeterminate: boolean;
}
```

### 事件

* change

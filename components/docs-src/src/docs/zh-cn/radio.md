
## Radio 单选框 

用于在多个选项中选择一个

<iframe height="315" style="width: 100%;" scrolling="no" title="OMIU Radio" src="https://codepen.io/omijs/embed/GRpjapr?height=315&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/GRpjapr'>OMIU Radio</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/radio'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/radio"></script>
```

## 使用

```html
<o-radio name="sex" value="0">男</o-radio>
<o-radio name="sex" value="1">女</o-radio>
<script>
  document.querySelectorAll("o-radio[name='sex']").forEach(function(radio){
    radio.addEventListener('change', function(evt){
      console.log(evt.detail)
    })
  })
</script>
```


## API

### 属性

```tsx
{
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  value: string;
  name?: string;
}
```

## 事件

* change

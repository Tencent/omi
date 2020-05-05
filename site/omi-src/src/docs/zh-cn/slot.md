## Slot 插槽

这里以 Omiu 里的 button 为例子来说明 slot。

```html
<o-button>我是按钮文本</o-button>
```

来看源码:

```jsx {19-19}
@tag('o-button')
export default class Button extends WeElement {
  ...
  ...
  ...
  
  render(props) {

    return <button disabled={props.disabled} {...extractClass(props, 'o-button', {
      ['o-button-' + props.type]: props.type,
      ['o-button-' + props.size]: props.size,
      'is-plain': props.plain,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-disabled': props.disabled,
      'is-block': props.block
    })}>
      {props.text}
      <slot></slot>
    </button>
  }
}
```

那么为什么有了插槽还需要 `props.text`? 这是由于如果在使用自定义标签之后再引入相关的 js，插槽内的内容会直接显示在页面当中，带来不好的用户体验，所以如果你不能提前引入自定义组件的 js，你可以使用下面的方式达到同样的效果且避免的以上问题：


```html
<o-button text="我是按钮文本"></o-button>
```

### 具名插槽

具名插槽可以指定插入的位置：

```html
<o-el>
  <span slot="abc"></span>
  <span slot="def"></span>
</o-el>
```

对应的组件定义:


```jsx {6-6,8-8}
@tag('o-el')
export default class Button extends WeElement {
  
  render(props) {
    return <div>
      <slot name="abc"></slot>
      <div>Some Info</div>
      <slot name="def"></slot>
    </div>
  }
}
```

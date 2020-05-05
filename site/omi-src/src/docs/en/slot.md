## Slot 

Here we take the button in omiu as an example to illustrate the slot.

```html
<o-button>I'm button text</o-button>
```

Look at the source code:

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

Then why support `props.text`? This is because if you import the relevant JS after using the custom tag, the content in the slot will be directly displayed in the page, bringing bad user experience. Therefore, if you cannot import the JS of the custom component in advance, you can use the following methods to achieve the same effect and avoid the above problems:


```html
<o-button text="I'm button text"></o-button>
```

### Named Slot

A named slot can specify where to insert.

```html
<o-el>
  <span slot="abc"></span>
  <span slot="def"></span>
</o-el>
```

Component definition:


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

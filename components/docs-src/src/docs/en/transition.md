## Transition

Define transition animation for entering and leaving

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU Transition" src="https://codepen.io/omijs/embed/JjYyezQ?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/JjYyezQ'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/transition'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/transition"></script>
```

## Usage

```html
<o-transition></o-transition>
```

## API

### Props

```tsx
{
  name: string
  leavingTime?: number
  autoRemove?: boolean
  appear?: boolean
  delay?: number
}
```

### defaultProps

```tsx
{
  name: 'o',
  delay: 0
}
```
### Events

* before-enter
* after-enter
* enter
* before-leave
* after-leave
* leave

# Button

Click or touch it to trigger an operation. The encapsulated logic is triggered in response to user clicks.

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU Button" src="https://codepen.io/omijs/embed/LYppwYG?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/LYppwYG'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/button'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/button"></script>
```

## Usage

```html
<o-button></o-button>
```

## API

### Props

```tsx
{
  size?: 'medium' | 'small' | 'mini',
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
  plain?: boolean,
  round?: boolean,
  circle?: boolean,
  loading?: boolean,
  disabled?: boolean,
  icon?: string,
  autofocus?: boolean,
  nativeType?: 'button' | 'submit' | 'reset',
  block?: boolean
  text?: string
}
```

### Default Props

```tsx
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

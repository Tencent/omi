## Toast

Pop up prompt box.

<iframe height="391" style="width: 100%;" scrolling="no" title="OMIU Toast" src="https://codepen.io/omijs/embed/YzyVwOO?height=391&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/YzyVwOO'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/toast'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/toast"></script>
```

## Usage

```html
<o-toast></o-toast>
```

## API

### Props

```tsx
{
  label?: string
  loading?: boolean
  done?: boolean
  duration: number
  autoClose: boolean
  show: boolean
}
```

### defaultProps

```tsx
{
  duration: 2000,
  autoClose: false,
  show: true
)
```

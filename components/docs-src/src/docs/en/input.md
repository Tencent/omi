## Input

Generally used to input information and submit it to the server.

<iframe height="391" style="width: 100%;" scrolling="no" title="OMIU Input" src="https://codepen.io/omijs/embed/yLYMGqa?height=391&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/yLYMGqa'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/input'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/input"></script>
```

## Usage

```html
<o-input></o-input>
```

## API

### Props

```tsx
{
  value?: string
  disabled?: boolean
  type?: string
  placeholder?: string
  clearable?: boolean
  size?: 'medium' | 'small' | 'mini'
  suffixIcon?: string
  prefixIcon?: string
  maxLength?: number
  autoComplete?: string
  block?: boolean
}
```

### defaultProps

```tsx
{
  type: 'text',
  autosize: false,
  rows: 2,
  trim: false,
  autoComplete: 'off',
  block: false
}
```
### Events

* blur
* focus
* change
* input

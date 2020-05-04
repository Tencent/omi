## Button

Button

* [→ CodePen](https://codepen.io/omijs/pen/LYppwYG)

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

### 默认属性

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

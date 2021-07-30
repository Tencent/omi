## Rate

Rate

* [→ CodePen](https://codepen.io/omijs/pen/LYppwYG)

## Import

```js
import '@omiu/rate'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/rate"></script>
```

## Usage

```html
<o-rate></o-rate>
```

## API

### Props

```tsx
{
  value?: Number
  max?: Number
  precision?: Number
  readonly?: Boolean
  disabled?: Boolean
  icon?: String,
  color?: String,
  path?: String
}
```

### defaultProps

```tsx
{
  size: 10,
  value: 0,
  max: 5,
  precision: 1,
  // readonly: false,
  // disabled: false,
  color: '#f7e620',
  path: 'M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'
}
```

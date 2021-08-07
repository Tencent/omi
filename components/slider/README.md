## Slider

Slider

* [→ CodePen](https://codepen.io/omijs/pen/undefined)

## Import

```js
import '@omiu/slider'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/slider"></script>
```

## Usage

```html
<o-slider></o-slider>
```

## API

### Props

```tsx
{
  min?: number
  max?: number
  step?: number
  value?: number
  second_value?: number
  range: 'single' | 'double'
  orient?: 'vertical' | 'horizontal'
  shape: 'square' | 'round'
  tooltip?: boolean
  disabled?: boolean
}
```

### defaultProps

```tsx
{
  //default a single round range slider
  min: undefined,
  max: undefined,
  step: 1,
  value: undefined,
  second_value: undefined,
  range: 'single',
  orient: 'horizontal',
  shape: 'round',
  tooltip: false,
  disabled: false,
}
```
### Events

* input

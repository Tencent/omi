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
  double_range?: boolean
  vertical?: boolean
  round: boolean
  disabled?: boolean
}
```

### defaultProps

```tsx
{
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  //default a single square range slider
  double_range: false,
  vertical: false,
  round: false,
  disabled: false,
}
```
### Events

* change

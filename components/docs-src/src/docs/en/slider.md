## Slider

Used for scrolling through page content

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
  orient?: 'vetical' | 'horizontal'
  shape: 'square' | 'round'
  disabled?: boolean
}
```

### defaultProps

```tsx
{
  //default a single square range slider
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  second_value: 100,
  range: 'single',
  orient: 'horizontal',
  shape: 'square',
  disabled: false,
}
```

### Events

- change

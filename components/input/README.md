## Input

Generally used to input information and submit it to the server.

* [→ CodePen](https://codepen.io/omijs/pen/yLYMGqa)

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

### 默认属性

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

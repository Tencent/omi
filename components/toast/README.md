## Toast

Pop up prompt box.

* [→ CodePen](https://codepen.io/omijs/pen/YzyVwOO)

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

### 默认属性

```tsx
{
  duration: 2000,
  autoClose: false,
  show: true
)
```

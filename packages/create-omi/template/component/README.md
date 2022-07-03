# Counter_to_be_replace

Description for component.

- [→ CodePen](https://codepen.io/omijs/pen/)

## Import

```js
import '@omiu/counter_to_be_replace'
```

Or use script tag to ref it.

```html
<script src="https://unpkg.com/@omiu/counter_to_be_replace"></script>
```

## Usage

```html
<o-counter_to_be_replace></o-counter_to_be_replace>
```

## API

### Props

```tsx
{
  count?: number
  onCountChanged?: (evt: CustomEvent) => void
}
```

### Default Props

```tsx
{
  count: 1
}
```

### Events

- count-changed

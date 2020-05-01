## Message

Top message alert

* [→ CodePen](https://codepen.io/omijs/pen/JjYyezQ)

## Import

```js
import '@omiu/message'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/message"></script>
```

## Usage

```html
<o-message></o-message>
```

## API

### Props

```tsx
{
  type?: 'success' | 'warning' | 'info' | 'error'
  message: string
  showClose: boolean
  center: boolean
  duration: number
}
```

### 默认属性

```tsx
{
  duration: 3000
}
```

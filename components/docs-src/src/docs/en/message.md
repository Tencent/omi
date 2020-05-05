## Message

Top message alert

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU Message" src="https://codepen.io/omijs/embed/JjYyezQ?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/JjYyezQ'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

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

### defaultProps

```tsx
{
  duration: 3000
}
```

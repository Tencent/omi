## ToggleIcon

Icon with two state switches

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU ToggleIcon" src="https://codepen.io/omijs/embed/ZEbKwXX?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/ZEbKwXX'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/toggle-icon'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/toggle-icon"></script>
```

## Usage

```html
<o-toggle-icon></o-toggle-icon>
```

## API

### Props

```tsx
{
  isOn?: boolean
  icons: object
  imgs: object
  color: string
  disabled: boolean
}
```

### defaultProps

```tsx
{
  isOn: false,
  icons: []
)
```
### Events

* change

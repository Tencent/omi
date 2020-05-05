## Dialog

Pop anything you want in the middle of the page

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU Dialog" src="https://codepen.io/omijs/embed/dyYZvRP?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/dyYZvRP'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/dialog'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/dialog"></script>
```

## Usage

```html
<o-dialog></o-dialog>
```

## API

### Props

```tsx
{
  visible: boolean
  title: String
  width: String
}
```

### defaultProps

```tsx
{
  visible: false,
  width: '50%'
}
```
### Events

* open
* mask-click
* close

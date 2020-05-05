## ActionSheet

Mobile pop-up options list

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU ActionSheet" src="https://codepen.io/omijs/embed/wvKdoNJ?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/wvKdoNJ'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/action-sheet'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/action-sheet"></script>
```

## Usage

```html
<o-action-sheet></o-action-sheet>
```

## API

### Props

```tsx
{
  type: string,
  menus: any[],
  actions: any[],
  show: boolean
}
```

### defaultProps

```tsx
{
  type: '',
  menus: [],
  actions: [],
  show: false
}
```
### Events

* item-click
* close

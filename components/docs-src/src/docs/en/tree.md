## Tree

Components that show tree nested data structures.

<iframe height="391" style="width: 100%;" scrolling="no" title="OMIU Tree" src="https://codepen.io/omijs/embed/yLYMrdg?height=391&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/yLYMrdg'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/tree'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/tree"></script>
```

## Usage

```html
<o-tree></o-tree>
```

## API

### Props

```tsx
{
  data?: any[]
  padding: number
}
```

### defaultProps

```tsx
{
  padding: 10
}
```
### Events

* node-click
* node-arrow-click
* context-menu
* action-icon-click
* fold

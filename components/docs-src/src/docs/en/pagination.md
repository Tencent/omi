## Pagination

Used to display a large number of list data in multiple pages.

<iframe height="391" style="width: 100%;" scrolling="no" title="OMIU Pagination" src="https://codepen.io/omijs/embed/MWamyBQ?height=391&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/MWamyBQ'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/pagination'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/pagination"></script>
```

## Usage

```html
<o-pagination></o-pagination>
```

## API

### Props

```tsx
{
  total: number
  pageSize: number
  numDisplay: number
  currentPage: number
  numEdge: number
  linkTo: string
  prevText: string
  nextText: string
  ellipseText: string
  prevShow: boolean
  nextShow: boolean
}
```

### defaultProps

```tsx
{
  total: 0,
  pageSize: 10,
  numDisplay: 5,
  currentPage: 0,
  numEdge: 3,
  linkTo: '#',
  prevText: 'Prev',
  nextText: 'Next',
  ellipseText: '...',
  prevShow: true,
  nextShow: true
)
```
### Events

* change

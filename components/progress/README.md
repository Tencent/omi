## Pagination

Used to display a large number of list data in multiple pages.

* [→ CodePen](https://codepen.io/omijs/pen/MWamyBQ)

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

### 默认属性

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

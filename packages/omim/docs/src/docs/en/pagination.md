## Pagination

Pagination.

## Usage

```html
<m-pagination total="125" current-page="1" page-size="5" id="myPagination">
</m-pagination>

<script>
  var pagination = document.querySelector('#myPagination')
  pagination.addEventListener('change', function (evt) {
    console.log(evt.detail)
  })
</script>
```

## Usage in Omi

```jsx
<m-pagination
  total={125}
  currentPage={1}
  pageSize={5}
  onChange={this.onChange}
/>
```

## API

### Props

```jsx
{
	total: number,
	pageSize: number,
	numDisplay: number,
	currentPage: number,
	numEdge: number,
	linkTo: string,
	prevText: string,
	nextText: string,
	ellipseText: string,
	prevShow: boolean,
	nextShow: boolean
}
```

### Default Props

```jsx
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
}
```

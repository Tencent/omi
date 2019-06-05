## Popover

Popover。

## 使用

```html
<div style="position:relative;left:100px;top:100px;">
  <m-button id='myBtn'>top-left</m-button>
</div>
<m-popover id="myPopover" target="#myBtn">
  <div>Test Content</div>
  <div>Test Content</div>
  <div>Test Content..</div>
</m-popover>

<script>
  var myPopover = document.querySelector('#myPopover')
  var myBtn = document.querySelector('#myBtn')
  myBtn.addEventListener('click', function () {
    myPopover.pureSetAttribute('direction', 'top-left')
    myPopover.setAttribute('show', '')
  })
</script>
```

## API

### Props

```jsx
{
  show: boolean;
  x: number,
  y: number,
  direction: string,
  target: string | HTMLElement 
}
```

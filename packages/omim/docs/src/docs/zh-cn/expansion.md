## Expansion

展开和收缩。

## Usage

```html
<m-button id="myBtn">Toggle</m-button>
<m-expansion expand id="myExpansion">
  <m-list id="myList" single-selection css="ul{
      max-width:400px;
      border: 1px solid rgba(0,0,0,.1);
    }" items="[{
        text: 'Line item1',
        icon: 'wifi'
      },
      { divider: true },
      {
        text: 'Line item2',
        selected: true,
        icon: 'bluetooth'
      },
      { divider: true },
      {
        text: 'Line item3',
        icon: 'data_usage'
      }]"></m-list>
</m-expansion>

<script>
  var tag = true
  var myExp = document.querySelector('#myExpansion')
  document.querySelector('#myBtn').addEventListener('click', function () {
    if (tag) {
      myExp.removeAttribute('expand')
    } else {
      myExp.setAttribute('expand', 1)
    }
    tag = !tag
  })
</script>
```


## API

### Props

```jsx
{
  expand?: boolean
}
```
## CSS

This is the css of props, not `static css`, which provides the ability to modify scoped style within shadow dom. 

## Example

```jsx
define('my-element', class extends WeElement {
  static css = `h1{
    color: red;
  }`

  render() {
    return (
      <div>
        <h1>Look at my color!<h1>
      </div>
    )
  }
})
```

The h1 of `my-element' above is red. Is there any way to modify it?

```jsx
define('my-app', class extends WeElement {

  myCSS = `
  h1{
    color: green;
  }`

  onClick = () => {
    //Dynamic modification
    this.myCSS = `
    h1{
      color: blue;
    }`
    this.update()
  }

  render() {
    return (
      <div onClick={this.onClick}>
        <my-element css={this.myCSS} />
      </div>
    )
  }
})
```

It can also be guaranteed that it can be modified in the following ways:

```css
color: blue!important;
```

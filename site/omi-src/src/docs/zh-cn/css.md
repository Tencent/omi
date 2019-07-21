## CSS

这里说的是 props 的 css，而不是 `static css`，它提供了修改 shadow dom 内部 scoped style 的能力。

### 举个例子

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

上面的 `my-element` 的 h1 标签颜色是红色。有什么办法修改吗？

```jsx
define('my-app', class extends WeElement {

  myCSS = `
  h1{
    color: green;
  }`

  onClick = () => {
    //动态修改
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

而且还可以通过下面的方式保证一定能够修改：

```css
color: blue!important;
```

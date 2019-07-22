## CSS

这里说的是 props 的 css，而不是 `YourComponent.css`，它提供了修改动态修改 scoped style 的能力。

### 举个例子

```jsx
const YourComponent = _ => (
  <div>
    <h1>Look at my color!<h1>
  </div>
)

YourComponent.css = `h1 {
  color: red;
}`
```

上面的 h1 标签颜色是红色。有什么办法修改吗？

```jsx
<YourComponent 
  css={`
  h1{
    color: blue !important;
  }`} />  
```

通过 props 动态修改，非常简单。
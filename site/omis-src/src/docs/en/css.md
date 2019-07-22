## CSS

This is the css of props, not `YourComponent.css`, which provides the ability to modify scoped style dynamic. 

## Example

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

The h1 above is red. Is there any way to modify it?

```jsx
<YourComponent 
  css={`
  h1{
    color: blue !important;
  }`} />  
```

Super easy.

## Provide / Inject

跨域多个层级向下传递 props 有时非常麻烦，这个时候可以使用 provide 和 Inject 跨组件层级传递。

```jsx
define('parent-el', class extends WeElement {

  provide = {
    name: 'omi'
  }

  render() {
    return <child-el></child-el>
  }
})

//不仅仅是子，在任意子孙曾孙节点都可以使用 inject 来消费祖先节点的注入
define('child-el', class extends WeElement {

  inject = ['name']

  render() {
    //output: <div>omi</div>
    return <div>{this.injection.name}</div>
  }
})
```

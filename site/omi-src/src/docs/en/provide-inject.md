
## Provide / Inject

It is sometimes very troublesome to pass props down across multiple levels. At this time, you can use provide and inject to pass props across component levels.

```jsx
define('parent-el', class extends WeElement {

  provide = {
    name: 'omi'
  }

  render() {
    return <child-el></child-el>
  }
})

//Not just children, can be injected into all descendant elements
define('child-el', class extends WeElement {

  inject = ['name']

  render() {
    //output: <div>omi</div>
    return <div>{this.injection.name}</div>
  }
})
```

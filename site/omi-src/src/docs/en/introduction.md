## What's Omi ？

Omi (pronounced /ˈomɪ/) is cross-frameworks framework base on Web Component, you can also use omio compatible IE8+ with the same grammar. One framework, Mobile & desktop & mini program.

<em> Omi looks really neat!<br> </em>
　　　　— [Jason Miller (Creator of Preact)](https://twitter.com/_developit/)

<em> I really like the trend towards "frameworks" that:<br><br>"export default class WeElement extends HTMLElement {..}"<br> <br>This one, Omi, is from Tencent.</em>       
　　　　— [Dion Almaer](https://twitter.com/dalmaer/)

## Add Omi in One Minute

```jsx {8-11}
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
  data = {
    count: 1
  }

  static css = `
    span{
        color: red;
    }`

  sub = () => {
    this.data.count--
    this.update()
  }

  add = () => {
    this.data.count++
    this.update()
  }

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.data.count}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
})

render(<my-counter />, 'body')
```

You can also use `my-counter` tag directly in HTML：

```jsx
<body>
  <my-counter></my-counter>
</body>
```

Looking at the highlighted part above, you can style the components. For example, the scope of the span above is only within the components, and it does not pollute other components. So far you have successfully started Omi! You learned:

* Add **structure** for components, such as JSX writing structure above
* Add **behavior** to the component, such as the `onClick` binding event above
* Add **style** to the component, such as `static css` above
* Rendering components to body, of course, can also render components to any other component

## Stateless View & Store System

```jsx
import { define, render } from 'omi'

class Store {
  data = {
    count: 1
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
}

define('my-counter', _ => (
  <div>
    <button onClick={_.store.sub}>-</button>
    <span>{_.store.data.count}</span>
    <button onClick={_.store.add}>+</button>
  </div>
), {
    use: ['count'], 
    //or using useSelf, useSelf will update self only, exclude children components
    //useSelf: ['count'], 
    css: `span { color: red; }`,
    installed() {
      console.log('installed')
    }
  })

render(<my-counter />, 'body', new Store)
```

Getting started, Congratulations!
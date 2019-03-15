## What's Omi ？

Omi (pronounced /ˈomɪ/) is next front end framework base on Web Component. One framework. Mobile & desktop & mini program.

## Add Omi in One Minute

This page demonstrates using Omi **with no build tooling**:

```html
<script src="https://unpkg.com/omi"></script>
<script>
  const { define, WeElement, h, render } = Omi

  define('my-counter', class extends WeElement {
    install() {
      this.data.count = 1
      this.sub = this.sub.bind(this)
      this.add = this.add.bind(this)
    }

    sub() {
      this.data.count--
      this.update()
    }

    add() {
      this.data.count++
      this.update()
    }

    render() {
      return h(
        'div',
        null,
        h(
          'button',
          { onClick: this.sub },
          '-'
        ),
        h(
          'span',
          null,
          this.data.count
        ),
        h(
          'button',
          { onClick: this.add },
          '+'
        )
      )
    }
  })

  render(h('my-counter'), 'body')
</script>
```

You can also use `like-button` tag directly in HTML：

```jsx
<body>
  <my-counter></my-counter>
</body>
```

- [Online Demo!](https://tencent.github.io/omi/assets/omi.html)

The HTML structure is written in hyperscript and JS is written in ES5. You can use JSX and ES2015 + instead.


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

Looking at the highlighted part above, you can style the components. For example, the scope of the span above is only within the components, and it does not pollute other components. So far you have successfully started Omi! You learned:

* Add ** structure ** for components, such as JSX writing structure above
* Add ** behavior ** to the component, such as the `onClick'binding event above
* Add ** style ** to the component, such as `static css'above`
* Rendering components to body, of course, can also render components to any other component



Congratulations!
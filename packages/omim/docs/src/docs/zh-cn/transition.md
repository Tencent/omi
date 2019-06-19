## Transition

Transition & Transition Group. 很容易运动一个或者一堆 dom 元素，提供优雅的进入或者离开过渡动画。

## Usage

* `<m-transition></m-transition>`
* `<m-transition-group></m-transition-group>`

## 案例

```jsx
import { define, WeElement, render, h } from 'omi'
import 'omim/transition'
import 'omim/transition-group'

define('my-app', class extends WeElement {

  static css = `
  .item-leave-to, .item-enter, .item-appear {
    opacity: 0;
    transform: translateX(15px);
  }

  .item-leave-active, .item-enter-active,.item-appear-active {
    transition: all 500ms ease-in;
  }`

  _id = 0

  items = [
    { _id: this._id++, text: 'Learn omi' },
    { _id: this._id++, text: 'Learn omim' },
    { _id: this._id++, text: 'Learn transition' },
    { _id: this._id++, text: 'Learn transition group' },
  ]

  toggle = () => {
    this.removed = false
    this.show = !this.show
    this.update()
  }

  onRemoved = () => {
    this.removed = true
  }

  show = true

  removed = false

  render() {
    const items = this.items
    return (
      <div style={{ marginTop: '2rem' }}>

        <h1>Transition</h1>
        <m-transition onRemoved={this.onRemoved} name="item" appear removable removed={this.removed} show={this.show}>
          <p>Hello transition</p>
        </m-transition>
        <br />
        <button onclick={this.toggle}>Toggle</button>

        <h1>Transition Group</h1>
        <ul>
          <m-transition-group name="item" appear delay={200}>
            {items.map(({ _id, text }) =>
              <li key={_id}>
                <button
                  onClick={() => {
                    this.items = items.filter(item => item._id !== _id)
                    this.update()
                  }}>
                  &times;
                </button> {text}
              </li>
            )}
          </m-transition-group>
        </ul>
        <button
          onClick={() => {
            const text = prompt('Enter some text');
            if (text) {
              this.items.push({ _id: this._id++, text })
              this.update()
            }
          }}
        >
          Add Item
      </button>
      </div>
    )

  }
})
render(<my-app />, 'body')
```

import { tag, WeElement, render, h } from 'omi'

@tag('my-element')
class MyElement extends WeElement {
  static css = `
    ::slotted(*) {
      border: 1px solid #07c160;
      padding: 6px;
    }`

  render() {
    return (
      <div>
        <slot></slot>
      </div>
    )
  }
}

render((
  <my-element>
    <p>One</p>
    <p>Two</p>
  </my-element>
), 'body')
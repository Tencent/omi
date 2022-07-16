@tag('my-element')
class extends WeElement {
  static css = `
    ::slotted(*) {
      border: 1px solid blue;
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

render(<my-element><p>One With</p><p>Two</p></my-element>, 'body')
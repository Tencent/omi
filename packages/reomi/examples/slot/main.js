import { define, render, WeElement } from '../../src/omi'

define('fancy-tabs', class extends WeElement {
  static noSlot = true

  render() {
    return [
      <div id="tabs">
        <slot id="tabsSlot" name="title" />
      </div>,
      <div id="panels">
        <slot id="panelsSlot" />
      </div>,
      <div>Show me only when noSlot is true!</div>
    ]
  }
})

define('my-app', class extends WeElement {
  render() {
    return (
      <div>
        <fancy-tabs>
          <button slot="title">Title</button>
          <button slot="title" selected>
            Title 2
          </button>
          <button slot="title">Title 3</button>
          <section>content panel 1</section>
          <section>content panel 2</section>
          <section>content panel 3</section>
        </fancy-tabs>
      </div>
    )
  }
})

render(<my-app />, 'body')

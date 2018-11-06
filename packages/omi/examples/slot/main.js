import { tag, render, WeElement } from '../../src/omi'

@tag('fancy-tabs')
class HelloElement extends WeElement {
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
}

@tag('my-app')
class MyApp extends WeElement {
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
}

render(<my-app />, 'body')

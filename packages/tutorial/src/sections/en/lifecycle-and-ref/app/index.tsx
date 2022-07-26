import { tag, render, h, WeElement } from 'omi'

@tag('hello-omi')
class HelloOmi extends WeElement {
  h1: HTMLElement

  installed() {
    this.h1.textContent = 'installed!'
  }

  render(props) {
    return (
      <div id="app">
        <h1 ref={e => this.h1 = e}>Can't see me!</h1>
      </div>
    )
  }
}

render(<hello-omi />, 'body')
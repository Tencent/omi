import { tag, WeElement, h, render } from 'omi'
import './modal'

@tag('transition-demo')
export default class TransitionDemo extends WeElement {
  showModal = false

  render() {
    return (
      <div id="app">
        <button onClick={() => { this.showModal = true; this.update() }}>Show Modal</button>
        <o-modal show={this.showModal} onClose={() => { this.showModal = false; this.update() }} >
          <h3 slot="header">custom header</h3>
          <p slot="body">custom body</p>
        </o-modal >
      </div >
    )
  }
}


render(<transition-demo></transition-demo>, 'body', {
  ignoreAttrs: true
})

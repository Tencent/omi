import { tag, Component, h, render, signal } from 'omi'
import './modal'

const showModal = signal(false)

@tag('transition-demo')
export default class TransitionDemo extends Component {
  render() {
    return (
      <div id="app">
        <button onClick={() => { showModal.value = true }}>Show Modal</button>
        <o-modal show={showModal.value} onClose={() => { showModal.value = false }} >
          <h3 slot="header">custom header</h3>
          <p slot="body">custom body</p>
        </o-modal >
      </div >
    )
  }
}


render(<transition-demo></transition-demo>, 'body')

import { render, signal, tag, Component, h } from '@/index'
import 'omi-transition'

const show = signal(true)

@tag('transition-demo')
class TransitionDemo extends Component {
  static css = `
    .fade-leave-to,
    .fade-enter-from {
      opacity: 0;
      transform: translateX(15px);
    }

    .fade-leave-active,
    .fade-enter-active {
      transition: all 500ms ease-in;
    }`

  render() {
    return (
      <>
        <button onClick={() => show.value = !show.value}>toggle</button>
        <o-transition show={show.value} name="fade">
          <h4>OMI</h4>
        </o-transition>
        <div>abc</div>
      </>

    )
  }
}

render(<transition-demo />, document.body)
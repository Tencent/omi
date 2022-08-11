import { tag, render, h, WeElement } from 'omi'
import Transition from '@omiu/transition'

@tag('my-app')
class MyApp extends WeElement {
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

  show = true
  appear = true
  list = ['ItemA', 'ItemB', 'ItemC', 'ItemD', 'ItemE']

  transition: Transition

  toggle = () => {
    this.show = true
    this.appear = !this.appear
    this.update()
    this.transition.toggle()
  }

  onAfterLeave = () => {
    this.show = false
    this.update()
  }

  render() {
    return (
      <>
        <button onClick={this.toggle}>Toggle</button>

        <o-transition onAfterLeave={this.onAfterLeave} ref={e => this.transition = e} appear name="fade">
          {this.show && <h4>OMI</h4>}
        </o-transition>

        <ul>
          {this.list.map((item, index) => (
            <o-transition
              appear={this.appear}
              disappear={!this.appear}
              name='fade'
              delay={(index + 1) * 300}>
              <li>{item}</li>
            </o-transition>
          ))}
        </ul>
      </>
    )
  }
}

render(<my-app />, 'body')
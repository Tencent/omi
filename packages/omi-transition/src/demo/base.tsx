import { tag, render, h, Component } from 'omi'
// 需要导入 Transition 组件
import '../index'

@tag('my-app')
class MyApp extends Component {
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

  toggle = () => {
    this.show = !this.show
    this.update()
  }

  onAfterLeave = () => {
    console.log('onAfterLeave')
  }

  render() {
    return (
      <>
        <button onClick={this.toggle}>Toggle</button>
        <h4 show={this.show}
          o-transition={{
            name: 'fade',
            afterLeave: this.onAfterLeave
          }}
        >OMI</h4>
        <div>Bottom</div>
      </>
    )
  }
}

render(<my-app />, 'body')
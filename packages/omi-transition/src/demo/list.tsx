import { tag, render, h, Component } from 'omi'
// 需要导入 Transition 组件
import '../index'
// 只写这行会被 tree shhaking 掉
import { Transition } from '../index'

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
  list = ['ItemA', 'ItemB', 'ItemC', 'ItemD', 'ItemE']

  transition: Transition | undefined

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
        <ul>
          {this.list.map((item, index) => (
            <o-transition
              show={this.show}
              name='fade'
              delay={(index + 1) * 300}>
              <li>{item}</li>
            </o-transition>
          ))}
        </ul>

        <div>Bottom</div>
      </>
    )
  }
}

render(<my-app />, 'body')
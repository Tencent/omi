import { render, tag, Component, h, bind } from '@/index'

@tag('counter-demo')
class CounterDemo extends Component {
  count: number = 0

  static css = 'span { color: red; }'

  @bind
  sub() {
    this.count--
    this.update()
  }
  @bind
  add() {
    this.count++
    this.update()
  }

  render() {
    return (
      <>
        <button onClick={this.sub}>-</button>
        <span>{this.count}</span>
        <button onClick={this.add}>+</button>
      </>
    )
  }
}

render(<counter-demo />, document.body)